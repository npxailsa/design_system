import{j as e}from"./iframe-DPKTwdjf.js";import{D as n}from"./DocsTemplate-Bb0qJ9XD.js";import{B as We}from"./Button-DaqliOnw.js";import{S as Ve}from"./SecondaryButton-Cgh2Qz_S.js";import{P as l}from"./Person-DPiJypGd.js";import{A as r}from"./ArrowForward-gA4MydZo.js";import{C as B}from"./Check-BmHM7Ukf.js";import{A as _}from"./Add-CUTfVUCo.js";import{D as Ne}from"./Download-CEIs79kk.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-Dn4_sAvp.js";const qe="_btn_1dzsa_21",Me="_btn__icon_1dzsa_223",Re="_btn__label_1dzsa_250",He="_btn__spinner_1dzsa_257",i={btn:qe,"btn--extra-small":"_btn--extra-small_1dzsa_68","btn--small":"_btn--small_1dzsa_77","btn--default":"_btn--default_1dzsa_85","btn--large":"_btn--large_1dzsa_89","btn--solid":"_btn--solid_1dzsa_98","btn--disabled":"_btn--disabled_1dzsa_102","btn--alt":"_btn--alt_1dzsa_131","btn--icon-only":"_btn--icon-only_1dzsa_153","btn--loading":"_btn--loading_1dzsa_211","btn--full-width":"_btn--full-width_1dzsa_218",btn__icon:Me,"btn__icon-svg":"_btn__icon-svg_1dzsa_230",btn__label:Re,btn__spinner:He,"tertiary-btn-spin":"_tertiary-btn-spin_1dzsa_1"},a=({label:t="Label",variant:o="solid",size:ke="default",type:De="button",leadingIcon:v,showLeadingIcon:Fe=!1,trailingIcon:T,showTrailingIcon:Ae=!1,iconOnly:s=!1,loading:d=!1,disabled:w=!1,fullWidth:Ee=!1,onClick:Ce,className:Pe="",ariaLabel:L})=>{const Oe=[i.btn,s?i["btn--icon-only"]:i[`btn--${o}`],i[`btn--${ke}`],d?i["btn--loading"]:"",w?i["btn--disabled"]:"",Ee?i["btn--full-width"]:"",Pe].filter(Boolean).join(" "),z=d,Ue=Fe&&v&&!z;return e.jsxs("button",{type:De,className:Oe,onClick:!w&&!d?Ce:void 0,disabled:w||d,"aria-label":s?L??t:L,"aria-busy":d||void 0,children:[z&&e.jsx("span",{className:i.btn__spinner,"aria-hidden":"true"}),Ue&&e.jsx("span",{className:i.btn__icon,"aria-hidden":"true",children:e.jsx(v,{className:i["btn__icon-svg"]})}),!s&&e.jsx("span",{className:i.btn__label,children:t}),Ae&&T&&!s&&e.jsx("span",{className:i.btn__icon,"aria-hidden":"true",children:e.jsx(T,{className:i["btn__icon-svg"]})}),s&&!z&&v&&e.jsx("span",{className:i.btn__icon,"aria-hidden":"true",children:e.jsx(v,{className:i["btn__icon-svg"]})})]})};a.__docgenInfo={description:`Tertiary Button — Yellow/amber button for tertiary-level actions.

Uses the yellow colour family (--btn-tertiary-*) with a dark-seafoam
drop shadow on hover. Two label variants: solid (yellow-200 bg) and
alt (seafoam-25 / light-green bg). Icon-only mode uses the brighter
yellow fill. Four sizes: extra-small, small, default, large.`,methods:[],displayName:"TertiaryButton",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed inside the button",defaultValue:{value:"'Label'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'alt'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'alt'"}]},description:"Visual variant — solid (yellow bg) or alt (seafoam/light-green bg)",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'extra-small' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'extra-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered before the label"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered after the label"},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the trailing icon",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Render as an icon-only button (no label, yellow fill)",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full-width button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for icon-only buttons"}}};const j=()=>e.jsxs(n,{children:[e.jsx(n.Header,{title:"Tertiary Button",subtitle:"Yellow/amber button for tertiary-level and supporting actions across the interface"}),e.jsxs(n.BodyText,{children:["The ",e.jsx("strong",{children:"Tertiary Button"})," uses the yellow/amber colour family to create a visually warm, attention-drawing button for third-level actions. It supports two label variants — ",e.jsx("em",{children:"solid"})," (yellow-200 background) and ",e.jsx("em",{children:"alt"}),"(seafoam-25 / light-green background) — plus an ",e.jsx("em",{children:"icon-only"})," mode that uses the brighter yellow fill. Four sizes are available across all configurations, with built-in loading and disabled states. A dark-seafoam drop shadow is applied on hover and active. All styling is driven by the ",e.jsx("code",{children:"--btn-tertiary-*"})," token family with no hardcoded values."]}),e.jsxs(n.Section,{title:"Component Anatomy",children:[e.jsx(n.BodyText,{children:"The Tertiary Button shares the same structural anatomy as the Primary and Secondary Buttons. The key difference is its yellow/amber colour treatment and dark-seafoam hover shadow."}),e.jsx(n.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",alignItems:"center",justifyContent:"center"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
--btn-tertiary-bg (--global-color-primary-yellow-200 / #FDEEC7)
--btn-tertiary-border-color (--global-color-primary-yellow-dark / #E8A317)
--btn-tertiary-border-width (--global-spacing-stroke-1px)
--btn-padding-{size}`,description:"Outer button shell. Corner radius: 4px. Solid: yellow-200 bg (#FDEEC7), 1px border. Alt: seafoam-25 bg. Icon-only: yellow (#F9C846) bg. Hover: border thickens to 2px + dark-seafoam drop shadow."},{id:2,name:"Leading Icon",token:`--btn-icon-size-{size} (14px / 16px / 18px)
--btn-tertiary-color (--global-color-base-black)`,description:"Optional icon preceding the label. Dark charcoal fill. Controlled by showLeadingIcon + leadingIcon props."},{id:3,name:"Trailing Icon",token:`--btn-icon-size-{size} (14px / 16px / 18px)
--btn-tertiary-color (--global-color-base-black)`,description:"Optional icon after the label. Dark charcoal fill. Controlled by showTrailingIcon + trailingIcon props."},{id:4,name:"Label",token:`--btn-font-family (--brand-font-primary)
--btn-font-size-{size}
--btn-font-weight (--global-type-weight-light)
--btn-tertiary-color (--global-color-base-black)`,description:"Button text. Uses F37 Ginger Pro Light. Colour: black (#1C1C1C) across all interactive states."}]})]}),e.jsxs(n.Section,{title:"Variants",children:[e.jsxs(n.BodyText,{children:["Three visual configurations cover different contexts. Use ",e.jsx("strong",{children:"solid"}),"for the standard tertiary action, ",e.jsx("strong",{children:"alt"})," on warmer or seafoam-tinted backgrounds, and ",e.jsx("strong",{children:"icon-only"})," for compact icon actions."]}),e.jsxs(n.Subsection,{title:"Solid",children:[e.jsx(n.BodyText,{children:"Yellow-200 (#FDEEC7) background with dark-yellow border (#E8A317). Shifts to yellow-50 (#FEFAED) on hover and pressed. The default variant."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"solid",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:"solid",label:"Label",showLeadingIcon:!0,leadingIcon:l}),e.jsx(a,{variant:"solid",label:"Label",showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:"solid",label:"Label"})]})]}),e.jsxs(n.Subsection,{title:"Alt",children:[e.jsx(n.BodyText,{children:"Seafoam-25 (#F9FCFA) background with dark-yellow border. Shifts to yellow-50 (#FEFAED) on hover and pressed."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:l}),e.jsx(a,{variant:"alt",label:"Label",showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:"alt",label:"Label"})]})]}),e.jsxs(n.Subsection,{title:"Icon Only",children:[e.jsx(n.BodyText,{children:"Brighter yellow (#F9C846) background — the full-strength yellow signal that this is an action, with the same dark-yellow border and dark-seafoam hover shadow. Shifts to yellow-50 (#FEFAED) on hover and pressed."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"large",ariaLabel:"User"})]})]})]}),e.jsxs(n.Section,{title:"Sizes",children:[e.jsx(n.BodyText,{children:"Four sizes scale the button for different density contexts. All sizes support both variants and all optional elements."}),e.jsx(n.SizeDemo,{rows:[{label:"Extra Small",sublabel:"Compact inline actions, tags",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{size:"extra-small",variant:"alt",label:"Label"}),e.jsx(a,{size:"extra-small",iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]})},{label:"Small",sublabel:"Dense toolbars, inline actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{size:"small",variant:"alt",label:"Label"}),e.jsx(a,{size:"small",iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{size:"default",variant:"alt",label:"Label"}),e.jsx(a,{size:"default",iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]})},{label:"Large",sublabel:"Prominent calls-to-action",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{size:"large",variant:"alt",label:"Label"}),e.jsx(a,{size:"large",iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]})}]})]}),e.jsxs(n.Section,{title:"States",children:[e.jsxs(n.Subsection,{title:"Default",children:[e.jsx(n.BodyText,{children:"Resting state. Solid: yellow-200 (#FDEEC7), 1px dark-yellow border. Alt: seafoam-25 (#F9FCFA)."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Solid",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:"alt",label:"Alt",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{iconOnly:!0,leadingIcon:l,ariaLabel:"Icon"})]})]}),e.jsxs(n.Subsection,{title:"Loading",children:[e.jsxs(n.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading. Border uses the lighter 0.5px stroke while loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"alt",loading:!0})]})]}),e.jsxs(n.Subsection,{title:"Disabled",children:[e.jsx(n.BodyText,{children:"Disabled state uses explicit gray colours — no opacity reduction. Background: gray-50 (#F9FAFB), border: gray-200 (#E5E7EB), text: gray-300 (#D2D5DA)."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",disabled:!0}),e.jsx(a,{label:"Label",variant:"alt",disabled:!0}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:l,disabled:!0,ariaLabel:"User"})]})]})]}),e.jsx(n.TokenTable,{title:"Design Tokens — Layout & Spacing",description:"Shared tokens (inherited from the base Button token system):",tokens:[{name:"--btn-border-radius",description:"Corner radius (4px) — --global-spacing-radius-4px"},{name:"--btn-tertiary-border-width",description:"Default border (1px) — --global-spacing-stroke-1px"},{name:"--btn-tertiary-border-width-hover",description:"Hover / active border (2px) — --global-spacing-stroke-2px"},{name:"--btn-tertiary-border-width-focus",description:"Focus border default/large (2px) — --global-spacing-stroke-2px"},{name:"--btn-tertiary-border-width-focus-sm",description:"Focus border small (3px) — --global-spacing-stroke-3px"},{name:"--btn-border-width-loading",description:"Loading border (0.5px) — --global-spacing-stroke-0-5px"},{name:"--btn-tertiary-padding-xs",description:"Extra-small padding — 2px / 4px"},{name:"--btn-padding-small",description:"Small padding — 8px / 12px"},{name:"--btn-padding-default",description:"Default padding — 12px / 16px"},{name:"--btn-padding-large",description:"Large padding — 16px / 20px"},{name:"--btn-transition-duration",description:"Transition speed — --global-animation-duration-fast"}]}),e.jsx(n.TokenTable,{title:"Design Tokens — Tertiary Colour Tokens",description:"Yellow/amber colour tokens specific to the Tertiary Button:",tokens:[{name:"--btn-tertiary-bg",description:"Solid background — --global-color-primary-yellow-200 (#FDEEC7)"},{name:"--btn-tertiary-bg-hover",description:"Solid hover/pressed background — --global-color-primary-yellow-50 (#FEFAED)"},{name:"--btn-tertiary-alt-bg",description:"Alt background — --global-color-primary-seafoam-25 (#F9FCFA)"},{name:"--btn-tertiary-alt-bg-hover",description:"Alt hover/pressed background — --global-color-primary-yellow-50 (#FEFAED)"},{name:"--btn-tertiary-icon-only-bg",description:"Icon-only background — --global-color-primary-yellow (#F9C846)"},{name:"--btn-tertiary-icon-only-bg-hover",description:"Icon-only hover/pressed background — --global-color-primary-yellow-50 (#FEFAED)"},{name:"--btn-tertiary-color",description:"Text / icon colour — --global-color-base-black (#1C1C1C)"},{name:"--btn-tertiary-border-color",description:"Border colour — --global-color-primary-yellow-dark (#E8A317)"},{name:"--btn-tertiary-shadow-hover",description:"Hover shadow — 2px 2px 0 0 --global-color-primary-seafoam-extra-dark (#384C40)"},{name:"--btn-tertiary-bg-disabled",description:"Disabled bg — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-tertiary-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-tertiary-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"}]}),e.jsx(n.CodeBlock,{children:`import { TertiaryButton } from './TertiaryButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Default solid variant
<TertiaryButton label="More info" />

// Alt variant (seafoam background)
<TertiaryButton variant="alt" label="View details" />

// Icon only (brighter yellow)
<TertiaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />

// With icons
<TertiaryButton
  label="Label"
  showLeadingIcon
  leadingIcon={PersonIcon}
  showTrailingIcon
  trailingIcon={ArrowForwardIcon}
/>

// Extra-small size
<TertiaryButton size="extra-small" label="Compact" />

// Loading & disabled
<TertiaryButton label="Loading…" loading />
<TertiaryButton label="Restricted" disabled />

// Full hierarchy pair
<Button label="Save" />
<SecondaryButton label="Cancel" />
<TertiaryButton label="More options" />`}),e.jsxs(n.Principles,{children:[e.jsx(n.PrincipleCard,{number:1,title:"Use for third-priority actions",children:'The Tertiary Button sits below the Primary and Secondary in the action hierarchy. Use it for supplementary actions like "More info", "View all", or "Preview".'}),e.jsxs(n.PrincipleCard,{number:2,title:"Icon-only for compact contexts",children:["The icon-only variant uses the brighter yellow fill to stand out without needing a label. Always supply an ",e.jsx("code",{children:"ariaLabel"})," for accessibility."]}),e.jsx(n.PrincipleCard,{number:3,title:"Yellow draws attention — use sparingly",children:"The amber/yellow colour is visually warm and attention-drawing. Reserve it for genuinely tertiary actions and avoid saturating a page with too many tertiary buttons."})]}),e.jsx(n.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(We,{variant:"filled",label:"Save"}),e.jsx(Ve,{label:"Cancel"}),e.jsx(a,{label:"Preview"})]}),label:"Clear three-tier hierarchy",description:"Use filled Primary, Secondary, and Tertiary to establish three clearly distinct action levels."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(a,{label:"Save"}),e.jsx(a,{label:"Cancel"}),e.jsx(a,{label:"Preview"})]}),label:"All tertiary",description:"Don't use Tertiary Buttons exclusively — they lose their meaning without a primary action to anchor the hierarchy."}}),e.jsx(n.Footer,{})]});j.__docgenInfo={description:"",methods:[],displayName:"TertiaryButtonDocs"};const na={title:"Atoms/Buttons/Tertiary Button",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(j,{})}},argTypes:{variant:{control:"select",options:["solid","alt"]},size:{control:"select",options:["extra-small","small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download"],mapping:{None:void 0,Person:l,Check:B,Add:_,Download:Ne}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:r,Check:B,Add:_}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},c={render:()=>e.jsx(j,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},g={args:{label:"Label",variant:"solid",size:"default"}},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{variant:"solid",label:"Solid"}),e.jsx(a,{variant:"alt",label:"Alt"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{size:"extra-small",label:"Extra Small"}),e.jsx(a,{size:"small",label:"Small"}),e.jsx(a,{size:"default",label:"Default"}),e.jsx(a,{size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,size:"extra-small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,size:"small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,size:"large"})]}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"extra-small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"large"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r,size:"small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r,size:"large"})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"large",ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"alt",loading:!0})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled",variant:"alt",disabled:!0}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:l,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)"},children:["solid","alt"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:t}),["extra-small","small","default","large"].map(o=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",width:"var(--global-spacing-sizing-80px)"},children:o}),e.jsx(a,{variant:t,size:o,label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:t,size:o,label:"Label"}),e.jsx(a,{size:o,iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{variant:t,size:o,label:"Disabled",disabled:!0}),e.jsx(a,{variant:t,size:o,label:"Loading",loading:!0})]},o))]},t))}),parameters:{layout:"padded",controls:{disable:!0}}};var S,k,D,F,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <TertiaryButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source},description:{story:"Full documentation page for the Tertiary Button component.",...(A=(F=c.parameters)==null?void 0:F.docs)==null?void 0:A.description}}};var E,C,P,O,U;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'solid',
    size: 'default'
  }
}`,...(P=(C=g.parameters)==null?void 0:C.docs)==null?void 0:P.source},description:{story:"Default tertiary button — solid variant with label.",...(U=(O=g.parameters)==null?void 0:O.docs)==null?void 0:U.description}}};var W,V,N,q,M;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <TertiaryButton variant="solid" label="Solid" />
      <TertiaryButton variant="alt" label="Alt" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(V=p.parameters)==null?void 0:V.docs)==null?void 0:N.source},description:{story:"Both label variants side by side.",...(M=(q=p.parameters)==null?void 0:q.docs)==null?void 0:M.description}}};var R,H,Y,$,G;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <TertiaryButton size="extra-small" label="Extra Small" />
      <TertiaryButton size="small" label="Small" />
      <TertiaryButton size="default" label="Default" />
      <TertiaryButton size="large" label="Large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Y.source},description:{story:"All four sizes.",...(G=($=b.parameters)==null?void 0:$.docs)==null?void 0:G.description}}};var J,K,Q,X,Z;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="extra-small" />
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="small" />
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} />
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Buttons with a leading icon.",...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,ae,le,ne,re;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <TertiaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="extra-small" />
      <TertiaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <TertiaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <TertiaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:le.source},description:{story:"Buttons with a trailing icon.",...(re=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};var ie,te,oe,se,de;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <TertiaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(te=x.parameters)==null?void 0:te.docs)==null?void 0:oe.source},description:{story:"Buttons with both leading and trailing icons.",...(de=(se=x.parameters)==null?void 0:se.docs)==null?void 0:de.description}}};var ce,ge,pe,be,ue;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <TertiaryButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
      <TertiaryButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <TertiaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
      <TertiaryButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pe=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:pe.source},description:{story:"Icon-only — brighter yellow fill, 4px radius.",...(ue=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ue.description}}};var me,xe,ye,he,fe;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <TertiaryButton label="Loading…" loading size="small" />
      <TertiaryButton label="Loading…" loading />
      <TertiaryButton label="Loading…" loading size="large" />
      <TertiaryButton label="Loading…" variant="alt" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ye=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:ye.source},description:{story:"Loading state — spinner replaces the leading icon.",...(fe=(he=h.parameters)==null?void 0:he.docs)==null?void 0:fe.description}}};var Ie,ve,we,ze,je;f.parameters={...f.parameters,docs:{...(Ie=f.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <TertiaryButton label="Disabled" disabled />
      <TertiaryButton label="Disabled" variant="alt" disabled />
      <TertiaryButton label="Disabled" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <TertiaryButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(we=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:we.source},description:{story:"Disabled state.",...(je=(ze=f.parameters)==null?void 0:ze.docs)==null?void 0:je.description}}};var Te,Le,Be,_e,Se;I.parameters={...I.parameters,docs:{...(Te=I.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-24px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      {(['solid', 'alt'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-16px)'
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
          {(['extra-small', 'small', 'default', 'large'] as const).map(size => <div key={size} style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-10px)'
      }}>
              <span style={{
          fontFamily: 'var(--brand-font-primary)',
          fontSize: '10px',
          color: 'var(--global-color-neutral-gray-400)',
          width: 'var(--global-spacing-sizing-80px)'
        }}>
                {size}
              </span>
              <TertiaryButton variant={variant} size={size} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
              <TertiaryButton variant={variant} size={size} label="Label" />
              <TertiaryButton size={size} iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
              <TertiaryButton variant={variant} size={size} label="Disabled" disabled />
              <TertiaryButton variant={variant} size={size} label="Loading" loading />
            </div>)}
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(Be=(Le=I.parameters)==null?void 0:Le.docs)==null?void 0:Be.source},description:{story:"Full variant, size, and state matrix.",...(Se=(_e=I.parameters)==null?void 0:_e.docs)==null?void 0:Se.description}}};const ra=["Documentation","Default","Variants","Sizes","WithLeadingIcon","WithTrailingIcon","WithBothIcons","IconOnly","Loading","Disabled","AllVariants"];export{I as AllVariants,g as Default,f as Disabled,c as Documentation,y as IconOnly,h as Loading,b as Sizes,p as Variants,x as WithBothIcons,u as WithLeadingIcon,m as WithTrailingIcon,ra as __namedExportsOrder,na as default};
