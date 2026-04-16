import{j as e,R as pe,r as re}from"./iframe-CljRg3Qj.js";import{B as me}from"./ButtonBase-DarqvuC4.js";import{D as i}from"./DocsTemplate-C1PCaRQJ.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-CMEq6pR7.js";import"./index-Jr_dyyn5.js";import"./useEventCallback-bt-yrc3D.js";import"./useForkRef-G8UPHOmR.js";const xe="_option_1u72x_20",be="_option__indicator_1u72x_159",ue="_option__icon_1u72x_153",ge="_option__label_1u72x_208",a={option:xe,"option--top":"_option--top_1u72x_78","option--mid":"_option--mid_1u72x_83","option--bottom":"_option--bottom_1u72x_89","option--solo":"_option--solo_1u72x_94","option--disabled":"_option--disabled_1u72x_103","option--selected":"_option--selected_1u72x_103","option--small":"_option--small_1u72x_146","option__icon-svg":"_option__icon-svg_1u72x_153",option__indicator:be,"option--large":"_option--large_1u72x_168",option__icon:ue,"option__icon--trailing":"_option__icon--trailing_1u72x_203",option__label:ge,"option__indicator--checkbox":"_option__indicator--checkbox_1u72x_236","option__indicator--radio":"_option__indicator--radio_1u72x_241","option__indicator--checked":"_option__indicator--checked_1u72x_246","option__indicator-svg":"_option__indicator-svg_1u72x_253","option__indicator-dot":"_option__indicator-dot_1u72x_260"},t=({label:o,position:l="solo",size:r="default",selected:s=!1,disabled:n=!1,selectionType:d="none",leadingIcon:c,trailingIcon:m,onClick:k,className:p,"aria-label":de})=>{const z=c,D=m,ce=[a.option,a[`option--${r}`],a[`option--${l}`],s&&a["option--selected"],n&&a["option--disabled"],d!=="none"&&a["option--has-indicator"],p].filter(Boolean).join(" ");return e.jsxs(me,{component:"button",type:"button",role:"option",className:ce,onClick:n?void 0:k,disabled:n,"aria-selected":s,"aria-disabled":n,"aria-label":de??o,children:[z&&e.jsx("span",{className:a.option__icon,"aria-hidden":"true",children:e.jsx(z,{className:a["option__icon-svg"]})}),d==="checkbox"&&e.jsx("span",{className:[a.option__indicator,a["option__indicator--checkbox"],s&&a["option__indicator--checked"]].filter(Boolean).join(" "),"aria-hidden":"true",children:s&&e.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a["option__indicator-svg"],children:e.jsx("path",{d:"M2.333 7L5.667 10.333L11.667 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),d==="radio"&&e.jsx("span",{className:[a.option__indicator,a["option__indicator--radio"],s&&a["option__indicator--checked"]].filter(Boolean).join(" "),"aria-hidden":"true",children:s&&e.jsx("span",{className:a["option__indicator-dot"]})}),e.jsx("span",{className:a.option__label,children:o}),D&&e.jsx("span",{className:`${a.option__icon} ${a["option__icon--trailing"]}`,"aria-hidden":"true",children:e.jsx(D,{className:a["option__icon-svg"]})})]})};t.__docgenInfo={description:"",methods:[],displayName:"SelectOption",props:{label:{required:!0,tsType:{name:"string"},description:"Visible label text for the option"},position:{required:!1,tsType:{name:"union",raw:"'top' | 'mid' | 'bottom' | 'solo'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'mid'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'solo'"}]},description:`Position within a stacked select menu. Controls which corners are rounded
and which border edges are rendered:
- top    → rounded top corners, top + left + right borders
- mid    → no radius, left + right borders only
- bottom → rounded bottom corners, all 4 borders
- solo   → all 4 rounded corners, all 4 borders (standalone)`,defaultValue:{value:"'solo'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Controls font size, icon size, and padding",defaultValue:{value:"'default'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Whether this option is currently selected/checked",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Prevents interaction; renders in a muted style",defaultValue:{value:"false",computed:!1}},selectionType:{required:!1,tsType:{name:"union",raw:"'checkbox' | 'radio' | 'none'",elements:[{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio'"},{name:"literal",value:"'none'"}]},description:`Type of selection indicator to show alongside the label:
- 'checkbox' → shows a checkbox (suitable for multi-select menus)
- 'radio'    → shows a radio button (suitable for single-select menus)
- 'none'     → no indicator (plain text option)`,defaultValue:{value:"'none'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Leading icon — pass a MUI SvgIcon component class"},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Trailing icon — pass a MUI SvgIcon component class"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click / selection handler"},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label for the option (defaults to label)"}}};const he=["small","default","large"],O=["none","checkbox","radio"],T=()=>e.jsxs(i,{children:[e.jsx(i.Header,{title:"SelectOption",subtitle:"A single, position-aware option row used inside dropdown and select menus. Supports plain-text options as well as checkbox (multi-select) and radio (single-select) indicator variants. Built on MUI ButtonBase with all visual treatment via design-token CSS Modules."}),e.jsxs(i.BodyText,{children:[e.jsx("strong",{children:"SelectOption"})," is the individual item that populates a select or combobox menu. Stack multiple items and use the"," ",e.jsx("code",{children:"position"})," prop to control which corners are rounded and which borders are collapsed — so the stack reads as one unified panel. The optional ",e.jsx("code",{children:"selectionType"})," prop adds a checkbox or radio indicator that responds to the ",e.jsx("code",{children:"selected"})," prop."]}),e.jsx(i.Anatomy,{parts:[{number:1,label:"Container",description:"The full-width button row. Background, border, and text colour change per state."},{number:2,label:"Leading Icon (optional)",description:"A slot for a MUI SvgIcon that provides additional context for the option."},{number:3,label:"Selection Indicator (optional)",description:'A checkbox or radio control that shows selection state. Hidden when selectionType is "none".'},{number:4,label:"Label",description:"The text content of the option. Grows to fill available space."},{number:5,label:"Trailing Icon (optional)",description:"A slot for a secondary action or status icon, pinned to the right."}]}),e.jsx(i.Section,{title:"MUI Foundation",children:e.jsxs(i.BodyText,{children:["SelectOption is built on ",e.jsx("strong",{children:"MUI ButtonBase"})," — giving it native accessibility semantics (",e.jsx("code",{children:'role="option"'}),","," ",e.jsx("code",{children:"aria-selected"}),", ",e.jsx("code",{children:"aria-disabled"}),"), focus-visible handling, and ripple support out of the box. All visual styling is applied via CSS Modules and design tokens, keeping the MUI foundation intact for future upgrades."]})}),e.jsxs(i.Section,{title:"Sizes",children:[e.jsxs(i.BodyText,{children:["Three sizes are available: ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and ",e.jsx("code",{children:"large"}),". Size affects padding, font size, and indicator dimensions."]}),e.jsx(i.Subsection,{title:"Size Comparison",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",maxWidth:"320px",padding:"var(--global-spacing-sizing-16px) 0"},children:he.map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-4px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize"},children:o}),e.jsx(t,{label:`Option label — ${o}`,size:o,position:"solo"})]},o))})})]}),e.jsxs(i.Section,{title:"Selection Types",children:[e.jsxs(i.BodyText,{children:["Use ",e.jsx("code",{children:"selectionType"})," to control whether the option renders a selection indicator. Use ",e.jsx("code",{children:'"checkbox"'})," in multi-select menus and ",e.jsx("code",{children:'"radio"'})," in single-select menus. Use ",e.jsx("code",{children:'"none"'})," ","for plain list options."]}),e.jsx(i.Subsection,{title:"Unselected",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",maxWidth:"320px",padding:"var(--global-spacing-sizing-16px) 0"},children:O.map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-4px)"},children:[e.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:['selectionType="',o,'"']}),e.jsx(t,{label:"Option label",selectionType:o,position:"solo"})]},o))})}),e.jsx(i.Subsection,{title:"Selected",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",maxWidth:"320px",padding:"var(--global-spacing-sizing-16px) 0"},children:O.map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-4px)"},children:[e.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:['selectionType="',o,'" selected']}),e.jsx(t,{label:"Option label",selectionType:o,selected:!0,position:"solo"})]},o))})})]}),e.jsxs(i.Section,{title:"Position",children:[e.jsxs(i.BodyText,{children:["The ",e.jsx("code",{children:"position"})," prop controls border-radius and which border edges are rendered, allowing multiple options to be stacked into a single visually unified panel. Use ",e.jsx("code",{children:"solo"})," for standalone options."]}),e.jsx(i.Subsection,{title:"Stacked Menu Example",children:e.jsxs("div",{style:{maxWidth:"280px",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(t,{label:"Top option",position:"top",selectionType:"checkbox"}),e.jsx(t,{label:"Middle option",position:"mid",selectionType:"checkbox",selected:!0}),e.jsx(t,{label:"Middle option 2",position:"mid",selectionType:"checkbox"}),e.jsx(t,{label:"Bottom option",position:"bottom",selectionType:"checkbox"})]})})]}),e.jsxs(i.Section,{title:"Interactive States",children:[e.jsx(i.BodyText,{children:"SelectOption supports default, hover, focus, active, selected, and disabled states. The selected state changes the background to the brand primary colour. Disabled options are visually muted and non-interactive."}),e.jsx(i.Subsection,{title:"State Gallery",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",maxWidth:"320px",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"4px"},children:"Default"}),e.jsx(t,{label:"Option label",position:"solo"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"4px"},children:"Selected"}),e.jsx(t,{label:"Option label",position:"solo",selected:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"4px"},children:"Disabled"}),e.jsx(t,{label:"Option label",position:"solo",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"4px"},children:"Disabled + Selected"}),e.jsx(t,{label:"Option label",position:"solo",disabled:!0,selected:!0})]})]})})]}),e.jsx(i.TokenTable,{title:"Design Tokens",description:"SelectOption uses the following component-level tokens. All values alias the global design tokens defined in tokens.css.",tokens:[{name:"--select-option-bg",description:"Default background colour (#FFF)"},{name:"--select-option-border-color",description:"Default border colour (gray-300, #D2D5DA)"},{name:"--select-option-border-width",description:"Default border width (0.5px)"},{name:"--select-option-color",description:"Default text colour (base-black, #1C1C1C)"},{name:"--select-option-bg-hover",description:"Hover background colour (blue-blue-100)"},{name:"--select-option-bg-selected",description:"Selected background colour (brand-primary)"},{name:"--select-option-color-selected",description:"Selected text colour (white)"},{name:"--select-option-bg-disabled",description:"Disabled background colour (gray-50)"},{name:"--select-option-color-disabled",description:"Disabled text colour (gray-300)"},{name:"--select-option-radius",description:"Corner radius for solo/top/bottom positions (6px)"},{name:"--select-option-min-height",description:"Minimum row height for default size (40px)"},{name:"--select-option-min-height-sm",description:"Minimum row height for small size (32px)"},{name:"--select-option-min-height-lg",description:"Minimum row height for large size (52px)"},{name:"--select-option-padding",description:"Padding for default size (8px 12px)"},{name:"--select-option-indicator-size",description:"Checkbox/radio indicator size (16px)"},{name:"--select-option-indicator-bg-checked",description:"Indicator fill when checked (brand-primary)"},{name:"--select-option-indicator-checkbox-radius",description:"Checkbox corner radius (4px)"},{name:"--select-option-indicator-radio-radius",description:"Radio button radius (full circle)"}]}),e.jsx(i.CodeBlock,{children:`import { SelectOption } from './BuildingBlocks/SelectOption';

// Plain text option
<SelectOption label="Option label" position="solo" />

// Checkbox option (multi-select)
<SelectOption
  label="Option label"
  selectionType="checkbox"
  selected
  position="solo"
/>

// Radio option (single-select)
<SelectOption
  label="Option label"
  selectionType="radio"
  selected
  position="solo"
/>

// Stacked menu
<SelectOption label="First"  position="top"    selectionType="checkbox" />
<SelectOption label="Second" position="mid"    selectionType="checkbox" selected />
<SelectOption label="Third"  position="bottom" selectionType="checkbox" disabled />`}),e.jsxs(i.Principles,{children:[e.jsx(i.PrincipleCard,{number:1,title:"Clear Selection State",children:"The selected state uses the brand primary background colour and white text for immediate visual confirmation. Checked indicators invert on selected rows so they remain visible against the blue background."}),e.jsxs(i.PrincipleCard,{number:2,title:"Accessible by Default",children:["Built on MUI ButtonBase with ",e.jsx("code",{children:'role="option"'}),","," ",e.jsx("code",{children:"aria-selected"}),", and ",e.jsx("code",{children:"aria-disabled"}),". Keyboard navigation and focus-visible rings are handled automatically."]}),e.jsx(i.PrincipleCard,{number:3,title:"Position-Aware Stacking",children:"The position prop collapses internal borders and adjusts border-radius so a stack of options reads as a single cohesive menu panel rather than a series of separate elements."})]}),e.jsx(i.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"140px"},children:[e.jsx(t,{label:"Option A",position:"top",selectionType:"checkbox"}),e.jsx(t,{label:"Option B",position:"mid",selectionType:"checkbox",selected:!0}),e.jsx(t,{label:"Option C",position:"bottom",selectionType:"checkbox"})]}),label:"Stack with position",description:"Use the position prop to stack options into a unified panel with collapsed borders and appropriate radius."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",width:"140px"},children:[e.jsx(t,{label:"Option A",position:"solo",selectionType:"checkbox"}),e.jsx(t,{label:"Option B",position:"solo",selectionType:"checkbox",selected:!0})]}),label:"Stack with solo",description:"Don't use solo position for every item in a stack — it creates floating separate cards instead of a unified menu."}}),e.jsx(i.RelatedLinks,{links:[{label:"ButtonMenuItem",href:"?path=/story/foundation-buildingblocks-buttonmenu--documentation"},{label:"Dropdown",href:"?path=/story/atoms-input-dropdown--documentation"}]}),e.jsx(i.Footer,{componentName:"SelectOption"})]});T.__docgenInfo={description:"",methods:[],displayName:"SelectOptionDocs"};const ze={title:"Foundation/BuildingBlocks/SelectOption",component:t,parameters:{docs:{page:()=>e.jsx(T,{})}},argTypes:{size:{control:"select",options:["small","default","large"],description:"Controls padding, font size, and indicator dimensions"},position:{control:"select",options:["top","mid","bottom","solo"],description:"Controls border-radius and which border edges are rendered"},selectionType:{control:"select",options:["none","checkbox","radio"],description:"Which selection indicator to render alongside the label"},selected:{control:"boolean",description:"Whether this option is currently selected/checked"},disabled:{control:"boolean",description:"Prevents interaction and renders in a muted style"},label:{control:"text",description:"Visible label text"}},args:{label:"Option label",size:"default",position:"solo",selectionType:"none",selected:!1,disabled:!1}},x={name:"Documentation",render:()=>e.jsx(T,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen",chromatic:{disableSnapshot:!0}}},b={name:"Playground",render:o=>e.jsx("div",{style:{maxWidth:"320px",padding:"24px"},children:e.jsx(t,{...o})})},u={name:"Default",render:()=>e.jsx("div",{style:{maxWidth:"280px",padding:"24px"},children:e.jsx(t,{label:"Option label",position:"solo"})}),parameters:{controls:{disable:!0}}},g={name:"Sizes",render:()=>{const o=["small","default","large"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"360px"},children:o.map(l=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"6px"},children:l}),e.jsx(t,{label:`Option label — ${l}`,size:l,position:"solo"})]},l))})},parameters:{controls:{disable:!0}}},h={name:"Status — Plain",render:()=>e.jsxs("div",{style:{maxWidth:"280px",padding:"24px"},children:[e.jsx(t,{label:"Default option",position:"top"}),e.jsx(t,{label:"Hover (interact to see)",position:"mid"}),e.jsx(t,{label:"Selected option",position:"mid",selected:!0}),e.jsx(t,{label:"Disabled option",position:"bottom",disabled:!0})]}),parameters:{controls:{disable:!0}}},y={name:"Status — Checkbox",render:()=>{const o=()=>{const[l,r]=re.useState(new Set(["Option B"])),s=["Option A","Option B","Option C","Option D (disabled)"];return e.jsx("div",{style:{maxWidth:"280px",padding:"24px"},children:s.map((n,d)=>{const c=n.includes("disabled"),m=d===0?"top":d===s.length-1?"bottom":"mid";return e.jsx(t,{label:n,position:m,selectionType:"checkbox",selected:l.has(n),disabled:c,onClick:()=>{c||r(k=>{const p=new Set(k);return p.has(n)?p.delete(n):p.add(n),p})}},n)})})};return e.jsx(o,{})},parameters:{controls:{disable:!0}}},f={name:"Status — Radio",render:()=>{const o=()=>{const[l,r]=re.useState("Option B"),s=["Option A","Option B","Option C","Option D (disabled)"];return e.jsx("div",{style:{maxWidth:"280px",padding:"24px"},children:s.map((n,d)=>{const c=n.includes("disabled"),m=d===0?"top":d===s.length-1?"bottom":"mid";return e.jsx(t,{label:n,position:m,selectionType:"radio",selected:l===n,disabled:c,onClick:()=>{c||r(n)}},n)})})};return e.jsx(o,{})},parameters:{controls:{disable:!0}}},v={name:"Status — Disabled",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:"320px"},children:["none","checkbox","radio"].map(o=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"6px"},children:['selectionType="',o,'" — disabled']}),e.jsx(t,{label:"Disabled option",selectionType:o,disabled:!0,position:"solo"})]},o))}),parameters:{controls:{disable:!0}}},S={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Position Variants (stacked)"}),e.jsx("div",{style:{maxWidth:"280px"},children:["top","mid","bottom"].map((o,l)=>e.jsx(t,{label:`Position: "${o}"`,position:o,selectionType:"checkbox",selected:l===1},o))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Selection Types (solo)"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",maxWidth:"280px"},children:["none","checkbox","radio"].map(o=>e.jsx(t,{label:`selectionType="${o}"`,selectionType:o,position:"solo"},o))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Sizes"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",maxWidth:"280px"},children:["small","default","large"].map(o=>e.jsx(t,{label:`size="${o}"`,size:o,position:"solo",selectionType:"radio"},o))})]})]}),parameters:{controls:{disable:!0}}},j={name:"All Interactive States",render:()=>{const o=[{label:"Default"},{label:"Selected",selected:!0},{label:"Disabled",disabled:!0},{label:"Disabled + Selected",disabled:!0,selected:!0}];return e.jsx("div",{style:{display:"flex",gap:"32px",padding:"24px",flexWrap:"wrap"},children:["none","checkbox","radio"].map(l=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"8px",textTransform:"capitalize"},children:l==="none"?"Plain":l}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",minWidth:"200px"},children:o.map(r=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",marginBottom:"2px"},children:r.label}),e.jsx(t,{label:r.label,selectionType:l,selected:r.selected,disabled:r.disabled,position:"solo"})]},r.label))})]},l))})},parameters:{controls:{disable:!0}}},_={name:"Full Design Matrix",render:()=>{const o=["small","default","large"],l=["none","checkbox","radio"],r=[{label:"Default"},{label:"Selected",selected:!0},{label:"Disabled",disabled:!0}];return e.jsx("div",{style:{padding:"24px",overflowX:"auto"},children:o.map(s=>e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Size: ",s]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`120px repeat(${r.length}, 1fr)`,gap:"8px",alignItems:"center"},children:[e.jsx("div",{}),r.map(n=>e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textAlign:"center"},children:n.label},n.label)),l.map(n=>e.jsxs(pe.Fragment,{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize"},children:n==="none"?"Plain":n}),r.map(d=>e.jsx(t,{label:"Option",size:s,selectionType:n,selected:d.selected,disabled:d.disabled,position:"solo"},d.label))]},n))]})]},s))})},parameters:{controls:{disable:!0}}};var B,w,C;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <SelectOptionDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen',
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(C=(w=x.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var W,F,I;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    maxWidth: '320px',
    padding: '24px'
  }}>
      <SelectOption {...args} />
    </div>
}`,...(I=(F=b.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var P,M,A;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <div style={{
    maxWidth: '280px',
    padding: '24px'
  }}>
      <SelectOption label="Option label" position="solo" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(M=u.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var R,E,N;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => {
    const sizes: SelectOptionSize[] = ['small', 'default', 'large'];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '24px',
      maxWidth: '360px'
    }}>
        {sizes.map(size => <div key={size}>
            <div style={{
          fontFamily: 'var(--brand-font-primary)',
          fontSize: '11px',
          fontWeight: 600,
          color: 'var(--global-color-neutral-gray-500)',
          textTransform: 'capitalize',
          marginBottom: '6px'
        }}>
              {size}
            </div>
            <SelectOption label={\`Option label — \${size}\`} size={size} position="solo" />
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(E=g.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var $,U,L;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Status — Plain',
  render: () => <div style={{
    maxWidth: '280px',
    padding: '24px'
  }}>
      <SelectOption label="Default option" position="top" />
      <SelectOption label="Hover (interact to see)" position="mid" />
      <SelectOption label="Selected option" position="mid" selected />
      <SelectOption label="Disabled option" position="bottom" disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(L=(U=h.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var q,H,V;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Status — Checkbox',
  render: () => {
    const CheckboxDemo = () => {
      const [checked, setChecked] = useState<Set<string>>(new Set(['Option B']));
      const options = ['Option A', 'Option B', 'Option C', 'Option D (disabled)'];
      return <div style={{
        maxWidth: '280px',
        padding: '24px'
      }}>
          {options.map((opt, i) => {
          const isDisabled = opt.includes('disabled');
          const pos: SelectOptionPosition = i === 0 ? 'top' : i === options.length - 1 ? 'bottom' : 'mid';
          return <SelectOption key={opt} label={opt} position={pos} selectionType="checkbox" selected={checked.has(opt)} disabled={isDisabled} onClick={() => {
            if (isDisabled) return;
            setChecked(prev => {
              const next = new Set(prev);
              next.has(opt) ? next.delete(opt) : next.add(opt);
              return next;
            });
          }} />;
        })}
        </div>;
    };
    return <CheckboxDemo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(H=y.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var G,X,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Status — Radio',
  render: () => {
    const RadioDemo = () => {
      const [selected, setSelected] = useState<string>('Option B');
      const options = ['Option A', 'Option B', 'Option C', 'Option D (disabled)'];
      return <div style={{
        maxWidth: '280px',
        padding: '24px'
      }}>
          {options.map((opt, i) => {
          const isDisabled = opt.includes('disabled');
          const pos: SelectOptionPosition = i === 0 ? 'top' : i === options.length - 1 ? 'bottom' : 'mid';
          return <SelectOption key={opt} label={opt} position={pos} selectionType="radio" selected={selected === opt} disabled={isDisabled} onClick={() => {
            if (!isDisabled) setSelected(opt);
          }} />;
        })}
        </div>;
    };
    return <RadioDemo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(X=f.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Y,Z,J;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Status — Disabled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    maxWidth: '320px'
  }}>
      {(['none', 'checkbox', 'radio'] as SelectOptionSelectionType[]).map(type => <div key={type}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '6px'
      }}>
            selectionType="{type}" — disabled
          </div>
          <SelectOption label="Disabled option" selectionType={type} disabled position="solo" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,ee,oe;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>
      {/* Position variants */}
      <div>
        <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '8px'
      }}>
          Position Variants (stacked)
        </div>
        <div style={{
        maxWidth: '280px'
      }}>
          {(['top', 'mid', 'bottom'] as SelectOptionPosition[]).map((pos, i) => <SelectOption key={pos} label={\`Position: "\${pos}"\`} position={pos} selectionType="checkbox" selected={i === 1} />)}
        </div>
      </div>

      {/* Solo variants */}
      <div>
        <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '8px'
      }}>
          Selection Types (solo)
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        maxWidth: '280px'
      }}>
          {(['none', 'checkbox', 'radio'] as SelectOptionSelectionType[]).map(type => <SelectOption key={type} label={\`selectionType="\${type}"\`} selectionType={type} position="solo" />)}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '8px'
      }}>
          Sizes
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        maxWidth: '280px'
      }}>
          {(['small', 'default', 'large'] as SelectOptionSize[]).map(size => <SelectOption key={size} label={\`size="\${size}"\`} size={size} position="solo" selectionType="radio" />)}
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,ie,ne;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => {
    const states: Array<{
      label: string;
      selected?: boolean;
      disabled?: boolean;
    }> = [{
      label: 'Default'
    }, {
      label: 'Selected',
      selected: true
    }, {
      label: 'Disabled',
      disabled: true
    }, {
      label: 'Disabled + Selected',
      disabled: true,
      selected: true
    }];
    return <div style={{
      display: 'flex',
      gap: '32px',
      padding: '24px',
      flexWrap: 'wrap'
    }}>
        {(['none', 'checkbox', 'radio'] as SelectOptionSelectionType[]).map(type => <div key={type}>
            <div style={{
          fontFamily: 'var(--brand-font-primary)',
          fontSize: '11px',
          fontWeight: 600,
          color: 'var(--global-color-neutral-gray-500)',
          marginBottom: '8px',
          textTransform: 'capitalize'
        }}>
              {type === 'none' ? 'Plain' : type}
            </div>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          minWidth: '200px'
        }}>
              {states.map(s => <div key={s.label}>
                  <div style={{
              fontFamily: 'var(--brand-font-secondary)',
              fontSize: '10px',
              color: 'var(--global-color-neutral-gray-400)',
              marginBottom: '2px'
            }}>{s.label}</div>
                  <SelectOption label={s.label} selectionType={type} selected={s.selected} disabled={s.disabled} position="solo" />
                </div>)}
            </div>
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ne=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var ae,le,se;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const sizes: SelectOptionSize[] = ['small', 'default', 'large'];
    const types: SelectOptionSelectionType[] = ['none', 'checkbox', 'radio'];
    const states: Array<{
      label: string;
      selected?: boolean;
      disabled?: boolean;
    }> = [{
      label: 'Default'
    }, {
      label: 'Selected',
      selected: true
    }, {
      label: 'Disabled',
      disabled: true
    }];
    return <div style={{
      padding: '24px',
      overflowX: 'auto'
    }}>
        {sizes.map(size => <div key={size} style={{
        marginBottom: '40px'
      }}>
            <div style={{
          fontFamily: 'var(--brand-font-primary)',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--global-color-neutral-gray-700)',
          marginBottom: '12px',
          textTransform: 'capitalize'
        }}>
              Size: {size}
            </div>
            <div style={{
          display: 'grid',
          gridTemplateColumns: \`120px repeat(\${states.length}, 1fr)\`,
          gap: '8px',
          alignItems: 'center'
        }}>
              {/* Header */}
              <div />
              {states.map(s => <div key={s.label} style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)',
            textAlign: 'center'
          }}>
                  {s.label}
                </div>)}

              {/* Rows */}
              {types.map(type => <React.Fragment key={type}>
                  <div style={{
              fontFamily: 'var(--brand-font-primary)',
              fontSize: '11px',
              color: 'var(--global-color-neutral-gray-700)',
              textTransform: 'capitalize'
            }}>
                    {type === 'none' ? 'Plain' : type}
                  </div>
                  {states.map(s => <SelectOption key={s.label} label="Option" size={size} selectionType={type} selected={s.selected} disabled={s.disabled} position="solo" />)}
                </React.Fragment>)}
            </div>
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(le=_.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};const De=["Documentation","Playground","Default","Sizes","StatusPlain","StatusCheckbox","StatusRadio","StatusDisabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{j as AllInteractiveStates,S as ComponentBreakdown,u as Default,x as Documentation,_ as FullDesignMatrix,b as Playground,g as Sizes,y as StatusCheckbox,v as StatusDisabled,h as StatusPlain,f as StatusRadio,De as __namedExportsOrder,ze as default};
