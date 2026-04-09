import{j as e}from"./iframe-V9rbRwOw.js";import{D as o}from"./DocsTemplate-j2Q6Umhq.js";import{P as C}from"./Person-BbEtfljq.js";import{C as d}from"./Check-B454aGCu.js";import{c as Qe}from"./createSvgIcon-ZkPy-dIT.js";import{A as F}from"./ArrowForward-saz05FeS.js";import{L as D}from"./LocalOfferOutlined-DOSvXdOP.js";import"./preload-helper-Dp1pzeXC.js";const Xe="_tag_1luut_10",Ze="_tag__icon_1luut_208",ea="_tag__label_1luut_235",aa="_tag__count_1luut_247",la="_tag__remove_1luut_281",r={tag:Xe,"tag--small":"_tag--small_1luut_41","tag--large":"_tag--large_1luut_49","tag--default":"_tag--default_1luut_59","tag--blue":"_tag--blue_1luut_65","tag--seafoam":"_tag--seafoam_1luut_71","tag--yellow":"_tag--yellow_1luut_77","tag--dark":"_tag--dark_1luut_83","tag--navy":"_tag--navy_1luut_89","tag--red":"_tag--red_1luut_95","tag--green":"_tag--green_1luut_101","tag--purple":"_tag--purple_1luut_107","tag--info":"_tag--info_1luut_113","tag--outline":"_tag--outline_1luut_121","tag--selected":"_tag--selected_1luut_135","tag--interactive":"_tag--interactive_1luut_185","tag--disabled":"_tag--disabled_1luut_200",tag__icon:Ze,"tag__icon-svg":"_tag__icon-svg_1luut_215",tag__label:ea,tag__count:aa,tag__remove:la},a=({label:l="Label",size:t="default",colour:n="blue",variant:c="filled",leadingIcon:s,showLeadingIcon:m=!1,trailingIcon:x,showTrailingIcon:Ue=!1,showRemove:Ge=!1,count:A,showCount:He=!1,selected:B=!1,disabled:g=!1,onClick:p,onRemove:f,className:Me=""})=>{const Ke=[r.tag,r[`tag--${t}`],r[`tag--${n}`],r[`tag--${c}`],B?r["tag--selected"]:"",g?r["tag--disabled"]:"",p||f?r["tag--interactive"]:"",Me].filter(Boolean).join(" "),Ye=i=>{!g&&p&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),p())},Je=i=>{!g&&f&&(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),i.stopPropagation(),f())};return e.jsxs("span",{className:Ke,onClick:!g&&p?p:void 0,onKeyDown:Ye,role:p?"button":void 0,tabIndex:p&&!g?0:void 0,"aria-pressed":p&&B?!0:void 0,"aria-disabled":g?!0:void 0,children:[m&&s&&e.jsx("span",{className:r.tag__icon,"aria-hidden":"true",children:e.jsx(s,{className:r["tag__icon-svg"]})}),e.jsx("span",{className:r.tag__label,children:l}),He&&A!==void 0&&e.jsx("span",{className:r.tag__count,children:A}),Ue&&x&&e.jsx("span",{className:r.tag__icon,"aria-hidden":"true",children:e.jsx(x,{className:r["tag__icon-svg"]})}),Ge&&e.jsx("button",{type:"button",className:r.tag__remove,onClick:i=>{i.stopPropagation(),!g&&f&&f()},onKeyDown:Je,"aria-label":"Remove tag",tabIndex:g?-1:0,disabled:g,children:e.jsx("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{d:"M7 1L1 7M1 1L7 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})};a.__docgenInfo={description:`Tag — A compact pill-shaped label used to categorise, filter, or annotate
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
| 'info'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'seafoam'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'navy'"},{name:"literal",value:"'red'"},{name:"literal",value:"'green'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'info'"}]},description:"Colour variant",defaultValue:{value:"'blue'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:"Visual style — filled (default) or outline",defaultValue:{value:"'filled'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered before the label"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered after the label"},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the trailing icon",defaultValue:{value:"false",computed:!1}},showRemove:{required:!1,tsType:{name:"boolean"},description:"Show a dismiss/remove × button on the trailing edge",defaultValue:{value:"false",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"Numeric count badge shown after the label"},showCount:{required:!1,tsType:{name:"boolean"},description:"Show the count badge",defaultValue:{value:"false",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether the tag is in a selected / active state",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the tag (prevents interaction)",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the tag body"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the remove × button"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}}}};const b=Qe(e.jsx("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"})),W=["blue","seafoam","yellow","dark","navy","red","green","purple","info","default"],u=({colour:l="blue",count:t=1,size:n="md",variant:c="filled"})=>{const s=c==="outline",m=l==="dark"?"var(--global-color-base-black)":l==="navy"?"var(--global-color-secondary-navy)":`var(--badge-color-${l})`;return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:`var(--badge-size-${n})`,height:`var(--badge-size-${n})`,minWidth:`var(--badge-size-${n})`,borderRadius:"var(--badge-border-radius)",border:`var(--badge-border-width) solid var(--badge-border-${l})`,background:s?"transparent":`var(--badge-bg-${l})`,color:s?m:`var(--badge-color-${l})`,fontFamily:"var(--badge-font-family)",fontWeight:700,fontSize:`var(--badge-font-size-${n})`,letterSpacing:"var(--badge-letter-spacing)",lineHeight:1,userSelect:"none",flexShrink:0},children:t})},R=()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"Tag",subtitle:"Compact pill-shaped labels for categorising, filtering, and annotating content across the interface"}),e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"Tag"})," component is a small, highly versatile pill label used to represent categories, attributes, or states. It supports 10 colour variants, 3 sizes, filled and outline styles, optional leading icons, removable dismiss buttons, and numeric count badges. Tags are interactive when given an ",e.jsx("code",{children:"onClick"})," handler and can express a selected/active state."]}),e.jsxs(o.Section,{title:"Component Anatomy",children:[e.jsx(o.BodyText,{children:"The diagram below maps each part of the default Tag to its controlling design token."}),e.jsx(o.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2F0afb91c27a8d4e7b8dc3a156dcf732de",alt:"Tag component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Leading Icon",token:`filled/icons (user category)
--tag-icon-size-{size}
--tag-gap-{size}`,description:"Optional icon preceding the label. W: 16, H: 16, fill: #FFFFFF. Icon name: account, category: user. Controlled by showLeadingIcon + leadingIcon props."},{id:2,name:"Label",token:`--tag-font-family (--brand-font-primary)
--tag-font-size (16px)
--tag-font-weight (400)
--tag-color (color/base/white)`,description:"Primary text content. W: HUG, H: HUG. Uses F37 Ginger Regular at 16px with 20px line-height. Colour: color/base/white. Set via the label prop."},{id:3,name:"Trailing Icon",token:`filled/icons (action category)
--tag-icon-size-{size}
--tag-gap-{size}`,description:"Optional icon after the label. W: 16, H: 16, fill: #FFFFFF. Icon name: arrow-right, category: action. Controlled by showTrailingIcon + trailingIcon props."}]})]}),e.jsxs(o.Section,{title:"Colour Variants",children:[e.jsxs(o.BodyText,{children:["Ten colour variants are available. Each maps to a unique background, text, and border colour through the token system. The ",e.jsx("strong",{children:"filled"})," variant (default) uses a tinted background, while ",e.jsx("strong",{children:"outline"})," uses a transparent background with the same border colour."]}),e.jsx(o.Subsection,{title:"Filled",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:W.map(l=>e.jsx(a,{colour:l,variant:"filled",label:l},l))})}),e.jsx(o.Subsection,{title:"Outline",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:W.map(l=>e.jsx(a,{colour:l,variant:"outline",label:l},l))})})]}),e.jsxs(o.Section,{title:"Sizes",children:[e.jsx(o.BodyText,{children:"Three sizes adapt the tag to different density contexts. All sizes support all colour variants and optional elements."}),e.jsx(o.SizeDemo,{rows:[{label:"Small",sublabel:"Dense lists, inline metadata",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{size:"small",colour:"blue",label:"Small"}),e.jsx(a,{size:"small",colour:"seafoam",label:"Tag"}),e.jsx(a,{size:"small",colour:"yellow",label:"Label"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{size:"default",colour:"blue",label:"Default"}),e.jsx(a,{size:"default",colour:"seafoam",label:"Tag"}),e.jsx(a,{size:"default",colour:"yellow",label:"Label"})]})},{label:"Large",sublabel:"Prominent filters, hero labels",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{size:"large",colour:"blue",label:"Large"}),e.jsx(a,{size:"large",colour:"seafoam",label:"Tag"}),e.jsx(a,{size:"large",colour:"yellow",label:"Label"})]})}]})]}),e.jsxs(o.Section,{title:"Optional Elements",children:[e.jsx(o.BodyText,{children:"Each optional element — leading icon, count badge, and remove button — is independently togglable and composable."}),e.jsx(o.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Person",showLeadingIcon:!0,leadingIcon:C}),e.jsx(a,{colour:"green",label:"Verified",showLeadingIcon:!0,leadingIcon:d}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:b}),e.jsx(a,{colour:"yellow",label:"Review",size:"large",showLeadingIcon:!0,leadingIcon:b})]})}),e.jsx(o.Subsection,{title:"With Trailing Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Next",showTrailingIcon:!0,trailingIcon:F}),e.jsx(a,{colour:"green",label:"Verified",showTrailingIcon:!0,trailingIcon:d}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:b,showTrailingIcon:!0,trailingIcon:F}),e.jsx(a,{colour:"yellow",label:"Navigate",size:"large",showTrailingIcon:!0,trailingIcon:F})]})}),e.jsx(o.Subsection,{title:"With Count Badge",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Issues",showCount:!0,count:12}),e.jsx(a,{colour:"red",label:"Errors",showCount:!0,count:3}),e.jsx(a,{colour:"info",label:"Pending",showCount:!0,count:28}),e.jsx(a,{colour:"dark",label:"Total",showCount:!0,count:99})]})}),e.jsx(o.Subsection,{title:"With Remove Button",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Removable",showRemove:!0}),e.jsx(a,{colour:"seafoam",label:"Clear me",showRemove:!0}),e.jsx(a,{colour:"purple",label:"Dismiss",showRemove:!0})]})}),e.jsx(o.Subsection,{title:"Combined",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",size:"large",label:"Design",showLeadingIcon:!0,leadingIcon:b,showCount:!0,count:7,showRemove:!0}),e.jsx(a,{colour:"green",label:"Approved",showLeadingIcon:!0,leadingIcon:d,showRemove:!0}),e.jsx(a,{colour:"red",size:"small",label:"Urgent",showCount:!0,count:2,showRemove:!0})]})})]}),e.jsxs(o.Section,{title:"Selected State",children:[e.jsxs(o.BodyText,{children:["Pass ",e.jsx("code",{children:"selected"})," to show the tag in an active/pressed state. The selected style inverts the background and text colour using the full token colour value rather than the tinted background."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{colour:"blue",label:"Unselected"}),e.jsx(a,{colour:"blue",label:"Selected",selected:!0}),e.jsx(a,{colour:"green",label:"Unselected"}),e.jsx(a,{colour:"green",label:"Selected",selected:!0}),e.jsx(a,{colour:"purple",label:"Unselected"}),e.jsx(a,{colour:"purple",label:"Selected",selected:!0})]})]}),e.jsxs(o.Section,{title:"Disabled State",children:[e.jsxs(o.BodyText,{children:["Disabled tags render at reduced opacity (",e.jsx("code",{children:"--global-opacity-disabled"})," = 0.45) and block all interactions. Apply with the ",e.jsx("code",{children:"disabled"})," prop."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{colour:"blue",label:"Active"}),e.jsx(a,{colour:"blue",label:"Disabled",disabled:!0}),e.jsx(a,{colour:"red",label:"Active",showRemove:!0}),e.jsx(a,{colour:"red",label:"Disabled",showRemove:!0,disabled:!0})]})]}),e.jsxs(o.Section,{title:"Notification Badges",children:[e.jsxs(o.BodyText,{children:["Circular count indicators used to surface unread counts, alerts, or status at a glance. They share the same colour token set as the Tag component and are available in four sizes — ",e.jsx("strong",{children:"xs"})," (16px), ",e.jsx("strong",{children:"sm"})," (20px), ",e.jsx("strong",{children:"md"})," (24px), and ",e.jsx("strong",{children:"lg"})," (28px) — as both filled and outline variants."]}),e.jsx(o.Subsection,{title:"Filled — all sizes",children:["xs","sm","md","lg"].map(l=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",padding:"var(--global-spacing-sizing-4px) 0"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",minWidth:"28px",flexShrink:0},children:l}),W.map(t=>e.jsx(u,{colour:t,size:l,count:1,variant:"filled"},t))]},l))}),e.jsx(o.Subsection,{title:"Outline",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",padding:"var(--global-spacing-sizing-8px) 0"},children:W.map(l=>e.jsx(u,{colour:l,size:"md",count:1,variant:"outline"},l))})}),e.jsx(o.Subsection,{title:"Counts in context",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",padding:"var(--global-spacing-sizing-8px) 0"},children:[e.jsx(u,{colour:"red",size:"xs",count:3}),e.jsx(u,{colour:"blue",size:"sm",count:12}),e.jsx(u,{colour:"green",size:"md",count:99}),e.jsx(u,{colour:"dark",size:"lg",count:7}),e.jsx(u,{colour:"navy",size:"md",count:1}),e.jsx(u,{colour:"purple",size:"sm",count:4})]})})]}),e.jsx(o.TokenTable,{title:"Design Tokens — Opacity",description:"Global opacity tokens used for interactive and disabled states:",tokens:[{name:"--global-opacity-disabled",description:"Disabled state — 0.45 (45%). Applied to the whole tag when disabled prop is set."},{name:"--global-opacity-subtle",description:"Subtle / muted visibility — 0.65 (65%). Applied to the remove icon at rest."},{name:"--global-opacity-hover",description:"Hover state — 0.85 (85%). Applied to interactive tags on hover."},{name:"--global-opacity-dim",description:"Strongly dimmed — 0.30 (30%). Applied to the remove icon when the tag itself is disabled."}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Layout & Size",description:"Tokens controlling dimensions, spacing, and border radius:",tokens:[{name:"--tag-border-radius",description:"Fully rounded pill shape (100px) — uses --global-spacing-radius-100px"},{name:"--tag-border-width",description:"Border thickness (1px) — uses --global-spacing-stroke-1px"},{name:"--tag-height-small",description:"Small tag height (20px) — uses --global-spacing-sizing-20px"},{name:"--tag-height-default",description:"Default tag height (24px) — uses --global-spacing-sizing-24px"},{name:"--tag-height-large",description:"Large tag height (28px) — uses --global-spacing-sizing-28px"},{name:"--tag-padding-small",description:"Small horizontal padding (0 8px)"},{name:"--tag-padding-default",description:"Default horizontal padding (0 10px)"},{name:"--tag-padding-large",description:"Large horizontal padding (0 12px)"},{name:"--tag-gap-small",description:"Gap between elements — small (4px)"},{name:"--tag-gap-default",description:"Gap between elements — default (4px)"},{name:"--tag-gap-large",description:"Gap between elements — large (6px)"}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Typography",description:"Tokens controlling text appearance:",tokens:[{name:"--tag-font-family",description:"Font family — F37 Ginger Pro (--font-family-primary)"},{name:"--tag-font-weight",description:"Font weight — 400 regular (--global-type-weight-default)"},{name:"--tag-letter-spacing",description:"Letter spacing (0.15px)"},{name:"--tag-font-size-small",description:"Small font size (11px) — uses --global-type-size-primary-label-xs"},{name:"--tag-font-size-default",description:"Default font size (12px) — uses --global-type-size-primary-label-xs"},{name:"--tag-font-size-large",description:"Large font size (14px) — uses --global-type-size-primary-label-sm"}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Colour Variants",description:"Each colour has three tokens: background, text, and border. All reference global tokens.",tokens:[{name:"--tag-bg-blue / --tag-color-blue / --tag-border-color-blue",description:"Blue variant — sky-blue-50 bg / sky-blue text / sky-blue-200 border"},{name:"--tag-bg-seafoam / --tag-color-seafoam / --tag-border-color-seafoam",description:"Seafoam variant — seafoam-100 bg / seafoam-300 text and border"},{name:"--tag-bg-yellow / --tag-color-yellow / --tag-border-color-yellow",description:"Yellow variant — orange-light bg / dark-orange text / orange-light-border border"},{name:"--tag-bg-dark / --tag-color-dark / --tag-border-color-dark",description:"Dark variant — base-black bg / base-white text"},{name:"--tag-bg-navy / --tag-color-navy / --tag-border-color-navy",description:"Navy variant — secondary-navy bg / base-white text"},{name:"--tag-bg-red / --tag-color-red / --tag-border-color-red",description:"Red variant — status-red-light bg / status-red text / status-rose border"},{name:"--tag-bg-green / --tag-color-green / --tag-border-color-green",description:"Green variant — status-green-light bg / status-dark-green text / status-green border"},{name:"--tag-bg-purple / --tag-color-purple / --tag-border-color-purple",description:"Purple variant — status-purple-light bg / status-purple text / note-mid border"},{name:"--tag-bg-info / --tag-color-info / --tag-border-color-info",description:"Info variant — status-info-blue-light bg / status-info-blue text / status-edit border"},{name:"--tag-bg-default / --tag-color-default / --tag-border-color-default",description:"Default (gray) variant — neutral-gray-100 bg / neutral-gray-700 text / neutral-gray-300 border"}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Count Badge",description:"Each colour variant has a dedicated count badge background (slightly darker than the tag fill) and an accessible text colour (white or black):",tokens:[{name:"--tag-count-bg-blue / --tag-count-color-blue",description:"Blue count — sky-blue-200 bg / base-black text"},{name:"--tag-count-bg-seafoam / --tag-count-color-seafoam",description:"Seafoam count — seafoam-300 bg / base-black text"},{name:"--tag-count-bg-yellow / --tag-count-color-yellow",description:"Yellow count — orange-light-border bg / base-black text"},{name:"--tag-count-bg-dark / --tag-count-color-dark",description:"Dark count — neutral-gray-600 bg / base-white text"},{name:"--tag-count-bg-navy / --tag-count-color-navy",description:"Navy count — secondary-navy-mid bg / base-white text"},{name:"--tag-count-bg-red / --tag-count-color-red",description:"Red count — status-rose bg / base-black text"},{name:"--tag-count-bg-green / --tag-count-color-green",description:"Green count — status-green bg / base-black text"},{name:"--tag-count-bg-purple / --tag-count-color-purple",description:"Purple count — note-mid bg / base-black text"},{name:"--tag-count-bg-info / --tag-count-color-info",description:"Info count — status-edit bg / base-black text"},{name:"--tag-count-bg-default / --tag-count-color-default",description:"Default count — neutral-gray-300 bg / base-black text"}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Notification Badge",description:"Circular notification badge dimensions, typography, and per-colour values. Colours mirror the Tag colour system.",tokens:[{name:"--badge-size-xs",description:"Extra-small badge diameter (16px)"},{name:"--badge-size-sm",description:"Small badge diameter (20px)"},{name:"--badge-size-md",description:"Default badge diameter (24px)"},{name:"--badge-size-lg",description:"Large badge diameter (28px)"},{name:"--badge-font-family",description:"Font family — F37 Ginger Pro (--font-family-primary)"},{name:"--badge-font-weight",description:"Font weight — bold (700)"},{name:"--badge-font-size-xs / sm / md / lg",description:"Size-variant type scale (10px → 14px)"},{name:"--badge-border-radius",description:"Fully circular (--global-spacing-radius-full)"},{name:"--badge-border-width",description:"Border thickness (1px)"},{name:"--badge-bg-{colour} / --badge-color-{colour} / --badge-border-{colour}",description:"Per-colour tokens — mirrors tag colour palette (10 variants)"}]}),e.jsx(o.CodeBlock,{children:`import { Tag } from './Tag';
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
<Tag colour="red" label="Restricted" disabled />`}),e.jsxs(o.Principles,{children:[e.jsxs(o.PrincipleCard,{number:1,title:"Semantic Colour",children:["Choose the colour variant based on its semantic meaning, not aesthetics. Use"," ",e.jsx("strong",{children:"red"})," for errors, ",e.jsx("strong",{children:"green"})," for success, ",e.jsx("strong",{children:"yellow"})," ","for warnings, and ",e.jsx("strong",{children:"info/blue"})," for informational categories. Reserve"," ",e.jsx("strong",{children:"dark"})," and ",e.jsx("strong",{children:"navy"})," for high-emphasis neutral labels."]}),e.jsx(o.PrincipleCard,{number:2,title:"Concise Labels",children:"Tag labels should be 1–3 words. Long text forces truncation at 160px. If content is longer, consider a different component (e.g. a Badge or a full Label)."}),e.jsx(o.PrincipleCard,{number:3,title:"Group Consistently",children:"When displaying a set of tags, keep the same size and variant consistent across the group. Mixing sizes within a row creates visual noise. Reserve size variation for deliberate hierarchy signals."})]}),e.jsx(o.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{colour:"green",label:"Approved",showLeadingIcon:!0,leadingIcon:d}),e.jsx(a,{colour:"red",label:"Rejected"}),e.jsx(a,{colour:"yellow",label:"Pending"})]}),label:"Semantic colours",description:"Use colour variants that reflect semantic meaning — green for success, red for errors, yellow for warnings."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{colour:"purple",label:"Approved"}),e.jsx(a,{colour:"blue",label:"Rejected"}),e.jsx(a,{colour:"navy",label:"Pending"})]}),label:"Mismatched colours",description:"Don't use arbitrary colours that contradict meaning. Users rely on colour to quickly understand status."}}),e.jsx(o.Footer,{})]});R.__docgenInfo={description:"",methods:[],displayName:"TagDocs"};const ua={title:"Foundation/Tag",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(R,{})}},argTypes:{size:{control:"select",options:["small","default","large"]},colour:{control:"select",options:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"]},variant:{control:"select",options:["filled","outline"]},leadingIcon:{control:"select",options:["None","Person","Check","Star","Tag"],mapping:{None:void 0,Person:C,Check:d,Star:b,Tag:D}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","Person","Check","Star","Tag"],mapping:{None:void 0,Person:C,Check:d,Star:b,Tag:D}},showTrailingIcon:{control:"boolean"},showRemove:{control:"boolean"},showCount:{control:"boolean"},count:{control:"number"},selected:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},h={render:()=>e.jsx(R,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},y={args:{label:"Label",colour:"blue",size:"default",variant:"filled"}},v={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(l=>e.jsx(a,{colour:l,label:l},l))}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(l=>e.jsx(a,{colour:l,variant:"outline",label:l},l))}),parameters:{controls:{disable:!0}}},j={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{size:"small",colour:"blue",label:"Small"}),e.jsx(a,{size:"default",colour:"blue",label:"Default"}),e.jsx(a,{size:"large",colour:"blue",label:"Large"})]}),parameters:{controls:{disable:!0}}},T={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Person",showLeadingIcon:!0,leadingIcon:C}),e.jsx(a,{colour:"green",label:"Verified",showLeadingIcon:!0,leadingIcon:d}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:b}),e.jsx(a,{colour:"yellow",label:"Tagged",size:"large",showLeadingIcon:!0,leadingIcon:D}),e.jsx(a,{colour:"info",size:"small",label:"Small icon",showLeadingIcon:!0,leadingIcon:C})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Next",showTrailingIcon:!0,trailingIcon:d}),e.jsx(a,{colour:"green",label:"Verified",showTrailingIcon:!0,trailingIcon:d}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:b,showTrailingIcon:!0,trailingIcon:d}),e.jsx(a,{colour:"yellow",label:"Tagged",size:"large",showTrailingIcon:!0,trailingIcon:D})]}),parameters:{controls:{disable:!0}}},z={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Issues",showCount:!0,count:12}),e.jsx(a,{colour:"red",label:"Errors",showCount:!0,count:3}),e.jsx(a,{colour:"yellow",label:"Warnings",showCount:!0,count:7}),e.jsx(a,{colour:"green",label:"Passed",showCount:!0,count:99}),e.jsx(a,{colour:"dark",label:"Total",showCount:!0,count:114})]}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Category",showRemove:!0}),e.jsx(a,{colour:"seafoam",label:"Topic",showRemove:!0}),e.jsx(a,{colour:"purple",label:"Label",showRemove:!0}),e.jsx(a,{colour:"red",label:"Remove me",showRemove:!0})]}),parameters:{controls:{disable:!0}}},_={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["blue","green","purple","red","info","default"].map(l=>e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx(a,{colour:l,label:"Off"}),e.jsx(a,{colour:l,label:"On",selected:!0})]},l))}),parameters:{controls:{disable:!0}}},O=["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"],oa=({colour:l="blue",count:t=1,size:n="md",variant:c="filled"})=>{const s=`var(--badge-size-${n})`,m=`var(--badge-font-size-${n})`,x=c==="outline";return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:s,height:s,minWidth:s,borderRadius:"var(--badge-border-radius)",border:`var(--badge-border-width) solid var(--badge-border-${l})`,background:x?"transparent":`var(--badge-bg-${l})`,color:x?`var(--badge-bg-${l==="dark"?"dark":l==="navy"?"navy":l})`:`var(--badge-color-${l})`,fontFamily:"var(--badge-font-family)",fontWeight:"var(--badge-font-weight)",fontSize:m,letterSpacing:"var(--badge-letter-spacing)",lineHeight:1,userSelect:"none",flexShrink:0,transition:"background var(--badge-transition-duration) var(--badge-transition-easing)"},children:t})},ta=({colour:l="blue",...t})=>{const n=l==="dark"?"var(--global-color-base-black)":l==="navy"?"var(--global-color-secondary-navy)":`var(--badge-color-${l})`,c=`var(--badge-size-${t.size??"md"})`,s=`var(--badge-font-size-${t.size??"md"})`;return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:c,height:c,minWidth:c,borderRadius:"var(--badge-border-radius)",border:`var(--badge-border-width) solid var(--badge-border-${l})`,background:"transparent",color:n,fontFamily:"var(--badge-font-family)",fontWeight:700,fontSize:s,letterSpacing:"var(--badge-letter-spacing)",lineHeight:1,userSelect:"none",flexShrink:0},children:t.count??1})},S={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[["xs","sm","md","lg"].map(l=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"11px",color:"#6d7280",minWidth:"32px",flexShrink:0},children:l}),O.map(t=>e.jsx(oa,{colour:t,size:l,count:1,variant:"filled"},t))]},l)),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"11px",color:"#6d7280",minWidth:"32px",flexShrink:0},children:"out"}),O.map(l=>e.jsx(ta,{colour:l,size:"md",count:1},l))]})]}),parameters:{layout:"padded",controls:{disable:!0}}},L={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px"},children:["small","default","large"].map(l=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"11px",color:"#6d7280",minWidth:"52px",flexShrink:0},children:l}),["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(t=>e.jsx(a,{size:l,colour:t,label:"Label"},t))]},l))}),parameters:{layout:"padded",controls:{disable:!0}}};var N,P,V,$,E;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <TagDocs />,
  parameters: {
    layout: 'fullscreen',
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
}`,...(V=(P=h.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:"Full documentation page for the Tag component.",...(E=($=h.parameters)==null?void 0:$.docs)==null?void 0:E.description}}};var q,U,G,H,M;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    colour: 'blue',
    size: 'default',
    variant: 'filled'
  }
}`,...(G=(U=y.parameters)==null?void 0:U.docs)==null?void 0:G.source},description:{story:"Default Tag — the most common usage.",...(M=(H=y.parameters)==null?void 0:H.docs)==null?void 0:M.description}}};var K,Y,J,Q,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(J=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"All ten colour variants side by side (filled style).",...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,ee,ae,le,oe;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"All ten colour variants in outline style.",...(oe=(le=w.parameters)==null?void 0:le.docs)==null?void 0:oe.description}}};var te,re,ne,se,ie;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ne.source},description:{story:"All three sizes.",...(ie=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ie.description}}};var de,ce,ge,pe,ue;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ge=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ge.source},description:{story:"Tags with leading icons.",...(ue=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};var be,me,xe,fe,he;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(me=I.parameters)==null?void 0:me.docs)==null?void 0:xe.source},description:{story:"Tags with trailing icons.",...(he=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:he.description}}};var ye,ve,we,je,Te;z.parameters={...z.parameters,docs:{...(ye=z.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:we.source},description:{story:"Tags with numeric count badges.",...(Te=(je=z.parameters)==null?void 0:je.docs)==null?void 0:Te.description}}};var Ie,ze,ke,_e,Se;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ke=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:ke.source},description:{story:"Removable tags with the dismiss × button.",...(Se=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:Se.description}}};var Le,Ce,We,De,Fe;_.parameters={..._.parameters,docs:{...(Le=_.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(We=(Ce=_.parameters)==null?void 0:Ce.docs)==null?void 0:We.source},description:{story:"Selected state — active/pressed tags.",...(Fe=(De=_.parameters)==null?void 0:De.docs)==null?void 0:Fe.description}}};var Re,Ae,Be,Oe,Ne;S.parameters={...S.parameters,docs:{...(Re=S.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px'
  }}>
      {/* Filled — 4 sizes */}
      {(['xs', 'sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      alignItems: 'center'
    }}>
          <span style={{
        fontFamily: 'var(--font-family-secondary)',
        fontSize: '11px',
        color: '#6d7280',
        minWidth: '32px',
        flexShrink: 0
      }}>{size}</span>
          {ALL_BADGE_COLOURS.map(colour => <NotificationBadge key={colour} colour={colour} size={size} count={1} variant="filled" />)}
        </div>)}
      {/* Outline — default size */}
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      alignItems: 'center'
    }}>
        <span style={{
        fontFamily: 'var(--font-family-secondary)',
        fontSize: '11px',
        color: '#6d7280',
        minWidth: '32px',
        flexShrink: 0
      }}>out</span>
        {ALL_BADGE_COLOURS.map(colour => <OutlineNotificationBadge key={colour} colour={colour} size="md" count={1} />)}
      </div>
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(Be=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source},description:{story:`Circular notification badges in all colour variants and sizes.
Use these to indicate counts, alerts, or status dots on UI elements.`,...(Ne=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:Ne.description}}};var Pe,Ve,$e,Ee,qe;L.parameters={...L.parameters,docs:{...(Pe=L.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...($e=(Ve=L.parameters)==null?void 0:Ve.docs)==null?void 0:$e.source},description:{story:"All sizes × all colours matrix.",...(qe=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:qe.description}}};const ba=["Documentation","Default","ColourVariants","OutlineVariants","Sizes","WithLeadingIcon","WithTrailingIcon","WithCount","Removable","SelectedState","NotificationBadges","AllVariants"];export{L as AllVariants,v as ColourVariants,y as Default,h as Documentation,S as NotificationBadges,w as OutlineVariants,k as Removable,_ as SelectedState,j as Sizes,z as WithCount,T as WithLeadingIcon,I as WithTrailingIcon,ba as __namedExportsOrder,ua as default};
