import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, fileURLToPath } from 'url';

const ROOT = resolve(fileURLToPath(import.meta.url), '..', '..');
const pkg = JSON.parse(readFileSync(`${ROOT}/package.json`, 'utf8'));

const rules = {
  _meta: { generated: new Date().toISOString() },
  package: { name: pkg.name, version: pkg.version },
  runtimeDependencies: pkg.dependencies,
  keyDevDependencies: {
    storybook: pkg.devDependencies.storybook,
    '@storybook/react': pkg.devDependencies['@storybook/react'],
    typescript: pkg.devDependencies.typescript,
    vite: pkg.devDependencies.vite,
  },
  mandatoryRules: [
    "Use TypeScript strict mode — no 'any' types",
    "All components must be functional React components (React.FC<Props>)",
    "Every component must use an MUI Material v7 primitive as its base",
    "All styles via CSS Modules referencing design tokens only — no hardcoded values",
    "Token files: src/styles/global_design_tokens.json (global), src/styles/brand_design_tokens.json (brand only), src/styles/tokens.css (CSS vars)",
    "global_design_tokens.json and brand_design_tokens.json must remain SEPARATE files — never merge",
    "New tokens go in global_design_tokens.json unless they are a brand colour or typeface",
    "Use --global-spacing-stroke-* for all borders, shadows, blurs",
    "Use --global-spacing-radius-* for all border radii",
    "Storybook minimum version: 10.2.17",
    "Documentation story must be listed FIRST in every component story file",
    "Every component change requires updating its *Docs.tsx documentation page",
    "Confirm with user before removing any Storybook addon"
  ],
  tokenFiles: {
    globalTokens: 'src/styles/global_design_tokens.json',
    brandTokens:  'src/styles/brand_design_tokens.json',
    cssVariables: 'src/styles/tokens.css',
  },
  generatedFiles: {
    componentManifest: 'gemini-context/component-manifest.json',
    codingStandards:   'gemini-context/coding-standards.md',
    implementationRules: 'gemini-context/implementation-rules.json',
  },
};

mkdirSync(`${ROOT}/gemini-context`, { recursive: true });
writeFileSync(`${ROOT}/gemini-context/implementation-rules.json`, JSON.stringify(rules, null, 2));
console.log('✅ implementation-rules.json written');
