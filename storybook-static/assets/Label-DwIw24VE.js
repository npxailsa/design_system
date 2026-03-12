import{j as n}from"./jsx-runtime-WH23WyrG.js";import{useMDXComponents as o}from"./index-BOfV7nDf.js";import"./blocks-WHncHtU1.js";import{L as l,S as r,W as a,a as c,A as h}from"./Label.stories-DTJnu1vK.js";import{M as d,C as p,a as i}from"./index-C6H1Ux_q.js";import"./index-CfFaKb_3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Settings--2FnPbhD.js";import"./iframe-DQ4JjmBD.js";import"./index-C3scH-S8.js";import"./index-Bhelpi4i.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{of:l}),`
`,n.jsx(e.h1,{id:"label-component",children:"Label Component"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Label"})," component is a versatile text display component that supports icons, alignment, and dropdown split functionality. It uses the ",n.jsx(e.strong,{children:"F37 Ginger"})," font family as its primary typeface, ensuring a modern and clean aesthetic that matches our design system."]}),`
`,n.jsx(e.h2,{id:"typography-and-scaling",children:"Typography and Scaling"}),`
`,n.jsx(e.p,{children:"The component is built using Figma-compliant design tokens. Each size variant scales the text, the icons, and the spacing (gap) between elements proportionally:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"large"}),": 18px text, 18px icon, 8px gap."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"default"}),": 16px text, 16px icon, 6px gap."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"small"}),": 14px text, 14px icon, 4px gap."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"x-small"}),": 12px text, 12px icon, 4px gap."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"2x-small"}),": 10px text, 10px icon, 2px gap."]}),`
`]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Label } from './components/Label';
import MailIcon from '@mui/icons-material/Mail';

<Label size="large" weight="bold" leadingIcon={MailIcon}>
  Email Support
</Label>
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(p,{}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Label"})," component is highly configurable with several props to control its appearance and behavior:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"children"}),": The text to display. Defaults to 'Label'."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"size"}),": Controls font size, line height, gap, and icon sizes. Supports 'large', 'default', 'small', 'x-small', '2x-small'."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"weight"}),": Controls the font weight. Supports 'bold', 'medium', 'light', 'thin'."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"align"}),": Controls the text and content alignment within the container. Supports 'left', 'centre', 'right'."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"dropdown"}),": If true, displays a vertical divider and a chevron-down icon."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"leadingIcon"}),": A Material UI icon to display before the text. Defaults to ",n.jsx(e.code,{children:"PersonIcon"}),". Pass ",n.jsx(e.code,{children:"null"})," to hide."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"showTrailingIcon"}),": If true, displays an ",n.jsx(e.code,{children:"ArrowForwardIcon"})," after the text."]}),`
`]}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"sizes",children:"Sizes"}),`
`,n.jsx(i,{of:r}),`
`,n.jsx(e.h3,{id:"weights",children:"Weights"}),`
`,n.jsx(i,{of:a}),`
`,n.jsx(e.h3,{id:"with-dropdown",children:"With Dropdown"}),`
`,n.jsx(i,{of:c}),`
`,n.jsx(e.h3,{id:"alignment",children:"Alignment"}),`
`,n.jsx(i,{of:h})]})}function L(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{L as default};
