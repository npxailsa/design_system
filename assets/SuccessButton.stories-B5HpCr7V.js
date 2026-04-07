import{j as e}from"./iframe-cj033Q_j.js";import"./preload-helper-Dp1pzeXC.js";const i={"btn-success":"_btn-success_1ssl6_19","btn-success--small":"_btn-success--small_1ssl6_67","btn-success--large":"_btn-success--large_1ssl6_75","btn-success--solid":"_btn-success--solid_1ssl6_83","btn-success--disabled":"_btn-success--disabled_1ssl6_90","btn-success--loading":"_btn-success--loading_1ssl6_115","btn-success--ghost":"_btn-success--ghost_1ssl6_122","btn-success__icon-leading":"_btn-success__icon-leading_1ssl6_171","btn-success__icon-trailing":"_btn-success__icon-trailing_1ssl6_179","btn-success__label":"_btn-success__label_1ssl6_187","btn-success__spinner":"_btn-success__spinner_1ssl6_194","btn-success-spin":"_btn-success-spin_1ssl6_1"},ze=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M6.99967 2.33331C7.61851 2.33331 8.21201 2.57915 8.64959 3.01673C9.08718 3.45432 9.33301 4.04781 9.33301 4.66665C9.33301 5.28548 9.08718 5.87898 8.64959 6.31656C8.21201 6.75415 7.61851 6.99998 6.99967 6.99998C6.38084 6.99998 5.78734 6.75415 5.34976 6.31656C4.91217 5.87898 4.66634 5.28548 4.66634 4.66665C4.66634 4.04781 4.91217 3.45432 5.34976 3.01673C5.78734 2.57915 6.38084 2.33331 6.99967 2.33331ZM6.99967 8.16665C9.57801 8.16665 11.6663 9.21081 11.6663 10.5V11.6666H2.33301V10.5C2.33301 9.21081 4.42134 8.16665 6.99967 8.16665Z",fill:"currentColor"})}),Ce=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M8.00033 2.66663C8.70757 2.66663 9.38585 2.94758 9.88594 3.44767C10.386 3.94777 10.667 4.62605 10.667 5.33329C10.667 6.04054 10.386 6.71881 9.88594 7.21891C9.38585 7.71901 8.70757 7.99996 8.00033 7.99996C7.29308 7.99996 6.6148 7.71901 6.11471 7.21891C5.61461 6.71881 5.33366 6.04054 5.33366 5.33329C5.33366 4.62605 5.61461 3.94777 6.11471 3.44767C6.6148 2.94758 7.29308 2.66663 8.00033 2.66663ZM8.00033 9.33329C10.947 9.33329 13.3337 10.5266 13.3337 12V13.3333H2.66699V12C2.66699 10.5266 5.05366 9.33329 8.00033 9.33329Z",fill:"currentColor"})}),_e=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M9 3C9.79565 3 10.5587 3.31607 11.1213 3.87868C11.6839 4.44129 12 5.20435 12 6C12 6.79565 11.6839 7.55871 11.1213 8.12132C10.5587 8.68393 9.79565 9 9 9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3ZM9 10.5C12.315 10.5 15 11.8425 15 13.5V15H3V13.5C3 11.8425 5.685 10.5 9 10.5Z",fill:"currentColor"})}),Le=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.33301 6.41667V7.58334H9.33301L6.12467 10.7917L6.95301 11.62L11.573 7L6.95301 2.38L6.12467 3.20834L9.33301 6.41667H2.33301Z",fill:"currentColor"})}),Te=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M2.66699 7.3333V8.66664H10.667L7.00033 12.3333L7.94699 13.28L13.227 7.99997L7.94699 2.71997L7.00033 3.66664L10.667 7.3333H2.66699Z",fill:"currentColor"})}),Ae=()=>e.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M3 8.25006V9.75006H12L7.875 13.8751L8.94 14.9401L14.88 9.00006L8.94 3.06006L7.875 4.12506L12 8.25006H3Z",fill:"currentColor"})}),De={small:ze,default:Ce,large:_e},Ie={small:Le,default:Te,large:Ae},t=({label:s="Success button",variant:a="solid",size:n="default",loading:o=!1,disabled:g=!1,type:fe="button",onClick:je,className:Se="",ariaLabel:we})=>{const Be=De[n],Fe=Ie[n],ke=[i["btn-success"],i[`btn-success--${a}`],n!=="default"?i[`btn-success--${n}`]:"",o?i["btn-success--loading"]:"",g?i["btn-success--disabled"]:"",Se].filter(Boolean).join(" ");return e.jsxs("button",{type:fe,className:ke,onClick:!g&&!o?je:void 0,disabled:g||o,"aria-label":we,"aria-busy":o||void 0,children:[o?e.jsx("span",{className:i["btn-success__spinner"],"aria-hidden":"true"}):e.jsx("span",{className:i["btn-success__icon-leading"],children:e.jsx(Be,{})}),e.jsx("span",{className:i["btn-success__label"],children:s}),!o&&e.jsx("span",{className:i["btn-success__icon-trailing"],children:e.jsx(Fe,{})})]})};t.__docgenInfo={description:`SuccessButton — status-specific button for success / confirmation actions.

Two variants:
- \`solid\` — light-green (#96F78D) filled background with black text (default);
            hover transitions the background to dark-green (#227F1A) and
            text/icons flip to white — a unique colour inversion per Figma.
- \`ghost\` — white background with dark-green border and text/icon;
            hover shifts background to green-light (#F2FFF1);
            focus uses a 3px border (per Figma spec).

All three sizes: \`small\`, \`default\`, \`large\`.
Supports: loading, disabled, and all interactive states (hover, focus, active).

Storybook: Atoms / Buttons / StatusButton / SuccessButton`,methods:[],displayName:"SuccessButton",props:{label:{required:!1,tsType:{name:"string"},description:"Display label",defaultValue:{value:"'Success button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'ghost'"}]},description:"Visual variant.\n- `solid` — light-green (#96F78D) background, black text/icon;\n            hover flips to dark-green fill with white text/icon\n- `ghost` — white background, dark-green border & text/icon;\n            hover shifts bg to green-light (#F2FFF1)",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant — controls height, padding, font, and icon sizes",defaultValue:{value:"'default'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const d={marginBottom:"48px"},u={fontFamily:"var(--brand-font-primary)",fontSize:"22px",fontWeight:300,color:"var(--global-color-base-black)",margin:"0 0 8px",paddingBottom:"8px",borderBottom:"1px solid var(--global-color-neutral-gray-200)"},c={fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:300,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 12px"},p={fontFamily:"var(--brand-font-primary)",fontSize:"14px",fontWeight:300,lineHeight:"22px",color:"var(--global-color-neutral-gray-700)",margin:"0 0 16px"},F={display:"flex",flexWrap:"wrap",alignItems:"center",gap:"12px",marginBottom:"12px"},We={fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:300,color:"var(--global-color-neutral-gray-400)",textTransform:"uppercase",letterSpacing:"0.08em",minWidth:"56px"},z={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-4px)",padding:"16px 20px",fontFamily:"monospace",fontSize:"13px",lineHeight:"1.6",color:"var(--global-color-neutral-gray-800)",overflowX:"auto",margin:"0 0 16px",whiteSpace:"pre"},b={width:"100%",borderCollapse:"collapse",fontFamily:"var(--brand-font-primary)",fontSize:"13px",marginBottom:"16px"},l={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",padding:"8px 12px",textAlign:"left",fontWeight:400,color:"var(--global-color-neutral-gray-700)"},r={border:"1px solid var(--global-color-neutral-gray-200)",padding:"8px 12px",color:"var(--global-color-neutral-gray-700)",verticalAlign:"top"},h={...r,fontFamily:"monospace",fontSize:"12px",color:"var(--global-color-status-dark-green)"},C=(s,a)=>({display:"inline-block",padding:"2px 8px",borderRadius:"3px",background:s,color:a,fontFamily:"monospace",fontSize:"11px"}),k=()=>e.jsxs("div",{style:{padding:"48px",maxWidth:"960px",margin:"0 auto",fontFamily:"var(--brand-font-primary)"},children:[e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"8px"},children:[e.jsx("h1",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"32px",fontWeight:300,color:"var(--global-color-base-black)",margin:0},children:"SuccessButton"}),e.jsx("span",{style:C("var(--global-color-status-green-light)","var(--global-color-status-dark-green)"),children:"Atoms / Buttons / StatusButton"}),e.jsx("span",{style:C("var(--global-color-neutral-gray-100)","var(--global-color-neutral-gray-600)"),children:"Stable"})]}),e.jsxs("p",{style:{...p,margin:0,maxWidth:"640px"},children:["A status-specific button for success and confirmation actions. Two visual variants:",e.jsx("strong",{children:" solid"})," (light-green fill, black text — primary CTA; hover inverts to dark-green fill with white text) and ",e.jsx("strong",{children:" ghost"})," (white background, dark-green border and text — secondary CTA; hover shifts bg to green-light)."]})]}),e.jsxs("div",{style:d,children:[e.jsx("h2",{style:u,children:"Anatomy"}),e.jsx("p",{style:p,children:"Each button renders three inline elements: a leading user icon, a text label, and a trailing arrow-right icon. In the loading state the leading icon is replaced by a CSS spinner and the trailing icon is hidden. In the disabled state all elements are tinted grey."}),e.jsxs("div",{style:{background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-4px)",padding:"32px",display:"flex",gap:"16px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{variant:"solid",size:"default",label:"Success button"}),e.jsx(t,{variant:"ghost",size:"default",label:"Success button"})]})]}),e.jsxs("div",{style:d,children:[e.jsx("h2",{style:u,children:"Variants"}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("p",{style:c,children:"Solid"}),e.jsx("p",{style:p,children:"Light-green (#96F78D) filled background with a dark-green (#227F1A) border and black text by default. On hover the background inverts to dark-green and text/icons switch to white — a unique colour flip unique to the success variant. Focus restores the light-green background with a 2px border."}),e.jsxs("div",{style:F,children:[e.jsx(t,{variant:"solid",size:"small",label:"Success button"}),e.jsx(t,{variant:"solid",size:"default",label:"Success button"}),e.jsx(t,{variant:"solid",size:"large",label:"Success button"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:c,children:"Ghost / Alt"}),e.jsxs("p",{style:p,children:["White background with a 1px dark-green (#227F1A) border and dark-green text and icons. On hover the background shifts to green-light (#F2FFF1) and a 2×2px dark-green drop shadow is applied. Focus uses a distinctive ",e.jsx("strong",{children:"3px"})," border (per Figma spec, wider than other status buttons)."]}),e.jsxs("div",{style:F,children:[e.jsx(t,{variant:"ghost",size:"small",label:"Success button"}),e.jsx(t,{variant:"ghost",size:"default",label:"Success button"}),e.jsx(t,{variant:"ghost",size:"large",label:"Success button"})]})]})]}),e.jsxs("div",{style:d,children:[e.jsx("h2",{style:u,children:"Sizes"}),e.jsxs("table",{style:b,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:l,children:"Size"}),e.jsx("th",{style:l,children:"Height"}),e.jsx("th",{style:l,children:"Padding"}),e.jsx("th",{style:l,children:"Font size"}),e.jsx("th",{style:l,children:"Icon size"}),e.jsx("th",{style:l,children:"Preview"})]})}),e.jsx("tbody",{children:[["small","34px","4px 12px","14px","14px"],["default","44px","4px 16px","16px","16px"],["large","56px","4px 16px","18px","18px"]].map(([s,a,n,o,g])=>e.jsxs("tr",{children:[e.jsx("td",{style:h,children:s}),e.jsx("td",{style:r,children:a}),e.jsx("td",{style:r,children:n}),e.jsx("td",{style:r,children:o}),e.jsx("td",{style:r,children:g}),e.jsx("td",{style:r,children:e.jsx(t,{variant:"solid",size:s,label:"Success button"})})]},s))})]})]}),e.jsxs("div",{style:d,children:[e.jsx("h2",{style:u,children:"States"}),["solid","ghost"].map(s=>e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("p",{style:c,children:s}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["small","default","large"].map(a=>e.jsxs("div",{style:F,children:[e.jsx("span",{style:We,children:a}),e.jsx(t,{variant:s,size:a,label:"Success button"}),e.jsx(t,{variant:s,size:a,label:"Success button",loading:!0}),e.jsx(t,{variant:s,size:a,label:"Label",disabled:!0})]},a))})]},s))]}),e.jsxs("div",{style:d,children:[e.jsx("h2",{style:u,children:"Design Tokens"}),e.jsxs("p",{style:p,children:["All visual properties are driven by design tokens in"," ",e.jsx("code",{children:"src/styles/tokens.css"})," under ",e.jsx("code",{children:"/* COMPONENT: SuccessButton */"}),"."]}),e.jsx("p",{style:c,children:"Solid variant"}),e.jsxs("table",{style:b,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:l,children:"Token"}),e.jsx("th",{style:l,children:"Value"}),e.jsx("th",{style:l,children:"Usage"})]})}),e.jsx("tbody",{children:[["--btn-success-solid-bg","var(--global-color-status-green) → #96F78D","Default background"],["--btn-success-solid-color","var(--global-color-base-black) → #1C1C1C","Default text & icon colour"],["--btn-success-solid-border-color","var(--global-color-status-dark-green) → #227F1A","Border colour (all states)"],["--btn-success-solid-border-width","var(--global-spacing-stroke-1px) → 1px","Default border width"],["--btn-success-solid-bg-hover","var(--global-color-status-dark-green) → #227F1A","Background on hover/active (colour inversion)"],["--btn-success-solid-color-hover","var(--global-color-base-white) → #FFFFFF","Text & icon colour on hover/active"],["--btn-success-solid-shadow-hover","2px 2px 0px 0px #227F1A","Drop shadow on hover/active"],["--btn-success-solid-border-width-focus","var(--global-spacing-stroke-2px) → 2px","Border width on focus"]].map(([s,a,n])=>e.jsxs("tr",{children:[e.jsx("td",{style:h,children:s}),e.jsx("td",{style:r,children:e.jsx("code",{children:a})}),e.jsx("td",{style:r,children:n})]},s))})]}),e.jsx("p",{style:{...c,marginTop:"24px"},children:"Ghost / Alt variant"}),e.jsxs("table",{style:b,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:l,children:"Token"}),e.jsx("th",{style:l,children:"Value"}),e.jsx("th",{style:l,children:"Usage"})]})}),e.jsx("tbody",{children:[["--btn-success-ghost-bg","var(--global-color-base-white) → #FFFFFF","Default background"],["--btn-success-ghost-bg-hover","var(--global-color-status-green-light) → #F2FFF1","Background on hover/active"],["--btn-success-ghost-color","var(--global-color-status-dark-green) → #227F1A","Text & icon colour"],["--btn-success-ghost-border-color","var(--global-color-status-dark-green) → #227F1A","Border colour (all states)"],["--btn-success-ghost-border-width","var(--global-spacing-stroke-1px) → 1px","Default border width"],["--btn-success-ghost-shadow-hover","2px 2px 0px 0px #227F1A","Drop shadow on hover/active"],["--btn-success-ghost-border-width-focus","3px","Focus border width (3px per Figma — unique to success)"]].map(([s,a,n])=>e.jsxs("tr",{children:[e.jsx("td",{style:h,children:s}),e.jsx("td",{style:r,children:e.jsx("code",{children:a})}),e.jsx("td",{style:r,children:n})]},s))})]}),e.jsx("p",{style:{...c,marginTop:"24px"},children:"Disabled (shared)"}),e.jsxs("table",{style:b,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:l,children:"Token"}),e.jsx("th",{style:l,children:"Value"}),e.jsx("th",{style:l,children:"Usage"})]})}),e.jsx("tbody",{children:[["--btn-success-bg-disabled","var(--global-color-neutral-gray-100) → #F3F4F6","Background (disabled)"],["--btn-success-color-disabled","var(--global-color-neutral-gray-400) → #9CA3AF","Text & icon colour (disabled)"],["--btn-success-border-color-disabled","var(--global-color-neutral-gray-400) → #9CA3AF","Border colour (disabled)"],["--btn-success-border-width-disabled","var(--global-spacing-stroke-0-5px) → 0.5px","Border width (disabled)"]].map(([s,a,n])=>e.jsxs("tr",{children:[e.jsx("td",{style:h,children:s}),e.jsx("td",{style:r,children:e.jsx("code",{children:a})}),e.jsx("td",{style:r,children:n})]},s))})]})]}),e.jsxs("div",{style:d,children:[e.jsx("h2",{style:u,children:"Props"}),e.jsxs("table",{style:b,children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:l,children:"Prop"}),e.jsx("th",{style:l,children:"Type"}),e.jsx("th",{style:l,children:"Default"}),e.jsx("th",{style:l,children:"Description"})]})}),e.jsx("tbody",{children:[["label","string",'"Success button"',"Button label text"],["variant","'solid' | 'ghost'","'solid'","Visual style variant"],["size","'small' | 'default' | 'large'","'default'","Controls height, padding, font, and icon sizes"],["loading","boolean","false","Replaces leading icon with spinner; disables interaction"],["disabled","boolean","false","Disables all interactions and applies grey styling"],["type","'button' | 'submit' | 'reset'","'button'","HTML button type attribute"],["onClick","(e) => void","—","Click handler (no-op when loading or disabled)"],["className","string","''","Extra CSS class on the root element"],["ariaLabel","string","—","Accessible label"]].map(([s,a,n,o])=>e.jsxs("tr",{children:[e.jsx("td",{style:h,children:s}),e.jsx("td",{style:{...r,fontFamily:"monospace",fontSize:"12px"},children:a}),e.jsx("td",{style:{...r,fontFamily:"monospace",fontSize:"12px"},children:n}),e.jsx("td",{style:r,children:o})]},s))})]})]}),e.jsxs("div",{style:d,children:[e.jsx("h2",{style:u,children:"Usage"}),e.jsx("p",{style:c,children:"Standalone"}),e.jsx("pre",{style:z,children:`import { SuccessButton } from '@/components/Button/SuccessButton/SuccessButton';

// Solid (primary CTA)
<SuccessButton variant="solid" label="Success button" />

// Ghost (secondary CTA)
<SuccessButton variant="ghost" label="Success button" />`}),e.jsx("p",{style:c,children:"In a success CardContent ButtonGroup"}),e.jsx("pre",{style:z,children:`<CardContent
  variant="notification"
  status="success"
  heading="This is a success heading"
  body="Your action completed successfully."
/>`}),e.jsx("p",{style:c,children:"Important interaction note"}),e.jsxs("p",{style:p,children:["The ",e.jsx("strong",{children:"solid"})," variant is unique among StatusButtons: on hover, the entire background colour inverts from light-green to dark-green and the text/icons switch from black to white. This makes the success solid button the most visually striking of the status variants on hover. Do not suppress this transition with additional CSS overrides."]}),e.jsxs("ul",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"14px",fontWeight:300,color:"var(--global-color-neutral-gray-700)",lineHeight:"24px",paddingLeft:"20px",margin:0},children:[e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"solid"})," as the primary CTA in success-status modals and cards."]}),e.jsxs("li",{children:["Use ",e.jsx("strong",{children:"ghost"})," as the secondary CTA alongside the solid variant."]}),e.jsx("li",{children:"Do not pair two solid SuccessButtons — use solid + ghost to establish hierarchy."}),e.jsx("li",{children:"Do not use SuccessButton for warning or error actions — use the correct status button."}),e.jsx("li",{children:"Do not override token values with hard-coded colours."})]})]})]});k.__docgenInfo={description:"",methods:[],displayName:"SuccessButtonDocs"};const Me={title:"Atoms/Buttons/StatusButton/SuccessButton",component:t,parameters:{layout:"centered",docs:{page:()=>e.jsx(k,{})}},argTypes:{variant:{control:"select",options:["solid","ghost"],description:"Visual style — solid (light-green fill; hover inverts to dark-green) or ghost (outline with green-light hover bg)"},size:{control:"select",options:["small","default","large"]},label:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},x={render:()=>e.jsx(k,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},m={args:{label:"Success button",variant:"solid",size:"default",loading:!1,disabled:!1}},y={args:{label:"Success button",variant:"solid",size:"default"}},v={args:{label:"Success button",variant:"ghost",size:"default"}},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",padding:"16px"},children:[e.jsx(t,{variant:"solid",label:"Success button"}),e.jsx(t,{variant:"ghost",label:"Success button"})]}),parameters:{controls:{disable:!0}}},j={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["solid","ghost"].map(s=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 10px"},children:s}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx(t,{variant:s,size:"small",label:"Success button"}),e.jsx(t,{variant:s,size:"default",label:"Success button"}),e.jsx(t,{variant:s,size:"large",label:"Success button"})]})]},s))}),parameters:{layout:"padded",controls:{disable:!0}}},S={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Success button",loading:!0}),e.jsx(t,{variant:"solid",size:"default",label:"Success button",loading:!0}),e.jsx(t,{variant:"solid",size:"large",label:"Success button",loading:!0}),e.jsx(t,{variant:"ghost",size:"small",label:"Success button",loading:!0}),e.jsx(t,{variant:"ghost",size:"default",label:"Success button",loading:!0}),e.jsx(t,{variant:"ghost",size:"large",label:"Success button",loading:!0})]}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px",flexWrap:"wrap"},children:[e.jsx(t,{variant:"solid",size:"small",label:"Label",disabled:!0}),e.jsx(t,{variant:"solid",size:"default",label:"Label",disabled:!0}),e.jsx(t,{variant:"solid",size:"large",label:"Label",disabled:!0}),e.jsx(t,{variant:"ghost",size:"small",label:"Label",disabled:!0}),e.jsx(t,{variant:"ghost",size:"default",label:"Label",disabled:!0}),e.jsx(t,{variant:"ghost",size:"large",label:"Label",disabled:!0})]}),parameters:{controls:{disable:!0}}},B={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"32px"},children:["solid","ghost"].map(s=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:300,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 16px",borderBottom:"1px solid var(--global-color-neutral-gray-200)",paddingBottom:"8px"},children:s}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["small","default","large"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",minWidth:"52px",textTransform:"capitalize"},children:a}),e.jsx(t,{variant:s,size:a,label:"Success button"}),e.jsx(t,{variant:s,size:a,label:"Success button",loading:!0}),e.jsx(t,{variant:s,size:a,label:"Label",disabled:!0})]},a))})]},s))}),parameters:{layout:"padded",controls:{disable:!0}}};var _,L,T,A,D;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(L=x.parameters)==null?void 0:L.docs)==null?void 0:T.source},description:{story:"Full documentation — design specs, token table, interaction notes, and usage examples.",...(D=(A=x.parameters)==null?void 0:A.docs)==null?void 0:D.description}}};var I,W,V,H,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Success button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false
  }
}`,...(V=(W=m.parameters)==null?void 0:W.docs)==null?void 0:V.source},description:{story:"Interactive playground — adjust all props via the Controls panel.",...(M=(H=m.parameters)==null?void 0:H.docs)==null?void 0:M.description}}};var q,N,E,U,R;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Success button',
    variant: 'solid',
    size: 'default'
  }
}`,...(E=(N=y.parameters)==null?void 0:N.docs)==null?void 0:E.source},description:{story:`Solid variant — light-green (#96F78D) background, black text.
Hover inverts the background to dark-green (#227F1A) and switches text to white.
Use as the primary CTA in success-status CardContent cards.`,...(R=(U=y.parameters)==null?void 0:U.docs)==null?void 0:R.description}}};var Z,G,O,P,$;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Success button',
    variant: 'ghost',
    size: 'default'
  }
}`,...(O=(G=v.parameters)==null?void 0:G.docs)==null?void 0:O.source},description:{story:`Ghost / alt variant — white background, dark-green border and text.
Hover shifts background to green-light (#F2FFF1) + dark-green drop shadow.
Focus uses a distinctive 3px border (per Figma spec).`,...($=(P=v.parameters)==null?void 0:P.docs)==null?void 0:$.description}}};var X,Y,J,K,Q;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(J=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"Both variants side by side — as they appear in a success CardContent ButtonGroup.",...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var ee,se,te,ae,le;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(se=j.parameters)==null?void 0:se.docs)==null?void 0:te.source},description:{story:"All three sizes — small (34px), default (44px), large (56px).",...(le=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:le.description}}};var re,ne,oe,ie,ce;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:oe.source},description:{story:"Loading state — spinner replaces the leading icon, trailing icon hidden.",...(ce=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var de,ue,pe,ge,be;w.parameters={...w.parameters,docs:{...(de=w.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:pe.source},description:{story:"Disabled state — grey background, grey text, not interactive.",...(be=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:be.description}}};var he,xe,me,ye,ve;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(me=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:me.source},description:{story:`Full state matrix — all combinations of variant × size × state.
Hover over the solid buttons to see the unique dark-green colour inversion.`,...(ve=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:ve.description}}};const qe=["Documentation","Playground","Solid","Ghost","BothVariants","Sizes","Loading","Disabled","AllStates"];export{B as AllStates,f as BothVariants,w as Disabled,x as Documentation,v as Ghost,S as Loading,m as Playground,j as Sizes,y as Solid,qe as __namedExportsOrder,Me as default};
