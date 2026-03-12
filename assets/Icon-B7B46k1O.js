import{j as e}from"./jsx-runtime-ti0h7CZl.js";import{useMDXComponents as r}from"./index-DhuKuDhy.js";import{M as c,C as t,a as s}from"./blocks-B1e_kHAf.js";import{I as l,S as a,C as d,G as h}from"./Icon.stories-B67KQbDj.js";import"./iframe-ZIm1cGDU.js";import"./preload-helper-C1FmrZbK.js";import"./index-CAsqSgY_.js";import"./index-DTAMEIXK.js";import"./Settings-CVubDidZ.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:l}),`
`,e.jsx(n.h1,{id:"icon-system",children:"Icon System"}),`
`,e.jsxs(n.p,{children:["The Icon system in our design system is powered by ",e.jsx(n.a,{href:"https://mui.com/material-ui/material-icons/",rel:"nofollow",children:"Material UI Icons"}),". This provides thousands of consistent, high-quality icons ready to be used in your application."]}),`
`,e.jsx(n.h2,{id:"sizing-and-inheritance",children:"Sizing and Inheritance"}),`
`,e.jsxs(n.p,{children:["Our ",e.jsx(n.code,{children:"Icon"})," component is designed to work seamlessly within parent components like ",e.jsx(n.code,{children:"Label"}),". When a named size (e.g., 'small', 'large') is provided, the icon automatically sets its font size to ",e.jsx(n.code,{children:"inherit"}),". This allows it to take the precise size defined by our design tokens or parent component CSS classes, ensuring perfect scaling alongside text."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use an icon, import the ",e.jsx(n.code,{children:"Icon"})," component and a specific icon from ",e.jsx(n.code,{children:"@mui/icons-material"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Icon } from './components/Icon';
import HomeIcon from '@mui/icons-material/Home';

const MyComponent = () => (
  <Icon icon={HomeIcon} color="primary" size="medium" />
);
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{}),`
`,e.jsx(n.h2,{id:"custom-sizes",children:"Custom Sizes"}),`
`,e.jsxs(n.p,{children:["You can pass a specific number (in pixels) to the ",e.jsx(n.code,{children:"size"})," prop for custom sizing."]}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h2,{id:"colors",children:"Colors"}),`
`,e.jsxs(n.p,{children:["Icons can use the Material UI theme colors such as ",e.jsx(n.code,{children:"primary"}),", ",e.jsx(n.code,{children:"secondary"}),", ",e.jsx(n.code,{children:"error"}),", etc."]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h2,{id:"finding-icons",children:"Finding Icons"}),`
`,e.jsxs(n.p,{children:["You can find all available icons in the ",e.jsx(n.a,{href:"https://mui.com/material-ui/material-icons/",rel:"nofollow",children:"Material UI Icon Search"}),". Simply find the name of the icon and import it from ",e.jsx(n.code,{children:"@mui/icons-material"}),"."]}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Home"})," -> ",e.jsx(n.code,{children:"import HomeIcon from '@mui/icons-material/Home'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Favorite"})," -> ",e.jsx(n.code,{children:"import FavoriteIcon from '@mui/icons-material/Favorite'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Settings"})," -> ",e.jsx(n.code,{children:"import SettingsIcon from '@mui/icons-material/Settings'"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clarity"}),": Use icons that are easily recognizable and clearly represent their action or state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistency"}),": Use the same icon for the same action across the entire application."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"}),": Provide descriptive ",e.jsx(n.code,{children:"aria-label"})," props for icons that are not accompanied by text."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Grouping"}),": When using multiple icons together, ensure they have consistent sizing and spacing."]}),`
`]}),`
`,e.jsx(n.h2,{id:"common-icons-gallery",children:"Common Icons Gallery"}),`
`,e.jsx(n.p,{children:"Below is a collection of some of the most commonly used icons in our projects."}),`
`,e.jsx(s,{of:h})]})}function C(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{C as default};
