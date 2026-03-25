import{j as e,r as se}from"./iframe-DUjEMit0.js";import{c as f,I as n}from"./createSvgIcon-CxELKLH0.js";import{C as ne}from"./Cancel-Bz75-0BS.js";import{K as T}from"./KeyboardArrowDown-C9WbfejU.js";import{M as ie}from"./Mail-BElPappD.js";const oe="_placeholderContainer_10w66_5",ce="_placeholderText_10w66_47",de="_leadingIconWrapper_10w66_87",pe="_trailingIconWrapper_10w66_99",ge="_tagRow_10w66_111",ue="_tag_10w66_111",me="_counterSection_10w66_134",xe="_counterValue_10w66_146",he="_counterMinusIcon_10w66_157",r={placeholderContainer:oe,"align-left":"_align-left_10w66_32","align-centre":"_align-centre_10w66_36","align-right":"_align-right_10w66_41","type-italic":"_type-italic_10w66_47",placeholderText:ce,"size-large":"_size-large_10w66_52","size-default":"_size-default_10w66_60","size-small":"_size-small_10w66_67","size-x-small":"_size-x-small_10w66_74",leadingIconWrapper:de,"type-default":"_type-default_10w66_94","type-tags-selected":"_type-tags-selected_10w66_95",trailingIconWrapper:pe,tagRow:ge,tag:ue,counterSection:me,counterValue:xe,counterMinusIcon:he},ye=f(e.jsx("path",{d:"m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9m0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7"})),fe=f(e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"})),ve=f(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10H7v-2h10z"})),a=({size:t="default",align:o="left",type:s="default",text:l="Placeholder",showLeadingIcon:i=!0,leadingIcon:z=ye,showTrailingIcon:G=!0,showTrailingIcon2:J=!1,tags:Q=[],value:Y=0,onIncrement:Z,onDecrement:ee,className:ae=""})=>{const le=t==="x-small"&&s==="tags-selected",v=[r.placeholderContainer,r[`size-${t}`],r[`align-${o}`],r[`type-${s}`],ae].filter(Boolean).join(" ");if(le)return console.warn('Placeholder: size "x-small" does not support type "tags-selected"'),null;const j=()=>!i||!z?null:e.jsx("span",{className:r.leadingIconWrapper,children:e.jsx(n,{icon:z,size:"inherit"})}),I=()=>G?e.jsx("span",{className:r.trailingIconWrapper,children:e.jsx(n,{icon:ne,size:"inherit"})}):null,te=()=>J?e.jsx("span",{className:r.trailingIconWrapper,children:e.jsx(n,{icon:T,size:"inherit"})}):null;return s==="number"?e.jsxs("div",{className:v,children:[e.jsx("span",{className:r.placeholderText,children:l}),e.jsxs("div",{className:r.counterSection,children:[e.jsx(n,{icon:ve,size:"inherit",onClick:ee,className:r.counterMinusIcon}),e.jsx("span",{className:r.counterValue,children:Y}),e.jsx(n,{icon:fe,size:"inherit",onClick:Z})]})]}):s==="tags-selected"?e.jsxs("div",{className:v,children:[j(),e.jsx("div",{className:r.tagRow,children:Q.map((b,re)=>e.jsxs("span",{className:r.tag,children:[b.leadingIcon&&e.jsx(n,{icon:b.leadingIcon,size:"inherit"}),e.jsx("span",{children:b.label})]},re))}),I(),e.jsx("span",{className:r.trailingIconWrapper,children:e.jsx(n,{icon:T,size:"inherit"})})]}):e.jsxs("div",{className:v,children:[j(),e.jsx("span",{className:r.placeholderText,children:l}),I(),s==="italic"&&te()]})};a.__docgenInfo={description:"",methods:[],displayName:"Placeholder",props:{size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"}]},description:"Display size — controls font size, line height, icon size, and gap",defaultValue:{value:"'default'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'italic' | 'tags-selected' | 'number'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'italic'"},{name:"literal",value:"'tags-selected'"},{name:"literal",value:"'number'"}]},description:"Type variant — changes the content pattern rendered",defaultValue:{value:"'default'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"Placeholder display text",defaultValue:{value:"'Placeholder'",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"MUI icon for the leading position",defaultValue:{value:"AlarmIcon",computed:!0}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the primary trailing icon",defaultValue:{value:"true",computed:!1}},showTrailingIcon2:{required:!1,tsType:{name:"boolean"},description:"Whether to show the secondary trailing icon (italic type only)",defaultValue:{value:"false",computed:!1}},tags:{required:!1,tsType:{name:"Array",elements:[{name:"PlaceholderTag"}],raw:"PlaceholderTag[]"},description:"Tags to display (tags-selected type) — not supported for x-small",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"number"},description:"Current numeric value (number type)",defaultValue:{value:"0",computed:!1}},onIncrement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when + is pressed (number type)"},onDecrement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when - is pressed (number type)"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const K=f(e.jsx("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8"})),be={title:"Foundations/Placeholder",component:a,argTypes:{size:{control:"select",options:["large","default","small","x-small"]},align:{control:"select",options:["left","centre","right"]},type:{control:"select",options:["default","italic","tags-selected","number"]},text:{control:"text"},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},showTrailingIcon2:{control:"boolean"}},decorators:[t=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(t,{})})]},c=t=>{const[o,s]=se.useState(0);return e.jsx(a,{...t,type:"number",value:o,onIncrement:()=>s(l=>l+1),onDecrement:()=>s(l=>l-1)})},d={args:{text:"Placeholder",size:"default",align:"left",type:"default",showLeadingIcon:!0,showTrailingIcon:!0}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{size:"large",text:"Large Placeholder"}),e.jsx(a,{size:"default",text:"Default Placeholder"}),e.jsx(a,{size:"small",text:"Small Placeholder"}),e.jsx(a,{size:"x-small",text:"X-Small Placeholder"})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{type:"default",text:"Default Type"}),e.jsx(a,{type:"italic",text:"Italic Type",showTrailingIcon2:!0}),e.jsx(a,{type:"tags-selected",tags:[{label:"Tag 1"},{label:"Tag 2",leadingIcon:K}]}),e.jsx(c,{text:"Number Type"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",width:"400px",border:"var(--global-spacing-stroke-1px) dashed var(--global-color-neutral-gray-200)",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Left"}),e.jsx(a,{align:"left",text:"Left Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Centre"}),e.jsx(a,{align:"centre",text:"Centre Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Right"}),e.jsx(a,{align:"right",text:"Right Aligned"})]})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{size:"large",type:"tags-selected",tags:[{label:"React"},{label:"Vue",leadingIcon:K}]}),e.jsx(a,{size:"default",type:"tags-selected",tags:[{label:"Design"},{label:"System",leadingIcon:ie}]}),e.jsx(a,{size:"small",type:"tags-selected",tags:[{label:"UI"},{label:"UX"}]})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(c,{text:"Counter (Large)",size:"large"}),e.jsx(c,{text:"Counter (Default)",size:"default"}),e.jsx(c,{text:"Counter (Small)",size:"small"}),e.jsx(c,{text:"Counter (X-Small)",size:"x-small"})]})},y=({type:t})=>{const o=["large","default","small","x-small"],s=["left","centre","right"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-40px)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("h2",{style:{margin:0,textTransform:"uppercase",letterSpacing:"var(--global-spacing-sizing-1px)"},children:[t," type variants"]}),e.jsx("div",{style:{height:"var(--global-spacing-stroke-2px)",flexGrow:1,backgroundColor:"var(--global-color-neutral-gray-200)"}})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"800px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:_,children:"Size"}),s.map(l=>e.jsx("th",{style:_,children:l},l))]})}),e.jsx("tbody",{children:o.map(l=>l==="x-small"&&t==="tags-selected"?null:e.jsxs("tr",{style:{borderBottom:"var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-100)"},children:[e.jsx("td",{style:{...w,fontWeight:"var(--global-type-weight-bold)",color:"var(--global-color-neutral-gray-600)",width:"100px"},children:l}),s.map(i=>e.jsx("td",{style:w,children:t==="number"?e.jsx(a,{size:l,align:i,type:t,text:"Text",value:3}):t==="tags-selected"?e.jsx(a,{size:l,align:i,type:t,tags:[{label:"Tag 1"},{label:"Tag 2"}]}):e.jsx(a,{size:l,align:i,type:t,text:"Placeholder",showTrailingIcon2:t==="italic"})},i))]},l))})]})})]})},_={textAlign:"left",padding:"var(--global-spacing-sizing-12px)",color:"var(--global-color-neutral-gray-400)",fontSize:"var(--global-type-size-primary-label-xs)",textTransform:"uppercase",borderBottom:"var(--global-spacing-stroke-2px) solid var(--global-color-neutral-gray-200)"},w={padding:"var(--global-spacing-sizing-16px) var(--global-spacing-sizing-12px)"},h={name:"Full Matrix (45 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-80px)"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--global-spacing-sizing-20px)"},children:[e.jsx("h1",{style:{margin:0},children:"Placeholder Component Variant Matrix"}),e.jsx("p",{style:{color:"var(--global-color-neutral-gray-600)"},children:"4 Sizes × 4 Types × 3 Alignments = 48 Variants (minus 3 invalid x-small tags-selected)"})]}),e.jsx(y,{type:"default"}),e.jsx(y,{type:"italic"}),e.jsx(y,{type:"tags-selected"}),e.jsx(y,{type:"number"})]})};var S,C,P;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: 'Placeholder',
    size: 'default',
    align: 'left',
    type: 'default',
    showLeadingIcon: true,
    showTrailingIcon: true
  }
}`,...(P=(C=d.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var V,D,N;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)'
  }}>
      <Placeholder size="large" text="Large Placeholder" />
      <Placeholder size="default" text="Default Placeholder" />
      <Placeholder size="small" text="Small Placeholder" />
      <Placeholder size="x-small" text="X-Small Placeholder" />
    </div>
}`,...(N=(D=p.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var M,A,W;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)'
  }}>
      <Placeholder type="default" text="Default Type" />
      <Placeholder type="italic" text="Italic Type" showTrailingIcon2={true} />
      <Placeholder type="tags-selected" tags={[{
      label: 'Tag 1'
    }, {
      label: 'Tag 2',
      leadingIcon: FaceIcon
    }]} />
      <InteractiveNumberCounter text="Number Type" />
    </div>
}`,...(W=(A=g.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var q,L,R;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
        <Placeholder align="left" text="Left Aligned" />
      </div>
      <div>
        <span style={{
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-400)'
      }}>Centre</span>
        <Placeholder align="centre" text="Centre Aligned" />
      </div>
      <div>
        <span style={{
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-400)'
      }}>Right</span>
        <Placeholder align="right" text="Right Aligned" />
      </div>
    </div>
}`,...(R=(L=u.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var k,B,X;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)'
  }}>
      <Placeholder size="large" type="tags-selected" tags={[{
      label: 'React'
    }, {
      label: 'Vue',
      leadingIcon: FaceIcon
    }]} />
      <Placeholder size="default" type="tags-selected" tags={[{
      label: 'Design'
    }, {
      label: 'System',
      leadingIcon: MailIcon
    }]} />
      <Placeholder size="small" type="tags-selected" tags={[{
      label: 'UI'
    }, {
      label: 'UX'
    }]} />
    </div>
}`,...(X=(B=m.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};var F,E,H;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)'
  }}>
      <InteractiveNumberCounter text="Counter (Large)" size="large" />
      <InteractiveNumberCounter text="Counter (Default)" size="default" />
      <InteractiveNumberCounter text="Counter (Small)" size="small" />
      <InteractiveNumberCounter text="Counter (X-Small)" size="x-small" />
    </div>
}`,...(H=(E=x.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var U,O,$;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Full Matrix (45 variants)',
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
      }}>Placeholder Component Variant Matrix</h1>
        <p style={{
        color: 'var(--global-color-neutral-gray-600)'
      }}>4 Sizes × 4 Types × 3 Alignments = 48 Variants (minus 3 invalid x-small tags-selected)</p>
      </div>
      <TypeMatrix type="default" />
      <TypeMatrix type="italic" />
      <TypeMatrix type="tags-selected" />
      <TypeMatrix type="number" />
    </div>
}`,...($=(O=h.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};const ze=["Default","Sizes","Types","Alignments","TagsSelected","NumberCounter","AllVariants"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Alignments:u,AllVariants:h,Default:d,NumberCounter:x,Sizes:p,TagsSelected:m,Types:g,__namedExportsOrder:ze,default:be},Symbol.toStringTag,{value:"Module"}));export{u as A,x as N,Ce as P,p as S,g as T,m as a,h as b};
