import{j as e,r as ue}from"./iframe-7pWUlxrZ.js";import{I as i}from"./Icon-rHdBfKK3.js";import{c as v}from"./createSvgIcon-DbbiMpPQ.js";import{C as me}from"./Cancel-B-z3G6tL.js";import{K as S}from"./KeyboardArrowDown-CFMteW6-.js";import{D as l}from"./DocsTemplate-Cl7SEhzi.js";import{M as xe}from"./Mail-BEYLNNKC.js";import"./preload-helper-Dp1pzeXC.js";const he="_placeholderContainer_10w66_5",ye="_placeholderText_10w66_47",fe="_leadingIconWrapper_10w66_87",be="_trailingIconWrapper_10w66_99",ve="_tagRow_10w66_111",je="_tag_10w66_111",ze="_counterSection_10w66_134",Te="_counterValue_10w66_146",Ie="_counterMinusIcon_10w66_157",s={placeholderContainer:he,"align-left":"_align-left_10w66_32","align-centre":"_align-centre_10w66_36","align-right":"_align-right_10w66_41","type-italic":"_type-italic_10w66_47",placeholderText:ye,"size-large":"_size-large_10w66_52","size-default":"_size-default_10w66_60","size-small":"_size-small_10w66_67","size-x-small":"_size-x-small_10w66_74",leadingIconWrapper:fe,"type-default":"_type-default_10w66_94","type-tags-selected":"_type-tags-selected_10w66_95",trailingIconWrapper:be,tagRow:ve,tag:je,counterSection:ze,counterValue:Te,counterMinusIcon:Ie},we=v(e.jsx("path",{d:"m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9m0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7"})),Pe=v(e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"})),Se=v(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10H7v-2h10z"})),a=({size:r="default",align:c="left",type:n="default",text:t="Placeholder",showLeadingIcon:o=!0,leadingIcon:I=we,showTrailingIcon:te=!0,showTrailingIcon2:re=!1,tags:se=[],value:ne=0,onIncrement:ie,onDecrement:oe,className:ce=""})=>{const de=r==="x-small"&&n==="tags-selected",j=[s.placeholderContainer,s[`size-${r}`],s[`align-${c}`],s[`type-${n}`],ce].filter(Boolean).join(" ");if(de)return console.warn('Placeholder: size "x-small" does not support type "tags-selected"'),null;const w=()=>!o||!I?null:e.jsx("span",{className:s.leadingIconWrapper,children:e.jsx(i,{icon:I,size:"inherit"})}),P=()=>te?e.jsx("span",{className:s.trailingIconWrapper,children:e.jsx(i,{icon:me,size:"inherit"})}):null,pe=()=>re?e.jsx("span",{className:s.trailingIconWrapper,children:e.jsx(i,{icon:S,size:"inherit"})}):null;return n==="number"?e.jsxs("div",{className:j,children:[e.jsx("span",{className:s.placeholderText,children:t}),e.jsxs("div",{className:s.counterSection,children:[e.jsx(i,{icon:Se,size:"inherit",onClick:oe,className:s.counterMinusIcon}),e.jsx("span",{className:s.counterValue,children:ne}),e.jsx(i,{icon:Pe,size:"inherit",onClick:ie})]})]}):n==="tags-selected"?e.jsxs("div",{className:j,children:[w(),e.jsx("div",{className:s.tagRow,children:se.map((z,ge)=>e.jsxs("span",{className:s.tag,children:[z.leadingIcon&&e.jsx(i,{icon:z.leadingIcon,size:"inherit"}),e.jsx("span",{children:z.label})]},ge))}),P(),e.jsx("span",{className:s.trailingIconWrapper,children:e.jsx(i,{icon:S,size:"inherit"})})]}):e.jsxs("div",{className:j,children:[w(),e.jsx("span",{className:s.placeholderText,children:t}),P(),n==="italic"&&pe()]})};a.__docgenInfo={description:"",methods:[],displayName:"Placeholder",props:{size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"}]},description:"Display size — controls font size, line height, icon size, and gap",defaultValue:{value:"'default'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'italic' | 'tags-selected' | 'number'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'italic'"},{name:"literal",value:"'tags-selected'"},{name:"literal",value:"'number'"}]},description:"Type variant — changes the content pattern rendered",defaultValue:{value:"'default'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"Placeholder display text",defaultValue:{value:"'Placeholder'",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"MUI icon for the leading position",defaultValue:{value:"AlarmIcon",computed:!0}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the primary trailing icon",defaultValue:{value:"true",computed:!1}},showTrailingIcon2:{required:!1,tsType:{name:"boolean"},description:"Whether to show the secondary trailing icon (italic type only)",defaultValue:{value:"false",computed:!1}},tags:{required:!1,tsType:{name:"Array",elements:[{name:"PlaceholderTag"}],raw:"PlaceholderTag[]"},description:"Tags to display (tags-selected type) — not supported for x-small",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"number"},description:"Current numeric value (number type)",defaultValue:{value:"0",computed:!1}},onIncrement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when + is pressed (number type)"},onDecrement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when - is pressed (number type)"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const T=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"Placeholder",subtitle:"A form-field placeholder UI element representing the visual content inside an empty or partially-filled input"}),e.jsx(l.BodyText,{children:"The Placeholder component is a form-field placeholder UI element — it represents the visual content inside an empty or partially-filled input. It supports 4 sizes, 3 alignments, and 4 types, resulting in 45 possible variants."}),e.jsx(l.TokenTable,{title:"Design Tokens",description:"We use the following tokens to render our placeholders:",tokens:[{name:"--placeholder-text-color",description:"Primary text and icon color"},{name:"--placeholder-icon-opacity",description:"Default opacity for icons"},{name:"--placeholder-icon-opacity-alt",description:"Alternative opacity for large size leading icons"},{name:"--placeholder-counter-opacity",description:"Opacity for minus-box icon in counter"},{name:"--placeholder-font-default",description:"Font family for large, default, and small sizes"},{name:"--placeholder-font-xs",description:"Font family for x-small size"},{name:"--placeholder-counter-color",description:"Interaction color for counter controls"}]}),e.jsx(l.Section,{title:"Principles",subtitle:"Follow these common design principles by using placeholders in a cohesive, useful, and legible way."}),e.jsxs(l.Principles,{children:[e.jsx(l.PrincipleCard,{number:1,title:"Content clarity",children:"Placeholders should provide clear hints or examples of what input is expected."}),e.jsx(l.PrincipleCard,{number:2,title:"Legibility",children:"Ensure placeholder text is legible but clearly distinct from actual user input, typically achieved through reduced opacity or alternative colors."}),e.jsx(l.PrincipleCard,{number:3,title:"Alignment usage",children:"Choose alignment that matches the context of the surrounding form or input field."}),e.jsx(l.PrincipleCard,{number:4,title:"Type selection",children:"Select the appropriate type (default, italic, tags-selected, or number) based on the specific interaction pattern required by the input."})]}),e.jsx(l.Section,{title:"Using the component",subtitle:"Import the Placeholder component and pass your desired props."}),e.jsx(l.CodeBlock,{children:`import { Placeholder } from './Placeholder';
import FaceIcon from '@mui/icons-material/Face';

// Default type
const MyComponent = () => (
  <Placeholder size="default" type="default" text="Enter value..." />
);

// Tags selected type
const TagsComponent = () => (
  <Placeholder
    size="default"
    type="tags-selected"
    tags={[{ label: 'Tag 1' }, { label: 'Tag 2', leadingIcon: FaceIcon }]}
  />
);

// Number type
const CounterComponent = () => (
  <Placeholder
    size="default"
    type="number"
    text="Count"
    value={3}
    onIncrement={() => {}}
    onDecrement={() => {}}
  />
);`}),e.jsx(l.Section,{title:"Visual style",subtitle:"Placeholders support different variants based on their type. Ensure appropriate context is provided for the user."}),e.jsx(l.Subsection,{title:"Types"}),e.jsxs(l.BodyText,{children:["The Placeholder component supports four types: ",e.jsx("strong",{children:"default"}),","," ",e.jsx("strong",{children:"italic"}),", ",e.jsx("strong",{children:"tags-selected"}),", and"," ",e.jsx("strong",{children:"number"}),". Each type serves a different interaction pattern."]}),e.jsx(l.DosDonts,{doItem:{icon:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label)",opacity:.6},children:"Placeholder text..."}),description:"Use systematic sizes and types for consistent form field patterns."},dontItem:{icon:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label)"},children:"Placeholder text..."}),description:"Overwrite internal component styles directly; use the token system. Avoid creating invalid combinations (like x-small tags-selected)."}}),e.jsx(l.Section,{title:"Size & spacing",subtitle:"The Placeholder component supports multiple sizes. Use the size prop to ensure consistent scaling."}),e.jsx(l.SizeDemo,{rows:[{label:"Large",sublabel:"Use for prominent inputs",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label-lg)",opacity:.6},children:"Placeholder"})},{label:"Default",sublabel:"Use in most cases",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label)",opacity:.6},children:"Placeholder"})},{label:"Small",sublabel:"Use sparingly",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",opacity:.6},children:"Placeholder"})},{label:"X-Small",sublabel:"Use rarely",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",opacity:.6},children:"Placeholder"})}]}),e.jsx(l.BodyText,{children:"This component provides 45 possible variants: 4 sizes × 4 types × 3 alignments (minus 3 invalid x-small tags-selected combinations). See the interactive stories for a full variant matrix."}),e.jsxs(l.Section,{title:"Contribution",children:[e.jsx(l.BodyText,{children:"When proposing updates or new properties for the Placeholder component, consider the following:"}),e.jsx(l.BulletList,{ordered:!0,items:["Does the proposed change align with existing form field patterns?","Does it maintain backward compatibility with our systematic sizing approach?"]}),e.jsxs(l.BodyText,{children:["To contribute a new variation, please bring it to our"," ",e.jsx("strong",{children:"Biweekly Design System meeting"})," for review with the whole team. If you need the calendar invite forwarding, please send the"," ",e.jsx("strong",{children:"design team"})," a message on Teams."]})]}),e.jsx(l.Footer,{})]});T.__docgenInfo={description:"",methods:[],displayName:"PlaceholderDocs"};const ae=v(e.jsx("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8"})),We={title:"Foundation/Placeholder",component:a,parameters:{docs:{page:()=>e.jsx(T,{})}},argTypes:{size:{control:"select",options:["large","default","small","x-small"]},align:{control:"select",options:["left","centre","right"]},type:{control:"select",options:["default","italic","tags-selected","number"]},text:{control:"text"},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},showTrailingIcon2:{control:"boolean"}},decorators:[r=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(r,{})})]},p=r=>{const[c,n]=ue.useState(0);return e.jsx(a,{...r,type:"number",value:c,onIncrement:()=>n(t=>t+1),onDecrement:()=>n(t=>t-1)})},d={render:()=>e.jsx(T,{}),parameters:{controls:{disable:!0},actions:{disable:!0}}},g={args:{text:"Placeholder",size:"default",align:"left",type:"default",showLeadingIcon:!0,showTrailingIcon:!0}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{size:"large",text:"Large Placeholder"}),e.jsx(a,{size:"default",text:"Default Placeholder"}),e.jsx(a,{size:"small",text:"Small Placeholder"}),e.jsx(a,{size:"x-small",text:"X-Small Placeholder"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{type:"default",text:"Default Type"}),e.jsx(a,{type:"italic",text:"Italic Type",showTrailingIcon2:!0}),e.jsx(a,{type:"tags-selected",tags:[{label:"Tag 1"},{label:"Tag 2",leadingIcon:ae}]}),e.jsx(p,{text:"Number Type"})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",width:"400px",border:"var(--global-spacing-stroke-1px) dashed var(--global-color-neutral-gray-200)",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Left"}),e.jsx(a,{align:"left",text:"Left Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Centre"}),e.jsx(a,{align:"centre",text:"Centre Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Right"}),e.jsx(a,{align:"right",text:"Right Aligned"})]})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{size:"large",type:"tags-selected",tags:[{label:"React"},{label:"Vue",leadingIcon:ae}]}),e.jsx(a,{size:"default",type:"tags-selected",tags:[{label:"Design"},{label:"System",leadingIcon:xe}]}),e.jsx(a,{size:"small",type:"tags-selected",tags:[{label:"UI"},{label:"UX"}]})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(p,{text:"Counter (Large)",size:"large"}),e.jsx(p,{text:"Counter (Default)",size:"default"}),e.jsx(p,{text:"Counter (Small)",size:"small"}),e.jsx(p,{text:"Counter (X-Small)",size:"x-small"})]})},f=({type:r})=>{const c=["large","default","small","x-small"],n=["left","centre","right"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-40px)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("h2",{style:{margin:0,textTransform:"uppercase",letterSpacing:"var(--global-spacing-sizing-1px)"},children:[r," type variants"]}),e.jsx("div",{style:{height:"var(--global-spacing-stroke-2px)",flexGrow:1,backgroundColor:"var(--global-color-neutral-gray-200)"}})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"800px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:_,children:"Size"}),n.map(t=>e.jsx("th",{style:_,children:t},t))]})}),e.jsx("tbody",{children:c.map(t=>t==="x-small"&&r==="tags-selected"?null:e.jsxs("tr",{style:{borderBottom:"var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-100)"},children:[e.jsx("td",{style:{...C,fontWeight:"var(--global-type-weight-bold)",color:"var(--global-color-neutral-gray-600)",width:"100px"},children:t}),n.map(o=>e.jsx("td",{style:C,children:r==="number"?e.jsx(a,{size:t,align:o,type:r,text:"Text",value:3}):r==="tags-selected"?e.jsx(a,{size:t,align:o,type:r,tags:[{label:"Tag 1"},{label:"Tag 2"}]}):e.jsx(a,{size:t,align:o,type:r,text:"Placeholder",showTrailingIcon2:r==="italic"})},o))]},t))})]})})]})},_={textAlign:"left",padding:"var(--global-spacing-sizing-12px)",color:"var(--global-color-neutral-gray-400)",fontSize:"var(--global-type-size-primary-label-xs)",textTransform:"uppercase",borderBottom:"var(--global-spacing-stroke-2px) solid var(--global-color-neutral-gray-200)"},C={padding:"var(--global-spacing-sizing-16px) var(--global-spacing-sizing-12px)"},b={name:"Full Matrix (45 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-80px)"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--global-spacing-sizing-20px)"},children:[e.jsx("h1",{style:{margin:0},children:"Placeholder Component Variant Matrix"}),e.jsx("p",{style:{color:"var(--global-color-neutral-gray-600)"},children:"4 Sizes × 4 Types × 3 Alignments = 48 Variants (minus 3 invalid x-small tags-selected)"})]}),e.jsx(f,{type:"default"}),e.jsx(f,{type:"italic"}),e.jsx(f,{type:"tags-selected"}),e.jsx(f,{type:"number"})]})};var D,V,N,M,A;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <PlaceholderDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(N=(V=d.parameters)==null?void 0:V.docs)==null?void 0:N.source},description:{story:"Full branded documentation page for the Placeholder component.",...(A=(M=d.parameters)==null?void 0:M.docs)==null?void 0:A.description}}};var k,F,W;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: 'Placeholder',
    size: 'default',
    align: 'left',
    type: 'default',
    showLeadingIcon: true,
    showTrailingIcon: true
  }
}`,...(W=(F=g.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var L,B,q;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(q=(B=u.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var U,R,E;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var X,H,O;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(O=(H=x.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var $,K,G;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(K=h.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Q,Y;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,le;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(le=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};const Le=["Documentation","Default","Sizes","Types","Alignments","TagsSelected","NumberCounter","AllVariants"];export{x as Alignments,b as AllVariants,g as Default,d as Documentation,y as NumberCounter,u as Sizes,h as TagsSelected,m as Types,Le as __namedExportsOrder,We as default};
