import{j as e,R as _}from"./iframe-RXS4GSLx.js";import{c as ye,P as he,I as w,A as je,S as Le,M as _e}from"./Person-K6ldIbi5.js";const Se=ye(e.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),ze="_labelContainer_rj7gt_1",Te="_split_rj7gt_94",De="_splitDivider_rj7gt_103",Ie="_chevronIcon_rj7gt_110",We="_labelText_rj7gt_114",i={labelContainer:ze,"font-ginger":"_font-ginger_rj7gt_12","font-archivo":"_font-archivo_rj7gt_16","align-left":"_align-left_rj7gt_21","align-centre":"_align-centre_rj7gt_25","align-right":"_align-right_rj7gt_30","weight-bold":"_weight-bold_rj7gt_36","weight-medium":"_weight-medium_rj7gt_40","weight-light":"_weight-light_rj7gt_44","weight-thin":"_weight-thin_rj7gt_48","size-large":"_size-large_rj7gt_53","size-default":"_size-default_rj7gt_65","size-small":"_size-small_rj7gt_72","size-x-small":"_size-x-small_rj7gt_79","size-2x-small":"_size-2x-small_rj7gt_86",split:Te,splitDivider:De,chevronIcon:Ie,labelText:We},t=({children:r="Label",size:s="default",weight:b="medium",font:a="archivo",align:g="left",dropdown:xe=!1,leadingIcon:L=he,showLeadingIcon:ue=!0,showTrailingIcon:fe=!0,showSplit:ve=!0,className:be=""})=>{const we=[i.labelContainer,i[`size-${s}`],i[`weight-${b}`],i[`font-${a}`],i[`align-${g}`],be].join(" ");return e.jsxs("div",{className:we,children:[ue&&L&&e.jsx(w,{icon:L,size:s}),e.jsx("span",{className:i.labelText,children:r}),fe&&e.jsx(w,{icon:je,size:s}),xe&&ve&&e.jsxs("div",{className:i.split,children:[e.jsx("div",{className:i.splitDivider}),e.jsx(w,{icon:Se,size:s,className:i.chevronIcon})]})]})};t.__docgenInfo={description:"A versatile Label component for displaying text with optional icons and dropdown split.",methods:[],displayName:"Label",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text content",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small' | '2x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'2x-small'"}]},description:"Size variant — controls font-size, line-height, gap, and icon size",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'medium' | 'light' | 'thin'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'light'"},{name:"literal",value:"'thin'"}]},description:"Font weight",defaultValue:{value:"'medium'",computed:!1}},font:{required:!1,tsType:{name:"union",raw:"'ginger' | 'archivo'",elements:[{name:"literal",value:"'ginger'"},{name:"literal",value:"'archivo'"}]},description:"Font family variant",defaultValue:{value:"'archivo'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},dropdown:{required:!1,tsType:{name:"boolean"},description:"Shows dropdown split + chevron-down icon after trailing icon",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI icon component). Pass null/undefined to hide.",defaultValue:{value:"PersonIcon",computed:!0}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the trailing arrow-right icon",defaultValue:{value:"true",computed:!1}},showSplit:{required:!1,tsType:{name:"boolean"},description:"Whether to show the split divider and chevron (only if dropdown is true)",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Me={title:"Foundations/Label",component:t,argTypes:{size:{control:"select",options:["large","default","small","x-small","2x-small"]},weight:{control:"select",options:["bold","medium","light","thin"]},font:{control:"select",options:["archivo","ginger"]},align:{control:"select",options:["left","centre","right"]},leadingIcon:{control:"select",options:["Person","Mail","Settings","None"],mapping:{Person:he,Mail:_e,Settings:Le,None:null}},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},dropdown:{control:"boolean"},showSplit:{control:"boolean"}},decorators:[r=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(r,{})})]},l=({weight:r})=>{const s=["large","default","small","x-small","2x-small"],b=["left","centre","right"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsxs("h2",{style:{margin:0,textTransform:"uppercase",letterSpacing:"1px"},children:[r," weight variants"]}),e.jsx("div",{style:{height:"2px",flexGrow:1,backgroundColor:"#eee"}})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"1000px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:y,children:"Size"}),b.map(a=>e.jsxs(_.Fragment,{children:[e.jsx("th",{style:y,children:a}),e.jsxs("th",{style:y,children:[a," + Dropdown"]})]},a))]})}),e.jsx("tbody",{children:s.map(a=>e.jsxs("tr",{style:{borderBottom:"1px solid #f0f0f0"},children:[e.jsx("td",{style:{...j,fontWeight:"bold",color:"#666",width:"100px"},children:a}),b.map(g=>e.jsxs(_.Fragment,{children:[e.jsx("td",{style:j,children:e.jsx(t,{size:a,weight:r,align:g,dropdown:!1,children:"Label"})}),e.jsx("td",{style:j,children:e.jsx(t,{size:a,weight:r,align:g,dropdown:!0,children:"Label"})})]},g))]},a))})]})})]})},y={textAlign:"left",padding:"12px",color:"#999",fontSize:"12px",textTransform:"uppercase",borderBottom:"2px solid #eee"},j={padding:"16px 12px"},m={args:{children:"Label",size:"default",weight:"bold",align:"left",dropdown:!1,showTrailingIcon:!0}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(t,{size:"large",children:"Large Label"}),e.jsx(t,{size:"default",children:"Default Label"}),e.jsx(t,{size:"small",children:"Small Label"}),e.jsx(t,{size:"x-small",children:"X-Small Label"}),e.jsx(t,{size:"2x-small",children:"2X-Small Label"})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(t,{weight:"bold",children:"Bold Weight"}),e.jsx(t,{weight:"medium",children:"Medium Weight"}),e.jsx(t,{weight:"light",children:"Light Weight"}),e.jsx(t,{weight:"thin",children:"Thin Weight"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px",border:"1px dashed #eee",padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"12px",color:"#999"},children:"Left"}),e.jsx(t,{align:"left",children:"Left Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"12px",color:"#999"},children:"Centre"}),e.jsx(t,{align:"centre",children:"Centre Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"12px",color:"#999"},children:"Right"}),e.jsx(t,{align:"right",children:"Right Aligned"})]})]})},n={name:"Systematic: Bold (30 variants)",render:()=>e.jsx(l,{weight:"bold"})},o={name:"Systematic: Medium (30 variants)",render:()=>e.jsx(l,{weight:"medium"})},d={name:"Systematic: Light (30 variants)",render:()=>e.jsx(l,{weight:"light"})},c={name:"Systematic: Thin (30 variants)",render:()=>e.jsx(l,{weight:"thin"})},p={name:"Full Matrix (120 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"80px"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"20px"},children:[e.jsx("h1",{style:{margin:0},children:"Label Component Variant Matrix"}),e.jsx("p",{style:{color:"#666"},children:"5 Sizes × 4 Weights × 3 Alignments × 2 Dropdown States = 120 Variants"})]}),e.jsx(l,{weight:"bold"}),e.jsx(l,{weight:"medium"}),e.jsx(l,{weight:"light"}),e.jsx(l,{weight:"thin"})]})},f={args:{dropdown:!0}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsxs("div",{"data-theme":"penta",style:{padding:"20px",border:"1px solid #eee",borderRadius:"8px"},children:[e.jsx("h3",{style:{marginTop:0,color:"#999",fontSize:"12px"},children:"PENTA BRAND (Default)"}),e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx(t,{size:"large",weight:"bold",children:"Large Bold"}),e.jsx(t,{size:"default",weight:"medium",dropdown:!0,children:"Dropdown"}),e.jsx(t,{size:"small",weight:"light",children:"Small Light"})]})]}),e.jsxs("div",{"data-theme":"horizon",style:{padding:"20px",border:"1px solid #eee",borderRadius:"8px",backgroundColor:"#f4f5f7"},children:[e.jsx("h3",{style:{marginTop:0,color:"#999",fontSize:"12px"},children:"HORIZON BRAND"}),e.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx(t,{size:"large",weight:"bold",children:"Large Bold"}),e.jsx(t,{size:"default",weight:"medium",dropdown:!0,children:"Dropdown"}),e.jsx(t,{size:"small",weight:"light",children:"Small Light"})]})]})]})};var S,z,T;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true
  }
}`,...(T=(z=m.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var D,I,W;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(I=h.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var M,A,V;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(A=x.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var R,B,C;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(C=(B=u.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var N,q,P,F,O;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Systematic: Bold (30 variants)',
  render: () => <WeightMatrix weight="bold" />
}`,...(P=(q=n.parameters)==null?void 0:q.docs)==null?void 0:P.source},description:{story:"Bold variants systematic overview",...(O=(F=n.parameters)==null?void 0:F.docs)==null?void 0:O.description}}};var E,X,$,k,H;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Systematic: Medium (30 variants)',
  render: () => <WeightMatrix weight="medium" />
}`,...($=(X=o.parameters)==null?void 0:X.docs)==null?void 0:$.source},description:{story:"Medium variants systematic overview",...(H=(k=o.parameters)==null?void 0:k.docs)==null?void 0:H.description}}};var Z,G,K,U,J;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Systematic: Light (30 variants)',
  render: () => <WeightMatrix weight="light" />
}`,...(K=(G=d.parameters)==null?void 0:G.docs)==null?void 0:K.source},description:{story:"Light variants systematic overview",...(J=(U=d.parameters)==null?void 0:U.docs)==null?void 0:J.description}}};var Q,Y,ee,te,ae;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Systematic: Thin (30 variants)',
  render: () => <WeightMatrix weight="thin" />
}`,...(ee=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:ee.source},description:{story:"Thin variants systematic overview",...(ae=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ae.description}}};var ie,le,re,se,ne;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(le=p.parameters)==null?void 0:le.docs)==null?void 0:re.source},description:{story:"Comprehensive overview of all 120 variants",...(ne=(se=p.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};var oe,de,ce;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    dropdown: true
  }
}`,...(ce=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ge,me;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};const Ae=["Default","Sizes","Weights","Alignments","BoldVariants","MediumVariants","LightVariants","ThinVariants","AllVariants","WithDropdown","BrandComparison"],Be=Object.freeze(Object.defineProperty({__proto__:null,Alignments:u,AllVariants:p,BoldVariants:n,BrandComparison:v,Default:m,LightVariants:d,MediumVariants:o,Sizes:h,ThinVariants:c,Weights:x,WithDropdown:f,__namedExportsOrder:Ae,default:Me},Symbol.toStringTag,{value:"Module"}));export{u as A,v as B,m as D,Be as L,h as S,x as W,f as a,p as b};
