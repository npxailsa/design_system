/**
 * generate-component-manifest.mjs
 *
 * Scans every *.stories.tsx file in src/ and extracts:
 *   - Storybook meta (title, component name)
 *   - argTypes (controls, descriptions, options, defaults)
 *   - default args
 *   - exported story names
 *
 * Writes the result to gemini-context/component-manifest.json
 *
 * Usage:
 *   node scripts/generate-component-manifest.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join, relative, resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(fileURLToPath(import.meta.url), '..', '..');
const SRC  = join(ROOT, 'src');
const OUT  = join(ROOT, 'gemini-context', 'component-manifest.json');

/* ── helpers ── */

function walk(dir, results = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, results);
    else if (entry.endsWith('.stories.tsx')) results.push(full);
  }
  return results;
}

/**
 * Regex-based extraction — no TS compiler needed.
 * Handles the patterns used in this repo's stories files.
 */
function extractMeta(src) {
  // title
  const titleMatch = src.match(/title\s*:\s*['"`]([^'"`]+)['"`]/);
  const title = titleMatch ? titleMatch[1] : null;

  // component name — look for `component: ComponentName`
  const compMatch = src.match(/component\s*:\s*([A-Za-z_$][A-Za-z0-9_$]*)/);
  const component = compMatch ? compMatch[1] : null;

  return { title, component };
}

/**
 * Extract argTypes block as a raw string, then parse each entry.
 *
 * Handles both shorthand  `propName: { ... }` and multi-line blocks.
 * Returns an object keyed by prop name with extracted metadata.
 */
function extractArgTypes(src) {
  // Find the argTypes block
  const atStart = src.indexOf('argTypes');
  if (atStart === -1) return {};

  // Walk forward to find the opening brace of the argTypes value
  let braceStart = src.indexOf('{', atStart);
  if (braceStart === -1) return {};

  // Balance braces to find the closing brace
  let depth = 0;
  let i = braceStart;
  while (i < src.length) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) break;
    }
    i++;
  }

  const block = src.slice(braceStart + 1, i);
  const result = {};

  // Split on top-level prop keys (lines that start with `propName:`)
  // We iterate over each named prop in the block
  const propRegex = /^\s{0,8}([A-Za-z_$][A-Za-z0-9_$]*)\s*:/gm;
  let match;
  const propPositions = [];

  while ((match = propRegex.exec(block)) !== null) {
    propPositions.push({ name: match[1], index: match.index });
  }

  for (let pi = 0; pi < propPositions.length; pi++) {
    const { name, index } = propPositions[pi];
    const nextIndex = propPositions[pi + 1]?.index ?? block.length;
    const slice = block.slice(index, nextIndex);

    const entry = {};

    // control type
    const ctrlMatch = slice.match(/control\s*:\s*['"`]([^'"`]+)['"`]/);
    if (ctrlMatch) entry.control = ctrlMatch[1];

    // control as object { type: '...' }
    const ctrlObjMatch = slice.match(/control\s*:\s*\{[^}]*type\s*:\s*['"`]([^'"`]+)['"`]/);
    if (ctrlObjMatch) entry.control = ctrlObjMatch[1];

    // options array
    const optsMatch = slice.match(/options\s*:\s*\[([^\]]+)\]/);
    if (optsMatch) {
      entry.options = optsMatch[1]
        .split(',')
        .map(s => s.trim().replace(/^['"`]|['"`]$/g, ''))
        .filter(Boolean);
    }

    // description
    const descMatch = slice.match(/description\s*:\s*['"`]([^'"`]+)['"`]/);
    if (descMatch) entry.description = descMatch[1];

    // defaultValue
    const defMatch = slice.match(/defaultValue\s*:\s*['"`]?([^,'\n}`]+)['"`]?/);
    if (defMatch) entry.defaultValue = defMatch[1].trim().replace(/^['"`]|['"`]$/g, '');

    result[name] = entry;
  }

  return result;
}

/**
 * Extract default args block.
 */
function extractDefaultArgs(src) {
  const argsStart = src.indexOf('\n  args:');
  if (argsStart === -1) return {};

  const braceStart = src.indexOf('{', argsStart);
  if (braceStart === -1) return {};

  let depth = 0, i = braceStart;
  while (i < src.length) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') { depth--; if (depth === 0) break; }
    i++;
  }

  const block = src.slice(braceStart + 1, i);
  const result = {};

  for (const line of block.split('\n')) {
    const m = line.match(/^\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*:\s*(.+?),?\s*$/);
    if (m) {
      result[m[1]] = m[2].replace(/^['"`]|['"`]$/g, '');
    }
  }

  return result;
}

/**
 * Extract exported story names (all `export const X` except `default`).
 */
function extractStoryNames(src) {
  const names = [];
  const re = /^export\s+const\s+([A-Za-z_$][A-Za-z0-9_$]*)\s*:/gm;
  let m;
  while ((m = re.exec(src)) !== null) {
    if (m[1] !== 'default') names.push(m[1]);
  }
  return names;
}

/* ── main ── */

const storyFiles = walk(SRC);
const manifest = {
  _meta: {
    generated: new Date().toISOString(),
    totalComponents: 0,
    source: 'npxailsa/design_system',
  },
  components: [],
};

for (const file of storyFiles) {
  const src = readFileSync(file, 'utf8');
  const relPath = relative(ROOT, file);

  const { title, component } = extractMeta(src);
  const argTypes   = extractArgTypes(src);
  const defaultArgs = extractDefaultArgs(src);
  const stories    = extractStoryNames(src);

  // Skip pure docs/utility stories with no argTypes
  if (!title) continue;

  manifest.components.push({
    file: relPath,
    title,
    component: component ?? null,
    stories,
    defaultArgs,
    argTypes,
  });
}

manifest._meta.totalComponents = manifest.components.length;

mkdirSync(join(ROOT, 'gemini-context'), { recursive: true });
writeFileSync(OUT, JSON.stringify(manifest, null, 2), 'utf8');

console.log(`✅ component-manifest.json written`);
console.log(`   Components: ${manifest._meta.totalComponents}`);
console.log(`   Output:     ${relative(ROOT, OUT)}`);
