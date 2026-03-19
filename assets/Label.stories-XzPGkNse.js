import{j as e,R as _}from"./iframe-BQzJWzAk.js";import{c as fe,P as ge,A as we,I as y,S as je,M as Le}from"./Person-5dIKtMxP.js";const _e=fe(e.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),ze="_labelContainer_1tsg7_6",Se="_split_1tsg7_121",Te="_splitDivider_1tsg7_130",Me="_chevronIcon_1tsg7_137",We="_labelText_1tsg7_141",t={labelContainer:ze,"font-secondary":"_font-secondary_1tsg7_37","font-primary":"_font-primary_1tsg7_41","align-left":"_align-left_1tsg7_46","align-centre":"_align-centre_1tsg7_50","align-right":"_align-right_1tsg7_55","weight-bold":"_weight-bold_1tsg7_61","weight-medium":"_weight-medium_1tsg7_65","weight-light":"_weight-light_1tsg7_69","weight-thin":"_weight-thin_1tsg7_73","size-large":"_size-large_1tsg7_80","size-default":"_size-default_1tsg7_92","size-small":"_size-small_1tsg7_99","size-x-small":"_size-x-small_1tsg7_106","size-2x-small":"_size-2x-small_1tsg7_113",split:Se,splitDivider:Te,chevronIcon:Me,labelText:We},a=({children:i="Label",size:s="default",weight:b="bold",font:l="primary",align:p="left",dropdown:pe=!1,component:me="div",ariaLabel:he,leadingIcon:j=ge,trailingIcon:L=we,showLeadingIcon:ue=!0,showTrailingIcon:xe=!0,showSplit:ve=!0,className:be=""})=>{const ye=[t.labelContainer,t[`size-${s}`],t[`weight-${b}`],t[`font-${l}`],t[`align-${p}`],be].join(" ");return e.jsxs(me,{className:ye,"aria-label":he,children:[ue&&j&&e.jsx(y,{icon:j,size:s}),e.jsx("span",{className:t.labelText,children:i}),xe&&L&&e.jsx(y,{icon:L,size:s}),pe&&ve&&e.jsxs("div",{className:t.split,children:[e.jsx("div",{className:t.splitDivider}),e.jsx(y,{icon:_e,size:s,className:t.chevronIcon})]})]})};a.__docgenInfo={description:"A versatile Label component for displaying text with optional icons and dropdown split.",methods:[],displayName:"Label",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text content",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small' | '2x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'2x-small'"}]},description:"Size variant — controls font-size, line-height, gap, and icon size",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'medium' | 'light' | 'thin'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'light'"},{name:"literal",value:"'thin'"}]},description:"Font weight",defaultValue:{value:"'bold'",computed:!1}},font:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"Font family variant — 'primary' or 'secondary' as defined in brand tokens.",defaultValue:{value:"'primary'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},dropdown:{required:!1,tsType:{name:"boolean"},description:"Shows dropdown split + chevron-down icon after trailing icon",defaultValue:{value:"false",computed:!1}},component:{required:!1,tsType:{name:"union",raw:"'label' | 'span' | 'div'",elements:[{name:"literal",value:"'label'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"Semantic HTML element to render",defaultValue:{value:"'div'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI icon component).",defaultValue:{value:"PersonIcon",computed:!0}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional trailing icon (MUI icon component). Defaults to ArrowForwardIcon.",defaultValue:{value:"ArrowForwardIcon",computed:!0}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the trailing icon",defaultValue:{value:"true",computed:!1}},showSplit:{required:!1,tsType:{name:"boolean"},description:"Whether to show the split divider and chevron (only if dropdown is true)",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Ie={title:"Foundations/Label",component:a,argTypes:{size:{control:"select",options:["large","default","small","x-small","2x-small"]},weight:{control:"select",options:["bold","medium","light","thin"]},font:{control:"select",options:["primary","secondary"]},align:{control:"select",options:["left","centre","right"]},leadingIcon:{control:"select",options:["Person","Mail","Settings","None"],mapping:{Person:ge,Mail:Le,Settings:je,None:null}},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},dropdown:{control:"boolean"},showSplit:{control:"boolean"}},decorators:[i=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(i,{})})]},r=({weight:i})=>{const s=["large","default","small","x-small","2x-small"],b=["left","centre","right"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-40px)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("h2",{style:{margin:0,textTransform:"uppercase",letterSpacing:"var(--global-spacing-sizing-1px)"},children:[i," weight variants"]}),e.jsx("div",{style:{height:"var(--global-spacing-stroke-2px)",flexGrow:1,backgroundColor:"var(--global-color-neutral-gray-200)"}})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"1000px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:f,children:"Size"}),b.map(l=>e.jsxs(_.Fragment,{children:[e.jsx("th",{style:f,children:l}),e.jsxs("th",{style:f,children:[l," + Dropdown"]})]},l))]})}),e.jsx("tbody",{children:s.map(l=>e.jsxs("tr",{style:{borderBottom:"var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-100)"},children:[e.jsx("td",{style:{...w,fontWeight:"var(--global-type-weight-bold)",color:"var(--global-color-neutral-gray-600)",width:"100px"},children:l}),b.map(p=>e.jsxs(_.Fragment,{children:[e.jsx("td",{style:w,children:e.jsx(a,{size:l,weight:i,align:p,dropdown:!1,children:"Label"})}),e.jsx("td",{style:w,children:e.jsx(a,{size:l,weight:i,align:p,dropdown:!0,children:"Label"})})]},p))]},l))})]})})]})},f={textAlign:"left",padding:"var(--global-spacing-sizing-12px)",color:"var(--global-color-neutral-gray-400)",fontSize:"var(--global-type-size-primary-label-xs)",textTransform:"uppercase",borderBottom:"var(--global-spacing-stroke-2px) solid var(--global-color-neutral-gray-200)"},w={padding:"var(--global-spacing-sizing-16px) var(--global-spacing-sizing-12px)"},m={args:{children:"Label",size:"default",weight:"bold",align:"left",dropdown:!1,showTrailingIcon:!0}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{size:"large",children:"Large Label"}),e.jsx(a,{size:"default",children:"Default Label"}),e.jsx(a,{size:"small",children:"Small Label"}),e.jsx(a,{size:"x-small",children:"X-Small Label"}),e.jsx(a,{size:"2x-small",children:"2X-Small Label"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{weight:"bold",children:"Bold Weight"}),e.jsx(a,{weight:"medium",children:"Medium Weight"}),e.jsx(a,{weight:"light",children:"Light Weight"}),e.jsx(a,{weight:"thin",children:"Thin Weight"})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",width:"400px",border:"var(--global-spacing-stroke-1px) dashed var(--global-color-neutral-gray-200)",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Left"}),e.jsx(a,{align:"left",children:"Left Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Centre"}),e.jsx(a,{align:"centre",children:"Centre Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Right"}),e.jsx(a,{align:"right",children:"Right Aligned"})]})]})},n={name:"Systematic: Bold (30 variants)",render:()=>e.jsx(r,{weight:"bold"})},o={name:"Systematic: Medium (30 variants)",render:()=>e.jsx(r,{weight:"medium"})},d={name:"Systematic: Light (30 variants)",render:()=>e.jsx(r,{weight:"light"})},c={name:"Systematic: Thin (30 variants)",render:()=>e.jsx(r,{weight:"thin"})},g={name:"Full Matrix (120 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-80px)"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--global-spacing-sizing-20px)"},children:[e.jsx("h1",{style:{margin:0},children:"Label Component Variant Matrix"}),e.jsx("p",{style:{color:"var(--global-color-neutral-gray-600)"},children:"5 Sizes × 4 Weights × 3 Alignments × 2 Dropdown States = 120 Variants"})]}),e.jsx(r,{weight:"bold"}),e.jsx(r,{weight:"medium"}),e.jsx(r,{weight:"light"}),e.jsx(r,{weight:"thin"})]})},v={args:{dropdown:!0}};var z,S,T;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true
  }
}`,...(T=(S=m.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var M,W,I;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)'
  }}>
      <Label size="large">Large Label</Label>
      <Label size="default">Default Label</Label>
      <Label size="small">Small Label</Label>
      <Label size="x-small">X-Small Label</Label>
      <Label size="2x-small">2X-Small Label</Label>
    </div>
}`,...(I=(W=h.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var V,D,A;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)'
  }}>
      <Label weight="bold">Bold Weight</Label>
      <Label weight="medium">Medium Weight</Label>
      <Label weight="light">Light Weight</Label>
      <Label weight="thin">Thin Weight</Label>
    </div>
}`,...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var R,C,q;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)',
    width: '400px',
    border: 'var(--global-spacing-stroke-1px) dashed var(--global-color-neutral-gray-200)',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      <div>
        <span style={{
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-400)'
      }}>Left</span>
        <Label align="left">Left Aligned</Label>
      </div>
      <div>
        <span style={{
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-400)'
      }}>Centre</span>
        <Label align="centre">Centre Aligned</Label>
      </div>
      <div>
        <span style={{
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-400)'
      }}>Right</span>
        <Label align="right">Right Aligned</Label>
      </div>
    </div>
}`,...(q=(C=x.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var B,N,F,k,E;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Systematic: Bold (30 variants)',
  render: () => <WeightMatrix weight="bold" />
}`,...(F=(N=n.parameters)==null?void 0:N.docs)==null?void 0:F.source},description:{story:"Bold variants systematic overview",...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.description}}};var P,O,X,$,U;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Systematic: Medium (30 variants)',
  render: () => <WeightMatrix weight="medium" />
}`,...(X=(O=o.parameters)==null?void 0:O.docs)==null?void 0:X.source},description:{story:"Medium variants systematic overview",...(U=($=o.parameters)==null?void 0:$.docs)==null?void 0:U.description}}};var G,H,K,J,Q;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Systematic: Light (30 variants)',
  render: () => <WeightMatrix weight="light" />
}`,...(K=(H=d.parameters)==null?void 0:H.docs)==null?void 0:K.source},description:{story:"Light variants systematic overview",...(Q=(J=d.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var Y,Z,ee,ae,le;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Systematic: Thin (30 variants)',
  render: () => <WeightMatrix weight="thin" />
}`,...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Thin variants systematic overview",...(le=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:le.description}}};var te,re,ie,se,ne;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Full Matrix (120 variants)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-80px)'
  }}>
      <div style={{
      textAlign: 'center',
      marginBottom: 'var(--global-spacing-sizing-20px)'
    }}>
        <h1 style={{
        margin: 0
      }}>Label Component Variant Matrix</h1>
        <p style={{
        color: 'var(--global-color-neutral-gray-600)'
      }}>5 Sizes × 4 Weights × 3 Alignments × 2 Dropdown States = 120 Variants</p>
      </div>
      <WeightMatrix weight="bold" />
      <WeightMatrix weight="medium" />
      <WeightMatrix weight="light" />
      <WeightMatrix weight="thin" />
    </div>
}`,...(ie=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ie.source},description:{story:"Comprehensive overview of all 120 variants",...(ne=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ne.description}}};var oe,de,ce;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    dropdown: true
  }
}`,...(ce=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const Ve=["Default","Sizes","Weights","Alignments","BoldVariants","MediumVariants","LightVariants","ThinVariants","AllVariants","WithDropdown"],Re=Object.freeze(Object.defineProperty({__proto__:null,Alignments:x,AllVariants:g,BoldVariants:n,Default:m,LightVariants:d,MediumVariants:o,Sizes:h,ThinVariants:c,Weights:u,WithDropdown:v,__namedExportsOrder:Ve,default:Ie},Symbol.toStringTag,{value:"Module"}));export{x as A,m as D,Re as L,h as S,u as W,v as a,g as b};
