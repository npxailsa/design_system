import{j as e}from"./iframe-D_2A33QR.js";import{D as a}from"./DocsTemplate-DP_gMTxa.js";import"./preload-helper-Dp1pzeXC.js";const n={"btn-info":"_btn-info_4k279_18","btn-info--small":"_btn-info--small_4k279_66","btn-info--large":"_btn-info--large_4k279_74","btn-info--solid":"_btn-info--solid_4k279_82","btn-info--disabled":"_btn-info--disabled_4k279_88","btn-info--loading":"_btn-info--loading_4k279_113","btn-info--ghost":"_btn-info--ghost_4k279_120","btn-info__icon-leading":"_btn-info__icon-leading_4k279_168","btn-info__icon-trailing":"_btn-info__icon-trailing_4k279_176","btn-info__label":"_btn-info__label_4k279_184","btn-info__spinner":"_btn-info__spinner_4k279_191","btn-info-spin":"_btn-info-spin_4k279_1"},xe=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M6.99967 2.33331C7.61851 2.33331 8.21201 2.57915 8.64959 3.01673C9.08718 3.45432 9.33301 4.04781 9.33301 4.66665C9.33301 5.28548 9.08718 5.87898 8.64959 6.31656C8.21201 6.75415 7.61851 6.99998 6.99967 6.99998C6.38084 6.99998 5.78734 6.75415 5.34976 6.31656C4.91217 5.87898 4.66634 5.28548 4.66634 4.66665C4.66634 4.04781 4.91217 3.45432 5.34976 3.01673C5.78734 2.57915 6.38084 2.33331 6.99967 2.33331ZM6.99967 8.16665C9.57801 8.16665 11.6663 9.21081 11.6663 10.5V11.6666H2.33301V10.5C2.33301 9.21081 4.42134 8.16665 6.99967 8.16665Z",fill:"currentColor"})}),me=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M7.99935 2.66663C8.70659 2.66663 9.38487 2.94758 9.88497 3.44767C10.3851 3.94777 10.666 4.62605 10.666 5.33329C10.666 6.04054 10.3851 6.71881 9.88497 7.21891C9.38487 7.71901 8.70659 7.99996 7.99935 7.99996C7.29211 7.99996 6.61383 7.71901 6.11373 7.21891C5.61363 6.71881 5.33268 6.04054 5.33268 5.33329C5.33268 4.62605 5.61363 3.94777 6.11373 3.44767C6.61383 2.94758 7.29211 2.66663 7.99935 2.66663ZM7.99935 9.33329C10.946 9.33329 13.3327 10.5266 13.3327 12V13.3333H2.66602V12C2.66602 10.5266 5.05268 9.33329 7.99935 9.33329Z",fill:"currentColor"})}),ve=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M9 3C9.79565 3 10.5587 3.31607 11.1213 3.87868C11.6839 4.44129 12 5.20435 12 6C12 6.79565 11.6839 7.55871 11.1213 8.12132C10.5587 8.68393 9.79565 9 9 9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3ZM9 10.5C12.315 10.5 15 11.8425 15 13.5V15H3V13.5C3 11.8425 5.685 10.5 9 10.5Z",fill:"currentColor"})}),ye=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.33301 6.41667V7.58334H9.33301L6.12467 10.7917L6.95301 11.62L11.573 7L6.95301 2.38L6.12467 3.20834L9.33301 6.41667H2.33301Z",fill:"currentColor"})}),Ie=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.66602 7.3333V8.66664H10.666L6.99935 12.3333L7.94602 13.28L13.226 7.99997L7.94602 2.71997L6.99935 3.66664L10.666 7.3333H2.66602Z",fill:"currentColor"})}),je=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M3 8.25006V9.75006H12L7.875 13.8751L8.94 14.9401L14.88 9.00006L8.94 3.06006L7.875 4.12506L12 8.25006H3Z",fill:"currentColor"})}),we={small:xe,default:me,large:ve},ze={small:ye,default:Ie,large:je},t=({label:o="Info button",variant:i="solid",size:h="default",loading:s=!1,disabled:x=!1,type:ce="button",onClick:be,className:ue="",ariaLabel:pe})=>{const fe=we[h],ge=ze[h],he=[n["btn-info"],n[`btn-info--${i}`],h!=="default"?n[`btn-info--${h}`]:"",s?n["btn-info--loading"]:"",x?n["btn-info--disabled"]:"",ue].filter(Boolean).join(" ");return e.jsxs("button",{type:ce,className:he,onClick:!x&&!s?be:void 0,disabled:x||s,"aria-label":pe,"aria-busy":s||void 0,children:[s?e.jsx("span",{className:n["btn-info__spinner"],"aria-hidden":"true"}):e.jsx("span",{className:n["btn-info__icon-leading"],children:e.jsx(fe,{})}),e.jsx("span",{className:n["btn-info__label"],children:o}),!s&&e.jsx("span",{className:n["btn-info__icon-trailing"],children:e.jsx(ge,{})})]})};t.__docgenInfo={description:`InfoButton — status-specific button for info / informational actions.

Two variants:
- \`solid\` — info-blue (#366F97) filled background with white text and icons.
            Hover adds a 2×2px info-blue drop shadow (bg stays the same).
- \`ghost\` — white background with info-blue border and text/icons;
            hover shifts background to info-blue-light (#F5FCFF).

All three sizes: \`small\`, \`default\`, \`large\`.
Supports: loading, disabled, and all interactive states (hover, focus, active).

Storybook: Atoms / Buttons / StatusButton / InfoButton`,methods:[],displayName:"InfoButton",props:{label:{required:!1,tsType:{name:"string"},description:"Display label",defaultValue:{value:"'Info button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'ghost'"}]},description:"Visual variant.\n- `solid` — info-blue (#366F97) filled background, white text/icon;\n            hover adds a 2×2px info-blue drop shadow\n- `ghost` — white background, info-blue border & text/icon;\n            hover shifts bg to info-blue-light (#F5FCFF)",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant — controls height, padding, font, and icon sizes",defaultValue:{value:"'default'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const m=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"InfoButton",subtitle:"A status-specific button for informational actions within the NPX Design System"}),e.jsxs(a.BodyText,{children:["The ",e.jsx("strong",{children:"InfoButton"})," is the primary CTA element used inside info-status notifications and modal cards. It comes in two visual variants —"," ",e.jsx("strong",{children:"solid"})," (info-blue filled, white text) and ",e.jsx("strong",{children:"ghost"})," (white background, info-blue border and text, with an info-blue-light hover fill) — across three sizes. All styling is token-driven with no hardcoded values. It is always paired with a parent ",e.jsx("strong",{children:"CardContent"})," of status ",e.jsx("code",{children:"info"}),", where the solid variant serves as the primary call-to-action and the ghost as the secondary."]}),e.jsxs(a.Section,{title:"Component Anatomy",children:[e.jsx(a.BodyText,{children:"Each InfoButton renders three inline elements: a leading user icon, a text label, and a trailing arrow-right icon. In the loading state the leading icon is replaced by a CSS spinner and the trailing icon is hidden."}),e.jsx(a.Subsection,{title:"Solid",children:e.jsx(a.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-4px)",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Info button"}),e.jsx(t,{variant:"solid",size:"default",label:"Info button"}),e.jsx(t,{variant:"solid",size:"large",label:"Info button"})]}),parts:[{id:1,name:"Container",token:`--btn-info-solid-bg
--btn-info-solid-border-color
--btn-info-solid-border-color-hover
--btn-info-solid-border-width
--btn-border-radius`,description:"Outer shell. Fill: color/status/info-blue (#366F97). Default border: 1px solid info-blue. Hover border flips to white (--btn-info-solid-border-color-hover) and adds 2×2px info-blue drop shadow. Focus uses 2px border. Radius: 4px."},{id:2,name:"Leading Icon",token:`--btn-info-solid-color
--btn-icon-size-{size}`,description:"User/account icon — 14px small, 16px default, 18px large. Fill: white (currentColor). Replaced by spinner in loading state."},{id:3,name:"Label",token:`--btn-font-family
--btn-font-size-{size}
--btn-info-solid-color`,description:"Button text. F37 Ginger Pro Light. 14/16/18px by size. Colour: white (#FFFFFF)."},{id:4,name:"Trailing Icon",token:`--btn-info-solid-color
--btn-icon-size-{size}`,description:"Arrow-right icon. Same size as leading. Fill: white. Hidden in loading state."}]})}),e.jsx(a.Subsection,{title:"Ghost",children:e.jsx(a.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-4px)",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{variant:"ghost",size:"small",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"default",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"large",label:"Info button"})]}),parts:[{id:1,name:"Container",token:`--btn-info-ghost-bg
--btn-info-ghost-bg-hover
--btn-info-ghost-border-color
--btn-info-ghost-border-width
--btn-border-radius`,description:"Outer shell. Default fill: white. Border: 1px solid info-blue. Hover shifts bg to info-blue-light (#F5FCFF) + 2×2px info-blue shadow. Focus: 2px border. Radius: 4px."},{id:2,name:"Leading Icon",token:`--btn-info-ghost-color
--btn-icon-size-{size}`,description:"User/account icon. Fill: info-blue (#366F97). 14/16/18px by size."},{id:3,name:"Label",token:`--btn-font-family
--btn-font-size-{size}
--btn-info-ghost-color`,description:"Button text. F37 Ginger Pro Light. Colour: info-blue (#366F97)."},{id:4,name:"Trailing Icon",token:`--btn-info-ghost-color
--btn-icon-size-{size}`,description:"Arrow-right icon. Fill: info-blue (#366F97). Hidden in loading state."}]})})]}),e.jsxs(a.Section,{title:"Variants",children:[e.jsxs(a.BodyText,{children:["Two visual variants establish clear action hierarchy within info contexts. Always pair",e.jsx("strong",{children:" solid"})," as the primary action with ",e.jsx("strong",{children:"ghost"})," as the secondary — never two solid buttons side by side."]}),e.jsxs(a.Subsection,{title:"Solid — Primary CTA",children:[e.jsxs(a.BodyText,{children:["Info-blue (#366F97) filled background with matching border and white text. On hover a 2×2px info-blue drop shadow is added and the border transitions to white (",e.jsx("code",{children:"--btn-info-solid-border-color-hover"}),") so the border recedes against the solid blue background — keeping focus on the label. On focus a 2px border is applied with no shadow."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Info button"}),e.jsx(t,{variant:"solid",size:"default",label:"Info button"}),e.jsx(t,{variant:"solid",size:"large",label:"Info button"})]})]}),e.jsxs(a.Subsection,{title:"Ghost — Secondary CTA",children:[e.jsx(a.BodyText,{children:"White background with a 1px info-blue border and info-blue text/icons. On hover the background shifts to info-blue-light (#F5FCFF) and a 2×2px info-blue drop shadow is applied. On focus a 2px border with no shadow."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(t,{variant:"ghost",size:"small",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"default",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"large",label:"Info button"})]})]})]}),e.jsxs(a.Section,{title:"Sizes",children:[e.jsxs(a.BodyText,{children:["Three sizes scale the button for different card contexts. Size is set automatically by the parent ",e.jsx("strong",{children:"CardContent"})," via its ",e.jsx("code",{children:"size"})," prop."]}),e.jsx(a.SizeDemo,{rows:[{label:"Small",sublabel:"34px height — compact notification cards",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"small",label:"Info button"})]})},{label:"Default",sublabel:"44px height — standard notification cards",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",size:"default",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"default",label:"Info button"})]})},{label:"Large",sublabel:"56px height — prominent info modals",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",size:"large",label:"Info button"}),e.jsx(t,{variant:"ghost",size:"large",label:"Info button"})]})}]})]}),e.jsxs(a.Section,{title:"States",children:[e.jsxs(a.Subsection,{title:"Loading",children:[e.jsxs(a.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to replace the leading icon with a spinning CSS animation and hide the trailing arrow icon. The button is non-interactive during loading."]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Info button",loading:!0}),e.jsx(t,{variant:"solid",size:"default",label:"Info button",loading:!0}),e.jsx(t,{variant:"solid",size:"large",label:"Info button",loading:!0}),e.jsx(t,{variant:"ghost",size:"default",label:"Info button",loading:!0})]})]}),e.jsxs(a.Subsection,{title:"Disabled",children:[e.jsx(a.BodyText,{children:"Disabled state uses explicit grey tokens (no opacity reduction). Both variants share the same disabled appearance: grey-100 background, grey-400 text and border at 0.5px."}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-12px) 0"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Label",disabled:!0}),e.jsx(t,{variant:"solid",size:"default",label:"Label",disabled:!0}),e.jsx(t,{variant:"solid",size:"large",label:"Label",disabled:!0}),e.jsx(t,{variant:"ghost",size:"default",label:"Label",disabled:!0})]})]})]}),e.jsx(a.TokenTable,{title:"Design Tokens — Solid Variant",description:"Colour tokens for the solid (primary) info button:",tokens:[{name:"--btn-info-solid-bg",description:"Background — var(--global-color-status-info-blue) #366F97"},{name:"--btn-info-solid-color",description:"Text & icon colour — var(--global-color-base-white) #FFFFFF"},{name:"--btn-info-solid-border-color",description:"Default border colour — var(--global-color-status-info-blue) #366F97"},{name:"--btn-info-solid-border-color-hover",description:"Hover/active border colour — var(--global-color-base-white) #FFFFFF. Turns white on hover so the border blends with the icon and text, keeping the solid bg dominant."},{name:"--btn-info-solid-border-width",description:"Default border width — var(--global-spacing-stroke-1px) 1px"},{name:"--btn-info-solid-border-width-hover",description:"Hover border width — var(--global-spacing-stroke-1px) 1px (unchanged)"},{name:"--btn-info-solid-shadow-hover",description:"Drop shadow on hover/active — 2px 2px 0px 0px #366F97 (info-blue)"},{name:"--btn-info-solid-border-width-focus",description:"Focus border width — var(--global-spacing-stroke-2px) 2px"},{name:"--btn-info-solid-border-width-loading",description:"Loading border width — var(--global-spacing-stroke-1px) 1px"}]}),e.jsx(a.TokenTable,{title:"Design Tokens — Ghost Variant",description:"Colour tokens for the ghost (secondary) info button:",tokens:[{name:"--btn-info-ghost-bg",description:"Default background — var(--global-color-base-white) #FFFFFF"},{name:"--btn-info-ghost-bg-hover",description:"Hover/active background — var(--global-color-status-info-blue-light) #F5FCFF"},{name:"--btn-info-ghost-color",description:"Text & icon colour — var(--global-color-status-info-blue) #366F97"},{name:"--btn-info-ghost-border-color",description:"Border colour — var(--global-color-status-info-blue) #366F97"},{name:"--btn-info-ghost-border-width",description:"Default border width — var(--global-spacing-stroke-1px) 1px"},{name:"--btn-info-ghost-shadow-hover",description:"Drop shadow on hover/active — 2px 2px 0px 0px #366F97 (info-blue)"},{name:"--btn-info-ghost-border-width-focus",description:"Focus border width — var(--global-spacing-stroke-2px) 2px"}]}),e.jsx(a.TokenTable,{title:"Design Tokens — Disabled (shared)",description:"Tokens applied to both variants in the disabled state:",tokens:[{name:"--btn-info-bg-disabled",description:"Background — var(--global-color-neutral-gray-100) #F3F4F6"},{name:"--btn-info-color-disabled",description:"Text & icon colour — var(--global-color-neutral-gray-400) #9CA3AF"},{name:"--btn-info-border-color-disabled",description:"Border colour — var(--global-color-neutral-gray-400) #9CA3AF"},{name:"--btn-info-border-width-disabled",description:"Border width — var(--global-spacing-stroke-0-5px) 0.5px"}]}),e.jsx(a.CodeBlock,{children:`import { InfoButton } from '@/components/Button/InfoButton/InfoButton';

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
<CardContent variant="notification" status="info" heading="Did you know?" />`}),e.jsxs(a.Principles,{children:[e.jsxs(a.PrincipleCard,{number:1,title:"One solid per info context",children:["Each info notification or card should have exactly one ",e.jsx("strong",{children:"solid"})," InfoButton as the primary CTA. Pair it with a ",e.jsx("strong",{children:"ghost"}),' for secondary actions (e.g. "Dismiss" or "Learn more").']}),e.jsx(a.PrincipleCard,{number:2,title:"Reserve for info status only",children:"Do not use InfoButton in error, warning, or success contexts. Each status has its own dedicated button component with the correct colour tokens."}),e.jsxs(a.PrincipleCard,{number:3,title:"Never override status tokens",children:["All colours must come from ",e.jsx("code",{children:"--btn-info-*"})," tokens. Do not hardcode blue values or add local CSS overrides. If the status colour needs to change, update the token."]})]}),e.jsx(a.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",label:"Info button"}),e.jsx(t,{variant:"ghost",label:"Info button"})]}),label:"Solid + Ghost pair",description:"Use solid as the primary action and ghost as the secondary — clear visual hierarchy within the info card."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-8px)",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",label:"Info button"}),e.jsx(t,{variant:"solid",label:"Info button"})]}),label:"Two solid buttons",description:"Don't use two solid InfoButtons side by side. It creates confusion about which action is primary."}}),e.jsx(a.RelatedLinks,{links:[{label:"Figma Library",href:"https://www.figma.com/design/rCwHMIRhV0Taymt1YRXshd/NPX---White-label-Design-System?node-id=0-1&t=SNHnnLnzBTI11xsY-1"},{label:"CardContent component",href:"/?path=/story/atoms-cardcontent--documentation"},{label:"ErrorButton",href:"/?path=/story/atoms-buttons-statusbutton-errorbutton--documentation"},{label:"WarningButton",href:"/?path=/story/atoms-buttons-statusbutton-warningbutton--documentation"},{label:"SuccessButton",href:"/?path=/story/atoms-buttons-statusbutton-successbutton--documentation"}]}),e.jsx(a.Footer,{})]});m.__docgenInfo={description:"",methods:[],displayName:"InfoButtonDocs"};const ke={title:"Atoms/Buttons/StatusButton/InfoButton",component:t,parameters:{layout:"centered",docs:{page:()=>e.jsx(m,{})}},argTypes:{variant:{control:"select",options:["solid","ghost"],description:"Visual style — solid (info-blue fill) or ghost (outline with info-blue-light hover)"},size:{control:"select",options:["small","default","large"]},label:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},l={render:()=>e.jsx(m,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},r={args:{label:"Info button",variant:"solid",size:"default",loading:!1,disabled:!1}},d={args:{label:"Info button",variant:"solid",size:"default"}},c={args:{label:"Info button",variant:"ghost",size:"default"}},b={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",padding:"16px"},children:[e.jsx(t,{variant:"solid",label:"Info button"}),e.jsx(t,{variant:"ghost",label:"Info button"})]}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["solid","ghost"].map(o=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 10px"},children:o}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx(t,{variant:o,size:"small",label:"Info button"}),e.jsx(t,{variant:o,size:"default",label:"Info button"}),e.jsx(t,{variant:o,size:"large",label:"Info button"})]})]},o))}),parameters:{layout:"padded",controls:{disable:!0}}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Info button",loading:!0}),e.jsx(t,{variant:"solid",size:"default",label:"Info button",loading:!0}),e.jsx(t,{variant:"solid",size:"large",label:"Info button",loading:!0}),e.jsx(t,{variant:"ghost",size:"small",label:"Info button",loading:!0}),e.jsx(t,{variant:"ghost",size:"default",label:"Info button",loading:!0}),e.jsx(t,{variant:"ghost",size:"large",label:"Info button",loading:!0})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Label",disabled:!0}),e.jsx(t,{variant:"solid",size:"default",label:"Label",disabled:!0}),e.jsx(t,{variant:"solid",size:"large",label:"Label",disabled:!0}),e.jsx(t,{variant:"ghost",size:"small",label:"Label",disabled:!0}),e.jsx(t,{variant:"ghost",size:"default",label:"Label",disabled:!0}),e.jsx(t,{variant:"ghost",size:"large",label:"Label",disabled:!0})]}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"32px"},children:["solid","ghost"].map(o=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:300,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 16px",borderBottom:"1px solid var(--global-color-neutral-gray-200)",paddingBottom:"8px"},children:o}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["small","default","large"].map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",minWidth:"52px",textTransform:"capitalize"},children:i}),e.jsx(t,{variant:o,size:i,label:"Info button"}),e.jsx(t,{variant:o,size:i,label:"Info button",loading:!0}),e.jsx(t,{variant:o,size:i,label:"Label",disabled:!0})]},i))})]},o))}),parameters:{layout:"padded",controls:{disable:!0}}};var v,y,I,j,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(y=l.parameters)==null?void 0:y.docs)==null?void 0:I.source},description:{story:"Full documentation — design specs, token table, anatomy and usage examples.",...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var z,C,B,F,k;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Info button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false
  }
}`,...(B=(C=r.parameters)==null?void 0:C.docs)==null?void 0:B.source},description:{story:"Interactive playground — adjust all props via the Controls panel.",...(k=(F=r.parameters)==null?void 0:F.docs)==null?void 0:k.description}}};var S,_,L,T,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Info button',
    variant: 'solid',
    size: 'default'
  }
}`,...(L=(_=d.parameters)==null?void 0:_.docs)==null?void 0:L.source},description:{story:`Solid variant — info-blue (#366F97) background, white text and icons.
Hover adds a 2×2px info-blue drop shadow; background stays unchanged.
Use as the primary CTA in info-status CardContent cards.`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.description}}};var A,W,H,V,M;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Info button',
    variant: 'ghost',
    size: 'default'
  }
}`,...(H=(W=c.parameters)==null?void 0:W.docs)==null?void 0:H.source},description:{story:`Ghost / alt variant — white background, info-blue border and text.
Hover shifts background to info-blue-light (#F5FCFF) + info-blue drop shadow.
Use as the secondary CTA alongside the solid variant.`,...(M=(V=c.parameters)==null?void 0:V.docs)==null?void 0:M.description}}};var R,N,E,P,G;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    padding: '16px'
  }}>
      <InfoButton variant="solid" label="Info button" />
      <InfoButton variant="ghost" label="Info button" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(N=b.parameters)==null?void 0:N.docs)==null?void 0:E.source},description:{story:"Both variants side by side — as they appear in an info CardContent ButtonGroup.",...(G=(P=b.parameters)==null?void 0:P.docs)==null?void 0:G.description}}};var O,U,q,Z,X;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(U=u.parameters)==null?void 0:U.docs)==null?void 0:q.source},description:{story:"All three sizes — small (34px), default (44px), large (56px).",...(X=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:X.description}}};var Y,$,J,K,Q;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px',
    flexWrap: 'wrap'
  }}>
      <InfoButton variant="solid" size="small" label="Info button" loading />
      <InfoButton variant="solid" size="default" label="Info button" loading />
      <InfoButton variant="solid" size="large" label="Info button" loading />
      <InfoButton variant="ghost" size="small" label="Info button" loading />
      <InfoButton variant="ghost" size="default" label="Info button" loading />
      <InfoButton variant="ghost" size="large" label="Info button" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=($=p.parameters)==null?void 0:$.docs)==null?void 0:J.source},description:{story:"Loading state — spinner replaces the leading icon, trailing icon hidden.",...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var ee,te,ae,oe,ne;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px',
    flexWrap: 'wrap'
  }}>
      <InfoButton variant="solid" size="small" label="Label" disabled />
      <InfoButton variant="solid" size="default" label="Label" disabled />
      <InfoButton variant="solid" size="large" label="Label" disabled />
      <InfoButton variant="ghost" size="small" label="Label" disabled />
      <InfoButton variant="ghost" size="default" label="Label" disabled />
      <InfoButton variant="ghost" size="large" label="Label" disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:"Disabled state — grey background, grey text, not interactive.",...(ne=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var ie,se,le,re,de;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(se=g.parameters)==null?void 0:se.docs)==null?void 0:le.source},description:{story:"Full state matrix — all combinations of variant × size × state.",...(de=(re=g.parameters)==null?void 0:re.docs)==null?void 0:de.description}}};const Se=["Documentation","Playground","Solid","Ghost","BothVariants","Sizes","Loading","Disabled","AllStates"];export{g as AllStates,b as BothVariants,f as Disabled,l as Documentation,c as Ghost,p as Loading,r as Playground,u as Sizes,d as Solid,Se as __namedExportsOrder,ke as default};
