import{j as e}from"./iframe-3PU36Vwi.js";import{useMDXComponents as s}from"./index-BWa7V1ip.js";import{M as r,C as l,a as i}from"./blocks-DQmNyiXO.js";import{P as c,T as a,a as d,N as p,A as h,S as m,b as u}from"./Placeholder.stories-CMY-NmXN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CmGNER89.js";import"./createSvgIcon-CZym166V.js";import"./Cancel-CU9ftO_m.js";import"./KeyboardArrowDown-CwoIvN-f.js";import"./DocsTemplate-929cAfYi.js";import"./Mail-CCAa761b.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:c,title:"Foundations/Placeholder"}),`
`,e.jsx(n.h1,{id:"placeholder",children:"Placeholder"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Placeholder"})," component is a form-field placeholder UI element — it represents the visual content inside an empty or partially-filled input. It supports 4 sizes, 3 alignments, and 4 types, resulting in 45 possible variants."]}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"We use the following tokens to render our placeholders:"}),`
`,e.jsx(n.h3,{id:"core-tokens",children:"Core Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description |
| :--- | :--- |
| `,e.jsx(n.code,{children:"--placeholder-text-color"}),` | Primary text and icon color |
| `,e.jsx(n.code,{children:"--placeholder-icon-opacity"}),` | Default opacity for icons |
| `,e.jsx(n.code,{children:"--placeholder-icon-opacity-alt"}),` | Alternative opacity for large size leading icons |
| `,e.jsx(n.code,{children:"--placeholder-counter-opacity"}),` | Opacity for minus-box icon in counter |
| `,e.jsx(n.code,{children:"--placeholder-font-default"}),` | Font family for large, default, and small sizes |
| `,e.jsx(n.code,{children:"--placeholder-font-xs"}),` | Font family for x-small size |
| `,e.jsx(n.code,{children:"--placeholder-counter-color"})," | Interaction color for counter controls |"]}),`
`,e.jsx(n.h2,{id:"principles",children:"Principles"}),`
`,e.jsx(n.p,{children:"Follow these common design principles by using placeholders in a cohesive, useful, and legible way."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Content Clarity"}),`
Placeholders should provide clear hints or examples of what input is expected.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Legibility"}),`
Ensure placeholder text is legible but clearly distinct from actual user input, typically achieved through reduced opacity or alternative colors.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Alignment Usage"}),`
Choose alignment that matches the context of the surrounding form or input field.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Type Selection"}),`
Select the appropriate type (`,e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"italic"}),", ",e.jsx(n.code,{children:"tags-selected"}),", or ",e.jsx(n.code,{children:"number"}),") based on the specific interaction pattern required by the input."]}),`
`,e.jsx(n.h2,{id:"using-the-component",children:"Using the Component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Placeholder } from './Placeholder';
import FaceIcon from '@mui/icons-material/Face';

// Default type
const MyComponent = () => (
  <Placeholder size="default" type="default" text="Enter value..." />
);

// Tags selected type
const TagsComponent = () => (
  <Placeholder 
    size="default" 
    type="tags-selected" 
    tags={[{ label: 'Tag 1' }, { label: 'Tag 2', leadingIcon: FaceIcon }]} 
  />
);

// Number type
const CounterComponent = () => (
  <Placeholder 
    size="default" 
    type="number" 
    text="Count"
    value={3}
    onIncrement={() => {}}
    onDecrement={() => {}}
  />
);
`})}),`
`,e.jsx(n.p,{children:"The component accepts the following props:"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"visual-style",children:"Visual Style"}),`
`,e.jsx(n.p,{children:"Placeholders support different variants based on their type. Ensure appropriate context is provided for the user."}),`
`,e.jsx(n.h3,{id:"default-and-italic-types",children:"Default and Italic Types"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h3,{id:"tags-selected-type",children:"Tags Selected Type"}),`
`,e.jsx(n.p,{children:"Used when multiple selections have been made in a combobox or select input. Note: not supported in x-small size."}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"number-type",children:"Number Type"}),`
`,e.jsx(n.p,{children:"Used for numeric inputs requiring step controls. The counter controls are visually presented but require external state management."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"alignment",children:"Alignment"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"do",children:"Do"}),`
`,e.jsx(n.p,{children:"Use systematic sizes and types for consistent form field patterns."}),`
`,e.jsx(n.h3,{id:"dont",children:"Don't"}),`
`,e.jsx(n.p,{children:"Overwrite internal component styles directly; use the token system. Avoid creating invalid combinations (like x-small tags-selected)."}),`
`,e.jsx(n.h2,{id:"size-and-spacing",children:"Size and spacing"}),`
`,e.jsxs(n.p,{children:["The Placeholder component supports multiple sizes. Use the ",e.jsx(n.code,{children:"size"})," prop to ensure consistent scaling."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.p,{children:"This section showcases the systematic application of variants across all sizes, types, and alignments."}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h2,{id:"contribution",children:"Contribution"}),`
`,e.jsx(n.p,{children:"When proposing updates or new properties for the Placeholder component, consider the following:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Does the proposed change align with existing form field patterns?"}),`
`,e.jsx(n.li,{children:"Does it maintain backward compatibility with our systematic sizing approach?"}),`
`]}),`
`,e.jsx(n.p,{children:"To contribute a new variation, please bring it to our Biweekly Design System meeting for review with the whole team."})]})}function P(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{P as default};
