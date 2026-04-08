import{j as e}from"./iframe-ClL5mja9.js";import{B as t}from"./ButtonGroup-0PK42ncN.js";import{D as l}from"./DocsTemplate-BGea9yui.js";import"./preload-helper-Dp1pzeXC.js";import"./Person-D0eZIbS2.js";import"./createSvgIcon-C5kVz2Pi.js";const He=["primary","secondary","tertiary","ghost"],F=["lg","md","sm","xs"],p={display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},P={fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",marginBottom:"var(--global-spacing-sizing-8px)",textTransform:"uppercase",letterSpacing:"0.08em"},k=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"Button Group",subtitle:"Horizontal clusters of icon-only or label-type buttons in joined or separate layouts. Supports two button types, four colour variants, four sizes, and two special styles."}),e.jsxs(l.BodyText,{children:["The ",e.jsx("strong",{children:"Button Group"})," component combines multiple buttons into a cohesive horizontal cluster. Two ",e.jsx("strong",{children:"button types"})," are available:"]}),e.jsxs(l.BodyText,{children:[e.jsx("strong",{children:"Icon type"})," (",e.jsx("code",{children:'buttonType="icon"'}),") — square icon-only buttons matching the density requirements of toolbars and data views.",e.jsx("br",{}),e.jsx("strong",{children:"Label type"})," (",e.jsx("code",{children:'buttonType="label"'}),") — rectangular buttons with a leading icon, text label, and trailing arrow — ideal for navigation, filter controls, and action triggers that benefit from explicit labels."]}),e.jsx(l.Section,{title:"Component Anatomy",children:e.jsx(l.Anatomy,{preview:e.jsxs("div",{style:p,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-600)"},children:"Icon / Joined"}),e.jsx(t,{variant:"primary",size:"md",layout:"joined",count:4,buttonType:"icon"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-600)"},children:"Icon / Separate"}),e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"icon"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-600)"},children:"Label / Default"}),e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"default",buttons:[{label:"Label"},{label:"Label"}]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-600)"},children:"Label / Alt"}),e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"alt",buttons:[{label:"Label"},{label:"Label"}]})]})]}),parts:[{id:1,name:"Container",token:"--btn-group-radius, --btn-group-gap-separate",description:"Flex row. Joined: gap:0, merged borders. Separate: 6px gap, full radius on each button."},{id:2,name:"Button slot (icon)",token:"--btn-group-size-md (42×42px)",description:"Square icon-only button. Border-radius adjusted per position in joined mode."},{id:3,name:"Icon",token:"--btn-group-icon-size-md (18px)",description:"PersonIcon centred in the slot. Scales with size prop."},{id:4,name:"Button slot (label)",token:"--btn-group-label-height-md (44px), --btn-group-label-padding-md",description:"Rectangular button with leading icon + text + trailing arrow."},{id:5,name:"Label text",token:"--btn-group-label-font-size-md, --btn-group-label-font-weight",description:"F37 Ginger, light weight. Scales with size prop."},{id:6,name:"Trailing arrow",token:"Inherits button color",description:"Arrow-right icon indicating action/navigation."},{id:7,name:"Loading spinner",token:"Replaces icon when loading=true",description:"Animated arc spinner. Shown on all buttons when loading=true, or per-button via buttons[n].loading."}]})}),e.jsxs(l.Section,{title:"Button Types",children:[e.jsx(l.Subsection,{title:"Icon Type (default)",children:e.jsx("div",{style:p,children:He.map(a=>e.jsx(t,{variant:a,size:"md",layout:"joined",count:4,buttonType:"icon"},a))})}),e.jsxs(l.Subsection,{title:"Label Type — special=default (solid)",children:[e.jsxs(l.BodyText,{children:["Solid filled style. The button colour follows the ",e.jsx("code",{children:"variant"})," prop. Defined in Figma as ",e.jsx("em",{children:"special=default"}),"."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:["primary","secondary","ghost"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{...P,marginBottom:0,width:80},children:a}),e.jsx(t,{variant:a,size:"md",layout:"separate",buttonType:"label",special:"default",buttons:[{label:"Label"},{label:"Label"}]})]},a))})]}),e.jsxs(l.Subsection,{title:"Label Type — special=alt (tinted/outlined)",children:[e.jsxs(l.BodyText,{children:["Tinted outline style: light blue background (",e.jsx("code",{children:"#F9F9FE"}),"), blue border (",e.jsx("code",{children:"#95A0E5"}),"), blue-gray text. Defined in Figma as ",e.jsx("em",{children:"special=alt"}),". Use when you need a softer, secondary feel for label buttons."]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center"},children:F.map(a=>e.jsx(t,{variant:"primary",size:a,layout:"separate",buttonType:"label",special:"alt",buttons:[{label:"Label"},{label:"Label"}]},a))})]})]}),e.jsxs(l.Section,{title:"Layouts",children:[e.jsxs(l.Subsection,{title:"Joined",children:[e.jsx(l.BodyText,{children:"Buttons share borders — no gap, merged border-radius per position (left/middle/right)."}),e.jsx("div",{style:p,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"primary",size:"md",layout:"joined",count:4,buttonType:"icon"}),e.jsx(t,{variant:"primary",size:"md",layout:"joined",buttonType:"label",special:"default",buttons:[{label:"Label"},{label:"Label"}]})]})})]}),e.jsxs(l.Subsection,{title:"Separate",children:[e.jsx(l.BodyText,{children:"6px gap between each button. In icon mode, the second button is always ghost for visual contrast."}),e.jsx("div",{style:p,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"icon"}),e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"default",buttons:[{label:"Label"},{label:"Label"}]}),e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"alt",buttons:[{label:"Label"},{label:"Label"}]})]})})]})]}),e.jsxs(l.Section,{title:"Sizes",children:[e.jsx(l.Subsection,{title:"Icon Type — All Sizes",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"},children:F.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{...P,marginBottom:0,width:40},children:a}),e.jsx(t,{variant:"primary",size:a,layout:"joined",count:4,buttonType:"icon"})]},a))})}),e.jsx(l.Subsection,{title:"Label Type — All Sizes",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"flex-start"},children:F.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{...P,marginBottom:0,width:40},children:a}),e.jsx(t,{variant:"primary",size:a,layout:"separate",buttonType:"label",special:"default",buttons:[{label:"Label"},{label:"Label"}]}),e.jsx(t,{variant:"primary",size:a,layout:"separate",buttonType:"label",special:"alt",buttons:[{label:"Label"},{label:"Label"}]})]},a))})})]}),e.jsxs(l.Section,{title:"States",children:[e.jsx(l.Subsection,{title:"Icon Type",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"24px",alignItems:"flex-end"},children:[{label:"Default",el:e.jsx(t,{variant:"primary",size:"md",layout:"joined",count:4,buttonType:"icon"})},{label:"Loading",el:e.jsx(t,{variant:"primary",size:"md",layout:"joined",count:4,buttonType:"icon",loading:!0})},{label:"Disabled",el:e.jsx(t,{variant:"primary",size:"md",layout:"joined",count:4,buttonType:"icon",disabled:!0})},{label:"Ghost disabled",el:e.jsx(t,{variant:"ghost",size:"md",layout:"joined",count:4,buttonType:"icon",disabled:!0})}].map(({label:a,el:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",alignItems:"center"},children:[i,e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)"},children:a})]},a))})}),e.jsx(l.Subsection,{title:"Label Type",children:e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"24px",alignItems:"flex-end"},children:[{label:"Default (solid)",el:e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"default",buttons:[{label:"Label"},{label:"Label"}]})},{label:"Default (alt)",el:e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"alt",buttons:[{label:"Label"},{label:"Label"}]})},{label:"Loading",el:e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"default",loading:!0,buttons:[{label:"Saving…"},{label:"Loading"}]})},{label:"Disabled (solid)",el:e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"default",disabled:!0,buttons:[{label:"Label"},{label:"Label"}]})},{label:"Disabled (alt)",el:e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"alt",disabled:!0,buttons:[{label:"Label"},{label:"Label"}]})}].map(({label:a,el:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",alignItems:"center"},children:[i,e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textAlign:"center"},children:a})]},a))})})]}),e.jsxs(l.Section,{title:"Design Tokens",children:[e.jsx(l.Subsection,{title:"Shared",children:e.jsx(l.TokenTable,{tokens:[{name:"--btn-group-radius",description:"Border radius — var(--global-spacing-radius-4px)"},{name:"--btn-group-border-width",description:"Outline/ghost border — var(--global-spacing-stroke-1px)"},{name:"--btn-group-border-width-filled",description:"Filled variant border — var(--global-spacing-stroke-0-5px)"},{name:"--btn-group-gap-separate",description:"Gap in separate layout — var(--global-spacing-sizing-6px)"},{name:"--btn-group-bg-disabled",description:"Disabled background — var(--global-color-neutral-gray-50)"},{name:"--btn-group-border-disabled",description:"Disabled border — var(--global-color-neutral-gray-200)"},{name:"--btn-group-color-disabled",description:"Disabled icon/text — var(--global-color-neutral-gray-400)"},{name:"--btn-group-border-width-focus",description:"Focus border width — var(--global-spacing-stroke-2px)"},{name:"--btn-group-focus-outline-color",description:"Focus outline colour — var(--global-color-primary-blue)"},{name:"--btn-group-focus-outline-width",description:"Focus outline width — var(--global-spacing-stroke-2px)"},{name:"--btn-group-focus-outline-offset",description:"Focus outline offset — var(--global-spacing-sizing-2px)"}]})}),e.jsxs(l.Subsection,{title:"Icon Variant Hover Shadows (separate layout)",children:[e.jsxs(l.BodyText,{children:["In ",e.jsx("code",{children:"separate"})," layout, each button receives a ",e.jsx("code",{children:"box-shadow"})," on hover matching the Primary Button hover pattern — a 2px offset shadow in the variant colour."]}),e.jsx(l.TokenTable,{tokens:[{name:"--btn-group-primary-shadow-hover",description:"Primary icon hover shadow — 2px 2px blue-400"},{name:"--btn-group-secondary-shadow-hover",description:"Secondary icon hover shadow — 2px 2px sky-blue"},{name:"--btn-group-tertiary-shadow-hover",description:"Tertiary icon hover shadow — 2px 2px yellow-dark"},{name:"--btn-group-ghost-shadow-hover",description:"Ghost icon hover shadow — 2px 2px gray-300"}]})]}),e.jsx(l.Subsection,{title:"Label Type",children:e.jsx(l.TokenTable,{tokens:[{name:"--btn-group-label-min-width",description:"Min width — var(--global-spacing-sizing-80px)"},{name:"--btn-group-label-inner-gap",description:"Gap between icon/text/arrow — var(--global-spacing-sizing-8px)"},{name:"--btn-group-label-font-weight",description:"Label text weight — var(--global-type-weight-light)"},{name:"--btn-group-label-height-md",description:"Default height — var(--global-spacing-sizing-44px)"},{name:"--btn-group-label-padding-md",description:"Default padding — 4px 16px (tokens)"},{name:"--btn-group-label-primary-bg",description:"Solid primary bg — var(--global-color-primary-blue)"},{name:"--btn-group-label-primary-color",description:"Solid primary text/icon — white"},{name:"--btn-group-label-primary-shadow-hover",description:"Primary label hover shadow (separate) — 2px 2px blue-400"},{name:"--btn-group-label-alt-bg",description:"Alt bg — var(--global-color-primary-blue-blue-50)"},{name:"--btn-group-label-alt-border",description:"Alt border — var(--global-color-primary-blue-blue-300)"},{name:"--btn-group-label-alt-color",description:"Alt text/icon — var(--global-color-secondary-blue-gray)"},{name:"--btn-group-label-alt-shadow-hover",description:"Alt label hover shadow (separate) — 2px 2px blue-300"},{name:"--btn-group-label-alt-color-hover",description:"Alt text colour on hover — var(--global-color-base-black)"}]})})]}),e.jsx(l.Section,{title:"Usage",children:e.jsx(l.CodeBlock,{children:`import { ButtonGroup } from '@/components/ButtonGroup';

// Icon type — joined (default)
<ButtonGroup variant="primary" size="md" layout="joined" count={4} />

// Icon type — separate (primary + ghost pair)
<ButtonGroup variant="primary" size="md" layout="separate" />

// Label type — solid (special=default)
<ButtonGroup
  buttonType="label"
  variant="primary"
  size="md"
  layout="separate"
  special="default"
  buttons={[{ label: 'Filter' }, { label: 'Sort' }]}
/>

// Label type — tinted/outlined (special=alt)
<ButtonGroup
  buttonType="label"
  variant="primary"
  size="md"
  layout="separate"
  special="alt"
  buttons={[{ label: 'Filter' }, { label: 'Sort' }]}
/>

// Loading state
<ButtonGroup
  buttonType="label"
  variant="primary"
  size="md"
  layout="separate"
  loading
  buttons={[{ label: 'Saving…' }, { label: 'Label' }]}
/>

// Disabled
<ButtonGroup variant="primary" size="md" layout="joined" count={4} disabled />

// With per-button config
<ButtonGroup
  variant="primary"
  size="md"
  layout="joined"
  buttons={[
    { ariaLabel: 'View', onClick: handleView },
    { ariaLabel: 'Edit', onClick: handleEdit, disabled: true },
    { ariaLabel: 'Share', onClick: handleShare },
  ]}
/>`})}),e.jsx(l.Section,{title:"Design Principles",children:e.jsxs(l.Principles,{children:[e.jsxs(l.PrincipleCard,{number:1,title:"Choose type by context",children:["Use ",e.jsx("code",{children:"icon"})," type for dense toolbars and data views where space is limited. Use ",e.jsx("code",{children:"label"})," type for navigation, filter bars, or actions that need explicit labels."]}),e.jsxs(l.PrincipleCard,{number:2,title:"Use special=alt for secondary emphasis",children:["The ",e.jsx("code",{children:"alt"})," tinted style is appropriate when the label group is a secondary control next to a more prominent element. The solid ",e.jsx("code",{children:"default"})," draws more attention."]}),e.jsxs(l.PrincipleCard,{number:3,title:"Match the density of the surrounding UI",children:["Choose size based on context — ",e.jsx("code",{children:"xs"}),"/",e.jsx("code",{children:"sm"})," for dense grids,",e.jsx("code",{children:"md"})," for standard toolbars, ",e.jsx("code",{children:"lg"})," for prominent headers."]}),e.jsx(l.PrincipleCard,{number:4,title:"Limit groups to 2–6 buttons",children:"Keep button groups concise. More than six unlabelled icon buttons become opaque to users. For label buttons, 2–3 is ideal. Use a dropdown for larger action sets."})]})}),e.jsx(l.Footer,{})]});k.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupDocs"};const s=["primary","secondary","tertiary","ghost"],o=["lg","md","sm","xs"],Oe=["joined","separate"],$e=["default","alt"],r={fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",marginBottom:"var(--global-spacing-sizing-12px)",textTransform:"uppercase",letterSpacing:"0.08em"},n={fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},ta={title:"Atoms/Buttons/Button Group",component:t,parameters:{docs:{page:()=>e.jsx(k,{})}},argTypes:{variant:{control:"select",options:s,description:"Colour variant: primary (blue), secondary (sky-blue), tertiary (yellow), ghost (outline)"},size:{control:"select",options:o,description:"Button slot size — xs, sm, md, lg"},layout:{control:"select",options:Oe,description:"joined — connected strip, no gap; separate — 6px gap"},buttonType:{control:"select",options:["icon","label"],description:"icon — square icon-only; label — icon + text + arrow"},special:{control:"select",options:$e,description:"special=alt uses the tinted/outlined light-blue style (label type only)"},count:{control:{type:"number",min:1,max:8},description:"Number of button slots"},disabled:{control:"boolean",description:"Disable all buttons in the group"},loading:{control:"boolean",description:"Show loading spinner on all buttons"}},args:{variant:"primary",size:"md",layout:"joined",buttonType:"icon",special:"default",count:4,disabled:!1,loading:!1}},d={name:"Documentation",render:()=>e.jsx(k,{}),parameters:{docs:{page:()=>e.jsx(k,{})},controls:{disable:!0}}},c={name:"Playground"},u={name:"Icon / All Variants × All Sizes",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:r,children:"Separate layout (primary + ghost pair)"}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"center",flexWrap:"wrap"},children:o.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(t,{variant:"primary",size:a,layout:"separate",buttonType:"icon"}),e.jsx("span",{style:n,children:a})]},a))})]}),s.map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:r,children:[a," · joined"]}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"center",flexWrap:"wrap"},children:o.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(t,{variant:a,size:i,layout:"joined",count:4,buttonType:"icon"}),e.jsx("span",{style:n,children:i})]},i))})]},a))]}),parameters:{controls:{disable:!0}}},b={name:"Icon / Primary",args:{variant:"primary",layout:"joined",count:4,buttonType:"icon"}},y={name:"Icon / Secondary",args:{variant:"secondary",layout:"joined",count:4,buttonType:"icon"}},g={name:"Icon / Tertiary",args:{variant:"tertiary",layout:"joined",count:4,buttonType:"icon"}},m={name:"Icon / Ghost",args:{variant:"ghost",layout:"joined",count:4,buttonType:"icon"}},x={name:"Icon / Joined Layout",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:s.map(a=>e.jsx(t,{variant:a,size:"md",layout:"joined",count:4,buttonType:"icon"},a))}),parameters:{controls:{disable:!0}}},v={name:"Icon / Separate Layout",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:s.map(a=>e.jsx(t,{variant:a,size:"md",layout:"separate",buttonType:"icon"},a))}),parameters:{controls:{disable:!0}}},f={name:"Icon / All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",alignItems:"flex-start"},children:o.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{...n,width:80},children:a}),e.jsx(t,{variant:"primary",size:a,layout:"joined",count:4,buttonType:"icon"})]},a))}),parameters:{controls:{disable:!0}}},h={name:"Icon / Disabled",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:s.map(a=>e.jsx(t,{variant:a,size:"md",layout:"joined",count:4,buttonType:"icon",disabled:!0},a))}),parameters:{controls:{disable:!0}}},j={name:"Icon / Loading",render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",size:"md",layout:"joined",count:4,buttonType:"icon",loading:!0}),e.jsx(t,{variant:"ghost",size:"md",layout:"joined",count:4,buttonType:"icon",loading:!0})]}),parameters:{controls:{disable:!0}}},L={name:"Icon / Partial Disable",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(t,{variant:"primary",size:"md",layout:"joined",buttonType:"icon",buttons:[{},{disabled:!0},{},{}]}),e.jsx(t,{variant:"ghost",size:"md",layout:"joined",buttonType:"icon",buttons:[{},{},{disabled:!0},{}]})]}),parameters:{controls:{disable:!0}}},z={name:"Label / Default (Solid)",args:{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"default",count:2,buttons:[{label:"Label",ariaLabel:"Action 1"},{label:"Label",ariaLabel:"Action 2"}]}},T={name:"Label / Alt (Tinted)",args:{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"alt",count:2,buttons:[{label:"Label",ariaLabel:"Action 1"},{label:"Label",ariaLabel:"Action 2"}]}},S={name:"Label / Joined Layout",args:{variant:"primary",size:"md",layout:"joined",buttonType:"label",special:"default",count:2,buttons:[{label:"Label",ariaLabel:"Action 1"},{label:"Label",ariaLabel:"Action 2"}]}},I={name:"Label / All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)"},children:["default","alt"].map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:r,children:["Special: ",a]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",alignItems:"flex-start"},children:o.map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{...n,width:40},children:i}),e.jsx(t,{variant:"primary",size:i,layout:"separate",buttonType:"label",special:a,buttons:[{label:"Label",ariaLabel:"Action 1"},{label:"Label",ariaLabel:"Action 2"}]})]},i))})]},a))}),parameters:{controls:{disable:!0}}},D={name:"Label / All Variants",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:r,children:"Special: Default (solid filled)"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",alignItems:"flex-start"},children:["primary","secondary","ghost"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{...n,width:80},children:a}),e.jsx(t,{variant:a,size:"md",layout:"separate",buttonType:"label",special:"default",buttons:[{label:"Label"},{label:"Label"}]})]},a))})]}),e.jsxs("div",{children:[e.jsx("div",{style:r,children:"Special: Alt (tinted/outlined)"}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"alt",buttons:[{label:"Label"},{label:"Label"}]})})]})]}),parameters:{controls:{disable:!0}}},w={name:"Label / Disabled",args:{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"default",disabled:!0,buttons:[{label:"Label"},{label:"Label"}]}},A={name:"Label / Loading",args:{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"default",loading:!0,buttons:[{label:"Saving..."},{label:"Loading"}]}},B={name:"Full Design Matrix",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:o.map(a=>e.jsxs("div",{children:[e.jsx("div",{style:r,children:a}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(t,{variant:"primary",size:a,layout:"separate",buttonType:"label",special:"alt",buttons:[{label:"Label"},{label:"Label"}]}),e.jsx(t,{variant:"ghost",size:a,layout:"joined",count:1,buttonType:"icon"}),e.jsx(t,{variant:"primary",size:a,layout:"joined",buttonType:"label",special:"default",buttons:[{label:"Label"},{label:"Label"}]}),e.jsx(t,{variant:"primary",size:a,layout:"joined",count:4,buttonType:"icon"}),e.jsx(t,{variant:"secondary",size:a,layout:"joined",count:4,buttonType:"icon"}),e.jsx(t,{variant:"tertiary",size:a,layout:"joined",count:4,buttonType:"icon"}),e.jsx(t,{variant:"ghost",size:a,layout:"joined",count:4,buttonType:"icon"}),e.jsx(t,{variant:"ghost",size:a,layout:"separate",count:1,buttonType:"icon"})]})]},a))}),parameters:{controls:{disable:!0}}},G={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:r,children:"Icon type"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",size:"md",layout:"joined",count:4,buttonType:"icon"}),e.jsx("span",{style:n,children:"Default"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",size:"md",layout:"joined",count:4,buttonType:"icon",loading:!0}),e.jsx("span",{style:n,children:"Loading"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",size:"md",layout:"joined",count:4,buttonType:"icon",disabled:!0}),e.jsx("span",{style:n,children:"Disabled"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:r,children:"Label type — special: default"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[{label:"Default",props:{}},{label:"Loading",props:{loading:!0,buttons:[{label:"Saving…"}]}},{label:"Disabled",props:{disabled:!0}}].map(({label:a,props:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"default",buttons:[{label:"Label"},{label:"Label"}],...i}),e.jsx("span",{style:n,children:a})]},a))})]}),e.jsxs("div",{children:[e.jsx("div",{style:r,children:"Label type — special: alt"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[{label:"Default",props:{}},{label:"Loading",props:{loading:!0,buttons:[{label:"Saving…"}]}},{label:"Disabled",props:{disabled:!0}}].map(({label:a,props:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",size:"md",layout:"separate",buttonType:"label",special:"alt",buttons:[{label:"Label"},{label:"Label"}],...i}),e.jsx("span",{style:n,children:a})]},a))})]})]}),parameters:{controls:{disable:!0}}};var C,W,_;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <ButtonGroupDocs />,
  parameters: {
    docs: {
      page: () => <ButtonGroupDocs />
    },
    controls: {
      disable: true
    }
  }
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var V,E,R;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var J,N,U;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Icon / All Variants × All Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)'
  }}>
      {/* Separate (2-button pair) */}
      <div>
        <div style={sectionLabel}>Separate layout (primary + ghost pair)</div>
        <div style={{
        display: 'flex',
        gap: 'var(--global-spacing-sizing-24px)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          {ALL_SIZES.map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px'
        }}>
              <ButtonGroup variant="primary" size={size} layout="separate" buttonType="icon" />
              <span style={sizeTag}>{size}</span>
            </div>)}
        </div>
      </div>
      {/* Joined — each variant */}
      {ALL_VARIANTS.map(variant => <div key={variant}>
          <div style={sectionLabel}>{variant} · joined</div>
          <div style={{
        display: 'flex',
        gap: 'var(--global-spacing-sizing-24px)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
            {ALL_SIZES.map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px'
        }}>
                <ButtonGroup variant={variant} size={size} layout="joined" count={4} buttonType="icon" />
                <span style={sizeTag}>{size}</span>
              </div>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(N=u.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var M,Z,q;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Icon / Primary',
  args: {
    variant: 'primary',
    layout: 'joined',
    count: 4,
    buttonType: 'icon'
  }
}`,...(q=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var H,O,$;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Icon / Secondary',
  args: {
    variant: 'secondary',
    layout: 'joined',
    count: 4,
    buttonType: 'icon'
  }
}`,...($=(O=y.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var K,Y,Q;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Icon / Tertiary',
  args: {
    variant: 'tertiary',
    layout: 'joined',
    count: 4,
    buttonType: 'icon'
  }
}`,...(Q=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};var X,ee,ae;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Icon / Ghost',
  args: {
    variant: 'ghost',
    layout: 'joined',
    count: 4,
    buttonType: 'icon'
  }
}`,...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,le,ie;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Icon / Joined Layout',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_VARIANTS.map(v => <ButtonGroup key={v} variant={v} size="md" layout="joined" count={4} buttonType="icon" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ne,re,oe;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Icon / Separate Layout',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_VARIANTS.map(v => <ButtonGroup key={v} variant={v} size="md" layout="separate" buttonType="icon" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(re=v.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,pe,de;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Icon / All Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    alignItems: 'flex-start'
  }}>
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--global-spacing-sizing-16px)'
    }}>
          <span style={{
        ...sizeTag,
        width: 80
      }}>{size}</span>
          <ButtonGroup variant="primary" size={size} layout="joined" count={4} buttonType="icon" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ce,ue,be;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Icon / Disabled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_VARIANTS.map(v => <ButtonGroup key={v} variant={v} size="md" layout="joined" count={4} buttonType="icon" disabled />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(be=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var ye,ge,me;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Icon / Loading',
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-16px)',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" loading />
      <ButtonGroup variant="ghost" size="md" layout="joined" count={4} buttonType="icon" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var xe,ve,fe;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Icon / Partial Disable',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      <ButtonGroup variant="primary" size="md" layout="joined" buttonType="icon" buttons={[{}, {
      disabled: true
    }, {}, {}]} />
      <ButtonGroup variant="ghost" size="md" layout="joined" buttonType="icon" buttons={[{}, {}, {
      disabled: true
    }, {}]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(fe=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var he,je,Le;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Label / Default (Solid)',
  args: {
    variant: 'primary',
    size: 'md',
    layout: 'separate',
    buttonType: 'label',
    special: 'default',
    count: 2,
    buttons: [{
      label: 'Label',
      ariaLabel: 'Action 1'
    }, {
      label: 'Label',
      ariaLabel: 'Action 2'
    }]
  }
}`,...(Le=(je=z.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var ze,Te,Se;T.parameters={...T.parameters,docs:{...(ze=T.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Label / Alt (Tinted)',
  args: {
    variant: 'primary',
    size: 'md',
    layout: 'separate',
    buttonType: 'label',
    special: 'alt',
    count: 2,
    buttons: [{
      label: 'Label',
      ariaLabel: 'Action 1'
    }, {
      label: 'Label',
      ariaLabel: 'Action 2'
    }]
  }
}`,...(Se=(Te=T.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var Ie,De,we;S.parameters={...S.parameters,docs:{...(Ie=S.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Label / Joined Layout',
  args: {
    variant: 'primary',
    size: 'md',
    layout: 'joined',
    buttonType: 'label',
    special: 'default',
    count: 2,
    buttons: [{
      label: 'Label',
      ariaLabel: 'Action 1'
    }, {
      label: 'Label',
      ariaLabel: 'Action 2'
    }]
  }
}`,...(we=(De=S.parameters)==null?void 0:De.docs)==null?void 0:we.source}}};var Ae,Be,Ge;I.parameters={...I.parameters,docs:{...(Ae=I.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: 'Label / All Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)'
  }}>
      {(['default', 'alt'] as ButtonGroupSpecial[]).map(special => <div key={special}>
          <div style={sectionLabel}>Special: {special}</div>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-16px)',
        alignItems: 'flex-start'
      }}>
            {ALL_SIZES.map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--global-spacing-sizing-16px)'
        }}>
                <span style={{
            ...sizeTag,
            width: 40
          }}>{size}</span>
                <ButtonGroup variant="primary" size={size} layout="separate" buttonType="label" special={special} buttons={[{
            label: 'Label',
            ariaLabel: 'Action 1'
          }, {
            label: 'Label',
            ariaLabel: 'Action 2'
          }]} />
              </div>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ge=(Be=I.parameters)==null?void 0:Be.docs)==null?void 0:Ge.source}}};var ke,Fe,Pe;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'Label / All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)'
  }}>
      {/* Default (solid) */}
      <div>
        <div style={sectionLabel}>Special: Default (solid filled)</div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-16px)',
        alignItems: 'flex-start'
      }}>
          {(['primary', 'secondary', 'ghost'] as ButtonGroupVariant[]).map(v => <div key={v} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--global-spacing-sizing-16px)'
        }}>
              <span style={{
            ...sizeTag,
            width: 80
          }}>{v}</span>
              <ButtonGroup variant={v} size="md" layout="separate" buttonType="label" special="default" buttons={[{
            label: 'Label'
          }, {
            label: 'Label'
          }]} />
            </div>)}
        </div>
      </div>
      {/* Alt (tinted) */}
      <div>
        <div style={sectionLabel}>Special: Alt (tinted/outlined)</div>
        <div style={{
        display: 'flex',
        gap: 'var(--global-spacing-sizing-16px)',
        alignItems: 'center'
      }}>
          <ButtonGroup variant="primary" size="md" layout="separate" buttonType="label" special="alt" buttons={[{
          label: 'Label'
        }, {
          label: 'Label'
        }]} />
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Pe=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Ce,We,_e;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Label / Disabled',
  args: {
    variant: 'primary',
    size: 'md',
    layout: 'separate',
    buttonType: 'label',
    special: 'default',
    disabled: true,
    buttons: [{
      label: 'Label'
    }, {
      label: 'Label'
    }]
  }
}`,...(_e=(We=w.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};var Ve,Ee,Re;A.parameters={...A.parameters,docs:{...(Ve=A.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Label / Loading',
  args: {
    variant: 'primary',
    size: 'md',
    layout: 'separate',
    buttonType: 'label',
    special: 'default',
    loading: true,
    buttons: [{
      label: 'Saving...'
    }, {
      label: 'Loading'
    }]
  }
}`,...(Re=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Je,Ne,Ue;B.parameters={...B.parameters,docs:{...(Je=B.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)',
    padding: 'var(--global-spacing-sizing-24px)',
    background: 'var(--global-color-neutral-gray-50)',
    borderRadius: 'var(--global-spacing-radius-8px)'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <div style={sectionLabel}>{size}</div>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-16px)'
      }}>
            {/* Col 1: Label separate (alt) */}
            <ButtonGroup variant="primary" size={size} layout="separate" buttonType="label" special="alt" buttons={[{
          label: 'Label'
        }, {
          label: 'Label'
        }]} />

            {/* Col 2: Icon solo */}
            <ButtonGroup variant="ghost" size={size} layout="joined" count={1} buttonType="icon" />

            {/* Col 3: Label joined */}
            <ButtonGroup variant="primary" size={size} layout="joined" buttonType="label" special="default" buttons={[{
          label: 'Label'
        }, {
          label: 'Label'
        }]} />

            {/* Col 4: Icon joined primary */}
            <ButtonGroup variant="primary" size={size} layout="joined" count={4} buttonType="icon" />

            {/* Col 5: Icon joined secondary (dark) */}
            <ButtonGroup variant="secondary" size={size} layout="joined" count={4} buttonType="icon" />

            {/* Col 6: Icon joined tertiary */}
            <ButtonGroup variant="tertiary" size={size} layout="joined" count={4} buttonType="icon" />

            {/* Col 7: Icon joined ghost */}
            <ButtonGroup variant="ghost" size={size} layout="joined" count={4} buttonType="icon" />

            {/* Col 8: Icon separate (single visible) */}
            <ButtonGroup variant="ghost" size={size} layout="separate" count={1} buttonType="icon" />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ue=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var Me,Ze,qe;G.parameters={...G.parameters,docs:{...(Me=G.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)'
  }}>
      {/* Icon type states */}
      <div>
        <div style={sectionLabel}>Icon type</div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--global-spacing-sizing-16px)',
        alignItems: 'center'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          alignItems: 'center'
        }}>
            <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" />
            <span style={sizeTag}>Default</span>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          alignItems: 'center'
        }}>
            <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" loading />
            <span style={sizeTag}>Loading</span>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          alignItems: 'center'
        }}>
            <ButtonGroup variant="primary" size="md" layout="joined" count={4} buttonType="icon" disabled />
            <span style={sizeTag}>Disabled</span>
          </div>
        </div>
      </div>

      {/* Label type states — default special */}
      <div>
        <div style={sectionLabel}>Label type — special: default</div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--global-spacing-sizing-16px)',
        alignItems: 'center'
      }}>
          {[{
          label: 'Default',
          props: {}
        }, {
          label: 'Loading',
          props: {
            loading: true,
            buttons: [{
              label: 'Saving…'
            }]
          }
        }, {
          label: 'Disabled',
          props: {
            disabled: true
          }
        }].map(({
          label,
          props
        }) => <div key={label} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          alignItems: 'center'
        }}>
              <ButtonGroup variant="primary" size="md" layout="separate" buttonType="label" special="default" buttons={[{
            label: 'Label'
          }, {
            label: 'Label'
          }]} {...props} />
              <span style={sizeTag}>{label}</span>
            </div>)}
        </div>
      </div>

      {/* Label type states — alt special */}
      <div>
        <div style={sectionLabel}>Label type — special: alt</div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--global-spacing-sizing-16px)',
        alignItems: 'center'
      }}>
          {[{
          label: 'Default',
          props: {}
        }, {
          label: 'Loading',
          props: {
            loading: true,
            buttons: [{
              label: 'Saving…'
            }]
          }
        }, {
          label: 'Disabled',
          props: {
            disabled: true
          }
        }].map(({
          label,
          props
        }) => <div key={label} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          alignItems: 'center'
        }}>
              <ButtonGroup variant="primary" size="md" layout="separate" buttonType="label" special="alt" buttons={[{
            label: 'Label'
          }, {
            label: 'Label'
          }]} {...props} />
              <span style={sizeTag}>{label}</span>
            </div>)}
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(qe=(Ze=G.parameters)==null?void 0:Ze.docs)==null?void 0:qe.source}}};const la=["Documentation","Playground","AllVariants","Primary","Secondary","Tertiary","Ghost","Joined","Separate","IconSizes","IconDisabled","IconLoading","PartialDisable","LabelDefault","LabelAlt","LabelJoined","LabelAllSizes","LabelAllVariants","LabelDisabled","LabelLoading","FullDesignMatrix","AllStates"];export{G as AllStates,u as AllVariants,d as Documentation,B as FullDesignMatrix,m as Ghost,h as IconDisabled,j as IconLoading,f as IconSizes,x as Joined,I as LabelAllSizes,D as LabelAllVariants,T as LabelAlt,z as LabelDefault,w as LabelDisabled,S as LabelJoined,A as LabelLoading,L as PartialDisable,c as Playground,b as Primary,y as Secondary,v as Separate,g as Tertiary,la as __namedExportsOrder,ta as default};
