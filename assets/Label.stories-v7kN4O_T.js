import{j as e,R as _}from"./iframe-Dpc7MxzP.js";import{c as Le,P as ge,I as y,A as _e,S as Se,M as ze}from"./Person-ejAH3J5C.js";const Te=Le(e.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),De="_labelContainer_jy2b4_6",Ie="_split_jy2b4_118",We="_splitDivider_jy2b4_127",Ae="_chevronIcon_jy2b4_134",Me="_labelText_jy2b4_138",i={labelContainer:De,"font-ginger":"_font-ginger_jy2b4_36","font-archivo":"_font-archivo_jy2b4_40","align-left":"_align-left_jy2b4_45","align-center":"_align-center_jy2b4_49","align-right":"_align-right_jy2b4_54","weight-bold":"_weight-bold_jy2b4_60","weight-medium":"_weight-medium_jy2b4_64","weight-light":"_weight-light_jy2b4_68","weight-thin":"_weight-thin_jy2b4_72","size-large":"_size-large_jy2b4_77","size-default":"_size-default_jy2b4_89","size-small":"_size-small_jy2b4_96","size-x-small":"_size-x-small_jy2b4_103","size-2x-small":"_size-2x-small_jy2b4_110",split:Ie,splitDivider:We,chevronIcon:Ae,labelText:Me},a=({children:r="Label",size:s="default",weight:v="medium",font:l="archivo",align:m="left",dropdown:ue=!1,component:xe="div",ariaLabel:fe,leadingIcon:L=ge,showLeadingIcon:be=!0,showTrailingIcon:ve=!0,showSplit:ye=!0,className:we=""})=>{const je=[i.labelContainer,i[`size-${s}`],i[`weight-${v}`],i[`font-${l}`],i[`align-${m}`],we].join(" ");return e.jsxs(xe,{className:je,"aria-label":fe,children:[be&&L&&e.jsx(y,{icon:L,size:s}),e.jsx("span",{className:i.labelText,children:r}),ve&&e.jsx(y,{icon:_e,size:s}),ue&&ye&&e.jsxs("div",{className:i.split,children:[e.jsx("div",{className:i.splitDivider}),e.jsx(y,{icon:Te,size:s,className:i.chevronIcon})]})]})};a.__docgenInfo={description:"A versatile Label component for displaying text with optional icons and dropdown split.",methods:[],displayName:"Label",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text content",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small' | '2x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'2x-small'"}]},description:"Size variant — controls font-size, line-height, gap, and icon size",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'medium' | 'light' | 'thin'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'light'"},{name:"literal",value:"'thin'"}]},description:"Font weight",defaultValue:{value:"'medium'",computed:!1}},font:{required:!1,tsType:{name:"union",raw:"'ginger' | 'archivo'",elements:[{name:"literal",value:"'ginger'"},{name:"literal",value:"'archivo'"}]},description:"Font family variant",defaultValue:{value:"'archivo'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},dropdown:{required:!1,tsType:{name:"boolean"},description:"Shows dropdown split + chevron-down icon after trailing icon",defaultValue:{value:"false",computed:!1}},component:{required:!1,tsType:{name:"union",raw:"'label' | 'span' | 'div'",elements:[{name:"literal",value:"'label'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"Semantic HTML element to render",defaultValue:{value:"'div'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI icon component). Pass null/undefined to hide.",defaultValue:{value:"PersonIcon",computed:!0}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the trailing arrow-right icon",defaultValue:{value:"true",computed:!1}},showSplit:{required:!1,tsType:{name:"boolean"},description:"Whether to show the split divider and chevron (only if dropdown is true)",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Ve={title:"Foundations/Label",component:a,argTypes:{size:{control:"select",options:["large","default","small","x-small","2x-small"]},weight:{control:"select",options:["bold","medium","light","thin"]},font:{control:"select",options:["archivo","ginger"]},align:{control:"select",options:["left","centre","right"]},leadingIcon:{control:"select",options:["Person","Mail","Settings","None"],mapping:{Person:ge,Mail:ze,Settings:Se,None:null}},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},dropdown:{control:"boolean"},showSplit:{control:"boolean"}},decorators:[r=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{})})]},t=({weight:r})=>{const s=["large","default","small","x-small","2x-small"],v=["left","centre","right"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsxs("h2",{style:{margin:0,textTransform:"uppercase",letterSpacing:"1px"},children:[r," weight variants"]}),e.jsx("div",{style:{height:"2px",flexGrow:1,backgroundColor:"#eee"}})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"1000px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:w,children:"Size"}),v.map(l=>e.jsxs(_.Fragment,{children:[e.jsx("th",{style:w,children:l}),e.jsxs("th",{style:w,children:[l," + Dropdown"]})]},l))]})}),e.jsx("tbody",{children:s.map(l=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{...j,fontWeight:"bold",color:"#666",width:"100px"},children:l}),v.map(m=>e.jsxs(_.Fragment,{children:[e.jsx("td",{style:j,children:e.jsx(a,{size:l,weight:r,align:m,dropdown:!1,children:"Label"})}),e.jsx("td",{style:j,children:e.jsx(a,{size:l,weight:r,align:m,dropdown:!0,children:"Label"})})]},m))]},l))})]})})]})},w={textAlign:"left",padding:"12px",color:"#999",fontSize:"12px",textTransform:"uppercase",borderBottom:"2px solid #eee"},j={padding:"16px 12px"},h={args:{children:"Label",size:"default",weight:"bold",align:"left",dropdown:!1,showTrailingIcon:!0}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(a,{size:"large",children:"Large Label"}),e.jsx(a,{size:"default",children:"Default Label"}),e.jsx(a,{size:"small",children:"Small Label"}),e.jsx(a,{size:"x-small",children:"X-Small Label"}),e.jsx(a,{size:"2x-small",children:"2X-Small Label"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(a,{weight:"bold",children:"Bold Weight"}),e.jsx(a,{weight:"medium",children:"Medium Weight"}),e.jsx(a,{weight:"light",children:"Light Weight"}),e.jsx(a,{weight:"thin",children:"Thin Weight"})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px",border:"1px dashed #eee",padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"12px",color:"#999"},children:"Left"}),e.jsx(a,{align:"left",children:"Left Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"12px",color:"#999"},children:"Centre"}),e.jsx(a,{align:"centre",children:"Centre Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"12px",color:"#999"},children:"Right"}),e.jsx(a,{align:"right",children:"Right Aligned"})]})]})},n={name:"Systematic: Bold (30 variants)",render:()=>e.jsx(t,{weight:"bold"})},o={name:"Systematic: Medium (30 variants)",render:()=>e.jsx(t,{weight:"medium"})},d={name:"Systematic: Light (30 variants)",render:()=>e.jsx(t,{weight:"light"})},c={name:"Systematic: Thin (30 variants)",render:()=>e.jsx(t,{weight:"thin"})},p={name:"Full Matrix (120 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"80px"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[e.jsx("h1",{style:{margin:0},children:"Label Component Variant Matrix"}),e.jsx("p",{style:{color:"#666"},children:"5 Sizes × 4 Weights × 3 Alignments × 2 Dropdown States = 120 Variants"})]}),e.jsx(t,{weight:"bold"}),e.jsx(t,{weight:"medium"}),e.jsx(t,{weight:"light"}),e.jsx(t,{weight:"thin"})]})},f={args:{dropdown:!0}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsxs("div",{"data-theme":"penta",style:{padding:"20px",border:"1px solid #eee",borderRadius:"8px"},children:[e.jsx("h3",{style:{marginTop:0,color:"#999",fontSize:"12px"},children:"PENTA BRAND (Default)"}),e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx(a,{size:"large",weight:"bold",children:"Large Bold"}),e.jsx(a,{size:"default",weight:"medium",dropdown:!0,children:"Dropdown"}),e.jsx(a,{size:"small",weight:"light",children:"Small Light"})]})]}),e.jsxs("div",{"data-theme":"horizon",style:{padding:"20px",border:"1px solid #eee",borderRadius:"8px",backgroundColor:"#f4f5f7"},children:[e.jsx("h3",{style:{marginTop:0,color:"#999",fontSize:"12px"},children:"HORIZON BRAND"}),e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx(a,{size:"large",weight:"bold",children:"Large Bold"}),e.jsx(a,{size:"default",weight:"medium",dropdown:!0,children:"Dropdown"}),e.jsx(a,{size:"small",weight:"light",children:"Small Light"})]})]})]})};var S,z,T;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true
  }
}`,...(T=(z=h.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var D,I,W;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(I=g.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var A,M,V;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(V=(M=u.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var R,B,C;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(C=(B=x.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var N,q,P,F,O;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Systematic: Bold (30 variants)',
  render: () => <WeightMatrix weight="bold" />
}`,...(P=(q=n.parameters)==null?void 0:q.docs)==null?void 0:P.source},description:{story:"Bold variants systematic overview",...(O=(F=n.parameters)==null?void 0:F.docs)==null?void 0:O.description}}};var E,X,$,k,H;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Systematic: Medium (30 variants)',
  render: () => <WeightMatrix weight="medium" />
}`,...($=(X=o.parameters)==null?void 0:X.docs)==null?void 0:$.source},description:{story:"Medium variants systematic overview",...(H=(k=o.parameters)==null?void 0:k.docs)==null?void 0:H.description}}};var Z,G,K,U,J;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Systematic: Light (30 variants)',
  render: () => <WeightMatrix weight="light" />
}`,...(K=(G=d.parameters)==null?void 0:G.docs)==null?void 0:K.source},description:{story:"Light variants systematic overview",...(J=(U=d.parameters)==null?void 0:U.docs)==null?void 0:J.description}}};var Q,Y,ee,ae,le;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Systematic: Thin (30 variants)',
  render: () => <WeightMatrix weight="thin" />
}`,...(ee=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:ee.source},description:{story:"Thin variants systematic overview",...(le=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:le.description}}};var ie,te,re,se,ne;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(te=p.parameters)==null?void 0:te.docs)==null?void 0:re.source},description:{story:"Comprehensive overview of all 120 variants",...(ne=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};var oe,de,ce;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    dropdown: true
  }
}`,...(ce=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,he;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(me=b.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};const Re=["Default","Sizes","Weights","Alignments","BoldVariants","MediumVariants","LightVariants","ThinVariants","AllVariants","WithDropdown","BrandComparison"],Ne=Object.freeze(Object.defineProperty({__proto__:null,Alignments:x,AllVariants:p,BoldVariants:n,BrandComparison:b,Default:h,LightVariants:d,MediumVariants:o,Sizes:g,ThinVariants:c,Weights:u,WithDropdown:f,__namedExportsOrder:Re,default:Ve},Symbol.toStringTag,{value:"Module"}));export{x as A,b as B,h as D,Ne as L,g as S,u as W,f as a,p as b};
