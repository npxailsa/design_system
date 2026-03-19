import{j as e,M as a,C as t,a as l}from"./iframe-BQzJWzAk.js";import{useMDXComponents as o}from"./index-Ca-U0yG_.js";import{L as r,D as d,S as c,W as h,a as x,A as g,b as p}from"./Label.stories-XzPGkNse.js";import"./preload-helper-Dp1pzeXC.js";import"./Person-5dIKtMxP.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:r,title:"Foundations/Label"}),`
`,e.jsx(n.h1,{id:"label",children:"Label"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Label"})," component is a core building block of the design system, used to display text with optional icons and dropdown split functionality. It is designed to be highly systematic, with 120 possible variants based on size, weight, alignment, and state."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Label } from './Label';
import PersonIcon from '@mui/icons-material/Person';

const MyComponent = () => (
  <Label size="default" weight="bold" leadingIcon={PersonIcon}>
    Example Label
  </Label>
);
`})}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(n.p,{children:"The component accepts the following props:"}),`
`,e.jsx(t,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(l,{of:d}),`
`,e.jsx(n.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsx(l,{of:c}),`
`,e.jsx(n.h3,{id:"weights",children:"Weights"}),`
`,e.jsx(l,{of:h}),`
`,e.jsx(n.h3,{id:"with-dropdown",children:"With Dropdown"}),`
`,e.jsx(l,{of:x}),`
`,e.jsx(n.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsx(l,{of:g}),`
`,e.jsx(n.h2,{id:"systematic-variants",children:"Systematic Variants"}),`
`,e.jsx(n.p,{children:"This section showcases the systematic application of variants across all 5 sizes, 4 weights, 3 alignments, and 2 dropdown states."}),`
`,e.jsx(n.h3,{id:"full-matrix-120-variants",children:"Full Matrix (120 Variants)"}),`
`,e.jsx(l,{of:p}),`
`,e.jsx(n.h2,{id:"design-system-integration",children:"Design System Integration"}),`
`,e.jsx(n.p,{children:"The component is fully integrated with the NPX Design System token system."}),`
`,e.jsx(n.h3,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsxs(n.p,{children:["The component uses the following design tokens for styling, which are defined in ",e.jsx(n.code,{children:"src/styles/tokens.css"}),":"]}),`
`,e.jsx(n.h4,{id:"core-tokens",children:"Core Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description | Value |
| :--- | :--- | :--- |
| `,e.jsx(n.code,{children:"--label-text-color"})," | Primary text color | ",e.jsx(n.code,{children:"var(--brand-text-main)"}),` |
| `,e.jsx(n.code,{children:"--label-font-family"})," | Font family | ",e.jsx(n.code,{children:"var(--brand-font-primary)"}),` |
| `,e.jsx(n.code,{children:"--label-icon-color"})," | Primary icon color | ",e.jsx(n.code,{children:"var(--brand-icon-main)"}),` |
| `,e.jsx(n.code,{children:"--label-divider-color"})," | Dropdown divider color | ",e.jsx(n.code,{children:"var(--brand-border-main)"}),` |
| `,e.jsx(n.code,{children:"--label-letter-spacing"})," | Global letter spacing | ",e.jsx(n.code,{children:"var(--global-type-letter-spacing-primary-label)"})," |"]}),`
`,e.jsx(n.h4,{id:"size-tokens-font-size--line-height--gap",children:"Size Tokens (Font Size / Line Height / Gap)"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description | Value |
| :--- | :--- | :--- |
| `,e.jsx(n.code,{children:"--label-size-large"})," | Large font size | ",e.jsx(n.code,{children:"var(--global-type-size-primary-label-lg)"}),` |
| `,e.jsx(n.code,{children:"--label-size-default"})," | Default font size | ",e.jsx(n.code,{children:"var(--global-type-size-primary-label)"}),` |
| `,e.jsx(n.code,{children:"--label-size-small"})," | Small font size | ",e.jsx(n.code,{children:"var(--global-type-size-primary-label-sm)"}),` |
| `,e.jsx(n.code,{children:"--label-size-x-small"})," | X-Small font size | ",e.jsx(n.code,{children:"var(--global-type-size-primary-label-xs)"}),` |
| `,e.jsx(n.code,{children:"--label-size-2x-small"})," | 2X-Small font size | ",e.jsx(n.code,{children:"var(--global-type-size-primary-label-xxs)"}),` |
| `,e.jsx(n.code,{children:"--label-line-height-large"})," | Large line height | ",e.jsx(n.code,{children:"var(--global-type-line-height-label-lg)"}),` |
| `,e.jsx(n.code,{children:"--label-line-height-default"})," | Default line height | ",e.jsx(n.code,{children:"var(--global-type-line-height-label)"}),` |
| `,e.jsx(n.code,{children:"--label-line-height-small"})," | Small line height | ",e.jsx(n.code,{children:"var(--global-type-line-height-label-sm)"}),` |
| `,e.jsx(n.code,{children:"--label-line-height-x-small"})," | X-Small line height | ",e.jsx(n.code,{children:"var(--global-type-line-height-label-xs)"}),` |
| `,e.jsx(n.code,{children:"--label-line-height-2x-small"})," | 2X-Small line height | ",e.jsx(n.code,{children:"var(--global-type-line-height-label-xxs)"}),` |
| `,e.jsx(n.code,{children:"--label-gap-large"})," | Large gap between icons/text | ",e.jsx(n.code,{children:"var(--global-spacing-sizing-8px)"}),` |
| `,e.jsx(n.code,{children:"--label-gap-default"})," | Default gap between icons/text | ",e.jsx(n.code,{children:"var(--global-spacing-sizing-6px)"}),` |
| `,e.jsx(n.code,{children:"--label-gap-small"})," | Small gap between icons/text | ",e.jsx(n.code,{children:"var(--global-spacing-sizing-4px)"}),` |
| `,e.jsx(n.code,{children:"--label-gap-x-small"})," | X-Small gap between icons/text | ",e.jsx(n.code,{children:"var(--global-spacing-sizing-4px)"}),` |
| `,e.jsx(n.code,{children:"--label-gap-2x-small"})," | 2X-Small gap between icons/text | ",e.jsx(n.code,{children:"var(--global-spacing-sizing-2px)"})," |"]}),`
`,e.jsx(n.h4,{id:"weight-tokens",children:"Weight Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description | Value |
| :--- | :--- | :--- |
| `,e.jsx(n.code,{children:"--label-weight-bold"})," | Bold font weight | ",e.jsx(n.code,{children:"var(--global-type-weight-bold)"}),` |
| `,e.jsx(n.code,{children:"--label-weight-medium"})," | Medium font weight | ",e.jsx(n.code,{children:"var(--global-type-weight-medium)"}),` |
| `,e.jsx(n.code,{children:"--label-weight-light"})," | Light font weight | ",e.jsx(n.code,{children:"var(--global-type-weight-light)"}),` |
| `,e.jsx(n.code,{children:"--label-weight-thin"})," | Thin font weight | ",e.jsx(n.code,{children:"var(--global-type-weight-thin)"})," |"]}),`
`,e.jsx(n.h4,{id:"dropdown-specific-tokens",children:"Dropdown Specific Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description | Value |
| :--- | :--- | :--- |
| `,e.jsx(n.code,{children:"--label-dropdown-split-width"})," | Divider width | ",e.jsx(n.code,{children:"var(--global-spacing-stroke-1px)"}),` |
| `,e.jsx(n.code,{children:"--label-dropdown-split-opacity"})," | Divider opacity | ",e.jsx(n.code,{children:"0.5"}),` |
| `,e.jsx(n.code,{children:"--label-dropdown-chevron-opacity"})," | Chevron icon opacity | ",e.jsx(n.code,{children:"0.6"}),` |
| `,e.jsx(n.code,{children:"--label-dropdown-split-gap"})," | Gap within dropdown split | ",e.jsx(n.code,{children:"var(--global-spacing-sizing-4px)"}),` |
| `,e.jsx(n.code,{children:"--label-dropdown-padding-left"})," | Padding left for split section | ",e.jsx(n.code,{children:"var(--global-spacing-sizing-2px)"})," |"]}),`
`,e.jsx(n.h2,{id:"guidelines",children:"Guidelines"}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"size"})," prop to ensure consistent scaling."]}),`
`,e.jsx(n.li,{children:"Ensure appropriate contrast ratios when switching between brands."}),`
`,e.jsx(n.li,{children:"Use component tokens for overrides rather than hardcoded values."}),`
`]}),`
`,e.jsx(n.h3,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure labels have sufficient color contrast (WCAG 2.1 AA)."}),`
`,e.jsx(n.li,{children:"If an icon carries unique meaning, ensure appropriate ARIA labels are provided via children or parent components."}),`
`]}),`
`,e.jsx(n.h3,{id:"dos-and-donts",children:"Dos and Don'ts"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Do:"})," Use systematic weights (bold, medium, light, thin) for consistent hierarchy."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Don't:"})," Overwrite internal component styles directly; use the token system."]}),`
`]})]})}function u(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{u as default};
