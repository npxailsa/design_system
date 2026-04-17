import{j as e,r as d}from"./iframe-YNeplzSN.js";import{C as rn}from"./Close-DXkIh4Ei.js";import{c as X}from"./createSvgIcon-BTOcO4F2.js";import{C as sn}from"./ChevronRight-29PU2ui1.js";import{T as dn}from"./Tag-DeDYjvOO.js";import{I as cn}from"./InputBase-fR25I8s3.js";import{C as pn}from"./Checkbox-TJOvm4-q.js";import{D as o}from"./DocsTemplate-YmZ5wZfr.js";import{P as qe}from"./Person-D-u90RGW.js";import{S as un}from"./Search-CXWBoxmI.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-DYdsgcMI.js";import"./memoTheme-CDzK_TtI.js";import"./ButtonBase-CBxRrWbv.js";import"./index-NSkwSMWB.js";import"./useEventCallback-hc1ZpNJV.js";import"./useForkRef-BOFHTGv8.js";import"./useFormControl-BV7dALLl.js";import"./index-DxrjbjkM.js";import"./useTheme-dCn5bpxL.js";import"./ownerWindow-DIR61fab.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-DC6QPnup.js";import"./mergeSlotProps-C4D4chuF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const hn=X(e.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})),mn=X(e.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),gn="_field_nn0r9_8",xn="_label_nn0r9_18",bn="_trigger_nn0r9_29",vn="_leadingIcon_nn0r9_112",fn="_iconSvg_nn0r9_131",yn="_tagArea_nn0r9_136",Sn="_displayText_nn0r9_154",jn="_inputRoot_nn0r9_179",wn="_nativeInput_nn0r9_190",_n="_actions_nn0r9_217",In="_clearBtn_nn0r9_227",kn="_clearIcon_nn0r9_245",Tn="_chevron_nn0r9_252",Dn="_chevronIcon_nn0r9_268",An="_menu_nn0r9_275",Ln="_option_nn0r9_297",En="_option__label_nn0r9_339",Cn="_option__icon_nn0r9_347",zn="_option__iconSvg_nn0r9_359",Bn="_option__checkbox_nn0r9_365",Pn="_option__chevron_nn0r9_370",Mn="_emptyState_nn0r9_379",Vn="_helper_nn0r9_392",a={field:gn,label:xn,trigger:bn,"trigger--open":"_trigger--open_nn0r9_50","trigger--small":"_trigger--small_nn0r9_61","trigger--default":"_trigger--default_nn0r9_66","trigger--large":"_trigger--large_nn0r9_71","trigger--error":"_trigger--error_nn0r9_77","trigger--warning":"_trigger--warning_nn0r9_86","trigger--success":"_trigger--success_nn0r9_95","trigger--disabled":"_trigger--disabled_nn0r9_104",leadingIcon:vn,"field--small":"_field--small_nn0r9_131",iconSvg:fn,"field--default":"_field--default_nn0r9_132","field--large":"_field--large_nn0r9_133",tagArea:yn,displayText:Sn,"displayText--placeholder":"_displayText--placeholder_nn0r9_165","displayText--disabled":"_displayText--disabled_nn0r9_169",inputRoot:jn,nativeInput:wn,actions:_n,clearBtn:In,clearIcon:kn,chevron:Tn,chevronIcon:Dn,menu:An,"menu--small":"_menu--small_nn0r9_292","menu--default":"_menu--default_nn0r9_293","menu--large":"_menu--large_nn0r9_294",option:Ln,"option--selected":"_option--selected_nn0r9_314","option--active":"_option--active_nn0r9_320","option--disabled":"_option--disabled_nn0r9_324",option__label:En,option__icon:Cn,option__iconSvg:zn,option__checkbox:Bn,option__chevron:Pn,emptyState:Mn,helper:Vn,"helper--error":"_helper--error_nn0r9_399","helper--warning":"_helper--warning_nn0r9_400","helper--success":"_helper--success_nn0r9_401"},s=({label:l,placeholder:i="Select an option",options:t,value:h=null,onChange:b,multiSelect:u=!1,values:x=[],onMultiChange:v,searchable:q=!1,size:I="default",state:A="default",leadingIcon:Z,clearable:Ue=!1,helperText:ee,disabled:y=!1,id:$e,className:He,"aria-label":ne})=>{const te=d.useId(),le=$e??te,F=`${te}-listbox`,U=d.useRef(null),ae=d.useRef(null),[g,oe]=d.useState(!1),[$,H]=d.useState(""),[L,j]=d.useState(-1),K=t.find(n=>n.id===h)??null,Ke=t.filter(n=>x.includes(n.id)),k=q&&$.trim()?t.filter(n=>n.label.toLowerCase().includes($.toLowerCase())):t,re=u?x.length>0:h!=null,Ge=!y&&re&&(Ue||u);d.useEffect(()=>{if(!g)return;const n=c=>{U.current&&!U.current.contains(c.target)&&w()};return document.addEventListener("pointerdown",n),()=>document.removeEventListener("pointerdown",n)},[g]),d.useEffect(()=>{g||j(-1)},[g]),d.useEffect(()=>{g||H("")},[g]);const G=()=>{y||(oe(!0),q&&setTimeout(()=>{var n;return(n=ae.current)==null?void 0:n.focus()},0))},w=d.useCallback(()=>{oe(!1),H(""),j(-1)},[]),Qe=()=>g?w():G(),se=d.useCallback(n=>{if(n.disabled)return;const c=n.id===h;b==null||b(c?null:n.id,c?null:n),w()},[h,b,w]),ie=d.useCallback(n=>{if(n.disabled)return;const c=x.includes(n.id)?x.filter(f=>f!==n.id):[...x,n.id],S=t.filter(f=>c.includes(f.id));v==null||v(c,S)},[x,t,v]),Je=n=>{n.stopPropagation(),u?v==null||v([],[]):b==null||b(null,null)},Xe=n=>{const c=x.filter(f=>f!==n),S=t.filter(f=>c.includes(f.id));v==null||v(c,S)},Ze=n=>{switch(n.key){case"ArrowDown":n.preventDefault(),g||G(),j(c=>Math.min(c+1,k.length-1));break;case"ArrowUp":n.preventDefault(),j(c=>Math.max(c-1,0));break;case"Enter":if(n.preventDefault(),!g){G();break}if(L>=0&&k[L]){const c=k[L];u?ie(c):se(c)}break;case"Escape":w();break;case"Tab":w();break}},en=[a.field,a[`field--${I}`],He].filter(Boolean).join(" "),nn=[a.trigger,a[`trigger--${I}`],a[`trigger--${A}`],y&&a["trigger--disabled"],g&&a["trigger--open"]].filter(Boolean).join(" "),tn=g?mn:hn,ln=I==="large"?"default":"small";return e.jsxs("div",{ref:U,className:en,children:[l&&e.jsx("label",{htmlFor:le,className:a.label,children:l}),e.jsxs("div",{className:nn,onClick:Qe,onKeyDown:Ze,role:"combobox","aria-haspopup":"listbox","aria-expanded":g,"aria-controls":F,"aria-disabled":y,tabIndex:y?-1:0,id:le,"aria-label":ne,children:[Z&&e.jsx("span",{className:a.leadingIcon,"aria-hidden":"true",children:e.jsx(Z,{className:a.iconSvg})}),u&&x.length>0&&e.jsx("div",{className:a.tagArea,children:Ke.map(n=>e.jsx(dn,{label:n.label,size:ln,colour:"default",variant:"filled",showRemove:!0,onRemove:()=>Xe(n.id),disabled:y},n.id))}),q&&g?e.jsx(cn,{inputRef:ae,value:$,onChange:n=>H(n.target.value),onClick:n=>n.stopPropagation(),placeholder:i,disabled:y,inputProps:{className:a.nativeInput,"aria-label":"Search options"},classes:{root:a.inputRoot,input:a.nativeInput}}):e.jsx("span",{className:[a.displayText,!re&&a["displayText--placeholder"],y&&a["displayText--disabled"]].filter(Boolean).join(" "),children:u?x.length===0?i:null:(K==null?void 0:K.label)??i}),e.jsxs("span",{className:a.actions,children:[Ge&&e.jsx("button",{type:"button",className:a.clearBtn,onClick:Je,"aria-label":"Clear selection",tabIndex:-1,children:e.jsx(rn,{className:a.clearIcon})}),e.jsx("span",{className:a.chevron,"aria-hidden":"true",children:e.jsx(tn,{className:a.chevronIcon})})]})]}),g&&e.jsx("ul",{id:F,role:"listbox","aria-multiselectable":u,"aria-label":l??ne??"Options",className:[a.menu,a[`menu--${I}`]].join(" "),children:k.length===0?e.jsx("li",{className:a.emptyState,"aria-disabled":"true",children:"No matching options"}):k.map((n,c)=>{const S=u?x.includes(n.id):n.id===h,f=c===L,de=n.leadingIcon,an=[a.option,a[`option--${I}`],S&&a["option--selected"],f&&a["option--active"],n.disabled&&a["option--disabled"]].filter(Boolean).join(" ");return e.jsxs("li",{id:`${F}-opt-${c}`,role:"option","aria-selected":S,"aria-disabled":n.disabled,className:an,onPointerDown:on=>{on.preventDefault(),u?ie(n):se(n)},onPointerEnter:()=>j(c),onPointerLeave:()=>j(-1),children:[de&&e.jsx("span",{className:a.option__icon,"aria-hidden":"true",children:e.jsx(de,{className:a.option__iconSvg})}),e.jsx("span",{className:a.option__label,children:n.label}),u?e.jsx(pn,{checked:S,disabled:n.disabled,tabIndex:-1,className:a.option__checkbox,size:"small",sx:{padding:0,color:"var(--global-color-neutral-gray-300)","&.Mui-checked":{color:"var(--dropdown-checkbox-color)"}}}):f&&e.jsx("span",{className:a.option__chevron,"aria-hidden":"true",children:e.jsx(sn,{className:a.option__iconSvg})})]},n.id)})}),ee&&e.jsx("span",{className:[a.helper,A!=="default"&&a[`helper--${A}`]].filter(Boolean).join(" "),role:A==="error"?"alert":void 0,children:ee})]})};s.__docgenInfo={description:`Dropdown — a select/combobox input built on MUI primitives.

**MUI Foundation**: \`InputBase\` (trigger), \`Checkbox\` (multi-select)
— both unstyled accessible primitives; all visual treatment applied
via design-token CSS Modules.

**Sizes**: small | default | large
**States**: default | error | warning | success | disabled

**Modes**:
- Single-select: click to select one option; shows selected label in trigger.
- Multi-select (\`multiSelect\`): checkboxes; selected options shown as Tag chips.
- Searchable (\`searchable\`): typing in the trigger filters the option list.`,methods:[],displayName:"Dropdown",props:{label:{required:!1,tsType:{name:"string"},description:"Field label displayed above the trigger"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text shown when nothing is selected",defaultValue:{value:"'Select an option'",computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"Array of selectable options"},value:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:"Currently selected option id (single-select, controlled)",defaultValue:{value:"null",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number | null, option: DropdownOption | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},name:"value"},{type:{name:"union",raw:"DropdownOption | null",elements:[{name:"DropdownOption"},{name:"null"}]},name:"option"}],return:{name:"void"}}},description:"Called with the new option id (or null when cleared)"},multiSelect:{required:!1,tsType:{name:"boolean"},description:"Enable multi-select mode with checkboxes",defaultValue:{value:"false",computed:!1}},values:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"Currently selected option ids (multi-select, controlled)",defaultValue:{value:"[]",computed:!1}},onMultiChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: (string | number)[], options: DropdownOption[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},name:"values"},{type:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},name:"options"}],return:{name:"void"}}},description:"Called with the updated selection array"},searchable:{required:!1,tsType:{name:"boolean"},description:`Enable keyboard search within the open dropdown.
The user types in the trigger input to filter the option list.`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Visual size of the trigger and menu items",defaultValue:{value:"'default'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'warning' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"}]},description:"Validation state — drives border and helper text colour",defaultValue:{value:"'default'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Leading icon rendered inside the trigger on the left"},clearable:{required:!1,tsType:{name:"boolean"},description:`Show a clear (×) button in the trigger when a selection exists.
Only relevant for single-select — multi-select always shows clear when values exist.`,defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper / validation text shown below the trigger"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the dropdown",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTML id for the trigger input"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the root wrapper"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label when no visible label is provided"}}};const r=X(e.jsx("path",{d:"M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"})),_=[{id:1,label:"Menu item",leadingIcon:r},{id:2,label:"Menu item",leadingIcon:r},{id:3,label:"Menu item",leadingIcon:r},{id:4,label:"Menu item",leadingIcon:r}],On=[{id:1,label:"Menu item",leadingIcon:r},{id:2,label:"Label",leadingIcon:qe},{id:3,label:"Menu item",leadingIcon:r},{id:4,label:"Menu item",leadingIcon:r}],T={padding:"24px",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-md, 8px)",display:"flex",flexDirection:"column",gap:"24px"},Q={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},J=({size:l="default"})=>{const[i,t]=d.useState(null);return e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:_,value:i,onChange:h=>t(h),leadingIcon:r,clearable:!0,size:l})},Wn=({size:l="default"})=>{const[i,t]=d.useState([2]);return e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:On,multiSelect:!0,values:i,onMultiChange:h=>t(h),leadingIcon:r,size:l})},Nn=()=>{const[l,i]=d.useState(3);return e.jsx(s,{label:"Input name",placeholder:"Type to search…",options:_,value:l,onChange:t=>i(t),leadingIcon:un,searchable:!0,clearable:!0})},Fe=()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"Dropdown",subtitle:"A select / combobox input that supports single selection, multi-selection with tag chips, keyboard-search filtering, and full keyboard navigation. Built on MUI InputBase and Checkbox primitives with all visual treatment via design-token CSS Modules."}),e.jsxs(o.Section,{title:"MUI Foundation",children:[e.jsxs(o.BodyText,{children:["The Dropdown is built on two MUI primitives — ",e.jsx("strong",{children:"InputBase"})," (used as the search input when ",e.jsx("code",{children:"searchable"})," is enabled) and ",e.jsx("strong",{children:"Checkbox"})," (used for each option in multi-select mode). Both are unstyled, accessible primitives; all visual treatment is applied via ",e.jsx("code",{children:"--dropdown-*"})," design-token CSS Modules. No MUI theme override is needed."]}),e.jsx(o.CodeBlock,{children:`import InputBase from '@mui/material/InputBase';   // search input primitive
import Checkbox  from '@mui/material/Checkbox';      // multi-select option tick

// Usage:
<Dropdown
  label="Select a region"
  options={options}
  leadingIcon={LocationIcon}
  searchable
  clearable
/>

// Multi-select:
<Dropdown
  multiSelect
  values={selected}
  onMultiChange={(ids) => setSelected(ids)}
  options={options}
/>`})]}),e.jsxs(o.Section,{title:"Anatomy",children:[e.jsxs(o.BodyText,{children:["The Dropdown is composed of three visual regions: the ",e.jsx("strong",{children:"trigger"})," (the clickable row the user sees when the menu is closed), the ",e.jsx("strong",{children:"menu panel"})," ","(the list of options shown when open), and the optional ",e.jsx("strong",{children:"helper text"})," ","shown below the trigger for validation feedback."]}),e.jsx(o.Anatomy,{preview:e.jsx("div",{style:{padding:"16px",maxWidth:320},children:e.jsx(J,{})}),parts:[{id:1,name:"Label",token:`--dropdown-label-font
--dropdown-label-color`,description:"Optional field label above the trigger, using the primary brand font."},{id:2,name:"Leading icon",token:`--dropdown-icon-color
--dropdown-icon-size-default`,description:"Optional icon on the left of the trigger indicating the field context."},{id:3,name:"Display text / tag chips",token:`--dropdown-text-color
--dropdown-placeholder-color`,description:"Shows the selected option label (single-select) or tag chips (multi-select). Shows placeholder when nothing is selected."},{id:4,name:"Clear button (×)",token:"--dropdown-clear-color",description:"Appears when a value is selected and clearable is true. Resets the selection on click."},{id:5,name:"Chevron",token:"--dropdown-chevron-color",description:"Indicates open/closed state. Rotates to ExpandLess when the menu is open."},{id:6,name:"Menu option",token:`--dropdown-option-font
--dropdown-option-selected-bg`,description:"Each option row has an optional leading icon, label, and trailing checkbox (multi) or chevron-right (keyboard active)."}]})]}),e.jsxs(o.Section,{title:"Single Select",children:[e.jsxs(o.BodyText,{children:["Pass ",e.jsx("code",{children:"value"})," and ",e.jsx("code",{children:"onChange"})," to control a single selection. The selected option's label replaces the placeholder in the trigger. Add"," ",e.jsx("code",{children:"clearable"})," to show the × button when a value is selected."]}),e.jsx("div",{style:{...T,maxWidth:320},children:e.jsx(J,{})})]}),e.jsxs(o.Section,{title:"Multi-Select",children:[e.jsxs(o.BodyText,{children:["Enable ",e.jsx("code",{children:"multiSelect"})," and pass ",e.jsx("code",{children:"values"})," +"," ",e.jsx("code",{children:"onMultiChange"}),". Each option renders a checkbox; selected options appear as Tag chips inside the trigger and can be individually removed. The clear (×) button removes all selections at once."]}),e.jsx("div",{style:{...T,maxWidth:320},children:e.jsx(Wn,{})})]}),e.jsxs(o.Section,{title:"Searchable",children:[e.jsxs(o.BodyText,{children:["Add ",e.jsx("code",{children:"searchable"})," to allow the user to type in the trigger when the dropdown is open. The option list filters in real time against the typed query. Full keyboard navigation is supported: ",e.jsx("kbd",{children:"↑"})," / ",e.jsx("kbd",{children:"↓"})," to move, ",e.jsx("kbd",{children:"Enter"})," to select, ",e.jsx("kbd",{children:"Escape"})," to dismiss."]}),e.jsx("div",{style:{...T,maxWidth:320},children:e.jsx(Nn,{})})]}),e.jsxs(o.Section,{title:"Sizes",children:[e.jsxs(o.BodyText,{children:["Three sizes are available — ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and"," ",e.jsx("code",{children:"large"}),". The size prop controls the trigger height, padding, font size, and icon size across both the trigger and the open menu panel."]}),e.jsx("div",{style:T,children:["small","default","large"].map(l=>e.jsxs("div",{children:[e.jsx("div",{style:Q,children:l}),e.jsx(J,{size:l})]},l))})]}),e.jsxs(o.Section,{title:"Validation States",children:[e.jsxs(o.BodyText,{children:["The ",e.jsx("code",{children:"state"})," prop drives the trigger border colour and helper text colour. All four validation states are available in addition to the default and disabled styles."]}),e.jsxs("div",{style:T,children:[[{state:"default",text:void 0,label:"Default"},{state:"error",text:"This field is required.",label:"Error"},{state:"warning",text:"Are you sure about this selection?",label:"Warning"},{state:"success",text:"Selection confirmed.",label:"Success"}].map(({state:l,text:i,label:t})=>e.jsxs("div",{children:[e.jsx("div",{style:Q,children:t}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:_,state:l,helperText:i,leadingIcon:r})]},l)),e.jsxs("div",{children:[e.jsx("div",{style:Q,children:"Disabled"}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:_,disabled:!0,leadingIcon:r})]})]})]}),e.jsxs(o.Section,{title:"Design Tokens",children:[e.jsxs(o.BodyText,{children:["All visual values are driven by ",e.jsx("code",{children:"--dropdown-*"})," tokens defined in"," ",e.jsx("code",{children:"tokens.css"}),". Where appropriate, dropdown tokens alias back to their"," ",e.jsx("code",{children:"--simple-field-*"})," equivalents so both inputs share the same visual baseline."]}),e.jsx(o.Subsection,{title:"Layout & Spacing",children:e.jsx(o.TokenTable,{tokens:[{name:"--dropdown-height-small",description:"Trigger height — small (32 px via --simple-field-height-small)"},{name:"--dropdown-height-default",description:"Trigger height — default (44 px via --simple-field-height-default)"},{name:"--dropdown-height-large",description:"Trigger height — large (52 px via --simple-field-height-large)"},{name:"--dropdown-border-radius",description:"Trigger corner radius (4 px via --global-spacing-radius-4px)"},{name:"--dropdown-border-width",description:"Trigger border thickness (0.5 px via --global-spacing-stroke-0-5px)"},{name:"--dropdown-gap",description:"Gap between trigger elements (8 px via --global-spacing-sizing-8px)"},{name:"--dropdown-menu-max-height",description:"Maximum height of the open menu panel (280 px)"},{name:"--dropdown-menu-radius",description:"Bottom corner radius of the menu panel (6 px)"}]})}),e.jsx(o.Subsection,{title:"Colours — Trigger",children:e.jsx(o.TokenTable,{tokens:[{name:"--dropdown-bg",description:"Trigger background — white (--global-color-base-white)"},{name:"--dropdown-border-color",description:"Default border — neutral-gray-300 (#d2d5da)"},{name:"--dropdown-border-color-focus",description:"Focused / open border — brand-primary (#3776ce)"},{name:"--dropdown-text-color",description:"Selected value text — base-black (#1c1c1c)"},{name:"--dropdown-placeholder-color",description:"Placeholder text — neutral-gray-400 (#9ca3af)"},{name:"--dropdown-icon-color",description:"Leading icon default — neutral-gray-500"},{name:"--dropdown-chevron-color",description:"Chevron default — neutral-gray-500"},{name:"--dropdown-clear-color",description:"Clear button — neutral-gray-400"},{name:"--dropdown-bg-disabled",description:"Disabled background — neutral-gray-100 (#f3f4f6)"},{name:"--dropdown-border-color-error",description:"Error border — status-red (#ce2031)"},{name:"--dropdown-border-color-warning",description:"Warning border — status-dark-orange (#d07c06)"},{name:"--dropdown-border-color-success",description:"Success border — status-dark-green (#227f1a)"}]})}),e.jsx(o.Subsection,{title:"Colours — Menu Options",children:e.jsx(o.TokenTable,{tokens:[{name:"--dropdown-option-selected-bg",description:"Selected option background — primary-sky-blue-50 (#f4fcff)"},{name:"--dropdown-option-selected-color",description:"Selected option text — brand-primary (#3776ce)"},{name:"--dropdown-option-active-bg",description:"Keyboard-active option background — primary-sky-blue-100 (#d6f0fb)"},{name:"--dropdown-option-hover-bg",description:"Hovered option background — neutral-gray-50 (#f9fafb)"},{name:"--dropdown-checkbox-color",description:"Checked checkbox fill — brand-primary (#3776ce)"}]})})]}),e.jsx(o.Section,{title:"Usage Principles",children:e.jsxs(o.Principles,{children:[e.jsx(o.PrincipleCard,{number:1,title:"Use for 5+ options",children:"Prefer a Dropdown over radio buttons or a segmented control when there are five or more options. For fewer options, consider an inline control to reduce interaction cost."}),e.jsx(o.PrincipleCard,{number:2,title:"Always provide a placeholder",children:'The placeholder communicates what type of selection is expected. Keep it brief and descriptive — e.g. "Select a region" rather than just "Select".'}),e.jsx(o.PrincipleCard,{number:3,title:"Lead with context icons",children:"Use leading icons only when they add semantic meaning (e.g. a person icon for a user selector). Avoid decorative icons that add visual noise without aiding comprehension."}),e.jsx(o.PrincipleCard,{number:4,title:"Validate inline",children:"Surface errors, warnings, and success messages as helper text directly below the trigger using the state prop. Do not rely solely on toasts or page-level messages for form validation."})]})}),e.jsx(o.Section,{title:"Do and Don't",children:e.jsx(o.DosDonts,{doItem:{icon:e.jsx("div",{style:{width:"100%"},children:e.jsx(s,{label:"Country",placeholder:"Select a country",options:_,leadingIcon:r,size:"small"})}),label:"Use a clear, descriptive placeholder",description:"Give the user context about what they are selecting. A well-named placeholder removes the need for a separate instruction."},dontItem:{icon:e.jsx("div",{style:{width:"100%"},children:e.jsx(s,{placeholder:"Select",options:_,size:"small"})}),label:"Don't omit the label and placeholder",description:'Avoid using generic labels like "Select" with no supporting label. Users need context to understand what the field expects.'}})}),e.jsx(o.Section,{title:"Accessibility",children:e.jsx(o.BulletList,{items:[e.jsxs(e.Fragment,{children:["Trigger has ",e.jsx("code",{children:'role="combobox"'}),", ",e.jsx("code",{children:'aria-haspopup="listbox"'}),", and ",e.jsx("code",{children:"aria-expanded"})," — fully compliant ARIA combobox pattern."]}),e.jsxs(e.Fragment,{children:["Menu panel has ",e.jsx("code",{children:'role="listbox"'})," with ",e.jsx("code",{children:"aria-multiselectable"})," in multi-select mode."]}),e.jsxs(e.Fragment,{children:["Each option carries ",e.jsx("code",{children:'role="option"'}),", ",e.jsx("code",{children:"aria-selected"}),", and ",e.jsx("code",{children:"aria-disabled"}),"."]}),e.jsxs(e.Fragment,{children:["Full keyboard navigation: ",e.jsx("kbd",{children:"↑"})," / ",e.jsx("kbd",{children:"↓"})," to navigate, ",e.jsx("kbd",{children:"Enter"})," to select, ",e.jsx("kbd",{children:"Escape"})," to close, ",e.jsx("kbd",{children:"Tab"})," to dismiss."]}),e.jsxs(e.Fragment,{children:["The clear button exposes an explicit ",e.jsx("code",{children:'aria-label="Clear selection"'}),"."]}),e.jsxs(e.Fragment,{children:["Error states use ",e.jsx("code",{children:'role="alert"'})," on the helper text to announce validation messages to screen readers."]})]})}),e.jsx(o.Footer,{})]});Fe.__docgenInfo={description:"",methods:[],displayName:"DropdownDocs"};const ut={title:"Atoms/Input/Dropdown",component:s,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["small","default","large"],description:"Visual size of the trigger and menu items"},state:{control:"select",options:["default","error","warning","success"],description:"Validation / semantic state"},multiSelect:{control:"boolean",description:"Enable multi-select with checkboxes"},searchable:{control:"boolean",description:"Allow typing to filter options"},clearable:{control:"boolean",description:"Show a clear button when a value is selected"},disabled:{control:"boolean",description:"Disable the dropdown"}},args:{size:"default",state:"default",multiSelect:!1,searchable:!1,clearable:!1,disabled:!1}},m=[{id:1,label:"Menu item",leadingIcon:r},{id:2,label:"Menu item",leadingIcon:r},{id:3,label:"Menu item",leadingIcon:r},{id:4,label:"Menu item",leadingIcon:r}],Y=[{id:1,label:"Menu item",leadingIcon:r},{id:2,label:"Label",leadingIcon:qe},{id:3,label:"Menu item",leadingIcon:r},{id:4,label:"Menu item",leadingIcon:r}],p={fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},D={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-md, 8px)",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},E={name:"Documentation",render:()=>e.jsx(Fe,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},C={name:"Playground",render:l=>{const[i,t]=d.useState(null),[h,b]=d.useState([]);return l.multiSelect?e.jsx("div",{style:{maxWidth:320},children:e.jsx(s,{...l,options:Y,values:h,onMultiChange:u=>b(u)})}):e.jsx("div",{style:{maxWidth:320},children:e.jsx(s,{...l,options:m,value:i,onChange:u=>t(u)})})},args:{label:"Input name",placeholder:"Placeholder text",leadingIcon:r,clearable:!0}},z={name:"Default",render:()=>{const[l,i]=d.useState(null);return e.jsx("div",{style:{maxWidth:300},children:e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:m,value:l,onChange:t=>i(t),leadingIcon:r})})},parameters:{controls:{disable:!0}}},B={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:["small","default","large"].map(l=>{const[i,t]=d.useState(null);return e.jsxs("div",{children:[e.jsx("div",{style:p,children:l}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:m,value:i,onChange:h=>t(h),leadingIcon:r,clearable:!0,size:l})]},l)})}),parameters:{controls:{disable:!0}}},P={name:"Status — Single Select",render:()=>{const[l,i]=d.useState(3);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:320},children:[e.jsx("div",{style:p,children:"Closed (default)"}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:m,value:null,onChange:()=>{},leadingIcon:r}),e.jsx("div",{style:p,children:"Open — simple list (click to open)"}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:m,value:l,onChange:t=>i(t),leadingIcon:r,clearable:!0})]})},parameters:{controls:{disable:!0}}},M={name:"Status — Multi-Select",render:()=>{const[l,i]=d.useState([2]);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:Y,multiSelect:!0,values:l,onMultiChange:t=>i(t),leadingIcon:r})})},parameters:{controls:{disable:!0}}},V={name:"Status — Searchable",render:()=>{const[l,i]=d.useState(3);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(s,{label:"Input name",placeholder:"Type to search…",options:m,value:l,onChange:t=>i(t),leadingIcon:r,searchable:!0,clearable:!0})})},parameters:{controls:{disable:!0}}},O={name:"Status — Disabled",render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:m,disabled:!0,leadingIcon:r})}),parameters:{controls:{disable:!0}}},W={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:360},children:[[{key:"default",label:"Default / Closed",state:"default"},{key:"error",label:"Error",state:"error",helperText:"This field is required."},{key:"warning",label:"Warning",state:"warning",helperText:"Please review your selection."},{key:"success",label:"Success",state:"success",helperText:"Selection confirmed."}].map(({key:l,label:i,state:t,helperText:h})=>{const[b,u]=d.useState(l==="success"?1:null);return e.jsxs("div",{children:[e.jsx("div",{style:p,children:i}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:m,value:b,onChange:x=>u(x),state:t,helperText:h,leadingIcon:r,clearable:!0})]},l)}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Disabled"}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:m,disabled:!0,leadingIcon:r})]})]}),parameters:{controls:{disable:!0}}},N={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:480,padding:"24px"},children:[e.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontWeight:600,fontSize:"14px",margin:0},children:"Dropdown = Trigger + Menu panel"}),e.jsxs("div",{style:D,children:[e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Trigger (closed)"}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:m,leadingIcon:r})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Trigger with leading icon + tags (multi-select)"}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:Y,multiSelect:!0,values:[2],onMultiChange:()=>{},leadingIcon:r})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Searchable trigger with cursor"}),e.jsx(s,{label:"Input name",placeholder:"Type to search…",options:m,searchable:!0,leadingIcon:r})]})]}),e.jsx("code",{style:{fontSize:"11px",background:"var(--global-color-neutral-gray-100)",padding:"8px 12px",borderRadius:"4px"},children:"<Dropdown leadingIcon={AppsIcon} searchable multiSelect clearable />"})]}),parameters:{controls:{disable:!0}}},R={name:"Full Design Matrix",render:()=>{const l=["small","default","large"],i=["default","error","warning","success"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{...p,fontSize:"14px",marginBottom:"16px"},children:"Single Select — Sizes"}),e.jsx("div",{style:D,children:l.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:p,children:t}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:m,leadingIcon:r,clearable:!0,size:t})]},t))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...p,fontSize:"14px",marginBottom:"16px"},children:"Single Select — Validation States"}),e.jsxs("div",{style:D,children:[i.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:p,children:t}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:m,leadingIcon:r,state:t,helperText:t!=="default"?`${t} helper text`:void 0})]},t)),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"disabled"}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:m,leadingIcon:r,disabled:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...p,fontSize:"14px",marginBottom:"16px"},children:"Multi-Select — Sizes"}),e.jsx("div",{style:D,children:l.map(t=>e.jsxs("div",{children:[e.jsxs("div",{style:p,children:[t," — 1 selected"]}),e.jsx(s,{label:"Input name",placeholder:"Placeholder text",options:Y,multiSelect:!0,values:[2],onMultiChange:()=>{},leadingIcon:r,size:t})]},t))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...p,fontSize:"14px",marginBottom:"16px"},children:"Searchable"}),e.jsx("div",{style:D,children:l.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:p,children:t}),e.jsx(s,{label:"Input name",placeholder:"Type to search…",options:m,searchable:!0,clearable:!0,leadingIcon:r,size:t})]},t))})]})]})},parameters:{controls:{disable:!0}}};var ce,pe,ue;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <DropdownDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen'
  }
}`,...(ue=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var he,me,ge;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [val, setVal] = useState<string | number | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [vals, setVals] = useState<(string | number)[]>([]);
    return args.multiSelect ? <div style={{
      maxWidth: 320
    }}>
        <Dropdown {...args} options={mixedOptions} values={vals} onMultiChange={v => setVals(v)} />
      </div> : <div style={{
      maxWidth: 320
    }}>
        <Dropdown {...args} options={baseOptions} value={val} onChange={v => setVal(v)} />
      </div>;
  },
  args: {
    label: 'Input name',
    placeholder: 'Placeholder text',
    leadingIcon: AppsIcon,
    clearable: true
  }
}`,...(ge=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var xe,be,ve;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [val, setVal] = useState<string | number | null>(null);
    return <div style={{
      maxWidth: 300
    }}>
        <Dropdown label="Input name" placeholder="Placeholder text" options={baseOptions} value={val} onChange={v => setVal(v)} leadingIcon={AppsIcon} />
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ve=(be=z.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var fe,ye,Se;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 320
  }}>
      {(['small', 'default', 'large'] as const).map(size => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [val, setVal] = useState<string | number | null>(null);
      return <div key={size}>
            <div style={LABEL_STYLE}>{size}</div>
            <Dropdown label="Input name" placeholder="Placeholder text" options={baseOptions} value={val} onChange={v => setVal(v)} leadingIcon={AppsIcon} clearable size={size} />
          </div>;
    })}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Se=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var je,we,_e;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Status — Single Select',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [val, setVal] = useState<string | number | null>(3);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: 320
    }}>
        <div style={LABEL_STYLE}>Closed (default)</div>
        <Dropdown label="Input name" placeholder="Placeholder text" options={baseOptions} value={null} onChange={() => {}} leadingIcon={AppsIcon} />

        <div style={LABEL_STYLE}>Open — simple list (click to open)</div>
        <Dropdown label="Input name" placeholder="Placeholder text" options={baseOptions} value={val} onChange={v => setVal(v)} leadingIcon={AppsIcon} clearable />
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_e=(we=P.parameters)==null?void 0:we.docs)==null?void 0:_e.source}}};var Ie,ke,Te;M.parameters={...M.parameters,docs:{...(Ie=M.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Status — Multi-Select',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [vals, setVals] = useState<(string | number)[]>([2]);
    return <div style={{
      maxWidth: 320
    }}>
        <Dropdown label="Input name" placeholder="Placeholder text" options={mixedOptions} multiSelect values={vals} onMultiChange={v => setVals(v)} leadingIcon={AppsIcon} />
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Te=(ke=M.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var De,Ae,Le;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Status — Searchable',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [val, setVal] = useState<string | number | null>(3);
    return <div style={{
      maxWidth: 320
    }}>
        <Dropdown label="Input name" placeholder="Type to search…" options={baseOptions} value={val} onChange={v => setVal(v)} leadingIcon={AppsIcon} searchable clearable />
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Le=(Ae=V.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source}}};var Ee,Ce,ze;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Status — Disabled',
  render: () => <div style={{
    maxWidth: 320
  }}>
      <Dropdown label="Input name" placeholder="Placeholder text" options={baseOptions} disabled leadingIcon={AppsIcon} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ze=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:ze.source}}};var Be,Pe,Me;W.parameters={...W.parameters,docs:{...(Be=W.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: 360
  }}>
      {[{
      key: 'default',
      label: 'Default / Closed',
      state: 'default' as const
    }, {
      key: 'error',
      label: 'Error',
      state: 'error' as const,
      helperText: 'This field is required.'
    }, {
      key: 'warning',
      label: 'Warning',
      state: 'warning' as const,
      helperText: 'Please review your selection.'
    }, {
      key: 'success',
      label: 'Success',
      state: 'success' as const,
      helperText: 'Selection confirmed.'
    }].map(({
      key,
      label,
      state,
      helperText
    }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [val, setVal] = useState<string | number | null>(key === 'success' ? 1 : null);
      return <div key={key}>
            <div style={LABEL_STYLE}>{label}</div>
            <Dropdown label="Input name" placeholder="Placeholder text" options={baseOptions} value={val} onChange={v => setVal(v)} state={state} helperText={helperText} leadingIcon={AppsIcon} clearable />
          </div>;
    })}
      <div>
        <div style={LABEL_STYLE}>Disabled</div>
        <Dropdown label="Input name" placeholder="Placeholder text" options={baseOptions} disabled leadingIcon={AppsIcon} />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Me=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};var Ve,Oe,We;N.parameters={...N.parameters,docs:{...(Ve=N.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: 480,
    padding: '24px'
  }}>
      <h3 style={{
      fontFamily: 'var(--brand-font-primary)',
      fontWeight: 600,
      fontSize: '14px',
      margin: 0
    }}>
        Dropdown = Trigger + Menu panel
      </h3>
      <div style={CARD_STYLE}>
        <div>
          <div style={LABEL_STYLE}>Trigger (closed)</div>
          <Dropdown label="Input name" placeholder="Placeholder text" options={baseOptions} leadingIcon={AppsIcon} />
        </div>
        <div>
          <div style={LABEL_STYLE}>Trigger with leading icon + tags (multi-select)</div>
          <Dropdown label="Input name" placeholder="Placeholder text" options={mixedOptions} multiSelect values={[2]} onMultiChange={() => {}} leadingIcon={AppsIcon} />
        </div>
        <div>
          <div style={LABEL_STYLE}>Searchable trigger with cursor</div>
          <Dropdown label="Input name" placeholder="Type to search…" options={baseOptions} searchable leadingIcon={AppsIcon} />
        </div>
      </div>
      <code style={{
      fontSize: '11px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '8px 12px',
      borderRadius: '4px'
    }}>
        {'<Dropdown leadingIcon={AppsIcon} searchable multiSelect clearable />'}
      </code>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(We=(Oe=N.parameters)==null?void 0:Oe.docs)==null?void 0:We.source}}};var Ne,Re,Ye;R.parameters={...R.parameters,docs:{...(Ne=R.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const sizes = ['small', 'default', 'large'] as const;
    const states = ['default', 'error', 'warning', 'success'] as const;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '48px'
    }}>
        {/* Single select × size */}
        <div>
          <div style={{
          ...LABEL_STYLE,
          fontSize: '14px',
          marginBottom: '16px'
        }}>
            Single Select — Sizes
          </div>
          <div style={CARD_STYLE}>
            {sizes.map(size => <div key={size}>
                <div style={LABEL_STYLE}>{size}</div>
                <Dropdown label="Input name" placeholder="Placeholder text" options={baseOptions} leadingIcon={AppsIcon} clearable size={size} />
              </div>)}
          </div>
        </div>

        {/* Single select × states */}
        <div>
          <div style={{
          ...LABEL_STYLE,
          fontSize: '14px',
          marginBottom: '16px'
        }}>
            Single Select — Validation States
          </div>
          <div style={CARD_STYLE}>
            {states.map(state => <div key={state}>
                <div style={LABEL_STYLE}>{state}</div>
                <Dropdown label="Input name" placeholder="Placeholder text" options={baseOptions} leadingIcon={AppsIcon} state={state} helperText={state !== 'default' ? \`\${state} helper text\` : undefined} />
              </div>)}
            <div>
              <div style={LABEL_STYLE}>disabled</div>
              <Dropdown label="Input name" placeholder="Placeholder text" options={baseOptions} leadingIcon={AppsIcon} disabled />
            </div>
          </div>
        </div>

        {/* Multi-select × size */}
        <div>
          <div style={{
          ...LABEL_STYLE,
          fontSize: '14px',
          marginBottom: '16px'
        }}>
            Multi-Select — Sizes
          </div>
          <div style={CARD_STYLE}>
            {sizes.map(size => <div key={size}>
                <div style={LABEL_STYLE}>{size} — 1 selected</div>
                <Dropdown label="Input name" placeholder="Placeholder text" options={mixedOptions} multiSelect values={[2]} onMultiChange={() => {}} leadingIcon={AppsIcon} size={size} />
              </div>)}
          </div>
        </div>

        {/* Searchable */}
        <div>
          <div style={{
          ...LABEL_STYLE,
          fontSize: '14px',
          marginBottom: '16px'
        }}>
            Searchable
          </div>
          <div style={CARD_STYLE}>
            {sizes.map(size => <div key={size}>
                <div style={LABEL_STYLE}>{size}</div>
                <Dropdown label="Input name" placeholder="Type to search…" options={baseOptions} searchable clearable leadingIcon={AppsIcon} size={size} />
              </div>)}
          </div>
        </div>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ye=(Re=R.parameters)==null?void 0:Re.docs)==null?void 0:Ye.source}}};const ht=["Documentation","Playground","Default","Sizes","StatusSingleSelect","StatusMultiSelect","StatusSearchable","StatusDisabled","AllInteractiveStates","ComponentBreakdown","FullDesignMatrix"];export{W as AllInteractiveStates,N as ComponentBreakdown,z as Default,E as Documentation,R as FullDesignMatrix,C as Playground,B as Sizes,O as StatusDisabled,M as StatusMultiSelect,V as StatusSearchable,P as StatusSingleSelect,ht as __namedExportsOrder,ut as default};
