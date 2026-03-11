import{j as n}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as r}from"./index-ChEI-nsM.js";import{M as c,C as t,a as o}from"./index-C5IxsAeY.js";import{I as l,S as a,C as d,G as m}from"./Icon.stories-DaxXwQuF.js";import"./index-DRjF_FHU.js";import"./iframe-AZE9NUM8.js";import"./index-DIvcuAjW.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{of:l}),`
`,n.jsx(e.h1,{id:"icon-system",children:"Icon System"}),`
`,n.jsxs(e.p,{children:["The Icon system in our design system is powered by ",n.jsx(e.a,{href:"https://mui.com/material-ui/material-icons/",rel:"nofollow",children:"Material UI Icons"}),". This provides thousands of consistent, high-quality icons ready to be used in your application."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["To use an icon, import the ",n.jsx(e.code,{children:"Icon"})," component and a specific icon from ",n.jsx(e.code,{children:"@mui/icons-material"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Icon } from './components/Icon';
import HomeIcon from '@mui/icons-material/Home';

const MyComponent = () => (
  <Icon icon={HomeIcon} color="primary" size="medium" />
);
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(t,{}),`
`,n.jsx(e.h2,{id:"custom-sizes",children:"Custom Sizes"}),`
`,n.jsxs(e.p,{children:["You can pass a specific number (in pixels) to the ",n.jsx(e.code,{children:"size"})," prop for custom sizing."]}),`
`,n.jsx(o,{of:a}),`
`,n.jsx(e.h2,{id:"colors",children:"Colors"}),`
`,n.jsxs(e.p,{children:["Icons can use the Material UI theme colors such as ",n.jsx(e.code,{children:"primary"}),", ",n.jsx(e.code,{children:"secondary"}),", ",n.jsx(e.code,{children:"error"}),", etc."]}),`
`,n.jsx(o,{of:d}),`
`,n.jsx(e.h2,{id:"finding-icons",children:"Finding Icons"}),`
`,n.jsxs(e.p,{children:["You can find all available icons in the ",n.jsx(e.a,{href:"https://mui.com/material-ui/material-icons/",rel:"nofollow",children:"Material UI Icon Search"}),". Simply find the name of the icon and import it from ",n.jsx(e.code,{children:"@mui/icons-material"}),"."]}),`
`,n.jsx(e.p,{children:"For example:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Home"})," -> ",n.jsx(e.code,{children:"import HomeIcon from '@mui/icons-material/Home'"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Favorite"})," -> ",n.jsx(e.code,{children:"import FavoriteIcon from '@mui/icons-material/Favorite'"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"Settings"})," -> ",n.jsx(e.code,{children:"import SettingsIcon from '@mui/icons-material/Settings'"})]}),`
`]}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Clarity"}),": Use icons that are easily recognizable and clearly represent their action or state."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consistency"}),": Use the same icon for the same action across the entire application."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Accessibility"}),": Provide descriptive ",n.jsx(e.code,{children:"aria-label"})," props for icons that are not accompanied by text."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Grouping"}),": When using multiple icons together, ensure they have consistent sizing and spacing."]}),`
`]}),`
`,n.jsx(e.h2,{id:"common-icons-gallery",children:"Common Icons Gallery"}),`
`,n.jsx(e.p,{children:"Below is a collection of some of the most commonly used icons in our projects."}),`
`,n.jsx(o,{of:m})]})}function C(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{C as default};
