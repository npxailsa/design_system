import{j as e,R as L}from"./iframe-KonIzXCq.js";import{D as qe}from"./Divider-CV-865H6.js";import{D as a}from"./DocsTemplate-rm8dncqn.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-ChlAzVFn.js";import"./memoTheme-DBFZrnrT.js";const Ke="_divider_1f5ln_20",g={divider:Ke,"divider--horizontal":"_divider--horizontal_1f5ln_35","divider--vertical":"_divider--vertical_1f5ln_52","divider--solid":"_divider--solid_1f5ln_69","divider--dashed":"_divider--dashed_1f5ln_70","divider--dotted":"_divider--dotted_1f5ln_71","divider--0-5px":"_divider--0-5px_1f5ln_85","divider--1px":"_divider--1px_1f5ln_86","divider--2px":"_divider--2px_1f5ln_87","divider--3px":"_divider--3px_1f5ln_88","divider--4px":"_divider--4px_1f5ln_89","divider--8px":"_divider--8px_1f5ln_90"},n=({line:i="solid",thickness:l="1px",alignment:d="horizontal",className:Ee="",ariaLabel:Ue="Divider"})=>{const $e=[g.divider,g[`divider--${d}`],g[`divider--${i}`],g[`divider--${l}`],Ee].filter(Boolean).join(" ");return e.jsx(qe,{orientation:d==="vertical"?"vertical":"horizontal","aria-label":Ue,className:$e,sx:{borderColor:"transparent",borderStyle:"initial",margin:0,flexShrink:0}})};n.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{line:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Line style for the divider.
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:"'0-5px' | '1px' | '2px' | '3px' | '4px' | '8px'",elements:[{name:"literal",value:"'0-5px'"},{name:"literal",value:"'1px'"},{name:"literal",value:"'2px'"},{name:"literal",value:"'3px'"},{name:"literal",value:"'4px'"},{name:"literal",value:"'8px'"}]},description:`Border thickness of the divider.
Maps directly to the stroke scale: 0.5px / 1px / 2px / 3px / 4px / 8px.
@default '1px'`,defaultValue:{value:"'1px'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Orientation of the divider.\n- `horizontal` — spans the full width of its container (default)\n- `vertical`   — spans the full height of its container\n@default 'horizontal'",defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional extra class for layout overrides (margins, width caps, etc.).",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label — screen readers announce the presence of the separator.
@default 'Divider'`,defaultValue:{value:"'Divider'",computed:!1}}}};const t={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},c={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)"},r={fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",minWidth:"72px",flexShrink:0},Oe={fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-medium)",color:"var(--global-color-neutral-gray-700)",margin:"0 0 var(--global-spacing-sizing-12px)",textTransform:"capitalize"},N={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-32px)",height:"var(--global-spacing-sizing-80px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},B=["solid","dashed","dotted"],R=["0-5px","1px","2px","3px","4px","8px"],A=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Divider",subtitle:"A lightweight, fully token-driven separator line for creating visual breaks between content sections, layout regions, and list items."}),e.jsxs(a.BodyText,{children:[e.jsx("strong",{children:"Divider"})," is an Atom-level layout primitive that renders a single separator line. It supports two orientations (",e.jsx("code",{children:"horizontal"})," and"," ",e.jsx("code",{children:"vertical"}),"), three line styles (",e.jsx("code",{children:"solid"}),", ",e.jsx("code",{children:"dashed"}),","," ",e.jsx("code",{children:"dotted"}),"), and six stroke thicknesses (0.5px – 8px). All values reference global design tokens — no hardcoded numbers or colours are used."]}),e.jsxs(a.Section,{title:"MUI Foundation",children:[e.jsxs(a.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"Divider"})," component (",e.jsx("code",{children:"@mui/material/Divider"}),")."," ",e.jsx("code",{children:"MuiDivider"})," provides the correct accessible semantics — it renders as an"," ",e.jsx("code",{children:"<hr>"})," for horizontal dividers and as a styled"," ",e.jsx("code",{children:'<div role="separator" aria-orientation="vertical">'})," for vertical ones. This ensures screen readers correctly identify the element as a separator landmark. All visual properties — line style, stroke thickness, and colour — are applied on top via CSS Modules and the ",e.jsx("code",{children:"--divider-*"})," / ",e.jsx("code",{children:"--global-spacing-stroke-*"})," ","token family; MUI contributes no colour or width of its own."]}),e.jsx(a.CodeBlock,{children:`// MUI base import
import MuiDivider from '@mui/material/Divider';

// Horizontal (default):
<MuiDivider className={styles.divider} data-line={line} data-thickness={thickness} />

// Vertical:
<MuiDivider orientation="vertical" className={styles.divider} data-line={line} />`})]}),e.jsx(a.Section,{title:"Component Anatomy",children:e.jsx(a.Anatomy,{preview:e.jsxs("div",{style:{...t,gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(n,{alignment:"horizontal",line:"solid",thickness:"1px"}),e.jsx(n,{alignment:"horizontal",line:"dashed",thickness:"1px"}),e.jsx(n,{alignment:"horizontal",line:"dotted",thickness:"2px"})]}),parts:[{id:1,name:"Horizontal divider",token:"--divider-color, --global-spacing-stroke-*",description:"A full-width line rendered via border-top. Stretches to 100% of its containing block. Height is zero — all visual weight comes from the border-top-width stroke token."},{id:2,name:"Vertical divider",token:"--divider-color, --global-spacing-stroke-*",description:"A full-height line rendered via border-left. Uses align-self: stretch to fill the height of its flex or grid parent. Width is zero."},{id:3,name:"Line style",token:"CSS border-*-style property",description:"Solid — continuous line. Dashed — broken segments. Dotted — circular dots. Applied via CSS modifier classes."},{id:4,name:"Thickness",token:"--global-spacing-stroke-0-5px → --global-spacing-stroke-8px",description:"Six steps from hairline (0.5px) to heavy (8px), driven by the global stroke token scale."}]})}),e.jsxs(a.Section,{title:"Horizontal",subtitle:"Spans 100% of its container width. Use between stacked sections, list items, form groups, and card regions.",children:[e.jsxs(a.Subsection,{title:"Horizontal / Solid",children:[e.jsx("div",{style:t,children:e.jsxs("div",{style:c,children:[e.jsx("span",{style:r,children:"solid"}),e.jsx("div",{style:{flex:1},children:e.jsx(n,{alignment:"horizontal",line:"solid",thickness:"1px"})})]})}),e.jsx(a.BodyText,{children:"Continuous, unbroken line. The default and most common line style. Use for definitive boundaries between distinct content regions."})]}),e.jsxs(a.Subsection,{title:"Horizontal / Dashed",children:[e.jsx("div",{style:t,children:e.jsxs("div",{style:c,children:[e.jsx("span",{style:r,children:"dashed"}),e.jsx("div",{style:{flex:1},children:e.jsx(n,{alignment:"horizontal",line:"dashed",thickness:"1px"})})]})}),e.jsx(a.BodyText,{children:"Segmented broken line. Signals softer, optional, or provisional separation — suitable for data tables, empty-state placeholders, and drag-and-drop drop zones."})]}),e.jsxs(a.Subsection,{title:"Horizontal / Dotted",children:[e.jsx("div",{style:t,children:e.jsxs("div",{style:c,children:[e.jsx("span",{style:r,children:"dotted"}),e.jsx("div",{style:{flex:1},children:e.jsx(n,{alignment:"horizontal",line:"dotted",thickness:"1px"})})]})}),e.jsx(a.BodyText,{children:"Circular-dot line. Use sparingly for decorative or subtle context separations where a dashed line would appear too heavy."})]}),e.jsx(a.Subsection,{title:"Horizontal / All Line Styles",children:e.jsx("div",{style:t,children:B.map(i=>e.jsxs("div",{style:c,children:[e.jsx("span",{style:r,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(n,{alignment:"horizontal",line:i,thickness:"1px"})})]},i))})}),e.jsxs(a.Subsection,{title:"Horizontal / Thickness Scale (Solid)",children:[e.jsx("div",{style:t,children:R.map(i=>e.jsxs("div",{style:c,children:[e.jsx("span",{style:r,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(n,{alignment:"horizontal",line:"solid",thickness:i})})]},i))}),e.jsxs(a.BodyText,{children:["Six stroke steps driven entirely by ",e.jsx("code",{children:"--global-spacing-stroke-*"})," tokens. Use thin lines (0.5px–1px) within sections, thicker lines (2px–4px) at major boundaries, and 8px only for top-level structural breaks."]})]}),e.jsx(a.Subsection,{title:"Horizontal / Full Matrix",children:e.jsx("div",{style:{...t,gap:"var(--global-spacing-sizing-36px)"},children:B.map(i=>e.jsxs("div",{children:[e.jsx("p",{style:Oe,children:i}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:R.map(l=>e.jsxs("div",{style:c,children:[e.jsx("span",{style:r,children:l}),e.jsx("div",{style:{flex:1},children:e.jsx(n,{alignment:"horizontal",line:i,thickness:l})})]},l))})]},i))})})]}),e.jsxs(a.Section,{title:"Vertical",subtitle:"Stretches to the full height of its flex or grid parent. Use to separate inline columns, sidebar items, navigation breadcrumbs, and toolbar groups.",children:[e.jsxs(a.BodyText,{children:["Vertical dividers require their parent to be a ",e.jsx("strong",{children:"flex"})," or"," ",e.jsx("strong",{children:"grid"})," container with a defined height. The divider uses"," ",e.jsx("code",{children:"align-self: stretch"})," internally — no explicit height prop is needed."]}),e.jsx(a.Subsection,{title:"Vertical / All Line Styles",children:e.jsx("div",{style:N,children:B.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(n,{alignment:"vertical",line:i,thickness:"1px"}),e.jsx("span",{style:{...r,minWidth:"auto",textAlign:"center"},children:i})]},i))})}),e.jsx(a.Subsection,{title:"Vertical / Thickness Scale (Solid)",children:e.jsx("div",{style:N,children:R.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(n,{alignment:"vertical",line:"solid",thickness:i}),e.jsx("span",{style:{...r,minWidth:"auto",textAlign:"center"},children:i})]},i))})})]}),e.jsxs(a.Section,{title:"In Context",subtitle:"How dividers integrate with real content elements.",children:[e.jsx(a.Subsection,{title:"In Context / Between Content Blocks",children:e.jsxs("div",{style:{minWidth:"200px",width:"100%",maxWidth:"480px",display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Personal Details"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Name, email, and phone number"})]}),e.jsx(n,{alignment:"horizontal",line:"solid",thickness:"0-5px"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Preferences"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Notifications and display settings"})]}),e.jsx(n,{alignment:"horizontal",line:"solid",thickness:"0-5px"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Security"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Password and two-factor authentication"})]})]})}),e.jsx(a.Subsection,{title:"In Context / Between Inline Items",children:e.jsx("nav",{style:{display:"inline-flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-12px) var(--global-spacing-sizing-20px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 1px 4px rgba(0,0,0,0.1)"},children:["Dashboard","Reports","Analytics","Settings"].map((i,l,d)=>e.jsxs(L.Fragment,{children:[e.jsx("span",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:l===0?"var(--global-color-primary-blue)":"var(--global-color-neutral-gray-600)",cursor:"pointer"},children:i}),l<d.length-1&&e.jsx(n,{alignment:"vertical",line:"solid",thickness:"1px"})]},i))})})]}),e.jsxs(a.Section,{title:"Design Tokens",children:[e.jsx(a.Subsection,{title:"Component Token",children:e.jsx(a.TokenTable,{tokens:[{name:"--divider-color",description:"Divider line colour — resolves to var(--global-color-neutral-gray-300) #D2D5DA. Neutral and unobtrusive by default. Defined in tokens.css; do not override per-instance."}]})}),e.jsx(a.Subsection,{title:"Stroke Scale — Global Tokens",children:e.jsx(a.TokenTable,{tokens:[{name:"--global-spacing-stroke-0-5px",description:"Hairline — 0.5px. Ideal for subtle list separators and compact toolbar dividers."},{name:"--global-spacing-stroke-1px",description:"Standard — 1px. Most common default; use for the majority of horizontal and vertical dividers."},{name:"--global-spacing-stroke-2px",description:"Medium emphasis — 2px. Section-level boundaries within a content area."},{name:"--global-spacing-stroke-3px",description:"Heavy emphasis — 3px. Strong visual break between major groups."},{name:"--global-spacing-stroke-4px",description:"Strong section break — 4px. Use at top-level content region borders."},{name:"--global-spacing-stroke-8px",description:"Bold separator — 8px. Use sparingly for navigation/content structural splits."}]})})]}),e.jsx(a.Section,{title:"Props Reference",children:e.jsx(a.TokenTable,{tokens:[{name:"line",description:'"solid" | "dashed" | "dotted" — line style of the divider. Default: "solid".'},{name:"thickness",description:'"0-5px" | "1px" | "2px" | "3px" | "4px" | "8px" — stroke width mapped to the global stroke token scale. Default: "1px".'},{name:"alignment",description:'"horizontal" | "vertical" — orientation. Horizontal spans container width; vertical spans container height. Default: "horizontal".'},{name:"className",description:"string — optional CSS class for layout overrides such as margin, max-width, or flex-grow."},{name:"ariaLabel",description:'string — accessible label announced by screen readers. Default: "Divider".'}]})}),e.jsx(a.Section,{title:"Usage",children:e.jsx(a.CodeBlock,{children:`import { Divider } from './Divider';

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
<Divider className={styles.myDivider} line="dashed" thickness="1px" />`})}),e.jsx(a.Section,{title:"Design Principles",children:e.jsxs(a.Principles,{children:[e.jsxs(a.PrincipleCard,{number:1,title:"Neutral by default",children:["The divider colour (",e.jsx("code",{children:"--divider-color"}),") maps to"," ",e.jsx("code",{children:"--global-color-neutral-gray-300"})," — visible enough to delineate structure without competing with content. Do not override the colour to a brand or status value unless there is a deliberate semantic reason."]}),e.jsx(a.PrincipleCard,{number:2,title:"Match weight to hierarchy",children:"Use thin strokes (0.5px–1px) for subtle separation within a section. Use thicker strokes (2px–4px) at major section boundaries. Reserve 8px for top-level structural breaks such as navigation/content divides."}),e.jsx(a.PrincipleCard,{number:3,title:"Solid for primary, dashed/dotted for secondary",children:"Solid conveys a definitive boundary. Dashed signals softer or provisional separation — use in data tables, drag-and-drop zones, or empty states. Dotted is decorative; use sparingly."}),e.jsxs(a.PrincipleCard,{number:4,title:"Vertical dividers require a flex or grid parent",children:["Vertical dividers use ",e.jsx("code",{children:"align-self: stretch"})," internally. The parent must be a flex or grid container with a defined height. No explicit height prop is needed — the component fills the container automatically."]})]})}),e.jsx(a.Footer,{})]});A.__docgenInfo={description:"",methods:[],displayName:"DividerDocs"};const H=["solid","dashed","dotted"],C=["0-5px","1px","2px","3px","4px","8px"],Ge=["horizontal","vertical"],ai={title:"Atoms/Divider",component:n,parameters:{docs:{page:()=>e.jsx(A,{})}},argTypes:{line:{control:"select",options:H},thickness:{control:"select",options:C},alignment:{control:"select",options:Ge},ariaLabel:{control:"text"},className:{control:!1}},args:{line:"solid",thickness:"1px",alignment:"horizontal",ariaLabel:"Divider"}},o={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},p={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-12px)"},s={fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",minWidth:"72px",flexShrink:0},Je={fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-medium)",color:"var(--global-color-neutral-gray-700)",margin:"0 0 var(--global-spacing-sizing-12px)",textTransform:"capitalize"},x={name:"Documentation",tags:["!autodocs"],parameters:{docs:{page:()=>e.jsx(A,{})},chromatic:{disableSnapshot:!0}},render:()=>e.jsx(A,{})},m={name:"Playground",render:i=>i.alignment==="vertical"?e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"var(--global-spacing-sizing-80px)",padding:"var(--global-spacing-sizing-16px)",gap:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-primary)"},children:"Left content"}),e.jsx(n,{...i}),e.jsx("span",{style:{fontFamily:"var(--font-family-primary)"},children:"Right content"})]}):e.jsxs("div",{style:{...o,gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-primary)"},children:"Content above"}),e.jsx(n,{...i}),e.jsx("span",{style:{fontFamily:"var(--font-family-primary)"},children:"Content below"})]})},h={name:"Default",args:{alignment:"horizontal",line:"solid",thickness:"1px"}},v={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"16px",minWidth:"200px"},children:["0-5px","1px","2px","3px","4px","8px"].map(i=>e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)",display:"block",marginBottom:"4px"},children:i}),e.jsx(n,{alignment:"horizontal",line:"solid",thickness:i})]},i))}),parameters:{controls:{disable:!0}}},y={name:"Status / Solid",args:{alignment:"horizontal",line:"solid",thickness:"1px"}},u={name:"Status / Dashed",args:{alignment:"horizontal",line:"dashed",thickness:"1px"}},b={name:"Status / Dotted",args:{alignment:"horizontal",line:"dotted",thickness:"1px"}},f={name:"Component Breakdown",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",minWidth:"200px",maxWidth:"480px"},children:["solid","dashed","dotted"].map(i=>e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,fontFamily:"var(--brand-font-primary)",color:"var(--global-color-neutral-gray-600)",display:"block",marginBottom:"8px"},children:i}),e.jsx(n,{alignment:"horizontal",line:i,thickness:"1px"}),e.jsxs("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px",display:"inline-block",marginTop:"4px"},children:["--divider-line-",i," / --divider-thickness-1px"]})]},i))}),parameters:{controls:{disable:!0}}},z={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"24px",minWidth:"200px",maxWidth:"480px"},children:[e.jsx(n,{alignment:"horizontal",line:"solid",thickness:"1px"}),e.jsx(n,{alignment:"horizontal",line:"dashed",thickness:"2px"}),e.jsx(n,{alignment:"horizontal",line:"dotted",thickness:"1px"})]}),parameters:{controls:{disable:!0}}},j={name:"Horizontal / Solid",args:{alignment:"horizontal",line:"solid",thickness:"1px"},render:i=>e.jsx("div",{style:o,children:e.jsxs("div",{style:{...p},children:[e.jsx("span",{style:s,children:"solid"}),e.jsx("div",{style:{flex:1},children:e.jsx(n,{...i})})]})})},S={name:"Horizontal / Dashed",args:{alignment:"horizontal",line:"dashed",thickness:"1px"},render:i=>e.jsx("div",{style:o,children:e.jsxs("div",{style:{...p},children:[e.jsx("span",{style:s,children:"dashed"}),e.jsx("div",{style:{flex:1},children:e.jsx(n,{...i})})]})})},k={name:"Horizontal / Dotted",args:{alignment:"horizontal",line:"dotted",thickness:"1px"},render:i=>e.jsx("div",{style:o,children:e.jsxs("div",{style:{...p},children:[e.jsx("span",{style:s,children:"dotted"}),e.jsx("div",{style:{flex:1},children:e.jsx(n,{...i})})]})})},D={name:"Horizontal / All Line Styles",render:()=>e.jsx("div",{style:o,children:H.map(i=>e.jsxs("div",{style:p,children:[e.jsx("span",{style:s,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(n,{alignment:"horizontal",line:i,thickness:"1px"})})]},i))}),parameters:{controls:{disable:!0}}},w={name:"Horizontal / Thickness Scale (Solid)",render:()=>e.jsx("div",{style:o,children:C.map(i=>e.jsxs("div",{style:p,children:[e.jsx("span",{style:s,children:i}),e.jsx("div",{style:{flex:1},children:e.jsx(n,{alignment:"horizontal",line:"solid",thickness:i})})]},i))}),parameters:{controls:{disable:!0}}},I={name:"Full Design Matrix (36 variants)",render:()=>e.jsx("div",{style:{...o,gap:"var(--global-spacing-sizing-36px)"},children:H.map(i=>e.jsxs("div",{children:[e.jsx("p",{style:Je,children:i}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:C.map(l=>e.jsxs("div",{style:p,children:[e.jsx("span",{style:s,children:l}),e.jsx("div",{style:{flex:1},children:e.jsx(n,{alignment:"horizontal",line:i,thickness:l})})]},l))})]},i))}),parameters:{controls:{disable:!0}}},W={name:"Vertical / All Line Styles",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-32px)",height:"var(--global-spacing-sizing-80px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},children:H.map(i=>e.jsx(L.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(n,{alignment:"vertical",line:i,thickness:"1px"}),e.jsx("span",{style:{...s,minWidth:"auto",textAlign:"center"},children:i})]})},i))}),parameters:{controls:{disable:!0}}},F={name:"Vertical / Thickness Scale (Solid)",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",height:"var(--global-spacing-sizing-80px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},children:C.map(i=>e.jsx(L.Fragment,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(n,{alignment:"vertical",line:"solid",thickness:i}),e.jsx("span",{style:{...s,minWidth:"auto",textAlign:"center"},children:i})]})},i))}),parameters:{controls:{disable:!0}}},_={name:"In Context / Between Content Blocks",render:()=>e.jsxs("div",{style:{minWidth:"200px",width:"100%",maxWidth:"480px",display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Personal Details"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Name, email, and phone number"})]}),e.jsx(n,{alignment:"horizontal",line:"solid",thickness:"0-5px"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Preferences"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Notifications and display settings"})]}),e.jsx(n,{alignment:"horizontal",line:"solid",thickness:"0-5px"}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-4px)",fontFamily:"var(--font-family-primary)",fontWeight:600,fontSize:"var(--global-type-size-primary-label)"},children:"Security"}),e.jsx("p",{style:{margin:0,fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-600)"},children:"Password and two-factor authentication"})]})]}),parameters:{controls:{disable:!0}}},T={name:"In Context / Between Inline Items",render:()=>e.jsx("nav",{style:{display:"inline-flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-12px) var(--global-spacing-sizing-20px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 1px 4px rgba(0,0,0,0.1)"},children:["Dashboard","Reports","Analytics","Settings"].map((i,l,d)=>e.jsxs(L.Fragment,{children:[e.jsx("span",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:l===0?"var(--global-color-primary-blue)":"var(--global-color-neutral-gray-600)",cursor:"pointer"},children:i}),l<d.length-1&&e.jsx(n,{alignment:"vertical",line:"solid",thickness:"1px"})]},i))}),parameters:{controls:{disable:!0}}};var V,P,M;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(P=x.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var E,U,$;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...($=(U=m.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var q,K,O;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    alignment: 'horizontal',
    line: 'solid',
    thickness: '1px'
  }
}`,...(O=(K=h.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var G,J,Q;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '16px',
    minWidth: '200px'
  }}>
      {(['0-5px', '1px', '2px', '3px', '4px', '8px'] as const).map(t => <div key={t}>
          <span style={{
        fontSize: '10px',
        color: 'var(--global-color-neutral-gray-400)',
        fontFamily: 'var(--brand-font-secondary)',
        display: 'block',
        marginBottom: '4px'
      }}>{t}</span>
          <Divider alignment="horizontal" line="solid" thickness={t} />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Status / Solid',
  args: {
    alignment: 'horizontal',
    line: 'solid',
    thickness: '1px'
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ie,ae;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Status / Dashed',
  args: {
    alignment: 'horizontal',
    line: 'dashed',
    thickness: '1px'
  }
}`,...(ae=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var ne,le,re;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Status / Dotted',
  args: {
    alignment: 'horizontal',
    line: 'dotted',
    thickness: '1px'
  }
}`,...(re=(le=b.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var se,te,oe;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    minWidth: '200px',
    maxWidth: '480px'
  }}>
      {(['solid', 'dashed', 'dotted'] as const).map(line => <div key={line}>
          <span style={{
        fontSize: '11px',
        fontWeight: 600,
        fontFamily: 'var(--brand-font-primary)',
        color: 'var(--global-color-neutral-gray-600)',
        display: 'block',
        marginBottom: '8px'
      }}>{line}</span>
          <Divider alignment="horizontal" line={line} thickness="1px" />
          <code style={{
        fontSize: '10px',
        background: 'var(--global-color-neutral-gray-100)',
        padding: '2px 6px',
        borderRadius: '4px',
        display: 'inline-block',
        marginTop: '4px'
      }}>--divider-line-{line} / --divider-thickness-1px</code>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(te=f.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var de,ce,pe;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '24px',
    minWidth: '200px',
    maxWidth: '480px'
  }}>
      <Divider alignment="horizontal" line="solid" thickness="1px" />
      <Divider alignment="horizontal" line="dashed" thickness="2px" />
      <Divider alignment="horizontal" line="dotted" thickness="1px" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pe=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ge,xe,me;j.parameters={...j.parameters,docs:{...(ge=j.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(me=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:me.source}}};var he,ve,ye;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var ue,be,fe;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(fe=(be=k.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ze,je,Se;D.parameters={...D.parameters,docs:{...(ze=D.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Se=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var ke,De,we;w.parameters={...w.parameters,docs:{...(ke=w.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(we=(De=w.parameters)==null?void 0:De.docs)==null?void 0:we.source}}};var Ie,We,Fe;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Full Design Matrix (36 variants)',
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
}`,...(Fe=(We=I.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};var _e,Te,Ae;W.parameters={...W.parameters,docs:{...(_e=W.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ae=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Le,He,Ce;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ce=(He=F.parameters)==null?void 0:He.docs)==null?void 0:Ce.source}}};var Be,Re,Ne;_.parameters={..._.parameters,docs:{...(Be=_.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(Ne=(Re=_.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};var Ve,Pe,Me;T.parameters={...T.parameters,docs:{...(Ve=T.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Me=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:Me.source}}};const ni=["Documentation","Playground","Default","Sizes","StatusSolid","StatusDashed","StatusDotted","ComponentBreakdown","AllInteractiveStates","HorizontalSolid","HorizontalDashed","HorizontalDotted","HorizontalAllStyles","HorizontalThicknessScale","FullDesignMatrix","VerticalAllStyles","VerticalThicknessScale","BetweenContentBlocks","BetweenInlineItems"];export{z as AllInteractiveStates,_ as BetweenContentBlocks,T as BetweenInlineItems,f as ComponentBreakdown,h as Default,x as Documentation,I as FullDesignMatrix,D as HorizontalAllStyles,S as HorizontalDashed,k as HorizontalDotted,j as HorizontalSolid,w as HorizontalThicknessScale,m as Playground,v as Sizes,u as StatusDashed,b as StatusDotted,y as StatusSolid,W as VerticalAllStyles,F as VerticalThicknessScale,ni as __namedExportsOrder,ai as default};
