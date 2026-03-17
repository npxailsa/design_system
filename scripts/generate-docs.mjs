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

The component uses the following design tokens for styling, which are defined in \`src/styles/tokens.css\`:

| Token Name | Description | Default Value (Penta) |
| :--- | :--- | :--- |
| \`--${componentName.toLowerCase()}-text-color\` | Primary text color | \`var(--brand-text-main)\` |
| \`--${componentName.toLowerCase()}-font-family\` | Font family | \`var(--brand-font-primary)\` |
| \`--${componentName.toLowerCase()}-size-default\` | Default font size | \`var(--global-type-size-primary-label)\` |
| \`--${componentName.toLowerCase()}-weight-bold\` | Bold font weight | \`var(--global-type-weight-bold)\` |
| \`--${componentName.toLowerCase()}-divider-color\` | Dropdown divider color | \`var(--brand-border-main)\` |

## Guidelines

### Best Practices
- Use component or brand design tokens for all styling overrides. Always prefer tokens over hardcoded values.
- Maintain consistent spacing by using global spacing/sizing tokens (e.g., \`var(--global-spacing-sizing-8px)\`).
- Ensure appropriate color contrast ratios (WCAG 2.1 AA) when switching between brands.

### Accessibility
- Provide descriptive ARIA labels for functional components or decorative elements that carry meaning.
- All interactive components should be keyboard accessible and follow WAI-ARIA patterns.

### Dos and Don'ts
- **Do:** Use the \`size\` and \`weight\` props to maintain design system consistency.
- **Don't:** Override component styles with hardcoded pixel values; use the mapped CSS tokens instead.
- **Do:** Reference full token names in documentation for transparency and developer ease of use.
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
