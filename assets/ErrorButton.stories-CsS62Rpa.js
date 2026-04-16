import{j as e}from"./iframe-CrOQID5z.js";import{B as ve}from"./ButtonBase-AS9UcvOB.js";import{D as a}from"./DocsTemplate-BaK0TYDA.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-sc7h-EHC.js";import"./index-CF3xkfHL.js";import"./useEventCallback-TxnDBXxM.js";import"./useForkRef-5w6NzoCB.js";const s={"btn-error":"_btn-error_1box8_16","btn-error--small":"_btn-error--small_1box8_65","btn-error--large":"_btn-error--large_1box8_73","btn-error--solid":"_btn-error--solid_1box8_81","btn-error--disabled":"_btn-error--disabled_1box8_87","btn-error--loading":"_btn-error--loading_1box8_108","btn-error--ghost":"_btn-error--ghost_1box8_115","btn-error__icon":"_btn-error__icon_1box8_162","btn-error__label":"_btn-error__label_1box8_170","btn-error__spinner":"_btn-error__spinner_1box8_177","btn-error-spin":"_btn-error-spin_1box8_1"},fe=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M11.6663 4.03075L9.96884 2.33325L6.99967 5.30242L4.03051 2.33325L2.33301 4.03075L5.30217 6.99992L2.33301 9.96909L4.03051 11.6666L6.99967 8.69742L9.96884 11.6666L11.6663 9.96909L8.69717 6.99992L11.6663 4.03075Z",fill:"currentColor"})}),ye=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M13.3337 4.60675L11.3937 2.66675L8.00033 6.06008L4.60699 2.66675L2.66699 4.60675L6.06033 8.00008L2.66699 11.3934L4.60699 13.3334L8.00033 9.94008L11.3937 13.3334L13.3337 11.3934L9.94033 8.00008L13.3337 4.60675Z",fill:"currentColor"})}),je=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M15 5.1825L12.8175 3L9 6.8175L5.1825 3L3 5.1825L6.8175 9L3 12.8175L5.1825 15L9 11.1825L12.8175 15L15 12.8175L11.1825 9L15 5.1825Z",fill:"currentColor"})}),Ee={small:fe,default:ye,large:je},we=({size:t})=>e.jsx("span",{className:s["btn-error__spinner"],"aria-hidden":"true"}),r=({label:t="Error button",variant:o="solid",size:n="default",loading:l=!1,disabled:y=!1,type:ue="button",onClick:be,className:ge="",ariaLabel:xe})=>{const me=Ee[n],he=[s["btn-error"],s[`btn-error--${o}`],n!=="default"?s[`btn-error--${n}`]:"",l?s["btn-error--loading"]:"",y?s["btn-error--disabled"]:"",ge].filter(Boolean).join(" ");return e.jsxs(ve,{component:"button",type:ue,className:he,onClick:!y&&!l?be:void 0,disabled:y||l,"aria-label":xe,"aria-busy":l||void 0,children:[l?e.jsx(we,{size:n}):e.jsx("span",{className:s["btn-error__icon"],children:e.jsx(me,{})}),e.jsx("span",{className:s["btn-error__label"],children:t})]})};r.__docgenInfo={description:"ErrorButton — status-specific button for error and destructive actions.\n\nTwo variants:\n- `solid` — red filled background with white icon + label (primary CTA for error state)\n- `ghost` — white background with red border, red icon + label (secondary CTA)\n\nAll three sizes: `small`, `default`, `large`.\nSupports: loading, disabled, and all interactive states (hover, focus, active).\n\nStorybook: Atoms / Buttons / StatusButton / ErrorButton",methods:[],displayName:"ErrorButton",props:{label:{required:!1,tsType:{name:"string"},description:"Display label",defaultValue:{value:"'Error button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'ghost'"}]},description:"Visual variant.\n- `solid` — red filled background, white text/icon\n- `ghost` — white background, red border & text/icon",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant — controls height, padding, font, and icon sizes",defaultValue:{value:"'default'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const j=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"ErrorButton",subtitle:"A status-specific button for error and destructive actions within the NPX Design System"}),e.jsxs(a.BodyText,{children:["The ",e.jsx("strong",{children:"ErrorButton"})," is the primary CTA element used inside error-status notifications and modal cards. It comes in two visual variants —"," ",e.jsx("strong",{children:"solid"})," (red filled, white text) and ",e.jsx("strong",{children:"ghost"})," (white background, red border and text) — across three sizes. All styling is token-driven with no hardcoded values. It is always used inside a"," ",e.jsx("strong",{children:"CardContent"})," notification of status ",e.jsx("code",{children:"error"}),", where the solid variant serves as the primary call-to-action and the ghost variant as the secondary."]}),e.jsxs(a.Section,{title:"MUI Foundation",children:[e.jsxs(a.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"ButtonBase"})," — the accessible, zero-style primitive shared across all button types in the design system. ",e.jsx("code",{children:"ButtonBase"})," handles keyboard activation, disabled state propagation, and native ",e.jsx("code",{children:"<button>"})," semantics. ErrorButton's red palette, border mechanics, and state transitions are applied entirely via CSS Modules and the ",e.jsx("code",{children:"--btn-error-*"})," token family."]}),e.jsx(a.CodeBlock,{children:`// MUI base import
import ButtonBase from '@mui/material/ButtonBase';

// Root element of ErrorButton:
<ButtonBase component="button" className={styles['error-btn']} disabled={disabled} onClick={onClick}>`})]}),e.jsxs(a.Section,{title:"Component Anatomy",children:[e.jsx(a.BodyText,{children:"Each ErrorButton renders three inline elements: a leading close (×) icon, a text label, and — in the loading state — a CSS spinner that replaces the icon. The anatomy below maps each element to its controlling design token."}),e.jsx(a.Subsection,{title:"Solid",children:e.jsx(a.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-4px)",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{variant:"solid",size:"small",label:"Error button"}),e.jsx(r,{variant:"solid",size:"default",label:"Error button"}),e.jsx(r,{variant:"solid",size:"large",label:"Error button"})]}),parts:[{id:1,name:"Container",token:`--btn-error-solid-bg
--btn-error-solid-border-color
--btn-error-solid-border-width
--btn-border-radius`,description:"Outer shell. Fill: color/status/red (#CE2031). Border: 0.5px solid red. Hover adds 2×2px black drop shadow. Focus uses 2px border. Radius: 4px."},{id:2,name:"Leading Icon",token:`--btn-error-solid-color
--btn-icon-size-{size}`,description:"Close (×) icon — 14px small, 16px default, 18px large. Fill: white (currentColor). Hidden and replaced by spinner in loading state."},{id:3,name:"Label",token:`--btn-font-family
--btn-font-size-{size}
--btn-font-weight
--btn-error-solid-color`,description:"Button text. F37 Ginger Pro Light. 14/16/18px by size. Colour: color/base/white (#FFFFFF)."},{id:4,name:"Spinner",token:`--btn-spinner-size-{size}
--btn-spinner-border-width
--btn-spinner-opacity`,description:"CSS border-radius spinner shown only in loading state. Replaces the leading icon. Uses currentColor at 0.6 opacity."}]})}),e.jsx(a.Subsection,{title:"Ghost",children:e.jsx(a.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-4px)",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(r,{variant:"ghost",size:"small",label:"Error button"}),e.jsx(r,{variant:"ghost",size:"default",label:"Error button"}),e.jsx(r,{variant:"ghost",size:"large",label:"Error button"})]}),parts:[{id:1,name:"Container",token:`--btn-error-ghost-bg
--btn-error-ghost-border-color
--btn-error-ghost-border-width
--btn-border-radius`,description:"Outer shell. Fill: white (#FFFFFF). Border: 1px solid red. Hover adds 2×2px black drop shadow and increases border to 2px. Radius: 4px."},{id:2,name:"Leading Icon",token:`--btn-error-ghost-color
--btn-icon-size-{size}`,description:"Close (×) icon — 14/16/18px. Fill: color/status/red (#CE2031). Hidden in loading state."},{id:3,name:"Label",token:`--btn-font-family
--btn-font-size-{size}
--btn-error-ghost-color`,description:"Button text. F37 Ginger Pro Light. Colour: color/status/red (#CE2031)."}]})})]}),e.jsxs(a.Section,{title:"Variants",children:[e.jsxs(a.BodyText,{children:["Two visual variants establish a clear action hierarchy within error-status contexts. Always pair ",e.jsx("strong",{children:"solid"})," as the primary action with ",e.jsx("strong",{children:"ghost"})," as the secondary — never two solid buttons side by side."]}),e.jsxs(a.Subsection,{title:"Solid — Primary CTA",children:[e.jsx(a.BodyText,{children:"Red filled background (#CE2031) with white text and icon. On hover a 2×2px black drop shadow is added. On focus the border increases to 2px with no shadow."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(r,{variant:"solid",size:"small",label:"Error button"}),e.jsx(r,{variant:"solid",size:"default",label:"Error button"}),e.jsx(r,{variant:"solid",size:"large",label:"Error button"})]})]}),e.jsxs(a.Subsection,{title:"Ghost — Secondary CTA",children:[e.jsx(a.BodyText,{children:"White background with a 1px red border and red text/icon. On hover the border increases to 2px and a 2×2px black drop shadow is applied. On focus a 2px border, no shadow."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(r,{variant:"ghost",size:"small",label:"Error button"}),e.jsx(r,{variant:"ghost",size:"default",label:"Error button"}),e.jsx(r,{variant:"ghost",size:"large",label:"Error button"})]})]})]}),e.jsxs(a.Section,{title:"Sizes",children:[e.jsxs(a.BodyText,{children:["Three sizes scale the button for different card contexts. The size is set automatically by the parent ",e.jsx("strong",{children:"CardContent"})," component via its ",e.jsx("code",{children:"size"})," prop (small → xs, default → sm, large → md in ButtonGroup)."]}),e.jsx(a.SizeDemo,{rows:[{label:"Small",sublabel:"34px height — compact notification cards",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{variant:"solid",size:"small",label:"Error button"}),e.jsx(r,{variant:"ghost",size:"small",label:"Error button"})]})},{label:"Default",sublabel:"44px height — standard notification cards",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{variant:"solid",size:"default",label:"Error button"}),e.jsx(r,{variant:"ghost",size:"default",label:"Error button"})]})},{label:"Large",sublabel:"56px height — prominent error modals",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(r,{variant:"solid",size:"large",label:"Error button"}),e.jsx(r,{variant:"ghost",size:"large",label:"Error button"})]})}]})]}),e.jsxs(a.Section,{title:"States",children:[e.jsxs(a.Subsection,{title:"Loading",children:[e.jsxs(a.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to replace the leading icon with a spinning CSS animation. The trailing icon is hidden and the button is non-interactive. The border uses the default stroke weight while loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(r,{variant:"solid",size:"small",label:"Error button",loading:!0}),e.jsx(r,{variant:"solid",size:"default",label:"Error button",loading:!0}),e.jsx(r,{variant:"solid",size:"large",label:"Error button",loading:!0}),e.jsx(r,{variant:"ghost",size:"default",label:"Error button",loading:!0})]})]}),e.jsxs(a.Subsection,{title:"Disabled",children:[e.jsx(a.BodyText,{children:"Disabled state uses explicit grey tokens (no opacity reduction). Both variants share the same disabled appearance: grey-100 background, grey-400 text and border at 0.5px."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(r,{variant:"solid",size:"small",label:"Label",disabled:!0}),e.jsx(r,{variant:"solid",size:"default",label:"Label",disabled:!0}),e.jsx(r,{variant:"solid",size:"large",label:"Label",disabled:!0}),e.jsx(r,{variant:"ghost",size:"default",label:"Label",disabled:!0})]})]})]}),e.jsx(a.TokenTable,{title:"Design Tokens — Solid Variant",description:"Colour tokens for the solid (primary) error button:",tokens:[{name:"--btn-error-solid-bg",description:"Background — var(--global-color-status-red) #CE2031"},{name:"--btn-error-solid-color",description:"Text & icon colour — var(--global-color-base-white) #FFFFFF"},{name:"--btn-error-solid-border-color",description:"Border colour (all states) — var(--global-color-status-red) #CE2031"},{name:"--btn-error-solid-border-width",description:"Default border width — var(--global-spacing-stroke-0-5px) 0.5px"},{name:"--btn-error-solid-border-width-hover",description:"Hover border width — var(--global-spacing-stroke-2px) 2px"},{name:"--btn-error-solid-shadow-hover",description:"Drop shadow on hover/active — 2px 2px 0px 0px #1C1C1C (black)"},{name:"--btn-error-solid-border-width-focus",description:"Focus border width — var(--global-spacing-stroke-2px) 2px"},{name:"--btn-error-solid-border-width-loading",description:"Loading border width — var(--global-spacing-stroke-0-5px) 0.5px"}]}),e.jsx(a.TokenTable,{title:"Design Tokens — Ghost Variant",description:"Colour tokens for the ghost (secondary) error button:",tokens:[{name:"--btn-error-ghost-bg",description:"Background — var(--global-color-base-white) #FFFFFF"},{name:"--btn-error-ghost-color",description:"Text & icon colour — var(--global-color-status-red) #CE2031"},{name:"--btn-error-ghost-border-color",description:"Border colour — var(--global-color-status-red) #CE2031"},{name:"--btn-error-ghost-border-width",description:"Default border width — var(--global-spacing-stroke-1px) 1px"},{name:"--btn-error-ghost-border-width-hover",description:"Hover border width — var(--global-spacing-stroke-2px) 2px"},{name:"--btn-error-ghost-shadow-hover",description:"Drop shadow on hover/active — 2px 2px 0px 0px #1C1C1C (black)"},{name:"--btn-error-ghost-border-width-focus",description:"Focus border width — var(--global-spacing-stroke-2px) 2px"}]}),e.jsx(a.TokenTable,{title:"Design Tokens — Disabled (shared)",description:"Tokens applied to both variants in the disabled state:",tokens:[{name:"--btn-error-bg-disabled",description:"Background — var(--global-color-neutral-gray-100) #F3F4F6"},{name:"--btn-error-color-disabled",description:"Text & icon colour — var(--global-color-neutral-gray-400) #9CA3AF"},{name:"--btn-error-border-color-disabled",description:"Border colour — var(--global-color-neutral-gray-400) #9CA3AF"},{name:"--btn-error-border-width-disabled",description:"Border width — var(--global-spacing-stroke-0-5px) 0.5px"}]}),e.jsx(a.CodeBlock,{children:`import { ErrorButton } from '@/components/Button/ErrorButton/ErrorButton';

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
<CardContent variant="notification" status="error" heading="An error occurred" />`}),e.jsxs(a.Principles,{children:[e.jsxs(a.PrincipleCard,{number:1,title:"One solid per error context",children:["Each error notification or card should have exactly one ",e.jsx("strong",{children:"solid"})," ErrorButton as the primary CTA. Pair it with a ",e.jsx("strong",{children:"ghost"}),' for secondary actions (e.g. "Dismiss" or "Cancel").']}),e.jsx(a.PrincipleCard,{number:2,title:"Reserve for error status only",children:"Do not use ErrorButton in success, warning, or info contexts. Use the corresponding SuccessButton, WarningButton, or standard ButtonGroup instead."}),e.jsxs(a.PrincipleCard,{number:3,title:"Never override status tokens",children:["All colours must come from ",e.jsx("code",{children:"--btn-error-*"})," tokens. Do not hardcode red values or add local CSS overrides. If the status colour needs to change, update the token."]})]}),e.jsx(a.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(r,{variant:"solid",label:"Error button"}),e.jsx(r,{variant:"ghost",label:"Error button"})]}),label:"Solid + Ghost pair",description:"Use solid as the primary action and ghost as the secondary — clear visual hierarchy within the error card."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(r,{variant:"solid",label:"Error button"}),e.jsx(r,{variant:"solid",label:"Error button"})]}),label:"Two solid buttons",description:"Don't use two solid ErrorButtons side by side. It creates confusion about which action is primary."}}),e.jsx(a.RelatedLinks,{links:[{label:"Figma Library",href:"https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1"},{label:"CardContent component",href:"/?path=/story/atoms-cardcontent--documentation"},{label:"WarningButton",href:"/?path=/story/atoms-buttons-statusbutton-warningbutton--documentation"},{label:"SuccessButton",href:"/?path=/story/atoms-buttons-statusbutton-successbutton--documentation"}]}),e.jsx(a.Footer,{})]});j.__docgenInfo={description:"",methods:[],displayName:"ErrorButtonDocs"};const Fe={title:"Atoms/Buttons/StatusButton/ErrorButton",component:r,parameters:{layout:"centered",docs:{page:()=>e.jsx(j,{})}},argTypes:{variant:{control:"select",options:["solid","ghost"],description:"Visual style — solid (filled red) or ghost (outline)"},size:{control:"select",options:["small","default","large"]},label:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},i={name:"Documentation",render:()=>e.jsx(j,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},d={name:"Playground",args:{label:"Error button",variant:"solid",size:"default",loading:!1,disabled:!1}},u={name:"Default",args:{label:"Error button",variant:"solid",size:"default"}},c={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["solid","ghost"].map(t=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 10px"},children:t}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx(r,{variant:t,size:"small",label:"Error button"}),e.jsx(r,{variant:t,size:"default",label:"Error button"}),e.jsx(r,{variant:t,size:"large",label:"Error button"})]})]},t))}),parameters:{layout:"padded",controls:{disable:!0}}},b={name:"Status / Solid",args:{label:"Error button",variant:"solid",size:"default"}},g={name:"Status / Ghost",args:{label:"Error button",variant:"ghost",size:"default"}},x={name:"Status / Loading",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",padding:"16px"},children:[e.jsx(r,{variant:"solid",label:"Loading",loading:!0}),e.jsx(r,{variant:"ghost",label:"Loading",loading:!0})]}),parameters:{controls:{disable:!0}}},m={name:"Status / Disabled",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",padding:"16px"},children:[e.jsx(r,{variant:"solid",label:"Disabled",disabled:!0}),e.jsx(r,{variant:"ghost",label:"Disabled",disabled:!0})]}),parameters:{controls:{disable:!0}}},h={name:"Component Breakdown",render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"24px"},children:[["Solid variant",e.jsx(r,{variant:"solid",label:"Label"}),"--btn-error-solid-bg / --btn-error-solid-color"],["Ghost variant",e.jsx(r,{variant:"ghost",label:"Label"}),"--btn-error-ghost-border / --btn-error-ghost-color"]].map(([t,o,n])=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,fontFamily:"var(--brand-font-primary)",color:"var(--global-color-neutral-gray-600)"},children:t}),o,e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px",fontFamily:"monospace",color:"var(--global-color-neutral-gray-500)"},children:n})]},t))}),parameters:{controls:{disable:!0}}},v={name:"All Interactive States",render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",padding:"24px"},children:["Default","Loading","Disabled"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[e.jsx(r,{variant:"solid",label:t,loading:t==="Loading",disabled:t==="Disabled"}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:t.toLowerCase()})]},t))}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px"},children:[e.jsx(r,{variant:"solid",size:"small",label:"Error button",loading:!0}),e.jsx(r,{variant:"solid",size:"default",label:"Error button",loading:!0}),e.jsx(r,{variant:"solid",size:"large",label:"Error button",loading:!0}),e.jsx(r,{variant:"ghost",size:"small",label:"Error button",loading:!0}),e.jsx(r,{variant:"ghost",size:"default",label:"Error button",loading:!0}),e.jsx(r,{variant:"ghost",size:"large",label:"Error button",loading:!0})]}),parameters:{controls:{disable:!0}}},p={name:"Full Design Matrix (18 variants)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"32px"},children:["solid","ghost"].map(t=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:300,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 16px",borderBottom:"1px solid var(--global-color-neutral-gray-200)",paddingBottom:"8px"},children:t}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["small","default","large"].map(o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",minWidth:"52px",textTransform:"capitalize"},children:o}),e.jsx(r,{variant:t,size:o,label:"Error button"}),e.jsx(r,{variant:t,size:o,label:"Error button",loading:!0}),e.jsx(r,{variant:t,size:o,label:"Label",disabled:!0})]},o))})]},t))}),parameters:{layout:"padded",controls:{disable:!0}}};var E,w,z,B,S;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Documentation',
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
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source},description:{story:"Full documentation — design specs, token table, and usage examples.",...(S=(B=i.parameters)==null?void 0:B.docs)==null?void 0:S.description}}};var L,k,C,D,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Error button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false
  }
}`,...(C=(k=d.parameters)==null?void 0:k.docs)==null?void 0:C.source},description:{story:"Interactive playground — adjust all props via the Controls panel.",...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.description}}};var F,_,I;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    label: 'Error button',
    variant: 'solid',
    size: 'default'
  }
}`,...(I=(_=u.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var W,A,M,R,G;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(M=(A=c.parameters)==null?void 0:A.docs)==null?void 0:M.source},description:{story:"All three sizes — small (34px), default (44px), large (56px).",...(G=(R=c.parameters)==null?void 0:R.docs)==null?void 0:G.description}}};var P,N,H;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Status / Solid',
  args: {
    label: 'Error button',
    variant: 'solid',
    size: 'default'
  }
}`,...(H=(N=b.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var V,O,q;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Status / Ghost',
  args: {
    label: 'Error button',
    variant: 'ghost',
    size: 'default'
  }
}`,...(q=(O=g.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var U,X,Z;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Status / Loading',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '16px'
  }}>
      <ErrorButton variant="solid" label="Loading" loading />
      <ErrorButton variant="ghost" label="Loading" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var Y,$,J;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Status / Disabled',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '16px'
  }}>
      <ErrorButton variant="solid" label="Disabled" disabled />
      <ErrorButton variant="ghost" label="Disabled" disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=($=m.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,Q,ee;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>
      {[['Solid variant', <ErrorButton variant="solid" label="Label" />, '--btn-error-solid-bg / --btn-error-solid-color'], ['Ghost variant', <ErrorButton variant="ghost" label="Label" />, '--btn-error-ghost-border / --btn-error-ghost-color']].map(([lbl, el, tok]) => <div key={lbl as string} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }}>
          <span style={{
        fontSize: '11px',
        fontWeight: 600,
        fontFamily: 'var(--brand-font-primary)',
        color: 'var(--global-color-neutral-gray-600)'
      }}>{lbl as string}</span>
          {el as React.ReactElement}
          <code style={{
        fontSize: '10px',
        background: 'var(--global-color-neutral-gray-100)',
        padding: '2px 6px',
        borderRadius: '4px',
        fontFamily: 'monospace',
        color: 'var(--global-color-neutral-gray-500)'
      }}>{tok as string}</code>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var re,ae,te;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>
      {(['Default', 'Loading', 'Disabled'] as const).map(s => <div key={s} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px'
    }}>
          <ErrorButton variant="solid" label={s} loading={s === 'Loading'} disabled={s === 'Disabled'} />
          <span style={{
        fontSize: '10px',
        color: 'var(--global-color-neutral-gray-400)',
        fontFamily: 'var(--brand-font-secondary)'
      }}>{s.toLowerCase()}</span>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,se,ne;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,ie,de,ce,pe;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Full Design Matrix (18 variants)',
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
}`,...(de=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:de.source},description:{story:"Full state matrix — all combinations of variant × size × state.",...(pe=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:pe.description}}};const _e=["Documentation","Playground","Default","Sizes","StatusSolid","StatusGhost","StatusLoading","StatusDisabled","ComponentBreakdown","AllInteractiveStates","Loading","FullDesignMatrix"];export{v as AllInteractiveStates,h as ComponentBreakdown,u as Default,i as Documentation,p as FullDesignMatrix,f as Loading,d as Playground,c as Sizes,m as StatusDisabled,g as StatusGhost,x as StatusLoading,b as StatusSolid,_e as __namedExportsOrder,Fe as default};
