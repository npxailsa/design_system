import{j as e,R as S}from"./iframe-CYtfCAo4.js";import{c as _e,P as ue,A as Se,I as w,S as ze,M as Te}from"./Person-BWl4-jlS.js";const De=_e(e.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),Ie="_labelContainer_1a09j_6",Ae="_split_1a09j_119",Me="_splitDivider_1a09j_128",We="_chevronIcon_1a09j_135",Ve="_labelText_1a09j_139",i={labelContainer:Ie,"font-ginger":"_font-ginger_1a09j_37","font-archivo":"_font-archivo_1a09j_41","align-left":"_align-left_1a09j_46","align-centre":"_align-centre_1a09j_50","align-right":"_align-right_1a09j_55","weight-bold":"_weight-bold_1a09j_61","weight-medium":"_weight-medium_1a09j_65","weight-light":"_weight-light_1a09j_69","weight-thin":"_weight-thin_1a09j_73","size-large":"_size-large_1a09j_78","size-default":"_size-default_1a09j_90","size-small":"_size-small_1a09j_97","size-x-small":"_size-x-small_1a09j_104","size-2x-small":"_size-2x-small_1a09j_111",split:Ae,splitDivider:Me,chevronIcon:We,labelText:Ve},a=({children:r="Label",size:s="default",weight:b="bold",font:l="archivo",align:m="left",dropdown:xe=!1,component:fe="div",ariaLabel:ve,leadingIcon:L=ue,trailingIcon:_=Se,showLeadingIcon:be=!0,showTrailingIcon:we=!0,showSplit:ye=!0,className:je=""})=>{const Le=[i.labelContainer,i[`size-${s}`],i[`weight-${b}`],i[`font-${l}`],i[`align-${m}`],je].join(" ");return e.jsxs(fe,{className:Le,"aria-label":ve,children:[be&&L&&e.jsx(w,{icon:L,size:s}),e.jsx("span",{className:i.labelText,children:r}),we&&_&&e.jsx(w,{icon:_,size:s}),xe&&ye&&e.jsxs("div",{className:i.split,children:[e.jsx("div",{className:i.splitDivider}),e.jsx(w,{icon:De,size:s,className:i.chevronIcon})]})]})};a.__docgenInfo={description:"A versatile Label component for displaying text with optional icons and dropdown split.",methods:[],displayName:"Label",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text content",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small' | '2x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'2x-small'"}]},description:"Size variant — controls font-size, line-height, gap, and icon size",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'medium' | 'light' | 'thin'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'light'"},{name:"literal",value:"'thin'"}]},description:"Font weight",defaultValue:{value:"'bold'",computed:!1}},font:{required:!1,tsType:{name:"union",raw:"'ginger' | 'archivo'",elements:[{name:"literal",value:"'ginger'"},{name:"literal",value:"'archivo'"}]},description:"Font family variant",defaultValue:{value:"'archivo'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},dropdown:{required:!1,tsType:{name:"boolean"},description:"Shows dropdown split + chevron-down icon after trailing icon",defaultValue:{value:"false",computed:!1}},component:{required:!1,tsType:{name:"union",raw:"'label' | 'span' | 'div'",elements:[{name:"literal",value:"'label'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"Semantic HTML element to render",defaultValue:{value:"'div'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI icon component).",defaultValue:{value:"PersonIcon",computed:!0}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional trailing icon (MUI icon component). Defaults to ArrowForwardIcon.",defaultValue:{value:"ArrowForwardIcon",computed:!0}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the trailing icon",defaultValue:{value:"true",computed:!1}},showSplit:{required:!1,tsType:{name:"boolean"},description:"Whether to show the split divider and chevron (only if dropdown is true)",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Re={title:"Foundations/Label",component:a,argTypes:{size:{control:"select",options:["large","default","small","x-small","2x-small"]},weight:{control:"select",options:["bold","medium","light","thin"]},font:{control:"select",options:["archivo","ginger"]},align:{control:"select",options:["left","centre","right"]},leadingIcon:{control:"select",options:["Person","Mail","Settings","None"],mapping:{Person:ue,Mail:Te,Settings:ze,None:null}},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},dropdown:{control:"boolean"},showSplit:{control:"boolean"}},decorators:[r=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{})})]},t=({weight:r})=>{const s=["large","default","small","x-small","2x-small"],b=["left","centre","right"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsxs("h2",{style:{margin:0,textTransform:"uppercase",letterSpacing:"1px"},children:[r," weight variants"]}),e.jsx("div",{style:{height:"2px",flexGrow:1,backgroundColor:"#eee"}})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"1000px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:y,children:"Size"}),b.map(l=>e.jsxs(S.Fragment,{children:[e.jsx("th",{style:y,children:l}),e.jsxs("th",{style:y,children:[l," + Dropdown"]})]},l))]})}),e.jsx("tbody",{children:s.map(l=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{...j,fontWeight:"bold",color:"#666",width:"100px"},children:l}),b.map(m=>e.jsxs(S.Fragment,{children:[e.jsx("td",{style:j,children:e.jsx(a,{size:l,weight:r,align:m,dropdown:!1,children:"Label"})}),e.jsx("td",{style:j,children:e.jsx(a,{size:l,weight:r,align:m,dropdown:!0,children:"Label"})})]},m))]},l))})]})})]})},y={textAlign:"left",padding:"12px",color:"#999",fontSize:"12px",textTransform:"uppercase",borderBottom:"2px solid #eee"},j={padding:"16px 12px"},h={args:{children:"Label",size:"default",weight:"bold",align:"left",dropdown:!1,showTrailingIcon:!0}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(a,{size:"large",children:"Large Label"}),e.jsx(a,{size:"default",children:"Default Label"}),e.jsx(a,{size:"small",children:"Small Label"}),e.jsx(a,{size:"x-small",children:"X-Small Label"}),e.jsx(a,{size:"2x-small",children:"2X-Small Label"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(a,{weight:"bold",children:"Bold Weight"}),e.jsx(a,{weight:"medium",children:"Medium Weight"}),e.jsx(a,{weight:"light",children:"Light Weight"}),e.jsx(a,{weight:"thin",children:"Thin Weight"})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px",border:"1px dashed #eee",padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"12px",color:"#999"},children:"Left"}),e.jsx(a,{align:"left",children:"Left Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"12px",color:"#999"},children:"Centre"}),e.jsx(a,{align:"centre",children:"Centre Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"12px",color:"#999"},children:"Right"}),e.jsx(a,{align:"right",children:"Right Aligned"})]})]})},n={name:"Systematic: Bold (30 variants)",render:()=>e.jsx(t,{weight:"bold"})},o={name:"Systematic: Medium (30 variants)",render:()=>e.jsx(t,{weight:"medium"})},d={name:"Systematic: Light (30 variants)",render:()=>e.jsx(t,{weight:"light"})},c={name:"Systematic: Thin (30 variants)",render:()=>e.jsx(t,{weight:"thin"})},p={name:"Full Matrix (120 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"80px"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[e.jsx("h1",{style:{margin:0},children:"Label Component Variant Matrix"}),e.jsx("p",{style:{color:"#666"},children:"5 Sizes × 4 Weights × 3 Alignments × 2 Dropdown States = 120 Variants"})]}),e.jsx(t,{weight:"bold"}),e.jsx(t,{weight:"medium"}),e.jsx(t,{weight:"light"}),e.jsx(t,{weight:"thin"})]})},f={args:{dropdown:!0}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsxs("div",{"data-theme":"penta",style:{padding:"20px",border:"1px solid #eee",borderRadius:"8px"},children:[e.jsx("h3",{style:{marginTop:0,color:"#999",fontSize:"12px"},children:"PENTA BRAND (Default)"}),e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx(a,{size:"large",weight:"bold",children:"Large Bold"}),e.jsx(a,{size:"default",weight:"medium",dropdown:!0,children:"Dropdown"}),e.jsx(a,{size:"small",weight:"light",children:"Small Light"})]})]}),e.jsxs("div",{"data-theme":"horizon",style:{padding:"20px",border:"1px solid #eee",borderRadius:"8px",backgroundColor:"#f4f5f7"},children:[e.jsx("h3",{style:{marginTop:0,color:"#999",fontSize:"12px"},children:"HORIZON BRAND"}),e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx(a,{size:"large",weight:"bold",children:"Large Bold"}),e.jsx(a,{size:"default",weight:"medium",dropdown:!0,children:"Dropdown"}),e.jsx(a,{size:"small",weight:"light",children:"Small Light"})]})]})]})};var z,T,D;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true
  }
}`,...(D=(T=h.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var I,A,M;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(A=g.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var W,V,R;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(R=(V=u.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var B,C,N;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '400px',
    border: '1px dashed #eee',
    padding: '20px'
  }}>
      <div>
        <span style={{
        fontSize: '12px',
        color: '#999'
      }}>Left</span>
        <Label align="left">Left Aligned</Label>
      </div>
      <div>
        <span style={{
        fontSize: '12px',
        color: '#999'
      }}>Centre</span>
        <Label align="centre">Centre Aligned</Label>
      </div>
      <div>
        <span style={{
        fontSize: '12px',
        color: '#999'
      }}>Right</span>
        <Label align="right">Right Aligned</Label>
      </div>
    </div>
}`,...(N=(C=x.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var q,F,O,E,P;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Systematic: Bold (30 variants)',
  render: () => <WeightMatrix weight="bold" />
}`,...(O=(F=n.parameters)==null?void 0:F.docs)==null?void 0:O.source},description:{story:"Bold variants systematic overview",...(P=(E=n.parameters)==null?void 0:E.docs)==null?void 0:P.description}}};var X,$,k,H,U;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Systematic: Medium (30 variants)',
  render: () => <WeightMatrix weight="medium" />
}`,...(k=($=o.parameters)==null?void 0:$.docs)==null?void 0:k.source},description:{story:"Medium variants systematic overview",...(U=(H=o.parameters)==null?void 0:H.docs)==null?void 0:U.description}}};var Z,G,K,J,Q;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Systematic: Light (30 variants)',
  render: () => <WeightMatrix weight="light" />
}`,...(K=(G=d.parameters)==null?void 0:G.docs)==null?void 0:K.source},description:{story:"Light variants systematic overview",...(Q=(J=d.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var Y,ee,ae,le,ie;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Systematic: Thin (30 variants)',
  render: () => <WeightMatrix weight="thin" />
}`,...(ae=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Thin variants systematic overview",...(ie=(le=c.parameters)==null?void 0:le.docs)==null?void 0:ie.description}}};var te,re,se,ne,oe;p.parameters={...p.parameters,docs:{...(te=p.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Full Matrix (120 variants)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '80px'
  }}>
      <div style={{
      textAlign: 'center',
      marginBottom: '20px'
    }}>
        <h1 style={{
        margin: 0
      }}>Label Component Variant Matrix</h1>
        <p style={{
        color: '#666'
      }}>5 Sizes × 4 Weights × 3 Alignments × 2 Dropdown States = 120 Variants</p>
      </div>
      <WeightMatrix weight="bold" />
      <WeightMatrix weight="medium" />
      <WeightMatrix weight="light" />
      <WeightMatrix weight="thin" />
    </div>
}`,...(se=(re=p.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"Comprehensive overview of all 120 variants",...(oe=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};var de,ce,pe;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    dropdown: true
  }
}`,...(pe=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,he,ge;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  }}>
      <div data-theme="penta" style={{
      padding: '20px',
      border: '1px solid #eee',
      borderRadius: '8px'
    }}>
        <h3 style={{
        marginTop: 0,
        color: '#999',
        fontSize: '12px'
      }}>PENTA BRAND (Default)</h3>
        <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center'
      }}>
          <Label size="large" weight="bold">Large Bold</Label>
          <Label size="default" weight="medium" dropdown>Dropdown</Label>
          <Label size="small" weight="light">Small Light</Label>
        </div>
      </div>

      <div data-theme="horizon" style={{
      padding: '20px',
      border: '1px solid #eee',
      borderRadius: '8px',
      backgroundColor: '#f4f5f7'
    }}>
        <h3 style={{
        marginTop: 0,
        color: '#999',
        fontSize: '12px'
      }}>HORIZON BRAND</h3>
        <div style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center'
      }}>
          <Label size="large" weight="bold">Large Bold</Label>
          <Label size="default" weight="medium" dropdown>Dropdown</Label>
          <Label size="small" weight="light">Small Light</Label>
        </div>
      </div>
    </div>
}`,...(ge=(he=v.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};const Be=["Default","Sizes","Weights","Alignments","BoldVariants","MediumVariants","LightVariants","ThinVariants","AllVariants","WithDropdown","BrandComparison"],qe=Object.freeze(Object.defineProperty({__proto__:null,Alignments:x,AllVariants:p,BoldVariants:n,BrandComparison:v,Default:h,LightVariants:d,MediumVariants:o,Sizes:g,ThinVariants:c,Weights:u,WithDropdown:f,__namedExportsOrder:Be,default:Re},Symbol.toStringTag,{value:"Module"}));export{x as A,v as B,h as D,qe as L,g as S,u as W,f as a,p as b};
