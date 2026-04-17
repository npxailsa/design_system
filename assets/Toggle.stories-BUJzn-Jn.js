import{r as k,j as a,R as be}from"./iframe-CVrhevKq.js";import{g as he,a as fe,u as ve,b as ke,d as f,e as xe,s as $}from"./DefaultPropsProvider-CA-Clxfq.js";import{c as ye}from"./createSimplePaletteValueFilter-bm0fmN_7.js";import{S as we}from"./SwitchBase-FdimHtsK.js";import{m as C}from"./memoTheme-Ctgqf86v.js";import{u as P}from"./useSlot-CtZYh77I.js";import{D as i}from"./DocsTemplate-CH9shMJB.js";import"./preload-helper-Dp1pzeXC.js";import"./useFormControl-Deos_smV.js";import"./useControlled-DP4lqVsK.js";import"./ButtonBase-Di_LP50G.js";import"./index--Ev_WL9F.js";import"./emotion-react.browser.esm-DE83DdWw.js";import"./useForkRef-di3jKsC7.js";import"./useEventCallback-zkLl4C4A.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-C2IhGoPk.js";import"./isHostComponent-DVu5iVWx.js";function Se(e){return he("MuiSwitch",e)}const o=fe("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),Te=e=>{const{classes:r,edge:l,size:n,color:s,checked:c,disabled:p}=e,h={root:["root",l&&`edge${f(l)}`,`size${f(n)}`],switchBase:["switchBase",`color${f(s)}`,c&&"checked",p&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},v=xe(h,Se,r);return{...r,...v}},je=$("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:l}=e;return[r.root,l.edge&&r[`edge${f(l.edge)}`],r[`size${f(l.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${o.thumb}`]:{width:16,height:16},[`& .${o.switchBase}`]:{padding:4,[`&.${o.checked}`]:{transform:"translateX(16px)"}}}}]}),De=$(we,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,r)=>{const{ownerState:l}=e;return[r.switchBase,{[`& .${o.input}`]:r.input},l.color!=="default"&&r[`color${f(l.color)}`]]}})(C(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${o.checked}`]:{transform:"translateX(20px)"},[`&.${o.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${o.checked} + .${o.track}`]:{opacity:.5},[`&.${o.disabled} + .${o.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${o.input}`]:{left:"-100%",width:"300%"}})),C(({theme:e})=>({"&:hover":{backgroundColor:e.alpha((e.vars||e).palette.action.active,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(ye(["light"])).map(([r])=>({props:{color:r},style:{[`&.${o.checked}`]:{color:(e.vars||e).palette[r].main,"&:hover":{backgroundColor:e.alpha((e.vars||e).palette[r].main,(e.vars||e).palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${o.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${r}DisabledColor`]:`${e.palette.mode==="light"?e.lighten(e.palette[r].main,.62):e.darken(e.palette[r].main,.55)}`}},[`&.${o.checked} + .${o.track}`]:{backgroundColor:(e.vars||e).palette[r].main}}}))]}))),ze=$("span",{name:"MuiSwitch",slot:"Track"})(C(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`}))),Oe=$("span",{name:"MuiSwitch",slot:"Thumb"})(C(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),Ce=k.forwardRef(function(r,l){const n=ve({props:r,name:"MuiSwitch"}),{className:s,color:c="primary",edge:p=!1,size:h="medium",sx:v,slots:m={},slotProps:d={},...B}=n,g={...n,color:c,edge:p,size:h},u=Te(g),M={slots:m,slotProps:d},[ce,de]=P("root",{className:ke(u.root,s),elementType:je,externalForwardedProps:M,ownerState:g,additionalProps:{sx:v}}),[pe,ge]=P("thumb",{className:u.thumb,elementType:Oe,externalForwardedProps:M,ownerState:g}),_=a.jsx(pe,{...ge}),[ue,me]=P("track",{className:u.track,elementType:ze,externalForwardedProps:M,ownerState:g});return a.jsxs(ce,{...de,children:[a.jsx(De,{type:"checkbox",icon:_,checkedIcon:_,ref:l,ownerState:g,...B,classes:{...u,root:u.switchBase},slots:{...m.switchBase&&{root:m.switchBase},...m.input&&{input:m.input}},slotProps:{...d.switchBase&&{root:typeof d.switchBase=="function"?d.switchBase(g):d.switchBase},input:{role:"switch"},...d.input&&{input:typeof d.input=="function"?d.input(g):d.input}}}),a.jsx(ue,{...me})]})}),$e="_wrapper_11314_11",Be="_label_11314_25",b={wrapper:$e,"wrapper--disabled":"_wrapper--disabled_11314_19",label:Be,switch:"_switch_11314_39","wrapper--small":"_wrapper--small_11314_43","wrapper--large":"_wrapper--large_11314_48"},t=({checked:e=!1,onChange:r,size:l="default",variant:n="primary",disabled:s=!1,"aria-label":c,label:p,labelPosition:h="right",className:v})=>{const m=u=>{r==null||r(u.target.checked,u)},d=[b.wrapper,b[`wrapper--${l}`],b[`wrapper--${n}`],s&&b["wrapper--disabled"],v].filter(Boolean).join(" "),B=l==="large"?"medium":"small",g={"& .MuiSwitch-track":{backgroundColor:s?"var(--toggle-track-bg-disabled)":e?n==="dark"?"var(--toggle-track-bg-checked-dark)":"var(--toggle-track-bg-checked)":"var(--toggle-track-bg)",opacity:1,borderRadius:"var(--toggle-track-radius)",transition:"background-color var(--toggle-transition-duration) var(--toggle-transition-easing)"},"& .MuiSwitch-thumb":{backgroundColor:s?"var(--toggle-thumb-bg-disabled)":e?n==="dark"?"var(--toggle-thumb-bg-checked-dark)":"var(--toggle-thumb-bg-checked)":"var(--toggle-thumb-bg)",boxShadow:e?"none":"var(--toggle-thumb-shadow)",transition:"background-color var(--toggle-transition-duration) var(--toggle-transition-easing)"},"&.Mui-checked .MuiSwitch-thumb":{backgroundColor:s?"var(--toggle-thumb-bg-disabled)":n==="dark"?"var(--toggle-thumb-bg-checked-dark)":"var(--toggle-thumb-bg-checked)"},"&.Mui-checked + .MuiSwitch-track":{backgroundColor:s?"var(--toggle-track-bg-disabled)":n==="dark"?"var(--toggle-track-bg-checked-dark)":"var(--toggle-track-bg-checked)",opacity:1},"& .MuiSwitch-switchBase":{"&:hover":{backgroundColor:"transparent"}},"& .MuiTouchRipple-root":{display:"none"}};return a.jsxs("label",{className:d,children:[p&&h==="left"&&a.jsx("span",{className:b.label,children:p}),a.jsx(Ce,{checked:e,onChange:m,disabled:s,size:B,inputProps:{"aria-label":c??p??"toggle"},sx:g,disableRipple:!0,className:b.switch}),p&&h==="right"&&a.jsx("span",{className:b.label,children:p})]})};t.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is on",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Fires when the toggle changes"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Visual size",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'dark'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'dark'"}]},description:"Colour variant — primary (sky-blue) or dark (dark-blue)",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable interaction",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"},label:{required:!1,tsType:{name:"string"},description:"Optional visible label rendered beside the toggle"},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Label position relative to the toggle",defaultValue:{value:"'right'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const I=()=>a.jsxs(i,{children:[a.jsx(i.Header,{title:"Toggle",subtitle:"A binary on/off switch built on MUI Switch. Supports primary (sky-blue) and dark (navy) colour variants across three sizes, with disabled states and optional visible labels."}),a.jsxs(i.BodyText,{children:["The ",a.jsx("strong",{children:"Toggle"})," uses MUI ",a.jsx("code",{children:"Switch"})," as its accessible foundation, providing native keyboard navigation, focus management, and ARIA semantics out of the box. All visual treatment — track colour, thumb colour, and sizing — is driven by design tokens."]}),a.jsx(i.Anatomy,{parts:[{number:1,label:"Track",description:"The pill-shaped background. Changes colour from gray (off) to brand colour (on)."},{number:2,label:"Thumb",description:"The circular handle that slides between off and on positions."},{number:3,label:"Label (optional)",description:"A text label rendered left or right of the toggle."}]}),a.jsxs(i.Section,{title:"Variants",children:[a.jsx(i.Subsection,{title:"Primary (Sky-Blue)",children:a.jsxs("div",{style:{display:"flex",gap:"24px",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:[a.jsx(t,{variant:"primary",checked:!1,label:"Off"}),a.jsx(t,{variant:"primary",checked:!0,label:"On"}),a.jsx(t,{variant:"primary",checked:!0,disabled:!0,label:"On — Disabled"})]})}),a.jsx(i.Subsection,{title:"Dark (Navy)",children:a.jsxs("div",{style:{display:"flex",gap:"24px",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:[a.jsx(t,{variant:"dark",checked:!1,label:"Off"}),a.jsx(t,{variant:"dark",checked:!0,label:"On"}),a.jsx(t,{variant:"dark",checked:!0,disabled:!0,label:"On — Disabled"})]})})]}),a.jsx(i.Section,{title:"Sizes",children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px) 0"},children:["small","default","large"].map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"56px",textTransform:"capitalize"},children:e}),a.jsx(t,{size:e,checked:!0,label:`${e}`})]},e))})}),a.jsx(i.TokenTable,{title:"Design Tokens",description:"Toggle uses the following component-level tokens.",tokens:[{name:"--toggle-track-bg",description:"Track background when off (gray-300)"},{name:"--toggle-track-bg-checked",description:"Track background when on — primary (sky-blue)"},{name:"--toggle-track-bg-checked-dark",description:"Track background when on — dark variant (dark-blue)"},{name:"--toggle-track-bg-disabled",description:"Track background when disabled (gray-200)"},{name:"--toggle-track-radius",description:"Track pill border-radius (full)"},{name:"--toggle-thumb-bg",description:"Thumb colour when off (white)"},{name:"--toggle-thumb-bg-checked",description:"Thumb colour when on — primary (white)"},{name:"--toggle-thumb-bg-checked-dark",description:"Thumb colour when on — dark (white)"},{name:"--toggle-thumb-bg-disabled",description:"Thumb colour when disabled (gray-200)"},{name:"--toggle-scale-sm",description:"Scale factor for small size (0.75)"},{name:"--toggle-scale-lg",description:"Scale factor for large size (1.25)"},{name:"--toggle-disabled-opacity",description:"Opacity for disabled state (0.5)"},{name:"--toggle-label-gap",description:"Gap between toggle and its label (8px)"},{name:"--toggle-label-color",description:"Label text colour (base-black)"},{name:"--toggle-label-color-disabled",description:"Label text colour when disabled (gray-400)"}]}),a.jsx(i.CodeBlock,{children:`import { Toggle } from './BuildingBlocks/Toggle';

// Basic usage
<Toggle checked={on} onChange={setOn} label="Notifications" />

// Dark variant
<Toggle variant="dark" checked={on} onChange={setOn} />

// Sizes
<Toggle size="small" checked={on} onChange={setOn} />
<Toggle size="large" checked={on} onChange={setOn} />

// Disabled
<Toggle checked disabled label="Cannot change" />`}),a.jsxs(i.Principles,{children:[a.jsx(i.PrincipleCard,{number:1,title:"Clear On/Off State",children:"Track colour changes unambiguously from neutral gray to brand colour. Never rely on position alone to convey state."}),a.jsx(i.PrincipleCard,{number:2,title:"Accessible by Default",children:"MUI Switch provides keyboard focus, ARIA role switch, and checked state. Always supply an aria-label or visible label."}),a.jsx(i.PrincipleCard,{number:3,title:"Label Context",children:"Include a label to describe what is being toggled. Without a label, users must infer meaning from context alone."})]}),a.jsx(i.Footer,{componentName:"Toggle"})]});I.__docgenInfo={description:"",methods:[],displayName:"ToggleDocs"};const Ke={title:"Foundation/BuildingBlocks/Toggles",component:t,parameters:{docs:{page:()=>a.jsx(I,{})}},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["small","default","large"]},variant:{control:"select",options:["primary","dark"]},label:{control:"text"},labelPosition:{control:"select",options:["left","right"]}},args:{checked:!1,disabled:!1,size:"default",variant:"primary",label:"Toggle label",labelPosition:"right"}},x={name:"Documentation",render:()=>a.jsx(I,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},y={name:"Playground",render:e=>{const r=()=>{const[l,n]=k.useState(e.checked??!1);return a.jsx("div",{style:{padding:"24px"},children:a.jsx(t,{...e,checked:l,onChange:n})})};return a.jsx(r,{})}},w={name:"Default",render:()=>{const e=()=>{const[r,l]=k.useState(!1);return a.jsx("div",{style:{padding:"24px"},children:a.jsx(t,{checked:r,onChange:l,label:"Toggle"})})};return a.jsx(e,{})},parameters:{controls:{disable:!0}}},S={name:"Sizes",render:()=>{const e=()=>{const[r,l]=k.useState({small:!1,default:!0,large:!1});return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"24px"},children:["small","default","large"].map(n=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"56px",textTransform:"capitalize"},children:n}),a.jsx(t,{size:n,checked:r[n],onChange:s=>l(c=>({...c,[n]:s})),label:`${n} size`})]},n))})};return a.jsx(e,{})},parameters:{controls:{disable:!0}}},T={name:"Status — Primary",render:()=>{const e=()=>{const[r,l]=k.useState(!1);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[a.jsx(t,{variant:"primary",checked:r,onChange:l,label:r?"On":"Off"}),a.jsx(t,{variant:"primary",checked:!0,label:"On (static)"}),a.jsx(t,{variant:"primary",checked:!1,label:"Off (static)"}),a.jsx(t,{variant:"primary",checked:!0,disabled:!0,label:"On — Disabled"}),a.jsx(t,{variant:"primary",checked:!1,disabled:!0,label:"Off — Disabled"})]})};return a.jsx(e,{})},parameters:{controls:{disable:!0}}},j={name:"Status — Dark",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[a.jsx(t,{variant:"dark",checked:!0,label:"On — Dark"}),a.jsx(t,{variant:"dark",checked:!1,label:"Off — Dark"}),a.jsx(t,{variant:"dark",checked:!0,disabled:!0,label:"On — Dark Disabled"}),a.jsx(t,{variant:"dark",checked:!1,disabled:!0,label:"Off — Dark Disabled"})]}),parameters:{controls:{disable:!0}}},D={name:"Status — Disabled",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:["primary","dark"].map(e=>a.jsxs("div",{style:{display:"flex",gap:"24px"},children:[a.jsx(t,{variant:e,checked:!1,disabled:!0,label:`${e} — off disabled`}),a.jsx(t,{variant:e,checked:!0,disabled:!0,label:`${e} — on disabled`})]},e))}),parameters:{controls:{disable:!0}}},z={name:"All Interactive States",render:()=>a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",padding:"24px"},children:["primary","dark"].map(e=>a.jsxs("div",{children:[a.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"12px"},children:["Variant: ",e]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsx(t,{variant:e,checked:!1,label:"Off"}),a.jsx(t,{variant:e,checked:!0,label:"On"}),a.jsx(t,{variant:e,checked:!1,disabled:!0,label:"Off — Disabled"}),a.jsx(t,{variant:e,checked:!0,disabled:!0,label:"On — Disabled"})]})]},e))}),parameters:{controls:{disable:!0}}},O={name:"Full Design Matrix",render:()=>{const e=["small","default","large"],r=["primary","dark"],l=[{label:"Off",checked:!1},{label:"On",checked:!0},{label:"Off — Disabled",checked:!1,disabled:!0},{label:"On — Disabled",checked:!0,disabled:!0}];return a.jsx("div",{style:{padding:"24px",overflowX:"auto"},children:r.map(n=>a.jsxs("div",{style:{marginBottom:"40px"},children:[a.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",textTransform:"capitalize"},children:["Variant: ",n]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:`80px repeat(${l.length}, 1fr)`,gap:"8px",alignItems:"center"},children:[a.jsx("div",{}),l.map(s=>a.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:600,color:"var(--global-color-neutral-gray-500)"},children:s.label},s.label)),e.map(s=>a.jsxs(be.Fragment,{children:[a.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize"},children:s}),l.map(c=>a.jsx(t,{size:s,variant:n,checked:c.checked,disabled:c.disabled},c.label))]},s))]})]},n))})},parameters:{controls:{disable:!0}}};var F,R,A;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(R=x.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var V,N,W;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const Demo = () => {
      const [on, setOn] = useState(args.checked ?? false);
      return <div style={{
        padding: '24px'
      }}>
          <Toggle {...args} checked={on} onChange={setOn} />
        </div>;
    };
    return <Demo />;
  }
}`,...(W=(N=y.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var E,q,L;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    const Demo = () => {
      const [on, setOn] = useState(false);
      return <div style={{
        padding: '24px'
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
}`,...(L=(q=w.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var U,H,X;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        gap: '20px',
        padding: '24px'
      }}>
          {(['small', 'default', 'large'] as ToggleSize[]).map(size => <div key={size} style={{
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
              <Toggle size={size} checked={vals[size]} onChange={v => setVals(p => ({
            ...p,
            [size]: v
          }))} label={\`\${size} size\`} />
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
}`,...(X=(H=S.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var G,J,K;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Status — Primary',
  render: () => {
    const Demo = () => {
      const [on, setOn] = useState(false);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '24px'
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
}`,...(K=(J=T.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Status — Dark',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>
      <Toggle variant="dark" checked={true} label="On — Dark" />
      <Toggle variant="dark" checked={false} label="Off — Dark" />
      <Toggle variant="dark" checked={true} disabled label="On — Dark Disabled" />
      <Toggle variant="dark" checked={false} disabled label="Off — Dark Disabled" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Status — Disabled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>
      {(['primary', 'dark'] as ToggleVariant[]).map(variant => <div key={variant} style={{
      display: 'flex',
      gap: '24px'
    }}>
          <Toggle variant={variant} checked={false} disabled label={\`\${variant} — off disabled\`} />
          <Toggle variant={variant} checked={true} disabled label={\`\${variant} — on disabled\`} />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(re=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,le,ne;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    padding: '24px'
  }}>
      {(['primary', 'dark'] as ToggleVariant[]).map(variant => <div key={variant}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'capitalize',
        marginBottom: '12px'
      }}>
            Variant: {variant}
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
}`,...(ne=(le=z.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var se,ie,oe;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const sizes: ToggleSize[] = ['small', 'default', 'large'];
    const variants: ToggleVariant[] = ['primary', 'dark'];
    const states: Array<{
      label: string;
      checked: boolean;
      disabled?: boolean;
    }> = [{
      label: 'Off',
      checked: false
    }, {
      label: 'On',
      checked: true
    }, {
      label: 'Off — Disabled',
      checked: false,
      disabled: true
    }, {
      label: 'On — Disabled',
      checked: true,
      disabled: true
    }];
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
          gridTemplateColumns: \`80px repeat(\${states.length}, 1fr)\`,
          gap: '8px',
          alignItems: 'center'
        }}>
              <div />
              {states.map(s => <div key={s.label} style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)'
          }}>{s.label}</div>)}
              {sizes.map(size => <React.Fragment key={size}>
                  <div style={{
              fontFamily: 'var(--brand-font-primary)',
              fontSize: '11px',
              color: 'var(--global-color-neutral-gray-700)',
              textTransform: 'capitalize'
            }}>{size}</div>
                  {states.map(s => <Toggle key={s.label} size={size} variant={variant} checked={s.checked} disabled={s.disabled} />)}
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
}`,...(oe=(ie=O.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};const Qe=["Documentation","Playground","Default","Sizes","StatusPrimary","StatusDark","StatusDisabled","AllInteractiveStates","FullDesignMatrix"];export{z as AllInteractiveStates,w as Default,x as Documentation,O as FullDesignMatrix,y as Playground,S as Sizes,j as StatusDark,D as StatusDisabled,T as StatusPrimary,Qe as __namedExportsOrder,Ke as default};
