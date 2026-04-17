import{r as S,j as a}from"./iframe-Cu55oDLk.js";import{g as ke,a as Se,u as we,b as Te,d as x,e as je,s as $}from"./DefaultPropsProvider-Dt8XW3fI.js";import{c as Ce}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{S as De}from"./SwitchBase-B5eEmQFp.js";import{m as B}from"./memoTheme-ZzEYJ79a.js";import{u as E}from"./useSlot-DEy-Zg-A.js";import{D as i}from"./DocsTemplate-EmwnyCAF.js";import"./preload-helper-Dp1pzeXC.js";import"./useFormControl-DtG2V0a-.js";import"./useControlled-DB0L8xXB.js";import"./ButtonBase-Czg6gYpl.js";import"./index-SnnS7ZEs.js";import"./emotion-react.browser.esm-D3VEYuJS.js";import"./useForkRef-2TuozoXT.js";import"./useEventCallback-Cx_1hmuo.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-6RI4jRYG.js";import"./isHostComponent-DVu5iVWx.js";function ze(e){return ke("MuiSwitch",e)}const c=Se("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),Oe=e=>{const{classes:t,edge:l,size:s,color:d,checked:o,disabled:n}=e,h={root:["root",l&&`edge${x(l)}`,`size${x(s)}`],switchBase:["switchBase",`color${x(d)}`,o&&"checked",n&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=je(h,ze,t);return{...t,...v}},Le=$("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.root,l.edge&&t[`edge${x(l.edge)}`],t[`size${x(l.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${c.thumb}`]:{width:16,height:16},[`& .${c.switchBase}`]:{padding:4,[`&.${c.checked}`]:{transform:"translateX(16px)"}}}}]}),Ae=$(De,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:l}=e;return[t.switchBase,{[`& .${c.input}`]:t.input},l.color!=="default"&&t[`color${x(l.color)}`]]}})(B(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${c.checked}`]:{transform:"translateX(20px)"},[`&.${c.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${c.checked} + .${c.track}`]:{opacity:.5},[`&.${c.disabled} + .${c.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${c.input}`]:{left:"-100%",width:"300%"}})),B(({theme:e})=>({"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(Ce(["light"])).map(([t])=>({props:{color:t},style:{[`&.${c.checked}`]:{color:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[t].main,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${c.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t}DisabledColor`]:`${e.palette.mode==="light"?e.lighten(e.palette[t].main,.62):e.darken(e.palette[t].main,.55)}`}},[`&.${c.checked} + .${c.track}`]:{backgroundColor:(e.vars||e).palette[t].main}}}))]}))),_e=$("span",{name:"MuiSwitch",slot:"Track"})(B(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`}))),Be=$("span",{name:"MuiSwitch",slot:"Thumb"})(B(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),$e=S.forwardRef(function(t,l){const s=we({props:t,name:"MuiSwitch"}),{className:d,color:o="primary",edge:n=!1,size:h="medium",sx:v,slots:u={},slotProps:p={},...R}=s,g={...s,color:o,edge:n,size:h},m=Oe(g),k={slots:u,slotProps:p},[P,w]=E("root",{className:Te(m.root,d),elementType:Le,externalForwardedProps:k,ownerState:g,additionalProps:{sx:v}}),[fe,xe]=E("thumb",{className:m.thumb,elementType:Be,externalForwardedProps:k,ownerState:g}),N=a.jsx(fe,{...xe}),[ye,ve]=E("track",{className:m.track,elementType:_e,externalForwardedProps:k,ownerState:g});return a.jsxs(P,{...w,children:[a.jsx(Ae,{type:"checkbox",icon:N,checkedIcon:N,ref:l,ownerState:g,...R,classes:{...m,root:m.switchBase},slots:{...u.switchBase&&{root:u.switchBase},...u.input&&{input:u.input}},slotProps:{...p.switchBase&&{root:typeof p.switchBase=="function"?p.switchBase(g):p.switchBase},input:{role:"switch"},...p.input&&{input:typeof p.input=="function"?p.input(g):p.input}}}),a.jsx(ye,{...ve})]})}),Ie="_wrapper_11314_11",Re="_label_11314_25",b={wrapper:Ie,"wrapper--disabled":"_wrapper--disabled_11314_19",label:Re,switch:"_switch_11314_39","wrapper--small":"_wrapper--small_11314_43","wrapper--large":"_wrapper--large_11314_48"},M="M5.99986 13.6134L1.85986 9.47336L3.74653 7.58669L5.99986 9.84669L12.5865 3.25336L14.4732 5.14002L5.99986 13.6134Z",V="M13.3332 4.60669L11.3932 2.66669L7.99984 6.06002L4.6065 2.66669L2.6665 4.60669L6.05984 8.00002L2.6665 11.3934L4.6065 13.3334L7.99984 9.94002L11.3932 13.3334L13.3332 11.3934L9.93984 8.00002L13.3332 4.60669Z",y=(e,t,l)=>encodeURIComponent(`<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9" fill="${e}"/><g transform="translate(2,2)"><path d="${t}" fill="${l}"/></g></svg>`),Pe=y("#00B359",M,"white"),Ee=y("#E53935",V,"white"),Me=y("#191E3C",M,"white"),Ve=y("#191E3C",V,"#E53935"),Fe=y("#B8BEC7",M,"white"),Ne=y("#B8BEC7",V,"white"),f=e=>`url("data:image/svg+xml,${e}")`,W={primary:{on:"var(--global-color-primary-sky-blue)",off:"var(--global-color-primary-blue-dark-blue, #191E3C)"},blue:{on:"var(--global-color-primary-sky-blue)",off:"var(--global-color-primary-blue-dark-blue, #191E3C)"},dark:{on:"var(--global-color-primary-sky-blue)",off:"var(--global-color-primary-blue-dark-blue, #191E3C)"},status:{on:"var(--toggle-track-bg-status-on)",off:"var(--global-color-primary-sky-blue)"}},We={primary:"var(--toggle-track-border-primary)",blue:"var(--toggle-track-border-blue)",dark:"var(--toggle-track-border-dark)",status:"var(--toggle-track-border-status)"},r=({checked:e=!1,onChange:t,size:l="default",variant:s="primary",disabled:d=!1,"aria-label":o,label:n,labelPosition:h="right",className:v})=>{const u=w=>{t==null||t(w.target.checked,w)},p=[b.wrapper,b[`wrapper--${l}`],b[`wrapper--${s}`],d&&b["wrapper--disabled"],v].filter(Boolean).join(" "),R=f(d?e?Fe:Ne:s==="status"?e?Me:Ve:e?Pe:Ee),g=d?"var(--toggle-track-bg-disabled)":e?W[s].on:W[s].off,m=d?"var(--global-color-neutral-gray-300)":We[s],k=l==="large"?"medium":"small",P={"& .MuiSwitch-track":{backgroundColor:`${g} !important`,opacity:"1 !important",borderRadius:"var(--toggle-track-radius)",boxShadow:`0 0 0 2px ${m}`,transition:["background-color var(--toggle-transition-duration) var(--toggle-transition-easing)","box-shadow var(--toggle-transition-duration) var(--toggle-transition-easing)"].join(", ")},"& .MuiSwitch-thumb":{backgroundColor:"var(--toggle-thumb-bg)",backgroundImage:R,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"78%",boxShadow:"var(--toggle-thumb-shadow)",transition:["background-image var(--toggle-transition-duration) var(--toggle-transition-easing)","background-color var(--toggle-transition-duration) var(--toggle-transition-easing)"].join(", ")},"& .MuiSwitch-switchBase":{"&:hover":{backgroundColor:"transparent"}},"& .MuiTouchRipple-root":{display:"none"},"& .MuiSwitch-switchBase.Mui-checked":{color:"var(--toggle-thumb-bg)"}};return a.jsxs("label",{className:p,children:[n&&h==="left"&&a.jsx("span",{className:b.label,children:n}),a.jsx($e,{checked:e,onChange:u,disabled:d,size:k,inputProps:{"aria-label":o??n??"toggle"},sx:P,disableRipple:!0,className:b.switch}),n&&h==="right"&&a.jsx("span",{className:b.label,children:n})]})};r.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is on",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Fires when the toggle changes"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Visual size",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'blue' | 'dark' | 'status'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'status'"}]},description:"Colour variant",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable interaction",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},label:{required:!1,tsType:{name:"string"},description:"Optional visible label rendered beside the toggle"},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Label position relative to the toggle",defaultValue:{value:"'right'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const F=()=>a.jsxs(i,{children:[a.jsx(i.Header,{title:"Toggle",subtitle:"A binary on/off switch built on MUI Switch. Supports primary (sky-blue) and dark (navy) colour variants across three sizes, with disabled states and optional visible labels."}),a.jsxs(i.BodyText,{children:["The ",a.jsx("strong",{children:"Toggle"})," uses MUI ",a.jsx("code",{children:"Switch"})," as its accessible foundation, providing native keyboard navigation, focus management, and ARIA semantics out of the box. All visual treatment — track colour, thumb colour, and sizing — is driven by design tokens."]}),a.jsx(i.Anatomy,{parts:[{number:1,label:"Track",description:"The pill-shaped background. Changes colour from gray (off) to brand colour (on)."},{number:2,label:"Thumb",description:"The circular handle that slides between off and on positions."},{number:3,label:"Label (optional)",description:"A text label rendered left or right of the toggle."}]}),a.jsxs(i.Section,{title:"Variants",children:[a.jsx(i.Subsection,{title:"Primary (Sky-Blue)",children:a.jsxs("div",{style:{display:"flex",gap:"24px",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:[a.jsx(r,{variant:"primary",checked:!1,label:"Off"}),a.jsx(r,{variant:"primary",checked:!0,label:"On"}),a.jsx(r,{variant:"primary",checked:!0,disabled:!0,label:"On — Disabled"})]})}),a.jsx(i.Subsection,{title:"Dark (Navy)",children:a.jsxs("div",{style:{display:"flex",gap:"24px",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:[a.jsx(r,{variant:"dark",checked:!1,label:"Off"}),a.jsx(r,{variant:"dark",checked:!0,label:"On"}),a.jsx(r,{variant:"dark",checked:!0,disabled:!0,label:"On — Disabled"})]})})]}),a.jsx(i.Section,{title:"Sizes",children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px) 0"},children:["small","default","large"].map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"56px",textTransform:"capitalize"},children:e}),a.jsx(r,{size:e,checked:!0,label:`${e}`})]},e))})}),a.jsx(i.TokenTable,{title:"Design Tokens",description:"Toggle uses the following component-level tokens.",tokens:[{name:"--toggle-track-bg",description:"Track background when off (gray-300)"},{name:"--toggle-track-bg-checked",description:"Track background when on — primary (sky-blue)"},{name:"--toggle-track-bg-checked-dark",description:"Track background when on — dark variant (dark-blue)"},{name:"--toggle-track-bg-disabled",description:"Track background when disabled (gray-200)"},{name:"--toggle-track-radius",description:"Track pill border-radius (full)"},{name:"--toggle-thumb-bg",description:"Thumb colour when off (white)"},{name:"--toggle-thumb-bg-checked",description:"Thumb colour when on — primary (white)"},{name:"--toggle-thumb-bg-checked-dark",description:"Thumb colour when on — dark (white)"},{name:"--toggle-thumb-bg-disabled",description:"Thumb colour when disabled (gray-200)"},{name:"--toggle-scale-sm",description:"Scale factor for small size (0.75)"},{name:"--toggle-scale-lg",description:"Scale factor for large size (1.25)"},{name:"--toggle-disabled-opacity",description:"Opacity for disabled state (0.5)"},{name:"--toggle-label-gap",description:"Gap between toggle and its label (8px)"},{name:"--toggle-label-color",description:"Label text colour (base-black)"},{name:"--toggle-label-color-disabled",description:"Label text colour when disabled (gray-400)"}]}),a.jsx(i.CodeBlock,{children:`import { Toggle } from './BuildingBlocks/Toggle';

// Basic usage
<Toggle checked={on} onChange={setOn} label="Notifications" />

// Dark variant
<Toggle variant="dark" checked={on} onChange={setOn} />

// Sizes
<Toggle size="small" checked={on} onChange={setOn} />
<Toggle size="large" checked={on} onChange={setOn} />

// Disabled
<Toggle checked disabled label="Cannot change" />`}),a.jsxs(i.Principles,{children:[a.jsx(i.PrincipleCard,{number:1,title:"Clear On/Off State",children:"Track colour changes unambiguously from neutral gray to brand colour. Never rely on position alone to convey state."}),a.jsx(i.PrincipleCard,{number:2,title:"Accessible by Default",children:"MUI Switch provides keyboard focus, ARIA role switch, and checked state. Always supply an aria-label or visible label."}),a.jsx(i.PrincipleCard,{number:3,title:"Label Context",children:"Include a label to describe what is being toggled. Without a label, users must infer meaning from context alone."})]}),a.jsx(i.Footer,{componentName:"Toggle"})]});F.__docgenInfo={description:"",methods:[],displayName:"ToggleDocs"};const I=["primary","blue","dark","status"],Ue=["large","default","small"],ca={title:"Foundation/BuildingBlocks/Toggles",component:r,parameters:{docs:{page:()=>a.jsx(F,{})}},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["small","default","large"]},variant:{control:"select",options:I},label:{control:"text"},labelPosition:{control:"select",options:["left","right"]}},args:{checked:!1,disabled:!1,size:"default",variant:"primary",label:"Toggle label",labelPosition:"right"}},T={name:"Documentation",render:()=>a.jsx(F,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},j={name:"Playground",render:e=>{const t=()=>{const[l,s]=S.useState(e.checked??!1);return a.jsx("div",{style:{padding:"40px 24px"},children:a.jsx(r,{...e,checked:l,onChange:s})})};return a.jsx(t,{})}},C={name:"Default",render:()=>{const e=()=>{const[t,l]=S.useState(!1);return a.jsx("div",{style:{padding:"40px 24px"},children:a.jsx(r,{checked:t,onChange:l,label:"Toggle"})})};return a.jsx(e,{})},parameters:{controls:{disable:!0}}},D={name:"Sizes",render:()=>{const e=()=>{const[t,l]=S.useState({small:!1,default:!0,large:!1});return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"40px 24px"},children:Ue.map(s=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"60px",textTransform:"capitalize"},children:s}),a.jsx(r,{size:s,checked:t[s],onChange:d=>l(o=>({...o,[s]:d})),label:`${s}`})]},s))})};return a.jsx(e,{})},parameters:{controls:{disable:!0}}},z={name:"Status — Primary",render:()=>{const e=()=>{const[t,l]=S.useState(!1);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"40px 24px"},children:[a.jsx(r,{variant:"primary",checked:t,onChange:l,label:t?"On":"Off"}),a.jsx(r,{variant:"primary",checked:!0,label:"On (static)"}),a.jsx(r,{variant:"primary",checked:!1,label:"Off (static)"}),a.jsx(r,{variant:"primary",checked:!0,disabled:!0,label:"On — Disabled"}),a.jsx(r,{variant:"primary",checked:!1,disabled:!0,label:"Off — Disabled"})]})};return a.jsx(e,{})},parameters:{controls:{disable:!0}}},O={name:"Status — All Variants",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"40px 24px"},children:I.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"32px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"60px",textTransform:"capitalize"},children:e}),a.jsx(r,{variant:e,checked:!0,label:"On"}),a.jsx(r,{variant:e,checked:!1,label:"Off"})]},e))}),parameters:{controls:{disable:!0}}},L={name:"Status — Disabled",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"40px 24px"},children:I.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"32px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"60px",textTransform:"capitalize"},children:e}),a.jsx(r,{variant:e,checked:!1,disabled:!0,label:"Off"}),a.jsx(r,{variant:e,checked:!0,disabled:!0,label:"On"})]},e))}),parameters:{controls:{disable:!0}}},A={name:"All Interactive States",render:()=>a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"32px",padding:"40px 24px"},children:I.map(e=>a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"12px"},children:e}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsx(r,{variant:e,checked:!1,label:"Off"}),a.jsx(r,{variant:e,checked:!0,label:"On"}),a.jsx(r,{variant:e,checked:!1,disabled:!0,label:"Off — Disabled"}),a.jsx(r,{variant:e,checked:!0,disabled:!0,label:"On — Disabled"})]})]},e))}),parameters:{controls:{disable:!0}}},_={name:"Full Design Matrix",render:()=>{const e=["Primary","Blue","Dark","Status","Disabled"],t={fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:700,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.6px",textAlign:"center",padding:"0 4px 8px"},l={fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",textAlign:"right",paddingRight:"12px",whiteSpace:"nowrap"},s={display:"flex",justifyContent:"center",alignItems:"center",padding:"10px 4px"},d=[["large",!0],["large",!1],["default",!0],["default",!1],["small",!0],["small",!1]];return a.jsx("div",{style:{padding:"32px 24px",overflowX:"auto"},children:a.jsxs("table",{style:{borderCollapse:"collapse"},children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:"80px"}}),e.map(o=>a.jsx("th",{style:t,children:o},o))]})}),a.jsx("tbody",{children:d.map(([o,n])=>a.jsxs("tr",{children:[a.jsxs("td",{style:l,children:[o," ",a.jsx("span",{style:{opacity:.6},children:n?"✓":"✕"})]}),a.jsx("td",{style:s,children:a.jsx(r,{size:o,variant:"primary",checked:n})}),a.jsx("td",{style:s,children:a.jsx(r,{size:o,variant:"blue",checked:n})}),a.jsx("td",{style:s,children:a.jsx(r,{size:o,variant:"dark",checked:n})}),a.jsx("td",{style:s,children:a.jsx(r,{size:o,variant:"status",checked:n})}),a.jsx("td",{style:s,children:a.jsx(r,{size:o,variant:"primary",checked:n,disabled:!0})})]},`${o}-${n?"on":"off"}`))})]})})},parameters:{controls:{disable:!0}}};var U,H,q;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(H=T.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var G,K,X;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(X=(K=j.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Z,J,Q;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(Q=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,ee,ae;D.parameters={...D.parameters,docs:{...(Y=D.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ae=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,le;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(re=z.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var se,oe,ne;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ne=(oe=O.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,ce,de;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ge,ue;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var me,be,he;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 4px'
    };

    // 6 data rows: [size, checked]
    const rows: Array<[ToggleSize, boolean]> = [['large', true], ['large', false], ['default', true], ['default', false], ['small', true], ['small', false]];
    return <div style={{
      padding: '32px 24px',
      overflowX: 'auto'
    }}>
        <table style={{
        borderCollapse: 'collapse'
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
                  <Toggle size={size} variant="primary" checked={checked} />
                </td>
                {/* blue */}
                <td style={cell}>
                  <Toggle size={size} variant="blue" checked={checked} />
                </td>
                {/* dark */}
                <td style={cell}>
                  <Toggle size={size} variant="dark" checked={checked} />
                </td>
                {/* status */}
                <td style={cell}>
                  <Toggle size={size} variant="status" checked={checked} />
                </td>
                {/* disabled */}
                <td style={cell}>
                  <Toggle size={size} variant="primary" checked={checked} disabled />
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
}`,...(he=(be=_.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};const da=["Documentation","Playground","Default","Sizes","StatusPrimary","StatusAllVariants","StatusDisabled","AllInteractiveStates","FullDesignMatrix"];export{A as AllInteractiveStates,C as Default,T as Documentation,_ as FullDesignMatrix,j as Playground,D as Sizes,O as StatusAllVariants,L as StatusDisabled,z as StatusPrimary,da as __namedExportsOrder,ca as default};
