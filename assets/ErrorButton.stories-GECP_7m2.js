import{j as r}from"./iframe-BiVv4zEx.js";import{D as t}from"./DocsTemplate-B8XIGj2p.js";import"./preload-helper-Dp1pzeXC.js";const o={"btn-error":"_btn-error_1box8_16","btn-error--small":"_btn-error--small_1box8_65","btn-error--large":"_btn-error--large_1box8_73","btn-error--solid":"_btn-error--solid_1box8_81","btn-error--disabled":"_btn-error--disabled_1box8_87","btn-error--loading":"_btn-error--loading_1box8_108","btn-error--ghost":"_btn-error--ghost_1box8_115","btn-error__icon":"_btn-error__icon_1box8_162","btn-error__label":"_btn-error__label_1box8_170","btn-error__spinner":"_btn-error__spinner_1box8_177","btn-error-spin":"_btn-error-spin_1box8_1"},hr=()=>r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M11.6663 4.03075L9.96884 2.33325L6.99967 5.30242L4.03051 2.33325L2.33301 4.03075L5.30217 6.99992L2.33301 9.96909L4.03051 11.6666L6.99967 8.69742L9.96884 11.6666L11.6663 9.96909L8.69717 6.99992L11.6663 4.03075Z",fill:"currentColor"})}),mr=()=>r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M13.3337 4.60675L11.3937 2.66675L8.00033 6.06008L4.60699 2.66675L2.66699 4.60675L6.06033 8.00008L2.66699 11.3934L4.60699 13.3334L8.00033 9.94008L11.3937 13.3334L13.3337 11.3934L9.94033 8.00008L13.3337 4.60675Z",fill:"currentColor"})}),vr=()=>r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M15 5.1825L12.8175 3L9 6.8175L5.1825 3L3 5.1825L6.8175 9L3 12.8175L5.1825 15L9 11.1825L12.8175 15L15 12.8175L11.1825 9L15 5.1825Z",fill:"currentColor"})}),fr={small:hr,default:mr,large:vr},yr=({size:a})=>r.jsx("span",{className:o["btn-error__spinner"],"aria-hidden":"true"}),e=({label:a="Error button",variant:s="solid",size:h="default",loading:n=!1,disabled:m=!1,type:cr="button",onClick:pr,className:br="",ariaLabel:ur})=>{const gr=fr[h],xr=[o["btn-error"],o[`btn-error--${s}`],h!=="default"?o[`btn-error--${h}`]:"",n?o["btn-error--loading"]:"",m?o["btn-error--disabled"]:"",br].filter(Boolean).join(" ");return r.jsxs("button",{type:cr,className:xr,onClick:!m&&!n?pr:void 0,disabled:m||n,"aria-label":ur,"aria-busy":n||void 0,children:[n?r.jsx(yr,{size:h}):r.jsx("span",{className:o["btn-error__icon"],children:r.jsx(gr,{})}),r.jsx("span",{className:o["btn-error__label"],children:a})]})};e.__docgenInfo={description:"ErrorButton — status-specific button for error and destructive actions.\n\nTwo variants:\n- `solid` — red filled background with white icon + label (primary CTA for error state)\n- `ghost` — white background with red border, red icon + label (secondary CTA)\n\nAll three sizes: `small`, `default`, `large`.\nSupports: loading, disabled, and all interactive states (hover, focus, active).\n\nStorybook: Atoms / Buttons / StatusButton / ErrorButton",methods:[],displayName:"ErrorButton",props:{label:{required:!1,tsType:{name:"string"},description:"Display label",defaultValue:{value:"'Error button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'ghost'"}]},description:"Visual variant.\n- `solid` — red filled background, white text/icon\n- `ghost` — white background, red border & text/icon",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant — controls height, padding, font, and icon sizes",defaultValue:{value:"'default'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const v=()=>r.jsxs(t,{children:[r.jsx(t.Header,{title:"ErrorButton",subtitle:"A status-specific button for error and destructive actions within the NPX Design System"}),r.jsxs(t.BodyText,{children:["The ",r.jsx("strong",{children:"ErrorButton"})," is the primary CTA element used inside error-status notifications and modal cards. It comes in two visual variants —"," ",r.jsx("strong",{children:"solid"})," (red filled, white text) and ",r.jsx("strong",{children:"ghost"})," (white background, red border and text) — across three sizes. All styling is token-driven with no hardcoded values. It is always used inside a"," ",r.jsx("strong",{children:"CardContent"})," notification of status ",r.jsx("code",{children:"error"}),", where the solid variant serves as the primary call-to-action and the ghost variant as the secondary."]}),r.jsxs(t.Section,{title:"Component Anatomy",children:[r.jsx(t.BodyText,{children:"Each ErrorButton renders three inline elements: a leading close (×) icon, a text label, and — in the loading state — a CSS spinner that replaces the icon. The anatomy below maps each element to its controlling design token."}),r.jsx(t.Subsection,{title:"Solid",children:r.jsx(t.Anatomy,{preview:r.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-4px)",flexWrap:"wrap",alignItems:"center"},children:[r.jsx(e,{variant:"solid",size:"small",label:"Error button"}),r.jsx(e,{variant:"solid",size:"default",label:"Error button"}),r.jsx(e,{variant:"solid",size:"large",label:"Error button"})]}),parts:[{id:1,name:"Container",token:`--btn-error-solid-bg
--btn-error-solid-border-color
--btn-error-solid-border-width
--btn-border-radius`,description:"Outer shell. Fill: color/status/red (#CE2031). Border: 0.5px solid red. Hover adds 2×2px black drop shadow. Focus uses 2px border. Radius: 4px."},{id:2,name:"Leading Icon",token:`--btn-error-solid-color
--btn-icon-size-{size}`,description:"Close (×) icon — 14px small, 16px default, 18px large. Fill: white (currentColor). Hidden and replaced by spinner in loading state."},{id:3,name:"Label",token:`--btn-font-family
--btn-font-size-{size}
--btn-font-weight
--btn-error-solid-color`,description:"Button text. F37 Ginger Pro Light. 14/16/18px by size. Colour: color/base/white (#FFFFFF)."},{id:4,name:"Spinner",token:`--btn-spinner-size-{size}
--btn-spinner-border-width
--btn-spinner-opacity`,description:"CSS border-radius spinner shown only in loading state. Replaces the leading icon. Uses currentColor at 0.6 opacity."}]})}),r.jsx(t.Subsection,{title:"Ghost",children:r.jsx(t.Anatomy,{preview:r.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-4px)",flexWrap:"wrap",alignItems:"center"},children:[r.jsx(e,{variant:"ghost",size:"small",label:"Error button"}),r.jsx(e,{variant:"ghost",size:"default",label:"Error button"}),r.jsx(e,{variant:"ghost",size:"large",label:"Error button"})]}),parts:[{id:1,name:"Container",token:`--btn-error-ghost-bg
--btn-error-ghost-border-color
--btn-error-ghost-border-width
--btn-border-radius`,description:"Outer shell. Fill: white (#FFFFFF). Border: 1px solid red. Hover adds 2×2px black drop shadow and increases border to 2px. Radius: 4px."},{id:2,name:"Leading Icon",token:`--btn-error-ghost-color
--btn-icon-size-{size}`,description:"Close (×) icon — 14/16/18px. Fill: color/status/red (#CE2031). Hidden in loading state."},{id:3,name:"Label",token:`--btn-font-family
--btn-font-size-{size}
--btn-error-ghost-color`,description:"Button text. F37 Ginger Pro Light. Colour: color/status/red (#CE2031)."}]})})]}),r.jsxs(t.Section,{title:"Variants",children:[r.jsxs(t.BodyText,{children:["Two visual variants establish a clear action hierarchy within error-status contexts. Always pair ",r.jsx("strong",{children:"solid"})," as the primary action with ",r.jsx("strong",{children:"ghost"})," as the secondary — never two solid buttons side by side."]}),r.jsxs(t.Subsection,{title:"Solid — Primary CTA",children:[r.jsx(t.BodyText,{children:"Red filled background (#CE2031) with white text and icon. On hover a 2×2px black drop shadow is added. On focus the border increases to 2px with no shadow."}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[r.jsx(e,{variant:"solid",size:"small",label:"Error button"}),r.jsx(e,{variant:"solid",size:"default",label:"Error button"}),r.jsx(e,{variant:"solid",size:"large",label:"Error button"})]})]}),r.jsxs(t.Subsection,{title:"Ghost — Secondary CTA",children:[r.jsx(t.BodyText,{children:"White background with a 1px red border and red text/icon. On hover the border increases to 2px and a 2×2px black drop shadow is applied. On focus a 2px border, no shadow."}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[r.jsx(e,{variant:"ghost",size:"small",label:"Error button"}),r.jsx(e,{variant:"ghost",size:"default",label:"Error button"}),r.jsx(e,{variant:"ghost",size:"large",label:"Error button"})]})]})]}),r.jsxs(t.Section,{title:"Sizes",children:[r.jsxs(t.BodyText,{children:["Three sizes scale the button for different card contexts. The size is set automatically by the parent ",r.jsx("strong",{children:"CardContent"})," component via its ",r.jsx("code",{children:"size"})," prop (small → xs, default → sm, large → md in ButtonGroup)."]}),r.jsx(t.SizeDemo,{rows:[{label:"Small",sublabel:"34px height — compact notification cards",children:r.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[r.jsx(e,{variant:"solid",size:"small",label:"Error button"}),r.jsx(e,{variant:"ghost",size:"small",label:"Error button"})]})},{label:"Default",sublabel:"44px height — standard notification cards",children:r.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[r.jsx(e,{variant:"solid",size:"default",label:"Error button"}),r.jsx(e,{variant:"ghost",size:"default",label:"Error button"})]})},{label:"Large",sublabel:"56px height — prominent error modals",children:r.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[r.jsx(e,{variant:"solid",size:"large",label:"Error button"}),r.jsx(e,{variant:"ghost",size:"large",label:"Error button"})]})}]})]}),r.jsxs(t.Section,{title:"States",children:[r.jsxs(t.Subsection,{title:"Loading",children:[r.jsxs(t.BodyText,{children:["Pass ",r.jsx("code",{children:"loading"})," to replace the leading icon with a spinning CSS animation. The trailing icon is hidden and the button is non-interactive. The border uses the default stroke weight while loading."]}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[r.jsx(e,{variant:"solid",size:"small",label:"Error button",loading:!0}),r.jsx(e,{variant:"solid",size:"default",label:"Error button",loading:!0}),r.jsx(e,{variant:"solid",size:"large",label:"Error button",loading:!0}),r.jsx(e,{variant:"ghost",size:"default",label:"Error button",loading:!0})]})]}),r.jsxs(t.Subsection,{title:"Disabled",children:[r.jsx(t.BodyText,{children:"Disabled state uses explicit grey tokens (no opacity reduction). Both variants share the same disabled appearance: grey-100 background, grey-400 text and border at 0.5px."}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[r.jsx(e,{variant:"solid",size:"small",label:"Label",disabled:!0}),r.jsx(e,{variant:"solid",size:"default",label:"Label",disabled:!0}),r.jsx(e,{variant:"solid",size:"large",label:"Label",disabled:!0}),r.jsx(e,{variant:"ghost",size:"default",label:"Label",disabled:!0})]})]})]}),r.jsx(t.TokenTable,{title:"Design Tokens — Solid Variant",description:"Colour tokens for the solid (primary) error button:",tokens:[{name:"--btn-error-solid-bg",description:"Background — var(--global-color-status-red) #CE2031"},{name:"--btn-error-solid-color",description:"Text & icon colour — var(--global-color-base-white) #FFFFFF"},{name:"--btn-error-solid-border-color",description:"Border colour (all states) — var(--global-color-status-red) #CE2031"},{name:"--btn-error-solid-border-width",description:"Default border width — var(--global-spacing-stroke-0-5px) 0.5px"},{name:"--btn-error-solid-border-width-hover",description:"Hover border width — var(--global-spacing-stroke-2px) 2px"},{name:"--btn-error-solid-shadow-hover",description:"Drop shadow on hover/active — 2px 2px 0px 0px #1C1C1C (black)"},{name:"--btn-error-solid-border-width-focus",description:"Focus border width — var(--global-spacing-stroke-2px) 2px"},{name:"--btn-error-solid-border-width-loading",description:"Loading border width — var(--global-spacing-stroke-0-5px) 0.5px"}]}),r.jsx(t.TokenTable,{title:"Design Tokens — Ghost Variant",description:"Colour tokens for the ghost (secondary) error button:",tokens:[{name:"--btn-error-ghost-bg",description:"Background — var(--global-color-base-white) #FFFFFF"},{name:"--btn-error-ghost-color",description:"Text & icon colour — var(--global-color-status-red) #CE2031"},{name:"--btn-error-ghost-border-color",description:"Border colour — var(--global-color-status-red) #CE2031"},{name:"--btn-error-ghost-border-width",description:"Default border width — var(--global-spacing-stroke-1px) 1px"},{name:"--btn-error-ghost-border-width-hover",description:"Hover border width — var(--global-spacing-stroke-2px) 2px"},{name:"--btn-error-ghost-shadow-hover",description:"Drop shadow on hover/active — 2px 2px 0px 0px #1C1C1C (black)"},{name:"--btn-error-ghost-border-width-focus",description:"Focus border width — var(--global-spacing-stroke-2px) 2px"}]}),r.jsx(t.TokenTable,{title:"Design Tokens — Disabled (shared)",description:"Tokens applied to both variants in the disabled state:",tokens:[{name:"--btn-error-bg-disabled",description:"Background — var(--global-color-neutral-gray-100) #F3F4F6"},{name:"--btn-error-color-disabled",description:"Text & icon colour — var(--global-color-neutral-gray-400) #9CA3AF"},{name:"--btn-error-border-color-disabled",description:"Border colour — var(--global-color-neutral-gray-400) #9CA3AF"},{name:"--btn-error-border-width-disabled",description:"Border width — var(--global-spacing-stroke-0-5px) 0.5px"}]}),r.jsx(t.CodeBlock,{children:`import { ErrorButton } from '@/components/Button/ErrorButton/ErrorButton';

// Solid (primary CTA)
<ErrorButton variant="solid" label="Error button" />

// Ghost (secondary CTA)
<ErrorButton variant="ghost" label="Error button" />

// Size variants
<ErrorButton variant="solid" size="small" label="Error button" />
<ErrorButton variant="solid" size="large" label="Error button" />

// Loading state
<ErrorButton variant="solid" label="Error button" loading />

// Disabled state
<ErrorButton variant="solid" label="Label" disabled />

// Inside a CardContent (tokens applied automatically via status class)
<CardContent variant="notification" status="error" heading="An error occurred" />`}),r.jsxs(t.Principles,{children:[r.jsxs(t.PrincipleCard,{number:1,title:"One solid per error context",children:["Each error notification or card should have exactly one ",r.jsx("strong",{children:"solid"})," ErrorButton as the primary CTA. Pair it with a ",r.jsx("strong",{children:"ghost"}),' for secondary actions (e.g. "Dismiss" or "Cancel").']}),r.jsx(t.PrincipleCard,{number:2,title:"Reserve for error status only",children:"Do not use ErrorButton in success, warning, or info contexts. Use the corresponding SuccessButton, WarningButton, or standard ButtonGroup instead."}),r.jsxs(t.PrincipleCard,{number:3,title:"Never override status tokens",children:["All colours must come from ",r.jsx("code",{children:"--btn-error-*"})," tokens. Do not hardcode red values or add local CSS overrides. If the status colour needs to change, update the token."]})]}),r.jsx(t.DosDonts,{doItem:{icon:r.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[r.jsx(e,{variant:"solid",label:"Error button"}),r.jsx(e,{variant:"ghost",label:"Error button"})]}),label:"Solid + Ghost pair",description:"Use solid as the primary action and ghost as the secondary — clear visual hierarchy within the error card."},dontItem:{icon:r.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[r.jsx(e,{variant:"solid",label:"Error button"}),r.jsx(e,{variant:"solid",label:"Error button"})]}),label:"Two solid buttons",description:"Don't use two solid ErrorButtons side by side. It creates confusion about which action is primary."}}),r.jsx(t.RelatedLinks,{links:[{label:"Figma Library",href:"https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1"},{label:"CardContent component",href:"/?path=/story/atoms-cardcontent--documentation"},{label:"WarningButton",href:"/?path=/story/atoms-buttons-statusbutton-warningbutton--documentation"},{label:"SuccessButton",href:"/?path=/story/atoms-buttons-statusbutton-successbutton--documentation"}]}),r.jsx(t.Footer,{})]});v.__docgenInfo={description:"",methods:[],displayName:"ErrorButtonDocs"};const wr={title:"Atoms/Buttons/StatusButton/ErrorButton",component:e,parameters:{layout:"centered",docs:{page:()=>r.jsx(v,{})}},argTypes:{variant:{control:"select",options:["solid","ghost"],description:"Visual style — solid (filled red) or ghost (outline)"},size:{control:"select",options:["small","default","large"]},label:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},l={render:()=>r.jsx(v,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},i={args:{label:"Error button",variant:"solid",size:"default",loading:!1,disabled:!1}},d={args:{label:"Error button",variant:"solid",size:"default"}},c={args:{label:"Error button",variant:"ghost",size:"default"}},p={render:()=>r.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",padding:"16px"},children:[r.jsx(e,{variant:"solid",label:"Error button"}),r.jsx(e,{variant:"ghost",label:"Error button"})]}),parameters:{controls:{disable:!0}}},b={render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["solid","ghost"].map(a=>r.jsxs("div",{children:[r.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 10px"},children:a}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[r.jsx(e,{variant:a,size:"small",label:"Error button"}),r.jsx(e,{variant:a,size:"default",label:"Error button"}),r.jsx(e,{variant:a,size:"large",label:"Error button"})]})]},a))}),parameters:{layout:"padded",controls:{disable:!0}}},u={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px"},children:[r.jsx(e,{variant:"solid",size:"small",label:"Error button",loading:!0}),r.jsx(e,{variant:"solid",size:"default",label:"Error button",loading:!0}),r.jsx(e,{variant:"solid",size:"large",label:"Error button",loading:!0}),r.jsx(e,{variant:"ghost",size:"small",label:"Error button",loading:!0}),r.jsx(e,{variant:"ghost",size:"default",label:"Error button",loading:!0}),r.jsx(e,{variant:"ghost",size:"large",label:"Error button",loading:!0})]}),parameters:{controls:{disable:!0}}},g={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px"},children:[r.jsx(e,{variant:"solid",size:"small",label:"Label",disabled:!0}),r.jsx(e,{variant:"solid",size:"default",label:"Label",disabled:!0}),r.jsx(e,{variant:"solid",size:"large",label:"Label",disabled:!0}),r.jsx(e,{variant:"ghost",size:"small",label:"Label",disabled:!0}),r.jsx(e,{variant:"ghost",size:"default",label:"Label",disabled:!0}),r.jsx(e,{variant:"ghost",size:"large",label:"Label",disabled:!0})]}),parameters:{controls:{disable:!0}}},x={render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"32px"},children:["solid","ghost"].map(a=>r.jsxs("div",{children:[r.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:300,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 16px",borderBottom:"1px solid var(--global-color-neutral-gray-200)",paddingBottom:"8px"},children:a}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["small","default","large"].map(s=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[r.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",minWidth:"52px",textTransform:"capitalize"},children:s}),r.jsx(e,{variant:a,size:s,label:"Error button"}),r.jsx(e,{variant:a,size:s,label:"Error button",loading:!0}),r.jsx(e,{variant:a,size:s,label:"Label",disabled:!0})]},s))})]},a))}),parameters:{layout:"padded",controls:{disable:!0}}};var f,y,j,E,z;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <ErrorButtonDocs />,
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
}`,...(j=(y=l.parameters)==null?void 0:y.docs)==null?void 0:j.source},description:{story:"Full documentation — design specs, token table, and usage examples.",...(z=(E=l.parameters)==null?void 0:E.docs)==null?void 0:z.description}}};var w,B,L,S,C;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Error button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false
  }
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source},description:{story:"Interactive playground — adjust all props via the Controls panel.",...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.description}}};var k,T,_,F,D;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Error button',
    variant: 'solid',
    size: 'default'
  }
}`,...(_=(T=d.parameters)==null?void 0:T.docs)==null?void 0:_.source},description:{story:`Solid variant — filled red background, white text and icon.
Use as the primary CTA in error state components.`,...(D=(F=d.parameters)==null?void 0:F.docs)==null?void 0:D.description}}};var I,A,W,V,R;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Error button',
    variant: 'ghost',
    size: 'default'
  }
}`,...(W=(A=c.parameters)==null?void 0:A.docs)==null?void 0:W.source},description:{story:`Ghost / alt variant — white background, red border and text.
Use as the secondary CTA alongside the solid error button.`,...(R=(V=c.parameters)==null?void 0:V.docs)==null?void 0:R.description}}};var G,H,N,P,M;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    padding: '16px'
  }}>
      <ErrorButton variant="solid" label="Error button" />
      <ErrorButton variant="ghost" label="Error button" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(H=p.parameters)==null?void 0:H.docs)==null?void 0:N.source},description:{story:"Both variants side by side — as they appear in an error CardContent ButtonGroup.",...(M=(P=p.parameters)==null?void 0:P.docs)==null?void 0:M.description}}};var O,q,U,X,Z;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>
      {(['solid', 'ghost'] as const).map(variant => <div key={variant}>
          <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-400)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: '0 0 10px'
      }}>
            {variant}
          </p>
          <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
            <ErrorButton variant={variant} size="small" label="Error button" />
            <ErrorButton variant={variant} size="default" label="Error button" />
            <ErrorButton variant={variant} size="large" label="Error button" />
          </div>
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(U=(q=b.parameters)==null?void 0:q.docs)==null?void 0:U.source},description:{story:"All three sizes — small (34px), default (44px), large (56px).",...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var Y,$,J,K,Q;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px'
  }}>
      <ErrorButton variant="solid" size="small" label="Error button" loading />
      <ErrorButton variant="solid" size="default" label="Error button" loading />
      <ErrorButton variant="solid" size="large" label="Error button" loading />
      <ErrorButton variant="ghost" size="small" label="Error button" loading />
      <ErrorButton variant="ghost" size="default" label="Error button" loading />
      <ErrorButton variant="ghost" size="large" label="Error button" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=($=u.parameters)==null?void 0:$.docs)==null?void 0:J.source},description:{story:"Loading state — spinner replaces the leading icon.",...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var rr,er,tr,ar,or;g.parameters={...g.parameters,docs:{...(rr=g.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px'
  }}>
      <ErrorButton variant="solid" size="small" label="Label" disabled />
      <ErrorButton variant="solid" size="default" label="Label" disabled />
      <ErrorButton variant="solid" size="large" label="Label" disabled />
      <ErrorButton variant="ghost" size="small" label="Label" disabled />
      <ErrorButton variant="ghost" size="default" label="Label" disabled />
      <ErrorButton variant="ghost" size="large" label="Label" disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(tr=(er=g.parameters)==null?void 0:er.docs)==null?void 0:tr.source},description:{story:"Disabled state — grey background, grey text, not interactive.",...(or=(ar=g.parameters)==null?void 0:ar.docs)==null?void 0:or.description}}};var sr,nr,lr,ir,dr;x.parameters={...x.parameters,docs:{...(sr=x.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '32px'
  }}>
      {(['solid', 'ghost'] as const).map(variant => <div key={variant}>
          <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 300,
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: '0 0 16px',
        borderBottom: '1px solid var(--global-color-neutral-gray-200)',
        paddingBottom: '8px'
      }}>
            {variant}
          </p>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
            {(['small', 'default', 'large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
                <span style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            color: 'var(--global-color-neutral-gray-400)',
            minWidth: '52px',
            textTransform: 'capitalize'
          }}>
                  {size}
                </span>
                <ErrorButton variant={variant} size={size} label="Error button" />
                <ErrorButton variant={variant} size={size} label="Error button" loading />
                <ErrorButton variant={variant} size={size} label="Label" disabled />
              </div>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(lr=(nr=x.parameters)==null?void 0:nr.docs)==null?void 0:lr.source},description:{story:"Full state matrix — all combinations of variant × size × state.",...(dr=(ir=x.parameters)==null?void 0:ir.docs)==null?void 0:dr.description}}};const Br=["Documentation","Playground","Solid","Ghost","BothVariants","Sizes","Loading","Disabled","AllStates"];export{x as AllStates,p as BothVariants,g as Disabled,l as Documentation,c as Ghost,u as Loading,i as Playground,b as Sizes,d as Solid,Br as __namedExportsOrder,wr as default};
