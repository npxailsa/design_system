import{j as a}from"./iframe-DdJZJ5e8.js";import{D as n}from"./DocsTemplate-BpamAGE3.js";import"./preload-helper-Dp1pzeXC.js";const r={"btn-warning":"_btn-warning_smhbv_16","btn-warning--small":"_btn-warning--small_smhbv_64","btn-warning--large":"_btn-warning--large_smhbv_72","btn-warning--solid":"_btn-warning--solid_smhbv_80","btn-warning--disabled":"_btn-warning--disabled_smhbv_86","btn-warning--loading":"_btn-warning--loading_smhbv_107","btn-warning--ghost":"_btn-warning--ghost_smhbv_114","btn-warning__icon-leading":"_btn-warning__icon-leading_smhbv_161","btn-warning__icon-trailing":"_btn-warning__icon-trailing_smhbv_169","btn-warning__label":"_btn-warning__label_smhbv_177","btn-warning__spinner":"_btn-warning__spinner_smhbv_184","btn-warning-spin":"_btn-warning-spin_smhbv_1"},ma=()=>a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M6.99967 2.33331C7.61851 2.33331 8.21201 2.57915 8.64959 3.01673C9.08718 3.45432 9.33301 4.04781 9.33301 4.66665C9.33301 5.28548 9.08718 5.87898 8.64959 6.31656C8.21201 6.75415 7.61851 6.99998 6.99967 6.99998C6.38084 6.99998 5.78734 6.75415 5.34976 6.31656C4.91217 5.87898 4.66634 5.28548 4.66634 4.66665C4.66634 4.04781 4.91217 3.45432 5.34976 3.01673C5.78734 2.57915 6.38084 2.33331 6.99967 2.33331ZM6.99967 8.16665C9.57801 8.16665 11.6663 9.21081 11.6663 10.5V11.6666H2.33301V10.5C2.33301 9.21081 4.42134 8.16665 6.99967 8.16665Z",fill:"currentColor"})}),va=()=>a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M8.00033 2.66663C8.70757 2.66663 9.38585 2.94758 9.88594 3.44767C10.386 3.94777 10.667 4.62605 10.667 5.33329C10.667 6.04054 10.386 6.71881 9.88594 7.21891C9.38585 7.71901 8.70757 7.99996 8.00033 7.99996C7.29308 7.99996 6.6148 7.71901 6.11471 7.21891C5.61461 6.71881 5.33366 6.04054 5.33366 5.33329C5.33366 4.62605 5.61461 3.94777 6.11471 3.44767C6.6148 2.94758 7.29308 2.66663 8.00033 2.66663ZM8.00033 9.33329C10.947 9.33329 13.3337 10.5266 13.3337 12V13.3333H2.66699V12C2.66699 10.5266 5.05366 9.33329 8.00033 9.33329Z",fill:"currentColor"})}),fa=()=>a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M9 3C9.79565 3 10.5587 3.31607 11.1213 3.87868C11.6839 4.44129 12 5.20435 12 6C12 6.79565 11.6839 7.55871 11.1213 8.12132C10.5587 8.68393 9.79565 9 9 9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3ZM9 10.5C12.315 10.5 15 11.8425 15 13.5V15H3V13.5C3 11.8425 5.685 10.5 9 10.5Z",fill:"currentColor"})}),ya=()=>a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M2.33301 6.41667V7.58334H9.33301L6.12467 10.7917L6.95301 11.62L11.573 7L6.95301 2.38L6.12467 3.20834L9.33301 6.41667H2.33301Z",fill:"currentColor"})}),wa=()=>a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M2.66699 7.3333V8.66664H10.667L7.00033 12.3333L7.94699 13.28L13.227 7.99997L7.94699 2.71997L7.00033 3.66664L10.667 7.3333H2.66699Z",fill:"currentColor"})}),ja=()=>a.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M3 8.25006V9.75006H12L7.875 13.8751L8.94 14.9401L14.88 9.00006L8.94 3.06006L7.875 4.12506L12 8.25006H3Z",fill:"currentColor"})}),Wa={small:ma,default:va,large:fa},za={small:ya,default:wa,large:ja},e=({label:t="Warning button",variant:i="solid",size:x="default",loading:s=!1,disabled:m=!1,type:ga="button",onClick:ca,className:pa="",ariaLabel:ba})=>{const ua=Wa[x],ha=za[x],xa=[r["btn-warning"],r[`btn-warning--${i}`],x!=="default"?r[`btn-warning--${x}`]:"",s?r["btn-warning--loading"]:"",m?r["btn-warning--disabled"]:"",pa].filter(Boolean).join(" ");return a.jsxs("button",{type:ga,className:xa,onClick:!m&&!s?ca:void 0,disabled:m||s,"aria-label":ba,"aria-busy":s||void 0,children:[s?a.jsx("span",{className:r["btn-warning__spinner"],"aria-hidden":"true"}):a.jsx("span",{className:r["btn-warning__icon-leading"],children:a.jsx(ua,{})}),a.jsx("span",{className:r["btn-warning__label"],children:t}),!s&&a.jsx("span",{className:r["btn-warning__icon-trailing"],children:a.jsx(ha,{})})]})};e.__docgenInfo={description:"WarningButton — status-specific button for warning / cautionary actions.\n\nTwo variants:\n- `solid` — amber filled (#F4A403) with black icon + label and dark-orange border (primary CTA)\n- `ghost` — white background with orange border, dark-orange icon + label;\n            hover shifts background to orange-light `#FEF4DA` (secondary CTA)\n\nAll three sizes: `small`, `default`, `large`.\nSupports: loading, disabled, and all interactive states (hover, focus, active).\n\nStorybook: Atoms / Buttons / StatusButton / WarningButton",methods:[],displayName:"WarningButton",props:{label:{required:!1,tsType:{name:"string"},description:"Display label",defaultValue:{value:"'Warning button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'ghost'"}]},description:"Visual variant.\n- `solid` — amber filled background (#F4A403), black text/icon, dark-orange border\n- `ghost` — white background, orange border, dark-orange text/icon; hover shifts bg to orange-light",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant — controls height, padding, font, and icon sizes",defaultValue:{value:"'default'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const v=()=>a.jsxs(n,{children:[a.jsx(n.Header,{title:"WarningButton",subtitle:"A status-specific button for warning and cautionary actions within the NPX Design System"}),a.jsxs(n.BodyText,{children:["The ",a.jsx("strong",{children:"WarningButton"})," is the primary CTA element used inside warning-status notifications and modal cards. It comes in two visual variants —"," ",a.jsx("strong",{children:"solid"})," (amber filled, black text) and ",a.jsx("strong",{children:"ghost"})," (white background, orange border, dark-orange text with a green-light hover fill) — across three sizes. All styling is token-driven with no hardcoded values. It is always paired with a parent ",a.jsx("strong",{children:"CardContent"})," of status ",a.jsx("code",{children:"warning"}),", where the solid variant serves as the primary call-to-action and the ghost variant as the secondary."]}),a.jsxs(n.Section,{title:"Component Anatomy",children:[a.jsx(n.BodyText,{children:"Each WarningButton renders three inline elements: a leading user icon, a text label, and a trailing arrow-right icon. In the loading state the leading icon is replaced by a CSS spinner and the trailing icon is hidden."}),a.jsx(n.Subsection,{title:"Solid",children:a.jsx(n.Anatomy,{preview:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-4px)",flexWrap:"wrap",alignItems:"center"},children:[a.jsx(e,{variant:"solid",size:"small",label:"Warning button"}),a.jsx(e,{variant:"solid",size:"default",label:"Warning button"}),a.jsx(e,{variant:"solid",size:"large",label:"Warning button"})]}),parts:[{id:1,name:"Container",token:`--btn-warning-solid-bg
--btn-warning-solid-border-color
--btn-warning-solid-border-width
--btn-border-radius`,description:"Outer shell. Fill: color/status/orange (#F4A403). Border: 1px solid dark-orange. Hover adds 2×2px dark-orange drop shadow. Focus uses 2px border. Radius: 4px."},{id:2,name:"Leading Icon",token:`--btn-warning-solid-color
--btn-icon-size-{size}`,description:"User/account icon — 14px small, 16px default, 18px large. Fill: #1C1C1C (black, currentColor). Hidden and replaced by spinner in loading state."},{id:3,name:"Label",token:`--btn-font-family
--btn-font-size-{size}
--btn-warning-solid-color`,description:"Button text. F37 Ginger Pro Light. 14/16/18px by size. Colour: color/base/black (#1C1C1C)."},{id:4,name:"Trailing Icon",token:`--btn-warning-solid-color
--btn-icon-size-{size}`,description:"Arrow-right icon — same size as leading icon. Fill: #1C1C1C. Hidden in loading state."}]})}),a.jsx(n.Subsection,{title:"Ghost",children:a.jsx(n.Anatomy,{preview:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-4px)",flexWrap:"wrap",alignItems:"center"},children:[a.jsx(e,{variant:"ghost",size:"small",label:"Warning button"}),a.jsx(e,{variant:"ghost",size:"default",label:"Warning button"}),a.jsx(e,{variant:"ghost",size:"large",label:"Warning button"})]}),parts:[{id:1,name:"Container",token:`--btn-warning-ghost-bg
--btn-warning-ghost-bg-hover
--btn-warning-ghost-border-color
--btn-warning-ghost-border-width
--btn-border-radius`,description:"Outer shell. Default fill: white. Border: 1px solid orange (#F4A403). Hover shifts bg to orange-light (#FEF4DA) + 2×2px dark-orange shadow. Radius: 4px."},{id:2,name:"Leading Icon",token:`--btn-warning-ghost-color
--btn-icon-size-{size}`,description:"User/account icon. Fill: color/status/dark-orange (#D07C06). 14/16/18px by size."},{id:3,name:"Label",token:`--btn-font-family
--btn-font-size-{size}
--btn-warning-ghost-color`,description:"Button text. F37 Ginger Pro Light. Colour: dark-orange (#D07C06)."},{id:4,name:"Trailing Icon",token:`--btn-warning-ghost-color
--btn-icon-size-{size}`,description:"Arrow-right icon. Fill: dark-orange (#D07C06). Hidden in loading state."}]})})]}),a.jsxs(n.Section,{title:"Variants",children:[a.jsxs(n.BodyText,{children:["Two visual variants establish clear action hierarchy within warning contexts. Always pair",a.jsx("strong",{children:" solid"})," as the primary action with ",a.jsx("strong",{children:"ghost"})," as the secondary — never two solid buttons side by side."]}),a.jsxs(n.Subsection,{title:"Solid — Primary CTA",children:[a.jsx(n.BodyText,{children:"Amber filled background (#F4A403) with dark-orange border and black text. On hover a 2×2px dark-orange drop shadow is added. The background and text colours remain unchanged on hover (unlike SuccessButton). Focus uses a 2px border with no shadow."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[a.jsx(e,{variant:"solid",size:"small",label:"Warning button"}),a.jsx(e,{variant:"solid",size:"default",label:"Warning button"}),a.jsx(e,{variant:"solid",size:"large",label:"Warning button"})]})]}),a.jsxs(n.Subsection,{title:"Ghost — Secondary CTA",children:[a.jsx(n.BodyText,{children:"White background with a 1px orange border and dark-orange text/icons. On hover the background shifts to orange-light (#FEF4DA) and a 2×2px dark-orange drop shadow is applied. On focus a 2px border, no shadow."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[a.jsx(e,{variant:"ghost",size:"small",label:"Warning button"}),a.jsx(e,{variant:"ghost",size:"default",label:"Warning button"}),a.jsx(e,{variant:"ghost",size:"large",label:"Warning button"})]})]})]}),a.jsxs(n.Section,{title:"Sizes",children:[a.jsxs(n.BodyText,{children:["Three sizes scale the button for different card contexts. Size is set automatically by the parent ",a.jsx("strong",{children:"CardContent"})," via its ",a.jsx("code",{children:"size"})," prop."]}),a.jsx(n.SizeDemo,{rows:[{label:"Small",sublabel:"34px height — compact notification cards",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[a.jsx(e,{variant:"solid",size:"small",label:"Warning button"}),a.jsx(e,{variant:"ghost",size:"small",label:"Warning button"})]})},{label:"Default",sublabel:"44px height — standard notification cards",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[a.jsx(e,{variant:"solid",size:"default",label:"Warning button"}),a.jsx(e,{variant:"ghost",size:"default",label:"Warning button"})]})},{label:"Large",sublabel:"56px height — prominent warning modals",children:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[a.jsx(e,{variant:"solid",size:"large",label:"Warning button"}),a.jsx(e,{variant:"ghost",size:"large",label:"Warning button"})]})}]})]}),a.jsxs(n.Section,{title:"States",children:[a.jsxs(n.Subsection,{title:"Loading",children:[a.jsxs(n.BodyText,{children:["Pass ",a.jsx("code",{children:"loading"})," to replace the leading icon with a spinning CSS animation and hide the trailing arrow icon. The button is non-interactive during loading."]}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{variant:"solid",size:"small",label:"Warning button",loading:!0}),a.jsx(e,{variant:"solid",size:"default",label:"Warning button",loading:!0}),a.jsx(e,{variant:"solid",size:"large",label:"Warning button",loading:!0}),a.jsx(e,{variant:"ghost",size:"default",label:"Warning button",loading:!0})]})]}),a.jsxs(n.Subsection,{title:"Disabled",children:[a.jsx(n.BodyText,{children:"Disabled state uses explicit grey tokens (no opacity reduction). Both variants share the same disabled appearance: grey-100 background, grey-400 text and border at 0.5px."}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[a.jsx(e,{variant:"solid",size:"small",label:"Label",disabled:!0}),a.jsx(e,{variant:"solid",size:"default",label:"Label",disabled:!0}),a.jsx(e,{variant:"solid",size:"large",label:"Label",disabled:!0}),a.jsx(e,{variant:"ghost",size:"default",label:"Label",disabled:!0})]})]})]}),a.jsx(n.TokenTable,{title:"Design Tokens — Solid Variant",description:"Colour tokens for the solid (primary) warning button:",tokens:[{name:"--btn-warning-solid-bg",description:"Background — var(--global-color-status-orange) #F4A403"},{name:"--btn-warning-solid-color",description:"Text & icon colour — var(--global-color-base-black) #1C1C1C"},{name:"--btn-warning-solid-border-color",description:"Border colour (all states) — var(--global-color-status-dark-orange) #D07C06"},{name:"--btn-warning-solid-border-width",description:"Default border width — var(--global-spacing-stroke-1px) 1px"},{name:"--btn-warning-solid-border-width-hover",description:"Hover border width — var(--global-spacing-stroke-1px) 1px (unchanged)"},{name:"--btn-warning-solid-shadow-hover",description:"Drop shadow on hover/active — 2px 2px 0px 0px #D07C06 (dark-orange)"},{name:"--btn-warning-solid-border-width-focus",description:"Focus border width — var(--global-spacing-stroke-2px) 2px"}]}),a.jsx(n.TokenTable,{title:"Design Tokens — Ghost Variant",description:"Colour tokens for the ghost (secondary) warning button:",tokens:[{name:"--btn-warning-ghost-bg",description:"Default background — var(--global-color-base-white) #FFFFFF"},{name:"--btn-warning-ghost-bg-hover",description:"Hover/active background — var(--global-color-status-orange-light) #FEF4DA"},{name:"--btn-warning-ghost-color",description:"Text & icon colour — var(--global-color-status-dark-orange) #D07C06"},{name:"--btn-warning-ghost-border-color",description:"Border colour — var(--global-color-status-orange) #F4A403"},{name:"--btn-warning-ghost-border-width",description:"Default border width — var(--global-spacing-stroke-1px) 1px"},{name:"--btn-warning-ghost-shadow-hover",description:"Drop shadow on hover/active — 2px 2px 0px 0px #D07C06 (dark-orange)"},{name:"--btn-warning-ghost-border-width-focus",description:"Focus border width — var(--global-spacing-stroke-2px) 2px"}]}),a.jsx(n.TokenTable,{title:"Design Tokens — Disabled (shared)",description:"Tokens applied to both variants in the disabled state:",tokens:[{name:"--btn-warning-bg-disabled",description:"Background — var(--global-color-neutral-gray-100) #F3F4F6"},{name:"--btn-warning-color-disabled",description:"Text & icon colour — var(--global-color-neutral-gray-400) #9CA3AF"},{name:"--btn-warning-border-color-disabled",description:"Border colour — var(--global-color-neutral-gray-400) #9CA3AF"},{name:"--btn-warning-border-width-disabled",description:"Border width — var(--global-spacing-stroke-0-5px) 0.5px"}]}),a.jsx(n.CodeBlock,{children:`import { WarningButton } from '@/components/Button/WarningButton/WarningButton';

// Solid (primary CTA)
<WarningButton variant="solid" label="Warning button" />

// Ghost (secondary CTA)
<WarningButton variant="ghost" label="Warning button" />

// Size variants
<WarningButton variant="solid" size="small" label="Warning button" />
<WarningButton variant="solid" size="large" label="Warning button" />

// Loading state
<WarningButton variant="solid" label="Warning button" loading />

// Disabled state
<WarningButton variant="solid" label="Label" disabled />

// Inside a CardContent (tokens applied automatically via status class)
<CardContent variant="notification" status="warning" heading="Attention required" />`}),a.jsxs(n.Principles,{children:[a.jsxs(n.PrincipleCard,{number:1,title:"One solid per warning context",children:["Each warning notification or card should have exactly one ",a.jsx("strong",{children:"solid"})," ","WarningButton as the primary CTA. Pair it with a ",a.jsx("strong",{children:"ghost"}),' for secondary actions (e.g. "Dismiss" or "Remind me later").']}),a.jsx(n.PrincipleCard,{number:2,title:"Reserve for warning status only",children:"Do not use WarningButton in error, success, or info contexts. Each status has its own dedicated button component with the correct colour tokens."}),a.jsxs(n.PrincipleCard,{number:3,title:"Never override status tokens",children:["All colours must come from ",a.jsx("code",{children:"--btn-warning-*"})," tokens. Do not hardcode orange values or add local CSS overrides. If the status colour needs to change, update the token."]})]}),a.jsx(n.DosDonts,{doItem:{icon:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[a.jsx(e,{variant:"solid",label:"Warning button"}),a.jsx(e,{variant:"ghost",label:"Warning button"})]}),label:"Solid + Ghost pair",description:"Use solid as the primary action and ghost as the secondary — clear visual hierarchy within the warning card."},dontItem:{icon:a.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[a.jsx(e,{variant:"solid",label:"Warning button"}),a.jsx(e,{variant:"solid",label:"Warning button"})]}),label:"Two solid buttons",description:"Don't use two solid WarningButtons side by side. It creates confusion about which action is primary."}}),a.jsx(n.RelatedLinks,{links:[{label:"Figma Library",href:"https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1"},{label:"CardContent component",href:"/?path=/story/atoms-cardcontent--documentation"},{label:"ErrorButton",href:"/?path=/story/atoms-buttons-statusbutton-errorbutton--documentation"},{label:"SuccessButton",href:"/?path=/story/atoms-buttons-statusbutton-successbutton--documentation"}]}),a.jsx(n.Footer,{})]});v.__docgenInfo={description:"",methods:[],displayName:"WarningButtonDocs"};const Sa={title:"Atoms/Buttons/StatusButton/WarningButton",component:e,parameters:{layout:"centered",docs:{page:()=>a.jsx(v,{})}},argTypes:{variant:{control:"select",options:["solid","ghost"],description:"Visual style — solid (amber filled) or ghost (outline with hover fill)"},size:{control:"select",options:["small","default","large"]},label:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},o={render:()=>a.jsx(v,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},l={args:{label:"Warning button",variant:"solid",size:"default",loading:!1,disabled:!1}},d={args:{label:"Warning button",variant:"solid",size:"default"}},g={args:{label:"Warning button",variant:"ghost",size:"default"}},c={render:()=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",padding:"16px"},children:[a.jsx(e,{variant:"solid",label:"Warning button"}),a.jsx(e,{variant:"ghost",label:"Warning button"})]}),parameters:{controls:{disable:!0}}},p={render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["solid","ghost"].map(t=>a.jsxs("div",{children:[a.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 10px"},children:t}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[a.jsx(e,{variant:t,size:"small",label:"Warning button"}),a.jsx(e,{variant:t,size:"default",label:"Warning button"}),a.jsx(e,{variant:t,size:"large",label:"Warning button"})]})]},t))}),parameters:{layout:"padded",controls:{disable:!0}}},b={render:()=>a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px",flexWrap:"wrap"},children:[a.jsx(e,{variant:"solid",size:"small",label:"Warning button",loading:!0}),a.jsx(e,{variant:"solid",size:"default",label:"Warning button",loading:!0}),a.jsx(e,{variant:"solid",size:"large",label:"Warning button",loading:!0}),a.jsx(e,{variant:"ghost",size:"small",label:"Warning button",loading:!0}),a.jsx(e,{variant:"ghost",size:"default",label:"Warning button",loading:!0}),a.jsx(e,{variant:"ghost",size:"large",label:"Warning button",loading:!0})]}),parameters:{controls:{disable:!0}}},u={render:()=>a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px",flexWrap:"wrap"},children:[a.jsx(e,{variant:"solid",size:"small",label:"Label",disabled:!0}),a.jsx(e,{variant:"solid",size:"default",label:"Label",disabled:!0}),a.jsx(e,{variant:"solid",size:"large",label:"Label",disabled:!0}),a.jsx(e,{variant:"ghost",size:"small",label:"Label",disabled:!0}),a.jsx(e,{variant:"ghost",size:"default",label:"Label",disabled:!0}),a.jsx(e,{variant:"ghost",size:"large",label:"Label",disabled:!0})]}),parameters:{controls:{disable:!0}}},h={render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"32px"},children:["solid","ghost"].map(t=>a.jsxs("div",{children:[a.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:300,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 16px",borderBottom:"1px solid var(--global-color-neutral-gray-200)",paddingBottom:"8px"},children:t}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["small","default","large"].map(i=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",minWidth:"52px",textTransform:"capitalize"},children:i}),a.jsx(e,{variant:t,size:i,label:"Warning button"}),a.jsx(e,{variant:t,size:i,label:"Warning button",loading:!0}),a.jsx(e,{variant:t,size:i,label:"Label",disabled:!0})]},i))})]},t))}),parameters:{layout:"padded",controls:{disable:!0}}};var f,y,w,j,W;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <WarningButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(w=(y=o.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:"Full documentation — design specs, token table, and usage examples.",...(W=(j=o.parameters)==null?void 0:j.docs)==null?void 0:W.description}}};var z,C,k,B,S;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Warning button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false
  }
}`,...(k=(C=l.parameters)==null?void 0:C.docs)==null?void 0:k.source},description:{story:"Interactive playground — adjust all props via the Controls panel.",...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.description}}};var _,T,L,D,A;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Warning button',
    variant: 'solid',
    size: 'default'
  }
}`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source},description:{story:`Solid variant — amber filled (#F4A403) background, black text and icons.
Use as the primary CTA in warning-status CardContent cards.`,...(A=(D=d.parameters)==null?void 0:D.docs)==null?void 0:A.description}}};var F,I,H,V,E;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Warning button',
    variant: 'ghost',
    size: 'default'
  }
}`,...(H=(I=g.parameters)==null?void 0:I.docs)==null?void 0:H.source},description:{story:`Ghost / alt variant — white background, orange border, dark-orange text.
Hover shifts the background to orange-light (#FEF4DA).
Use as the secondary CTA alongside the solid warning button.`,...(E=(V=g.parameters)==null?void 0:V.docs)==null?void 0:E.description}}};var M,R,N,P,G;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    padding: '16px'
  }}>
      <WarningButton variant="solid" label="Warning button" />
      <WarningButton variant="ghost" label="Warning button" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(R=c.parameters)==null?void 0:R.docs)==null?void 0:N.source},description:{story:"Both variants side by side — as they appear in a warning CardContent ButtonGroup.",...(G=(P=c.parameters)==null?void 0:P.docs)==null?void 0:G.description}}};var q,O,U,Z,X;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
            <WarningButton variant={variant} size="small" label="Warning button" />
            <WarningButton variant={variant} size="default" label="Warning button" />
            <WarningButton variant={variant} size="large" label="Warning button" />
          </div>
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(U=(O=p.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:"All three sizes — small (34px), default (44px), large (56px).",...(X=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:X.description}}};var Y,$,J,K,Q;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px',
    flexWrap: 'wrap'
  }}>
      <WarningButton variant="solid" size="small" label="Warning button" loading />
      <WarningButton variant="solid" size="default" label="Warning button" loading />
      <WarningButton variant="solid" size="large" label="Warning button" loading />
      <WarningButton variant="ghost" size="small" label="Warning button" loading />
      <WarningButton variant="ghost" size="default" label="Warning button" loading />
      <WarningButton variant="ghost" size="large" label="Warning button" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=($=b.parameters)==null?void 0:$.docs)==null?void 0:J.source},description:{story:"Loading state — spinner replaces the leading icon, trailing icon is hidden.",...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var aa,ea,na,ta,ra;u.parameters={...u.parameters,docs:{...(aa=u.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px',
    flexWrap: 'wrap'
  }}>
      <WarningButton variant="solid" size="small" label="Label" disabled />
      <WarningButton variant="solid" size="default" label="Label" disabled />
      <WarningButton variant="solid" size="large" label="Label" disabled />
      <WarningButton variant="ghost" size="small" label="Label" disabled />
      <WarningButton variant="ghost" size="default" label="Label" disabled />
      <WarningButton variant="ghost" size="large" label="Label" disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(na=(ea=u.parameters)==null?void 0:ea.docs)==null?void 0:na.source},description:{story:"Disabled state — grey background, grey text, not interactive.",...(ra=(ta=u.parameters)==null?void 0:ta.docs)==null?void 0:ra.description}}};var ia,sa,oa,la,da;h.parameters={...h.parameters,docs:{...(ia=h.parameters)==null?void 0:ia.docs,source:{originalSource:`{
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
                <WarningButton variant={variant} size={size} label="Warning button" />
                <WarningButton variant={variant} size={size} label="Warning button" loading />
                <WarningButton variant={variant} size={size} label="Label" disabled />
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
}`,...(oa=(sa=h.parameters)==null?void 0:sa.docs)==null?void 0:oa.source},description:{story:"Full state matrix — all combinations of variant × size × state.",...(da=(la=h.parameters)==null?void 0:la.docs)==null?void 0:da.description}}};const _a=["Documentation","Playground","Solid","Ghost","BothVariants","Sizes","Loading","Disabled","AllStates"];export{h as AllStates,c as BothVariants,u as Disabled,o as Documentation,g as Ghost,b as Loading,l as Playground,p as Sizes,d as Solid,_a as __namedExportsOrder,Sa as default};
