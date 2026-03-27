import{j as e}from"./iframe-CGdhzgt2.js";import{D as l}from"./DocsTemplate-BfXaFGw8.js";import{A as i,P as n}from"./ArrowForward-D6LvNAyu.js";import{C as j}from"./Check--SF-6Tfh.js";import{D as De,A as L}from"./Download-Cp2olmeV.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-XWi5xOY_.js";const qe="_btn_6osjd_17",Ve="_btn__icon_6osjd_167",Ne="_btn__label_6osjd_193",Me="_btn__spinner_6osjd_200",o={btn:qe,"btn--small":"_btn--small_6osjd_49","btn--large":"_btn--large_6osjd_56","btn--filled":"_btn--filled_6osjd_64","btn--disabled":"_btn--disabled_6osjd_71","btn--outline":"_btn--outline_6osjd_89","btn--loading":"_btn--loading_6osjd_137","btn--icon-only":"_btn--icon-only_6osjd_144","btn--full-width":"_btn--full-width_6osjd_162",btn__icon:Ve,"btn__icon-svg":"_btn__icon-svg_6osjd_174",btn__label:Ne,btn__spinner:Me,"btn-spin":"_btn-spin_6osjd_1"},a=({label:t="Label",variant:Se="filled",size:ke="default",type:Fe="button",leadingIcon:y,showLeadingIcon:Ae=!1,trailingIcon:T,showTrailingIcon:Oe=!1,iconOnly:r=!1,loading:s=!1,disabled:w=!1,fullWidth:Pe=!1,onClick:Ce,className:Ue="",ariaLabel:B})=>{const We=[o.btn,o[`btn--${Se}`],o[`btn--${ke}`],r?o["btn--icon-only"]:"",s?o["btn--loading"]:"",w?o["btn--disabled"]:"",Pe?o["btn--full-width"]:"",Ue].filter(Boolean).join(" "),v=s,Ee=Ae&&y&&!v;return e.jsxs("button",{type:Fe,className:We,onClick:!w&&!s?Ce:void 0,disabled:w||s,"aria-label":r?B??t:B,"aria-busy":s||void 0,children:[v&&e.jsx("span",{className:o.btn__spinner,"aria-hidden":"true"}),Ee&&e.jsx("span",{className:o.btn__icon,"aria-hidden":"true",children:e.jsx(y,{className:o["btn__icon-svg"]})}),!r&&e.jsx("span",{className:o.btn__label,children:t}),Oe&&T&&!r&&e.jsx("span",{className:o.btn__icon,"aria-hidden":"true",children:e.jsx(T,{className:o["btn__icon-svg"]})}),r&&!v&&y&&e.jsx("span",{className:o.btn__icon,"aria-hidden":"true",children:e.jsx(y,{className:o["btn__icon-svg"]})})]})};a.__docgenInfo={description:`Button — Primary interactive control for the design system.
Supports 2 variants (filled, outline), 3 sizes, optional leading/
trailing icons, icon-only mode, and loading + disabled states.`,methods:[],displayName:"Button",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed inside the button",defaultValue:{value:"'Label'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:"Visual variant",defaultValue:{value:"'filled'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered before the label"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered after the label"},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the trailing icon",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Render as an icon-only button (no label)",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full-width button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for icon-only buttons"}}};const z=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"Button",subtitle:"The primary interactive control for triggering actions, submitting forms, and navigating the interface"}),e.jsxs(l.BodyText,{children:["The ",e.jsx("strong",{children:"Button"})," component is the core action element of the design system. It supports two visual variants — ",e.jsx("em",{children:"filled"})," and ",e.jsx("em",{children:"outline"})," — across three sizes, with optional leading and trailing icons, an icon-only mode, and built-in loading and disabled states. All styling is driven by the token system with no hardcoded values."]}),e.jsxs(l.Section,{title:"Component Anatomy",children:[e.jsx(l.BodyText,{children:"The diagram below maps each part of the default Button to its controlling design token."}),e.jsx(l.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2F39deb59118f84012a5375e7c768ee343",alt:"Button component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
--btn-border-width-default (--global-spacing-stroke-1px)
--btn-padding-{size}
--btn-outline-bg (--global-color-primary-blue-blue-50)`,description:"Outer button shell. Padding drives height with equal top/bottom spacing. Corner radius is 4px. Border is 1px default, 2px on focus."},{id:2,name:"Leading Icon",token:`--btn-icon-size-{size} (16px default)
--btn-gap-{size} (--global-spacing-sizing-8px)`,description:"Optional MUI icon before the label. 16px for default size. Controlled by showLeadingIcon + leadingIcon props."},{id:3,name:"Label",token:`--btn-font-family (--brand-font-primary)
--btn-font-size-{size} (16px default)
--btn-font-weight (--global-type-weight-light)
--btn-letter-spacing`,description:"Primary button text. Uses F37 Ginger Light (weight 300), 16px default. Vertically centred by equal padding. Set via the label prop."},{id:4,name:"Trailing Icon",token:`--btn-icon-size-{size} (16px default)
--btn-gap-{size} (--global-spacing-sizing-8px)`,description:"Optional MUI icon after the label. Inherits button text colour. Controlled by showTrailingIcon + trailingIcon props."}]})]}),e.jsxs(l.Section,{title:"Variants",children:[e.jsxs(l.BodyText,{children:["Two visual variants cover the primary hierarchy needs. Use ",e.jsx("strong",{children:"filled"}),"for the primary action and ",e.jsx("strong",{children:"outline"})," for secondary actions."]}),e.jsx(l.Subsection,{title:"Filled",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"filled",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"filled",label:"Label",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"filled",label:"Label",showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"filled",label:"Label"})]})}),e.jsx(l.Subsection,{title:"Outline",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{variant:"outline",label:"Label",showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"outline",label:"Label"})]})})]}),e.jsxs(l.Section,{title:"Sizes",children:[e.jsx(l.BodyText,{children:"Three sizes scale the button for different density contexts. All sizes support both variants and all optional elements."}),e.jsx(l.SizeDemo,{rows:[{label:"Small",sublabel:"Dense toolbars, inline actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"small",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"small",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"default",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"default",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Large",sublabel:"Hero calls-to-action, prominent forms",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"large",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"large",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})}]})]}),e.jsxs(l.Section,{title:"Optional Elements",children:[e.jsx(l.BodyText,{children:"Leading icon, trailing icon, and icon-only mode are all independently composable."}),e.jsx(l.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n,size:"small"}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:j,size:"large"}),e.jsx(a,{label:"Download",showLeadingIcon:!0,leadingIcon:De,variant:"outline"})]})}),e.jsx(l.Subsection,{title:"With Trailing Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:i,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:i,size:"large"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:i,variant:"outline"})]})}),e.jsx(l.Subsection,{title:"Icon Only",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,variant:"outline",leadingIcon:L,ariaLabel:"Add"})]})})]}),e.jsxs(l.Section,{title:"States",children:[e.jsxs(l.Subsection,{title:"Loading",children:[e.jsxs(l.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading. The border uses a lighter stroke weight while loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"outline",loading:!0})]})]}),e.jsxs(l.Subsection,{title:"Disabled",children:[e.jsx(l.BodyText,{children:"The outline disabled state uses explicit gray colours per the Figma spec. Filled disabled uses 45% opacity. Both block all interactions."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",disabled:!0}),e.jsx(a,{label:"Label",variant:"outline",disabled:!0}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,disabled:!0}),e.jsx(a,{label:"Label",variant:"outline",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]})]})]}),e.jsx(l.TokenTable,{title:"Design Tokens — Layout & Spacing",description:"Tokens controlling padding, border radius, and gap:",tokens:[{name:"--btn-border-radius",description:"Corner radius (4px) — uses --global-spacing-radius-4px"},{name:"--btn-border-width-default",description:"Default border (1px) — uses --global-spacing-stroke-1px"},{name:"--btn-border-width-focus",description:"Focus state border (2px) — uses --global-spacing-stroke-2px"},{name:"--btn-border-width-disabled",description:"Disabled state border (2px) — uses --global-spacing-stroke-2px"},{name:"--btn-border-width-loading",description:"Loading state border (0.5px) — uses --global-spacing-stroke-0-5px"},{name:"--btn-padding-small",description:"Small padding — 8px vertical / 12px horizontal (equal top & bottom)"},{name:"--btn-padding-default",description:"Default padding — 12px vertical / 16px horizontal (equal top & bottom)"},{name:"--btn-padding-large",description:"Large padding — 16px vertical / 20px horizontal (equal top & bottom)"},{name:"--btn-gap-small",description:"Gap between elements — small (6px)"},{name:"--btn-gap-default",description:"Gap between elements — default (8px)"},{name:"--btn-gap-large",description:"Gap between elements — large (10px)"},{name:"--btn-icon-only-size-{size}",description:"Icon-only button dimensions (36px / 44px / 52px)"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Typography",description:"Tokens controlling text and icon appearance:",tokens:[{name:"--btn-font-family",description:"Font family — F37 Ginger Pro (--brand-font-primary)"},{name:"--btn-font-weight",description:"Font weight — 300 light (--global-type-weight-light)"},{name:"--btn-letter-spacing",description:"Letter spacing (0.15px) — --global-type-letter-spacing-primary-label"},{name:"--btn-font-size-small",description:"Small font size (14px) — --global-type-size-primary-label-sm"},{name:"--btn-font-size-default",description:"Default font size (16px) — --global-type-size-primary-label"},{name:"--btn-font-size-large",description:"Large font size (18px) — --global-type-size-primary-label-lg"},{name:"--btn-icon-size-small",description:"Small icon size (14px) — --global-spacing-sizing-14px"},{name:"--btn-icon-size-default",description:"Default icon size (16px) — --global-spacing-sizing-16px"},{name:"--btn-icon-size-large",description:"Large icon size (18px) — --global-spacing-sizing-18px"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Filled Variant",description:"Colour tokens for the filled (primary) variant:",tokens:[{name:"--btn-filled-bg",description:"Default background — --global-color-primary-blue-blue-400 (#6171DF)"},{name:"--btn-filled-bg-hover",description:"Hover / active background — --global-color-primary-blue-blue-500 (#4A58CC)"},{name:"--btn-filled-color",description:"Text and icon colour — --global-color-base-white"},{name:"--btn-filled-border-color",description:"Border colour (matches fill) — --global-color-primary-blue-blue-400"},{name:"--btn-filled-shadow",description:"Drop shadow — 2px 2px 0 0 --global-color-primary-blue-blue-500"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Outline Variant",description:"Colour tokens for the outline (secondary) variant:",tokens:[{name:"--btn-outline-bg",description:"Default background — --global-color-primary-blue-blue-50 (#F9F9FE)"},{name:"--btn-outline-bg-hover",description:"Hover / active background — --global-color-primary-blue-blue-100 (#E7E9F4)"},{name:"--btn-outline-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-outline-color",description:"Default text/icon — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-outline-color-hover",description:"Hover text/icon — --global-color-base-black (#1C1C1C)"},{name:"--btn-outline-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-outline-border-color",description:"Default border — --global-color-primary-blue-blue-300 (#95A0E5)"},{name:"--btn-outline-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--btn-outline-shadow-hover",description:"Hover box-shadow — 2px 2px 0 0 --global-color-primary-blue-blue-400"}]}),e.jsx(l.CodeBlock,{children:`import { Button } from './Button';
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
<Button label="Restricted" disabled />`}),e.jsxs(l.Principles,{children:[e.jsxs(l.PrincipleCard,{number:1,title:"Use one primary action per context",children:["Each view or panel should have at most one ",e.jsx("strong",{children:"filled"})," button as the primary action. Use ",e.jsx("strong",{children:"outline"})," for secondary actions alongside it."]}),e.jsxs(l.PrincipleCard,{number:2,title:"Match size to context",children:["Use ",e.jsx("strong",{children:"small"})," in dense toolbars and inline controls, ",e.jsx("strong",{children:"default"}),"for the majority of interface actions, and ",e.jsx("strong",{children:"large"})," for hero or prominent call-to-action sections."]}),e.jsx(l.PrincipleCard,{number:3,title:"Label clearly and concisely",children:'Button labels should be 1–3 words describing the specific action (e.g. "Save", "Delete report", "Add member"). Avoid generic labels like "Click here" or "Submit".'})]}),e.jsx(l.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{variant:"filled",label:"Save changes"}),e.jsx(a,{variant:"outline",label:"Cancel"})]}),label:"One primary action",description:"Use filled for the primary action and outline for secondary — clear visual hierarchy."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{variant:"filled",label:"Save changes"}),e.jsx(a,{variant:"filled",label:"Cancel"})]}),label:"Multiple primaries",description:"Don't use two filled buttons side by side. It creates visual confusion about which action to take."}}),e.jsx(l.Footer,{})]});z.__docgenInfo={description:"",methods:[],displayName:"ButtonDocs"};const Xe={title:"Atoms/Button",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(z,{})}},argTypes:{variant:{control:"select",options:["filled","outline"]},size:{control:"select",options:["small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download"],mapping:{None:void 0,Person:n,Check:j,Add:L,Download:De}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:i,Check:j,Add:L}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},d={render:()=>e.jsx(z,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},c={args:{label:"Label",variant:"filled",size:"default"}},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(a,{variant:"filled",label:"Filled"}),e.jsx(a,{variant:"outline",label:"Outline"})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(a,{size:"small",label:"Small"}),e.jsx(a,{size:"default",label:"Default"}),e.jsx(a,{size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n,size:"small"}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:n,size:"large"})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:i,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:i,size:"large"})]}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,size:"small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,size:"large"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,variant:"outline",leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,variant:"ghost",leadingIcon:n,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"outline",loading:!0})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled",variant:"outline",disabled:!0}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:n,disabled:!0}),e.jsx(a,{label:"Disabled",variant:"outline",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["filled","outline"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:t}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"10px"},children:[e.jsx(a,{variant:t,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,size:"small"}),e.jsx(a,{variant:t,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:t,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,size:"large"}),e.jsx(a,{variant:t,iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{variant:t,label:"Disabled",disabled:!0}),e.jsx(a,{variant:t,label:"Loading",loading:!0})]})]},t))}),parameters:{layout:"padded",controls:{disable:!0}}};var _,D,S,k,F;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(S=(D=d.parameters)==null?void 0:D.docs)==null?void 0:S.source},description:{story:"Full documentation page for the Button component.",...(F=(k=d.parameters)==null?void 0:k.docs)==null?void 0:F.description}}};var A,O,P,C,U;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'default'
  }
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source},description:{story:"Default button — filled variant with label.",...(U=(C=c.parameters)==null?void 0:C.docs)==null?void 0:U.description}}};var W,E,q,V,N;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(E=p.parameters)==null?void 0:E.docs)==null?void 0:q.source},description:{story:"Both variants side by side.",...(N=(V=p.parameters)==null?void 0:V.docs)==null?void 0:N.description}}};var M,H,R,G,$;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(R=(H=g.parameters)==null?void 0:H.docs)==null?void 0:R.source},description:{story:"All three sizes.",...($=(G=g.parameters)==null?void 0:G.docs)==null?void 0:$.description}}};var J,K,Q,X,Y;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Buttons with a leading icon.",...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,ae,ne,le;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ae=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Buttons with a trailing icon.",...(le=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:le.description}}};var ie,oe,te,re,se;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(te=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:te.source},description:{story:"Buttons with both leading and trailing icons.",...(se=(re=m.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var de,ce,pe,ge,be;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:"Icon-only buttons — circular, no label.",...(be=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};var ue,me,xe,he,Ie;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(xe=(me=h.parameters)==null?void 0:me.docs)==null?void 0:xe.source},description:{story:"Loading state — spinner replaces the leading icon.",...(Ie=(he=h.parameters)==null?void 0:he.docs)==null?void 0:Ie.description}}};var fe,ye,we,ve,je;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(we=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:we.source},description:{story:"Disabled state.",...(je=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:je.description}}};var Le,ze,Te,Be,_e;f.parameters={...f.parameters,docs:{...(Le=f.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Te=(ze=f.parameters)==null?void 0:ze.docs)==null?void 0:Te.source},description:{story:"Full variant, size, and state matrix.",...(_e=(Be=f.parameters)==null?void 0:Be.docs)==null?void 0:_e.description}}};const Ye=["Documentation","Default","Variants","Sizes","WithLeadingIcon","WithTrailingIcon","WithBothIcons","IconOnly","Loading","Disabled","AllVariants"];export{f as AllVariants,c as Default,I as Disabled,d as Documentation,x as IconOnly,h as Loading,g as Sizes,p as Variants,m as WithBothIcons,b as WithLeadingIcon,u as WithTrailingIcon,Ye as __namedExportsOrder,Xe as default};
