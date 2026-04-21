import{r as d,j as e}from"./vendor-react-DbhTI_a3.js";import{u as rt,ay as ot,az as it,aA as s,y as Re,h as dt}from"./vendor-mui-icons--gk6VE72.js";import{T as ct}from"./Tag-CnwlJDjv.js";import{M as pt}from"./MenuMultiSelect-C6QUmUfO.js";import{I as ut}from"./vendor-mui-core-CjcFYzit.js";import{D as a}from"./DocsTemplate-IhRQ5m1Q.js";import"../vite-inject-mocker-entry.js";import"./vendor-misc-BD0vWy5z.js";import"./SelectItem-MYROxPQ4.js";import"./vendor-emotion-DfrZ-FAO.js";const ht="_field_1uxqk_8",mt="_label_1uxqk_18",gt="_trigger_1uxqk_29",xt="_leadingIcon_1uxqk_112",bt="_iconSvg_1uxqk_131",vt="_tagArea_1uxqk_136",ft="_displayText_1uxqk_154",yt="_inputRoot_1uxqk_179",St="_nativeInput_1uxqk_190",jt="_actions_1uxqk_217",wt="_clearBtn_1uxqk_227",It="_clearIcon_1uxqk_245",kt="_chevron_1uxqk_252",_t="_chevronIcon_1uxqk_268",Tt="_menu_1uxqk_280",Dt="_emptyState_1uxqk_301",At="_helper_1uxqk_314",i={field:ht,label:mt,trigger:gt,"trigger--open":"_trigger--open_1uxqk_50","trigger--small":"_trigger--small_1uxqk_61","trigger--default":"_trigger--default_1uxqk_66","trigger--large":"_trigger--large_1uxqk_71","trigger--error":"_trigger--error_1uxqk_77","trigger--warning":"_trigger--warning_1uxqk_86","trigger--success":"_trigger--success_1uxqk_95","trigger--disabled":"_trigger--disabled_1uxqk_104",leadingIcon:xt,"field--small":"_field--small_1uxqk_131",iconSvg:bt,"field--default":"_field--default_1uxqk_132","field--large":"_field--large_1uxqk_133",tagArea:vt,displayText:ft,"displayText--placeholder":"_displayText--placeholder_1uxqk_165","displayText--disabled":"_displayText--disabled_1uxqk_169",inputRoot:yt,nativeInput:St,actions:jt,clearBtn:wt,clearIcon:It,chevron:kt,chevronIcon:_t,menu:Tt,"menu--small":"_menu--small_1uxqk_296","menu--default":"_menu--default_1uxqk_297","menu--large":"_menu--large_1uxqk_298",emptyState:Dt,helper:At,"helper--error":"_helper--error_1uxqk_321","helper--warning":"_helper--warning_1uxqk_322","helper--success":"_helper--success_1uxqk_323"},r=({label:n,placeholder:o="Select an option",options:t,value:h=null,onChange:b,multiSelect:u=!1,values:x=[],onMultiChange:v,searchable:F=!1,size:I="default",state:D="default",leadingIcon:J,clearable:Ye=!1,helperText:X,disabled:y=!1,id:Ne,className:Ue,"aria-label":Z})=>{const ee=d.useId(),te=Ne??ee,le=`${ee}-listbox`,Y=d.useRef(null),ne=d.useRef(null),[g,ae]=d.useState(!1),[N,U]=d.useState(""),[$,A]=d.useState(-1),H=t.find(l=>l.id===h)??null,$e=t.filter(l=>x.includes(l.id)),S=F&&N.trim()?t.filter(l=>l.label.toLowerCase().includes(N.toLowerCase())):t,se=u?x.length>0:h!=null,He=!y&&se&&(Ye||u);d.useEffect(()=>{if(!g)return;const l=c=>{Y.current&&!Y.current.contains(c.target)&&j()};return document.addEventListener("pointerdown",l),()=>document.removeEventListener("pointerdown",l)},[g]),d.useEffect(()=>{g||A(-1)},[g]),d.useEffect(()=>{g||U("")},[g]);const K=()=>{y||(ae(!0),F&&setTimeout(()=>{var l;return(l=ne.current)==null?void 0:l.focus()},0))},j=d.useCallback(()=>{ae(!1),U(""),A(-1)},[]),Ke=()=>g?j():K(),re=d.useCallback(l=>{if(l.disabled)return;const c=l.id===h;b==null||b(c?null:l.id,c?null:l),j()},[h,b,j]),oe=d.useCallback(l=>{if(l.disabled)return;const c=x.includes(l.id)?x.filter(f=>f!==l.id):[...x,l.id],k=t.filter(f=>c.includes(f.id));v==null||v(c,k)},[x,t,v]),Ge=l=>{l.stopPropagation(),u?v==null||v([],[]):b==null||b(null,null)},Qe=l=>{const c=x.filter(f=>f!==l),k=t.filter(f=>c.includes(f.id));v==null||v(c,k)},Je=l=>{switch(l.key){case"ArrowDown":l.preventDefault(),g||K(),A(c=>Math.min(c+1,S.length-1));break;case"ArrowUp":l.preventDefault(),A(c=>Math.max(c-1,0));break;case"Enter":if(l.preventDefault(),!g){K();break}if($>=0&&S[$]){const c=S[$];u?oe(c):re(c)}break;case"Escape":j();break;case"Tab":j();break}},Xe=[i.field,i[`field--${I}`],Ue].filter(Boolean).join(" "),Ze=[i.trigger,i[`trigger--${I}`],i[`trigger--${D}`],y&&i["trigger--disabled"],g&&i["trigger--open"]].filter(Boolean).join(" "),et=g?ot:it,tt=I==="large"?"default":"small";return e.jsxs("div",{ref:Y,className:Xe,children:[n&&e.jsx("label",{htmlFor:te,className:i.label,children:n}),e.jsxs("div",{className:Ze,onClick:Ke,onKeyDown:Je,role:"combobox","aria-haspopup":"listbox","aria-expanded":g,"aria-controls":le,"aria-disabled":y,tabIndex:y?-1:0,id:te,"aria-label":Z,children:[J&&e.jsx("span",{className:i.leadingIcon,"aria-hidden":"true",children:e.jsx(J,{className:i.iconSvg})}),u&&x.length>0&&e.jsx("div",{className:i.tagArea,children:$e.map(l=>e.jsx(ct,{label:l.label,size:tt,colour:"default",variant:"filled",showRemove:!0,onRemove:()=>Qe(l.id),disabled:y},l.id))}),F&&g?e.jsx(ut,{inputRef:ne,value:N,onChange:l=>U(l.target.value),onClick:l=>l.stopPropagation(),placeholder:o,disabled:y,inputProps:{className:i.nativeInput,"aria-label":"Search options"},classes:{root:i.inputRoot,input:i.nativeInput}}):e.jsx("span",{className:[i.displayText,!se&&i["displayText--placeholder"],y&&i["displayText--disabled"]].filter(Boolean).join(" "),children:u?x.length===0?o:null:(H==null?void 0:H.label)??o}),e.jsxs("span",{className:i.actions,children:[He&&e.jsx("button",{type:"button",className:i.clearBtn,onClick:Ge,"aria-label":"Clear selection",tabIndex:-1,children:e.jsx(rt,{className:i.clearIcon})}),e.jsx("span",{className:i.chevron,"aria-hidden":"true",children:e.jsx(et,{className:i.chevronIcon})})]})]}),g&&e.jsx("ul",{id:le,role:"listbox","aria-multiselectable":u,"aria-label":n??Z??"Options",className:[i.menu,i[`menu--${I}`]].join(" "),children:S.length===0?e.jsx("li",{className:i.emptyState,"aria-disabled":"true",children:"No matching options"}):S.map((l,c)=>{const k=u?x.includes(l.id):l.id===h,f=S.length===1,lt=c===0,nt=c===S.length-1,at=f?"solo":lt?"top":nt?"bottom":"mid";return e.jsx("li",{role:"presentation",style:{listStyle:"none",margin:0,padding:0},children:e.jsx(pt,{label:l.label,position:at,size:I,selectionType:u?"checkbox":"none",selected:k,disabled:l.disabled,leadingIcon:l.leadingIcon,onClick:st=>{st.preventDefault(),u?oe(l):re(l)}})},l.id)})}),X&&e.jsx("span",{className:[i.helper,D!=="default"&&i[`helper--${D}`]].filter(Boolean).join(" "),role:D==="error"?"alert":void 0,children:X})]})};r.__docgenInfo={description:`Dropdown — a select/combobox input built on MUI primitives.

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
Only relevant for single-select — multi-select always shows clear when values exist.`,defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper / validation text shown below the trigger"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the dropdown",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTML id for the trigger input"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the root wrapper"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label when no visible label is provided"}}};const w=[{id:1,label:"Menu item",leadingIcon:s},{id:2,label:"Menu item",leadingIcon:s},{id:3,label:"Menu item",leadingIcon:s},{id:4,label:"Menu item",leadingIcon:s}],Lt=[{id:1,label:"Menu item",leadingIcon:s},{id:2,label:"Label",leadingIcon:Re},{id:3,label:"Menu item",leadingIcon:s},{id:4,label:"Menu item",leadingIcon:s}],_={padding:"24px",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-md, 8px)",display:"flex",flexDirection:"column",gap:"24px"},G={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},Q=({size:n="default"})=>{const[o,t]=d.useState(null);return e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:w,value:o,onChange:h=>t(h),leadingIcon:s,clearable:!0,size:n})},Et=({size:n="default"})=>{const[o,t]=d.useState([2]);return e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:Lt,multiSelect:!0,values:o,onMultiChange:h=>t(h),leadingIcon:s,size:n})},Ct=()=>{const[n,o]=d.useState(3);return e.jsx(r,{label:"Input name",placeholder:"Type to search…",options:w,value:n,onChange:t=>o(t),leadingIcon:dt,searchable:!0,clearable:!0})},Fe=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Dropdown",subtitle:"A select / combobox input that supports single selection, multi-selection with tag chips, keyboard-search filtering, and full keyboard navigation. Built on MUI InputBase and Checkbox primitives with all visual treatment via design-token CSS Modules."}),e.jsxs(a.Section,{title:"MUI Foundation",children:[e.jsxs(a.BodyText,{children:["The Dropdown is built on two MUI primitives — ",e.jsx("strong",{children:"InputBase"})," (used as the search input when ",e.jsx("code",{children:"searchable"})," is enabled) and ",e.jsx("strong",{children:"Checkbox"})," (used for each option in multi-select mode). Both are unstyled, accessible primitives; all visual treatment is applied via ",e.jsx("code",{children:"--dropdown-*"})," design-token CSS Modules. No MUI theme override is needed."]}),e.jsx(a.CodeBlock,{children:`import InputBase from '@mui/material/InputBase';   // search input primitive
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
/>`})]}),e.jsxs(a.Section,{title:"Anatomy",children:[e.jsxs(a.BodyText,{children:["The Dropdown is composed of three visual regions: the ",e.jsx("strong",{children:"trigger"})," (the clickable row the user sees when the menu is closed), the ",e.jsx("strong",{children:"menu panel"})," ","(the list of options shown when open), and the optional ",e.jsx("strong",{children:"helper text"})," ","shown below the trigger for validation feedback."]}),e.jsx(a.Anatomy,{preview:e.jsx("div",{style:{padding:"16px",maxWidth:320},children:e.jsx(Q,{})}),parts:[{id:1,name:"Label",token:`--dropdown-label-font
--dropdown-label-color`,description:"Optional field label above the trigger, using the primary brand font."},{id:2,name:"Leading icon",token:`--dropdown-icon-color
--dropdown-icon-size-default`,description:"Optional icon on the left of the trigger indicating the field context."},{id:3,name:"Display text / tag chips",token:`--dropdown-text-color
--dropdown-placeholder-color`,description:"Shows the selected option label (single-select) or tag chips (multi-select). Shows placeholder when nothing is selected."},{id:4,name:"Clear button (×)",token:"--dropdown-clear-color",description:"Appears when a value is selected and clearable is true. Resets the selection on click."},{id:5,name:"Chevron",token:"--dropdown-chevron-color",description:"Indicates open/closed state. Rotates to ExpandLess when the menu is open."},{id:6,name:"Menu option",token:`--dropdown-option-font
--dropdown-option-selected-bg`,description:"Each option row has an optional leading icon, label, and trailing checkbox (multi) or chevron-right (keyboard active)."}]})]}),e.jsxs(a.Section,{title:"Single Select",children:[e.jsxs(a.BodyText,{children:["Pass ",e.jsx("code",{children:"value"})," and ",e.jsx("code",{children:"onChange"})," to control a single selection. The selected option's label replaces the placeholder in the trigger. Add"," ",e.jsx("code",{children:"clearable"})," to show the × button when a value is selected."]}),e.jsx("div",{style:{..._,maxWidth:320},children:e.jsx(Q,{})})]}),e.jsxs(a.Section,{title:"Multi-Select",children:[e.jsxs(a.BodyText,{children:["Enable ",e.jsx("code",{children:"multiSelect"})," and pass ",e.jsx("code",{children:"values"})," +"," ",e.jsx("code",{children:"onMultiChange"}),". Each option renders a checkbox; selected options appear as Tag chips inside the trigger and can be individually removed. The clear (×) button removes all selections at once."]}),e.jsx("div",{style:{..._,maxWidth:320},children:e.jsx(Et,{})})]}),e.jsxs(a.Section,{title:"Searchable",children:[e.jsxs(a.BodyText,{children:["Add ",e.jsx("code",{children:"searchable"})," to allow the user to type in the trigger when the dropdown is open. The option list filters in real time against the typed query. Full keyboard navigation is supported: ",e.jsx("kbd",{children:"↑"})," / ",e.jsx("kbd",{children:"↓"})," to move, ",e.jsx("kbd",{children:"Enter"})," to select, ",e.jsx("kbd",{children:"Escape"})," to dismiss."]}),e.jsx("div",{style:{..._,maxWidth:320},children:e.jsx(Ct,{})})]}),e.jsxs(a.Section,{title:"Sizes",children:[e.jsxs(a.BodyText,{children:["Three sizes are available — ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and"," ",e.jsx("code",{children:"large"}),". The size prop controls the trigger height, padding, font size, and icon size across both the trigger and the open menu panel."]}),e.jsx("div",{style:_,children:["small","default","large"].map(n=>e.jsxs("div",{children:[e.jsx("div",{style:G,children:n}),e.jsx(Q,{size:n})]},n))})]}),e.jsxs(a.Section,{title:"Validation States",children:[e.jsxs(a.BodyText,{children:["The ",e.jsx("code",{children:"state"})," prop drives the trigger border colour and helper text colour. All four validation states are available in addition to the default and disabled styles."]}),e.jsxs("div",{style:_,children:[[{state:"default",text:void 0,label:"Default"},{state:"error",text:"This field is required.",label:"Error"},{state:"warning",text:"Are you sure about this selection?",label:"Warning"},{state:"success",text:"Selection confirmed.",label:"Success"}].map(({state:n,text:o,label:t})=>e.jsxs("div",{children:[e.jsx("div",{style:G,children:t}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:w,state:n,helperText:o,leadingIcon:s})]},n)),e.jsxs("div",{children:[e.jsx("div",{style:G,children:"Disabled"}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:w,disabled:!0,leadingIcon:s})]})]})]}),e.jsxs(a.Section,{title:"Design Tokens",children:[e.jsxs(a.BodyText,{children:["All visual values are driven by ",e.jsx("code",{children:"--dropdown-*"})," tokens defined in"," ",e.jsx("code",{children:"tokens.css"}),". Where appropriate, dropdown tokens alias back to their"," ",e.jsx("code",{children:"--simple-field-*"})," equivalents so both inputs share the same visual baseline."]}),e.jsx(a.Subsection,{title:"Layout & Spacing",children:e.jsx(a.TokenTable,{tokens:[{name:"--dropdown-height-small",description:"Trigger height — small (32 px via --simple-field-height-small)"},{name:"--dropdown-height-default",description:"Trigger height — default (44 px via --simple-field-height-default)"},{name:"--dropdown-height-large",description:"Trigger height — large (52 px via --simple-field-height-large)"},{name:"--dropdown-border-radius",description:"Trigger corner radius (4 px via --global-spacing-radius-4px)"},{name:"--dropdown-border-width",description:"Trigger border thickness (0.5 px via --global-spacing-stroke-0-5px)"},{name:"--dropdown-gap",description:"Gap between trigger elements (8 px via --global-spacing-sizing-8px)"},{name:"--dropdown-menu-max-height",description:"Maximum height of the open menu panel (280 px)"},{name:"--dropdown-menu-radius",description:"Bottom corner radius of the menu panel (6 px)"}]})}),e.jsx(a.Subsection,{title:"Colours — Trigger",children:e.jsx(a.TokenTable,{tokens:[{name:"--dropdown-bg",description:"Trigger background — white (--global-color-base-white)"},{name:"--dropdown-border-color",description:"Default border — neutral-gray-300 (#d2d5da)"},{name:"--dropdown-border-color-focus",description:"Focused / open border — brand-primary (#3776ce)"},{name:"--dropdown-text-color",description:"Selected value text — base-black (#1c1c1c)"},{name:"--dropdown-placeholder-color",description:"Placeholder text — neutral-gray-400 (#9ca3af)"},{name:"--dropdown-icon-color",description:"Leading icon default — neutral-gray-500"},{name:"--dropdown-chevron-color",description:"Chevron default — neutral-gray-500"},{name:"--dropdown-clear-color",description:"Clear button — neutral-gray-400"},{name:"--dropdown-bg-disabled",description:"Disabled background — neutral-gray-100 (#f3f4f6)"},{name:"--dropdown-border-color-error",description:"Error border — status-red (#ce2031)"},{name:"--dropdown-border-color-warning",description:"Warning border — status-dark-orange (#d07c06)"},{name:"--dropdown-border-color-success",description:"Success border — status-dark-green (#227f1a)"}]})}),e.jsx(a.Subsection,{title:"Colours — Menu Options",children:e.jsx(a.TokenTable,{tokens:[{name:"--dropdown-option-selected-bg",description:"Selected option background — primary-sky-blue-50 (#f4fcff)"},{name:"--dropdown-option-selected-color",description:"Selected option text — brand-primary (#3776ce)"},{name:"--dropdown-option-active-bg",description:"Keyboard-active option background — primary-sky-blue-100 (#d6f0fb)"},{name:"--dropdown-option-hover-bg",description:"Hovered option background — neutral-gray-50 (#f9fafb)"},{name:"--dropdown-checkbox-color",description:"Checked checkbox fill — brand-primary (#3776ce)"}]})})]}),e.jsx(a.Section,{title:"Usage Principles",children:e.jsxs(a.Principles,{children:[e.jsx(a.PrincipleCard,{number:1,title:"Use for 5+ options",children:"Prefer a Dropdown over radio buttons or a segmented control when there are five or more options. For fewer options, consider an inline control to reduce interaction cost."}),e.jsx(a.PrincipleCard,{number:2,title:"Always provide a placeholder",children:'The placeholder communicates what type of selection is expected. Keep it brief and descriptive — e.g. "Select a region" rather than just "Select".'}),e.jsx(a.PrincipleCard,{number:3,title:"Lead with context icons",children:"Use leading icons only when they add semantic meaning (e.g. a person icon for a user selector). Avoid decorative icons that add visual noise without aiding comprehension."}),e.jsx(a.PrincipleCard,{number:4,title:"Validate inline",children:"Surface errors, warnings, and success messages as helper text directly below the trigger using the state prop. Do not rely solely on toasts or page-level messages for form validation."})]})}),e.jsx(a.Section,{title:"Do and Don't",children:e.jsx(a.DosDonts,{doItem:{icon:e.jsx("div",{style:{width:"100%"},children:e.jsx(r,{label:"Country",placeholder:"Select a country",options:w,leadingIcon:s,size:"small"})}),label:"Use a clear, descriptive placeholder",description:"Give the user context about what they are selecting. A well-named placeholder removes the need for a separate instruction."},dontItem:{icon:e.jsx("div",{style:{width:"100%"},children:e.jsx(r,{placeholder:"Select",options:w,size:"small"})}),label:"Don't omit the label and placeholder",description:'Avoid using generic labels like "Select" with no supporting label. Users need context to understand what the field expects.'}})}),e.jsx(a.Section,{title:"Accessibility",children:e.jsx(a.BulletList,{items:[e.jsxs(e.Fragment,{children:["Trigger has ",e.jsx("code",{children:'role="combobox"'}),", ",e.jsx("code",{children:'aria-haspopup="listbox"'}),", and ",e.jsx("code",{children:"aria-expanded"})," — fully compliant ARIA combobox pattern."]}),e.jsxs(e.Fragment,{children:["Menu panel has ",e.jsx("code",{children:'role="listbox"'})," with ",e.jsx("code",{children:"aria-multiselectable"})," in multi-select mode."]}),e.jsxs(e.Fragment,{children:["Each option carries ",e.jsx("code",{children:'role="option"'}),", ",e.jsx("code",{children:"aria-selected"}),", and ",e.jsx("code",{children:"aria-disabled"}),"."]}),e.jsxs(e.Fragment,{children:["Full keyboard navigation: ",e.jsx("kbd",{children:"↑"})," / ",e.jsx("kbd",{children:"↓"})," to navigate, ",e.jsx("kbd",{children:"Enter"})," to select, ",e.jsx("kbd",{children:"Escape"})," to close, ",e.jsx("kbd",{children:"Tab"})," to dismiss."]}),e.jsxs(e.Fragment,{children:["The clear button exposes an explicit ",e.jsx("code",{children:'aria-label="Clear selection"'}),"."]}),e.jsxs(e.Fragment,{children:["Error states use ",e.jsx("code",{children:'role="alert"'})," on the helper text to announce validation messages to screen readers."]})]})}),e.jsx(a.Footer,{})]});Fe.__docgenInfo={description:"",methods:[],displayName:"DropdownDocs"};const Yt={title:"Atoms/Input/Dropdown",component:r,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["small","default","large"],description:"Visual size of the trigger and menu items"},state:{control:"select",options:["default","error","warning","success"],description:"Validation / semantic state"},multiSelect:{control:"boolean",description:"Enable multi-select with checkboxes"},searchable:{control:"boolean",description:"Allow typing to filter options"},clearable:{control:"boolean",description:"Show a clear button when a value is selected"},disabled:{control:"boolean",description:"Disable the dropdown"}},args:{size:"default",state:"default",multiSelect:!1,searchable:!1,clearable:!1,disabled:!1}},m=[{id:1,label:"Menu item",leadingIcon:s},{id:2,label:"Menu item",leadingIcon:s},{id:3,label:"Menu item",leadingIcon:s},{id:4,label:"Menu item",leadingIcon:s}],R=[{id:1,label:"Menu item",leadingIcon:s},{id:2,label:"Label",leadingIcon:Re},{id:3,label:"Menu item",leadingIcon:s},{id:4,label:"Menu item",leadingIcon:s}],p={fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},T={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-md, 8px)",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},L={name:"Documentation",render:()=>e.jsx(Fe,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},E={name:"Playground",render:n=>{const[o,t]=d.useState(null),[h,b]=d.useState([]);return n.multiSelect?e.jsx("div",{style:{maxWidth:320},children:e.jsx(r,{...n,options:R,values:h,onMultiChange:u=>b(u)})}):e.jsx("div",{style:{maxWidth:320},children:e.jsx(r,{...n,options:m,value:o,onChange:u=>t(u)})})},args:{label:"Input name",placeholder:"Placeholder text",leadingIcon:s,clearable:!0}},C={name:"Default",render:()=>{const[n,o]=d.useState(null);return e.jsx("div",{style:{maxWidth:300},children:e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:m,value:n,onChange:t=>o(t),leadingIcon:s})})},parameters:{controls:{disable:!0}}},B={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:["small","default","large"].map(n=>{const[o,t]=d.useState(null);return e.jsxs("div",{children:[e.jsx("div",{style:p,children:n}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:m,value:o,onChange:h=>t(h),leadingIcon:s,clearable:!0,size:n})]},n)})}),parameters:{controls:{disable:!0}}},q={name:"Status — Single Select",render:()=>{const[n,o]=d.useState(3);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:320},children:[e.jsx("div",{style:p,children:"Closed (default)"}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:m,value:null,onChange:()=>{},leadingIcon:s}),e.jsx("div",{style:p,children:"Open — simple list (click to open)"}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:m,value:n,onChange:t=>o(t),leadingIcon:s,clearable:!0})]})},parameters:{controls:{disable:!0}}},P={name:"Status — Multi-Select",render:()=>{const[n,o]=d.useState([2]);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:R,multiSelect:!0,values:n,onMultiChange:t=>o(t),leadingIcon:s})})},parameters:{controls:{disable:!0}}},z={name:"Status — Searchable",render:()=>{const[n,o]=d.useState(3);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(r,{label:"Input name",placeholder:"Type to search…",options:m,value:n,onChange:t=>o(t),leadingIcon:s,searchable:!0,clearable:!0})})},parameters:{controls:{disable:!0}}},M={name:"Status — Disabled",render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:m,disabled:!0,leadingIcon:s})}),parameters:{controls:{disable:!0}}},O={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:360},children:[[{key:"default",label:"Default / Closed",state:"default"},{key:"error",label:"Error",state:"error",helperText:"This field is required."},{key:"warning",label:"Warning",state:"warning",helperText:"Please review your selection."},{key:"success",label:"Success",state:"success",helperText:"Selection confirmed."}].map(({key:n,label:o,state:t,helperText:h})=>{const[b,u]=d.useState(n==="success"?1:null);return e.jsxs("div",{children:[e.jsx("div",{style:p,children:o}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:m,value:b,onChange:x=>u(x),state:t,helperText:h,leadingIcon:s,clearable:!0})]},n)}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Disabled"}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:m,disabled:!0,leadingIcon:s})]})]}),parameters:{controls:{disable:!0}}},V={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:480,padding:"24px"},children:[e.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontWeight:600,fontSize:"14px",margin:0},children:"Dropdown = Trigger + Menu panel"}),e.jsxs("div",{style:T,children:[e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Trigger (closed)"}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:m,leadingIcon:s})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Trigger with leading icon + tags (multi-select)"}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:R,multiSelect:!0,values:[2],onMultiChange:()=>{},leadingIcon:s})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Searchable trigger with cursor"}),e.jsx(r,{label:"Input name",placeholder:"Type to search…",options:m,searchable:!0,leadingIcon:s})]})]}),e.jsx("code",{style:{fontSize:"11px",background:"var(--global-color-neutral-gray-100)",padding:"8px 12px",borderRadius:"4px"},children:"<Dropdown leadingIcon={AppsIcon} searchable multiSelect clearable />"})]}),parameters:{controls:{disable:!0}}},W={name:"Full Design Matrix",render:()=>{const n=["small","default","large"],o=["default","error","warning","success"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{...p,fontSize:"14px",marginBottom:"16px"},children:"Single Select — Sizes"}),e.jsx("div",{style:T,children:n.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:p,children:t}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:m,leadingIcon:s,clearable:!0,size:t})]},t))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...p,fontSize:"14px",marginBottom:"16px"},children:"Single Select — Validation States"}),e.jsxs("div",{style:T,children:[o.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:p,children:t}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:m,leadingIcon:s,state:t,helperText:t!=="default"?`${t} helper text`:void 0})]},t)),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"disabled"}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:m,leadingIcon:s,disabled:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...p,fontSize:"14px",marginBottom:"16px"},children:"Multi-Select — Sizes"}),e.jsx("div",{style:T,children:n.map(t=>e.jsxs("div",{children:[e.jsxs("div",{style:p,children:[t," — 1 selected"]}),e.jsx(r,{label:"Input name",placeholder:"Placeholder text",options:R,multiSelect:!0,values:[2],onMultiChange:()=>{},leadingIcon:s,size:t})]},t))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...p,fontSize:"14px",marginBottom:"16px"},children:"Searchable"}),e.jsx("div",{style:T,children:n.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:p,children:t}),e.jsx(r,{label:"Input name",placeholder:"Type to search…",options:m,searchable:!0,clearable:!0,leadingIcon:s,size:t})]},t))})]})]})},parameters:{controls:{disable:!0}}};var ie,de,ce;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(de=L.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ue,he;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var me,ge,xe;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(xe=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var be,ve,fe;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(fe=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var ye,Se,je;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(je=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var we,Ie,ke;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ke=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};var _e,Te,De;z.parameters={...z.parameters,docs:{...(_e=z.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(De=(Te=z.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Ae,Le,Ee;M.parameters={...M.parameters,docs:{...(Ae=M.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ee=(Le=M.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var Ce,Be,qe;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(qe=(Be=O.parameters)==null?void 0:Be.docs)==null?void 0:qe.source}}};var Pe,ze,Me;V.parameters={...V.parameters,docs:{...(Pe=V.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Me=(ze=V.parameters)==null?void 0:ze.docs)==null?void 0:Me.source}}};var Oe,Ve,We;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(We=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};const Nt=["Documentation","Playground","Default","Sizes","StatusSingleSelect","StatusMultiSelect","StatusSearchable","StatusDisabled","AllInteractiveStates","ComponentBreakdown","FullDesignMatrix"];export{O as AllInteractiveStates,V as ComponentBreakdown,C as Default,L as Documentation,W as FullDesignMatrix,E as Playground,B as Sizes,M as StatusDisabled,P as StatusMultiSelect,z as StatusSearchable,q as StatusSingleSelect,Nt as __namedExportsOrder,Yt as default};
