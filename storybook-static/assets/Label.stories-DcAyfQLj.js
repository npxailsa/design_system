import{c as C,j as e,P as W,I as p,A as P,S as $,M as F}from"./Settings--2FnPbhD.js";import{j as O}from"./jsx-runtime-WH23WyrG.js";const X=C(O.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown"),k="_labelContainer_117x5_1",B="_split_117x5_80",K="_splitDivider_117x5_88",U="_labelText_117x5_95",a={labelContainer:k,"align-left":"_align-left_117x5_12","align-centre":"_align-centre_117x5_16","align-right":"_align-right_117x5_21","weight-bold":"_weight-bold_117x5_27","weight-medium":"_weight-medium_117x5_31","weight-light":"_weight-light_117x5_35","weight-thin":"_weight-thin_117x5_39","size-large":"_size-large_117x5_44","size-default":"_size-default_117x5_51","size-small":"_size-small_117x5_58","size-x-small":"_size-x-small_117x5_65","size-2x-small":"_size-2x-small_117x5_72",split:B,splitDivider:K,labelText:U},l=({children:u="Label",size:i="default",weight:n="medium",align:s="left",dropdown:A=!1,leadingIcon:b=W,showTrailingIcon:M=!0,className:R=""})=>{const q=[a.labelContainer,a[`size-${i}`],a[`weight-${n}`],a[`align-${s}`],R].join(" ");return e.jsxDEV("div",{className:q,children:[b&&e.jsxDEV(p,{icon:b,size:i},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:51,columnNumber:9},void 0),e.jsxDEV("span",{className:a.labelText,children:u},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:55,columnNumber:7},void 0),M&&e.jsxDEV(p,{icon:P,size:i},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:59,columnNumber:9},void 0),A&&e.jsxDEV("div",{className:a.split,children:[e.jsxDEV("div",{className:a.splitDivider},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:65,columnNumber:11},void 0),e.jsxDEV(p,{icon:X,size:i,className:a.chevronIcon},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:66,columnNumber:11},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:64,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:48,columnNumber:5},void 0)};l.__docgenInfo={description:"A versatile Label component for displaying text with optional icons and dropdown split.",methods:[],displayName:"Label",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text content",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small' | '2x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'2x-small'"}]},description:"Size variant — controls font-size, line-height, gap, and icon size",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'medium' | 'light' | 'thin'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'light'"},{name:"literal",value:"'thin'"}]},description:"Font weight",defaultValue:{value:"'medium'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},dropdown:{required:!1,tsType:{name:"boolean"},description:"Shows dropdown split + chevron-down icon after trailing icon",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI icon component). Pass null/undefined to hide.",defaultValue:{value:"PersonIcon",computed:!0}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the trailing arrow-right icon",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const G={title:"Components/Label",component:l,argTypes:{size:{control:"select",options:["large","default","small","x-small","2x-small"]},weight:{control:"select",options:["bold","medium","light","thin"]},align:{control:"select",options:["left","centre","right"]},leadingIcon:{control:"select",options:["Person","Mail","Settings","None"],mapping:{Person:W,Mail:F,Settings:$,None:null}}}},o={args:{children:"Label",size:"default",weight:"bold",align:"left",dropdown:!1,showTrailingIcon:!0}},t={render:()=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxDEV(l,{size:"large",children:"Large Label"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:52,columnNumber:7},void 0),e.jsxDEV(l,{size:"default",children:"Default Label"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:53,columnNumber:7},void 0),e.jsxDEV(l,{size:"small",children:"Small Label"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:54,columnNumber:7},void 0),e.jsxDEV(l,{size:"x-small",children:"X-Small Label"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:55,columnNumber:7},void 0),e.jsxDEV(l,{size:"2x-small",children:"2X-Small Label"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:56,columnNumber:7},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:47,columnNumber:17},void 0)},r={render:()=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxDEV(l,{weight:"bold",children:"Bold Weight"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:65,columnNumber:7},void 0),e.jsxDEV(l,{weight:"medium",children:"Medium Weight"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:66,columnNumber:7},void 0),e.jsxDEV(l,{weight:"light",children:"Light Weight"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:67,columnNumber:7},void 0),e.jsxDEV(l,{weight:"thin",children:"Thin Weight"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:68,columnNumber:7},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:60,columnNumber:17},void 0)},d={render:()=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px",border:"1px solid #eee",padding:"10px"},children:[e.jsxDEV(l,{align:"left",children:"Left Aligned"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:80,columnNumber:7},void 0),e.jsxDEV(l,{align:"centre",children:"Centre Aligned"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:81,columnNumber:7},void 0),e.jsxDEV(l,{align:"right",children:"Right Aligned"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:82,columnNumber:7},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:72,columnNumber:17},void 0)},c={args:{children:"Dropdown Label",dropdown:!0,size:"default",weight:"bold"}},m={render:()=>{const u=["large","default","small","x-small","2x-small"],i=["bold","medium","light","thin"];return e.jsxDEV("div",{style:{display:"flex",flexWrap:"wrap",gap:"40px"},children:i.map(n=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[e.jsxDEV("h4",{style:{margin:"0 0 10px 0",textTransform:"capitalize"},children:n},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:107,columnNumber:13},void 0),u.map(s=>e.jsxDEV(l,{size:s,weight:n,children:[s," ",n]},`${n}-${s}`,!0,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:111,columnNumber:32},void 0))]},n,!0,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:102,columnNumber:32},void 0))},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:97,columnNumber:12},void 0)}};var f,g,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,L,N;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(N=(L=t.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var v,w,_;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=(w=r.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var D,y,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=(y=d.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var j,V,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Dropdown Label',
    dropdown: true,
    size: 'default',
    weight: 'bold'
  }
}`,...(E=(V=c.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var S,T,I;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(T=m.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const H=["Default","Sizes","Weights","Alignments","WithDropdown","FullMatrix"],Y=Object.freeze(Object.defineProperty({__proto__:null,Alignments:d,Default:o,FullMatrix:m,Sizes:t,Weights:r,WithDropdown:c,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{d as A,Y as L,t as S,r as W,c as a};
