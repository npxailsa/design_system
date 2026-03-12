import{j as e}from"./jsx-runtime-BYYWji4R.js";import{c as P,P as N,I as g,A as $,S as E,M as F}from"./Settings-WiyIbRwu.js";const O=P(e.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),X="_labelContainer_117x5_1",k="_split_117x5_80",B="_splitDivider_117x5_88",K="_labelText_117x5_95",a={labelContainer:X,"align-left":"_align-left_117x5_12","align-centre":"_align-centre_117x5_16","align-right":"_align-right_117x5_21","weight-bold":"_weight-bold_117x5_27","weight-medium":"_weight-medium_117x5_31","weight-light":"_weight-light_117x5_35","weight-thin":"_weight-thin_117x5_39","size-large":"_size-large_117x5_44","size-default":"_size-default_117x5_51","size-small":"_size-small_117x5_58","size-x-small":"_size-x-small_117x5_65","size-2x-small":"_size-2x-small_117x5_72",split:k,splitDivider:B,labelText:K},l=({children:p="Label",size:t="default",weight:i="medium",align:n="left",dropdown:R=!1,leadingIcon:u=N,showTrailingIcon:q=!0,className:C=""})=>{const V=[a.labelContainer,a[`size-${t}`],a[`weight-${i}`],a[`align-${n}`],C].join(" ");return e.jsxs("div",{className:V,children:[u&&e.jsx(g,{icon:u,size:t}),e.jsx("span",{className:a.labelText,children:p}),q&&e.jsx(g,{icon:$,size:t}),R&&e.jsxs("div",{className:a.split,children:[e.jsx("div",{className:a.splitDivider}),e.jsx(g,{icon:O,size:t,className:a.chevronIcon})]})]})};l.__docgenInfo={description:"A versatile Label component for displaying text with optional icons and dropdown split.",methods:[],displayName:"Label",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text content",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small' | '2x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'2x-small'"}]},description:"Size variant — controls font-size, line-height, gap, and icon size",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'medium' | 'light' | 'thin'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'light'"},{name:"literal",value:"'thin'"}]},description:"Font weight",defaultValue:{value:"'medium'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},dropdown:{required:!1,tsType:{name:"boolean"},description:"Shows dropdown split + chevron-down icon after trailing icon",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI icon component). Pass null/undefined to hide.",defaultValue:{value:"PersonIcon",computed:!0}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the trailing arrow-right icon",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const U={title:"Components/Label",component:l,argTypes:{size:{control:"select",options:["large","default","small","x-small","2x-small"]},weight:{control:"select",options:["bold","medium","light","thin"]},align:{control:"select",options:["left","centre","right"]},leadingIcon:{control:"select",options:["Person","Mail","Settings","None"],mapping:{Person:N,Mail:F,Settings:E,None:null}}}},s={args:{children:"Label",size:"default",weight:"bold",align:"left",dropdown:!1,showTrailingIcon:!0}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(l,{size:"large",children:"Large Label"}),e.jsx(l,{size:"default",children:"Default Label"}),e.jsx(l,{size:"small",children:"Small Label"}),e.jsx(l,{size:"x-small",children:"X-Small Label"}),e.jsx(l,{size:"2x-small",children:"2X-Small Label"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(l,{weight:"bold",children:"Bold Weight"}),e.jsx(l,{weight:"medium",children:"Medium Weight"}),e.jsx(l,{weight:"light",children:"Light Weight"}),e.jsx(l,{weight:"thin",children:"Thin Weight"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px",border:"1px solid #eee",padding:"10px"},children:[e.jsx(l,{align:"left",children:"Left Aligned"}),e.jsx(l,{align:"centre",children:"Centre Aligned"}),e.jsx(l,{align:"right",children:"Right Aligned"})]})},c={args:{children:"Dropdown Label",dropdown:!0,size:"default",weight:"bold"}},m={render:()=>{const p=["large","default","small","x-small","2x-small"],t=["bold","medium","light","thin"];return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"40px"},children:t.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[e.jsx("h4",{style:{margin:"0 0 10px 0",textTransform:"capitalize"},children:i}),p.map(n=>e.jsxs(l,{size:n,weight:i,children:[n," ",i]},`${i}-${n}`))]},i))})}};var h,x,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,w,_;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Label size="large">Large Label</Label>
      <Label size="default">Default Label</Label>
      <Label size="small">Small Label</Label>
      <Label size="x-small">X-Small Label</Label>
      <Label size="2x-small">2X-Small Label</Label>
    </div>
}`,...(_=(w=r.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var L,v,y;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Label weight="bold">Bold Weight</Label>
      <Label weight="medium">Medium Weight</Label>
      <Label weight="light">Light Weight</Label>
      <Label weight="thin">Thin Weight</Label>
    </div>
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var z,j,S;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '300px',
    border: '1px solid #eee',
    padding: '10px'
  }}>
      <Label align="left">Left Aligned</Label>
      <Label align="centre">Centre Aligned</Label>
      <Label align="right">Right Aligned</Label>
    </div>
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var T,D,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Dropdown Label',
    dropdown: true,
    size: 'default',
    weight: 'bold'
  }
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var W,A,M;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const sizes = ['large', 'default', 'small', 'x-small', '2x-small'] as const;
    const weights = ['bold', 'medium', 'light', 'thin'] as const;
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px'
    }}>
        {weights.map(weight => <div key={weight} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
            <h4 style={{
          margin: '0 0 10px 0',
          textTransform: 'capitalize'
        }}>{weight}</h4>
            {sizes.map(size => <Label key={\`\${weight}-\${size}\`} size={size} weight={weight}>
                {size} {weight}
              </Label>)}
          </div>)}
      </div>;
  }
}`,...(M=(A=m.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const G=["Default","Sizes","Weights","Alignments","WithDropdown","FullMatrix"],Q=Object.freeze(Object.defineProperty({__proto__:null,Alignments:d,Default:s,FullMatrix:m,Sizes:r,Weights:o,WithDropdown:c,__namedExportsOrder:G,default:U},Symbol.toStringTag,{value:"Module"}));export{d as A,Q as L,r as S,o as W,c as a};
