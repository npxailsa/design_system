import{r as Se,j as e}from"./iframe-BKdhF1q-.js";import{B as _e}from"./ButtonBase-CG6nly30.js";import{D as o}from"./DocsTemplate-B3vxmoEt.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-9HIQf9lg.js";import"./index-_P_Rrktx.js";import"./emotion-react.browser.esm-YLjFa5kS.js";import"./useForkRef-BK7iHAeS.js";import"./useEventCallback-Bbxd2UU1.js";import"./isFocusVisible-B8k4qzLc.js";const a={"accordion-alt":"_accordion-alt_gmumf_11","accordion-alt--decorative":"_accordion-alt--decorative_gmumf_35","accordion-alt--open":"_accordion-alt--open_gmumf_39","accordion-alt--numbered":"_accordion-alt--numbered_gmumf_47","accordion-alt--label":"_accordion-alt--label_gmumf_58","accordion-alt--small":"_accordion-alt--small_gmumf_64","accordion-alt--large":"_accordion-alt--large_gmumf_68","accordion-alt__trigger":"_accordion-alt__trigger_gmumf_80","accordion-alt__header-content":"_accordion-alt__header-content_gmumf_102","accordion-alt__icon-badge":"_accordion-alt__icon-badge_gmumf_113","accordion-alt__number":"_accordion-alt__number_gmumf_128","accordion-alt__label-badge":"_accordion-alt__label-badge_gmumf_147","accordion-alt__title":"_accordion-alt__title_gmumf_165","accordion-alt__toggle":"_accordion-alt__toggle_gmumf_191","accordion-alt__panel":"_accordion-alt__panel_gmumf_216","accordion-alt__body-text":"_accordion-alt__body-text_gmumf_222"},Ae=({size:r})=>e.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),De=({size:r})=>e.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M18 15L12 9L6 15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Ie=({size:r})=>e.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M12 5V19M5 12H19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Te=({size:r})=>e.jsx("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M5 12H19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ke=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M11 19.25C11.9625 19.25 12.75 18.4625 12.75 17.5H9.25C9.25 18.4625 10.0375 19.25 11 19.25ZM16.5 13.75V9.16667C16.5 6.49583 15.0633 4.25583 12.5625 3.65167V3.04750C12.5625 2.32167 11.9817 1.75 11.2667 1.75H10.7333C10.0183 1.75 9.4375 2.32167 9.4375 3.04750V3.65167C6.92750 4.25583 5.5 6.48667 5.5 9.16667V13.75L3.75 15.5V16.375H18.25V15.5L16.5 13.75Z",fill:"currentColor"})}),Be={small:14,default:16,large:18},t=({type:r="decorative",size:n="default",openIcon:pe="chevron",title:ue="This is a decorative accordion title",number:me="01",label:w="Label",body:xe="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui.",showIcon:ge=!0,showNumber:be=!0,defaultOpen:he=!1,className:ye=""})=>{const[i,fe]=Se.useState(he),ve=Be[n],je=[a["accordion-alt"],a[`accordion-alt--${r}`],a[`accordion-alt--${n}`],i?a["accordion-alt--open"]:"",ye].filter(Boolean).join(" "),we=pe==="plus"?i?Te:Ie:i?De:Ae;return e.jsxs("div",{className:je,children:[e.jsxs(_e,{component:"button",type:"button",className:a["accordion-alt__trigger"],onClick:()=>fe(ze=>!ze),"aria-expanded":i,children:[e.jsxs("div",{className:a["accordion-alt__header-content"],children:[r==="decorative"&&ge&&e.jsx("span",{className:a["accordion-alt__icon-badge"],children:e.jsx(ke,{})}),r==="numbered"&&be&&e.jsx("span",{className:a["accordion-alt__number"],children:me}),r==="label"&&w&&e.jsx("span",{className:a["accordion-alt__label-badge"],children:w}),e.jsx("span",{className:a["accordion-alt__title"],children:ue})]}),e.jsx("span",{className:a["accordion-alt__toggle"],children:e.jsx(we,{size:ve})})]}),i&&e.jsx("div",{className:a["accordion-alt__panel"],children:e.jsx("p",{className:a["accordion-alt__body-text"],children:xe})})]})};t.__docgenInfo={description:`AccordionAlt — Alternate accordion styles for decorative, numbered, and label use cases.
Designed for marketing sections, step-by-step processes, and tagged data categories.`,methods:[],displayName:"AccordionAlt",props:{type:{required:!1,tsType:{name:"union",raw:"'decorative' | 'numbered' | 'label'",elements:[{name:"literal",value:"'decorative'"},{name:"literal",value:"'numbered'"},{name:"literal",value:"'label'"}]},description:"Visual type — decorative, numbered, or label",defaultValue:{value:"'decorative'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant — controls padding and font sizes",defaultValue:{value:"'default'",computed:!1}},openIcon:{required:!1,tsType:{name:"union",raw:"'chevron' | 'plus'",elements:[{name:"literal",value:"'chevron'"},{name:"literal",value:"'plus'"}]},description:"Icon style for the expand/collapse toggle",defaultValue:{value:"'chevron'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Accordion heading text",defaultValue:{value:"'This is a decorative accordion title'",computed:!1}},number:{required:!1,tsType:{name:"string"},description:'Number prefix for numbered type (e.g. "01")',defaultValue:{value:"'01'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label badge text for label type",defaultValue:{value:"'Label'",computed:!1}},body:{required:!1,tsType:{name:"string"},description:"Body text shown when expanded",defaultValue:{value:"'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui.'",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Show the bell icon badge (decorative type)",defaultValue:{value:"true",computed:!1}},showNumber:{required:!1,tsType:{name:"boolean"},description:"Show the number prefix (numbered type)",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Control initial open state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}}}};const j=()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"Accordion (alt.)",subtitle:"Alternate accordion styles designed for decorative, marketing, and structured data display — visually distinct from the standard utility accordion"}),e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"Accordion (alt.)"})," component provides three visually expressive accordion sub-types — ",e.jsx("em",{children:"decorative"}),", ",e.jsx("em",{children:"numbered"}),", and ",e.jsx("em",{children:"label"}),". Unlike the standard Accordion (which focuses on utility and functional disclosure), these variants are tailored for marketing hero sections, step-by-step processes, and tagged data categories."]}),e.jsxs(o.Section,{title:"MUI Foundation",children:[e.jsxs(o.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"ButtonBase"})," for the accordion ",e.jsx("strong",{children:"header toggle"})," ","— the full-width clickable bar that opens and closes each panel."," ",e.jsx("code",{children:"ButtonBase"})," provides keyboard activation, accessible"," ",e.jsx("code",{children:"aria-expanded"})," semantics, and a clean click target without any visual opinions. The decorative, numbered, and label sub-types all share this same"," ",e.jsx("code",{children:"ButtonBase"})," root; only the prefix element and border style differ. The expanding body is a plain ",e.jsx("code",{children:"<div>"})," with CSS animation. All styling is applied via CSS Modules and the ",e.jsx("code",{children:"--accordion-alt-*"})," token family."]}),e.jsx(o.CodeBlock,{children:`// MUI base import
import ButtonBase from '@mui/material/ButtonBase';

// AccordionAlt header trigger:
<ButtonBase
  component="button"
  className={styles['accordion-alt__header']}
  aria-expanded={isOpen}
  onClick={() => setIsOpen(o => !o)}
>`})]}),e.jsxs(o.Section,{title:"Component Anatomy",children:[e.jsx(o.BodyText,{children:"The diagram below uses the decorative type (open state) to show each numbered part and its corresponding tokens. The numbered and label types share the same layout; only the prefix element (icon badge, number, or tag) differs."}),e.jsx(o.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Fc7f6ee1c115f464ea06d29a28a6daacd",alt:"Accordion (alt.) component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Icon Frame",token:`--accordion-alt-icon-badge-size
--accordion-alt-icon-badge-bg (color/primary/sky-blue/sky-blue-50)
--accordion-alt-icon-badge-border-color (sky-blue-200)`,description:"Circular badge (28 x 28) shown in decorative type. Contains an SVG icon. Replaced by a number (numbered type) or tag pill (label type)."},{id:2,name:"Title",token:`--accordion-alt-title-font-family (F37 Ginger Pro Medium)
--accordion-alt-title-font-size-default (19px / 24px)
--accordion-alt-title-color (color/base/black)`,description:"Primary heading text. Truncates with ellipsis if it overflows the available horizontal space."},{id:3,name:"Container",token:`--accordion-alt-bg (color/base/white)
--accordion-alt-border-radius (8)
--accordion-alt-border-color-decorative (color/primary/sky-blue/sky-blue-200)
--accordion-alt-min-width
--accordion-alt-max-width (464)`,description:"Outer panel (W: 464, H: HUG). Props: type: decorative, open: False, size: default, open-icon: default (chevron). Width is fixed between open/closed states."},{id:4,name:"Open / Close Icon",token:`--accordion-alt-toggle-size-default (24 x 24)
--accordion-alt-toggle-bg (color/neutral/gray/gray-50)
--accordion-alt-toggle-border-color (gray-200)`,description:"Circular button containing a chevron or plus/minus icon. Controlled by the openIcon prop. Rotates/changes on open/close."}]})]}),e.jsxs(o.Section,{title:"Decorative Type",children:[e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"decorative"})," type features a sky-blue border, a circular bell icon badge, and a gradient background when open. Best suited for marketing hero sections and featured content areas."]}),e.jsx(o.Subsection,{title:"Closed",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(t,{type:"decorative",size:"default",showIcon:!0,title:"Discover what's new in our latest release"})})}),e.jsx(o.Subsection,{title:"Open",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(t,{type:"decorative",size:"default",showIcon:!0,title:"Discover what's new in our latest release",defaultOpen:!0})})})]}),e.jsxs(o.Section,{title:"Numbered Type",children:[e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"numbered"}),' type displays a number prefix (e.g. "01") in sky-blue. When open, the border turns sky-blue. Ideal for step-by-step processes, ordered lists, and sequential workflows.']}),e.jsx(o.Subsection,{title:"Closed",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(t,{type:"numbered",size:"default",number:"01",showNumber:!0,title:"Define your project requirements"})})}),e.jsx(o.Subsection,{title:"Open",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(t,{type:"numbered",size:"default",number:"01",showNumber:!0,title:"Define your project requirements",defaultOpen:!0})})})]}),e.jsxs(o.Section,{title:"Label Type",children:[e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"label"})," type uses a gray border with a small sky-blue tag/label badge. The badge is always visible. Designed for data categories, tagged content, and filtering interfaces."]}),e.jsx(o.Subsection,{title:"Closed",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(t,{type:"label",size:"default",label:"Category",title:"Filtering and sorting options"})})}),e.jsx(o.Subsection,{title:"Open",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(t,{type:"label",size:"default",label:"Category",title:"Filtering and sorting options",defaultOpen:!0})})})]}),e.jsxs(o.Section,{title:"Sizes",children:[e.jsxs(o.BodyText,{children:["Three sizes — ",e.jsx("strong",{children:"small"}),", ",e.jsx("strong",{children:"default"}),", and ",e.jsx("strong",{children:"large"})," — adapt the accordion to different layout contexts. All three types support all three sizes."]}),e.jsx(o.Subsection,{title:"Small",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(t,{type:"decorative",size:"small",showIcon:!0,title:"Small decorative accordion"})})}),e.jsx(o.Subsection,{title:"Default",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(t,{type:"decorative",size:"default",showIcon:!0,title:"Default decorative accordion"})})}),e.jsx(o.Subsection,{title:"Large",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(t,{type:"decorative",size:"large",showIcon:!0,title:"Large decorative accordion"})})})]}),e.jsxs(o.Section,{title:"Toggle Icons",children:[e.jsxs(o.BodyText,{children:["Choose between a ",e.jsx("strong",{children:"chevron"})," (up/down arrow) or ",e.jsx("strong",{children:"plus/minus"})," ","toggle icon. The toggle is rendered inside a small circular pill button."]}),e.jsx(o.Subsection,{title:"Chevron (default)",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(t,{type:"numbered",openIcon:"chevron",number:"01",showNumber:!0,title:"Chevron toggle icon"})})}),e.jsx(o.Subsection,{title:"Plus / Minus",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(t,{type:"numbered",openIcon:"plus",number:"01",showNumber:!0,title:"Plus/minus toggle icon"})})})]}),e.jsxs(o.Section,{title:"Width Behaviour",children:[e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"Accordion (alt.)"})," component maintains a ",e.jsx("strong",{children:"fixed outer width"})," ","between open and closed states. If the component is 400px wide when closed, it will remain exactly 400px wide when opened. This is enforced through ",e.jsx("code",{children:"box-sizing: border-box"}),","," ",e.jsx("code",{children:"width: 100%"}),", and a strict rule that no property change on open/close may alter the outer dimensions."]}),e.jsxs(o.BodyText,{children:["To visually emphasise the border on open states (decorative and numbered types), an"," ",e.jsx("strong",{children:"inset box-shadow"})," is used instead of increasing ",e.jsx("code",{children:"border-width"}),"."," ","This preserves the outer width while giving the appearance of a thicker, coloured border. The token ",e.jsx("code",{children:"--accordion-alt-border-width-open"})," controls the shadow spread that simulates the heavier border."]}),e.jsxs(o.BodyText,{children:["The component is constrained between ",e.jsx("code",{children:"--accordion-alt-min-width"})," (200px) and"," ",e.jsx("code",{children:"--accordion-alt-max-width"})," (600px). These limits ensure the component never becomes too narrow to read or too wide for its intended layout context."]})]}),e.jsx(o.TokenTable,{title:"Design Tokens",description:"AccordionAlt uses the following component-level tokens. All values reference global tokens.",tokens:[{name:"--accordion-alt-bg",description:"Panel background colour (white)"},{name:"--accordion-alt-bg-open-decorative",description:"Sky-blue gradient background for open decorative type"},{name:"--accordion-alt-border-radius",description:"Corner radius (8px)"},{name:"--accordion-alt-border-width",description:"Default border thickness (1px)"},{name:"--accordion-alt-border-width-open",description:"Inset box-shadow spread for open state — simulates a thicker border without changing outer width (2px)"},{name:"--accordion-alt-border-color-decorative",description:"Border colour for decorative type (sky-blue-200)"},{name:"--accordion-alt-border-color-decorative-open",description:"Border colour for open decorative type (sky-blue)"},{name:"--accordion-alt-border-color-numbered",description:"Border colour for numbered type (gray-200)"},{name:"--accordion-alt-border-color-numbered-open",description:"Border colour for open numbered type (sky-blue)"},{name:"--accordion-alt-border-color-label",description:"Border colour for label type (gray-200)"},{name:"--accordion-alt-min-width",description:"Minimum component width (200px)"},{name:"--accordion-alt-max-width",description:"Maximum component width (600px)"},{name:"--accordion-alt-padding-default",description:"Inner padding — default size (16px)"},{name:"--accordion-alt-padding-small",description:"Inner padding — small size (12px)"},{name:"--accordion-alt-padding-large",description:"Inner padding — large size (20px)"},{name:"--accordion-alt-toggle-size-default",description:"Toggle button size — default (24px)"},{name:"--accordion-alt-toggle-bg",description:"Toggle button background (gray-50)"},{name:"--accordion-alt-toggle-border-color",description:"Toggle button border colour (gray-200)"},{name:"--accordion-alt-icon-badge-size",description:"Icon badge size for decorative type (28px)"},{name:"--accordion-alt-number-color",description:"Number prefix colour (sky-blue)"},{name:"--accordion-alt-title-font-family",description:"Title font family (F37 Ginger Pro)"},{name:"--accordion-alt-title-font-size-default",description:"Title font size — default (18px)"},{name:"--accordion-alt-body-font-family",description:"Body text font family (Calibri)"},{name:"--accordion-alt-body-color",description:"Body text colour (gray-800)"}]}),e.jsx(o.CodeBlock,{children:`import { AccordionAlt } from './AccordionAlt';

// Decorative accordion with icon badge
<AccordionAlt
  type="decorative"
  size="default"
  openIcon="chevron"
  title="Discover what's new"
  body="Detailed content goes here..."
  showIcon
/>

// Numbered accordion for step-by-step flows
<AccordionAlt
  type="numbered"
  size="default"
  number="01"
  showNumber
  title="Define your requirements"
  body="Step details go here..."
/>

// Label accordion for tagged categories
<AccordionAlt
  type="label"
  size="default"
  label="Category"
  title="Filtering and sorting options"
  body="Category content goes here..."
/>`}),e.jsxs(o.Principles,{children:[e.jsx(o.PrincipleCard,{number:1,title:"Decorative Intent",children:"Use these alternate accordions when visual expression matters — hero sections, landing pages, and marketing content. For utility-focused disclosure, prefer the standard Accordion."}),e.jsx(o.PrincipleCard,{number:2,title:"Structured Numbering",children:"The numbered type implies sequence. Use it for step-by-step guides, processes, or ordered lists where progression matters. Keep numbers consistent and sequential."}),e.jsx(o.PrincipleCard,{number:3,title:"Meaningful Labels",children:"Label badges should categorise content at a glance. Keep labels short (1–2 words) and consistent across a set of accordions to maintain scannability."})]}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(t,{type:"numbered",size:"small",number:"01",showNumber:!0,title:"Step-by-step instructions"}),label:"Sequential content",description:"Use numbered accordions for ordered processes, steps, or guides where sequence matters."},dontItem:{icon:e.jsx(t,{type:"decorative",size:"small",showIcon:!1,title:"Click here"}),label:"Missing context",description:"Don't omit visual indicators (icons, numbers, labels) when the accordion type calls for them. They provide essential context."}}),e.jsx(o.Footer,{})]});j.__docgenInfo={description:"",methods:[],displayName:"AccordionAltDocs"};const $e={title:"Atoms/Accordion (alt.)",component:t,parameters:{docs:{page:()=>e.jsx(j,{})}},argTypes:{type:{control:"select",options:["decorative","numbered","label"]},size:{control:"select",options:["small","default","large"]},openIcon:{control:"select",options:["chevron","plus"]},title:{control:"text"},number:{control:"text"},label:{control:"text"},body:{control:"text"},showIcon:{control:"boolean"},showNumber:{control:"boolean"},defaultOpen:{control:"boolean"}},args:{type:"decorative",size:"default",openIcon:"chevron",title:"This is a decorative accordion title",number:"01",label:"Label",showIcon:!0,showNumber:!0,defaultOpen:!1}},l={name:"Documentation",render:()=>e.jsx(j,{}),parameters:{controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},s={name:"Playground"},d={name:"Default"},c={name:"Status / Decorative",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"20px",maxWidth:"900px"},children:[e.jsx(t,{type:"decorative",size:"default",showIcon:!0,title:"Closed"}),e.jsx(t,{type:"decorative",size:"default",showIcon:!0,title:"Open",defaultOpen:!0})]}),parameters:{controls:{disable:!0}}},p={name:"Status / Numbered",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"20px",maxWidth:"900px"},children:[e.jsx(t,{type:"numbered",size:"default",showNumber:!0,number:"01",title:"Numbered closed"}),e.jsx(t,{type:"numbered",size:"default",showNumber:!0,number:"02",title:"Numbered open",defaultOpen:!0})]}),parameters:{controls:{disable:!0}}},u={name:"Status / Label",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"20px",maxWidth:"900px"},children:[e.jsx(t,{type:"label",size:"default",label:"Tag",title:"Label closed"}),e.jsx(t,{type:"label",size:"default",label:"Tag",title:"Label open",defaultOpen:!0})]}),parameters:{controls:{disable:!0}}},m={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:"640px"},children:[e.jsx(t,{type:"decorative",size:"default",showIcon:!0,title:"Decorative type"}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"--accordion-alt-icon-badge-size / --accordion-alt-title-font-size-default"}),e.jsx(t,{type:"numbered",size:"default",showNumber:!0,number:"01",title:"Numbered type"}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"--accordion-alt-number-font-size-default"}),e.jsx(t,{type:"label",size:"default",label:"Tag",title:"Label type"}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"--accordion-alt-label-font-size"})]}),parameters:{controls:{disable:!0}}},x={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px",padding:"24px",maxWidth:"640px"},children:[e.jsx(t,{type:"decorative",size:"default",showIcon:!0,title:"Closed state"}),e.jsx(t,{type:"decorative",size:"default",showIcon:!0,title:"Open state",defaultOpen:!0})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"20px",maxWidth:"900px"},children:[e.jsx(t,{type:"decorative",size:"default",showIcon:!0,title:"Discover what's new in our latest release"}),e.jsx(t,{type:"decorative",size:"default",showIcon:!0,title:"Discover what's new in our latest release",defaultOpen:!0})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"20px",maxWidth:"900px"},children:[e.jsx(t,{type:"numbered",size:"default",number:"01",showNumber:!0,title:"Define your project requirements"}),e.jsx(t,{type:"numbered",size:"default",number:"01",showNumber:!0,title:"Define your project requirements",defaultOpen:!0})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"20px",maxWidth:"900px"},children:[e.jsx(t,{type:"label",size:"default",label:"Category",title:"Filtering and sorting options"}),e.jsx(t,{type:"label",size:"default",label:"Category",title:"Filtering and sorting options",defaultOpen:!0})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px",maxWidth:"900px"},children:["decorative","numbered","label"].map(r=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:r}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:["small","default","large"].map(n=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",marginBottom:"6px",textTransform:"capitalize"},children:n}),e.jsx(t,{type:r,size:n,showIcon:r==="decorative",showNumber:r==="numbered",number:"01",label:"Tag",title:`${n} ${r} accordion`})]},n))})]},r))}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px",maxWidth:"900px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Chevron"}),e.jsx(t,{type:"decorative",openIcon:"chevron",showIcon:!0,title:"Chevron toggle style"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Plus / Minus"}),e.jsx(t,{type:"decorative",openIcon:"plus",showIcon:!0,title:"Plus/minus toggle style"})]})]}),parameters:{controls:{disable:!0}}},v={name:"Full Design Matrix (18 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px",maxWidth:"960px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Decorative — All Sizes"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:["small","default","large"].map(r=>e.jsx(t,{type:"decorative",size:r,showIcon:!0,title:`Decorative ${r} accordion`},r))})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Decorative — Open"}),e.jsx(t,{type:"decorative",showIcon:!0,title:"Decorative open accordion",defaultOpen:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Numbered — All Sizes"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:["small","default","large"].map((r,n)=>e.jsx(t,{type:"numbered",size:r,number:String(n+1).padStart(2,"0"),showNumber:!0,title:`Step ${n+1}: ${r} numbered accordion`},r))})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Numbered — Open"}),e.jsx(t,{type:"numbered",number:"01",showNumber:!0,title:"Numbered open accordion",defaultOpen:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Label — All Sizes"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:["small","default","large"].map(r=>e.jsx(t,{type:"label",size:r,label:"Tag",title:`Label ${r} accordion`},r))})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Label — Open"}),e.jsx(t,{type:"label",label:"Category",title:"Label open accordion",defaultOpen:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Plus/Minus Icon"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(t,{type:"decorative",openIcon:"plus",showIcon:!0,title:"Plus icon — closed"}),e.jsx(t,{type:"decorative",openIcon:"plus",showIcon:!0,title:"Plus icon — open",defaultOpen:!0})]})]})]}),parameters:{controls:{disable:!0}}};var z,S,_;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <AccordionAltDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(_=(S=l.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var A,D,I;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(I=(D=s.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,k,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Default'
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var N,C,O;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Status / Decorative',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    maxWidth: '900px'
  }}>
      <AccordionAlt type="decorative" size="default" showIcon title="Closed" />
      <AccordionAlt type="decorative" size="default" showIcon title="Open" defaultOpen />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(O=(C=c.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var L,W,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Status / Numbered',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    maxWidth: '900px'
  }}>
      <AccordionAlt type="numbered" size="default" showNumber number="01" title="Numbered closed" />
      <AccordionAlt type="numbered" size="default" showNumber number="02" title="Numbered open" defaultOpen />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=(W=p.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var P,M,q;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Status / Label',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    maxWidth: '900px'
  }}>
      <AccordionAlt type="label" size="default" label="Tag" title="Label closed" />
      <AccordionAlt type="label" size="default" label="Tag" title="Label open" defaultOpen />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var V,$,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    maxWidth: '640px'
  }}>
      <AccordionAlt type="decorative" size="default" showIcon title="Decorative type" />
      <code style={{
      fontSize: '10px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '4px 8px',
      borderRadius: '4px'
    }}>--accordion-alt-icon-badge-size / --accordion-alt-title-font-size-default</code>
      <AccordionAlt type="numbered" size="default" showNumber number="01" title="Numbered type" />
      <code style={{
      fontSize: '10px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '4px 8px',
      borderRadius: '4px'
    }}>--accordion-alt-number-font-size-default</code>
      <AccordionAlt type="label" size="default" label="Tag" title="Label type" />
      <code style={{
      fontSize: '10px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '4px 8px',
      borderRadius: '4px'
    }}>--accordion-alt-label-font-size</code>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=($=m.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var U,H,G;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '24px',
    maxWidth: '640px'
  }}>
      <AccordionAlt type="decorative" size="default" showIcon title="Closed state" />
      <AccordionAlt type="decorative" size="default" showIcon title="Open state" defaultOpen />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(H=x.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var E,Z,K;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '20px',
    maxWidth: '900px'
  }}>
      <AccordionAlt type="decorative" size="default" showIcon title="Discover what's new in our latest release" />
      <AccordionAlt type="decorative" size="default" showIcon title="Discover what's new in our latest release" defaultOpen />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '20px',
    maxWidth: '900px'
  }}>
      <AccordionAlt type="numbered" size="default" number="01" showNumber title="Define your project requirements" />
      <AccordionAlt type="numbered" size="default" number="01" showNumber title="Define your project requirements" defaultOpen />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,te;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '20px',
    maxWidth: '900px'
  }}>
      <AccordionAlt type="label" size="default" label="Category" title="Filtering and sorting options" />
      <AccordionAlt type="label" size="default" label="Category" title="Filtering and sorting options" defaultOpen />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,re,ae;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px',
    maxWidth: '900px'
  }}>
      {(['decorative', 'numbered', 'label'] as const).map(type => <div key={type}>
          <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px',
        textTransform: 'capitalize'
      }}>
            {type}
          </p>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
            {(['small', 'default', 'large'] as const).map(size => <div key={size}>
                <p style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            color: 'var(--global-color-neutral-gray-400)',
            marginBottom: '6px',
            textTransform: 'capitalize'
          }}>{size}</p>
                <AccordionAlt type={type} size={size} showIcon={type === 'decorative'} showNumber={type === 'numbered'} number="01" label="Tag" title={\`\${size} \${type} accordion\`} />
              </div>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,ie,le;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px',
    maxWidth: '900px'
  }}>
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '8px'
      }}>Chevron</p>
        <AccordionAlt type="decorative" openIcon="chevron" showIcon title="Chevron toggle style" />
      </div>
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '8px'
      }}>Plus / Minus</p>
        <AccordionAlt type="decorative" openIcon="plus" showIcon title="Plus/minus toggle style" />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var se,de,ce;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Full Design Matrix (18 variants)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px',
    maxWidth: '960px'
  }}>
      {/* Decorative */}
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>Decorative — All Sizes</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
          {(['small', 'default', 'large'] as const).map(size => <AccordionAlt key={size} type="decorative" size={size} showIcon title={\`Decorative \${size} accordion\`} />)}
        </div>
      </div>

      {/* Decorative open */}
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>Decorative — Open</p>
        <AccordionAlt type="decorative" showIcon title="Decorative open accordion" defaultOpen />
      </div>

      {/* Numbered */}
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>Numbered — All Sizes</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
          {(['small', 'default', 'large'] as const).map((size, i) => <AccordionAlt key={size} type="numbered" size={size} number={String(i + 1).padStart(2, '0')} showNumber title={\`Step \${i + 1}: \${size} numbered accordion\`} />)}
        </div>
      </div>

      {/* Numbered open */}
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>Numbered — Open</p>
        <AccordionAlt type="numbered" number="01" showNumber title="Numbered open accordion" defaultOpen />
      </div>

      {/* Label */}
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>Label — All Sizes</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
          {(['small', 'default', 'large'] as const).map(size => <AccordionAlt key={size} type="label" size={size} label="Tag" title={\`Label \${size} accordion\`} />)}
        </div>
      </div>

      {/* Label open */}
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>Label — Open</p>
        <AccordionAlt type="label" label="Category" title="Label open accordion" defaultOpen />
      </div>

      {/* Plus icon */}
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>Plus/Minus Icon</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
          <AccordionAlt type="decorative" openIcon="plus" showIcon title="Plus icon — closed" />
          <AccordionAlt type="decorative" openIcon="plus" showIcon title="Plus icon — open" defaultOpen />
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const Re=["Documentation","Playground","Default","StatusDecorative","StatusNumbered","StatusLabel","ComponentBreakdown","AllInteractiveStates","DecorativeType","NumberedType","LabelType","Sizes","ToggleIcons","FullDesignMatrix"];export{x as AllInteractiveStates,m as ComponentBreakdown,g as DecorativeType,d as Default,l as Documentation,v as FullDesignMatrix,h as LabelType,b as NumberedType,s as Playground,y as Sizes,c as StatusDecorative,u as StatusLabel,p as StatusNumbered,f as ToggleIcons,Re as __namedExportsOrder,$e as default};
