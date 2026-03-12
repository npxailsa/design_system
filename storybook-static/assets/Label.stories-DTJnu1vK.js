import{c as k,j as e,P as R,I as b,A as F,S as K,M as U}from"./Settings--2FnPbhD.js";import{j as G}from"./jsx-runtime-WH23WyrG.js";const H=k(G.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown"),J="_labelContainer_117x5_1",Q="_split_117x5_80",Y="_splitDivider_117x5_88",Z="_labelText_117x5_95",o={labelContainer:J,"align-left":"_align-left_117x5_12","align-centre":"_align-centre_117x5_16","align-right":"_align-right_117x5_21","weight-bold":"_weight-bold_117x5_27","weight-medium":"_weight-medium_117x5_31","weight-light":"_weight-light_117x5_35","weight-thin":"_weight-thin_117x5_39","size-large":"_size-large_117x5_44","size-default":"_size-default_117x5_51","size-small":"_size-small_117x5_58","size-x-small":"_size-x-small_117x5_65","size-2x-small":"_size-2x-small_117x5_72",split:Q,splitDivider:Y,labelText:Z},l=({children:p="Label",size:a="default",weight:n="medium",align:i="left",dropdown:C=!1,leadingIcon:f=R,showLeadingIcon:O=!0,showTrailingIcon:P=!0,showSplit:$=!0,className:B=""})=>{const X=[o.labelContainer,o[`size-${a}`],o[`weight-${n}`],o[`align-${i}`],B].join(" ");return e.jsxDEV("div",{className:X,children:[O&&f&&e.jsxDEV(b,{icon:f,size:a},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:57,columnNumber:9},void 0),e.jsxDEV("span",{className:o.labelText,children:p},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:61,columnNumber:7},void 0),P&&e.jsxDEV(b,{icon:F,size:a},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:65,columnNumber:9},void 0),C&&$&&e.jsxDEV("div",{className:o.split,children:[e.jsxDEV("div",{className:o.splitDivider},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:71,columnNumber:11},void 0),e.jsxDEV(b,{icon:H,size:a,className:o.chevronIcon},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:72,columnNumber:11},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:70,columnNumber:9},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Label/Label.tsx",lineNumber:54,columnNumber:5},void 0)};l.__docgenInfo={description:"A versatile Label component for displaying text with optional icons and dropdown split.",methods:[],displayName:"Label",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text content",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small' | '2x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'2x-small'"}]},description:"Size variant — controls font-size, line-height, gap, and icon size",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'medium' | 'light' | 'thin'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'light'"},{name:"literal",value:"'thin'"}]},description:"Font weight",defaultValue:{value:"'medium'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},dropdown:{required:!1,tsType:{name:"boolean"},description:"Shows dropdown split + chevron-down icon after trailing icon",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI icon component). Pass null/undefined to hide.",defaultValue:{value:"PersonIcon",computed:!0}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the trailing arrow-right icon",defaultValue:{value:"true",computed:!1}},showSplit:{required:!1,tsType:{name:"boolean"},description:"Whether to show the split divider and chevron (only if dropdown is true)",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ee={title:"Components/Label",component:l,argTypes:{size:{control:"select",options:["large","default","small","x-small","2x-small"]},weight:{control:"select",options:["bold","medium","light","thin"]},align:{control:"select",options:["left","centre","right"]},leadingIcon:{control:"select",options:["Person","Mail","Settings","None"],mapping:{Person:R,Mail:U,Settings:K,None:null}},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},dropdown:{control:"boolean"},showSplit:{control:"boolean"}}},s={args:{children:"Label",size:"default",weight:"bold",align:"left",dropdown:!1,showTrailingIcon:!0}},r={render:()=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxDEV(l,{size:"large",children:"Large Label"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:64,columnNumber:7},void 0),e.jsxDEV(l,{size:"default",children:"Default Label"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:65,columnNumber:7},void 0),e.jsxDEV(l,{size:"small",children:"Small Label"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:66,columnNumber:7},void 0),e.jsxDEV(l,{size:"x-small",children:"X-Small Label"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:67,columnNumber:7},void 0),e.jsxDEV(l,{size:"2x-small",children:"2X-Small Label"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:68,columnNumber:7},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:59,columnNumber:17},void 0)},t={render:()=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxDEV(l,{weight:"bold",children:"Bold Weight"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:77,columnNumber:7},void 0),e.jsxDEV(l,{weight:"medium",children:"Medium Weight"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:78,columnNumber:7},void 0),e.jsxDEV(l,{weight:"light",children:"Light Weight"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:79,columnNumber:7},void 0),e.jsxDEV(l,{weight:"thin",children:"Thin Weight"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:80,columnNumber:7},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:72,columnNumber:17},void 0)},d={render:()=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px",border:"1px solid #eee",padding:"10px"},children:[e.jsxDEV(l,{align:"left",children:"Left Aligned"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:92,columnNumber:7},void 0),e.jsxDEV(l,{align:"centre",children:"Centre Aligned"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:93,columnNumber:7},void 0),e.jsxDEV(l,{align:"right",children:"Right Aligned"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:94,columnNumber:7},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:84,columnNumber:17},void 0)},c={args:{children:"Dropdown Label",dropdown:!0,size:"default",weight:"bold"}},m={render:()=>{const p=["large","default","small","x-small","2x-small"],a=["bold","medium","light","thin"];return e.jsxDEV("div",{style:{display:"flex",flexWrap:"wrap",gap:"40px"},children:a.map(n=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[e.jsxDEV("h4",{style:{margin:"0 0 10px 0",textTransform:"capitalize"},children:[n," Dropdown"]},void 0,!0,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:119,columnNumber:13},void 0),p.map(i=>e.jsxDEV(l,{size:i,weight:n,dropdown:!0,showSplit:!0,children:[i," ",n]},`${n}-${i}`,!0,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:123,columnNumber:32},void 0))]},n,!0,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:114,columnNumber:32},void 0))},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:109,columnNumber:12},void 0)}},u={render:()=>e.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxDEV(l,{showLeadingIcon:!0,showTrailingIcon:!0,children:"Both Icons"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:136,columnNumber:7},void 0),e.jsxDEV(l,{showLeadingIcon:!0,showTrailingIcon:!1,children:"Leading Only"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:137,columnNumber:7},void 0),e.jsxDEV(l,{showLeadingIcon:!1,showTrailingIcon:!0,children:"Trailing Only"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:138,columnNumber:7},void 0),e.jsxDEV(l,{showLeadingIcon:!1,showTrailingIcon:!1,children:"No Icons"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:139,columnNumber:7},void 0),e.jsxDEV(l,{dropdown:!0,showSplit:!0,children:"With Split"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:140,columnNumber:7},void 0),e.jsxDEV(l,{dropdown:!0,showSplit:!1,children:"Dropdown No Split"},void 0,!1,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:141,columnNumber:7},void 0)]},void 0,!0,{fileName:"/root/app/code/src/components/Label/Label.stories.tsx",lineNumber:131,columnNumber:17},void 0)};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var L,N,w;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(N=r.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var v,D,_;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=(D=t.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var y,V,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(V=d.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var I,z,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Dropdown Label',
    dropdown: true,
    size: 'default',
    weight: 'bold'
  }
}`,...(T=(z=c.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var E,S,W;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
        }}>{weight} Dropdown</h4>
            {sizes.map(size => <Label key={\`\${weight}-\${size}\`} size={size} weight={weight} dropdown showSplit>
                {size} {weight}
              </Label>)}
          </div>)}
      </div>;
  }
}`,...(W=(S=m.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var A,M,q;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Label showLeadingIcon={true} showTrailingIcon={true}>Both Icons</Label>
      <Label showLeadingIcon={true} showTrailingIcon={false}>Leading Only</Label>
      <Label showLeadingIcon={false} showTrailingIcon={true}>Trailing Only</Label>
      <Label showLeadingIcon={false} showTrailingIcon={false}>No Icons</Label>
      <Label dropdown showSplit={true}>With Split</Label>
      <Label dropdown showSplit={false}>Dropdown No Split</Label>
    </div>
}`,...(q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const le=["Default","Sizes","Weights","Alignments","WithDropdown","DropdownMatrix","IconToggles"],ae=Object.freeze(Object.defineProperty({__proto__:null,Alignments:d,Default:s,DropdownMatrix:m,IconToggles:u,Sizes:r,Weights:t,WithDropdown:c,__namedExportsOrder:le,default:ee},Symbol.toStringTag,{value:"Module"}));export{d as A,ae as L,r as S,t as W,c as a};
