#!/usr/bin/env node
/**
 * generate-figma-connect.mjs
 *
 * Scans src/components for every *.stories.tsx that has no matching .figma.tsx,
 * then scaffolds a Figma Code Connect file for each one.
 *
 * Usage:
 *   node scripts/generate-figma-connect.mjs          # generate missing files
 *   node scripts/generate-figma-connect.mjs --check  # exit 1 if any are missing (CI)
 *   node scripts/generate-figma-connect.mjs --force  # overwrite existing files
 *
 * After running, replace every `REPLACE_ME` URL with the real Figma link, then:
 *   npx figma connect publish --token=YOUR_TOKEN
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// ─── Config ──────────────────────────────────────────────────────────────────

const COMPONENTS_DIR = path.resolve(__dirname, '../src/components');

/** Story files that are NOT real components and should not get a .figma.tsx */
const SKIP_STORIES = new Set([
  'DocsTemplate',
  'BuildingBlocks', // umbrella story, not a component itself
]);

const FIGMA_PLACEHOLDER_URL =
  'https://www.figma.com/file/REPLACE_ME/NPX-Design-System?node-id=REPLACE_ME';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Walk a directory recursively, collecting files that match a predicate. */
function walkDir(dir, predicate, results = []) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full, predicate, results);
    } else if (entry.isFile() && predicate(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

/** Convert camelCase / hyphen-case / mixed to "Title Case With Spaces". */
function toFigmaLabel(propName) {
  return propName
    .replace(/([A-Z])/g, ' $1')   // camelCase → spaced
    .replace(/[-_]/g, ' ')        // hyphens / underscores → spaces
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, s => s.toUpperCase());
}

/** Convert an option string to PascalCase for the Figma enum key. */
function toPascalCase(str) {
  return str
    .split(/[-_\s]+/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
}

// ─── Story file parsing ───────────────────────────────────────────────────────

/** Extract the component name from a story source file. */
function extractComponentName(src, filePath) {
  // Prefer `component: ComponentName` in the meta object
  const m = src.match(/component\s*:\s*([A-Z][A-Za-z0-9]*)/);
  if (m) return m[1];
  // Fallback: filename without `.stories.tsx`
  return path.basename(filePath, '.stories.tsx');
}

/** Extract the Storybook title string from the meta object. */
function extractStoryTitle(src) {
  const m = src.match(/title\s*:\s*['"`]([^'"`]+)['"`]/);
  return m ? m[1] : null;
}

/**
 * Extract named (non-default) export identifiers from the story file.
 * These become the `examples` list in the Code Connect file.
 */
function extractNamedExports(src) {
  const matches = [...src.matchAll(/^export\s+(?:const|function)\s+([A-Z][A-Za-z0-9_]*)/gm)];
  return matches
    .map(m => m[1])
    .filter(name => name !== 'default');
}

/**
 * Parse `argTypes` to infer figma.* mapping types.
 * Returns an array of { name, figmaName, type, options? }.
 */
function parseArgTypes(src) {
  const props = [];

  // Capture the full argTypes block (handles nested braces up to depth 3)
  const argTypesMatch = src.match(/argTypes\s*:\s*\{([\s\S]*?)\},?\s*\n\}/);
  if (!argTypesMatch) return props;

  const block = argTypesMatch[1];

  // Each top-level key is a prop name
  // e.g.  variant: { control: 'select', options: ['a', 'b'] },
  const keyRegex = /\b(\w+)\s*:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
  let match;

  while ((match = keyRegex.exec(block)) !== null) {
    const propName = match[1];
    const body     = match[2];

    const figmaName = toFigmaLabel(propName);

    if (/control\s*:\s*['"`]text['"`]/.test(body)) {
      props.push({ name: propName, figmaName, type: 'string' });

    } else if (/control\s*:\s*['"`]boolean['"`]/.test(body)) {
      props.push({ name: propName, figmaName, type: 'boolean' });

    } else if (/control\s*:\s*['"`]color['"`]/.test(body)) {
      props.push({ name: propName, figmaName, type: 'string' });

    } else if (/control\s*:\s*['"`](?:select|radio|inline-radio)['"`]/.test(body)) {
      // Extract options array
      const optMatch = body.match(/options\s*:\s*\[([^\]]*)\]/);
      const options  = optMatch
        ? optMatch[1]
            .split(',')
            .map(o => o.trim().replace(/^['"`]|['"`]$/g, ''))
            .filter(Boolean)
        : [];
      props.push({ name: propName, figmaName, type: 'enum', options });

    } else if (/control\s*:\s*['"`]number['"`]/.test(body)) {
      props.push({ name: propName, figmaName, type: 'string' }); // numbers as strings in Figma

    }
    // Silently skip props with unknown control types
  }

  return props;
}

// ─── Code generation ──────────────────────────────────────────────────────────

/** Build the props block inside `parameters.design.props`. */
function buildPropsBlock(props) {
  if (!props.length) return '';

  const lines = props.map(prop => {
    if (prop.type === 'string') {
      return `        ${prop.name}: figma.string('${prop.figmaName}'),`;
    }
    if (prop.type === 'boolean') {
      return `        ${prop.name}: figma.boolean('${prop.figmaName}'),`;
    }
    if (prop.type === 'enum') {
      if (!prop.options.length) {
        return `        ${prop.name}: figma.enum('${prop.figmaName}', { /* add options */ }),`;
      }
      const enumLines = prop.options
        .map(opt => `          '${toPascalCase(opt)}': '${opt}'`)
        .join(',\n');
      return `        ${prop.name}: figma.enum('${prop.figmaName}', {\n${enumLines},\n        }),`;
    }
    return `        // ${prop.name}: figma.string('${prop.figmaName}'), // TODO: verify type`;
  });

  return `      props: {\n${lines.join('\n')}\n      },`;
}

/**
 * Choose up to 4 examples from the exported story names.
 * Prefers "Default" first, excludes docs-only exports.
 */
function pickExamples(namedExports) {
  const docExcludes = new Set(['Documentation', 'AllVariants', 'Playground']);
  const filtered    = namedExports.filter(n => !docExcludes.has(n));

  // Put Default first if it exists
  const ordered = [
    ...filtered.filter(n => n === 'Default'),
    ...filtered.filter(n => n !== 'Default'),
  ];

  return ordered.slice(0, 4);
}

/** Build stub example functions. */
function buildExampleFunctions(examples, componentName) {
  return examples
    .map(name => {
      const label = toFigmaLabel(name).replace(/\s+/g, ' ');
      return [
        `/** ${label} variant. */`,
        `export function ${name}() {`,
        `  return <${componentName} />;`,
        `}`,
      ].join('\n');
    })
    .join('\n\n');
}

/** Render the full .figma.tsx file content. */
function renderFigmaConnect(componentName, storyTitle, namedExports, props) {
  const examples   = pickExamples(namedExports);
  const propsBlock = buildPropsBlock(props);
  const exFuncs    = buildExampleFunctions(examples, componentName);

  const titleLine = storyTitle
    ? ` * Storybook path: "${storyTitle}"\n`
    : '';

  // Fallback: if no examples parsed, add a stub
  const exampleList = examples.length
    ? examples.join(', ')
    : `Default`;

  return `/**
 * Figma Code Connect — ${componentName}
${titleLine} *
 * SETUP: Replace the \`url\` with the real Figma component link:
 *   1. Open your Figma design system file.
 *   2. Right-click the ${componentName} component → "Copy link to selection".
 *   3. Paste it as the \`url\` value below.
 *
 * PUBLISH: npx figma connect publish --token=YOUR_FIGMA_TOKEN
 */
import figma from '@figma/code-connect';
import React from 'react';
import { ${componentName} } from './${componentName}';

export default {
  component: ${componentName},
  parameters: {
    design: {
      type: 'figma',
      url: '${FIGMA_PLACEHOLDER_URL}',
      examples: [${exampleList}],
${propsBlock}
    },
  },
};

${exFuncs}
`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const args   = process.argv.slice(2);
  const check  = args.includes('--check');
  const force  = args.includes('--force');

  const storyFiles = walkDir(
    COMPONENTS_DIR,
    name => name.endsWith('.stories.tsx'),
  );

  let created = 0;
  let skipped = 0;
  let missing = []; // used in --check mode

  for (const storyPath of storyFiles) {
    const dir       = path.dirname(storyPath);
    const storyBase = path.basename(storyPath, '.stories.tsx');

    if (SKIP_STORIES.has(storyBase)) continue;

    const figmaPath = path.join(dir, `${storyBase}.figma.tsx`);

    if (fs.existsSync(figmaPath) && !force) {
      skipped++;
      continue;
    }

    if (check) {
      // In check mode, just collect what's missing
      missing.push(path.relative(process.cwd(), figmaPath));
      continue;
    }

    const src           = fs.readFileSync(storyPath, 'utf-8');
    const componentName = extractComponentName(src, storyPath);
    const storyTitle    = extractStoryTitle(src);
    const namedExports  = extractNamedExports(src);
    const props         = parseArgTypes(src);

    const content = renderFigmaConnect(componentName, storyTitle, namedExports, props);

    fs.writeFileSync(figmaPath, content, 'utf-8');

    const rel = path.relative(process.cwd(), figmaPath);
    console.log(`  created  ${rel}`);
    created++;
  }

  if (check) {
    if (missing.length) {
      console.error(
        `\n❌  ${missing.length} component(s) are missing a .figma.tsx file:\n`,
      );
      missing.forEach(f => console.error(`   • ${f}`));
      console.error(
        '\nRun  node scripts/generate-figma-connect.mjs  to scaffold them.\n',
      );
      process.exit(1);
    } else {
      console.log('✅  All components have a .figma.tsx file.');
      process.exit(0);
    }
  }

  const summary = [
    created  ? `${created} file(s) created` : null,
    skipped  ? `${skipped} already existed (use --force to overwrite)` : null,
  ].filter(Boolean).join(', ');

  console.log(`\n✅  Figma Code Connect scaffold complete — ${summary || 'nothing to do'}.\n`);

  if (created > 0) {
    console.log('Next steps:');
    console.log('  1. Replace every REPLACE_ME URL with the real Figma component link');
    console.log('     (right-click the component in Figma → "Copy link to selection")');
    console.log('  2. Review and refine the auto-generated prop mappings');
    console.log('  3. Run: npx figma connect publish --token=YOUR_FIGMA_TOKEN\n');
  }
}

main().catch(err => {
  console.error('generate-figma-connect error:', err.message);
  process.exit(1);
});
