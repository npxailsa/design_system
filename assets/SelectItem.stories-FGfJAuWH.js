import{j as e,r as C}from"./iframe-Bt56k9MO.js";import{R as me,C as ye}from"./Radio-CxKjVzun.js";import{D as r}from"./DocsTemplate-B8Unfyde.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-BnkL7cVJ.js";import"./SwitchBase-C6TbHXlT.js";import"./useFormControl-CLA-YOxj.js";import"./useSlot-BaPa9xxo.js";import"./mergeSlotProps-Bfp0STUL.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BmbSx6Hz.js";import"./useControlled-C5WOK03_.js";import"./ButtonBase-CaGsPfnj.js";import"./index-HYLRWYw3.js";import"./emotion-react.browser.esm-Sm0KSgkQ.js";import"./useEventCallback-CSweTuVx.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-D-VjtSlk.js";import"./memoTheme-xcLwXBrC.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const ue="_root_1yumz_18",x={root:ue,"root--small":"_root--small_1yumz_34","root--default":"_root--default_1yumz_35","root--large":"_root--large_1yumz_36","root--disabled":"_root--disabled_1yumz_39"},ge={small:18,default:22,large:26},s={brand:"var(--select-item-color-checked, var(--global-color-primary-sky-blue, #0BA7EA))",gray300:"var(--global-color-neutral-gray-300, #D2D5DA)",gray500:"var(--global-color-neutral-gray-500, #6D7280)"},be="var(--select-item-border-width-active, 0.5px) solid var(--select-item-border-color-active, #1C1C1C)",he="var(--select-item-border-radius, 4px)",fe=t=>t==="selected"||t==="hover"||t==="clicked"||t==="some-selected",ve=(t,a)=>{if(a)return{muiColor:s.gray300,sx:{color:s.gray300,"&.Mui-checked":{color:s.gray300},"&.MuiCheckbox-indeterminate":{color:s.gray300}}};switch(t){case"selected":case"hover":case"clicked":return{muiColor:s.brand,sx:{color:s.brand,"&.Mui-checked":{color:s.brand}}};case"some-selected":return{muiColor:s.brand,sx:{color:s.brand,"&.MuiCheckbox-indeterminate":{color:s.brand}}};default:return{muiColor:s.gray500,sx:{color:s.gray500}}}},Se=(t,a)=>{if(a)return{muiColor:s.gray300,sx:{color:s.gray300,"&.Mui-checked":{color:s.gray300}}};switch(t){case"selected":case"hover":case"clicked":return{muiColor:s.brand,sx:{color:s.brand,"&.Mui-checked":{color:s.brand}}};case"some-selected":return{muiColor:s.brand,sx:{color:s.brand,"&.Mui-checked":{color:s.brand}}};default:return{muiColor:s.gray500,sx:{color:s.gray500}}}},l=({type:t="checkbox",state:a="default",size:i="default",disabled:n=!1,onChange:o,"aria-label":d,className:pe})=>{const z=ge[i],A=a==="selected"||a==="hover"||a==="clicked"||a==="some-selected",w=t==="checkbox"&&a==="some-selected",T=I=>{o==null||o(I.target.checked)},F={padding:0,width:`${z}px`,height:`${z}px`,flexShrink:0,"& .MuiSvgIcon-root":{fontSize:`${z}px`},"& .MuiTouchRipple-root":{display:"none"}},_=[x.root,x[`root--${i}`],x[`root--${a}`],n&&x["root--disabled"],pe].filter(Boolean).join(" "),B=!n&&fe(a)?{border:be,borderRadius:he}:{};if(t==="radio"){const{sx:I}=Se(a,n);return e.jsx("span",{className:_,style:B,children:e.jsx(me,{checked:A,disabled:n,onChange:T,disableRipple:!0,inputProps:{"aria-label":d??"select item"},sx:{...F,...I}})})}const{sx:xe}=ve(a,n);return e.jsx("span",{className:_,style:B,children:e.jsx(ye,{checked:A&&!w,indeterminate:w,disabled:n,onChange:T,disableRipple:!0,inputProps:{"aria-label":d??"select item"},sx:{...F,...xe}})})};l.__docgenInfo={description:"",methods:[],displayName:"SelectItem",props:{type:{required:!1,tsType:{name:"union",raw:"'checkbox' | 'radio'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio'"}]},description:"Which indicator type to render",defaultValue:{value:"'checkbox'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'selected'
| 'some-selected'
| 'hover'
| 'clicked'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'selected'"},{name:"literal",value:"'some-selected'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'clicked'"}]},description:"Interaction / visual state",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Visual scale",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents interaction and dims the indicator",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Change handler — fires with the new checked value"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},className:{required:!1,tsType:{name:"string"},description:""}}};const R=["small","default","large"],je=["checkbox","radio"],ke=["default","selected","some-selected","hover","clicked"],D=()=>e.jsxs(r,{children:[e.jsx(r.Header,{title:"SelectItem",subtitle:"A standalone checkbox or radio button indicator. Used as the selection control inside list rows, table rows, and select menus. Built on MUI Checkbox / Radio with all visual sizing and colour driven by design tokens."}),e.jsxs(r.BodyText,{children:[e.jsx("strong",{children:"SelectItem"})," is a focused, single-purpose building block that renders exactly one checkbox or radio indicator at a specified size and state. It does not include a label or wrapper row — compose it inside a ",e.jsx("strong",{children:"MenuMultiSelect"})," row or a custom list item for a complete interactive control."]}),e.jsx(r.Anatomy,{parts:[{number:1,label:"Wrapper",description:"An inline-flex span that constrains the indicator to its token-driven pixel size."},{number:2,label:"MUI Checkbox / Radio",description:"The underlying MUI control. Colour and size are overridden via sx to match the Figma spec exactly."}]}),e.jsx(r.Section,{title:"MUI Foundation",children:e.jsxs(r.BodyText,{children:["SelectItem wraps ",e.jsx("strong",{children:"MUI Checkbox"})," (for ",e.jsx("code",{children:'type="checkbox"'}),") and"," ",e.jsx("strong",{children:"MUI Radio"})," (for ",e.jsx("code",{children:'type="radio"'}),"). The MUI foundation provides native ",e.jsx("code",{children:"aria-checked"}),", keyboard interaction, and focus management out of the box. Visual customisation is applied via the ",e.jsx("code",{children:"sx"})," ","prop, keeping the accessibility layer intact."]})}),e.jsx(r.Section,{title:"Types",children:e.jsx(r.Subsection,{title:"Checkbox vs Radio",children:e.jsx("div",{style:{display:"flex",gap:"40px",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:je.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize"},children:t}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(l,{type:t,state:"default"}),e.jsx(l,{type:t,state:"selected"}),t==="checkbox"&&e.jsx(l,{type:t,state:"some-selected"})]})]},t))})})}),e.jsxs(r.Section,{title:"Sizes",children:[e.jsxs(r.BodyText,{children:["Three sizes match the design system scale: ",e.jsx("code",{children:"small"})," (18 px),"," ",e.jsx("code",{children:"default"})," (22 px), and ",e.jsx("code",{children:"large"})," (26 px). Use the size that matches the row density of the surrounding list."]}),e.jsx(r.Subsection,{title:"Checkbox — all sizes",children:e.jsx("div",{style:{display:"flex",gap:"24px",alignItems:"center",padding:"var(--global-spacing-sizing-16px) 0"},children:R.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(l,{type:"checkbox",size:t,state:"selected"}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",textTransform:"capitalize"},children:t})]},t))})}),e.jsx(r.Subsection,{title:"Radio — all sizes",children:e.jsx("div",{style:{display:"flex",gap:"24px",alignItems:"center",padding:"var(--global-spacing-sizing-16px) 0"},children:R.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(l,{type:"radio",size:t,state:"selected"}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",textTransform:"capitalize"},children:t})]},t))})})]}),e.jsxs(r.Section,{title:"States",children:[e.jsxs(r.BodyText,{children:[e.jsx("code",{children:"state"})," controls both the visual appearance and the underlying MUI ",e.jsx("code",{children:"checked"})," / ",e.jsx("code",{children:"indeterminate"})," props:"," ",e.jsx("code",{children:"default"})," → unchecked,"," ",e.jsx("code",{children:"selected"})," → checked,"," ",e.jsx("code",{children:"some-selected"})," → indeterminate (checkbox only),"," ",e.jsx("code",{children:"hover"})," / ",e.jsx("code",{children:"clicked"})," → visually identical to selected but communicate intent for static story matrices."]}),e.jsx(r.Subsection,{title:"Checkbox states",children:e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"var(--global-spacing-sizing-16px) 0",alignItems:"flex-end"},children:[ke.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(l,{type:"checkbox",state:t}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"9px",color:"var(--global-color-neutral-gray-400)",textAlign:"center",maxWidth:"64px"},children:t})]},t)),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(l,{type:"checkbox",state:"default",disabled:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"9px",color:"var(--global-color-neutral-gray-400)",textAlign:"center"},children:"disabled"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(l,{type:"checkbox",state:"selected",disabled:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"9px",color:"var(--global-color-neutral-gray-400)",textAlign:"center"},children:"disabled+selected"})]})]})}),e.jsx(r.Subsection,{title:"Radio states",children:e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"var(--global-spacing-sizing-16px) 0",alignItems:"flex-end"},children:[["default","selected","hover","clicked"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(l,{type:"radio",state:t}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"9px",color:"var(--global-color-neutral-gray-400)",textAlign:"center",maxWidth:"64px"},children:t})]},t)),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(l,{type:"radio",state:"default",disabled:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"9px",color:"var(--global-color-neutral-gray-400)",textAlign:"center"},children:"disabled"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(l,{type:"radio",state:"selected",disabled:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"9px",color:"var(--global-color-neutral-gray-400)",textAlign:"center"},children:"disabled+selected"})]})]})})]}),e.jsx(r.TokenTable,{title:"Design Tokens",description:"SelectItem uses the following component-level tokens. All values alias the global design tokens defined in tokens.css.",tokens:[{name:"--select-item-size-sm",description:"Pixel dimension of the small indicator (18 px)"},{name:"--select-item-size",description:"Pixel dimension of the default indicator (22 px)"},{name:"--select-item-size-lg",description:"Pixel dimension of the large indicator (26 px)"},{name:"--select-item-color-default",description:"Icon colour in the default (unchecked) state (gray-500)"},{name:"--select-item-color-checked",description:"Icon colour when checked / selected (brand primary, #3776CE)"},{name:"--select-item-color-disabled",description:"Icon colour when disabled (gray-300)"},{name:"--select-item-disabled-opacity",description:"Opacity applied to the wrapper when disabled (0.5)"}]}),e.jsx(r.CodeBlock,{children:`import { SelectItem } from './BuildingBlocks/SelectItem';

// Default checkbox (unchecked)
<SelectItem type="checkbox" />

// Checked checkbox — default size
<SelectItem type="checkbox" state="selected" />

// Indeterminate checkbox — large
<SelectItem type="checkbox" state="some-selected" size="large" />

// Radio button — selected, small
<SelectItem type="radio" state="selected" size="small" />

// Disabled + checked checkbox
<SelectItem type="checkbox" state="selected" disabled />

// Controlled — wire up onChange
const [checked, setChecked] = useState(false);
<SelectItem
  type="checkbox"
  state={checked ? 'selected' : 'default'}
  onChange={setChecked}
/>`}),e.jsxs(r.Principles,{children:[e.jsxs(r.PrincipleCard,{number:1,title:"One responsibility",children:["SelectItem renders only the indicator — no label, no row layout. Compose it inside a row component (",e.jsx("strong",{children:"MenuMultiSelect"}),") for a full list-item experience."]}),e.jsx(r.PrincipleCard,{number:2,title:"Token-driven sizing",children:"All three pixel sizes map directly to global spacing tokens so the component scales alongside the rest of the design system without custom overrides."}),e.jsxs(r.PrincipleCard,{number:3,title:"Accessible by default",children:["Wraps MUI primitives that handle ",e.jsx("code",{children:"aria-checked"}),", keyboard interaction, and focus management. Pass ",e.jsx("code",{children:"aria-label"})," when rendering without an adjacent visible label."]})]}),e.jsx(r.RelatedLinks,{links:[{label:"MenuMultiSelect",href:"?path=/story/foundation-buildingblocks-menumultiselect--documentation"},{label:"Dropdown",href:"?path=/story/atoms-input-dropdown--documentation"}]}),e.jsx(r.Footer,{componentName:"SelectItem"})]});D.__docgenInfo={description:"",methods:[],displayName:"SelectItemDocs"};const c=["small","default","large"],p=["checkbox","radio"],k=["default","selected","some-selected","hover","clicked"],Ne={title:"Foundation/BuildingBlocks/SelectItem",component:l,parameters:{docs:{page:()=>e.jsx(D,{})}},argTypes:{type:{control:"select",options:p,description:"Which control type to render"},state:{control:"select",options:k,description:"Interaction / visual state"},size:{control:"select",options:c,description:"Visual scale (18 / 22 / 26 px)"},disabled:{control:"boolean",description:"Prevents interaction and dims the indicator"}},args:{type:"checkbox",state:"default",size:"default",disabled:!1}},m={name:"Documentation",render:()=>e.jsx(D,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen",chromatic:{disableSnapshot:!0}}},y={name:"Playground",render:t=>{const a=()=>{const[i,n]=C.useState(t.state==="selected"||t.state==="hover"||t.state==="clicked");return e.jsx("div",{style:{padding:"40px 24px"},children:e.jsx(l,{...t,state:i?"selected":"default",onChange:n})})};return e.jsx(a,{})}},u={name:"Default",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",padding:"40px 24px",alignItems:"center"},children:[e.jsx(l,{type:"checkbox",state:"default"}),e.jsx(l,{type:"radio",state:"default"})]}),parameters:{controls:{disable:!0}}},g={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"40px 24px"},children:p.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"12px"},children:t}),e.jsx("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:c.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(l,{type:t,size:a,state:"selected"}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",textTransform:"capitalize"},children:a})]},a))})]},t))}),parameters:{controls:{disable:!0}}},b={name:"Status — Checkbox",render:()=>{const t=()=>{const[a,i]=C.useState("default"),n=["default","selected","some-selected"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"40px 24px"},children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"14px",color:"var(--global-color-neutral-gray-500)",margin:"0 0 8px"},children:"Click to cycle: default → selected → indeterminate"}),e.jsx(l,{type:"checkbox",state:a,size:"default",onChange:()=>{i(o=>n[(n.indexOf(o)+1)%n.length])}})]})};return e.jsx(t,{})},parameters:{controls:{disable:!0}}},h={name:"Status — Radio",render:()=>{const t=()=>{const[a,i]=C.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"40px 24px"},children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"14px",color:"var(--global-color-neutral-gray-500)",margin:"0 0 8px"},children:"Click to toggle"}),e.jsx(l,{type:"radio",state:a?"selected":"default",onChange:i})]})};return e.jsx(t,{})},parameters:{controls:{disable:!0}}},f={name:"Status — Disabled",render:()=>e.jsx("div",{style:{display:"flex",gap:"32px",padding:"40px 24px",flexWrap:"wrap"},children:p.map(t=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"12px"},children:[t," — disabled"]}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(l,{type:t,state:"default",disabled:!0}),e.jsx(l,{type:t,state:"selected",disabled:!0}),t==="checkbox"&&e.jsx(l,{type:t,state:"some-selected",disabled:!0})]})]},t))}),parameters:{controls:{disable:!0}}},v={name:"Component Breakdown",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"40px",padding:"40px 24px"},children:p.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize",marginBottom:"16px"},children:t}),e.jsx("div",{style:{display:"flex",gap:"32px",flexWrap:"wrap"},children:c.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize"},children:a}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:k.filter(i=>t==="checkbox"||i!=="some-selected").map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(l,{type:t,size:a,state:i}),e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)"},children:i})]},i))})]},a))})]},t))}),parameters:{controls:{disable:!0}}},S={name:"All Interactive States",render:()=>e.jsx("div",{style:{padding:"40px 24px",overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"16px 8px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:700,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.6px",textAlign:"left",paddingBottom:"8px"},children:"Type"}),[...k,"disabled","disabled+checked"].map(t=>e.jsx("th",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:700,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.6px",textAlign:"center",paddingBottom:"8px"},children:t},t))]})}),e.jsx("tbody",{children:p.map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize",paddingRight:"16px"},children:t}),k.filter(a=>t==="checkbox"||a!=="some-selected").map(a=>e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle",padding:"6px 8px"},children:e.jsx(l,{type:t,state:a})},a)),t==="radio"&&e.jsx("td",{}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle",padding:"6px 8px"},children:e.jsx(l,{type:t,state:"default",disabled:!0})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle",padding:"6px 8px"},children:e.jsx(l,{type:t,state:"selected",disabled:!0})})]},t))})]})}),parameters:{controls:{disable:!0}}},j={name:"Full Design Matrix",render:()=>{const t=[{label:"Default",state:"default"},{label:"Selected",state:"selected"},{label:"Indeterminate",state:"some-selected"},{label:"Hover",state:"hover"},{label:"Clicked",state:"clicked"},{label:"Disabled",state:"default",disabled:!0},{label:"Disabled+Selected",state:"selected",disabled:!0},{label:"Disabled+Indet.",state:"some-selected",disabled:!0}],a=[{label:"Default",state:"default"},{label:"Selected",state:"selected"},{label:"Hover",state:"hover"},{label:"Clicked",state:"clicked"},{label:"Disabled",state:"default",disabled:!0},{label:"Disabled+Selected",state:"selected",disabled:!0}],i={fontFamily:"var(--brand-font-primary)",fontSize:"9px",fontWeight:700,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.5px",textAlign:"center",padding:"0 8px 10px",whiteSpace:"nowrap"},n={fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",paddingRight:"12px",whiteSpace:"nowrap",textAlign:"right",verticalAlign:"middle"};return e.jsxs("div",{style:{padding:"32px 24px",overflowX:"auto"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Checkbox"}),e.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"4px",marginBottom:"40px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"80px"}}),t.map(o=>e.jsx("th",{style:i,children:o.label},o.label))]})}),e.jsx("tbody",{children:c.map(o=>e.jsxs("tr",{children:[e.jsx("td",{style:n,children:o}),t.map(d=>e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle",padding:"10px 8px",overflow:"visible"},children:e.jsx(l,{type:"checkbox",size:o,state:d.state,disabled:d.disabled})},d.label))]},o))})]}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Radio"}),e.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"4px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"80px"}}),a.map(o=>e.jsx("th",{style:i,children:o.label},o.label))]})}),e.jsx("tbody",{children:c.map(o=>e.jsxs("tr",{children:[e.jsx("td",{style:n,children:o}),a.map(d=>e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle",padding:"10px 8px",overflow:"visible"},children:e.jsx(l,{type:"radio",size:o,state:d.state,disabled:d.disabled})},d.label))]},o))})]})]})},parameters:{controls:{disable:!0}}};var L,W,M;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <SelectItemDocs />,
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
}`,...(M=(W=m.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var E,P,U;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const Demo = () => {
      const [checked, setChecked] = useState(args.state === 'selected' || args.state === 'hover' || args.state === 'clicked');
      return <div style={{
        padding: '40px 24px'
      }}>
          <SelectItem {...args} state={checked ? 'selected' : 'default'} onChange={setChecked} />
        </div>;
    };
    return <Demo />;
  }
}`,...(U=(P=y.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var O,V,q;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    padding: '40px 24px',
    alignItems: 'center'
  }}>
      <SelectItem type="checkbox" state="default" />
      <SelectItem type="radio" state="default" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var N,Z,H;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '40px 24px'
  }}>
      {ALL_TYPES.map(type => <div key={type}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'capitalize',
        marginBottom: '12px'
      }}>
            {type}
          </div>
          <div style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center'
      }}>
            {ALL_SIZES.map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
                <SelectItem type={type} size={size} state="selected" />
                <span style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            color: 'var(--global-color-neutral-gray-400)',
            textTransform: 'capitalize'
          }}>{size}</span>
              </div>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(H=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var X,Y,$;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Status — Checkbox',
  render: () => {
    const CheckboxDemo = () => {
      const [state, setState] = useState<SelectItemState>('default');
      const cycle: SelectItemState[] = ['default', 'selected', 'some-selected'];
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '40px 24px'
      }}>
          <p style={{
          fontFamily: 'var(--brand-font-secondary)',
          fontSize: '14px',
          color: 'var(--global-color-neutral-gray-500)',
          margin: '0 0 8px'
        }}>
            Click to cycle: default → selected → indeterminate
          </p>
          <SelectItem type="checkbox" state={state} size="default" onChange={() => {
          setState(s => cycle[(cycle.indexOf(s) + 1) % cycle.length]);
        }} />
        </div>;
    };
    return <CheckboxDemo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var K,G,J;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Status — Radio',
  render: () => {
    const RadioDemo = () => {
      const [selected, setSelected] = useState(false);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '40px 24px'
      }}>
          <p style={{
          fontFamily: 'var(--brand-font-secondary)',
          fontSize: '14px',
          color: 'var(--global-color-neutral-gray-500)',
          margin: '0 0 8px'
        }}>
            Click to toggle
          </p>
          <SelectItem type="radio" state={selected ? 'selected' : 'default'} onChange={setSelected} />
        </div>;
    };
    return <RadioDemo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,ee,te;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Status — Disabled',
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    padding: '40px 24px',
    flexWrap: 'wrap'
  }}>
      {ALL_TYPES.map(type => <div key={type}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'capitalize',
        marginBottom: '12px'
      }}>
            {type} — disabled
          </div>
          <div style={{
        display: 'flex',
        gap: '12px'
      }}>
            <SelectItem type={type} state="default" disabled />
            <SelectItem type={type} state="selected" disabled />
            {type === 'checkbox' && <SelectItem type={type} state="some-selected" disabled />}
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,le,re;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '40px 24px'
  }}>
      {ALL_TYPES.map(type => <div key={type}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        textTransform: 'capitalize',
        marginBottom: '16px'
      }}>
            {type}
          </div>
          <div style={{
        display: 'flex',
        gap: '32px',
        flexWrap: 'wrap'
      }}>
            {ALL_SIZES.map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
                <div style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)',
            textTransform: 'capitalize'
          }}>
                  {size}
                </div>
                <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
                  {ALL_STATES.filter(s => type === 'checkbox' || s !== 'some-selected').map(state => <div key={state} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
                      <SelectItem type={type} size={size} state={state} />
                      <span style={{
                fontFamily: 'var(--brand-font-secondary)',
                fontSize: '10px',
                color: 'var(--global-color-neutral-gray-400)'
              }}>{state}</span>
                    </div>)}
                </div>
              </div>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(re=(le=v.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var se,oe,ie;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    padding: '40px 24px',
    overflowX: 'auto'
  }}>
      <table style={{
      borderCollapse: 'separate',
      borderSpacing: '16px 8px'
    }}>
        <thead>
          <tr>
            <th style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            fontWeight: 700,
            color: 'var(--global-color-neutral-gray-500)',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            textAlign: 'left',
            paddingBottom: '8px'
          }}>
              Type
            </th>
            {[...ALL_STATES, 'disabled', 'disabled+checked'].map(s => <th key={s} style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            fontWeight: 700,
            color: 'var(--global-color-neutral-gray-500)',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            textAlign: 'center',
            paddingBottom: '8px'
          }}>
                {s}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {ALL_TYPES.map(type => <tr key={type}>
              <td style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            color: 'var(--global-color-neutral-gray-700)',
            textTransform: 'capitalize',
            paddingRight: '16px'
          }}>
                {type}
              </td>
              {ALL_STATES.filter(s => type === 'checkbox' || s !== 'some-selected').map(state => <td key={state} style={{
            textAlign: 'center',
            verticalAlign: 'middle',
            padding: '6px 8px'
          }}>
                  <SelectItem type={type} state={state} />
                </td>)}
              {type === 'radio' && <td />}
              <td style={{
            textAlign: 'center',
            verticalAlign: 'middle',
            padding: '6px 8px'
          }}>
                <SelectItem type={type} state="default" disabled />
              </td>
              <td style={{
            textAlign: 'center',
            verticalAlign: 'middle',
            padding: '6px 8px'
          }}>
                <SelectItem type={type} state="selected" disabled />
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ne,de,ce;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    type MatrixCol = {
      label: string;
      state: SelectItemState;
      disabled?: boolean;
    };
    const checkboxCols: MatrixCol[] = [{
      label: 'Default',
      state: 'default'
    }, {
      label: 'Selected',
      state: 'selected'
    }, {
      label: 'Indeterminate',
      state: 'some-selected'
    }, {
      label: 'Hover',
      state: 'hover'
    }, {
      label: 'Clicked',
      state: 'clicked'
    }, {
      label: 'Disabled',
      state: 'default',
      disabled: true
    }, {
      label: 'Disabled+Selected',
      state: 'selected',
      disabled: true
    }, {
      label: 'Disabled+Indet.',
      state: 'some-selected',
      disabled: true
    }];
    const radioCols: MatrixCol[] = [{
      label: 'Default',
      state: 'default'
    }, {
      label: 'Selected',
      state: 'selected'
    }, {
      label: 'Hover',
      state: 'hover'
    }, {
      label: 'Clicked',
      state: 'clicked'
    }, {
      label: 'Disabled',
      state: 'default',
      disabled: true
    }, {
      label: 'Disabled+Selected',
      state: 'selected',
      disabled: true
    }];
    const headerSx: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: '9px',
      fontWeight: 700,
      color: 'var(--global-color-neutral-gray-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      textAlign: 'center',
      padding: '0 8px 10px',
      whiteSpace: 'nowrap'
    };
    const rowLabelSx: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: '10px',
      color: 'var(--global-color-neutral-gray-400)',
      paddingRight: '12px',
      whiteSpace: 'nowrap',
      textAlign: 'right',
      verticalAlign: 'middle'
    };
    return <div style={{
      padding: '32px 24px',
      overflowX: 'auto'
    }}>
        {/* CHECKBOX section */}
        <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>
          Checkbox
        </div>
        <table style={{
        borderCollapse: 'separate',
        borderSpacing: '4px',
        marginBottom: '40px'
      }}>
          <thead>
            <tr>
              <th style={{
              width: '80px'
            }} />
              {checkboxCols.map(c => <th key={c.label} style={headerSx}>{c.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {ALL_SIZES.map(size => <tr key={size}>
                <td style={rowLabelSx}>{size}</td>
                {checkboxCols.map(c => <td key={c.label} style={{
              textAlign: 'center',
              verticalAlign: 'middle',
              padding: '10px 8px',
              overflow: 'visible'
            }}>
                    <SelectItem type="checkbox" size={size} state={c.state} disabled={c.disabled} />
                  </td>)}
              </tr>)}
          </tbody>
        </table>

        {/* RADIO section */}
        <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>
          Radio
        </div>
        <table style={{
        borderCollapse: 'separate',
        borderSpacing: '4px'
      }}>
          <thead>
            <tr>
              <th style={{
              width: '80px'
            }} />
              {radioCols.map(c => <th key={c.label} style={headerSx}>{c.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {ALL_SIZES.map(size => <tr key={size}>
                <td style={rowLabelSx}>{size}</td>
                {radioCols.map(c => <td key={c.label} style={{
              textAlign: 'center',
              verticalAlign: 'middle',
              padding: '10px 8px',
              overflow: 'visible'
            }}>
                    <SelectItem type="radio" size={size} state={c.state} disabled={c.disabled} />
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const Ze=["Documentation","Playground","Default","Sizes","StatusCheckbox","StatusRadio","StatusDisabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{S as AllInteractiveStates,v as ComponentBreakdown,u as Default,m as Documentation,j as FullDesignMatrix,y as Playground,g as Sizes,b as StatusCheckbox,f as StatusDisabled,h as StatusRadio,Ze as __namedExportsOrder,Ne as default};
