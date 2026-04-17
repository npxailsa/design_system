import{j as e,r as u,R as $e}from"./iframe-YNeplzSN.js";import{B as Ee}from"./ButtonBase-CBxRrWbv.js";import{S as Ue,C as Ne}from"./Checkbox-TJOvm4-q.js";import{s as M,r as Ce,g as qe,a as Ve,u as He,c as Le,b as F,d as Ge}from"./DefaultPropsProvider-DYdsgcMI.js";import{c as Be}from"./createSvgIcon-BTOcO4F2.js";import{m as Re}from"./memoTheme-CDzK_TtI.js";import{u as Ze}from"./useFormControl-BV7dALLl.js";import{c as G}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{u as Xe}from"./useSlot-DC6QPnup.js";import{D as l}from"./DocsTemplate-YmZ5wZfr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-NSkwSMWB.js";import"./useEventCallback-hc1ZpNJV.js";import"./useForkRef-BOFHTGv8.js";import"./mergeSlotProps-C4D4chuF.js";import"./isHostComponent-DVu5iVWx.js";function Ke(...o){return o.reduce((t,n)=>n==null?t:function(...i){t.apply(this,i),n.apply(this,i)},()=>{})}const Ye=Be(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),Je=Be(e.jsx("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"})),Qe=M("span",{name:"MuiRadioButtonIcon",shouldForwardProp:Ce})({position:"relative",display:"flex"}),eo=M(Ye,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),oo=M(Je,{name:"MuiRadioButtonIcon"})(Re(({theme:o})=>({left:0,position:"absolute",transform:"scale(0)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeIn,duration:o.transitions.duration.shortest}),variants:[{props:{checked:!0},style:{transform:"scale(1)",transition:o.transitions.create("transform",{easing:o.transitions.easing.easeOut,duration:o.transitions.duration.shortest})}}]})));function Ie(o){const{checked:t=!1,classes:n={},fontSize:s}=o,i={...o,checked:t};return e.jsxs(Qe,{className:n.root,ownerState:i,children:[e.jsx(eo,{fontSize:s,className:n.background,ownerState:i}),e.jsx(oo,{fontSize:s,className:n.dot,ownerState:i})]})}const to=u.createContext(void 0);function io(){return u.useContext(to)}function no(o){return qe("MuiRadio",o)}const Z=Ve("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]),ao=o=>{const{classes:t,color:n,size:s}=o,i={root:["root",`color${F(n)}`,s!=="medium"&&`size${F(s)}`]};return{...t,...Ge(i,no,t)}},lo=M(Ue,{shouldForwardProp:o=>Ce(o)||o==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:n}=o;return[t.root,n.size!=="medium"&&t[`size${F(n.size)}`],t[`color${F(n.color)}`]]}})(Re(({theme:o})=>({color:(o.vars||o).palette.text.secondary,[`&.${Z.disabled}`]:{color:(o.vars||o).palette.action.disabled},variants:[{props:{color:"default",disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:o.alpha((o.vars||o).palette.action.active,(o.vars||o).palette.action.hoverOpacity)}}},...Object.entries(o.palette).filter(G()).map(([t])=>({props:{color:t,disabled:!1,disableRipple:!1},style:{"&:hover":{backgroundColor:o.alpha((o.vars||o).palette[t].main,(o.vars||o).palette.action.hoverOpacity)}}})),...Object.entries(o.palette).filter(G()).map(([t])=>({props:{color:t,disabled:!1},style:{[`&.${Z.checked}`]:{color:(o.vars||o).palette[t].main}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]})));function so(o,t){return typeof t=="object"&&t!==null?o===t:String(o)===String(t)}const ro=e.jsx(Ie,{checked:!0}),co=e.jsx(Ie,{}),po=u.forwardRef(function(t,n){const s=He({props:t,name:"MuiRadio"}),{checked:i,checkedIcon:r=ro,color:c="primary",icon:p=co,name:x,onChange:m,size:b="medium",className:f,disabled:v,disableRipple:S=!1,slots:h={},slotProps:j={},inputProps:Pe,...Fe}=s,N=Ze();let g=v;N&&typeof g>"u"&&(g=N.disabled),g??(g=!1);const W={...s,disabled:g,disableRipple:S,color:c,size:b},q=ao(W),y=io();let A=i;const Me=Ke(m,y&&y.onChange);let $=x;y&&(typeof A>"u"&&(A=so(y.value,s.value)),typeof $>"u"&&($=y.name));const E=j.input??Pe,[We,Ae]=Xe("root",{ref:n,elementType:lo,className:Le(q.root,f),shouldForwardComponentProp:!0,externalForwardedProps:{slots:h,slotProps:j,...Fe},getSlotProps:k=>({...k,onChange:(V,...H)=>{var L;(L=k.onChange)==null||L.call(k,V,...H),Me(V,...H)}}),ownerState:W,additionalProps:{type:"radio",icon:u.cloneElement(p,{fontSize:p.props.fontSize??b}),checkedIcon:u.cloneElement(r,{fontSize:r.props.fontSize??b}),disabled:g,name:$,checked:A,slots:h,slotProps:{input:typeof E=="function"?E(W):E}}});return e.jsx(We,{...Ae,classes:q})}),mo="_option_1ewh4_20",uo="_option__icon_1ewh4_153",xo="_option__label_1ewh4_202",d={option:mo,"option--top":"_option--top_1ewh4_78","option--mid":"_option--mid_1ewh4_83","option--bottom":"_option--bottom_1ewh4_89","option--solo":"_option--solo_1ewh4_94","option--disabled":"_option--disabled_1ewh4_103","option--selected":"_option--selected_1ewh4_103","option--small":"_option--small_1ewh4_146","option__icon-svg":"_option__icon-svg_1ewh4_153","option--large":"_option--large_1ewh4_165",option__icon:uo,"option__icon--trailing":"_option__icon--trailing_1ewh4_197",option__label:xo,"MuiCheckbox-root":"_MuiCheckbox-root_1ewh4_216","MuiRadio-root":"_MuiRadio-root_1ewh4_217","Mui-checked":"_Mui-checked_1ewh4_223"},bo={small:{muiSize:"small",px:14},default:{muiSize:"small",px:16},large:{muiSize:"medium",px:18}},X=(o,t,n)=>({padding:0,flexShrink:0,width:`${n}px`,height:`${n}px`,color:t?"var(--global-color-neutral-gray-300)":o?"var(--brand-primary)":"var(--global-color-neutral-gray-300)","&.Mui-checked":{color:t?"var(--global-color-neutral-gray-300)":"var(--brand-primary)"},"& .MuiSvgIcon-root":{fontSize:`${n}px`},"& .MuiTouchRipple-root":{display:"none"}}),a=({label:o,position:t="solo",size:n="default",selected:s=!1,disabled:i=!1,selectionType:r="none",leadingIcon:c,trailingIcon:p,onClick:x,className:m,"aria-label":b})=>{const f=c,v=p,{muiSize:S,px:h}=bo[n],j=[d.option,d[`option--${n}`],d[`option--${t}`],s&&d["option--selected"],i&&d["option--disabled"],r!=="none"&&d["option--has-indicator"],m].filter(Boolean).join(" ");return e.jsxs(Ee,{component:"button",type:"button",role:"option",className:j,onClick:i?void 0:x,disabled:i,"aria-selected":s,"aria-disabled":i,"aria-label":b??o,children:[f&&e.jsx("span",{className:d.option__icon,"aria-hidden":"true",children:e.jsx(f,{className:d["option__icon-svg"]})}),r==="checkbox"&&e.jsx(Ne,{checked:s,disabled:i,size:S,tabIndex:-1,disableRipple:!0,"aria-hidden":"true",sx:X(s,i,h)}),r==="radio"&&e.jsx(po,{checked:s,disabled:i,size:S,tabIndex:-1,disableRipple:!0,"aria-hidden":"true",sx:X(s,i,h)}),e.jsx("span",{className:d.option__label,children:o}),v&&e.jsx("span",{className:`${d.option__icon} ${d["option__icon--trailing"]}`,"aria-hidden":"true",children:e.jsx(v,{className:d["option__icon-svg"]})})]})};a.__docgenInfo={description:"",methods:[],displayName:"SelectOption",props:{label:{required:!0,tsType:{name:"string"},description:"Visible label text for the option"},position:{required:!1,tsType:{name:"union",raw:"'top' | 'mid' | 'bottom' | 'solo'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'mid'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'solo'"}]},description:`Position within a stacked select menu. Controls which corners are rounded
and which border edges are rendered:
- top    → rounded top corners, top + left + right borders
- mid    → no radius, left + right borders only
- bottom → rounded bottom corners, all 4 borders
- solo   → all 4 rounded corners, all 4 borders (standalone)`,defaultValue:{value:"'solo'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Controls font size, icon size, and padding",defaultValue:{value:"'default'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether this option is currently selected/checked",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents interaction; renders in a muted style",defaultValue:{value:"false",computed:!1}},selectionType:{required:!1,tsType:{name:"union",raw:"'checkbox' | 'radio' | 'none'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio'"},{name:"literal",value:"'none'"}]},description:`Type of selection indicator to show alongside the label:
- 'checkbox' → MUI Checkbox (suitable for multi-select menus)
- 'radio'    → MUI Radio (suitable for single-select menus)
- 'none'     → no indicator (plain text option)`,defaultValue:{value:"'none'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Leading icon — pass a MUI SvgIcon component class"},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Trailing icon — pass a MUI SvgIcon component class"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click / selection handler"},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the option (defaults to label)"}}};const ho=["small","default","large"],K=["none","checkbox","radio"],U=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"SelectOption",subtitle:"A single, position-aware option row used inside dropdown and select menus. Supports plain-text options as well as checkbox (multi-select) and radio (single-select) indicator variants. Built on MUI ButtonBase with all visual treatment via design-token CSS Modules."}),e.jsxs(l.BodyText,{children:[e.jsx("strong",{children:"SelectOption"})," is the individual item that populates a select or combobox menu. Stack multiple items and use the"," ",e.jsx("code",{children:"position"})," prop to control which corners are rounded and which borders are collapsed — so the stack reads as one unified panel. The optional ",e.jsx("code",{children:"selectionType"})," prop adds a checkbox or radio indicator that responds to the ",e.jsx("code",{children:"selected"})," prop."]}),e.jsx(l.Anatomy,{parts:[{number:1,label:"Container",description:"The full-width button row. Background, border, and text colour change per state."},{number:2,label:"Leading Icon (optional)",description:"A slot for a MUI SvgIcon that provides additional context for the option."},{number:3,label:"Selection Indicator (optional)",description:'A checkbox or radio control that shows selection state. Hidden when selectionType is "none".'},{number:4,label:"Label",description:"The text content of the option. Grows to fill available space."},{number:5,label:"Trailing Icon (optional)",description:"A slot for a secondary action or status icon, pinned to the right."}]}),e.jsx(l.Section,{title:"MUI Foundation",children:e.jsxs(l.BodyText,{children:["SelectOption is built on ",e.jsx("strong",{children:"MUI ButtonBase"})," — giving it native accessibility semantics (",e.jsx("code",{children:'role="option"'}),","," ",e.jsx("code",{children:"aria-selected"}),", ",e.jsx("code",{children:"aria-disabled"}),"), focus-visible handling, and ripple support out of the box. All visual styling is applied via CSS Modules and design tokens, keeping the MUI foundation intact for future upgrades."]})}),e.jsxs(l.Section,{title:"Sizes",children:[e.jsxs(l.BodyText,{children:["Three sizes are available: ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and ",e.jsx("code",{children:"large"}),". Size affects padding, font size, and indicator dimensions."]}),e.jsx(l.Subsection,{title:"Size Comparison",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",maxWidth:"320px",padding:"var(--global-spacing-sizing-16px) 0"},children:ho.map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-4px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize"},children:o}),e.jsx(a,{label:`Option label — ${o}`,size:o,position:"solo"})]},o))})})]}),e.jsxs(l.Section,{title:"Selection Types",children:[e.jsxs(l.BodyText,{children:["Use ",e.jsx("code",{children:"selectionType"})," to control whether the option renders a selection indicator. Use ",e.jsx("code",{children:'"checkbox"'})," in multi-select menus and ",e.jsx("code",{children:'"radio"'})," in single-select menus. Use ",e.jsx("code",{children:'"none"'})," ","for plain list options."]}),e.jsx(l.Subsection,{title:"Unselected",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",maxWidth:"320px",padding:"var(--global-spacing-sizing-16px) 0"},children:K.map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-4px)"},children:[e.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:['selectionType="',o,'"']}),e.jsx(a,{label:"Option label",selectionType:o,position:"solo"})]},o))})}),e.jsx(l.Subsection,{title:"Selected",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",maxWidth:"320px",padding:"var(--global-spacing-sizing-16px) 0"},children:K.map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-4px)"},children:[e.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:['selectionType="',o,'" selected']}),e.jsx(a,{label:"Option label",selectionType:o,selected:!0,position:"solo"})]},o))})})]}),e.jsxs(l.Section,{title:"Position",children:[e.jsxs(l.BodyText,{children:["The ",e.jsx("code",{children:"position"})," prop controls border-radius and which border edges are rendered, allowing multiple options to be stacked into a single visually unified panel. Use ",e.jsx("code",{children:"solo"})," for standalone options."]}),e.jsx(l.Subsection,{title:"Stacked Menu Example",children:e.jsxs("div",{style:{maxWidth:"280px",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(a,{label:"Top option",position:"top",selectionType:"checkbox"}),e.jsx(a,{label:"Middle option",position:"mid",selectionType:"checkbox",selected:!0}),e.jsx(a,{label:"Middle option 2",position:"mid",selectionType:"checkbox"}),e.jsx(a,{label:"Bottom option",position:"bottom",selectionType:"checkbox"})]})})]}),e.jsxs(l.Section,{title:"Interactive States",children:[e.jsx(l.BodyText,{children:"SelectOption supports default, hover, focus, active, selected, and disabled states. The selected state changes the background to the brand primary colour. Disabled options are visually muted and non-interactive."}),e.jsx(l.Subsection,{title:"State Gallery",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",maxWidth:"320px",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"4px"},children:"Default"}),e.jsx(a,{label:"Option label",position:"solo"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"4px"},children:"Selected"}),e.jsx(a,{label:"Option label",position:"solo",selected:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"4px"},children:"Disabled"}),e.jsx(a,{label:"Option label",position:"solo",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"4px"},children:"Disabled + Selected"}),e.jsx(a,{label:"Option label",position:"solo",disabled:!0,selected:!0})]})]})})]}),e.jsx(l.TokenTable,{title:"Design Tokens",description:"SelectOption uses the following component-level tokens. All values alias the global design tokens defined in tokens.css.",tokens:[{name:"--select-option-bg",description:"Default background colour (#FFF)"},{name:"--select-option-border-color",description:"Default border colour (gray-300, #D2D5DA)"},{name:"--select-option-border-width",description:"Default border width (0.5px)"},{name:"--select-option-color",description:"Default text colour (base-black, #1C1C1C)"},{name:"--select-option-bg-hover",description:"Hover background colour (blue-blue-100)"},{name:"--select-option-bg-selected",description:"Selected background colour (brand-primary)"},{name:"--select-option-color-selected",description:"Selected text colour (white)"},{name:"--select-option-bg-disabled",description:"Disabled background colour (gray-50)"},{name:"--select-option-color-disabled",description:"Disabled text colour (gray-300)"},{name:"--select-option-radius",description:"Corner radius for solo/top/bottom positions (6px)"},{name:"--select-option-min-height",description:"Minimum row height for default size (40px)"},{name:"--select-option-min-height-sm",description:"Minimum row height for small size (32px)"},{name:"--select-option-min-height-lg",description:"Minimum row height for large size (52px)"},{name:"--select-option-padding",description:"Padding for default size (8px 12px)"},{name:"--select-option-indicator-size",description:"Checkbox/radio indicator size (16px)"},{name:"--select-option-indicator-bg-checked",description:"Indicator fill when checked (brand-primary)"},{name:"--select-option-indicator-checkbox-radius",description:"Checkbox corner radius (4px)"},{name:"--select-option-indicator-radio-radius",description:"Radio button radius (full circle)"}]}),e.jsx(l.CodeBlock,{children:`import { SelectOption } from './BuildingBlocks/SelectOption';

// Plain text option
<SelectOption label="Option label" position="solo" />

// Checkbox option (multi-select)
<SelectOption
  label="Option label"
  selectionType="checkbox"
  selected
  position="solo"
/>

// Radio option (single-select)
<SelectOption
  label="Option label"
  selectionType="radio"
  selected
  position="solo"
/>

// Stacked menu
<SelectOption label="First"  position="top"    selectionType="checkbox" />
<SelectOption label="Second" position="mid"    selectionType="checkbox" selected />
<SelectOption label="Third"  position="bottom" selectionType="checkbox" disabled />`}),e.jsxs(l.Principles,{children:[e.jsx(l.PrincipleCard,{number:1,title:"Clear Selection State",children:"The selected state uses the brand primary background colour and white text for immediate visual confirmation. Checked indicators invert on selected rows so they remain visible against the blue background."}),e.jsxs(l.PrincipleCard,{number:2,title:"Accessible by Default",children:["Built on MUI ButtonBase with ",e.jsx("code",{children:'role="option"'}),","," ",e.jsx("code",{children:"aria-selected"}),", and ",e.jsx("code",{children:"aria-disabled"}),". Keyboard navigation and focus-visible rings are handled automatically."]}),e.jsx(l.PrincipleCard,{number:3,title:"Position-Aware Stacking",children:"The position prop collapses internal borders and adjusts border-radius so a stack of options reads as a single cohesive menu panel rather than a series of separate elements."})]}),e.jsx(l.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"140px"},children:[e.jsx(a,{label:"Option A",position:"top",selectionType:"checkbox"}),e.jsx(a,{label:"Option B",position:"mid",selectionType:"checkbox",selected:!0}),e.jsx(a,{label:"Option C",position:"bottom",selectionType:"checkbox"})]}),label:"Stack with position",description:"Use the position prop to stack options into a unified panel with collapsed borders and appropriate radius."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",width:"140px"},children:[e.jsx(a,{label:"Option A",position:"solo",selectionType:"checkbox"}),e.jsx(a,{label:"Option B",position:"solo",selectionType:"checkbox",selected:!0})]}),label:"Stack with solo",description:"Don't use solo position for every item in a stack — it creates floating separate cards instead of a unified menu."}}),e.jsx(l.RelatedLinks,{links:[{label:"ButtonMenuItem",href:"?path=/story/foundation-buildingblocks-buttonmenu--documentation"},{label:"Dropdown",href:"?path=/story/atoms-input-dropdown--documentation"}]}),e.jsx(l.Footer,{componentName:"SelectOption"})]});U.__docgenInfo={description:"",methods:[],displayName:"SelectOptionDocs"};const Io={title:"Foundation/BuildingBlocks/SelectOption",component:a,parameters:{docs:{page:()=>e.jsx(U,{})}},argTypes:{size:{control:"select",options:["small","default","large"],description:"Controls padding, font size, and indicator dimensions"},position:{control:"select",options:["top","mid","bottom","solo"],description:"Controls border-radius and which border edges are rendered"},selectionType:{control:"select",options:["none","checkbox","radio"],description:"Which selection indicator to render alongside the label"},selected:{control:"boolean",description:"Whether this option is currently selected/checked"},disabled:{control:"boolean",description:"Prevents interaction and renders in a muted style"},label:{control:"text",description:"Visible label text"}},args:{label:"Option label",size:"default",position:"solo",selectionType:"none",selected:!1,disabled:!1}},z={name:"Documentation",render:()=>e.jsx(U,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen",chromatic:{disableSnapshot:!0}}},T={name:"Playground",render:o=>e.jsx("div",{style:{maxWidth:"320px",padding:"24px"},children:e.jsx(a,{...o})})},D={name:"Default",render:()=>e.jsx("div",{style:{maxWidth:"280px",padding:"24px"},children:e.jsx(a,{label:"Option label",position:"solo"})}),parameters:{controls:{disable:!0}}},O={name:"Sizes",render:()=>{const o=["small","default","large"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"360px"},children:o.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"6px"},children:t}),e.jsx(a,{label:`Option label — ${t}`,size:t,position:"solo"})]},t))})},parameters:{controls:{disable:!0}}},_={name:"Status — Plain",render:()=>e.jsxs("div",{style:{maxWidth:"280px",padding:"24px"},children:[e.jsx(a,{label:"Default option",position:"top"}),e.jsx(a,{label:"Hover (interact to see)",position:"mid"}),e.jsx(a,{label:"Selected option",position:"mid",selected:!0}),e.jsx(a,{label:"Disabled option",position:"bottom",disabled:!0})]}),parameters:{controls:{disable:!0}}},w={name:"Status — Checkbox",render:()=>{const o=()=>{const[t,n]=u.useState(new Set(["Option B"])),s=["Option A","Option B","Option C","Option D (disabled)"];return e.jsx("div",{style:{maxWidth:"280px",padding:"24px"},children:s.map((i,r)=>{const c=i.includes("disabled"),p=r===0?"top":r===s.length-1?"bottom":"mid";return e.jsx(a,{label:i,position:p,selectionType:"checkbox",selected:t.has(i),disabled:c,onClick:()=>{c||n(x=>{const m=new Set(x);return m.has(i)?m.delete(i):m.add(i),m})}},i)})})};return e.jsx(o,{})},parameters:{controls:{disable:!0}}},C={name:"Status — Radio",render:()=>{const o=()=>{const[t,n]=u.useState("Option B"),s=["Option A","Option B","Option C","Option D (disabled)"];return e.jsx("div",{style:{maxWidth:"280px",padding:"24px"},children:s.map((i,r)=>{const c=i.includes("disabled"),p=r===0?"top":r===s.length-1?"bottom":"mid";return e.jsx(a,{label:i,position:p,selectionType:"radio",selected:t===i,disabled:c,onClick:()=>{c||n(i)}},i)})})};return e.jsx(o,{})},parameters:{controls:{disable:!0}}},B={name:"Status — Disabled",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:"320px"},children:["none","checkbox","radio"].map(o=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"6px"},children:['selectionType="',o,'" — disabled']}),e.jsx(a,{label:"Disabled option",selectionType:o,disabled:!0,position:"solo"})]},o))}),parameters:{controls:{disable:!0}}},R={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Position Variants (stacked)"}),e.jsx("div",{style:{maxWidth:"280px"},children:["top","mid","bottom"].map((o,t)=>e.jsx(a,{label:`Position: "${o}"`,position:o,selectionType:"checkbox",selected:t===1},o))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Selection Types (solo)"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",maxWidth:"280px"},children:["none","checkbox","radio"].map(o=>e.jsx(a,{label:`selectionType="${o}"`,selectionType:o,position:"solo"},o))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Sizes"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",maxWidth:"280px"},children:["small","default","large"].map(o=>e.jsx(a,{label:`size="${o}"`,size:o,position:"solo",selectionType:"radio"},o))})]})]}),parameters:{controls:{disable:!0}}},I={name:"All Interactive States",render:()=>{const o=[{label:"Default"},{label:"Selected",selected:!0},{label:"Disabled",disabled:!0},{label:"Disabled + Selected",disabled:!0,selected:!0}];return e.jsx("div",{style:{display:"flex",gap:"32px",padding:"24px",flexWrap:"wrap"},children:["none","checkbox","radio"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"8px",textTransform:"capitalize"},children:t==="none"?"Plain":t}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",minWidth:"200px"},children:o.map(n=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",marginBottom:"2px"},children:n.label}),e.jsx(a,{label:n.label,selectionType:t,selected:n.selected,disabled:n.disabled,position:"solo"})]},n.label))})]},t))})},parameters:{controls:{disable:!0}}},P={name:"Full Design Matrix",render:()=>{const o=["small","default","large"],t=["none","checkbox","radio"],n=[{label:"Default"},{label:"Selected",selected:!0},{label:"Disabled",disabled:!0}];return e.jsx("div",{style:{padding:"24px",overflowX:"auto"},children:o.map(s=>e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Size: ",s]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`120px repeat(${n.length}, 1fr)`,gap:"8px",alignItems:"center"},children:[e.jsx("div",{}),n.map(i=>e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textAlign:"center"},children:i.label},i.label)),t.map(i=>e.jsxs($e.Fragment,{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize"},children:i==="none"?"Plain":i}),n.map(r=>e.jsx(a,{label:"Option",size:s,selectionType:i,selected:r.selected,disabled:r.disabled,position:"solo"},r.label))]},i))]})]},s))})},parameters:{controls:{disable:!0}}};var Y,J,Q;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <SelectOptionDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen',
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(Q=(J=z.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,oe,te;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    maxWidth: '320px',
    padding: '24px'
  }}>
      <SelectOption {...args} />
    </div>
}`,...(te=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ie,ne,ae;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <div style={{
    maxWidth: '280px',
    padding: '24px'
  }}>
      <SelectOption label="Option label" position="solo" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var le,se,re;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => {
    const sizes: SelectOptionSize[] = ['small', 'default', 'large'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '24px',
      maxWidth: '360px'
    }}>
        {sizes.map(size => <div key={size}>
            <div style={{
          fontFamily: 'var(--brand-font-primary)',
          fontSize: '11px',
          fontWeight: 600,
          color: 'var(--global-color-neutral-gray-500)',
          textTransform: 'capitalize',
          marginBottom: '6px'
        }}>
              {size}
            </div>
            <SelectOption label={\`Option label — \${size}\`} size={size} position="solo" />
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(re=(se=O.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var de,ce,pe;_.parameters={..._.parameters,docs:{...(de=_.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Status — Plain',
  render: () => <div style={{
    maxWidth: '280px',
    padding: '24px'
  }}>
      <SelectOption label="Default option" position="top" />
      <SelectOption label="Hover (interact to see)" position="mid" />
      <SelectOption label="Selected option" position="mid" selected />
      <SelectOption label="Disabled option" position="bottom" disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pe=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ue,xe;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Status — Checkbox',
  render: () => {
    const CheckboxDemo = () => {
      const [checked, setChecked] = useState<Set<string>>(new Set(['Option B']));
      const options = ['Option A', 'Option B', 'Option C', 'Option D (disabled)'];
      return <div style={{
        maxWidth: '280px',
        padding: '24px'
      }}>
          {options.map((opt, i) => {
          const isDisabled = opt.includes('disabled');
          const pos: SelectOptionPosition = i === 0 ? 'top' : i === options.length - 1 ? 'bottom' : 'mid';
          return <SelectOption key={opt} label={opt} position={pos} selectionType="checkbox" selected={checked.has(opt)} disabled={isDisabled} onClick={() => {
            if (isDisabled) return;
            setChecked(prev => {
              const next = new Set(prev);
              next.has(opt) ? next.delete(opt) : next.add(opt);
              return next;
            });
          }} />;
        })}
        </div>;
    };
    return <CheckboxDemo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(xe=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:xe.source}}};var be,he,ge;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Status — Radio',
  render: () => {
    const RadioDemo = () => {
      const [selected, setSelected] = useState<string>('Option B');
      const options = ['Option A', 'Option B', 'Option C', 'Option D (disabled)'];
      return <div style={{
        maxWidth: '280px',
        padding: '24px'
      }}>
          {options.map((opt, i) => {
          const isDisabled = opt.includes('disabled');
          const pos: SelectOptionPosition = i === 0 ? 'top' : i === options.length - 1 ? 'bottom' : 'mid';
          return <SelectOption key={opt} label={opt} position={pos} selectionType="radio" selected={selected === opt} disabled={isDisabled} onClick={() => {
            if (!isDisabled) setSelected(opt);
          }} />;
        })}
        </div>;
    };
    return <RadioDemo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ge=(he=C.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ye,fe,ve;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Status — Disabled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    maxWidth: '320px'
  }}>
      {(['none', 'checkbox', 'radio'] as SelectOptionSelectionType[]).map(type => <div key={type}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '6px'
      }}>
            selectionType="{type}" — disabled
          </div>
          <SelectOption label="Disabled option" selectionType={type} disabled position="solo" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ve=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Se,je,ke;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>
      {/* Position variants */}
      <div>
        <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '8px'
      }}>
          Position Variants (stacked)
        </div>
        <div style={{
        maxWidth: '280px'
      }}>
          {(['top', 'mid', 'bottom'] as SelectOptionPosition[]).map((pos, i) => <SelectOption key={pos} label={\`Position: "\${pos}"\`} position={pos} selectionType="checkbox" selected={i === 1} />)}
        </div>
      </div>

      {/* Solo variants */}
      <div>
        <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '8px'
      }}>
          Selection Types (solo)
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        maxWidth: '280px'
      }}>
          {(['none', 'checkbox', 'radio'] as SelectOptionSelectionType[]).map(type => <SelectOption key={type} label={\`selectionType="\${type}"\`} selectionType={type} position="solo" />)}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '8px'
      }}>
          Sizes
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        maxWidth: '280px'
      }}>
          {(['small', 'default', 'large'] as SelectOptionSize[]).map(size => <SelectOption key={size} label={\`size="\${size}"\`} size={size} position="solo" selectionType="radio" />)}
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ke=(je=R.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var ze,Te,De;I.parameters={...I.parameters,docs:{...(ze=I.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => {
    const states: Array<{
      label: string;
      selected?: boolean;
      disabled?: boolean;
    }> = [{
      label: 'Default'
    }, {
      label: 'Selected',
      selected: true
    }, {
      label: 'Disabled',
      disabled: true
    }, {
      label: 'Disabled + Selected',
      disabled: true,
      selected: true
    }];
    return <div style={{
      display: 'flex',
      gap: '32px',
      padding: '24px',
      flexWrap: 'wrap'
    }}>
        {(['none', 'checkbox', 'radio'] as SelectOptionSelectionType[]).map(type => <div key={type}>
            <div style={{
          fontFamily: 'var(--brand-font-primary)',
          fontSize: '11px',
          fontWeight: 600,
          color: 'var(--global-color-neutral-gray-500)',
          marginBottom: '8px',
          textTransform: 'capitalize'
        }}>
              {type === 'none' ? 'Plain' : type}
            </div>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          minWidth: '200px'
        }}>
              {states.map(s => <div key={s.label}>
                  <div style={{
              fontFamily: 'var(--brand-font-secondary)',
              fontSize: '10px',
              color: 'var(--global-color-neutral-gray-400)',
              marginBottom: '2px'
            }}>{s.label}</div>
                  <SelectOption label={s.label} selectionType={type} selected={s.selected} disabled={s.disabled} position="solo" />
                </div>)}
            </div>
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(De=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Oe,_e,we;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const sizes: SelectOptionSize[] = ['small', 'default', 'large'];
    const types: SelectOptionSelectionType[] = ['none', 'checkbox', 'radio'];
    const states: Array<{
      label: string;
      selected?: boolean;
      disabled?: boolean;
    }> = [{
      label: 'Default'
    }, {
      label: 'Selected',
      selected: true
    }, {
      label: 'Disabled',
      disabled: true
    }];
    return <div style={{
      padding: '24px',
      overflowX: 'auto'
    }}>
        {sizes.map(size => <div key={size} style={{
        marginBottom: '40px'
      }}>
            <div style={{
          fontFamily: 'var(--brand-font-primary)',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--global-color-neutral-gray-700)',
          marginBottom: '12px',
          textTransform: 'capitalize'
        }}>
              Size: {size}
            </div>
            <div style={{
          display: 'grid',
          gridTemplateColumns: \`120px repeat(\${states.length}, 1fr)\`,
          gap: '8px',
          alignItems: 'center'
        }}>
              {/* Header */}
              <div />
              {states.map(s => <div key={s.label} style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)',
            textAlign: 'center'
          }}>
                  {s.label}
                </div>)}

              {/* Rows */}
              {types.map(type => <React.Fragment key={type}>
                  <div style={{
              fontFamily: 'var(--brand-font-primary)',
              fontSize: '11px',
              color: 'var(--global-color-neutral-gray-700)',
              textTransform: 'capitalize'
            }}>
                    {type === 'none' ? 'Plain' : type}
                  </div>
                  {states.map(s => <SelectOption key={s.label} label="Option" size={size} selectionType={type} selected={s.selected} disabled={s.disabled} position="solo" />)}
                </React.Fragment>)}
            </div>
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(we=(_e=P.parameters)==null?void 0:_e.docs)==null?void 0:we.source}}};const Po=["Documentation","Playground","Default","Sizes","StatusPlain","StatusCheckbox","StatusRadio","StatusDisabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{I as AllInteractiveStates,R as ComponentBreakdown,D as Default,z as Documentation,P as FullDesignMatrix,T as Playground,O as Sizes,w as StatusCheckbox,B as StatusDisabled,_ as StatusPlain,C as StatusRadio,Po as __namedExportsOrder,Io as default};
