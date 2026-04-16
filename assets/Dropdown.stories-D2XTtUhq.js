import{r as u,j as e}from"./iframe-CBQdHsyh.js";import{C as xt}from"./Close-DOCGfSTr.js";import{c as U}from"./createSvgIcon-DV1ClVxq.js";import{C as bt}from"./ChevronRight-BybhV3sY.js";import{T as vt}from"./Tag-Hbk4smmK.js";import{u as ft,I as yt}from"./InputBase-C3MkaX5A.js";import{c as we,g as st,a as it,d as X,b as rt,s as _e,r as dt,u as jt}from"./DefaultPropsProvider-D7Be_VqA.js";import{u as Ie}from"./useSlot-Ch12GgbQ.js";import{B as wt}from"./ButtonBase-Bn31YUVn.js";import{m as It}from"./memoTheme-CYoQGSRU.js";import{c as ke}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{D as r}from"./DocsTemplate-Di_esJpO.js";import{P as ct}from"./Person-ew2WWpco.js";import{S as _t}from"./Search-CgLNBo6I.js";import"./preload-helper-Dp1pzeXC.js";import"./index-7eeDsgRb.js";import"./useTheme-BaEkiok6.js";import"./useEventCallback-CY10U09m.js";import"./useForkRef-BgBEi7QV.js";import"./ownerWindow-DIR61fab.js";import"./isHostComponent-DVu5iVWx.js";import"./mergeSlotProps-9QNyLd45.js";import"./index-38fsmboO.js";function St(t){const{controlled:o,default:n}=t,{current:l}=u.useRef(o!==void 0),[g,h]=u.useState(n),c=l?o:g,s=u.useCallback(p=>{l||h(p)},[]);return[c,s]}function kt(t,o){const n=t.charCodeAt(2);return t[0]==="o"&&t[1]==="n"&&n>=65&&n<=90&&typeof o=="function"}function Tt(t,o){if(!t)return o;function n(c,s){const p={};return Object.keys(s).forEach(v=>{kt(v,s[v])&&typeof c[v]=="function"&&(p[v]=(...j)=>{c[v](...j),s[v](...j)})}),p}if(typeof t=="function"||typeof o=="function")return c=>{const s=typeof o=="function"?o(c):o,p=typeof t=="function"?t({...c,...s}):t,v=we(c==null?void 0:c.className,s==null?void 0:s.className,p==null?void 0:p.className),j=n(p,s);return{...s,...p,...j,...!!v&&{className:v},...(s==null?void 0:s.style)&&(p==null?void 0:p.style)&&{style:{...s.style,...p.style}},...(s==null?void 0:s.sx)&&(p==null?void 0:p.sx)&&{sx:[...Array.isArray(s.sx)?s.sx:[s.sx],...Array.isArray(p.sx)?p.sx:[p.sx]]}}};const l=o,g=n(t,l),h=we(l==null?void 0:l.className,t==null?void 0:t.className);return{...o,...t,...g,...!!h&&{className:h},...(l==null?void 0:l.style)&&(t==null?void 0:t.style)&&{style:{...l.style,...t.style}},...(l==null?void 0:l.sx)&&(t==null?void 0:t.sx)&&{sx:[...Array.isArray(l.sx)?l.sx:[l.sx],...Array.isArray(t.sx)?t.sx:[t.sx]]}}}function zt(t){return st("PrivateSwitchBase",t)}it("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ct=t=>{const{classes:o,checked:n,disabled:l,edge:g}=t,h={root:["root",n&&"checked",l&&"disabled",g&&`edge${X(g)}`],input:["input"]};return rt(h,zt,o)},Dt=_e(wt,{name:"MuiSwitchBase"})({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:t,ownerState:o})=>t==="start"&&o.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:t,ownerState:o})=>t==="end"&&o.size!=="small",style:{marginRight:-12}}]}),At=_e("input",{name:"MuiSwitchBase",shouldForwardProp:dt})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Lt=u.forwardRef(function(o,n){const{autoFocus:l,checked:g,checkedIcon:h,defaultChecked:c,disabled:s,disableFocusRipple:p=!1,edge:v=!1,icon:j,id:B,inputProps:H,inputRef:E,name:_,onBlur:W,onChange:M,onFocus:L,readOnly:C,required:O=!1,tabIndex:D,type:k,value:R,slots:y={},slotProps:Z={},...K}=o,[q,Y]=St({controlled:g,default:!!c}),w=ft(),G=x=>{L&&L(x),w&&w.onFocus&&w.onFocus(x)},ge=x=>{W&&W(x),w&&w.onBlur&&w.onBlur(x)},P=x=>{if(x.nativeEvent.defaultPrevented||C)return;const S=x.target.checked;Y(S),M&&M(x,S)};let F=s;w&&typeof F>"u"&&(F=w.disabled);const xe=k==="checkbox"||k==="radio",V={...o,checked:q,disabled:F,disableFocusRipple:p,edge:v},A=Ct(V),ee={slots:y,slotProps:{input:H,...Z}},[te,ne]=Ie("root",{ref:n,elementType:Dt,className:A.root,shouldForwardComponentProp:!0,externalForwardedProps:{...ee,component:"span",...K},getSlotProps:x=>({...x,onFocus:S=>{var T;(T=x.onFocus)==null||T.call(x,S),G(S)},onBlur:S=>{var T;(T=x.onBlur)==null||T.call(x,S),ge(S)}}),ownerState:V,additionalProps:{centerRipple:!0,focusRipple:!p,role:void 0,tabIndex:null}}),[be,ve]=Ie("input",{ref:E,elementType:At,className:A.input,externalForwardedProps:ee,getSlotProps:x=>({...x,onChange:S=>{var T;(T=x.onChange)==null||T.call(x,S),P(S)}}),ownerState:V,additionalProps:{autoFocus:l,checked:g,defaultChecked:c,disabled:F,id:xe?B:void 0,name:_,readOnly:C,required:O,tabIndex:D,type:k,...k==="checkbox"&&R===void 0?{}:{value:R}}});return e.jsxs(te,{...ne,children:[e.jsx(be,{...ve}),q?h:j]})}),Bt=U(e.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),Et=U(e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),Mt=U(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}));function Ot(t){return st("MuiCheckbox",t)}const fe=it("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Rt=t=>{const{classes:o,indeterminate:n,color:l,size:g}=t,h={root:["root",n&&"indeterminate",`color${X(l)}`,`size${X(g)}`]},c=rt(h,Ot,o);return{...o,...c}},Pt=_e(Lt,{shouldForwardProp:t=>dt(t)||t==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,n.indeterminate&&o.indeterminate,o[`size${X(n.size)}`],n.color!=="default"&&o[`color${X(n.color)}`]]}})(It(({theme:t})=>({color:(t.vars||t).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:t.alpha((t.vars||t).palette.action.active,(t.vars||t).palette.action.hoverOpacity)}}},...Object.entries(t.palette).filter(ke()).map(([o])=>({props:{color:o,disableRipple:!1},style:{"&:hover":{backgroundColor:t.alpha((t.vars||t).palette[o].main,(t.vars||t).palette.action.hoverOpacity)}}})),...Object.entries(t.palette).filter(ke()).map(([o])=>({props:{color:o},style:{[`&.${fe.checked}, &.${fe.indeterminate}`]:{color:(t.vars||t).palette[o].main},[`&.${fe.disabled}`]:{color:(t.vars||t).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),Ft=e.jsx(Et,{}),Vt=e.jsx(Bt,{}),Nt=e.jsx(Mt,{}),Wt=u.forwardRef(function(o,n){const l=jt({props:o,name:"MuiCheckbox"}),{checkedIcon:g=Ft,color:h="primary",icon:c=Vt,indeterminate:s=!1,indeterminateIcon:p=Nt,inputProps:v,size:j="medium",disableRipple:B=!1,className:H,slots:E={},slotProps:_={},...W}=l,M=s?p:c,L=s?p:g,C={...l,disableRipple:B,color:h,indeterminate:s,size:j},O=Rt(C),D=_.input??v,[k,R]=Ie("root",{ref:n,elementType:Pt,className:we(O.root,H),shouldForwardComponentProp:!0,externalForwardedProps:{slots:E,slotProps:_,...W},ownerState:C,additionalProps:{type:"checkbox",icon:u.cloneElement(M,{fontSize:M.props.fontSize??j}),checkedIcon:u.cloneElement(L,{fontSize:L.props.fontSize??j}),disableRipple:B,slots:E,slotProps:{input:Tt(typeof D=="function"?D(C):D,{"data-indeterminate":s})}}});return e.jsx(k,{...R,classes:O})}),qt=U(e.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})),Yt=U(e.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),$t="_field_1nzyf_8",Ut="_label_1nzyf_18",Ht="_trigger_1nzyf_29",Kt="_leadingIcon_1nzyf_112",Gt="_iconSvg_1nzyf_131",Qt="_tagArea_1nzyf_136",Jt="_displayText_1nzyf_154",Xt="_inputRoot_1nzyf_179",Zt="_nativeInput_1nzyf_190",en="_actions_1nzyf_217",tn="_clearBtn_1nzyf_227",nn="_clearIcon_1nzyf_245",on="_chevron_1nzyf_252",an="_chevronIcon_1nzyf_268",ln="_menu_1nzyf_275",sn="_option_1nzyf_297",rn="_option__label_1nzyf_339",dn="_option__icon_1nzyf_347",cn="_option__iconSvg_1nzyf_359",pn="_option__checkbox_1nzyf_365",un="_option__chevron_1nzyf_370",hn="_emptyState_1nzyf_379",mn="_helper_1nzyf_392",i={field:$t,label:Ut,trigger:Ht,"trigger--open":"_trigger--open_1nzyf_50","trigger--small":"_trigger--small_1nzyf_61","trigger--default":"_trigger--default_1nzyf_66","trigger--large":"_trigger--large_1nzyf_71","trigger--error":"_trigger--error_1nzyf_77","trigger--warning":"_trigger--warning_1nzyf_86","trigger--success":"_trigger--success_1nzyf_95","trigger--disabled":"_trigger--disabled_1nzyf_104",leadingIcon:Kt,"field--small":"_field--small_1nzyf_131",iconSvg:Gt,"field--default":"_field--default_1nzyf_132","field--large":"_field--large_1nzyf_133",tagArea:Qt,displayText:Jt,"displayText--placeholder":"_displayText--placeholder_1nzyf_165","displayText--disabled":"_displayText--disabled_1nzyf_169",inputRoot:Xt,nativeInput:Zt,actions:en,clearBtn:tn,clearIcon:nn,chevron:on,chevronIcon:an,menu:ln,"menu--small":"_menu--small_1nzyf_292","menu--default":"_menu--default_1nzyf_293","menu--large":"_menu--large_1nzyf_294",option:sn,"option--selected":"_option--selected_1nzyf_314","option--active":"_option--active_1nzyf_320","option--disabled":"_option--disabled_1nzyf_324",option__label:rn,option__icon:dn,option__iconSvg:cn,option__checkbox:pn,option__chevron:un,emptyState:hn,helper:mn,"helper--error":"_helper--error_1nzyf_399","helper--warning":"_helper--warning_1nzyf_400","helper--success":"_helper--success_1nzyf_401"},m=({label:t,placeholder:o="Select an option",options:n,value:l=null,onChange:g,multiSelect:h=!1,values:c=[],onMultiChange:s,searchable:p=!1,size:v="default",state:j="default",leadingIcon:B,clearable:H=!1,helperText:E,disabled:_=!1,id:W,className:M,"aria-label":L})=>{const C=u.useId(),O=W??C,D=`${C}-listbox`,k=u.useRef(null),R=u.useRef(null),[y,Z]=u.useState(!1),[K,q]=u.useState(""),[Y,w]=u.useState(-1),G=n.find(a=>a.id===l)??null,ge=n.filter(a=>c.includes(a.id)),P=p&&K.trim()?n.filter(a=>a.label.toLowerCase().includes(K.toLowerCase())):n,F=h?c.length>0:l!=null,xe=!_&&F&&(H||h);u.useEffect(()=>{if(!y)return;const a=b=>{k.current&&!k.current.contains(b.target)&&A()};return document.addEventListener("pointerdown",a),()=>document.removeEventListener("pointerdown",a)},[y]),u.useEffect(()=>{y||w(-1)},[y]),u.useEffect(()=>{y||q("")},[y]);const V=()=>{_||(Z(!0),p&&setTimeout(()=>{var a;return(a=R.current)==null?void 0:a.focus()},0))},A=u.useCallback(()=>{Z(!1),q(""),w(-1)},[]),ee=()=>y?A():V(),te=u.useCallback(a=>{if(a.disabled)return;const b=a.id===l;g==null||g(b?null:a.id,b?null:a),A()},[l,g,A]),ne=u.useCallback(a=>{if(a.disabled)return;const b=c.includes(a.id)?c.filter(z=>z!==a.id):[...c,a.id],N=n.filter(z=>b.includes(z.id));s==null||s(b,N)},[c,n,s]),be=a=>{a.stopPropagation(),h?s==null||s([],[]):g==null||g(null,null)},ve=a=>{const b=c.filter(z=>z!==a),N=n.filter(z=>b.includes(z.id));s==null||s(b,N)},x=a=>{switch(a.key){case"ArrowDown":a.preventDefault(),y||V(),w(b=>Math.min(b+1,P.length-1));break;case"ArrowUp":a.preventDefault(),w(b=>Math.max(b-1,0));break;case"Enter":if(a.preventDefault(),!y){V();break}if(Y>=0&&P[Y]){const b=P[Y];h?ne(b):te(b)}break;case"Escape":A();break;case"Tab":A();break}},S=[i.field,i[`field--${v}`],M].filter(Boolean).join(" "),T=[i.trigger,i[`trigger--${v}`],i[`trigger--${j}`],_&&i["trigger--disabled"],y&&i["trigger--open"]].filter(Boolean).join(" "),ut=y?Yt:qt,ht=v==="large"?"default":"small";return e.jsxs("div",{ref:k,className:S,children:[t&&e.jsx("label",{htmlFor:O,className:i.label,children:t}),e.jsxs("div",{className:T,onClick:ee,onKeyDown:x,role:"combobox","aria-haspopup":"listbox","aria-expanded":y,"aria-controls":D,"aria-disabled":_,tabIndex:_?-1:0,id:O,"aria-label":L,children:[B&&e.jsx("span",{className:i.leadingIcon,"aria-hidden":"true",children:e.jsx(B,{className:i.iconSvg})}),h&&c.length>0&&e.jsx("div",{className:i.tagArea,children:ge.map(a=>e.jsx(vt,{label:a.label,size:ht,colour:"blue",variant:"filled",showRemove:!0,onRemove:()=>ve(a.id),disabled:_},a.id))}),p&&y?e.jsx(yt,{inputRef:R,value:K,onChange:a=>q(a.target.value),onClick:a=>a.stopPropagation(),placeholder:o,disabled:_,inputProps:{className:i.nativeInput,"aria-label":"Search options"},classes:{root:i.inputRoot,input:i.nativeInput}}):e.jsx("span",{className:[i.displayText,!F&&i["displayText--placeholder"],_&&i["displayText--disabled"]].filter(Boolean).join(" "),children:h?c.length===0?o:null:(G==null?void 0:G.label)??o}),e.jsxs("span",{className:i.actions,children:[xe&&e.jsx("button",{type:"button",className:i.clearBtn,onClick:be,"aria-label":"Clear selection",tabIndex:-1,children:e.jsx(xt,{className:i.clearIcon})}),e.jsx("span",{className:i.chevron,"aria-hidden":"true",children:e.jsx(ut,{className:i.chevronIcon})})]})]}),y&&e.jsx("ul",{id:D,role:"listbox","aria-multiselectable":h,"aria-label":t??L??"Options",className:[i.menu,i[`menu--${v}`]].join(" "),children:P.length===0?e.jsx("li",{className:i.emptyState,"aria-disabled":"true",children:"No matching options"}):P.map((a,b)=>{const N=h?c.includes(a.id):a.id===l,z=b===Y,Se=a.leadingIcon,mt=[i.option,i[`option--${v}`],N&&i["option--selected"],z&&i["option--active"],a.disabled&&i["option--disabled"]].filter(Boolean).join(" ");return e.jsxs("li",{id:`${D}-opt-${b}`,role:"option","aria-selected":N,"aria-disabled":a.disabled,className:mt,onPointerDown:gt=>{gt.preventDefault(),h?ne(a):te(a)},onPointerEnter:()=>w(b),onPointerLeave:()=>w(-1),children:[Se&&e.jsx("span",{className:i.option__icon,"aria-hidden":"true",children:e.jsx(Se,{className:i.option__iconSvg})}),e.jsx("span",{className:i.option__label,children:a.label}),h?e.jsx(Wt,{checked:N,disabled:a.disabled,tabIndex:-1,className:i.option__checkbox,size:"small",sx:{padding:0,color:"var(--global-color-neutral-gray-300)","&.Mui-checked":{color:"var(--dropdown-checkbox-color)"}}}):z&&e.jsx("span",{className:i.option__chevron,"aria-hidden":"true",children:e.jsx(bt,{className:i.option__iconSvg})})]},a.id)})}),E&&e.jsx("span",{className:[i.helper,j!=="default"&&i[`helper--${j}`]].filter(Boolean).join(" "),role:j==="error"?"alert":void 0,children:E})]})};m.__docgenInfo={description:`Dropdown — a select/combobox input built on MUI primitives.

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
Only relevant for single-select — multi-select always shows clear when values exist.`,defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper / validation text shown below the trigger"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the dropdown",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTML id for the trigger input"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the root wrapper"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label when no visible label is provided"}}};const d=U(e.jsx("path",{d:"M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"})),$=[{id:1,label:"Menu item",leadingIcon:d},{id:2,label:"Menu item",leadingIcon:d},{id:3,label:"Menu item",leadingIcon:d},{id:4,label:"Menu item",leadingIcon:d}],gn=[{id:1,label:"Menu item",leadingIcon:d},{id:2,label:"Label",leadingIcon:ct},{id:3,label:"Menu item",leadingIcon:d},{id:4,label:"Menu item",leadingIcon:d}],Q={padding:"24px",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-md, 8px)",display:"flex",flexDirection:"column",gap:"24px"},ye={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},je=({size:t="default"})=>{const[o,n]=u.useState(null);return e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:$,value:o,onChange:l=>n(l),leadingIcon:d,clearable:!0,size:t})},xn=({size:t="default"})=>{const[o,n]=u.useState([2]);return e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:gn,multiSelect:!0,values:o,onMultiChange:l=>n(l),leadingIcon:d,size:t})},bn=()=>{const[t,o]=u.useState(3);return e.jsx(m,{label:"Input name",placeholder:"Type to search…",options:$,value:t,onChange:n=>o(n),leadingIcon:_t,searchable:!0,clearable:!0})},pt=()=>e.jsxs(r,{children:[e.jsx(r.Header,{title:"Dropdown",subtitle:"A select / combobox input that supports single selection, multi-selection with tag chips, keyboard-search filtering, and full keyboard navigation. Built on MUI InputBase and Checkbox primitives with all visual treatment via design-token CSS Modules."}),e.jsxs(r.Section,{title:"MUI Foundation",children:[e.jsxs(r.BodyText,{children:["The Dropdown is built on two MUI primitives — ",e.jsx("strong",{children:"InputBase"})," (used as the search input when ",e.jsx("code",{children:"searchable"})," is enabled) and ",e.jsx("strong",{children:"Checkbox"})," (used for each option in multi-select mode). Both are unstyled, accessible primitives; all visual treatment is applied via ",e.jsx("code",{children:"--dropdown-*"})," design-token CSS Modules. No MUI theme override is needed."]}),e.jsx(r.CodeBlock,{children:`import InputBase from '@mui/material/InputBase';   // search input primitive
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
/>`})]}),e.jsxs(r.Section,{title:"Anatomy",children:[e.jsxs(r.BodyText,{children:["The Dropdown is composed of three visual regions: the ",e.jsx("strong",{children:"trigger"})," (the clickable row the user sees when the menu is closed), the ",e.jsx("strong",{children:"menu panel"})," ","(the list of options shown when open), and the optional ",e.jsx("strong",{children:"helper text"})," ","shown below the trigger for validation feedback."]}),e.jsx(r.Anatomy,{preview:e.jsx("div",{style:{padding:"16px",maxWidth:320},children:e.jsx(je,{})}),parts:[{id:1,name:"Label",token:`--dropdown-label-font
--dropdown-label-color`,description:"Optional field label above the trigger, using the primary brand font."},{id:2,name:"Leading icon",token:`--dropdown-icon-color
--dropdown-icon-size-default`,description:"Optional icon on the left of the trigger indicating the field context."},{id:3,name:"Display text / tag chips",token:`--dropdown-text-color
--dropdown-placeholder-color`,description:"Shows the selected option label (single-select) or tag chips (multi-select). Shows placeholder when nothing is selected."},{id:4,name:"Clear button (×)",token:"--dropdown-clear-color",description:"Appears when a value is selected and clearable is true. Resets the selection on click."},{id:5,name:"Chevron",token:"--dropdown-chevron-color",description:"Indicates open/closed state. Rotates to ExpandLess when the menu is open."},{id:6,name:"Menu option",token:`--dropdown-option-font
--dropdown-option-selected-bg`,description:"Each option row has an optional leading icon, label, and trailing checkbox (multi) or chevron-right (keyboard active)."}]})]}),e.jsxs(r.Section,{title:"Single Select",children:[e.jsxs(r.BodyText,{children:["Pass ",e.jsx("code",{children:"value"})," and ",e.jsx("code",{children:"onChange"})," to control a single selection. The selected option's label replaces the placeholder in the trigger. Add"," ",e.jsx("code",{children:"clearable"})," to show the × button when a value is selected."]}),e.jsx("div",{style:{...Q,maxWidth:320},children:e.jsx(je,{})})]}),e.jsxs(r.Section,{title:"Multi-Select",children:[e.jsxs(r.BodyText,{children:["Enable ",e.jsx("code",{children:"multiSelect"})," and pass ",e.jsx("code",{children:"values"})," +"," ",e.jsx("code",{children:"onMultiChange"}),". Each option renders a checkbox; selected options appear as Tag chips inside the trigger and can be individually removed. The clear (×) button removes all selections at once."]}),e.jsx("div",{style:{...Q,maxWidth:320},children:e.jsx(xn,{})})]}),e.jsxs(r.Section,{title:"Searchable",children:[e.jsxs(r.BodyText,{children:["Add ",e.jsx("code",{children:"searchable"})," to allow the user to type in the trigger when the dropdown is open. The option list filters in real time against the typed query. Full keyboard navigation is supported: ",e.jsx("kbd",{children:"↑"})," / ",e.jsx("kbd",{children:"↓"})," to move, ",e.jsx("kbd",{children:"Enter"})," to select, ",e.jsx("kbd",{children:"Escape"})," to dismiss."]}),e.jsx("div",{style:{...Q,maxWidth:320},children:e.jsx(bn,{})})]}),e.jsxs(r.Section,{title:"Sizes",children:[e.jsxs(r.BodyText,{children:["Three sizes are available — ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and"," ",e.jsx("code",{children:"large"}),". The size prop controls the trigger height, padding, font size, and icon size across both the trigger and the open menu panel."]}),e.jsx("div",{style:Q,children:["small","default","large"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:ye,children:t}),e.jsx(je,{size:t})]},t))})]}),e.jsxs(r.Section,{title:"Validation States",children:[e.jsxs(r.BodyText,{children:["The ",e.jsx("code",{children:"state"})," prop drives the trigger border colour and helper text colour. All four validation states are available in addition to the default and disabled styles."]}),e.jsxs("div",{style:Q,children:[[{state:"default",text:void 0,label:"Default"},{state:"error",text:"This field is required.",label:"Error"},{state:"warning",text:"Are you sure about this selection?",label:"Warning"},{state:"success",text:"Selection confirmed.",label:"Success"}].map(({state:t,text:o,label:n})=>e.jsxs("div",{children:[e.jsx("div",{style:ye,children:n}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:$,state:t,helperText:o,leadingIcon:d})]},t)),e.jsxs("div",{children:[e.jsx("div",{style:ye,children:"Disabled"}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:$,disabled:!0,leadingIcon:d})]})]})]}),e.jsxs(r.Section,{title:"Design Tokens",children:[e.jsxs(r.BodyText,{children:["All visual values are driven by ",e.jsx("code",{children:"--dropdown-*"})," tokens defined in"," ",e.jsx("code",{children:"tokens.css"}),". Where appropriate, dropdown tokens alias back to their"," ",e.jsx("code",{children:"--simple-field-*"})," equivalents so both inputs share the same visual baseline."]}),e.jsx(r.Subsection,{title:"Layout & Spacing",children:e.jsx(r.TokenTable,{tokens:[{name:"--dropdown-height-small",description:"Trigger height — small (32 px via --simple-field-height-small)"},{name:"--dropdown-height-default",description:"Trigger height — default (44 px via --simple-field-height-default)"},{name:"--dropdown-height-large",description:"Trigger height — large (52 px via --simple-field-height-large)"},{name:"--dropdown-border-radius",description:"Trigger corner radius (4 px via --global-spacing-radius-4px)"},{name:"--dropdown-border-width",description:"Trigger border thickness (0.5 px via --global-spacing-stroke-0-5px)"},{name:"--dropdown-gap",description:"Gap between trigger elements (8 px via --global-spacing-sizing-8px)"},{name:"--dropdown-menu-max-height",description:"Maximum height of the open menu panel (280 px)"},{name:"--dropdown-menu-radius",description:"Bottom corner radius of the menu panel (6 px)"}]})}),e.jsx(r.Subsection,{title:"Colours — Trigger",children:e.jsx(r.TokenTable,{tokens:[{name:"--dropdown-bg",description:"Trigger background — white (--global-color-base-white)"},{name:"--dropdown-border-color",description:"Default border — neutral-gray-300 (#d2d5da)"},{name:"--dropdown-border-color-focus",description:"Focused / open border — brand-primary (#3776ce)"},{name:"--dropdown-text-color",description:"Selected value text — base-black (#1c1c1c)"},{name:"--dropdown-placeholder-color",description:"Placeholder text — neutral-gray-400 (#9ca3af)"},{name:"--dropdown-icon-color",description:"Leading icon default — neutral-gray-500"},{name:"--dropdown-chevron-color",description:"Chevron default — neutral-gray-500"},{name:"--dropdown-clear-color",description:"Clear button — neutral-gray-400"},{name:"--dropdown-bg-disabled",description:"Disabled background — neutral-gray-100 (#f3f4f6)"},{name:"--dropdown-border-color-error",description:"Error border — status-red (#ce2031)"},{name:"--dropdown-border-color-warning",description:"Warning border — status-dark-orange (#d07c06)"},{name:"--dropdown-border-color-success",description:"Success border — status-dark-green (#227f1a)"}]})}),e.jsx(r.Subsection,{title:"Colours — Menu Options",children:e.jsx(r.TokenTable,{tokens:[{name:"--dropdown-option-selected-bg",description:"Selected option background — primary-sky-blue-50 (#f4fcff)"},{name:"--dropdown-option-selected-color",description:"Selected option text — brand-primary (#3776ce)"},{name:"--dropdown-option-active-bg",description:"Keyboard-active option background — primary-sky-blue-100 (#d6f0fb)"},{name:"--dropdown-option-hover-bg",description:"Hovered option background — neutral-gray-50 (#f9fafb)"},{name:"--dropdown-checkbox-color",description:"Checked checkbox fill — brand-primary (#3776ce)"}]})})]}),e.jsx(r.Section,{title:"Usage Principles",children:e.jsxs(r.Principles,{children:[e.jsx(r.PrincipleCard,{number:1,title:"Use for 5+ options",children:"Prefer a Dropdown over radio buttons or a segmented control when there are five or more options. For fewer options, consider an inline control to reduce interaction cost."}),e.jsx(r.PrincipleCard,{number:2,title:"Always provide a placeholder",children:'The placeholder communicates what type of selection is expected. Keep it brief and descriptive — e.g. "Select a region" rather than just "Select".'}),e.jsx(r.PrincipleCard,{number:3,title:"Lead with context icons",children:"Use leading icons only when they add semantic meaning (e.g. a person icon for a user selector). Avoid decorative icons that add visual noise without aiding comprehension."}),e.jsx(r.PrincipleCard,{number:4,title:"Validate inline",children:"Surface errors, warnings, and success messages as helper text directly below the trigger using the state prop. Do not rely solely on toasts or page-level messages for form validation."})]})}),e.jsx(r.Section,{title:"Do and Don't",children:e.jsx(r.DosDonts,{doItem:{icon:e.jsx("div",{style:{width:"100%"},children:e.jsx(m,{label:"Country",placeholder:"Select a country",options:$,leadingIcon:d,size:"small"})}),label:"Use a clear, descriptive placeholder",description:"Give the user context about what they are selecting. A well-named placeholder removes the need for a separate instruction."},dontItem:{icon:e.jsx("div",{style:{width:"100%"},children:e.jsx(m,{placeholder:"Select",options:$,size:"small"})}),label:"Don't omit the label and placeholder",description:'Avoid using generic labels like "Select" with no supporting label. Users need context to understand what the field expects.'}})}),e.jsx(r.Section,{title:"Accessibility",children:e.jsx(r.BulletList,{items:[e.jsxs(e.Fragment,{children:["Trigger has ",e.jsx("code",{children:'role="combobox"'}),", ",e.jsx("code",{children:'aria-haspopup="listbox"'}),", and ",e.jsx("code",{children:"aria-expanded"})," — fully compliant ARIA combobox pattern."]}),e.jsxs(e.Fragment,{children:["Menu panel has ",e.jsx("code",{children:'role="listbox"'})," with ",e.jsx("code",{children:"aria-multiselectable"})," in multi-select mode."]}),e.jsxs(e.Fragment,{children:["Each option carries ",e.jsx("code",{children:'role="option"'}),", ",e.jsx("code",{children:"aria-selected"}),", and ",e.jsx("code",{children:"aria-disabled"}),"."]}),e.jsxs(e.Fragment,{children:["Full keyboard navigation: ",e.jsx("kbd",{children:"↑"})," / ",e.jsx("kbd",{children:"↓"})," to navigate, ",e.jsx("kbd",{children:"Enter"})," to select, ",e.jsx("kbd",{children:"Escape"})," to close, ",e.jsx("kbd",{children:"Tab"})," to dismiss."]}),e.jsxs(e.Fragment,{children:["The clear button exposes an explicit ",e.jsx("code",{children:'aria-label="Clear selection"'}),"."]}),e.jsxs(e.Fragment,{children:["Error states use ",e.jsx("code",{children:'role="alert"'})," on the helper text to announce validation messages to screen readers."]})]})}),e.jsx(r.Footer,{})]});pt.__docgenInfo={description:"",methods:[],displayName:"DropdownDocs"};const Nn={title:"Atoms/Input/Dropdown",component:m,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["small","default","large"],description:"Visual size of the trigger and menu items"},state:{control:"select",options:["default","error","warning","success"],description:"Validation / semantic state"},multiSelect:{control:"boolean",description:"Enable multi-select with checkboxes"},searchable:{control:"boolean",description:"Allow typing to filter options"},clearable:{control:"boolean",description:"Show a clear button when a value is selected"},disabled:{control:"boolean",description:"Disable the dropdown"}},args:{size:"default",state:"default",multiSelect:!1,searchable:!1,clearable:!1,disabled:!1}},I=[{id:1,label:"Menu item",leadingIcon:d},{id:2,label:"Menu item",leadingIcon:d},{id:3,label:"Menu item",leadingIcon:d},{id:4,label:"Menu item",leadingIcon:d}],me=[{id:1,label:"Menu item",leadingIcon:d},{id:2,label:"Label",leadingIcon:ct},{id:3,label:"Menu item",leadingIcon:d},{id:4,label:"Menu item",leadingIcon:d}],f={fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},J={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-md, 8px)",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},oe={name:"Documentation",render:()=>e.jsx(pt,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},ae={name:"Playground",render:t=>{const[o,n]=u.useState(null),[l,g]=u.useState([]);return t.multiSelect?e.jsx("div",{style:{maxWidth:320},children:e.jsx(m,{...t,options:me,values:l,onMultiChange:h=>g(h)})}):e.jsx("div",{style:{maxWidth:320},children:e.jsx(m,{...t,options:I,value:o,onChange:h=>n(h)})})},args:{label:"Input name",placeholder:"Placeholder text",leadingIcon:d,clearable:!0}},le={name:"Default",render:()=>{const[t,o]=u.useState(null);return e.jsx("div",{style:{maxWidth:300},children:e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:I,value:t,onChange:n=>o(n),leadingIcon:d})})},parameters:{controls:{disable:!0}}},se={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:["small","default","large"].map(t=>{const[o,n]=u.useState(null);return e.jsxs("div",{children:[e.jsx("div",{style:f,children:t}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:I,value:o,onChange:l=>n(l),leadingIcon:d,clearable:!0,size:t})]},t)})}),parameters:{controls:{disable:!0}}},ie={name:"Status — Single Select",render:()=>{const[t,o]=u.useState(3);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:320},children:[e.jsx("div",{style:f,children:"Closed (default)"}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:I,value:null,onChange:()=>{},leadingIcon:d}),e.jsx("div",{style:f,children:"Open — simple list (click to open)"}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:I,value:t,onChange:n=>o(n),leadingIcon:d,clearable:!0})]})},parameters:{controls:{disable:!0}}},re={name:"Status — Multi-Select",render:()=>{const[t,o]=u.useState([2]);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:me,multiSelect:!0,values:t,onMultiChange:n=>o(n),leadingIcon:d})})},parameters:{controls:{disable:!0}}},de={name:"Status — Searchable",render:()=>{const[t,o]=u.useState(3);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(m,{label:"Input name",placeholder:"Type to search…",options:I,value:t,onChange:n=>o(n),leadingIcon:d,searchable:!0,clearable:!0})})},parameters:{controls:{disable:!0}}},ce={name:"Status — Disabled",render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:I,disabled:!0,leadingIcon:d})}),parameters:{controls:{disable:!0}}},pe={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:360},children:[[{key:"default",label:"Default / Closed",state:"default"},{key:"error",label:"Error",state:"error",helperText:"This field is required."},{key:"warning",label:"Warning",state:"warning",helperText:"Please review your selection."},{key:"success",label:"Success",state:"success",helperText:"Selection confirmed."}].map(({key:t,label:o,state:n,helperText:l})=>{const[g,h]=u.useState(t==="success"?1:null);return e.jsxs("div",{children:[e.jsx("div",{style:f,children:o}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:I,value:g,onChange:c=>h(c),state:n,helperText:l,leadingIcon:d,clearable:!0})]},t)}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"Disabled"}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:I,disabled:!0,leadingIcon:d})]})]}),parameters:{controls:{disable:!0}}},ue={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:480,padding:"24px"},children:[e.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontWeight:600,fontSize:"14px",margin:0},children:"Dropdown = Trigger + Menu panel"}),e.jsxs("div",{style:J,children:[e.jsxs("div",{children:[e.jsx("div",{style:f,children:"Trigger (closed)"}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:I,leadingIcon:d})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"Trigger with leading icon + tags (multi-select)"}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:me,multiSelect:!0,values:[2],onMultiChange:()=>{},leadingIcon:d})]}),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"Searchable trigger with cursor"}),e.jsx(m,{label:"Input name",placeholder:"Type to search…",options:I,searchable:!0,leadingIcon:d})]})]}),e.jsx("code",{style:{fontSize:"11px",background:"var(--global-color-neutral-gray-100)",padding:"8px 12px",borderRadius:"4px"},children:"<Dropdown leadingIcon={AppsIcon} searchable multiSelect clearable />"})]}),parameters:{controls:{disable:!0}}},he={name:"Full Design Matrix",render:()=>{const t=["small","default","large"],o=["default","error","warning","success"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{...f,fontSize:"14px",marginBottom:"16px"},children:"Single Select — Sizes"}),e.jsx("div",{style:J,children:t.map(n=>e.jsxs("div",{children:[e.jsx("div",{style:f,children:n}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:I,leadingIcon:d,clearable:!0,size:n})]},n))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...f,fontSize:"14px",marginBottom:"16px"},children:"Single Select — Validation States"}),e.jsxs("div",{style:J,children:[o.map(n=>e.jsxs("div",{children:[e.jsx("div",{style:f,children:n}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:I,leadingIcon:d,state:n,helperText:n!=="default"?`${n} helper text`:void 0})]},n)),e.jsxs("div",{children:[e.jsx("div",{style:f,children:"disabled"}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:I,leadingIcon:d,disabled:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...f,fontSize:"14px",marginBottom:"16px"},children:"Multi-Select — Sizes"}),e.jsx("div",{style:J,children:t.map(n=>e.jsxs("div",{children:[e.jsxs("div",{style:f,children:[n," — 1 selected"]}),e.jsx(m,{label:"Input name",placeholder:"Placeholder text",options:me,multiSelect:!0,values:[2],onMultiChange:()=>{},leadingIcon:d,size:n})]},n))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...f,fontSize:"14px",marginBottom:"16px"},children:"Searchable"}),e.jsx("div",{style:J,children:t.map(n=>e.jsxs("div",{children:[e.jsx("div",{style:f,children:n}),e.jsx(m,{label:"Input name",placeholder:"Type to search…",options:I,searchable:!0,clearable:!0,leadingIcon:d,size:n})]},n))})]})]})},parameters:{controls:{disable:!0}}};var Te,ze,Ce;oe.parameters={...oe.parameters,docs:{...(Te=oe.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ce=(ze=oe.parameters)==null?void 0:ze.docs)==null?void 0:Ce.source}}};var De,Ae,Le;ae.parameters={...ae.parameters,docs:{...(De=ae.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Le=(Ae=ae.parameters)==null?void 0:Ae.docs)==null?void 0:Le.source}}};var Be,Ee,Me;le.parameters={...le.parameters,docs:{...(Be=le.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Me=(Ee=le.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source}}};var Oe,Re,Pe;se.parameters={...se.parameters,docs:{...(Oe=se.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Pe=(Re=se.parameters)==null?void 0:Re.docs)==null?void 0:Pe.source}}};var Fe,Ve,Ne;ie.parameters={...ie.parameters,docs:{...(Fe=ie.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ne=(Ve=ie.parameters)==null?void 0:Ve.docs)==null?void 0:Ne.source}}};var We,qe,Ye;re.parameters={...re.parameters,docs:{...(We=re.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ye=(qe=re.parameters)==null?void 0:qe.docs)==null?void 0:Ye.source}}};var $e,Ue,He;de.parameters={...de.parameters,docs:{...($e=de.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(He=(Ue=de.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};var Ke,Ge,Qe;ce.parameters={...ce.parameters,docs:{...(Ke=ce.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...(Qe=(Ge=ce.parameters)==null?void 0:Ge.docs)==null?void 0:Qe.source}}};var Je,Xe,Ze;pe.parameters={...pe.parameters,docs:{...(Je=pe.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ze=(Xe=pe.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,nt;ue.parameters={...ue.parameters,docs:{...(et=ue.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=ue.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var ot,at,lt;he.parameters={...he.parameters,docs:{...(ot=he.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(lt=(at=he.parameters)==null?void 0:at.docs)==null?void 0:lt.source}}};const Wn=["Documentation","Playground","Default","Sizes","StatusSingleSelect","StatusMultiSelect","StatusSearchable","StatusDisabled","AllInteractiveStates","ComponentBreakdown","FullDesignMatrix"];export{pe as AllInteractiveStates,ue as ComponentBreakdown,le as Default,oe as Documentation,he as FullDesignMatrix,ae as Playground,se as Sizes,ce as StatusDisabled,re as StatusMultiSelect,de as StatusSearchable,ie as StatusSingleSelect,Wn as __namedExportsOrder,Nn as default};
