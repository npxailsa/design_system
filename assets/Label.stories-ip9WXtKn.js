import{j as e,R as _}from"./iframe-aEoKiTRh.js";import{c as je,P as ue,A as _e,I as f,S as Se,M as Te}from"./Person-C0gvX9yc.js";const De=je(e.jsx("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"})),Ie="_labelContainer_1d63y_6",Ae="_split_1d63y_119",Me="_splitDivider_1d63y_128",We="_chevronIcon_1d63y_135",Ve="_labelText_1d63y_139",r={labelContainer:Ie,"font-secondary":"_font-secondary_1d63y_37","font-primary":"_font-primary_1d63y_41","align-left":"_align-left_1d63y_46","align-centre":"_align-centre_1d63y_50","align-right":"_align-right_1d63y_55","weight-bold":"_weight-bold_1d63y_61","weight-medium":"_weight-medium_1d63y_65","weight-light":"_weight-light_1d63y_69","weight-thin":"_weight-thin_1d63y_73","size-large":"_size-large_1d63y_78","size-default":"_size-default_1d63y_90","size-small":"_size-small_1d63y_97","size-x-small":"_size-x-small_1d63y_104","size-2x-small":"_size-2x-small_1d63y_111",split:Ae,splitDivider:Me,chevronIcon:We,labelText:Ve},a=({children:t="Label",size:s="default",weight:y="bold",font:l="primary",align:p="left",dropdown:be=!1,component:xe="div",ariaLabel:ve,leadingIcon:L=ue,trailingIcon:j=_e,showLeadingIcon:ye=!0,showTrailingIcon:fe=!0,showSplit:we=!0,className:ze=""})=>{const Le=[r.labelContainer,r[`size-${s}`],r[`weight-${y}`],r[`font-${l}`],r[`align-${p}`],ze].join(" ");return e.jsxs(xe,{className:Le,"aria-label":ve,children:[ye&&L&&e.jsx(f,{icon:L,size:s}),e.jsx("span",{className:r.labelText,children:t}),fe&&j&&e.jsx(f,{icon:j,size:s}),be&&we&&e.jsxs("div",{className:r.split,children:[e.jsx("div",{className:r.splitDivider}),e.jsx(f,{icon:De,size:s,className:r.chevronIcon})]})]})};a.__docgenInfo={description:"A versatile Label component for displaying text with optional icons and dropdown split.",methods:[],displayName:"Label",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text content",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small' | '2x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'2x-small'"}]},description:"Size variant — controls font-size, line-height, gap, and icon size",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'medium' | 'light' | 'thin'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'light'"},{name:"literal",value:"'thin'"}]},description:"Font weight",defaultValue:{value:"'bold'",computed:!1}},font:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"Font family variant — 'primary' or 'secondary' as defined in brand tokens.",defaultValue:{value:"'primary'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},dropdown:{required:!1,tsType:{name:"boolean"},description:"Shows dropdown split + chevron-down icon after trailing icon",defaultValue:{value:"false",computed:!1}},component:{required:!1,tsType:{name:"union",raw:"'label' | 'span' | 'div'",elements:[{name:"literal",value:"'label'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"Semantic HTML element to render",defaultValue:{value:"'div'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI icon component).",defaultValue:{value:"PersonIcon",computed:!0}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional trailing icon (MUI icon component). Defaults to ArrowForwardIcon.",defaultValue:{value:"ArrowForwardIcon",computed:!0}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the trailing icon",defaultValue:{value:"true",computed:!1}},showSplit:{required:!1,tsType:{name:"boolean"},description:"Whether to show the split divider and chevron (only if dropdown is true)",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Re={title:"Foundations/Label",component:a,argTypes:{size:{control:"select",options:["large","default","small","x-small","2x-small"]},weight:{control:"select",options:["bold","medium","light","thin"]},font:{control:"select",options:["primary","secondary"]},align:{control:"select",options:["left","centre","right"]},leadingIcon:{control:"select",options:["Person","Mail","Settings","None"],mapping:{Person:ue,Mail:Te,Settings:Se,None:null}},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},dropdown:{control:"boolean"},showSplit:{control:"boolean"}},decorators:[t=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(t,{})})]},i=({weight:t})=>{const s=["large","default","small","x-small","2x-small"],y=["left","centre","right"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-40px)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("h2",{style:{margin:0,textTransform:"uppercase",letterSpacing:"var(--global-spacing-sizing-1px)"},children:[t," weight variants"]}),e.jsx("div",{style:{height:"var(--global-spacing-stroke-2px)",flexGrow:1,backgroundColor:"var(--global-color-neutral-gray-200)"}})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"1000px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:w,children:"Size"}),y.map(l=>e.jsxs(_.Fragment,{children:[e.jsx("th",{style:w,children:l}),e.jsxs("th",{style:w,children:[l," + Dropdown"]})]},l))]})}),e.jsx("tbody",{children:s.map(l=>e.jsxs("tr",{style:{borderBottom:"var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-100)"},children:[e.jsx("td",{style:{...z,fontWeight:"var(--global-type-weight-bold)",color:"var(--global-color-neutral-gray-600)",width:"100px"},children:l}),y.map(p=>e.jsxs(_.Fragment,{children:[e.jsx("td",{style:z,children:e.jsx(a,{size:l,weight:t,align:p,dropdown:!1,children:"Label"})}),e.jsx("td",{style:z,children:e.jsx(a,{size:l,weight:t,align:p,dropdown:!0,children:"Label"})})]},p))]},l))})]})})]})},w={textAlign:"left",padding:"var(--global-spacing-sizing-12px)",color:"var(--global-color-neutral-gray-400)",fontSize:"var(--global-type-size-primary-label-xs)",textTransform:"uppercase",borderBottom:"var(--global-spacing-stroke-2px) solid var(--global-color-neutral-gray-200)"},z={padding:"var(--global-spacing-sizing-16px) var(--global-spacing-sizing-12px)"},m={args:{children:"Label",size:"default",weight:"bold",align:"left",dropdown:!1,showTrailingIcon:!0}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{size:"large",children:"Large Label"}),e.jsx(a,{size:"default",children:"Default Label"}),e.jsx(a,{size:"small",children:"Small Label"}),e.jsx(a,{size:"x-small",children:"X-Small Label"}),e.jsx(a,{size:"2x-small",children:"2X-Small Label"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{weight:"bold",children:"Bold Weight"}),e.jsx(a,{weight:"medium",children:"Medium Weight"}),e.jsx(a,{weight:"light",children:"Light Weight"}),e.jsx(a,{weight:"thin",children:"Thin Weight"})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",width:"400px",border:"var(--global-spacing-stroke-1px) dashed var(--global-color-neutral-gray-200)",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Left"}),e.jsx(a,{align:"left",children:"Left Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Centre"}),e.jsx(a,{align:"centre",children:"Centre Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Right"}),e.jsx(a,{align:"right",children:"Right Aligned"})]})]})},n={name:"Systematic: Bold (30 variants)",render:()=>e.jsx(i,{weight:"bold"})},o={name:"Systematic: Medium (30 variants)",render:()=>e.jsx(i,{weight:"medium"})},d={name:"Systematic: Light (30 variants)",render:()=>e.jsx(i,{weight:"light"})},c={name:"Systematic: Thin (30 variants)",render:()=>e.jsx(i,{weight:"thin"})},g={name:"Full Matrix (120 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-80px)"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--global-spacing-sizing-20px)"},children:[e.jsx("h1",{style:{margin:0},children:"Label Component Variant Matrix"}),e.jsx("p",{style:{color:"var(--global-color-neutral-gray-600)"},children:"5 Sizes × 4 Weights × 3 Alignments × 2 Dropdown States = 120 Variants"})]}),e.jsx(i,{weight:"bold"}),e.jsx(i,{weight:"medium"}),e.jsx(i,{weight:"light"}),e.jsx(i,{weight:"thin"})]})},x={args:{dropdown:!0}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-40px)"},children:[e.jsxs("div",{"data-theme":"penta",style:{padding:"var(--global-spacing-sizing-20px)",border:"var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-8px)"},children:[e.jsx("h3",{style:{marginTop:0,color:"var(--global-color-neutral-gray-400)",fontSize:"var(--global-type-size-primary-label-xs)"},children:"PENTA BRAND (Default)"}),e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-20px)",alignItems:"center"},children:[e.jsx(a,{size:"large",weight:"bold",children:"Large Bold"}),e.jsx(a,{size:"default",weight:"medium",dropdown:!0,children:"Dropdown"}),e.jsx(a,{size:"small",weight:"light",children:"Small Light"})]})]}),e.jsxs("div",{"data-theme":"horizon",style:{padding:"var(--global-spacing-sizing-20px)",border:"var(--global-spacing-stroke-1px) solid var(--brand-border-main)",borderRadius:"var(--global-spacing-radius-8px)",backgroundColor:"var(--brand-gray-light-50)"},children:[e.jsx("h3",{style:{marginTop:0,color:"var(--global-color-neutral-gray-400)",fontSize:"var(--global-type-size-primary-label-xs)"},children:"HORIZON BRAND"}),e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-20px)",alignItems:"center"},children:[e.jsx(a,{size:"large",weight:"bold",children:"Large Bold"}),e.jsx(a,{size:"default",weight:"medium",dropdown:!0,children:"Dropdown"}),e.jsx(a,{size:"small",weight:"light",children:"Small Light"})]})]})]})};var S,T,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true
  }
}`,...(D=(T=m.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var I,A,M;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(A=h.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var W,V,R;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(R=(V=u.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var B,C,N;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(N=(C=b.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var q,k,F,O,E;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Systematic: Bold (30 variants)',
  render: () => <WeightMatrix weight="bold" />
}`,...(F=(k=n.parameters)==null?void 0:k.docs)==null?void 0:F.source},description:{story:"Bold variants systematic overview",...(E=(O=n.parameters)==null?void 0:O.docs)==null?void 0:E.description}}};var P,X,$,H,U;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Systematic: Medium (30 variants)',
  render: () => <WeightMatrix weight="medium" />
}`,...($=(X=o.parameters)==null?void 0:X.docs)==null?void 0:$.source},description:{story:"Medium variants systematic overview",...(U=(H=o.parameters)==null?void 0:H.docs)==null?void 0:U.description}}};var Z,G,K,J,Q;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Systematic: Light (30 variants)',
  render: () => <WeightMatrix weight="light" />
}`,...(K=(G=d.parameters)==null?void 0:G.docs)==null?void 0:K.source},description:{story:"Light variants systematic overview",...(Q=(J=d.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};var Y,ee,ae,le,re;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Systematic: Thin (30 variants)',
  render: () => <WeightMatrix weight="thin" />
}`,...(ae=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Thin variants systematic overview",...(re=(le=c.parameters)==null?void 0:le.docs)==null?void 0:re.description}}};var ie,te,se,ne,oe;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(te=g.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"Comprehensive overview of all 120 variants",...(oe=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};var de,ce,ge;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    dropdown: true
  }
}`,...(ge=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var pe,me,he;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-40px)'
  }}>
      <div data-theme="penta" style={{
      padding: 'var(--global-spacing-sizing-20px)',
      border: 'var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-200)',
      borderRadius: 'var(--global-spacing-radius-8px)'
    }}>
        <h3 style={{
        marginTop: 0,
        color: 'var(--global-color-neutral-gray-400)',
        fontSize: 'var(--global-type-size-primary-label-xs)'
      }}>PENTA BRAND (Default)</h3>
        <div style={{
        display: 'flex',
        gap: 'var(--global-spacing-sizing-20px)',
        alignItems: 'center'
      }}>
          <Label size="large" weight="bold">Large Bold</Label>
          <Label size="default" weight="medium" dropdown>Dropdown</Label>
          <Label size="small" weight="light">Small Light</Label>
        </div>
      </div>

      <div data-theme="horizon" style={{
      padding: 'var(--global-spacing-sizing-20px)',
      border: 'var(--global-spacing-stroke-1px) solid var(--brand-border-main)',
      borderRadius: 'var(--global-spacing-radius-8px)',
      backgroundColor: 'var(--brand-gray-light-50)'
    }}>
        <h3 style={{
        marginTop: 0,
        color: 'var(--global-color-neutral-gray-400)',
        fontSize: 'var(--global-type-size-primary-label-xs)'
      }}>HORIZON BRAND</h3>
        <div style={{
        display: 'flex',
        gap: 'var(--global-spacing-sizing-20px)',
        alignItems: 'center'
      }}>
          <Label size="large" weight="bold">Large Bold</Label>
          <Label size="default" weight="medium" dropdown>Dropdown</Label>
          <Label size="small" weight="light">Small Light</Label>
        </div>
      </div>
    </div>
}`,...(he=(me=v.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};const Be=["Default","Sizes","Weights","Alignments","BoldVariants","MediumVariants","LightVariants","ThinVariants","AllVariants","WithDropdown","BrandComparison"],qe=Object.freeze(Object.defineProperty({__proto__:null,Alignments:b,AllVariants:g,BoldVariants:n,BrandComparison:v,Default:m,LightVariants:d,MediumVariants:o,Sizes:h,ThinVariants:c,Weights:u,WithDropdown:x,__namedExportsOrder:Be,default:Re},Symbol.toStringTag,{value:"Module"}));export{b as A,v as B,m as D,qe as L,h as S,u as W,x as a,g as b};
