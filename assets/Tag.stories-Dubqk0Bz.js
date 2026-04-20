import{j as e}from"./iframe-KonIzXCq.js";import{T as a}from"./Tag-BBiwbDK8.js";import{D as o}from"./DocsTemplate-rm8dncqn.js";import{P as j}from"./Person-kNkAorUL.js";import{C as n}from"./Check-Bw0YeFdF.js";import{c as ta}from"./createSvgIcon-rQ8Ntfsv.js";import{A as F}from"./ArrowForward-BysgdirL.js";import{L as R}from"./LocalOfferOutlined-By7sVm5l.js";import"./preload-helper-Dp1pzeXC.js";import"./ButtonBase-CnjVt3o8.js";import"./DefaultPropsProvider-ChlAzVFn.js";import"./index-DTl7PwLc.js";import"./emotion-react.browser.esm-i4KROQlH.js";import"./useForkRef-Cx3LQ-72.js";import"./useEventCallback-DDBjZ24F.js";import"./isFocusVisible-B8k4qzLc.js";import"./memoTheme-DBFZrnrT.js";const d=ta(e.jsx("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"})),T=["blue","seafoam","yellow","dark","navy","red","green","purple","info","default"],i=({colour:l="blue",count:r=1,size:t="md",variant:c="filled"})=>{const s=c==="outline",D=l==="dark"?"var(--global-color-base-black)":l==="navy"?"var(--global-color-secondary-navy)":`var(--badge-color-${l})`;return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:`var(--badge-size-${t})`,height:`var(--badge-size-${t})`,minWidth:`var(--badge-size-${t})`,borderRadius:"var(--badge-border-radius)",border:`var(--badge-border-width) solid var(--badge-border-${l})`,background:s?"transparent":`var(--badge-bg-${l})`,color:s?D:`var(--badge-color-${l})`,fontFamily:"var(--badge-font-family)",fontWeight:700,fontSize:`var(--badge-font-size-${t})`,letterSpacing:"var(--badge-letter-spacing)",lineHeight:1,userSelect:"none",flexShrink:0},children:r})},B=()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"Tag",subtitle:"Compact pill-shaped labels for categorising, filtering, and annotating content across the interface"}),e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"Tag"})," component is a small, highly versatile pill label used to represent categories, attributes, or states. It supports 10 colour variants, 3 sizes, filled and outline styles, optional leading icons, removable dismiss buttons, and numeric count badges. Tags are interactive when given an ",e.jsx("code",{children:"onClick"})," handler and can express a selected/active state."]}),e.jsxs(o.Section,{title:"MUI Foundation",children:[e.jsxs(o.BodyText,{children:["The Tag component uses MUI's ",e.jsx("strong",{children:"ButtonBase"})," for the interactive"," ",e.jsx("strong",{children:"remove (dismiss) button"})," — the small × icon that appears when a Tag is removable. ",e.jsx("code",{children:"ButtonBase"})," gives the dismiss button keyboard activation, accessible focus, and proper click semantics without any visual style. MUI icons from"," ",e.jsx("code",{children:"@mui/icons-material"})," are accepted as the optional"," ",e.jsx("code",{children:"leadingIcon"})," prop. The Tag container itself is a plain"," ",e.jsx("code",{children:"<span>"})," element. All colour, pill shape, size, and state styles are applied via CSS Modules and the ",e.jsx("code",{children:"--tag-*"})," token family."]}),e.jsx(o.CodeBlock,{children:`// MUI base import (remove button only)
import ButtonBase from '@mui/material/ButtonBase';

// Leading icon example:
import CheckIcon from '@mui/icons-material/Check';
<Tag leadingIcon={CheckIcon} label="Approved" />

// Remove button inside the Tag:
{showRemove && (
  <ButtonBase component="button" className={styles['tag__remove']} onClick={onRemove} aria-label="Remove">
    {/* × SVG */}
  </ButtonBase>
)}`})]}),e.jsxs(o.Section,{title:"Component Anatomy",children:[e.jsx(o.BodyText,{children:"The diagram below maps each part of the default Tag to its controlling design token."}),e.jsx(o.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2F0afb91c27a8d4e7b8dc3a156dcf732de",alt:"Tag component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Leading Icon",token:`filled/icons (user category)
--tag-icon-size-{size}
--tag-gap-{size}`,description:"Optional icon preceding the label. W: 16, H: 16, fill: #FFFFFF. Icon name: account, category: user. Controlled by showLeadingIcon + leadingIcon props."},{id:2,name:"Label",token:`--tag-font-family (--brand-font-primary)
--tag-font-size (16px)
--tag-font-weight (400)
--tag-color (color/base/white)`,description:"Primary text content. W: HUG, H: HUG. Uses F37 Ginger Regular at 16px with 20px line-height. Colour: color/base/white. Set via the label prop."},{id:3,name:"Trailing Icon",token:`filled/icons (action category)
--tag-icon-size-{size}
--tag-gap-{size}`,description:"Optional icon after the label. W: 16, H: 16, fill: #FFFFFF. Icon name: arrow-right, category: action. Controlled by showTrailingIcon + trailingIcon props."}]})]}),e.jsxs(o.Section,{title:"Colour Variants",children:[e.jsxs(o.BodyText,{children:["Ten colour variants are available. Each maps to a unique background, text, and border colour through the token system. The ",e.jsx("strong",{children:"filled"})," variant (default) uses a tinted background, while ",e.jsx("strong",{children:"outline"})," uses a transparent background with the same border colour."]}),e.jsx(o.Subsection,{title:"Filled",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:T.map(l=>e.jsx(a,{colour:l,variant:"filled",label:l},l))})}),e.jsx(o.Subsection,{title:"Outline",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:T.map(l=>e.jsx(a,{colour:l,variant:"outline",label:l},l))})})]}),e.jsxs(o.Section,{title:"Sizes",children:[e.jsx(o.BodyText,{children:"Three sizes adapt the tag to different density contexts. All sizes support all colour variants and optional elements."}),e.jsx(o.SizeDemo,{rows:[{label:"Small",sublabel:"Dense lists, inline metadata",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{size:"small",colour:"blue",label:"Small"}),e.jsx(a,{size:"small",colour:"seafoam",label:"Tag"}),e.jsx(a,{size:"small",colour:"yellow",label:"Label"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{size:"default",colour:"blue",label:"Default"}),e.jsx(a,{size:"default",colour:"seafoam",label:"Tag"}),e.jsx(a,{size:"default",colour:"yellow",label:"Label"})]})},{label:"Large",sublabel:"Prominent filters, hero labels",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{size:"large",colour:"blue",label:"Large"}),e.jsx(a,{size:"large",colour:"seafoam",label:"Tag"}),e.jsx(a,{size:"large",colour:"yellow",label:"Label"})]})}]})]}),e.jsxs(o.Section,{title:"Optional Elements",children:[e.jsx(o.BodyText,{children:"Each optional element — leading icon, count badge, and remove button — is independently togglable and composable."}),e.jsx(o.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Person",showLeadingIcon:!0,leadingIcon:j}),e.jsx(a,{colour:"green",label:"Verified",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:d}),e.jsx(a,{colour:"yellow",label:"Review",size:"large",showLeadingIcon:!0,leadingIcon:d})]})}),e.jsx(o.Subsection,{title:"With Trailing Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Next",showTrailingIcon:!0,trailingIcon:F}),e.jsx(a,{colour:"green",label:"Verified",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:d,showTrailingIcon:!0,trailingIcon:F}),e.jsx(a,{colour:"yellow",label:"Navigate",size:"large",showTrailingIcon:!0,trailingIcon:F})]})}),e.jsx(o.Subsection,{title:"With Count Badge",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Issues",showCount:!0,count:12}),e.jsx(a,{colour:"red",label:"Errors",showCount:!0,count:3}),e.jsx(a,{colour:"info",label:"Pending",showCount:!0,count:28}),e.jsx(a,{colour:"dark",label:"Total",showCount:!0,count:99})]})}),e.jsx(o.Subsection,{title:"With Remove Button",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",label:"Removable",showRemove:!0}),e.jsx(a,{colour:"seafoam",label:"Clear me",showRemove:!0}),e.jsx(a,{colour:"purple",label:"Dismiss",showRemove:!0})]})}),e.jsx(o.Subsection,{title:"Combined",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{colour:"blue",size:"large",label:"Design",showLeadingIcon:!0,leadingIcon:d,showCount:!0,count:7,showRemove:!0}),e.jsx(a,{colour:"green",label:"Approved",showLeadingIcon:!0,leadingIcon:n,showRemove:!0}),e.jsx(a,{colour:"red",size:"small",label:"Urgent",showCount:!0,count:2,showRemove:!0})]})})]}),e.jsxs(o.Section,{title:"Selected State",children:[e.jsxs(o.BodyText,{children:["Pass ",e.jsx("code",{children:"selected"})," to show the tag in an active/pressed state. The selected style inverts the background and text colour using the full token colour value rather than the tinted background."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{colour:"blue",label:"Unselected"}),e.jsx(a,{colour:"blue",label:"Selected",selected:!0}),e.jsx(a,{colour:"green",label:"Unselected"}),e.jsx(a,{colour:"green",label:"Selected",selected:!0}),e.jsx(a,{colour:"purple",label:"Unselected"}),e.jsx(a,{colour:"purple",label:"Selected",selected:!0})]})]}),e.jsxs(o.Section,{title:"Disabled State",children:[e.jsxs(o.BodyText,{children:["Disabled tags render at reduced opacity (",e.jsx("code",{children:"--global-opacity-disabled"})," = 0.45) and block all interactions. Apply with the ",e.jsx("code",{children:"disabled"})," prop."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{colour:"blue",label:"Active"}),e.jsx(a,{colour:"blue",label:"Disabled",disabled:!0}),e.jsx(a,{colour:"red",label:"Active",showRemove:!0}),e.jsx(a,{colour:"red",label:"Disabled",showRemove:!0,disabled:!0})]})]}),e.jsxs(o.Section,{title:"Notification Badges",children:[e.jsxs(o.BodyText,{children:["Circular count indicators used to surface unread counts, alerts, or status at a glance. They share the same colour token set as the Tag component and are available in four sizes — ",e.jsx("strong",{children:"xs"})," (16px), ",e.jsx("strong",{children:"sm"})," (20px), ",e.jsx("strong",{children:"md"})," (24px), and ",e.jsx("strong",{children:"lg"})," (28px) — as both filled and outline variants."]}),e.jsx(o.Subsection,{title:"Filled — all sizes",children:["xs","sm","md","lg"].map(l=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",padding:"var(--global-spacing-sizing-4px) 0"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",minWidth:"28px",flexShrink:0},children:l}),T.map(r=>e.jsx(i,{colour:r,size:l,count:1,variant:"filled"},r))]},l))}),e.jsx(o.Subsection,{title:"Outline",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",padding:"var(--global-spacing-sizing-8px) 0"},children:T.map(l=>e.jsx(i,{colour:l,size:"md",count:1,variant:"outline"},l))})}),e.jsx(o.Subsection,{title:"Counts in context",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",padding:"var(--global-spacing-sizing-8px) 0"},children:[e.jsx(i,{colour:"red",size:"xs",count:3}),e.jsx(i,{colour:"blue",size:"sm",count:12}),e.jsx(i,{colour:"green",size:"md",count:99}),e.jsx(i,{colour:"dark",size:"lg",count:7}),e.jsx(i,{colour:"navy",size:"md",count:1}),e.jsx(i,{colour:"purple",size:"sm",count:4})]})})]}),e.jsx(o.TokenTable,{title:"Design Tokens — Opacity",description:"Global opacity tokens used for interactive and disabled states:",tokens:[{name:"--global-opacity-disabled",description:"Disabled state — 0.45 (45%). Applied to the whole tag when disabled prop is set."},{name:"--global-opacity-subtle",description:"Subtle / muted visibility — 0.65 (65%). Applied to the remove icon at rest."},{name:"--global-opacity-hover",description:"Hover state — 0.85 (85%). Applied to interactive tags on hover."},{name:"--global-opacity-dim",description:"Strongly dimmed — 0.30 (30%). Applied to the remove icon when the tag itself is disabled."}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Layout & Size",description:"Tokens controlling dimensions, spacing, and border radius:",tokens:[{name:"--tag-border-radius",description:"Fully rounded pill shape (100px) — uses --global-spacing-radius-100px"},{name:"--tag-border-width",description:"Border thickness (1px) — uses --global-spacing-stroke-1px"},{name:"--tag-height-small",description:"Small tag height (20px) — uses --global-spacing-sizing-20px"},{name:"--tag-height-default",description:"Default tag height (24px) — uses --global-spacing-sizing-24px"},{name:"--tag-height-large",description:"Large tag height (28px) — uses --global-spacing-sizing-28px"},{name:"--tag-padding-small",description:"Small horizontal padding (0 8px)"},{name:"--tag-padding-default",description:"Default horizontal padding (0 10px)"},{name:"--tag-padding-large",description:"Large horizontal padding (0 12px)"},{name:"--tag-gap-small",description:"Gap between elements — small (4px)"},{name:"--tag-gap-default",description:"Gap between elements — default (4px)"},{name:"--tag-gap-large",description:"Gap between elements — large (6px)"}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Typography",description:"Tokens controlling text appearance:",tokens:[{name:"--tag-font-family",description:"Font family — F37 Ginger Pro (--font-family-primary)"},{name:"--tag-font-weight",description:"Font weight — 400 regular (--global-type-weight-default)"},{name:"--tag-letter-spacing",description:"Letter spacing (0.15px)"},{name:"--tag-font-size-small",description:"Small font size (11px) — uses --global-type-size-primary-label-xs"},{name:"--tag-font-size-default",description:"Default font size (12px) — uses --global-type-size-primary-label-xs"},{name:"--tag-font-size-large",description:"Large font size (14px) — uses --global-type-size-primary-label-sm"}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Colour Variants",description:"Each colour has three tokens: background, text, and border. All reference global tokens.",tokens:[{name:"--tag-bg-blue / --tag-color-blue / --tag-border-color-blue",description:"Blue variant — sky-blue-50 bg / sky-blue text / sky-blue-200 border"},{name:"--tag-bg-seafoam / --tag-color-seafoam / --tag-border-color-seafoam",description:"Seafoam variant — seafoam-100 bg / seafoam-300 text and border"},{name:"--tag-bg-yellow / --tag-color-yellow / --tag-border-color-yellow",description:"Yellow variant — orange-light bg / dark-orange text / orange-light-border border"},{name:"--tag-bg-dark / --tag-color-dark / --tag-border-color-dark",description:"Dark variant — base-black bg / base-white text"},{name:"--tag-bg-navy / --tag-color-navy / --tag-border-color-navy",description:"Navy variant — secondary-navy bg / base-white text"},{name:"--tag-bg-red / --tag-color-red / --tag-border-color-red",description:"Red variant — status-red-light bg / status-red text / status-rose border"},{name:"--tag-bg-green / --tag-color-green / --tag-border-color-green",description:"Green variant — status-green-light bg / status-dark-green text / status-green border"},{name:"--tag-bg-purple / --tag-color-purple / --tag-border-color-purple",description:"Purple variant — status-purple-light bg / status-purple text / note-mid border"},{name:"--tag-bg-info / --tag-color-info / --tag-border-color-info",description:"Info variant — status-info-blue-light bg / status-info-blue text / status-edit border"},{name:"--tag-bg-default / --tag-color-default / --tag-border-color-default",description:"Default (gray) variant — neutral-gray-100 bg / neutral-gray-700 text / neutral-gray-300 border"}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Count Badge",description:"Each colour variant has a dedicated count badge background (slightly darker than the tag fill) and an accessible text colour (white or black):",tokens:[{name:"--tag-count-bg-blue / --tag-count-color-blue",description:"Blue count — sky-blue-200 bg / base-black text"},{name:"--tag-count-bg-seafoam / --tag-count-color-seafoam",description:"Seafoam count — seafoam-300 bg / base-black text"},{name:"--tag-count-bg-yellow / --tag-count-color-yellow",description:"Yellow count — orange-light-border bg / base-black text"},{name:"--tag-count-bg-dark / --tag-count-color-dark",description:"Dark count — neutral-gray-600 bg / base-white text"},{name:"--tag-count-bg-navy / --tag-count-color-navy",description:"Navy count — secondary-navy-mid bg / base-white text"},{name:"--tag-count-bg-red / --tag-count-color-red",description:"Red count — status-rose bg / base-black text"},{name:"--tag-count-bg-green / --tag-count-color-green",description:"Green count — status-green bg / base-black text"},{name:"--tag-count-bg-purple / --tag-count-color-purple",description:"Purple count — note-mid bg / base-black text"},{name:"--tag-count-bg-info / --tag-count-color-info",description:"Info count — status-edit bg / base-black text"},{name:"--tag-count-bg-default / --tag-count-color-default",description:"Default count — neutral-gray-300 bg / base-black text"}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Notification Badge",description:"Circular notification badge dimensions, typography, and per-colour values. Colours mirror the Tag colour system.",tokens:[{name:"--badge-size-xs",description:"Extra-small badge diameter (16px)"},{name:"--badge-size-sm",description:"Small badge diameter (20px)"},{name:"--badge-size-md",description:"Default badge diameter (24px)"},{name:"--badge-size-lg",description:"Large badge diameter (28px)"},{name:"--badge-font-family",description:"Font family — F37 Ginger Pro (--font-family-primary)"},{name:"--badge-font-weight",description:"Font weight — bold (700)"},{name:"--badge-font-size-xs / sm / md / lg",description:"Size-variant type scale (10px → 14px)"},{name:"--badge-border-radius",description:"Fully circular (--global-spacing-radius-full)"},{name:"--badge-border-width",description:"Border thickness (1px)"},{name:"--badge-bg-{colour} / --badge-color-{colour} / --badge-border-{colour}",description:"Per-colour tokens — mirrors tag colour palette (10 variants)"}]}),e.jsx(o.CodeBlock,{children:`import { Tag } from './Tag';
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
<Tag colour="red" label="Restricted" disabled />`}),e.jsxs(o.Principles,{children:[e.jsxs(o.PrincipleCard,{number:1,title:"Semantic Colour",children:["Choose the colour variant based on its semantic meaning, not aesthetics. Use"," ",e.jsx("strong",{children:"red"})," for errors, ",e.jsx("strong",{children:"green"})," for success, ",e.jsx("strong",{children:"yellow"})," ","for warnings, and ",e.jsx("strong",{children:"info/blue"})," for informational categories. Reserve"," ",e.jsx("strong",{children:"dark"})," and ",e.jsx("strong",{children:"navy"})," for high-emphasis neutral labels."]}),e.jsx(o.PrincipleCard,{number:2,title:"Concise Labels",children:"Tag labels should be 1–3 words. Long text forces truncation at 160px. If content is longer, consider a different component (e.g. a Badge or a full Label)."}),e.jsx(o.PrincipleCard,{number:3,title:"Group Consistently",children:"When displaying a set of tags, keep the same size and variant consistent across the group. Mixing sizes within a row creates visual noise. Reserve size variation for deliberate hierarchy signals."})]}),e.jsx(o.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{colour:"green",label:"Approved",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{colour:"red",label:"Rejected"}),e.jsx(a,{colour:"yellow",label:"Pending"})]}),label:"Semantic colours",description:"Use colour variants that reflect semantic meaning — green for success, red for errors, yellow for warnings."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{colour:"purple",label:"Approved"}),e.jsx(a,{colour:"blue",label:"Rejected"}),e.jsx(a,{colour:"navy",label:"Pending"})]}),label:"Mismatched colours",description:"Don't use arbitrary colours that contradict meaning. Users rely on colour to quickly understand status."}}),e.jsx(o.Footer,{})]});B.__docgenInfo={description:"",methods:[],displayName:"TagDocs"};const Ia={title:"Foundation/Tag",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(B,{})}},argTypes:{size:{control:"select",options:["small","default","large"]},colour:{control:"select",options:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"]},variant:{control:"select",options:["filled","outline"]},leadingIcon:{control:"select",options:["None","Person","Check","Star","Tag"],mapping:{None:void 0,Person:j,Check:n,Star:d,Tag:R}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","Person","Check","Star","Tag"],mapping:{None:void 0,Person:j,Check:n,Star:d,Tag:R}},showTrailingIcon:{control:"boolean"},showRemove:{control:"boolean"},showCount:{control:"boolean"},count:{control:"number"},selected:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},p={name:"Documentation",render:()=>e.jsx(B,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},z={name:"Playground",args:{label:"Label",colour:"blue",size:"default",variant:"filled"}},I={args:{label:"Label",colour:"blue",size:"default",variant:"filled"}},g={name:"Status / Filled Colours",render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(l=>e.jsx(a,{colour:l,label:l},l))}),parameters:{controls:{disable:!0}}},k={name:"Status / Outline Colours",render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(l=>e.jsx(a,{colour:l,label:l,variant:"outline"},l))}),parameters:{controls:{disable:!0}}},S={name:"Status / Selected",render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",padding:"16px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Selected",colour:"blue",selected:!0}),e.jsx(a,{label:"Not selected",colour:"blue"}),e.jsx(a,{label:"Removable",colour:"blue",showRemove:!0})]}),parameters:{controls:{disable:!0}}},C={name:"Component Breakdown",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[["Label only",e.jsx(a,{label:"Label"}),"--tag-font-size-default / --tag-height-default"],["With leading icon",e.jsx(a,{label:"Icon",showLeadingIcon:!0}),"--tag-icon-size"],["With count",e.jsx(a,{label:"Count",showCount:!0,count:5}),"--tag-count-font-size"],["Removable",e.jsx(a,{label:"Remove",showRemove:!0}),"--tag-remove-size"],["Outline",e.jsx(a,{label:"Outline",variant:"outline",colour:"blue"}),"--tag-outline-border"]].map(([l,r,t])=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,fontFamily:"var(--brand-font-primary)",color:"var(--global-color-neutral-gray-600)"},children:l}),r,e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px"},children:t})]},l))})}),parameters:{controls:{disable:!0}}},W={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",padding:"24px",alignItems:"center"},children:[e.jsx(a,{label:"Default",colour:"blue"}),e.jsx(a,{label:"Selected",colour:"blue",selected:!0}),e.jsx(a,{label:"Removable",colour:"blue",showRemove:!0}),e.jsx(a,{label:"Disabled",colour:"blue",disabled:!0}),e.jsx(a,{label:"With count",colour:"blue",showCount:!0,count:3})]}),parameters:{controls:{disable:!0}}},L={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(l=>e.jsx(a,{colour:l,label:l},l))}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(l=>e.jsx(a,{colour:l,variant:"outline",label:l},l))}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{size:"small",colour:"blue",label:"Small"}),e.jsx(a,{size:"default",colour:"blue",label:"Default"}),e.jsx(a,{size:"large",colour:"blue",label:"Large"})]}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Person",showLeadingIcon:!0,leadingIcon:j}),e.jsx(a,{colour:"green",label:"Verified",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:d}),e.jsx(a,{colour:"yellow",label:"Tagged",size:"large",showLeadingIcon:!0,leadingIcon:R}),e.jsx(a,{colour:"info",size:"small",label:"Small icon",showLeadingIcon:!0,leadingIcon:j})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Next",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{colour:"green",label:"Verified",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{colour:"purple",label:"Featured",showLeadingIcon:!0,leadingIcon:d,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{colour:"yellow",label:"Tagged",size:"large",showTrailingIcon:!0,trailingIcon:R})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Issues",showCount:!0,count:12}),e.jsx(a,{colour:"red",label:"Errors",showCount:!0,count:3}),e.jsx(a,{colour:"yellow",label:"Warnings",showCount:!0,count:7}),e.jsx(a,{colour:"green",label:"Passed",showCount:!0,count:99}),e.jsx(a,{colour:"dark",label:"Total",showCount:!0,count:114})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:[e.jsx(a,{colour:"blue",label:"Category",showRemove:!0}),e.jsx(a,{colour:"seafoam",label:"Topic",showRemove:!0}),e.jsx(a,{colour:"purple",label:"Label",showRemove:!0}),e.jsx(a,{colour:"red",label:"Remove me",showRemove:!0})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"16px"},children:["blue","green","purple","red","info","default"].map(l=>e.jsxs("div",{style:{display:"flex",gap:"6px"},children:[e.jsx(a,{colour:l,label:"Off"}),e.jsx(a,{colour:l,label:"On",selected:!0})]},l))}),parameters:{controls:{disable:!0}}},A=["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"],na=({colour:l="blue",count:r=1,size:t="md",variant:c="filled"})=>{const s=`var(--badge-size-${t})`,D=`var(--badge-font-size-${t})`,O=c==="outline";return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:s,height:s,minWidth:s,borderRadius:"var(--badge-border-radius)",border:`var(--badge-border-width) solid var(--badge-border-${l})`,background:O?"transparent":`var(--badge-bg-${l})`,color:O?`var(--badge-bg-${l==="dark"?"dark":l==="navy"?"navy":l})`:`var(--badge-color-${l})`,fontFamily:"var(--badge-font-family)",fontWeight:"var(--badge-font-weight)",fontSize:D,letterSpacing:"var(--badge-letter-spacing)",lineHeight:1,userSelect:"none",flexShrink:0,transition:"background var(--badge-transition-duration) var(--badge-transition-easing)"},children:r})},sa=({colour:l="blue",...r})=>{const t=l==="dark"?"var(--global-color-base-black)":l==="navy"?"var(--global-color-secondary-navy)":`var(--badge-color-${l})`,c=`var(--badge-size-${r.size??"md"})`,s=`var(--badge-font-size-${r.size??"md"})`;return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:c,height:c,minWidth:c,borderRadius:"var(--badge-border-radius)",border:`var(--badge-border-width) solid var(--badge-border-${l})`,background:"transparent",color:t,fontFamily:"var(--badge-font-family)",fontWeight:700,fontSize:s,letterSpacing:"var(--badge-letter-spacing)",lineHeight:1,userSelect:"none",flexShrink:0},children:r.count??1})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[["xs","sm","md","lg"].map(l=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"11px",color:"#6d7280",minWidth:"32px",flexShrink:0},children:l}),A.map(r=>e.jsx(na,{colour:r,size:l,count:1,variant:"filled"},r))]},l)),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"11px",color:"#6d7280",minWidth:"32px",flexShrink:0},children:"out"}),A.map(l=>e.jsx(sa,{colour:l,size:"md",count:1},l))]})]}),parameters:{layout:"padded",controls:{disable:!0}}},w={name:"Full Design Matrix (60 variants)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px"},children:["small","default","large"].map(l=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",alignItems:"center"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"11px",color:"#6d7280",minWidth:"52px",flexShrink:0},children:l}),["default","blue","seafoam","yellow","dark","navy","red","green","purple","info"].map(r=>e.jsx(a,{size:l,colour:r,label:"Label"},r))]},l))}),parameters:{layout:"padded",controls:{disable:!0}}};var P,N,U,$,G;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Documentation',
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
}`,...(U=(N=p.parameters)==null?void 0:N.docs)==null?void 0:U.source},description:{story:"Full documentation page for the Tag component.",...(G=($=p.parameters)==null?void 0:$.docs)==null?void 0:G.description}}};var E,V,_;z.parameters={...z.parameters,docs:{...(E=z.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Label',
    colour: 'blue',
    size: 'default',
    variant: 'filled'
  }
}`,...(_=(V=z.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var M,H,q;I.parameters={...I.parameters,docs:{...(M=I.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    colour: 'blue',
    size: 'default',
    variant: 'filled'
  }
}`,...(q=(H=I.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var Y,J,K,Q,X;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Status / Filled Colours',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '16px'
  }}>
      {(['default', 'blue', 'seafoam', 'yellow', 'dark', 'navy', 'red', 'green', 'purple', 'info'] as const).map(c => <Tag key={c} colour={c} label={c} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"All ten colour variants side by side (filled style).",...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,ee,ae;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Status / Outline Colours',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    padding: '16px'
  }}>
      {(['default', 'blue', 'seafoam', 'yellow', 'dark', 'navy', 'red', 'green', 'purple', 'info'] as const).map(c => <Tag key={c} colour={c} label={c} variant="outline" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var le,oe,re;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Status / Selected',
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    padding: '16px',
    flexWrap: 'wrap'
  }}>
      <Tag label="Selected" colour="blue" selected />
      <Tag label="Not selected" colour="blue" />
      <Tag label="Removable" colour="blue" showRemove />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(re=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var te,ne,se;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>
      <div style={{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap'
    }}>
        {[['Label only', <Tag label="Label" />, '--tag-font-size-default / --tag-height-default'], ['With leading icon', <Tag label="Icon" showLeadingIcon />, '--tag-icon-size'], ['With count', <Tag label="Count" showCount count={5} />, '--tag-count-font-size'], ['Removable', <Tag label="Remove" showRemove />, '--tag-remove-size'], ['Outline', <Tag label="Outline" variant="outline" colour="blue" />, '--tag-outline-border']].map(([lbl, el, tok]) => <div key={lbl as string} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
            <span style={{
          fontSize: '11px',
          fontWeight: 600,
          fontFamily: 'var(--brand-font-primary)',
          color: 'var(--global-color-neutral-gray-600)'
        }}>{lbl as string}</span>
            {el as React.ReactElement}
            <code style={{
          fontSize: '10px',
          background: 'var(--global-color-neutral-gray-100)',
          padding: '2px 6px',
          borderRadius: '4px'
        }}>{tok as string}</code>
          </div>)}
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,de,ce;W.parameters={...W.parameters,docs:{...(ie=W.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '24px',
    alignItems: 'center'
  }}>
      <Tag label="Default" colour="blue" />
      <Tag label="Selected" colour="blue" selected />
      <Tag label="Removable" colour="blue" showRemove />
      <Tag label="Disabled" colour="blue" disabled />
      <Tag label="With count" colour="blue" showCount count={3} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(de=W.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ge,ue;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var be,me,xe,fe,he;u.parameters={...u.parameters,docs:{...(be=u.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(me=u.parameters)==null?void 0:me.docs)==null?void 0:xe.source},description:{story:"All ten colour variants in outline style.",...(he=(fe=u.parameters)==null?void 0:fe.docs)==null?void 0:he.description}}};var ye,ve,we,je,Te;b.parameters={...b.parameters,docs:{...(ye=b.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:we.source},description:{story:"All three sizes.",...(Te=(je=b.parameters)==null?void 0:je.docs)==null?void 0:Te.description}}};var ze,Ie,ke,Se,Ce;m.parameters={...m.parameters,docs:{...(ze=m.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(ke=(Ie=m.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source},description:{story:"Tags with leading icons.",...(Ce=(Se=m.parameters)==null?void 0:Se.docs)==null?void 0:Ce.description}}};var We,Le,Re,De,Fe;x.parameters={...x.parameters,docs:{...(We=x.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Re=(Le=x.parameters)==null?void 0:Le.docs)==null?void 0:Re.source},description:{story:"Tags with trailing icons.",...(Fe=(De=x.parameters)==null?void 0:De.docs)==null?void 0:Fe.description}}};var Be,Oe,Ae,Pe,Ne;f.parameters={...f.parameters,docs:{...(Be=f.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ae=(Oe=f.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source},description:{story:"Tags with numeric count badges.",...(Ne=(Pe=f.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.description}}};var Ue,$e,Ge,Ee,Ve;h.parameters={...h.parameters,docs:{...(Ue=h.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Ge=($e=h.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source},description:{story:"Removable tags with the dismiss × button.",...(Ve=(Ee=h.parameters)==null?void 0:Ee.docs)==null?void 0:Ve.description}}};var _e,Me,He,qe,Ye;y.parameters={...y.parameters,docs:{...(_e=y.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(He=(Me=y.parameters)==null?void 0:Me.docs)==null?void 0:He.source},description:{story:"Selected state — active/pressed tags.",...(Ye=(qe=y.parameters)==null?void 0:qe.docs)==null?void 0:Ye.description}}};var Je,Ke,Qe,Xe,Ze;v.parameters={...v.parameters,docs:{...(Je=v.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Qe=(Ke=v.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source},description:{story:`Circular notification badges in all colour variants and sizes.
Use these to indicate counts, alerts, or status dots on UI elements.`,...(Ze=(Xe=v.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.description}}};var ea,aa,la,oa,ra;w.parameters={...w.parameters,docs:{...(ea=w.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: 'Full Design Matrix (60 variants)',
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
}`,...(la=(aa=w.parameters)==null?void 0:aa.docs)==null?void 0:la.source},description:{story:"All sizes × all colours matrix.",...(ra=(oa=w.parameters)==null?void 0:oa.docs)==null?void 0:ra.description}}};const ka=["Documentation","Playground","Default","StatusFilled","StatusOutline","StatusSelected","ComponentBreakdown","AllInteractiveStates","ColourVariants","OutlineVariants","Sizes","WithLeadingIcon","WithTrailingIcon","WithCount","Removable","SelectedState","NotificationBadges","FullDesignMatrix"];export{W as AllInteractiveStates,L as ColourVariants,C as ComponentBreakdown,I as Default,p as Documentation,w as FullDesignMatrix,v as NotificationBadges,u as OutlineVariants,z as Playground,h as Removable,y as SelectedState,b as Sizes,g as StatusFilled,k as StatusOutline,S as StatusSelected,f as WithCount,m as WithLeadingIcon,x as WithTrailingIcon,ka as __namedExportsOrder,Ia as default};
