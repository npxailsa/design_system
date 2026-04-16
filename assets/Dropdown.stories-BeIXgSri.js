import{r as p,j as e}from"./iframe-Ch-Tj3io.js";import{C as bt}from"./Close-Em3X7LXF.js";import{c as H}from"./createSvgIcon-BmyPNPa7.js";import{C as vt}from"./ChevronRight-DD-CUbaM.js";import{T as ft}from"./Tag-WjKAQaDw.js";import{u as yt,I as _t}from"./InputBase-DjLP7a3_.js";import{c as _e,g as it,a as rt,d as X,b as ct,s as Ie,r as dt,u as jt}from"./DefaultPropsProvider-CeIXGSHE.js";import{u as je}from"./useSlot-BJDfx9Z4.js";import{B as It}from"./ButtonBase-DcJvt2pN.js";import{m as St}from"./memoTheme-Iqtna-UK.js";import{c as we}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{P as pt}from"./Person-CtkFVG4l.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CTWSy9eb.js";import"./useTheme-D60MAfBg.js";import"./useEventCallback-fjU8igtO.js";import"./useForkRef-CE2zpngP.js";import"./ownerWindow-DIR61fab.js";import"./isHostComponent-DVu5iVWx.js";import"./mergeSlotProps-C1FN0SSN.js";import"./index-B62n4EIE.js";function wt(t){const{controlled:l,default:n}=t,{current:s}=p.useRef(l!==void 0),[m,u]=p.useState(n),c=s?l:m,o=p.useCallback(d=>{s||u(d)},[]);return[c,o]}function zt(t,l){const n=t.charCodeAt(2);return t[0]==="o"&&t[1]==="n"&&n>=65&&n<=90&&typeof l=="function"}function kt(t,l){if(!t)return l;function n(c,o){const d={};return Object.keys(o).forEach(b=>{zt(b,o[b])&&typeof c[b]=="function"&&(d[b]=(...y)=>{c[b](...y),o[b](...y)})}),d}if(typeof t=="function"||typeof l=="function")return c=>{const o=typeof l=="function"?l(c):l,d=typeof t=="function"?t({...c,...o}):t,b=_e(c==null?void 0:c.className,o==null?void 0:o.className,d==null?void 0:d.className),y=n(d,o);return{...o,...d,...y,...!!b&&{className:b},...(o==null?void 0:o.style)&&(d==null?void 0:d.style)&&{style:{...o.style,...d.style}},...(o==null?void 0:o.sx)&&(d==null?void 0:d.sx)&&{sx:[...Array.isArray(o.sx)?o.sx:[o.sx],...Array.isArray(d.sx)?d.sx:[d.sx]]}}};const s=l,m=n(t,s),u=_e(s==null?void 0:s.className,t==null?void 0:t.className);return{...l,...t,...m,...!!u&&{className:u},...(s==null?void 0:s.style)&&(t==null?void 0:t.style)&&{style:{...s.style,...t.style}},...(s==null?void 0:s.sx)&&(t==null?void 0:t.sx)&&{sx:[...Array.isArray(s.sx)?s.sx:[s.sx],...Array.isArray(t.sx)?t.sx:[t.sx]]}}}function Tt(t){return it("PrivateSwitchBase",t)}rt("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ct=t=>{const{classes:l,checked:n,disabled:s,edge:m}=t,u={root:["root",n&&"checked",s&&"disabled",m&&`edge${X(m)}`],input:["input"]};return ct(u,Tt,l)},Dt=Ie(It,{name:"MuiSwitchBase"})({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:t,ownerState:l})=>t==="start"&&l.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:t,ownerState:l})=>t==="end"&&l.size!=="small",style:{marginRight:-12}}]}),At=Ie("input",{name:"MuiSwitchBase",shouldForwardProp:dt})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Lt=p.forwardRef(function(l,n){const{autoFocus:s,checked:m,checkedIcon:u,defaultChecked:c,disabled:o,disableFocusRipple:d=!1,edge:b=!1,icon:y,id:B,inputProps:U,inputRef:M,name:I,onBlur:Y,onChange:O,onFocus:L,readOnly:C,required:R=!1,tabIndex:D,type:w,value:N,slots:f={},slotProps:Z={},...K}=l,[q,$]=wt({controlled:m,default:!!c}),_=yt(),Q=g=>{L&&L(g),_&&_.onFocus&&_.onFocus(g)},xe=g=>{Y&&Y(g),_&&_.onBlur&&_.onBlur(g)},P=g=>{if(g.nativeEvent.defaultPrevented||C)return;const S=g.target.checked;$(S),O&&O(g,S)};let V=o;_&&typeof V>"u"&&(V=_.disabled);const be=w==="checkbox"||w==="radio",F={...l,checked:q,disabled:V,disableFocusRipple:d,edge:b},A=Ct(F),ee={slots:f,slotProps:{input:U,...Z}},[te,ne]=je("root",{ref:n,elementType:Dt,className:A.root,shouldForwardComponentProp:!0,externalForwardedProps:{...ee,component:"span",...K},getSlotProps:g=>({...g,onFocus:S=>{var z;(z=g.onFocus)==null||z.call(g,S),Q(S)},onBlur:S=>{var z;(z=g.onBlur)==null||z.call(g,S),xe(S)}}),ownerState:F,additionalProps:{centerRipple:!0,focusRipple:!d,role:void 0,tabIndex:null}}),[ve,fe]=je("input",{ref:M,elementType:At,className:A.input,externalForwardedProps:ee,getSlotProps:g=>({...g,onChange:S=>{var z;(z=g.onChange)==null||z.call(g,S),P(S)}}),ownerState:F,additionalProps:{autoFocus:s,checked:m,defaultChecked:c,disabled:V,id:be?B:void 0,name:I,readOnly:C,required:R,tabIndex:D,type:w,...w==="checkbox"&&N===void 0?{}:{value:N}}});return e.jsxs(te,{...ne,children:[e.jsx(ve,{...fe}),q?u:y]})}),Et=H(e.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),Bt=H(e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),Mt=H(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}));function Ot(t){return it("MuiCheckbox",t)}const ye=rt("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Rt=t=>{const{classes:l,indeterminate:n,color:s,size:m}=t,u={root:["root",n&&"indeterminate",`color${X(s)}`,`size${X(m)}`]},c=ct(u,Ot,l);return{...l,...c}},Nt=Ie(Lt,{shouldForwardProp:t=>dt(t)||t==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(t,l)=>{const{ownerState:n}=t;return[l.root,n.indeterminate&&l.indeterminate,l[`size${X(n.size)}`],n.color!=="default"&&l[`color${X(n.color)}`]]}})(St(({theme:t})=>({color:(t.vars||t).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:t.alpha((t.vars||t).palette.action.active,(t.vars||t).palette.action.hoverOpacity)}}},...Object.entries(t.palette).filter(we()).map(([l])=>({props:{color:l,disableRipple:!1},style:{"&:hover":{backgroundColor:t.alpha((t.vars||t).palette[l].main,(t.vars||t).palette.action.hoverOpacity)}}})),...Object.entries(t.palette).filter(we()).map(([l])=>({props:{color:l},style:{[`&.${ye.checked}, &.${ye.indeterminate}`]:{color:(t.vars||t).palette[l].main},[`&.${ye.disabled}`]:{color:(t.vars||t).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),Pt=e.jsx(Bt,{}),Vt=e.jsx(Et,{}),Ft=e.jsx(Mt,{}),Wt=p.forwardRef(function(l,n){const s=jt({props:l,name:"MuiCheckbox"}),{checkedIcon:m=Pt,color:u="primary",icon:c=Vt,indeterminate:o=!1,indeterminateIcon:d=Ft,inputProps:b,size:y="medium",disableRipple:B=!1,className:U,slots:M={},slotProps:I={},...Y}=s,O=o?d:c,L=o?d:m,C={...s,disableRipple:B,color:u,indeterminate:o,size:y},R=Rt(C),D=I.input??b,[w,N]=je("root",{ref:n,elementType:Nt,className:_e(R.root,U),shouldForwardComponentProp:!0,externalForwardedProps:{slots:M,slotProps:I,...Y},ownerState:C,additionalProps:{type:"checkbox",icon:p.cloneElement(O,{fontSize:O.props.fontSize??y}),checkedIcon:p.cloneElement(L,{fontSize:L.props.fontSize??y}),disableRipple:B,slots:M,slotProps:{input:kt(typeof D=="function"?D(C):D,{"data-indeterminate":o})}}});return e.jsx(w,{...N,classes:R})}),Yt=H(e.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"})),qt=H(e.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})),$t="_field_1nzyf_8",Ht="_label_1nzyf_18",Ut="_trigger_1nzyf_29",Kt="_leadingIcon_1nzyf_112",Qt="_iconSvg_1nzyf_131",Gt="_tagArea_1nzyf_136",Jt="_displayText_1nzyf_154",Xt="_inputRoot_1nzyf_179",Zt="_nativeInput_1nzyf_190",en="_actions_1nzyf_217",tn="_clearBtn_1nzyf_227",nn="_clearIcon_1nzyf_245",ln="_chevron_1nzyf_252",an="_chevronIcon_1nzyf_268",sn="_menu_1nzyf_275",on="_option_1nzyf_297",rn="_option__label_1nzyf_339",cn="_option__icon_1nzyf_347",dn="_option__iconSvg_1nzyf_359",pn="_option__checkbox_1nzyf_365",un="_option__chevron_1nzyf_370",hn="_emptyState_1nzyf_379",mn="_helper_1nzyf_392",i={field:$t,label:Ht,trigger:Ut,"trigger--open":"_trigger--open_1nzyf_50","trigger--small":"_trigger--small_1nzyf_61","trigger--default":"_trigger--default_1nzyf_66","trigger--large":"_trigger--large_1nzyf_71","trigger--error":"_trigger--error_1nzyf_77","trigger--warning":"_trigger--warning_1nzyf_86","trigger--success":"_trigger--success_1nzyf_95","trigger--disabled":"_trigger--disabled_1nzyf_104",leadingIcon:Kt,"field--small":"_field--small_1nzyf_131",iconSvg:Qt,"field--default":"_field--default_1nzyf_132","field--large":"_field--large_1nzyf_133",tagArea:Gt,displayText:Jt,"displayText--placeholder":"_displayText--placeholder_1nzyf_165","displayText--disabled":"_displayText--disabled_1nzyf_169",inputRoot:Xt,nativeInput:Zt,actions:en,clearBtn:tn,clearIcon:nn,chevron:ln,chevronIcon:an,menu:sn,"menu--small":"_menu--small_1nzyf_292","menu--default":"_menu--default_1nzyf_293","menu--large":"_menu--large_1nzyf_294",option:on,"option--selected":"_option--selected_1nzyf_314","option--active":"_option--active_1nzyf_320","option--disabled":"_option--disabled_1nzyf_324",option__label:rn,option__icon:cn,option__iconSvg:dn,option__checkbox:pn,option__chevron:un,emptyState:hn,helper:mn,"helper--error":"_helper--error_1nzyf_399","helper--warning":"_helper--warning_1nzyf_400","helper--success":"_helper--success_1nzyf_401"},h=({label:t,placeholder:l="Select an option",options:n,value:s=null,onChange:m,multiSelect:u=!1,values:c=[],onMultiChange:o,searchable:d=!1,size:b="default",state:y="default",leadingIcon:B,clearable:U=!1,helperText:M,disabled:I=!1,id:Y,className:O,"aria-label":L})=>{const C=p.useId(),R=Y??C,D=`${C}-listbox`,w=p.useRef(null),N=p.useRef(null),[f,Z]=p.useState(!1),[K,q]=p.useState(""),[$,_]=p.useState(-1),Q=n.find(a=>a.id===s)??null,xe=n.filter(a=>c.includes(a.id)),P=d&&K.trim()?n.filter(a=>a.label.toLowerCase().includes(K.toLowerCase())):n,V=u?c.length>0:s!=null,be=!I&&V&&(U||u);p.useEffect(()=>{if(!f)return;const a=x=>{w.current&&!w.current.contains(x.target)&&A()};return document.addEventListener("pointerdown",a),()=>document.removeEventListener("pointerdown",a)},[f]),p.useEffect(()=>{f||_(-1)},[f]),p.useEffect(()=>{f||q("")},[f]);const F=()=>{I||(Z(!0),d&&setTimeout(()=>{var a;return(a=N.current)==null?void 0:a.focus()},0))},A=p.useCallback(()=>{Z(!1),q(""),_(-1)},[]),ee=()=>f?A():F(),te=p.useCallback(a=>{if(a.disabled)return;const x=a.id===s;m==null||m(x?null:a.id,x?null:a),A()},[s,m,A]),ne=p.useCallback(a=>{if(a.disabled)return;const x=c.includes(a.id)?c.filter(k=>k!==a.id):[...c,a.id],W=n.filter(k=>x.includes(k.id));o==null||o(x,W)},[c,n,o]),ve=a=>{a.stopPropagation(),u?o==null||o([],[]):m==null||m(null,null)},fe=a=>{const x=c.filter(k=>k!==a),W=n.filter(k=>x.includes(k.id));o==null||o(x,W)},g=a=>{switch(a.key){case"ArrowDown":a.preventDefault(),f||F(),_(x=>Math.min(x+1,P.length-1));break;case"ArrowUp":a.preventDefault(),_(x=>Math.max(x-1,0));break;case"Enter":if(a.preventDefault(),!f){F();break}if($>=0&&P[$]){const x=P[$];u?ne(x):te(x)}break;case"Escape":A();break;case"Tab":A();break}},S=[i.field,i[`field--${b}`],O].filter(Boolean).join(" "),z=[i.trigger,i[`trigger--${b}`],i[`trigger--${y}`],I&&i["trigger--disabled"],f&&i["trigger--open"]].filter(Boolean).join(" "),ht=f?qt:Yt,mt=b==="large"?"default":"small";return e.jsxs("div",{ref:w,className:S,children:[t&&e.jsx("label",{htmlFor:R,className:i.label,children:t}),e.jsxs("div",{className:z,onClick:ee,onKeyDown:g,role:"combobox","aria-haspopup":"listbox","aria-expanded":f,"aria-controls":D,"aria-disabled":I,tabIndex:I?-1:0,id:R,"aria-label":L,children:[B&&e.jsx("span",{className:i.leadingIcon,"aria-hidden":"true",children:e.jsx(B,{className:i.iconSvg})}),u&&c.length>0&&e.jsx("div",{className:i.tagArea,children:xe.map(a=>e.jsx(ft,{label:a.label,size:mt,colour:"blue",variant:"filled",showRemove:!0,onRemove:()=>fe(a.id),disabled:I},a.id))}),d&&f?e.jsx(_t,{inputRef:N,value:K,onChange:a=>q(a.target.value),onClick:a=>a.stopPropagation(),placeholder:l,disabled:I,inputProps:{className:i.nativeInput,"aria-label":"Search options"},classes:{root:i.inputRoot,input:i.nativeInput}}):e.jsx("span",{className:[i.displayText,!V&&i["displayText--placeholder"],I&&i["displayText--disabled"]].filter(Boolean).join(" "),children:u?c.length===0?l:null:(Q==null?void 0:Q.label)??l}),e.jsxs("span",{className:i.actions,children:[be&&e.jsx("button",{type:"button",className:i.clearBtn,onClick:ve,"aria-label":"Clear selection",tabIndex:-1,children:e.jsx(bt,{className:i.clearIcon})}),e.jsx("span",{className:i.chevron,"aria-hidden":"true",children:e.jsx(ht,{className:i.chevronIcon})})]})]}),f&&e.jsx("ul",{id:D,role:"listbox","aria-multiselectable":u,"aria-label":t??L??"Options",className:[i.menu,i[`menu--${b}`]].join(" "),children:P.length===0?e.jsx("li",{className:i.emptyState,"aria-disabled":"true",children:"No matching options"}):P.map((a,x)=>{const W=u?c.includes(a.id):a.id===s,k=x===$,Se=a.leadingIcon,gt=[i.option,i[`option--${b}`],W&&i["option--selected"],k&&i["option--active"],a.disabled&&i["option--disabled"]].filter(Boolean).join(" ");return e.jsxs("li",{id:`${D}-opt-${x}`,role:"option","aria-selected":W,"aria-disabled":a.disabled,className:gt,onPointerDown:xt=>{xt.preventDefault(),u?ne(a):te(a)},onPointerEnter:()=>_(x),onPointerLeave:()=>_(-1),children:[Se&&e.jsx("span",{className:i.option__icon,"aria-hidden":"true",children:e.jsx(Se,{className:i.option__iconSvg})}),e.jsx("span",{className:i.option__label,children:a.label}),u?e.jsx(Wt,{checked:W,disabled:a.disabled,tabIndex:-1,className:i.option__checkbox,size:"small",sx:{padding:0,color:"var(--global-color-neutral-gray-300)","&.Mui-checked":{color:"var(--dropdown-checkbox-color)"}}}):k&&e.jsx("span",{className:i.option__chevron,"aria-hidden":"true",children:e.jsx(vt,{className:i.option__iconSvg})})]},a.id)})}),M&&e.jsx("span",{className:[i.helper,y!=="default"&&i[`helper--${y}`]].filter(Boolean).join(" "),role:y==="error"?"alert":void 0,children:M})]})};h.__docgenInfo={description:`Dropdown — a select/combobox input built on MUI primitives.

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
Only relevant for single-select — multi-select always shows clear when values exist.`,defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper / validation text shown below the trigger"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the dropdown",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTML id for the trigger input"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the root wrapper"},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label when no visible label is provided"}}};const r=H(e.jsx("path",{d:"M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"})),T={fontFamily:"var(--brand-font-primary)",fontWeight:600,color:"var(--global-color-base-black)",marginBottom:"var(--global-spacing-sizing-8px)",marginTop:"var(--global-spacing-sizing-16px)"},E={fontFamily:"var(--brand-font-secondary)",fontSize:"14px",fontWeight:300,color:"var(--global-color-neutral-gray-600)",lineHeight:1.6,marginBottom:"var(--global-spacing-sizing-12px)"},gn={width:"100%",borderCollapse:"collapse",fontFamily:"var(--brand-font-secondary)",fontSize:"13px",marginBottom:"24px"},G={padding:"6px 12px",borderBottom:"1px solid var(--global-color-neutral-gray-100)",verticalAlign:"top"},ze={...G,width:"32px"},me=[{id:1,label:"Menu item",leadingIcon:r},{id:2,label:"Menu item",leadingIcon:r},{id:3,label:"Menu item",leadingIcon:r},{id:4,label:"Menu item",leadingIcon:r}],xn=[{id:1,label:"Menu item",leadingIcon:r},{id:2,label:"Label",leadingIcon:pt},{id:3,label:"Menu item",leadingIcon:r},{id:4,label:"Menu item",leadingIcon:r}],ke=({size:t="default"})=>{const[l,n]=p.useState(null);return e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:me,value:l,onChange:s=>n(s),leadingIcon:r,clearable:!0,size:t})},bn=({size:t="default"})=>{const[l,n]=p.useState([2]);return e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:xn,multiSelect:!0,values:l,onMultiChange:s=>n(s),leadingIcon:r,size:t})},vn=({size:t="default"})=>{const[l,n]=p.useState(3);return e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:me,value:l,onChange:s=>n(s),leadingIcon:r,searchable:!0,clearable:!0,size:t})},ut=()=>e.jsxs("div",{style:{maxWidth:900,margin:"0 auto",padding:"48px 32px",fontFamily:"var(--brand-font-secondary)"},children:[e.jsx("h1",{style:{...T,fontSize:"28px",marginTop:0},children:"Dropdown"}),e.jsxs("p",{style:E,children:["A select / combobox input built on MUI's ",e.jsx("code",{children:"InputBase"})," and ",e.jsx("code",{children:"Checkbox"})," primitives. Supports single selection, multi-selection with tag chips, keyboard-search filtering, full keyboard navigation, and four validation states. All visual treatment is applied via design-token CSS Modules — no MUI theme override required."]}),e.jsx("h2",{style:{...T,fontSize:"18px"},children:"MUI Foundation"}),e.jsxs("p",{style:E,children:[e.jsx("strong",{children:"InputBase"})," — Used as the search input in searchable mode. Provides an accessible, unstyled text field primitive.",e.jsx("br",{}),e.jsx("strong",{children:"Checkbox"})," — Renders checked/unchecked state for each option in multi-select mode. Styled solely via the ",e.jsx("code",{children:"sx"})," prop referencing design tokens."]}),e.jsx("h2",{style:{...T,fontSize:"18px"},children:"Anatomy"}),e.jsxs("ol",{style:{...E,paddingLeft:"20px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Label"})," — Optional field label above the trigger."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Trigger"})," — The clickable control row containing the leading icon, selected value / placeholder, tag chips (multi-select), clear button, and chevron."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Menu panel"})," — List of options rendered below the trigger when open. Each option may have a leading icon, label, and checkbox (multi) or chevron-right indicator (keyboard active)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Helper text"})," — Optional validation / helper message below the trigger."]})]}),e.jsx("h2",{style:{...T,fontSize:"18px"},children:"Sizes"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:320},children:["small","default","large"].map(t=>e.jsxs("div",{children:[e.jsx("p",{style:{...E,marginBottom:4,textTransform:"capitalize"},children:e.jsx("strong",{children:t})}),e.jsx(ke,{size:t})]},t))}),e.jsx("h2",{style:{...T,fontSize:"18px",marginTop:32},children:"Single Select"}),e.jsxs("p",{style:E,children:["Pass ",e.jsx("code",{children:"value"})," and ",e.jsx("code",{children:"onChange"}),". The selected option label is displayed in the trigger. Pass ",e.jsx("code",{children:"clearable"})," to show a clear button when a value is selected."]}),e.jsx("div",{style:{maxWidth:320},children:e.jsx(ke,{})}),e.jsx("h2",{style:{...T,fontSize:"18px",marginTop:32},children:"Multi-Select"}),e.jsxs("p",{style:E,children:["Pass ",e.jsx("code",{children:"multiSelect"})," + ",e.jsx("code",{children:"values"})," + ",e.jsx("code",{children:"onMultiChange"}),". Selected options are rendered as Tag chips inside the trigger. Each option shows a checkbox; the selected option has a filled blue checkbox."]}),e.jsx("div",{style:{maxWidth:320},children:e.jsx(bn,{})}),e.jsx("h2",{style:{...T,fontSize:"18px",marginTop:32},children:"Searchable"}),e.jsxs("p",{style:E,children:["Pass ",e.jsx("code",{children:"searchable"})," to let the user type inside the trigger when the dropdown is open. The option list filters in real time. Keyboard arrow-up/down navigates the filtered list; ",e.jsx("kbd",{children:"Enter"})," selects the highlighted option."]}),e.jsx("div",{style:{maxWidth:320},children:e.jsx(vn,{})}),e.jsx("h2",{style:{...T,fontSize:"18px",marginTop:32},children:"Validation States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:320},children:[[{state:"default",text:void 0},{state:"error",text:"This field is required."},{state:"warning",text:"Are you sure about this selection?"},{state:"success",text:"Selection confirmed."}].map(({state:t,text:l})=>e.jsx(h,{label:`State: ${t}`,placeholder:"Placeholder text",options:me,state:t,helperText:l,leadingIcon:r},t)),e.jsx(h,{label:"Disabled",placeholder:"Placeholder text",options:me,disabled:!0,leadingIcon:r})]}),e.jsx("h2",{style:{...T,fontSize:"18px",marginTop:32},children:"Design Tokens"}),e.jsxs("table",{style:gn,children:[e.jsx("thead",{children:e.jsxs("tr",{style:{background:"var(--global-color-neutral-gray-50)"},children:[e.jsx("th",{style:G,children:"Token"}),e.jsx("th",{style:G,children:"Value"}),e.jsx("th",{style:ze})]})}),e.jsx("tbody",{children:[["--dropdown-border-color","var(--global-color-neutral-gray-300)","#d2d5da"],["--dropdown-border-color-focus","var(--brand-primary)",null],["--dropdown-bg","var(--global-color-base-white)","#ffffff"],["--dropdown-bg-disabled","var(--global-color-neutral-gray-100)","#f3f4f6"],["--dropdown-text-color","var(--global-color-base-black)","#1c1c1c"],["--dropdown-placeholder-color","var(--global-color-neutral-gray-400)","#9ca3af"],["--dropdown-option-selected-bg","var(--global-color-primary-sky-blue-50)","#f4fcff"],["--dropdown-option-selected-color","var(--brand-primary)",null],["--dropdown-checkbox-color","var(--brand-primary)",null]].map(([t,l,n])=>e.jsxs("tr",{children:[e.jsx("td",{style:G,children:e.jsx("code",{children:t})}),e.jsx("td",{style:G,children:e.jsx("code",{children:l})}),e.jsx("td",{style:ze,children:n&&e.jsx("span",{style:{display:"inline-block",width:16,height:16,borderRadius:3,background:n,border:"1px solid var(--global-color-neutral-gray-200)",verticalAlign:"middle"}})})]},t))})]}),e.jsx("h2",{style:{...T,fontSize:"18px"},children:"Accessibility"}),e.jsxs("ul",{style:{...E,paddingLeft:"20px"},children:[e.jsxs("li",{children:["Trigger has ",e.jsx("code",{children:'role="combobox"'}),", ",e.jsx("code",{children:'aria-haspopup="listbox"'}),", and ",e.jsx("code",{children:"aria-expanded"}),"."]}),e.jsxs("li",{children:["Menu panel has ",e.jsx("code",{children:'role="listbox"'})," and ",e.jsx("code",{children:"aria-multiselectable"})," in multi-select mode."]}),e.jsxs("li",{children:["Each option has ",e.jsx("code",{children:'role="option"'}),", ",e.jsx("code",{children:"aria-selected"}),", and ",e.jsx("code",{children:"aria-disabled"}),"."]}),e.jsxs("li",{children:["Full keyboard navigation: ",e.jsx("kbd",{children:"↑"}),e.jsx("kbd",{children:"↓"})," to navigate, ",e.jsx("kbd",{children:"Enter"})," to select, ",e.jsx("kbd",{children:"Escape"})," to close."]}),e.jsxs("li",{children:["Clear button has an explicit ",e.jsx("code",{children:'aria-label="Clear selection"'}),"."]})]})]});ut.__docgenInfo={description:"",methods:[],displayName:"DropdownDocs"};const Vn={title:"Atoms/Input/Dropdown",component:h,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["small","default","large"],description:"Visual size of the trigger and menu items"},state:{control:"select",options:["default","error","warning","success"],description:"Validation / semantic state"},multiSelect:{control:"boolean",description:"Enable multi-select with checkboxes"},searchable:{control:"boolean",description:"Allow typing to filter options"},clearable:{control:"boolean",description:"Show a clear button when a value is selected"},disabled:{control:"boolean",description:"Disable the dropdown"}},args:{size:"default",state:"default",multiSelect:!1,searchable:!1,clearable:!1,disabled:!1}},j=[{id:1,label:"Menu item",leadingIcon:r},{id:2,label:"Menu item",leadingIcon:r},{id:3,label:"Menu item",leadingIcon:r},{id:4,label:"Menu item",leadingIcon:r}],ge=[{id:1,label:"Menu item",leadingIcon:r},{id:2,label:"Label",leadingIcon:pt},{id:3,label:"Menu item",leadingIcon:r},{id:4,label:"Menu item",leadingIcon:r}],v={fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},J={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-md, 8px)",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},le={name:"Documentation",render:()=>e.jsx(ut,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},ae={name:"Playground",render:t=>{const[l,n]=p.useState(null),[s,m]=p.useState([]);return t.multiSelect?e.jsx("div",{style:{maxWidth:320},children:e.jsx(h,{...t,options:ge,values:s,onMultiChange:u=>m(u)})}):e.jsx("div",{style:{maxWidth:320},children:e.jsx(h,{...t,options:j,value:l,onChange:u=>n(u)})})},args:{label:"Input name",placeholder:"Placeholder text",leadingIcon:r,clearable:!0}},se={name:"Default",render:()=>{const[t,l]=p.useState(null);return e.jsx("div",{style:{maxWidth:300},children:e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:j,value:t,onChange:n=>l(n),leadingIcon:r})})},parameters:{controls:{disable:!0}}},oe={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:320},children:["small","default","large"].map(t=>{const[l,n]=p.useState(null);return e.jsxs("div",{children:[e.jsx("div",{style:v,children:t}),e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:j,value:l,onChange:s=>n(s),leadingIcon:r,clearable:!0,size:t})]},t)})}),parameters:{controls:{disable:!0}}},ie={name:"Status — Single Select",render:()=>{const[t,l]=p.useState(3);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:320},children:[e.jsx("div",{style:v,children:"Closed (default)"}),e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:j,value:null,onChange:()=>{},leadingIcon:r}),e.jsx("div",{style:v,children:"Open — simple list (click to open)"}),e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:j,value:t,onChange:n=>l(n),leadingIcon:r,clearable:!0})]})},parameters:{controls:{disable:!0}}},re={name:"Status — Multi-Select",render:()=>{const[t,l]=p.useState([2]);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:ge,multiSelect:!0,values:t,onMultiChange:n=>l(n),leadingIcon:r})})},parameters:{controls:{disable:!0}}},ce={name:"Status — Searchable",render:()=>{const[t,l]=p.useState(3);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(h,{label:"Input name",placeholder:"Type to search…",options:j,value:t,onChange:n=>l(n),leadingIcon:r,searchable:!0,clearable:!0})})},parameters:{controls:{disable:!0}}},de={name:"Status — Disabled",render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:j,disabled:!0,leadingIcon:r})}),parameters:{controls:{disable:!0}}},pe={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:360},children:[[{key:"default",label:"Default / Closed",state:"default"},{key:"error",label:"Error",state:"error",helperText:"This field is required."},{key:"warning",label:"Warning",state:"warning",helperText:"Please review your selection."},{key:"success",label:"Success",state:"success",helperText:"Selection confirmed."}].map(({key:t,label:l,state:n,helperText:s})=>{const[m,u]=p.useState(t==="success"?1:null);return e.jsxs("div",{children:[e.jsx("div",{style:v,children:l}),e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:j,value:m,onChange:c=>u(c),state:n,helperText:s,leadingIcon:r,clearable:!0})]},t)}),e.jsxs("div",{children:[e.jsx("div",{style:v,children:"Disabled"}),e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:j,disabled:!0,leadingIcon:r})]})]}),parameters:{controls:{disable:!0}}},ue={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:480,padding:"24px"},children:[e.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontWeight:600,fontSize:"14px",margin:0},children:"Dropdown = Trigger + Menu panel"}),e.jsxs("div",{style:J,children:[e.jsxs("div",{children:[e.jsx("div",{style:v,children:"Trigger (closed)"}),e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:j,leadingIcon:r})]}),e.jsxs("div",{children:[e.jsx("div",{style:v,children:"Trigger with leading icon + tags (multi-select)"}),e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:ge,multiSelect:!0,values:[2],onMultiChange:()=>{},leadingIcon:r})]}),e.jsxs("div",{children:[e.jsx("div",{style:v,children:"Searchable trigger with cursor"}),e.jsx(h,{label:"Input name",placeholder:"Type to search…",options:j,searchable:!0,leadingIcon:r})]})]}),e.jsx("code",{style:{fontSize:"11px",background:"var(--global-color-neutral-gray-100)",padding:"8px 12px",borderRadius:"4px"},children:"<Dropdown leadingIcon={AppsIcon} searchable multiSelect clearable />"})]}),parameters:{controls:{disable:!0}}},he={name:"Full Design Matrix",render:()=>{const t=["small","default","large"],l=["default","error","warning","success"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{...v,fontSize:"14px",marginBottom:"16px"},children:"Single Select — Sizes"}),e.jsx("div",{style:J,children:t.map(n=>e.jsxs("div",{children:[e.jsx("div",{style:v,children:n}),e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:j,leadingIcon:r,clearable:!0,size:n})]},n))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...v,fontSize:"14px",marginBottom:"16px"},children:"Single Select — Validation States"}),e.jsxs("div",{style:J,children:[l.map(n=>e.jsxs("div",{children:[e.jsx("div",{style:v,children:n}),e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:j,leadingIcon:r,state:n,helperText:n!=="default"?`${n} helper text`:void 0})]},n)),e.jsxs("div",{children:[e.jsx("div",{style:v,children:"disabled"}),e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:j,leadingIcon:r,disabled:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...v,fontSize:"14px",marginBottom:"16px"},children:"Multi-Select — Sizes"}),e.jsx("div",{style:J,children:t.map(n=>e.jsxs("div",{children:[e.jsxs("div",{style:v,children:[n," — 1 selected"]}),e.jsx(h,{label:"Input name",placeholder:"Placeholder text",options:ge,multiSelect:!0,values:[2],onMultiChange:()=>{},leadingIcon:r,size:n})]},n))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{...v,fontSize:"14px",marginBottom:"16px"},children:"Searchable"}),e.jsx("div",{style:J,children:t.map(n=>e.jsxs("div",{children:[e.jsx("div",{style:v,children:n}),e.jsx(h,{label:"Input name",placeholder:"Type to search…",options:j,searchable:!0,clearable:!0,leadingIcon:r,size:n})]},n))})]})]})},parameters:{controls:{disable:!0}}};var Te,Ce,De;le.parameters={...le.parameters,docs:{...(Te=le.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(De=(Ce=le.parameters)==null?void 0:Ce.docs)==null?void 0:De.source}}};var Ae,Le,Ee;ae.parameters={...ae.parameters,docs:{...(Ae=ae.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ee=(Le=ae.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var Be,Me,Oe;se.parameters={...se.parameters,docs:{...(Be=se.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Oe=(Me=se.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Re,Ne,Pe;oe.parameters={...oe.parameters,docs:{...(Re=oe.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Pe=(Ne=oe.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.source}}};var Ve,Fe,We;ie.parameters={...ie.parameters,docs:{...(Ve=ie.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(We=(Fe=ie.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};var Ye,qe,$e;re.parameters={...re.parameters,docs:{...(Ye=re.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...($e=(qe=re.parameters)==null?void 0:qe.docs)==null?void 0:$e.source}}};var He,Ue,Ke;ce.parameters={...ce.parameters,docs:{...(He=ce.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ke=(Ue=ce.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};var Qe,Ge,Je;de.parameters={...de.parameters,docs:{...(Qe=de.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Je=(Ge=de.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Xe,Ze,et;pe.parameters={...pe.parameters,docs:{...(Xe=pe.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=pe.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,lt;ue.parameters={...ue.parameters,docs:{...(tt=ue.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(lt=(nt=ue.parameters)==null?void 0:nt.docs)==null?void 0:lt.source}}};var at,st,ot;he.parameters={...he.parameters,docs:{...(at=he.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(st=he.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};const Fn=["Documentation","Playground","Default","Sizes","StatusSingleSelect","StatusMultiSelect","StatusSearchable","StatusDisabled","AllInteractiveStates","ComponentBreakdown","FullDesignMatrix"];export{pe as AllInteractiveStates,ue as ComponentBreakdown,se as Default,le as Documentation,he as FullDesignMatrix,ae as Playground,oe as Sizes,de as StatusDisabled,re as StatusMultiSelect,ce as StatusSearchable,ie as StatusSingleSelect,Fn as __namedExportsOrder,Vn as default};
