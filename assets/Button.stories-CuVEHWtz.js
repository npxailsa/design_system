import{j as e}from"./iframe-BJvLnmTr.js";import{B as a}from"./Button-D8JTfcYf.js";import{D as i}from"./DocsTemplate-CGfNJcNy.js";import{A as l,P as n}from"./Person-ChL5VuyY.js";import{C as h}from"./Check-DncGnMyf.js";import{D as we,A as I}from"./Download-p46EyReX.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-CjLMVDwt.js";const y=()=>e.jsxs(i,{children:[e.jsx(i.Header,{title:"Primary Button",subtitle:"The primary interactive control for triggering actions, submitting forms, and navigating the interface"}),e.jsxs(i.BodyText,{children:["The ",e.jsx("strong",{children:"Button"})," component is the core action element of the design system. It supports two visual variants — ",e.jsx("em",{children:"filled"})," and ",e.jsx("em",{children:"outline"})," — across three sizes, with optional leading and trailing icons, an icon-only mode, and built-in loading and disabled states. All styling is driven by the token system with no hardcoded values."]}),e.jsxs(i.Section,{title:"Component Anatomy",children:[e.jsxs(i.BodyText,{children:["The diagrams below map each part of the Button to its controlling design token for both the ",e.jsx("strong",{children:"filled"})," and ",e.jsx("strong",{children:"outline"})," variants."]}),e.jsx(i.Subsection,{title:"Filled",children:e.jsx(i.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Faa05dab54f864947ac346fbc53ed3d44",alt:"Filled primary button component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
--btn-filled-bg (--brand-primary / #3776CE)
--btn-filled-border-width (--global-spacing-stroke-0-5px)
--btn-filled-shadow-hover (hover & active only)
--btn-padding-{size}`,description:"Outer button shell. W: HUG, H: HUG. Min-W: 80, min-H: 52 (large). Corner radius: 4. Default fill: color/primary/blue (#3776CE), 0.5px border. On hover/active, bg shifts to #6171DF with 2×2 drop shadow."},{id:2,name:"Leading Icon",token:`filled/icons (user category)
--btn-icon-size-{size} (18px large)`,description:"Optional icon preceding the label. W: 18, H: 18, fill: #FFFFFF. Icon name: account, category: user. Controlled by showLeadingIcon + leadingIcon props."},{id:3,name:"Trailing Icon",token:`filled/icons (action category)
--btn-icon-size-{size} (18px large)`,description:"Optional icon after the label. W: 18, H: 18, fill: #FFFFFF. Icon name: arrow-right, category: action. Controlled by showTrailingIcon + trailingIcon props."},{id:4,name:"Label",token:`--btn-font-family (Archivo Light)
--btn-font-size-{size} (18px large)
--btn-font-weight (--global-type-weight-light)`,description:"Primary button text. W: HUG, H: HUG. Uses Archivo Light at 18px with 24px line-height. Colour: color/base/white."}]})}),e.jsx(i.Subsection,{title:"Outline",children:e.jsx(i.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Fcb9650a698cd47429c486b0389c2bf51",alt:"Outline primary button component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
--btn-outline-bg (--global-color-primary-blue-blue-50)
--btn-outline-border-color (--global-color-primary-blue-blue-300)
--btn-border-width-default (--global-spacing-stroke-1px)
--btn-padding-{size}`,description:"Outer button shell. W: HUG, H: HUG. Min-W: 80, min-H: 52 (large). Corner radius: 4. Fill uses color/primary/blue/blue-50, border uses color/primary/blue/blue-300. Stroke width: 1."},{id:2,name:"Leading Icon",token:`filled/icons (user category)
--btn-icon-size-{size} (18px large)`,description:"Optional icon preceding the label. W: 18, H: 18, fill: #FFFFFF. Icon name: account, category: user. Controlled by showLeadingIcon + leadingIcon props."},{id:3,name:"Trailing Icon",token:`filled/icons (action category)
--btn-icon-size-{size} (18px large)`,description:"Optional icon after the label. W: 18, H: 18, fill: #FFFFFF. Icon name: arrow-right, category: action. Controlled by showTrailingIcon + trailingIcon props."},{id:4,name:"Label",token:`--btn-font-family (Archivo Light)
--btn-font-size-{size} (18px large)
--btn-font-weight (--global-type-weight-light)
--btn-outline-color (--global-color-secondary-blue-gray)`,description:"Primary button text. W: HUG, H: HUG. Uses Archivo Light at 18px with 24px line-height. Colour: color/secondary/blue-gray."}]})})]}),e.jsxs(i.Section,{title:"Variants",children:[e.jsxs(i.BodyText,{children:["Two visual variants cover the primary hierarchy needs. Use ",e.jsx("strong",{children:"filled"}),"for the primary action and ",e.jsx("strong",{children:"outline"})," for secondary actions."]}),e.jsx(i.Subsection,{title:"Filled",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"filled",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{variant:"filled",label:"Label",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"filled",label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{variant:"filled",label:"Label"})]})}),e.jsx(i.Subsection,{title:"Outline",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"outline",label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{variant:"outline",label:"Label"})]})})]}),e.jsxs(i.Section,{title:"Sizes",children:[e.jsx(i.BodyText,{children:"Three sizes scale the button for different density contexts. All sizes support both variants and all optional elements."}),e.jsx(i.SizeDemo,{rows:[{label:"Small",sublabel:"Dense toolbars, inline actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"small",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"small",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"default",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"default",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Large",sublabel:"Hero calls-to-action, prominent forms",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"large",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"large",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})}]})]}),e.jsxs(i.Section,{title:"Optional Elements",children:[e.jsx(i.BodyText,{children:"Leading icon, trailing icon, and icon-only mode are all independently composable."}),e.jsx(i.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n,size:"small"}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:h,size:"large"}),e.jsx(a,{label:"Download",showLeadingIcon:!0,leadingIcon:we,variant:"outline"})]})}),e.jsx(i.Subsection,{title:"With Trailing Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"large"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,variant:"outline"})]})}),e.jsx(i.Subsection,{title:"Icon Only",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,variant:"outline",leadingIcon:I,ariaLabel:"Add"})]})})]}),e.jsxs(i.Section,{title:"States",children:[e.jsxs(i.Subsection,{title:"Loading",children:[e.jsxs(i.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading. The border uses a lighter stroke weight while loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"outline",loading:!0})]})]}),e.jsxs(i.Subsection,{title:"Disabled",children:[e.jsx(i.BodyText,{children:"Both filled and outline disabled states use explicit gray colours per the Figma spec (no opacity reduction). Both block all interactions."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",disabled:!0}),e.jsx(a,{label:"Label",variant:"outline",disabled:!0}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,disabled:!0}),e.jsx(a,{label:"Label",variant:"outline",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]})]})]}),e.jsx(i.TokenTable,{title:"Design Tokens — Layout & Spacing",description:"Tokens controlling padding, border radius, and gap:",tokens:[{name:"--btn-border-radius",description:"Corner radius (4px) — uses --global-spacing-radius-4px"},{name:"--btn-border-width-default",description:"Default border (1px) — uses --global-spacing-stroke-1px"},{name:"--btn-border-width-focus",description:"Focus state border (2px) — uses --global-spacing-stroke-2px"},{name:"--btn-border-width-disabled",description:"Disabled state border (2px) — uses --global-spacing-stroke-2px"},{name:"--btn-border-width-loading",description:"Loading state border (0.5px) — uses --global-spacing-stroke-0-5px"},{name:"--btn-padding-small",description:"Small padding — 8px vertical / 12px horizontal (equal top & bottom)"},{name:"--btn-padding-default",description:"Default padding — 12px vertical / 16px horizontal (equal top & bottom)"},{name:"--btn-padding-large",description:"Large padding — 16px vertical / 20px horizontal (equal top & bottom)"},{name:"--btn-gap-small",description:"Gap between elements — small (6px)"},{name:"--btn-gap-default",description:"Gap between elements — default (8px)"},{name:"--btn-gap-large",description:"Gap between elements — large (10px)"},{name:"--btn-icon-only-size-{size}",description:"Icon-only button dimensions (36px / 44px / 52px)"},{name:"--btn-transition-duration",description:"Transition speed — --global-animation-duration-fast (160ms)"},{name:"--btn-transition-easing",description:"Transition curve — --global-animation-easing-default (ease)"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Typography",description:"Tokens controlling text and icon appearance:",tokens:[{name:"--btn-font-family",description:"Font family — F37 Ginger Pro (--brand-font-primary)"},{name:"--btn-font-weight",description:"Font weight — 300 light (--global-type-weight-light)"},{name:"--btn-letter-spacing",description:"Letter spacing (0.15px) — --global-type-letter-spacing-primary-label"},{name:"--btn-font-size-small",description:"Small font size (14px) — --global-type-size-primary-label-sm"},{name:"--btn-font-size-default",description:"Default font size (16px) — --global-type-size-primary-label"},{name:"--btn-font-size-large",description:"Large font size (18px) — --global-type-size-primary-label-lg"},{name:"--btn-icon-size-small",description:"Small icon size (14px) — --global-spacing-sizing-14px"},{name:"--btn-icon-size-default",description:"Default icon size (16px) — --global-spacing-sizing-16px"},{name:"--btn-icon-size-large",description:"Large icon size (18px) — --global-spacing-sizing-18px"},{name:"--btn-spinner-duration",description:"Spinner animation speed — --global-animation-duration-spinner (700ms)"},{name:"--btn-spinner-opacity",description:"Spinner opacity — --global-opacity-muted (0.6)"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Filled Variant",description:"Colour tokens for the filled (primary) variant:",tokens:[{name:"--btn-filled-bg",description:"Default background — --brand-primary (#3776CE)"},{name:"--btn-filled-bg-hover",description:"Hover / active background — --global-color-primary-blue-blue-400 (#6171DF)"},{name:"--btn-filled-color",description:"Text and icon colour — --global-color-base-white"},{name:"--btn-filled-border-color",description:"Default border colour (matches fill) — --brand-primary"},{name:"--btn-filled-border-width",description:"Default border width (0.5px) — --global-spacing-stroke-0-5px"},{name:"--btn-filled-border-color-hover",description:"Hover border colour — --global-color-primary-blue-blue-200 (#C5CAED)"},{name:"--btn-filled-border-color-focus",description:"Focus border colour — --global-color-primary-blue-blue-400 (#6171DF)"},{name:"--btn-filled-shadow-hover",description:"Drop shadow on hover & active only — --global-spacing-sizing-2px offset, --global-color-primary-blue-blue-400 colour"},{name:"--btn-filled-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-filled-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-filled-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Outline Variant",description:"Colour tokens for the outline (secondary) variant:",tokens:[{name:"--btn-outline-bg",description:"Default background — --global-color-primary-blue-blue-50 (#F9F9FE)"},{name:"--btn-outline-bg-hover",description:"Hover / active background — --global-color-primary-blue-blue-100 (#E7E9F4)"},{name:"--btn-outline-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-outline-color",description:"Default text/icon — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-outline-color-hover",description:"Hover text/icon — --global-color-base-black (#1C1C1C)"},{name:"--btn-outline-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-outline-border-color",description:"Default border — --global-color-primary-blue-blue-300 (#95A0E5)"},{name:"--btn-outline-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--btn-outline-shadow-hover",description:"Hover box-shadow — --global-spacing-sizing-2px offset, --global-color-primary-blue-blue-400 colour"}]}),e.jsx(i.CodeBlock,{children:`import { Button } from './Button';
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
<Button label="Restricted" disabled />`}),e.jsxs(i.Principles,{children:[e.jsxs(i.PrincipleCard,{number:1,title:"Use one primary action per context",children:["Each view or panel should have at most one ",e.jsx("strong",{children:"filled"})," button as the primary action. Use ",e.jsx("strong",{children:"outline"})," for secondary actions alongside it."]}),e.jsxs(i.PrincipleCard,{number:2,title:"Match size to context",children:["Use ",e.jsx("strong",{children:"small"})," in dense toolbars and inline controls, ",e.jsx("strong",{children:"default"}),"for the majority of interface actions, and ",e.jsx("strong",{children:"large"})," for hero or prominent call-to-action sections."]}),e.jsx(i.PrincipleCard,{number:3,title:"Label clearly and concisely",children:'Button labels should be 1–3 words describing the specific action (e.g. "Save", "Delete report", "Add member"). Avoid generic labels like "Click here" or "Submit".'})]}),e.jsx(i.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{variant:"filled",label:"Save changes"}),e.jsx(a,{variant:"outline",label:"Cancel"})]}),label:"One primary action",description:"Use filled for the primary action and outline for secondary — clear visual hierarchy."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{variant:"filled",label:"Save changes"}),e.jsx(a,{variant:"filled",label:"Cancel"})]}),label:"Multiple primaries",description:"Don't use two filled buttons side by side. It creates visual confusion about which action to take."}}),e.jsx(i.Footer,{})]});y.__docgenInfo={description:"",methods:[],displayName:"ButtonDocs"};const ke={title:"Atoms/Primary Button",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(y,{})}},argTypes:{variant:{control:"select",options:["filled","outline"]},size:{control:"select",options:["small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download"],mapping:{None:void 0,Person:n,Check:h,Add:I,Download:we}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:l,Check:h,Add:I}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},r={render:()=>e.jsx(y,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},t={args:{label:"Label",variant:"filled",size:"default"}},s={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(a,{variant:"filled",label:"Filled"}),e.jsx(a,{variant:"outline",label:"Outline"})]}),parameters:{controls:{disable:!0}}},d={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(a,{size:"small",label:"Small"}),e.jsx(a,{size:"default",label:"Default"}),e.jsx(a,{size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},c={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n,size:"small"}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n,size:"large"})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"large"})]}),parameters:{controls:{disable:!0}}},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,size:"large"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,variant:"outline",leadingIcon:n,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"outline",loading:!0})]}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled",variant:"outline",disabled:!0}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:n,disabled:!0}),e.jsx(a,{label:"Disabled",variant:"outline",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["filled","outline"].map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:o}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"10px"},children:[e.jsx(a,{variant:o,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(a,{variant:o,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{variant:o,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,size:"large"}),e.jsx(a,{variant:o,iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{variant:o,label:"Disabled",disabled:!0}),e.jsx(a,{variant:o,label:"Loading",loading:!0})]})]},o))}),parameters:{layout:"padded",controls:{disable:!0}}};var f,w,v,j,L;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(v=(w=r.parameters)==null?void 0:w.docs)==null?void 0:v.source},description:{story:"Full documentation page for the Button component.",...(L=(j=r.parameters)==null?void 0:j.docs)==null?void 0:L.description}}};var z,B,T,D,F;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'default'
  }
}`,...(T=(B=t.parameters)==null?void 0:B.docs)==null?void 0:T.source},description:{story:"Default button — filled variant with label.",...(F=(D=t.parameters)==null?void 0:D.docs)==null?void 0:F.description}}};var k,S,A,O,W;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px'
  }}>
      <Button variant="filled" label="Filled" />
      <Button variant="outline" label="Outline" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(S=s.parameters)==null?void 0:S.docs)==null?void 0:A.source},description:{story:"Both variants side by side.",...(W=(O=s.parameters)==null?void 0:O.docs)==null?void 0:W.description}}};var C,P,U,H,E;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px'
  }}>
      <Button size="small" label="Small" />
      <Button size="default" label="Default" />
      <Button size="large" label="Large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(P=d.parameters)==null?void 0:P.docs)==null?void 0:U.source},description:{story:"All three sizes.",...(E=(H=d.parameters)==null?void 0:H.docs)==null?void 0:E.description}}};var G,V,N,M,_;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    padding: '16px'
  }}>
      <Button label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} size="small" />
      <Button label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} />
      <Button label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(V=c.parameters)==null?void 0:V.docs)==null?void 0:N.source},description:{story:"Buttons with a leading icon.",...(_=(M=c.parameters)==null?void 0:M.docs)==null?void 0:_.description}}};var q,R,J,K,Q;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    padding: '16px'
  }}>
      <Button label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <Button label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <Button label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(R=g.parameters)==null?void 0:R.docs)==null?void 0:J.source},description:{story:"Buttons with a trailing icon.",...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var X,Y,Z,$,ee;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    padding: '16px'
  }}>
      <Button label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <Button label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <Button label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Buttons with both leading and trailing icons.",...(ee=($=p.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};var ae,ne,ie,le,oe;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px'
  }}>
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
}`,...(ie=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:"Icon-only buttons — circular, no label.",...(oe=(le=b.parameters)==null?void 0:le.docs)==null?void 0:oe.description}}};var re,te,se,de,ce;u.parameters={...u.parameters,docs:{...(re=u.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    padding: '16px'
  }}>
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
}`,...(se=(te=u.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"Loading state — spinner replaces the leading icon.",...(ce=(de=u.parameters)==null?void 0:de.docs)==null?void 0:ce.description}}};var ge,pe,be,ue,me;m.parameters={...m.parameters,docs:{...(ge=m.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    padding: '16px'
  }}>
      <Button label="Disabled" disabled />
      <Button label="Disabled" variant="outline" disabled />
      <Button label="Disabled" showLeadingIcon leadingIcon={PersonIcon} disabled />
      <Button label="Disabled" variant="outline" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <Button iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(be=(pe=m.parameters)==null?void 0:pe.docs)==null?void 0:be.source},description:{story:"Disabled state.",...(me=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:me.description}}};var xe,he,Ie,ye,fe;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
            {variant}
          </span>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '10px'
      }}>
            <Button variant={variant} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
            <Button variant={variant} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <Button variant={variant} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
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
}`,...(Ie=(he=x.parameters)==null?void 0:he.docs)==null?void 0:Ie.source},description:{story:"Full variant, size, and state matrix.",...(fe=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:fe.description}}};const Se=["Documentation","Default","Variants","Sizes","WithLeadingIcon","WithTrailingIcon","WithBothIcons","IconOnly","Loading","Disabled","AllVariants"];export{x as AllVariants,t as Default,m as Disabled,r as Documentation,b as IconOnly,u as Loading,d as Sizes,s as Variants,p as WithBothIcons,c as WithLeadingIcon,g as WithTrailingIcon,Se as __namedExportsOrder,ke as default};
