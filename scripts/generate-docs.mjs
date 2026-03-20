import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COMPONENTS_DIR = path.resolve(__dirname, '../src/components');

/**
 * Capitalizes the first letter of a string.
 */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generates the MDX template for a component.
 */
function generateMDXTemplate(componentName) {
  return `import { Meta, Controls, Canvas, Story } from "@storybook/addon-docs/blocks";
import * as ${componentName}Stories from "./${componentName}.stories";

<Meta of={${componentName}Stories} title="Foundations/${componentName}" />

# ${componentName}

[Detailed overview of the ${componentName} component, its purpose, and key features.]

## Design Tokens

We use the following tokens to render our ${componentName.toLowerCase()}s:

| Token Name | Description |
| :--- | :--- |
| \`--${componentName.toLowerCase()}-text-color\` | Primary text color |

## Principles

Follow these common design principles by using ${componentName.toLowerCase()}s in a cohesive, useful, and legible way.

**Design for universal understanding**
[Explanation]

**Balance simplicity and detail to create legibility**
[Explanation]

**Maintain visual harmony**
[Explanation]

**Use ${componentName.toLowerCase()}s intentionally**
[Explanation]

## Using the Component

\`\`\`tsx
import { ${componentName} } from './${componentName}';

const MyComponent = () => (
  <${componentName} />
);
\`\`\`

The component accepts the following props:

<Controls />

## Visual Style

[Visual variations, filled/outline etc.]

### Do

[Best practices for visual style]

### Don't

[Anti-patterns for visual style]

## Size and spacing

[Size variants, padding rules]

<Canvas of={${componentName}Stories.Default} />

## Contribution

[Guidelines for adding or requesting new variations/elements.]
`;
}

/**
 * Scans the components directory and generates missing .mdx files.
 */
async function generateDocs() {
  console.log('Scanning components for missing documentation...');

  const components = fs.readdirSync(COMPONENTS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let generatedCount = 0;

  for (const componentName of components) {
    const componentDir = path.join(COMPONENTS_DIR, componentName);
    const mdxPath = path.join(componentDir, `${componentName}.mdx`);
    const storiesPath = path.join(componentDir, `${componentName}.stories.tsx`);
    const tsxPath = path.join(componentDir, `${componentName}.tsx`);

    // Only process if it's likely a React component (has .tsx)
    if (fs.existsSync(tsxPath)) {
      if (!fs.existsSync(mdxPath)) {
        console.log(`Generating documentation for: ${componentName}`);
        
        // Ensure stories file exists to avoid broken MDX
        if (!fs.existsSync(storiesPath)) {
            console.warn(`  Warning: ${componentName}.stories.tsx missing. MDX might require manual adjustment.`);
        }

        const template = generateMDXTemplate(componentName);
        fs.writeFileSync(mdxPath, template);
        generatedCount++;
      } else {
        // console.log(`Documentation already exists for: ${componentName}`);
      }
    }
  }

  console.log(`\nDocumentation generation complete. ${generatedCount} files created.`);
}

generateDocs().catch(err => {
  console.error('Error generating documentation:', err);
  process.exit(1);
});
