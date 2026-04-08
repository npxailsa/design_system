import{j as e,R as d}from"./iframe-BS2gILgx.js";import{D as a}from"./DocsTemplate-v6t4yg99.js";import"./preload-helper-Dp1pzeXC.js";const he="_divider_hj28y_24",p={divider:he,"divider--horizontal":"_divider--horizontal_hj28y_46","divider--vertical":"_divider--vertical_hj28y_60","divider--solid":"_divider--solid_hj28y_75","divider--dashed":"_divider--dashed_hj28y_84","divider--dotted":"_divider--dotted_hj28y_93","divider--0-5px":"_divider--0-5px_hj28y_105","divider--1px":"_divider--1px_hj28y_106","divider--2px":"_divider--2px_hj28y_107","divider--3px":"_divider--3px_hj28y_108","divider--4px":"_divider--4px_hj28y_109","divider--8px":"_divider--8px_hj28y_110"},l=({line:i="solid",thickness:n="1px",alignment:c="horizontal",className:xe="",ariaLabel:ve="Divider"})=>{const ye=[p.divider,p[`divider--${c}`],p[`divider--${i}`],p[`divider--${n}`],xe].filter(Boolean).join(" ");return e.jsx("div",{role:"separator","aria-label":ve,"aria-orientation":c,className:ye})};l.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{line:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Line style for the divider.
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:"'0-5px' | '1px' | '2px' | '3px' | '4px' | '8px'",elements:[{name:"literal",value:"'0-5px'"},{name:"literal",value:"'1px'"},{name:"literal",value:"'2px'"},{name:"literal",value:"'3px'"},{name:"literal",value:"'4px'"},{name:"literal",value:"'8px'"}]},description:`Border thickness of the divider.
Maps directly to the stroke scale: 0.5px / 1px / 2px / 3px / 4px / 8px.
@default '1px'`,defaultValue:{value:"'1px'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation of the divider.\n- `horizontal` — spans the full width of its container (default)\n- `vertical`   — spans the full height of its container\n@default 'horizontal'",defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional extra class for layout overrides (margins, width caps, etc.).",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label — screen readers announce the presence of the separator.
@default 'Divider'`,defaultValue:{value:"'Divider'",computed:!1}}}};const t={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},g={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)"},m={fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",minWidth:"72px",flexShrink:0},I={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",height:"var(--global-spacing-sizing-80px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},H=["solid","dashed","dotted"],x=["0-5px","1px","2px","3px","4px","8px"],_=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Divider",subtitle:"A lightweight separator line for creating visual breaks between content sections, layout regions, and list items."}),e.jsxs(a.BodyText,{children:[e.jsx("strong",{children:"Divider"})," is an Atom-level layout primitive that renders a single separator line. It supports two orientations (",e.jsx("code",{children:"horizontal"})," and"," ",e.jsx("code",{children:"vertical"}),"), three line styles (",e.jsx("code",{children:"solid"}),", ",e.jsx("code",{children:"dashed"}),","," ",e.jsx("code",{children:"dotted"}),"), and six stroke thicknesses (0.5 px – 8 px). All values reference design tokens — no hardcoded numbers are used."]}),e.jsx(a.Section,{title:"Component Anatomy",children:e.jsx(a.Anatomy,{preview:e.jsxs("div",{style:{...t,gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(l,{alignment:"horizontal",line:"solid",thickness:"1px"}),e.jsx(l,{alignment:"horizontal",line:"dashed",thickness:"1px"}),e.jsx(l,{alignment:"horizontal",line:"dotted",thickness:"2px"})]}),parts:[{id:1,name:"Horizontal divider",token:"--divider-color, --global-spacing-stroke-*",description:"A full-width line rendered as a border-top. Stretches to 100% of its containing block width."},{id:2,name:"Vertical divider",token:"--divider-color, --global-spacing-stroke-*",description:"A full-height line rendered as a border-left. Uses align-self: stretch to fill its flex/grid container height."},{id:3,name:"Line style",token:"border-*-style CSS property",description:"Solid — continuous line. Dashed — broken segments. Dotted — circular dots."},{id:4,name:"Thickness",token:"--global-spacing-stroke-0-5px through --global-spacing-stroke-8px",description:"Six steps from hairline (0.5px) to heavy (8px). Applied via the global stroke token scale."}]})}),e.jsxs(a.Section,{title:"Horizontal Dividers",subtitle:"Spans 100% of its container width. Use between stacked sections, list items, and card regions.",children:[e.jsx(a.Subsection,{title:"Line Styles",children:e.jsx("div",{style:t,children:H.map(i=>e.jsxs("div",{style:g,children:[e.jsx("span",{style:m,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:i,thickness:"1px"})})]},i))})}),e.jsx(a.Subsection,{title:"Thickness Scale",children:e.jsx("div",{style:t,children:x.map(i=>e.jsxs("div",{style:g,children:[e.jsx("span",{style:m,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:"solid",thickness:i})})]},i))})}),e.jsx(a.Subsection,{title:"Dashed Thicknesses",children:e.jsx("div",{style:t,children:x.map(i=>e.jsxs("div",{style:g,children:[e.jsx("span",{style:m,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:"dashed",thickness:i})})]},i))})}),e.jsx(a.Subsection,{title:"Dotted Thicknesses",children:e.jsx("div",{style:t,children:x.map(i=>e.jsxs("div",{style:g,children:[e.jsx("span",{style:m,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:"dotted",thickness:i})})]},i))})})]}),e.jsxs(a.Section,{title:"Vertical Dividers",subtitle:"Stretches to the full height of its flex/grid container. Use to separate inline columns, sidebar items, and toolbar groups.",children:[e.jsx(a.Subsection,{title:"Line Styles",children:e.jsx("div",{style:I,children:H.map(i=>e.jsx(d.Fragment,{children:e.jsx(l,{alignment:"vertical",line:i,thickness:"1px"})},i))})}),e.jsx(a.Subsection,{title:"Thickness Scale",children:e.jsx("div",{style:I,children:x.map(i=>e.jsx(d.Fragment,{children:e.jsx(l,{alignment:"vertical",line:"solid",thickness:i})},i))})})]}),e.jsxs(a.Section,{title:"In Context",subtitle:"How dividers look between real content elements.",children:[e.jsx(a.Subsection,{title:"Between stacked text blocks",children:e.jsxs("div",{style:{...t,padding:"var(--global-spacing-sizing-24px)"},children:[e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label)"},children:"Section one — introductory content"}),e.jsx(l,{alignment:"horizontal",line:"solid",thickness:"1px"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label)"},children:"Section two — supporting content"}),e.jsx(l,{alignment:"horizontal",line:"dashed",thickness:"1px"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label)"},children:"Section three — closing content"})]})}),e.jsx(a.Subsection,{title:"Between inline columns",children:e.jsxs("div",{style:{...I,height:"var(--global-spacing-sizing-64px)",padding:"var(--global-spacing-sizing-16px) var(--global-spacing-sizing-24px)"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label)"},children:"Dashboard"}),e.jsx(l,{alignment:"vertical",line:"solid",thickness:"1px"}),e.jsx("span",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label)"},children:"Reports"}),e.jsx(l,{alignment:"vertical",line:"solid",thickness:"1px"}),e.jsx("span",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label)"},children:"Settings"})]})})]}),e.jsxs(a.Section,{title:"Design Tokens",children:[e.jsx(a.Subsection,{title:"Component Token",children:e.jsx(a.TokenTable,{tokens:[{name:"--divider-color",description:"Divider line colour — var(--global-color-neutral-gray-300) #D2D5DA. Neutral and unobtrusive."}]})}),e.jsx(a.Subsection,{title:"Stroke Thickness — Global Scale",children:e.jsx(a.TokenTable,{tokens:[{name:"--global-spacing-stroke-0-5px",description:"Hairline divider — 0.5px (default for vertical dividers in compact toolbars)"},{name:"--global-spacing-stroke-1px",description:"Standard divider — 1px (most common default)"},{name:"--global-spacing-stroke-2px",description:"Medium emphasis — 2px"},{name:"--global-spacing-stroke-3px",description:"Heavy emphasis — 3px"},{name:"--global-spacing-stroke-4px",description:"Strong section break — 4px"},{name:"--global-spacing-stroke-8px",description:"Bold visual separator — 8px (use sparingly)"}]})})]}),e.jsx(a.Section,{title:"Props Reference",children:e.jsx(a.TokenTable,{tokens:[{name:"line",description:'"solid" | "dashed" | "dotted" — line style of the divider. Default: "solid".'},{name:"thickness",description:'"0-5px" | "1px" | "2px" | "3px" | "4px" | "8px" — stroke width. Default: "1px".'},{name:"alignment",description:'"horizontal" | "vertical" — orientation. Default: "horizontal".'},{name:"className",description:"string — optional CSS class for layout overrides (margin, max-width, etc.)."},{name:"ariaLabel",description:'string — accessible label announced by screen readers. Default: "Divider".'}]})}),e.jsx(a.Section,{title:"Usage",children:e.jsx(a.CodeBlock,{children:`import { Divider } from './Divider';

// Horizontal — default solid 1px
<Divider />

// Horizontal — dashed 2px
<Divider line="dashed" thickness="2px" />

// Horizontal — dotted hairline
<Divider line="dotted" thickness="0-5px" />

// Vertical — solid 1px between inline elements
<div style={{ display: 'flex', alignItems: 'center', height: '48px' }}>
  <span>Left</span>
  <Divider alignment="vertical" thickness="1px" />
  <span>Right</span>
</div>

// With custom layout class
<Divider className={styles.myDivider} line="dashed" />`})}),e.jsx(a.Section,{title:"Design Principles",children:e.jsxs(a.Principles,{children:[e.jsxs(a.PrincipleCard,{number:1,title:"Neutral by default",children:["The divider colour (",e.jsx("code",{children:"--divider-color"}),") maps to neutral-gray-300 — visible enough to delineate structure without competing with content. Never change the colour to a brand or status colour unless there is a deliberate semantic reason."]}),e.jsx(a.PrincipleCard,{number:2,title:"Match weight to hierarchy",children:"Use thin lines (0.5px–1px) for subtle separation within a section. Use thicker lines (2px–4px) at major section boundaries. Reserve 8px for top-level structural breaks like navigation/content splits."}),e.jsx(a.PrincipleCard,{number:3,title:"Solid for primary, dashed for secondary",children:"Solid conveys a definitive boundary. Dashed or dotted lines signal softer, optional, or provisional separation — use them in data tables, empty states, or drag-and-drop placeholders."}),e.jsxs(a.PrincipleCard,{number:4,title:"Vertical always needs a container height",children:["Vertical dividers use ",e.jsx("code",{children:"align-self: stretch"})," and require their parent to be a flex or grid container with a defined height. Wrap in a flex row and set",e.jsx("code",{children:"height"})," or let the flex children define the container height."]})]})}),e.jsx(a.Footer,{})]});_.__docgenInfo={description:"",methods:[],displayName:"DividerDocs"};const F=["solid","dashed","dotted"],L=["0-5px","1px","2px","3px","4px","8px"],be=["horizontal","vertical"],Se={title:"Atoms/Divider",component:l,parameters:{docs:{page:()=>e.jsx(_,{})}},argTypes:{line:{control:"select",options:F},thickness:{control:"select",options:L},alignment:{control:"select",options:be},ariaLabel:{control:"text"},className:{control:!1}},args:{line:"solid",thickness:"1px",alignment:"horizontal",ariaLabel:"Divider"}},s={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},o={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)"},r={fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",minWidth:"72px",flexShrink:0},ue={fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-medium)",color:"var(--global-color-neutral-gray-700)",margin:"0 0 var(--global-spacing-sizing-12px)",textTransform:"capitalize"},v={name:"Documentation",tags:["!autodocs"],parameters:{docs:{page:()=>e.jsx(_,{})},chromatic:{disableSnapshot:!0}},render:()=>e.jsx(_,{})},y={name:"Playground",render:i=>i.alignment==="vertical"?e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"var(--global-spacing-sizing-80px)",padding:"var(--global-spacing-sizing-16px)",gap:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-primary)"},children:"Left content"}),e.jsx(l,{...i}),e.jsx("span",{style:{fontFamily:"var(--font-family-primary)"},children:"Right content"})]}):e.jsxs("div",{style:{...s,gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-primary)"},children:"Content above"}),e.jsx(l,{...i}),e.jsx("span",{style:{fontFamily:"var(--font-family-primary)"},children:"Content below"})]})},h={name:"Horizontal / Solid",args:{alignment:"horizontal",line:"solid",thickness:"1px"},render:i=>e.jsx("div",{style:s,children:e.jsxs("div",{style:{...o},children:[e.jsx("span",{style:r,children:"solid"}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{...i})})]})})},b={name:"Horizontal / Dashed",args:{alignment:"horizontal",line:"dashed",thickness:"1px"},render:i=>e.jsx("div",{style:s,children:e.jsxs("div",{style:{...o},children:[e.jsx("span",{style:r,children:"dashed"}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{...i})})]})})},u={name:"Horizontal / Dotted",args:{alignment:"horizontal",line:"dotted",thickness:"1px"},render:i=>e.jsx("div",{style:s,children:e.jsxs("div",{style:{...o},children:[e.jsx("span",{style:r,children:"dotted"}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{...i})})]})})},f={name:"Horizontal / All Line Styles",render:()=>e.jsx("div",{style:s,children:F.map(i=>e.jsxs("div",{style:o,children:[e.jsx("span",{style:r,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:i,thickness:"1px"})})]},i))}),parameters:{controls:{disable:!0}}},z={name:"Horizontal / Thickness Scale (Solid)",render:()=>e.jsx("div",{style:s,children:L.map(i=>e.jsxs("div",{style:o,children:[e.jsx("span",{style:r,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:"solid",thickness:i})})]},i))}),parameters:{controls:{disable:!0}}},j={name:"Horizontal / Full Matrix",render:()=>e.jsx("div",{style:{...s,gap:"var(--global-spacing-sizing-36px)"},children:F.map(i=>e.jsxs("div",{children:[e.jsx("p",{style:ue,children:i}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:L.map(n=>e.jsxs("div",{style:o,children:[e.jsx("span",{style:r,children:n}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:i,thickness:n})})]},n))})]},i))}),parameters:{controls:{disable:!0}}},S={name:"Vertical / All Line Styles",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-32px)",height:"var(--global-spacing-sizing-80px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:F.map(i=>e.jsx(d.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(l,{alignment:"vertical",line:i,thickness:"1px"}),e.jsx("span",{style:{...r,minWidth:"auto",textAlign:"center"},children:i})]})},i))}),parameters:{controls:{disable:!0}}},k={name:"Vertical / Thickness Scale (Solid)",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",height:"var(--global-spacing-sizing-80px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:L.map(i=>e.jsx(d.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(l,{alignment:"vertical",line:"solid",thickness:i}),e.jsx("span",{style:{...r,minWidth:"auto",textAlign:"center"},children:i})]})},i))}),parameters:{controls:{disable:!0}}},D={name:"In Context / Between Content Blocks",render:()=>e.jsxs("div",{style:{maxWidth:"480px",display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Personal Details"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Name, email, and phone number"})]}),e.jsx(l,{alignment:"horizontal",line:"solid",thickness:"0-5px"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Preferences"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Notifications and display settings"})]}),e.jsx(l,{alignment:"horizontal",line:"solid",thickness:"0-5px"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Security"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Password and two-factor authentication"})]})]}),parameters:{controls:{disable:!0}}},w={name:"In Context / Between Inline Items",render:()=>e.jsx("nav",{style:{display:"inline-flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-12px) var(--global-spacing-sizing-20px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 1px 4px rgba(0,0,0,0.1)"},children:["Dashboard","Reports","Analytics","Settings"].map((i,n,c)=>e.jsxs(d.Fragment,{children:[e.jsx("span",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:n===0?"var(--global-color-primary-blue)":"var(--global-color-neutral-gray-600)",cursor:"pointer"},children:i}),n<c.length-1&&e.jsx(l,{alignment:"vertical",line:"solid",thickness:"1px"})]},i))}),parameters:{controls:{disable:!0}}};var T,A,R;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Documentation',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: () => <DividerDocs />
    },
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <DividerDocs />
}`,...(R=(A=v.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var C,N,W;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => args.alignment === 'vertical' ? <div style={{
    display: 'flex',
    alignItems: 'center',
    height: 'var(--global-spacing-sizing-80px)',
    padding: 'var(--global-spacing-sizing-16px)',
    gap: 'var(--global-spacing-sizing-16px)',
    background: 'var(--global-color-neutral-gray-50)',
    borderRadius: 'var(--global-spacing-radius-8px)'
  }}>
        <span style={{
      fontFamily: 'var(--font-family-primary)'
    }}>Left content</span>
        <Divider {...args} />
        <span style={{
      fontFamily: 'var(--font-family-primary)'
    }}>Right content</span>
      </div> : <div style={{
    ...gridWrap,
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
        <span style={{
      fontFamily: 'var(--font-family-primary)'
    }}>Content above</span>
        <Divider {...args} />
        <span style={{
      fontFamily: 'var(--font-family-primary)'
    }}>Content below</span>
      </div>
}`,...(W=(N=y.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var B,E,V;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Horizontal / Solid',
  args: {
    alignment: 'horizontal',
    line: 'solid',
    thickness: '1px'
  },
  render: args => <div style={gridWrap}>
      <div style={{
      ...rowStyle
    }}>
        <span style={labelStyle}>solid</span>
        <div style={{
        flex: 1
      }}><Divider {...args} /></div>
      </div>
    </div>
}`,...(V=(E=h.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var P,M,q;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Horizontal / Dashed',
  args: {
    alignment: 'horizontal',
    line: 'dashed',
    thickness: '1px'
  },
  render: args => <div style={gridWrap}>
      <div style={{
      ...rowStyle
    }}>
        <span style={labelStyle}>dashed</span>
        <div style={{
        flex: 1
      }}><Divider {...args} /></div>
      </div>
    </div>
}`,...(q=(M=b.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var U,K,$;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Horizontal / Dotted',
  args: {
    alignment: 'horizontal',
    line: 'dotted',
    thickness: '1px'
  },
  render: args => <div style={gridWrap}>
      <div style={{
      ...rowStyle
    }}>
        <span style={labelStyle}>dotted</span>
        <div style={{
        flex: 1
      }}><Divider {...args} /></div>
      </div>
    </div>
}`,...($=(K=u.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var O,G,J;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Horizontal / All Line Styles',
  render: () => <div style={gridWrap}>
      {ALL_LINES.map(lineStyle => <div key={lineStyle} style={rowStyle}>
          <span style={labelStyle}>{lineStyle}</span>
          <div style={{
        flex: 1
      }}>
            <Divider alignment="horizontal" line={lineStyle} thickness="1px" />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;z.parameters={...z.parameters,docs:{...(Q=z.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Horizontal / Thickness Scale (Solid)',
  render: () => <div style={gridWrap}>
      {ALL_THICKNESSES.map(t => <div key={t} style={rowStyle}>
          <span style={labelStyle}>{t}</span>
          <div style={{
        flex: 1
      }}>
            <Divider alignment="horizontal" line="solid" thickness={t} />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(X=z.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ie;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Horizontal / Full Matrix',
  render: () => <div style={{
    ...gridWrap,
    gap: 'var(--global-spacing-sizing-36px)'
  }}>
      {ALL_LINES.map(lineStyle => <div key={lineStyle}>
          <p style={sectionLabel}>{lineStyle}</p>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-20px)'
      }}>
            {ALL_THICKNESSES.map(t => <div key={t} style={rowStyle}>
                <span style={labelStyle}>{t}</span>
                <div style={{
            flex: 1
          }}>
                  <Divider alignment="horizontal" line={lineStyle} thickness={t} />
                </div>
              </div>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ie.source}}};var ae,le,ne;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Vertical / All Line Styles',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-32px)',
    height: 'var(--global-spacing-sizing-80px)',
    padding: 'var(--global-spacing-sizing-24px)',
    background: 'var(--global-color-neutral-gray-50)',
    borderRadius: 'var(--global-spacing-radius-8px)'
  }}>
      {ALL_LINES.map(lineStyle => <React.Fragment key={lineStyle}>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-8px)'
      }}>
            <Divider alignment="vertical" line={lineStyle} thickness="1px" />
            <span style={{
          ...labelStyle,
          minWidth: 'auto',
          textAlign: 'center'
        }}>{lineStyle}</span>
          </div>
        </React.Fragment>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ne=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var re,se,te;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Vertical / Thickness Scale (Solid)',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-24px)',
    height: 'var(--global-spacing-sizing-80px)',
    padding: 'var(--global-spacing-sizing-24px)',
    background: 'var(--global-color-neutral-gray-50)',
    borderRadius: 'var(--global-spacing-radius-8px)'
  }}>
      {ALL_THICKNESSES.map(t => <React.Fragment key={t}>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-8px)'
      }}>
            <Divider alignment="vertical" line="solid" thickness={t} />
            <span style={{
          ...labelStyle,
          minWidth: 'auto',
          textAlign: 'center'
        }}>{t}</span>
          </div>
        </React.Fragment>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(te=(se=k.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,de,ce;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'In Context / Between Content Blocks',
  render: () => <div style={{
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    padding: 'var(--global-spacing-sizing-24px)',
    background: 'var(--global-color-base-white)',
    borderRadius: 'var(--global-spacing-radius-8px)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
  }}>
      <div>
        <p style={{
        margin: '0 0 var(--global-spacing-sizing-4px)',
        fontFamily: 'var(--font-family-primary)',
        fontWeight: 600,
        fontSize: 'var(--global-type-size-primary-label)'
      }}>Personal Details</p>
        <p style={{
        margin: 0,
        fontFamily: 'var(--font-family-secondary)',
        fontSize: 'var(--global-type-size-primary-label-sm)',
        color: 'var(--global-color-neutral-gray-600)'
      }}>Name, email, and phone number</p>
      </div>
      <Divider alignment="horizontal" line="solid" thickness="0-5px" />
      <div>
        <p style={{
        margin: '0 0 var(--global-spacing-sizing-4px)',
        fontFamily: 'var(--font-family-primary)',
        fontWeight: 600,
        fontSize: 'var(--global-type-size-primary-label)'
      }}>Preferences</p>
        <p style={{
        margin: 0,
        fontFamily: 'var(--font-family-secondary)',
        fontSize: 'var(--global-type-size-primary-label-sm)',
        color: 'var(--global-color-neutral-gray-600)'
      }}>Notifications and display settings</p>
      </div>
      <Divider alignment="horizontal" line="solid" thickness="0-5px" />
      <div>
        <p style={{
        margin: '0 0 var(--global-spacing-sizing-4px)',
        fontFamily: 'var(--font-family-primary)',
        fontWeight: 600,
        fontSize: 'var(--global-type-size-primary-label)'
      }}>Security</p>
        <p style={{
        margin: 0,
        fontFamily: 'var(--font-family-secondary)',
        fontSize: 'var(--global-type-size-primary-label-sm)',
        color: 'var(--global-color-neutral-gray-600)'
      }}>Password and two-factor authentication</p>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(de=D.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ge,me;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'In Context / Between Inline Items',
  render: () => <nav style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-16px)',
    padding: 'var(--global-spacing-sizing-12px) var(--global-spacing-sizing-20px)',
    background: 'var(--global-color-base-white)',
    borderRadius: 'var(--global-spacing-radius-8px)',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
  }}>
      {['Dashboard', 'Reports', 'Analytics', 'Settings'].map((item, i, arr) => <React.Fragment key={item}>
          <span style={{
        fontFamily: 'var(--font-family-primary)',
        fontSize: 'var(--global-type-size-primary-label-sm)',
        color: i === 0 ? 'var(--global-color-primary-blue)' : 'var(--global-color-neutral-gray-600)',
        cursor: 'pointer'
      }}>{item}</span>
          {i < arr.length - 1 && <Divider alignment="vertical" line="solid" thickness="1px" />}
        </React.Fragment>)}
    </nav>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};const ke=["Documentation","Playground","HorizontalSolid","HorizontalDashed","HorizontalDotted","HorizontalAllStyles","HorizontalThicknessScale","HorizontalFullMatrix","VerticalAllStyles","VerticalThicknessScale","BetweenContentBlocks","BetweenInlineItems"];export{D as BetweenContentBlocks,w as BetweenInlineItems,v as Documentation,f as HorizontalAllStyles,b as HorizontalDashed,u as HorizontalDotted,j as HorizontalFullMatrix,h as HorizontalSolid,z as HorizontalThicknessScale,y as Playground,S as VerticalAllStyles,k as VerticalThicknessScale,ke as __namedExportsOrder,Se as default};
