import{j as e}from"./iframe-CWZJAAWh.js";import{D as o}from"./DocsTemplate-COsuEub-.js";import{A as n,P as i}from"./Person-C2zz_6Zt.js";import{D as Ie,A as I}from"./Download-DQHOujWh.js";import{E as f}from"./Edit-Bj6mFwbJ.js";import{B as _e}from"./Button-BgcuLnMv.js";import{C as T}from"./Check-BIRdXR9s.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-xMSkgsP2.js";const l={"ghost-btn":"_ghost-btn_v8i0p_20","ghost-btn--disabled":"_ghost-btn--disabled_v8i0p_73","ghost-btn--loading":"_ghost-btn--loading_v8i0p_113","ghost-btn--small":"_ghost-btn--small_v8i0p_120","ghost-btn--large":"_ghost-btn--large_v8i0p_127","ghost-btn--icon-only":"_ghost-btn--icon-only_v8i0p_135","ghost-btn--full-width":"_ghost-btn--full-width_v8i0p_153","ghost-btn__icon":"_ghost-btn__icon_v8i0p_158","ghost-btn__icon-svg":"_ghost-btn__icon-svg_v8i0p_165","ghost-btn__label":"_ghost-btn__label_v8i0p_184","ghost-btn__spinner":"_ghost-btn__spinner_v8i0p_191","ghost-btn-spin":"_ghost-btn-spin_v8i0p_1"},a=({label:z="Label",size:ye="default",type:we="button",leadingIcon:x,showLeadingIcon:fe=!1,trailingIcon:j,showTrailingIcon:ve=!1,iconOnly:r=!1,loading:s=!1,disabled:y=!1,fullWidth:ze=!1,onClick:je,className:Le="",ariaLabel:L})=>{const Te=[l["ghost-btn"],l[`ghost-btn--${ye}`],r?l["ghost-btn--icon-only"]:"",s?l["ghost-btn--loading"]:"",y?l["ghost-btn--disabled"]:"",ze?l["ghost-btn--full-width"]:"",Le].filter(Boolean).join(" "),w=s,Be=fe&&x&&!w;return e.jsxs("button",{type:we,className:Te,onClick:!y&&!s?je:void 0,disabled:y||s,"aria-label":r?L??z:L,"aria-busy":s||void 0,children:[w&&e.jsx("span",{className:l["ghost-btn__spinner"],"aria-hidden":"true"}),Be&&e.jsx("span",{className:l["ghost-btn__icon"],"aria-hidden":"true",children:e.jsx(x,{className:l["ghost-btn__icon-svg"]})}),!r&&e.jsx("span",{className:l["ghost-btn__label"],children:z}),ve&&j&&!r&&e.jsx("span",{className:l["ghost-btn__icon"],"aria-hidden":"true",children:e.jsx(j,{className:l["ghost-btn__icon-svg"]})}),r&&!w&&x&&e.jsx("span",{className:l["ghost-btn__icon"],"aria-hidden":"true",children:e.jsx(x,{className:l["ghost-btn__icon-svg"]})})]})};a.__docgenInfo={description:`GhostButton — Low-emphasis interactive control with a ghost/outline style.

Uses the blue-periwinkle colour family (blue-50 background, blue-300 border,
blue-gray text). Designed for supporting actions that sit alongside stronger
Primary or Secondary buttons without competing for attention.

Supports 3 sizes (small / default / large), optional leading / trailing icons,
icon-only mode, and loading + disabled states.`,methods:[],displayName:"GhostButton",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed inside the button",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered before the label"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered after the label"},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the trailing icon",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Render as an icon-only button (no label)",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full-width button",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for icon-only buttons"}}};const v=()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"Ghost Button",subtitle:"A low-emphasis interactive control with a transparent ghost style for supporting actions"}),e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"Ghost Button"})," is a low-hierarchy action control using the blue-periwinkle colour family — a light blue-50 background, blue-300 border, and blue-gray label. It is designed to sit alongside stronger ",e.jsx("em",{children:"Primary"})," (filled) and ",e.jsx("em",{children:"Secondary"}),"(sky-blue) buttons without competing for visual attention. All styling is driven by the token system with no hardcoded values."]}),e.jsxs(o.Section,{title:"Component Anatomy",children:[e.jsxs(o.BodyText,{children:["The Ghost Button shares structural layout with the Primary Button but uses its own",e.jsx("code",{children:" --btn-ghost-*"})," colour token family. The diagram below maps each visible part to its controlling design token."]}),e.jsx(o.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n,size:"large"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"large",ariaLabel:"User"})]}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
--btn-ghost-bg (--global-color-primary-blue-blue-50 / #F9F9FE)
--btn-ghost-border-color (--global-color-primary-blue-blue-300 / #95A0E5)
--btn-ghost-border-width-default (--global-spacing-stroke-1px)
--btn-ghost-shadow-hover (2px 2px 0 0 #6171DF — hover & active only)
--btn-padding-{size}`,description:"Outer button shell. W: HUG, H: HUG. Min-W: 80px. Corner radius: 4px. Default fill: color/primary/blue/blue-50 (#F9F9FE), 1px border color/primary/blue/blue-300 (#95A0E5). On hover/active, bg shifts to blue-100 with a 2×2 drop shadow in blue-400."},{id:2,name:"Leading Icon",token:"--btn-icon-size-{size} (16px default / 14px small / 18px large)",description:"Optional icon preceding the label. Inherits the current text colour (blue-gray at rest, black on hover). Controlled by showLeadingIcon + leadingIcon props."},{id:3,name:"Label",token:`--btn-font-family (--brand-font-primary / F37 Ginger Pro)
--btn-font-size-{size} (16px default)
--btn-font-weight (--global-type-weight-light / 300)
--btn-ghost-color (--global-color-secondary-blue-gray / #61607C)`,description:"Button label text. Uses F37 Ginger Pro Light at 16px with 20px line-height. Resting colour: #61607C (blue-gray). On hover/active: #1C1C1C (black)."},{id:4,name:"Trailing Icon",token:"--btn-icon-size-{size} (16px default / 14px small / 18px large)",description:"Optional icon after the label. Inherits the current text colour, same as leading icon. Controlled by showTrailingIcon + trailingIcon props."}]})]}),e.jsxs(o.Section,{title:"Sizes",children:[e.jsx(o.BodyText,{children:"Three sizes scale the Ghost Button for different density contexts. All sizes support leading icons, trailing icons, and icon-only mode."}),e.jsx(o.SizeDemo,{rows:[{label:"Small",sublabel:"Dense toolbars, inline actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",iconOnly:!0,leadingIcon:i,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",iconOnly:!0,leadingIcon:i,ariaLabel:"User"})]})},{label:"Large",sublabel:"Prominent or hero-area supporting actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",iconOnly:!0,leadingIcon:i,ariaLabel:"User"})]})}]})]}),e.jsxs(o.Section,{title:"Optional Elements",children:[e.jsx(o.BodyText,{children:"Leading icon, trailing icon, and icon-only mode are all independently composable via props."}),e.jsx(o.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:i,size:"small"}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:i}),e.jsx(a,{label:"Download",showLeadingIcon:!0,leadingIcon:Ie,size:"large"})]})}),e.jsx(o.Subsection,{title:"With Trailing Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,size:"large"})]})}),e.jsx(o.Subsection,{title:"Icon Only",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:I,ariaLabel:"Add"}),e.jsx(a,{iconOnly:!0,leadingIcon:f,ariaLabel:"Edit"})]})})]}),e.jsxs(o.Section,{title:"States",children:[e.jsxs(o.Subsection,{title:"Loading",children:[e.jsxs(o.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading. The border uses a lighter 0.5px stroke and the spinner uses the blue-300 colour at 0.6 opacity."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{iconOnly:!0,loading:!0,ariaLabel:"Loading"})]})]}),e.jsxs(o.Subsection,{title:"Disabled",children:[e.jsx(o.BodyText,{children:"Disabled ghost buttons use explicit gray colours per the Figma spec — no opacity reduction. They block all interactions and use a 2px border with gray-200."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{label:"Label",disabled:!0}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:i,disabled:!0,ariaLabel:"User"})]})]})]}),e.jsx(o.TokenTable,{title:"Design Tokens — Layout & Spacing",description:"Ghost Button reuses the shared button layout tokens:",tokens:[{name:"--btn-min-width",description:"Minimum button width — 80px (--global-spacing-sizing-80px)"},{name:"--btn-min-height",description:"Minimum button height — 42px (--global-spacing-sizing-42px)"},{name:"--btn-border-radius",description:"Corner radius 4px — --global-spacing-radius-4px"},{name:"--btn-padding-small",description:"Small padding — 8px vertical / 12px horizontal"},{name:"--btn-padding-default",description:"Default padding — 12px vertical / 16px horizontal"},{name:"--btn-padding-large",description:"Large padding — 16px vertical / 20px horizontal"},{name:"--btn-gap-small",description:"Gap between elements — small (6px)"},{name:"--btn-gap-default",description:"Gap between elements — default (8px)"},{name:"--btn-gap-large",description:"Gap between elements — large (10px)"},{name:"--btn-icon-only-size-{size}",description:"Icon-only button dimensions (36px / 44px / 52px)"},{name:"--btn-icon-size-{size}",description:"Icon size (14px / 16px / 18px)"},{name:"--btn-transition-duration",description:"Transition speed — 160ms (--global-animation-duration-fast)"}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Ghost Button Colours",description:"Component-specific colour tokens for the Ghost Button (--btn-ghost-*):",tokens:[{name:"--btn-ghost-bg",description:"Default background — --global-color-primary-blue-blue-50 (#F9F9FE)"},{name:"--btn-ghost-bg-hover",description:"Hover / active background — --global-color-primary-blue-blue-100 (#E7E9F4)"},{name:"--btn-ghost-bg-active",description:"Active (pressed) background — same as hover (#E7E9F4)"},{name:"--btn-ghost-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-ghost-color",description:"Default text / icon colour — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-ghost-color-hover",description:"Hover / active text colour — --global-color-base-black (#1C1C1C)"},{name:"--btn-ghost-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-ghost-border-color",description:"Default border — --global-color-primary-blue-blue-300 (#95A0E5)"},{name:"--btn-ghost-border-color-focus",description:"Focus border — --global-color-primary-blue-blue-300 (#95A0E5)"},{name:"--btn-ghost-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--btn-ghost-shadow-hover",description:"Hover / active shadow — 2px 2px 0 0 --global-color-primary-blue-blue-400 (#6171DF)"},{name:"--btn-ghost-border-width-default",description:"Default border width — 1px (--global-spacing-stroke-1px)"},{name:"--btn-ghost-border-width-focus",description:"Focus border width — 2px (--global-spacing-stroke-2px)"},{name:"--btn-ghost-border-width-disabled",description:"Disabled border width — 2px (--global-spacing-stroke-2px)"},{name:"--btn-ghost-border-width-loading",description:"Loading border width — 0.5px (--global-spacing-stroke-0-5px)"},{name:"--btn-ghost-spinner-color",description:"Spinner ring colour — --global-color-primary-blue-blue-300 (#95A0E5)"}]}),e.jsx(o.CodeBlock,{children:`import { GhostButton } from './GhostButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Default ghost button with leading and trailing icons
<GhostButton
  label="Label"
  showLeadingIcon
  leadingIcon={PersonIcon}
  showTrailingIcon
  trailingIcon={ArrowForwardIcon}
/>

// With leading and trailing icons
<GhostButton
  label="Label"
  showLeadingIcon
  leadingIcon={PersonIcon}
  showTrailingIcon
  trailingIcon={ArrowForwardIcon}
/>

// Small size
<GhostButton size="small" label="Compact" showTrailingIcon trailingIcon={ArrowForwardIcon} />

// Large size
<GhostButton size="large" label="Prominent" showTrailingIcon trailingIcon={ArrowForwardIcon} />

// Icon only (use ariaLabel for accessibility)
<GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="User profile" />

// Loading state
<GhostButton label="Saving…" loading />

// Disabled
<GhostButton label="Restricted" disabled />`}),e.jsxs(o.Principles,{children:[e.jsxs(o.PrincipleCard,{number:1,title:"Use for supporting, not primary, actions",children:['The Ghost Button belongs at the bottom of the button hierarchy. Reserve it for optional or non-critical actions (e.g. "View details", "Skip", "Export"). Pair it with a ',e.jsx("strong",{children:"filled Primary Button"})," to establish clear hierarchy."]}),e.jsx(o.PrincipleCard,{number:2,title:"Prefer trailing icons for navigation cues",children:"The right-arrow pattern (trailing icon) signals navigation or progression, which is the most common Ghost Button use case. Only add a leading icon when the icon adds specific meaning beyond decoration."}),e.jsxs(o.PrincipleCard,{number:3,title:"Icon-only requires an accessible label",children:["Always pass ",e.jsx("code",{children:"ariaLabel"})," when using ",e.jsx("code",{children:"iconOnly"}),". The icon alone is not sufficient for screen reader users. Example: ",e.jsx("code",{children:'ariaLabel="Edit record"'}),"."]})]}),e.jsx(o.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(_e,{variant:"filled",label:"Save"}),e.jsx(a,{label:"View details",showTrailingIcon:!0,trailingIcon:n})]}),label:"Pair with a primary action",description:"A filled Primary Button establishes the main action; the Ghost Button offers a secondary path without visual competition."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{label:"Save",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Submit",showTrailingIcon:!0,trailingIcon:n})]}),label:"Two Ghost Buttons as primary actions",description:"Don't use Ghost Buttons as the only actions in a workflow. Their low emphasis signals the action is optional, which may confuse users on critical flows."}}),e.jsx(o.Footer,{})]});v.__docgenInfo={description:"",methods:[],displayName:"GhostButtonDocs"};const We={title:"Atoms/Ghost Button",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(v,{})}},argTypes:{size:{control:"select",options:["small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download","Edit"],mapping:{None:void 0,Person:i,Check:T,Add:I,Download:Ie,Edit:f}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:n,Check:T,Add:I}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},t={render:()=>e.jsx(v,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},c={args:{label:"Label",size:"default",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}},d={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{size:"small",label:"Small",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Default",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Large",showTrailingIcon:!0,trailingIcon:n})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n,size:"small"}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n,size:"large"})]}),parameters:{controls:{disable:!0}}},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,size:"large"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:I,ariaLabel:"Add"}),e.jsx(a,{iconOnly:!0,leadingIcon:f,ariaLabel:"Edit"})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled",showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:i,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:"Label + Trailing Icon"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,size:"large"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:"Leading + Label + Trailing"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:[e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n,size:"small"}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n,size:"large"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:"Icon Only"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"large",ariaLabel:"User"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:"States"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:[e.jsx(a,{label:"Default",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Disabled",showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{label:"Loading",loading:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:i,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,disabled:!0,ariaLabel:"User (disabled)"}),e.jsx(a,{iconOnly:!0,loading:!0,ariaLabel:"Loading"})]})]})]}),parameters:{layout:"padded",controls:{disable:!0}}};var B,_,G,D,S;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(G=(_=t.parameters)==null?void 0:_.docs)==null?void 0:G.source},description:{story:"Full documentation page for the Ghost Button component.",...(S=(D=t.parameters)==null?void 0:D.docs)==null?void 0:S.description}}};var F,A,O,k,P;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'default',
    showLeadingIcon: true,
    leadingIcon: PersonIcon,
    showTrailingIcon: true,
    trailingIcon: ArrowForwardIcon
  }
}`,...(O=(A=c.parameters)==null?void 0:A.docs)==null?void 0:O.source},description:{story:"Default ghost button with leading and trailing icons.",...(P=(k=c.parameters)==null?void 0:k.docs)==null?void 0:P.description}}};var E,W,U,C,N;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <GhostButton size="small" label="Small" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="default" label="Default" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton size="large" label="Large" showTrailingIcon trailingIcon={ArrowForwardIcon} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(W=d.parameters)==null?void 0:W.docs)==null?void 0:U.source},description:{story:"All three sizes.",...(N=(C=d.parameters)==null?void 0:C.docs)==null?void 0:N.description}}};var q,V,R,M,H;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(V=g.parameters)==null?void 0:V.docs)==null?void 0:R.source},description:{story:"With a leading icon.",...(H=(M=g.parameters)==null?void 0:M.docs)==null?void 0:H.description}}};var $,J,K,Q,X;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"With a trailing icon only.",...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,ee,ae,ne;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <GhostButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
      <GhostButton iconOnly leadingIcon={AddIcon} ariaLabel="Add" />
      <GhostButton iconOnly leadingIcon={EditIcon} ariaLabel="Edit" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Icon-only ghost buttons — square, no label.",...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};var ie,oe,le,re,se;u.parameters={...u.parameters,docs:{...(ie=u.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <GhostButton label="Loading…" loading size="small" />
      <GhostButton label="Loading…" loading />
      <GhostButton label="Loading…" loading size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:le.source},description:{story:"Loading state — spinner replaces the leading icon area.",...(se=(re=u.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var te,ce,de,ge,pe;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
      <GhostButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"Disabled state — explicit gray colours per the Figma spec (no opacity reduction).",...(pe=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:pe.description}}};var be,ue,he,me,xe;m.parameters={...m.parameters,docs:{...(be=m.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-24px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>

      {/* Label + trailing icon — all sizes */}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-8px)'
    }}>
        <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
          Label + Trailing Icon
        </span>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-10px)'
      }}>
          <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
          <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
        </div>
      </div>

      {/* Leading + label + trailing — all sizes */}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-8px)'
    }}>
        <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
          Leading + Label + Trailing
        </span>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-10px)'
      }}>
          <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
          <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton label="Button w/ leading icon" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
        </div>
      </div>

      {/* Icon-only — all sizes */}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-8px)'
    }}>
        <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
          Icon Only
        </span>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-10px)'
      }}>
          <GhostButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
          <GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
          <GhostButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
        </div>
      </div>

      {/* States — default size */}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-8px)'
    }}>
        <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
          States
        </span>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-10px)'
      }}>
          <GhostButton label="Default" showTrailingIcon trailingIcon={ArrowForwardIcon} />
          <GhostButton label="Disabled" showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
          <GhostButton label="Loading" loading />
          <GhostButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
          <GhostButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User (disabled)" />
          <GhostButton iconOnly loading ariaLabel="Loading" />
        </div>
      </div>

    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(he=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:he.source},description:{story:"Full state matrix across all sizes and configurations.",...(xe=(me=m.parameters)==null?void 0:me.docs)==null?void 0:xe.description}}};const Ue=["Documentation","Default","Sizes","WithLeadingIcon","WithTrailingIcon","IconOnly","Loading","Disabled","AllVariants"];export{m as AllVariants,c as Default,h as Disabled,t as Documentation,b as IconOnly,u as Loading,d as Sizes,g as WithLeadingIcon,p as WithTrailingIcon,Ue as __namedExportsOrder,We as default};
