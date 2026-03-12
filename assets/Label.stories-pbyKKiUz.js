import{j as e}from"./jsx-runtime-CG1W3u4p.js";import{c as H,P as O,I as u,A as J,S as Q,M as Y}from"./Settings-DFVr1MCh.js";const Z=H(e.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),ee="_labelContainer_1sr4e_1",le="_split_1sr4e_98",ae="_splitDivider_1sr4e_107",ie="_chevronIcon_1sr4e_114",ne="_labelText_1sr4e_118",a={labelContainer:ee,"font-archivo":"_font-archivo_1sr4e_12","font-ginger":"_font-ginger_1sr4e_16","font-calibri":"_font-calibri_1sr4e_20","align-left":"_align-left_1sr4e_25","align-centre":"_align-centre_1sr4e_29","align-right":"_align-right_1sr4e_34","weight-bold":"_weight-bold_1sr4e_40","weight-medium":"_weight-medium_1sr4e_44","weight-light":"_weight-light_1sr4e_48","weight-thin":"_weight-thin_1sr4e_52","size-large":"_size-large_1sr4e_57","size-default":"_size-default_1sr4e_69","size-small":"_size-small_1sr4e_76","size-x-small":"_size-x-small_1sr4e_83","size-2x-small":"_size-2x-small_1sr4e_90",split:le,splitDivider:ae,chevronIcon:ie,labelText:ne},l=({children:m="Label",size:n="default",weight:i="medium",font:r="archivo",align:$="left",dropdown:B=!1,leadingIcon:f=O,showLeadingIcon:E=!0,showTrailingIcon:X=!0,showSplit:G=!0,className:K=""})=>{const U=[a.labelContainer,a[`size-${n}`],a[`weight-${i}`],a[`font-${r}`],a[`align-${$}`],K].join(" ");return e.jsxs("div",{className:U,children:[E&&f&&e.jsx(u,{icon:f,size:n}),e.jsx("span",{className:a.labelText,children:m}),X&&e.jsx(u,{icon:J,size:n}),B&&G&&e.jsxs("div",{className:a.split,children:[e.jsx("div",{className:a.splitDivider}),e.jsx(u,{icon:Z,size:n,className:a.chevronIcon})]})]})};l.__docgenInfo={description:"A versatile Label component for displaying text with optional icons and dropdown split.",methods:[],displayName:"Label",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text content",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small' | '2x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'2x-small'"}]},description:"Size variant — controls font-size, line-height, gap, and icon size",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'medium' | 'light' | 'thin'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'light'"},{name:"literal",value:"'thin'"}]},description:"Font weight",defaultValue:{value:"'medium'",computed:!1}},font:{required:!1,tsType:{name:"union",raw:"'ginger' | 'calibri' | 'archivo'",elements:[{name:"literal",value:"'ginger'"},{name:"literal",value:"'calibri'"},{name:"literal",value:"'archivo'"}]},description:"Font family variant",defaultValue:{value:"'archivo'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},dropdown:{required:!1,tsType:{name:"boolean"},description:"Shows dropdown split + chevron-down icon after trailing icon",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI icon component). Pass null/undefined to hide.",defaultValue:{value:"PersonIcon",computed:!0}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the trailing arrow-right icon",defaultValue:{value:"true",computed:!1}},showSplit:{required:!1,tsType:{name:"boolean"},description:"Whether to show the split divider and chevron (only if dropdown is true)",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const re={title:"Foundations/Label",component:l,argTypes:{size:{control:"select",options:["large","default","small","x-small","2x-small"]},weight:{control:"select",options:["bold","medium","light","thin"]},font:{control:"select",options:["archivo","ginger","calibri"]},align:{control:"select",options:["left","centre","right"]},leadingIcon:{control:"select",options:["Person","Mail","Settings","None"],mapping:{Person:O,Mail:Y,Settings:Q,None:null}},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},dropdown:{control:"boolean"},showSplit:{control:"boolean"}}},s={args:{children:"Label",size:"default",weight:"bold",align:"left",dropdown:!1,showTrailingIcon:!0}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(l,{size:"large",children:"Large Label"}),e.jsx(l,{size:"default",children:"Default Label"}),e.jsx(l,{size:"small",children:"Small Label"}),e.jsx(l,{size:"x-small",children:"X-Small Label"}),e.jsx(l,{size:"2x-small",children:"2X-Small Label"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(l,{weight:"bold",children:"Bold Weight"}),e.jsx(l,{weight:"medium",children:"Medium Weight"}),e.jsx(l,{weight:"light",children:"Light Weight"}),e.jsx(l,{weight:"thin",children:"Thin Weight"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px",border:"1px solid #eee",padding:"10px"},children:[e.jsx(l,{align:"left",children:"Left Aligned"}),e.jsx(l,{align:"centre",children:"Centre Aligned"}),e.jsx(l,{align:"right",children:"Right Aligned"})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 10px 0"},children:"Archivo (Figma)"}),e.jsx(l,{font:"archivo",children:"The quick brown fox jumps over the lazy dog"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 10px 0"},children:"Ginger Pro (Primary)"}),e.jsx(l,{font:"ginger",children:"The quick brown fox jumps over the lazy dog"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 10px 0"},children:"Calibri (Secondary)"}),e.jsx(l,{font:"calibri",children:"The quick brown fox jumps over the lazy dog"})]})]})},p={args:{children:"Dropdown Label",dropdown:!0,size:"default",weight:"bold"}},h={render:()=>{const m=["large","default","small","x-small","2x-small"],n=["bold","medium","light","thin"];return e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"40px"},children:n.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[e.jsxs("h4",{style:{margin:"0 0 10px 0",textTransform:"capitalize"},children:[i," Dropdown"]}),m.map(r=>e.jsxs(l,{size:r,weight:i,dropdown:!0,showSplit:!0,children:[r," ",i]},`${i}-${r}`))]},i))})}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(l,{showLeadingIcon:!0,showTrailingIcon:!0,children:"Both Icons"}),e.jsx(l,{showLeadingIcon:!0,showTrailingIcon:!1,children:"Leading Only"}),e.jsx(l,{showLeadingIcon:!1,showTrailingIcon:!0,children:"Trailing Only"}),e.jsx(l,{showLeadingIcon:!1,showTrailingIcon:!1,children:"No Icons"}),e.jsx(l,{dropdown:!0,showSplit:!0,children:"With Split"}),e.jsx(l,{dropdown:!0,showSplit:!1,children:"Dropdown No Split"})]})};var x,b,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true
  }
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var v,L,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(L=o.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var _,j,T;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(j=t.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var z,I,S;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var D,W,q;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div>
        <h4 style={{
        margin: '0 0 10px 0'
      }}>Archivo (Figma)</h4>
        <Label font="archivo">The quick brown fox jumps over the lazy dog</Label>
      </div>
      <div>
        <h4 style={{
        margin: '0 0 10px 0'
      }}>Ginger Pro (Primary)</h4>
        <Label font="ginger">The quick brown fox jumps over the lazy dog</Label>
      </div>
      <div>
        <h4 style={{
        margin: '0 0 10px 0'
      }}>Calibri (Secondary)</h4>
        <Label font="calibri">The quick brown fox jumps over the lazy dog</Label>
      </div>
    </div>
}`,...(q=(W=c.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var A,N,M;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Dropdown Label',
    dropdown: true,
    size: 'default',
    weight: 'bold'
  }
}`,...(M=(N=p.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var P,V,C;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(C=(V=h.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var R,k,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(k=g.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const se=["Default","Sizes","Weights","Alignments","Fonts","WithDropdown","DropdownMatrix","IconToggles"],de=Object.freeze(Object.defineProperty({__proto__:null,Alignments:d,Default:s,DropdownMatrix:h,Fonts:c,IconToggles:g,Sizes:o,Weights:t,WithDropdown:p,__namedExportsOrder:se,default:re},Symbol.toStringTag,{value:"Module"}));export{d as A,de as L,o as S,t as W,p as a};
