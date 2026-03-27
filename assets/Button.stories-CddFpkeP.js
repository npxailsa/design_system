import{j as e}from"./iframe-D2DKwPpt.js";import{D as i}from"./DocsTemplate-C4Kjqm9a.js";import{A as l,P as n}from"./ArrowForward-CTk2xvxZ.js";import{C as L}from"./Check-jT_8Ilwh.js";import{D as Se,A as v}from"./Download-CGRTgLyO.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-DjDn8UJR.js";const Ne="_btn_1p8h4_10",qe="_btn__icon_1p8h4_146",Ee="_btn__label_1p8h4_172",Me="_btn__spinner_1p8h4_179",t={btn:Ne,"btn--small":"_btn--small_1p8h4_48","btn--large":"_btn--large_1p8h4_56","btn--filled":"_btn--filled_1p8h4_65","btn--disabled":"_btn--disabled_1p8h4_71","btn--outline":"_btn--outline_1p8h4_80","btn--ghost":"_btn--ghost_1p8h4_95","btn--icon-only":"_btn--icon-only_1p8h4_110","btn--full-width":"_btn--full-width_1p8h4_127","btn--loading":"_btn--loading_1p8h4_140",btn__icon:qe,"btn__icon-svg":"_btn__icon-svg_1p8h4_153",btn__label:Ee,btn__spinner:Me,"btn-spin":"_btn-spin_1p8h4_1"},a=({label:o="Label",variant:De="filled",size:ke="default",type:Ae="button",leadingIcon:y,showLeadingIcon:Oe=!1,trailingIcon:T,showTrailingIcon:Fe=!1,iconOnly:r=!1,loading:s=!1,disabled:w=!1,fullWidth:Pe=!1,onClick:Ue,className:We="",ariaLabel:B})=>{const Ce=[t.btn,t[`btn--${De}`],t[`btn--${ke}`],r?t["btn--icon-only"]:"",s?t["btn--loading"]:"",w?t["btn--disabled"]:"",Pe?t["btn--full-width"]:"",We].filter(Boolean).join(" "),j=s,Ve=Oe&&y&&!j;return e.jsxs("button",{type:Ae,className:Ce,onClick:!w&&!s?Ue:void 0,disabled:w||s,"aria-label":r?B??o:B,"aria-busy":s||void 0,children:[j&&e.jsx("span",{className:t.btn__spinner,"aria-hidden":"true"}),Ve&&e.jsx("span",{className:t.btn__icon,"aria-hidden":"true",children:e.jsx(y,{className:t["btn__icon-svg"]})}),!r&&e.jsx("span",{className:t.btn__label,children:o}),Fe&&T&&!r&&e.jsx("span",{className:t.btn__icon,"aria-hidden":"true",children:e.jsx(T,{className:t["btn__icon-svg"]})}),r&&!j&&y&&e.jsx("span",{className:t.btn__icon,"aria-hidden":"true",children:e.jsx(y,{className:t["btn__icon-svg"]})})]})};a.__docgenInfo={description:`Button — Primary interactive control for the design system.
Supports 3 variants (filled, outline, ghost), 3 sizes, optional leading/
trailing icons, icon-only mode, and loading + disabled states.`,methods:[],displayName:"Button",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed inside the button",defaultValue:{value:"'Label'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'ghost'"}]},description:"Visual variant",defaultValue:{value:"'filled'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered before the label"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered after the label"},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the trailing icon",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Render as an icon-only button (no label)",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full-width button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for icon-only buttons"}}};const z=()=>e.jsxs(i,{children:[e.jsx(i.Header,{title:"Button",subtitle:"The primary interactive control for triggering actions, submitting forms, and navigating the interface"}),e.jsxs(i.BodyText,{children:["The ",e.jsx("strong",{children:"Button"})," component is the core action element of the design system. It supports three visual variants — ",e.jsx("em",{children:"filled"}),", ",e.jsx("em",{children:"outline"}),", and ",e.jsx("em",{children:"ghost"})," — across three sizes, with optional leading and trailing icons, an icon-only mode, and built-in loading and disabled states. All styling is driven by the token system with no hardcoded values."]}),e.jsxs(i.Section,{title:"Component Anatomy",children:[e.jsx(i.BodyText,{children:"The diagram below maps each part of the default filled Button to its controlling design token."}),e.jsx(i.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2F39deb59118f84012a5375e7c768ee343",alt:"Button component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-8px)
--btn-border-width (--global-spacing-stroke-2px)
--btn-height-{size}
--btn-padding-{size}
--btn-filled-bg (--brand-primary)`,description:"Outer button shell. Height and padding are size-driven. Background, border, and colour switch per variant. Corner radius is 8px."},{id:2,name:"Leading Icon",token:`--btn-icon-size-{size}
--btn-gap-{size}`,description:"Optional MUI icon before the label. Size scales with the button size. Controlled by showLeadingIcon + leadingIcon props."},{id:3,name:"Label",token:`--btn-font-family (--brand-font-primary)
--btn-font-size-{size}
--btn-font-weight (400)
--btn-letter-spacing`,description:"Primary button text. Uses F37 Ginger Regular. Font size is size-variant driven. Set via the label prop."},{id:4,name:"Trailing Icon",token:`--btn-icon-size-{size}
--btn-gap-{size}`,description:"Optional MUI icon after the label. Inherits button colour. Controlled by showTrailingIcon + trailingIcon props."}]})]}),e.jsxs(i.Section,{title:"Variants",children:[e.jsxs(i.BodyText,{children:["Three visual variants cover the full range of hierarchy needs. Use ",e.jsx("strong",{children:"filled"}),"for the primary action, ",e.jsx("strong",{children:"outline"})," for secondary actions, and"," ",e.jsx("strong",{children:"ghost"})," for tertiary or low-emphasis controls."]}),e.jsx(i.Subsection,{title:"Filled",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"filled",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{variant:"filled",label:"Label",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"filled",label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{variant:"filled",label:"Label"})]})}),e.jsx(i.Subsection,{title:"Outline",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"outline",label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{variant:"outline",label:"Label"})]})}),e.jsx(i.Subsection,{title:"Ghost",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"ghost",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{variant:"ghost",label:"Label",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"ghost",label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{variant:"ghost",label:"Label"})]})})]}),e.jsxs(i.Section,{title:"Sizes",children:[e.jsx(i.BodyText,{children:"Three sizes scale the button for different density contexts. All sizes support all variants and optional elements."}),e.jsx(i.SizeDemo,{rows:[{label:"Small",sublabel:"Dense toolbars, inline actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"small",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"small",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"default",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"default",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Large",sublabel:"Hero calls-to-action, prominent forms",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"large",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"large",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})}]})]}),e.jsxs(i.Section,{title:"Optional Elements",children:[e.jsx(i.BodyText,{children:"Leading icon, trailing icon, and icon-only mode are all independently composable."}),e.jsx(i.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n,size:"small"}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:L,size:"large"}),e.jsx(a,{label:"Download",showLeadingIcon:!0,leadingIcon:Se,variant:"outline"})]})}),e.jsx(i.Subsection,{title:"With Trailing Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"large"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,variant:"outline"})]})}),e.jsx(i.Subsection,{title:"Icon Only",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,variant:"outline",leadingIcon:v,ariaLabel:"Add"}),e.jsx(a,{iconOnly:!0,variant:"ghost",leadingIcon:v,ariaLabel:"Add"})]})})]}),e.jsxs(i.Section,{title:"States",children:[e.jsxs(i.Subsection,{title:"Loading",children:[e.jsxs(i.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"outline",loading:!0}),e.jsx(a,{label:"Loading…",variant:"ghost",loading:!0})]})]}),e.jsxs(i.Subsection,{title:"Disabled",children:[e.jsxs(i.BodyText,{children:["Disabled buttons render at 45% opacity and block all interactions. Apply with the"," ",e.jsx("code",{children:"disabled"})," prop."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",disabled:!0}),e.jsx(a,{label:"Label",variant:"outline",disabled:!0}),e.jsx(a,{label:"Label",variant:"ghost",disabled:!0}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]})]})]}),e.jsx(i.TokenTable,{title:"Design Tokens — Layout & Size",description:"Tokens controlling dimensions, padding, and border radius:",tokens:[{name:"--btn-border-radius",description:"Corner radius (8px) — uses --global-spacing-radius-8px"},{name:"--btn-border-width",description:"Border thickness (2px) — uses --global-spacing-stroke-2px"},{name:"--btn-height-small",description:"Small button height (32px) — uses --global-spacing-sizing-32px"},{name:"--btn-height-default",description:"Default button height (40px) — uses --global-spacing-sizing-40px"},{name:"--btn-height-large",description:"Large button height (48px) — uses --global-spacing-sizing-48px"},{name:"--btn-padding-small",description:"Small horizontal padding (0 12px)"},{name:"--btn-padding-default",description:"Default horizontal padding (0 16px)"},{name:"--btn-padding-large",description:"Large horizontal padding (0 20px)"},{name:"--btn-gap-small",description:"Gap between elements — small (6px)"},{name:"--btn-gap-default",description:"Gap between elements — default (8px)"},{name:"--btn-gap-large",description:"Gap between elements — large (10px)"},{name:"--btn-icon-only-size-{size}",description:"Icon-only button width = height (32px / 40px / 48px)"},{name:"--btn-disabled-opacity",description:"Disabled state opacity (0.45)"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Typography",description:"Tokens controlling text appearance:",tokens:[{name:"--btn-font-family",description:"Font family — F37 Ginger Pro (--brand-font-primary)"},{name:"--btn-font-weight",description:"Font weight — 400 regular (--global-type-weight-default)"},{name:"--btn-letter-spacing",description:"Letter spacing (0.15px)"},{name:"--btn-font-size-small",description:"Small font size (14px) — uses --global-type-size-primary-label-sm"},{name:"--btn-font-size-default",description:"Default font size (16px) — uses --global-type-size-primary-label"},{name:"--btn-font-size-large",description:"Large font size (18px) — uses --global-type-size-primary-label-lg"},{name:"--btn-icon-size-small",description:"Small icon size (16px)"},{name:"--btn-icon-size-default",description:"Default icon size (18px)"},{name:"--btn-icon-size-large",description:"Large icon size (20px)"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Filled Variant",description:"Colour tokens for the filled (primary) variant:",tokens:[{name:"--btn-filled-bg",description:"Default background — uses --brand-primary (#3776ce)"},{name:"--btn-filled-bg-hover",description:"Hover background — uses --brand-primary-dark (#182b47)"},{name:"--btn-filled-bg-active",description:"Active/pressed background — uses --brand-primary-dark"},{name:"--btn-filled-color",description:"Text and icon colour — uses --global-color-base-white"},{name:"--btn-filled-border-color",description:"Border (transparent for filled)"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Outline Variant",description:"Colour tokens for the outline (secondary) variant:",tokens:[{name:"--btn-outline-bg",description:"Default background (transparent)"},{name:"--btn-outline-bg-hover",description:"Hover background — uses --brand-primary-25"},{name:"--btn-outline-bg-active",description:"Active background — uses --brand-primary-50"},{name:"--btn-outline-color",description:"Text and icon colour — uses --brand-primary"},{name:"--btn-outline-border-color",description:"Border colour — uses --brand-primary"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Ghost Variant",description:"Colour tokens for the ghost (tertiary) variant:",tokens:[{name:"--btn-ghost-bg",description:"Default background (transparent)"},{name:"--btn-ghost-bg-hover",description:"Hover background — uses --brand-primary-25"},{name:"--btn-ghost-bg-active",description:"Active background — uses --brand-primary-50"},{name:"--btn-ghost-color",description:"Text and icon colour — uses --brand-primary"},{name:"--btn-ghost-border-color",description:"Border (transparent for ghost)"}]}),e.jsx(i.CodeBlock,{children:`import { Button } from './Button';
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

// Ghost variant
<Button variant="ghost" label="Learn more" showTrailingIcon trailingIcon={ArrowForwardIcon} />

// Small size
<Button size="small" label="Compact" />

// Icon only (use ariaLabel for accessibility)
<Button iconOnly leadingIcon={PersonIcon} ariaLabel="User profile" />

// Loading state
<Button label="Saving…" loading />

// Disabled
<Button label="Restricted" disabled />`}),e.jsxs(i.Principles,{children:[e.jsxs(i.PrincipleCard,{number:1,title:"Use one primary action per context",children:["Each view or panel should have at most one ",e.jsx("strong",{children:"filled"})," button as the primary action. Use ",e.jsx("strong",{children:"outline"})," for secondary actions and ",e.jsx("strong",{children:"ghost"})," for tertiary or destructive alternatives."]}),e.jsxs(i.PrincipleCard,{number:2,title:"Match size to context",children:["Use ",e.jsx("strong",{children:"small"})," in dense toolbars and inline controls, ",e.jsx("strong",{children:"default"}),"for the majority of interface actions, and ",e.jsx("strong",{children:"large"})," for hero or prominent call-to-action sections."]}),e.jsx(i.PrincipleCard,{number:3,title:"Label clearly and concisely",children:'Button labels should be 1–3 words describing the specific action (e.g. "Save", "Delete report", "Add member"). Avoid generic labels like "Click here" or "Submit".'})]}),e.jsx(i.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{variant:"filled",label:"Save changes"}),e.jsx(a,{variant:"outline",label:"Cancel"})]}),label:"One primary action",description:"Use filled for the primary action and outline for secondary — clear visual hierarchy."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{variant:"filled",label:"Save changes"}),e.jsx(a,{variant:"filled",label:"Cancel"})]}),label:"Multiple primaries",description:"Don't use two filled buttons side by side. It creates visual confusion about which action to take."}}),e.jsx(i.Footer,{})]});z.__docgenInfo={description:"",methods:[],displayName:"ButtonDocs"};const Xe={title:"Atoms/Button",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(z,{})}},argTypes:{variant:{control:"select",options:["filled","outline","ghost"]},size:{control:"select",options:["small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download"],mapping:{None:void 0,Person:n,Check:L,Add:v,Download:Se}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:l,Check:L,Add:v}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},d={render:()=>e.jsx(z,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},c={args:{label:"Label",variant:"filled",size:"default"}},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(a,{variant:"filled",label:"Filled"}),e.jsx(a,{variant:"outline",label:"Outline"}),e.jsx(a,{variant:"ghost",label:"Ghost"})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(a,{size:"small",label:"Small"}),e.jsx(a,{size:"default",label:"Default"}),e.jsx(a,{size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n,size:"small"}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n,size:"large"})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"large"})]}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,size:"large"})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,variant:"outline",leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,variant:"ghost",leadingIcon:n,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"outline",loading:!0}),e.jsx(a,{label:"Loading…",variant:"ghost",loading:!0})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled",variant:"outline",disabled:!0}),e.jsx(a,{label:"Disabled",variant:"ghost",disabled:!0}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:n,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["filled","outline","ghost"].map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:o}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"10px"},children:[e.jsx(a,{variant:o,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(a,{variant:o,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{variant:o,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,size:"large"}),e.jsx(a,{variant:o,iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{variant:o,label:"Disabled",disabled:!0}),e.jsx(a,{variant:o,label:"Loading",loading:!0})]})]},o))}),parameters:{layout:"padded",controls:{disable:!0}}};var _,S,D,k,A;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source},description:{story:"Full documentation page for the Button component.",...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.description}}};var O,F,P,U,W;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'default'
  }
}`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source},description:{story:"Default button — filled variant with label.",...(W=(U=c.parameters)==null?void 0:U.docs)==null?void 0:W.description}}};var C,V,N,q,E;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px'
  }}>
      <Button variant="filled" label="Filled" />
      <Button variant="outline" label="Outline" />
      <Button variant="ghost" label="Ghost" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(V=p.parameters)==null?void 0:V.docs)==null?void 0:N.source},description:{story:"All three variants side by side.",...(E=(q=p.parameters)==null?void 0:q.docs)==null?void 0:E.description}}};var M,R,G,H,$;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(G=(R=g.parameters)==null?void 0:R.docs)==null?void 0:G.source},description:{story:"All three sizes.",...($=(H=g.parameters)==null?void 0:H.docs)==null?void 0:$.description}}};var J,K,Q,X,Y;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Buttons with a leading icon.",...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,ae,ne,ie;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Buttons with a trailing icon.",...(ie=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:ie.description}}};var le,te,oe,re,se;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(te=m.parameters)==null?void 0:te.docs)==null?void 0:oe.source},description:{story:"Buttons with both leading and trailing icons.",...(se=(re=m.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var de,ce,pe,ge,be;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
      <Button iconOnly variant="ghost" leadingIcon={PersonIcon} ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pe=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:"Icon-only buttons — circular, no label.",...(be=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};var ue,me,he,xe,Ie;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
      <Button label="Loading…" variant="ghost" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(he=(me=x.parameters)==null?void 0:me.docs)==null?void 0:he.source},description:{story:"Loading state — spinner replaces the leading icon.",...(Ie=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:Ie.description}}};var fe,ye,ve,we,je;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    padding: '16px'
  }}>
      <Button label="Disabled" disabled />
      <Button label="Disabled" variant="outline" disabled />
      <Button label="Disabled" variant="ghost" disabled />
      <Button label="Disabled" showLeadingIcon leadingIcon={PersonIcon} disabled />
      <Button iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ve=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:ve.source},description:{story:"Disabled state.",...(je=(we=I.parameters)==null?void 0:we.docs)==null?void 0:je.description}}};var Le,ze,Te,Be,_e;f.parameters={...f.parameters,docs:{...(Le=f.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>
      {(['filled', 'outline', 'ghost'] as const).map(variant => <div key={variant} style={{
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
}`,...(Te=(ze=f.parameters)==null?void 0:ze.docs)==null?void 0:Te.source},description:{story:"Full variant, size, and state matrix.",...(_e=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:_e.description}}};const Ye=["Documentation","Default","Variants","Sizes","WithLeadingIcon","WithTrailingIcon","WithBothIcons","IconOnly","Loading","Disabled","AllVariants"];export{f as AllVariants,c as Default,I as Disabled,d as Documentation,h as IconOnly,x as Loading,g as Sizes,p as Variants,m as WithBothIcons,b as WithLeadingIcon,u as WithTrailingIcon,Ye as __namedExportsOrder,Xe as default};
