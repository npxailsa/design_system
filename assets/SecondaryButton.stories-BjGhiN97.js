import{j as a}from"./iframe-DXERnEz1.js";import{S as e}from"./SecondaryButton-lqyj438M.js";import{D as n}from"./DocsTemplate-BcEQml24.js";import{B as pa}from"./Button-DTUyqvFG.js";import{P as l}from"./Person-OnOuce8K.js";import{A as r}from"./ArrowForward-BRw40rye.js";import{C as f}from"./Check-go2Z14QY.js";import{A as j}from"./Add-DkKf7YGF.js";import{D as ua}from"./Download-Dw_qXtdi.js";import"./preload-helper-Dp1pzeXC.js";import"./ButtonBase-DT2HJ18m.js";import"./DefaultPropsProvider-FxoPPxPG.js";import"./index-Bx56xhV8.js";import"./useEventCallback-C3ef8NPV.js";import"./useForkRef-Q3R6IQbo.js";import"./createSvgIcon-CLtvtJ5j.js";import"./memoTheme-C8vhc3RX.js";const S=()=>a.jsxs(n,{children:[a.jsx(n.Header,{title:"Secondary Button",subtitle:"Blue-gray button for secondary and supporting actions across the interface"}),a.jsxs(n.BodyText,{children:["The ",a.jsx("strong",{children:"Secondary Button"})," uses the blue-gray colour family to provide a visually distinct alternative to the Primary Button. It supports two visual variants — ",a.jsx("em",{children:"solid"})," (dark blue-gray #304047 background, white text) and"," ",a.jsx("em",{children:"alt"})," (white background, blue-gray border and text) — across four sizes, with optional leading and trailing icons, an icon-only mode, and built-in loading and disabled states. All styling is driven by the ",a.jsx("code",{children:"--btn-secondary-*"})," ","token family with no hardcoded values."]}),a.jsxs(n.Section,{title:"MUI Foundation",children:[a.jsxs(n.BodyText,{children:["Built on MUI's ",a.jsx("strong",{children:"ButtonBase"})," — the same accessible, zero-style primitive used by every button in the design system. ",a.jsx("code",{children:"ButtonBase"})," provides keyboard activation, accessible ",a.jsx("code",{children:'role="button"'})," semantics, and supports any root element via the ",a.jsx("code",{children:"component"})," prop. All Secondary Button styles (blue-gray palette, border, padding, size) are layered on top via CSS Modules and the"," ",a.jsx("code",{children:"--btn-secondary-*"})," token family."]}),a.jsx(n.CodeBlock,{children:`// MUI base import
import ButtonBase from '@mui/material/ButtonBase';

// Root element of SecondaryButton:
<ButtonBase component="button" className={styles['secondary-btn']} disabled={disabled} onClick={onClick}>`})]}),a.jsxs(n.Section,{title:"Component Anatomy",children:[a.jsxs(n.BodyText,{children:["The Secondary Button shares the same structural anatomy as the Primary Button. The key difference is the colour treatment: it uses the blue-gray palette (",a.jsx("code",{children:"--brand-secondary"}),") instead of the primary blue palette."]}),a.jsx(n.Anatomy,{preview:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",alignItems:"center",justifyContent:"center"},children:[a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r})]}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
--btn-secondary-bg (--brand-secondary / #304047)
--btn-secondary-border-color (--brand-secondary-dark / #182024)
--btn-secondary-border-width (--global-spacing-stroke-1px)
--btn-padding-{size}`,description:"Outer button shell. Corner radius: 4px. Solid: dark blue-gray (#304047) bg, 1px dark border (#182024). Alt: white bg, 1px blue-gray (#304047) border. Hover: 2px border, 2×2px black drop shadow."},{id:2,name:"Leading Icon",token:`--btn-icon-size-{size} (14px / 16px / 18px)
--btn-secondary-color (--global-color-base-white)
--btn-secondary-alt-color (--brand-secondary / #304047)`,description:"Optional icon preceding the label. Solid: white (#FFFFFF). Alt: blue-gray (#304047), darkens to black (#1C1C1C) on hover."},{id:3,name:"Trailing Icon",token:`--btn-icon-size-{size} (14px / 16px / 18px)
--btn-secondary-color (--global-color-base-white)
--btn-secondary-alt-color (--brand-secondary / #304047)`,description:"Optional icon after the label. Solid: white. Alt: blue-gray, darkens to black on hover."},{id:4,name:"Label",token:`--btn-font-family (--brand-font-primary)
--btn-font-size-{size}
--btn-font-weight (--global-type-weight-light)
--btn-secondary-color / --btn-secondary-alt-color`,description:"Button text. Uses F37 Ginger Pro Light. Solid: white (#FFFFFF). Alt: blue-gray (#304047), shifts to black (#1C1C1C) on hover."}]})]}),a.jsxs(n.Section,{title:"Variants",children:[a.jsxs(n.BodyText,{children:["Two visual variants cover different background contexts. Use ",a.jsx("strong",{children:"solid"}),"for the default secondary action and ",a.jsx("strong",{children:"alt"})," when placed on a dark or coloured background where the solid would blend in."]}),a.jsxs(n.Subsection,{title:"Solid",children:[a.jsx(n.BodyText,{children:"Dark blue-gray (#304047) background with white text and a 1px dark-blue-gray (#182024) border. Hover lightens the background to #758084 and adds a 2×2px black drop shadow."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[a.jsx(e,{variant:"solid",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:"solid",label:"Label",showLeadingIcon:!0,leadingIcon:l}),a.jsx(e,{variant:"solid",label:"Label",showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:"solid",label:"Label"})]})]}),a.jsxs(n.Subsection,{title:"Alt",children:[a.jsx(n.BodyText,{children:"White (#FFFFFF) background with a 1px blue-gray (#304047) border and blue-gray text. Hover shifts background to blue-gray-50 (#D6D9DA), text to black (#1C1C1C), and adds a 2×2px black drop shadow."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[a.jsx(e,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:l}),a.jsx(e,{variant:"alt",label:"Label",showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:"alt",label:"Label"})]})]})]}),a.jsxs(n.Section,{title:"Sizes",children:[a.jsx(n.BodyText,{children:"Four sizes scale the button for different density contexts. All sizes support both variants and all optional elements."}),a.jsx(n.SizeDemo,{rows:[{label:"Extra Small",sublabel:"Compact inline actions, tags",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[a.jsx(e,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{size:"extra-small",variant:"alt",label:"Label"}),a.jsx(e,{size:"extra-small",iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]})},{label:"Small",sublabel:"Dense toolbars, inline actions",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[a.jsx(e,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{size:"small",variant:"alt",label:"Label"}),a.jsx(e,{size:"small",iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[a.jsx(e,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{size:"default",variant:"alt",label:"Label"}),a.jsx(e,{size:"default",iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]})},{label:"Large",sublabel:"Hero calls-to-action, prominent forms",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[a.jsx(e,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{size:"large",variant:"alt",label:"Label"}),a.jsx(e,{size:"large",iconOnly:!0,leadingIcon:l,ariaLabel:"User"})]})}]})]}),a.jsxs(n.Section,{title:"Optional Elements",children:[a.jsx(n.BodyText,{children:"Leading icon, trailing icon, and icon-only mode are all independently composable."}),a.jsx(n.Subsection,{title:"With Leading Icon",children:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:l,size:"small"}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:l}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:f,size:"large"})]})}),a.jsx(n.Subsection,{title:"With Trailing Icon",children:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"small"}),a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"large"})]})}),a.jsx(n.Subsection,{title:"Icon Only",children:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[a.jsx(e,{iconOnly:!0,leadingIcon:l,size:"extra-small",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:l,size:"small",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:l,size:"large",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:j,ariaLabel:"Add"})]})})]}),a.jsxs(n.Section,{title:"States",children:[a.jsxs(n.Subsection,{title:"Default",children:[a.jsx(n.BodyText,{children:"Resting state. Solid: dark blue-gray (#304047) bg, white text, 1px #182024 border. Alt: white bg, blue-gray (#304047) text and border."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Solid",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:"alt",label:"Alt",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r})]})]}),a.jsxs(n.Subsection,{title:"Loading",children:[a.jsxs(n.BodyText,{children:["Pass ",a.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading."]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Loading…",loading:!0,size:"small"}),a.jsx(e,{label:"Loading…",loading:!0}),a.jsx(e,{label:"Loading…",loading:!0,size:"large"}),a.jsx(e,{label:"Loading…",variant:"alt",loading:!0})]})]}),a.jsxs(n.Subsection,{title:"Disabled",children:[a.jsx(n.BodyText,{children:"Disabled state uses explicit gray colours per the Figma spec (no opacity reduction). Background: gray-100 (#F3F4F6), border & text: gray-400 (#9CA3AF)."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Label",disabled:!0}),a.jsx(e,{label:"Label",variant:"alt",disabled:!0}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r,disabled:!0}),a.jsx(e,{iconOnly:!0,leadingIcon:l,disabled:!0,ariaLabel:"User"})]})]})]}),a.jsx(n.TokenTable,{title:"Design Tokens — Solid Variant",description:"Colour tokens for the solid (filled dark blue-gray) variant:",tokens:[{name:"--btn-secondary-bg",description:"Default background — --brand-secondary (#304047)"},{name:"--btn-secondary-bg-hover",description:"Hover/active background — --brand-secondary-300 (#758084)"},{name:"--btn-secondary-color",description:"Default text & icon colour — --global-color-base-white (#FFFFFF)"},{name:"--btn-secondary-color-hover",description:"Hover text & icon colour — --global-color-base-white (#FFFFFF)"},{name:"--btn-secondary-border-color",description:"Default & hover border — --brand-secondary-dark (#182024)"},{name:"--btn-secondary-border-width",description:"Default border width — --global-spacing-stroke-1px (1px)"},{name:"--btn-secondary-border-width-hover",description:"Hover/active border width — --global-spacing-stroke-2px (2px)"},{name:"--btn-secondary-shadow-hover",description:"Hover/active drop shadow — 2px 2px 0px 0px --global-color-base-black (#1C1C1C)"}]}),a.jsx(n.TokenTable,{title:"Design Tokens — Alt Variant",description:"Colour tokens for the alt (white bg, blue-gray outline) variant:",tokens:[{name:"--btn-secondary-alt-bg",description:"Default background — --global-color-base-white (#FFFFFF)"},{name:"--btn-secondary-alt-bg-hover",description:"Hover/active background — --brand-secondary-50 (#D6D9DA)"},{name:"--btn-secondary-alt-color",description:"Default text & icon colour — --brand-secondary (#304047)"},{name:"--btn-secondary-alt-color-hover",description:"Hover text & icon colour — --global-color-base-black (#1C1C1C)"},{name:"--btn-secondary-alt-border-color",description:"Border colour (all states) — --brand-secondary (#304047)"},{name:"--btn-secondary-alt-shadow-hover",description:"Hover/active drop shadow — 2px 2px 0px 0px --global-color-base-black (#1C1C1C)"}]}),a.jsx(n.TokenTable,{title:"Design Tokens — Shared States",description:"Tokens shared across both variants for disabled and focus states:",tokens:[{name:"--btn-secondary-bg-disabled",description:"Disabled background — --global-color-neutral-gray-100 (#F3F4F6)"},{name:"--btn-secondary-color-disabled",description:"Disabled text & icon — --global-color-neutral-gray-400 (#9CA3AF)"},{name:"--btn-secondary-border-color-disabled",description:"Disabled border colour — --global-color-neutral-gray-400 (#9CA3AF)"},{name:"--btn-secondary-border-width-disabled",description:"Disabled border width (solid & icon-only) — --global-spacing-stroke-1px (1px)"},{name:"--btn-secondary-alt-border-width-disabled",description:"Disabled border width (alt variant only) — --global-spacing-stroke-2px (2px)"},{name:"--btn-secondary-border-width-focus",description:"Focus border width — --global-spacing-stroke-1px (1px, matches default)"}]}),a.jsx(n.CodeBlock,{children:`import { SecondaryButton } from './SecondaryButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Default solid variant (dark blue-gray bg, white text)
<SecondaryButton label="Cancel" />

// Alt variant (white bg, blue-gray text)
<SecondaryButton variant="alt" label="Cancel" />

// With icons
<SecondaryButton
  label="Label"
  showLeadingIcon
  leadingIcon={PersonIcon}
  showTrailingIcon
  trailingIcon={ArrowForwardIcon}
/>

// Extra-small size
<SecondaryButton size="extra-small" label="Compact" />

// Icon only
<SecondaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />

// Loading & disabled
<SecondaryButton label="Loading…" loading />
<SecondaryButton label="Restricted" disabled />

// Paired with Primary Button
<Button label="Save changes" />
<SecondaryButton label="Cancel" />`}),a.jsxs(n.Principles,{children:[a.jsx(n.PrincipleCard,{number:1,title:"Pair with a Primary Button",children:"The Secondary Button is designed to sit alongside a Primary (filled) Button. Use it for cancel, dismiss, or lower-priority actions within the same context."}),a.jsxs(n.PrincipleCard,{number:2,title:"Choose the right variant",children:["Use ",a.jsx("strong",{children:"solid"})," as the default. Switch to ",a.jsx("strong",{children:"alt"})," when placing the button on a dark background or when a white-background outline style is needed for visual contrast."]}),a.jsx(n.PrincipleCard,{number:3,title:"Match size to its sibling",children:"When pairing with a Primary Button, use the same size for both to maintain visual alignment and consistent touch targets."})]}),a.jsx(n.DosDonts,{doItem:{icon:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[a.jsx(pa,{variant:"filled",label:"Confirm"}),a.jsx(e,{label:"Cancel"})]}),label:"Clear hierarchy",description:"Pair a filled Primary with a Secondary for clear action hierarchy."},dontItem:{icon:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[a.jsx(e,{label:"Confirm"}),a.jsx(e,{label:"Cancel"})]}),label:"Two secondaries",description:"Don't use two Secondary Buttons side by side. It creates ambiguity about which action is primary."}}),a.jsx(n.RelatedLinks,{links:[{label:"Figma Library",href:"https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1"},{label:"Primary Button",href:"/?path=/story/atoms-buttons-primary-button--documentation"},{label:"Tertiary Button",href:"/?path=/story/atoms-buttons-tertiary-button--documentation"},{label:"Ghost Button",href:"/?path=/story/atoms-buttons-ghost-button--documentation"}]}),a.jsx(n.Footer,{})]});S.__docgenInfo={description:"",methods:[],displayName:"SecondaryButtonDocs"};const Ta={title:"Atoms/Buttons/Secondary Button",component:e,parameters:{layout:"centered",docs:{page:()=>a.jsx(S,{})}},argTypes:{variant:{control:"select",options:["solid","alt"]},size:{control:"select",options:["extra-small","small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download"],mapping:{None:void 0,Person:l,Check:f,Add:j,Download:ua}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:r,Check:f,Add:j}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},c={display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},I=o=>a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--global-color-neutral-gray-500)",display:"block",marginBottom:"8px"},children:o}),g={name:"Documentation",render:()=>a.jsx(S,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},i={name:"Playground",args:{label:"Label",variant:"solid",size:"default",showLeadingIcon:!0,leadingIcon:l,disabled:!1,loading:!1}},b={name:"Default",args:{label:"Label",variant:"solid",size:"default"}},s={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{size:"extra-small",label:"Extra Small"}),a.jsx(e,{size:"small",label:"Small"}),a.jsx(e,{size:"default",label:"Default"}),a.jsx(e,{size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},p={name:"Status / Solid",render:()=>a.jsxs("div",{style:c,children:[a.jsx(e,{variant:"solid",size:"extra-small",label:"XS"}),a.jsx(e,{variant:"solid",size:"small",label:"Small"}),a.jsx(e,{variant:"solid",size:"default",label:"Default"}),a.jsx(e,{variant:"solid",size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},u={name:"Status / Alt",render:()=>a.jsxs("div",{style:c,children:[a.jsx(e,{variant:"alt",size:"extra-small",label:"XS"}),a.jsx(e,{variant:"alt",size:"small",label:"Small"}),a.jsx(e,{variant:"alt",size:"default",label:"Default"}),a.jsx(e,{variant:"alt",size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},x={name:"Status / Icon Only",render:()=>a.jsxs("div",{style:c,children:[a.jsx(e,{iconOnly:!0,leadingIcon:l,size:"extra-small",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:l,size:"small",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:l,size:"large",ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},y={name:"Status / Loading",render:()=>a.jsxs("div",{style:c,children:[a.jsx(e,{label:"Loading…",loading:!0,size:"small"}),a.jsx(e,{label:"Loading…",loading:!0}),a.jsx(e,{variant:"alt",label:"Loading…",loading:!0})]}),parameters:{controls:{disable:!0}}},m={name:"Status / Disabled",render:()=>a.jsxs("div",{style:c,children:[a.jsx(e,{label:"Disabled",disabled:!0}),a.jsx(e,{variant:"alt",label:"Disabled",disabled:!0}),a.jsx(e,{iconOnly:!0,leadingIcon:l,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},h={name:"Component Breakdown",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"600px"},children:[I("Sub-atoms"),a.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[["Label only",a.jsx(e,{label:"Label"}),"--btn-secondary-font-size / --btn-secondary-label-color"],["Leading icon",a.jsx(e,{showLeadingIcon:!0,leadingIcon:l,label:"Icon"}),"--btn-secondary-icon-size-default"],["Icon only",a.jsx(e,{iconOnly:!0,leadingIcon:l,ariaLabel:"x"}),"--btn-secondary-icon-only-size-default"],["Alt variant",a.jsx(e,{variant:"alt",label:"Alt"}),"--btn-secondary-alt-bg"]].map(([o,t,ba])=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[a.jsx("span",{style:{fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-600)",fontFamily:"var(--brand-font-primary)"},children:o}),t,a.jsx("code",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-500)",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px",fontFamily:"monospace"},children:ba})]},o))})]}),parameters:{controls:{disable:!0}}},v={name:"All Interactive States",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"24px"},children:[I("Solid"),a.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:["Default","Loading","Disabled"].map(o=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[a.jsx(e,{variant:"solid",label:o,loading:o==="Loading",disabled:o==="Disabled"}),a.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:o.toLowerCase()})]},o))}),I("Alt"),a.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:["Default","Loading","Disabled"].map(o=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[a.jsx(e,{variant:"alt",label:o,loading:o==="Loading",disabled:o==="Disabled"}),a.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:o.toLowerCase()})]},o))})]}),parameters:{controls:{disable:!0}}},d={name:"Full Design Matrix (40 variants)",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)"},children:["solid","alt"].map(o=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:o}),["extra-small","small","default","large"].map(t=>a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",width:"var(--global-spacing-sizing-80px)"},children:t}),a.jsx(e,{variant:o,size:t,label:"Label",showLeadingIcon:!0,leadingIcon:l,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:o,size:t,label:"Label"}),a.jsx(e,{variant:o,size:t,iconOnly:!0,leadingIcon:l,ariaLabel:"User"}),a.jsx(e,{variant:o,size:t,label:"Disabled",disabled:!0}),a.jsx(e,{variant:o,size:t,label:"Loading",loading:!0})]},t))]},o))}),parameters:{layout:"padded",controls:{disable:!0}}};var w,z,L;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <SecondaryButtonDocs />,
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
}`,...(L=(z=g.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var B,D,k,F,C;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(D=i.parameters)==null?void 0:D.docs)==null?void 0:k.source},description:{story:"Default secondary button — solid variant with label.",...(C=(F=i.parameters)==null?void 0:F.docs)==null?void 0:C.description}}};var T,A,O;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    label: 'Label',
    variant: 'solid',
    size: 'default'
  }
}`,...(O=(A=b.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var P,W,U,R,H;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <SecondaryButton size="extra-small" label="Extra Small" />
      <SecondaryButton size="small" label="Small" />
      <SecondaryButton size="default" label="Default" />
      <SecondaryButton size="large" label="Large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(W=s.parameters)==null?void 0:W.docs)==null?void 0:U.source},description:{story:"All four sizes.",...(H=(R=s.parameters)==null?void 0:R.docs)==null?void 0:H.description}}};var M,E,N;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Status / Solid',
  render: () => <div style={ROW}>
      <SecondaryButton variant="solid" size="extra-small" label="XS" />
      <SecondaryButton variant="solid" size="small" label="Small" />
      <SecondaryButton variant="solid" size="default" label="Default" />
      <SecondaryButton variant="solid" size="large" label="Large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(E=p.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var X,V,_;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Status / Alt',
  render: () => <div style={ROW}>
      <SecondaryButton variant="alt" size="extra-small" label="XS" />
      <SecondaryButton variant="alt" size="small" label="Small" />
      <SecondaryButton variant="alt" size="default" label="Default" />
      <SecondaryButton variant="alt" size="large" label="Large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(V=u.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var G,Y,q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Status / Icon Only',
  render: () => <div style={ROW}>
      <SecondaryButton iconOnly leadingIcon={PersonIcon} size="extra-small" ariaLabel="User" />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Status / Loading',
  render: () => <div style={ROW}>
      <SecondaryButton label="Loading…" loading size="small" />
      <SecondaryButton label="Loading…" loading />
      <SecondaryButton variant="alt" label="Loading…" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,$,aa;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Status / Disabled',
  render: () => <div style={ROW}>
      <SecondaryButton label="Disabled" disabled />
      <SecondaryButton variant="alt" label="Disabled" disabled />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(aa=($=m.parameters)==null?void 0:$.docs)==null?void 0:aa.source}}};var ea,na,la;h.parameters={...h.parameters,docs:{...(ea=h.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '600px'
  }}>
      {LBL('Sub-atoms')}
      <div style={{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap'
    }}>
        {[['Label only', <SecondaryButton label="Label" />, '--btn-secondary-font-size / --btn-secondary-label-color'], ['Leading icon', <SecondaryButton showLeadingIcon leadingIcon={PersonIcon} label="Icon" />, '--btn-secondary-icon-size-default'], ['Icon only', <SecondaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="x" />, '--btn-secondary-icon-only-size-default'], ['Alt variant', <SecondaryButton variant="alt" label="Alt" />, '--btn-secondary-alt-bg']].map(([lbl, el, token]) => <div key={lbl as string} style={{
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
          borderRadius: '4px',
          fontFamily: 'monospace'
        }}>{token as string}</code>
          </div>)}
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(la=(na=h.parameters)==null?void 0:na.docs)==null?void 0:la.source}}};var oa,ra,ta;v.parameters={...v.parameters,docs:{...(oa=v.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '24px'
  }}>
      {LBL('Solid')}
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
            <SecondaryButton variant="solid" label={s} loading={s === 'Loading'} disabled={s === 'Disabled'} />
            <span style={{
          fontSize: '10px',
          color: 'var(--global-color-neutral-gray-400)',
          fontFamily: 'var(--brand-font-secondary)'
        }}>{s.toLowerCase()}</span>
          </div>)}
      </div>
      {LBL('Alt')}
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
            <SecondaryButton variant="alt" label={s} loading={s === 'Loading'} disabled={s === 'Disabled'} />
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
}`,...(ta=(ra=v.parameters)==null?void 0:ra.docs)==null?void 0:ta.source}}};var ia,sa,da,ca,ga;d.parameters={...d.parameters,docs:{...(ia=d.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
              <SecondaryButton variant={variant} size={size} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
              <SecondaryButton variant={variant} size={size} label="Label" />
              <SecondaryButton variant={variant} size={size} iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
              <SecondaryButton variant={variant} size={size} label="Disabled" disabled />
              <SecondaryButton variant={variant} size={size} label="Loading" loading />
            </div>)}
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(da=(sa=d.parameters)==null?void 0:sa.docs)==null?void 0:da.source},description:{story:"Full variant, size, and state matrix.",...(ga=(ca=d.parameters)==null?void 0:ca.docs)==null?void 0:ga.description}}};const Aa=["Documentation","Playground","Default","Sizes","StatusSolid","StatusAlt","StatusIconOnly","StatusLoading","StatusDisabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{v as AllInteractiveStates,h as ComponentBreakdown,b as Default,g as Documentation,d as FullDesignMatrix,i as Playground,s as Sizes,u as StatusAlt,m as StatusDisabled,x as StatusIconOnly,y as StatusLoading,p as StatusSolid,Aa as __namedExportsOrder,Ta as default};
