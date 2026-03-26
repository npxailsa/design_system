import{j as e}from"./iframe-Bq2xGSkw.js";import{D as l}from"./DocsTemplate-DptGLXAJ.js";import{A as I,P as j}from"./Person-D6AFmPO_.js";import{C as t}from"./Check-HXvUfgZf.js";import{c as Ue}from"./createSvgIcon-srtIEZa1.js";import{L as _}from"./LocalOfferOutlined-UxzIKWzG.js";import"./preload-helper-Dp1pzeXC.js";const Me="_tag_uy353_10",Ge="_tag__icon_uy353_208",Ke="_tag__label_uy353_235",$e="_tag__count_uy353_247",He="_tag__remove_uy353_281",r={tag:Me,"tag--small":"_tag--small_uy353_41","tag--large":"_tag--large_uy353_49","tag--default":"_tag--default_uy353_59","tag--blue":"_tag--blue_uy353_65","tag--seafoam":"_tag--seafoam_uy353_71","tag--yellow":"_tag--yellow_uy353_77","tag--dark":"_tag--dark_uy353_83","tag--navy":"_tag--navy_uy353_89","tag--red":"_tag--red_uy353_95","tag--green":"_tag--green_uy353_101","tag--purple":"_tag--purple_uy353_107","tag--info":"_tag--info_uy353_113","tag--outline":"_tag--outline_uy353_121","tag--selected":"_tag--selected_uy353_135","tag--interactive":"_tag--interactive_uy353_185","tag--disabled":"_tag--disabled_uy353_200",tag__icon:Ge,"tag__icon-svg":"_tag__icon-svg_uy353_215",tag__label:Ke,tag__count:$e,tag__remove:He},a=({label:o="Label",size:T="default",colour:Re="blue",variant:Pe="filled",leadingIcon:z,showLeadingIcon:Ve=!1,trailingIcon:S,showTrailingIcon:Ae=!1,showRemove:Ne=!1,count:C,showCount:Oe=!1,selected:L=!1,disabled:s=!1,onClick:i,onRemove:d,className:Be=""})=>{const Fe=[r.tag,r[`tag--${T}`],r[`tag--${Re}`],r[`tag--${Pe}`],L?r["tag--selected"]:"",s?r["tag--disabled"]:"",i||d?r["tag--interactive"]:"",Be].filter(Boolean).join(" "),qe=n=>{!s&&i&&(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),i())},Ee=n=>{!s&&d&&(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),n.stopPropagation(),d())};return e.jsxs("span",{className:Fe,onClick:!s&&i?i:void 0,onKeyDown:qe,role:i?"button":void 0,tabIndex:i&&!s?0:void 0,"aria-pressed":i&&L?!0:void 0,"aria-disabled":s?!0:void 0,children:[Ve&&z&&e.jsx("span",{className:r.tag__icon,"aria-hidden":"true",children:e.jsx(z,{className:r["tag__icon-svg"]})}),e.jsx("span",{className:r.tag__label,children:o}),Oe&&C!==void 0&&e.jsx("span",{className:r.tag__count,children:C}),Ae&&S&&e.jsx("span",{className:r.tag__icon,"aria-hidden":"true",children:e.jsx(S,{className:r["tag__icon-svg"]})}),Ne&&e.jsx("button",{type:"button",className:r.tag__remove,onClick:n=>{n.stopPropagation(),!s&&d&&d()},onKeyDown:Ee,"aria-label":"Remove tag",tabIndex:s?-1:0,disabled:s,children:e.jsx("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M7 1L1 7M1 1L7 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})};a.__docgenInfo={description:`Tag — A compact pill-shaped label used to categorise, filter, or annotate
content. Supports 10 colour variants, 3 sizes, filled/outline styles, and
optional leading icons, remove buttons, and count badges.`,methods:[],displayName:"Tag",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed inside the tag",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},colour:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'blue'
| 'seafoam'
| 'yellow'
| 'dark'
| 'navy'
| 'red'
| 'green'
| 'purple'
| 'info'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'seafoam'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'navy'"},{name:"literal",value:"'red'"},{name:"literal",value:"'green'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'info'"}]},description:"Colour variant",defaultValue:{value:"'blue'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:"Visual style — filled (default) or outline",defaultValue:{value:"'filled'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered before the label"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered after the label"},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the trailing icon",defaultValue:{value:"false",computed:!1}},showRemove:{required:!1,tsType:{name:"boolean"},description:"Show a dismiss/remove × button on the trailing edge",defaultValue:{value:"false",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"Numeric count badge shown after the label"},showCount:{required:!1,tsType:{name:"boolean"},description:"Show the count badge",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether the tag is in a selected / active state",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the tag (prevents interaction)",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the tag body"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the remove × button"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}}}};const c=Ue(e.jsx("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"})),D=["blue","seafoam","yellow","dark","navy","red","green","purple","info","default"],k=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"Tag",subtitle:"Compact pill-shaped labels for categorising, filtering, and annotating content across the interface"}),e.jsxs(l.BodyText,{children:["The ",e.jsx("strong",{children:"Tag"})," component is a small, highly versatile pill label used to represent categories, attributes, or states. It supports 10 colour variants, 3 sizes, filled and outline styles, optional leading icons, removable dismiss buttons, and numeric count badges. Tags are interactive when given an ",e.jsx("code",{children:"onClick"})," handler and can express a selected/active state."]}),e.jsxs(l.Section,{title:"Component Anatomy",children:[e.jsx(l.BodyText,{children:"The diagram below maps each part of the default Tag to its controlling design token."}),e.jsx(l.Anatomy,{preview:e.jsx(a,{colour:"blue",size:"large",label:"Category",showLeadingIcon:!0,leadingIcon:t,showCount:!0,count:4,showTrailingIcon:!0,trailingIcon:I,showRemove:!0}),parts:[{id:1,name:"Leading Icon",token:`MUI icon component
--tag-icon-size-{size}
--tag-gap-{size}`,description:"Optional icon preceding the label. Inherits the tag colour. Controlled by showLeadingIcon + leadingIcon props.",pin:{top:"50%",left:"7%"}},{id:2,name:"Label",token:`--tag-font-family
--tag-font-size-{size}
--tag-font-weight
--tag-color-{colour}`,description:"The primary text content. Truncates with ellipsis at max 160px. Set via the label prop.",pin:{top:"50%",left:"42%"}},{id:3,name:"Count Badge",token:"--tag-count background (rgba overlay)",description:"Optional numeric badge after the label. Semi-transparent background derived from the tag colour. Controlled by showCount + count props.",pin:{top:"20%",left:"65%"}},{id:4,name:"Trailing Icon",token:`MUI icon component
--tag-icon-size-{size}
--tag-gap-{size}`,description:"Optional icon after the label/count. Inherits tag colour. Controlled by showTrailingIcon + trailingIcon props.",pin:{top:"50%",left:"80%"}},{id:5,name:"Remove Button",token:"--tag-remove (× SVG, currentColor)",description:"Optional dismiss control. Calls onRemove on click. Inherits tag text colour at 65% opacity, rising to 100% on hover.",pin:{top:"50%",left:"93%"}},{id:6,name:"Container",token:`--tag-border-radius
--tag-bg-{colour}
--tag-border-color-{colour}
--tag-height-{size}
--tag-padding-{size}`,description:"Pill-shaped outer shell. Fully rounded (100px radius). Height, padding, and colour are all size- and colour-variant driven.",pin:{top:"5%",left:"50%"}}]})]}),e.jsxs(l.Section,{title:"Colour Variants",children:[e.jsxs(l.BodyText,{children:["Ten colour variants are available. Each maps to a unique background, text, and border colour through the token system. The ",e.jsx("strong",{children:"filled"})," variant (default) uses a tinted background, while ",e.jsx("strong",{children:"outline"})," uses a transparent background with the same border colour."]}),e.jsx(l.Subsection,{title:"Filled",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:D.map(o=>e.jsx(a,{colour:o,variant:"filled",label:o},o))})}),e.jsx(l.Subsection,{title:"Outline",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:D.map(o=>e.jsx(a,{colour:o,variant:"outline",label:o},o))})})]}),e.jsxs(l.Section,{title:"Sizes",children:[e.jsx(l.BodyText,{children:"Three sizes adapt the tag to different density contexts. All sizes support all colour variants and optional elements."}),e.jsx(l.SizeDemo,{rows:[{label:"Small",sublabel:"Dense lists, inline metadata",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{size:"small",colour:"blue",label:"Small"}),e.jsx(a,{size:"small",colour:"seafoam",label:"Tag"}),e.jsx(a,{size:"small",colour:"yellow",label:"Label"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{size:"default",colour:"blue",label:"Default"}),e.jsx(a,{size:"default",colour:"seafoam",label:"Tag"}),e.jsx(a,{size:"default",colour:"yellow",label:"Label"})]})},{label:"Large",sublabel:"Prominent filters, hero labels",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{size:"large",colour:"blue",label:"Large"}),e.jsx(a,{size:"large",colour:"seafoam",label:"Tag"}),e.jsx(a,{size:"large",colour:"yellow",label:"Label"})]})}]})]}),e.jsxs(l.Section,{title:"Optional Elements",children:[e.jsx(l.BodyText,{children:"Each optional element — leading icon, count badge, and remove button — is independently togglable and composable."}),e.jsx(l.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Person",showLeadingIcon:!0,leadingIcon:j}),e.jsx(a,{colour:"green",label:"Verified",showLeadingIcon:!0,leadingIcon:t}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:c}),e.jsx(a,{colour:"yellow",label:"Review",size:"large",showLeadingIcon:!0,leadingIcon:c})]})}),e.jsx(l.Subsection,{title:"With Trailing Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Next",showTrailingIcon:!0,trailingIcon:I}),e.jsx(a,{colour:"green",label:"Verified",showTrailingIcon:!0,trailingIcon:t}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:c,showTrailingIcon:!0,trailingIcon:I}),e.jsx(a,{colour:"yellow",label:"Navigate",size:"large",showTrailingIcon:!0,trailingIcon:I})]})}),e.jsx(l.Subsection,{title:"With Count Badge",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Issues",showCount:!0,count:12}),e.jsx(a,{colour:"red",label:"Errors",showCount:!0,count:3}),e.jsx(a,{colour:"info",label:"Pending",showCount:!0,count:28}),e.jsx(a,{colour:"dark",label:"Total",showCount:!0,count:99})]})}),e.jsx(l.Subsection,{title:"With Remove Button",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Removable",showRemove:!0}),e.jsx(a,{colour:"seafoam",label:"Clear me",showRemove:!0}),e.jsx(a,{colour:"purple",label:"Dismiss",showRemove:!0})]})}),e.jsx(l.Subsection,{title:"Combined",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",size:"large",label:"Design",showLeadingIcon:!0,leadingIcon:c,showCount:!0,count:7,showRemove:!0}),e.jsx(a,{colour:"green",label:"Approved",showLeadingIcon:!0,leadingIcon:t,showRemove:!0}),e.jsx(a,{colour:"red",size:"small",label:"Urgent",showCount:!0,count:2,showRemove:!0})]})})]}),e.jsxs(l.Section,{title:"Selected State",children:[e.jsxs(l.BodyText,{children:["Pass ",e.jsx("code",{children:"selected"})," to show the tag in an active/pressed state. The selected style inverts the background and text colour using the full token colour value rather than the tinted background."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{colour:"blue",label:"Unselected"}),e.jsx(a,{colour:"blue",label:"Selected",selected:!0}),e.jsx(a,{colour:"green",label:"Unselected"}),e.jsx(a,{colour:"green",label:"Selected",selected:!0}),e.jsx(a,{colour:"purple",label:"Unselected"}),e.jsx(a,{colour:"purple",label:"Selected",selected:!0})]})]}),e.jsxs(l.Section,{title:"Disabled State",children:[e.jsxs(l.BodyText,{children:["Disabled tags render at 45% opacity and block all interactions. Apply with the"," ",e.jsx("code",{children:"disabled"})," prop."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{colour:"blue",label:"Active"}),e.jsx(a,{colour:"blue",label:"Disabled",disabled:!0}),e.jsx(a,{colour:"red",label:"Active",showRemove:!0}),e.jsx(a,{colour:"red",label:"Disabled",showRemove:!0,disabled:!0})]})]}),e.jsx(l.TokenTable,{title:"Design Tokens — Layout & Size",description:"Tokens controlling dimensions, spacing, and border radius:",tokens:[{name:"--tag-border-radius",description:"Fully rounded pill shape (100px) — uses --global-spacing-radius-100px"},{name:"--tag-border-width",description:"Border thickness (1px) — uses --global-spacing-stroke-1px"},{name:"--tag-height-small",description:"Small tag height (20px) — uses --global-spacing-sizing-20px"},{name:"--tag-height-default",description:"Default tag height (24px) — uses --global-spacing-sizing-24px"},{name:"--tag-height-large",description:"Large tag height (28px) — uses --global-spacing-sizing-28px"},{name:"--tag-padding-small",description:"Small horizontal padding (0 8px)"},{name:"--tag-padding-default",description:"Default horizontal padding (0 10px)"},{name:"--tag-padding-large",description:"Large horizontal padding (0 12px)"},{name:"--tag-gap-small",description:"Gap between elements — small (4px)"},{name:"--tag-gap-default",description:"Gap between elements — default (4px)"},{name:"--tag-gap-large",description:"Gap between elements — large (6px)"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Typography",description:"Tokens controlling text appearance:",tokens:[{name:"--tag-font-family",description:"Font family — F37 Ginger Pro (--font-family-primary)"},{name:"--tag-font-weight",description:"Font weight — 400 regular (--global-type-weight-default)"},{name:"--tag-letter-spacing",description:"Letter spacing (0.15px)"},{name:"--tag-font-size-small",description:"Small font size (11px) — uses --global-type-size-primary-label-xs"},{name:"--tag-font-size-default",description:"Default font size (12px) — uses --global-type-size-primary-label-xs"},{name:"--tag-font-size-large",description:"Large font size (14px) — uses --global-type-size-primary-label-sm"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Colour Variants",description:"Each colour has three tokens: background, text, and border. All reference global tokens.",tokens:[{name:"--tag-bg-blue / --tag-color-blue / --tag-border-color-blue",description:"Blue variant — sky-blue-50 bg / sky-blue text / sky-blue-200 border"},{name:"--tag-bg-seafoam / --tag-color-seafoam / --tag-border-color-seafoam",description:"Seafoam variant — seafoam-100 bg / seafoam-300 text and border"},{name:"--tag-bg-yellow / --tag-color-yellow / --tag-border-color-yellow",description:"Yellow variant — orange-light bg / dark-orange text / orange-light-border border"},{name:"--tag-bg-dark / --tag-color-dark / --tag-border-color-dark",description:"Dark variant — base-black bg / base-white text"},{name:"--tag-bg-navy / --tag-color-navy / --tag-border-color-navy",description:"Navy variant — secondary-navy bg / base-white text"},{name:"--tag-bg-red / --tag-color-red / --tag-border-color-red",description:"Red variant — status-red-light bg / status-red text / status-rose border"},{name:"--tag-bg-green / --tag-color-green / --tag-border-color-green",description:"Green variant — status-green-light bg / status-dark-green text / status-green border"},{name:"--tag-bg-purple / --tag-color-purple / --tag-border-color-purple",description:"Purple variant — status-purple-light bg / status-purple text / note-mid border"},{name:"--tag-bg-info / --tag-color-info / --tag-border-color-info",description:"Info variant — status-info-blue-light bg / status-info-blue text / status-edit border"},{name:"--tag-bg-default / --tag-color-default / --tag-border-color-default",description:"Default (gray) variant — neutral-gray-100 bg / neutral-gray-700 text / neutral-gray-300 border"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Count Badge",description:"Each colour variant has a dedicated count badge background (slightly darker than the tag fill) and an accessible text colour (white or black):",tokens:[{name:"--tag-count-bg-blue / --tag-count-color-blue",description:"Blue count — sky-blue-200 bg / base-black text"},{name:"--tag-count-bg-seafoam / --tag-count-color-seafoam",description:"Seafoam count — seafoam-300 bg / base-black text"},{name:"--tag-count-bg-yellow / --tag-count-color-yellow",description:"Yellow count — orange-light-border bg / base-black text"},{name:"--tag-count-bg-dark / --tag-count-color-dark",description:"Dark count — neutral-gray-600 bg / base-white text"},{name:"--tag-count-bg-navy / --tag-count-color-navy",description:"Navy count — secondary-navy-mid bg / base-white text"},{name:"--tag-count-bg-red / --tag-count-color-red",description:"Red count — status-rose bg / base-black text"},{name:"--tag-count-bg-green / --tag-count-color-green",description:"Green count — status-green bg / base-black text"},{name:"--tag-count-bg-purple / --tag-count-color-purple",description:"Purple count — note-mid bg / base-black text"},{name:"--tag-count-bg-info / --tag-count-color-info",description:"Info count — status-edit bg / base-black text"},{name:"--tag-count-bg-default / --tag-count-color-default",description:"Default count — neutral-gray-300 bg / base-black text"}]}),e.jsx(l.CodeBlock,{children:`import { Tag } from './Tag';
import CheckIcon from '@mui/icons-material/Check';

// Basic blue tag
<Tag colour="blue" label="Category" />

// Tag with leading icon + count + remove
<Tag
  colour="green"
  size="large"
  label="Approved"
  showLeadingIcon
  leadingIcon={CheckIcon}
  showCount
  count={4}
  showRemove
  onRemove={() => console.log('removed')}
/>

// Tag with trailing icon
<Tag
  colour="blue"
  label="Next"
  showTrailingIcon
  trailingIcon={ArrowForwardIcon}
/>

// Interactive (clickable) tag with selected state
<Tag
  colour="purple"
  label="Filter"
  selected={isActive}
  onClick={() => setIsActive(!isActive)}
/>

// Outline variant
<Tag colour="blue" variant="outline" label="Label" />

// Disabled
<Tag colour="red" label="Restricted" disabled />`}),e.jsxs(l.Principles,{children:[e.jsxs(l.PrincipleCard,{number:1,title:"Semantic Colour",children:["Choose the colour variant based on its semantic meaning, not aesthetics. Use"," ",e.jsx("strong",{children:"red"})," for errors, ",e.jsx("strong",{children:"green"})," for success, ",e.jsx("strong",{children:"yellow"})," ","for warnings, and ",e.jsx("strong",{children:"info/blue"})," for informational categories. Reserve"," ",e.jsx("strong",{children:"dark"})," and ",e.jsx("strong",{children:"navy"})," for high-emphasis neutral labels."]}),e.jsx(l.PrincipleCard,{number:2,title:"Concise Labels",children:"Tag labels should be 1–3 words. Long text forces truncation at 160px. If content is longer, consider a different component (e.g. a Badge or a full Label)."}),e.jsx(l.PrincipleCard,{number:3,title:"Group Consistently",children:"When displaying a set of tags, keep the same size and variant consistent across the group. Mixing sizes within a row creates visual noise. Reserve size variation for deliberate hierarchy signals."})]}),e.jsx(l.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{colour:"green",label:"Approved",showLeadingIcon:!0,leadingIcon:t}),e.jsx(a,{colour:"red",label:"Rejected"}),e.jsx(a,{colour:"yellow",label:"Pending"})]}),label:"Semantic colours",description:"Use colour variants that reflect semantic meaning — green for success, red for errors, yellow for warnings."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{colour:"purple",label:"Approved"}),e.jsx(a,{colour:"blue",label:"Rejected"}),e.jsx(a,{colour:"navy",label:"Pending"})]}),label:"Mismatched colours",description:"Don't use arbitrary colours that contradict meaning. Users rely on colour to quickly understand status."}}),e.jsx(l.Footer,{})]});k.__docgenInfo={description:"",methods:[],displayName:"TagDocs"};const la={title:"Foundation/Tag",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(k,{})}},argTypes:{size:{control:"select",options:["small","default","large"]},colour:{control:"select",options:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"]},variant:{control:"select",options:["filled","outline"]},leadingIcon:{control:"select",options:["None","Person","Check","Star","Tag"],mapping:{None:void 0,Person:j,Check:t,Star:c,Tag:_}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","Person","Check","Star","Tag"],mapping:{None:void 0,Person:j,Check:t,Star:c,Tag:_}},showTrailingIcon:{control:"boolean"},showRemove:{control:"boolean"},showCount:{control:"boolean"},count:{control:"number"},selected:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},g={render:()=>e.jsx(k,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},u={args:{label:"Label",colour:"blue",size:"default",variant:"filled"}},p={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(o=>e.jsx(a,{colour:o,label:o},o))}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(o=>e.jsx(a,{colour:o,variant:"outline",label:o},o))}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{size:"small",colour:"blue",label:"Small"}),e.jsx(a,{size:"default",colour:"blue",label:"Default"}),e.jsx(a,{size:"large",colour:"blue",label:"Large"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Person",showLeadingIcon:!0,leadingIcon:j}),e.jsx(a,{colour:"green",label:"Verified",showLeadingIcon:!0,leadingIcon:t}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:c}),e.jsx(a,{colour:"yellow",label:"Tagged",size:"large",showLeadingIcon:!0,leadingIcon:_}),e.jsx(a,{colour:"info",size:"small",label:"Small icon",showLeadingIcon:!0,leadingIcon:j})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Next",showTrailingIcon:!0,trailingIcon:t}),e.jsx(a,{colour:"green",label:"Verified",showTrailingIcon:!0,trailingIcon:t}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:c,showTrailingIcon:!0,trailingIcon:t}),e.jsx(a,{colour:"yellow",label:"Tagged",size:"large",showTrailingIcon:!0,trailingIcon:_})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Issues",showCount:!0,count:12}),e.jsx(a,{colour:"red",label:"Errors",showCount:!0,count:3}),e.jsx(a,{colour:"yellow",label:"Warnings",showCount:!0,count:7}),e.jsx(a,{colour:"green",label:"Passed",showCount:!0,count:99}),e.jsx(a,{colour:"dark",label:"Total",showCount:!0,count:114})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Category",showRemove:!0}),e.jsx(a,{colour:"seafoam",label:"Topic",showRemove:!0}),e.jsx(a,{colour:"purple",label:"Label",showRemove:!0}),e.jsx(a,{colour:"red",label:"Remove me",showRemove:!0})]}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["blue","green","purple","red","info","default"].map(o=>e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx(a,{colour:o,label:"Off"}),e.jsx(a,{colour:o,label:"On",selected:!0})]},o))}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px"},children:["small","default","large"].map(o=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"11px",color:"#6d7280",minWidth:"52px",flexShrink:0},children:o}),["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(T=>e.jsx(a,{size:o,colour:T,label:"Label"},T))]},o))}),parameters:{layout:"padded",controls:{disable:!0}}};var W,R,P,V,A;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <TagDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(P=(R=g.parameters)==null?void 0:R.docs)==null?void 0:P.source},description:{story:"Full documentation page for the Tag component.",...(A=(V=g.parameters)==null?void 0:V.docs)==null?void 0:A.description}}};var N,O,B,F,q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    colour: 'blue',
    size: 'default',
    variant: 'filled'
  }
}`,...(B=(O=u.parameters)==null?void 0:O.docs)==null?void 0:B.source},description:{story:"Default Tag — the most common usage.",...(q=(F=u.parameters)==null?void 0:F.docs)==null?void 0:q.description}}};var E,U,M,G,K;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '16px'
  }}>
      {(['default', 'blue', 'seafoam', 'yellow', 'dark', 'navy', 'red', 'green', 'purple', 'info'] as const).map(colour => <Tag key={colour} colour={colour} label={colour} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(M=(U=p.parameters)==null?void 0:U.docs)==null?void 0:M.source},description:{story:"All ten colour variants side by side (filled style).",...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.description}}};var $,H,Y,J,Q;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '16px'
  }}>
      {(['default', 'blue', 'seafoam', 'yellow', 'dark', 'navy', 'red', 'green', 'purple', 'info'] as const).map(colour => <Tag key={colour} colour={colour} variant="outline" label={colour} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Y.source},description:{story:"All ten colour variants in outline style.",...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var X,Z,ee,ae,le;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    padding: '16px'
  }}>
      <Tag size="small" colour="blue" label="Small" />
      <Tag size="default" colour="blue" label="Default" />
      <Tag size="large" colour="blue" label="Large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"All three sizes.",...(le=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:le.description}}};var oe,re,te,ne,se;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '16px'
  }}>
      <Tag colour="blue" label="Person" showLeadingIcon leadingIcon={PersonIcon} />
      <Tag colour="green" label="Verified" showLeadingIcon leadingIcon={CheckIcon} />
      <Tag colour="purple" label="Featured" showLeadingIcon leadingIcon={StarBorderIcon} />
      <Tag colour="yellow" label="Tagged" size="large" showLeadingIcon leadingIcon={LocalOfferOutlinedIcon} />
      <Tag colour="info" size="small" label="Small icon" showLeadingIcon leadingIcon={PersonIcon} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(re=x.parameters)==null?void 0:re.docs)==null?void 0:te.source},description:{story:"Tags with leading icons.",...(se=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var ie,ce,de,ge,ue;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '16px'
  }}>
      <Tag colour="blue" label="Next" showTrailingIcon trailingIcon={CheckIcon} />
      <Tag colour="green" label="Verified" showTrailingIcon trailingIcon={CheckIcon} />
      <Tag colour="purple" label="Featured" showLeadingIcon leadingIcon={StarBorderIcon} showTrailingIcon trailingIcon={CheckIcon} />
      <Tag colour="yellow" label="Tagged" size="large" showTrailingIcon trailingIcon={LocalOfferOutlinedIcon} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Tags with trailing icons.",...(ue=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:ue.description}}};var pe,be,me,xe,fe;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '16px'
  }}>
      <Tag colour="blue" label="Issues" showCount count={12} />
      <Tag colour="red" label="Errors" showCount count={3} />
      <Tag colour="yellow" label="Warnings" showCount count={7} />
      <Tag colour="green" label="Passed" showCount count={99} />
      <Tag colour="dark" label="Total" showCount count={114} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(be=h.parameters)==null?void 0:be.docs)==null?void 0:me.source},description:{story:"Tags with numeric count badges.",...(fe=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:fe.description}}};var he,ye,ve,we,je;y.parameters={...y.parameters,docs:{...(he=y.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '16px'
  }}>
      <Tag colour="blue" label="Category" showRemove />
      <Tag colour="seafoam" label="Topic" showRemove />
      <Tag colour="purple" label="Label" showRemove />
      <Tag colour="red" label="Remove me" showRemove />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ve=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:ve.source},description:{story:"Removable tags with the dismiss × button.",...(je=(we=y.parameters)==null?void 0:we.docs)==null?void 0:je.description}}};var Te,Ie,_e,ke,ze;v.parameters={...v.parameters,docs:{...(Te=v.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '16px'
  }}>
      {(['blue', 'green', 'purple', 'red', 'info', 'default'] as const).map(colour => <div key={colour} style={{
      display: 'flex',
      gap: '6px'
    }}>
          <Tag colour={colour} label="Off" />
          <Tag colour={colour} label="On" selected />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_e=(Ie=v.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source},description:{story:"Selected state — active/pressed tags.",...(ze=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:ze.description}}};var Se,Ce,Le,De,We;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '16px'
  }}>
      {(['small', 'default', 'large'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      alignItems: 'center'
    }}>
          <span style={{
        fontFamily: 'var(--font-family-secondary)',
        fontSize: '11px',
        color: '#6d7280',
        minWidth: '52px',
        flexShrink: 0
      }}>{size}</span>
          {(['default', 'blue', 'seafoam', 'yellow', 'dark', 'navy', 'red', 'green', 'purple', 'info'] as const).map(colour => <Tag key={colour} size={size} colour={colour} label="Label" />)}
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(Le=(Ce=w.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source},description:{story:"All sizes × all colours matrix.",...(We=(De=w.parameters)==null?void 0:De.docs)==null?void 0:We.description}}};const oa=["Documentation","Default","ColourVariants","OutlineVariants","Sizes","WithLeadingIcon","WithTrailingIcon","WithCount","Removable","SelectedState","AllVariants"];export{w as AllVariants,p as ColourVariants,u as Default,g as Documentation,b as OutlineVariants,y as Removable,v as SelectedState,m as Sizes,h as WithCount,x as WithLeadingIcon,f as WithTrailingIcon,oa as __namedExportsOrder,la as default};
