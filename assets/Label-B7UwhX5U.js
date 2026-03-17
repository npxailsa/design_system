import{j as n,M as r,C as l,a as s}from"./iframe-CYtfCAo4.js";import{useMDXComponents as o}from"./index-BLV198ur.js";import{L as a,D as d,S as c,W as h,a as x,A as p,b as m,B as j}from"./Label.stories-wOeQg70B.js";import"./preload-helper-Dp1pzeXC.js";import"./Person-BWl4-jlS.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:a,title:"Foundations/Label"}),`
`,n.jsx(e.h1,{id:"label",children:"Label"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Label"})," component is a core building block of the design system, used to display text with optional icons and dropdown split functionality. It is designed to be highly systematic, with 120 possible variants based on size, weight, alignment, and state."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Label } from './Label';
import PersonIcon from '@mui/icons-material/Person';

const MyComponent = () => (
  <Label size="default" weight="bold" leadingIcon={PersonIcon}>
    Example Label
  </Label>
);
`})}),`
`,n.jsx(e.h2,{id:"api",children:"API"}),`
`,n.jsx(e.p,{children:"The component accepts the following props:"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"default",children:"Default"}),`
`,n.jsx(s,{of:d}),`
`,n.jsx(e.h3,{id:"sizes",children:"Sizes"}),`
`,n.jsx(s,{of:c}),`
`,n.jsx(e.h3,{id:"weights",children:"Weights"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(e.h3,{id:"with-dropdown",children:"With Dropdown"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h3,{id:"alignment",children:"Alignment"}),`
`,n.jsx(s,{of:p}),`
`,n.jsx(e.h2,{id:"systematic-variants",children:"Systematic Variants"}),`
`,n.jsx(e.p,{children:"This section showcases the systematic application of variants across all 5 sizes, 4 weights, 3 alignments, and 2 dropdown states."}),`
`,n.jsx(e.h3,{id:"full-matrix-120-variants",children:"Full Matrix (120 Variants)"}),`
`,n.jsx(s,{of:m}),`
`,n.jsx(e.h2,{id:"design-system-integration",children:"Design System Integration"}),`
`,n.jsx(e.h3,{id:"brand-comparison-multi-client",children:"Brand Comparison (Multi-Client)"}),`
`,n.jsx(e.p,{children:"Our design system supports multiple brands (Penta, Horizon). Below is a comparison of how the component renders across different brand themes using the token system."}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(e.h3,{id:"design-tokens",children:"Design Tokens"}),`
`,n.jsxs(e.p,{children:["The component uses the following design tokens for styling, which are defined in ",n.jsx(e.code,{children:"src/styles/tokens.css"}),":"]}),`
`,n.jsxs(e.p,{children:[`| Token Name | Description | Default Value (Penta) |
| :--- | :--- | :--- |
| `,n.jsx(e.code,{children:"--label-text-color"})," | Primary text color | ",n.jsx(e.code,{children:"var(--brand-text-main)"}),` |
| `,n.jsx(e.code,{children:"--label-font-family"})," | Font family | ",n.jsx(e.code,{children:"var(--global-font-primary)"}),` (Archivo) |
| `,n.jsx(e.code,{children:"--label-size-default"})," | Default font size | ",n.jsx(e.code,{children:"16px"}),` |
| `,n.jsx(e.code,{children:"--label-weight-bold"})," | Bold font weight | ",n.jsx(e.code,{children:"700"}),` |
| `,n.jsx(e.code,{children:"--label-divider-color"})," | Dropdown divider color | ",n.jsx(e.code,{children:"var(--brand-border-main)"})," |"]}),`
`,n.jsx(e.h2,{id:"guidelines",children:"Guidelines"}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Use the ",n.jsx(e.code,{children:"size"})," prop to ensure consistent scaling."]}),`
`,n.jsx(e.li,{children:"Ensure appropriate contrast ratios when switching between brands."}),`
`,n.jsx(e.li,{children:"Use component tokens for overrides rather than hardcoded values."}),`
`]}),`
`,n.jsx(e.h3,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ensure labels have sufficient color contrast (WCAG 2.1 AA)."}),`
`,n.jsx(e.li,{children:"If an icon carries unique meaning, ensure appropriate ARIA labels are provided via children or parent components."}),`
`]}),`
`,n.jsx(e.h3,{id:"dos-and-donts",children:"Dos and Don'ts"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Do:"})," Use systematic weights (bold, medium, light, thin) for consistent hierarchy."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Don't:"})," Overwrite internal component styles directly; use the token system."]}),`
`]})]})}function y(i={}){const{wrapper:e}={...o(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{y as default};
