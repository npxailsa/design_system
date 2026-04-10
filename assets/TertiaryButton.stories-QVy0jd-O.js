import{j as e}from"./iframe-Bp18Mcq8.js";import{D as n}from"./DocsTemplate-CQNjwUpN.js";import{B as Ee}from"./Button-DUhkh2BK.js";import{S as Ve}from"./SecondaryButton-Vr0GHdTg.js";import{P as l}from"./Person-DsX4ULtf.js";import{A as r}from"./ArrowForward-Bzv_qYrK.js";import{C as B}from"./Check-D1u2hJdV.js";import{A as k}from"./Add-Cvm6cRPz.js";import{D as Ne}from"./Download-DzuQ0I_D.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-CGmauUPX.js";const qe="_btn_1tan9_24",Me="_btn__icon_1tan9_215",Re="_btn__label_1tan9_242",He="_btn__spinner_1tan9_249",i={btn:qe,"btn--extra-small":"_btn--extra-small_1tan9_71","btn--small":"_btn--small_1tan9_80","btn--default":"_btn--default_1tan9_88","btn--large":"_btn--large_1tan9_92","btn--solid":"_btn--solid_1tan9_101","btn--disabled":"_btn--disabled_1tan9_107","btn--alt":"_btn--alt_1tan9_130","btn--icon-only":"_btn--icon-only_1tan9_156","btn--loading":"_btn--loading_1tan9_203","btn--full-width":"_btn--full-width_1tan9_210",btn__icon:Me,"btn__icon-svg":"_btn__icon-svg_1tan9_222",btn__label:Re,btn__spinner:He,"tertiary-btn-spin":"_tertiary-btn-spin_1tan9_1"},a=({label:t="Label",variant:o="solid",size:Fe="default",type:Se="button",leadingIcon:I,showLeadingIcon:Ce=!1,trailingIcon:z,showTrailingIcon:De=!1,iconOnly:s=!1,loading:d=!1,disabled:w=!1,fullWidth:Ae=!1,onClick:Oe,className:Pe="",ariaLabel:L})=>{const Ue=[i.btn,s?i["btn--icon-only"]:i[`btn--${o}`],i[`btn--${Fe}`],d?i["btn--loading"]:"",w?i["btn--disabled"]:"",Ae?i["btn--full-width"]:"",Pe].filter(Boolean).join(" "),j=d,We=Ce&&I&&!j;return e.jsxs("button",{type:Se,className:Ue,onClick:!w&&!d?Oe:void 0,disabled:w||d,"aria-label":s?L??t:L,"aria-busy":d||void 0,children:[j&&e.jsx("span",{className:i.btn__spinner,"aria-hidden":"true"}),We&&e.jsx("span",{className:i.btn__icon,"aria-hidden":"true",children:e.jsx(I,{className:i["btn__icon-svg"]})}),!s&&e.jsx("span",{className:i.btn__label,children:t}),De&&z&&!s&&e.jsx("span",{className:i.btn__icon,"aria-hidden":"true",children:e.jsx(z,{className:i["btn__icon-svg"]})}),s&&!j&&I&&e.jsx("span",{className:i.btn__icon,"aria-hidden":"true",children:e.jsx(I,{className:i["btn__icon-svg"]})})]})};a.__docgenInfo={description:`Tertiary Button — Yellow/amber button for tertiary-level actions.

Uses the yellow colour family (--btn-tertiary-*) with a dark-seafoam
drop shadow on hover. Two label variants: solid (yellow-200 bg) and
alt (seafoam-25 / light-green bg). Icon-only mode uses the brighter
yellow fill. Four sizes: extra-small, small, default, large.`,methods:[],displayName:"TertiaryButton",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed inside the button",defaultValue:{value:"'Label'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'alt'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'alt'"}]},description:"Visual variant — solid (yellow bg) or alt (seafoam/light-green bg)",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'extra-small' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'extra-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered before the label"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered after the label"},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the trailing icon",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Render as an icon-only button (no label, yellow fill)",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full-width button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for icon-only buttons"}}};const T=()=>e.jsxs(n,{children:[e.jsx(n.Header,{title:"Tertiary Button",subtitle:"Sky-blue button for tertiary-level and supporting actions across the interface"}),e.jsxs(n.BodyText,{children:["The ",e.jsx("strong",{children:"Tertiary Button"})," uses the sky-blue colour family to create a crisp, light tertiary button for third-level actions. It supports two label variants —"," ",e.jsx("em",{children:"solid"})," (sky-blue-50 background with a blue-400 drop shadow at rest) and"," ",e.jsx("em",{children:"alt"})," (white background, shadow appears only on hover) — plus an"," ",e.jsx("em",{children:"icon-only"})," mode that mirrors the solid default. Four sizes are available across all configurations, with built-in loading and disabled states. All styling is driven by the ",e.jsx("code",{children:"--btn-tertiary-*"})," token family with no hardcoded values."]}),e.jsxs(n.Section,{title:"Component Anatomy",children:[e.jsx(n.BodyText,{children:"The Tertiary Button shares the same structural anatomy as the Primary and Secondary Buttons. The key difference is its yellow/amber colour treatment and dark-seafoam hover shadow."}),e.jsx(n.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",alignItems:"center",justifyContent:"center"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-6px)
--btn-tertiary-bg (--brand-sky-blue-50 / #CCF0FB)
--btn-tertiary-border-color (--brand-sky-blue / #00B2EB)
--btn-tertiary-border-width (--global-spacing-stroke-1px)
--btn-tertiary-shadow (2px 2px 0px 0px --global-color-primary-blue-blue-400)
--btn-padding-{size}`,description:"Outer button shell. Corner radius: 6px. Solid: sky-blue-50 bg (#CCF0FB), 1px sky-blue border, blue-400 shadow at default. Alt: white bg, no shadow at default. Hover: solid widens border to 2px; alt adds shadow + bg tints to #F4FCFF."},{id:2,name:"Leading Icon",token:`--btn-icon-size-{size} (14px / 16px / 18px)
--btn-tertiary-color (--brand-sky-blue-dark / #026281)`,description:"Optional icon preceding the label. Dark sky-blue fill (#026281). On alt hover, inherits the black text colour. Controlled by showLeadingIcon + leadingIcon props."},{id:3,name:"Trailing Icon",token:`--btn-icon-size-{size} (14px / 16px / 18px)
--btn-tertiary-color (--brand-sky-blue-dark / #026281)`,description:"Optional icon after the label. Dark sky-blue fill (#026281). On alt hover, inherits the black text colour. Controlled by showTrailingIcon + trailingIcon props."},{id:4,name:"Label",token:`--btn-font-family (--brand-font-primary)
--btn-font-size-{size}
--btn-font-weight (--global-type-weight-light)
--btn-tertiary-color (--brand-sky-blue-dark / #026281)
--btn-tertiary-alt-color-hover (--global-color-base-black / #1C1C1C)`,description:"Button text. Uses F37 Ginger Pro Light. Colour: dark sky-blue (#026281). On alt hover, changes to black (#1C1C1C) via --btn-tertiary-alt-color-hover."}]})]}),e.jsxs(n.Section,{title:"Variants",children:[e.jsxs(n.BodyText,{children:["Three visual configurations cover different contexts. Use ",e.jsx("strong",{children:"solid"}),"for the standard tertiary action, ",e.jsx("strong",{children:"alt"})," on warmer or seafoam-tinted backgrounds, and ",e.jsx("strong",{children:"icon-only"})," for compact icon actions."]}),e.jsxs(n.Subsection,{title:"Solid",children:[e.jsx(n.BodyText,{children:"Sky-blue-50 (#CCF0FB) background with a sky-blue border (#00B2EB) and a blue-400 drop shadow (2×2px) at the default state. On hover, only the border widens to 2px — the background and shadow remain unchanged. The default variant."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"solid",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:"solid",label:"Label",showLeadingIcon:!0,leadingIcon:l}),e.jsx(a,{variant:"solid",label:"Label",showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:"solid",label:"Label"})]})]}),e.jsxs(n.Subsection,{title:"Alt",children:[e.jsx(n.BodyText,{children:"White (#FFFFFF) background with a sky-blue border (#00B2EB), no shadow at rest. On hover, the background shifts to a very light sky-blue (#F4FCFF), a blue-400 drop shadow appears, and the text turns black (#1C1C1C). Border stays 1px."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:l}),e.jsx(a,{variant:"alt",label:"Label",showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:"alt",label:"Label"})]})]}),e.jsxs(n.Subsection,{title:"Icon Only",children:[e.jsx(n.BodyText,{children:"Sky-blue-50 (#CCF0FB) background — identical to the solid default, including the blue-400 drop shadow. The icon-only variant does not change visually on hover; it retains its default appearance across all interactive states."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"large",ariaLabel:"User"})]})]})]}),e.jsxs(n.Section,{title:"Sizes",children:[e.jsx(n.BodyText,{children:"Four sizes scale the button for different density contexts. All sizes support both variants and all optional elements."}),e.jsx(n.SizeDemo,{rows:[{label:"Extra Small",sublabel:"Compact inline actions, tags",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{size:"extra-small",variant:"alt",label:"Label"}),e.jsx(a,{size:"extra-small",iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]})},{label:"Small",sublabel:"Dense toolbars, inline actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{size:"small",variant:"alt",label:"Label"}),e.jsx(a,{size:"small",iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{size:"default",variant:"alt",label:"Label"}),e.jsx(a,{size:"default",iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]})},{label:"Large",sublabel:"Prominent calls-to-action",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{size:"large",variant:"alt",label:"Label"}),e.jsx(a,{size:"large",iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]})}]})]}),e.jsxs(n.Section,{title:"States",children:[e.jsxs(n.Subsection,{title:"Default",children:[e.jsx(n.BodyText,{children:"Resting state. Solid: sky-blue-50 (#CCF0FB) background, 1px sky-blue border, blue-400 drop shadow. Alt: white (#FFFFFF) background, 1px sky-blue border, no shadow."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Solid",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:"alt",label:"Alt",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{iconOnly:!0,leadingIcon:l,ariaLabel:"Icon"})]})]}),e.jsxs(n.Subsection,{title:"Loading",children:[e.jsxs(n.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading. Border uses the lighter 0.5px stroke while loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"alt",loading:!0})]})]}),e.jsxs(n.Subsection,{title:"Disabled",children:[e.jsx(n.BodyText,{children:"Disabled state uses explicit gray colours — no opacity reduction. Background: gray-100 (#F3F4F6), border: 2px solid gray-400 (#9CA3AF), text: gray-400 (#9CA3AF). All three variants (solid, alt, icon-only) share the same disabled treatment."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",disabled:!0}),e.jsx(a,{label:"Label",variant:"alt",disabled:!0}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:l,disabled:!0,ariaLabel:"User"})]})]})]}),e.jsx(n.TokenTable,{title:"Design Tokens — Layout & Spacing",description:"Shared tokens (inherited from the base Button token system):",tokens:[{name:"--btn-border-radius",description:"Corner radius (4px) — --global-spacing-radius-4px"},{name:"--btn-tertiary-border-width",description:"Default border (1px) — --global-spacing-stroke-1px"},{name:"--btn-tertiary-border-width-hover",description:"Hover / active border (2px) — --global-spacing-stroke-2px"},{name:"--btn-tertiary-border-width-focus",description:"Focus border default/large (2px) — --global-spacing-stroke-2px"},{name:"--btn-tertiary-border-width-focus-sm",description:"Focus border small (3px) — --global-spacing-stroke-3px"},{name:"--btn-border-width-loading",description:"Loading border (0.5px) — --global-spacing-stroke-0-5px"},{name:"--btn-tertiary-padding-xs",description:"Extra-small padding — 2px / 4px"},{name:"--btn-padding-small",description:"Small padding — 8px / 12px"},{name:"--btn-padding-default",description:"Default padding — 12px / 16px"},{name:"--btn-padding-large",description:"Large padding — 16px / 20px"},{name:"--btn-transition-duration",description:"Transition speed — --global-animation-duration-fast"}]}),e.jsx(n.TokenTable,{title:"Design Tokens — Tertiary Colour Tokens",description:"Sky-blue colour tokens specific to the Tertiary Button:",tokens:[{name:"--btn-tertiary-bg",description:"Solid background (default + hover) — --brand-sky-blue-50 (#CCF0FB)"},{name:"--btn-tertiary-color",description:"Text / icon colour — --brand-sky-blue-dark (#026281)"},{name:"--btn-tertiary-border-color",description:"Border colour (all states) — --brand-sky-blue (#00B2EB)"},{name:"--btn-tertiary-shadow",description:"Drop shadow at default state (solid + icon-only) — 2px 2px 0px 0px --global-color-primary-blue-blue-400 (#6171DF)"},{name:"--btn-tertiary-shadow-hover",description:"Drop shadow on hover (alt variant) — 2px 2px 0px 0px --global-color-primary-blue-blue-400 (#6171DF)"},{name:"--btn-tertiary-alt-bg",description:"Alt default background — --global-color-base-white (#FFFFFF)"},{name:"--btn-tertiary-alt-bg-hover",description:"Alt hover/active background — --global-color-primary-sky-blue-50 (#F4FCFF)"},{name:"--btn-tertiary-alt-color-hover",description:"Alt hover/active text colour — --global-color-base-black (#1C1C1C)"},{name:"--btn-tertiary-icon-only-bg",description:"Icon-only background — --brand-sky-blue-50 (#CCF0FB)"},{name:"--btn-tertiary-bg-disabled",description:"Disabled background (all variants) — --global-color-neutral-gray-100 (#F3F4F6)"},{name:"--btn-tertiary-color-disabled",description:"Disabled text/icon — --global-color-neutral-gray-400 (#9CA3AF)"},{name:"--btn-tertiary-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-400 (#9CA3AF)"},{name:"--btn-tertiary-border-width-disabled",description:"Disabled border width (all variants) — --global-spacing-stroke-2px (2px)"}]}),e.jsx(n.CodeBlock,{children:`import { TertiaryButton } from './TertiaryButton';
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
<TertiaryButton label="More options" />`}),e.jsxs(n.Principles,{children:[e.jsx(n.PrincipleCard,{number:1,title:"Use for third-priority actions",children:'The Tertiary Button sits below the Primary and Secondary in the action hierarchy. Use it for supplementary actions like "More info", "View all", or "Preview".'}),e.jsxs(n.PrincipleCard,{number:2,title:"Icon-only for compact contexts",children:["The icon-only variant uses the brighter yellow fill to stand out without needing a label. Always supply an ",e.jsx("code",{children:"ariaLabel"})," for accessibility."]}),e.jsx(n.PrincipleCard,{number:3,title:"Sky-blue signals supporting actions",children:"The sky-blue palette is lighter than the primary blue, signalling a supporting role. Reserve it for genuinely tertiary actions and avoid saturating a page with too many tertiary buttons alongside the primary hierarchy."})]}),e.jsx(n.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(Ee,{variant:"filled",label:"Save"}),e.jsx(Ve,{label:"Cancel"}),e.jsx(a,{label:"Preview"})]}),label:"Clear three-tier hierarchy",description:"Use filled Primary, Secondary, and Tertiary to establish three clearly distinct action levels."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(a,{label:"Save"}),e.jsx(a,{label:"Cancel"}),e.jsx(a,{label:"Preview"})]}),label:"All tertiary",description:"Don't use Tertiary Buttons exclusively — they lose their meaning without a primary action to anchor the hierarchy."}}),e.jsx(n.Footer,{})]});T.__docgenInfo={description:"",methods:[],displayName:"TertiaryButtonDocs"};const na={title:"Atoms/Buttons/Tertiary Button",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(T,{})}},argTypes:{variant:{control:"select",options:["solid","alt"]},size:{control:"select",options:["extra-small","small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download"],mapping:{None:void 0,Person:l,Check:B,Add:k,Download:Ne}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:r,Check:B,Add:k}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},c={render:()=>e.jsx(T,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},g={args:{label:"Label",variant:"solid",size:"default"}},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{variant:"solid",label:"Solid"}),e.jsx(a,{variant:"alt",label:"Alt"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{size:"extra-small",label:"Extra Small"}),e.jsx(a,{size:"small",label:"Small"}),e.jsx(a,{size:"default",label:"Default"}),e.jsx(a,{size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,size:"extra-small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,size:"small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,size:"large"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"extra-small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"large"})]}),parameters:{controls:{disable:!0}}},y={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r,size:"small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r,size:"large"})]}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"large",ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"alt",loading:!0})]}),parameters:{controls:{disable:!0}}},v={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled",variant:"alt",disabled:!0}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:l,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)"},children:["solid","alt"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:t}),["extra-small","small","default","large"].map(o=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",width:"var(--global-spacing-sizing-80px)"},children:o}),e.jsx(a,{variant:t,size:o,label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),e.jsx(a,{variant:t,size:o,label:"Label"}),e.jsx(a,{size:o,iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{variant:t,size:o,label:"Disabled",disabled:!0}),e.jsx(a,{variant:t,size:o,label:"Loading",loading:!0})]},o))]},t))}),parameters:{layout:"padded",controls:{disable:!0}}};var _,F,S,C,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <TertiaryButtonDocs />,
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
}`,...(S=(F=c.parameters)==null?void 0:F.docs)==null?void 0:S.source},description:{story:"Full documentation page for the Tertiary Button component.",...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.description}}};var A,O,P,U,W;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'solid',
    size: 'default'
  }
}`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source},description:{story:"Default tertiary button — solid variant with label.",...(W=(U=g.parameters)==null?void 0:U.docs)==null?void 0:W.description}}};var E,V,N,q,M;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(V=p.parameters)==null?void 0:V.docs)==null?void 0:N.source},description:{story:"Both label variants side by side.",...(M=(q=p.parameters)==null?void 0:q.docs)==null?void 0:M.description}}};var R,H,$,G,Y;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...($=(H=b.parameters)==null?void 0:H.docs)==null?void 0:$.source},description:{story:"All four sizes.",...(Y=(G=b.parameters)==null?void 0:G.docs)==null?void 0:Y.description}}};var J,K,Q,X,Z;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Buttons with a leading icon.",...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,ae,le,ne,re;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(le=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:le.source},description:{story:"Buttons with a trailing icon.",...(re=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};var ie,te,oe,se,de;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.source},description:{story:"Buttons with both leading and trailing icons.",...(de=(se=y.parameters)==null?void 0:se.docs)==null?void 0:de.description}}};var ce,ge,pe,be,ue;m.parameters={...m.parameters,docs:{...(ce=m.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:pe.source},description:{story:"Icon-only — brighter yellow fill, 4px radius.",...(ue=(be=m.parameters)==null?void 0:be.docs)==null?void 0:ue.description}}};var xe,ye,me,he,ve;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(me=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:me.source},description:{story:"Loading state — spinner replaces the leading icon.",...(ve=(he=h.parameters)==null?void 0:he.docs)==null?void 0:ve.description}}};var fe,Ie,we,je,Te;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(we=(Ie=v.parameters)==null?void 0:Ie.docs)==null?void 0:we.source},description:{story:"Disabled state.",...(Te=(je=v.parameters)==null?void 0:je.docs)==null?void 0:Te.description}}};var ze,Le,Be,ke,_e;f.parameters={...f.parameters,docs:{...(ze=f.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Be=(Le=f.parameters)==null?void 0:Le.docs)==null?void 0:Be.source},description:{story:"Full variant, size, and state matrix.",...(_e=(ke=f.parameters)==null?void 0:ke.docs)==null?void 0:_e.description}}};const ra=["Documentation","Default","Variants","Sizes","WithLeadingIcon","WithTrailingIcon","WithBothIcons","IconOnly","Loading","Disabled","AllVariants"];export{f as AllVariants,g as Default,v as Disabled,c as Documentation,m as IconOnly,h as Loading,b as Sizes,p as Variants,y as WithBothIcons,u as WithLeadingIcon,x as WithTrailingIcon,ra as __namedExportsOrder,na as default};
