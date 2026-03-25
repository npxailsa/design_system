import{j as e}from"./iframe-aa2a5pq5.js";import{useMDXComponents as o}from"./index-D2FXIwOD.js";import{M as t,C as a,a as s}from"./blocks-CZEK8BNN.js";import{L as r,W as c,a as d,A as h,S as p,b as g}from"./Label.stories-BRenrctN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BJP0e1-q.js";import"./Person-lz17t18C.js";import"./createSvgIcon-BdegFbVS.js";import"./KeyboardArrowDown-DpT-m_5A.js";import"./DocsTemplate-Bv-Q1WeE.js";import"./Mail-B2kBkvzL.js";function l(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:r,title:"Foundations/Label"}),`
`,e.jsx(n.h1,{id:"label",children:"Label"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Label"})," component is a core building block of the design system, used to display text with optional icons and dropdown split functionality. It is designed to be highly systematic, with 120 possible variants based on size, weight, alignment, and state."]}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"We use the following tokens to render our labels:"}),`
`,e.jsx(n.h3,{id:"core-tokens",children:"Core Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description |
| :--- | :--- |
| `,e.jsx(n.code,{children:"--label-text-color"}),` | Primary text color |
| `,e.jsx(n.code,{children:"--label-font-family"}),` | Font family |
| `,e.jsx(n.code,{children:"--label-icon-color"}),` | Primary icon color |
| `,e.jsx(n.code,{children:"--label-divider-color"}),` | Dropdown divider color |
| `,e.jsx(n.code,{children:"--label-letter-spacing"})," | Global letter spacing |"]}),`
`,e.jsx(n.h3,{id:"size-tokens-font-size--line-height--gap",children:"Size Tokens (Font Size / Line Height / Gap)"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description |
| :--- | :--- |
| `,e.jsx(n.code,{children:"--label-size-large"}),` | Large font size |
| `,e.jsx(n.code,{children:"--label-size-default"}),` | Default font size |
| `,e.jsx(n.code,{children:"--label-size-small"}),` | Small font size |
| `,e.jsx(n.code,{children:"--label-size-x-small"}),` | X-Small font size |
| `,e.jsx(n.code,{children:"--label-size-2x-small"}),` | 2X-Small font size |
| `,e.jsx(n.code,{children:"--label-line-height-large"}),` | Large line height |
| `,e.jsx(n.code,{children:"--label-line-height-default"}),` | Default line height |
| `,e.jsx(n.code,{children:"--label-line-height-small"}),` | Small line height |
| `,e.jsx(n.code,{children:"--label-line-height-x-small"}),` | X-Small line height |
| `,e.jsx(n.code,{children:"--label-line-height-2x-small"}),` | 2X-Small line height |
| `,e.jsx(n.code,{children:"--label-gap-large"}),` | Large gap between icons/text |
| `,e.jsx(n.code,{children:"--label-gap-default"}),` | Default gap between icons/text |
| `,e.jsx(n.code,{children:"--label-gap-small"}),` | Small gap between icons/text |
| `,e.jsx(n.code,{children:"--label-gap-x-small"}),` | X-Small gap between icons/text |
| `,e.jsx(n.code,{children:"--label-gap-2x-small"})," | 2X-Small gap between icons/text |"]}),`
`,e.jsx(n.h3,{id:"weight-tokens",children:"Weight Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description |
| :--- | :--- |
| `,e.jsx(n.code,{children:"--label-weight-bold"}),` | Bold font weight |
| `,e.jsx(n.code,{children:"--label-weight-medium"}),` | Medium font weight |
| `,e.jsx(n.code,{children:"--label-weight-light"}),` | Light font weight |
| `,e.jsx(n.code,{children:"--label-weight-thin"})," | Thin font weight |"]}),`
`,e.jsx(n.h3,{id:"dropdown-specific-tokens",children:"Dropdown Specific Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description |
| :--- | :--- |
| `,e.jsx(n.code,{children:"--label-dropdown-split-width"}),` | Divider width |
| `,e.jsx(n.code,{children:"--label-dropdown-split-opacity"}),` | Divider opacity |
| `,e.jsx(n.code,{children:"--label-dropdown-chevron-opacity"}),` | Chevron icon opacity |
| `,e.jsx(n.code,{children:"--label-dropdown-split-gap"}),` | Gap within dropdown split |
| `,e.jsx(n.code,{children:"--label-dropdown-padding-left"})," | Padding left for split section |"]}),`
`,e.jsx(n.h2,{id:"principles",children:"Principles"}),`
`,e.jsx(n.p,{children:"Follow these common design principles by using labels in a cohesive, useful, and legible way."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Design for universal understanding"}),`
Labels should be clear, concise, and clearly describe the content or action they relate to.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Balance simplicity and detail to create legibility"}),`
Craft labels that use short, simple words, whilst containing enough context to properly identify the associated action or content.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Maintain visual harmony"}),`
Ensure labels work together as a cohesive system by adhering to consistent size, shape, and alignment guidelines across the entire interface.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Use labels intentionally"}),`
Labels provide crucial context and hierarchy to UI elements. Avoid unnecessary labels that repeat information clearly implied by icons or surrounding context.`]}),`
`,e.jsx(n.h2,{id:"using-the-component",children:"Using the Component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Label } from './Label';
import PersonIcon from '@mui/icons-material/Person';

const MyComponent = () => (
  <Label size="default" weight="bold" leadingIcon={PersonIcon}>
    Example Label
  </Label>
);
`})}),`
`,e.jsx(n.p,{children:"The component accepts the following props:"}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"visual-style",children:"Visual Style"}),`
`,e.jsx(n.p,{children:"Labels support different visual weights, dropdown variations, and alignments. Ensure appropriate contrast ratios when switching between brands."}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"dropdown-variations",children:"Dropdown Variations"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"do",children:"Do"}),`
`,e.jsx(n.p,{children:"Use systematic weights (bold, medium, light, thin) for consistent hierarchy."}),`
`,e.jsx(n.h3,{id:"dont",children:"Don't"}),`
`,e.jsx(n.p,{children:"Overwrite internal component styles directly; use the token system. Avoid creating new custom weights or hardcoding pixel sizes."}),`
`,e.jsx(n.h2,{id:"size-and-spacing",children:"Size and spacing"}),`
`,e.jsxs(n.p,{children:["The Label component supports multiple sizes. Use the ",e.jsx(n.code,{children:"size"})," prop to ensure consistent scaling alongside other components."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.p,{children:"This section showcases the systematic application of variants across all 5 sizes, 4 weights, 3 alignments, and 2 dropdown states."}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h2,{id:"contribution",children:"Contribution"}),`
`,e.jsx(n.p,{children:"When proposing updates or new properties for the Label component, consider the following:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Does the proposed change align with existing typography scales?"}),`
`,e.jsx(n.li,{children:"Does it maintain backward compatibility with our systematic sizing approach?"}),`
`]}),`
`,e.jsx(n.p,{children:"To contribute a new variation, please bring it to our Biweekly Design System meeting for review with the whole team."})]})}function L(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{L as default};
