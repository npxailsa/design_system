import{j as n,M as o,T as r}from"./iframe-RXS4GSLx.js";import{useMDXComponents as t}from"./index-DmNimStz.js";import"./preload-helper-Dp1pzeXC.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Tokens/Typography"}),`
`,n.jsx(e.h1,{id:"typography",children:"Typography"}),`
`,n.jsxs(e.p,{children:["Our typography system is designed for readability and hierarchy. We use two main font families: ",n.jsx(e.strong,{children:"F37 Ginger Pro"})," for primary branding and ",n.jsx(e.strong,{children:"Calibri"})," for secondary text."]}),`
`,n.jsx(e.h2,{id:"font-families",children:"Font Families"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Primary"}),": ",n.jsx(e.code,{children:"F37 Ginger Pro"}),", sans-serif (",n.jsx(e.code,{children:"--font-family-primary"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Secondary"}),": ",n.jsx(e.code,{children:"Calibri"}),", sans-serif (",n.jsx(e.code,{children:"--font-family-secondary"}),")"]}),`
`]}),`
`,n.jsx(e.h2,{id:"font-weights",children:"Font Weights"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Light"}),": 300 (",n.jsx(e.code,{children:"--font-weight-light"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Regular"}),": 400 (",n.jsx(e.code,{children:"--font-weight-regular"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Medium"}),": 500 (",n.jsx(e.code,{children:"--font-weight-medium"}),")"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Bold"}),": 700 (",n.jsx(e.code,{children:"--font-weight-bold"}),")"]}),`
`]}),`
`,n.jsx(e.h2,{id:"font-sizes",children:"Font Sizes"}),`
`,n.jsx(r,{fontSizes:["12px","14px","16px","18px","20px","24px","30px","36px"],fontWeight:400,sampleText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",fontFamily:"var(--font-family-primary)"}),`
`,n.jsx(e.h2,{id:"label-typography-primary-scale",children:"Label Typography (Primary Scale)"}),`
`,n.jsx(e.p,{children:"Special typography scale for our Label components."}),`
`,n.jsx(r,{fontSizes:["10px","12px","14px","16px","18px"],fontWeight:500,sampleText:"Label Primary Scale",fontFamily:"var(--type-typeface-label)"}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["When using typography in your components, always refer to the CSS variables defined in ",n.jsx(e.code,{children:"tokens.css"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.my-title {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

.my-text {
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-base);
}
`})})]})}function c(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{c as default};
