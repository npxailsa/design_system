import{j as e,R as w}from"./iframe-CrrYeAlt.js";import{D as a}from"./DocsTemplate-CKVnmNf1.js";import"./preload-helper-Dp1pzeXC.js";const ye="_divider_1f5ln_20",g={divider:ye,"divider--horizontal":"_divider--horizontal_1f5ln_35","divider--vertical":"_divider--vertical_1f5ln_52","divider--solid":"_divider--solid_1f5ln_69","divider--dashed":"_divider--dashed_1f5ln_70","divider--dotted":"_divider--dotted_1f5ln_71","divider--0-5px":"_divider--0-5px_1f5ln_85","divider--1px":"_divider--1px_1f5ln_86","divider--2px":"_divider--2px_1f5ln_87","divider--3px":"_divider--3px_1f5ln_88","divider--4px":"_divider--4px_1f5ln_89","divider--8px":"_divider--8px_1f5ln_90"},l=({line:i="solid",thickness:n="1px",alignment:d="horizontal",className:me="",ariaLabel:ve="Divider"})=>{const he=[g.divider,g[`divider--${d}`],g[`divider--${i}`],g[`divider--${n}`],me].filter(Boolean).join(" ");return e.jsx("div",{role:"separator","aria-label":ve,"aria-orientation":d,className:he})};l.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{line:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Line style for the divider.
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:"'0-5px' | '1px' | '2px' | '3px' | '4px' | '8px'",elements:[{name:"literal",value:"'0-5px'"},{name:"literal",value:"'1px'"},{name:"literal",value:"'2px'"},{name:"literal",value:"'3px'"},{name:"literal",value:"'4px'"},{name:"literal",value:"'8px'"}]},description:`Border thickness of the divider.
Maps directly to the stroke scale: 0.5px / 1px / 2px / 3px / 4px / 8px.
@default '1px'`,defaultValue:{value:"'1px'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation of the divider.\n- `horizontal` — spans the full width of its container (default)\n- `vertical`   — spans the full height of its container\n@default 'horizontal'",defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional extra class for layout overrides (margins, width caps, etc.).",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label — screen readers announce the presence of the separator.
@default 'Divider'`,defaultValue:{value:"'Divider'",computed:!1}}}};const t={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},c={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)"},r={fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",minWidth:"72px",flexShrink:0},be={fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-medium)",color:"var(--global-color-neutral-gray-700)",margin:"0 0 var(--global-spacing-sizing-12px)",textTransform:"capitalize"},L={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-32px)",height:"var(--global-spacing-sizing-80px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},F=["solid","dashed","dotted"],H=["0-5px","1px","2px","3px","4px","8px"],D=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Divider",subtitle:"A lightweight, fully token-driven separator line for creating visual breaks between content sections, layout regions, and list items."}),e.jsxs(a.BodyText,{children:[e.jsx("strong",{children:"Divider"})," is an Atom-level layout primitive that renders a single separator line. It supports two orientations (",e.jsx("code",{children:"horizontal"})," and"," ",e.jsx("code",{children:"vertical"}),"), three line styles (",e.jsx("code",{children:"solid"}),", ",e.jsx("code",{children:"dashed"}),","," ",e.jsx("code",{children:"dotted"}),"), and six stroke thicknesses (0.5px – 8px). All values reference global design tokens — no hardcoded numbers or colours are used."]}),e.jsx(a.Section,{title:"Component Anatomy",children:e.jsx(a.Anatomy,{preview:e.jsxs("div",{style:{...t,gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(l,{alignment:"horizontal",line:"solid",thickness:"1px"}),e.jsx(l,{alignment:"horizontal",line:"dashed",thickness:"1px"}),e.jsx(l,{alignment:"horizontal",line:"dotted",thickness:"2px"})]}),parts:[{id:1,name:"Horizontal divider",token:"--divider-color, --global-spacing-stroke-*",description:"A full-width line rendered via border-top. Stretches to 100% of its containing block. Height is zero — all visual weight comes from the border-top-width stroke token."},{id:2,name:"Vertical divider",token:"--divider-color, --global-spacing-stroke-*",description:"A full-height line rendered via border-left. Uses align-self: stretch to fill the height of its flex or grid parent. Width is zero."},{id:3,name:"Line style",token:"CSS border-*-style property",description:"Solid — continuous line. Dashed — broken segments. Dotted — circular dots. Applied via CSS modifier classes."},{id:4,name:"Thickness",token:"--global-spacing-stroke-0-5px → --global-spacing-stroke-8px",description:"Six steps from hairline (0.5px) to heavy (8px), driven by the global stroke token scale."}]})}),e.jsxs(a.Section,{title:"Horizontal",subtitle:"Spans 100% of its container width. Use between stacked sections, list items, form groups, and card regions.",children:[e.jsxs(a.Subsection,{title:"Horizontal / Solid",children:[e.jsx("div",{style:t,children:e.jsxs("div",{style:c,children:[e.jsx("span",{style:r,children:"solid"}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:"solid",thickness:"1px"})})]})}),e.jsx(a.BodyText,{children:"Continuous, unbroken line. The default and most common line style. Use for definitive boundaries between distinct content regions."})]}),e.jsxs(a.Subsection,{title:"Horizontal / Dashed",children:[e.jsx("div",{style:t,children:e.jsxs("div",{style:c,children:[e.jsx("span",{style:r,children:"dashed"}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:"dashed",thickness:"1px"})})]})}),e.jsx(a.BodyText,{children:"Segmented broken line. Signals softer, optional, or provisional separation — suitable for data tables, empty-state placeholders, and drag-and-drop drop zones."})]}),e.jsxs(a.Subsection,{title:"Horizontal / Dotted",children:[e.jsx("div",{style:t,children:e.jsxs("div",{style:c,children:[e.jsx("span",{style:r,children:"dotted"}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:"dotted",thickness:"1px"})})]})}),e.jsx(a.BodyText,{children:"Circular-dot line. Use sparingly for decorative or subtle context separations where a dashed line would appear too heavy."})]}),e.jsx(a.Subsection,{title:"Horizontal / All Line Styles",children:e.jsx("div",{style:t,children:F.map(i=>e.jsxs("div",{style:c,children:[e.jsx("span",{style:r,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:i,thickness:"1px"})})]},i))})}),e.jsxs(a.Subsection,{title:"Horizontal / Thickness Scale (Solid)",children:[e.jsx("div",{style:t,children:H.map(i=>e.jsxs("div",{style:c,children:[e.jsx("span",{style:r,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:"solid",thickness:i})})]},i))}),e.jsxs(a.BodyText,{children:["Six stroke steps driven entirely by ",e.jsx("code",{children:"--global-spacing-stroke-*"})," tokens. Use thin lines (0.5px–1px) within sections, thicker lines (2px–4px) at major boundaries, and 8px only for top-level structural breaks."]})]}),e.jsx(a.Subsection,{title:"Horizontal / Full Matrix",children:e.jsx("div",{style:{...t,gap:"var(--global-spacing-sizing-36px)"},children:F.map(i=>e.jsxs("div",{children:[e.jsx("p",{style:be,children:i}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:H.map(n=>e.jsxs("div",{style:c,children:[e.jsx("span",{style:r,children:n}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:i,thickness:n})})]},n))})]},i))})})]}),e.jsxs(a.Section,{title:"Vertical",subtitle:"Stretches to the full height of its flex or grid parent. Use to separate inline columns, sidebar items, navigation breadcrumbs, and toolbar groups.",children:[e.jsxs(a.BodyText,{children:["Vertical dividers require their parent to be a ",e.jsx("strong",{children:"flex"})," or"," ",e.jsx("strong",{children:"grid"})," container with a defined height. The divider uses"," ",e.jsx("code",{children:"align-self: stretch"})," internally — no explicit height prop is needed."]}),e.jsx(a.Subsection,{title:"Vertical / All Line Styles",children:e.jsx("div",{style:L,children:F.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(l,{alignment:"vertical",line:i,thickness:"1px"}),e.jsx("span",{style:{...r,minWidth:"auto",textAlign:"center"},children:i})]},i))})}),e.jsx(a.Subsection,{title:"Vertical / Thickness Scale (Solid)",children:e.jsx("div",{style:L,children:H.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(l,{alignment:"vertical",line:"solid",thickness:i}),e.jsx("span",{style:{...r,minWidth:"auto",textAlign:"center"},children:i})]},i))})})]}),e.jsxs(a.Section,{title:"In Context",subtitle:"How dividers integrate with real content elements.",children:[e.jsx(a.Subsection,{title:"In Context / Between Content Blocks",children:e.jsxs("div",{style:{minWidth:"200px",width:"100%",maxWidth:"480px",display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Personal Details"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Name, email, and phone number"})]}),e.jsx(l,{alignment:"horizontal",line:"solid",thickness:"0-5px"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Preferences"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Notifications and display settings"})]}),e.jsx(l,{alignment:"horizontal",line:"solid",thickness:"0-5px"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Security"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Password and two-factor authentication"})]})]})}),e.jsx(a.Subsection,{title:"In Context / Between Inline Items",children:e.jsx("nav",{style:{display:"inline-flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-12px) var(--global-spacing-sizing-20px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 1px 4px rgba(0,0,0,0.1)"},children:["Dashboard","Reports","Analytics","Settings"].map((i,n,d)=>e.jsxs(w.Fragment,{children:[e.jsx("span",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:n===0?"var(--global-color-primary-blue)":"var(--global-color-neutral-gray-600)",cursor:"pointer"},children:i}),n<d.length-1&&e.jsx(l,{alignment:"vertical",line:"solid",thickness:"1px"})]},i))})})]}),e.jsxs(a.Section,{title:"Design Tokens",children:[e.jsx(a.Subsection,{title:"Component Token",children:e.jsx(a.TokenTable,{tokens:[{name:"--divider-color",description:"Divider line colour — resolves to var(--global-color-neutral-gray-300) #D2D5DA. Neutral and unobtrusive by default. Defined in tokens.css; do not override per-instance."}]})}),e.jsx(a.Subsection,{title:"Stroke Scale — Global Tokens",children:e.jsx(a.TokenTable,{tokens:[{name:"--global-spacing-stroke-0-5px",description:"Hairline — 0.5px. Ideal for subtle list separators and compact toolbar dividers."},{name:"--global-spacing-stroke-1px",description:"Standard — 1px. Most common default; use for the majority of horizontal and vertical dividers."},{name:"--global-spacing-stroke-2px",description:"Medium emphasis — 2px. Section-level boundaries within a content area."},{name:"--global-spacing-stroke-3px",description:"Heavy emphasis — 3px. Strong visual break between major groups."},{name:"--global-spacing-stroke-4px",description:"Strong section break — 4px. Use at top-level content region borders."},{name:"--global-spacing-stroke-8px",description:"Bold separator — 8px. Use sparingly for navigation/content structural splits."}]})})]}),e.jsx(a.Section,{title:"Props Reference",children:e.jsx(a.TokenTable,{tokens:[{name:"line",description:'"solid" | "dashed" | "dotted" — line style of the divider. Default: "solid".'},{name:"thickness",description:'"0-5px" | "1px" | "2px" | "3px" | "4px" | "8px" — stroke width mapped to the global stroke token scale. Default: "1px".'},{name:"alignment",description:'"horizontal" | "vertical" — orientation. Horizontal spans container width; vertical spans container height. Default: "horizontal".'},{name:"className",description:"string — optional CSS class for layout overrides such as margin, max-width, or flex-grow."},{name:"ariaLabel",description:'string — accessible label announced by screen readers. Default: "Divider".'}]})}),e.jsx(a.Section,{title:"Usage",children:e.jsx(a.CodeBlock,{children:`import { Divider } from './Divider';

// Horizontal — default solid 1px (most common)
<Divider />

// Horizontal / Solid — custom thickness
<Divider line="solid" thickness="2px" />

// Horizontal / Dashed
<Divider line="dashed" thickness="1px" />

// Horizontal / Dotted — hairline
<Divider line="dotted" thickness="0-5px" />

// Vertical — between inline elements (parent must be a flex container)
<div style={{ display: 'flex', alignItems: 'center', height: '48px', gap: '16px' }}>
  <span>Dashboard</span>
  <Divider alignment="vertical" line="solid" thickness="1px" />
  <span>Reports</span>
</div>

// Custom layout class override
<Divider className={styles.myDivider} line="dashed" thickness="1px" />`})}),e.jsx(a.Section,{title:"Design Principles",children:e.jsxs(a.Principles,{children:[e.jsxs(a.PrincipleCard,{number:1,title:"Neutral by default",children:["The divider colour (",e.jsx("code",{children:"--divider-color"}),") maps to"," ",e.jsx("code",{children:"--global-color-neutral-gray-300"})," — visible enough to delineate structure without competing with content. Do not override the colour to a brand or status value unless there is a deliberate semantic reason."]}),e.jsx(a.PrincipleCard,{number:2,title:"Match weight to hierarchy",children:"Use thin strokes (0.5px–1px) for subtle separation within a section. Use thicker strokes (2px–4px) at major section boundaries. Reserve 8px for top-level structural breaks such as navigation/content divides."}),e.jsx(a.PrincipleCard,{number:3,title:"Solid for primary, dashed/dotted for secondary",children:"Solid conveys a definitive boundary. Dashed signals softer or provisional separation — use in data tables, drag-and-drop zones, or empty states. Dotted is decorative; use sparingly."}),e.jsxs(a.PrincipleCard,{number:4,title:"Vertical dividers require a flex or grid parent",children:["Vertical dividers use ",e.jsx("code",{children:"align-self: stretch"})," internally. The parent must be a flex or grid container with a defined height. No explicit height prop is needed — the component fills the container automatically."]})]})}),e.jsx(a.Footer,{})]});D.__docgenInfo={description:"",methods:[],displayName:"DividerDocs"};const _=["solid","dashed","dotted"],I=["0-5px","1px","2px","3px","4px","8px"],ue=["horizontal","vertical"],ke={title:"Atoms/Divider",component:l,parameters:{docs:{page:()=>e.jsx(D,{})}},argTypes:{line:{control:"select",options:_},thickness:{control:"select",options:I},alignment:{control:"select",options:ue},ariaLabel:{control:"text"},className:{control:!1}},args:{line:"solid",thickness:"1px",alignment:"horizontal",ariaLabel:"Divider"}},o={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},p={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)"},s={fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",minWidth:"72px",flexShrink:0},fe={fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-medium)",color:"var(--global-color-neutral-gray-700)",margin:"0 0 var(--global-spacing-sizing-12px)",textTransform:"capitalize"},x={name:"Documentation",tags:["!autodocs"],parameters:{docs:{page:()=>e.jsx(D,{})},chromatic:{disableSnapshot:!0}},render:()=>e.jsx(D,{})},m={name:"Playground",render:i=>i.alignment==="vertical"?e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"var(--global-spacing-sizing-80px)",padding:"var(--global-spacing-sizing-16px)",gap:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-primary)"},children:"Left content"}),e.jsx(l,{...i}),e.jsx("span",{style:{fontFamily:"var(--font-family-primary)"},children:"Right content"})]}):e.jsxs("div",{style:{...o,gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-primary)"},children:"Content above"}),e.jsx(l,{...i}),e.jsx("span",{style:{fontFamily:"var(--font-family-primary)"},children:"Content below"})]})},v={name:"Horizontal / Solid",args:{alignment:"horizontal",line:"solid",thickness:"1px"},render:i=>e.jsx("div",{style:o,children:e.jsxs("div",{style:{...p},children:[e.jsx("span",{style:s,children:"solid"}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{...i})})]})})},h={name:"Horizontal / Dashed",args:{alignment:"horizontal",line:"dashed",thickness:"1px"},render:i=>e.jsx("div",{style:o,children:e.jsxs("div",{style:{...p},children:[e.jsx("span",{style:s,children:"dashed"}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{...i})})]})})},y={name:"Horizontal / Dotted",args:{alignment:"horizontal",line:"dotted",thickness:"1px"},render:i=>e.jsx("div",{style:o,children:e.jsxs("div",{style:{...p},children:[e.jsx("span",{style:s,children:"dotted"}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{...i})})]})})},b={name:"Horizontal / All Line Styles",render:()=>e.jsx("div",{style:o,children:_.map(i=>e.jsxs("div",{style:p,children:[e.jsx("span",{style:s,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:i,thickness:"1px"})})]},i))}),parameters:{controls:{disable:!0}}},u={name:"Horizontal / Thickness Scale (Solid)",render:()=>e.jsx("div",{style:o,children:I.map(i=>e.jsxs("div",{style:p,children:[e.jsx("span",{style:s,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:"solid",thickness:i})})]},i))}),parameters:{controls:{disable:!0}}},f={name:"Horizontal / Full Matrix",render:()=>e.jsx("div",{style:{...o,gap:"var(--global-spacing-sizing-36px)"},children:_.map(i=>e.jsxs("div",{children:[e.jsx("p",{style:fe,children:i}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:I.map(n=>e.jsxs("div",{style:p,children:[e.jsx("span",{style:s,children:n}),e.jsx("div",{style:{flex:1},children:e.jsx(l,{alignment:"horizontal",line:i,thickness:n})})]},n))})]},i))}),parameters:{controls:{disable:!0}}},z={name:"Vertical / All Line Styles",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-32px)",height:"var(--global-spacing-sizing-80px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},children:_.map(i=>e.jsx(w.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(l,{alignment:"vertical",line:i,thickness:"1px"}),e.jsx("span",{style:{...s,minWidth:"auto",textAlign:"center"},children:i})]})},i))}),parameters:{controls:{disable:!0}}},j={name:"Vertical / Thickness Scale (Solid)",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",height:"var(--global-spacing-sizing-80px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},children:I.map(i=>e.jsx(w.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(l,{alignment:"vertical",line:"solid",thickness:i}),e.jsx("span",{style:{...s,minWidth:"auto",textAlign:"center"},children:i})]})},i))}),parameters:{controls:{disable:!0}}},S={name:"In Context / Between Content Blocks",render:()=>e.jsxs("div",{style:{minWidth:"200px",width:"100%",maxWidth:"480px",display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Personal Details"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Name, email, and phone number"})]}),e.jsx(l,{alignment:"horizontal",line:"solid",thickness:"0-5px"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Preferences"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Notifications and display settings"})]}),e.jsx(l,{alignment:"horizontal",line:"solid",thickness:"0-5px"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Security"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Password and two-factor authentication"})]})]}),parameters:{controls:{disable:!0}}},k={name:"In Context / Between Inline Items",render:()=>e.jsx("nav",{style:{display:"inline-flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-12px) var(--global-spacing-sizing-20px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 1px 4px rgba(0,0,0,0.1)"},children:["Dashboard","Reports","Analytics","Settings"].map((i,n,d)=>e.jsxs(w.Fragment,{children:[e.jsx("span",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:n===0?"var(--global-color-primary-blue)":"var(--global-color-neutral-gray-600)",cursor:"pointer"},children:i}),n<d.length-1&&e.jsx(l,{alignment:"vertical",line:"solid",thickness:"1px"})]},i))}),parameters:{controls:{disable:!0}}};var T,W,A;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(A=(W=x.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var C,R,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => args.alignment === 'vertical' ? <div style={{
    display: 'flex',
    alignItems: 'center',
    height: 'var(--global-spacing-sizing-80px)',
    padding: 'var(--global-spacing-sizing-16px)',
    gap: 'var(--global-spacing-sizing-16px)',
    background: 'var(--global-color-neutral-gray-50)',
    borderRadius: 'var(--global-spacing-radius-8px)',
    minWidth: '200px',
    width: '100%'
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
}`,...(N=(R=m.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var B,V,P;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(V=v.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var E,U,M;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(M=(U=h.parameters)==null?void 0:U.docs)==null?void 0:M.source}}};var q,$,K;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=($=y.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var O,G,J;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ie;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ie=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ie.source}}};var ae,le,ne;z.parameters={...z.parameters,docs:{...(ae=z.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Vertical / All Line Styles',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-32px)',
    height: 'var(--global-spacing-sizing-80px)',
    padding: 'var(--global-spacing-sizing-24px)',
    background: 'var(--global-color-neutral-gray-50)',
    borderRadius: 'var(--global-spacing-radius-8px)',
    minWidth: '200px',
    width: '100%'
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
}`,...(ne=(le=z.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var re,se,te;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Vertical / Thickness Scale (Solid)',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-24px)',
    height: 'var(--global-spacing-sizing-80px)',
    padding: 'var(--global-spacing-sizing-24px)',
    background: 'var(--global-color-neutral-gray-50)',
    borderRadius: 'var(--global-spacing-radius-8px)',
    minWidth: '200px',
    width: '100%'
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
}`,...(te=(se=j.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,de,ce;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'In Context / Between Content Blocks',
  render: () => <div style={{
    minWidth: '200px',
    width: '100%',
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
}`,...(ce=(de=S.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ge,xe;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(xe=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};const De=["Documentation","Playground","HorizontalSolid","HorizontalDashed","HorizontalDotted","HorizontalAllStyles","HorizontalThicknessScale","HorizontalFullMatrix","VerticalAllStyles","VerticalThicknessScale","BetweenContentBlocks","BetweenInlineItems"];export{S as BetweenContentBlocks,k as BetweenInlineItems,x as Documentation,b as HorizontalAllStyles,h as HorizontalDashed,y as HorizontalDotted,f as HorizontalFullMatrix,v as HorizontalSolid,u as HorizontalThicknessScale,m as Playground,z as VerticalAllStyles,j as VerticalThicknessScale,De as __namedExportsOrder,ke as default};
