import{j as e}from"./iframe-Cmkw6ekz.js";import{useMDXComponents as o}from"./index-D4D9-qW2.js";import{M as s,C as l,a as r}from"./blocks-6WKeCEl4.js";import{A as a,C as c,N as d,W as h,a as p,S as x,b as g}from"./Alert.stories-D9kbJLI1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bjkrwf0r.js";import"./DocsTemplate-DvAWJ7_-.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:a,title:"Components/Alert"}),`
`,e.jsx(n.h1,{id:"alert",children:"Alert"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Alert"})," component is used to communicate important information to users through colour-coded banners. It supports 48 total variants across 3 sizes, 8 colour themes, and 2 border states, with optional leading icon, trailing close button, and description subtext."]}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"We use the following tokens to render our alerts:"}),`
`,e.jsx(n.h3,{id:"layout-tokens",children:"Layout Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description |
| :--- | :--- |
| `,e.jsx(n.code,{children:"--alert-padding-small"}),` | Padding for small size (6px 8px) |
| `,e.jsx(n.code,{children:"--alert-padding-default"}),` | Padding for default size (8px 12px) |
| `,e.jsx(n.code,{children:"--alert-padding-large"}),` | Padding for large size (10px 12px) |
| `,e.jsx(n.code,{children:"--alert-gap"}),` | Gap between icon-group and close button (12px) |
| `,e.jsx(n.code,{children:"--alert-icon-text-gap"}),` | Gap between leading icon and text (8px) |
| `,e.jsx(n.code,{children:"--alert-text-gap-small"}),` | Gap between title and description — small (2px) |
| `,e.jsx(n.code,{children:"--alert-text-gap-default"}),` | Gap between title and description — default (2px) |
| `,e.jsx(n.code,{children:"--alert-text-gap-large"}),` | Gap between title and description — large (1px) |
| `,e.jsx(n.code,{children:"--alert-border-radius"}),` | Border radius for bordered variant (4px) |
| `,e.jsx(n.code,{children:"--alert-border-width"}),` | Border width (1px) |
| `,e.jsx(n.code,{children:"--alert-icon-opacity"}),` | Opacity applied to leading and close icons (0.5) |
| `,e.jsx(n.code,{children:"--alert-min-width"})," | Minimum width of the alert (400px) |"]}),`
`,e.jsx(n.h3,{id:"typography-tokens",children:"Typography Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description |
| :--- | :--- |
| `,e.jsx(n.code,{children:"--alert-font-family"}),` | Font family (F37 Ginger Pro) |
| `,e.jsx(n.code,{children:"--alert-letter-spacing"}),` | Letter spacing (0.15px) |
| `,e.jsx(n.code,{children:"--alert-title-weight"}),` | Title font weight (400 / regular) |
| `,e.jsx(n.code,{children:"--alert-desc-weight"}),` | Description font weight (300 / light) |
| `,e.jsx(n.code,{children:"--alert-description-color"}),` | Description text color (gray-700) |
| `,e.jsx(n.code,{children:"--alert-title-size-small"}),` | Title font size — small (12px) |
| `,e.jsx(n.code,{children:"--alert-title-size-default"}),` | Title font size — default (14px) |
| `,e.jsx(n.code,{children:"--alert-title-size-large"})," | Title font size — large (16px) |"]}),`
`,e.jsx(n.h3,{id:"icon-size-tokens",children:"Icon Size Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description |
| :--- | :--- |
| `,e.jsx(n.code,{children:"--alert-leading-icon-small"}),` | Leading icon — small (16px) |
| `,e.jsx(n.code,{children:"--alert-leading-icon-default"}),` | Leading icon — default (22px) |
| `,e.jsx(n.code,{children:"--alert-leading-icon-large"}),` | Leading icon — large (28px) |
| `,e.jsx(n.code,{children:"--alert-close-icon-small"}),` | Close icon — small (14px) |
| `,e.jsx(n.code,{children:"--alert-close-icon-default"}),` | Close icon — default (16px) |
| `,e.jsx(n.code,{children:"--alert-close-icon-large"})," | Close icon — large (18px) |"]}),`
`,e.jsx(n.h3,{id:"colour-variant-tokens",children:"Colour Variant Tokens"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description |
| :--- | :--- |
| `,e.jsx(n.code,{children:"--alert-bg-default"}),` | Default background — rgba(58,50,130,0.05) |
| `,e.jsx(n.code,{children:"--alert-title-default"}),` | Default title color — secondary-navy |
| `,e.jsx(n.code,{children:"--alert-bg-warning"}),` | Warning background — status-orange-light |
| `,e.jsx(n.code,{children:"--alert-title-warning"}),` | Warning title color — status-dark-orange |
| `,e.jsx(n.code,{children:"--alert-icon-warning"}),` | Warning leading icon fill — status-orange |
| `,e.jsx(n.code,{children:"--alert-bg-light-gray"}),` | Light-gray background — neutral-gray-100 |
| `,e.jsx(n.code,{children:"--alert-bg-navy"}),` | Navy background — status-info-blue-light |
| `,e.jsx(n.code,{children:"--alert-bg-success"}),` | Success background — status-green-light |
| `,e.jsx(n.code,{children:"--alert-bg-error"}),` | Error background — status-red-light |
| `,e.jsx(n.code,{children:"--alert-bg-purple"}),` | Purple background — status-purple-light |
| `,e.jsx(n.code,{children:"--alert-bg-white"})," | White background — base-white |"]}),`
`,e.jsx(n.h2,{id:"principles",children:"Principles"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Communicate with clarity"})," — Use the appropriate colour variant to match the semantic meaning: error for failures, success for confirmations, warning for caution, and navy for informational messages."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Use sparingly and intentionally"})," — Alerts demand attention. Overusing them diminishes their impact. Reserve alerts for messages that genuinely require user awareness."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Provide actionable context"})," — Always pair the title with a helpful description when additional context aids user understanding."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Respect dismissibility"})," — When an alert includes a close button, ensure the onClose callback properly removes the alert from the DOM."]}),`
`,e.jsx(n.h2,{id:"using-the-component",children:"Using the Component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Alert } from './Alert';

// Basic bordered alert
<Alert
  size="default"
  colour="success"
  border
  title="Changes saved successfully"
  description="Your profile has been updated."
  onClose={() => console.log('dismissed')}
/>

// Minimal alert without description or icons
<Alert
  colour="warning"
  border={false}
  title="Session expiring soon"
  showSubtext={false}
  showLeadingIcon={false}
  showTrailingIcon={false}
/>
`})}),`
`,e.jsx(n.p,{children:"The component accepts the following props:"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"visual-style",children:"Visual Style"}),`
`,e.jsx(n.p,{children:"Alerts use colour-coded backgrounds, borders, and icons to communicate message severity at a glance."}),`
`,e.jsx(n.h3,{id:"colour-variants",children:"Colour Variants"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"border-vs-no-border",children:"Border vs. No Border"}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h3,{id:"without-description",children:"Without Description"}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"without-icons",children:"Without Icons"}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"size-and-spacing",children:"Size and spacing"}),`
`,e.jsx(n.p,{children:"The Alert component supports three sizes. Choose the size that best fits the context and information density."}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h2,{id:"leading-icons",children:"Leading Icons"}),`
`,e.jsx(n.p,{children:"Each colour variant uses a specific NPX custom SVG icon to reinforce semantic meaning:"}),`
`,e.jsxs(n.p,{children:[`| Colour | Icon |
| :--- | :--- |
| `,e.jsx(n.code,{children:"default"}),` | Bullseye (concentric rings target) |
| `,e.jsx(n.code,{children:"warning"}),` | Alert triangle (triangle with exclamation) |
| `,e.jsx(n.code,{children:"light-gray"}),` | Bullseye (concentric rings target) |
| `,e.jsx(n.code,{children:"navy"}),` | Information circle (i inside circle) |
| `,e.jsx(n.code,{children:"success"}),` | Check bold (bold checkmark) |
| `,e.jsx(n.code,{children:"error"}),` | Close thick (thick X cross) |
| `,e.jsx(n.code,{children:"purple"}),` | File document (document with lines) |
| `,e.jsx(n.code,{children:"white"})," | Bullseye (concentric rings target) |"]}),`
`,e.jsx(n.h2,{id:"full-variant-matrix",children:"Full Variant Matrix"}),`
`,e.jsx(n.p,{children:"This component provides 48 possible variants: 3 sizes × 8 colours × 2 border states."}),`
`,e.jsx(r,{of:g}),`
`,e.jsx(n.h2,{id:"contribution",children:"Contribution"}),`
`,e.jsx(n.p,{children:"When proposing updates or new properties for the Alert component, consider the following:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Does the new colour variant have a clear semantic purpose?"}),`
`,e.jsx(n.li,{children:"Does it maintain accessibility contrast ratios for both bordered and non-bordered states?"}),`
`,e.jsx(n.li,{children:"Are the leading icon and colour pairing intuitive for the message type?"}),`
`]}),`
`,e.jsx(n.p,{children:"To contribute a new variation, please bring it to our Biweekly Design System meeting for review with the whole team."})]})}function k(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{k as default};
