import{j as e}from"./iframe-3PU36Vwi.js";import{useMDXComponents as t}from"./index-BWa7V1ip.js";import{M as c}from"./blocks-DQmNyiXO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CmGNER89.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(c,{title:"Documentation/DocsTemplate/Usage Guide"}),`
`,e.jsx(n.h1,{id:"docstemplate",children:"DocsTemplate"}),`
`,e.jsx(n.p,{children:"A reusable documentation page template system for the NPX Design System. Use it to create consistent, branded documentation pages for components, tokens, and guidelines."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"DocsTemplate"})," is a composable component system. The root wrapper provides the page layout (white background, centered 944px column), and each sub-component handles a specific documentation pattern: headers, sections, token tables, principle cards, code blocks, Do/Don't comparisons, and more."]}),`
`,e.jsx(n.h2,{id:"sub-components",children:"Sub-components"}),`
`,e.jsxs(n.p,{children:[`| Sub-component | Purpose |
|---|---|
| `,e.jsx(n.code,{children:"DocsTemplate.Header"}),` | NPX logo + page title + subtitle |
| `,e.jsx(n.code,{children:"DocsTemplate.Section"}),` | H1-level section with title, optional subtitle, and children |
| `,e.jsx(n.code,{children:"DocsTemplate.Subsection"}),` | H4-level subsection with title and children |
| `,e.jsx(n.code,{children:"DocsTemplate.BodyText"})," | Styled paragraph text (",e.jsx(n.code,{children:"default"})," or ",e.jsx(n.code,{children:"small"}),` size) |
| `,e.jsx(n.code,{children:"DocsTemplate.TokenTable"}),` | Blue-bordered card showing design token name/description rows |
| `,e.jsx(n.code,{children:"DocsTemplate.Principles"})," | Container for ",e.jsx(n.code,{children:"PrincipleCard"}),` items |
| `,e.jsx(n.code,{children:"DocsTemplate.PrincipleCard"}),` | Numbered principle with title and body text |
| `,e.jsx(n.code,{children:"DocsTemplate.CodeBlock"}),` | Gray background code snippet block |
| `,e.jsx(n.code,{children:"DocsTemplate.DosDonts"}),` | Side-by-side Do/Don't comparison cards |
| `,e.jsx(n.code,{children:"DocsTemplate.BulletList"}),` | Unordered or ordered list with optional link styling |
| `,e.jsx(n.code,{children:"DocsTemplate.RelatedLinks"}),` | Section with external reference links |
| `,e.jsx(n.code,{children:"DocsTemplate.IconGallery"}),` | Grid of icons with labels |
| `,e.jsx(n.code,{children:"DocsTemplate.SizeDemo"}),` | Rows demonstrating icon/component sizes |
| `,e.jsx(n.code,{children:"DocsTemplate.Footer"})," | Separator line + copyright text |"]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DocsTemplate } from './components/DocsTemplate';

const MyDocsPage = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Component Name"
      subtitle="Short description of the component"
    />

    <DocsTemplate.BodyText>
      Introductory paragraph about the component.
    </DocsTemplate.BodyText>

    <DocsTemplate.TokenTable
      title="Design Tokens"
      description="Tokens used by this component:"
      tokens={[
        { name: '--example-color', description: 'Primary colour' },
        { name: '--example-size', description: 'Default size' },
      ]}
    />

    <DocsTemplate.Section title="Guidelines">
      <DocsTemplate.BodyText>
        Guideline content goes here.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);
`})}),`
`,e.jsx(n.h2,{id:"design-tokens-used",children:"Design tokens used"}),`
`,e.jsx(n.p,{children:"The template relies on existing design system tokens. Key tokens include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Typography"}),": ",e.jsx(n.code,{children:"--font-family-primary"})," (F37 Ginger Pro), ",e.jsx(n.code,{children:"--font-family-secondary"})," (Calibri)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Colours"}),": ",e.jsx(n.code,{children:"--global-color-base-black"}),", ",e.jsx(n.code,{children:"--color-primary-blue-blue"}),", ",e.jsx(n.code,{children:"--color-primary-blue-gray-blue-gray"}),", ",e.jsx(n.code,{children:"--color-primary-seafoam-seafoam-100"}),", ",e.jsx(n.code,{children:"--global-color-status-red"}),", ",e.jsx(n.code,{children:"--global-color-status-dark-green"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Spacing"}),": ",e.jsx(n.code,{children:"--global-spacing-sizing-*"}),", ",e.jsx(n.code,{children:"--global-spacing-radius-12px"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Backgrounds"}),": ",e.jsx(n.code,{children:"--color-primary-blue-blue-50"})," (principle cards, token tables), ",e.jsx(n.code,{children:"--color-additional-gray-light-light-gray-default"})," (code blocks)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"reference-implementation",children:"Reference implementation"}),`
`,e.jsxs(n.p,{children:["See the ",e.jsx(n.strong,{children:"Iconography"})," story under ",e.jsx(n.code,{children:"Documentation/DocsTemplate"})," for a complete example of all sub-components working together to produce a full documentation page."]})]})}function p(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{p as default};
