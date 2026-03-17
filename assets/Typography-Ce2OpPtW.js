import{j as e,M as t,T as r}from"./iframe-aEoKiTRh.js";import{useMDXComponents as l}from"./index-CqMiBpm1.js";import"./preload-helper-Dp1pzeXC.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Tokens/Typography"}),`
`,e.jsx(n.h1,{id:"design-tokens-typography",children:"Design Tokens: Typography"}),`
`,e.jsx(n.p,{children:"Our typography system is structured into global primitives, brand aliases, and semantic component tokens."}),`
`,e.jsx(n.h2,{id:"global-typefaces",children:"Global Typefaces"}),`
`,e.jsxs(n.p,{children:["We use two primary font scales for our projects: ",e.jsx(n.strong,{children:"Archivo"})," and ",e.jsx(n.strong,{children:"F37 Ginger Pro"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Primary Font"}),": ",e.jsx(n.code,{children:"var(--global-font-primary)"})," (Archivo)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Secondary Font"}),": ",e.jsx(n.code,{children:"var(--global-font-secondary)"})," (F37 Ginger Pro)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"brand-aliases",children:"Brand Aliases"}),`
`,e.jsxs(n.p,{children:["These tokens automatically switch based on the theme (",e.jsx(n.code,{children:'[data-theme="penta"]'})," or ",e.jsx(n.code,{children:'[data-theme="horizon"]'}),")."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Brand Primary Font"}),": ",e.jsx(n.code,{children:"var(--brand-font-primary)"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Brand Secondary Font"}),": ",e.jsx(n.code,{children:"var(--brand-font-secondary)"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"font-weights",children:"Font Weights"}),`
`,e.jsx(n.p,{children:"Always use the standard font weight tokens for consistency:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Thin"}),": 100 (",e.jsx(n.code,{children:"var(--global-type-weight-thin)"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Light"}),": 300 (",e.jsx(n.code,{children:"var(--global-type-weight-light)"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default/Regular"}),": 400 (",e.jsx(n.code,{children:"var(--global-type-weight-default)"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Medium"}),": 500 (",e.jsx(n.code,{children:"var(--global-type-weight-medium)"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Semibold"}),": 600 (",e.jsx(n.code,{children:"var(--global-type-weight-semibold)"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Bold"}),": 700 (",e.jsx(n.code,{children:"var(--global-type-weight-bold)"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Extra Bold"}),": 800 (",e.jsx(n.code,{children:"var(--global-type-weight-extra-bold)"}),")"]}),`
`]}),`
`,e.jsx(n.h2,{id:"font-sizes-primary-label-scale",children:"Font Sizes (Primary Label Scale)"}),`
`,e.jsx(n.p,{children:"A systematic scale used for all label components across the design system."}),`
`,e.jsx(r,{fontSizes:["10px","12px","14px","16px","18px"],fontWeight:400,sampleText:"Label Primary Scale",fontFamily:"var(--brand-font-primary)"}),`
`,e.jsx(n.h2,{id:"font-sizes-primary-heading-scale",children:"Font Sizes (Primary Heading Scale)"}),`
`,e.jsx(n.p,{children:"A systematic scale used for all headings across the design system."}),`
`,e.jsx(r,{fontSizes:["19px","24px","28px","32px","36px"],fontWeight:700,sampleText:"Heading Primary Scale",fontFamily:"var(--brand-font-primary)"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["When using typography in your components, always refer to the design tokens defined in ",e.jsx(n.code,{children:"tokens.css"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.my-title {
  font-family: var(--brand-font-primary);
  font-size: var(--global-type-size-primary-heading-1);
  font-weight: var(--global-type-weight-bold);
  line-height: var(--global-type-line-height-heading-1);
}

.my-text {
  font-family: var(--brand-font-secondary);
  font-size: var(--global-type-size-secondary-body);
  font-weight: var(--global-type-weight-default);
  line-height: var(--global-type-line-height-body);
}
`})})]})}function h(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{h as default};
