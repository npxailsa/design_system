import{j as e,R as ae,r as le}from"./iframe-DRIQLXCv.js";import{M as o}from"./MenuMultiSelect-BPJsyqcB.js";import{D as i}from"./DocsTemplate-BEfgln9S.js";import"./preload-helper-Dp1pzeXC.js";import"./ButtonBase-BGtR10be.js";import"./DefaultPropsProvider-BZe6dggl.js";import"./index-DFNvR6C3.js";import"./emotion-react.browser.esm-CBFysbcg.js";import"./useForkRef-CvFXjQAB.js";import"./useEventCallback-tUyuTj1r.js";import"./isFocusVisible-B8k4qzLc.js";import"./Radio-BfxPSkcn.js";import"./SwitchBase-8JhAxJjA.js";import"./useFormControl-j7tHs2dV.js";import"./useSlot-DIlv-qHL.js";import"./mergeSlotProps-CHNI0Yk4.js";import"./isHostComponent-DVu5iVWx.js";import"./useControlled-BPHWBQqR.js";import"./createSvgIcon-B4IhwgPi.js";import"./memoTheme-Cr_BVE8a.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const se=["small","default","large"],k=["none","checkbox","radio"],M=()=>e.jsxs(i,{children:[e.jsx(i.Header,{title:"MenuMultiSelect",subtitle:"A single, position-aware option row used inside dropdown and select menus. Supports plain-text options as well as checkbox (multi-select) and radio (single-select) indicator variants. Built on MUI ButtonBase with all visual treatment via design-token CSS Modules."}),e.jsxs(i.BodyText,{children:[e.jsx("strong",{children:"MenuMultiSelect"})," is the individual item that populates a select or combobox menu. Stack multiple items and use the"," ",e.jsx("code",{children:"position"})," prop to control which corners are rounded and which borders are collapsed — so the stack reads as one unified panel. The optional ",e.jsx("code",{children:"selectionType"})," prop adds a checkbox or radio indicator that responds to the ",e.jsx("code",{children:"selected"})," prop."]}),e.jsx(i.Anatomy,{parts:[{number:1,label:"Container",description:"The full-width button row. Background, border, and text colour change per state."},{number:2,label:"Leading Icon (optional)",description:"A slot for a MUI SvgIcon that provides additional context for the option."},{number:3,label:"Selection Indicator (optional)",description:'A checkbox or radio control that shows selection state. Hidden when selectionType is "none".'},{number:4,label:"Label",description:"The text content of the option. Grows to fill available space."},{number:5,label:"Trailing Icon (optional)",description:"A slot for a secondary action or status icon, pinned to the right."}]}),e.jsx(i.Section,{title:"MUI Foundation",children:e.jsxs(i.BodyText,{children:["MenuMultiSelect is built on ",e.jsx("strong",{children:"MUI ButtonBase"})," — giving it native accessibility semantics (",e.jsx("code",{children:'role="option"'}),","," ",e.jsx("code",{children:"aria-selected"}),", ",e.jsx("code",{children:"aria-disabled"}),"), focus-visible handling, and ripple support out of the box. All visual styling is applied via CSS Modules and design tokens, keeping the MUI foundation intact for future upgrades."]})}),e.jsxs(i.Section,{title:"Sizes",children:[e.jsxs(i.BodyText,{children:["Three sizes are available: ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and ",e.jsx("code",{children:"large"}),". Size affects padding, font size, and indicator dimensions."]}),e.jsx(i.Subsection,{title:"Size Comparison",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",maxWidth:"320px",padding:"var(--global-spacing-sizing-16px) 0"},children:se.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-4px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize"},children:t}),e.jsx(o,{label:`Option label — ${t}`,size:t,position:"solo"})]},t))})})]}),e.jsxs(i.Section,{title:"Selection Types",children:[e.jsxs(i.BodyText,{children:["Use ",e.jsx("code",{children:"selectionType"})," to control whether the option renders a selection indicator. Use ",e.jsx("code",{children:'"checkbox"'})," in multi-select menus and ",e.jsx("code",{children:'"radio"'})," in single-select menus. Use ",e.jsx("code",{children:'"none"'})," ","for plain list options."]}),e.jsx(i.Subsection,{title:"Unselected",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",maxWidth:"320px",padding:"var(--global-spacing-sizing-16px) 0"},children:k.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-4px)"},children:[e.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:['selectionType="',t,'"']}),e.jsx(o,{label:"Option label",selectionType:t,position:"solo"})]},t))})}),e.jsx(i.Subsection,{title:"Selected",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",maxWidth:"320px",padding:"var(--global-spacing-sizing-16px) 0"},children:k.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-4px)"},children:[e.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:['selectionType="',t,'" selected']}),e.jsx(o,{label:"Option label",selectionType:t,selected:!0,position:"solo"})]},t))})})]}),e.jsxs(i.Section,{title:"Position",children:[e.jsxs(i.BodyText,{children:["The ",e.jsx("code",{children:"position"})," prop controls border-radius and which border edges are rendered, allowing multiple options to be stacked into a single visually unified panel. Use ",e.jsx("code",{children:"solo"})," for standalone options."]}),e.jsx(i.Subsection,{title:"Stacked Menu Example",children:e.jsxs("div",{style:{maxWidth:"280px",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx(o,{label:"Top option",position:"top",selectionType:"checkbox"}),e.jsx(o,{label:"Middle option",position:"mid",selectionType:"checkbox",selected:!0}),e.jsx(o,{label:"Middle option 2",position:"mid",selectionType:"checkbox"}),e.jsx(o,{label:"Bottom option",position:"bottom",selectionType:"checkbox"})]})})]}),e.jsxs(i.Section,{title:"Interactive States",children:[e.jsx(i.BodyText,{children:"MenuMultiSelect supports default, hover, focus, active, selected, and disabled states. The selected state changes the background to the brand primary colour. Disabled options are visually muted and non-interactive."}),e.jsx(i.Subsection,{title:"State Gallery",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",maxWidth:"320px",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"4px"},children:"Default"}),e.jsx(o,{label:"Option label",position:"solo"})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"4px"},children:"Selected"}),e.jsx(o,{label:"Option label",position:"solo",selected:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"4px"},children:"Disabled"}),e.jsx(o,{label:"Option label",position:"solo",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"4px"},children:"Disabled + Selected"}),e.jsx(o,{label:"Option label",position:"solo",disabled:!0,selected:!0})]})]})})]}),e.jsx(i.TokenTable,{title:"Design Tokens",description:"MenuMultiSelect uses the following component-level tokens (aliased from --select-option-* for continuity). All values reference the global design tokens in tokens.css.",tokens:[{name:"--select-option-bg",description:"Default background colour (#FFF)"},{name:"--select-option-border-color",description:"Default border colour (gray-300, #D2D5DA)"},{name:"--select-option-border-width",description:"Default border width (0.5px)"},{name:"--select-option-color",description:"Default text colour (base-black, #1C1C1C)"},{name:"--select-option-bg-hover",description:"Hover background colour (blue-blue-100)"},{name:"--select-option-bg-selected",description:"Selected background colour (brand-primary)"},{name:"--select-option-color-selected",description:"Selected text colour (white)"},{name:"--select-option-bg-disabled",description:"Disabled background colour (gray-50)"},{name:"--select-option-color-disabled",description:"Disabled text colour (gray-300)"},{name:"--select-option-radius",description:"Corner radius for solo/top/bottom positions (6px)"},{name:"--select-option-min-height",description:"Minimum row height for default size (40px)"},{name:"--select-option-min-height-sm",description:"Minimum row height for small size (32px)"},{name:"--select-option-min-height-lg",description:"Minimum row height for large size (52px)"},{name:"--select-option-padding",description:"Padding for default size (8px 12px)"},{name:"--select-option-indicator-size",description:"Checkbox/radio indicator size (16px)"}]}),e.jsxs(i.Section,{title:"Dropdown Integration",children:[e.jsxs(i.BodyText,{children:["MenuMultiSelect is the sub-component that powers the menu items inside the"," ",e.jsxs("strong",{children:["Atoms ",">"," Input ",">"," Dropdown"]})," component. Each item in an open Dropdown menu is rendered as a ",e.jsx("code",{children:"MenuMultiSelect"})," with automatic ",e.jsx("code",{children:"position"})," assignment — the first item becomes"," ",e.jsx("code",{children:"top"}),", middle items become ",e.jsx("code",{children:"mid"}),", the last item becomes ",e.jsx("code",{children:"bottom"}),", and a single-item menu uses ",e.jsx("code",{children:"solo"}),"."]}),e.jsx(i.Subsection,{title:"Single-Select Menu Preview",children:e.jsxs("div",{style:{maxWidth:"240px",padding:"var(--global-spacing-sizing-16px) 0",boxShadow:"0 2px 4px 0 rgba(39,39,39,0.10)",borderRadius:"var(--select-option-radius)"},children:[e.jsx(o,{label:"Option A",position:"top",selectionType:"none"}),e.jsx(o,{label:"Option B",position:"mid",selectionType:"none",selected:!0}),e.jsx(o,{label:"Option C",position:"mid",selectionType:"none"}),e.jsx(o,{label:"Option D (disabled)",position:"bottom",selectionType:"none",disabled:!0})]})}),e.jsx(i.Subsection,{title:"Multi-Select (Checkbox) Menu Preview",children:e.jsxs("div",{style:{maxWidth:"240px",padding:"var(--global-spacing-sizing-16px) 0",boxShadow:"0 2px 4px 0 rgba(39,39,39,0.10)",borderRadius:"var(--select-option-radius)"},children:[e.jsx(o,{label:"Option A",position:"top",selectionType:"checkbox"}),e.jsx(o,{label:"Option B",position:"mid",selectionType:"checkbox",selected:!0}),e.jsx(o,{label:"Option C",position:"mid",selectionType:"checkbox",selected:!0}),e.jsx(o,{label:"Option D (disabled)",position:"bottom",selectionType:"checkbox",disabled:!0})]})})]}),e.jsx(i.CodeBlock,{children:`import { MenuMultiSelect } from './BuildingBlocks/MenuMultiSelect';

// Plain text option (standalone)
<MenuMultiSelect label="Option label" position="solo" />

// Checkbox option (multi-select)
<MenuMultiSelect
  label="Option label"
  selectionType="checkbox"
  selected
  position="solo"
/>

// Radio option (single-select)
<MenuMultiSelect
  label="Option label"
  selectionType="radio"
  selected
  position="solo"
/>

// Stacked menu panel (dropdown list)
<div style={{ boxShadow: '0 2px 4px 0 rgba(39,39,39,0.10)' }}>
  <MenuMultiSelect label="First"  position="top"    selectionType="checkbox" />
  <MenuMultiSelect label="Second" position="mid"    selectionType="checkbox" selected />
  <MenuMultiSelect label="Third"  position="bottom" selectionType="checkbox" disabled />
</div>

// Dropdown automatically maps position for each option:
// idx === 0              → position="top"
// 0 < idx < last        → position="mid"
// idx === last          → position="bottom"
// options.length === 1  → position="solo"`}),e.jsxs(i.Principles,{children:[e.jsx(i.PrincipleCard,{number:1,title:"Clear Selection State",children:"The selected state uses the brand primary background colour and white text for immediate visual confirmation. Checked indicators invert on selected rows so they remain visible against the blue background."}),e.jsxs(i.PrincipleCard,{number:2,title:"Accessible by Default",children:["Built on MUI ButtonBase with ",e.jsx("code",{children:'role="option"'}),","," ",e.jsx("code",{children:"aria-selected"}),", and ",e.jsx("code",{children:"aria-disabled"}),". Keyboard navigation and focus-visible rings are handled automatically."]}),e.jsx(i.PrincipleCard,{number:3,title:"Position-Aware Stacking",children:"The position prop collapses internal borders and adjusts border-radius so a stack of options reads as a single cohesive menu panel rather than a series of separate elements."})]}),e.jsx(i.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"140px"},children:[e.jsx(o,{label:"Option A",position:"top",selectionType:"checkbox"}),e.jsx(o,{label:"Option B",position:"mid",selectionType:"checkbox",selected:!0}),e.jsx(o,{label:"Option C",position:"bottom",selectionType:"checkbox"})]}),label:"Stack with position",description:"Use the position prop to stack options into a unified panel with collapsed borders and appropriate radius."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",width:"140px"},children:[e.jsx(o,{label:"Option A",position:"solo",selectionType:"checkbox"}),e.jsx(o,{label:"Option B",position:"solo",selectionType:"checkbox",selected:!0})]}),label:"Stack with solo",description:"Don't use solo position for every item in a stack — it creates floating separate cards instead of a unified menu."}}),e.jsx(i.RelatedLinks,{links:[{label:"ButtonMenuItem",href:"?path=/story/foundation-buildingblocks-buttonmenu--documentation"},{label:"SelectItem",href:"?path=/story/foundation-buildingblocks-selectitem--documentation"},{label:"Dropdown",href:"?path=/story/atoms-input-dropdown--documentation"}]}),e.jsx(i.Footer,{componentName:"MenuMultiSelect"})]});M.__docgenInfo={description:"",methods:[],displayName:"MenuMultiSelectDocs"};const we={title:"Foundation/BuildingBlocks/MenuMultiSelect",component:o,parameters:{docs:{page:()=>e.jsx(M,{})}},argTypes:{size:{control:"select",options:["small","default","large"],description:"Controls padding, font size, and indicator dimensions"},position:{control:"select",options:["top","mid","bottom","solo"],description:"Controls border-radius and which border edges are rendered"},selectionType:{control:"select",options:["none","checkbox","radio"],description:"Which selection indicator to render alongside the label"},selected:{control:"boolean",description:"Whether this option is currently selected/checked"},disabled:{control:"boolean",description:"Prevents interaction and renders in a muted style"},label:{control:"text",description:"Visible label text"}},args:{label:"Option label",size:"default",position:"solo",selectionType:"none",selected:!1,disabled:!1}},p={name:"Documentation",render:()=>e.jsx(M,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen",chromatic:{disableSnapshot:!0}}},m={name:"Playground",render:t=>e.jsx("div",{style:{maxWidth:"320px",padding:"24px"},children:e.jsx(o,{...t})})},x={name:"Default",render:()=>e.jsx("div",{style:{maxWidth:"280px",padding:"24px"},children:e.jsx(o,{label:"Option label",position:"solo"})}),parameters:{controls:{disable:!0}}},u={name:"Sizes",render:()=>{const t=["small","default","large"];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"360px"},children:t.map(n=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"6px"},children:n}),e.jsx(o,{label:`Option label — ${n}`,size:n,position:"solo"})]},n))})},parameters:{controls:{disable:!0}}},b={name:"Status — Plain",render:()=>e.jsxs("div",{style:{maxWidth:"280px",padding:"24px"},children:[e.jsx(o,{label:"Default option",position:"top"}),e.jsx(o,{label:"Hover (interact to see)",position:"mid"}),e.jsx(o,{label:"Selected option",position:"mid",selected:!0}),e.jsx(o,{label:"Disabled option",position:"bottom",disabled:!0})]}),parameters:{controls:{disable:!0}}},h={name:"Status — Checkbox",render:()=>{const t=()=>{const[n,a]=le.useState(new Set(["Option B"])),s=["Option A","Option B","Option C","Option D (disabled)"];return e.jsx("div",{style:{maxWidth:"280px",padding:"24px"},children:s.map((l,r)=>{const d=l.includes("disabled"),j=r===0?"top":r===s.length-1?"bottom":"mid";return e.jsx(o,{label:l,position:j,selectionType:"checkbox",selected:n.has(l),disabled:d,onClick:()=>{d||a(ne=>{const c=new Set(ne);return c.has(l)?c.delete(l):c.add(l),c})}},l)})})};return e.jsx(t,{})},parameters:{controls:{disable:!0}}},g={name:"Status — Radio",render:()=>{const t=()=>{const[n,a]=le.useState("Option B"),s=["Option A","Option B","Option C","Option D (disabled)"];return e.jsx("div",{style:{maxWidth:"280px",padding:"24px"},children:s.map((l,r)=>{const d=l.includes("disabled"),j=r===0?"top":r===s.length-1?"bottom":"mid";return e.jsx(o,{label:l,position:j,selectionType:"radio",selected:n===l,disabled:d,onClick:()=>{d||a(l)}},l)})})};return e.jsx(t,{})},parameters:{controls:{disable:!0}}},y={name:"Status — Disabled",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:"320px"},children:["none","checkbox","radio"].map(t=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"6px"},children:['selectionType="',t,'" — disabled']}),e.jsx(o,{label:"Disabled option",selectionType:t,disabled:!0,position:"solo"})]},t))}),parameters:{controls:{disable:!0}}},f={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Position Variants (stacked)"}),e.jsx("div",{style:{maxWidth:"280px"},children:["top","mid","bottom"].map((t,n)=>e.jsx(o,{label:`Position: "${t}"`,position:t,selectionType:"checkbox",selected:n===1},t))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Selection Types (solo)"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",maxWidth:"280px"},children:["none","checkbox","radio"].map(t=>e.jsx(o,{label:`selectionType="${t}"`,selectionType:t,position:"solo"},t))})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"8px"},children:"Sizes"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",maxWidth:"280px"},children:["small","default","large"].map(t=>e.jsx(o,{label:`size="${t}"`,size:t,position:"solo",selectionType:"radio"},t))})]})]}),parameters:{controls:{disable:!0}}},v={name:"All Interactive States",render:()=>{const t=[{label:"Default"},{label:"Selected",selected:!0},{label:"Disabled",disabled:!0},{label:"Disabled + Selected",disabled:!0,selected:!0}];return e.jsx("div",{style:{display:"flex",gap:"32px",padding:"24px",flexWrap:"wrap"},children:["none","checkbox","radio"].map(n=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"8px",textTransform:"capitalize"},children:n==="none"?"Plain":n}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"6px",minWidth:"200px"},children:t.map(a=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",marginBottom:"2px"},children:a.label}),e.jsx(o,{label:a.label,selectionType:n,selected:a.selected,disabled:a.disabled,position:"solo"})]},a.label))})]},n))})},parameters:{controls:{disable:!0}}},S={name:"Full Design Matrix",render:()=>{const t=["small","default","large"],n=["none","checkbox","radio"],a=[{label:"Default"},{label:"Selected",selected:!0},{label:"Disabled",disabled:!0}];return e.jsx("div",{style:{padding:"24px",overflowX:"auto"},children:t.map(s=>e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Size: ",s]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`120px repeat(${a.length}, 1fr)`,gap:"8px",alignItems:"center"},children:[e.jsx("div",{}),a.map(l=>e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textAlign:"center"},children:l.label},l.label)),n.map(l=>e.jsxs(ae.Fragment,{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize"},children:l==="none"?"Plain":l}),a.map(r=>e.jsx(o,{label:"Option",size:s,selectionType:l,selected:r.selected,disabled:r.disabled,position:"solo"},r.label))]},l))]})]},s))})},parameters:{controls:{disable:!0}}};var D,z,T;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <MenuMultiSelectDocs />,
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
}`,...(T=(z=p.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var B,w,O;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    maxWidth: '320px',
    padding: '24px'
  }}>
      <MenuMultiSelect {...args} />
    </div>
}`,...(O=(w=m.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var W,C,F;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <div style={{
    maxWidth: '280px',
    padding: '24px'
  }}>
      <MenuMultiSelect label="Option label" position="solo" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=(C=x.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var P,A,I;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => {
    const sizes: MenuMultiSelectSize[] = ['small', 'default', 'large'];
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
            <MenuMultiSelect label={\`Option label — \${size}\`} size={size} position="solo" />
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(A=u.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var R,U,$;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Status — Plain',
  render: () => <div style={{
    maxWidth: '280px',
    padding: '24px'
  }}>
      <MenuMultiSelect label="Default option" position="top" />
      <MenuMultiSelect label="Hover (interact to see)" position="mid" />
      <MenuMultiSelect label="Selected option" position="mid" selected />
      <MenuMultiSelect label="Disabled option" position="bottom" disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(U=b.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var E,H,_;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
          const pos: MenuMultiSelectPosition = i === 0 ? 'top' : i === options.length - 1 ? 'bottom' : 'mid';
          return <MenuMultiSelect key={opt} label={opt} position={pos} selectionType="checkbox" selected={checked.has(opt)} disabled={isDisabled} onClick={() => {
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
}`,...(_=(H=h.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var L,N,V;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
          const pos: MenuMultiSelectPosition = i === 0 ? 'top' : i === options.length - 1 ? 'bottom' : 'mid';
          return <MenuMultiSelect key={opt} label={opt} position={pos} selectionType="radio" selected={selected === opt} disabled={isDisabled} onClick={() => {
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
}`,...(V=(N=g.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var G,X,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Status — Disabled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    maxWidth: '320px'
  }}>
      {(['none', 'checkbox', 'radio'] as MenuMultiSelectSelectionType[]).map(type => <div key={type}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '6px'
      }}>
            selectionType="{type}" — disabled
          </div>
          <MenuMultiSelect label="Disabled option" selectionType={type} disabled position="solo" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(X=y.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Y,Z,q;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>
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
          {(['top', 'mid', 'bottom'] as MenuMultiSelectPosition[]).map((pos, i) => <MenuMultiSelect key={pos} label={\`Position: "\${pos}"\`} position={pos} selectionType="checkbox" selected={i === 1} />)}
        </div>
      </div>
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
          {(['none', 'checkbox', 'radio'] as MenuMultiSelectSelectionType[]).map(type => <MenuMultiSelect key={type} label={\`selectionType="\${type}"\`} selectionType={type} position="solo" />)}
        </div>
      </div>
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
          {(['small', 'default', 'large'] as MenuMultiSelectSize[]).map(size => <MenuMultiSelect key={size} label={\`size="\${size}"\`} size={size} position="solo" selectionType="radio" />)}
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var J,Q,ee;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        {(['none', 'checkbox', 'radio'] as MenuMultiSelectSelectionType[]).map(type => <div key={type}>
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
                  <MenuMultiSelect label={s.label} selectionType={type} selected={s.selected} disabled={s.disabled} position="solo" />
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
}`,...(ee=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,oe,ie;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const sizes: MenuMultiSelectSize[] = ['small', 'default', 'large'];
    const types: MenuMultiSelectSelectionType[] = ['none', 'checkbox', 'radio'];
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
              {types.map(type => <React.Fragment key={type}>
                  <div style={{
              fontFamily: 'var(--brand-font-primary)',
              fontSize: '11px',
              color: 'var(--global-color-neutral-gray-700)',
              textTransform: 'capitalize'
            }}>
                    {type === 'none' ? 'Plain' : type}
                  </div>
                  {states.map(s => <MenuMultiSelect key={s.label} label="Option" size={size} selectionType={type} selected={s.selected} disabled={s.disabled} position="solo" />)}
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
}`,...(ie=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};const Oe=["Documentation","Playground","Default","Sizes","StatusPlain","StatusCheckbox","StatusRadio","StatusDisabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{v as AllInteractiveStates,f as ComponentBreakdown,x as Default,p as Documentation,S as FullDesignMatrix,m as Playground,u as Sizes,h as StatusCheckbox,y as StatusDisabled,b as StatusPlain,g as StatusRadio,Oe as __namedExportsOrder,we as default};
