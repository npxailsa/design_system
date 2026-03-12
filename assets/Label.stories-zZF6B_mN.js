import{j as e}from"./jsx-runtime-BYYWji4R.js";import{c as k,P as C,I as h,A as F,S as K,M as U}from"./Settings-WiyIbRwu.js";const G=k(e.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),H="_labelContainer_8t4am_1",J="_split_8t4am_85",Q="_splitDivider_8t4am_94",Y="_chevronIcon_8t4am_101",Z="_labelText_8t4am_105",a={labelContainer:H,"align-left":"_align-left_8t4am_12","align-centre":"_align-centre_8t4am_16","align-right":"_align-right_8t4am_21","weight-bold":"_weight-bold_8t4am_27","weight-medium":"_weight-medium_8t4am_31","weight-light":"_weight-light_8t4am_35","weight-thin":"_weight-thin_8t4am_39","size-large":"_size-large_8t4am_44","size-default":"_size-default_8t4am_56","size-small":"_size-small_8t4am_63","size-x-small":"_size-x-small_8t4am_70","size-2x-small":"_size-2x-small_8t4am_77",split:J,splitDivider:Q,chevronIcon:Y,labelText:Z},l=({children:g="Label",size:i="default",weight:n="medium",align:t="left",dropdown:O=!1,leadingIcon:u=C,showLeadingIcon:P=!0,showTrailingIcon:$=!0,showSplit:B=!0,className:E=""})=>{const X=[a.labelContainer,a[`size-${i}`],a[`weight-${n}`],a[`align-${t}`],E].join(" ");return e.jsxs("div",{className:X,children:[P&&u&&e.jsx(h,{icon:u,size:i}),e.jsx("span",{className:a.labelText,children:g}),$&&e.jsx(h,{icon:F,size:i}),O&&B&&e.jsxs("div",{className:a.split,children:[e.jsx("div",{className:a.splitDivider}),e.jsx(h,{icon:G,size:i,className:a.chevronIcon})]})]})};l.__docgenInfo={description:"A versatile Label component for displaying text with optional icons and dropdown split.",methods:[],displayName:"Label",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text content",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small' | '2x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'2x-small'"}]},description:"Size variant — controls font-size, line-height, gap, and icon size",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'medium' | 'light' | 'thin'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'light'"},{name:"literal",value:"'thin'"}]},description:"Font weight",defaultValue:{value:"'medium'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},dropdown:{required:!1,tsType:{name:"boolean"},description:"Shows dropdown split + chevron-down icon after trailing icon",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI icon component). Pass null/undefined to hide.",defaultValue:{value:"PersonIcon",computed:!0}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the trailing arrow-right icon",defaultValue:{value:"true",computed:!1}},showSplit:{required:!1,tsType:{name:"boolean"},description:"Whether to show the split divider and chevron (only if dropdown is true)",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ee={title:"Components/Label",component:l,argTypes:{size:{control:"select",options:["large","default","small","x-small","2x-small"]},weight:{control:"select",options:["bold","medium","light","thin"]},align:{control:"select",options:["left","centre","right"]},leadingIcon:{control:"select",options:["Person","Mail","Settings","None"],mapping:{Person:C,Mail:U,Settings:K,None:null}},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},dropdown:{control:"boolean"},showSplit:{control:"boolean"}}},s={args:{children:"Label",size:"default",weight:"bold",align:"left",dropdown:!1,showTrailingIcon:!0}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(l,{size:"large",children:"Large Label"}),e.jsx(l,{size:"default",children:"Default Label"}),e.jsx(l,{size:"small",children:"Small Label"}),e.jsx(l,{size:"x-small",children:"X-Small Label"}),e.jsx(l,{size:"2x-small",children:"2X-Small Label"})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(l,{weight:"bold",children:"Bold Weight"}),e.jsx(l,{weight:"medium",children:"Medium Weight"}),e.jsx(l,{weight:"light",children:"Light Weight"}),e.jsx(l,{weight:"thin",children:"Thin Weight"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px",border:"1px solid #eee",padding:"10px"},children:[e.jsx(l,{align:"left",children:"Left Aligned"}),e.jsx(l,{align:"centre",children:"Centre Aligned"}),e.jsx(l,{align:"right",children:"Right Aligned"})]})},c={args:{children:"Dropdown Label",dropdown:!0,size:"default",weight:"bold"}},p={render:()=>{const g=["large","default","small","x-small","2x-small"],i=["bold","medium","light","thin"];return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"40px"},children:i.map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[e.jsxs("h4",{style:{margin:"0 0 10px 0",textTransform:"capitalize"},children:[n," Dropdown"]}),g.map(t=>e.jsxs(l,{size:t,weight:n,dropdown:!0,showSplit:!0,children:[t," ",n]},`${n}-${t}`))]},n))})}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(l,{showLeadingIcon:!0,showTrailingIcon:!0,children:"Both Icons"}),e.jsx(l,{showLeadingIcon:!0,showTrailingIcon:!1,children:"Leading Only"}),e.jsx(l,{showLeadingIcon:!1,showTrailingIcon:!0,children:"Trailing Only"}),e.jsx(l,{showLeadingIcon:!1,showTrailingIcon:!1,children:"No Icons"}),e.jsx(l,{dropdown:!0,showSplit:!0,children:"With Split"}),e.jsx(l,{dropdown:!0,showSplit:!1,children:"Dropdown No Split"})]})};var f,x,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true
  }
}`,...(w=(x=s.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var b,L,_;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(_=(L=o.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var v,y,I;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(y=r.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var j,z,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(z=d.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var S,D,W;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Dropdown Label',
    dropdown: true,
    size: 'default',
    weight: 'bold'
  }
}`,...(W=(D=c.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var N,A,M;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=(A=p.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var q,V,R;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=(V=m.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};const le=["Default","Sizes","Weights","Alignments","WithDropdown","DropdownMatrix","IconToggles"],ie=Object.freeze(Object.defineProperty({__proto__:null,Alignments:d,Default:s,DropdownMatrix:p,IconToggles:m,Sizes:o,Weights:r,WithDropdown:c,__namedExportsOrder:le,default:ee},Symbol.toStringTag,{value:"Module"}));export{d as A,ie as L,o as S,r as W,c as a};
