import{r as y,j as t,R as Oa}from"./iframe-Do1ZXJJl.js";import{c as ge,g as _a,a as qa,b as xe,u as Ua,d as Y,e as Ya,s as ae,f as Ea}from"./DefaultPropsProvider-DX_vrYOA.js";import{u as Xa}from"./index-B8RMSE1_.js";import{u as Ka}from"./useControlled-BkM-Jy3Z.js";import{u as Ga}from"./useForkRef-B9zTX-7m.js";import{u as Za,a as aa}from"./useEventCallback-Bq346ad6.js";import{o as qe}from"./ownerDocument-DW-IO8s5.js";import{e as ra}from"./mergeSlotProps-Ccldj13x.js";import{i as ia}from"./isFocusVisible-B8k4qzLc.js";import{m as ce}from"./memoTheme-CcjSVwu0.js";import{i as Ue}from"./isHostComponent-DVu5iVWx.js";import{c as ta}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{u as U}from"./useSlotProps-6tevIfvl.js";import{D as A}from"./DocsTemplate-CdC3H3A2.js";import"./preload-helper-Dp1pzeXC.js";const Ja={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function Qa(e,a,s=(i,p)=>i===p){return e.length===a.length&&e.every((i,p)=>s(i,a[p]))}const Ha=2;function de(e,a,s,i,p){return s===1?Math.min(e+a,p):Math.max(e-a,i)}function Na(e,a){return e-a}function sa(e,a){const{index:s}=e.reduce((i,p,g)=>{const C=Math.abs(a-p);return i===null||C<i.distance||C===i.distance?{distance:C,index:g}:i},null)??{};return s}function Le(e,a){if(a.current!==void 0&&e.changedTouches){const s=e;for(let i=0;i<s.changedTouches.length;i+=1){const p=s.changedTouches[i];if(p.identifier===a.current)return{x:p.clientX,y:p.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function Ye(e,a,s){return(e-a)*100/(s-a)}function er(e,a,s){return(s-a)*e+a}function ar(e){if(Math.abs(e)<1){const s=e.toExponential().split("e-"),i=s[0].split(".")[1];return(i?i.length:0)+parseInt(s[1],10)}const a=e.toString().split(".")[1];return a?a.length:0}function rr(e,a,s){const i=Math.round((e-s)/a)*a+s;return Number(i.toFixed(ar(a)))}function la({values:e,newValue:a,index:s}){const i=e.slice();return i[s]=a,i.sort(Na)}function Ae({sliderRef:e,activeIndex:a,setActive:s}){var p,g,C;const i=qe(e.current);(!((p=e.current)!=null&&p.contains(i.activeElement))||Number((g=i==null?void 0:i.activeElement)==null?void 0:g.getAttribute("data-index"))!==a)&&((C=e.current)==null||C.querySelector(`[type="range"][data-index="${a}"]`).focus()),s&&s(a)}function Ve(e,a){return typeof e=="number"&&typeof a=="number"?e===a:typeof e=="object"&&typeof a=="object"?Qa(e,a):!1}const tr={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},nr=e=>e;let Me;function oa(){return Me===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Me=CSS.supports("touch-action","none"):Me=!0),Me}function ir(e){const{"aria-labelledby":a,defaultValue:s,disabled:i=!1,disableSwap:p=!1,isRtl:g=!1,marks:C=!1,max:d=100,min:c=0,name:x,onChange:M,onChangeCommitted:O,orientation:_="horizontal",rootRef:ue,scale:re=nr,step:V=1,shiftStep:$=10,tabIndex:te,value:pe}=e,R=y.useRef(void 0),[N,X]=y.useState(-1),[K,ne]=y.useState(-1),[he,ye]=y.useState(!1),ie=y.useRef(0),me=y.useRef(null),[I,f]=Ka({controlled:pe,default:s??c,name:"Slider"}),m=M&&((r,n,l)=>{const u=r.nativeEvent||r,b=new u.constructor(u.type,u);Object.defineProperty(b,"target",{writable:!0,value:{value:n,name:x}}),me.current=n,M(b,n,l)}),se=Array.isArray(I);let k=se?I.slice().sort(Na):[I];k=k.map(r=>r==null?c:ge(r,c,d));const fe=C===!0&&V!==null?[...Array(Math.floor((d-c)/V)+1)].map((r,n)=>({value:c+V*n})):C||[],h=fe.map(r=>r.value),[q,le]=y.useState(-1),v=y.useRef(null),G=Ga(ue,v),Xe=r=>n=>{var u;const l=Number(n.currentTarget.getAttribute("data-index"));ia(n.target)&&le(l),ne(l),(u=r==null?void 0:r.onFocus)==null||u.call(r,n)},Ke=r=>n=>{var l;ia(n.target)||le(-1),ne(-1),(l=r==null?void 0:r.onBlur)==null||l.call(r,n)},ke=(r,n)=>{const l=Number(r.currentTarget.getAttribute("data-index")),u=k[l],b=h.indexOf(u);let o=n;if(fe&&V==null){const z=h[h.length-1];o>=z?o=z:o<=h[0]?o=h[0]:o=o<u?h[b-1]:h[b+1]}if(o=ge(o,c,d),se){p&&(o=ge(o,k[l-1]||-1/0,k[l+1]||1/0));const z=o;o=la({values:k,newValue:o,index:l});let L=l;p||(L=o.indexOf(z)),Ae({sliderRef:v,activeIndex:L})}f(o),le(l),m&&!Ve(o,I)&&m(r,o,l),O&&O(r,me.current??o)},Ge=r=>n=>{var l;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(n.key)){n.preventDefault();const u=Number(n.currentTarget.getAttribute("data-index")),b=k[u];let o=null;if(V!=null){const z=n.shiftKey?$:V;switch(n.key){case"ArrowUp":o=de(b,z,1,c,d);break;case"ArrowRight":o=de(b,z,g?-1:1,c,d);break;case"ArrowDown":o=de(b,z,-1,c,d);break;case"ArrowLeft":o=de(b,z,g?1:-1,c,d);break;case"PageUp":o=de(b,$,1,c,d);break;case"PageDown":o=de(b,$,-1,c,d);break;case"Home":o=c;break;case"End":o=d;break}}else if(fe){const z=h[h.length-1],L=h.indexOf(b),w=[g?"ArrowRight":"ArrowLeft","ArrowDown","PageDown","Home"],F=[g?"ArrowLeft":"ArrowRight","ArrowUp","PageUp","End"];w.includes(n.key)?L===0?o=h[0]:o=h[L-1]:F.includes(n.key)&&(L===h.length-1?o=z:o=h[L+1])}o!=null&&ke(n,o)}(l=r==null?void 0:r.onKeyDown)==null||l.call(r,n)};Za(()=>{var r;i&&v.current.contains(document.activeElement)&&((r=document.activeElement)==null||r.blur())},[i]),i&&N!==-1&&X(-1),i&&q!==-1&&le(-1);const Se=r=>n=>{var l;(l=r.onChange)==null||l.call(r,n),ke(n,n.target.valueAsNumber)},Z=y.useRef(void 0);let J=_;g&&_==="horizontal"&&(J+="-reverse");const Q=({finger:r,move:n=!1})=>{const{current:l}=v,{width:u,height:b,bottom:o,left:z}=l.getBoundingClientRect();let L;J.startsWith("vertical")?L=(o-r.y)/b:L=(r.x-z)/u,J.includes("-reverse")&&(L=1-L);let w;if(w=er(L,c,d),V)w=rr(w,V,c);else{const ve=sa(h,w);w=h[ve]}w=ge(w,c,d);let F=0;if(se){n?F=Z.current:F=sa(k,w),p&&(w=ge(w,k[F-1]||-1/0,k[F+1]||1/0));const ve=w;w=la({values:k,newValue:w,index:F}),p&&n||(F=w.indexOf(ve),Z.current=F)}return{newValue:w,activeIndex:F}},H=aa(r=>{const n=Le(r,R);if(!n)return;if(ie.current+=1,r.type==="mousemove"&&r.buttons===0){W(r);return}const{newValue:l,activeIndex:u}=Q({finger:n,move:!0});Ae({sliderRef:v,activeIndex:u,setActive:X}),f(l),!he&&ie.current>Ha&&ye(!0),m&&!Ve(l,I)&&m(r,l,u)}),W=aa(r=>{const n=Le(r,R);if(ye(!1),!n)return;const{newValue:l}=Q({finger:n,move:!0});X(-1),r.type==="touchend"&&ne(-1),O&&O(r,me.current??l),R.current=void 0,ee()}),P=aa(r=>{if(i)return;oa()||r.preventDefault();const n=r.changedTouches[0];n!=null&&(R.current=n.identifier);const l=Le(r,R);if(l!==!1){const{newValue:b,activeIndex:o}=Q({finger:l});Ae({sliderRef:v,activeIndex:o,setActive:X}),f(b),m&&!Ve(b,I)&&m(r,b,o)}ie.current=0;const u=qe(v.current);u.addEventListener("touchmove",H,{passive:!0}),u.addEventListener("touchend",W,{passive:!0})}),ee=y.useCallback(()=>{const r=qe(v.current);r.removeEventListener("mousemove",H),r.removeEventListener("mouseup",W),r.removeEventListener("touchmove",H),r.removeEventListener("touchend",W)},[W,H]);y.useEffect(()=>{const{current:r}=v;return r.addEventListener("touchstart",P,{passive:oa()}),()=>{r.removeEventListener("touchstart",P),ee()}},[ee,P]),y.useEffect(()=>{i&&ee()},[i,ee]);const Ze=r=>n=>{var b;if((b=r.onMouseDown)==null||b.call(r,n),i||n.defaultPrevented||n.button!==0)return;n.preventDefault();const l=Le(n,R);if(l!==!1){const{newValue:o,activeIndex:z}=Q({finger:l});Ae({sliderRef:v,activeIndex:z,setActive:X}),f(o),m&&!Ve(o,I)&&m(n,o,z)}ie.current=0;const u=qe(v.current);u.addEventListener("mousemove",H,{passive:!0}),u.addEventListener("mouseup",W)},we=Ye(se?k[0]:c,c,d),D=Ye(k[k.length-1],c,d)-we,be=(r={})=>{const n=ra(r),l={onMouseDown:Ze(n||{})},u={...n,...l};return{...r,ref:G,...u}},ze=r=>n=>{var u;(u=r.onMouseOver)==null||u.call(r,n);const l=Number(n.currentTarget.getAttribute("data-index"));ne(l)},Te=r=>n=>{var l;(l=r.onMouseLeave)==null||l.call(r,n),ne(-1)},je=(r={})=>{const n=ra(r),l={onMouseOver:ze(n||{}),onMouseLeave:Te(n||{})};return{...r,...n,...l}},Ce=r=>({pointerEvents:N!==-1&&N!==r?"none":void 0});let oe;return _==="vertical"&&(oe=g?"vertical-rl":"vertical-lr"),{active:N,axis:J,axisProps:tr,dragging:he,focusedThumbIndex:q,getHiddenInputProps:(r={})=>{const n=ra(r),l={onChange:Se(n||{}),onFocus:Xe(n||{}),onBlur:Ke(n||{}),onKeyDown:Ge(n||{})},u={...n,...l};return{tabIndex:te,"aria-labelledby":a,"aria-orientation":_,"aria-valuemax":re(d),"aria-valuemin":re(c),name:x,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":e.step??void 0,disabled:i,...r,...u,style:{...Ja,direction:g?"rtl":"ltr",width:"100%",height:"100%",writingMode:oe}}},getRootProps:be,getThumbProps:je,marks:fe,open:K,range:se,rootRef:G,trackLeap:D,trackOffset:we,values:k,getThumbStyle:Ce}}const sr=e=>!e||!Ue(e);function lr(e){return _a("MuiSlider",e)}const E=qa("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),or=e=>{const{open:a}=e;return{offset:xe(a&&E.valueLabelOpen),circle:E.valueLabelCircle,label:E.valueLabelLabel}};function dr(e){const{children:a,className:s,value:i}=e,p=or(e);return a?y.cloneElement(a,{className:a.props.className},t.jsxs(y.Fragment,{children:[a.props.children,t.jsx("span",{className:xe(p.offset,s),"aria-hidden":!0,children:t.jsx("span",{className:p.circle,children:t.jsx("span",{className:p.label,children:i})})})]})):null}function da(e){return e}const cr=ae("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:s}=e;return[a.root,a[`color${Y(s.color)}`],s.size!=="medium"&&a[`size${Y(s.size)}`],s.marked&&a.marked,s.orientation==="vertical"&&a.vertical,s.track==="inverted"&&a.trackInverted,s.track===!1&&a.trackFalse]}})(ce(({theme:e})=>({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${E.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${E.dragging}`]:{[`& .${E.thumb}, & .${E.track}`]:{transition:"none"}},variants:[...Object.entries(e.palette).filter(ta()).map(([a])=>({props:{color:a},style:{color:(e.vars||e).palette[a].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}))),ur=ae("span",{name:"MuiSlider",slot:"Rail"})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),pr=ae("span",{name:"MuiSlider",slot:"Track"})(ce(({theme:e})=>({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.entries(e.palette).filter(ta()).map(([a])=>({props:{color:a,track:"inverted"},style:{...e.vars?{backgroundColor:e.vars.palette.Slider[`${a}Track`],borderColor:e.vars.palette.Slider[`${a}Track`]}:{backgroundColor:e.lighten(e.palette[a].main,.62),borderColor:e.lighten(e.palette[a].main,.62),...e.applyStyles("dark",{backgroundColor:e.darken(e.palette[a].main,.5)}),...e.applyStyles("dark",{borderColor:e.darken(e.palette[a].main,.5)})}}}))]}))),mr=ae("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,a)=>{const{ownerState:s}=e;return[a.thumb,a[`thumbColor${Y(s.color)}`],s.size!=="medium"&&a[`thumbSize${Y(s.size)}`]]}})(ce(({theme:e})=>({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${E.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.entries(e.palette).filter(ta()).map(([a])=>({props:{color:a},style:{[`&:hover, &.${E.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.alpha((e.vars||e).palette[a].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${E.active}`]:{boxShadow:`0px 0px 0px 14px ${e.alpha((e.vars||e).palette[a].main,.16)}`}}}))]}))),fr=ae(dr,{name:"MuiSlider",slot:"ValueLabel"})(ce(({theme:e})=>({zIndex:1,whiteSpace:"nowrap",...e.typography.body2,fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${E.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${E.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]}))),br=ae("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>Ea(e)&&e!=="markActive",overridesResolver:(e,a)=>{const{markActive:s}=e;return[a.mark,s&&a.markActive]}})(ce(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]}))),vr=ae("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>Ea(e)&&e!=="markLabelActive"})(ce(({theme:e})=>({...e.typography.body2,color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]}))),gr=e=>{const{disabled:a,dragging:s,marked:i,orientation:p,track:g,classes:C,color:d,size:c}=e,x={root:["root",a&&"disabled",s&&"dragging",i&&"marked",p==="vertical"&&"vertical",g==="inverted"&&"trackInverted",g===!1&&"trackFalse",d&&`color${Y(d)}`,c&&`size${Y(c)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",a&&"disabled",c&&`thumbSize${Y(c)}`,d&&`thumbColor${Y(d)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Ya(x,lr,C)},xr=({children:e})=>e,hr=y.forwardRef(function(a,s){const i=Ua({props:a,name:"MuiSlider"}),p=Xa(),{"aria-label":g,"aria-valuetext":C,"aria-labelledby":d,component:c="span",components:x={},componentsProps:M={},color:O="primary",classes:_,className:ue,disableSwap:re=!1,disabled:V=!1,getAriaLabel:$,getAriaValueText:te,marks:pe=!1,max:R=100,min:N=0,name:X,onChange:K,onChangeCommitted:ne,orientation:he="horizontal",shiftStep:ye=10,size:ie="medium",step:me=1,scale:I=da,slotProps:f,slots:m,tabIndex:se,track:k="normal",value:fe,valueLabelDisplay:h="off",valueLabelFormat:q=da,...le}=i,v={...i,isRtl:p,max:R,min:N,classes:_,disabled:V,disableSwap:re,orientation:he,marks:pe,color:O,size:ie,step:me,shiftStep:ye,scale:I,track:k,valueLabelDisplay:h,valueLabelFormat:q},{axisProps:G,getRootProps:Xe,getHiddenInputProps:Ke,getThumbProps:ke,open:Ge,active:Se,axis:Z,focusedThumbIndex:J,range:Q,dragging:H,marks:W,values:P,trackOffset:ee,trackLeap:Ze,getThumbStyle:we}=ir({...v,rootRef:s});v.marked=W.length>0&&W.some(S=>S.label),v.dragging=H,v.focusedThumbIndex=J;const D=gr(v),be=(m==null?void 0:m.root)??x.Root??cr,ze=(m==null?void 0:m.rail)??x.Rail??ur,Te=(m==null?void 0:m.track)??x.Track??pr,je=(m==null?void 0:m.thumb)??x.Thumb??mr,Ce=(m==null?void 0:m.valueLabel)??x.ValueLabel??fr,oe=(m==null?void 0:m.mark)??x.Mark??br,Pe=(m==null?void 0:m.markLabel)??x.MarkLabel??vr,r=(m==null?void 0:m.input)??x.Input??"input",n=(f==null?void 0:f.root)??M.root,l=(f==null?void 0:f.rail)??M.rail,u=(f==null?void 0:f.track)??M.track,b=(f==null?void 0:f.thumb)??M.thumb,o=(f==null?void 0:f.valueLabel)??M.valueLabel,z=(f==null?void 0:f.mark)??M.mark,L=(f==null?void 0:f.markLabel)??M.markLabel,w=(f==null?void 0:f.input)??M.input,F=U({elementType:be,getSlotProps:Xe,externalSlotProps:n,externalForwardedProps:le,additionalProps:{...sr(be)&&{as:c}},ownerState:{...v,...n==null?void 0:n.ownerState},className:[D.root,ue]}),ve=U({elementType:ze,externalSlotProps:l,ownerState:v,className:D.rail}),$a=U({elementType:Te,externalSlotProps:u,additionalProps:{style:{...G[Z].offset(ee),...G[Z].leap(Ze)}},ownerState:{...v,...u==null?void 0:u.ownerState},className:D.track}),Je=U({elementType:je,getSlotProps:ke,externalSlotProps:b,ownerState:{...v,...b==null?void 0:b.ownerState},className:D.thumb}),Wa=U({elementType:Ce,externalSlotProps:o,ownerState:{...v,...o==null?void 0:o.ownerState},className:D.valueLabel}),Qe=U({elementType:oe,externalSlotProps:z,ownerState:v,className:D.mark}),He=U({elementType:Pe,externalSlotProps:L,ownerState:v,className:D.markLabel}),Ba=U({elementType:r,getSlotProps:Ke,externalSlotProps:w,ownerState:v});return t.jsxs(be,{...F,children:[t.jsx(ze,{...ve}),t.jsx(Te,{...$a}),W.filter(S=>S.value>=N&&S.value<=R).map((S,T)=>{const ea=Ye(S.value,N,R),De=G[Z].offset(ea);let B;return k===!1?B=P.includes(S.value):B=k==="normal"&&(Q?S.value>=P[0]&&S.value<=P[P.length-1]:S.value<=P[0])||k==="inverted"&&(Q?S.value<=P[0]||S.value>=P[P.length-1]:S.value>=P[0]),t.jsxs(y.Fragment,{children:[t.jsx(oe,{"data-index":T,...Qe,...!Ue(oe)&&{markActive:B},style:{...De,...Qe.style},className:xe(Qe.className,B&&D.markActive)}),S.label!=null?t.jsx(Pe,{"aria-hidden":!0,"data-index":T,...He,...!Ue(Pe)&&{markLabelActive:B},style:{...De,...He.style},className:xe(D.markLabel,He.className,B&&D.markLabelActive),children:S.label}):null]},T)}),P.map((S,T)=>{const ea=Ye(S,N,R),De=G[Z].offset(ea),B=h==="off"?xr:Ce;return t.jsx(B,{...!Ue(B)&&{valueLabelFormat:q,valueLabelDisplay:h,value:typeof q=="function"?q(I(S),T):q,index:T,open:Ge===T||Se===T||h==="on",disabled:V},...Wa,children:t.jsx(je,{"data-index":T,...Je,className:xe(D.thumb,Je.className,Se===T&&D.active,J===T&&D.focusVisible),style:{...De,...we(T),...Je.style},children:t.jsx(r,{"data-index":T,"aria-label":$?$(T):g,"aria-valuenow":I(S),"aria-labelledby":d,"aria-valuetext":te?te(I(S),T):C,value:P[T],...Ba})})},T)})]})}),yr="_wrapper_1x4i0_18",Re={wrapper:yr,"wrapper--small":"_wrapper--small_1x4i0_23","wrapper--large":"_wrapper--large_1x4i0_27","wrapper--disabled":"_wrapper--disabled_1x4i0_31"},kr={small:"small",default:"small",large:"medium"},j=({value:e=0,onChange:a,min:s=0,max:i=100,step:p=1,showMarks:g=!0,showLabels:C=!1,size:d="default",variant:c="primary",disabled:x=!1,className:M,"aria-label":O})=>{const _=Array.isArray(e),ue=(X,K)=>{Array.isArray(K)?a==null||a([K[0],K[1]]):a==null||a(K)},re=[Re.wrapper,Re[`wrapper--${d}`],Re[`wrapper--${c}`],x&&Re["wrapper--disabled"],M].filter(Boolean).join(" "),V=x?"var(--slider-track-color-disabled)":c==="dark"?"var(--slider-track-color-dark)":"var(--slider-track-color)",$=x?"var(--slider-thumb-color-disabled)":c==="dark"?"var(--slider-thumb-color-dark)":"var(--slider-thumb-color)",te=x?"var(--slider-rail-color-disabled)":"var(--slider-rail-color)",pe=x?"var(--slider-mark-color-disabled)":c==="dark"?"var(--slider-mark-color-dark)":"var(--slider-mark-color)",R={color:V,height:d==="large"?"var(--slider-track-height-lg)":d==="small"?"var(--slider-track-height-sm)":"var(--slider-track-height)",padding:"var(--slider-padding) 0","& .MuiSlider-thumb":{width:d==="large"?"var(--slider-thumb-size-lg)":d==="small"?"var(--slider-thumb-size-sm)":"var(--slider-thumb-size)",height:d==="large"?"var(--slider-thumb-size-lg)":d==="small"?"var(--slider-thumb-size-sm)":"var(--slider-thumb-size)",backgroundColor:$,border:`var(--slider-thumb-border-width) solid ${$}`,boxShadow:"none","&:hover, &.Mui-focusVisible":{boxShadow:`0 0 0 var(--slider-thumb-focus-ring-size) ${c==="dark"?"var(--slider-thumb-focus-ring-dark)":"var(--slider-thumb-focus-ring)"}`},"&.Mui-active":{boxShadow:`0 0 0 var(--slider-thumb-focus-ring-size) ${c==="dark"?"var(--slider-thumb-focus-ring-dark)":"var(--slider-thumb-focus-ring)"}`}},"& .MuiSlider-track":{backgroundColor:V,border:"none",borderRadius:"var(--slider-track-radius)"},"& .MuiSlider-rail":{backgroundColor:te,opacity:1,borderRadius:"var(--slider-track-radius)"},"& .MuiSlider-mark":{backgroundColor:pe,width:d==="large"?"var(--slider-mark-size-lg)":d==="small"?"var(--slider-mark-size-sm)":"var(--slider-mark-size)",height:d==="large"?"var(--slider-mark-size-lg)":d==="small"?"var(--slider-mark-size-sm)":"var(--slider-mark-size)",borderRadius:"50%",transform:"translate(-50%, -50%)",opacity:1},"& .MuiSlider-markLabel":{fontFamily:"var(--brand-font-primary)",fontSize:"var(--slider-mark-label-font-size)",color:x?"var(--slider-mark-label-color-disabled)":"var(--slider-mark-label-color)",top:"-var(--slider-mark-label-offset)"},"& .MuiSlider-valueLabel":{fontFamily:"var(--brand-font-primary)",fontSize:"var(--slider-mark-label-font-size)",backgroundColor:$,borderRadius:"var(--global-spacing-radius-4px)"},"& .MuiTouchRipple-root":{display:"none"}},N=g?[{value:s,label:String(s)},{value:i,label:String(i)}]:!1;return t.jsx("div",{className:re,children:t.jsx(hr,{value:(Array.isArray(e),e),onChange:ue,min:s,max:i,step:p,marks:N,size:kr[d],disabled:x,valueLabelDisplay:C?"auto":"off","aria-label":O,sx:R,disableSwap:_})})};j.__docgenInfo={description:"",methods:[],displayName:"SliderParts",props:{value:{required:!1,tsType:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},description:"Current value (single thumb) or [min, max] for range",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | [number, number]) => void",signature:{arguments:[{type:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},name:"value"}],return:{name:"void"}}},description:"Callback fired on change"},min:{required:!1,tsType:{name:"number"},description:"Minimum value of the range",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum value of the range",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Step interval",defaultValue:{value:"1",computed:!1}},showMarks:{required:!1,tsType:{name:"boolean"},description:"Show marks at min and max",defaultValue:{value:"true",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"Show value labels above thumbs",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'dark'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'dark'"}]},description:"Colour variant",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable interaction",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const na=()=>t.jsxs(A,{children:[t.jsx(A.Header,{title:"SliderParts",subtitle:"A single or range slider exposing the individual design-system parts: track, rail, thumb, and endpoint marks. Built on MUI Slider with design-token colours and three sizes."}),t.jsxs(A.BodyText,{children:[t.jsx("strong",{children:"SliderParts"})," wraps MUI ",t.jsx("code",{children:"Slider"})," and applies the Echo design system's colour tokens and sizing scale. The component can operate as a single-thumb slider or a range slider when the ",t.jsx("code",{children:"value"})," prop is an array. Endpoint marks (min/max dots with labels) are shown by default via ",t.jsx("code",{children:"showMarks"}),"."]}),t.jsx(A.Anatomy,{parts:[{number:1,label:"Rail",description:"The full-width background track. Always rendered in a neutral gray."},{number:2,label:"Track",description:"The filled portion of the rail from min (or start thumb) to the current value. Renders in the variant colour."},{number:3,label:"Thumb",description:"The circular drag handle. Rendered in the variant colour."},{number:4,label:"Mark",description:"Dot indicators at min and max endpoints. Labelled with the numeric value."}]}),t.jsxs(A.Section,{title:"Variants",children:[t.jsx(A.Subsection,{title:"Primary (Sky-Blue)",children:t.jsx("div",{style:{padding:"32px 0",maxWidth:"360px"},children:t.jsx(j,{variant:"primary",value:60,min:0,max:100})})}),t.jsx(A.Subsection,{title:"Dark (Navy)",children:t.jsx("div",{style:{padding:"32px 0",maxWidth:"360px"},children:t.jsx(j,{variant:"dark",value:60,min:0,max:100})})})]}),t.jsx(A.Section,{title:"Sizes",children:t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"40px",padding:"32px 0",maxWidth:"360px"},children:["small","default","large"].map(e=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[t.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"56px",textTransform:"capitalize"},children:e}),t.jsx("div",{style:{flex:1},children:t.jsx(j,{size:e,value:50,min:0,max:100})})]},e))})}),t.jsx(A.TokenTable,{title:"Design Tokens",description:"SliderParts uses the following component-level tokens.",tokens:[{name:"--slider-track-color",description:"Track and thumb fill — primary (sky-blue)"},{name:"--slider-track-color-dark",description:"Track and thumb fill — dark (dark-blue)"},{name:"--slider-track-color-disabled",description:"Track fill when disabled (gray-300)"},{name:"--slider-rail-color",description:"Rail background (gray-200)"},{name:"--slider-rail-color-disabled",description:"Rail background when disabled (gray-100)"},{name:"--slider-thumb-color",description:"Thumb fill — primary (sky-blue)"},{name:"--slider-thumb-color-dark",description:"Thumb fill — dark (dark-blue)"},{name:"--slider-thumb-color-disabled",description:"Thumb fill when disabled (gray-300)"},{name:"--slider-thumb-size",description:"Thumb diameter — default size (12px)"},{name:"--slider-thumb-size-sm",description:"Thumb diameter — small size (8px)"},{name:"--slider-thumb-size-lg",description:"Thumb diameter — large size (16px)"},{name:"--slider-track-height",description:"Track height — default size (4px)"},{name:"--slider-track-height-sm",description:"Track height — small size (2px)"},{name:"--slider-track-height-lg",description:"Track height — large size (6px)"},{name:"--slider-mark-size",description:"Endpoint mark dot size — default (8px)"},{name:"--slider-mark-label-font-size",description:"Font size for endpoint labels"},{name:"--slider-disabled-opacity",description:"Opacity when disabled (0.5)"}]}),t.jsx(A.CodeBlock,{children:`import { SliderParts } from './BuildingBlocks/SliderParts';

// Single thumb
<SliderParts value={val} onChange={(v) => setVal(v as number)} min={0} max={100} />

// Dark variant
<SliderParts variant="dark" value={val} onChange={setVal} />

// Range slider
<SliderParts value={[20, 80]} onChange={(v) => setRange(v as [number, number])} />

// Sizes
<SliderParts size="small" value={val} onChange={setVal} />
<SliderParts size="large" value={val} onChange={setVal} />

// Disabled
<SliderParts value={50} disabled />`}),t.jsxs(A.Principles,{children:[t.jsx(A.PrincipleCard,{number:1,title:"Visible Range Cues",children:"Always show endpoint marks (showMarks=true by default) so users understand the full range at a glance without needing to interact."}),t.jsx(A.PrincipleCard,{number:2,title:"Accessible Interaction",children:"MUI Slider provides keyboard support (arrow keys, Home/End) and ARIA attributes. Always supply an aria-label when no visible label is present."}),t.jsx(A.PrincipleCard,{number:3,title:"Consistent Colour",children:"Use primary for standard contexts and dark for high-contrast surfaces or brand-aligned scenarios."})]}),t.jsx(A.Footer,{componentName:"SliderParts"})]});na.__docgenInfo={description:"",methods:[],displayName:"SliderPartsDocs"};const Er={title:"Foundation/BuildingBlocks/SliderParts",component:j,parameters:{docs:{page:()=>t.jsx(na,{})}},argTypes:{value:{control:"number"},min:{control:"number"},max:{control:"number"},size:{control:"select",options:["small","default","large"]},variant:{control:"select",options:["primary","dark"]},disabled:{control:"boolean"},showMarks:{control:"boolean"},showLabels:{control:"boolean"}},args:{value:40,min:0,max:100,size:"default",variant:"primary",disabled:!1,showMarks:!0,showLabels:!1}},Ie={name:"Documentation",render:()=>t.jsx(na,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},Fe={name:"Playground",render:e=>{const a=()=>{const[s,i]=y.useState(e.value??40);return t.jsx("div",{style:{padding:"40px 24px"},children:t.jsx(j,{...e,value:s,onChange:p=>i(p)})})};return t.jsx(a,{})}},Ee={name:"Default",render:()=>{const e=()=>{const[a,s]=y.useState(40);return t.jsx("div",{style:{padding:"40px 24px",maxWidth:"320px"},children:t.jsx(j,{value:a,onChange:i=>s(i),min:0,max:100})})};return t.jsx(e,{})},parameters:{controls:{disable:!0}}},Ne={name:"Sizes",render:()=>{const e=()=>{const[a,s]=y.useState({small:30,default:50,large:70});return t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px",padding:"40px 24px"},children:["small","default","large"].map(i=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[t.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"56px",textTransform:"capitalize"},children:i}),t.jsx("div",{style:{flex:1,maxWidth:"280px"},children:t.jsx(j,{size:i,value:a[i],onChange:p=>s(g=>({...g,[i]:p})),min:0,max:100})})]},i))})};return t.jsx(e,{})},parameters:{controls:{disable:!0}}},$e={name:"Status — Primary",render:()=>{const e=()=>{const[a,s]=y.useState(60);return t.jsxs("div",{style:{padding:"40px 24px",maxWidth:"360px",display:"flex",flexDirection:"column",gap:"40px"},children:[t.jsx(j,{variant:"primary",value:a,onChange:i=>s(i),min:0,max:100}),t.jsx(j,{variant:"primary",value:30,min:0,max:100,disabled:!0})]})};return t.jsx(e,{})},parameters:{controls:{disable:!0}}},We={name:"Status — Dark",render:()=>{const e=()=>{const[a,s]=y.useState(60);return t.jsxs("div",{style:{padding:"40px 24px",maxWidth:"360px",display:"flex",flexDirection:"column",gap:"40px"},children:[t.jsx(j,{variant:"dark",value:a,onChange:i=>s(i),min:0,max:100}),t.jsx(j,{variant:"dark",value:30,min:0,max:100,disabled:!0})]})};return t.jsx(e,{})},parameters:{controls:{disable:!0}}},Be={name:"Status — Disabled",render:()=>t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"40px",padding:"40px 24px",maxWidth:"360px"},children:["primary","dark"].map(e=>t.jsxs("div",{children:[t.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",marginBottom:"16px",textTransform:"capitalize"},children:[e," — Disabled"]}),t.jsx(j,{variant:e,value:40,min:0,max:100,disabled:!0})]},e))}),parameters:{controls:{disable:!0}}},Oe={name:"All Interactive States",render:()=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px 48px",padding:"40px 24px"},children:["primary","dark"].map(e=>[!1,!0].map(a=>t.jsxs("div",{children:[t.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"16px",textTransform:"capitalize"},children:[e,a?" — Disabled":""]}),t.jsx(j,{variant:e,value:55,min:0,max:100,disabled:a})]},`${e}-${a}`)))}),parameters:{controls:{disable:!0}}},_e={name:"Full Design Matrix",render:()=>{const e=["small","default","large"],a=["primary","dark"];return t.jsx("div",{style:{padding:"24px",overflowX:"auto"},children:a.map(s=>t.jsxs("div",{style:{marginBottom:"40px"},children:[t.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",textTransform:"capitalize"},children:["Variant: ",s]}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"64px 1fr 1fr",gap:"8px 32px",alignItems:"center"},children:[t.jsx("div",{}),t.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:600,color:"var(--global-color-neutral-gray-500)"},children:"Active"}),t.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:600,color:"var(--global-color-neutral-gray-500)"},children:"Disabled"}),e.map(i=>t.jsxs(Oa.Fragment,{children:[t.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize"},children:i}),t.jsx("div",{style:{paddingTop:"16px",paddingBottom:"16px"},children:t.jsx(j,{variant:s,size:i,value:60,min:0,max:100})}),t.jsx("div",{style:{paddingTop:"16px",paddingBottom:"16px"},children:t.jsx(j,{variant:s,size:i,value:60,min:0,max:100,disabled:!0})})]},i))]})]},s))})},parameters:{controls:{disable:!0}}};var ca,ua,pa;Ie.parameters={...Ie.parameters,docs:{...(ca=Ie.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <SliderPartsDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen'
  }
}`,...(pa=(ua=Ie.parameters)==null?void 0:ua.docs)==null?void 0:pa.source}}};var ma,fa,ba;Fe.parameters={...Fe.parameters,docs:{...(ma=Fe.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const Demo = () => {
      const [val, setVal] = useState(args.value as number ?? 40);
      return <div style={{
        padding: '40px 24px'
      }}>
          <SliderParts {...args} value={val} onChange={v => setVal(v as number)} />
        </div>;
    };
    return <Demo />;
  }
}`,...(ba=(fa=Fe.parameters)==null?void 0:fa.docs)==null?void 0:ba.source}}};var va,ga,xa;Ee.parameters={...Ee.parameters,docs:{...(va=Ee.parameters)==null?void 0:va.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    const Demo = () => {
      const [val, setVal] = useState(40);
      return <div style={{
        padding: '40px 24px',
        maxWidth: '320px'
      }}>
          <SliderParts value={val} onChange={v => setVal(v as number)} min={0} max={100} />
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(xa=(ga=Ee.parameters)==null?void 0:ga.docs)==null?void 0:xa.source}}};var ha,ya,ka;Ne.parameters={...Ne.parameters,docs:{...(ha=Ne.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => {
    const SizeDemo = () => {
      const [vals, setVals] = useState<Record<SliderPartsSize, number>>({
        small: 30,
        default: 50,
        large: 70
      });
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        padding: '40px 24px'
      }}>
          {(['small', 'default', 'large'] as SliderPartsSize[]).map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
              <span style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)',
            width: '56px',
            textTransform: 'capitalize'
          }}>{size}</span>
              <div style={{
            flex: 1,
            maxWidth: '280px'
          }}>
                <SliderParts size={size} value={vals[size]} onChange={v => setVals(p => ({
              ...p,
              [size]: v as number
            }))} min={0} max={100} />
              </div>
            </div>)}
        </div>;
    };
    return <SizeDemo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ka=(ya=Ne.parameters)==null?void 0:ya.docs)==null?void 0:ka.source}}};var Sa,wa,za;$e.parameters={...$e.parameters,docs:{...(Sa=$e.parameters)==null?void 0:Sa.docs,source:{originalSource:`{
  name: 'Status — Primary',
  render: () => {
    const Demo = () => {
      const [val, setVal] = useState(60);
      return <div style={{
        padding: '40px 24px',
        maxWidth: '360px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
          <SliderParts variant="primary" value={val} onChange={v => setVal(v as number)} min={0} max={100} />
          <SliderParts variant="primary" value={30} min={0} max={100} disabled />
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(za=(wa=$e.parameters)==null?void 0:wa.docs)==null?void 0:za.source}}};var Ta,ja,Ca;We.parameters={...We.parameters,docs:{...(Ta=We.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  name: 'Status — Dark',
  render: () => {
    const Demo = () => {
      const [val, setVal] = useState(60);
      return <div style={{
        padding: '40px 24px',
        maxWidth: '360px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
          <SliderParts variant="dark" value={val} onChange={v => setVal(v as number)} min={0} max={100} />
          <SliderParts variant="dark" value={30} min={0} max={100} disabled />
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ca=(ja=We.parameters)==null?void 0:ja.docs)==null?void 0:Ca.source}}};var Pa,Da,La;Be.parameters={...Be.parameters,docs:{...(Pa=Be.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  name: 'Status — Disabled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '40px 24px',
    maxWidth: '360px'
  }}>
      {(['primary', 'dark'] as SliderPartsVariant[]).map(variant => <div key={variant}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '16px',
        textTransform: 'capitalize'
      }}>
            {variant} — Disabled
          </div>
          <SliderParts variant={variant} value={40} min={0} max={100} disabled />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(La=(Da=Be.parameters)==null?void 0:Da.docs)==null?void 0:La.source}}};var Aa,Va,Ma;Oe.parameters={...Oe.parameters,docs:{...(Aa=Oe.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px 48px',
    padding: '40px 24px'
  }}>
      {(['primary', 'dark'] as SliderPartsVariant[]).map(variant => [false, true].map(disabled => <div key={\`\${variant}-\${disabled}\`}>
            <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '16px',
        textTransform: 'capitalize'
      }}>
              {variant}{disabled ? ' — Disabled' : ''}
            </div>
            <SliderParts variant={variant} value={55} min={0} max={100} disabled={disabled} />
          </div>))}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ma=(Va=Oe.parameters)==null?void 0:Va.docs)==null?void 0:Ma.source}}};var Ra,Ia,Fa;_e.parameters={..._e.parameters,docs:{...(Ra=_e.parameters)==null?void 0:Ra.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const sizes: SliderPartsSize[] = ['small', 'default', 'large'];
    const variants: SliderPartsVariant[] = ['primary', 'dark'];
    return <div style={{
      padding: '24px',
      overflowX: 'auto'
    }}>
        {variants.map(variant => <div key={variant} style={{
        marginBottom: '40px'
      }}>
            <div style={{
          fontFamily: 'var(--brand-font-primary)',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--global-color-neutral-gray-700)',
          marginBottom: '16px',
          textTransform: 'capitalize'
        }}>
              Variant: {variant}
            </div>
            <div style={{
          display: 'grid',
          gridTemplateColumns: '64px 1fr 1fr',
          gap: '8px 32px',
          alignItems: 'center'
        }}>
              <div />
              <div style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)'
          }}>Active</div>
              <div style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)'
          }}>Disabled</div>
              {sizes.map(size => <React.Fragment key={size}>
                  <div style={{
              fontFamily: 'var(--brand-font-primary)',
              fontSize: '11px',
              color: 'var(--global-color-neutral-gray-700)',
              textTransform: 'capitalize'
            }}>{size}</div>
                  <div style={{
              paddingTop: '16px',
              paddingBottom: '16px'
            }}>
                    <SliderParts variant={variant} size={size} value={60} min={0} max={100} />
                  </div>
                  <div style={{
              paddingTop: '16px',
              paddingBottom: '16px'
            }}>
                    <SliderParts variant={variant} size={size} value={60} min={0} max={100} disabled />
                  </div>
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
}`,...(Fa=(Ia=_e.parameters)==null?void 0:Ia.docs)==null?void 0:Fa.source}}};const Nr=["Documentation","Playground","Default","Sizes","StatusPrimary","StatusDark","StatusDisabled","AllInteractiveStates","FullDesignMatrix"];export{Oe as AllInteractiveStates,Ee as Default,Ie as Documentation,_e as FullDesignMatrix,Fe as Playground,Ne as Sizes,We as StatusDark,Be as StatusDisabled,$e as StatusPrimary,Nr as __namedExportsOrder,Er as default};
