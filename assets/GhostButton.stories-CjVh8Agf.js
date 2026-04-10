import{j as e}from"./iframe-BiVv4zEx.js";import{G as a}from"./GhostButton-Cp7fbeKG.js";import{D as l}from"./DocsTemplate-B8XIGj2p.js";import{P as i}from"./Person-AfOzKqs_.js";import{A as n}from"./ArrowForward-DjkrHZoF.js";import{A as m}from"./Add-Ck2SvQRP.js";import{D as Le}from"./Download-DzCHhp5B.js";import{E as y}from"./Edit-Bdeqykab.js";import{B as ve}from"./Button-2VN0zMBV.js";import{C as L}from"./Check-Dh2DgBS3.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-BaRO49ec.js";const z=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"Ghost Button",subtitle:"A low-emphasis interactive control with a transparent ghost style for supporting actions"}),e.jsxs(l.BodyText,{children:["The ",e.jsx("strong",{children:"Ghost Button"})," is a low-hierarchy action control with two visual variants — ",e.jsx("strong",{children:"ghost"})," (bordered, blue-50 background) and ",e.jsx("strong",{children:"link"}),"(text link, no border or background). Four sizes are supported: extra-small, small, default, and large. All styling is driven by the token system with no hardcoded values."]}),e.jsxs(l.Section,{title:"Component Anatomy",children:[e.jsxs(l.BodyText,{children:["The Ghost Button shares structural layout with the Primary Button but uses its own",e.jsx("code",{children:" --btn-ghost-*"})," colour token family. The diagram below maps each visible part to its controlling design token."]}),e.jsx(l.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n,size:"large"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"large",ariaLabel:"User"})]}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
--btn-ghost-bg (--global-color-primary-blue-blue-50 / #F9F9FE)
--btn-ghost-border-color (--global-color-secondary-blue-gray / #61607C)
--btn-ghost-border-color-hover (--global-color-base-black / #1C1C1C)
--btn-ghost-border-width-default (--global-spacing-stroke-1px)
--btn-ghost-shadow-hover (2px 2px 0 0 #6171DF — hover & active only)
--btn-padding-{size}`,description:"Outer button shell. W: HUG, H: HUG. Min-W: 80px. Corner radius: 4px. Default fill: color/primary/blue/blue-50 (#F9F9FE), 1px border secondary/blue-gray (#61607C). On hover/active, border becomes base/black (#1C1C1C), bg shifts to base/white (#FFFFFF) with a 2×2 drop shadow in base/black (#1C1C1C)."},{id:2,name:"Leading Icon",token:"--btn-icon-size-{size} (16px default / 14px small / 18px large)",description:"Optional icon preceding the label. Inherits the current text colour (blue-gray at rest, black on hover). Controlled by showLeadingIcon + leadingIcon props."},{id:3,name:"Label",token:`--btn-font-family (--brand-font-primary / F37 Ginger Pro)
--btn-font-size-{size} (16px default)
--btn-font-weight (--global-type-weight-light / 300)
--btn-ghost-color (--global-color-secondary-blue-gray / #61607C)`,description:"Button label text. Uses F37 Ginger Pro Light at 16px with 20px line-height. Resting colour: #61607C (blue-gray). On hover/active: #1C1C1C (black)."},{id:4,name:"Trailing Icon",token:"--btn-icon-size-{size} (16px default / 14px small / 18px large)",description:"Optional icon after the label. Inherits the current text colour, same as leading icon. Controlled by showTrailingIcon + trailingIcon props."}]})]}),e.jsxs(l.Section,{title:"Sizes",children:[e.jsx(l.BodyText,{children:"Four sizes scale the Ghost Button for different density contexts. All sizes support leading icons, trailing icons, icon-only, and the link variant."}),e.jsx(l.SizeDemo,{rows:[{label:"Extra Small",sublabel:"Ultra-compact toolbars, badges, chips",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"extra-small",iconOnly:!0,leadingIcon:i,ariaLabel:"User"}),e.jsx(a,{variant:"link",size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n})]})},{label:"Small",sublabel:"Dense toolbars, inline actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",iconOnly:!0,leadingIcon:i,ariaLabel:"User"}),e.jsx(a,{variant:"link",size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",iconOnly:!0,leadingIcon:i,ariaLabel:"User"}),e.jsx(a,{variant:"link",size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n})]})},{label:"Large",sublabel:"Prominent or hero-area supporting actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",iconOnly:!0,leadingIcon:i,ariaLabel:"User"}),e.jsx(a,{variant:"link",size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n})]})}]})]}),e.jsxs(l.Section,{title:"Optional Elements",children:[e.jsx(l.BodyText,{children:"Leading icon, trailing icon, and icon-only mode are all independently composable via props."}),e.jsx(l.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:i,size:"small"}),e.jsx(a,{label:"Button w/ leading icon",showLeadingIcon:!0,leadingIcon:i}),e.jsx(a,{label:"Download",showLeadingIcon:!0,leadingIcon:Le,size:"large"})]})}),e.jsx(l.Subsection,{title:"With Trailing Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,size:"large"})]})}),e.jsx(l.Subsection,{title:"Icon Only (Bordered)",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:m,ariaLabel:"Add"}),e.jsx(a,{iconOnly:!0,leadingIcon:y,ariaLabel:"Edit"})]})}),e.jsxs(l.Subsection,{title:"Icon Only (Borderless)",children:[e.jsxs(l.BodyText,{children:["Add ",e.jsx("code",{children:"borderless"})," prop alongside ",e.jsx("code",{children:"iconOnly"})," for a no-border, no-background icon button. Matches Figma ",e.jsx("code",{children:"special=icon-only"})," (no stroke)."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,size:"large",ariaLabel:"User"})]})]}),e.jsxs(l.Subsection,{title:"Link Variant",children:[e.jsxs(l.BodyText,{children:["Use ",e.jsx("code",{children:'variant="link"'})," for a text link style — no border or background. Matches Figma ",e.jsx("code",{children:"special=link-only"}),". On hover, text switches to the brand primary colour with an underline."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{variant:"link",size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n})]})]})]}),e.jsxs(l.Section,{title:"States",children:[e.jsxs(l.Subsection,{title:"Loading",children:[e.jsxs(l.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading. The border uses a lighter 0.5px stroke and the spinner uses the blue-300 colour at 0.6 opacity."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"}),e.jsx(a,{iconOnly:!0,loading:!0,ariaLabel:"Loading"})]})]}),e.jsxs(l.Subsection,{title:"Disabled",children:[e.jsx(l.BodyText,{children:"Disabled ghost buttons use explicit gray colours per the Figma spec — no opacity reduction. They block all interactions and use a 2px border with gray-200."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{label:"Label",disabled:!0}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:i,disabled:!0,ariaLabel:"User"})]})]})]}),e.jsx(l.TokenTable,{title:"Design Tokens — Layout & Spacing",description:"Ghost Button reuses the shared button layout tokens:",tokens:[{name:"--btn-min-width",description:"Minimum button width — 80px (--global-spacing-sizing-80px)"},{name:"--btn-min-height",description:"Minimum button height — 42px (--global-spacing-sizing-42px)"},{name:"--btn-border-radius",description:"Corner radius 4px — --global-spacing-radius-4px"},{name:"--btn-padding-small",description:"Small padding — 8px vertical / 12px horizontal"},{name:"--btn-padding-default",description:"Default padding — 12px vertical / 16px horizontal"},{name:"--btn-padding-large",description:"Large padding — 16px vertical / 20px horizontal"},{name:"--btn-gap-small",description:"Gap between elements — small (6px)"},{name:"--btn-gap-default",description:"Gap between elements — default (8px)"},{name:"--btn-gap-large",description:"Gap between elements — large (10px)"},{name:"--btn-icon-only-size-{size}",description:"Icon-only button dimensions (36px / 44px / 52px)"},{name:"--btn-icon-size-{size}",description:"Icon size (14px / 16px / 18px)"},{name:"--btn-transition-duration",description:"Transition speed — 160ms (--global-animation-duration-fast)"}]}),e.jsx(l.TokenTable,{title:"Design Tokens — Ghost Button Colours",description:"Component-specific colour tokens for the Ghost Button (--btn-ghost-*):",tokens:[{name:"--btn-ghost-bg",description:"Default background — --global-color-primary-blue-blue-50 (#F9F9FE)"},{name:"--btn-ghost-bg-hover",description:"Hover / active background — --global-color-base-white (#FFFFFF)"},{name:"--btn-ghost-bg-active",description:"Active (pressed) background — same as hover (#FFFFFF)"},{name:"--btn-ghost-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-ghost-color",description:"Default text / icon colour — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-ghost-color-hover",description:"Hover / active text colour — --global-color-base-black (#1C1C1C)"},{name:"--btn-ghost-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-ghost-border-color",description:"Default border — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-ghost-border-color-hover",description:"Hover / active border — --global-color-base-black (#1C1C1C)"},{name:"--btn-ghost-border-color-focus",description:"Focus border — --global-color-primary-blue-blue-300 (#95A0E5)"},{name:"--btn-ghost-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--btn-ghost-shadow-hover",description:"Hover / active shadow — 2px 2px 0 0 --global-color-base-black (#1C1C1C)"},{name:"--btn-ghost-border-width-default",description:"Default border width — 1px (--global-spacing-stroke-1px)"},{name:"--btn-ghost-border-width-focus",description:"Focus border width — 2px (--global-spacing-stroke-2px)"},{name:"--btn-ghost-border-width-disabled",description:"Disabled border width — 2px (--global-spacing-stroke-2px)"},{name:"--btn-ghost-border-width-loading",description:"Loading border width — 0.5px (--global-spacing-stroke-0-5px)"},{name:"--btn-ghost-spinner-color",description:"Spinner ring colour — --global-color-primary-blue-blue-300 (#95A0E5)"},{name:"--btn-ghost-link-color",description:"Link variant default text — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-ghost-link-color-hover",description:"Link variant hover text — --brand-primary (#3776CE)"},{name:"--btn-ghost-link-color-disabled",description:"Link variant disabled text — --global-color-neutral-gray-300 (#D2D5DA)"}]}),e.jsx(l.CodeBlock,{children:`import { GhostButton } from './GhostButton';
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
<GhostButton label="Restricted" disabled />`}),e.jsxs(l.Principles,{children:[e.jsxs(l.PrincipleCard,{number:1,title:"Use for supporting, not primary, actions",children:['The Ghost Button belongs at the bottom of the button hierarchy. Reserve it for optional or non-critical actions (e.g. "View details", "Skip", "Export"). Pair it with a ',e.jsx("strong",{children:"filled Primary Button"})," to establish clear hierarchy."]}),e.jsx(l.PrincipleCard,{number:2,title:"Prefer trailing icons for navigation cues",children:"The right-arrow pattern (trailing icon) signals navigation or progression, which is the most common Ghost Button use case. Only add a leading icon when the icon adds specific meaning beyond decoration."}),e.jsxs(l.PrincipleCard,{number:3,title:"Icon-only requires an accessible label",children:["Always pass ",e.jsx("code",{children:"ariaLabel"})," when using ",e.jsx("code",{children:"iconOnly"}),". The icon alone is not sufficient for screen reader users. Example: ",e.jsx("code",{children:'ariaLabel="Edit record"'}),"."]})]}),e.jsx(l.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(ve,{variant:"filled",label:"Save"}),e.jsx(a,{label:"View details",showTrailingIcon:!0,trailingIcon:n})]}),label:"Pair with a primary action",description:"A filled Primary Button establishes the main action; the Ghost Button offers a secondary path without visual competition."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{label:"Save",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Submit",showTrailingIcon:!0,trailingIcon:n})]}),label:"Two Ghost Buttons as primary actions",description:"Don't use Ghost Buttons as the only actions in a workflow. Their low emphasis signals the action is optional, which may confuse users on critical flows."}}),e.jsx(l.Footer,{})]});z.__docgenInfo={description:"",methods:[],displayName:"GhostButtonDocs"};const Se={title:"Atoms/Buttons/Ghost Button",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(z,{})}},argTypes:{variant:{control:"select",options:["ghost","link"]},size:{control:"select",options:["extra-small","small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download","Edit"],mapping:{None:void 0,Person:i,Check:L,Add:m,Download:Le,Edit:y}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:n,Check:L,Add:m}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},borderless:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},x={render:()=>e.jsx(z,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},s={args:{variant:"ghost",label:"Label",size:"default",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}},t={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)",flexWrap:"wrap"},children:[e.jsx(a,{size:"extra-small",label:"XSmall",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Small",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Default",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Large",showTrailingIcon:!0,trailingIcon:n})]}),parameters:{controls:{disable:!0}}},c={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n})]}),parameters:{controls:{disable:!0}}},d={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"default",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:m,size:"default",ariaLabel:"Add"}),e.jsx(a,{iconOnly:!0,leadingIcon:y,size:"default",ariaLabel:"Edit"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,size:"default",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,size:"large",ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{variant:"link",size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"extra-small"}),e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled",showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:i,disabled:!0,ariaLabel:"User (disabled)"}),e.jsx(a,{variant:"link",label:"Disabled link",showTrailingIcon:!0,trailingIcon:n,disabled:!0})]}),parameters:{controls:{disable:!0}}},o=w=>e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",paddingBottom:"var(--global-spacing-sizing-4px)",display:"block"},children:w}),r=w=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:w}),I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-28px)",padding:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("div",{children:[o("Ghost — Trailing Icon (all sizes)"),r(e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n})]}))]}),e.jsxs("div",{children:[o("Ghost — Leading + Label + Trailing (all sizes)"),r(e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n})]}))]}),e.jsxs("div",{children:[o("Ghost — Icon Only (bordered, all sizes)"),r(e.jsxs(e.Fragment,{children:[e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"default",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,size:"large",ariaLabel:"User"})]}))]}),e.jsxs("div",{children:[o("Ghost — Icon Only (borderless, all sizes)"),r(e.jsxs(e.Fragment,{children:[e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,size:"extra-small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,size:"default",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,size:"large",ariaLabel:"User"})]}))]}),e.jsxs("div",{children:[o("Link — All Sizes"),r(e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"link",size:"extra-small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"small",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"default",label:"Label",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",size:"large",label:"Label",showTrailingIcon:!0,trailingIcon:n})]}))]}),e.jsxs("div",{children:[o("States (default size)"),r(e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Default",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:i,showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{label:"Loading",loading:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:i,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:i,disabled:!0,ariaLabel:"User (disabled)"}),e.jsx(a,{iconOnly:!0,loading:!0,leadingIcon:i,ariaLabel:"Loading"}),e.jsx(a,{variant:"link",label:"Link",showTrailingIcon:!0,trailingIcon:n}),e.jsx(a,{variant:"link",label:"Disabled",showTrailingIcon:!0,trailingIcon:n,disabled:!0}),e.jsx(a,{iconOnly:!0,borderless:!0,leadingIcon:i,ariaLabel:"User (borderless)"})]}))]})]}),parameters:{layout:"padded",controls:{disable:!0}}};var v,j,f;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <GhostButtonDocs />,
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
}`,...(f=(j=x.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var T,G,B,k,F;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    label: 'Label',
    size: 'default',
    showLeadingIcon: true,
    leadingIcon: PersonIcon,
    showTrailingIcon: true,
    trailingIcon: ArrowForwardIcon
  }
}`,...(B=(G=s.parameters)==null?void 0:G.docs)==null?void 0:B.source},description:{story:"Default ghost button — bordered, light blue-50 background, with leading + trailing icons.\nMatches the Figma `special=alt` default state.",...(F=(k=s.parameters)==null?void 0:k.docs)==null?void 0:F.description}}};var O,A,D,U,P;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(A=t.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:"All four sizes of the ghost variant, with trailing icon.",...(P=(U=t.parameters)==null?void 0:U.docs)==null?void 0:P.description}}};var S,C,W,E,H;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(W=(C=c.parameters)==null?void 0:C.docs)==null?void 0:W.source},description:{story:"With both leading and trailing icons across all sizes.",...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.description}}};var M,V,N,R,_;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(N=(V=d.parameters)==null?void 0:V.docs)==null?void 0:N.source},description:{story:"Trailing icon only (no leading icon) across all sizes.",...(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.description}}};var q,X,J,K,Q;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(X=g.parameters)==null?void 0:X.docs)==null?void 0:J.source},description:{story:"Icon-only — bordered square buttons across all sizes.",...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var Y,Z,$,ee,ae;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"Icon-only borderless — icon with no border or background (Figma special=icon-only, no stroke).",...(ae=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var ne,ie,le,oe,re;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:"Link variant — text link style, no border or background. Matches Figma `special=link-only`.",...(re=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:re.description}}};var se,te,ce,de,ge;u.parameters={...u.parameters,docs:{...(se=u.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(te=u.parameters)==null?void 0:te.docs)==null?void 0:ce.source},description:{story:"Loading state — spinner replaces leading icon.",...(ge=(de=u.parameters)==null?void 0:de.docs)==null?void 0:ge.description}}};var be,pe,ue,he,Ie;h.parameters={...h.parameters,docs:{...(be=h.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ue=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:"Disabled state — explicit gray colours, no opacity reduction.",...(Ie=(he=h.parameters)==null?void 0:he.docs)==null?void 0:Ie.description}}};var xe,me,we,ye,ze;I.parameters={...I.parameters,docs:{...(xe=I.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(we=(me=I.parameters)==null?void 0:me.docs)==null?void 0:we.source},description:{story:`Complete variant matrix — all sizes, all types, all states.
Mirrors the full Figma Ghost Button component set.`,...(ze=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:ze.description}}};const Ce=["Documentation","Default","Sizes","WithLeadingIcon","WithTrailingIcon","IconOnly","IconOnlyBorderless","LinkVariant","Loading","Disabled","AllVariants"];export{I as AllVariants,s as Default,h as Disabled,x as Documentation,g as IconOnly,b as IconOnlyBorderless,p as LinkVariant,u as Loading,t as Sizes,c as WithLeadingIcon,d as WithTrailingIcon,Ce as __namedExportsOrder,Se as default};
