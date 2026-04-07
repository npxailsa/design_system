import{j as e}from"./iframe-cj033Q_j.js";import"./preload-helper-Dp1pzeXC.js";const i={"btn-warning":"_btn-warning_smhbv_16","btn-warning--small":"_btn-warning--small_smhbv_64","btn-warning--large":"_btn-warning--large_smhbv_72","btn-warning--solid":"_btn-warning--solid_smhbv_80","btn-warning--disabled":"_btn-warning--disabled_smhbv_86","btn-warning--loading":"_btn-warning--loading_smhbv_107","btn-warning--ghost":"_btn-warning--ghost_smhbv_114","btn-warning__icon-leading":"_btn-warning__icon-leading_smhbv_161","btn-warning__icon-trailing":"_btn-warning__icon-trailing_smhbv_169","btn-warning__label":"_btn-warning__label_smhbv_177","btn-warning__spinner":"_btn-warning__spinner_smhbv_184","btn-warning-spin":"_btn-warning-spin_smhbv_1"},Se=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M6.99967 2.33331C7.61851 2.33331 8.21201 2.57915 8.64959 3.01673C9.08718 3.45432 9.33301 4.04781 9.33301 4.66665C9.33301 5.28548 9.08718 5.87898 8.64959 6.31656C8.21201 6.75415 7.61851 6.99998 6.99967 6.99998C6.38084 6.99998 5.78734 6.75415 5.34976 6.31656C4.91217 5.87898 4.66634 5.28548 4.66634 4.66665C4.66634 4.04781 4.91217 3.45432 5.34976 3.01673C5.78734 2.57915 6.38084 2.33331 6.99967 2.33331ZM6.99967 8.16665C9.57801 8.16665 11.6663 9.21081 11.6663 10.5V11.6666H2.33301V10.5C2.33301 9.21081 4.42134 8.16665 6.99967 8.16665Z",fill:"currentColor"})}),ke=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M8.00033 2.66663C8.70757 2.66663 9.38585 2.94758 9.88594 3.44767C10.386 3.94777 10.667 4.62605 10.667 5.33329C10.667 6.04054 10.386 6.71881 9.88594 7.21891C9.38585 7.71901 8.70757 7.99996 8.00033 7.99996C7.29308 7.99996 6.6148 7.71901 6.11471 7.21891C5.61461 6.71881 5.33366 6.04054 5.33366 5.33329C5.33366 4.62605 5.61461 3.94777 6.11471 3.44767C6.6148 2.94758 7.29308 2.66663 8.00033 2.66663ZM8.00033 9.33329C10.947 9.33329 13.3337 10.5266 13.3337 12V13.3333H2.66699V12C2.66699 10.5266 5.05366 9.33329 8.00033 9.33329Z",fill:"currentColor"})}),_e=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M9 3C9.79565 3 10.5587 3.31607 11.1213 3.87868C11.6839 4.44129 12 5.20435 12 6C12 6.79565 11.6839 7.55871 11.1213 8.12132C10.5587 8.68393 9.79565 9 9 9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3ZM9 10.5C12.315 10.5 15 11.8425 15 13.5V15H3V13.5C3 11.8425 5.685 10.5 9 10.5Z",fill:"currentColor"})}),Te=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.33301 6.41667V7.58334H9.33301L6.12467 10.7917L6.95301 11.62L11.573 7L6.95301 2.38L6.12467 3.20834L9.33301 6.41667H2.33301Z",fill:"currentColor"})}),Ae=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.66699 7.3333V8.66664H10.667L7.00033 12.3333L7.94699 13.28L13.227 7.99997L7.94699 2.71997L7.00033 3.66664L10.667 7.3333H2.66699Z",fill:"currentColor"})}),Fe=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M3 8.25006V9.75006H12L7.875 13.8751L8.94 14.9401L14.88 9.00006L8.94 3.06006L7.875 4.12506L12 8.25006H3Z",fill:"currentColor"})}),Le={small:Se,default:ke,large:_e},De={small:Te,default:Ae,large:Fe},a=({label:n="Warning button",variant:r="solid",size:s="default",loading:d=!1,disabled:C=!1,type:fe="button",onClick:je,className:we="",ariaLabel:We})=>{const Ce=Le[s],Be=De[s],ze=[i["btn-warning"],i[`btn-warning--${r}`],s!=="default"?i[`btn-warning--${s}`]:"",d?i["btn-warning--loading"]:"",C?i["btn-warning--disabled"]:"",we].filter(Boolean).join(" ");return e.jsxs("button",{type:fe,className:ze,onClick:!C&&!d?je:void 0,disabled:C||d,"aria-label":We,"aria-busy":d||void 0,children:[d?e.jsx("span",{className:i["btn-warning__spinner"],"aria-hidden":"true"}):e.jsx("span",{className:i["btn-warning__icon-leading"],children:e.jsx(Ce,{})}),e.jsx("span",{className:i["btn-warning__label"],children:n}),!d&&e.jsx("span",{className:i["btn-warning__icon-trailing"],children:e.jsx(Be,{})})]})};a.__docgenInfo={description:"WarningButton — status-specific button for warning / cautionary actions.\n\nTwo variants:\n- `solid` — amber filled (#F4A403) with black icon + label and dark-orange border (primary CTA)\n- `ghost` — white background with orange border, dark-orange icon + label;\n            hover shifts background to orange-light `#FEF4DA` (secondary CTA)\n\nAll three sizes: `small`, `default`, `large`.\nSupports: loading, disabled, and all interactive states (hover, focus, active).\n\nStorybook: Atoms / Buttons / StatusButton / WarningButton",methods:[],displayName:"WarningButton",props:{label:{required:!1,tsType:{name:"string"},description:"Display label",defaultValue:{value:"'Warning button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'ghost'"}]},description:"Visual variant.\n- `solid` — amber filled background (#F4A403), black text/icon, dark-orange border\n- `ghost` — white background, orange border, dark-orange text/icon; hover shifts bg to orange-light",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant — controls height, padding, font, and icon sizes",defaultValue:{value:"'default'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const c={marginBottom:"48px"},g={fontFamily:"var(--brand-font-primary)",fontSize:"22px",fontWeight:300,color:"var(--global-color-base-black)",margin:"0 0 8px",paddingBottom:"8px",borderBottom:"1px solid var(--global-color-neutral-gray-200)"},o={fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:300,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 12px"},p={fontFamily:"var(--brand-font-primary)",fontSize:"14px",fontWeight:300,lineHeight:"22px",color:"var(--global-color-neutral-gray-700)",margin:"0 0 16px"},B={display:"flex",flexWrap:"wrap",alignItems:"center",gap:"12px",marginBottom:"12px"},Ie={fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:300,color:"var(--global-color-neutral-gray-400)",textTransform:"uppercase",letterSpacing:"0.08em",minWidth:"56px"},S={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-4px)",padding:"16px 20px",fontFamily:"monospace",fontSize:"13px",lineHeight:"1.6",color:"var(--global-color-neutral-gray-800)",overflowX:"auto",margin:"0 0 16px",whiteSpace:"pre"},h={width:"100%",borderCollapse:"collapse",fontFamily:"var(--brand-font-primary)",fontSize:"13px",marginBottom:"16px"},l={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",padding:"8px 12px",textAlign:"left",fontWeight:400,color:"var(--global-color-neutral-gray-700)"},t={border:"1px solid var(--global-color-neutral-gray-200)",padding:"8px 12px",color:"var(--global-color-neutral-gray-700)",verticalAlign:"top"},b={...t,fontFamily:"monospace",fontSize:"12px",color:"var(--global-color-status-dark-orange)"},k=(n,r)=>({display:"inline-block",padding:"2px 8px",borderRadius:"3px",background:n,color:r,fontFamily:"monospace",fontSize:"11px"}),z=()=>e.jsxs("div",{style:{padding:"48px",maxWidth:"960px",margin:"0 auto",fontFamily:"var(--brand-font-primary)"},children:[e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px"},children:[e.jsx("h1",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"32px",fontWeight:300,color:"var(--global-color-base-black)",margin:0},children:"WarningButton"}),e.jsx("span",{style:k("var(--global-color-status-orange-light)","var(--global-color-status-dark-orange)"),children:"Atoms / Buttons / StatusButton"}),e.jsx("span",{style:k("var(--global-color-neutral-gray-100)","var(--global-color-neutral-gray-600)"),children:"Stable"})]}),e.jsxs("p",{style:{...p,margin:0,maxWidth:"640px"},children:["A status-specific button for warning and cautionary actions. Two visual variants:",e.jsx("strong",{children:" solid"})," (amber filled, black text — primary CTA) and"," ",e.jsx("strong",{children:" ghost"})," (white background, orange border, dark-orange text — secondary CTA; hover shifts background to orange-light)."]})]}),e.jsxs("div",{style:c,children:[e.jsx("h2",{style:g,children:"Anatomy"}),e.jsx("p",{style:p,children:"Each button renders three inline elements: a leading user icon, a text label, and a trailing arrow-right icon. In the loading state the leading icon is replaced by a CSS spinner and the trailing icon is hidden. In the disabled state all elements are tinted grey."}),e.jsxs("div",{style:{background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-4px)",padding:"32px",display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"solid",size:"default",label:"Warning button"}),e.jsx(a,{variant:"ghost",size:"default",label:"Warning button"})]})]}),e.jsxs("div",{style:c,children:[e.jsx("h2",{style:g,children:"Variants"}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("p",{style:o,children:"Solid"}),e.jsxs("p",{style:p,children:["Amber (#F4A403) filled background with a dark-orange (#D07C06) border and black text. Use as the primary call-to-action within a warning CardContent. Hover adds a"," ",e.jsx("code",{children:"2 × 2px"})," dark-orange drop shadow. Focus shows a 2px border with no shadow."]}),e.jsxs("div",{style:B,children:[e.jsx(a,{variant:"solid",size:"small",label:"Warning button"}),e.jsx(a,{variant:"solid",size:"default",label:"Warning button"}),e.jsx(a,{variant:"solid",size:"large",label:"Warning button"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:o,children:"Ghost / Alt"}),e.jsxs("p",{style:p,children:["White background with a 1px orange (#F4A403) border and dark-orange (#D07C06) text and icons. On hover, the background shifts to orange-light (#FEF4DA) and a"," ",e.jsx("code",{children:"2 × 2px"})," dark-orange shadow is applied. Use as the secondary CTA alongside the solid variant."]}),e.jsxs("div",{style:B,children:[e.jsx(a,{variant:"ghost",size:"small",label:"Warning button"}),e.jsx(a,{variant:"ghost",size:"default",label:"Warning button"}),e.jsx(a,{variant:"ghost",size:"large",label:"Warning button"})]})]})]}),e.jsxs("div",{style:c,children:[e.jsx("h2",{style:g,children:"Sizes"}),e.jsxs("p",{style:p,children:["Three sizes are available. The size controls height, padding, font size, and icon size. In CardContent, the sizes map directly to the card size: ",e.jsx("code",{children:"small → xs"}),","," ",e.jsx("code",{children:"default → sm"}),", ",e.jsx("code",{children:"large → md"}),"."]}),e.jsxs("table",{style:h,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:l,children:"Size"}),e.jsx("th",{style:l,children:"Height"}),e.jsx("th",{style:l,children:"Padding"}),e.jsx("th",{style:l,children:"Font size"}),e.jsx("th",{style:l,children:"Icon size"}),e.jsx("th",{style:l,children:"Preview"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:b,children:"small"}),e.jsx("td",{style:t,children:"34px"}),e.jsx("td",{style:t,children:"4px 12px"}),e.jsx("td",{style:t,children:"14px"}),e.jsx("td",{style:t,children:"14px"}),e.jsx("td",{style:t,children:e.jsx(a,{variant:"solid",size:"small",label:"Warning button"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:b,children:"default"}),e.jsx("td",{style:t,children:"44px"}),e.jsx("td",{style:t,children:"4px 16px"}),e.jsx("td",{style:t,children:"16px"}),e.jsx("td",{style:t,children:"16px"}),e.jsx("td",{style:t,children:e.jsx(a,{variant:"solid",size:"default",label:"Warning button"})})]}),e.jsxs("tr",{children:[e.jsx("td",{style:b,children:"large"}),e.jsx("td",{style:t,children:"56px"}),e.jsx("td",{style:t,children:"4px 16px"}),e.jsx("td",{style:t,children:"18px"}),e.jsx("td",{style:t,children:"18px"}),e.jsx("td",{style:t,children:e.jsx(a,{variant:"solid",size:"large",label:"Warning button"})})]})]})]})]}),e.jsxs("div",{style:c,children:[e.jsx("h2",{style:g,children:"States"}),["solid","ghost"].map(n=>e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("p",{style:o,children:n}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["small","default","large"].map(r=>e.jsxs("div",{style:B,children:[e.jsx("span",{style:Ie,children:r}),e.jsx(a,{variant:n,size:r,label:"Warning button"}),e.jsx(a,{variant:n,size:r,label:"Warning button",loading:!0}),e.jsx(a,{variant:n,size:r,label:"Label",disabled:!0})]},r))})]},n))]}),e.jsxs("div",{style:c,children:[e.jsx("h2",{style:g,children:"Design Tokens"}),e.jsxs("p",{style:p,children:["All visual properties are driven by design tokens. These tokens live in"," ",e.jsx("code",{children:"src/styles/tokens.css"})," under the"," ",e.jsx("code",{children:"/* COMPONENT: WarningButton */"})," section."]}),e.jsx("p",{style:o,children:"Solid variant"}),e.jsxs("table",{style:h,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:l,children:"Token"}),e.jsx("th",{style:l,children:"Value"}),e.jsx("th",{style:l,children:"Usage"})]})}),e.jsx("tbody",{children:[["--btn-warning-solid-bg","var(--global-color-status-orange) → #F4A403","Background"],["--btn-warning-solid-color","var(--global-color-base-black) → #1C1C1C","Text & icon colour"],["--btn-warning-solid-border-color","var(--global-color-status-dark-orange) → #D07C06","Border colour (all states)"],["--btn-warning-solid-border-width","var(--global-spacing-stroke-1px) → 1px","Default border width"],["--btn-warning-solid-border-width-hover","var(--global-spacing-stroke-1px) → 1px","Border width on hover (unchanged)"],["--btn-warning-solid-shadow-hover","2px 2px 0px 0px #D07C06","Drop shadow on hover/active"],["--btn-warning-solid-border-width-focus","var(--global-spacing-stroke-2px) → 2px","Border width on focus"],["--btn-warning-solid-border-width-loading","var(--global-spacing-stroke-1px) → 1px","Border width during loading"]].map(([n,r,s])=>e.jsxs("tr",{children:[e.jsx("td",{style:b,children:n}),e.jsx("td",{style:t,children:e.jsx("code",{children:r})}),e.jsx("td",{style:t,children:s})]},n))})]}),e.jsx("p",{style:{...o,marginTop:"24px"},children:"Ghost / Alt variant"}),e.jsxs("table",{style:h,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:l,children:"Token"}),e.jsx("th",{style:l,children:"Value"}),e.jsx("th",{style:l,children:"Usage"})]})}),e.jsx("tbody",{children:[["--btn-warning-ghost-bg","var(--global-color-base-white) → #FFFFFF","Default background"],["--btn-warning-ghost-bg-hover","var(--global-color-status-orange-light) → #FEF4DA","Background on hover/active"],["--btn-warning-ghost-color","var(--global-color-status-dark-orange) → #D07C06","Text & icon colour"],["--btn-warning-ghost-border-color","var(--global-color-status-orange) → #F4A403","Border colour (all states)"],["--btn-warning-ghost-border-width","var(--global-spacing-stroke-1px) → 1px","Default border width"],["--btn-warning-ghost-shadow-hover","2px 2px 0px 0px #D07C06","Drop shadow on hover/active"],["--btn-warning-ghost-border-width-focus","var(--global-spacing-stroke-2px) → 2px","Border width on focus"]].map(([n,r,s])=>e.jsxs("tr",{children:[e.jsx("td",{style:b,children:n}),e.jsx("td",{style:t,children:e.jsx("code",{children:r})}),e.jsx("td",{style:t,children:s})]},n))})]}),e.jsx("p",{style:{...o,marginTop:"24px"},children:"Disabled (shared)"}),e.jsxs("table",{style:h,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:l,children:"Token"}),e.jsx("th",{style:l,children:"Value"}),e.jsx("th",{style:l,children:"Usage"})]})}),e.jsx("tbody",{children:[["--btn-warning-bg-disabled","var(--global-color-neutral-gray-100) → #F3F4F6","Background (disabled)"],["--btn-warning-color-disabled","var(--global-color-neutral-gray-400) → #9CA3AF","Text & icon colour (disabled)"],["--btn-warning-border-color-disabled","var(--global-color-neutral-gray-400) → #9CA3AF","Border colour (disabled)"],["--btn-warning-border-width-disabled","var(--global-spacing-stroke-0-5px) → 0.5px","Border width (disabled)"]].map(([n,r,s])=>e.jsxs("tr",{children:[e.jsx("td",{style:b,children:n}),e.jsx("td",{style:t,children:e.jsx("code",{children:r})}),e.jsx("td",{style:t,children:s})]},n))})]})]}),e.jsxs("div",{style:c,children:[e.jsx("h2",{style:g,children:"Props"}),e.jsxs("table",{style:h,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:l,children:"Prop"}),e.jsx("th",{style:l,children:"Type"}),e.jsx("th",{style:l,children:"Default"}),e.jsx("th",{style:l,children:"Description"})]})}),e.jsx("tbody",{children:[["label","string",'"Warning button"',"Button label text"],["variant","'solid' | 'ghost'","'solid'","Visual style variant"],["size","'small' | 'default' | 'large'","'default'","Controls height, padding, font, and icon sizes"],["loading","boolean","false","Replaces leading icon with a spinner; disables interaction"],["disabled","boolean","false","Disables all interactions and applies grey styling"],["type","'button' | 'submit' | 'reset'","'button'","HTML button type attribute"],["onClick","(e) => void","—","Click handler (no-op when loading or disabled)"],["className","string","''","Extra CSS class applied to the root element"],["ariaLabel","string","—","Accessible label (use when no visible text label is present)"]].map(([n,r,s,d])=>e.jsxs("tr",{children:[e.jsx("td",{style:b,children:n}),e.jsx("td",{style:{...t,fontFamily:"monospace",fontSize:"12px"},children:r}),e.jsx("td",{style:{...t,fontFamily:"monospace",fontSize:"12px"},children:s}),e.jsx("td",{style:t,children:d})]},n))})]})]}),e.jsxs("div",{style:c,children:[e.jsx("h2",{style:g,children:"Usage"}),e.jsx("p",{style:o,children:"Standalone"}),e.jsx("pre",{style:S,children:`import { WarningButton } from '@/components/Button/WarningButton/WarningButton';

// Solid (primary CTA)
<WarningButton variant="solid" label="Warning button" />

// Ghost (secondary CTA)
<WarningButton variant="ghost" label="Warning button" />`}),e.jsx("p",{style:o,children:"In a warning CardContent ButtonGroup"}),e.jsxs("p",{style:p,children:["The solid WarningButton is used as the primary CTA and the ghost variant as the secondary CTA within warning-status CardContent cards. The CardContent component applies the correct colour tokens automatically via its ",e.jsx("code",{children:'status="warning"'})," CSS class."]}),e.jsx("pre",{style:S,children:`<CardContent
  variant="notification"
  status="warning"
  heading="This is a warning heading"
  body="Something requires your attention."
/>`}),e.jsx("p",{style:o,children:"Do's and Don'ts"}),e.jsxs("ul",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"14px",fontWeight:300,color:"var(--global-color-neutral-gray-700)",lineHeight:"24px",paddingLeft:"20px",margin:0},children:[e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"solid"})," as the primary CTA in warning-status modals and cards."]}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"ghost"})," as the secondary CTA alongside the solid variant."]}),e.jsx("li",{children:"Do not pair two solid WarningButtons — use solid + ghost to establish hierarchy."}),e.jsxs("li",{children:["Do not use WarningButton for destructive (error) actions — use ",e.jsx("code",{children:"ErrorButton"})," instead."]}),e.jsx("li",{children:"Do not override token values with hard-coded colours."})]})]})]});z.__docgenInfo={description:"",methods:[],displayName:"WarningButtonDocs"};const Ee={title:"Atoms/Buttons/StatusButton/WarningButton",component:a,parameters:{layout:"centered",docs:{page:()=>e.jsx(z,{})}},argTypes:{variant:{control:"select",options:["solid","ghost"],description:"Visual style — solid (amber filled) or ghost (outline with hover fill)"},size:{control:"select",options:["small","default","large"]},label:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},u={render:()=>e.jsx(z,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},x={args:{label:"Warning button",variant:"solid",size:"default",loading:!1,disabled:!1}},m={args:{label:"Warning button",variant:"solid",size:"default"}},y={args:{label:"Warning button",variant:"ghost",size:"default"}},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",padding:"16px"},children:[e.jsx(a,{variant:"solid",label:"Warning button"}),e.jsx(a,{variant:"ghost",label:"Warning button"})]}),parameters:{controls:{disable:!0}}},f={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["solid","ghost"].map(n=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 10px"},children:n}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{variant:n,size:"small",label:"Warning button"}),e.jsx(a,{variant:n,size:"default",label:"Warning button"}),e.jsx(a,{variant:n,size:"large",label:"Warning button"})]})]},n))}),parameters:{layout:"padded",controls:{disable:!0}}},j={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"solid",size:"small",label:"Warning button",loading:!0}),e.jsx(a,{variant:"solid",size:"default",label:"Warning button",loading:!0}),e.jsx(a,{variant:"solid",size:"large",label:"Warning button",loading:!0}),e.jsx(a,{variant:"ghost",size:"small",label:"Warning button",loading:!0}),e.jsx(a,{variant:"ghost",size:"default",label:"Warning button",loading:!0}),e.jsx(a,{variant:"ghost",size:"large",label:"Warning button",loading:!0})]}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"solid",size:"small",label:"Label",disabled:!0}),e.jsx(a,{variant:"solid",size:"default",label:"Label",disabled:!0}),e.jsx(a,{variant:"solid",size:"large",label:"Label",disabled:!0}),e.jsx(a,{variant:"ghost",size:"small",label:"Label",disabled:!0}),e.jsx(a,{variant:"ghost",size:"default",label:"Label",disabled:!0}),e.jsx(a,{variant:"ghost",size:"large",label:"Label",disabled:!0})]}),parameters:{controls:{disable:!0}}},W={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"32px"},children:["solid","ghost"].map(n=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:300,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 16px",borderBottom:"1px solid var(--global-color-neutral-gray-200)",paddingBottom:"8px"},children:n}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["small","default","large"].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",minWidth:"52px",textTransform:"capitalize"},children:r}),e.jsx(a,{variant:n,size:r,label:"Warning button"}),e.jsx(a,{variant:n,size:r,label:"Warning button",loading:!0}),e.jsx(a,{variant:n,size:r,label:"Label",disabled:!0})]},r))})]},n))}),parameters:{layout:"padded",controls:{disable:!0}}};var _,T,A,F,L;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(A=(T=u.parameters)==null?void 0:T.docs)==null?void 0:A.source},description:{story:"Full documentation — design specs, token table, and usage examples.",...(L=(F=u.parameters)==null?void 0:F.docs)==null?void 0:L.description}}};var D,I,V,H,E;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Warning button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false
  }
}`,...(V=(I=x.parameters)==null?void 0:I.docs)==null?void 0:V.source},description:{story:"Interactive playground — adjust all props via the Controls panel.",...(E=(H=x.parameters)==null?void 0:H.docs)==null?void 0:E.description}}};var M,U,N,R,q;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Warning button',
    variant: 'solid',
    size: 'default'
  }
}`,...(N=(U=m.parameters)==null?void 0:U.docs)==null?void 0:N.source},description:{story:`Solid variant — amber filled (#F4A403) background, black text and icons.
Use as the primary CTA in warning-status CardContent cards.`,...(q=(R=m.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};var Z,G,O,P,$;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Warning button',
    variant: 'ghost',
    size: 'default'
  }
}`,...(O=(G=y.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:`Ghost / alt variant — white background, orange border, dark-orange text.
Hover shifts the background to orange-light (#FEF4DA).
Use as the secondary CTA alongside the solid warning button.`,...($=(P=y.parameters)==null?void 0:P.docs)==null?void 0:$.description}}};var X,J,K,Q,Y;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Both variants side by side — as they appear in a warning CardContent ButtonGroup.",...(Y=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var ee,ae,ne,te,re;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:"All three sizes — small (34px), default (44px), large (56px).",...(re=(te=f.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};var le,se,ie,oe,de;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ie.source},description:{story:"Loading state — spinner replaces the leading icon, trailing icon is hidden.",...(de=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:de.description}}};var ce,ge,pe,be,he;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:pe.source},description:{story:"Disabled state — grey background, grey text, not interactive.",...(he=(be=w.parameters)==null?void 0:be.docs)==null?void 0:he.description}}};var ue,xe,me,ye,ve;W.parameters={...W.parameters,docs:{...(ue=W.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:me.source},description:{story:"Full state matrix — all combinations of variant × size × state.",...(ve=(ye=W.parameters)==null?void 0:ye.docs)==null?void 0:ve.description}}};const Me=["Documentation","Playground","Solid","Ghost","BothVariants","Sizes","Loading","Disabled","AllStates"];export{W as AllStates,v as BothVariants,w as Disabled,u as Documentation,y as Ghost,j as Loading,x as Playground,f as Sizes,m as Solid,Me as __namedExportsOrder,Ee as default};
