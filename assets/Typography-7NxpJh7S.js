import{j as e}from"./iframe-DNZDtVnS.js";import{useMDXComponents as a}from"./index-iy7vqqQ2.js";import{M as s,T as r}from"./blocks-BUrqLIkD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BiQYb24k.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Tokens/Typography"}),`
`,e.jsx(n.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(n.p,{children:"Typography is a core element of our design language, providing a clear hierarchy, establishing tone, and creating readable, harmonious interfaces."}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"We use the following typography tokens to render text across our components:"}),`
`,e.jsx(n.h3,{id:"typefaces",children:"Typefaces"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description | Value |
| :--- | :--- | :--- |
| `,e.jsx(n.code,{children:"--global-font-primary"}),` | Primary font | F37 Ginger Pro |
| `,e.jsx(n.code,{children:"--global-font-secondary"}),` | Secondary font | Calibri |
| `,e.jsx(n.code,{children:"--brand-font-primary"})," | Brand primary font alias | ",e.jsx(n.code,{children:"var(--global-font-primary)"}),` |
| `,e.jsx(n.code,{children:"--brand-font-secondary"})," | Brand secondary font alias | ",e.jsx(n.code,{children:"var(--global-font-secondary)"})," |"]}),`
`,e.jsx(n.h3,{id:"font-weights",children:"Font Weights"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description | Value |
| :--- | :--- | :--- |
| `,e.jsx(n.code,{children:"--global-type-weight-thin"}),` | Thin weight | 100 |
| `,e.jsx(n.code,{children:"--global-type-weight-light"}),` | Light weight | 300 |
| `,e.jsx(n.code,{children:"--global-type-weight-default"}),`| Regular weight | 400 |
| `,e.jsx(n.code,{children:"--global-type-weight-medium"}),` | Medium weight | 500 |
| `,e.jsx(n.code,{children:"--global-type-weight-semibold"}),`| Semibold weight | 600 |
| `,e.jsx(n.code,{children:"--global-type-weight-bold"}),` | Bold weight | 700 |
| `,e.jsx(n.code,{children:"--global-type-weight-extra-bold"}),"| Extra bold weight | 800 |"]}),`
`,e.jsx(n.h2,{id:"principles",children:"Principles"}),`
`,e.jsx(n.p,{children:"Follow these common design principles by using typography in a cohesive, useful, and legible way."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Design for universal understanding"}),`
Select clear, widely legible typefaces that ensure information is readable across all devices and screen sizes. Use type to establish a consistent hierarchy.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Balance simplicity and detail to create legibility"}),`
Ensure text contrast meets WCAG 2.1 AA guidelines. Avoid using too many different font sizes and weights within a single view.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Maintain visual harmony"}),`
Adhere to the typography scale for sizes and line heights. Consistent spacing around text elements creates a harmonious rhythm.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Use typography intentionally"}),`
Use font weights and sizes to guide the user's eye to the most important information first.`]}),`
`,e.jsx(n.h2,{id:"using-the-component",children:"Using the Component"}),`
`,e.jsxs(n.p,{children:["When using typography in your components, always refer to the design tokens defined in ",e.jsx(n.code,{children:"tokens.css"}),". Use CSS custom properties rather than hardcoding sizes or typefaces."]}),`
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
`})}),`
`,e.jsx(n.h2,{id:"visual-style",children:"Visual Style"}),`
`,e.jsx(n.p,{children:"Our typographic style balances the unique character of our brand with functional legibility for application UIs."}),`
`,e.jsx(n.h3,{id:"do",children:"Do"}),`
`,e.jsxs(n.p,{children:[`Use standard font weight tokens for consistency.
Use brand aliases (`,e.jsx(n.code,{children:"var(--brand-font-primary)"}),") rather than global typefaces directly when styling brand-specific components."]}),`
`,e.jsx(n.h3,{id:"dont",children:"Don't"}),`
`,e.jsx(n.p,{children:"Do not introduce custom font weights or arbitrary line heights outside the token scale."}),`
`,e.jsx(n.h2,{id:"size-and-spacing",children:"Size and spacing"}),`
`,e.jsx(n.p,{children:"We use a systematic scale for labels, headings, and body text."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Label Primary Scale"})}),`
`,e.jsx(r,{fontSizes:["var(--global-type-size-primary-label-xxs)","var(--global-type-size-primary-label-xs)","var(--global-type-size-primary-label-sm)","var(--global-type-size-primary-label)","var(--global-type-size-primary-label-lg)"],fontWeight:400,sampleText:"Label Primary Scale",fontFamily:"var(--brand-font-primary)"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Heading Primary Scale"})}),`
`,e.jsx(r,{fontSizes:["var(--global-type-size-primary-heading-5)","var(--global-type-size-primary-heading-4)","var(--global-type-size-primary-heading-3)","var(--global-type-size-primary-heading-2)","var(--global-type-size-primary-heading-1)"],fontWeight:700,sampleText:"Heading Primary Scale",fontFamily:"var(--brand-font-primary)"}),`
`,e.jsx(n.h2,{id:"contribution",children:"Contribution"}),`
`,e.jsx(n.p,{children:"If a new typographic scale or size variant is required for a novel use case, consider whether existing sizes can be adapted first."}),`
`,e.jsx(n.p,{children:"To contribute a new typographic variant, please bring it to our Biweekly Design System meeting for review with the whole team."})]})}function g(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{g as default};
