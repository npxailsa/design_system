import{j as e,r as we}from"./iframe-IGtK3W5w.js";import{I as o}from"./Icon-CMUfYU4p.js";import{c as I}from"./createSvgIcon-DSQKAc7b.js";import{C as Se}from"./Cancel-DWxqCV4i.js";import{K as D}from"./KeyboardArrowDown-ZDEO6ZBF.js";import{D as a}from"./DocsTemplate-CBWx9qNz.js";import{M as Pe}from"./Mail-i3SyYHoe.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-BRupinb1.js";import"./memoTheme-gJInF0im.js";const Ce="_placeholderContainer_10w66_5",_e="_placeholderText_10w66_47",De="_leadingIconWrapper_10w66_87",Ae="_trailingIconWrapper_10w66_99",ke="_tagRow_10w66_111",Me="_tag_10w66_111",Ne="_counterSection_10w66_134",Be="_counterValue_10w66_146",Ve="_counterMinusIcon_10w66_157",n={placeholderContainer:Ce,"align-left":"_align-left_10w66_32","align-centre":"_align-centre_10w66_36","align-right":"_align-right_10w66_41","type-italic":"_type-italic_10w66_47",placeholderText:_e,"size-large":"_size-large_10w66_52","size-default":"_size-default_10w66_60","size-small":"_size-small_10w66_67","size-x-small":"_size-x-small_10w66_74",leadingIconWrapper:De,"type-default":"_type-default_10w66_94","type-tags-selected":"_type-tags-selected_10w66_95",trailingIconWrapper:Ae,tagRow:ke,tag:Me,counterSection:Ne,counterValue:Be,counterMinusIcon:Ve},Fe=I(e.jsx("path",{d:"m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9m0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7"})),Le=I(e.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"})),We=I(e.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10H7v-2h10z"})),l=({size:r="default",align:c="left",type:s="default",text:t="Placeholder",showLeadingIcon:i=!0,leadingIcon:P=Fe,showTrailingIcon:xe=!0,showTrailingIcon2:he=!1,tags:ye=[],value:fe=0,onIncrement:be,onDecrement:ve,className:je=""})=>{const ze=r==="x-small"&&s==="tags-selected",T=[n.placeholderContainer,n[`size-${r}`],n[`align-${c}`],n[`type-${s}`],je].filter(Boolean).join(" ");if(ze)return console.warn('Placeholder: size "x-small" does not support type "tags-selected"'),null;const C=()=>!i||!P?null:e.jsx("span",{className:n.leadingIconWrapper,children:e.jsx(o,{icon:P,size:"inherit"})}),_=()=>xe?e.jsx("span",{className:n.trailingIconWrapper,children:e.jsx(o,{icon:Se,size:"inherit"})}):null,Ie=()=>he?e.jsx("span",{className:n.trailingIconWrapper,children:e.jsx(o,{icon:D,size:"inherit"})}):null;return s==="number"?e.jsxs("div",{className:T,children:[e.jsx("span",{className:n.placeholderText,children:t}),e.jsxs("div",{className:n.counterSection,children:[e.jsx(o,{icon:We,size:"inherit",onClick:ve,className:n.counterMinusIcon}),e.jsx("span",{className:n.counterValue,children:fe}),e.jsx(o,{icon:Le,size:"inherit",onClick:be})]})]}):s==="tags-selected"?e.jsxs("div",{className:T,children:[C(),e.jsx("div",{className:n.tagRow,children:ye.map((w,Te)=>e.jsxs("span",{className:n.tag,children:[w.leadingIcon&&e.jsx(o,{icon:w.leadingIcon,size:"inherit"}),e.jsx("span",{children:w.label})]},Te))}),_(),e.jsx("span",{className:n.trailingIconWrapper,children:e.jsx(o,{icon:D,size:"inherit"})})]}):e.jsxs("div",{className:T,children:[C(),e.jsx("span",{className:n.placeholderText,children:t}),_(),s==="italic"&&Ie()]})};l.__docgenInfo={description:"",methods:[],displayName:"Placeholder",props:{size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"}]},description:"Display size — controls font size, line height, icon size, and gap",defaultValue:{value:"'default'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'italic' | 'tags-selected' | 'number'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'italic'"},{name:"literal",value:"'tags-selected'"},{name:"literal",value:"'number'"}]},description:"Type variant — changes the content pattern rendered",defaultValue:{value:"'default'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"Placeholder display text",defaultValue:{value:"'Placeholder'",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"MUI icon for the leading position",defaultValue:{value:"AlarmIcon",computed:!0}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the primary trailing icon",defaultValue:{value:"true",computed:!1}},showTrailingIcon2:{required:!1,tsType:{name:"boolean"},description:"Whether to show the secondary trailing icon (italic type only)",defaultValue:{value:"false",computed:!1}},tags:{required:!1,tsType:{name:"Array",elements:[{name:"PlaceholderTag"}],raw:"PlaceholderTag[]"},description:"Tags to display (tags-selected type) — not supported for x-small",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"number"},description:"Current numeric value (number type)",defaultValue:{value:"0",computed:!1}},onIncrement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when + is pressed (number type)"},onDecrement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when - is pressed (number type)"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const S=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Placeholder",subtitle:"A form-field placeholder UI element representing the visual content inside an empty or partially-filled input"}),e.jsx(a.BodyText,{children:"The Placeholder component is a form-field placeholder UI element — it represents the visual content inside an empty or partially-filled input. It supports 4 sizes, 3 alignments, and 4 types, resulting in 45 possible variants."}),e.jsxs(a.Section,{title:"MUI Foundation",children:[e.jsxs(a.BodyText,{children:["The Placeholder component has ",e.jsx("strong",{children:"no MUI layout base"})," — it renders as plain HTML elements. It uses MUI icons from ",e.jsx("code",{children:"@mui/icons-material"})," for its icon slots: ",e.jsx("strong",{children:"AlarmIcon"})," (clock), ",e.jsx("strong",{children:"CancelIcon"})," (×),"," ",e.jsx("strong",{children:"AddBoxIcon"})," (+), ",e.jsx("strong",{children:"IndeterminateCheckBoxIcon"})," (−), and ",e.jsx("strong",{children:"KeyboardArrowDownIcon"})," (chevron). Pass any MUI SvgIcon via the"," ",e.jsx("code",{children:"icon"})," prop to customise the leading icon. All sizing, colour, and opacity values are driven by CSS Modules and the ",e.jsx("code",{children:"--placeholder-*"})," token family."]}),e.jsx(a.CodeBlock,{children:`// MUI icon imports used in Placeholder
import AlarmIcon from '@mui/icons-material/Alarm';
import CancelIcon from '@mui/icons-material/Cancel';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Custom icon example:
import FaceIcon from '@mui/icons-material/Face';
<Placeholder icon={FaceIcon} size="default" label="No data" />`})]}),e.jsx(a.TokenTable,{title:"Design Tokens",description:"We use the following tokens to render our placeholders:",tokens:[{name:"--placeholder-text-color",description:"Primary text and icon color"},{name:"--placeholder-icon-opacity",description:"Default opacity for icons"},{name:"--placeholder-icon-opacity-alt",description:"Alternative opacity for large size leading icons"},{name:"--placeholder-counter-opacity",description:"Opacity for minus-box icon in counter"},{name:"--placeholder-font-default",description:"Font family for large, default, and small sizes"},{name:"--placeholder-font-xs",description:"Font family for x-small size"},{name:"--placeholder-counter-color",description:"Interaction color for counter controls"}]}),e.jsx(a.Section,{title:"Principles",subtitle:"Follow these common design principles by using placeholders in a cohesive, useful, and legible way."}),e.jsxs(a.Principles,{children:[e.jsx(a.PrincipleCard,{number:1,title:"Content clarity",children:"Placeholders should provide clear hints or examples of what input is expected."}),e.jsx(a.PrincipleCard,{number:2,title:"Legibility",children:"Ensure placeholder text is legible but clearly distinct from actual user input, typically achieved through reduced opacity or alternative colors."}),e.jsx(a.PrincipleCard,{number:3,title:"Alignment usage",children:"Choose alignment that matches the context of the surrounding form or input field."}),e.jsx(a.PrincipleCard,{number:4,title:"Type selection",children:"Select the appropriate type (default, italic, tags-selected, or number) based on the specific interaction pattern required by the input."})]}),e.jsx(a.Section,{title:"Using the component",subtitle:"Import the Placeholder component and pass your desired props."}),e.jsx(a.CodeBlock,{children:`import { Placeholder } from './Placeholder';
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
);`}),e.jsx(a.Section,{title:"Visual style",subtitle:"Placeholders support different variants based on their type. Ensure appropriate context is provided for the user."}),e.jsx(a.Subsection,{title:"Types"}),e.jsxs(a.BodyText,{children:["The Placeholder component supports four types: ",e.jsx("strong",{children:"default"}),","," ",e.jsx("strong",{children:"italic"}),", ",e.jsx("strong",{children:"tags-selected"}),", and"," ",e.jsx("strong",{children:"number"}),". Each type serves a different interaction pattern."]}),e.jsx(a.DosDonts,{doItem:{icon:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label)",opacity:.6},children:"Placeholder text..."}),description:"Use systematic sizes and types for consistent form field patterns."},dontItem:{icon:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label)"},children:"Placeholder text..."}),description:"Overwrite internal component styles directly; use the token system. Avoid creating invalid combinations (like x-small tags-selected)."}}),e.jsx(a.Section,{title:"Size & spacing",subtitle:"The Placeholder component supports multiple sizes. Use the size prop to ensure consistent scaling."}),e.jsx(a.SizeDemo,{rows:[{label:"Large",sublabel:"Use for prominent inputs",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label-lg)",opacity:.6},children:"Placeholder"})},{label:"Default",sublabel:"Use in most cases",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label)",opacity:.6},children:"Placeholder"})},{label:"Small",sublabel:"Use sparingly",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",opacity:.6},children:"Placeholder"})},{label:"X-Small",sublabel:"Use rarely",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",opacity:.6},children:"Placeholder"})}]}),e.jsx(a.BodyText,{children:"This component provides 45 possible variants: 4 sizes × 4 types × 3 alignments (minus 3 invalid x-small tags-selected combinations). See the interactive stories for a full variant matrix."}),e.jsxs(a.Section,{title:"Contribution",children:[e.jsx(a.BodyText,{children:"When proposing updates or new properties for the Placeholder component, consider the following:"}),e.jsx(a.BulletList,{ordered:!0,items:["Does the proposed change align with existing form field patterns?","Does it maintain backward compatibility with our systematic sizing approach?"]}),e.jsxs(a.BodyText,{children:["To contribute a new variation, please bring it to our"," ",e.jsx("strong",{children:"Biweekly Design System meeting"})," for review with the whole team. If you need the calendar invite forwarding, please send the"," ",e.jsx("strong",{children:"design team"})," a message on Teams."]})]}),e.jsx(a.Footer,{})]});S.__docgenInfo={description:"",methods:[],displayName:"PlaceholderDocs"};const me=I(e.jsx("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8"})),Qe={title:"Foundation/Placeholder",component:l,parameters:{docs:{page:()=>e.jsx(S,{})}},argTypes:{size:{control:"select",options:["large","default","small","x-small"]},align:{control:"select",options:["left","centre","right"]},type:{control:"select",options:["default","italic","tags-selected","number"]},text:{control:"text"},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},showTrailingIcon2:{control:"boolean"}},decorators:[r=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(r,{})})]},p=r=>{const[c,s]=we.useState(0);return e.jsx(l,{...r,type:"number",value:c,onIncrement:()=>s(t=>t+1),onDecrement:()=>s(t=>t-1)})},d={name:"Documentation",render:()=>e.jsx(S,{}),parameters:{controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},u={name:"Playground",args:{text:"Placeholder",size:"default",align:"left",type:"default",showLeadingIcon:!0,showTrailingIcon:!0}},g={args:{text:"Placeholder",size:"default",align:"left",type:"default",showLeadingIcon:!0,showTrailingIcon:!0}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(l,{size:"large",text:"Large Placeholder"}),e.jsx(l,{size:"default",text:"Default Placeholder"}),e.jsx(l,{size:"small",text:"Small Placeholder"}),e.jsx(l,{size:"x-small",text:"X-Small Placeholder"})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(l,{type:"default",text:"Default Type"}),e.jsx(l,{type:"italic",text:"Italic Type",showTrailingIcon2:!0}),e.jsx(l,{type:"tags-selected",tags:[{label:"Tag 1"},{label:"Tag 2",leadingIcon:me}]}),e.jsx(p,{text:"Number Type"})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",width:"400px",border:"var(--global-spacing-stroke-1px) dashed var(--global-color-neutral-gray-200)",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Left"}),e.jsx(l,{align:"left",text:"Left Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Centre"}),e.jsx(l,{align:"centre",text:"Centre Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Right"}),e.jsx(l,{align:"right",text:"Right Aligned"})]})]})},y={name:"Status / Tags Selected",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(l,{size:"large",type:"tags-selected",tags:[{label:"React"},{label:"Vue",leadingIcon:me}]}),e.jsx(l,{size:"default",type:"tags-selected",tags:[{label:"Design"},{label:"System",leadingIcon:Pe}]}),e.jsx(l,{size:"small",type:"tags-selected",tags:[{label:"UI"},{label:"UX"}]})]})},f={name:"Status / Number Counter",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(p,{text:"Counter (Large)",size:"large"}),e.jsx(p,{text:"Counter (Default)",size:"default"}),e.jsx(p,{text:"Counter (Small)",size:"small"}),e.jsx(p,{text:"Counter (X-Small)",size:"x-small"})]})},b=({type:r})=>{const c=["large","default","small","x-small"],s=["left","centre","right"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-40px)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("h2",{style:{margin:0,textTransform:"uppercase",letterSpacing:"var(--global-spacing-sizing-1px)"},children:[r," type variants"]}),e.jsx("div",{style:{height:"var(--global-spacing-stroke-2px)",flexGrow:1,backgroundColor:"var(--global-color-neutral-gray-200)"}})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"800px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:A,children:"Size"}),s.map(t=>e.jsx("th",{style:A,children:t},t))]})}),e.jsx("tbody",{children:c.map(t=>t==="x-small"&&r==="tags-selected"?null:e.jsxs("tr",{style:{borderBottom:"var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-100)"},children:[e.jsx("td",{style:{...k,fontWeight:"var(--global-type-weight-bold)",color:"var(--global-color-neutral-gray-600)",width:"100px"},children:t}),s.map(i=>e.jsx("td",{style:k,children:r==="number"?e.jsx(l,{size:t,align:i,type:r,text:"Text",value:3}):r==="tags-selected"?e.jsx(l,{size:t,align:i,type:r,tags:[{label:"Tag 1"},{label:"Tag 2"}]}):e.jsx(l,{size:t,align:i,type:r,text:"Placeholder",showTrailingIcon2:r==="italic"})},i))]},t))})]})})]})},A={textAlign:"left",padding:"var(--global-spacing-sizing-12px)",color:"var(--global-color-neutral-gray-400)",fontSize:"var(--global-type-size-primary-label-xs)",textTransform:"uppercase",borderBottom:"var(--global-spacing-stroke-2px) solid var(--global-color-neutral-gray-200)"},k={padding:"var(--global-spacing-sizing-16px) var(--global-spacing-sizing-12px)"},v={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:"480px"},children:[e.jsx(l,{type:"default",text:"Default type",showLeadingIcon:!0,showTrailingIcon:!0}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"--placeholder-color / --placeholder-font-size-default"}),e.jsx(l,{type:"italic",text:"Italic type",showTrailingIcon2:!0}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"--placeholder-italic-color"})]}),parameters:{controls:{disable:!0}}},j={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px",maxWidth:"400px"},children:[e.jsx(l,{type:"default",text:"Default state",showLeadingIcon:!0}),e.jsx(l,{type:"italic",text:"Italic state"}),e.jsx(l,{type:"tags-selected",tags:[{label:"Tag 1"},{label:"Tag 2"}]})]}),parameters:{controls:{disable:!0}}},z={name:"Full Design Matrix (45 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-80px)"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--global-spacing-sizing-20px)"},children:[e.jsx("h1",{style:{margin:0},children:"Placeholder Component Variant Matrix"}),e.jsx("p",{style:{color:"var(--global-color-neutral-gray-600)"},children:"4 Sizes × 4 Types × 3 Alignments = 48 Variants (minus 3 invalid x-small tags-selected)"})]}),e.jsx(b,{type:"default"}),e.jsx(b,{type:"italic"}),e.jsx(b,{type:"tags-selected"}),e.jsx(b,{type:"number"})]})};var M,N,B,V,F;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <PlaceholderDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(B=(N=d.parameters)==null?void 0:N.docs)==null?void 0:B.source},description:{story:"Full branded documentation page for the Placeholder component.",...(F=(V=d.parameters)==null?void 0:V.docs)==null?void 0:F.description}}};var L,W,U;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    text: 'Placeholder',
    size: 'default',
    align: 'left',
    type: 'default',
    showLeadingIcon: true,
    showTrailingIcon: true
  }
}`,...(U=(W=u.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};var R,q,E;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    text: 'Placeholder',
    size: 'default',
    align: 'left',
    type: 'default',
    showLeadingIcon: true,
    showTrailingIcon: true
  }
}`,...(E=(q=g.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var X,H,K;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(K=(H=m.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var O,$,G;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=($=x.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,Q,Y;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ae;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Status / Tags Selected',
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
}`,...(ae=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var le,te,re;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Status / Number Counter',
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
}`,...(re=(te=f.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,se,oe;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    maxWidth: '480px'
  }}>
      <Placeholder type="default" text="Default type" showLeadingIcon showTrailingIcon />
      <code style={{
      fontSize: '10px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '4px 8px',
      borderRadius: '4px'
    }}>--placeholder-color / --placeholder-font-size-default</code>
      <Placeholder type="italic" text="Italic type" showTrailingIcon2 />
      <code style={{
      fontSize: '10px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '4px 8px',
      borderRadius: '4px'
    }}>--placeholder-italic-color</code>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ce,de;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px',
    maxWidth: '400px'
  }}>
      <Placeholder type="default" text="Default state" showLeadingIcon />
      <Placeholder type="italic" text="Italic state" />
      <Placeholder type="tags-selected" tags={[{
      label: 'Tag 1'
    }, {
      label: 'Tag 2'
    }]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(ce=j.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,ue,ge;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Full Design Matrix (45 variants)',
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
}`,...(ge=(ue=z.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};const Ye=["Documentation","Playground","Default","Sizes","Types","Alignments","StatusTagsSelected","StatusNumberCounter","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{h as Alignments,j as AllInteractiveStates,v as ComponentBreakdown,g as Default,d as Documentation,z as FullDesignMatrix,u as Playground,m as Sizes,f as StatusNumberCounter,y as StatusTagsSelected,x as Types,Ye as __namedExportsOrder,Qe as default};
