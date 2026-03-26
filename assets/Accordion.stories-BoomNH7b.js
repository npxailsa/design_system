import{r as se,j as e}from"./iframe-CbYwQ_Px.js";import{S as ae}from"./StatusIcon-BH-A20Po.js";import{D as o}from"./DocsTemplate-DH3GhYun.js";import"./preload-helper-Dp1pzeXC.js";const re="_accordion_bllw0_10",le="_accordion__body_bllw0_73",ce="_accordion__trigger_bllw0_83",de="_accordion__title_bllw0_105",pe="_accordion__desc_bllw0_156",ue="_accordion__icon_bllw0_171",he="_accordion__panel_bllw0_181",n={accordion:re,"accordion--no-stroke":"_accordion--no-stroke_bllw0_34","accordion--large":"_accordion--large_bllw0_41","accordion--small":"_accordion--small_bllw0_46","accordion--open":"_accordion--open_bllw0_53","accordion__status-icon":"_accordion__status-icon_bllw0_59","accordion__leading-icon":"_accordion__leading-icon_bllw0_66",accordion__body:le,accordion__trigger:ce,"accordion__title-group":"_accordion__title-group_bllw0_105",accordion__title:de,"accordion__title--no-stroke":"_accordion__title--no-stroke_bllw0_140",accordion__desc:pe,accordion__icon:ue,accordion__panel:he,"accordion__body-text":"_accordion__body-text_bllw0_191"},ge=({size:t})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),me=({size:t})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M18 15L12 9L6 15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),xe=({size:t})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M12 5V19M5 12H19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),fe=({size:t})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M5 12H19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ye=()=>e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:n["accordion__leading-icon"],children:e.jsx("g",{opacity:"0.5",children:e.jsx("path",{d:"M11 19.25C11.9625 19.25 12.75 18.4625 12.75 17.5H9.25C9.25 18.4625 10.0375 19.25 11 19.25ZM16.5 13.75V9.16667C16.5 6.49583 15.0633 4.25583 12.5625 3.65167V3.04750C12.5625 2.32167 11.9817 1.75 11.2667 1.75H10.7333C10.0183 1.75 9.4375 2.32167 9.4375 3.04750V3.65167C6.92750 4.25583 5.5 6.48667 5.5 9.16667V13.75L3.75 15.5V16.375H18.25V15.5L16.5 13.75Z",fill:"#1C1C1C"})})}),we={small:24,default:28,large:32},i=({type:t="simple",size:x="default",openIcon:U="chevron",title:f="This is a section title taking up a lot of space...",description:y="This is supporting text to help describe the content within the accordion",body:Z="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.",showLeadingIcon:$=!0,showStatusIcon:K=!0,showDescription:Q=!0,defaultOpen:J=!1,className:X=""})=>{const[s,Y]=se.useState(J),ee=we[x],oe=[n.accordion,n[`accordion--${t}`],n[`accordion--${x}`],s?n["accordion--open"]:"",X].filter(Boolean).join(" "),ie=U==="plus"?s?fe:xe:s?me:ge,te=t==="no-stroke"?"This is a section title or a long question taking up a lot of space...":f;return e.jsxs("div",{className:oe,children:[t==="simple"&&K&&e.jsx(ae,{type:"complete",size:"small",step:"future",label:!1,className:n["accordion__status-icon"]}),$&&e.jsx(ye,{}),e.jsxs("div",{className:n.accordion__body,children:[e.jsxs("button",{type:"button",className:n.accordion__trigger,onClick:()=>Y(ne=>!ne),"aria-expanded":s,children:[e.jsx("div",{className:n["accordion__title-group"],children:t==="simple"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:n.accordion__title,children:f}),Q&&!s&&e.jsx("span",{className:n.accordion__desc,children:y}),s&&e.jsx("span",{className:n.accordion__desc,children:y})]}):e.jsx("span",{className:n["accordion__title--no-stroke"],children:te})}),e.jsx("span",{className:n.accordion__icon,children:e.jsx(ie,{size:ee})})]}),s&&e.jsx("div",{className:n.accordion__panel,children:e.jsx("p",{className:n["accordion__body-text"],children:Z})})]})]})};i.__docgenInfo={description:`Accordion component — collapsible content panel with multiple variants.
Supports simple (bordered) and no-stroke (borderless) types, three sizes,
chevron or plus/minus toggle icons, and optional leading/status icons.`,methods:[],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:"'simple' | 'no-stroke'",elements:[{name:"literal",value:"'simple'"},{name:"literal",value:"'no-stroke'"}]},description:'Visual type — "simple" has border, "no-stroke" is borderless',defaultValue:{value:"'simple'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant — controls padding and font sizes",defaultValue:{value:"'default'",computed:!1}},openIcon:{required:!1,tsType:{name:"union",raw:"'chevron' | 'plus'",elements:[{name:"literal",value:"'chevron'"},{name:"literal",value:"'plus'"}]},description:"Icon style for the expand/collapse toggle",defaultValue:{value:"'chevron'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:"Accordion heading / question text",defaultValue:{value:"'This is a section title taking up a lot of space...'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Supporting subtitle below the title (simple type only)",defaultValue:{value:"'This is supporting text to help describe the content within the accordion'",computed:!1}},body:{required:!1,tsType:{name:"string"},description:"Body text shown when expanded",defaultValue:{value:"'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum ac tortor et lacinia. Suspendisse hendrerit mi vitae mauris dictum interdum vitae eget dui. Vivamus urna eros, facilisis et laoreet accumsan, feugiat sed sapien. Vestibulum euismod massa enim, nec malesuada tellus scelerisque in. Donec sodales posuere convallis. Donec vel urna finibus augue accumsan posuere in et nunc.'",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the optional leading bell icon",defaultValue:{value:"true",computed:!1}},showStatusIcon:{required:!1,tsType:{name:"boolean"},description:"Show the optional status icon (building blocks)",defaultValue:{value:"true",computed:!1}},showDescription:{required:!1,tsType:{name:"boolean"},description:"Show the description/supporting text",defaultValue:{value:"true",computed:!1}},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"Control open state externally (uncontrolled by default)",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}}}};const m=()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"Accordion",subtitle:"Collapsible content panels that progressively disclose information, reducing visual complexity while keeping content accessible on demand"}),e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"Accordion"})," component allows users to expand and collapse sections of content. It supports two structural types — ",e.jsx("em",{children:"simple"})," (bordered) and"," ",e.jsx("em",{children:"no-stroke"})," (borderless) — three sizes, and two toggle icon styles. Optional leading icons and status indicators provide additional context at a glance."]}),e.jsxs(o.Section,{title:"Component Anatomy",children:[e.jsx(o.BodyText,{children:"The diagram below identifies each numbered part of the Accordion component (simple type, default size, open state) along with the tokens and sub-components that control it."}),e.jsx(o.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",flexDirection:"column",background:"var(--global-color-base-white)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-8px)",padding:"var(--global-spacing-sizing-20px) var(--global-spacing-sizing-24px) var(--global-spacing-sizing-20px) var(--global-spacing-sizing-20px)",minWidth:"300px",maxWidth:"600px",width:"100%"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsx(o.AnatomyMarker,{id:1,position:"top-left",children:e.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{flexShrink:0},children:[e.jsx("circle",{cx:"14",cy:"14",r:"12",stroke:"var(--global-color-neutral-gray-400)",strokeWidth:"1.5",fill:"none"}),e.jsx("path",{d:"M14 8v4l3 3",stroke:"var(--global-color-neutral-gray-400)",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsx(o.AnatomyMarker,{id:2,position:"top-left",children:e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{flexShrink:0},children:e.jsx("path",{d:"M14 4c-1.5 0-2.5 1-2.5 2.5S14 10 14 10s2.5-2 2.5-3.5S15.5 4 14 4zM10 22h8M14 10v12",stroke:"var(--global-color-neutral-gray-400)",strokeWidth:"1.5",strokeLinecap:"round"})})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[e.jsx(o.AnatomyMarker,{id:3,children:e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"19px",color:"var(--global-color-base-black)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"This is a section title..."})}),e.jsx(o.AnatomyMarker,{id:4,children:e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"14px",color:"var(--color-primary-blue-gray-blue-gray)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:"Supporting description text"})})]}),e.jsx(o.AnatomyMarker,{id:5,position:"top-right",children:e.jsx("svg",{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{flexShrink:0},children:e.jsx("path",{d:"M8 11l6 6 6-6",stroke:"var(--global-color-neutral-gray-600)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),e.jsx("div",{style:{paddingTop:"var(--global-spacing-sizing-16px)"},children:e.jsx(o.AnatomyMarker,{id:6,children:e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"14px",color:"var(--global-color-neutral-gray-700)",lineHeight:1.5},children:"Expanded body content goes here. This panel is visible only when the accordion is open."})})})]}),parts:[{id:1,name:"Status Icon",token:`filled/icons (display category)
--accordion-icon-size-{size}`,description:"Optional icon communicating category or state. Positioned at the far left. Toggle with showStatusIcon prop."},{id:2,name:"Leading Icon",token:`filled/icons (display category)
--accordion-icon-size-{size}`,description:"Optional secondary leading icon (bell). Appears after the status icon. Toggle with showLeadingIcon prop."},{id:3,name:"Title",token:`--accordion-title-font-family
--accordion-title-font-size-{size}
--accordion-title-color
--accordion-title-weight`,description:"Primary heading text using F37 Ginger Pro. Truncates with ellipsis if content overflows available width."},{id:4,name:"Description",token:`--accordion-desc-font-family
--accordion-desc-color
--accordion-desc-font-size`,description:"Supporting subtext below the title. Truncates with ellipsis on overflow. Toggle with showDescription prop."},{id:5,name:"Toggle Icon",token:`--accordion-icon-size-{size}
--accordion-icon-color`,description:"Chevron or plus/minus icon that rotates/changes on open/close. Controlled by the openIcon prop."},{id:6,name:"Body Text",token:`--accordion-body-color
--accordion-body-font-family
--accordion-body-font-size
--accordion-content-gap-default`,description:"Expanded content panel. Wraps text normally (word-wrap: break-word). Appears only in open state."}]})]}),e.jsxs(o.Section,{title:"Types",children:[e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"simple"})," type renders with a visible border and supports a status icon and supporting description text. The ",e.jsx("strong",{children:"no-stroke"})," type is borderless and suited for use inside cards, panels, or other contained surfaces."]}),e.jsx(o.Subsection,{title:"Simple (Bordered)",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(i,{type:"simple",size:"default",openIcon:"chevron",showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0}),e.jsx(i,{type:"simple",size:"default",openIcon:"chevron",showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0,defaultOpen:!0})]})}),e.jsx(o.Subsection,{title:"No-Stroke (Borderless)",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-4px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(i,{type:"no-stroke",size:"default",openIcon:"chevron",showLeadingIcon:!1,showStatusIcon:!1}),e.jsx(i,{type:"no-stroke",size:"default",openIcon:"chevron",showLeadingIcon:!1,showStatusIcon:!1,defaultOpen:!0})]})})]}),e.jsxs(o.Section,{title:"Toggle Icons",children:[e.jsxs(o.BodyText,{children:["Choose between a ",e.jsx("strong",{children:"chevron"})," (up/down arrow) or ",e.jsx("strong",{children:"plus/minus"})," ","toggle icon. The chevron is the default and works well for most contexts. The plus/minus style is better suited for FAQ-style or no-stroke accordions."]}),e.jsx(o.Subsection,{title:"Chevron",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(i,{type:"simple",openIcon:"chevron",showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0})})}),e.jsx(o.Subsection,{title:"Plus / Minus",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(i,{type:"no-stroke",openIcon:"plus",showStatusIcon:!1,showLeadingIcon:!1})})})]}),e.jsxs(o.Section,{title:"Sizes",children:[e.jsx(o.BodyText,{children:"Three sizes adapt the accordion to different contexts — from compact data tables to prominent page sections."}),e.jsx(o.Subsection,{title:"Small",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(i,{type:"simple",size:"small",showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0})})}),e.jsx(o.Subsection,{title:"Default",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(i,{type:"simple",size:"default",showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0})})}),e.jsx(o.Subsection,{title:"Large",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(i,{type:"simple",size:"large",showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0})})})]}),e.jsxs(o.Section,{title:"Optional Elements",children:[e.jsx(o.BodyText,{children:"The leading icon, status icon, and supporting description text are all independently toggleable. Mix and match based on the context and content needs."}),e.jsx(o.Subsection,{title:"With Status Icon + Leading Icon + Description",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(i,{type:"simple",showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0})})}),e.jsx(o.Subsection,{title:"Status Icon Only",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(i,{type:"simple",showStatusIcon:!0,showLeadingIcon:!1,showDescription:!1})})}),e.jsx(o.Subsection,{title:"Leading Icon Only",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(i,{type:"simple",showStatusIcon:!1,showLeadingIcon:!0,showDescription:!1})})}),e.jsx(o.Subsection,{title:"Title Only",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-16px) 0"},children:e.jsx(i,{type:"simple",showStatusIcon:!1,showLeadingIcon:!1,showDescription:!1})})})]}),e.jsxs(o.Section,{title:"Width Behaviour",children:[e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"Accordion"})," component maintains a ",e.jsx("strong",{children:"fixed outer width"})," ","between open and closed states. If the component is 400px wide when collapsed, it will remain exactly 400px wide when expanded. This is enforced through"," ",e.jsx("code",{children:"box-sizing: border-box"}),", ",e.jsx("code",{children:"width: 100%"}),", and a design-system rule that no property change on open/close may alter the outer dimensions."]}),e.jsxs(o.BodyText,{children:["The component is constrained between ",e.jsx("code",{children:"--accordion-min-width"})," (300px) and"," ",e.jsx("code",{children:"--accordion-max-width"})," (800px). Title and description text will truncate with an ellipsis when the content exceeds the available horizontal space. Body text inside the expanded panel wraps normally using ",e.jsx("code",{children:"word-wrap: break-word"}),"."]})]}),e.jsx(o.TokenTable,{title:"Design Tokens",description:"Accordion uses the following component-level tokens. All values reference global tokens.",tokens:[{name:"--accordion-bg",description:"Panel background colour (white)"},{name:"--accordion-border-radius",description:"Corner radius of the bordered variant (8px)"},{name:"--accordion-border-width",description:"Border thickness for simple type (1px)"},{name:"--accordion-border-color",description:"Border colour for simple type (gray-200)"},{name:"--accordion-border-color-none",description:"Border colour for no-stroke type (transparent)"},{name:"--accordion-min-width",description:"Minimum panel width (300px)"},{name:"--accordion-max-width",description:"Maximum panel width (800px)"},{name:"--accordion-min-height",description:"Minimum collapsed height (70px)"},{name:"--accordion-gap",description:"Gap between icon columns and content (12px)"},{name:"--accordion-padding-default",description:"Inner padding for default size (20px 24px 20px 20px)"},{name:"--accordion-padding-large",description:"Inner padding for large size (24px 28px 24px 24px)"},{name:"--accordion-padding-small",description:"Inner padding for small size (14px 20px 14px 16px)"},{name:"--accordion-padding-no-stroke",description:"Inner padding for no-stroke type (20px 24px)"},{name:"--accordion-title-font-family",description:"Font family for the simple-type title (F37 Ginger Pro)"},{name:"--accordion-title-font-size-default",description:"Title font size — default (19px)"},{name:"--accordion-title-font-size-large",description:"Title font size — large (22px)"},{name:"--accordion-title-font-size-small",description:"Title font size — small (16px)"},{name:"--accordion-title-color",description:"Title text colour (base-black)"},{name:"--accordion-title-color-no-stroke-closed",description:"Title colour for collapsed no-stroke accordion (#191e3c)"},{name:"--accordion-desc-color",description:"Supporting description text colour (secondary-blue-gray)"},{name:"--accordion-desc-font-family",description:"Font family for description and body text (Calibri)"},{name:"--accordion-body-color",description:"Expanded body text colour (gray-900)"},{name:"--accordion-icon-size-default",description:"Toggle icon size — default (28px)"},{name:"--accordion-icon-size-large",description:"Toggle icon size — large (32px)"},{name:"--accordion-icon-size-small",description:"Toggle icon size — small (24px)"},{name:"--accordion-content-gap-default",description:"Gap between heading and body text when open (16px)"},{name:"--accordion-transition-duration",description:"Animation duration for expand/collapse (220ms)"}]}),e.jsx(o.CodeBlock,{children:`import { Accordion } from './Accordion';

// Simple accordion (bordered)
<Accordion
  type="simple"
  size="default"
  openIcon="chevron"
  title="This is a section title..."
  description="Supporting text goes here"
  body="Expanded body content goes here..."
  showStatusIcon
  showLeadingIcon
  showDescription
/>

// No-stroke (borderless) accordion with plus icon
<Accordion
  type="no-stroke"
  size="default"
  openIcon="plus"
  title="What is this feature about?"
  body="Detailed answer goes here..."
  showStatusIcon={false}
  showLeadingIcon={false}
/>

// Pre-expanded accordion
<Accordion
  type="simple"
  defaultOpen
  title="Expanded by default"
/>`}),e.jsxs(o.Principles,{children:[e.jsx(o.PrincipleCard,{number:1,title:"Progressive Disclosure",children:"Show only what is necessary. Use accordions to hide secondary or supporting content that users can reveal on demand, reducing initial cognitive load."}),e.jsx(o.PrincipleCard,{number:2,title:"Meaningful Headings",children:"Write accordion titles as clear questions or concise topic labels. Titles must communicate enough context so users can decide whether to expand the section."}),e.jsx(o.PrincipleCard,{number:3,title:"Consistent Icon Usage",children:"Use status icons to indicate the category or completion state of a section. Keep icon usage consistent across all accordions in the same view."})]}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(i,{type:"simple",size:"small",showStatusIcon:!0,showLeadingIcon:!1,showDescription:!1,title:"Section title"}),label:"Descriptive titles",description:"Write clear, concise titles that describe the hidden content so users can make informed decisions before expanding."},dontItem:{icon:e.jsx(i,{type:"simple",size:"small",showStatusIcon:!1,showLeadingIcon:!1,showDescription:!1,title:"Click here..."}),label:"Vague labels",description:`Don't use vague labels like "Click here" or "Read more". Titles should stand alone and communicate the section's purpose.`}}),e.jsx(o.Footer,{})]});m.__docgenInfo={description:"",methods:[],displayName:"AccordionDocs"};const Ie={title:"Atoms/Accordion",component:i,parameters:{docs:{page:()=>e.jsx(m,{})}},argTypes:{type:{control:"select",options:["simple","no-stroke"]},size:{control:"select",options:["small","default","large"]},openIcon:{control:"select",options:["chevron","plus"]},title:{control:"text"},description:{control:"text"},body:{control:"text"},showLeadingIcon:{control:"boolean"},showStatusIcon:{control:"boolean"},showDescription:{control:"boolean"},defaultOpen:{control:"boolean"}},args:{type:"simple",size:"default",openIcon:"chevron",showLeadingIcon:!0,showStatusIcon:!0,showDescription:!0,defaultOpen:!1}},a={render:()=>e.jsx(m,{}),parameters:{controls:{disable:!0},actions:{disable:!0}}},r={},l={args:{defaultOpen:!0}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"20px",maxWidth:"900px"},children:[e.jsx(i,{type:"simple",size:"default",title:"This is a section title taking up a lot of space...",description:"This is supporting text to help describe the content within the accordion",showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0}),e.jsx(i,{type:"simple",size:"default",title:"This is a section title taking up a lot of space...",description:"This is supporting text to help describe the content within the accordion",showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0,defaultOpen:!0})]}),parameters:{controls:{disable:!0}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",padding:"20px",maxWidth:"900px"},children:[e.jsx(i,{type:"no-stroke",size:"default",title:"This is a section title or a long question taking up a lot of space...",showStatusIcon:!1,showLeadingIcon:!1,showDescription:!1}),e.jsx(i,{type:"no-stroke",size:"default",title:"This is a section title or a long question taking up a lot of space...",showStatusIcon:!1,showLeadingIcon:!1,showDescription:!1,defaultOpen:!0})]}),parameters:{controls:{disable:!0}}},p={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px",maxWidth:"900px"},children:["small","default","large"].map(t=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"8px"},children:t}),e.jsx(i,{type:"simple",size:t,showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0})]},t))}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px",maxWidth:"900px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Chevron"}),e.jsx(i,{type:"simple",openIcon:"chevron",showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Plus / Minus"}),e.jsx(i,{type:"no-stroke",openIcon:"plus",showStatusIcon:!1,showLeadingIcon:!1,title:"This is a section title or a long question taking up a lot of space..."})]})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"20px",maxWidth:"900px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-500)",marginBottom:"6px"},children:"Status icon + Leading icon + Description"}),e.jsx(i,{type:"simple",showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-500)",marginBottom:"6px"},children:"Status icon only"}),e.jsx(i,{type:"simple",showStatusIcon:!0,showLeadingIcon:!1,showDescription:!1})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-500)",marginBottom:"6px"},children:"Leading icon only"}),e.jsx(i,{type:"simple",showStatusIcon:!1,showLeadingIcon:!0,showDescription:!1})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-500)",marginBottom:"6px"},children:"Title only"}),e.jsx(i,{type:"simple",showStatusIcon:!1,showLeadingIcon:!1,showDescription:!1})]})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px",maxWidth:"960px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Simple — All Sizes"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:["small","default","large"].map(t=>e.jsx(i,{type:"simple",size:t,showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0},t))})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Simple — Open"}),e.jsx(i,{type:"simple",showStatusIcon:!0,showLeadingIcon:!0,showDescription:!0,defaultOpen:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"No-stroke type"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(i,{type:"no-stroke",showStatusIcon:!1,showLeadingIcon:!1,title:"This is a section title or a long question taking up a lot of space..."}),e.jsx(i,{type:"no-stroke",showStatusIcon:!1,showLeadingIcon:!1,title:"This is a section title or a long question taking up a lot of space...",defaultOpen:!0})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Plus/minus icon"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(i,{type:"no-stroke",openIcon:"plus",showStatusIcon:!1,showLeadingIcon:!1,title:"This is a section title or a long question taking up a lot of space..."}),e.jsx(i,{type:"no-stroke",openIcon:"plus",showStatusIcon:!1,showLeadingIcon:!1,title:"This is a section title or a long question taking up a lot of space...",defaultOpen:!0})]})]})]}),parameters:{controls:{disable:!0}}};var w,v,b;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <AccordionDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var j,S,I;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var _,k,z;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...(z=(k=l.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var T,D,L;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '20px',
    maxWidth: '900px'
  }}>
      <Accordion type="simple" size="default" title="This is a section title taking up a lot of space..." description="This is supporting text to help describe the content within the accordion" showStatusIcon showLeadingIcon showDescription />
      <Accordion type="simple" size="default" title="This is a section title taking up a lot of space..." description="This is supporting text to help describe the content within the accordion" showStatusIcon showLeadingIcon showDescription defaultOpen />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(L=(D=c.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var A,B,C;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    padding: '20px',
    maxWidth: '900px'
  }}>
      <Accordion type="no-stroke" size="default" title="This is a section title or a long question taking up a lot of space..." showStatusIcon={false} showLeadingIcon={false} showDescription={false} />
      <Accordion type="no-stroke" size="default" title="This is a section title or a long question taking up a lot of space..." showStatusIcon={false} showLeadingIcon={false} showDescription={false} defaultOpen />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var O,W,F;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px',
    maxWidth: '900px'
  }}>
      {(['small', 'default', 'large'] as const).map(size => <div key={size}>
          <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'capitalize',
        marginBottom: '8px'
      }}>{size}</p>
          <Accordion type="simple" size={size} showStatusIcon showLeadingIcon showDescription />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=(W=p.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var q,M,N;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        <Accordion type="simple" openIcon="chevron" showStatusIcon showLeadingIcon showDescription />
      </div>
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '8px'
      }}>Plus / Minus</p>
        <Accordion type="no-stroke" openIcon="plus" showStatusIcon={false} showLeadingIcon={false} title="This is a section title or a long question taking up a lot of space..." />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var V,P,E;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '20px',
    maxWidth: '900px'
  }}>
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '6px'
      }}>Status icon + Leading icon + Description</p>
        <Accordion type="simple" showStatusIcon showLeadingIcon showDescription />
      </div>
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '6px'
      }}>Status icon only</p>
        <Accordion type="simple" showStatusIcon showLeadingIcon={false} showDescription={false} />
      </div>
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '6px'
      }}>Leading icon only</p>
        <Accordion type="simple" showStatusIcon={false} showLeadingIcon showDescription={false} />
      </div>
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '6px'
      }}>Title only</p>
        <Accordion type="simple" showStatusIcon={false} showLeadingIcon={false} showDescription={false} />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(P=h.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var H,G,R;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px',
    maxWidth: '960px'
  }}>
      {/* Simple type — all sizes */}
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>Simple — All Sizes</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
          {(['small', 'default', 'large'] as const).map(size => <Accordion key={size} type="simple" size={size} showStatusIcon showLeadingIcon showDescription />)}
        </div>
      </div>
      {/* Simple open */}
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>Simple — Open</p>
        <Accordion type="simple" showStatusIcon showLeadingIcon showDescription defaultOpen />
      </div>
      {/* No-stroke */}
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>No-stroke type</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
          <Accordion type="no-stroke" showStatusIcon={false} showLeadingIcon={false} title="This is a section title or a long question taking up a lot of space..." />
          <Accordion type="no-stroke" showStatusIcon={false} showLeadingIcon={false} title="This is a section title or a long question taking up a lot of space..." defaultOpen />
        </div>
      </div>
      {/* Plus icon */}
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>Plus/minus icon</p>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
          <Accordion type="no-stroke" openIcon="plus" showStatusIcon={false} showLeadingIcon={false} title="This is a section title or a long question taking up a lot of space..." />
          <Accordion type="no-stroke" openIcon="plus" showStatusIcon={false} showLeadingIcon={false} title="This is a section title or a long question taking up a lot of space..." defaultOpen />
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(G=g.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};const _e=["Documentation","Default","OpenState","SimpleType","NoStrokeType","Sizes","ToggleIcons","OptionalElements","AllVariants"];export{g as AllVariants,r as Default,a as Documentation,d as NoStrokeType,l as OpenState,h as OptionalElements,c as SimpleType,p as Sizes,u as ToggleIcons,_e as __namedExportsOrder,Ie as default};
