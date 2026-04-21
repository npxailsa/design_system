import{j as e,r as Te}from"./vendor-react-DbhTI_a3.js";import{I as o}from"./Icon-Bg45_O6-.js";import{ar as we,as as Se,aq as _,at as Pe,ac as Ce,au as ge,K as _e}from"./vendor-mui-icons-B9T1ySRh.js";import{D as a}from"./DocsTemplate-IhRQ5m1Q.js";import"../vite-inject-mocker-entry.js";import"./vendor-misc-BD0vWy5z.js";import"./vendor-mui-core-CjcFYzit.js";import"./vendor-emotion-DfrZ-FAO.js";const De="_placeholderContainer_10w66_5",Ae="_placeholderText_10w66_47",ke="_leadingIconWrapper_10w66_87",Ne="_trailingIconWrapper_10w66_99",Be="_tagRow_10w66_111",Fe="_tag_10w66_111",Me="_counterSection_10w66_134",Ve="_counterValue_10w66_146",Le="_counterMinusIcon_10w66_157",n={placeholderContainer:De,"align-left":"_align-left_10w66_32","align-centre":"_align-centre_10w66_36","align-right":"_align-right_10w66_41","type-italic":"_type-italic_10w66_47",placeholderText:Ae,"size-large":"_size-large_10w66_52","size-default":"_size-default_10w66_60","size-small":"_size-small_10w66_67","size-x-small":"_size-x-small_10w66_74",leadingIconWrapper:ke,"type-default":"_type-default_10w66_94","type-tags-selected":"_type-tags-selected_10w66_95",trailingIconWrapper:Ne,tagRow:Be,tag:Fe,counterSection:Me,counterValue:Ve,counterMinusIcon:Le},l=({size:r="default",align:c="left",type:s="default",text:t="Placeholder",showLeadingIcon:i=!0,leadingIcon:S=Pe,showTrailingIcon:me=!0,showTrailingIcon2:xe=!1,tags:he=[],value:ye=0,onIncrement:fe,onDecrement:be,className:ve=""})=>{const je=r==="x-small"&&s==="tags-selected",z=[n.placeholderContainer,n[`size-${r}`],n[`align-${c}`],n[`type-${s}`],ve].filter(Boolean).join(" ");if(je)return console.warn('Placeholder: size "x-small" does not support type "tags-selected"'),null;const P=()=>!i||!S?null:e.jsx("span",{className:n.leadingIconWrapper,children:e.jsx(o,{icon:S,size:"inherit"})}),C=()=>me?e.jsx("span",{className:n.trailingIconWrapper,children:e.jsx(o,{icon:Ce,size:"inherit"})}):null,Ie=()=>xe?e.jsx("span",{className:n.trailingIconWrapper,children:e.jsx(o,{icon:_,size:"inherit"})}):null;return s==="number"?e.jsxs("div",{className:z,children:[e.jsx("span",{className:n.placeholderText,children:t}),e.jsxs("div",{className:n.counterSection,children:[e.jsx(o,{icon:we,size:"inherit",onClick:be,className:n.counterMinusIcon}),e.jsx("span",{className:n.counterValue,children:ye}),e.jsx(o,{icon:Se,size:"inherit",onClick:fe})]})]}):s==="tags-selected"?e.jsxs("div",{className:z,children:[P(),e.jsx("div",{className:n.tagRow,children:he.map((T,ze)=>e.jsxs("span",{className:n.tag,children:[T.leadingIcon&&e.jsx(o,{icon:T.leadingIcon,size:"inherit"}),e.jsx("span",{children:T.label})]},ze))}),C(),e.jsx("span",{className:n.trailingIconWrapper,children:e.jsx(o,{icon:_,size:"inherit"})})]}):e.jsxs("div",{className:z,children:[P(),e.jsx("span",{className:n.placeholderText,children:t}),C(),s==="italic"&&Ie()]})};l.__docgenInfo={description:"",methods:[],displayName:"Placeholder",props:{size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"}]},description:"Display size — controls font size, line height, icon size, and gap",defaultValue:{value:"'default'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'italic' | 'tags-selected' | 'number'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'italic'"},{name:"literal",value:"'tags-selected'"},{name:"literal",value:"'number'"}]},description:"Type variant — changes the content pattern rendered",defaultValue:{value:"'default'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"Placeholder display text",defaultValue:{value:"'Placeholder'",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"MUI icon for the leading position",defaultValue:{value:"AlarmIcon",computed:!0}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the primary trailing icon",defaultValue:{value:"true",computed:!1}},showTrailingIcon2:{required:!1,tsType:{name:"boolean"},description:"Whether to show the secondary trailing icon (italic type only)",defaultValue:{value:"false",computed:!1}},tags:{required:!1,tsType:{name:"Array",elements:[{name:"PlaceholderTag"}],raw:"PlaceholderTag[]"},description:"Tags to display (tags-selected type) — not supported for x-small",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"number"},description:"Current numeric value (number type)",defaultValue:{value:"0",computed:!1}},onIncrement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when + is pressed (number type)"},onDecrement:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when - is pressed (number type)"},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const w=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Placeholder",subtitle:"A form-field placeholder UI element representing the visual content inside an empty or partially-filled input"}),e.jsx(a.BodyText,{children:"The Placeholder component is a form-field placeholder UI element — it represents the visual content inside an empty or partially-filled input. It supports 4 sizes, 3 alignments, and 4 types, resulting in 45 possible variants."}),e.jsxs(a.Section,{title:"MUI Foundation",children:[e.jsxs(a.BodyText,{children:["The Placeholder component has ",e.jsx("strong",{children:"no MUI layout base"})," — it renders as plain HTML elements. It uses MUI icons from ",e.jsx("code",{children:"@mui/icons-material"})," for its icon slots: ",e.jsx("strong",{children:"AlarmIcon"})," (clock), ",e.jsx("strong",{children:"CancelIcon"})," (×),"," ",e.jsx("strong",{children:"AddBoxIcon"})," (+), ",e.jsx("strong",{children:"IndeterminateCheckBoxIcon"})," (−), and ",e.jsx("strong",{children:"KeyboardArrowDownIcon"})," (chevron). Pass any MUI SvgIcon via the"," ",e.jsx("code",{children:"icon"})," prop to customise the leading icon. All sizing, colour, and opacity values are driven by CSS Modules and the ",e.jsx("code",{children:"--placeholder-*"})," token family."]}),e.jsx(a.CodeBlock,{children:`// MUI icon imports used in Placeholder
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
);`}),e.jsx(a.Section,{title:"Visual style",subtitle:"Placeholders support different variants based on their type. Ensure appropriate context is provided for the user."}),e.jsx(a.Subsection,{title:"Types"}),e.jsxs(a.BodyText,{children:["The Placeholder component supports four types: ",e.jsx("strong",{children:"default"}),","," ",e.jsx("strong",{children:"italic"}),", ",e.jsx("strong",{children:"tags-selected"}),", and"," ",e.jsx("strong",{children:"number"}),". Each type serves a different interaction pattern."]}),e.jsx(a.DosDonts,{doItem:{icon:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label)",opacity:.6},children:"Placeholder text..."}),description:"Use systematic sizes and types for consistent form field patterns."},dontItem:{icon:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label)"},children:"Placeholder text..."}),description:"Overwrite internal component styles directly; use the token system. Avoid creating invalid combinations (like x-small tags-selected)."}}),e.jsx(a.Section,{title:"Size & spacing",subtitle:"The Placeholder component supports multiple sizes. Use the size prop to ensure consistent scaling."}),e.jsx(a.SizeDemo,{rows:[{label:"Large",sublabel:"Use for prominent inputs",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label-lg)",opacity:.6},children:"Placeholder"})},{label:"Default",sublabel:"Use in most cases",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label)",opacity:.6},children:"Placeholder"})},{label:"Small",sublabel:"Use sparingly",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",opacity:.6},children:"Placeholder"})},{label:"X-Small",sublabel:"Use rarely",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",opacity:.6},children:"Placeholder"})}]}),e.jsx(a.BodyText,{children:"This component provides 45 possible variants: 4 sizes × 4 types × 3 alignments (minus 3 invalid x-small tags-selected combinations). See the interactive stories for a full variant matrix."}),e.jsxs(a.Section,{title:"Contribution",children:[e.jsx(a.BodyText,{children:"When proposing updates or new properties for the Placeholder component, consider the following:"}),e.jsx(a.BulletList,{ordered:!0,items:["Does the proposed change align with existing form field patterns?","Does it maintain backward compatibility with our systematic sizing approach?"]}),e.jsxs(a.BodyText,{children:["To contribute a new variation, please bring it to our"," ",e.jsx("strong",{children:"Biweekly Design System meeting"})," for review with the whole team. If you need the calendar invite forwarding, please send the"," ",e.jsx("strong",{children:"design team"})," a message on Teams."]})]}),e.jsx(a.Footer,{})]});w.__docgenInfo={description:"",methods:[],displayName:"PlaceholderDocs"};const He={title:"Foundation/Placeholder",component:l,parameters:{docs:{page:()=>e.jsx(w,{})}},argTypes:{size:{control:"select",options:["large","default","small","x-small"]},align:{control:"select",options:["left","centre","right"]},type:{control:"select",options:["default","italic","tags-selected","number"]},text:{control:"text"},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},showTrailingIcon2:{control:"boolean"}},decorators:[r=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(r,{})})]},p=r=>{const[c,s]=Te.useState(0);return e.jsx(l,{...r,type:"number",value:c,onIncrement:()=>s(t=>t+1),onDecrement:()=>s(t=>t-1)})},d={name:"Documentation",render:()=>e.jsx(w,{}),parameters:{controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},u={name:"Playground",args:{text:"Placeholder",size:"default",align:"left",type:"default",showLeadingIcon:!0,showTrailingIcon:!0}},g={args:{text:"Placeholder",size:"default",align:"left",type:"default",showLeadingIcon:!0,showTrailingIcon:!0}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(l,{size:"large",text:"Large Placeholder"}),e.jsx(l,{size:"default",text:"Default Placeholder"}),e.jsx(l,{size:"small",text:"Small Placeholder"}),e.jsx(l,{size:"x-small",text:"X-Small Placeholder"})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(l,{type:"default",text:"Default Type"}),e.jsx(l,{type:"italic",text:"Italic Type",showTrailingIcon2:!0}),e.jsx(l,{type:"tags-selected",tags:[{label:"Tag 1"},{label:"Tag 2",leadingIcon:ge}]}),e.jsx(p,{text:"Number Type"})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",width:"400px",border:"var(--global-spacing-stroke-1px) dashed var(--global-color-neutral-gray-200)",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Left"}),e.jsx(l,{align:"left",text:"Left Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Centre"}),e.jsx(l,{align:"centre",text:"Centre Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Right"}),e.jsx(l,{align:"right",text:"Right Aligned"})]})]})},y={name:"Status / Tags Selected",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(l,{size:"large",type:"tags-selected",tags:[{label:"React"},{label:"Vue",leadingIcon:ge}]}),e.jsx(l,{size:"default",type:"tags-selected",tags:[{label:"Design"},{label:"System",leadingIcon:_e}]}),e.jsx(l,{size:"small",type:"tags-selected",tags:[{label:"UI"},{label:"UX"}]})]})},f={name:"Status / Number Counter",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(p,{text:"Counter (Large)",size:"large"}),e.jsx(p,{text:"Counter (Default)",size:"default"}),e.jsx(p,{text:"Counter (Small)",size:"small"}),e.jsx(p,{text:"Counter (X-Small)",size:"x-small"})]})},b=({type:r})=>{const c=["large","default","small","x-small"],s=["left","centre","right"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-40px)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("h2",{style:{margin:0,textTransform:"uppercase",letterSpacing:"var(--global-spacing-sizing-1px)"},children:[r," type variants"]}),e.jsx("div",{style:{height:"var(--global-spacing-stroke-2px)",flexGrow:1,backgroundColor:"var(--global-color-neutral-gray-200)"}})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"800px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:D,children:"Size"}),s.map(t=>e.jsx("th",{style:D,children:t},t))]})}),e.jsx("tbody",{children:c.map(t=>t==="x-small"&&r==="tags-selected"?null:e.jsxs("tr",{style:{borderBottom:"var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-100)"},children:[e.jsx("td",{style:{...A,fontWeight:"var(--global-type-weight-bold)",color:"var(--global-color-neutral-gray-600)",width:"100px"},children:t}),s.map(i=>e.jsx("td",{style:A,children:r==="number"?e.jsx(l,{size:t,align:i,type:r,text:"Text",value:3}):r==="tags-selected"?e.jsx(l,{size:t,align:i,type:r,tags:[{label:"Tag 1"},{label:"Tag 2"}]}):e.jsx(l,{size:t,align:i,type:r,text:"Placeholder",showTrailingIcon2:r==="italic"})},i))]},t))})]})})]})},D={textAlign:"left",padding:"var(--global-spacing-sizing-12px)",color:"var(--global-color-neutral-gray-400)",fontSize:"var(--global-type-size-primary-label-xs)",textTransform:"uppercase",borderBottom:"var(--global-spacing-stroke-2px) solid var(--global-color-neutral-gray-200)"},A={padding:"var(--global-spacing-sizing-16px) var(--global-spacing-sizing-12px)"},v={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:"480px"},children:[e.jsx(l,{type:"default",text:"Default type",showLeadingIcon:!0,showTrailingIcon:!0}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"--placeholder-color / --placeholder-font-size-default"}),e.jsx(l,{type:"italic",text:"Italic type",showTrailingIcon2:!0}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"--placeholder-italic-color"})]}),parameters:{controls:{disable:!0}}},j={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px",maxWidth:"400px"},children:[e.jsx(l,{type:"default",text:"Default state",showLeadingIcon:!0}),e.jsx(l,{type:"italic",text:"Italic state"}),e.jsx(l,{type:"tags-selected",tags:[{label:"Tag 1"},{label:"Tag 2"}]})]}),parameters:{controls:{disable:!0}}},I={name:"Full Design Matrix (45 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-80px)"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--global-spacing-sizing-20px)"},children:[e.jsx("h1",{style:{margin:0},children:"Placeholder Component Variant Matrix"}),e.jsx("p",{style:{color:"var(--global-color-neutral-gray-600)"},children:"4 Sizes × 4 Types × 3 Alignments = 48 Variants (minus 3 invalid x-small tags-selected)"})]}),e.jsx(b,{type:"default"}),e.jsx(b,{type:"italic"}),e.jsx(b,{type:"tags-selected"}),e.jsx(b,{type:"number"})]})};var k,N,B,F,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=(N=d.parameters)==null?void 0:N.docs)==null?void 0:B.source},description:{story:"Full branded documentation page for the Placeholder component.",...(M=(F=d.parameters)==null?void 0:F.docs)==null?void 0:M.description}}};var V,L,W;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    text: 'Placeholder',
    size: 'default',
    align: 'left',
    type: 'default',
    showLeadingIcon: true,
    showTrailingIcon: true
  }
}`,...(W=(L=u.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var U,R,q;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    text: 'Placeholder',
    size: 'default',
    align: 'left',
    type: 'default',
    showLeadingIcon: true,
    showTrailingIcon: true
  }
}`,...(q=(R=g.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var E,X,K;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(K=(X=m.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var O,$,H;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=($=x.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var G,J,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,le,te;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(te=(le=f.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var re,ne,se;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,ce;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,pe,ue;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const Ge=["Documentation","Playground","Default","Sizes","Types","Alignments","StatusTagsSelected","StatusNumberCounter","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{h as Alignments,j as AllInteractiveStates,v as ComponentBreakdown,g as Default,d as Documentation,I as FullDesignMatrix,u as Playground,m as Sizes,f as StatusNumberCounter,y as StatusTagsSelected,x as Types,Ge as __namedExportsOrder,He as default};
