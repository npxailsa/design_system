import{j as a}from"./iframe-BeQPsrCv.js";import{S as e}from"./SecondaryButton-Dprq7Xr3.js";import{D as l}from"./DocsTemplate-53eDp4oe.js";import{B as fa}from"./Button-COWhtYFc.js";import{P as n}from"./Person-C5sQsGT0.js";import{A as r}from"./ArrowForward-gWABu7jv.js";import{C as m}from"./Check-BE-kEabu.js";import{A as I}from"./Add-BafoQTlk.js";import{D as ja}from"./Download-5K8Y2s_p.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-BAAXK-75.js";const v=()=>a.jsxs(l,{children:[a.jsx(l.Header,{title:"Secondary Button",subtitle:"Blue-gray button for secondary and supporting actions across the interface"}),a.jsxs(l.BodyText,{children:["The ",a.jsx("strong",{children:"Secondary Button"})," uses the blue-gray colour family to provide a visually distinct alternative to the Primary Button. It supports two visual variants — ",a.jsx("em",{children:"solid"})," (dark blue-gray #304047 background, white text) and"," ",a.jsx("em",{children:"alt"})," (white background, blue-gray border and text) — across four sizes, with optional leading and trailing icons, an icon-only mode, and built-in loading and disabled states. All styling is driven by the ",a.jsx("code",{children:"--btn-secondary-*"})," ","token family with no hardcoded values."]}),a.jsxs(l.Section,{title:"Component Anatomy",children:[a.jsxs(l.BodyText,{children:["The Secondary Button shares the same structural anatomy as the Primary Button. The key difference is the colour treatment: it uses the blue-gray palette (",a.jsx("code",{children:"--brand-secondary"}),") instead of the primary blue palette."]}),a.jsx(l.Anatomy,{preview:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",alignItems:"center",justifyContent:"center"},children:[a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r})]}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
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
--btn-secondary-color / --btn-secondary-alt-color`,description:"Button text. Uses F37 Ginger Pro Light. Solid: white (#FFFFFF). Alt: blue-gray (#304047), shifts to black (#1C1C1C) on hover."}]})]}),a.jsxs(l.Section,{title:"Variants",children:[a.jsxs(l.BodyText,{children:["Two visual variants cover different background contexts. Use ",a.jsx("strong",{children:"solid"}),"for the default secondary action and ",a.jsx("strong",{children:"alt"})," when placed on a dark or coloured background where the solid would blend in."]}),a.jsxs(l.Subsection,{title:"Solid",children:[a.jsx(l.BodyText,{children:"Dark blue-gray (#304047) background with white text and a 1px dark-blue-gray (#182024) border. Hover lightens the background to #758084 and adds a 2×2px black drop shadow."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[a.jsx(e,{variant:"solid",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:"solid",label:"Label",showLeadingIcon:!0,leadingIcon:n}),a.jsx(e,{variant:"solid",label:"Label",showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:"solid",label:"Label"})]})]}),a.jsxs(l.Subsection,{title:"Alt",children:[a.jsx(l.BodyText,{children:"White (#FFFFFF) background with a 1px blue-gray (#304047) border and blue-gray text. Hover shifts background to blue-gray-50 (#D6D9DA), text to black (#1C1C1C), and adds a 2×2px black drop shadow."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[a.jsx(e,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:n}),a.jsx(e,{variant:"alt",label:"Label",showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:"alt",label:"Label"})]})]})]}),a.jsxs(l.Section,{title:"Sizes",children:[a.jsx(l.BodyText,{children:"Four sizes scale the button for different density contexts. All sizes support both variants and all optional elements."}),a.jsx(l.SizeDemo,{rows:[{label:"Extra Small",sublabel:"Compact inline actions, tags",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[a.jsx(e,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{size:"extra-small",variant:"alt",label:"Label"}),a.jsx(e,{size:"extra-small",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Small",sublabel:"Dense toolbars, inline actions",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[a.jsx(e,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{size:"small",variant:"alt",label:"Label"}),a.jsx(e,{size:"small",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[a.jsx(e,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{size:"default",variant:"alt",label:"Label"}),a.jsx(e,{size:"default",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Large",sublabel:"Hero calls-to-action, prominent forms",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[a.jsx(e,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{size:"large",variant:"alt",label:"Label"}),a.jsx(e,{size:"large",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})}]})]}),a.jsxs(l.Section,{title:"Optional Elements",children:[a.jsx(l.BodyText,{children:"Leading icon, trailing icon, and icon-only mode are all independently composable."}),a.jsx(l.Subsection,{title:"With Leading Icon",children:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,size:"small"}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:m,size:"large"})]})}),a.jsx(l.Subsection,{title:"With Trailing Icon",children:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"small"}),a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"large"})]})}),a.jsx(l.Subsection,{title:"Icon Only",children:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[a.jsx(e,{iconOnly:!0,leadingIcon:n,size:"extra-small",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:I,ariaLabel:"Add"})]})})]}),a.jsxs(l.Section,{title:"States",children:[a.jsxs(l.Subsection,{title:"Default",children:[a.jsx(l.BodyText,{children:"Resting state. Solid: dark blue-gray (#304047) bg, white text, 1px #182024 border. Alt: white bg, blue-gray (#304047) text and border."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Solid",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:"alt",label:"Alt",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r})]})]}),a.jsxs(l.Subsection,{title:"Loading",children:[a.jsxs(l.BodyText,{children:["Pass ",a.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading."]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Loading…",loading:!0,size:"small"}),a.jsx(e,{label:"Loading…",loading:!0}),a.jsx(e,{label:"Loading…",loading:!0,size:"large"}),a.jsx(e,{label:"Loading…",variant:"alt",loading:!0})]})]}),a.jsxs(l.Subsection,{title:"Disabled",children:[a.jsx(l.BodyText,{children:"Disabled state uses explicit gray colours per the Figma spec (no opacity reduction). Background: gray-100 (#F3F4F6), border & text: gray-400 (#9CA3AF)."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Label",disabled:!0}),a.jsx(e,{label:"Label",variant:"alt",disabled:!0}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r,disabled:!0}),a.jsx(e,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]})]})]}),a.jsx(l.TokenTable,{title:"Design Tokens — Solid Variant",description:"Colour tokens for the solid (filled dark blue-gray) variant:",tokens:[{name:"--btn-secondary-bg",description:"Default background — --brand-secondary (#304047)"},{name:"--btn-secondary-bg-hover",description:"Hover/active background — --brand-secondary-300 (#758084)"},{name:"--btn-secondary-color",description:"Default text & icon colour — --global-color-base-white (#FFFFFF)"},{name:"--btn-secondary-color-hover",description:"Hover text & icon colour — --global-color-base-white (#FFFFFF)"},{name:"--btn-secondary-border-color",description:"Default & hover border — --brand-secondary-dark (#182024)"},{name:"--btn-secondary-border-width",description:"Default border width — --global-spacing-stroke-1px (1px)"},{name:"--btn-secondary-border-width-hover",description:"Hover/active border width — --global-spacing-stroke-2px (2px)"},{name:"--btn-secondary-shadow-hover",description:"Hover/active drop shadow — 2px 2px 0px 0px --global-color-base-black (#1C1C1C)"}]}),a.jsx(l.TokenTable,{title:"Design Tokens — Alt Variant",description:"Colour tokens for the alt (white bg, blue-gray outline) variant:",tokens:[{name:"--btn-secondary-alt-bg",description:"Default background — --global-color-base-white (#FFFFFF)"},{name:"--btn-secondary-alt-bg-hover",description:"Hover/active background — --brand-secondary-50 (#D6D9DA)"},{name:"--btn-secondary-alt-color",description:"Default text & icon colour — --brand-secondary (#304047)"},{name:"--btn-secondary-alt-color-hover",description:"Hover text & icon colour — --global-color-base-black (#1C1C1C)"},{name:"--btn-secondary-alt-border-color",description:"Border colour (all states) — --brand-secondary (#304047)"},{name:"--btn-secondary-alt-shadow-hover",description:"Hover/active drop shadow — 2px 2px 0px 0px --global-color-base-black (#1C1C1C)"}]}),a.jsx(l.TokenTable,{title:"Design Tokens — Shared States",description:"Tokens shared across both variants for disabled and focus states:",tokens:[{name:"--btn-secondary-bg-disabled",description:"Disabled background — --global-color-neutral-gray-100 (#F3F4F6)"},{name:"--btn-secondary-color-disabled",description:"Disabled text & icon — --global-color-neutral-gray-400 (#9CA3AF)"},{name:"--btn-secondary-border-color-disabled",description:"Disabled border colour — --global-color-neutral-gray-400 (#9CA3AF)"},{name:"--btn-secondary-border-width-disabled",description:"Disabled border width (solid & icon-only) — --global-spacing-stroke-1px (1px)"},{name:"--btn-secondary-alt-border-width-disabled",description:"Disabled border width (alt variant only) — --global-spacing-stroke-2px (2px)"},{name:"--btn-secondary-border-width-focus",description:"Focus border width — --global-spacing-stroke-1px (1px, matches default)"}]}),a.jsx(l.CodeBlock,{children:`import { SecondaryButton } from './SecondaryButton';
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
<SecondaryButton label="Cancel" />`}),a.jsxs(l.Principles,{children:[a.jsx(l.PrincipleCard,{number:1,title:"Pair with a Primary Button",children:"The Secondary Button is designed to sit alongside a Primary (filled) Button. Use it for cancel, dismiss, or lower-priority actions within the same context."}),a.jsxs(l.PrincipleCard,{number:2,title:"Choose the right variant",children:["Use ",a.jsx("strong",{children:"solid"})," as the default. Switch to ",a.jsx("strong",{children:"alt"})," when placing the button on a dark background or when a white-background outline style is needed for visual contrast."]}),a.jsx(l.PrincipleCard,{number:3,title:"Match size to its sibling",children:"When pairing with a Primary Button, use the same size for both to maintain visual alignment and consistent touch targets."})]}),a.jsx(l.DosDonts,{doItem:{icon:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[a.jsx(fa,{variant:"filled",label:"Confirm"}),a.jsx(e,{label:"Cancel"})]}),label:"Clear hierarchy",description:"Pair a filled Primary with a Secondary for clear action hierarchy."},dontItem:{icon:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[a.jsx(e,{label:"Confirm"}),a.jsx(e,{label:"Cancel"})]}),label:"Two secondaries",description:"Don't use two Secondary Buttons side by side. It creates ambiguity about which action is primary."}}),a.jsx(l.RelatedLinks,{links:[{label:"Figma Library",href:"https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1"},{label:"Primary Button",href:"/?path=/story/atoms-buttons-primary-button--documentation"},{label:"Tertiary Button",href:"/?path=/story/atoms-buttons-tertiary-button--documentation"},{label:"Ghost Button",href:"/?path=/story/atoms-buttons-ghost-button--documentation"}]}),a.jsx(l.Footer,{})]});v.__docgenInfo={description:"",methods:[],displayName:"SecondaryButtonDocs"};const Wa={title:"Atoms/Buttons/Secondary Button",component:e,parameters:{layout:"centered",docs:{page:()=>a.jsx(v,{})}},argTypes:{variant:{control:"select",options:["solid","alt"]},size:{control:"select",options:["extra-small","small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download"],mapping:{None:void 0,Person:n,Check:m,Add:I,Download:ja}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:r,Check:m,Add:I}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},s={render:()=>a.jsx(v,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},t={args:{label:"Label",variant:"solid",size:"default"}},d={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{variant:"solid",label:"Solid"}),a.jsx(e,{variant:"alt",label:"Alt"})]}),parameters:{controls:{disable:!0}}},c={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{size:"extra-small",label:"Extra Small"}),a.jsx(e,{size:"small",label:"Small"}),a.jsx(e,{size:"default",label:"Default"}),a.jsx(e,{size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},g={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,size:"extra-small"}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,size:"small"}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,size:"large"})]}),parameters:{controls:{disable:!0}}},p={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"extra-small"}),a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"small"}),a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:r,size:"large"})]}),parameters:{controls:{disable:!0}}},b={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r,size:"small"}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r,size:"large"})]}),parameters:{controls:{disable:!0}}},u={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{iconOnly:!0,leadingIcon:n,size:"extra-small",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},x={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{label:"Loading…",loading:!0,size:"small"}),a.jsx(e,{label:"Loading…",loading:!0}),a.jsx(e,{label:"Loading…",loading:!0,size:"large"}),a.jsx(e,{label:"Loading…",variant:"alt",loading:!0})]}),parameters:{controls:{disable:!0}}},y={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{label:"Disabled",disabled:!0}),a.jsx(e,{label:"Disabled",variant:"alt",disabled:!0}),a.jsx(e,{label:"Disabled",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r,disabled:!0}),a.jsx(e,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},h={render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)"},children:["solid","alt"].map(i=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:i}),["extra-small","small","default","large"].map(o=>a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",width:"var(--global-spacing-sizing-80px)"},children:o}),a.jsx(e,{variant:i,size:o,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:r}),a.jsx(e,{variant:i,size:o,label:"Label"}),a.jsx(e,{variant:i,size:o,iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),a.jsx(e,{variant:i,size:o,label:"Disabled",disabled:!0}),a.jsx(e,{variant:i,size:o,label:"Loading",loading:!0})]},o))]},i))}),parameters:{layout:"padded",controls:{disable:!0}}};var w,f,j,z,L;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source},description:{story:"Full documentation page for the Secondary Button component.",...(L=(z=s.parameters)==null?void 0:z.docs)==null?void 0:L.description}}};var S,B,k,T,F;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'solid',
    size: 'default'
  }
}`,...(k=(B=t.parameters)==null?void 0:B.docs)==null?void 0:k.source},description:{story:"Default secondary button — solid variant with label.",...(F=(T=t.parameters)==null?void 0:T.docs)==null?void 0:F.description}}};var D,A,C,P,W;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <SecondaryButton variant="solid" label="Solid" />
      <SecondaryButton variant="alt" label="Alt" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(A=d.parameters)==null?void 0:A.docs)==null?void 0:C.source},description:{story:"Both variants side by side.",...(W=(P=d.parameters)==null?void 0:P.docs)==null?void 0:W.description}}};var O,U,H,V,E;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(U=c.parameters)==null?void 0:U.docs)==null?void 0:H.source},description:{story:"All four sizes.",...(E=(V=c.parameters)==null?void 0:V.docs)==null?void 0:E.description}}};var N,R,_,G,M;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="extra-small" />
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="small" />
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} />
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(R=g.parameters)==null?void 0:R.docs)==null?void 0:_.source},description:{story:"Buttons with a leading icon.",...(M=(G=g.parameters)==null?void 0:G.docs)==null?void 0:M.description}}};var X,Y,q,J,K;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="extra-small" />
      <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:q.source},description:{story:"Buttons with a trailing icon.",...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,Z,$,aa,ea;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"Buttons with both leading and trailing icons.",...(ea=(aa=b.parameters)==null?void 0:aa.docs)==null?void 0:ea.description}}};var na,la,ra,ia,oa;u.parameters={...u.parameters,docs:{...(na=u.parameters)==null?void 0:na.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
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
}`,...(ra=(la=u.parameters)==null?void 0:la.docs)==null?void 0:ra.source},description:{story:"Icon-only buttons — square with 4px radius.",...(oa=(ia=u.parameters)==null?void 0:ia.docs)==null?void 0:oa.description}}};var sa,ta,da,ca,ga;x.parameters={...x.parameters,docs:{...(sa=x.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <SecondaryButton label="Loading…" loading size="small" />
      <SecondaryButton label="Loading…" loading />
      <SecondaryButton label="Loading…" loading size="large" />
      <SecondaryButton label="Loading…" variant="alt" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(da=(ta=x.parameters)==null?void 0:ta.docs)==null?void 0:da.source},description:{story:"Loading state — spinner replaces the leading icon.",...(ga=(ca=x.parameters)==null?void 0:ca.docs)==null?void 0:ga.description}}};var pa,ba,ua,xa,ya;y.parameters={...y.parameters,docs:{...(pa=y.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <SecondaryButton label="Disabled" disabled />
      <SecondaryButton label="Disabled" variant="alt" disabled />
      <SecondaryButton label="Disabled" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ua=(ba=y.parameters)==null?void 0:ba.docs)==null?void 0:ua.source},description:{story:"Disabled state.",...(ya=(xa=y.parameters)==null?void 0:xa.docs)==null?void 0:ya.description}}};var ha,ma,Ia,va,wa;h.parameters={...h.parameters,docs:{...(ha=h.parameters)==null?void 0:ha.docs,source:{originalSource:`{
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
}`,...(Ia=(ma=h.parameters)==null?void 0:ma.docs)==null?void 0:Ia.source},description:{story:"Full variant, size, and state matrix.",...(wa=(va=h.parameters)==null?void 0:va.docs)==null?void 0:wa.description}}};const Oa=["Documentation","Default","Variants","Sizes","WithLeadingIcon","WithTrailingIcon","WithBothIcons","IconOnly","Loading","Disabled","AllVariants"];export{h as AllVariants,t as Default,y as Disabled,s as Documentation,u as IconOnly,x as Loading,c as Sizes,d as Variants,b as WithBothIcons,g as WithLeadingIcon,p as WithTrailingIcon,Oa as __namedExportsOrder,Wa as default};
