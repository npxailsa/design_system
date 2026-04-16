import{j as e}from"./iframe-Dar69v5t.js";import{D as We}from"./Divider-DnV_z41F.js";import{D as i}from"./DocsTemplate-B3INTUY7.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-DYvj0fg1.js";import"./memoTheme-n5UlHhtg.js";const _e="_root_19to5_18",Ae="_label_19to5_102",s={root:_e,"root--center":"_root--center_19to5_44","root--left":"_root--left_19to5_51","root--right":"_root--right_19to5_61","root--line-solid":"_root--line-solid_19to5_71","root--line-dashed":"_root--line-dashed_19to5_74","root--line-dotted":"_root--line-dotted_19to5_77","root--thickness-0-5px":"_root--thickness-0-5px_19to5_82","root--thickness-1px":"_root--thickness-1px_19to5_85","root--thickness-2px":"_root--thickness-2px_19to5_88","root--thickness-3px":"_root--thickness-3px_19to5_91","root--thickness-4px":"_root--thickness-4px_19to5_94","root--thickness-8px":"_root--thickness-8px_19to5_97",label:Ae,"label--xs":"_label--xs_19to5_122","label--sm":"_label--sm_19to5_126","label--default":"_label--default_19to5_130"},a=({label:l,labelPosition:t="center",labelSize:o="sm",line:Le="solid",thickness:De="1px",className:ze="",ariaLabel:ke="Divider"})=>{const we=[s.root,s[`root--${t}`],s[`root--line-${Le}`],s[`root--thickness-${De}`],ze].filter(Boolean).join(" "),Pe=[s.label,s[`label--${o}`]].join(" ");return e.jsx(We,{"aria-label":ke,className:we,textAlign:t==="left"?"left":t==="right"?"right":"center",sx:{borderColor:"transparent","&::before, &::after":{borderColor:"inherit"}},children:e.jsx("span",{className:Pe,children:l})})};a.__docgenInfo={description:"",methods:[],displayName:"DividerWithLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text label to display across the divider line."},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:`Horizontal position of the label relative to the line.
@default 'center'`,defaultValue:{value:"'center'",computed:!1}},labelSize:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'default'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"}]},description:"Size of the label text.\n- `xs`      — 12px (compact / meta text)\n- `sm`      — 14px (secondary label)\n- `default` — 16px (standard body)\n@default 'sm'",defaultValue:{value:"'sm'",computed:!1}},line:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Line style of the divider.
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:"'0-5px' | '1px' | '2px' | '3px' | '4px' | '8px'",elements:[{name:"literal",value:"'0-5px'"},{name:"literal",value:"'1px'"},{name:"literal",value:"'2px'"},{name:"literal",value:"'3px'"},{name:"literal",value:"'4px'"},{name:"literal",value:"'8px'"}]},description:`Stroke thickness of the divider.
Maps to the global stroke scale.
@default '1px'`,defaultValue:{value:"'1px'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional extra CSS class for layout overrides (margin, max-width, etc.).",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label announced by screen readers.
@default 'Divider'`,defaultValue:{value:"'Divider'",computed:!1}}}};const n={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},d={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)"},c={fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",minWidth:"80px",flexShrink:0},Ie=["left","center","right"],Te=["xs","sm","default"],Ce=["solid","dashed","dotted"],Fe=["0-5px","1px","2px","3px","4px","8px"],k=()=>e.jsxs(i,{children:[e.jsx(i.Header,{title:"Divider with Label",subtitle:"A horizontal separator that embeds a readable text label directly within the divider line, using a white background to ensure legibility on any surface."}),e.jsxs(i.BodyText,{children:[e.jsx("strong",{children:"DividerWithLabel"})," extends the base"," ",e.jsx("strong",{children:"Divider"})," primitive with a text label. The label floats on top of the line, masked by a white background (",e.jsx("code",{children:"--divider-label-bg"}),"), so it remains readable regardless of the underlying surface colour. The label can be positioned at the ",e.jsx("code",{children:"left"}),", ",e.jsx("code",{children:"center"})," (default), or ",e.jsx("code",{children:"right"})," of the line and supports three text sizes. All spacing, colour, and stroke values are driven by global design tokens."]}),e.jsxs(i.Section,{title:"MUI Foundation",children:[e.jsxs(i.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"Divider"})," component (",e.jsx("code",{children:"@mui/material/Divider"}),") with the ",e.jsx("code",{children:"children"})," slot used to embed the label. MUI's Divider natively supports a text child — it wraps it in a ",e.jsx("code",{children:"<span>"})," and uses a flex layout with pseudo-elements to render the lines on either side. The"," ",e.jsx("code",{children:"textAlign"})," prop maps to our ",e.jsx("code",{children:"position"})," variant (left / center / right). All line colour, stroke thickness, label typography, and background are applied via CSS Modules and the ",e.jsx("code",{children:"--divider-*"})," token family."]}),e.jsx(i.CodeBlock,{children:`// MUI base import
import MuiDivider from '@mui/material/Divider';

// DividerWithLabel uses the children slot:
<MuiDivider
  textAlign={positionToMuiAlign(position)} // 'left' | 'center' | 'right'
  className={styles['divider-with-label']}
  data-line={line}
  data-thickness={thickness}
>
  <span className={styles['divider-with-label__text']}>{label}</span>
</MuiDivider>`})]}),e.jsx(i.Section,{title:"Component Anatomy",children:e.jsx(i.Anatomy,{preview:e.jsxs("div",{style:{...n,gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{label:"Divider Label",labelPosition:"center"}),e.jsx(a,{label:"Divider Label",labelPosition:"left"}),e.jsx(a,{label:"Divider Label",labelPosition:"right"})]}),parts:[{id:1,name:"Left line segment",token:"--divider-color, --global-spacing-stroke-*",description:"The line to the left of the label. Width grows (flex: 1) for center and right positions; fixed at 16px for the left position."},{id:2,name:"Label",token:"--divider-label-bg, --divider-label-color, --divider-label-padding-x",description:'The text span. Background defaults to white (--divider-label-bg) and is non-transparent to "cut" through the divider line visually.'},{id:3,name:"Right line segment",token:"--divider-color, --global-spacing-stroke-*",description:"The line to the right of the label. Width grows (flex: 1) for center and left positions; fixed at 16px for the right position."}]})}),e.jsx(i.Section,{title:"Label Position",subtitle:"Controls where the label sits along the horizontal line. Corresponds to the labelPosition prop.",children:e.jsxs(i.Subsection,{title:"Label Position / All",children:[e.jsx("div",{style:n,children:Ie.map(l=>e.jsxs("div",{style:d,children:[e.jsx("span",{style:c,children:l}),e.jsx("div",{style:{flex:1},children:e.jsx(a,{label:"Divider Label",labelPosition:l})})]},l))}),e.jsxs(i.BodyText,{children:[e.jsx("strong",{children:"center"})," — label floats in the middle; equal flex on both sides."," ",e.jsx("strong",{children:"left"})," — label is near the leading edge with a short 16px stub on the left."," ",e.jsx("strong",{children:"right"})," — label is near the trailing edge with a short 16px stub on the right."]})]})}),e.jsx(i.Section,{title:"Label Size",subtitle:"Three text sizes mapped to the global type scale.",children:e.jsx(i.Subsection,{title:"Label Size / All",children:e.jsx("div",{style:n,children:Te.map(l=>e.jsxs("div",{style:d,children:[e.jsx("span",{style:c,children:l}),e.jsx("div",{style:{flex:1},children:e.jsx(a,{label:"Divider Label",labelSize:l})})]},l))})})}),e.jsx(i.Section,{title:"Line Style",subtitle:"Inherits the same three line styles as the base Divider component.",children:e.jsx(i.Subsection,{title:"Line Style / All",children:e.jsx("div",{style:n,children:Ce.map(l=>e.jsxs("div",{style:d,children:[e.jsx("span",{style:c,children:l}),e.jsx("div",{style:{flex:1},children:e.jsx(a,{label:"Divider Label",line:l})})]},l))})})}),e.jsx(i.Section,{title:"Thickness",subtitle:"Six stroke steps driven by the global stroke token scale.",children:e.jsx(i.Subsection,{title:"Thickness / Scale",children:e.jsx("div",{style:n,children:Fe.map(l=>e.jsxs("div",{style:d,children:[e.jsx("span",{style:c,children:l}),e.jsx("div",{style:{flex:1},children:e.jsx(a,{label:"Divider Label",thickness:l})})]},l))})})}),e.jsxs(i.Section,{title:"In Context",subtitle:"How DividerWithLabel integrates with real UI patterns.",children:[e.jsxs(i.Subsection,{title:"In Context / Form Sections",children:[e.jsx(i.BodyText,{children:"Left-aligned, extra-small label used to group fields inside a settings form."}),e.jsxs("div",{style:{minWidth:"200px",width:"100%",maxWidth:"480px",display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[e.jsx(a,{label:"Personal Details",labelPosition:"left",labelSize:"xs"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-700)"},children:"Name field"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-700)"},children:"Email field"}),e.jsx(a,{label:"Security",labelPosition:"left",labelSize:"xs"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-700)"},children:"Password field"})]})]}),e.jsxs(i.Subsection,{title:"In Context / Or Separator",children:[e.jsx(i.BodyText,{children:'Centered "or" divider used between two authentication methods.'}),e.jsxs("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-primary)",fontWeight:600,textAlign:"center",fontSize:"var(--global-type-size-primary-label)"},children:"Continue with Google"}),e.jsx(a,{label:"or",labelPosition:"center",labelSize:"xs"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)",textAlign:"center"},children:"Sign in with email and password"})]})]})]}),e.jsxs(i.Section,{title:"Design Tokens",children:[e.jsx(i.Subsection,{title:"Component Tokens",children:e.jsx(i.TokenTable,{tokens:[{name:"--divider-label-bg",description:"Label background colour — var(--global-color-base-white) #FFFFFF. Ensures the text masks the divider line beneath it and remains legible on any surface."},{name:"--divider-label-color",description:"Label text colour — var(--global-color-neutral-gray-500) #6D7280. Neutral mid-tone; visible without competing with surrounding content."},{name:"--divider-label-padding-x",description:"Horizontal padding on the label span — var(--global-spacing-sizing-12px) 12px. Controls the gap between the label text and the divider lines on either side."},{name:"--divider-color",description:"Line colour — var(--global-color-neutral-gray-300) #D2D5DA. Shared with the base Divider component."}]})}),e.jsx(i.Subsection,{title:"Stroke Scale — Global Tokens",children:e.jsx(i.TokenTable,{tokens:[{name:"--global-spacing-stroke-0-5px",description:"Hairline — 0.5px."},{name:"--global-spacing-stroke-1px",description:"Standard — 1px (default)."},{name:"--global-spacing-stroke-2px",description:"Medium emphasis — 2px."},{name:"--global-spacing-stroke-3px",description:"Heavy — 3px."},{name:"--global-spacing-stroke-4px",description:"Strong — 4px."},{name:"--global-spacing-stroke-8px",description:"Bold — 8px (use sparingly)."}]})})]}),e.jsx(i.Section,{title:"Props Reference",children:e.jsx(i.TokenTable,{tokens:[{name:"label",description:"string — required. The text displayed on the divider."},{name:"labelPosition",description:'"left" | "center" | "right" — where the label sits along the line. Default: "center".'},{name:"labelSize",description:'"xs" | "sm" | "default" — text size mapped to 12px / 14px / 16px via global type tokens. Default: "sm".'},{name:"line",description:'"solid" | "dashed" | "dotted" — line style. Default: "solid".'},{name:"thickness",description:'"0-5px" | "1px" | "2px" | "3px" | "4px" | "8px" — stroke width. Default: "1px".'},{name:"className",description:"string — optional CSS class for layout overrides (margin, max-width, etc.)."},{name:"ariaLabel",description:'string — accessible label for screen readers. Default: "Divider".'}]})}),e.jsx(i.Section,{title:"Usage",children:e.jsx(i.CodeBlock,{children:`import { DividerWithLabel } from './DividerWithLabel';

// Default — centered solid 1px, sm text
<DividerWithLabel label="Section Title" />

// Left-aligned, extra-small text, hairline stroke
<DividerWithLabel
  label="Personal Details"
  labelPosition="left"
  labelSize="xs"
  thickness="0-5px"
/>

// Centered "or" separator, dashed line
<DividerWithLabel
  label="or"
  labelPosition="center"
  labelSize="xs"
  line="dashed"
/>

// Right-aligned, default text size
<DividerWithLabel
  label="End of section"
  labelPosition="right"
  labelSize="default"
/>`})}),e.jsx(i.Section,{title:"Design Principles",children:e.jsxs(i.Principles,{children:[e.jsxs(i.PrincipleCard,{number:1,title:"White background is required",children:["The label always carries a white background (",e.jsx("code",{children:"--divider-label-bg"}),'). This is intentional — it visually "cuts" the divider line and ensures the text is legible on any surface colour. Do not set the background to'," ",e.jsx("code",{children:"transparent"}),"."]}),e.jsxs(i.PrincipleCard,{number:2,title:"Use labels sparingly",children:['Labelled dividers create strong visual hierarchy. Use them only where the label adds genuine meaning (form section headers, "or" separators, timeline markers). For decorative separation, use the plain ',e.jsx("strong",{children:"Divider"})," component."]}),e.jsx(i.PrincipleCard,{number:3,title:"Match label position to reading flow",children:'Left-aligned labels suit group headings that lead into content below. Centered labels work for inline separators like "or". Right-aligned labels are rare — use only when the label concludes a content block.'}),e.jsx(i.PrincipleCard,{number:4,title:"Keep label text short",children:"Labels should be 1–3 words. Long labels reduce the visible line segments and weaken the separator metaphor. If more context is needed, use a heading above the plain Divider instead."})]})}),e.jsx(i.Footer,{})]});k.__docgenInfo={description:"",methods:[],displayName:"DividerWithLabelDocs"};const P=["left","center","right"],W=["xs","sm","default"],_=["solid","dashed","dotted"],je=["0-5px","1px","2px","3px","4px","8px"],qe={title:"Atoms/DividerWithLabel",component:a,parameters:{docs:{page:()=>e.jsx(k,{})}},argTypes:{label:{control:"text"},labelPosition:{control:"select",options:P},labelSize:{control:"select",options:W},line:{control:"select",options:_},thickness:{control:"select",options:je},className:{control:!1},ariaLabel:{control:"text"}},args:{label:"Divider Label",labelPosition:"center",labelSize:"sm",line:"solid",thickness:"1px"}},r={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},w={fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",minWidth:"80px",flexShrink:0},p={name:"Documentation",tags:["!autodocs"],parameters:{docs:{page:()=>e.jsx(k,{})},chromatic:{disableSnapshot:!0}},render:()=>e.jsx(k,{})},b={name:"Playground",render:l=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-32px)",minWidth:"200px",width:"100%"},children:e.jsx(a,{...l})})},x={name:"Default",args:{label:"Divider Label",labelPosition:"center",labelSize:"sm",line:"solid",thickness:"1px"}},g={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",minWidth:"200px",maxWidth:"480px"},children:[e.jsx(a,{label:"Center",labelPosition:"center",line:"solid"}),e.jsx(a,{label:"Left",labelPosition:"left",line:"dashed"}),e.jsx(a,{label:"Right",labelPosition:"right",line:"dotted"})]}),parameters:{controls:{disable:!0}}},m={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",minWidth:"200px",maxWidth:"480px"},children:[e.jsx(a,{label:"Solid",labelPosition:"center",line:"solid"}),e.jsx(a,{label:"Dashed",labelPosition:"left",line:"dashed"}),e.jsx(a,{label:"Dotted",labelPosition:"right",line:"dotted"})]}),parameters:{controls:{disable:!0}}},h={name:"Label Position / Center",args:{labelPosition:"center",label:"Divider Label"},render:l=>e.jsx("div",{style:r,children:e.jsx(a,{...l})})},v={name:"Label Position / Left",args:{labelPosition:"left",label:"Divider Label"},render:l=>e.jsx("div",{style:r,children:e.jsx(a,{...l})})},u={name:"Label Position / Right",args:{labelPosition:"right",label:"Divider Label"},render:l=>e.jsx("div",{style:r,children:e.jsx(a,{...l})})},y={name:"Label Position / All",render:()=>e.jsx("div",{style:r,children:P.map(l=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsx("span",{style:w,children:l}),e.jsx("div",{style:{flex:1},children:e.jsx(a,{label:"Divider Label",labelPosition:l})})]},l))}),parameters:{controls:{disable:!0}}},f={name:"Label Size / All",render:()=>e.jsx("div",{style:r,children:W.map(l=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsx("span",{style:w,children:l}),e.jsx("div",{style:{flex:1},children:e.jsx(a,{label:"Divider Label",labelSize:l})})]},l))}),parameters:{controls:{disable:!0}}},S={name:"Line Style / All",render:()=>e.jsx("div",{style:r,children:_.map(l=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsx("span",{style:w,children:l}),e.jsx("div",{style:{flex:1},children:e.jsx(a,{label:"Divider Label",line:l})})]},l))}),parameters:{controls:{disable:!0}}},j={name:"Thickness / Scale",render:()=>e.jsx("div",{style:r,children:je.map(l=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsx("span",{style:w,children:l}),e.jsx("div",{style:{flex:1},children:e.jsx(a,{label:"Divider Label",thickness:l})})]},l))}),parameters:{controls:{disable:!0}}},L={name:"In Context / Form Sections",render:()=>e.jsxs("div",{style:{minWidth:"200px",width:"100%",maxWidth:"480px",display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[e.jsx(a,{label:"Personal Details",labelPosition:"left",labelSize:"xs"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-700)"},children:"Name field"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-700)"},children:"Email field"})]}),e.jsx(a,{label:"Security",labelPosition:"left",labelSize:"xs"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-700)"},children:"Password field"})})]}),parameters:{controls:{disable:!0}}},D={name:"Full Design Matrix (27 variants)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-48px)",padding:"var(--global-spacing-sizing-24px)"},children:P.map(l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--global-color-neutral-gray-500)"},children:["Position: ",l]}),W.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsxs("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)"},children:["Label size: ",t]}),_.map(o=>e.jsx(a,{label:"Label",labelPosition:l,labelSize:t,line:o,thickness:"1px"},o))]},t))]},l))}),parameters:{controls:{disable:!0}}},z={name:"In Context / Or Separator",render:()=>e.jsxs("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-primary)",fontWeight:600,textAlign:"center",fontSize:"var(--global-type-size-primary-label)"},children:"Continue with Google"}),e.jsx(a,{label:"or",labelPosition:"center",labelSize:"xs"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)",textAlign:"center"},children:"Sign in with email and password"})]}),parameters:{controls:{disable:!0}}};var A,I,T;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Documentation',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: () => <DividerWithLabelDocs />
    },
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <DividerWithLabelDocs />
}`,...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var C,F,N;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    padding: 'var(--global-spacing-sizing-32px)',
    minWidth: '200px',
    width: '100%'
  }}>
      <DividerWithLabel {...args} />
    </div>
}`,...(N=(F=b.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var E,R,M;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    label: 'Divider Label',
    labelPosition: 'center',
    labelSize: 'sm',
    line: 'solid',
    thickness: '1px'
  }
}`,...(M=(R=x.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var B,O,q;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    minWidth: '200px',
    maxWidth: '480px'
  }}>
      <DividerWithLabel label="Center" labelPosition="center" line="solid" />
      <DividerWithLabel label="Left" labelPosition="left" line="dashed" />
      <DividerWithLabel label="Right" labelPosition="right" line="dotted" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(O=g.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var H,$,U;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    minWidth: '200px',
    maxWidth: '480px'
  }}>
      <DividerWithLabel label="Solid" labelPosition="center" line="solid" />
      <DividerWithLabel label="Dashed" labelPosition="left" line="dashed" />
      <DividerWithLabel label="Dotted" labelPosition="right" line="dotted" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=($=m.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var V,G,K;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Label Position / Center',
  args: {
    labelPosition: 'center',
    label: 'Divider Label'
  },
  render: args => <div style={previewWrap}>
      <DividerWithLabel {...args} />
    </div>
}`,...(K=(G=h.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Z,J,Q;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Label Position / Left',
  args: {
    labelPosition: 'left',
    label: 'Divider Label'
  },
  render: args => <div style={previewWrap}>
      <DividerWithLabel {...args} />
    </div>
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,ee;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Label Position / Right',
  args: {
    labelPosition: 'right',
    label: 'Divider Label'
  },
  render: args => <div style={previewWrap}>
      <DividerWithLabel {...args} />
    </div>
}`,...(ee=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var le,ie,ae;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Label Position / All',
  render: () => <div style={previewWrap}>
      {ALL_POSITIONS.map(pos => <div key={pos} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--global-spacing-sizing-12px)'
    }}>
          <span style={rowLabel}>{pos}</span>
          <div style={{
        flex: 1
      }}>
            <DividerWithLabel label="Divider Label" labelPosition={pos} />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var te,re,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Label Size / All',
  render: () => <div style={previewWrap}>
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--global-spacing-sizing-12px)'
    }}>
          <span style={rowLabel}>{size}</span>
          <div style={{
        flex: 1
      }}>
            <DividerWithLabel label="Divider Label" labelSize={size} />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,oe,de;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Line Style / All',
  render: () => <div style={previewWrap}>
      {ALL_LINES.map(line => <div key={line} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--global-spacing-sizing-12px)'
    }}>
          <span style={rowLabel}>{line}</span>
          <div style={{
        flex: 1
      }}>
            <DividerWithLabel label="Divider Label" line={line} />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,pe,be;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Thickness / Scale',
  render: () => <div style={previewWrap}>
      {ALL_THICKNESSES.map(t => <div key={t} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--global-spacing-sizing-12px)'
    }}>
          <span style={rowLabel}>{t}</span>
          <div style={{
        flex: 1
      }}>
            <DividerWithLabel label="Divider Label" thickness={t} />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(be=(pe=j.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var xe,ge,me;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'In Context / Form Sections',
  render: () => <div style={{
    minWidth: '200px',
    width: '100%',
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)',
    padding: 'var(--global-spacing-sizing-24px)',
    background: 'var(--global-color-base-white)',
    borderRadius: 'var(--global-spacing-radius-8px)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
  }}>
      <DividerWithLabel label="Personal Details" labelPosition="left" labelSize="xs" />
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-12px)'
    }}>
        <p style={{
        margin: 0,
        fontFamily: 'var(--font-family-secondary)',
        fontSize: 'var(--global-type-size-primary-label-sm)',
        color: 'var(--global-color-neutral-gray-700)'
      }}>Name field</p>
        <p style={{
        margin: 0,
        fontFamily: 'var(--font-family-secondary)',
        fontSize: 'var(--global-type-size-primary-label-sm)',
        color: 'var(--global-color-neutral-gray-700)'
      }}>Email field</p>
      </div>
      <DividerWithLabel label="Security" labelPosition="left" labelSize="xs" />
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-12px)'
    }}>
        <p style={{
        margin: 0,
        fontFamily: 'var(--font-family-secondary)',
        fontSize: 'var(--global-type-size-primary-label-sm)',
        color: 'var(--global-color-neutral-gray-700)'
      }}>Password field</p>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var he,ve,ue;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Full Design Matrix (27 variants)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-48px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      {ALL_POSITIONS.map(pos => <div key={pos} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-24px)'
    }}>
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        color: 'var(--global-color-neutral-gray-500)'
      }}>
            Position: {pos}
          </span>
          {ALL_SIZES.map(size => <div key={size} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-12px)'
      }}>
              <span style={{
          fontFamily: 'var(--brand-font-secondary)',
          fontSize: '10px',
          color: 'var(--global-color-neutral-gray-400)'
        }}>
                Label size: {size}
              </span>
              {ALL_LINES.map(line => <DividerWithLabel key={line} label="Label" labelPosition={pos} labelSize={size} line={line} thickness="1px" />)}
            </div>)}
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ue=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:ue.source}}};var ye,fe,Se;z.parameters={...z.parameters,docs:{...(ye=z.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'In Context / Or Separator',
  render: () => <div style={{
    minWidth: '200px',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)',
    padding: 'var(--global-spacing-sizing-24px)',
    background: 'var(--global-color-base-white)',
    borderRadius: 'var(--global-spacing-radius-8px)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
  }}>
      <p style={{
      margin: 0,
      fontFamily: 'var(--font-family-primary)',
      fontWeight: 600,
      textAlign: 'center',
      fontSize: 'var(--global-type-size-primary-label)'
    }}>Continue with Google</p>
      <DividerWithLabel label="or" labelPosition="center" labelSize="xs" />
      <p style={{
      margin: 0,
      fontFamily: 'var(--font-family-secondary)',
      fontSize: 'var(--global-type-size-primary-label-sm)',
      color: 'var(--global-color-neutral-gray-600)',
      textAlign: 'center'
    }}>Sign in with email and password</p>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Se=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};const He=["Documentation","Playground","Default","ComponentBreakdown","AllInteractiveStates","LabelPositionCenter","LabelPositionLeft","LabelPositionRight","AllPositions","AllLabelSizes","AllLineStyles","ThicknessScale","InContextFormSections","FullDesignMatrix","InContextOrSeparator"];export{m as AllInteractiveStates,f as AllLabelSizes,S as AllLineStyles,y as AllPositions,g as ComponentBreakdown,x as Default,p as Documentation,D as FullDesignMatrix,L as InContextFormSections,z as InContextOrSeparator,h as LabelPositionCenter,v as LabelPositionLeft,u as LabelPositionRight,b as Playground,j as ThicknessScale,He as __namedExportsOrder,qe as default};
