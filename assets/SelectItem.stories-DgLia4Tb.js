import{j as e,r as j}from"./iframe-BD6w5lrE.js";import{S as a}from"./SelectItem-DQNeWItv.js";import{D as l}from"./DocsTemplate-V6oDg52g.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-bAJ0MJKY.js";import"./SwitchBase-CmngbuFE.js";import"./useFormControl-WIfMq7YT.js";import"./useSlot-Dv6-Nk64.js";import"./mergeSlotProps-BQEB4CIG.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BF_H-b2p.js";import"./useControlled-DQVFcRbR.js";import"./ButtonBase-BqhUw9hj.js";import"./index-gAlz9S_E.js";import"./emotion-react.browser.esm-h0FvV5Ub.js";import"./useEventCallback-DIhCHX5Z.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-Dhj7AMnp.js";import"./memoTheme-BqjHkQZT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const z=["small","default","large"],te=["checkbox","radio"],ae=["default","selected","some-selected","hover","clicked"],k=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"SelectItem",subtitle:"A standalone checkbox or radio button indicator. Used as the selection control inside list rows, table rows, and select menus. Built on MUI Checkbox / Radio with all visual sizing and colour driven by design tokens."}),e.jsxs(l.BodyText,{children:[e.jsx("strong",{children:"SelectItem"})," is a focused, single-purpose building block that renders exactly one checkbox or radio indicator at a specified size and state. It does not include a label or wrapper row — compose it inside a ",e.jsx("strong",{children:"MenuMultiSelect"})," row or a custom list item for a complete interactive control."]}),e.jsx(l.Anatomy,{parts:[{number:1,label:"Wrapper",description:"An inline-flex span that constrains the indicator to its token-driven pixel size."},{number:2,label:"MUI Checkbox / Radio",description:"The underlying MUI control. Colour and size are overridden via sx to match the Figma spec exactly."}]}),e.jsx(l.Section,{title:"MUI Foundation",children:e.jsxs(l.BodyText,{children:["SelectItem wraps ",e.jsx("strong",{children:"MUI Checkbox"})," (for ",e.jsx("code",{children:'type="checkbox"'}),") and"," ",e.jsx("strong",{children:"MUI Radio"})," (for ",e.jsx("code",{children:'type="radio"'}),"). The MUI foundation provides native ",e.jsx("code",{children:"aria-checked"}),", keyboard interaction, and focus management out of the box. Visual customisation is applied via the ",e.jsx("code",{children:"sx"})," ","prop, keeping the accessibility layer intact."]})}),e.jsx(l.Section,{title:"Types",children:e.jsx(l.Subsection,{title:"Checkbox vs Radio",children:e.jsx("div",{style:{display:"flex",gap:"40px",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:te.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize"},children:t}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(a,{type:t,state:"default"}),e.jsx(a,{type:t,state:"selected"}),t==="checkbox"&&e.jsx(a,{type:t,state:"some-selected"})]})]},t))})})}),e.jsxs(l.Section,{title:"Sizes",children:[e.jsxs(l.BodyText,{children:["Three sizes match the design system scale: ",e.jsx("code",{children:"small"})," (18 px),"," ",e.jsx("code",{children:"default"})," (22 px), and ",e.jsx("code",{children:"large"})," (26 px). Use the size that matches the row density of the surrounding list."]}),e.jsx(l.Subsection,{title:"Checkbox — all sizes",children:e.jsx("div",{style:{display:"flex",gap:"24px",alignItems:"center",padding:"var(--global-spacing-sizing-16px) 0"},children:z.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{type:"checkbox",size:t,state:"selected"}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",textTransform:"capitalize"},children:t})]},t))})}),e.jsx(l.Subsection,{title:"Radio — all sizes",children:e.jsx("div",{style:{display:"flex",gap:"24px",alignItems:"center",padding:"var(--global-spacing-sizing-16px) 0"},children:z.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{type:"radio",size:t,state:"selected"}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",textTransform:"capitalize"},children:t})]},t))})})]}),e.jsxs(l.Section,{title:"States",children:[e.jsxs(l.BodyText,{children:[e.jsx("code",{children:"state"})," controls both the visual appearance and the underlying MUI ",e.jsx("code",{children:"checked"})," / ",e.jsx("code",{children:"indeterminate"})," props:"," ",e.jsx("code",{children:"default"})," → unchecked,"," ",e.jsx("code",{children:"selected"})," → checked,"," ",e.jsx("code",{children:"some-selected"})," → indeterminate (checkbox only),"," ",e.jsx("code",{children:"hover"})," / ",e.jsx("code",{children:"clicked"})," → visually identical to selected but communicate intent for static story matrices."]}),e.jsx(l.Subsection,{title:"Checkbox states",children:e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"var(--global-spacing-sizing-16px) 0",alignItems:"flex-end"},children:[ae.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{type:"checkbox",state:t}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"9px",color:"var(--global-color-neutral-gray-400)",textAlign:"center",maxWidth:"64px"},children:t})]},t)),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{type:"checkbox",state:"default",disabled:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"9px",color:"var(--global-color-neutral-gray-400)",textAlign:"center"},children:"disabled"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{type:"checkbox",state:"selected",disabled:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"9px",color:"var(--global-color-neutral-gray-400)",textAlign:"center"},children:"disabled+selected"})]})]})}),e.jsx(l.Subsection,{title:"Radio states",children:e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"var(--global-spacing-sizing-16px) 0",alignItems:"flex-end"},children:[["default","selected","hover","clicked"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{type:"radio",state:t}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"9px",color:"var(--global-color-neutral-gray-400)",textAlign:"center",maxWidth:"64px"},children:t})]},t)),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{type:"radio",state:"default",disabled:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"9px",color:"var(--global-color-neutral-gray-400)",textAlign:"center"},children:"disabled"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[e.jsx(a,{type:"radio",state:"selected",disabled:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"9px",color:"var(--global-color-neutral-gray-400)",textAlign:"center"},children:"disabled+selected"})]})]})})]}),e.jsx(l.TokenTable,{title:"Design Tokens",description:"SelectItem uses the following component-level tokens. All values alias the global design tokens defined in tokens.css.",tokens:[{name:"--select-item-size-sm",description:"Pixel dimension of the small indicator (18 px)"},{name:"--select-item-size",description:"Pixel dimension of the default indicator (22 px)"},{name:"--select-item-size-lg",description:"Pixel dimension of the large indicator (26 px)"},{name:"--select-item-color-default",description:"Icon colour in the default (unchecked) state (gray-500)"},{name:"--select-item-color-checked",description:"Icon colour when checked / selected (brand primary, #3776CE)"},{name:"--select-item-color-disabled",description:"Icon colour when disabled (gray-300)"},{name:"--select-item-disabled-opacity",description:"Opacity applied to the wrapper when disabled (0.5)"}]}),e.jsx(l.CodeBlock,{children:`import { SelectItem } from './BuildingBlocks/SelectItem';

// Default checkbox (unchecked)
<SelectItem type="checkbox" />

// Checked checkbox — default size
<SelectItem type="checkbox" state="selected" />

// Indeterminate checkbox — large
<SelectItem type="checkbox" state="some-selected" size="large" />

// Radio button — selected, small
<SelectItem type="radio" state="selected" size="small" />

// Disabled + checked checkbox
<SelectItem type="checkbox" state="selected" disabled />

// Controlled — wire up onChange
const [checked, setChecked] = useState(false);
<SelectItem
  type="checkbox"
  state={checked ? 'selected' : 'default'}
  onChange={setChecked}
/>`}),e.jsxs(l.Principles,{children:[e.jsxs(l.PrincipleCard,{number:1,title:"One responsibility",children:["SelectItem renders only the indicator — no label, no row layout. Compose it inside a row component (",e.jsx("strong",{children:"MenuMultiSelect"}),") for a full list-item experience."]}),e.jsx(l.PrincipleCard,{number:2,title:"Token-driven sizing",children:"All three pixel sizes map directly to global spacing tokens so the component scales alongside the rest of the design system without custom overrides."}),e.jsxs(l.PrincipleCard,{number:3,title:"Accessible by default",children:["Wraps MUI primitives that handle ",e.jsx("code",{children:"aria-checked"}),", keyboard interaction, and focus management. Pass ",e.jsx("code",{children:"aria-label"})," when rendering without an adjacent visible label."]})]}),e.jsx(l.RelatedLinks,{links:[{label:"MenuMultiSelect",href:"?path=/story/foundation-buildingblocks-menumultiselect--documentation"},{label:"Dropdown",href:"?path=/story/atoms-input-dropdown--documentation"}]}),e.jsx(l.Footer,{componentName:"SelectItem"})]});k.__docgenInfo={description:"",methods:[],displayName:"SelectItemDocs"};const d=["small","default","large"],c=["checkbox","radio"],S=["default","selected","some-selected","hover","clicked"],ke={title:"Foundation/BuildingBlocks/SelectItem",component:a,parameters:{docs:{page:()=>e.jsx(k,{})}},argTypes:{type:{control:"select",options:c,description:"Which control type to render"},state:{control:"select",options:S,description:"Interaction / visual state"},size:{control:"select",options:d,description:"Visual scale (18 / 22 / 26 px)"},disabled:{control:"boolean",description:"Prevents interaction and dims the indicator"}},args:{type:"checkbox",state:"default",size:"default",disabled:!1}},p={name:"Documentation",render:()=>e.jsx(k,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen",chromatic:{disableSnapshot:!0}}},x={name:"Playground",render:t=>{const r=()=>{const[i,n]=j.useState(t.state==="selected"||t.state==="hover"||t.state==="clicked");return e.jsx("div",{style:{padding:"40px 24px"},children:e.jsx(a,{...t,state:i?"selected":"default",onChange:n})})};return e.jsx(r,{})}},m={name:"Default",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",padding:"40px 24px",alignItems:"center"},children:[e.jsx(a,{type:"checkbox",state:"default"}),e.jsx(a,{type:"radio",state:"default"})]}),parameters:{controls:{disable:!0}}},y={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"40px 24px"},children:c.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"12px"},children:t}),e.jsx("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:d.map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(a,{type:t,size:r,state:"selected"}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",textTransform:"capitalize"},children:r})]},r))})]},t))}),parameters:{controls:{disable:!0}}},g={name:"Status — Checkbox",render:()=>{const t=()=>{const[r,i]=j.useState("default"),n=["default","selected","some-selected"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"40px 24px"},children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"14px",color:"var(--global-color-neutral-gray-500)",margin:"0 0 8px"},children:"Click to cycle: default → selected → indeterminate"}),e.jsx(a,{type:"checkbox",state:r,size:"default",onChange:()=>{i(s=>n[(n.indexOf(s)+1)%n.length])}})]})};return e.jsx(t,{})},parameters:{controls:{disable:!0}}},b={name:"Status — Radio",render:()=>{const t=()=>{const[r,i]=j.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"40px 24px"},children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"14px",color:"var(--global-color-neutral-gray-500)",margin:"0 0 8px"},children:"Click to toggle"}),e.jsx(a,{type:"radio",state:r?"selected":"default",onChange:i})]})};return e.jsx(t,{})},parameters:{controls:{disable:!0}}},f={name:"Status — Disabled",render:()=>e.jsx("div",{style:{display:"flex",gap:"32px",padding:"40px 24px",flexWrap:"wrap"},children:c.map(t=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"12px"},children:[t," — disabled"]}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{type:t,state:"default",disabled:!0}),e.jsx(a,{type:t,state:"selected",disabled:!0}),t==="checkbox"&&e.jsx(a,{type:t,state:"some-selected",disabled:!0})]})]},t))}),parameters:{controls:{disable:!0}}},h={name:"Component Breakdown",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"40px",padding:"40px 24px"},children:c.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize",marginBottom:"16px"},children:t}),e.jsx("div",{style:{display:"flex",gap:"32px",flexWrap:"wrap"},children:d.map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize"},children:r}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:S.filter(i=>t==="checkbox"||i!=="some-selected").map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(a,{type:t,size:r,state:i}),e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)"},children:i})]},i))})]},r))})]},t))}),parameters:{controls:{disable:!0}}},u={name:"All Interactive States",render:()=>e.jsx("div",{style:{padding:"40px 24px",overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"16px 8px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:700,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.6px",textAlign:"left",paddingBottom:"8px"},children:"Type"}),[...S,"disabled","disabled+checked"].map(t=>e.jsx("th",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:700,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.6px",textAlign:"center",paddingBottom:"8px"},children:t},t))]})}),e.jsx("tbody",{children:c.map(t=>e.jsxs("tr",{children:[e.jsx("td",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize",paddingRight:"16px"},children:t}),S.filter(r=>t==="checkbox"||r!=="some-selected").map(r=>e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle",padding:"6px 8px"},children:e.jsx(a,{type:t,state:r})},r)),t==="radio"&&e.jsx("td",{}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle",padding:"6px 8px"},children:e.jsx(a,{type:t,state:"default",disabled:!0})}),e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle",padding:"6px 8px"},children:e.jsx(a,{type:t,state:"selected",disabled:!0})})]},t))})]})}),parameters:{controls:{disable:!0}}},v={name:"Full Design Matrix",render:()=>{const t=[{label:"Default",state:"default"},{label:"Selected",state:"selected"},{label:"Indeterminate",state:"some-selected"},{label:"Hover",state:"hover"},{label:"Clicked",state:"clicked"},{label:"Disabled",state:"default",disabled:!0},{label:"Disabled+Selected",state:"selected",disabled:!0},{label:"Disabled+Indet.",state:"some-selected",disabled:!0}],r=[{label:"Default",state:"default"},{label:"Selected",state:"selected"},{label:"Hover",state:"hover"},{label:"Clicked",state:"clicked"},{label:"Disabled",state:"default",disabled:!0},{label:"Disabled+Selected",state:"selected",disabled:!0}],i={fontFamily:"var(--brand-font-primary)",fontSize:"9px",fontWeight:700,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.5px",textAlign:"center",padding:"0 8px 10px",whiteSpace:"nowrap"},n={fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",paddingRight:"12px",whiteSpace:"nowrap",textAlign:"right",verticalAlign:"middle"};return e.jsxs("div",{style:{padding:"32px 24px",overflowX:"auto"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Checkbox"}),e.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"4px",marginBottom:"40px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"80px"}}),t.map(s=>e.jsx("th",{style:i,children:s.label},s.label))]})}),e.jsx("tbody",{children:d.map(s=>e.jsxs("tr",{children:[e.jsx("td",{style:n,children:s}),t.map(o=>e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle",padding:"10px 8px",overflow:"visible"},children:e.jsx(a,{type:"checkbox",size:s,state:o.state,disabled:o.disabled})},o.label))]},s))})]}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px"},children:"Radio"}),e.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"4px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"80px"}}),r.map(s=>e.jsx("th",{style:i,children:s.label},s.label))]})}),e.jsx("tbody",{children:d.map(s=>e.jsxs("tr",{children:[e.jsx("td",{style:n,children:s}),r.map(o=>e.jsx("td",{style:{textAlign:"center",verticalAlign:"middle",padding:"10px 8px",overflow:"visible"},children:e.jsx(a,{type:"radio",size:s,state:o.state,disabled:o.disabled})},o.label))]},s))})]})]})},parameters:{controls:{disable:!0}}};var I,D,C;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <SelectItemDocs />,
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
}`,...(C=(D=p.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var A,w,T;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const Demo = () => {
      const [checked, setChecked] = useState(args.state === 'selected' || args.state === 'hover' || args.state === 'clicked');
      return <div style={{
        padding: '40px 24px'
      }}>
          <SelectItem {...args} state={checked ? 'selected' : 'default'} onChange={setChecked} />
        </div>;
    };
    return <Demo />;
  }
}`,...(T=(w=x.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var F,L,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    padding: '40px 24px',
    alignItems: 'center'
  }}>
      <SelectItem type="checkbox" state="default" />
      <SelectItem type="radio" state="default" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(L=m.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var W,R,E;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '40px 24px'
  }}>
      {ALL_TYPES.map(type => <div key={type}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'capitalize',
        marginBottom: '12px'
      }}>
            {type}
          </div>
          <div style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'center'
      }}>
            {ALL_SIZES.map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
                <SelectItem type={type} size={size} state="selected" />
                <span style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            color: 'var(--global-color-neutral-gray-400)',
            textTransform: 'capitalize'
          }}>{size}</span>
              </div>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(R=y.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var M,P,_;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Status — Checkbox',
  render: () => {
    const CheckboxDemo = () => {
      const [state, setState] = useState<SelectItemState>('default');
      const cycle: SelectItemState[] = ['default', 'selected', 'some-selected'];
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '40px 24px'
      }}>
          <p style={{
          fontFamily: 'var(--brand-font-secondary)',
          fontSize: '14px',
          color: 'var(--global-color-neutral-gray-500)',
          margin: '0 0 8px'
        }}>
            Click to cycle: default → selected → indeterminate
          </p>
          <SelectItem type="checkbox" state={state} size="default" onChange={() => {
          setState(s => cycle[(cycle.indexOf(s) + 1) % cycle.length]);
        }} />
        </div>;
    };
    return <CheckboxDemo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_=(P=g.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var U,O,H;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Status — Radio',
  render: () => {
    const RadioDemo = () => {
      const [selected, setSelected] = useState(false);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '40px 24px'
      }}>
          <p style={{
          fontFamily: 'var(--brand-font-secondary)',
          fontSize: '14px',
          color: 'var(--global-color-neutral-gray-500)',
          margin: '0 0 8px'
        }}>
            Click to toggle
          </p>
          <SelectItem type="radio" state={selected ? 'selected' : 'default'} onChange={setSelected} />
        </div>;
    };
    return <RadioDemo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(H=(O=b.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var Y,Z,X;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Status — Disabled',
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    padding: '40px 24px',
    flexWrap: 'wrap'
  }}>
      {ALL_TYPES.map(type => <div key={type}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'capitalize',
        marginBottom: '12px'
      }}>
            {type} — disabled
          </div>
          <div style={{
        display: 'flex',
        gap: '12px'
      }}>
            <SelectItem type={type} state="default" disabled />
            <SelectItem type={type} state="selected" disabled />
            {type === 'checkbox' && <SelectItem type={type} state="some-selected" disabled />}
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:X.source}}};var N,V,K;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '40px 24px'
  }}>
      {ALL_TYPES.map(type => <div key={type}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        textTransform: 'capitalize',
        marginBottom: '16px'
      }}>
            {type}
          </div>
          <div style={{
        display: 'flex',
        gap: '32px',
        flexWrap: 'wrap'
      }}>
            {ALL_SIZES.map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
                <div style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)',
            textTransform: 'capitalize'
          }}>
                  {size}
                </div>
                <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
                  {ALL_STATES.filter(s => type === 'checkbox' || s !== 'some-selected').map(state => <div key={state} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
                      <SelectItem type={type} size={size} state={state} />
                      <span style={{
                fontFamily: 'var(--brand-font-secondary)',
                fontSize: '10px',
                color: 'var(--global-color-neutral-gray-400)'
              }}>{state}</span>
                    </div>)}
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
}`,...(K=(V=h.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var q,G,J;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    padding: '40px 24px',
    overflowX: 'auto'
  }}>
      <table style={{
      borderCollapse: 'separate',
      borderSpacing: '16px 8px'
    }}>
        <thead>
          <tr>
            <th style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            fontWeight: 700,
            color: 'var(--global-color-neutral-gray-500)',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            textAlign: 'left',
            paddingBottom: '8px'
          }}>
              Type
            </th>
            {[...ALL_STATES, 'disabled', 'disabled+checked'].map(s => <th key={s} style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            fontWeight: 700,
            color: 'var(--global-color-neutral-gray-500)',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            textAlign: 'center',
            paddingBottom: '8px'
          }}>
                {s}
              </th>)}
          </tr>
        </thead>
        <tbody>
          {ALL_TYPES.map(type => <tr key={type}>
              <td style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            color: 'var(--global-color-neutral-gray-700)',
            textTransform: 'capitalize',
            paddingRight: '16px'
          }}>
                {type}
              </td>
              {ALL_STATES.filter(s => type === 'checkbox' || s !== 'some-selected').map(state => <td key={state} style={{
            textAlign: 'center',
            verticalAlign: 'middle',
            padding: '6px 8px'
          }}>
                  <SelectItem type={type} state={state} />
                </td>)}
              {type === 'radio' && <td />}
              <td style={{
            textAlign: 'center',
            verticalAlign: 'middle',
            padding: '6px 8px'
          }}>
                <SelectItem type={type} state="default" disabled />
              </td>
              <td style={{
            textAlign: 'center',
            verticalAlign: 'middle',
            padding: '6px 8px'
          }}>
                <SelectItem type={type} state="selected" disabled />
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,$,ee;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    type MatrixCol = {
      label: string;
      state: SelectItemState;
      disabled?: boolean;
    };
    const checkboxCols: MatrixCol[] = [{
      label: 'Default',
      state: 'default'
    }, {
      label: 'Selected',
      state: 'selected'
    }, {
      label: 'Indeterminate',
      state: 'some-selected'
    }, {
      label: 'Hover',
      state: 'hover'
    }, {
      label: 'Clicked',
      state: 'clicked'
    }, {
      label: 'Disabled',
      state: 'default',
      disabled: true
    }, {
      label: 'Disabled+Selected',
      state: 'selected',
      disabled: true
    }, {
      label: 'Disabled+Indet.',
      state: 'some-selected',
      disabled: true
    }];
    const radioCols: MatrixCol[] = [{
      label: 'Default',
      state: 'default'
    }, {
      label: 'Selected',
      state: 'selected'
    }, {
      label: 'Hover',
      state: 'hover'
    }, {
      label: 'Clicked',
      state: 'clicked'
    }, {
      label: 'Disabled',
      state: 'default',
      disabled: true
    }, {
      label: 'Disabled+Selected',
      state: 'selected',
      disabled: true
    }];
    const headerSx: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: '9px',
      fontWeight: 700,
      color: 'var(--global-color-neutral-gray-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      textAlign: 'center',
      padding: '0 8px 10px',
      whiteSpace: 'nowrap'
    };
    const rowLabelSx: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: '10px',
      color: 'var(--global-color-neutral-gray-400)',
      paddingRight: '12px',
      whiteSpace: 'nowrap',
      textAlign: 'right',
      verticalAlign: 'middle'
    };
    return <div style={{
      padding: '32px 24px',
      overflowX: 'auto'
    }}>
        {/* CHECKBOX section */}
        <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>
          Checkbox
        </div>
        <table style={{
        borderCollapse: 'separate',
        borderSpacing: '4px',
        marginBottom: '40px'
      }}>
          <thead>
            <tr>
              <th style={{
              width: '80px'
            }} />
              {checkboxCols.map(c => <th key={c.label} style={headerSx}>{c.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {ALL_SIZES.map(size => <tr key={size}>
                <td style={rowLabelSx}>{size}</td>
                {checkboxCols.map(c => <td key={c.label} style={{
              textAlign: 'center',
              verticalAlign: 'middle',
              padding: '10px 8px',
              overflow: 'visible'
            }}>
                    <SelectItem type="checkbox" size={size} state={c.state} disabled={c.disabled} />
                  </td>)}
              </tr>)}
          </tbody>
        </table>

        {/* RADIO section */}
        <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px'
      }}>
          Radio
        </div>
        <table style={{
        borderCollapse: 'separate',
        borderSpacing: '4px'
      }}>
          <thead>
            <tr>
              <th style={{
              width: '80px'
            }} />
              {radioCols.map(c => <th key={c.label} style={headerSx}>{c.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {ALL_SIZES.map(size => <tr key={size}>
                <td style={rowLabelSx}>{size}</td>
                {radioCols.map(c => <td key={c.label} style={{
              textAlign: 'center',
              verticalAlign: 'middle',
              padding: '10px 8px',
              overflow: 'visible'
            }}>
                    <SelectItem type="radio" size={size} state={c.state} disabled={c.disabled} />
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const ze=["Documentation","Playground","Default","Sizes","StatusCheckbox","StatusRadio","StatusDisabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{u as AllInteractiveStates,h as ComponentBreakdown,m as Default,p as Documentation,v as FullDesignMatrix,x as Playground,y as Sizes,g as StatusCheckbox,f as StatusDisabled,b as StatusRadio,ze as __namedExportsOrder,ke as default};
