import{j as e}from"./iframe-CZOlXxWg.js";import{B as me}from"./Button-D498SEDC.js";import{D as i}from"./DocsTemplate-QoMFZ_1z.js";import{A as l,P as n}from"./ArrowForward-V8gGFKLa.js";import{C as x}from"./Check-0W2LACUA.js";import{A as y,D as xe}from"./Download-Uc7uJKBF.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-8Kubxgb7.js";const a=o=>e.jsx(me,{...o,variant:"outline"});a.__docgenInfo={description:`Secondary Button — The outline-style button used for secondary actions.

Wraps the base Button component with \`variant="outline"\` locked in.
Use alongside the Primary Button to establish clear visual hierarchy.

All design tokens are shared with the base Button component via the
\`--btn-outline-*\` token family.`,methods:[],displayName:"SecondaryButton",props:{label:{required:!1,tsType:{name:"string"},description:"Text label displayed inside the button"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant"},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type"},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered before the label"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon"},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional MUI icon component rendered after the label"},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the trailing icon"},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Render as an icon-only button (no label)"},loading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner in place of the leading icon"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full-width button"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for icon-only buttons"}}};const h=()=>e.jsxs(i,{children:[e.jsx(i.Header,{title:"Secondary Button",subtitle:"The outline-style button used alongside Primary Buttons to indicate secondary or supporting actions"}),e.jsxs(i.BodyText,{children:["The ",e.jsx("strong",{children:"Secondary Button"})," provides a visually lighter alternative to the Primary Button. It uses the outline style — a subtle background with a coloured border — to establish clear hierarchy when paired with a filled Primary Button. It supports three sizes, optional leading and trailing icons, an icon-only mode, and built-in loading and disabled states. All styling is driven by the ",e.jsx("code",{children:"--btn-outline-*"})," token family with no hardcoded values."]}),e.jsxs(i.Section,{title:"Component Anatomy",children:[e.jsx(i.BodyText,{children:"The Secondary Button shares layout anatomy with the Primary Button. The key difference is the colour treatment: a light background fill with a visible coloured border and darker text, rather than a solid filled background with white text."}),e.jsx(i.Anatomy,{preview:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",alignItems:"center",justifyContent:"center"},children:e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l})}),parts:[{id:1,name:"Container",token:`--btn-border-radius (--global-spacing-radius-4px)
--btn-outline-bg (--global-color-primary-blue-blue-50 / #F9F9FE)
--btn-outline-border-color (--global-color-primary-blue-blue-300 / #95A0E5)
--btn-border-width-default (--global-spacing-stroke-1px)
--btn-padding-{size}`,description:"Outer button shell. W: HUG, H: HUG. Corner radius: 4px. Fill: blue-blue-50 (#F9F9FE). Border: 1px solid blue-blue-300 (#95A0E5). On hover, bg shifts to blue-blue-100 with 2×2 drop shadow."},{id:2,name:"Leading Icon",token:`--btn-icon-size-{size} (14px / 16px / 18px)
--btn-outline-color (--global-color-secondary-blue-gray / #61607C)`,description:"Optional icon preceding the label. Fill: #61607C (default), shifts to #1C1C1C on hover. Controlled by showLeadingIcon + leadingIcon props."},{id:3,name:"Trailing Icon",token:`--btn-icon-size-{size} (14px / 16px / 18px)
--btn-outline-color (--global-color-secondary-blue-gray / #61607C)`,description:"Optional icon after the label. Fill: #61607C (default), shifts to #1C1C1C on hover. Controlled by showTrailingIcon + trailingIcon props."},{id:4,name:"Label",token:`--btn-font-family (--brand-font-primary)
--btn-font-size-{size}
--btn-font-weight (--global-type-weight-light)
--btn-outline-color (--global-color-secondary-blue-gray)`,description:"Button text. Uses F37 Ginger Pro Light. Colour: blue-gray (#61607C), shifts to black (#1C1C1C) on hover. Disabled: gray-300 (#D2D5DA)."}]})]}),e.jsxs(i.Section,{title:"Sizes",children:[e.jsx(i.BodyText,{children:"Three sizes scale the button for different density contexts. All sizes support every optional element configuration."}),e.jsx(i.SizeDemo,{rows:[{label:"Small",sublabel:"Dense toolbars, inline actions",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"small",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"small",label:"Label"}),e.jsx(a,{size:"small",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Default",sublabel:"Standard use across the interface",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"default",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"default",label:"Label"}),e.jsx(a,{size:"default",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})},{label:"Large",sublabel:"Hero calls-to-action, prominent forms",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center"},children:[e.jsx(a,{size:"large",label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:"large",label:"Label"}),e.jsx(a,{size:"large",iconOnly:!0,leadingIcon:n,ariaLabel:"User"})]})}]})]}),e.jsxs(i.Section,{title:"Optional Elements",children:[e.jsx(i.BodyText,{children:"Leading icon, trailing icon, and icon-only mode are all independently composable."}),e.jsx(i.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,size:"small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:x,size:"large"})]})}),e.jsx(i.Subsection,{title:"With Trailing Icon",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"large"})]})}),e.jsx(i.Subsection,{title:"With Both Icons",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,size:"large"})]})}),e.jsx(i.Subsection,{title:"Icon Only",children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"center"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:y,ariaLabel:"Add"})]})})]}),e.jsxs(i.Section,{title:"States",children:[e.jsxs(i.Subsection,{title:"Default",children:[e.jsx(i.BodyText,{children:"Resting state with light blue-blue-50 background, blue-blue-300 border, and blue-gray text."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{label:"Label"})]})]}),e.jsxs(i.Subsection,{title:"Loading",children:[e.jsxs(i.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner. The button is non-interactive during loading. The border uses a lighter stroke weight (0.5px) while loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"})]})]}),e.jsxs(i.Subsection,{title:"Disabled",children:[e.jsx(i.BodyText,{children:"Disabled state uses explicit gray colours per the Figma spec (no opacity reduction). Background shifts to gray-50 (#F9FAFB), border to gray-200 (#E5E7EB), text to gray-300 (#D2D5DA). All interactions are blocked."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(a,{label:"Label",disabled:!0}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]})]})]}),e.jsx(i.TokenTable,{title:"Design Tokens — Layout & Spacing",description:"Shared tokens controlling padding, border radius, and gap (inherited from the base Button system):",tokens:[{name:"--btn-border-radius",description:"Corner radius (4px) — --global-spacing-radius-4px"},{name:"--btn-border-width-default",description:"Default border (1px) — --global-spacing-stroke-1px"},{name:"--btn-border-width-focus",description:"Focus state border (2px) — --global-spacing-stroke-2px"},{name:"--btn-border-width-disabled",description:"Disabled state border (2px) — --global-spacing-stroke-2px"},{name:"--btn-border-width-loading",description:"Loading state border (0.5px) — --global-spacing-stroke-0-5px"},{name:"--btn-padding-small",description:"Small: 8px vertical / 12px horizontal"},{name:"--btn-padding-default",description:"Default: 12px vertical / 16px horizontal"},{name:"--btn-padding-large",description:"Large: 16px vertical / 20px horizontal"},{name:"--btn-gap-{size}",description:"Gap between elements (6px / 8px / 10px)"},{name:"--btn-icon-only-size-{size}",description:"Icon-only dimensions (36px / 44px / 52px)"},{name:"--btn-transition-duration",description:"Transition speed — --global-animation-duration-fast (160ms)"},{name:"--btn-transition-easing",description:"Transition curve — --global-animation-easing-default (ease)"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Typography",description:"Shared tokens controlling text and icon appearance:",tokens:[{name:"--btn-font-family",description:"Font family — F37 Ginger Pro (--brand-font-primary)"},{name:"--btn-font-weight",description:"Font weight — 300 light (--global-type-weight-light)"},{name:"--btn-letter-spacing",description:"Letter spacing (0.15px) — --global-type-letter-spacing-primary-label"},{name:"--btn-font-size-{size}",description:"Font sizes (14px / 16px / 18px)"},{name:"--btn-icon-size-{size}",description:"Icon sizes (14px / 16px / 18px)"},{name:"--btn-spinner-duration",description:"Spinner animation speed — --global-animation-duration-spinner (700ms)"},{name:"--btn-spinner-opacity",description:"Spinner opacity — --global-opacity-muted (0.6)"}]}),e.jsx(i.TokenTable,{title:"Design Tokens — Outline Colour Tokens",description:"Colour tokens specific to the Secondary Button (outline variant):",tokens:[{name:"--btn-outline-bg",description:"Default background — --global-color-primary-blue-blue-50 (#F9F9FE)"},{name:"--btn-outline-bg-hover",description:"Hover / active background — --global-color-primary-blue-blue-100 (#E7E9F4)"},{name:"--btn-outline-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-outline-color",description:"Default text/icon — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-outline-color-hover",description:"Hover text/icon — --global-color-base-black (#1C1C1C)"},{name:"--btn-outline-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-outline-border-color",description:"Default border — --global-color-primary-blue-blue-300 (#95A0E5)"},{name:"--btn-outline-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--btn-outline-shadow-hover",description:"Hover box-shadow — --global-spacing-sizing-2px offset, --global-color-primary-blue-blue-400 colour"}]}),e.jsx(i.CodeBlock,{children:`import { SecondaryButton } from './SecondaryButton';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Basic secondary button
<SecondaryButton label="Cancel" />

// With leading and trailing icons
<SecondaryButton
  label="Label"
  showLeadingIcon
  leadingIcon={PersonIcon}
  showTrailingIcon
  trailingIcon={ArrowForwardIcon}
/>

// Small size
<SecondaryButton size="small" label="Compact" />

// Icon only
<SecondaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User profile" />

// Loading state
<SecondaryButton label="Loading…" loading />

// Disabled
<SecondaryButton label="Restricted" disabled />

// Pairing with Primary Button
<Button label="Save changes" />
<SecondaryButton label="Cancel" />`}),e.jsxs(i.Principles,{children:[e.jsx(i.PrincipleCard,{number:1,title:"Pair with a Primary Button",children:"The Secondary Button is designed to sit alongside a Primary (filled) Button. Use it for cancel, dismiss, or lower-priority actions within the same context."}),e.jsx(i.PrincipleCard,{number:2,title:"Match size to its sibling",children:"When pairing with a Primary Button, use the same size for both to maintain visual alignment and consistent touch targets."}),e.jsx(i.PrincipleCard,{number:3,title:"Don't overuse as standalone",children:"If there is only one action in a context, prefer the Primary Button. Reserve the Secondary Button for situations where hierarchy between multiple actions is needed."})]}),e.jsx(i.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(me,{variant:"filled",label:"Confirm"}),e.jsx(a,{label:"Cancel"})]}),label:"Clear hierarchy",description:"Pair a filled Primary with a Secondary for clear action hierarchy."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{label:"Confirm"}),e.jsx(a,{label:"Cancel"})]}),label:"Two secondaries",description:"Don't use two Secondary Buttons side by side. It creates ambiguity about which action is primary."}}),e.jsx(i.Footer,{})]});h.__docgenInfo={description:"",methods:[],displayName:"SecondaryButtonDocs"};const je={title:"Atoms/Secondary Button",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(h,{})}},argTypes:{size:{control:"select",options:["small","default","large"]},label:{control:"text"},leadingIcon:{control:"select",options:["None","Person","Check","Add","Download"],mapping:{None:void 0,Person:n,Check:x,Add:y,Download:xe}},showLeadingIcon:{control:"boolean"},trailingIcon:{control:"select",options:["None","ArrowForward","Check","Add"],mapping:{None:void 0,ArrowForward:l,Check:x,Add:y}},showTrailingIcon:{control:"boolean"},iconOnly:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},r={render:()=>e.jsx(h,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},s={args:{label:"Label",size:"default"}},t={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{size:"small",label:"Small"}),e.jsx(a,{size:"default",label:"Default"}),e.jsx(a,{size:"large",label:"Large"})]}),parameters:{controls:{disable:!0}}},d={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,size:"small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,size:"large"})]}),parameters:{controls:{disable:!0}}},c={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{label:"Label",showTrailingIcon:!0,trailingIcon:l,size:"large"})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,size:"small"}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,size:"large"})]}),parameters:{controls:{disable:!0}}},p={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"small",ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{iconOnly:!0,leadingIcon:n,size:"large",ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Loading…",loading:!0,size:"small"}),e.jsx(a,{label:"Loading…",loading:!0}),e.jsx(a,{label:"Loading…",loading:!0,size:"large"})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:n,disabled:!0}),e.jsx(a,{label:"Disabled",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l,disabled:!0}),e.jsx(a,{iconOnly:!0,leadingIcon:n,disabled:!0,ariaLabel:"User"})]}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)"},children:["small","default","large"].map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em"},children:o}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-10px)"},children:[e.jsx(a,{size:o,label:"Label",showLeadingIcon:!0,leadingIcon:n,showTrailingIcon:!0,trailingIcon:l}),e.jsx(a,{size:o,label:"Label"}),e.jsx(a,{size:o,iconOnly:!0,leadingIcon:n,ariaLabel:"User"}),e.jsx(a,{size:o,label:"Disabled",disabled:!0}),e.jsx(a,{size:o,label:"Loading",loading:!0})]})]},o))}),parameters:{layout:"padded",controls:{disable:!0}}};var I,f,w,v,z;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source},description:{story:"Full documentation page for the Secondary Button component.",...(z=(v=r.parameters)==null?void 0:v.docs)==null?void 0:z.description}}};var L,j,S,T,B;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'default'
  }
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source},description:{story:"Default secondary button with label.",...(B=(T=s.parameters)==null?void 0:T.docs)==null?void 0:B.description}}};var D,k,C,F,P;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <SecondaryButton size="small" label="Small" />
      <SecondaryButton size="default" label="Default" />
      <SecondaryButton size="large" label="Large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.source},description:{story:"All three sizes.",...(P=(F=t.parameters)==null?void 0:F.docs)==null?void 0:P.description}}};var A,W,O,E,U;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="small" />
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} />
      <SecondaryButton label="Label" showLeadingIcon leadingIcon={PersonIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(O=(W=d.parameters)==null?void 0:W.docs)==null?void 0:O.source},description:{story:"Buttons with a leading icon.",...(U=(E=d.parameters)==null?void 0:E.docs)==null?void 0:U.description}}};var q,H,R,M,N;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="small" />
      <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} />
      <SecondaryButton label="Label" showTrailingIcon trailingIcon={ArrowForwardIcon} size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(H=c.parameters)==null?void 0:H.docs)==null?void 0:R.source},description:{story:"Buttons with a trailing icon.",...(N=(M=c.parameters)==null?void 0:M.docs)==null?void 0:N.description}}};var _,G,V,J,K;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(V=(G=g.parameters)==null?void 0:G.docs)==null?void 0:V.source},description:{story:"Buttons with both leading and trailing icons.",...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Y,Z,$;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <SecondaryButton iconOnly leadingIcon={PersonIcon} size="small" ariaLabel="User" />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} size="large" ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Icon-only buttons — square with 4px radius, no label.",...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var ee,ae,ne,ie,le;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:"Loading state — spinner replaces the leading icon.",...(le=(ie=b.parameters)==null?void 0:ie.docs)==null?void 0:le.description}}};var oe,re,se,te,de;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--global-spacing-sizing-12px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      <SecondaryButton label="Disabled" disabled />
      <SecondaryButton label="Disabled" showLeadingIcon leadingIcon={PersonIcon} disabled />
      <SecondaryButton label="Disabled" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} disabled />
      <SecondaryButton iconOnly leadingIcon={PersonIcon} disabled ariaLabel="User" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(re=u.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"Disabled state.",...(de=(te=u.parameters)==null?void 0:te.docs)==null?void 0:de.description}}};var ce,ge,pe,be,ue;m.parameters={...m.parameters,docs:{...(ce=m.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-24px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      {(['small', 'default', 'large'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-12px)'
    }}>
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
            {size}
          </span>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-10px)'
      }}>
            <SecondaryButton size={size} label="Label" showLeadingIcon leadingIcon={PersonIcon} showTrailingIcon trailingIcon={ArrowForwardIcon} />
            <SecondaryButton size={size} label="Label" />
            <SecondaryButton size={size} iconOnly leadingIcon={PersonIcon} ariaLabel="User" />
            <SecondaryButton size={size} label="Disabled" disabled />
            <SecondaryButton size={size} label="Loading" loading />
          </div>
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(pe=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:pe.source},description:{story:"Full size and state matrix.",...(ue=(be=m.parameters)==null?void 0:be.docs)==null?void 0:ue.description}}};const Se=["Documentation","Default","Sizes","WithLeadingIcon","WithTrailingIcon","WithBothIcons","IconOnly","Loading","Disabled","AllVariants"];export{m as AllVariants,s as Default,u as Disabled,r as Documentation,p as IconOnly,b as Loading,t as Sizes,g as WithBothIcons,d as WithLeadingIcon,c as WithTrailingIcon,Se as __namedExportsOrder,je as default};
