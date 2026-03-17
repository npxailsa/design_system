import{j as o,M as a,b as l,c as s}from"./iframe-DlROoSAR.js";import{useMDXComponents as n}from"./index-BOWTDeBV.js";import"./preload-helper-Dp1pzeXC.js";function t(r){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{title:"Tokens/Colors"}),`
`,o.jsx(e.h1,{id:"colors",children:"Colors"}),`
`,o.jsx(e.p,{children:"Our color palette is designed to be accessible and consistent across all platforms. We use a set of primary and secondary colors, along with functional colors for status and feedback."}),`
`,o.jsxs(l,{children:[o.jsx(s,{title:"Primary",subtitle:"Main brand colors",colors:{Primary:"#646cff",Hover:"#535bf2"}}),o.jsx(s,{title:"Secondary",subtitle:"Secondary brand colors",colors:{Secondary:"#213547"}}),o.jsx(s,{title:"Background",subtitle:"Surface colors",colors:{Dark:"#242424",Light:"#ffffff","Button Dark":"#1a1a1a","Button Light":"#f9f9f9"}}),o.jsx(s,{title:"Text",subtitle:"Typography colors",colors:{Dark:"rgba(255, 255, 255, 0.87)",Light:"#213547",Muted:"#666",Black:"#1C1C1C"}}),o.jsx(s,{title:"Borders & Dividers",subtitle:"Layout elements",colors:{Light:"#eee","Blue Gray 50":"#D6D9DA"}})]}),`
`,o.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,o.jsxs(e.p,{children:["When using colors in your components, always refer to the CSS variables defined in ",o.jsx(e.code,{children:"tokens.css"}),"."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-css",children:`.my-component {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: 1px solid var(--border-color-light);
}
`})})]})}function u(r={}){const{wrapper:e}={...n(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(t,{...r})}):t(r)}export{u as default};
