import{j as n}from"./jsx-runtime-CG1W3u4p.js";import{useMDXComponents as o}from"./index-DGJPm00R.js";import{M as l,C as r,a as i}from"./index-Qg-rsAEc.js";import{L as a,S as d,W as c,a as h,A as p}from"./Label.stories-pbyKKiUz.js";import"./iframe-Cd1Wzp11.js";import"./preload-helper-C1FmrZbK.js";import"./index-DpSz6OtI.js";import"./index-N3z5tmsx.js";import"./Settings-DFVr1MCh.js";function t(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:a}),`
`,n.jsx(e.h1,{id:"label-component",children:"Label Component"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Label"})," component is a versatile text display component that supports icons, alignment, and dropdown split functionality. It uses the ",n.jsx(e.strong,{children:"F37 Ginger Pro"})," font family as its primary typeface, ensuring a modern and clean aesthetic that matches our design system."]}),`
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
`,n.jsx(r,{}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Label"})," component is highly configurable with several props to control its appearance and behavior:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"children"}),": The text to display. Defaults to 'Label'."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"size"}),": Controls font size, line height, gap, and icon sizes. Supports 'large', 'default', 'small', 'x-small', '2x-small'."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"weight"}),": Controls the font weight. Supports 'bold', 'medium', 'light', 'thin'."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"align"}),": Controls the text and content alignment within the container. Supports 'left', 'centre', 'right'."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"dropdown"}),": If true, displays a vertical divider and a chevron-down icon."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"leadingIcon"}),": A Material UI icon to display before the text. Defaults to ",n.jsx(e.code,{children:"PersonIcon"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"showLeadingIcon"}),": If true, displays the leading icon."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"showTrailingIcon"}),": If true, displays an ",n.jsx(e.code,{children:"ArrowForwardIcon"})," after the text."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"showSplit"}),": If true, displays the split divider and chevron (only when ",n.jsx(e.code,{children:"dropdown"})," is true)."]}),`
`]}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.h3,{id:"sizes",children:"Sizes"}),`
`,n.jsx(i,{of:d}),`
`,n.jsx(e.h3,{id:"weights",children:"Weights"}),`
`,n.jsx(i,{of:c}),`
`,n.jsx(e.h3,{id:"with-dropdown",children:"With Dropdown"}),`
`,n.jsx(i,{of:h}),`
`,n.jsx(e.h3,{id:"alignment",children:"Alignment"}),`
`,n.jsx(i,{of:p})]})}function I(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(t,{...s})}):t(s)}export{I as default};
