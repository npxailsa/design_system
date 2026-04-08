import{j as e}from"./iframe-gNs2dAHB.js";import{D as t}from"./DocsTemplate-Q-DC__kG.js";import"./preload-helper-Dp1pzeXC.js";const n={"btn-success":"_btn-success_it15x_19","btn-success--small":"_btn-success--small_it15x_67","btn-success--large":"_btn-success--large_it15x_75","btn-success--solid":"_btn-success--solid_it15x_83","btn-success--disabled":"_btn-success--disabled_it15x_90","btn-success--loading":"_btn-success--loading_it15x_115","btn-success--ghost":"_btn-success--ghost_it15x_122","btn-success__icon-leading":"_btn-success__icon-leading_it15x_171","btn-success__icon-trailing":"_btn-success__icon-trailing_it15x_179","btn-success__label":"_btn-success__label_it15x_187","btn-success__spinner":"_btn-success__spinner_it15x_194","btn-success-spin":"_btn-success-spin_it15x_1"},ve=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M6.99967 2.33331C7.61851 2.33331 8.21201 2.57915 8.64959 3.01673C9.08718 3.45432 9.33301 4.04781 9.33301 4.66665C9.33301 5.28548 9.08718 5.87898 8.64959 6.31656C8.21201 6.75415 7.61851 6.99998 6.99967 6.99998C6.38084 6.99998 5.78734 6.75415 5.34976 6.31656C4.91217 5.87898 4.66634 5.28548 4.66634 4.66665C4.66634 4.04781 4.91217 3.45432 5.34976 3.01673C5.78734 2.57915 6.38084 2.33331 6.99967 2.33331ZM6.99967 8.16665C9.57801 8.16665 11.6663 9.21081 11.6663 10.5V11.6666H2.33301V10.5C2.33301 9.21081 4.42134 8.16665 6.99967 8.16665Z",fill:"currentColor"})}),me=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M8.00033 2.66663C8.70757 2.66663 9.38585 2.94758 9.88594 3.44767C10.386 3.94777 10.667 4.62605 10.667 5.33329C10.667 6.04054 10.386 6.71881 9.88594 7.21891C9.38585 7.71901 8.70757 7.99996 8.00033 7.99996C7.29308 7.99996 6.6148 7.71901 6.11471 7.21891C5.61461 6.71881 5.33366 6.04054 5.33366 5.33329C5.33366 4.62605 5.61461 3.94777 6.11471 3.44767C6.6148 2.94758 7.29308 2.66663 8.00033 2.66663ZM8.00033 9.33329C10.947 9.33329 13.3337 10.5266 13.3337 12V13.3333H2.66699V12C2.66699 10.5266 5.05366 9.33329 8.00033 9.33329Z",fill:"currentColor"})}),fe=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M9 3C9.79565 3 10.5587 3.31607 11.1213 3.87868C11.6839 4.44129 12 5.20435 12 6C12 6.79565 11.6839 7.55871 11.1213 8.12132C10.5587 8.68393 9.79565 9 9 9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3ZM9 10.5C12.315 10.5 15 11.8425 15 13.5V15H3V13.5C3 11.8425 5.685 10.5 9 10.5Z",fill:"currentColor"})}),ye=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.33301 6.41667V7.58334H9.33301L6.12467 10.7917L6.95301 11.62L11.573 7L6.95301 2.38L6.12467 3.20834L9.33301 6.41667H2.33301Z",fill:"currentColor"})}),Se=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.66699 7.3333V8.66664H10.667L7.00033 12.3333L7.94699 13.28L13.227 7.99997L7.94699 2.71997L7.00033 3.66664L10.667 7.3333H2.66699Z",fill:"currentColor"})}),je=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M3 8.25006V9.75006H12L7.875 13.8751L8.94 14.9401L14.88 9.00006L8.94 3.06006L7.875 4.12506L12 8.25006H3Z",fill:"currentColor"})}),we={small:ve,default:me,large:fe},ze={small:ye,default:Se,large:je},s=({label:a="Success button",variant:i="solid",size:x="default",loading:r=!1,disabled:v=!1,type:de="button",onClick:ue,className:be="",ariaLabel:ge})=>{const pe=we[x],he=ze[x],xe=[n["btn-success"],n[`btn-success--${i}`],x!=="default"?n[`btn-success--${x}`]:"",r?n["btn-success--loading"]:"",v?n["btn-success--disabled"]:"",be].filter(Boolean).join(" ");return e.jsxs("button",{type:de,className:xe,onClick:!v&&!r?ue:void 0,disabled:v||r,"aria-label":ge,"aria-busy":r||void 0,children:[r?e.jsx("span",{className:n["btn-success__spinner"],"aria-hidden":"true"}):e.jsx("span",{className:n["btn-success__icon-leading"],children:e.jsx(pe,{})}),e.jsx("span",{className:n["btn-success__label"],children:a}),!r&&e.jsx("span",{className:n["btn-success__icon-trailing"],children:e.jsx(he,{})})]})};s.__docgenInfo={description:`SuccessButton — status-specific button for success / confirmation actions.

Two variants:
- \`solid\` — light-green (#96F78D) filled background with black text (default);
            hover transitions the background to dark-green (#227F1A) and
            text/icons flip to white — a unique colour inversion per Figma.
- \`ghost\` — white background with dark-green border and text/icon;
            hover shifts background to green-light (#F2FFF1);
            focus uses a 3px border (per Figma spec).

All three sizes: \`small\`, \`default\`, \`large\`.
Supports: loading, disabled, and all interactive states (hover, focus, active).

Storybook: Atoms / Buttons / StatusButton / SuccessButton`,methods:[],displayName:"SuccessButton",props:{label:{required:!1,tsType:{name:"string"},description:"Display label",defaultValue:{value:"'Success button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'ghost'"}]},description:"Visual variant.\n- `solid` — light-green (#96F78D) background, black text/icon;\n            hover flips to dark-green fill with white text/icon\n- `ghost` — white background, dark-green border & text/icon;\n            hover shifts bg to green-light (#F2FFF1)",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant — controls height, padding, font, and icon sizes",defaultValue:{value:"'default'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const m=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"SuccessButton",subtitle:"A status-specific button for success and confirmation actions within the NPX Design System"}),e.jsxs(t.BodyText,{children:["The ",e.jsx("strong",{children:"SuccessButton"})," is the primary CTA element used inside success-status notifications and modal cards. It comes in two visual variants —"," ",e.jsx("strong",{children:"solid"})," (light-green filled, black text; hover inverts to dark-green with white text) and ",e.jsx("strong",{children:"ghost"})," (white background, dark-green border and text, with a green-light hover fill) — across three sizes. All styling is token-driven with no hardcoded values. The solid hover colour inversion is unique to the success status. It is always paired with a ",e.jsx("strong",{children:"CardContent"})," of status ",e.jsx("code",{children:"success"}),", where the solid variant serves as the primary call-to-action and the ghost as the secondary."]}),e.jsxs(t.Section,{title:"Component Anatomy",children:[e.jsx(t.BodyText,{children:"Each SuccessButton renders three inline elements: a leading user icon, a text label, and a trailing arrow-right icon. In the loading state the leading icon is replaced by a CSS spinner and the trailing icon is hidden."}),e.jsx(t.Subsection,{title:"Solid",children:e.jsx(t.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-4px)",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(s,{variant:"solid",size:"small",label:"Success button"}),e.jsx(s,{variant:"solid",size:"default",label:"Success button"}),e.jsx(s,{variant:"solid",size:"large",label:"Success button"})]}),parts:[{id:1,name:"Container",token:`--btn-success-solid-bg
--btn-success-solid-bg-hover
--btn-success-solid-border-color
--btn-success-solid-border-width
--btn-border-radius`,description:"Outer shell. Default fill: light-green (#96F78D), dark-green border. Hover inverts background to dark-green (#227F1A), text to white, and border to light-green (--btn-success-solid-bg) + 2×2px dark-green shadow. Focus: 2px dark-green border, light-green bg. Radius: 4px."},{id:2,name:"Leading Icon",token:`--btn-success-solid-color
--btn-success-solid-color-hover
--btn-icon-size-{size}`,description:"User/account icon — 14px small, 16px default, 18px large. Default fill: #1C1C1C (black). Hover fill: white. Replaced by spinner in loading state."},{id:3,name:"Label",token:`--btn-font-family
--btn-font-size-{size}
--btn-success-solid-color
--btn-success-solid-color-hover`,description:"Button text. F37 Ginger Pro Light. 14/16/18px by size. Default: black. Hover: white (colour inversion unique to success)."},{id:4,name:"Trailing Icon",token:`--btn-success-solid-color
--btn-success-solid-color-hover
--btn-icon-size-{size}`,description:"Arrow-right icon. Same size as leading icon. Default: black. Hover: white. Hidden in loading state."}]})}),e.jsx(t.Subsection,{title:"Ghost",children:e.jsx(t.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-4px)",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(s,{variant:"ghost",size:"small",label:"Success button"}),e.jsx(s,{variant:"ghost",size:"default",label:"Success button"}),e.jsx(s,{variant:"ghost",size:"large",label:"Success button"})]}),parts:[{id:1,name:"Container",token:`--btn-success-ghost-bg
--btn-success-ghost-bg-hover
--btn-success-ghost-border-color
--btn-success-ghost-border-width
--btn-border-radius`,description:"Outer shell. Default fill: white. Border: 1px solid dark-green. Hover shifts bg to green-light (#F2FFF1) + 2×2px dark-green shadow. Focus: 3px border (unique to success ghost). Radius: 4px."},{id:2,name:"Leading Icon",token:`--btn-success-ghost-color
--btn-icon-size-{size}`,description:"User/account icon. Fill: dark-green (#227F1A). 14/16/18px by size."},{id:3,name:"Label",token:`--btn-font-family
--btn-font-size-{size}
--btn-success-ghost-color`,description:"Button text. F37 Ginger Pro Light. Colour: dark-green (#227F1A)."},{id:4,name:"Trailing Icon",token:`--btn-success-ghost-color
--btn-icon-size-{size}`,description:"Arrow-right icon. Fill: dark-green (#227F1A). Hidden in loading state."}]})})]}),e.jsxs(t.Section,{title:"Variants",children:[e.jsxs(t.BodyText,{children:["Two visual variants establish clear action hierarchy within success contexts. Always pair",e.jsx("strong",{children:" solid"})," as the primary action with ",e.jsx("strong",{children:"ghost"})," as the secondary. The solid variant features a unique hover behaviour — the background inverts from light-green to dark-green and text switches from black to white."]}),e.jsxs(t.Subsection,{title:"Solid — Primary CTA",children:[e.jsxs(t.BodyText,{children:["Light-green filled background (#96F78D) with dark-green border and black text by default. On hover the background inverts to dark-green (#227F1A), text/icons flip to white, and the border colour changes to the light-green value (",e.jsx("code",{children:"--btn-success-solid-bg"}),") — so the border harmonises with the inverted dark-green background rather than contrasting against it. This is unique among all StatusButton variants. Focus restores the light-green background with a 2px dark-green border."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(s,{variant:"solid",size:"small",label:"Success button"}),e.jsx(s,{variant:"solid",size:"default",label:"Success button"}),e.jsx(s,{variant:"solid",size:"large",label:"Success button"})]})]}),e.jsxs(t.Subsection,{title:"Ghost — Secondary CTA",children:[e.jsxs(t.BodyText,{children:["White background with a 1px dark-green border and dark-green text/icons. On hover the background shifts to green-light (#F2FFF1) and a 2×2px dark-green shadow is applied. Focus uses a ",e.jsx("strong",{children:"3px"})," border — wider than all other status buttons, per the Figma specification."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(s,{variant:"ghost",size:"small",label:"Success button"}),e.jsx(s,{variant:"ghost",size:"default",label:"Success button"}),e.jsx(s,{variant:"ghost",size:"large",label:"Success button"})]})]})]}),e.jsxs(t.Section,{title:"Sizes",children:[e.jsxs(t.BodyText,{children:["Three sizes scale the button for different card contexts. Size is set automatically by the parent ",e.jsx("strong",{children:"CardContent"})," via its ",e.jsx("code",{children:"size"})," prop."]}),e.jsx(t.SizeDemo,{rows:[{label:"Small",sublabel:"34px height — compact notification cards",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(s,{variant:"solid",size:"small",label:"Success button"}),e.jsx(s,{variant:"ghost",size:"small",label:"Success button"})]})},{label:"Default",sublabel:"44px height — standard notification cards",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(s,{variant:"solid",size:"default",label:"Success button"}),e.jsx(s,{variant:"ghost",size:"default",label:"Success button"})]})},{label:"Large",sublabel:"56px height — prominent success modals",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(s,{variant:"solid",size:"large",label:"Success button"}),e.jsx(s,{variant:"ghost",size:"large",label:"Success button"})]})}]})]}),e.jsxs(t.Section,{title:"States",children:[e.jsxs(t.Subsection,{title:"Loading",children:[e.jsxs(t.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to replace the leading icon with a spinning CSS animation and hide the trailing arrow icon. The button is non-interactive during loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(s,{variant:"solid",size:"small",label:"Success button",loading:!0}),e.jsx(s,{variant:"solid",size:"default",label:"Success button",loading:!0}),e.jsx(s,{variant:"solid",size:"large",label:"Success button",loading:!0}),e.jsx(s,{variant:"ghost",size:"default",label:"Success button",loading:!0})]})]}),e.jsxs(t.Subsection,{title:"Disabled",children:[e.jsx(t.BodyText,{children:"Disabled state uses explicit grey tokens (no opacity reduction). Both variants share the same disabled appearance: grey-100 background, grey-400 text and border at 0.5px."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(s,{variant:"solid",size:"small",label:"Label",disabled:!0}),e.jsx(s,{variant:"solid",size:"default",label:"Label",disabled:!0}),e.jsx(s,{variant:"solid",size:"large",label:"Label",disabled:!0}),e.jsx(s,{variant:"ghost",size:"default",label:"Label",disabled:!0})]})]})]}),e.jsx(t.TokenTable,{title:"Design Tokens — Solid Variant",description:"Colour tokens for the solid (primary) success button — note the unique hover inversion and border colour change:",tokens:[{name:"--btn-success-solid-bg",description:"Default background — var(--global-color-status-green) #96F78D. Also used as the hover border colour so the border harmonises with the inverted dark-green background."},{name:"--btn-success-solid-color",description:"Default text & icon colour — var(--global-color-base-black) #1C1C1C"},{name:"--btn-success-solid-border-color",description:"Default border colour — var(--global-color-status-dark-green) #227F1A"},{name:"--btn-success-solid-border-width",description:"Default border width — var(--global-spacing-stroke-1px) 1px"},{name:"--btn-success-solid-bg-hover",description:"Hover/active background (inversion) — var(--global-color-status-dark-green) #227F1A"},{name:"--btn-success-solid-color-hover",description:"Hover/active text & icon colour — var(--global-color-base-white) #FFFFFF"},{name:"border-color on hover",description:"Uses --btn-success-solid-bg (#96F78D light-green) on hover/active — the border colour shifts to the default bg value so it recedes against the inverted dark-green background (Solid - Primary CTA only)."},{name:"--btn-success-solid-shadow-hover",description:"Drop shadow on hover/active — 2px 2px 0px 0px #227F1A (dark-green)"},{name:"--btn-success-solid-border-width-focus",description:"Focus border width — var(--global-spacing-stroke-2px) 2px"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Ghost Variant",description:"Colour tokens for the ghost (secondary) success button — note the 3px focus border:",tokens:[{name:"--btn-success-ghost-bg",description:"Default background — var(--global-color-base-white) #FFFFFF"},{name:"--btn-success-ghost-bg-hover",description:"Hover/active background — var(--global-color-status-green-light) #F2FFF1"},{name:"--btn-success-ghost-color",description:"Text & icon colour — var(--global-color-status-dark-green) #227F1A"},{name:"--btn-success-ghost-border-color",description:"Border colour — var(--global-color-status-dark-green) #227F1A"},{name:"--btn-success-ghost-border-width",description:"Default border width — var(--global-spacing-stroke-1px) 1px"},{name:"--btn-success-ghost-shadow-hover",description:"Drop shadow on hover/active — 2px 2px 0px 0px #227F1A (dark-green)"},{name:"--btn-success-ghost-border-width-focus",description:"Focus border width — 3px (wider than all other status buttons per Figma spec)"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Disabled (shared)",description:"Tokens applied to both variants in the disabled state:",tokens:[{name:"--btn-success-bg-disabled",description:"Background — var(--global-color-neutral-gray-100) #F3F4F6"},{name:"--btn-success-color-disabled",description:"Text & icon colour — var(--global-color-neutral-gray-400) #9CA3AF"},{name:"--btn-success-border-color-disabled",description:"Border colour — var(--global-color-neutral-gray-400) #9CA3AF"},{name:"--btn-success-border-width-disabled",description:"Border width — var(--global-spacing-stroke-0-5px) 0.5px"}]}),e.jsx(t.CodeBlock,{children:`import { SuccessButton } from '@/components/Button/SuccessButton/SuccessButton';

// Solid (primary CTA)
<SuccessButton variant="solid" label="Success button" />

// Ghost (secondary CTA)
<SuccessButton variant="ghost" label="Success button" />

// Size variants
<SuccessButton variant="solid" size="small" label="Success button" />
<SuccessButton variant="solid" size="large" label="Success button" />

// Loading state
<SuccessButton variant="solid" label="Success button" loading />

// Disabled state
<SuccessButton variant="solid" label="Label" disabled />

// Inside a CardContent (tokens applied automatically via status class)
<CardContent variant="notification" status="success" heading="Action completed" />`}),e.jsxs(t.Principles,{children:[e.jsxs(t.PrincipleCard,{number:1,title:"One solid per success context",children:["Each success notification or card should have exactly one ",e.jsx("strong",{children:"solid"})," ","SuccessButton as the primary CTA. Pair it with a ",e.jsx("strong",{children:"ghost"}),' for secondary actions (e.g. "View details" or "Dismiss").']}),e.jsx(t.PrincipleCard,{number:2,title:"Do not suppress the hover inversion",children:"The solid variant's hover behaviour — flipping from light-green to dark-green with white text — is intentional and distinctive. Do not override it with CSS or token changes. This inversion is what makes success actions visually confident."}),e.jsx(t.PrincipleCard,{number:3,title:"Reserve for success status only",children:"Do not use SuccessButton in error, warning, or info contexts. Each status has its own dedicated button component with the correct colour tokens."})]}),e.jsx(t.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(s,{variant:"solid",label:"Success button"}),e.jsx(s,{variant:"ghost",label:"Success button"})]}),label:"Solid + Ghost pair",description:"Use solid as the primary action and ghost as the secondary — clear visual hierarchy within the success card."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(s,{variant:"solid",label:"Success button"}),e.jsx(s,{variant:"solid",label:"Success button"})]}),label:"Two solid buttons",description:"Don't use two solid SuccessButtons side by side. It creates confusion about which action is primary."}}),e.jsx(t.RelatedLinks,{links:[{label:"Figma Library",href:"https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1"},{label:"CardContent component",href:"/?path=/story/atoms-cardcontent--documentation"},{label:"ErrorButton",href:"/?path=/story/atoms-buttons-statusbutton-errorbutton--documentation"},{label:"WarningButton",href:"/?path=/story/atoms-buttons-statusbutton-warningbutton--documentation"}]}),e.jsx(t.Footer,{})]});m.__docgenInfo={description:"",methods:[],displayName:"SuccessButtonDocs"};const Fe={title:"Atoms/Buttons/StatusButton/SuccessButton",component:s,parameters:{layout:"centered",docs:{page:()=>e.jsx(m,{})}},argTypes:{variant:{control:"select",options:["solid","ghost"],description:"Visual style — solid (light-green fill; hover inverts to dark-green) or ghost (outline with green-light hover bg)"},size:{control:"select",options:["small","default","large"]},label:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},o={render:()=>e.jsx(m,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},l={args:{label:"Success button",variant:"solid",size:"default",loading:!1,disabled:!1}},c={args:{label:"Success button",variant:"solid",size:"default"}},d={args:{label:"Success button",variant:"ghost",size:"default"}},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",padding:"16px"},children:[e.jsx(s,{variant:"solid",label:"Success button"}),e.jsx(s,{variant:"ghost",label:"Success button"})]}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["solid","ghost"].map(a=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 10px"},children:a}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx(s,{variant:a,size:"small",label:"Success button"}),e.jsx(s,{variant:a,size:"default",label:"Success button"}),e.jsx(s,{variant:a,size:"large",label:"Success button"})]})]},a))}),parameters:{layout:"padded",controls:{disable:!0}}},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px",flexWrap:"wrap"},children:[e.jsx(s,{variant:"solid",size:"small",label:"Success button",loading:!0}),e.jsx(s,{variant:"solid",size:"default",label:"Success button",loading:!0}),e.jsx(s,{variant:"solid",size:"large",label:"Success button",loading:!0}),e.jsx(s,{variant:"ghost",size:"small",label:"Success button",loading:!0}),e.jsx(s,{variant:"ghost",size:"default",label:"Success button",loading:!0}),e.jsx(s,{variant:"ghost",size:"large",label:"Success button",loading:!0})]}),parameters:{controls:{disable:!0}}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px",flexWrap:"wrap"},children:[e.jsx(s,{variant:"solid",size:"small",label:"Label",disabled:!0}),e.jsx(s,{variant:"solid",size:"default",label:"Label",disabled:!0}),e.jsx(s,{variant:"solid",size:"large",label:"Label",disabled:!0}),e.jsx(s,{variant:"ghost",size:"small",label:"Label",disabled:!0}),e.jsx(s,{variant:"ghost",size:"default",label:"Label",disabled:!0}),e.jsx(s,{variant:"ghost",size:"large",label:"Label",disabled:!0})]}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"32px"},children:["solid","ghost"].map(a=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:300,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 16px",borderBottom:"1px solid var(--global-color-neutral-gray-200)",paddingBottom:"8px"},children:a}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["small","default","large"].map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",minWidth:"52px",textTransform:"capitalize"},children:i}),e.jsx(s,{variant:a,size:i,label:"Success button"}),e.jsx(s,{variant:a,size:i,label:"Success button",loading:!0}),e.jsx(s,{variant:a,size:i,label:"Label",disabled:!0})]},i))})]},a))}),parameters:{layout:"padded",controls:{disable:!0}}};var f,y,S,j,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <SuccessButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source},description:{story:"Full documentation — design specs, token table, interaction notes, and usage examples.",...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var z,k,B,C,F;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Success button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false
  }
}`,...(B=(k=l.parameters)==null?void 0:k.docs)==null?void 0:B.source},description:{story:"Interactive playground — adjust all props via the Controls panel.",...(F=(C=l.parameters)==null?void 0:C.docs)==null?void 0:F.description}}};var _,T,L,D,A;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Success button',
    variant: 'solid',
    size: 'default'
  }
}`,...(L=(T=c.parameters)==null?void 0:T.docs)==null?void 0:L.source},description:{story:`Solid variant — light-green (#96F78D) background, black text.
Hover inverts the background to dark-green (#227F1A) and switches text to white.
Use as the primary CTA in success-status CardContent cards.`,...(A=(D=c.parameters)==null?void 0:D.docs)==null?void 0:A.description}}};var I,H,W,V,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Success button',
    variant: 'ghost',
    size: 'default'
  }
}`,...(W=(H=d.parameters)==null?void 0:H.docs)==null?void 0:W.source},description:{story:`Ghost / alt variant — white background, dark-green border and text.
Hover shifts background to green-light (#F2FFF1) + dark-green drop shadow.
Focus uses a distinctive 3px border (per Figma spec).`,...(q=(V=d.parameters)==null?void 0:V.docs)==null?void 0:q.description}}};var M,R,E,N,P;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    padding: '16px'
  }}>
      <SuccessButton variant="solid" label="Success button" />
      <SuccessButton variant="ghost" label="Success button" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(R=u.parameters)==null?void 0:R.docs)==null?void 0:E.source},description:{story:"Both variants side by side — as they appear in a success CardContent ButtonGroup.",...(P=(N=u.parameters)==null?void 0:N.docs)==null?void 0:P.description}}};var G,U,O,Z,X;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
            <SuccessButton variant={variant} size="small" label="Success button" />
            <SuccessButton variant={variant} size="default" label="Success button" />
            <SuccessButton variant={variant} size="large" label="Success button" />
          </div>
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(O=(U=b.parameters)==null?void 0:U.docs)==null?void 0:O.source},description:{story:"All three sizes — small (34px), default (44px), large (56px).",...(X=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:X.description}}};var Y,$,J,K,Q;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px',
    flexWrap: 'wrap'
  }}>
      <SuccessButton variant="solid" size="small" label="Success button" loading />
      <SuccessButton variant="solid" size="default" label="Success button" loading />
      <SuccessButton variant="solid" size="large" label="Success button" loading />
      <SuccessButton variant="ghost" size="small" label="Success button" loading />
      <SuccessButton variant="ghost" size="default" label="Success button" loading />
      <SuccessButton variant="ghost" size="large" label="Success button" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=($=g.parameters)==null?void 0:$.docs)==null?void 0:J.source},description:{story:"Loading state — spinner replaces the leading icon, trailing icon hidden.",...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var ee,se,te,ae,ne;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px',
    flexWrap: 'wrap'
  }}>
      <SuccessButton variant="solid" size="small" label="Label" disabled />
      <SuccessButton variant="solid" size="default" label="Label" disabled />
      <SuccessButton variant="solid" size="large" label="Label" disabled />
      <SuccessButton variant="ghost" size="small" label="Label" disabled />
      <SuccessButton variant="ghost" size="default" label="Label" disabled />
      <SuccessButton variant="ghost" size="large" label="Label" disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(se=p.parameters)==null?void 0:se.docs)==null?void 0:te.source},description:{story:"Disabled state — grey background, grey text, not interactive.",...(ne=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ne.description}}};var ie,re,oe,le,ce;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
                <SuccessButton variant={variant} size={size} label="Success button" />
                <SuccessButton variant={variant} size={size} label="Success button" loading />
                <SuccessButton variant={variant} size={size} label="Label" disabled />
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
}`,...(oe=(re=h.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:`Full state matrix — all combinations of variant × size × state.
Hover over the solid buttons to see the unique dark-green colour inversion.`,...(ce=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};const _e=["Documentation","Playground","Solid","Ghost","BothVariants","Sizes","Loading","Disabled","AllStates"];export{h as AllStates,u as BothVariants,p as Disabled,o as Documentation,d as Ghost,g as Loading,l as Playground,b as Sizes,c as Solid,_e as __namedExportsOrder,Fe as default};
