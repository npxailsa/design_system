import{j as e}from"./iframe-DXERnEz1.js";import{B as ze}from"./ButtonBase-DT2HJ18m.js";import{D as l}from"./DocsTemplate-BcEQml24.js";import{B as Te}from"./Button-DTUyqvFG.js";import{S as Le}from"./SecondaryButton-lqyj438M.js";import{P as t}from"./Person-OnOuce8K.js";import{A as i}from"./ArrowForward-BRw40rye.js";import{C as _}from"./Check-go2Z14QY.js";import{A as F}from"./Add-DkKf7YGF.js";import{D as Be}from"./Download-Dw_qXtdi.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-FxoPPxPG.js";import"./index-Bx56xhV8.js";import"./useEventCallback-C3ef8NPV.js";import"./useForkRef-Q3R6IQbo.js";import"./createSvgIcon-CLtvtJ5j.js";import"./memoTheme-C8vhc3RX.js";const Se="_btn_10yza_24",ke="_btn__icon_10yza_216",_e="_btn__label_10yza_243",Fe="_btn__spinner_10yza_250",n={btn:Se,"btn--extra-small":"_btn--extra-small_10yza_71","btn--small":"_btn--small_10yza_80","btn--default":"_btn--default_10yza_88","btn--large":"_btn--large_10yza_92","btn--solid":"_btn--solid_10yza_101","btn--disabled":"_btn--disabled_10yza_107","btn--alt":"_btn--alt_10yza_130","btn--icon-only":"_btn--icon-only_10yza_156","btn--loading":"_btn--loading_10yza_204","btn--full-width":"_btn--full-width_10yza_211",btn__icon:ke,"btn__icon-svg":"_btn__icon-svg_10yza_223",btn__label:_e,btn__spinner:Fe,"tertiary-btn-spin":"_tertiary-btn-spin_10yza_1"},a=({label:r="Label",variant:o="solid",size:z="default",type:me="button",leadingIcon:p,showLeadingIcon:xe=!1,trailingIcon:S,showTrailingIcon:he=!1,iconOnly:s=!1,loading:d=!1,disabled:T=!1,fullWidth:fe=!1,onClick:ve,className:je="",ariaLabel:k})=>{const we=[n.btn,s?n["btn--icon-only"]:n[`btn--${o}`],n[`btn--${z}`],d?n["btn--loading"]:"",T?n["btn--disabled"]:"",fe?n["btn--full-width"]:"",je].filter(Boolean).join(" "),L=d,Ie=xe&&p&&!L;return e.jsxs(ze,{component:"button",type:me,className:we,onClick:!T&&!d?ve:void 0,disabled:T||d,"aria-label":s?k??r:k,"aria-busy":d||void 0,children:[L&&e.jsx("span",{className:n.btn__spinner,"aria-hidden":"true"}),Ie&&e.jsx("span",{className:n.btn__icon,"aria-hidden":"true",children:e.jsx(p,{className:n["btn__icon-svg"]})}),!s&&e.jsx("span",{className:n.btn__label,children:r}),he&&S&&!s&&e.jsx("span",{className:n.btn__icon,"aria-hidden":"true",children:e.jsx(S,{className:n["btn__icon-svg"]})}),s&&!L&&p&&e.jsx("span",{className:n.btn__icon,"aria-hidden":"true",children:e.jsx(p,{className:n["btn__icon-svg"]})})]})};a.__docgenInfo={description:`Tertiary Button — Yellow/amber button for tertiary-level actions.

Uses the yellow colour family (--btn-tertiary-*) with a dark-seafoam
drop shadow on hover. Two label variants: solid (yellow-200 bg) and
alt (seafoam-25 / light-green bg). Icon-only mode uses the brighter
yellow fill. Four sizes: extra-small, small, default, large.`,methods:[],displayName:"TertiaryButton",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed inside the button",defaultValue:{value:"'Label'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'alt'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'alt'"}]},description:"Visual variant — solid (yellow bg) or alt (seafoam/light-green bg)",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'extra-small' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'extra-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered before the label"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered after the label"},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the trailing icon",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Render as an icon-only button (no label, yellow fill)",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full-width button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for icon-only buttons"}}};const B=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"Tertiary Button",subtitle:"Sky-blue button for tertiary-level and supporting actions across the interface"}),e.jsxs(l.BodyText,{children:["The ",e.jsx("strong",{children:"Tertiary Button"})," uses the sky-blue colour family to create a crisp, light tertiary button for third-level actions. It supports two label variants —"," ",e.jsx("em",{children:"solid"})," (sky-blue-50 background with a blue-400 drop shadow at rest) and"," ",e.jsx("em",{children:"alt"})," (white background, shadow appears only on hover) — plus an"," ",e.jsx("em",{children:"icon-only"})," mode that mirrors the solid default. Four sizes are available across all configurations, with built-in loading and disabled states. All styling is driven by the ",e.jsx("code",{children:"--btn-tertiary-*"})," token family with no hardcoded values."]}),e.jsxs(l.Section,{title:"MUI Foundation",children:[e.jsxs(l.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"ButtonBase"}),", the shared accessible primitive across the entire button family. ",e.jsx("code",{children:"ButtonBase"})," contributes keyboard interaction, disabled state propagation, and polymorphic root rendering. The Tertiary Button's sky-blue drop shadow, border mechanics, and two-step hover behaviour are applied purely through CSS Modules and the ",e.jsx("code",{children:"--btn-tertiary-*"})," token family — MUI contributes no visual opinions."]}),e.jsx(l.CodeBlock,{children:`// MUI base import
import ButtonBase from '@mui/material/ButtonBase';

// Root element of TertiaryButton:
<ButtonBase component="button" className={styles['tertiary-btn']} disabled={disabled} onClick={onClick}>`})]}),e.jsxs(l.Section,{title:"Component Anatomy",children:[e.jsx(l.BodyText,{children:"The Tertiary Button shares the same structural anatomy as the Primary and Secondary Buttons. The key difference is its yellow/amber colour treatment and dark-seafoam hover shadow."}),e.jsx(l.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",alignItems:"center",justifyContent:"center"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:t,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:t,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{iconOnly:!0,leadingIcon:t,ariaLabel:"User"})]}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-6px)
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
--btn-tertiary-alt-color-hover (--global-color-base-black / #1C1C1C)`,description:"Button text. Uses F37 Ginger Pro Light. Colour: dark sky-blue (#026281). On alt hover, changes to black (#1C1C1C) via --btn-tertiary-alt-color-hover."}]})]}),e.jsxs(l.Section,{title:"Variants",children:[e.jsxs(l.BodyText,{children:["Three visual configurations cover different contexts. Use ",e.jsx("strong",{children:"solid"}),"for the standard tertiary action, ",e.jsx("strong",{children:"alt"})," on warmer or seafoam-tinted backgrounds, and ",e.jsx("strong",{children:"icon-only"})," for compact icon actions."]}),e.jsxs(l.Subsection,{title:"Solid",children:[e.jsx(l.BodyText,{children:"Sky-blue-50 (#CCF0FB) background with a sky-blue border (#00B2EB) and a blue-400 drop shadow (2×2px) at the default state. On hover, only the border widens to 2px — the background and shadow remain unchanged. The default variant."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"solid",label:"Label",showLeadingIcon:!0,leadingIcon:t,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"solid",label:"Label",showLeadingIcon:!0,leadingIcon:t}),e.jsx(a,{variant:"solid",label:"Label",showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"solid",label:"Label"})]})]}),e.jsxs(l.Subsection,{title:"Alt",children:[e.jsx(l.BodyText,{children:"White (#FFFFFF) background with a sky-blue border (#00B2EB), no shadow at rest. On hover, the background shifts to a very light sky-blue (#F4FCFF), a blue-400 drop shadow appears, and the text turns black (#1C1C1C). Border stays 1px."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:t,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:t}),e.jsx(a,{variant:"alt",label:"Label",showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"alt",label:"Label"})]})]}),e.jsxs(l.Subsection,{title:"Icon Only",children:[e.jsx(l.BodyText,{children:"Sky-blue-50 (#CCF0FB) background — identical to the solid default, including the blue-400 drop shadow. The icon-only variant does not change visually on hover; it retains its default appearance across all interactive states."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:t,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:t,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:t,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:t,size:"large",ariaLabel:"User"})]})]})]}),e.jsxs(l.Section,{title:"Sizes",children:[e.jsx(l.BodyText,{children:"Four sizes scale the button for different density contexts. All sizes support both variants and all optional elements."}),e.jsx(l.SizeDemo,{rows:[{label:"Extra Small",sublabel:"Compact inline actions, tags",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:t,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"extra-small",variant:"alt",label:"Label"}),e.jsx(a,{size:"extra-small",iconOnly:!0,leadingIcon:t,ariaLabel:"User"})]})},{label:"Small",sublabel:"Dense toolbars, inline actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:t,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"small",variant:"alt",label:"Label"}),e.jsx(a,{size:"small",iconOnly:!0,leadingIcon:t,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:t,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"default",variant:"alt",label:"Label"}),e.jsx(a,{size:"default",iconOnly:!0,leadingIcon:t,ariaLabel:"User"})]})},{label:"Large",sublabel:"Prominent calls-to-action",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:t,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{size:"large",variant:"alt",label:"Label"}),e.jsx(a,{size:"large",iconOnly:!0,leadingIcon:t,ariaLabel:"User"})]})}]})]}),e.jsxs(l.Section,{title:"States",children:[e.jsxs(l.Subsection,{title:"Default",children:[e.jsx(l.BodyText,{children:"Resting state. Solid: sky-blue-50 (#CCF0FB) background, 1px sky-blue border, blue-400 drop shadow. Alt: white (#FFFFFF) background, 1px sky-blue border, no shadow."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Solid",showLeadingIcon:!0,leadingIcon:t,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:"alt",label:"Alt",showLeadingIcon:!0,leadingIcon:t,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{iconOnly:!0,leadingIcon:t,ariaLabel:"Icon"})]})]}),e.jsxs(l.Subsection,{title:"Loading",children:[e.jsxs(l.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading. Border uses the lighter 0.5px stroke while loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{label:"Loading…",variant:"alt",loading:!0})]})]}),e.jsxs(l.Subsection,{title:"Disabled",children:[e.jsx(l.BodyText,{children:"Disabled state uses explicit gray colours — no opacity reduction. Background: gray-100 (#F3F4F6), border: 2px solid gray-400 (#9CA3AF), text: gray-400 (#9CA3AF). All three variants (solid, alt, icon-only) share the same disabled treatment."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",disabled:!0}),e.jsx(a,{label:"Label",variant:"alt",disabled:!0}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:t,showTrailingIcon:!0,trailingIcon:i,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:t,disabled:!0,ariaLabel:"User"})]})]})]}),e.jsx(l.TokenTable,{title:"Design Tokens — Layout & Spacing",description:"Shared tokens (inherited from the base Button token system):",tokens:[{name:"--btn-border-radius",description:"Corner radius (4px) — --global-spacing-radius-4px"},{name:"--btn-tertiary-border-width",description:"Default border (1px) — --global-spacing-stroke-1px"},{name:"--btn-tertiary-border-width-hover",description:"Hover / active border (2px) — --global-spacing-stroke-2px"},{name:"--btn-tertiary-border-width-focus",description:"Focus border default/large (2px) — --global-spacing-stroke-2px"},{name:"--btn-tertiary-border-width-focus-sm",description:"Focus border small (3px) — --global-spacing-stroke-3px"},{name:"--btn-border-width-loading",description:"Loading border (0.5px) — --global-spacing-stroke-0-5px"},{name:"--btn-tertiary-padding-xs",description:"Extra-small padding — 2px / 4px"},{name:"--btn-padding-small",description:"Small padding — 8px / 12px"},{name:"--btn-padding-default",description:"Default padding — 12px / 16px"},{name:"--btn-padding-large",description:"Large padding — 16px / 20px"},{name:"--btn-transition-duration",description:"Transition speed — --global-animation-duration-fast"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Tertiary Colour Tokens",description:"Sky-blue colour tokens specific to the Tertiary Button:",tokens:[{name:"--btn-tertiary-bg",description:"Solid background (default + hover) — --brand-sky-blue-50 (#CCF0FB)"},{name:"--btn-tertiary-color",description:"Text / icon colour — --brand-sky-blue-dark (#026281)"},{name:"--btn-tertiary-border-color",description:"Border colour (all states) — --brand-sky-blue (#00B2EB)"},{name:"--btn-tertiary-shadow",description:"Drop shadow at default state (solid + icon-only) — 2px 2px 0px 0px --global-color-primary-blue-blue-400 (#6171DF)"},{name:"--btn-tertiary-shadow-hover",description:"Drop shadow on hover (alt variant) — 2px 2px 0px 0px --global-color-primary-blue-blue-400 (#6171DF)"},{name:"--btn-tertiary-alt-bg",description:"Alt default background — --global-color-base-white (#FFFFFF)"},{name:"--btn-tertiary-alt-bg-hover",description:"Alt hover/active background — --global-color-primary-sky-blue-50 (#F4FCFF)"},{name:"--btn-tertiary-alt-color-hover",description:"Alt hover/active text colour — --global-color-base-black (#1C1C1C)"},{name:"--btn-tertiary-icon-only-bg",description:"Icon-only background — --brand-sky-blue-50 (#CCF0FB)"},{name:"--btn-tertiary-bg-disabled",description:"Disabled background (all variants) — --global-color-neutral-gray-100 (#F3F4F6)"},{name:"--btn-tertiary-color-disabled",description:"Disabled text/icon — --global-color-neutral-gray-400 (#9CA3AF)"},{name:"--btn-tertiary-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-400 (#9CA3AF)"},{name:"--btn-tertiary-border-width-disabled",description:"Disabled border width (all variants) — --global-spacing-stroke-2px (2px)"}]}),e.jsx(l.CodeBlock,{children:`import { TertiaryButton } from './TertiaryButton';
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
<TertiaryButton label="More options" />`}),e.jsxs(l.Principles,{children:[e.jsx(l.PrincipleCard,{number:1,title:"Use for third-priority actions",children:'The Tertiary Button sits below the Primary and Secondary in the action hierarchy. Use it for supplementary actions like "More info", "View all", or "Preview".'}),e.jsxs(l.PrincipleCard,{number:2,title:"Icon-only for compact contexts",children:["The icon-only variant uses the brighter yellow fill to stand out without needing a label. Always supply an ",e.jsx("code",{children:"ariaLabel"})," for accessibility."]}),e.jsx(l.PrincipleCard,{number:3,title:"Sky-blue signals supporting actions",children:"The sky-blue palette is lighter than the primary blue, signalling a supporting role. Reserve it for genuinely tertiary actions and avoid saturating a page with too many tertiary buttons alongside the primary hierarchy."})]}),e.jsx(l.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(Te,{variant:"filled",label:"Save"}),e.jsx(Le,{label:"Cancel"}),e.jsx(a,{label:"Preview"})]}),label:"Clear three-tier hierarchy",description:"Use filled Primary, Secondary, and Tertiary to establish three clearly distinct action levels."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(a,{label:"Save"}),e.jsx(a,{label:"Cancel"}),e.jsx(a,{label:"Preview"})]}),label:"All tertiary",description:"Don't use Tertiary Buttons exclusively — they lose their meaning without a primary action to anchor the hierarchy."}}),e.jsx(l.Footer,{})]});B.__docgenInfo={description:"",methods:[],displayName:"TertiaryButtonDocs"};const Je={title:"Atoms/Buttons/Tertiary Button",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(B,{})}},argTypes:{variant:{control:"select",options:["solid","alt"]},size:{control:"select",options:["extra-small","small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download"],mapping:{None:void 0,Person:t,Check:_,Add:F,Download:Be}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:i,Check:_,Add:F}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},b={display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},De=r=>e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--global-color-neutral-gray-500)",display:"block",marginBottom:"8px"},children:r}),u={name:"Documentation",render:()=>e.jsx(B,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},g={name:"Playground",args:{label:"Label",variant:"solid",size:"default",showLeadingIcon:!0,leadingIcon:t,disabled:!1,loading:!1}},y={name:"Default",args:{label:"Label",variant:"solid",size:"default"}},c={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{size:"extra-small",label:"Extra Small"}),e.jsx(a,{size:"small",label:"Small"}),e.jsx(a,{size:"default",label:"Default"}),e.jsx(a,{size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},m={name:"Status / Solid",render:()=>e.jsxs("div",{style:b,children:[e.jsx(a,{variant:"solid",size:"extra-small",label:"XS"}),e.jsx(a,{variant:"solid",size:"small",label:"Small"}),e.jsx(a,{variant:"solid",size:"default",label:"Default"}),e.jsx(a,{variant:"solid",size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},x={name:"Status / Alt",render:()=>e.jsxs("div",{style:b,children:[e.jsx(a,{variant:"alt",size:"extra-small",label:"XS"}),e.jsx(a,{variant:"alt",size:"small",label:"Small"}),e.jsx(a,{variant:"alt",size:"default",label:"Default"}),e.jsx(a,{variant:"alt",size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},h={name:"Status / Icon Only",render:()=>e.jsxs("div",{style:b,children:[e.jsx(a,{iconOnly:!0,leadingIcon:t,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:t,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:t,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:t,size:"large",ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},f={name:"Status / Loading",render:()=>e.jsxs("div",{style:b,children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{variant:"alt",label:"Loading…",loading:!0})]}),parameters:{controls:{disable:!0}}},v={name:"Status / Disabled",render:()=>e.jsxs("div",{style:b,children:[e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{variant:"alt",label:"Disabled",disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:t,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},j={name:"Component Breakdown",render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",padding:"24px",flexWrap:"wrap"},children:[["Solid label",e.jsx(a,{label:"Label"}),"--btn-tertiary-bg"],["Alt label",e.jsx(a,{variant:"alt",label:"Alt"}),"--btn-tertiary-alt-bg"],["Icon only",e.jsx(a,{iconOnly:!0,leadingIcon:t,ariaLabel:"x"}),"--btn-tertiary-icon-only-size-default"]].map(([r,o,z])=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-600)",fontFamily:"var(--brand-font-primary)"},children:r}),o,e.jsx("code",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-500)",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px"},children:z})]},r))}),parameters:{controls:{disable:!0}}},w={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"24px"},children:[De("Solid — states"),e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:["Default","Loading","Disabled"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[e.jsx(a,{variant:"solid",label:r,loading:r==="Loading",disabled:r==="Disabled"}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:r.toLowerCase()})]},r))})]}),parameters:{controls:{disable:!0}}},I={name:"Full Design Matrix (40 variants)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)"},children:["solid","alt"].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:r}),["extra-small","small","default","large"].map(o=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",width:"var(--global-spacing-sizing-80px)"},children:o}),e.jsx(a,{variant:r,size:o,label:"Label",showLeadingIcon:!0,leadingIcon:t,showTrailingIcon:!0,trailingIcon:i}),e.jsx(a,{variant:r,size:o,label:"Label"}),e.jsx(a,{size:o,iconOnly:!0,leadingIcon:t,ariaLabel:"User"}),e.jsx(a,{variant:r,size:o,label:"Disabled",disabled:!0}),e.jsx(a,{variant:r,size:o,label:"Loading",loading:!0})]},o))]},r))}),parameters:{layout:"padded",controls:{disable:!0}}};var D,C,A;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Documentation',
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
}`,...(A=(C=u.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var O,U,P;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Label',
    variant: 'solid',
    size: 'default',
    showLeadingIcon: true,
    leadingIcon: PersonIcon,
    disabled: false,
    loading: false
  }
}`,...(P=(U=g.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var W,R,E;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    label: 'Label',
    variant: 'solid',
    size: 'default'
  }
}`,...(E=(R=y.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var M,N,q,V,H;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(N=c.parameters)==null?void 0:N.docs)==null?void 0:q.source},description:{story:"All four sizes.",...(H=(V=c.parameters)==null?void 0:V.docs)==null?void 0:H.description}}};var X,$,G;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Status / Solid',
  render: () => <div style={ROW}><TertiaryButton variant="solid" size="extra-small" label="XS" /><TertiaryButton variant="solid" size="small" label="Small" /><TertiaryButton variant="solid" size="default" label="Default" /><TertiaryButton variant="solid" size="large" label="Large" /></div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=($=m.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var Y,J,K;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Status / Alt',
  render: () => <div style={ROW}><TertiaryButton variant="alt" size="extra-small" label="XS" /><TertiaryButton variant="alt" size="small" label="Small" /><TertiaryButton variant="alt" size="default" label="Default" /><TertiaryButton variant="alt" size="large" label="Large" /></div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Z,ee;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Status / Icon Only',
  render: () => <div style={ROW}><TertiaryButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" /><TertiaryButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" /><TertiaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" /><TertiaryButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" /></div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,le,te;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Status / Loading',
  render: () => <div style={ROW}><TertiaryButton label="Loading…" loading size="small" /><TertiaryButton label="Loading…" loading /><TertiaryButton variant="alt" label="Loading…" loading /></div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(le=f.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var re,ne,ie;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Status / Disabled',
  render: () => <div style={ROW}><TertiaryButton label="Disabled" disabled /><TertiaryButton variant="alt" label="Disabled" disabled /><TertiaryButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" /></div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,se,de;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    padding: '24px',
    flexWrap: 'wrap'
  }}>
      {[['Solid label', <TertiaryButton label="Label" />, '--btn-tertiary-bg'], ['Alt label', <TertiaryButton variant="alt" label="Alt" />, '--btn-tertiary-alt-bg'], ['Icon only', <TertiaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="x" />, '--btn-tertiary-icon-only-size-default']].map(([lbl, el, tok]) => <div key={lbl as string} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }}>
          <span style={{
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-600)',
        fontFamily: 'var(--brand-font-primary)'
      }}>{lbl as string}</span>
          {el as React.ReactElement}
          <code style={{
        fontSize: '10px',
        color: 'var(--global-color-neutral-gray-500)',
        background: 'var(--global-color-neutral-gray-100)',
        padding: '2px 6px',
        borderRadius: '4px'
      }}>{tok as string}</code>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(se=j.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,be,pe;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '24px'
  }}>
      {LBL('Solid — states')}
      <div style={{
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
        {(['Default', 'Loading', 'Disabled'] as const).map(s => <div key={s} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px'
      }}>
            <TertiaryButton variant="solid" label={s} loading={s === 'Loading'} disabled={s === 'Disabled'} />
            <span style={{
          fontSize: '10px',
          color: 'var(--global-color-neutral-gray-400)',
          fontFamily: 'var(--brand-font-secondary)'
        }}>{s.toLowerCase()}</span>
          </div>)}
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pe=(be=w.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var ue,ge,ye;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Full Design Matrix (40 variants)',
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
}`,...(ye=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};const Ke=["Documentation","Playground","Default","Sizes","StatusSolid","StatusAlt","StatusIconOnly","StatusLoading","StatusDisabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{w as AllInteractiveStates,j as ComponentBreakdown,y as Default,u as Documentation,I as FullDesignMatrix,g as Playground,c as Sizes,x as StatusAlt,v as StatusDisabled,h as StatusIconOnly,f as StatusLoading,m as StatusSolid,Ke as __namedExportsOrder,Je as default};
