import{j as e,M as r,C as l,a as s}from"./iframe-aEoKiTRh.js";import{useMDXComponents as o}from"./index-CqMiBpm1.js";import{L as a,D as d,S as c,W as h,a as x,A as p,b as j,B as m}from"./Label.stories-ip9WXtKn.js";import"./preload-helper-Dp1pzeXC.js";import"./Person-C0gvX9yc.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a,title:"Foundations/Label"}),`
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
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default",children:"Default"}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"sizes",children:"Sizes"}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"weights",children:"Weights"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"with-dropdown",children:"With Dropdown"}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"systematic-variants",children:"Systematic Variants"}),`
`,e.jsx(n.p,{children:"This section showcases the systematic application of variants across all 5 sizes, 4 weights, 3 alignments, and 2 dropdown states."}),`
`,e.jsx(n.h3,{id:"full-matrix-120-variants",children:"Full Matrix (120 Variants)"}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h2,{id:"design-system-integration",children:"Design System Integration"}),`
`,e.jsx(n.h3,{id:"brand-comparison-multi-client",children:"Brand Comparison (Multi-Client)"}),`
`,e.jsx(n.p,{children:"Our design system supports multiple brands (Penta, Horizon). Below is a comparison of how the component renders across different brand themes using the token system."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsxs(n.p,{children:["The component uses the following design tokens for styling, which are defined in ",e.jsx(n.code,{children:"src/styles/tokens.css"}),":"]}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description | Default Value (Penta) |
| :--- | :--- | :--- |
| `,e.jsx(n.code,{children:"--label-text-color"})," | Primary text color | ",e.jsx(n.code,{children:"var(--brand-text-main)"}),` |
| `,e.jsx(n.code,{children:"--label-font-family"})," | Font family | ",e.jsx(n.code,{children:"var(--brand-font-primary)"}),` |
| `,e.jsx(n.code,{children:"--label-size-default"})," | Default font size | ",e.jsx(n.code,{children:"var(--global-type-size-primary-label)"}),` |
| `,e.jsx(n.code,{children:"--label-weight-bold"})," | Bold font weight | ",e.jsx(n.code,{children:"var(--global-type-weight-bold)"}),` |
| `,e.jsx(n.code,{children:"--label-divider-color"})," | Dropdown divider color | ",e.jsx(n.code,{children:"var(--brand-border-main)"}),` |
| `,e.jsx(n.code,{children:"--label-gap-default"})," | Default gap between icons and text | ",e.jsx(n.code,{children:"var(--global-spacing-sizing-6px)"})," |"]}),`
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
`]})]})}function w(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{w as default};
