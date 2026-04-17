import{j as e}from"./iframe-BG5AzTTM.js";import{B as a}from"./Button-D0Q0KA0M.js";import{D as l}from"./DocsTemplate-BbIjHifp.js";import{P as n}from"./Person-1dD3Q07v.js";import{A as i}from"./ArrowForward-pCyVTurJ.js";import{C as z}from"./Check-shCf680l.js";import{A as w}from"./Add-BUOeIem8.js";import{D as se}from"./Download-DpKUBbXh.js";import"./preload-helper-Dp1pzeXC.js";import"./ButtonBase-BzuCCYAq.js";import"./DefaultPropsProvider-DTUKTJIK.js";import"./index-Bw56u-gd.js";import"./emotion-react.browser.esm-Cui72Qax.js";import"./useForkRef-KqzUOJjA.js";import"./useEventCallback-BCNf_yfs.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-9K0Bw3J1.js";import"./memoTheme-BCYI6P6D.js";const L=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"Primary Button",subtitle:"The primary interactive control for triggering actions, submitting forms, and navigating the interface"}),e.jsxs(l.BodyText,{children:["The ",e.jsx("strong",{children:"Button"})," component is the core action element of the design system. It supports two visual variants — ",e.jsx("em",{children:"filled"})," and ",e.jsx("em",{children:"outline"})," — across four sizes (extra-small, small, default, large), with optional leading and trailing icons, an icon-only mode, and built-in loading and disabled states. All styling is driven by the token system with no hardcoded values."]}),e.jsxs(l.Section,{title:"MUI Foundation",children:[e.jsxs(l.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"ButtonBase"})," — the low-level accessible primitive that every button in this design system shares. ",e.jsx("code",{children:"ButtonBase"})," provides native"," ",e.jsx("code",{children:"<button>"})," semantics, keyboard interaction (Enter / Space activation), and polymorphic rendering via the ",e.jsx("code",{children:"component"})," prop, with no visual styles of its own. All colour, padding, border, typography, and state styles are applied on top through CSS Modules and design tokens, so MUI updates never override the NPX visual layer."]}),e.jsx(l.CodeBlock,{children:`// MUI base import
import ButtonBase from '@mui/material/ButtonBase';

// Used as the root element — renders a native <button>:
<ButtonBase component="button" className={styles.btn} disabled={disabled} onClick={onClick}>`})]}),e.jsxs(l.Section,{title:"Component Anatomy",children:[e.jsxs(l.BodyText,{children:["The diagrams below map each part of the Button to its controlling design token for both the ",e.jsx("strong",{children:"filled"})," and ",e.jsx("strong",{children:"outline"})," variants."]}),e.jsx(l.Subsection,{title:"Filled",children:e.jsx(l.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Faa05dab54f864947ac346fbc53ed3d44",alt:"Filled primary button component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
--btn-filled-bg (--brand-primary / #3776CE)
--btn-filled-border-width (--global-spacing-stroke-0-5px)
--btn-filled-shadow-hover (hover & active only)
--btn-padding-{size}`,description:"Outer button shell. W: HUG, H: HUG. Min-W: 80, min-H: 52 (large). Corner radius: 4. Default fill: color/primary/blue (#3776CE), 0.5px border. On hover/active, bg shifts to #6171DF with 2×2 drop shadow."},{id:2,name:"Leading Icon",token:`filled/icons (user category)
--btn-icon-size-{size} (18px large)`,description:"Optional icon preceding the label. W: 18, H: 18, fill: #FFFFFF. Icon name: account, category: user. Controlled by showLeadingIcon + leadingIcon props."},{id:3,name:"Trailing Icon",token:`filled/icons (action category)
--btn-icon-size-{size} (18px large)`,description:"Optional icon after the label. W: 18, H: 18, fill: #FFFFFF. Icon name: arrow-right, category: action. Controlled by showTrailingIcon + trailingIcon props."},{id:4,name:"Label",token:`--btn-font-family (F37 Ginger Pro Light)
--btn-font-size-{size} (18px large)
--btn-font-weight (--global-type-weight-light)`,description:"Primary button text. W: HUG, H: HUG. Uses F37 Ginger Pro Light at 18px with 24px line-height. Colour: color/base/white."}]})}),e.jsx(l.Subsection,{title:"Outline",children:e.jsx(l.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Fcb9650a698cd47429c486b0389c2bf51",alt:"Outline primary button component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
--btn-outline-bg (--global-color-primary-blue-blue-50)
--btn-outline-border-color (--global-color-primary-blue-blue-300)
--btn-border-width-default (--global-spacing-stroke-1px)
--btn-padding-{size}`,description:"Outer button shell. W: HUG, H: HUG. Min-W: 80, min-H: 52 (large). Corner radius: 4. Fill uses color/primary/blue/blue-50, border uses color/primary/blue/blue-300. Stroke width: 1."},{id:2,name:"Leading Icon",token:`filled/icons (user category)
--btn-icon-size-{size} (18px large)`,description:"Optional icon preceding the label. W: 18, H: 18, fill: #FFFFFF. Icon name: account, category: user. Controlled by showLeadingIcon + leadingIcon props."},{id:3,name:"Trailing Icon",token:`filled/icons (action category)
--btn-icon-size-{size} (18px large)`,description:"Optional icon after the label. W: 18, H: 18, fill: #FFFFFF. Icon name: arrow-right, category: action. Controlled by showTrailingIcon + trailingIcon props."},{id:4,name:"Label",token:`--btn-font-family (F37 Ginger Pro Light)
--btn-font-size-{size} (18px large)
--btn-font-weight (--global-type-weight-light)
--btn-outline-color (--global-color-secondary-blue-gray)`,description:"Primary button text. W: HUG, H: HUG. Uses F37 Ginger Pro Light at 18px with 24px line-height. Colour: color/secondary/blue-gray."}]})})]}),e.jsxs(l.Section,{title:"Variants",children:[e.jsxs(l.BodyText,{children:["Two visual variants cover the primary hierarchy needs. Use ",e.jsx("strong",{children:"filled"}),"for the primary action and ",e.jsx("strong",{children:"outline"})," for secondary actions."]}),e.jsx(l.Subsection,{title:"Filled",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"filled",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"filled",label:"Label",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"filled",label:"Label",showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"filled",label:"Label"})]})}),e.jsx(l.Subsection,{title:"Outline",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"outline",label:"Label",showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"outline",label:"Label"})]})})]}),e.jsxs(l.Section,{title:"Sizes",children:[e.jsx(l.BodyText,{children:"Four sizes scale the button for different density contexts. All sizes support both variants and all optional elements. All sizes use F37 Ginger Pro as the brand typeface."}),e.jsx(l.SizeDemo,{rows:[{label:"Extra Small",sublabel:"Compact inline controls, badges, split-button dropdowns — fixed height 28px",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"extra-small",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"extra-small",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Small",sublabel:"Dense toolbars, inline actions — fixed height 34px",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"small",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"small",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface — fixed height 44px",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"default",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"default",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Large",sublabel:"Hero calls-to-action, prominent forms — fixed height 52px",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"large",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"large",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})}]})]}),e.jsxs(l.Section,{title:"Optional Elements",children:[e.jsx(l.BodyText,{children:"Leading icon, trailing icon, and icon-only mode are all independently composable."}),e.jsx(l.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n,size:"small"}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:z,size:"large"}),e.jsx(a,{label:"Download",showLeadingIcon:!0,leadingIcon:se,variant:"outline"})]})}),e.jsx(l.Subsection,{title:"With Trailing Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:i,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:i,size:"large"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:i,variant:"outline"})]})}),e.jsx(l.Subsection,{title:"Icon Only",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,variant:"outline",leadingIcon:w,ariaLabel:"Add"})]})})]}),e.jsxs(l.Section,{title:"States",children:[e.jsxs(l.Subsection,{title:"Loading",children:[e.jsxs(l.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading. The border uses a lighter stroke weight while loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"outline",loading:!0})]})]}),e.jsxs(l.Subsection,{title:"Disabled",children:[e.jsx(l.BodyText,{children:"Both filled and outline disabled states use explicit gray colours per the Figma spec (no opacity reduction). Both block all interactions."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",disabled:!0}),e.jsx(a,{label:"Label",variant:"outline",disabled:!0}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,disabled:!0}),e.jsx(a,{label:"Label",variant:"outline",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]})]})]}),e.jsx(l.TokenTable,{title:"Design Tokens — Layout & Spacing",description:"Tokens controlling padding, border radius, and gap:",tokens:[{name:"--btn-border-radius",description:"Corner radius (4px) — uses --global-spacing-radius-4px"},{name:"--btn-border-width-default",description:"Default border (1px) — uses --global-spacing-stroke-1px"},{name:"--btn-border-width-focus",description:"Focus state border (2px) — uses --global-spacing-stroke-2px"},{name:"--btn-border-width-disabled",description:"Disabled state border (2px) — uses --global-spacing-stroke-2px"},{name:"--btn-border-width-loading",description:"Loading state border (0.5px) — uses --global-spacing-stroke-0-5px"},{name:"--btn-height-extra-small",description:"Extra-small fixed height (28px) — uses --global-spacing-sizing-28px"},{name:"--btn-height",description:"Default fixed height (44px) — uses --global-spacing-sizing-44px"},{name:"--btn-height-small",description:"Small fixed height (34px)"},{name:"--btn-height-large",description:"Large fixed height (52px) — uses --global-spacing-sizing-52px"},{name:"--btn-padding-extra-small",description:"Extra-small padding — 4px vertical / 8px horizontal"},{name:"--btn-padding-small",description:"Small padding — 4px vertical / 12px horizontal"},{name:"--btn-padding-default",description:"Default padding — 8px vertical / 16px horizontal"},{name:"--btn-padding-large",description:"Large padding — 12px vertical / 16px horizontal"},{name:"--btn-gap-extra-small",description:"Gap between elements — extra-small (6px)"},{name:"--btn-gap-small",description:"Gap between elements — small (8px)"},{name:"--btn-gap-default",description:"Gap between elements — default (8px)"},{name:"--btn-gap-large",description:"Gap between elements — large (8px)"},{name:"--btn-icon-only-size-{size}",description:"Icon-only button dimensions (28px XS / 30px small / 42px default / 52px large)"},{name:"--btn-transition-duration",description:"Transition speed — --global-animation-duration-fast (160ms)"},{name:"--btn-transition-easing",description:"Transition curve — --global-animation-easing-default (ease)"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Typography",description:"Tokens controlling text and icon appearance:",tokens:[{name:"--btn-font-family",description:"Font family for all sizes — F37 Ginger Pro (--brand-font-primary)"},{name:"--btn-font-weight",description:"Font weight for small/default/large — 300 light (--global-type-weight-light)"},{name:"--btn-font-weight-extra-small",description:"Font weight for extra-small — 400 regular (--global-type-weight-default)"},{name:"--btn-letter-spacing",description:"Letter spacing for small/default/large (0.15px) — --global-type-letter-spacing-primary-label"},{name:"--btn-letter-spacing-extra-small",description:"Letter spacing for extra-small (0.2px) — --global-type-letter-spacing-primary-footnote"},{name:"--btn-font-size-extra-small",description:"Extra-small font size (13px) — --global-type-size-primary-footnote"},{name:"--btn-font-size-small",description:"Small font size (14px) — --global-type-size-primary-label-sm"},{name:"--btn-font-size-default",description:"Default font size (16px) — --global-type-size-primary-label"},{name:"--btn-font-size-large",description:"Large font size (18px) — --global-type-size-primary-label-lg"},{name:"--btn-icon-size-extra-small",description:"Extra-small icon size (14px) — --global-spacing-sizing-14px"},{name:"--btn-icon-size-small",description:"Small icon size (14px) — --global-spacing-sizing-14px"},{name:"--btn-icon-size-default",description:"Default icon size (16px) — --global-spacing-sizing-16px"},{name:"--btn-icon-size-large",description:"Large icon size (18px) — --global-spacing-sizing-18px"},{name:"--btn-spinner-duration",description:"Spinner animation speed — --global-animation-duration-spinner (700ms)"},{name:"--btn-spinner-opacity",description:"Spinner opacity — --global-opacity-muted (0.6)"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Filled Variant",description:"Colour tokens for the filled (primary) variant:",tokens:[{name:"--btn-filled-bg",description:"Default background — --brand-primary (#3776CE)"},{name:"--btn-filled-bg-hover",description:"Hover / active background — --global-color-primary-blue-blue-400 (#6171DF)"},{name:"--btn-filled-color",description:"Text and icon colour — --global-color-base-white"},{name:"--btn-filled-border-color",description:"Default border colour (matches fill) — --brand-primary"},{name:"--btn-filled-border-width",description:"Default border width (0.5px) — --global-spacing-stroke-0-5px"},{name:"--btn-filled-border-color-hover",description:"Hover border colour — --global-color-primary-blue-blue-200 (#C5CAED)"},{name:"--btn-filled-border-color-focus",description:"Focus border colour — --global-color-primary-blue-blue-400 (#6171DF)"},{name:"--btn-filled-shadow-hover",description:"Drop shadow on hover & active only — --global-spacing-sizing-2px offset, --global-color-primary-blue-blue-400 colour"},{name:"--btn-filled-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-filled-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-filled-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Outline Variant",description:"Colour tokens for the outline (secondary) variant:",tokens:[{name:"--btn-outline-bg",description:"Default background — --global-color-primary-blue-blue-50 (#F9F9FE)"},{name:"--btn-outline-bg-hover",description:"Hover / active background — --global-color-primary-blue-blue-100 (#E7E9F4)"},{name:"--btn-outline-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-outline-color",description:"Default text/icon — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-outline-color-hover",description:"Hover text/icon — --global-color-base-black (#1C1C1C)"},{name:"--btn-outline-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-outline-border-color",description:"Default border — --global-color-primary-blue-blue-300 (#95A0E5)"},{name:"--btn-outline-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--btn-outline-shadow-hover",description:"Hover box-shadow — --global-spacing-sizing-2px offset, --global-color-primary-blue-blue-400 colour"}]}),e.jsx(l.CodeBlock,{children:`import { Button } from './Button';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Filled button (default)
<Button label="Save changes" />

// With leading and trailing icons
<Button
  label="Label"
  showLeadingIcon
  leadingIcon={PersonIcon}
  showTrailingIcon
  trailingIcon={ArrowForwardIcon}
/>

// Outline variant
<Button variant="outline" label="Cancel" />

// Small size
<Button size="small" label="Compact" />

// Icon only (use ariaLabel for accessibility)
<Button iconOnly leadingIcon={PersonIcon} ariaLabel="User profile" />

// Loading state
<Button label="Saving…" loading />

// Disabled
<Button label="Restricted" disabled />`}),e.jsxs(l.Principles,{children:[e.jsxs(l.PrincipleCard,{number:1,title:"Use one primary action per context",children:["Each view or panel should have at most one ",e.jsx("strong",{children:"filled"})," button as the primary action. Use ",e.jsx("strong",{children:"outline"})," for secondary actions alongside it."]}),e.jsxs(l.PrincipleCard,{number:2,title:"Match size to context",children:["Use ",e.jsx("strong",{children:"extra-small"})," for compact inline elements and split-button dropdowns,",e.jsx("strong",{children:"small"})," in dense toolbars and inline controls, ",e.jsx("strong",{children:"default"}),"for the majority of interface actions, and ",e.jsx("strong",{children:"large"})," for hero or prominent call-to-action sections."]}),e.jsx(l.PrincipleCard,{number:3,title:"Label clearly and concisely",children:'Button labels should be 1–3 words describing the specific action (e.g. "Save", "Delete report", "Add member"). Avoid generic labels like "Click here" or "Submit".'})]}),e.jsx(l.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{variant:"filled",label:"Save changes"}),e.jsx(a,{variant:"outline",label:"Cancel"})]}),label:"One primary action",description:"Use filled for the primary action and outline for secondary — clear visual hierarchy."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{variant:"filled",label:"Save changes"}),e.jsx(a,{variant:"filled",label:"Cancel"})]}),label:"Multiple primaries",description:"Don't use two filled buttons side by side. It creates visual confusion about which action to take."}}),e.jsx(l.Footer,{})]});L.__docgenInfo={description:"",methods:[],displayName:"ButtonDocs"};const De={title:"Atoms/Buttons/Primary Button",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(L,{})}},argTypes:{variant:{control:"select",options:["filled","outline"]},size:{control:"select",options:["extra-small","small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download"],mapping:{None:void 0,Person:n,Check:z,Add:w,Download:se}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:i,Check:z,Add:w}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},r={display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},d=o=>e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--global-color-neutral-gray-500)",display:"block",marginBottom:"8px"},children:o}),c={name:"Documentation",render:()=>e.jsx(L,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},g={name:"Playground",args:{label:"Label",variant:"filled",size:"default",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!1,disabled:!1,loading:!1}},p={name:"Default",args:{label:"Label",variant:"filled",size:"default"}},b={name:"Sizes",render:()=>e.jsxs("div",{style:r,children:[e.jsx(a,{size:"extra-small",label:"Extra Small"}),e.jsx(a,{size:"small",label:"Small"}),e.jsx(a,{size:"default",label:"Default"}),e.jsx(a,{size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},u={name:"Status / Filled",render:()=>e.jsxs("div",{style:{padding:"16px"},children:[d("Filled — all sizes"),e.jsxs("div",{style:r,children:[e.jsx(a,{variant:"filled",size:"extra-small",label:"XS",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"filled",size:"small",label:"Small",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"filled",size:"default",label:"Default",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"filled",size:"large",label:"Large",showLeadingIcon:!0,leadingIcon:n})]})]}),parameters:{controls:{disable:!0}}},x={name:"Status / Outline",render:()=>e.jsxs("div",{style:{padding:"16px"},children:[d("Outline — all sizes"),e.jsxs("div",{style:r,children:[e.jsx(a,{variant:"outline",size:"extra-small",label:"XS",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"outline",size:"small",label:"Small",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"outline",size:"default",label:"Default",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"outline",size:"large",label:"Large",showLeadingIcon:!0,leadingIcon:n})]})]}),parameters:{controls:{disable:!0}}},m={name:"Status / Icon Only",render:()=>e.jsxs("div",{style:r,children:[e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,variant:"outline",leadingIcon:n,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},f={name:"Status / Loading",render:()=>e.jsxs("div",{style:r,children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"outline",loading:!0})]}),parameters:{controls:{disable:!0}}},h={name:"Status / Disabled",render:()=>e.jsxs("div",{style:r,children:[e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled",variant:"outline",disabled:!0}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:n,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},y={name:"Component Breakdown",render:()=>{const o=({name:t})=>e.jsx("code",{style:{display:"block",fontFamily:"var(--brand-font-secondary)",fontSize:"10px",color:"var(--global-color-neutral-gray-500)",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px",marginTop:"4px"},children:t}),s=({label:t,children:j})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"4px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-600)",fontWeight:600},children:t}),j]});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px",maxWidth:"600px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontWeight:600,fontSize:"13px",color:"var(--global-color-neutral-gray-800)"},children:"Anatomy"}),e.jsxs("div",{style:{marginTop:"16px",display:"flex",gap:"24px",flexWrap:"wrap"},children:[e.jsxs(s,{label:"Label",token:"--btn-font-size-default",children:[e.jsx(a,{label:"Label"}),e.jsx(o,{name:"--btn-font-size-default / --btn-label-color"})]}),e.jsxs(s,{label:"Leading Icon",token:"--btn-icon-size-default",children:[e.jsx(a,{showLeadingIcon:!0,leadingIcon:n,label:"With Icon"}),e.jsx(o,{name:"--btn-icon-size-default"})]}),e.jsxs(s,{label:"Trailing Icon",token:"--btn-icon-size-default",children:[e.jsx(a,{showTrailingIcon:!0,trailingIcon:i,label:"With Trailing"}),e.jsx(o,{name:"--btn-icon-size-default"})]}),e.jsxs(s,{label:"Icon Only",token:"--btn-icon-only-size-default",children:[e.jsx(a,{iconOnly:!0,leadingIcon:n,ariaLabel:"Icon Only"}),e.jsx(o,{name:"--btn-icon-only-size-default"})]}),e.jsxs(s,{label:"Loading Spinner",token:"--btn-icon-size-default",children:[e.jsx(a,{loading:!0,label:"Loading"}),e.jsx(o,{name:"--btn-spinner (inherits icon size)"})]})]})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontWeight:600,fontSize:"13px",color:"var(--global-color-neutral-gray-800)"},children:"Design Token References"}),e.jsx("div",{style:{marginTop:"12px",display:"flex",flexDirection:"column",gap:"6px"},children:[["Primary Filled Default","--btn-bg / --btn-label-color / --btn-border-radius"],["Primary Outline Default","--btn-outline-bg / --btn-outline-border / --btn-border-radius"],["Height (default)","--btn-height (44px)"],["Height (small)","--btn-height-small (34px)"],["Height (large)","--btn-height-large (52px)"],["Height (extra-small)","--btn-height-extra-small (28px)"]].map(([t,j])=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"baseline"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"12px",color:"var(--global-color-neutral-gray-700)",minWidth:"180px"},children:t}),e.jsx("code",{style:{fontFamily:"monospace",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px"},children:j})]},t))})]})]})},parameters:{controls:{disable:!0}}},v={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[d("Filled variant — interactive states"),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{variant:"filled",label:"Default"}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:"default"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{variant:"filled",label:"Loading",loading:!0}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:"loading"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{variant:"filled",label:"Disabled",disabled:!0}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:"disabled"})]})]}),d("Outline variant — interactive states"),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{variant:"outline",label:"Default"}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:"default"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{variant:"outline",label:"Loading",loading:!0}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:"loading"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{variant:"outline",label:"Disabled",disabled:!0}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:"disabled"})]})]}),e.jsx("p",{style:{fontSize:"11px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)",margin:0},children:"Note: hover and focus states are applied via CSS — interact with the buttons above to see them live."})]}),parameters:{controls:{disable:!0}}},I={name:"Full Design Matrix (32 variants)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["filled","outline"].map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[d(o),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"10px"},children:[e.jsx(a,{variant:o,label:"XS",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,size:"extra-small"}),e.jsx(a,{variant:o,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,size:"small"}),e.jsx(a,{variant:o,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:o,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,size:"large"}),e.jsx(a,{variant:o,iconOnly:!0,leadingIcon:n,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{variant:o,iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{variant:o,label:"Disabled",disabled:!0}),e.jsx(a,{variant:o,label:"Loading",loading:!0})]})]},o))}),parameters:{layout:"padded",controls:{disable:!0}}};var S,D,F;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <ButtonDocs />,
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var B,k,T;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'default',
    showLeadingIcon: true,
    leadingIcon: PersonIcon,
    showTrailingIcon: false,
    disabled: false,
    loading: false
  }
}`,...(T=(k=g.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var O,P,W;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'default'
  }
}`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var C,A,U;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={ROW}>
      <Button size="extra-small" label="Extra Small" />
      <Button size="small" label="Small" />
      <Button size="default" label="Default" />
      <Button size="large" label="Large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(A=b.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var H,E,G;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Status / Filled',
  render: () => <div style={{
    padding: '16px'
  }}>
      {LABEL('Filled — all sizes')}
      <div style={ROW}>
        <Button variant="filled" size="extra-small" label="XS" showLeadingIcon leadingIcon={PersonIcon} />
        <Button variant="filled" size="small" label="Small" showLeadingIcon leadingIcon={PersonIcon} />
        <Button variant="filled" size="default" label="Default" showLeadingIcon leadingIcon={PersonIcon} />
        <Button variant="filled" size="large" label="Large" showLeadingIcon leadingIcon={PersonIcon} />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(E=u.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var R,M,N;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Status / Outline',
  render: () => <div style={{
    padding: '16px'
  }}>
      {LABEL('Outline — all sizes')}
      <div style={ROW}>
        <Button variant="outline" size="extra-small" label="XS" showLeadingIcon leadingIcon={PersonIcon} />
        <Button variant="outline" size="small" label="Small" showLeadingIcon leadingIcon={PersonIcon} />
        <Button variant="outline" size="default" label="Default" showLeadingIcon leadingIcon={PersonIcon} />
        <Button variant="outline" size="large" label="Large" showLeadingIcon leadingIcon={PersonIcon} />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(M=x.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var X,_,V;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Status / Icon Only',
  render: () => <div style={ROW}>
      <Button iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
      <Button iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <Button iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
      <Button iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
      <Button iconOnly variant="outline" leadingIcon={PersonIcon} ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(_=m.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var q,J,K;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Status / Loading',
  render: () => <div style={ROW}>
      <Button label="Loading…" loading size="small" />
      <Button label="Loading…" loading />
      <Button label="Loading…" loading size="large" />
      <Button label="Loading…" variant="outline" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Status / Disabled',
  render: () => <div style={ROW}>
      <Button label="Disabled" disabled />
      <Button label="Disabled" variant="outline" disabled />
      <Button label="Disabled" showLeadingIcon leadingIcon={PersonIcon} disabled />
      <Button iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => {
    const Token = ({
      name
    }: {
      name: string;
    }) => <code style={{
      display: 'block',
      fontFamily: 'var(--brand-font-secondary)',
      fontSize: '10px',
      color: 'var(--global-color-neutral-gray-500)',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '2px 6px',
      borderRadius: '4px',
      marginTop: '4px'
    }}>
        {name}
      </code>;
    const Part = ({
      label,
      children
    }: {
      label: string;
      token: string;
      children: React.ReactNode;
    }) => <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '4px'
    }}>
        <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-600)',
        fontWeight: 600
      }}>{label}</span>
        {children}
      </div>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '24px',
      maxWidth: '600px'
    }}>
        <div>
          <span style={{
          fontFamily: 'var(--brand-font-primary)',
          fontWeight: 600,
          fontSize: '13px',
          color: 'var(--global-color-neutral-gray-800)'
        }}>Anatomy</span>
          <div style={{
          marginTop: '16px',
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
            <Part label="Label" token="--btn-font-size-default"><Button label="Label" /><Token name="--btn-font-size-default / --btn-label-color" /></Part>
            <Part label="Leading Icon" token="--btn-icon-size-default"><Button showLeadingIcon leadingIcon={PersonIcon} label="With Icon" /><Token name="--btn-icon-size-default" /></Part>
            <Part label="Trailing Icon" token="--btn-icon-size-default"><Button showTrailingIcon trailingIcon={ArrowForwardIcon} label="With Trailing" /><Token name="--btn-icon-size-default" /></Part>
            <Part label="Icon Only" token="--btn-icon-only-size-default"><Button iconOnly leadingIcon={PersonIcon} ariaLabel="Icon Only" /><Token name="--btn-icon-only-size-default" /></Part>
            <Part label="Loading Spinner" token="--btn-icon-size-default"><Button loading label="Loading" /><Token name="--btn-spinner (inherits icon size)" /></Part>
          </div>
        </div>
        <div>
          <span style={{
          fontFamily: 'var(--brand-font-primary)',
          fontWeight: 600,
          fontSize: '13px',
          color: 'var(--global-color-neutral-gray-800)'
        }}>Design Token References</span>
          <div style={{
          marginTop: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
            {[['Primary Filled Default', '--btn-bg / --btn-label-color / --btn-border-radius'], ['Primary Outline Default', '--btn-outline-bg / --btn-outline-border / --btn-border-radius'], ['Height (default)', '--btn-height (44px)'], ['Height (small)', '--btn-height-small (34px)'], ['Height (large)', '--btn-height-large (52px)'], ['Height (extra-small)', '--btn-height-extra-small (28px)']].map(([label, token]) => <div key={label} style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'baseline'
          }}>
                <span style={{
              fontFamily: 'var(--brand-font-secondary)',
              fontSize: '12px',
              color: 'var(--global-color-neutral-gray-700)',
              minWidth: '180px'
            }}>{label}</span>
                <code style={{
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'var(--global-color-neutral-gray-500)',
              background: 'var(--global-color-neutral-gray-100)',
              padding: '2px 6px',
              borderRadius: '4px'
            }}>{token}</code>
              </div>)}
          </div>
        </div>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,le,ie;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>
      {LABEL('Filled variant — interactive states')}
      <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px'
      }}>
          <Button variant="filled" label="Default" />
          <span style={{
          fontSize: '10px',
          color: 'var(--global-color-neutral-gray-400)',
          fontFamily: 'var(--brand-font-secondary)'
        }}>default</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px'
      }}>
          <Button variant="filled" label="Loading" loading />
          <span style={{
          fontSize: '10px',
          color: 'var(--global-color-neutral-gray-400)',
          fontFamily: 'var(--brand-font-secondary)'
        }}>loading</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px'
      }}>
          <Button variant="filled" label="Disabled" disabled />
          <span style={{
          fontSize: '10px',
          color: 'var(--global-color-neutral-gray-400)',
          fontFamily: 'var(--brand-font-secondary)'
        }}>disabled</span>
        </div>
      </div>
      {LABEL('Outline variant — interactive states')}
      <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      alignItems: 'center'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px'
      }}>
          <Button variant="outline" label="Default" />
          <span style={{
          fontSize: '10px',
          color: 'var(--global-color-neutral-gray-400)',
          fontFamily: 'var(--brand-font-secondary)'
        }}>default</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px'
      }}>
          <Button variant="outline" label="Loading" loading />
          <span style={{
          fontSize: '10px',
          color: 'var(--global-color-neutral-gray-400)',
          fontFamily: 'var(--brand-font-secondary)'
        }}>loading</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px'
      }}>
          <Button variant="outline" label="Disabled" disabled />
          <span style={{
          fontSize: '10px',
          color: 'var(--global-color-neutral-gray-400)',
          fontFamily: 'var(--brand-font-secondary)'
        }}>disabled</span>
        </div>
      </div>
      <p style={{
      fontSize: '11px',
      color: 'var(--global-color-neutral-gray-400)',
      fontFamily: 'var(--brand-font-secondary)',
      margin: 0
    }}>
        Note: hover and focus states are applied via CSS — interact with the buttons above to see them live.
      </p>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var oe,te,re;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Full Design Matrix (32 variants)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>
      {(['filled', 'outline'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
          {LABEL(variant)}
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '10px'
      }}>
            <Button variant={variant} label="XS" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="extra-small" />
            <Button variant={variant} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
            <Button variant={variant} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Button variant={variant} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
            <Button variant={variant} iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
            <Button variant={variant} iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
            <Button variant={variant} label="Disabled" disabled />
            <Button variant={variant} label="Loading" loading />
          </div>
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(re=(te=I.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Fe=["Documentation","Playground","Default","Sizes","StatusFilled","StatusOutline","StatusIconOnly","StatusLoading","StatusDisabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{v as AllInteractiveStates,y as ComponentBreakdown,p as Default,c as Documentation,I as FullDesignMatrix,g as Playground,b as Sizes,h as StatusDisabled,u as StatusFilled,m as StatusIconOnly,f as StatusLoading,x as StatusOutline,Fe as __namedExportsOrder,De as default};
