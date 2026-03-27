import{j as a}from"./iframe-x7SyBqQv.js";import{S as e}from"./SecondaryButton-CiJ4U3vw.js";import{D as l}from"./DocsTemplate-DNSps822.js";import{B as fa}from"./Button-B2xXPNCJ.js";import{A as i,P as n}from"./ArrowForward-Cg8nd4Qp.js";import{C as h}from"./Check-B3zU3TtZ.js";import{A as I,D as ja}from"./Download-CBOP6b0F.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-jEFf1KH2.js";const v=()=>a.jsxs(l,{children:[a.jsx(l.Header,{title:"Secondary Button",subtitle:"Sky-blue button for secondary and supporting actions across the interface"}),a.jsxs(l.BodyText,{children:["The ",a.jsx("strong",{children:"Secondary Button"})," uses the sky-blue colour family to provide a visually distinct alternative to the Primary Button. It supports two visual variants — ",a.jsx("em",{children:"solid"})," (sky-blue-50 background) and ",a.jsx("em",{children:"alt"})," (white background) — across four sizes, with optional leading and trailing icons, an icon-only mode, and built-in loading and disabled states. All styling is driven by the ",a.jsx("code",{children:"--btn-secondary-*"})," token family with no hardcoded values."]}),a.jsxs(l.Section,{title:"Component Anatomy",children:[a.jsxs(l.BodyText,{children:["The Secondary Button shares the same structural anatomy as the Primary Button. The key difference is the colour treatment: it uses the sky-blue palette (",a.jsx("code",{children:"--brand-sky-blue"}),") instead of the blue-blue palette."]}),a.jsx(l.Anatomy,{preview:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",alignItems:"center",justifyContent:"center"},children:[a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i})]}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
--btn-secondary-bg (--brand-sky-blue-50 / #CCF0FB)
--btn-secondary-border-color (--brand-sky-blue / #00B2EB)
--btn-secondary-border-width (--global-spacing-stroke-0-5px)
--btn-padding-{size}`,description:"Outer button shell. Corner radius: 4px. Solid variant: sky-blue-50 bg. Alt variant: white bg. Border: 0.5px solid sky-blue. On hover: 1px border with 2x2 sky-blue drop shadow."},{id:2,name:"Leading Icon",token:`--btn-icon-size-{size} (14px / 16px / 18px)
--btn-secondary-color (--global-color-secondary-blue-gray / #61607C)`,description:"Optional icon preceding the label. Fill: #61607C (default), shifts to #1C1C1C on hover."},{id:3,name:"Trailing Icon",token:`--btn-icon-size-{size} (14px / 16px / 18px)
--btn-secondary-color (--global-color-secondary-blue-gray / #61607C)`,description:"Optional icon after the label. Fill: #61607C (default), shifts to #1C1C1C on hover."},{id:4,name:"Label",token:`--btn-font-family (--brand-font-primary)
--btn-font-size-{size}
--btn-font-weight (--global-type-weight-light)
--btn-secondary-color (--global-color-secondary-blue-gray)`,description:"Button text. Uses F37 Ginger Pro Light. Colour: blue-gray (#61607C), shifts to black (#1C1C1C) on hover."}]})]}),a.jsxs(l.Section,{title:"Variants",children:[a.jsxs(l.BodyText,{children:["Two visual variants cover different background contexts. Use ",a.jsx("strong",{children:"solid"}),"for the default secondary action and ",a.jsx("strong",{children:"alt"})," when a lighter/white background is needed."]}),a.jsxs(l.Subsection,{title:"Solid",children:[a.jsx(l.BodyText,{children:"Sky-blue-50 (#CCF0FB) background with sky-blue border. The default variant."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[a.jsx(e,{variant:"solid",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{variant:"solid",label:"Label",showLeadingIcon:!0,leadingIcon:n}),a.jsx(e,{variant:"solid",label:"Label",showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{variant:"solid",label:"Label"})]})]}),a.jsxs(l.Subsection,{title:"Alt",children:[a.jsx(l.BodyText,{children:"White (#FFFFFF) background with sky-blue border. Use when the solid variant clashes with a coloured background."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[a.jsx(e,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{variant:"alt",label:"Label",showLeadingIcon:!0,leadingIcon:n}),a.jsx(e,{variant:"alt",label:"Label",showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{variant:"alt",label:"Label"})]})]})]}),a.jsxs(l.Section,{title:"Sizes",children:[a.jsx(l.BodyText,{children:"Four sizes scale the button for different density contexts. All sizes support both variants and all optional elements."}),a.jsx(l.SizeDemo,{rows:[{label:"Extra Small",sublabel:"Compact inline actions, tags",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[a.jsx(e,{size:"extra-small",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{size:"extra-small",variant:"alt",label:"Label"}),a.jsx(e,{size:"extra-small",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Small",sublabel:"Dense toolbars, inline actions",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[a.jsx(e,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{size:"small",variant:"alt",label:"Label"}),a.jsx(e,{size:"small",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[a.jsx(e,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{size:"default",variant:"alt",label:"Label"}),a.jsx(e,{size:"default",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Large",sublabel:"Hero calls-to-action, prominent forms",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[a.jsx(e,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{size:"large",variant:"alt",label:"Label"}),a.jsx(e,{size:"large",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})}]})]}),a.jsxs(l.Section,{title:"Optional Elements",children:[a.jsx(l.BodyText,{children:"Leading icon, trailing icon, and icon-only mode are all independently composable."}),a.jsx(l.Subsection,{title:"With Leading Icon",children:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,size:"small"}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:h,size:"large"})]})}),a.jsx(l.Subsection,{title:"With Trailing Icon",children:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:i,size:"small"}),a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:i,size:"large"})]})}),a.jsx(l.Subsection,{title:"Icon Only",children:a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[a.jsx(e,{iconOnly:!0,leadingIcon:n,size:"extra-small",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:I,ariaLabel:"Add"})]})})]}),a.jsxs(l.Section,{title:"States",children:[a.jsxs(l.Subsection,{title:"Default",children:[a.jsx(l.BodyText,{children:"Resting state. Solid uses sky-blue-50 (#CCF0FB) background; alt uses white. Both have a sky-blue (#00B2EB) 0.5px border and blue-gray text."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Solid",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{variant:"alt",label:"Alt",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i})]})]}),a.jsxs(l.Subsection,{title:"Loading",children:[a.jsxs(l.BodyText,{children:["Pass ",a.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading. The border uses a lighter stroke weight (0.5px) while loading."]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Loading…",loading:!0,size:"small"}),a.jsx(e,{label:"Loading…",loading:!0}),a.jsx(e,{label:"Loading…",loading:!0,size:"large"}),a.jsx(e,{label:"Loading…",variant:"alt",loading:!0})]})]}),a.jsxs(l.Subsection,{title:"Disabled",children:[a.jsx(l.BodyText,{children:"Disabled state uses explicit gray colours per the Figma spec (no opacity reduction). Background: gray-50 (#F9FAFB), border: gray-200 (#E5E7EB), text: gray-300 (#D2D5DA)."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{label:"Label",disabled:!0}),a.jsx(e,{label:"Label",variant:"alt",disabled:!0}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,disabled:!0}),a.jsx(e,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]})]})]}),a.jsx(l.TokenTable,{title:"Design Tokens — Layout & Spacing",description:"Shared tokens (inherited from the base Button token system):",tokens:[{name:"--btn-border-radius",description:"Corner radius (4px) — --global-spacing-radius-4px"},{name:"--btn-border-width-default",description:"Hover border (1px) — --global-spacing-stroke-1px"},{name:"--btn-secondary-border-width",description:"Default border (0.5px) — --global-spacing-stroke-0-5px"},{name:"--btn-secondary-border-width-focus",description:"Focus / disabled border (2px) — --global-spacing-stroke-2px"},{name:"--btn-border-width-loading",description:"Loading border (0.5px) — --global-spacing-stroke-0-5px"},{name:"--btn-secondary-padding-xs",description:"Extra-small padding — 2px / 4px"},{name:"--btn-padding-small",description:"Small padding — 8px / 12px"},{name:"--btn-padding-default",description:"Default padding — 12px / 16px"},{name:"--btn-padding-large",description:"Large padding — 16px / 20px"},{name:"--btn-transition-duration",description:"Transition speed — --global-animation-duration-fast"}]}),a.jsx(l.TokenTable,{title:"Design Tokens — Secondary Colour Tokens",description:"Sky-blue colour tokens specific to the Secondary Button:",tokens:[{name:"--btn-secondary-bg",description:"Solid default bg — --brand-sky-blue-50 (#CCF0FB)"},{name:"--btn-secondary-bg-hover",description:"Solid hover bg — --global-color-primary-sky-blue-25 (#FAFDFF)"},{name:"--btn-secondary-alt-bg",description:"Alt default bg — --global-color-base-white (#FFFFFF)"},{name:"--btn-secondary-alt-bg-hover",description:"Alt hover bg — --global-color-primary-sky-blue-25 (#FAFDFF)"},{name:"--btn-secondary-icon-only-bg-hover",description:"Icon-only hover bg — --global-color-primary-sky-blue-50 (#F4FCFF)"},{name:"--btn-secondary-color",description:"Default text/icon — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-secondary-color-hover",description:"Hover text/icon — --global-color-base-black (#1C1C1C)"},{name:"--btn-secondary-border-color",description:"Default border — --brand-sky-blue (#00B2EB)"},{name:"--btn-secondary-shadow-hover",description:"Hover box-shadow — 2px 2px 0 0 --global-color-primary-sky-blue (#0BA7EA)"},{name:"--btn-secondary-bg-disabled",description:"Disabled bg — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-secondary-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-secondary-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"}]}),a.jsx(l.CodeBlock,{children:`import { SecondaryButton } from './SecondaryButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Default solid variant
<SecondaryButton label="Cancel" />

// Alt variant (white background)
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
<SecondaryButton label="Cancel" />`}),a.jsxs(l.Principles,{children:[a.jsx(l.PrincipleCard,{number:1,title:"Pair with a Primary Button",children:"The Secondary Button is designed to sit alongside a Primary (filled) Button. Use it for cancel, dismiss, or lower-priority actions within the same context."}),a.jsxs(l.PrincipleCard,{number:2,title:"Choose the right variant",children:["Use ",a.jsx("strong",{children:"solid"})," as the default. Switch to ",a.jsx("strong",{children:"alt"})," when the sky-blue background would clash with the surrounding context or when a lighter appearance is needed."]}),a.jsx(l.PrincipleCard,{number:3,title:"Match size to its sibling",children:"When pairing with a Primary Button, use the same size for both to maintain visual alignment and consistent touch targets."})]}),a.jsx(l.DosDonts,{doItem:{icon:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[a.jsx(fa,{variant:"filled",label:"Confirm"}),a.jsx(e,{label:"Cancel"})]}),label:"Clear hierarchy",description:"Pair a filled Primary with a Secondary for clear action hierarchy."},dontItem:{icon:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[a.jsx(e,{label:"Confirm"}),a.jsx(e,{label:"Cancel"})]}),label:"Two secondaries",description:"Don't use two Secondary Buttons side by side. It creates ambiguity about which action is primary."}}),a.jsx(l.Footer,{})]});v.__docgenInfo={description:"",methods:[],displayName:"SecondaryButtonDocs"};const Aa={title:"Atoms/Secondary Button",component:e,parameters:{layout:"centered",docs:{page:()=>a.jsx(v,{})}},argTypes:{variant:{control:"select",options:["solid","alt"]},size:{control:"select",options:["extra-small","small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download"],mapping:{None:void 0,Person:n,Check:h,Add:I,Download:ja}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:i,Check:h,Add:I}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},s={render:()=>a.jsx(v,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},t={args:{label:"Label",variant:"solid",size:"default"}},d={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{variant:"solid",label:"Solid"}),a.jsx(e,{variant:"alt",label:"Alt"})]}),parameters:{controls:{disable:!0}}},c={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{size:"extra-small",label:"Extra Small"}),a.jsx(e,{size:"small",label:"Small"}),a.jsx(e,{size:"default",label:"Default"}),a.jsx(e,{size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},g={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,size:"extra-small"}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,size:"small"}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,size:"large"})]}),parameters:{controls:{disable:!0}}},p={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:i,size:"extra-small"}),a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:i,size:"small"}),a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{label:"Label",showTrailingIcon:!0,trailingIcon:i,size:"large"})]}),parameters:{controls:{disable:!0}}},b={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,size:"small"}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,size:"large"})]}),parameters:{controls:{disable:!0}}},u={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{iconOnly:!0,leadingIcon:n,size:"extra-small",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),a.jsx(e,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},x={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{label:"Loading…",loading:!0,size:"small"}),a.jsx(e,{label:"Loading…",loading:!0}),a.jsx(e,{label:"Loading…",loading:!0,size:"large"}),a.jsx(e,{label:"Loading…",variant:"alt",loading:!0})]}),parameters:{controls:{disable:!0}}},y={render:()=>a.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[a.jsx(e,{label:"Disabled",disabled:!0}),a.jsx(e,{label:"Disabled",variant:"alt",disabled:!0}),a.jsx(e,{label:"Disabled",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i,disabled:!0}),a.jsx(e,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},m={render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)"},children:["solid","alt"].map(r=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:r}),["extra-small","small","default","large"].map(o=>a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",width:"var(--global-spacing-sizing-80px)"},children:o}),a.jsx(e,{variant:r,size:o,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:i}),a.jsx(e,{variant:r,size:o,label:"Label"}),a.jsx(e,{variant:r,size:o,iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),a.jsx(e,{variant:r,size:o,label:"Disabled",disabled:!0}),a.jsx(e,{variant:r,size:o,label:"Loading",loading:!0})]},o))]},r))}),parameters:{layout:"padded",controls:{disable:!0}}};var w,f,j,z,L;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <SecondaryButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source},description:{story:"Full documentation page for the Secondary Button component.",...(L=(z=s.parameters)==null?void 0:z.docs)==null?void 0:L.description}}};var S,B,T,k,F;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    variant: 'solid',
    size: 'default'
  }
}`,...(T=(B=t.parameters)==null?void 0:B.docs)==null?void 0:T.source},description:{story:"Default secondary button — solid variant with label.",...(F=(k=t.parameters)==null?void 0:k.docs)==null?void 0:F.description}}};var D,C,A,P,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(C=d.parameters)==null?void 0:C.docs)==null?void 0:A.source},description:{story:"Both variants side by side.",...(O=(P=d.parameters)==null?void 0:P.docs)==null?void 0:O.description}}};var W,U,E,H,N;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(E=(U=c.parameters)==null?void 0:U.docs)==null?void 0:E.source},description:{story:"All four sizes.",...(N=(H=c.parameters)==null?void 0:H.docs)==null?void 0:N.description}}};var V,_,R,q,G;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(_=g.parameters)==null?void 0:_.docs)==null?void 0:R.source},description:{story:"Buttons with a leading icon.",...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var M,J,K,Q,X;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Buttons with a trailing icon.",...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,$,aa,ea;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"Buttons with both leading and trailing icons.",...(ea=(aa=b.parameters)==null?void 0:aa.docs)==null?void 0:ea.description}}};var na,la,ia,ra,oa;u.parameters={...u.parameters,docs:{...(na=u.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(ia=(la=u.parameters)==null?void 0:la.docs)==null?void 0:ia.source},description:{story:"Icon-only buttons — square with 4px radius.",...(oa=(ra=u.parameters)==null?void 0:ra.docs)==null?void 0:oa.description}}};var sa,ta,da,ca,ga;x.parameters={...x.parameters,docs:{...(sa=x.parameters)==null?void 0:sa.docs,source:{originalSource:`{
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
}`,...(ua=(ba=y.parameters)==null?void 0:ba.docs)==null?void 0:ua.source},description:{story:"Disabled state.",...(ya=(xa=y.parameters)==null?void 0:xa.docs)==null?void 0:ya.description}}};var ma,ha,Ia,va,wa;m.parameters={...m.parameters,docs:{...(ma=m.parameters)==null?void 0:ma.docs,source:{originalSource:`{
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
}`,...(Ia=(ha=m.parameters)==null?void 0:ha.docs)==null?void 0:Ia.source},description:{story:"Full variant, size, and state matrix.",...(wa=(va=m.parameters)==null?void 0:va.docs)==null?void 0:wa.description}}};const Pa=["Documentation","Default","Variants","Sizes","WithLeadingIcon","WithTrailingIcon","WithBothIcons","IconOnly","Loading","Disabled","AllVariants"];export{m as AllVariants,t as Default,y as Disabled,s as Documentation,u as IconOnly,x as Loading,c as Sizes,d as Variants,b as WithBothIcons,g as WithLeadingIcon,p as WithTrailingIcon,Pa as __namedExportsOrder,Aa as default};
