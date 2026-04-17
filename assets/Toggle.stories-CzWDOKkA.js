import{r as v,j as a}from"./iframe-yYHRsVJt.js";import{g as ke,a as Se,u as we,b as Te,d as h,e as je,s as _}from"./DefaultPropsProvider-C4YbDAPt.js";import{c as Ce}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{S as De}from"./SwitchBase-Db2d9xjv.js";import{m as B}from"./memoTheme-kWA5zr0K.js";import{u as V}from"./useSlot-BT5-IB_J.js";import{D as i}from"./DocsTemplate-CVZXQ1IJ.js";import"./preload-helper-Dp1pzeXC.js";import"./useFormControl-CbereZy2.js";import"./useControlled-BniAgmFg.js";import"./ButtonBase-B-kEIRw1.js";import"./index-BCZxshSi.js";import"./emotion-react.browser.esm-CFTn_U6A.js";import"./useForkRef-CGZCypm5.js";import"./useEventCallback-tu6gMmUS.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-Cj36ZfpF.js";import"./isHostComponent-DVu5iVWx.js";function ze(e){return ke("MuiSwitch",e)}const c=Se("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),Oe=e=>{const{classes:t,edge:l,size:s,color:n,checked:u,disabled:o}=e,d={root:["root",l&&`edge${h(l)}`,`size${h(s)}`],switchBase:["switchBase",`color${h(n)}`,u&&"checked",o&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},f=je(d,ze,t);return{...t,...f}},Le=_("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.edge&&t[`edge${h(l.edge)}`],t[`size${h(l.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${c.thumb}`]:{width:16,height:16},[`& .${c.switchBase}`]:{padding:4,[`&.${c.checked}`]:{transform:"translateX(16px)"}}}}]}),Ie=_(De,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.switchBase,{[`& .${c.input}`]:t.input},l.color!=="default"&&t[`color${h(l.color)}`]]}})(B(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${c.checked}`]:{transform:"translateX(20px)"},[`&.${c.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${c.checked} + .${c.track}`]:{opacity:.5},[`&.${c.disabled} + .${c.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${c.input}`]:{left:"-100%",width:"300%"}})),B(({theme:e})=>({"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(Ce(["light"])).map(([t])=>({props:{color:t},style:{[`&.${c.checked}`]:{color:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t}DisabledColor`]:`${e.palette.mode==="light"?e.lighten(e.palette[t].main,.62):e.darken(e.palette[t].main,.55)}`}},[`&.${c.checked} + .${c.track}`]:{backgroundColor:(e.vars||e).palette[t].main}}}))]}))),Ae=_("span",{name:"MuiSwitch",slot:"Track"})(B(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`}))),$e=_("span",{name:"MuiSwitch",slot:"Thumb"})(B(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),Be=v.forwardRef(function(t,l){const s=we({props:t,name:"MuiSwitch"}),{className:n,color:u="primary",edge:o=!1,size:d="medium",sx:f,slots:b={},slotProps:p={},...k}=s,g={...s,color:u,edge:o,size:d},m=Oe(g),x={slots:b,slotProps:p},[E,M]=V("root",{className:Te(m.root,n),elementType:Le,externalForwardedProps:x,ownerState:g,additionalProps:{sx:f}}),[N,F]=V("thumb",{className:m.thumb,elementType:$e,externalForwardedProps:x,ownerState:g}),S=a.jsx(N,{...F}),[w,ve]=V("track",{className:m.track,elementType:Ae,externalForwardedProps:x,ownerState:g});return a.jsxs(E,{...M,children:[a.jsx(Ie,{type:"checkbox",icon:S,checkedIcon:S,ref:l,ownerState:g,...k,classes:{...m,root:m.switchBase},slots:{...b.switchBase&&{root:b.switchBase},...b.input&&{input:b.input}},slotProps:{...p.switchBase&&{root:typeof p.switchBase=="function"?p.switchBase(g):p.switchBase},input:{role:"switch"},...p.input&&{input:typeof p.input=="function"?p.input(g):p.input}}}),a.jsx(w,{...ve})]})}),_e="_wrapper_vlvp3_10",Re="_label_vlvp3_24",y={wrapper:_e,"wrapper--disabled":"_wrapper--disabled_vlvp3_18",label:Re,switch:"_switch_vlvp3_40"},xe="M5.99986 13.6134L1.85986 9.47336L3.74653 7.58669L5.99986 9.84669L12.5865 3.25336L14.4732 5.14002L5.99986 13.6134Z",ye="M13.3332 4.60669L11.3932 2.66669L7.99984 6.06002L4.6065 2.66669L2.6665 4.60669L6.05984 8.00002L2.6665 11.3934L4.6065 13.3334L7.99984 9.94002L11.3932 13.3334L13.3332 11.3934L9.93984 8.00002L13.3332 4.60669Z",R=(e,t)=>encodeURIComponent(`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="${e}" fill="${t}"/></svg>`),Pe=R(xe,"#227f1a"),Ee=R(ye,"#ce2031"),Me=R(xe,"#B8BEC7"),Ne=R(ye,"#B8BEC7"),T=e=>`url("data:image/svg+xml,${e}")`,Fe={small:{trackW:44,trackH:24,thumb:18,inset:3},default:{trackW:52,trackH:28,thumb:22,inset:3},large:{trackW:64,trackH:34,thumb:28,inset:3}},H={primary:{on:"var(--global-color-primary-sky-blue)",off:"var(--global-color-primary-blue-dark-blue, #191E3C)"},blue:{on:"var(--global-color-primary-sky-blue)",off:"var(--global-color-primary-blue-dark-blue, #191E3C)"},dark:{on:"var(--global-color-primary-sky-blue)",off:"var(--global-color-primary-blue-dark-blue, #191E3C)"},status:{on:"var(--toggle-track-bg-status-on)",off:"var(--global-color-primary-sky-blue)"}},Ve={primary:"var(--toggle-track-border-primary)",blue:"var(--toggle-track-border-blue)",dark:"var(--toggle-track-border-dark)",status:"var(--toggle-track-border-status)"},r=({checked:e=!1,onChange:t,size:l="default",variant:s="primary",disabled:n=!1,"aria-label":u,label:o,labelPosition:d="right",className:f})=>{const b=w=>{t==null||t(w.target.checked,w)},{trackW:p,trackH:k,thumb:g,inset:m}=Fe[l],x=p-g-2*m,E=T(n?e?Me:Ne:e?Pe:Ee),M=n?"var(--toggle-track-bg-disabled)":e?H[s].on:H[s].off,N=n?"var(--toggle-track-border-disabled)":Ve[s],F=[y.wrapper,n&&y["wrapper--disabled"],f].filter(Boolean).join(" "),S={width:`${p}px`,height:`${k}px`,padding:0,overflow:"visible","& .MuiSwitch-track":{width:"100%",height:"100%",borderRadius:`${k/2}px`,backgroundColor:`${M} !important`,opacity:"1 !important",boxShadow:`0 0 0 2px ${N}`,transition:"background-color 0.2s ease, box-shadow 0.2s ease"},"& .MuiSwitch-switchBase":{padding:`${m}px`,top:0,left:0,"&:hover":{backgroundColor:"transparent"}},"& .MuiSwitch-switchBase.Mui-checked":{transform:`translateX(${x}px)`,color:"white"},"& .MuiSwitch-thumb":{width:`${g}px`,height:`${g}px`,borderRadius:"50%",backgroundColor:"var(--global-color-base-white)",backgroundImage:E,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"68%",boxShadow:"0 0 0 0.5px var(--global-color-base-black)",transition:"background-image 0.15s ease"},"& .MuiTouchRipple-root":{display:"none"}};return a.jsxs("label",{className:F,children:[o&&d==="left"&&a.jsx("span",{className:y.label,children:o}),a.jsx(Be,{checked:e,onChange:b,disabled:n,size:"small",inputProps:{"aria-label":u??o??"toggle"},sx:S,disableRipple:!0,className:y.switch}),o&&d==="right"&&a.jsx("span",{className:y.label,children:o})]})};r.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is on",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Fires when the toggle changes"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Visual size",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'blue' | 'dark' | 'status'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'status'"}]},description:"Colour variant",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable interaction",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label (for screen readers)"},label:{required:!1,tsType:{name:"string"},description:"Optional visible label rendered beside the toggle"},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Label position relative to the toggle",defaultValue:{value:"'right'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const W=()=>a.jsxs(i,{children:[a.jsx(i.Header,{title:"Toggle",subtitle:"A binary on/off switch built on MUI Switch. Supports primary (sky-blue) and dark (navy) colour variants across three sizes, with disabled states and optional visible labels."}),a.jsxs(i.BodyText,{children:["The ",a.jsx("strong",{children:"Toggle"})," uses MUI ",a.jsx("code",{children:"Switch"})," as its accessible foundation, providing native keyboard navigation, focus management, and ARIA semantics out of the box. All visual treatment — track colour, thumb colour, and sizing — is driven by design tokens."]}),a.jsx(i.Anatomy,{parts:[{number:1,label:"Track",description:"The pill-shaped background. Changes colour from gray (off) to brand colour (on)."},{number:2,label:"Thumb",description:"The circular handle that slides between off and on positions."},{number:3,label:"Label (optional)",description:"A text label rendered left or right of the toggle."}]}),a.jsxs(i.Section,{title:"Variants",children:[a.jsx(i.Subsection,{title:"Primary (Sky-Blue)",children:a.jsxs("div",{style:{display:"flex",gap:"24px",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:[a.jsx(r,{variant:"primary",checked:!1,label:"Off"}),a.jsx(r,{variant:"primary",checked:!0,label:"On"}),a.jsx(r,{variant:"primary",checked:!0,disabled:!0,label:"On — Disabled"})]})}),a.jsx(i.Subsection,{title:"Dark (Navy)",children:a.jsxs("div",{style:{display:"flex",gap:"24px",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:[a.jsx(r,{variant:"dark",checked:!1,label:"Off"}),a.jsx(r,{variant:"dark",checked:!0,label:"On"}),a.jsx(r,{variant:"dark",checked:!0,disabled:!0,label:"On — Disabled"})]})})]}),a.jsx(i.Section,{title:"Sizes",children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px) 0"},children:["small","default","large"].map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"56px",textTransform:"capitalize"},children:e}),a.jsx(r,{size:e,checked:!0,label:`${e}`})]},e))})}),a.jsx(i.TokenTable,{title:"Design Tokens",description:"Toggle uses the following component-level tokens.",tokens:[{name:"--toggle-track-bg",description:"Track background when off (gray-300)"},{name:"--toggle-track-bg-checked",description:"Track background when on — primary (sky-blue)"},{name:"--toggle-track-bg-checked-dark",description:"Track background when on — dark variant (dark-blue)"},{name:"--toggle-track-bg-disabled",description:"Track background when disabled (gray-200)"},{name:"--toggle-track-radius",description:"Track pill border-radius (full)"},{name:"--toggle-thumb-bg",description:"Thumb colour when off (white)"},{name:"--toggle-thumb-bg-checked",description:"Thumb colour when on — primary (white)"},{name:"--toggle-thumb-bg-checked-dark",description:"Thumb colour when on — dark (white)"},{name:"--toggle-thumb-bg-disabled",description:"Thumb colour when disabled (gray-200)"},{name:"--toggle-scale-sm",description:"Scale factor for small size (0.75)"},{name:"--toggle-scale-lg",description:"Scale factor for large size (1.25)"},{name:"--toggle-disabled-opacity",description:"Opacity for disabled state (0.5)"},{name:"--toggle-label-gap",description:"Gap between toggle and its label (8px)"},{name:"--toggle-label-color",description:"Label text colour (base-black)"},{name:"--toggle-label-color-disabled",description:"Label text colour when disabled (gray-400)"}]}),a.jsx(i.CodeBlock,{children:`import { Toggle } from './BuildingBlocks/Toggle';

// Basic usage
<Toggle checked={on} onChange={setOn} label="Notifications" />

// Dark variant
<Toggle variant="dark" checked={on} onChange={setOn} />

// Sizes
<Toggle size="small" checked={on} onChange={setOn} />
<Toggle size="large" checked={on} onChange={setOn} />

// Disabled
<Toggle checked disabled label="Cannot change" />`}),a.jsxs(i.Principles,{children:[a.jsx(i.PrincipleCard,{number:1,title:"Clear On/Off State",children:"Track colour changes unambiguously from neutral gray to brand colour. Never rely on position alone to convey state."}),a.jsx(i.PrincipleCard,{number:2,title:"Accessible by Default",children:"MUI Switch provides keyboard focus, ARIA role switch, and checked state. Always supply an aria-label or visible label."}),a.jsx(i.PrincipleCard,{number:3,title:"Label Context",children:"Include a label to describe what is being toggled. Without a label, users must infer meaning from context alone."})]}),a.jsx(i.Footer,{componentName:"Toggle"})]});W.__docgenInfo={description:"",methods:[],displayName:"ToggleDocs"};const P=["primary","blue","dark","status"],We=["large","default","small"],ia={title:"Foundation/BuildingBlocks/Toggles",component:r,parameters:{docs:{page:()=>a.jsx(W,{})}},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["small","default","large"]},variant:{control:"select",options:P},label:{control:"text"},labelPosition:{control:"select",options:["left","right"]}},args:{checked:!1,disabled:!1,size:"default",variant:"primary",label:"Toggle label",labelPosition:"right"}},j={name:"Documentation",render:()=>a.jsx(W,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},C={name:"Playground",render:e=>{const t=()=>{const[l,s]=v.useState(e.checked??!1);return a.jsx("div",{style:{padding:"40px 24px"},children:a.jsx(r,{...e,checked:l,onChange:s})})};return a.jsx(t,{})}},D={name:"Default",render:()=>{const e=()=>{const[t,l]=v.useState(!1);return a.jsx("div",{style:{padding:"40px 24px"},children:a.jsx(r,{checked:t,onChange:l,label:"Toggle"})})};return a.jsx(e,{})},parameters:{controls:{disable:!0}}},z={name:"Sizes",render:()=>{const e=()=>{const[t,l]=v.useState({small:!1,default:!0,large:!1});return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"40px 24px"},children:We.map(s=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"60px",textTransform:"capitalize"},children:s}),a.jsx(r,{size:s,checked:t[s],onChange:n=>l(u=>({...u,[s]:n})),label:`${s}`})]},s))})};return a.jsx(e,{})},parameters:{controls:{disable:!0}}},O={name:"Status — Primary",render:()=>{const e=()=>{const[t,l]=v.useState(!1);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"40px 24px"},children:[a.jsx(r,{variant:"primary",checked:t,onChange:l,label:t?"On":"Off"}),a.jsx(r,{variant:"primary",checked:!0,label:"On (static)"}),a.jsx(r,{variant:"primary",checked:!1,label:"Off (static)"}),a.jsx(r,{variant:"primary",checked:!0,disabled:!0,label:"On — Disabled"}),a.jsx(r,{variant:"primary",checked:!1,disabled:!0,label:"Off — Disabled"})]})};return a.jsx(e,{})},parameters:{controls:{disable:!0}}},L={name:"Status — All Variants",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"40px 24px"},children:P.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"32px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"60px",textTransform:"capitalize"},children:e}),a.jsx(r,{variant:e,checked:!0,label:"On"}),a.jsx(r,{variant:e,checked:!1,label:"Off"})]},e))}),parameters:{controls:{disable:!0}}},I={name:"Status — Disabled",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"40px 24px"},children:P.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"32px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"60px",textTransform:"capitalize"},children:e}),a.jsx(r,{variant:e,checked:!1,disabled:!0,label:"Off"}),a.jsx(r,{variant:e,checked:!0,disabled:!0,label:"On"})]},e))}),parameters:{controls:{disable:!0}}},A={name:"All Interactive States",render:()=>a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"32px",padding:"40px 24px"},children:P.map(e=>a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"12px"},children:e}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsx(r,{variant:e,checked:!1,label:"Off"}),a.jsx(r,{variant:e,checked:!0,label:"On"}),a.jsx(r,{variant:e,checked:!1,disabled:!0,label:"Off — Disabled"}),a.jsx(r,{variant:e,checked:!0,disabled:!0,label:"On — Disabled"})]})]},e))}),parameters:{controls:{disable:!0}}},$={name:"Full Design Matrix",render:()=>{const e=["Primary","Blue","Dark","Status","Disabled"],t={fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:700,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.6px",textAlign:"center",padding:"0 4px 8px"},l={fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",textAlign:"right",paddingRight:"12px",whiteSpace:"nowrap"},s={padding:"14px 16px",overflow:"visible"},n={display:"flex",justifyContent:"center",alignItems:"center",overflow:"visible"},u=[["large",!0],["large",!1],["default",!0],["default",!1],["small",!0],["small",!1]];return a.jsx("div",{style:{padding:"40px 32px",overflowX:"auto",overflowY:"visible"},children:a.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"4px"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:"80px"}}),e.map(o=>a.jsx("th",{style:t,children:o},o))]})}),a.jsx("tbody",{children:u.map(([o,d])=>a.jsxs("tr",{children:[a.jsxs("td",{style:l,children:[o," ",a.jsx("span",{style:{opacity:.6},children:d?"✓":"✕"})]}),a.jsx("td",{style:s,children:a.jsx("div",{style:n,children:a.jsx(r,{size:o,variant:"primary",checked:d})})}),a.jsx("td",{style:s,children:a.jsx("div",{style:n,children:a.jsx(r,{size:o,variant:"blue",checked:d})})}),a.jsx("td",{style:s,children:a.jsx("div",{style:n,children:a.jsx(r,{size:o,variant:"dark",checked:d})})}),a.jsx("td",{style:s,children:a.jsx("div",{style:n,children:a.jsx(r,{size:o,variant:"status",checked:d})})}),a.jsx("td",{style:s,children:a.jsx("div",{style:n,children:a.jsx(r,{size:o,variant:"primary",checked:d,disabled:!0})})})]},`${o}-${d?"on":"off"}`))})]})})},parameters:{controls:{disable:!0}}};var U,q,X;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <ToggleDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen'
  }
}`,...(X=(q=j.parameters)==null?void 0:q.docs)==null?void 0:X.source}}};var K,Z,G;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const Demo = () => {
      const [on, setOn] = useState(args.checked ?? false);
      return <div style={{
        padding: '40px 24px'
      }}>
          <Toggle {...args} checked={on} onChange={setOn} />
        </div>;
    };
    return <Demo />;
  }
}`,...(G=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var Y,J,Q;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    const Demo = () => {
      const [on, setOn] = useState(false);
      return <div style={{
        padding: '40px 24px'
      }}>
          <Toggle checked={on} onChange={setOn} label="Toggle" />
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,ae,te;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => {
    const SizesDemo = () => {
      const [vals, setVals] = useState<Record<ToggleSize, boolean>>({
        small: false,
        default: true,
        large: false
      });
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '40px 24px'
      }}>
          {ALL_SIZES.map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
              <span style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)',
            width: '60px',
            textTransform: 'capitalize'
          }}>
                {size}
              </span>
              <Toggle size={size} checked={vals[size]} onChange={v => setVals(p => ({
            ...p,
            [size]: v
          }))} label={\`\${size}\`} />
            </div>)}
        </div>;
    };
    return <SizesDemo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,le,se;O.parameters={...O.parameters,docs:{...(re=O.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Status — Primary',
  render: () => {
    const Demo = () => {
      const [on, setOn] = useState(false);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '40px 24px'
      }}>
          <Toggle variant="primary" checked={on} onChange={setOn} label={on ? 'On' : 'Off'} />
          <Toggle variant="primary" checked={true} label="On (static)" />
          <Toggle variant="primary" checked={false} label="Off (static)" />
          <Toggle variant="primary" checked={true} disabled label="On — Disabled" />
          <Toggle variant="primary" checked={false} disabled label="Off — Disabled" />
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(le=O.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var oe,ne,ie;L.parameters={...L.parameters,docs:{...(oe=L.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Status — All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '40px 24px'
  }}>
      {ALL_VARIANTS.map(variant => <div key={variant} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }}>
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        width: '60px',
        textTransform: 'capitalize'
      }}>
            {variant}
          </span>
          <Toggle variant={variant} checked={true} label="On" />
          <Toggle variant={variant} checked={false} label="Off" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ce,de,pe;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Status — Disabled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '40px 24px'
  }}>
      {ALL_VARIANTS.map(variant => <div key={variant} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }}>
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        width: '60px',
        textTransform: 'capitalize'
      }}>
            {variant}
          </span>
          <Toggle variant={variant} checked={false} disabled label="Off" />
          <Toggle variant={variant} checked={true} disabled label="On" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pe=(de=I.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ge,ue,me;A.parameters={...A.parameters,docs:{...(ge=A.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px',
    padding: '40px 24px'
  }}>
      {ALL_VARIANTS.map(variant => <div key={variant}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'capitalize',
        marginBottom: '12px'
      }}>
            {variant}
          </div>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
            <Toggle variant={variant} checked={false} label="Off" />
            <Toggle variant={variant} checked={true} label="On" />
            <Toggle variant={variant} checked={false} disabled label="Off — Disabled" />
            <Toggle variant={variant} checked={true} disabled label="On — Disabled" />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(ue=A.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var be,he,fe;$.parameters={...$.parameters,docs:{...(be=$.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const COL_LABELS = ['Primary', 'Blue', 'Dark', 'Status', 'Disabled'];
    const headerCell: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: '10px',
      fontWeight: 700,
      color: 'var(--global-color-neutral-gray-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      textAlign: 'center',
      padding: '0 4px 8px'
    };
    const rowLabel: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: '10px',
      color: 'var(--global-color-neutral-gray-400)',
      textAlign: 'right',
      paddingRight: '12px',
      whiteSpace: 'nowrap'
    };
    const cell: React.CSSProperties = {
      /* Generous padding so the track's 2px outer box-shadow border
         is fully visible and never clipped by the table cell. */
      padding: '14px 16px',
      overflow: 'visible'
    };
    const cellInner: React.CSSProperties = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'visible'
    };

    // 6 data rows: [size, checked]
    const rows: Array<[ToggleSize, boolean]> = [['large', true], ['large', false], ['default', true], ['default', false], ['small', true], ['small', false]];
    return <div style={{
      padding: '40px 32px',
      overflowX: 'auto',
      overflowY: 'visible'
    }}>
        <table style={{
        borderCollapse: 'separate',
        borderSpacing: '4px'
      }}>
          <thead>
            <tr>
              {/* empty corner */}
              <th style={{
              width: '80px'
            }} />
              {COL_LABELS.map(l => <th key={l} style={headerCell}>{l}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map(([size, checked]) => <tr key={\`\${size}-\${checked ? 'on' : 'off'}\`}>
                <td style={rowLabel}>
                  {size}&nbsp;<span style={{
                opacity: 0.6
              }}>{checked ? '✓' : '✕'}</span>
                </td>
                {/* primary */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="primary" checked={checked} />
                  </div>
                </td>
                {/* blue */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="blue" checked={checked} />
                  </div>
                </td>
                {/* dark */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="dark" checked={checked} />
                  </div>
                </td>
                {/* status */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="status" checked={checked} />
                  </div>
                </td>
                {/* disabled */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="primary" checked={checked} disabled />
                  </div>
                </td>
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
}`,...(fe=(he=$.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};const ca=["Documentation","Playground","Default","Sizes","StatusPrimary","StatusAllVariants","StatusDisabled","AllInteractiveStates","FullDesignMatrix"];export{A as AllInteractiveStates,D as Default,j as Documentation,$ as FullDesignMatrix,C as Playground,z as Sizes,L as StatusAllVariants,I as StatusDisabled,O as StatusPrimary,ca as __namedExportsOrder,ia as default};
