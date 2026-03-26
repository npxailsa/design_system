import{j as e}from"./iframe-CbzVkTfb.js";import{D as l}from"./DocsTemplate-DB0U_Z64.js";import{P as j}from"./Person-BsMoq5St.js";import{C as i}from"./Check-CktGCPyF.js";import{c as Pe}from"./createSvgIcon-Cu-ov2OS.js";import{L as _e}from"./LocalOfferOutlined-Br7D7j4T.js";import"./preload-helper-Dp1pzeXC.js";const Ae="_tag_a313z_10",Ve="_tag__icon_a313z_200",Be="_tag__label_a313z_227",Oe="_tag__count_a313z_237",qe="_tag__remove_a313z_263",r={tag:Ae,"tag--small":"_tag--small_a313z_41","tag--large":"_tag--large_a313z_49","tag--default":"_tag--default_a313z_59","tag--blue":"_tag--blue_a313z_65","tag--seafoam":"_tag--seafoam_a313z_71","tag--yellow":"_tag--yellow_a313z_77","tag--dark":"_tag--dark_a313z_83","tag--navy":"_tag--navy_a313z_89","tag--red":"_tag--red_a313z_95","tag--green":"_tag--green_a313z_101","tag--purple":"_tag--purple_a313z_107","tag--info":"_tag--info_a313z_113","tag--outline":"_tag--outline_a313z_121","tag--selected":"_tag--selected_a313z_127","tag--interactive":"_tag--interactive_a313z_177","tag--disabled":"_tag--disabled_a313z_192",tag__icon:Ve,"tag__icon-svg":"_tag__icon-svg_a313z_207",tag__label:Be,tag__count:Oe,tag__remove:qe},a=({label:o="Label",size:w="default",colour:Te="blue",variant:ke="filled",leadingIcon:_,showLeadingIcon:Ie=!1,showRemove:Se=!1,count:T,showCount:Ce=!1,selected:k=!1,disabled:s=!1,onClick:n,onRemove:d,className:Le=""})=>{const De=[r.tag,r[`tag--${w}`],r[`tag--${Te}`],r[`tag--${ke}`],k?r["tag--selected"]:"",s?r["tag--disabled"]:"",n||d?r["tag--interactive"]:"",Le].filter(Boolean).join(" "),Re=t=>{!s&&n&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),n())},We=t=>{!s&&d&&(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),t.stopPropagation(),d())};return e.jsxs("span",{className:De,onClick:!s&&n?n:void 0,onKeyDown:Re,role:n?"button":void 0,tabIndex:n&&!s?0:void 0,"aria-pressed":n&&k?!0:void 0,"aria-disabled":s?!0:void 0,children:[Ie&&_&&e.jsx("span",{className:r.tag__icon,"aria-hidden":"true",children:e.jsx(_,{className:r["tag__icon-svg"]})}),e.jsx("span",{className:r.tag__label,children:o}),Ce&&T!==void 0&&e.jsx("span",{className:r.tag__count,children:T}),Se&&e.jsx("button",{type:"button",className:r.tag__remove,onClick:t=>{t.stopPropagation(),!s&&d&&d()},onKeyDown:We,"aria-label":"Remove tag",tabIndex:s?-1:0,disabled:s,children:e.jsx("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M7 1L1 7M1 1L7 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})};a.__docgenInfo={description:`Tag — A compact pill-shaped label used to categorise, filter, or annotate
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
| 'info'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'seafoam'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'navy'"},{name:"literal",value:"'red'"},{name:"literal",value:"'green'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'info'"}]},description:"Colour variant",defaultValue:{value:"'blue'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:"Visual style — filled (default) or outline",defaultValue:{value:"'filled'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered before the label"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},showRemove:{required:!1,tsType:{name:"boolean"},description:"Show a dismiss/remove × button on the trailing edge",defaultValue:{value:"false",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"Numeric count badge shown after the label"},showCount:{required:!1,tsType:{name:"boolean"},description:"Show the count badge",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether the tag is in a selected / active state",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the tag (prevents interaction)",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the tag body"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the remove × button"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}}}};const y=Pe(e.jsx("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"})),I=["blue","seafoam","yellow","dark","navy","red","green","purple","info","default"],z=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"Tag",subtitle:"Compact pill-shaped labels for categorising, filtering, and annotating content across the interface"}),e.jsxs(l.BodyText,{children:["The ",e.jsx("strong",{children:"Tag"})," component is a small, highly versatile pill label used to represent categories, attributes, or states. It supports 10 colour variants, 3 sizes, filled and outline styles, optional leading icons, removable dismiss buttons, and numeric count badges. Tags are interactive when given an ",e.jsx("code",{children:"onClick"})," handler and can express a selected/active state."]}),e.jsxs(l.Section,{title:"Component Anatomy",children:[e.jsx(l.BodyText,{children:"The diagram below maps each part of the default Tag to its controlling design token."}),e.jsx(l.Anatomy,{preview:e.jsx(a,{colour:"blue",size:"large",label:"Category",showLeadingIcon:!0,leadingIcon:i,showCount:!0,count:4,showRemove:!0}),parts:[{id:1,name:"Leading Icon",token:`MUI icon component
--tag-icon-size-{size}
--tag-gap-{size}`,description:"Optional icon preceding the label. Inherits the tag colour. Controlled by showLeadingIcon + leadingIcon props.",pin:{top:"50%",left:"7%"}},{id:2,name:"Label",token:`--tag-font-family
--tag-font-size-{size}
--tag-font-weight
--tag-color-{colour}`,description:"The primary text content. Truncates with ellipsis at max 160px. Set via the label prop.",pin:{top:"50%",left:"42%"}},{id:3,name:"Count Badge",token:"--tag-count background (rgba overlay)",description:"Optional numeric badge after the label. Semi-transparent background derived from the tag colour. Controlled by showCount + count props.",pin:{top:"20%",left:"65%"}},{id:4,name:"Remove Button",token:"--tag-remove (× SVG, currentColor)",description:"Optional dismiss control. Calls onRemove on click. Inherits tag text colour at 65% opacity, rising to 100% on hover.",pin:{top:"50%",left:"90%"}},{id:5,name:"Container",token:`--tag-border-radius
--tag-bg-{colour}
--tag-border-color-{colour}
--tag-height-{size}
--tag-padding-{size}`,description:"Pill-shaped outer shell. Fully rounded (100px radius). Height, padding, and colour are all size- and colour-variant driven.",pin:{top:"5%",left:"50%"}}]})]}),e.jsxs(l.Section,{title:"Colour Variants",children:[e.jsxs(l.BodyText,{children:["Ten colour variants are available. Each maps to a unique background, text, and border colour through the token system. The ",e.jsx("strong",{children:"filled"})," variant (default) uses a tinted background, while ",e.jsx("strong",{children:"outline"})," uses a transparent background with the same border colour."]}),e.jsx(l.Subsection,{title:"Filled",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:I.map(o=>e.jsx(a,{colour:o,variant:"filled",label:o},o))})}),e.jsx(l.Subsection,{title:"Outline",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:I.map(o=>e.jsx(a,{colour:o,variant:"outline",label:o},o))})})]}),e.jsxs(l.Section,{title:"Sizes",children:[e.jsx(l.BodyText,{children:"Three sizes adapt the tag to different density contexts. All sizes support all colour variants and optional elements."}),e.jsx(l.SizeDemo,{rows:[{label:"Small",sublabel:"Dense lists, inline metadata",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{size:"small",colour:"blue",label:"Small"}),e.jsx(a,{size:"small",colour:"seafoam",label:"Tag"}),e.jsx(a,{size:"small",colour:"yellow",label:"Label"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{size:"default",colour:"blue",label:"Default"}),e.jsx(a,{size:"default",colour:"seafoam",label:"Tag"}),e.jsx(a,{size:"default",colour:"yellow",label:"Label"})]})},{label:"Large",sublabel:"Prominent filters, hero labels",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{size:"large",colour:"blue",label:"Large"}),e.jsx(a,{size:"large",colour:"seafoam",label:"Tag"}),e.jsx(a,{size:"large",colour:"yellow",label:"Label"})]})}]})]}),e.jsxs(l.Section,{title:"Optional Elements",children:[e.jsx(l.BodyText,{children:"Each optional element — leading icon, count badge, and remove button — is independently togglable and composable."}),e.jsx(l.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Person",showLeadingIcon:!0,leadingIcon:j}),e.jsx(a,{colour:"green",label:"Verified",showLeadingIcon:!0,leadingIcon:i}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:y}),e.jsx(a,{colour:"yellow",label:"Review",size:"large",showLeadingIcon:!0,leadingIcon:y})]})}),e.jsx(l.Subsection,{title:"With Count Badge",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Issues",showCount:!0,count:12}),e.jsx(a,{colour:"red",label:"Errors",showCount:!0,count:3}),e.jsx(a,{colour:"info",label:"Pending",showCount:!0,count:28}),e.jsx(a,{colour:"dark",label:"Total",showCount:!0,count:99})]})}),e.jsx(l.Subsection,{title:"With Remove Button",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Removable",showRemove:!0}),e.jsx(a,{colour:"seafoam",label:"Clear me",showRemove:!0}),e.jsx(a,{colour:"purple",label:"Dismiss",showRemove:!0})]})}),e.jsx(l.Subsection,{title:"Combined",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",size:"large",label:"Design",showLeadingIcon:!0,leadingIcon:y,showCount:!0,count:7,showRemove:!0}),e.jsx(a,{colour:"green",label:"Approved",showLeadingIcon:!0,leadingIcon:i,showRemove:!0}),e.jsx(a,{colour:"red",size:"small",label:"Urgent",showCount:!0,count:2,showRemove:!0})]})})]}),e.jsxs(l.Section,{title:"Selected State",children:[e.jsxs(l.BodyText,{children:["Pass ",e.jsx("code",{children:"selected"})," to show the tag in an active/pressed state. The selected style inverts the background and text colour using the full token colour value rather than the tinted background."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{colour:"blue",label:"Unselected"}),e.jsx(a,{colour:"blue",label:"Selected",selected:!0}),e.jsx(a,{colour:"green",label:"Unselected"}),e.jsx(a,{colour:"green",label:"Selected",selected:!0}),e.jsx(a,{colour:"purple",label:"Unselected"}),e.jsx(a,{colour:"purple",label:"Selected",selected:!0})]})]}),e.jsxs(l.Section,{title:"Disabled State",children:[e.jsxs(l.BodyText,{children:["Disabled tags render at 45% opacity and block all interactions. Apply with the"," ",e.jsx("code",{children:"disabled"})," prop."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{colour:"blue",label:"Active"}),e.jsx(a,{colour:"blue",label:"Disabled",disabled:!0}),e.jsx(a,{colour:"red",label:"Active",showRemove:!0}),e.jsx(a,{colour:"red",label:"Disabled",showRemove:!0,disabled:!0})]})]}),e.jsx(l.TokenTable,{title:"Design Tokens — Layout & Size",description:"Tokens controlling dimensions, spacing, and border radius:",tokens:[{name:"--tag-border-radius",description:"Fully rounded pill shape (100px) — uses --global-spacing-radius-100px"},{name:"--tag-border-width",description:"Border thickness (1px) — uses --global-spacing-stroke-1px"},{name:"--tag-height-small",description:"Small tag height (20px) — uses --global-spacing-sizing-20px"},{name:"--tag-height-default",description:"Default tag height (24px) — uses --global-spacing-sizing-24px"},{name:"--tag-height-large",description:"Large tag height (28px) — uses --global-spacing-sizing-28px"},{name:"--tag-padding-small",description:"Small horizontal padding (0 8px)"},{name:"--tag-padding-default",description:"Default horizontal padding (0 10px)"},{name:"--tag-padding-large",description:"Large horizontal padding (0 12px)"},{name:"--tag-gap-small",description:"Gap between elements — small (4px)"},{name:"--tag-gap-default",description:"Gap between elements — default (4px)"},{name:"--tag-gap-large",description:"Gap between elements — large (6px)"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Typography",description:"Tokens controlling text appearance:",tokens:[{name:"--tag-font-family",description:"Font family — F37 Ginger Pro (--font-family-primary)"},{name:"--tag-font-weight",description:"Font weight — 400 regular (--global-type-weight-default)"},{name:"--tag-letter-spacing",description:"Letter spacing (0.15px)"},{name:"--tag-font-size-small",description:"Small font size (11px) — uses --global-type-size-primary-label-xs"},{name:"--tag-font-size-default",description:"Default font size (12px) — uses --global-type-size-primary-label-xs"},{name:"--tag-font-size-large",description:"Large font size (14px) — uses --global-type-size-primary-label-sm"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Colour Variants",description:"Each colour has three tokens: background, text, and border. All reference global tokens.",tokens:[{name:"--tag-bg-blue / --tag-color-blue / --tag-border-color-blue",description:"Blue variant — sky-blue-50 bg / sky-blue text / sky-blue-200 border"},{name:"--tag-bg-seafoam / --tag-color-seafoam / --tag-border-color-seafoam",description:"Seafoam variant — seafoam-100 bg / seafoam-300 text and border"},{name:"--tag-bg-yellow / --tag-color-yellow / --tag-border-color-yellow",description:"Yellow variant — orange-light bg / dark-orange text / orange-light-border border"},{name:"--tag-bg-dark / --tag-color-dark / --tag-border-color-dark",description:"Dark variant — base-black bg / base-white text"},{name:"--tag-bg-navy / --tag-color-navy / --tag-border-color-navy",description:"Navy variant — secondary-navy bg / base-white text"},{name:"--tag-bg-red / --tag-color-red / --tag-border-color-red",description:"Red variant — status-red-light bg / status-red text / status-rose border"},{name:"--tag-bg-green / --tag-color-green / --tag-border-color-green",description:"Green variant — status-green-light bg / status-dark-green text / status-green border"},{name:"--tag-bg-purple / --tag-color-purple / --tag-border-color-purple",description:"Purple variant — status-purple-light bg / status-purple text / note-mid border"},{name:"--tag-bg-info / --tag-color-info / --tag-border-color-info",description:"Info variant — status-info-blue-light bg / status-info-blue text / status-edit border"},{name:"--tag-bg-default / --tag-color-default / --tag-border-color-default",description:"Default (gray) variant — neutral-gray-100 bg / neutral-gray-700 text / neutral-gray-300 border"}]}),e.jsx(l.CodeBlock,{children:`import { Tag } from './Tag';
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
<Tag colour="red" label="Restricted" disabled />`}),e.jsxs(l.Principles,{children:[e.jsxs(l.PrincipleCard,{number:1,title:"Semantic Colour",children:["Choose the colour variant based on its semantic meaning, not aesthetics. Use"," ",e.jsx("strong",{children:"red"})," for errors, ",e.jsx("strong",{children:"green"})," for success, ",e.jsx("strong",{children:"yellow"})," ","for warnings, and ",e.jsx("strong",{children:"info/blue"})," for informational categories. Reserve"," ",e.jsx("strong",{children:"dark"})," and ",e.jsx("strong",{children:"navy"})," for high-emphasis neutral labels."]}),e.jsx(l.PrincipleCard,{number:2,title:"Concise Labels",children:"Tag labels should be 1–3 words. Long text forces truncation at 160px. If content is longer, consider a different component (e.g. a Badge or a full Label)."}),e.jsx(l.PrincipleCard,{number:3,title:"Group Consistently",children:"When displaying a set of tags, keep the same size and variant consistent across the group. Mixing sizes within a row creates visual noise. Reserve size variation for deliberate hierarchy signals."})]}),e.jsx(l.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{colour:"green",label:"Approved",showLeadingIcon:!0,leadingIcon:i}),e.jsx(a,{colour:"red",label:"Rejected"}),e.jsx(a,{colour:"yellow",label:"Pending"})]}),label:"Semantic colours",description:"Use colour variants that reflect semantic meaning — green for success, red for errors, yellow for warnings."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{colour:"purple",label:"Approved"}),e.jsx(a,{colour:"blue",label:"Rejected"}),e.jsx(a,{colour:"navy",label:"Pending"})]}),label:"Mismatched colours",description:"Don't use arbitrary colours that contradict meaning. Users rely on colour to quickly understand status."}}),e.jsx(l.Footer,{})]});z.__docgenInfo={description:"",methods:[],displayName:"TagDocs"};const $e={title:"Foundation/Tag",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(z,{})}},argTypes:{size:{control:"select",options:["small","default","large"]},colour:{control:"select",options:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"]},variant:{control:"select",options:["filled","outline"]},leadingIcon:{control:"select",options:["None","Person","Check","Star","Tag"],mapping:{None:void 0,Person:j,Check:i,Star:y,Tag:_e}},showLeadingIcon:{control:"boolean"},showRemove:{control:"boolean"},showCount:{control:"boolean"},count:{control:"number"},selected:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},c={render:()=>e.jsx(z,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},p={args:{label:"Label",colour:"blue",size:"default",variant:"filled"}},u={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(o=>e.jsx(a,{colour:o,label:o},o))}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(o=>e.jsx(a,{colour:o,variant:"outline",label:o},o))}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{size:"small",colour:"blue",label:"Small"}),e.jsx(a,{size:"default",colour:"blue",label:"Default"}),e.jsx(a,{size:"large",colour:"blue",label:"Large"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Person",showLeadingIcon:!0,leadingIcon:j}),e.jsx(a,{colour:"green",label:"Verified",showLeadingIcon:!0,leadingIcon:i}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:y}),e.jsx(a,{colour:"yellow",label:"Tagged",size:"large",showLeadingIcon:!0,leadingIcon:_e}),e.jsx(a,{colour:"info",size:"small",label:"Small icon",showLeadingIcon:!0,leadingIcon:j})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Issues",showCount:!0,count:12}),e.jsx(a,{colour:"red",label:"Errors",showCount:!0,count:3}),e.jsx(a,{colour:"yellow",label:"Warnings",showCount:!0,count:7}),e.jsx(a,{colour:"green",label:"Passed",showCount:!0,count:99}),e.jsx(a,{colour:"dark",label:"Total",showCount:!0,count:114})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Category",showRemove:!0}),e.jsx(a,{colour:"seafoam",label:"Topic",showRemove:!0}),e.jsx(a,{colour:"purple",label:"Label",showRemove:!0}),e.jsx(a,{colour:"red",label:"Remove me",showRemove:!0})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["blue","green","purple","red","info","default"].map(o=>e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx(a,{colour:o,label:"Off"}),e.jsx(a,{colour:o,label:"On",selected:!0})]},o))}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px"},children:["small","default","large"].map(o=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"11px",color:"#6d7280",minWidth:"52px",flexShrink:0},children:o}),["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(w=>e.jsx(a,{size:o,colour:w,label:"Label"},w))]},o))}),parameters:{layout:"padded",controls:{disable:!0}}};var S,C,L,D,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source},description:{story:"Full documentation page for the Tag component.",...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.description}}};var W,P,A,V,B;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    colour: 'blue',
    size: 'default',
    variant: 'filled'
  }
}`,...(A=(P=p.parameters)==null?void 0:P.docs)==null?void 0:A.source},description:{story:"Default Tag — the most common usage.",...(B=(V=p.parameters)==null?void 0:V.docs)==null?void 0:B.description}}};var O,q,F,N,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(F=(q=u.parameters)==null?void 0:q.docs)==null?void 0:F.source},description:{story:"All ten colour variants side by side (filled style).",...(E=(N=u.parameters)==null?void 0:N.docs)==null?void 0:E.description}}};var U,G,M,K,$;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.source},description:{story:"All ten colour variants in outline style.",...($=(K=g.parameters)==null?void 0:K.docs)==null?void 0:$.description}}};var H,Y,J,Q,X;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(J=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"All three sizes.",...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,ee,ae,le,oe;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Tags with leading icons.",...(oe=(le=b.parameters)==null?void 0:le.docs)==null?void 0:oe.description}}};var re,te,se,ne,ie;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(te=x.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"Tags with numeric count badges.",...(ie=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ie.description}}};var de,ce,pe,ue,ge;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:"Removable tags with the dismiss × button.",...(ge=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:ge.description}}};var me,be,xe,fe,he;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(xe=(be=h.parameters)==null?void 0:be.docs)==null?void 0:xe.source},description:{story:"Selected state — active/pressed tags.",...(he=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:he.description}}};var ve,ye,we,je,ze;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(we=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:we.source},description:{story:"All sizes × all colours matrix.",...(ze=(je=v.parameters)==null?void 0:je.docs)==null?void 0:ze.description}}};const He=["Documentation","Default","ColourVariants","OutlineVariants","Sizes","WithLeadingIcon","WithCount","Removable","SelectedState","AllVariants"];export{v as AllVariants,u as ColourVariants,p as Default,c as Documentation,g as OutlineVariants,f as Removable,h as SelectedState,m as Sizes,x as WithCount,b as WithLeadingIcon,He as __namedExportsOrder,$e as default};
