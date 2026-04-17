import{j as e}from"./iframe-Do1ZXJJl.js";import{B as ge}from"./ButtonBase-BAaJhK1A.js";import{D as o}from"./DocsTemplate-CdC3H3A2.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-DX_vrYOA.js";import"./index-Denvern_.js";import"./emotion-react.browser.esm-Bk6OzT3J.js";import"./useForkRef-B9zTX-7m.js";import"./useEventCallback-Bq346ad6.js";import"./isFocusVisible-B8k4qzLc.js";const n={"btn-info":"_btn-info_4k279_18","btn-info--small":"_btn-info--small_4k279_66","btn-info--large":"_btn-info--large_4k279_74","btn-info--solid":"_btn-info--solid_4k279_82","btn-info--disabled":"_btn-info--disabled_4k279_88","btn-info--loading":"_btn-info--loading_4k279_113","btn-info--ghost":"_btn-info--ghost_4k279_120","btn-info__icon-leading":"_btn-info__icon-leading_4k279_168","btn-info__icon-trailing":"_btn-info__icon-trailing_4k279_176","btn-info__label":"_btn-info__label_4k279_184","btn-info__spinner":"_btn-info__spinner_4k279_191","btn-info-spin":"_btn-info-spin_4k279_1"},xe=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M6.99967 2.33331C7.61851 2.33331 8.21201 2.57915 8.64959 3.01673C9.08718 3.45432 9.33301 4.04781 9.33301 4.66665C9.33301 5.28548 9.08718 5.87898 8.64959 6.31656C8.21201 6.75415 7.61851 6.99998 6.99967 6.99998C6.38084 6.99998 5.78734 6.75415 5.34976 6.31656C4.91217 5.87898 4.66634 5.28548 4.66634 4.66665C4.66634 4.04781 4.91217 3.45432 5.34976 3.01673C5.78734 2.57915 6.38084 2.33331 6.99967 2.33331ZM6.99967 8.16665C9.57801 8.16665 11.6663 9.21081 11.6663 10.5V11.6666H2.33301V10.5C2.33301 9.21081 4.42134 8.16665 6.99967 8.16665Z",fill:"currentColor"})}),he=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M7.99935 2.66663C8.70659 2.66663 9.38487 2.94758 9.88497 3.44767C10.3851 3.94777 10.666 4.62605 10.666 5.33329C10.666 6.04054 10.3851 6.71881 9.88497 7.21891C9.38487 7.71901 8.70659 7.99996 7.99935 7.99996C7.29211 7.99996 6.61383 7.71901 6.11373 7.21891C5.61363 6.71881 5.33268 6.04054 5.33268 5.33329C5.33268 4.62605 5.61363 3.94777 6.11373 3.44767C6.61383 2.94758 7.29211 2.66663 7.99935 2.66663ZM7.99935 9.33329C10.946 9.33329 13.3327 10.5266 13.3327 12V13.3333H2.66602V12C2.66602 10.5266 5.05268 9.33329 7.99935 9.33329Z",fill:"currentColor"})}),me=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M9 3C9.79565 3 10.5587 3.31607 11.1213 3.87868C11.6839 4.44129 12 5.20435 12 6C12 6.79565 11.6839 7.55871 11.1213 8.12132C10.5587 8.68393 9.79565 9 9 9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3ZM9 10.5C12.315 10.5 15 11.8425 15 13.5V15H3V13.5C3 11.8425 5.685 10.5 9 10.5Z",fill:"currentColor"})}),ve=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.33301 6.41667V7.58334H9.33301L6.12467 10.7917L6.95301 11.62L11.573 7L6.95301 2.38L6.12467 3.20834L9.33301 6.41667H2.33301Z",fill:"currentColor"})}),ye=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.66602 7.3333V8.66664H10.666L6.99935 12.3333L7.94602 13.28L13.226 7.99997L7.94602 2.71997L6.99935 3.66664L10.666 7.3333H2.66602Z",fill:"currentColor"})}),je=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M3 8.25006V9.75006H12L7.875 13.8751L8.94 14.9401L14.88 9.00006L8.94 3.06006L7.875 4.12506L12 8.25006H3Z",fill:"currentColor"})}),Ie={small:xe,default:he,large:me},we={small:ve,default:ye,large:je},t=({label:a="Info button",variant:i="solid",size:p="default",loading:s=!1,disabled:v=!1,type:re="button",onClick:de,className:ce="",ariaLabel:pe})=>{const ue=Ie[p],be=we[p],fe=[n["btn-info"],n[`btn-info--${i}`],p!=="default"?n[`btn-info--${p}`]:"",s?n["btn-info--loading"]:"",v?n["btn-info--disabled"]:"",ce].filter(Boolean).join(" ");return e.jsxs(ge,{component:"button",type:re,className:fe,onClick:!v&&!s?de:void 0,disabled:v||s,"aria-label":pe,"aria-busy":s||void 0,children:[s?e.jsx("span",{className:n["btn-info__spinner"],"aria-hidden":"true"}):e.jsx("span",{className:n["btn-info__icon-leading"],children:e.jsx(ue,{})}),e.jsx("span",{className:n["btn-info__label"],children:a}),!s&&e.jsx("span",{className:n["btn-info__icon-trailing"],children:e.jsx(be,{})})]})};t.__docgenInfo={description:`InfoButton — status-specific button for info / informational actions.

Two variants:
- \`solid\` — info-blue (#366F97) filled background with white text and icons.
            Hover adds a 2×2px info-blue drop shadow (bg stays the same).
- \`ghost\` — white background with info-blue border and text/icons;
            hover shifts background to info-blue-light (#F5FCFF).

All three sizes: \`small\`, \`default\`, \`large\`.
Supports: loading, disabled, and all interactive states (hover, focus, active).

Storybook: Atoms / Buttons / StatusButton / InfoButton`,methods:[],displayName:"InfoButton",props:{label:{required:!1,tsType:{name:"string"},description:"Display label",defaultValue:{value:"'Info button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'ghost'"}]},description:"Visual variant.\n- `solid` — info-blue (#366F97) filled background, white text/icon;\n            hover adds a 2×2px info-blue drop shadow\n- `ghost` — white background, info-blue border & text/icon;\n            hover shifts bg to info-blue-light (#F5FCFF)",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant — controls height, padding, font, and icon sizes",defaultValue:{value:"'default'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const y=()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"InfoButton",subtitle:"A status-specific button for informational actions within the NPX Design System"}),e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"InfoButton"})," is the primary CTA element used inside info-status notifications and modal cards. It comes in two visual variants —"," ",e.jsx("strong",{children:"solid"})," (info-blue filled, white text) and ",e.jsx("strong",{children:"ghost"})," (white background, info-blue border and text, with an info-blue-light hover fill) — across three sizes. All styling is token-driven with no hardcoded values. It is always paired with a parent ",e.jsx("strong",{children:"CardContent"})," of status ",e.jsx("code",{children:"info"}),", where the solid variant serves as the primary call-to-action and the ghost as the secondary."]}),e.jsxs(o.Section,{title:"MUI Foundation",children:[e.jsxs(o.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"ButtonBase"})," — the shared accessible primitive for the entire button family. ",e.jsx("code",{children:"ButtonBase"})," provides keyboard activation (Enter / Space), native ",e.jsx("code",{children:"<button>"})," semantics, and disabled propagation. InfoButton's info-blue palette, border behaviour, and hover fill are applied via CSS Modules and the"," ",e.jsx("code",{children:"--btn-info-*"})," token family."]}),e.jsx(o.CodeBlock,{children:`// MUI base import
import ButtonBase from '@mui/material/ButtonBase';

// Root element of InfoButton:
<ButtonBase component="button" className={styles['info-btn']} disabled={disabled} onClick={onClick}>`})]}),e.jsxs(o.Section,{title:"Component Anatomy",children:[e.jsx(o.BodyText,{children:"Each InfoButton renders three inline elements: a leading user icon, a text label, and a trailing arrow-right icon. In the loading state the leading icon is replaced by a CSS spinner and the trailing icon is hidden."}),e.jsx(o.Subsection,{title:"Solid",children:e.jsx(o.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-4px)",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Info button"}),e.jsx(t,{variant:"solid",size:"default",label:"Info button"}),e.jsx(t,{variant:"solid",size:"large",label:"Info button"})]}),parts:[{id:1,name:"Container",token:`--btn-info-solid-bg
--btn-info-solid-border-color
--btn-info-solid-border-color-hover
--btn-info-solid-border-width
--btn-border-radius`,description:"Outer shell. Fill: color/status/info-blue (#366F97). Default border: 1px solid info-blue. Hover border flips to white (--btn-info-solid-border-color-hover) and adds 2×2px info-blue drop shadow. Focus uses 2px border. Radius: 4px."},{id:2,name:"Leading Icon",token:`--btn-info-solid-color
--btn-icon-size-{size}`,description:"User/account icon — 14px small, 16px default, 18px large. Fill: white (currentColor). Replaced by spinner in loading state."},{id:3,name:"Label",token:`--btn-font-family
--btn-font-size-{size}
--btn-info-solid-color`,description:"Button text. F37 Ginger Pro Light. 14/16/18px by size. Colour: white (#FFFFFF)."},{id:4,name:"Trailing Icon",token:`--btn-info-solid-color
--btn-icon-size-{size}`,description:"Arrow-right icon. Same size as leading. Fill: white. Hidden in loading state."}]})}),e.jsx(o.Subsection,{title:"Ghost",children:e.jsx(o.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-4px)",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{variant:"ghost",size:"small",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"default",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"large",label:"Info button"})]}),parts:[{id:1,name:"Container",token:`--btn-info-ghost-bg
--btn-info-ghost-bg-hover
--btn-info-ghost-border-color
--btn-info-ghost-border-width
--btn-border-radius`,description:"Outer shell. Default fill: white. Border: 1px solid info-blue. Hover shifts bg to info-blue-light (#F5FCFF) + 2×2px info-blue shadow. Focus: 2px border. Radius: 4px."},{id:2,name:"Leading Icon",token:`--btn-info-ghost-color
--btn-icon-size-{size}`,description:"User/account icon. Fill: info-blue (#366F97). 14/16/18px by size."},{id:3,name:"Label",token:`--btn-font-family
--btn-font-size-{size}
--btn-info-ghost-color`,description:"Button text. F37 Ginger Pro Light. Colour: info-blue (#366F97)."},{id:4,name:"Trailing Icon",token:`--btn-info-ghost-color
--btn-icon-size-{size}`,description:"Arrow-right icon. Fill: info-blue (#366F97). Hidden in loading state."}]})})]}),e.jsxs(o.Section,{title:"Variants",children:[e.jsxs(o.BodyText,{children:["Two visual variants establish clear action hierarchy within info contexts. Always pair",e.jsx("strong",{children:" solid"})," as the primary action with ",e.jsx("strong",{children:"ghost"})," as the secondary — never two solid buttons side by side."]}),e.jsxs(o.Subsection,{title:"Solid — Primary CTA",children:[e.jsxs(o.BodyText,{children:["Info-blue (#366F97) filled background with matching border and white text. On hover a 2×2px info-blue drop shadow is added and the border transitions to white (",e.jsx("code",{children:"--btn-info-solid-border-color-hover"}),") so the border recedes against the solid blue background — keeping focus on the label. On focus a 2px border is applied with no shadow."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Info button"}),e.jsx(t,{variant:"solid",size:"default",label:"Info button"}),e.jsx(t,{variant:"solid",size:"large",label:"Info button"})]})]}),e.jsxs(o.Subsection,{title:"Ghost — Secondary CTA",children:[e.jsx(o.BodyText,{children:"White background with a 1px info-blue border and info-blue text/icons. On hover the background shifts to info-blue-light (#F5FCFF) and a 2×2px info-blue drop shadow is applied. On focus a 2px border with no shadow."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(t,{variant:"ghost",size:"small",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"default",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"large",label:"Info button"})]})]})]}),e.jsxs(o.Section,{title:"Sizes",children:[e.jsxs(o.BodyText,{children:["Three sizes scale the button for different card contexts. Size is set automatically by the parent ",e.jsx("strong",{children:"CardContent"})," via its ",e.jsx("code",{children:"size"})," prop."]}),e.jsx(o.SizeDemo,{rows:[{label:"Small",sublabel:"34px height — compact notification cards",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"small",label:"Info button"})]})},{label:"Default",sublabel:"44px height — standard notification cards",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",size:"default",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"default",label:"Info button"})]})},{label:"Large",sublabel:"56px height — prominent info modals",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",size:"large",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"large",label:"Info button"})]})}]})]}),e.jsxs(o.Section,{title:"States",children:[e.jsxs(o.Subsection,{title:"Loading",children:[e.jsxs(o.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to replace the leading icon with a spinning CSS animation and hide the trailing arrow icon. The button is non-interactive during loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Info button",loading:!0}),e.jsx(t,{variant:"solid",size:"default",label:"Info button",loading:!0}),e.jsx(t,{variant:"solid",size:"large",label:"Info button",loading:!0}),e.jsx(t,{variant:"ghost",size:"default",label:"Info button",loading:!0})]})]}),e.jsxs(o.Subsection,{title:"Disabled",children:[e.jsx(o.BodyText,{children:"Disabled state uses explicit grey tokens (no opacity reduction). Both variants share the same disabled appearance: grey-100 background, grey-400 text and border at 0.5px."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Label",disabled:!0}),e.jsx(t,{variant:"solid",size:"default",label:"Label",disabled:!0}),e.jsx(t,{variant:"solid",size:"large",label:"Label",disabled:!0}),e.jsx(t,{variant:"ghost",size:"default",label:"Label",disabled:!0})]})]})]}),e.jsx(o.TokenTable,{title:"Design Tokens — Solid Variant",description:"Colour tokens for the solid (primary) info button:",tokens:[{name:"--btn-info-solid-bg",description:"Background — var(--global-color-status-info-blue) #366F97"},{name:"--btn-info-solid-color",description:"Text & icon colour — var(--global-color-base-white) #FFFFFF"},{name:"--btn-info-solid-border-color",description:"Default border colour — var(--global-color-status-info-blue) #366F97"},{name:"--btn-info-solid-border-color-hover",description:"Hover/active border colour — var(--global-color-base-white) #FFFFFF. Turns white on hover so the border blends with the icon and text, keeping the solid bg dominant."},{name:"--btn-info-solid-border-width",description:"Default border width — var(--global-spacing-stroke-1px) 1px"},{name:"--btn-info-solid-border-width-hover",description:"Hover border width — var(--global-spacing-stroke-1px) 1px (unchanged)"},{name:"--btn-info-solid-shadow-hover",description:"Drop shadow on hover/active — 2px 2px 0px 0px #366F97 (info-blue)"},{name:"--btn-info-solid-border-width-focus",description:"Focus border width — var(--global-spacing-stroke-2px) 2px"},{name:"--btn-info-solid-border-width-loading",description:"Loading border width — var(--global-spacing-stroke-1px) 1px"}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Ghost Variant",description:"Colour tokens for the ghost (secondary) info button:",tokens:[{name:"--btn-info-ghost-bg",description:"Default background — var(--global-color-base-white) #FFFFFF"},{name:"--btn-info-ghost-bg-hover",description:"Hover/active background — var(--global-color-status-info-blue-light) #F5FCFF"},{name:"--btn-info-ghost-color",description:"Text & icon colour — var(--global-color-status-info-blue) #366F97"},{name:"--btn-info-ghost-border-color",description:"Border colour — var(--global-color-status-info-blue) #366F97"},{name:"--btn-info-ghost-border-width",description:"Default border width — var(--global-spacing-stroke-1px) 1px"},{name:"--btn-info-ghost-shadow-hover",description:"Drop shadow on hover/active — 2px 2px 0px 0px #366F97 (info-blue)"},{name:"--btn-info-ghost-border-width-focus",description:"Focus border width — var(--global-spacing-stroke-2px) 2px"}]}),e.jsx(o.TokenTable,{title:"Design Tokens — Disabled (shared)",description:"Tokens applied to both variants in the disabled state:",tokens:[{name:"--btn-info-bg-disabled",description:"Background — var(--global-color-neutral-gray-100) #F3F4F6"},{name:"--btn-info-color-disabled",description:"Text & icon colour — var(--global-color-neutral-gray-400) #9CA3AF"},{name:"--btn-info-border-color-disabled",description:"Border colour — var(--global-color-neutral-gray-400) #9CA3AF"},{name:"--btn-info-border-width-disabled",description:"Border width — var(--global-spacing-stroke-0-5px) 0.5px"}]}),e.jsx(o.CodeBlock,{children:`import { InfoButton } from '@/components/Button/InfoButton/InfoButton';

// Solid (primary CTA)
<InfoButton variant="solid" label="Info button" />

// Ghost (secondary CTA)
<InfoButton variant="ghost" label="Info button" />

// Size variants
<InfoButton variant="solid" size="small" label="Info button" />
<InfoButton variant="solid" size="large" label="Info button" />

// Loading state
<InfoButton variant="solid" label="Info button" loading />

// Disabled state
<InfoButton variant="solid" label="Label" disabled />

// Inside a CardContent (tokens applied automatically via status class)
<CardContent variant="notification" status="info" heading="Did you know?" />`}),e.jsxs(o.Principles,{children:[e.jsxs(o.PrincipleCard,{number:1,title:"One solid per info context",children:["Each info notification or card should have exactly one ",e.jsx("strong",{children:"solid"})," InfoButton as the primary CTA. Pair it with a ",e.jsx("strong",{children:"ghost"}),' for secondary actions (e.g. "Dismiss" or "Learn more").']}),e.jsx(o.PrincipleCard,{number:2,title:"Reserve for info status only",children:"Do not use InfoButton in error, warning, or success contexts. Each status has its own dedicated button component with the correct colour tokens."}),e.jsxs(o.PrincipleCard,{number:3,title:"Never override status tokens",children:["All colours must come from ",e.jsx("code",{children:"--btn-info-*"})," tokens. Do not hardcode blue values or add local CSS overrides. If the status colour needs to change, update the token."]})]}),e.jsx(o.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",label:"Info button"}),e.jsx(t,{variant:"ghost",label:"Info button"})]}),label:"Solid + Ghost pair",description:"Use solid as the primary action and ghost as the secondary — clear visual hierarchy within the info card."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",label:"Info button"}),e.jsx(t,{variant:"solid",label:"Info button"})]}),label:"Two solid buttons",description:"Don't use two solid InfoButtons side by side. It creates confusion about which action is primary."}}),e.jsx(o.RelatedLinks,{links:[{label:"Figma Library",href:"https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1"},{label:"CardContent component",href:"/?path=/story/atoms-cardcontent--documentation"},{label:"ErrorButton",href:"/?path=/story/atoms-buttons-statusbutton-errorbutton--documentation"},{label:"WarningButton",href:"/?path=/story/atoms-buttons-statusbutton-warningbutton--documentation"},{label:"SuccessButton",href:"/?path=/story/atoms-buttons-statusbutton-successbutton--documentation"}]}),e.jsx(o.Footer,{})]});y.__docgenInfo={description:"",methods:[],displayName:"InfoButtonDocs"};const Ae={title:"Atoms/Buttons/StatusButton/InfoButton",component:t,parameters:{layout:"centered",docs:{page:()=>e.jsx(y,{})}},argTypes:{variant:{control:"select",options:["solid","ghost"],description:"Visual style — solid (info-blue fill) or ghost (outline with info-blue-light hover)"},size:{control:"select",options:["small","default","large"]},label:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},l={render:()=>e.jsx(y,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},r={name:"Playground",args:{label:"Info button",variant:"solid",size:"default",loading:!1,disabled:!1}},u={name:"Default",args:{label:"Info button",variant:"solid",size:"default"}},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["solid","ghost"].map(a=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 10px"},children:a}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx(t,{variant:a,size:"small",label:"Info button"}),e.jsx(t,{variant:a,size:"default",label:"Info button"}),e.jsx(t,{variant:a,size:"large",label:"Info button"})]})]},a))}),parameters:{layout:"padded",controls:{disable:!0}}},b={name:"Status / Solid",args:{label:"Info button",variant:"solid",size:"default"}},f={name:"Status / Ghost",args:{label:"Info button",variant:"ghost",size:"default"}},g={name:"Status / Loading",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",padding:"16px"},children:[e.jsx(t,{variant:"solid",label:"Loading",loading:!0}),e.jsx(t,{variant:"ghost",label:"Loading",loading:!0})]}),parameters:{controls:{disable:!0}}},x={name:"Status / Disabled",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",padding:"16px"},children:[e.jsx(t,{variant:"solid",label:"Disabled",disabled:!0}),e.jsx(t,{variant:"ghost",label:"Disabled",disabled:!0})]}),parameters:{controls:{disable:!0}}},h={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",padding:"24px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,fontFamily:"var(--brand-font-primary)"},children:"Solid"}),e.jsx(t,{variant:"solid",label:"Info button"}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px"},children:"--btn-info-solid-bg"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,fontFamily:"var(--brand-font-primary)"},children:"Ghost"}),e.jsx(t,{variant:"ghost",label:"Info button"}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px"},children:"--btn-info-ghost-border"})]})]}),parameters:{controls:{disable:!0}}},m={name:"All Interactive States",render:()=>e.jsx("div",{style:{display:"flex",gap:"12px",padding:"24px"},children:["Default","Loading","Disabled"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[e.jsx(t,{variant:"solid",label:a,loading:a==="Loading",disabled:a==="Disabled"}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:a.toLowerCase()})]},a))}),parameters:{controls:{disable:!0}}},c={name:"Full Design Matrix (18 variants)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"32px"},children:["solid","ghost"].map(a=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:300,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 16px",borderBottom:"1px solid var(--global-color-neutral-gray-200)",paddingBottom:"8px"},children:a}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["small","default","large"].map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",minWidth:"52px",textTransform:"capitalize"},children:i}),e.jsx(t,{variant:a,size:i,label:"Info button"}),e.jsx(t,{variant:a,size:i,label:"Info button",loading:!0}),e.jsx(t,{variant:a,size:i,label:"Label",disabled:!0})]},i))})]},a))}),parameters:{layout:"padded",controls:{disable:!0}}};var j,I,w,z,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <InfoButtonDocs />,
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
}`,...(w=(I=l.parameters)==null?void 0:I.docs)==null?void 0:w.source},description:{story:"Full documentation — design specs, token table, anatomy and usage examples.",...(S=(z=l.parameters)==null?void 0:z.docs)==null?void 0:S.description}}};var B,F,C,k,D;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Info button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false
  }
}`,...(C=(F=r.parameters)==null?void 0:F.docs)==null?void 0:C.source},description:{story:"Interactive playground — adjust all props via the Controls panel.",...(D=(k=r.parameters)==null?void 0:k.docs)==null?void 0:D.description}}};var _,L,T;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    label: 'Info button',
    variant: 'solid',
    size: 'default'
  }
}`,...(T=(L=u.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var A,W,M,H,V;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
            <InfoButton variant={variant} size="small" label="Info button" />
            <InfoButton variant={variant} size="default" label="Info button" />
            <InfoButton variant={variant} size="large" label="Info button" />
          </div>
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(M=(W=d.parameters)==null?void 0:W.docs)==null?void 0:M.source},description:{story:"All three sizes — small (34px), default (44px), large (56px).",...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.description}}};var R,N,E;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Status / Solid',
  args: {
    label: 'Info button',
    variant: 'solid',
    size: 'default'
  }
}`,...(E=(N=b.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var P,G,O;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Status / Ghost',
  args: {
    label: 'Info button',
    variant: 'ghost',
    size: 'default'
  }
}`,...(O=(G=f.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var U,q,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Status / Loading',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    padding: '16px'
  }}><InfoButton variant="solid" label="Loading" loading /><InfoButton variant="ghost" label="Loading" loading /></div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(q=g.parameters)==null?void 0:q.docs)==null?void 0:Z.source}}};var X,Y,$;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Status / Disabled',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    padding: '16px'
  }}><InfoButton variant="solid" label="Disabled" disabled /><InfoButton variant="ghost" label="Disabled" disabled /></div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var J,K,Q;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '24px'
  }}><div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}><span style={{
        fontSize: '11px',
        fontWeight: 600,
        fontFamily: 'var(--brand-font-primary)'
      }}>Solid</span><InfoButton variant="solid" label="Info button" /><code style={{
        fontSize: '10px',
        background: 'var(--global-color-neutral-gray-100)',
        padding: '2px 6px',
        borderRadius: '4px'
      }}>--btn-info-solid-bg</code></div><div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }}><span style={{
        fontSize: '11px',
        fontWeight: 600,
        fontFamily: 'var(--brand-font-primary)'
      }}>Ghost</span><InfoButton variant="ghost" label="Info button" /><code style={{
        fontSize: '10px',
        background: 'var(--global-color-neutral-gray-100)',
        padding: '2px 6px',
        borderRadius: '4px'
      }}>--btn-info-ghost-border</code></div></div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var ee,te,oe;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    padding: '24px'
  }}>{(['Default', 'Loading', 'Disabled'] as const).map(s => <div key={s} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px'
    }}><InfoButton variant="solid" label={s} loading={s === 'Loading'} disabled={s === 'Disabled'} /><span style={{
        fontSize: '10px',
        color: 'var(--global-color-neutral-gray-400)',
        fontFamily: 'var(--brand-font-secondary)'
      }}>{s.toLowerCase()}</span></div>)}</div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(te=m.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,ne,ie,se,le;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
                <InfoButton variant={variant} size={size} label="Info button" />
                <InfoButton variant={variant} size={size} label="Info button" loading />
                <InfoButton variant={variant} size={size} label="Label" disabled />
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
}`,...(ie=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:"Full state matrix — all combinations of variant × size × state.",...(le=(se=c.parameters)==null?void 0:se.docs)==null?void 0:le.description}}};const We=["Documentation","Playground","Default","Sizes","StatusSolid","StatusGhost","StatusLoading","StatusDisabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{m as AllInteractiveStates,h as ComponentBreakdown,u as Default,l as Documentation,c as FullDesignMatrix,r as Playground,d as Sizes,x as StatusDisabled,f as StatusGhost,g as StatusLoading,b as StatusSolid,We as __namedExportsOrder,Ae as default};
