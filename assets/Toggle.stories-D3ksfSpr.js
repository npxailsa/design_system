import{r as k,j as a,R as ve}from"./iframe-Do1ZXJJl.js";import{g as ye,a as ke,u as we,b as Se,d as x,e as Te,s as L}from"./DefaultPropsProvider-DX_vrYOA.js";import{c as je}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{S as ze}from"./SwitchBase-C8hE3BGV.js";import{m as _}from"./memoTheme-CcjSVwu0.js";import{u as $}from"./useSlot-CzVa09eQ.js";import{D as i}from"./DocsTemplate-CdC3H3A2.js";import"./preload-helper-Dp1pzeXC.js";import"./useFormControl-u6UK9wfh.js";import"./useControlled-BkM-Jy3Z.js";import"./ButtonBase-BAaJhK1A.js";import"./index-Denvern_.js";import"./emotion-react.browser.esm-Bk6OzT3J.js";import"./useForkRef-B9zTX-7m.js";import"./useEventCallback-Bq346ad6.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-Ccldj13x.js";import"./isHostComponent-DVu5iVWx.js";function Ce(e){return ye("MuiSwitch",e)}const o=ke("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),De=e=>{const{classes:t,edge:l,size:r,color:s,checked:c,disabled:p}=e,f={root:["root",l&&`edge${x(l)}`,`size${x(r)}`],switchBase:["switchBase",`color${x(s)}`,c&&"checked",p&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=Te(f,Ce,t);return{...t,...v}},Ae=L("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.edge&&t[`edge${x(l.edge)}`],t[`size${x(l.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${o.thumb}`]:{width:16,height:16},[`& .${o.switchBase}`]:{padding:4,[`&.${o.checked}`]:{transform:"translateX(16px)"}}}}]}),Oe=L(ze,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.switchBase,{[`& .${o.input}`]:t.input},l.color!=="default"&&t[`color${x(l.color)}`]]}})(_(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${o.checked}`]:{transform:"translateX(20px)"},[`&.${o.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${o.checked} + .${o.track}`]:{opacity:.5},[`&.${o.disabled} + .${o.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${o.input}`]:{left:"-100%",width:"300%"}})),_(({theme:e})=>({"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(je(["light"])).map(([t])=>({props:{color:t},style:{[`&.${o.checked}`]:{color:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t}DisabledColor`]:`${e.palette.mode==="light"?e.lighten(e.palette[t].main,.62):e.darken(e.palette[t].main,.55)}`}},[`&.${o.checked} + .${o.track}`]:{backgroundColor:(e.vars||e).palette[t].main}}}))]}))),Ie=L("span",{name:"MuiSwitch",slot:"Track"})(_(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`}))),Be=L("span",{name:"MuiSwitch",slot:"Thumb"})(_(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),_e=k.forwardRef(function(t,l){const r=we({props:t,name:"MuiSwitch"}),{className:s,color:c="primary",edge:p=!1,size:f="medium",sx:v,slots:u={},slotProps:d={},...R}=r,g={...r,color:c,edge:p,size:f},m=De(g),y={slots:u,slotProps:d},[w,me]=$("root",{className:Se(m.root,s),elementType:Ae,externalForwardedProps:y,ownerState:g,additionalProps:{sx:v}}),[he,be]=$("thumb",{className:m.thumb,elementType:Be,externalForwardedProps:y,ownerState:g}),V=a.jsx(he,{...be}),[fe,xe]=$("track",{className:m.track,elementType:Ie,externalForwardedProps:y,ownerState:g});return a.jsxs(w,{...me,children:[a.jsx(Oe,{type:"checkbox",icon:V,checkedIcon:V,ref:l,ownerState:g,...R,classes:{...m,root:m.switchBase},slots:{...u.switchBase&&{root:u.switchBase},...u.input&&{input:u.input}},slotProps:{...d.switchBase&&{root:typeof d.switchBase=="function"?d.switchBase(g):d.switchBase},input:{role:"switch"},...d.input&&{input:typeof d.input=="function"?d.input(g):d.input}}}),a.jsx(fe,{...xe})]})}),Le="_wrapper_11314_11",Re="_label_11314_25",h={wrapper:Le,"wrapper--disabled":"_wrapper--disabled_11314_19",label:Re,switch:"_switch_11314_39","wrapper--small":"_wrapper--small_11314_43","wrapper--large":"_wrapper--large_11314_48"},$e=encodeURIComponent('<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" fill="#00B359"/><path d="M6 10.5l2.8 2.8 5.2-5.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'),Me=encodeURIComponent('<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" fill="#E53935"/><path d="M7 7l6 6M13 7l-6 6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'),Pe=encodeURIComponent('<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" fill="#B8BEC7"/><path d="M6 10.5l2.8 2.8 5.2-5.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'),Ve=encodeURIComponent('<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" fill="#B8BEC7"/><path d="M7 7l6 6M13 7l-6 6" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'),S=e=>`url("data:image/svg+xml,${e}")`,M={primary:{on:"var(--toggle-track-bg-checked)",off:"var(--toggle-track-bg-checked)"},blue:{on:"var(--toggle-track-bg-checked-blue)",off:"var(--toggle-track-bg-checked-blue)"},dark:{on:"var(--toggle-track-bg-checked-dark)",off:"var(--toggle-track-bg-checked-dark)"},status:{on:"var(--toggle-track-bg-status-on)",off:"var(--toggle-track-bg-status-off)"}},n=({checked:e=!1,onChange:t,size:l="default",variant:r="primary",disabled:s=!1,"aria-label":c,label:p,labelPosition:f="right",className:v})=>{const u=w=>{t==null||t(w.target.checked,w)},d=[h.wrapper,h[`wrapper--${l}`],h[`wrapper--${r}`],s&&h["wrapper--disabled"],v].filter(Boolean).join(" "),R=S(s?e?Pe:Ve:e?$e:Me),g=s?"var(--toggle-track-bg-disabled)":e?M[r].on:M[r].off,m=l==="large"?"medium":"small",y={"& .MuiSwitch-track":{backgroundColor:g,opacity:1,borderRadius:"var(--toggle-track-radius)",transition:"background-color var(--toggle-transition-duration) var(--toggle-transition-easing)"},"&.Mui-checked + .MuiSwitch-track, & .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":{backgroundColor:M[r].on,opacity:1},"& .MuiSwitch-thumb":{backgroundColor:"var(--toggle-thumb-bg)",backgroundImage:R,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"62%",boxShadow:"var(--toggle-thumb-shadow)",transition:"background-color var(--toggle-transition-duration) var(--toggle-transition-easing)"},"& .MuiSwitch-switchBase":{"&:hover":{backgroundColor:"transparent"}},"& .MuiTouchRipple-root":{display:"none"},"& .MuiSwitch-switchBase.Mui-checked":{color:"var(--toggle-thumb-bg)"}};return a.jsxs("label",{className:d,children:[p&&f==="left"&&a.jsx("span",{className:h.label,children:p}),a.jsx(_e,{checked:e,onChange:u,disabled:s,size:m,inputProps:{"aria-label":c??p??"toggle"},sx:y,disableRipple:!0,className:h.switch}),p&&f==="right"&&a.jsx("span",{className:h.label,children:p})]})};n.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is on",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Fires when the toggle changes"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Visual size",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'blue' | 'dark' | 'status'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'status'"}]},description:"Colour variant",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable interaction",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},label:{required:!1,tsType:{name:"string"},description:"Optional visible label rendered beside the toggle"},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Label position relative to the toggle",defaultValue:{value:"'right'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const P=()=>a.jsxs(i,{children:[a.jsx(i.Header,{title:"Toggle",subtitle:"A binary on/off switch built on MUI Switch. Supports primary (sky-blue) and dark (navy) colour variants across three sizes, with disabled states and optional visible labels."}),a.jsxs(i.BodyText,{children:["The ",a.jsx("strong",{children:"Toggle"})," uses MUI ",a.jsx("code",{children:"Switch"})," as its accessible foundation, providing native keyboard navigation, focus management, and ARIA semantics out of the box. All visual treatment — track colour, thumb colour, and sizing — is driven by design tokens."]}),a.jsx(i.Anatomy,{parts:[{number:1,label:"Track",description:"The pill-shaped background. Changes colour from gray (off) to brand colour (on)."},{number:2,label:"Thumb",description:"The circular handle that slides between off and on positions."},{number:3,label:"Label (optional)",description:"A text label rendered left or right of the toggle."}]}),a.jsxs(i.Section,{title:"Variants",children:[a.jsx(i.Subsection,{title:"Primary (Sky-Blue)",children:a.jsxs("div",{style:{display:"flex",gap:"24px",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:[a.jsx(n,{variant:"primary",checked:!1,label:"Off"}),a.jsx(n,{variant:"primary",checked:!0,label:"On"}),a.jsx(n,{variant:"primary",checked:!0,disabled:!0,label:"On — Disabled"})]})}),a.jsx(i.Subsection,{title:"Dark (Navy)",children:a.jsxs("div",{style:{display:"flex",gap:"24px",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:[a.jsx(n,{variant:"dark",checked:!1,label:"Off"}),a.jsx(n,{variant:"dark",checked:!0,label:"On"}),a.jsx(n,{variant:"dark",checked:!0,disabled:!0,label:"On — Disabled"})]})})]}),a.jsx(i.Section,{title:"Sizes",children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px) 0"},children:["small","default","large"].map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"56px",textTransform:"capitalize"},children:e}),a.jsx(n,{size:e,checked:!0,label:`${e}`})]},e))})}),a.jsx(i.TokenTable,{title:"Design Tokens",description:"Toggle uses the following component-level tokens.",tokens:[{name:"--toggle-track-bg",description:"Track background when off (gray-300)"},{name:"--toggle-track-bg-checked",description:"Track background when on — primary (sky-blue)"},{name:"--toggle-track-bg-checked-dark",description:"Track background when on — dark variant (dark-blue)"},{name:"--toggle-track-bg-disabled",description:"Track background when disabled (gray-200)"},{name:"--toggle-track-radius",description:"Track pill border-radius (full)"},{name:"--toggle-thumb-bg",description:"Thumb colour when off (white)"},{name:"--toggle-thumb-bg-checked",description:"Thumb colour when on — primary (white)"},{name:"--toggle-thumb-bg-checked-dark",description:"Thumb colour when on — dark (white)"},{name:"--toggle-thumb-bg-disabled",description:"Thumb colour when disabled (gray-200)"},{name:"--toggle-scale-sm",description:"Scale factor for small size (0.75)"},{name:"--toggle-scale-lg",description:"Scale factor for large size (1.25)"},{name:"--toggle-disabled-opacity",description:"Opacity for disabled state (0.5)"},{name:"--toggle-label-gap",description:"Gap between toggle and its label (8px)"},{name:"--toggle-label-color",description:"Label text colour (base-black)"},{name:"--toggle-label-color-disabled",description:"Label text colour when disabled (gray-400)"}]}),a.jsx(i.CodeBlock,{children:`import { Toggle } from './BuildingBlocks/Toggle';

// Basic usage
<Toggle checked={on} onChange={setOn} label="Notifications" />

// Dark variant
<Toggle variant="dark" checked={on} onChange={setOn} />

// Sizes
<Toggle size="small" checked={on} onChange={setOn} />
<Toggle size="large" checked={on} onChange={setOn} />

// Disabled
<Toggle checked disabled label="Cannot change" />`}),a.jsxs(i.Principles,{children:[a.jsx(i.PrincipleCard,{number:1,title:"Clear On/Off State",children:"Track colour changes unambiguously from neutral gray to brand colour. Never rely on position alone to convey state."}),a.jsx(i.PrincipleCard,{number:2,title:"Accessible by Default",children:"MUI Switch provides keyboard focus, ARIA role switch, and checked state. Always supply an aria-label or visible label."}),a.jsx(i.PrincipleCard,{number:3,title:"Label Context",children:"Include a label to describe what is being toggled. Without a label, users must infer meaning from context alone."})]}),a.jsx(i.Footer,{componentName:"Toggle"})]});P.__docgenInfo={description:"",methods:[],displayName:"ToggleDocs"};const b=["primary","blue","dark","status"],ue=["large","default","small"],na={title:"Foundation/BuildingBlocks/Toggles",component:n,parameters:{docs:{page:()=>a.jsx(P,{})}},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["small","default","large"]},variant:{control:"select",options:b},label:{control:"text"},labelPosition:{control:"select",options:["left","right"]}},args:{checked:!1,disabled:!1,size:"default",variant:"primary",label:"Toggle label",labelPosition:"right"}},T={name:"Documentation",render:()=>a.jsx(P,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},j={name:"Playground",render:e=>{const t=()=>{const[l,r]=k.useState(e.checked??!1);return a.jsx("div",{style:{padding:"40px 24px"},children:a.jsx(n,{...e,checked:l,onChange:r})})};return a.jsx(t,{})}},z={name:"Default",render:()=>{const e=()=>{const[t,l]=k.useState(!1);return a.jsx("div",{style:{padding:"40px 24px"},children:a.jsx(n,{checked:t,onChange:l,label:"Toggle"})})};return a.jsx(e,{})},parameters:{controls:{disable:!0}}},C={name:"Sizes",render:()=>{const e=()=>{const[t,l]=k.useState({small:!1,default:!0,large:!1});return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"40px 24px"},children:ue.map(r=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"60px",textTransform:"capitalize"},children:r}),a.jsx(n,{size:r,checked:t[r],onChange:s=>l(c=>({...c,[r]:s})),label:`${r}`})]},r))})};return a.jsx(e,{})},parameters:{controls:{disable:!0}}},D={name:"Status — Primary",render:()=>{const e=()=>{const[t,l]=k.useState(!1);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"40px 24px"},children:[a.jsx(n,{variant:"primary",checked:t,onChange:l,label:t?"On":"Off"}),a.jsx(n,{variant:"primary",checked:!0,label:"On (static)"}),a.jsx(n,{variant:"primary",checked:!1,label:"Off (static)"}),a.jsx(n,{variant:"primary",checked:!0,disabled:!0,label:"On — Disabled"}),a.jsx(n,{variant:"primary",checked:!1,disabled:!0,label:"Off — Disabled"})]})};return a.jsx(e,{})},parameters:{controls:{disable:!0}}},A={name:"Status — All Variants",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"40px 24px"},children:b.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"32px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"60px",textTransform:"capitalize"},children:e}),a.jsx(n,{variant:e,checked:!0,label:"On"}),a.jsx(n,{variant:e,checked:!1,label:"Off"})]},e))}),parameters:{controls:{disable:!0}}},O={name:"Status — Disabled",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"40px 24px"},children:b.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"32px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"60px",textTransform:"capitalize"},children:e}),a.jsx(n,{variant:e,checked:!1,disabled:!0,label:"Off"}),a.jsx(n,{variant:e,checked:!0,disabled:!0,label:"On"})]},e))}),parameters:{controls:{disable:!0}}},I={name:"All Interactive States",render:()=>a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"32px",padding:"40px 24px"},children:b.map(e=>a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"12px"},children:e}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsx(n,{variant:e,checked:!1,label:"Off"}),a.jsx(n,{variant:e,checked:!0,label:"On"}),a.jsx(n,{variant:e,checked:!1,disabled:!0,label:"Off — Disabled"}),a.jsx(n,{variant:e,checked:!0,disabled:!0,label:"On — Disabled"})]})]},e))}),parameters:{controls:{disable:!0}}},B={name:"Full Design Matrix",render:()=>{const e={primary:"Primary",blue:"Blue",dark:"Dark",status:"Status"},t={fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",textAlign:"center"},l={fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize",display:"flex",alignItems:"center"};return a.jsx("div",{style:{padding:"32px 24px",overflowX:"auto"},children:a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"72px repeat(4, 96px) 96px",gap:"0 16px",alignItems:"center"},children:[a.jsx("div",{}),b.map(r=>a.jsx("div",{style:t,children:e[r]},r)),a.jsx("div",{style:t,children:"Disabled"}),ue.map((r,s)=>a.jsxs(ve.Fragment,{children:[a.jsx("div",{style:{...l,paddingTop:s===0?"20px":"8px"},children:s===0?r:""}),b.map(c=>a.jsx("div",{style:{paddingTop:s===0?"20px":"8px",display:"flex",justifyContent:"center"},children:a.jsx(n,{size:r,variant:c,checked:!0})},`${r}-${c}-on`)),a.jsx("div",{style:{paddingTop:s===0?"20px":"8px",display:"flex",justifyContent:"center"},children:a.jsx(n,{size:r,variant:"primary",checked:!0,disabled:!0})}),a.jsx("div",{style:{paddingBottom:"16px",display:"flex",alignItems:"center",paddingTop:"4px"},children:s!==0?a.jsx("span",{style:{...l},children:r}):null}),b.map(c=>a.jsx("div",{style:{paddingBottom:"16px",paddingTop:"4px",display:"flex",justifyContent:"center"},children:a.jsx(n,{size:r,variant:c,checked:!1})},`${r}-${c}-off`)),a.jsx("div",{style:{paddingBottom:"16px",paddingTop:"4px",display:"flex",justifyContent:"center"},children:a.jsx(n,{size:r,variant:"primary",checked:!1,disabled:!0})})]},r))]})})},parameters:{controls:{disable:!0}}};var F,N,E;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(E=(N=T.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var U,W,q;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(W=j.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var H,G,X;z.parameters={...z.parameters,docs:{...(H=z.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(X=(G=z.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var K,Z,J;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(J=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,Y,ee;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,te,re;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(te=A.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,le,se;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(le=O.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ie,oe,ce;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,pe,ge;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const VARIANT_LABELS: Record<ToggleVariant, string> = {
      primary: 'Primary',
      blue: 'Blue',
      dark: 'Dark',
      status: 'Status'
    };
    const labelStyle: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: '10px',
      fontWeight: 600,
      color: 'var(--global-color-neutral-gray-500)',
      textTransform: 'capitalize',
      textAlign: 'center'
    };
    const sizeLabel: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: '11px',
      color: 'var(--global-color-neutral-gray-700)',
      textTransform: 'capitalize',
      display: 'flex',
      alignItems: 'center'
    };
    return <div style={{
      padding: '32px 24px',
      overflowX: 'auto'
    }}>
        {/* Grid: 6 rows × 6 cols (sizeLabel + 4 variants + 1 disabled) */}
        {/* For each size: 2 sub-rows (checked / unchecked) */}
        <div style={{
        display: 'grid',
        gridTemplateColumns: '72px repeat(4, 96px) 96px',
        gap: '0 16px',
        alignItems: 'center'
      }}>
          {/* Header row */}
          <div />
          {ALL_VARIANTS.map(v => <div key={v} style={labelStyle}>{VARIANT_LABELS[v]}</div>)}
          <div style={labelStyle}>Disabled</div>

          {/* Size rows */}
          {ALL_SIZES.map((size, si) => <React.Fragment key={size}>
              {/* Checked row */}
              <div style={{
            ...sizeLabel,
            paddingTop: si === 0 ? '20px' : '8px'
          }}>
                {si === 0 ? size : ''}
              </div>
              {ALL_VARIANTS.map(variant => <div key={\`\${size}-\${variant}-on\`} style={{
            paddingTop: si === 0 ? '20px' : '8px',
            display: 'flex',
            justifyContent: 'center'
          }}>
                  <Toggle size={size} variant={variant} checked={true} />
                </div>)}
              {/* Disabled checked */}
              <div style={{
            paddingTop: si === 0 ? '20px' : '8px',
            display: 'flex',
            justifyContent: 'center'
          }}>
                <Toggle size={size} variant="primary" checked={true} disabled />
              </div>

              {/* Unchecked row */}
              <div style={{
            paddingBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '4px'
          }}>
                {si !== 0 ? <span style={{
              ...sizeLabel
            }}>{size}</span> : null}
              </div>
              {ALL_VARIANTS.map(variant => <div key={\`\${size}-\${variant}-off\`} style={{
            paddingBottom: '16px',
            paddingTop: '4px',
            display: 'flex',
            justifyContent: 'center'
          }}>
                  <Toggle size={size} variant={variant} checked={false} />
                </div>)}
              {/* Disabled unchecked */}
              <div style={{
            paddingBottom: '16px',
            paddingTop: '4px',
            display: 'flex',
            justifyContent: 'center'
          }}>
                <Toggle size={size} variant="primary" checked={false} disabled />
              </div>
            </React.Fragment>)}
        </div>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ge=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const la=["Documentation","Playground","Default","Sizes","StatusPrimary","StatusAllVariants","StatusDisabled","AllInteractiveStates","FullDesignMatrix"];export{I as AllInteractiveStates,z as Default,T as Documentation,B as FullDesignMatrix,j as Playground,C as Sizes,A as StatusAllVariants,O as StatusDisabled,D as StatusPrimary,la as __namedExportsOrder,na as default};
