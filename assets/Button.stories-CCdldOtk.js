import{j as e}from"./iframe-7pWUlxrZ.js";import{D as i}from"./DocsTemplate-Cl7SEhzi.js";import{A as l,P as a}from"./ArrowForward-B4ROJaab.js";import{C as j}from"./Check-CTYIDZGy.js";import{D as De,A as L}from"./Download-D8Q80b17.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-DbbiMpPQ.js";const Ee="_btn_1nteh_17",Ve="_btn__icon_1nteh_177",qe="_btn__label_1nteh_203",Ne="_btn__spinner_1nteh_210",o={btn:Ee,"btn--small":"_btn--small_1nteh_49","btn--large":"_btn--large_1nteh_56","btn--filled":"_btn--filled_1nteh_64","btn--disabled":"_btn--disabled_1nteh_72","btn--outline":"_btn--outline_1nteh_95","btn--loading":"_btn--loading_1nteh_147","btn--icon-only":"_btn--icon-only_1nteh_154","btn--full-width":"_btn--full-width_1nteh_172",btn__icon:Ve,"btn__icon-svg":"_btn__icon-svg_1nteh_184",btn__label:qe,btn__spinner:Ne,"btn-spin":"_btn-spin_1nteh_1"},n=({label:t="Label",variant:Fe="filled",size:Se="default",type:ke="button",leadingIcon:y,showLeadingIcon:Ae=!1,trailingIcon:T,showTrailingIcon:Oe=!1,iconOnly:r=!1,loading:s=!1,disabled:w=!1,fullWidth:Ce=!1,onClick:We,className:Ue="",ariaLabel:B})=>{const Pe=[o.btn,o[`btn--${Fe}`],o[`btn--${Se}`],r?o["btn--icon-only"]:"",s?o["btn--loading"]:"",w?o["btn--disabled"]:"",Ce?o["btn--full-width"]:"",Ue].filter(Boolean).join(" "),v=s,He=Ae&&y&&!v;return e.jsxs("button",{type:ke,className:Pe,onClick:!w&&!s?We:void 0,disabled:w||s,"aria-label":r?B??t:B,"aria-busy":s||void 0,children:[v&&e.jsx("span",{className:o.btn__spinner,"aria-hidden":"true"}),He&&e.jsx("span",{className:o.btn__icon,"aria-hidden":"true",children:e.jsx(y,{className:o["btn__icon-svg"]})}),!r&&e.jsx("span",{className:o.btn__label,children:t}),Oe&&T&&!r&&e.jsx("span",{className:o.btn__icon,"aria-hidden":"true",children:e.jsx(T,{className:o["btn__icon-svg"]})}),r&&!v&&y&&e.jsx("span",{className:o.btn__icon,"aria-hidden":"true",children:e.jsx(y,{className:o["btn__icon-svg"]})})]})};n.__docgenInfo={description:`Button — Primary interactive control for the design system.
Supports 2 variants (filled, outline), 3 sizes, optional leading/
trailing icons, icon-only mode, and loading + disabled states.`,methods:[],displayName:"Button",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed inside the button",defaultValue:{value:"'Label'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"}]},description:"Visual variant",defaultValue:{value:"'filled'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered before the label"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered after the label"},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the trailing icon",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Render as an icon-only button (no label)",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full-width button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for icon-only buttons"}}};const z=()=>e.jsxs(i,{children:[e.jsx(i.Header,{title:"Primary Button",subtitle:"The primary interactive control for triggering actions, submitting forms, and navigating the interface"}),e.jsxs(i.BodyText,{children:["The ",e.jsx("strong",{children:"Button"})," component is the core action element of the design system. It supports two visual variants — ",e.jsx("em",{children:"filled"})," and ",e.jsx("em",{children:"outline"})," — across three sizes, with optional leading and trailing icons, an icon-only mode, and built-in loading and disabled states. All styling is driven by the token system with no hardcoded values."]}),e.jsxs(i.Section,{title:"Component Anatomy",children:[e.jsxs(i.BodyText,{children:["The diagrams below map each part of the Button to its controlling design token for both the ",e.jsx("strong",{children:"filled"})," and ",e.jsx("strong",{children:"outline"})," variants."]}),e.jsx(i.Subsection,{title:"Filled",children:e.jsx(i.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Faa05dab54f864947ac346fbc53ed3d44",alt:"Filled primary button component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
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
--btn-outline-color (--global-color-secondary-blue-gray)`,description:"Primary button text. W: HUG, H: HUG. Uses Archivo Light at 18px with 24px line-height. Colour: color/secondary/blue-gray."}]})})]}),e.jsxs(i.Section,{title:"Variants",children:[e.jsxs(i.BodyText,{children:["Two visual variants cover the primary hierarchy needs. Use ",e.jsx("strong",{children:"filled"}),"for the primary action and ",e.jsx("strong",{children:"outline"})," for secondary actions."]}),e.jsx(i.Subsection,{title:"Filled",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(n,{variant:"filled",label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{variant:"filled",label:"Label",showLeadingIcon:!0,leadingIcon:a}),e.jsx(n,{variant:"filled",label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{variant:"filled",label:"Label"})]})}),e.jsx(i.Subsection,{title:"Outline",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(n,{variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:a}),e.jsx(n,{variant:"outline",label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{variant:"outline",label:"Label"})]})})]}),e.jsxs(i.Section,{title:"Sizes",children:[e.jsx(i.BodyText,{children:"Three sizes scale the button for different density contexts. All sizes support both variants and all optional elements."}),e.jsx(i.SizeDemo,{rows:[{label:"Small",sublabel:"Dense toolbars, inline actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(n,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{size:"small",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{size:"small",iconOnly:!0,leadingIcon:a,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(n,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{size:"default",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{size:"default",iconOnly:!0,leadingIcon:a,ariaLabel:"User"})]})},{label:"Large",sublabel:"Hero calls-to-action, prominent forms",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(n,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{size:"large",variant:"outline",label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{size:"large",iconOnly:!0,leadingIcon:a,ariaLabel:"User"})]})}]})]}),e.jsxs(i.Section,{title:"Optional Elements",children:[e.jsx(i.BodyText,{children:"Leading icon, trailing icon, and icon-only mode are all independently composable."}),e.jsx(i.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(n,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:a,size:"small"}),e.jsx(n,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:a}),e.jsx(n,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:j,size:"large"}),e.jsx(n,{label:"Download",showLeadingIcon:!0,leadingIcon:De,variant:"outline"})]})}),e.jsx(i.Subsection,{title:"With Trailing Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(n,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(n,{label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"large"}),e.jsx(n,{label:"Label",showTrailingIcon:!0,trailingIcon:l,variant:"outline"})]})}),e.jsx(i.Subsection,{title:"Icon Only",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(n,{iconOnly:!0,leadingIcon:a,size:"small",ariaLabel:"User"}),e.jsx(n,{iconOnly:!0,leadingIcon:a,ariaLabel:"User"}),e.jsx(n,{iconOnly:!0,leadingIcon:a,size:"large",ariaLabel:"User"}),e.jsx(n,{iconOnly:!0,variant:"outline",leadingIcon:L,ariaLabel:"Add"})]})})]}),e.jsxs(i.Section,{title:"States",children:[e.jsxs(i.Subsection,{title:"Loading",children:[e.jsxs(i.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading. The border uses a lighter stroke weight while loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(n,{label:"Loading…",loading:!0,size:"small"}),e.jsx(n,{label:"Loading…",loading:!0}),e.jsx(n,{label:"Loading…",loading:!0,size:"large"}),e.jsx(n,{label:"Loading…",variant:"outline",loading:!0})]})]}),e.jsxs(i.Subsection,{title:"Disabled",children:[e.jsx(i.BodyText,{children:"Both filled and outline disabled states use explicit gray colours per the Figma spec (no opacity reduction). Both block all interactions."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(n,{label:"Label",disabled:!0}),e.jsx(n,{label:"Label",variant:"outline",disabled:!0}),e.jsx(n,{label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l,disabled:!0}),e.jsx(n,{label:"Label",variant:"outline",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l,disabled:!0}),e.jsx(n,{iconOnly:!0,leadingIcon:a,disabled:!0,ariaLabel:"User"})]})]})]}),e.jsx(i.TokenTable,{title:"Design Tokens — Layout & Spacing",description:"Tokens controlling padding, border radius, and gap:",tokens:[{name:"--btn-border-radius",description:"Corner radius (4px) — uses --global-spacing-radius-4px"},{name:"--btn-border-width-default",description:"Default border (1px) — uses --global-spacing-stroke-1px"},{name:"--btn-border-width-focus",description:"Focus state border (2px) — uses --global-spacing-stroke-2px"},{name:"--btn-border-width-disabled",description:"Disabled state border (2px) — uses --global-spacing-stroke-2px"},{name:"--btn-border-width-loading",description:"Loading state border (0.5px) — uses --global-spacing-stroke-0-5px"},{name:"--btn-padding-small",description:"Small padding — 8px vertical / 12px horizontal (equal top & bottom)"},{name:"--btn-padding-default",description:"Default padding — 12px vertical / 16px horizontal (equal top & bottom)"},{name:"--btn-padding-large",description:"Large padding — 16px vertical / 20px horizontal (equal top & bottom)"},{name:"--btn-gap-small",description:"Gap between elements — small (6px)"},{name:"--btn-gap-default",description:"Gap between elements — default (8px)"},{name:"--btn-gap-large",description:"Gap between elements — large (10px)"},{name:"--btn-icon-only-size-{size}",description:"Icon-only button dimensions (36px / 44px / 52px)"},{name:"--btn-transition-duration",description:"Transition speed — --global-animation-duration-fast (160ms)"},{name:"--btn-transition-easing",description:"Transition curve — --global-animation-easing-default (ease)"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Typography",description:"Tokens controlling text and icon appearance:",tokens:[{name:"--btn-font-family",description:"Font family — F37 Ginger Pro (--brand-font-primary)"},{name:"--btn-font-weight",description:"Font weight — 300 light (--global-type-weight-light)"},{name:"--btn-letter-spacing",description:"Letter spacing (0.15px) — --global-type-letter-spacing-primary-label"},{name:"--btn-font-size-small",description:"Small font size (14px) — --global-type-size-primary-label-sm"},{name:"--btn-font-size-default",description:"Default font size (16px) — --global-type-size-primary-label"},{name:"--btn-font-size-large",description:"Large font size (18px) — --global-type-size-primary-label-lg"},{name:"--btn-icon-size-small",description:"Small icon size (14px) — --global-spacing-sizing-14px"},{name:"--btn-icon-size-default",description:"Default icon size (16px) — --global-spacing-sizing-16px"},{name:"--btn-icon-size-large",description:"Large icon size (18px) — --global-spacing-sizing-18px"},{name:"--btn-spinner-duration",description:"Spinner animation speed — --global-animation-duration-spinner (700ms)"},{name:"--btn-spinner-opacity",description:"Spinner opacity — --global-opacity-muted (0.6)"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Filled Variant",description:"Colour tokens for the filled (primary) variant:",tokens:[{name:"--btn-filled-bg",description:"Default background — --brand-primary (#3776CE)"},{name:"--btn-filled-bg-hover",description:"Hover / active background — --global-color-primary-blue-blue-400 (#6171DF)"},{name:"--btn-filled-color",description:"Text and icon colour — --global-color-base-white"},{name:"--btn-filled-border-color",description:"Default border colour (matches fill) — --brand-primary"},{name:"--btn-filled-border-width",description:"Default border width (0.5px) — --global-spacing-stroke-0-5px"},{name:"--btn-filled-border-color-hover",description:"Hover border colour — --global-color-primary-blue-blue-200 (#C5CAED)"},{name:"--btn-filled-border-color-focus",description:"Focus border colour — --global-color-primary-blue-blue-400 (#6171DF)"},{name:"--btn-filled-shadow-hover",description:"Drop shadow on hover & active only — --global-spacing-sizing-2px offset, --global-color-primary-blue-blue-400 colour"},{name:"--btn-filled-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-filled-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-filled-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Outline Variant",description:"Colour tokens for the outline (secondary) variant:",tokens:[{name:"--btn-outline-bg",description:"Default background — --global-color-primary-blue-blue-50 (#F9F9FE)"},{name:"--btn-outline-bg-hover",description:"Hover / active background — --global-color-primary-blue-blue-100 (#E7E9F4)"},{name:"--btn-outline-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-outline-color",description:"Default text/icon — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-outline-color-hover",description:"Hover text/icon — --global-color-base-black (#1C1C1C)"},{name:"--btn-outline-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-outline-border-color",description:"Default border — --global-color-primary-blue-blue-300 (#95A0E5)"},{name:"--btn-outline-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--btn-outline-shadow-hover",description:"Hover box-shadow — --global-spacing-sizing-2px offset, --global-color-primary-blue-blue-400 colour"}]}),e.jsx(i.CodeBlock,{children:`import { Button } from './Button';
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
<Button label="Restricted" disabled />`}),e.jsxs(i.Principles,{children:[e.jsxs(i.PrincipleCard,{number:1,title:"Use one primary action per context",children:["Each view or panel should have at most one ",e.jsx("strong",{children:"filled"})," button as the primary action. Use ",e.jsx("strong",{children:"outline"})," for secondary actions alongside it."]}),e.jsxs(i.PrincipleCard,{number:2,title:"Match size to context",children:["Use ",e.jsx("strong",{children:"small"})," in dense toolbars and inline controls, ",e.jsx("strong",{children:"default"}),"for the majority of interface actions, and ",e.jsx("strong",{children:"large"})," for hero or prominent call-to-action sections."]}),e.jsx(i.PrincipleCard,{number:3,title:"Label clearly and concisely",children:'Button labels should be 1–3 words describing the specific action (e.g. "Save", "Delete report", "Add member"). Avoid generic labels like "Click here" or "Submit".'})]}),e.jsx(i.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(n,{variant:"filled",label:"Save changes"}),e.jsx(n,{variant:"outline",label:"Cancel"})]}),label:"One primary action",description:"Use filled for the primary action and outline for secondary — clear visual hierarchy."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(n,{variant:"filled",label:"Save changes"}),e.jsx(n,{variant:"filled",label:"Cancel"})]}),label:"Multiple primaries",description:"Don't use two filled buttons side by side. It creates visual confusion about which action to take."}}),e.jsx(i.Footer,{})]});z.__docgenInfo={description:"",methods:[],displayName:"ButtonDocs"};const Xe={title:"Atoms/Primary Button",component:n,parameters:{layout:"centered",docs:{page:()=>e.jsx(z,{})}},argTypes:{variant:{control:"select",options:["filled","outline"]},size:{control:"select",options:["small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download"],mapping:{None:void 0,Person:a,Check:j,Add:L,Download:De}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:l,Check:j,Add:L}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},d={render:()=>e.jsx(z,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},c={args:{label:"Label",variant:"filled",size:"default"}},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(n,{variant:"filled",label:"Filled"}),e.jsx(n,{variant:"outline",label:"Outline"})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(n,{size:"small",label:"Small"}),e.jsx(n,{size:"default",label:"Default"}),e.jsx(n,{size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(n,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:a,size:"small"}),e.jsx(n,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:a}),e.jsx(n,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:a,size:"large"})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(n,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(n,{label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"large"})]}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(n,{label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(n,{label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l,size:"large"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"16px"},children:[e.jsx(n,{iconOnly:!0,leadingIcon:a,size:"small",ariaLabel:"User"}),e.jsx(n,{iconOnly:!0,leadingIcon:a,ariaLabel:"User"}),e.jsx(n,{iconOnly:!0,leadingIcon:a,size:"large",ariaLabel:"User"}),e.jsx(n,{iconOnly:!0,variant:"outline",leadingIcon:a,ariaLabel:"User"}),e.jsx(n,{iconOnly:!0,variant:"ghost",leadingIcon:a,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(n,{label:"Loading…",loading:!0,size:"small"}),e.jsx(n,{label:"Loading…",loading:!0}),e.jsx(n,{label:"Loading…",loading:!0,size:"large"}),e.jsx(n,{label:"Loading…",variant:"outline",loading:!0})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"12px",padding:"16px"},children:[e.jsx(n,{label:"Disabled",disabled:!0}),e.jsx(n,{label:"Disabled",variant:"outline",disabled:!0}),e.jsx(n,{label:"Disabled",showLeadingIcon:!0,leadingIcon:a,disabled:!0}),e.jsx(n,{label:"Disabled",variant:"outline",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l,disabled:!0}),e.jsx(n,{iconOnly:!0,leadingIcon:a,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["filled","outline"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:t}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"10px"},children:[e.jsx(n,{variant:t,label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(n,{variant:t,label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l}),e.jsx(n,{variant:t,label:"Label",showLeadingIcon:!0,leadingIcon:a,showTrailingIcon:!0,trailingIcon:l,size:"large"}),e.jsx(n,{variant:t,iconOnly:!0,leadingIcon:a,ariaLabel:"User"}),e.jsx(n,{variant:t,label:"Disabled",disabled:!0}),e.jsx(n,{variant:t,label:"Loading",loading:!0})]})]},t))}),parameters:{layout:"padded",controls:{disable:!0}}};var _,D,F,S,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(D=d.parameters)==null?void 0:D.docs)==null?void 0:F.source},description:{story:"Full documentation page for the Button component.",...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.description}}};var A,O,C,W,U;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'filled',
    size: 'default'
  }
}`,...(C=(O=c.parameters)==null?void 0:O.docs)==null?void 0:C.source},description:{story:"Default button — filled variant with label.",...(U=(W=c.parameters)==null?void 0:W.docs)==null?void 0:U.description}}};var P,H,E,V,q;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(H=p.parameters)==null?void 0:H.docs)==null?void 0:E.source},description:{story:"Both variants side by side.",...(q=(V=p.parameters)==null?void 0:V.docs)==null?void 0:q.description}}};var N,M,G,R,$;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(G=(M=g.parameters)==null?void 0:M.docs)==null?void 0:G.source},description:{story:"All three sizes.",...($=(R=g.parameters)==null?void 0:R.docs)==null?void 0:$.description}}};var J,K,Q,X,Y;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Buttons with a leading icon.",...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,ne,ae,ie;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ne.source},description:{story:"Buttons with a trailing icon.",...(ie=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:ie.description}}};var le,oe,te,re,se;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:"Icon-only buttons — circular, no label.",...(be=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};var ue,me,xe,he,fe;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(xe=(me=h.parameters)==null?void 0:me.docs)==null?void 0:xe.source},description:{story:"Loading state — spinner replaces the leading icon.",...(fe=(he=h.parameters)==null?void 0:he.docs)==null?void 0:fe.description}}};var Ie,ye,we,ve,je;f.parameters={...f.parameters,docs:{...(Ie=f.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(we=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:we.source},description:{story:"Disabled state.",...(je=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:je.description}}};var Le,ze,Te,Be,_e;I.parameters={...I.parameters,docs:{...(Le=I.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Te=(ze=I.parameters)==null?void 0:ze.docs)==null?void 0:Te.source},description:{story:"Full variant, size, and state matrix.",...(_e=(Be=I.parameters)==null?void 0:Be.docs)==null?void 0:_e.description}}};const Ye=["Documentation","Default","Variants","Sizes","WithLeadingIcon","WithTrailingIcon","WithBothIcons","IconOnly","Loading","Disabled","AllVariants"];export{I as AllVariants,c as Default,f as Disabled,d as Documentation,x as IconOnly,h as Loading,g as Sizes,p as Variants,m as WithBothIcons,b as WithLeadingIcon,u as WithTrailingIcon,Ye as __namedExportsOrder,Xe as default};
