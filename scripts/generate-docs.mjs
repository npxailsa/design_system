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

## Usage

\`\`\`tsx
import { ${componentName} } from './${componentName}';

const MyComponent = () => (
  <${componentName} />
);
\`\`\`

## API

The component accepts the following props:

<Controls />

## Examples

### Default

<Canvas of={${componentName}Stories.Default} />

## Systematic Variants

This section showcases the systematic application of variants across sizes, weights, and states.

<Canvas of={${componentName}Stories.AllVariants} />

## Design System Integration

### Brand Comparison (Multi-Client)

Our design system supports multiple brands (Penta, Horizon). Below is a comparison of how the component renders across different brand themes.

<Canvas of={${componentName}Stories.BrandComparison} />

### Design Tokens

The component uses the following design tokens for styling:

| Token Name | Description | Default Value (Penta) |
| :--- | :--- | :--- |
| \`--${componentName.toLowerCase()}-text-color\` | Primary text color | \`var(--brand-text-main)\` |
| \`--${componentName.toLowerCase()}-font-family\` | Font family | \`var(--global-font-primary)\` |
| \`--${componentName.toLowerCase()}-size-default\` | Default font size | \`16px\` |
| \`--${componentName.toLowerCase()}-weight-bold\` | Bold font weight | \`700\` |
| \`--${componentName.toLowerCase()}-divider-color\` | Dropdown divider color | \`var(--brand-border-main)\` |

## Guidelines

### Best Practices
- Use component tokens for overrides rather than hardcoded values.
- Ensure appropriate contrast ratios when switching between brands.

### Accessibility
- [Describe accessibility considerations and features.]

### Dos and Don'ts
- **Do:** Use the \`size\` prop to ensure consistent scaling.
- **Don't:** Overwrite internal component styles directly; use the token system.
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
