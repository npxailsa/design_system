import{j as e}from"./iframe-BArsNLVa.js";import{D as i}from"./DocsTemplate-fRadOJD_.js";import{P as l}from"./Person-ClKQxx-h.js";import{A as n}from"./ArrowForward-CZ0eMrP-.js";import{A as z}from"./Add-B6Pf7RdJ.js";import{D as _e}from"./Download-CUQAOux3.js";import{E as T}from"./Edit-BAK52PY6.js";import{B as qe}from"./Button-1BD-HJg0.js";import{C as _}from"./Check-D9X1CHN-.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-C3QTQbfi.js";const o={"ghost-btn":"_ghost-btn_e20gg_24","ghost-btn--ghost":"_ghost-btn--ghost_e20gg_79","ghost-btn--disabled":"_ghost-btn--disabled_e20gg_86","ghost-btn--loading":"_ghost-btn--loading_e20gg_126","ghost-btn--link":"_ghost-btn--link_e20gg_136","ghost-btn--extra-small":"_ghost-btn--extra-small_e20gg_198","ghost-btn--small":"_ghost-btn--small_e20gg_206","ghost-btn--large":"_ghost-btn--large_e20gg_214","ghost-btn--icon-only":"_ghost-btn--icon-only_e20gg_225","ghost-btn--borderless":"_ghost-btn--borderless_e20gg_253","ghost-btn--full-width":"_ghost-btn--full-width_e20gg_265","ghost-btn__icon":"_ghost-btn__icon_e20gg_273","ghost-btn__icon-svg":"_ghost-btn__icon-svg_e20gg_280","ghost-btn__label":"_ghost-btn__label_e20gg_305","ghost-btn__spinner":"_ghost-btn__spinner_e20gg_315","ghost-btn-spin":"_ghost-btn-spin_e20gg_1"},a=({variant:c="ghost",label:B="Label",size:Oe="default",type:Ae="button",leadingIcon:f,showLeadingIcon:De=!1,trailingIcon:G,showTrailingIcon:Ue=!1,iconOnly:r=!1,borderless:Se=!1,loading:d=!1,disabled:L=!1,fullWidth:Pe=!1,onClick:Ce,className:Ee="",ariaLabel:F})=>{const We=[o["ghost-btn"],o[`ghost-btn--${c}`],o[`ghost-btn--${Oe}`],r?o["ghost-btn--icon-only"]:"",r&&Se?o["ghost-btn--borderless"]:"",d?o["ghost-btn--loading"]:"",L?o["ghost-btn--disabled"]:"",Pe?o["ghost-btn--full-width"]:"",Ee].filter(Boolean).join(" "),j=d,Ve=De&&f&&!j;return e.jsxs("button",{type:Ae,className:We,onClick:!L&&!d?Ce:void 0,disabled:L||d,"aria-label":r?F??B:F,"aria-busy":d||void 0,children:[j&&e.jsx("span",{className:o["ghost-btn__spinner"],"aria-hidden":"true"}),Ve&&e.jsx("span",{className:o["ghost-btn__icon"],"aria-hidden":"true",children:e.jsx(f,{className:o["ghost-btn__icon-svg"]})}),!r&&e.jsx("span",{className:o["ghost-btn__label"],children:B}),Ue&&G&&!r&&e.jsx("span",{className:o["ghost-btn__icon"],"aria-hidden":"true",children:e.jsx(G,{className:o["ghost-btn__icon-svg"]})}),r&&!j&&f&&e.jsx("span",{className:o["ghost-btn__icon"],"aria-hidden":"true",children:e.jsx(f,{className:o["ghost-btn__icon-svg"]})})]})};a.__docgenInfo={description:`GhostButton — Low-emphasis interactive control with ghost/outline or link style.

**Variants**
- \`ghost\` (default): blue-50 background, blue-300 border, blue-gray text
- \`link\`: no background or border, blue-gray/primary text like a hyperlink

**Sizes**: extra-small / small / default / large

Supports optional leading / trailing icons, icon-only mode (with or without border),
and loading + disabled states.`,methods:[],displayName:"GhostButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'ghost' | 'link'",elements:[{name:"literal",value:"'ghost'"},{name:"literal",value:"'link'"}]},description:"Visual variant — ghost (bordered, light bg) or link (text link, no border)",defaultValue:{value:"'ghost'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Text label displayed inside the button",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'extra-small' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'extra-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered before the label"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered after the label"},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the trailing icon",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Render as an icon-only button (square, no label)",defaultValue:{value:"false",computed:!1}},borderless:{required:!1,tsType:{name:"boolean"},description:"Remove border for icon-only borderless style",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full-width button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for icon-only buttons"}}};const k=()=>e.jsxs(i,{children:[e.jsx(i.Header,{title:"Ghost Button",subtitle:"A low-emphasis interactive control with a transparent ghost style for supporting actions"}),e.jsxs(i.BodyText,{children:["The ",e.jsx("strong",{children:"Ghost Button"})," is a low-hierarchy action control with two visual variants — ",e.jsx("strong",{children:"ghost"})," (bordered, blue-50 background) and ",e.jsx("strong",{children:"link"}),"(text link, no border or background). Four sizes are supported: extra-small, small, default, and large. All styling is driven by the token system with no hardcoded values."]}),e.jsxs(i.Section,{title:"Component Anatomy",children:[e.jsxs(i.BodyText,{children:["The Ghost Button shares structural layout with the Primary Button but uses its own",e.jsx("code",{children:" --btn-ghost-*"})," colour token family. The diagram below maps each visible part to its controlling design token."]}),e.jsx(i.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n,size:"large"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"large",ariaLabel:"User"})]}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
--btn-ghost-bg (--global-color-primary-blue-blue-50 / #F9F9FE)
--btn-ghost-border-color (--global-color-secondary-blue-gray / #61607C)
--btn-ghost-border-color-hover (--global-color-base-black / #1C1C1C)
--btn-ghost-border-width-default (--global-spacing-stroke-1px)
--btn-ghost-shadow-hover (2px 2px 0 0 #6171DF — hover & active only)
--btn-padding-{size}`,description:"Outer button shell. W: HUG, H: HUG. Min-W: 80px. Corner radius: 4px. Default fill: color/primary/blue/blue-50 (#F9F9FE), 1px border secondary/blue-gray (#61607C). On hover/active, border becomes base/black (#1C1C1C), bg shifts to base/white (#FFFFFF) with a 2×2 drop shadow in base/black (#1C1C1C)."},{id:2,name:"Leading Icon",token:"--btn-icon-size-{size} (16px default / 14px small / 18px large)",description:"Optional icon preceding the label. Inherits the current text colour (blue-gray at rest, black on hover). Controlled by showLeadingIcon + leadingIcon props."},{id:3,name:"Label",token:`--btn-font-family (--brand-font-primary / F37 Ginger Pro)
--btn-font-size-{size} (16px default)
--btn-font-weight (--global-type-weight-light / 300)
--btn-ghost-color (--global-color-secondary-blue-gray / #61607C)`,description:"Button label text. Uses F37 Ginger Pro Light at 16px with 20px line-height. Resting colour: #61607C (blue-gray). On hover/active: #1C1C1C (black)."},{id:4,name:"Trailing Icon",token:"--btn-icon-size-{size} (16px default / 14px small / 18px large)",description:"Optional icon after the label. Inherits the current text colour, same as leading icon. Controlled by showTrailingIcon + trailingIcon props."}]})]}),e.jsxs(i.Section,{title:"Sizes",children:[e.jsx(i.BodyText,{children:"Four sizes scale the Ghost Button for different density contexts. All sizes support leading icons, trailing icons, icon-only, and the link variant."}),e.jsx(i.SizeDemo,{rows:[{label:"Extra Small",sublabel:"Ultra-compact toolbars, badges, chips",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"extra-small",iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{variant:"link",size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n})]})},{label:"Small",sublabel:"Dense toolbars, inline actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{variant:"link",size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{variant:"link",size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n})]})},{label:"Large",sublabel:"Prominent or hero-area supporting actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{variant:"link",size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n})]})}]})]}),e.jsxs(i.Section,{title:"Optional Elements",children:[e.jsx(i.BodyText,{children:"Leading icon, trailing icon, and icon-only mode are all independently composable via props."}),e.jsx(i.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:l,size:"small"}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:l}),e.jsx(a,{label:"Download",showLeadingIcon:!0,leadingIcon:_e,size:"large"})]})}),e.jsx(i.Subsection,{title:"With Trailing Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,size:"large"})]})}),e.jsx(i.Subsection,{title:"Icon Only (Bordered)",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:z,ariaLabel:"Add"}),e.jsx(a,{iconOnly:!0,leadingIcon:T,ariaLabel:"Edit"})]})}),e.jsxs(i.Subsection,{title:"Icon Only (Borderless)",children:[e.jsxs(i.BodyText,{children:["Add ",e.jsx("code",{children:"borderless"})," prop alongside ",e.jsx("code",{children:"iconOnly"})," for a no-border, no-background icon button. Matches Figma ",e.jsx("code",{children:"special=icon-only"})," (no stroke)."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,size:"large",ariaLabel:"User"})]})]}),e.jsxs(i.Subsection,{title:"Link Variant",children:[e.jsxs(i.BodyText,{children:["Use ",e.jsx("code",{children:'variant="link"'})," for a text link style — no border or background. Matches Figma ",e.jsx("code",{children:"special=link-only"}),". On hover, text switches to the brand primary colour with an underline."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{variant:"link",size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n})]})]})]}),e.jsxs(i.Section,{title:"States",children:[e.jsxs(i.Subsection,{title:"Loading",children:[e.jsxs(i.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading. The border uses a lighter 0.5px stroke and the spinner uses the blue-300 colour at 0.6 opacity."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{iconOnly:!0,loading:!0,ariaLabel:"Loading"})]})]}),e.jsxs(i.Subsection,{title:"Disabled",children:[e.jsx(i.BodyText,{children:"Disabled ghost buttons use explicit gray colours per the Figma spec — no opacity reduction. They block all interactions and use a 2px border with gray-200."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{label:"Label",disabled:!0}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:l,disabled:!0,ariaLabel:"User"})]})]})]}),e.jsx(i.TokenTable,{title:"Design Tokens — Layout & Spacing",description:"Ghost Button reuses the shared button layout tokens:",tokens:[{name:"--btn-min-width",description:"Minimum button width — 80px (--global-spacing-sizing-80px)"},{name:"--btn-min-height",description:"Minimum button height — 42px (--global-spacing-sizing-42px)"},{name:"--btn-border-radius",description:"Corner radius 4px — --global-spacing-radius-4px"},{name:"--btn-padding-small",description:"Small padding — 8px vertical / 12px horizontal"},{name:"--btn-padding-default",description:"Default padding — 12px vertical / 16px horizontal"},{name:"--btn-padding-large",description:"Large padding — 16px vertical / 20px horizontal"},{name:"--btn-gap-small",description:"Gap between elements — small (6px)"},{name:"--btn-gap-default",description:"Gap between elements — default (8px)"},{name:"--btn-gap-large",description:"Gap between elements — large (10px)"},{name:"--btn-icon-only-size-{size}",description:"Icon-only button dimensions (36px / 44px / 52px)"},{name:"--btn-icon-size-{size}",description:"Icon size (14px / 16px / 18px)"},{name:"--btn-transition-duration",description:"Transition speed — 160ms (--global-animation-duration-fast)"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Ghost Button Colours",description:"Component-specific colour tokens for the Ghost Button (--btn-ghost-*):",tokens:[{name:"--btn-ghost-bg",description:"Default background — --global-color-primary-blue-blue-50 (#F9F9FE)"},{name:"--btn-ghost-bg-hover",description:"Hover / active background — --global-color-base-white (#FFFFFF)"},{name:"--btn-ghost-bg-active",description:"Active (pressed) background — same as hover (#FFFFFF)"},{name:"--btn-ghost-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-ghost-color",description:"Default text / icon colour — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-ghost-color-hover",description:"Hover / active text colour — --global-color-base-black (#1C1C1C)"},{name:"--btn-ghost-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-ghost-border-color",description:"Default border — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-ghost-border-color-hover",description:"Hover / active border — --global-color-base-black (#1C1C1C)"},{name:"--btn-ghost-border-color-focus",description:"Focus border — --global-color-primary-blue-blue-300 (#95A0E5)"},{name:"--btn-ghost-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--btn-ghost-shadow-hover",description:"Hover / active shadow — 2px 2px 0 0 --global-color-base-black (#1C1C1C)"},{name:"--btn-ghost-border-width-default",description:"Default border width — 1px (--global-spacing-stroke-1px)"},{name:"--btn-ghost-border-width-focus",description:"Focus border width — 2px (--global-spacing-stroke-2px)"},{name:"--btn-ghost-border-width-disabled",description:"Disabled border width — 2px (--global-spacing-stroke-2px)"},{name:"--btn-ghost-border-width-loading",description:"Loading border width — 0.5px (--global-spacing-stroke-0-5px)"},{name:"--btn-ghost-spinner-color",description:"Spinner ring colour — --global-color-primary-blue-blue-300 (#95A0E5)"},{name:"--btn-ghost-link-color",description:"Link variant default text — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-ghost-link-color-hover",description:"Link variant hover text — --brand-primary (#3776CE)"},{name:"--btn-ghost-link-color-disabled",description:"Link variant disabled text — --global-color-neutral-gray-300 (#D2D5DA)"}]}),e.jsx(i.CodeBlock,{children:`import { GhostButton } from './GhostButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Ghost variant (default) — bordered, blue-50 background
<GhostButton
  label="Label"
  showLeadingIcon leadingIcon={PersonIcon}
  showTrailingIcon trailingIcon={ArrowForwardIcon}
/>

// Link variant — text link, no border
<GhostButton variant="link" label="View details" showTrailingIcon trailingIcon={ArrowForwardIcon} />

// Extra-small size
<GhostButton size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />

// Small / Large
<GhostButton size="small" label="Small" showTrailingIcon trailingIcon={ArrowForwardIcon} />
<GhostButton size="large" label="Large" showTrailingIcon trailingIcon={ArrowForwardIcon} />

// Icon only — bordered
<GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="User profile" />

// Icon only — borderless
<GhostButton iconOnly borderless leadingIcon={PersonIcon} ariaLabel="User profile" />

// Loading
<GhostButton label="Saving…" loading />

// Disabled
<GhostButton label="Restricted" disabled />`}),e.jsxs(i.Principles,{children:[e.jsxs(i.PrincipleCard,{number:1,title:"Use for supporting, not primary, actions",children:['The Ghost Button belongs at the bottom of the button hierarchy. Reserve it for optional or non-critical actions (e.g. "View details", "Skip", "Export"). Pair it with a ',e.jsx("strong",{children:"filled Primary Button"})," to establish clear hierarchy."]}),e.jsx(i.PrincipleCard,{number:2,title:"Prefer trailing icons for navigation cues",children:"The right-arrow pattern (trailing icon) signals navigation or progression, which is the most common Ghost Button use case. Only add a leading icon when the icon adds specific meaning beyond decoration."}),e.jsxs(i.PrincipleCard,{number:3,title:"Icon-only requires an accessible label",children:["Always pass ",e.jsx("code",{children:"ariaLabel"})," when using ",e.jsx("code",{children:"iconOnly"}),". The icon alone is not sufficient for screen reader users. Example: ",e.jsx("code",{children:'ariaLabel="Edit record"'}),"."]})]}),e.jsx(i.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(qe,{variant:"filled",label:"Save"}),e.jsx(a,{label:"View details",showTrailingIcon:!0,trailingIcon:n})]}),label:"Pair with a primary action",description:"A filled Primary Button establishes the main action; the Ghost Button offers a secondary path without visual competition."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{label:"Save",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Submit",showTrailingIcon:!0,trailingIcon:n})]}),label:"Two Ghost Buttons as primary actions",description:"Don't use Ghost Buttons as the only actions in a workflow. Their low emphasis signals the action is optional, which may confuse users on critical flows."}}),e.jsx(i.Footer,{})]});k.__docgenInfo={description:"",methods:[],displayName:"GhostButtonDocs"};const ea={title:"Atoms/Buttons/Ghost Button",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(k,{})}},argTypes:{variant:{control:"select",options:["ghost","link"]},size:{control:"select",options:["extra-small","small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download","Edit"],mapping:{None:void 0,Person:l,Check:_,Add:z,Download:_e,Edit:T}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:n,Check:_,Add:z}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},borderless:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},v={render:()=>e.jsx(k,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},g={args:{variant:"ghost",label:"Label",size:"default",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n}},b={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)",flexWrap:"wrap"},children:[e.jsx(a,{size:"extra-small",label:"XSmall",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Small",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Default",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Large",showTrailingIcon:!0,trailingIcon:n})]}),parameters:{controls:{disable:!0}}},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"default",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:z,size:"default",ariaLabel:"Add"}),e.jsx(a,{iconOnly:!0,leadingIcon:T,size:"default",ariaLabel:"Edit"})]}),parameters:{controls:{disable:!0}}},I={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,size:"default",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,size:"large",ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},x={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{variant:"link",size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n})]}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"extra-small"}),e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"})]}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled",showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:l,disabled:!0,ariaLabel:"User (disabled)"}),e.jsx(a,{variant:"link",label:"Disabled link",showTrailingIcon:!0,trailingIcon:n,disabled:!0})]}),parameters:{controls:{disable:!0}}},s=c=>e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",paddingBottom:"var(--global-spacing-sizing-4px)",display:"block"},children:c}),t=c=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:c}),y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-28px)",padding:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("div",{children:[s("Ghost — Trailing Icon (all sizes)"),t(e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n})]}))]}),e.jsxs("div",{children:[s("Ghost — Leading + Label + Trailing (all sizes)"),t(e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n})]}))]}),e.jsxs("div",{children:[s("Ghost — Icon Only (bordered, all sizes)"),t(e.jsxs(e.Fragment,{children:[e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"default",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,size:"large",ariaLabel:"User"})]}))]}),e.jsxs("div",{children:[s("Ghost — Icon Only (borderless, all sizes)"),t(e.jsxs(e.Fragment,{children:[e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,size:"default",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,size:"large",ariaLabel:"User"})]}))]}),e.jsxs("div",{children:[s("Link — All Sizes"),t(e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"link",size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n})]}))]}),e.jsxs("div",{children:[s("States (default size)"),t(e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Default",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{label:"Loading",loading:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:l,disabled:!0,ariaLabel:"User (disabled)"}),e.jsx(a,{iconOnly:!0,loading:!0,leadingIcon:l,ariaLabel:"Loading"}),e.jsx(a,{variant:"link",label:"Link",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",label:"Disabled",showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:l,ariaLabel:"User (borderless)"})]}))]})]}),parameters:{layout:"padded",controls:{disable:!0}}};var O,A,D;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <GhostButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(D=(A=v.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var U,S,P,C,E;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    label: 'Label',
    size: 'default',
    showLeadingIcon: true,
    leadingIcon: PersonIcon,
    showTrailingIcon: true,
    trailingIcon: ArrowForwardIcon
  }
}`,...(P=(S=g.parameters)==null?void 0:S.docs)==null?void 0:P.source},description:{story:"Default ghost button — bordered, light blue-50 background, with leading + trailing icons.\nMatches the Figma `special=alt` default state.",...(E=(C=g.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var W,V,q,M,N;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)',
    flexWrap: 'wrap'
  }}>
      <GhostButton size="extra-small" label="XSmall" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="small" label="Small" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="default" label="Default" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="large" label="Large" showTrailingIcon trailingIcon={ArrowForwardIcon} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(V=b.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:"All four sizes of the ghost variant, with trailing icon.",...(N=(M=b.parameters)==null?void 0:M.docs)==null?void 0:N.description}}};var R,H,X,$,J;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <GhostButton size="extra-small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="default" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="large" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(H=p.parameters)==null?void 0:H.docs)==null?void 0:X.source},description:{story:"With both leading and trailing icons across all sizes.",...(J=($=p.parameters)==null?void 0:$.docs)==null?void 0:J.description}}};var K,Q,Y,Z,ee;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <GhostButton size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="default" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="large" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:Y.source},description:{story:"Trailing icon only (no leading icon) across all sizes.",...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,ne,le,ie,oe;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <GhostButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={PersonIcon} size="default" ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={AddIcon} size="default" ariaLabel="Add" />
      <GhostButton iconOnly leadingIcon={EditIcon} size="default" ariaLabel="Edit" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:le.source},description:{story:"Icon-only — bordered square buttons across all sizes.",...(oe=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:oe.description}}};var re,se,te,ce,de;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
      <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="default" ariaLabel="User" />
      <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="large" ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(se=I.parameters)==null?void 0:se.docs)==null?void 0:te.source},description:{story:"Icon-only borderless — icon with no border or background (Figma special=icon-only, no stroke).",...(de=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var ge,be,pe,ue,he;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <GhostButton variant="link" size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton variant="link" size="small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton variant="link" size="default" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton variant="link" size="large" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pe=(be=x.parameters)==null?void 0:be.docs)==null?void 0:pe.source},description:{story:"Link variant — text link style, no border or background. Matches Figma `special=link-only`.",...(he=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:he.description}}};var Ie,xe,me,we,ye;m.parameters={...m.parameters,docs:{...(Ie=m.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <GhostButton label="Loading…" loading size="extra-small" />
      <GhostButton label="Loading…" loading size="small" />
      <GhostButton label="Loading…" loading />
      <GhostButton label="Loading…" loading size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(xe=m.parameters)==null?void 0:xe.docs)==null?void 0:me.source},description:{story:"Loading state — spinner replaces leading icon.",...(ye=(we=m.parameters)==null?void 0:we.docs)==null?void 0:ye.description}}};var fe,ve,ze,Le,je;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <GhostButton label="Disabled" disabled />
      <GhostButton label="Disabled" showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <GhostButton label="Disabled" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <GhostButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User (disabled)" />
      <GhostButton variant="link" label="Disabled link" showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ze=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:ze.source},description:{story:"Disabled state — explicit gray colours, no opacity reduction.",...(je=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:je.description}}};var Te,ke,Be,Ge,Fe;y.parameters={...y.parameters,docs:{...(Te=y.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-28px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>

      {/* ── Ghost: label only + trailing ── */}
      <div>
        {label('Ghost — Trailing Icon (all sizes)')}
        {row(<>
          <GhostButton size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton size="small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton size="default" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton size="large" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
        </>)}
      </div>

      {/* ── Ghost: leading + label + trailing ── */}
      <div>
        {label('Ghost — Leading + Label + Trailing (all sizes)')}
        {row(<>
          <GhostButton size="extra-small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton size="small" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton size="default" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton size="large" label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
        </>)}
      </div>

      {/* ── Ghost: icon-only bordered ── */}
      <div>
        {label('Ghost — Icon Only (bordered, all sizes)')}
        {row(<>
          <GhostButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
          <GhostButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
          <GhostButton iconOnly leadingIcon={PersonIcon} size="default" ariaLabel="User" />
          <GhostButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
        </>)}
      </div>

      {/* ── Ghost: icon-only borderless ── */}
      <div>
        {label('Ghost — Icon Only (borderless, all sizes)')}
        {row(<>
          <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
          <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="small" ariaLabel="User" />
          <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="default" ariaLabel="User" />
          <GhostButton iconOnly borderless leadingIcon={PersonIcon} size="large" ariaLabel="User" />
        </>)}
      </div>

      {/* ── Link variant ── */}
      <div>
        {label('Link — All Sizes')}
        {row(<>
          <GhostButton variant="link" size="extra-small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton variant="link" size="small" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton variant="link" size="default" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton variant="link" size="large" label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
        </>)}
      </div>

      {/* ── States matrix ── */}
      <div>
        {label('States (default size)')}
        {row(<>
          {/* Ghost — default */}
          <GhostButton label="Default" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
          {/* Ghost — disabled */}
          <GhostButton label="Disabled" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
          {/* Ghost — loading */}
          <GhostButton label="Loading" loading />
          {/* Ghost icon-only — default */}
          <GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
          {/* Ghost icon-only — disabled */}
          <GhostButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User (disabled)" />
          {/* Ghost icon-only — loading */}
          <GhostButton iconOnly loading leadingIcon={PersonIcon} ariaLabel="Loading" />
          {/* Link — default */}
          <GhostButton variant="link" label="Link" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          {/* Link — disabled */}
          <GhostButton variant="link" label="Disabled" showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
          {/* Borderless icon */}
          <GhostButton iconOnly borderless leadingIcon={PersonIcon} ariaLabel="User (borderless)" />
        </>)}
      </div>

    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(Be=(ke=y.parameters)==null?void 0:ke.docs)==null?void 0:Be.source},description:{story:`Complete variant matrix — all sizes, all types, all states.
Mirrors the full Figma Ghost Button component set.`,...(Fe=(Ge=y.parameters)==null?void 0:Ge.docs)==null?void 0:Fe.description}}};const aa=["Documentation","Default","Sizes","WithLeadingIcon","WithTrailingIcon","IconOnly","IconOnlyBorderless","LinkVariant","Loading","Disabled","AllVariants"];export{y as AllVariants,g as Default,w as Disabled,v as Documentation,h as IconOnly,I as IconOnlyBorderless,x as LinkVariant,m as Loading,b as Sizes,p as WithLeadingIcon,u as WithTrailingIcon,aa as __namedExportsOrder,ea as default};
