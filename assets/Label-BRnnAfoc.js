import{j as n,M as l,C as r,a as s}from"./iframe-nW7zCA-X.js";import{useMDXComponents as t}from"./index-C4n3Pvej.js";import{L as a,S as c,W as d,a as h,A as x}from"./Label.stories-DXVmCr2i.js";import"./preload-helper-Dp1pzeXC.js";import"./Person-BFrISOUP.js";function o(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:a}),`
`,n.jsx(e.h1,{id:"label-component",children:"Label Component"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Label"})," component is a versatile text display component that supports icons, alignment, and dropdown split functionality. It uses the ",n.jsx(e.strong,{children:"F37 Ginger Pro"})," font family as its primary typeface, ensuring a modern and clean aesthetic that matches our design system."]}),`
`,n.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Label"})," component consists of the following elements:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Leading Icon (Optional)"}),": A Material UI icon placed before the text to provide visual context."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Label Text"}),": The main content of the component, using design-system-specific typography scales."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Trailing Icon (Optional)"}),": Typically an arrow or chevron indicating an action or navigation."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Dropdown Split (Optional)"}),": A vertical divider followed by a chevron-down icon, used to indicate a split-button or dropdown functionality."]}),`
`]}),`
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
`,n.jsx(s,{of:c}),`
`,n.jsx(e.h3,{id:"weights",children:"Weights"}),`
`,n.jsx(s,{of:d}),`
`,n.jsx(e.h3,{id:"with-dropdown",children:"With Dropdown"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(e.h3,{id:"alignment",children:"Alignment"}),`
`,n.jsx(s,{of:x})]})}function f(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{f as default};
