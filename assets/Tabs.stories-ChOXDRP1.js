import{j as e}from"./iframe-Ch-Tj3io.js";import{T as a}from"./Tabs-DdVroCBo.js";import{D as t}from"./DocsTemplate-DIX6dsd5.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-CeIXGSHE.js";import"./useTheme-D60MAfBg.js";import"./memoTheme-Iqtna-UK.js";import"./useEventCallback-fjU8igtO.js";import"./ownerWindow-DIR61fab.js";import"./useSlot-BJDfx9Z4.js";import"./mergeSlotProps-C1FN0SSN.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CE2zpngP.js";import"./useSlotProps-Bnp2BmoU.js";import"./createSvgIcon-BmyPNPa7.js";import"./ButtonBase-DcJvt2pN.js";import"./index-B62n4EIE.js";const n=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],I=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7,dropdown:!0},{id:"tab3",label:"Tab label",count:7,dropdown:!0},{id:"tab4",label:"Tab label",count:7,disabled:!0}],o={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},be={...o,background:"var(--global-color-neutral-gray-800)"},D=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Tabs",subtitle:"Navigation tabs with underline or contained variants, three sizes, and optional badge counts."}),e.jsxs(t.BodyText,{children:["The ",e.jsx("strong",{children:"Tabs"})," component is a horizontal navigation strip. Each tab item is structured as a column — a label row (leading icon + label text + trailing icon + badge), a small spacer, and an underline indicator line (for underline types). Clicking a tab marks it as active and calls the ",e.jsx("code",{children:"onTabChange"})," callback."]}),e.jsxs(t.Section,{title:"MUI Foundation",children:[e.jsxs(t.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"Tabs"})," and ",e.jsx("strong",{children:"Tab"})," components. The outer tab strip uses ",e.jsx("code",{children:"MuiTabs"})," (",e.jsx("code",{children:"@mui/material/Tabs"}),"), which provides"," ",e.jsx("code",{children:'role="tablist"'}),", keyboard navigation (left/right arrow keys), active-tab tracking, and accessible ",e.jsx("code",{children:"aria-selected"})," attributes. Each individual tab item is a ",e.jsx("code",{children:"MuiTab"})," (",e.jsx("code",{children:"@mui/material/Tab"}),"), which provides"," ",e.jsx("code",{children:'role="tab"'})," and proper focus management. MUI's default indicator and styling are fully overridden; the NPX underline colour, contained border, dark theme, badge counts, and dropdown chevron are applied via CSS Modules and the ",e.jsx("code",{children:"--tab-*"})," ","token family."]}),e.jsx(t.CodeBlock,{children:`// MUI base imports
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';

// BuildingBlocks/Tabs:
<MuiTabs value={activeId} onChange={(_e, v) => onTabChange(v)} className={styles.tabs}>
  {items.map(item => (
    <MuiTab key={item.id} value={item.id} label={item.label}
      className={styles.tab} disabled={item.disabled} />
  ))}
</MuiTabs>`})]}),e.jsx(t.Section,{title:"Anatomy",children:e.jsx(t.Anatomy,{preview:e.jsx("div",{style:{padding:"24px 0"},children:e.jsx(a,{items:[{id:"t",label:"Tab label",count:7}],type:"default",size:"default",activeId:"t"})}),parts:[{id:1,name:"Leading icon",token:"--tab-icon-size-default",description:"Optional 16 × 16 account icon placed before the label text."},{id:2,name:"Label text",token:"--tab-font-size-default, --tab-font-family",description:"Short descriptive label identifying the tab panel."},{id:3,name:"Trailing icon",token:"--tab-icon-size-default",description:"Arrow-right for navigation, or chevron-down for dropdown tabs."},{id:4,name:"Badge",token:"--tab-default-badge-bg",description:"Circular count indicator. Only shown when count is provided and showBadge is true."},{id:5,name:"Spacer",token:"--tab-spacer-height",description:"4px gap between the label row and the underline indicator."},{id:6,name:"Line",token:"--tab-line-width, --tab-underline-track-color",description:"2px underline at the base of each tab item. Changes color when active or hovered."}]})}),e.jsxs(t.Section,{title:"Sizes",children:[e.jsxs(t.BodyText,{children:["Three sizes — ",e.jsx("strong",{children:"small"}),", ",e.jsx("strong",{children:"default"}),", and ",e.jsx("strong",{children:"large"}),". Size scales the font, icons, badge, and internal padding."]}),e.jsx(t.SizeDemo,{rows:[{label:"Small",children:e.jsx(a,{items:n,type:"default",size:"small",activeId:"tab2"})},{label:"Default",children:e.jsx(a,{items:n,type:"default",size:"default",activeId:"tab2"})},{label:"Large",children:e.jsx(a,{items:n,type:"default",size:"large",activeId:"tab2"})}]})]}),e.jsxs(t.Section,{title:"Types",children:[e.jsxs(t.Subsection,{title:"Default (underline, blue indicator)",children:[e.jsx(t.BodyText,{children:"The default type renders an underline indicator at the bottom of each tab. The active tab displays a blue indicator line. Used for primary page-level navigation."}),e.jsxs("div",{style:o,children:[e.jsx(a,{items:n,type:"default",size:"small",activeId:"tab2"}),e.jsx(a,{items:n,type:"default",size:"default",activeId:"tab2"}),e.jsx(a,{items:n,type:"default",size:"large",activeId:"tab2"})]})]}),e.jsxs(t.Subsection,{title:"Secondary (underline, dark indicator)",children:[e.jsx(t.BodyText,{children:"The secondary type uses a dark charcoal underline for the active state, alongside a sky-blue badge for the default state. Suitable for secondary navigation contexts."}),e.jsxs("div",{style:o,children:[e.jsx(a,{items:n,type:"secondary",size:"small",activeId:"tab2"}),e.jsx(a,{items:n,type:"secondary",size:"default",activeId:"tab2"}),e.jsx(a,{items:n,type:"secondary",size:"large",activeId:"tab2"})]})]}),e.jsxs(t.Subsection,{title:"Contained (bordered box, light theme)",children:[e.jsx(t.BodyText,{children:"Each tab is enclosed in a rounded bordered box. Inactive tabs show a white background with a blue border. The active state fills the box with solid blue. Hover transitions to a filled state. Use for section switching on light backgrounds."}),e.jsxs("div",{style:o,children:[e.jsx(a,{items:n,type:"contained",size:"small",activeId:"tab2"}),e.jsx(a,{items:n,type:"contained",size:"default",activeId:"tab2"}),e.jsx(a,{items:n,type:"contained",size:"large",activeId:"tab2"})]})]}),e.jsxs(t.Subsection,{title:"Dark Contained (bordered box, dark theme)",children:[e.jsx(t.BodyText,{children:"The dark-contained variant uses a navy/charcoal fill for all states. Designed for use on dark backgrounds such as navy headers or dark sidebars."}),e.jsxs("div",{style:be,children:[e.jsx(a,{items:n,type:"dark-contained",size:"small",activeId:"tab2"}),e.jsx(a,{items:n,type:"dark-contained",size:"default",activeId:"tab2"}),e.jsx(a,{items:n,type:"dark-contained",size:"large",activeId:"tab2"})]})]})]}),e.jsxs(t.Section,{title:"Dropdown indicator",children:[e.jsxs(t.BodyText,{children:["Individual tabs can show a ",e.jsx("strong",{children:"chevron-down"})," icon instead of the arrow-right by setting ",e.jsx("code",{children:"dropdown: true"})," on the tab item. This signals that the tab opens a sub-menu or dropdown panel rather than navigating to a new section."]}),e.jsxs("div",{style:o,children:[e.jsx(a,{items:I,type:"default",size:"default",activeId:"tab1"}),e.jsx(a,{items:I,type:"secondary",size:"default",activeId:"tab1"}),e.jsx(a,{items:I,type:"contained",size:"default",activeId:"tab1"})]})]}),e.jsx(t.Section,{title:"Usage guidelines",children:e.jsx(t.DosDonts,{doItem:{icon:e.jsx(a,{items:[{id:"t1",label:"Overview",count:3},{id:"t2",label:"Details"}],type:"default",size:"default",activeId:"t1"}),description:"Use clear, short labels. Keep the active state clearly distinguished with the underline indicator or filled state."},dontItem:{icon:e.jsx(a,{items:[{id:"t1",label:"Overview"},{id:"t2",label:"Details"}],type:"contained",size:"default",activeId:"t1"}),description:"Don't mix underline and contained tab types in the same navigation context."}})}),e.jsx(t.Section,{title:"Design principles",children:e.jsxs(t.Principles,{children:[e.jsx(t.PrincipleCard,{number:1,title:"Clarity",children:'Each tab label must immediately communicate the content behind it. Avoid vague labels like "More" or "Other" without additional context.'}),e.jsx(t.PrincipleCard,{number:2,title:"Consistency",children:"All tabs in a strip must share the same type, size, and badge visibility. Never mix types within a single navigation row."}),e.jsxs(t.PrincipleCard,{number:3,title:"Accessibility",children:["The strip uses ",e.jsx("code",{children:'role="tablist"'})," and each item uses ",e.jsx("code",{children:'role="tab"'}),"with ",e.jsx("code",{children:"aria-selected"})," and ",e.jsx("code",{children:"aria-disabled"})," attributes. Pair tabs with visible panel content."]})]})}),e.jsx(t.Section,{title:"Design tokens",children:e.jsx(t.TokenTable,{tokens:[{name:"--tab-font-family",description:"Font family for all tab labels."},{name:"--tab-font-weight",description:"Font weight for inactive tab labels (light/300)."},{name:"--tab-letter-spacing",description:"Letter spacing applied to all tab text."},{name:"--tab-font-size-sm / -default / -lg",description:"Font size per size scale."},{name:"--tab-line-height-sm / -default / -lg",description:"Line height per size scale."},{name:"--tab-icon-size-sm / -default / -lg",description:"Leading and trailing icon dimensions per size."},{name:"--tab-inner-gap-sm / -default / -lg",description:"Gap between icon, label text, and trailing icon."},{name:"--tab-label-pl-default / pr-default",description:"Left and right outer padding of the label row."},{name:"--tab-spacer-height",description:"Vertical gap between the label row and the underline indicator (4px)."},{name:"--tab-line-width",description:"Thickness of the underline indicator line (2px)."},{name:"--tab-underline-track-color",description:"Default (inactive) underline line color — gray-200."},{name:"--tab-default-line-active",description:"Active underline indicator color for type=default (sky-blue)."},{name:"--tab-secondary-line-active",description:"Active underline indicator color for type=secondary (dark)."},{name:"--tab-contained-bg-default",description:"Background for contained tab in default/inactive state."},{name:"--tab-contained-border-default",description:"Border color for contained tab (inactive)."},{name:"--tab-contained-bg-active",description:"Background for contained tab in active state (solid blue)."},{name:"--tab-dark-bg-default",description:"Background for dark-contained tab in default state."},{name:"--tab-default-badge-bg",description:"Badge background for type=default tabs (sky-blue tint)."},{name:"--tab-secondary-badge-bg",description:"Badge background for type=secondary tabs (sky-blue)."},{name:"--tab-contained-radius",description:"Border-radius of contained tab boxes (6px)."},{name:"--tab-badge-size-default",description:"Minimum width and height of the badge circle."},{name:"--tab-focus-ring-color",description:"Outline color shown on keyboard focus."}]})}),e.jsx(t.Footer,{})]});D.__docgenInfo={description:"",methods:[],displayName:"TabsDocs"};const s=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],c=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7,dropdown:!0},{id:"tab3",label:"Tab label",count:7,dropdown:!0},{id:"tab4",label:"Tab label",count:7,disabled:!0}],d=["small","default","large"],ge=["default","secondary","contained","dark-contained"],Ae={title:"Foundation/BuildingBlocks/Tabs",component:a,parameters:{docs:{page:()=>e.jsx(D,{})}},argTypes:{type:{control:"select",options:ge},size:{control:"select",options:d},showBadge:{control:"boolean"},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},activeId:{control:"text"}},args:{items:s,type:"default",size:"default",showBadge:!0,showLeadingIcon:!0,showTrailingIcon:!0,activeId:"tab2"}},r={fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"8px",marginTop:0},l={fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",marginTop:0},p={name:"Documentation",render:()=>e.jsx(D,{}),parameters:{controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},b={name:"Playground"},g={name:"Default",args:{type:"default",size:"default",activeId:"tab2"}},u={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-16px)"},children:d.map(i=>e.jsxs("div",{children:[e.jsx("p",{style:r,children:i}),e.jsx(a,{items:s,size:i,type:"default",activeId:"tab2"})]},i))}),parameters:{controls:{disable:!0}}},m={name:"Status / Default (Underline Blue)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px)"},children:d.map(i=>e.jsxs("div",{children:[e.jsx("p",{style:r,children:i}),e.jsx(a,{items:s,type:"default",size:i,activeId:"tab2"})]},i))}),parameters:{controls:{disable:!0}}},v={name:"Status / Secondary (Underline Dark)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px)"},children:d.map(i=>e.jsxs("div",{children:[e.jsx("p",{style:r,children:i}),e.jsx(a,{items:s,type:"secondary",size:i,activeId:"tab2"})]},i))}),parameters:{controls:{disable:!0}}},y={name:"Status / Contained",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px)"},children:d.map(i=>e.jsxs("div",{children:[e.jsx("p",{style:r,children:i}),e.jsx(a,{items:s,type:"contained",size:i,activeId:"tab2"})]},i))}),parameters:{controls:{disable:!0}}},x={name:"Status / Dark Contained",render:()=>e.jsx("div",{style:{background:"var(--global-color-neutral-gray-800)",padding:"var(--global-spacing-sizing-24px)",borderRadius:"var(--global-spacing-radius-8px)"},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:d.map(i=>e.jsxs("div",{children:[e.jsx("p",{style:{...r,color:"var(--global-color-neutral-gray-400)"},children:i}),e.jsx(a,{items:s,type:"dark-contained",size:i,activeId:"tab2"})]},i))})}),parameters:{controls:{disable:!0}}},h={name:"Status / With Dropdown Indicator",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px)"},children:["default","secondary","contained"].map(i=>e.jsxs("div",{children:[e.jsx("p",{style:r,children:i}),e.jsx(a,{items:c,type:i,size:"default",activeId:"tab1"})]},i))}),parameters:{controls:{disable:!0}}},f={name:"Status / Disabled Tab",args:{type:"default",size:"default",activeId:"tab1"}},j={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:l,children:"Anatomy"}),e.jsx("p",{style:{...r,marginBottom:"var(--global-spacing-sizing-16px)"},children:"A Tabs strip is composed of individual tab items. Each tab item may include: a leading icon, a text label, a trailing icon, and an optional badge/count. One tab is always active; others can be disabled."}),e.jsx(a,{items:s,type:"default",size:"default",activeId:"tab2",showLeadingIcon:!0,showTrailingIcon:!0,showBadge:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:l,children:"Without badge"}),e.jsx(a,{items:s,type:"default",size:"default",activeId:"tab2",showLeadingIcon:!0,showTrailingIcon:!0,showBadge:!1})]}),e.jsxs("div",{children:[e.jsx("p",{style:l,children:"Without icons"}),e.jsx(a,{items:s,type:"default",size:"default",activeId:"tab2",showLeadingIcon:!1,showTrailingIcon:!1,showBadge:!0})]}),e.jsxs("div",{children:[e.jsx("p",{style:l,children:"With dropdown indicators"}),e.jsx(a,{items:c,type:"default",size:"default",activeId:"tab1",showLeadingIcon:!0,showTrailingIcon:!0,showBadge:!0})]})]}),parameters:{controls:{disable:!0}}},T={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:l,children:"Default (resting)"}),e.jsx(a,{items:s,type:"default",size:"default",activeId:"tab1"})]}),e.jsxs("div",{children:[e.jsx("p",{style:l,children:"Active tab selected"}),e.jsx(a,{items:s,type:"default",size:"default",activeId:"tab2"})]}),e.jsxs("div",{children:[e.jsx("p",{style:l,children:"Disabled tab present"}),e.jsx(a,{items:s,type:"default",size:"default",activeId:"tab1"})]}),e.jsxs("div",{children:[e.jsx("p",{style:l,children:"Contained — active"}),e.jsx(a,{items:s,type:"contained",size:"default",activeId:"tab2"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{...l,color:"var(--global-color-neutral-gray-200)"},children:"Dark contained — active"}),e.jsx("div",{style:{background:"var(--global-color-neutral-gray-800)",padding:"var(--global-spacing-sizing-16px)",borderRadius:"var(--global-spacing-radius-8px)"},children:e.jsx(a,{items:s,type:"dark-contained",size:"default",activeId:"tab2"})})]})]}),parameters:{controls:{disable:!0}}},z={name:"Full Design Matrix (48 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-48px)",padding:"var(--global-spacing-sizing-24px)"},children:[["default","secondary"].map(i=>e.jsxs("div",{children:[e.jsxs("h3",{style:l,children:["Type: ",i]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:d.map(S=>e.jsxs("div",{children:[e.jsx("p",{style:r,children:S}),e.jsx(a,{items:s,type:i,size:S,activeId:"tab2"})]},S))})]},i)),e.jsxs("div",{children:[e.jsx("h3",{style:l,children:"Type: contained"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:d.map(i=>e.jsxs("div",{children:[e.jsx("p",{style:r,children:i}),e.jsx(a,{items:s,type:"contained",size:i,activeId:"tab2"})]},i))})]}),e.jsxs("div",{style:{background:"var(--global-color-neutral-gray-800)",padding:"var(--global-spacing-sizing-24px)",borderRadius:"var(--global-spacing-radius-8px)"},children:[e.jsx("h3",{style:{...l,color:"var(--global-color-neutral-gray-200)"},children:"Type: dark-contained"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:d.map(i=>e.jsxs("div",{children:[e.jsx("p",{style:{...r,color:"var(--global-color-neutral-gray-400)"},children:i}),e.jsx(a,{items:s,type:"dark-contained",size:i,activeId:"tab2"})]},i))})]}),e.jsxs("div",{children:[e.jsx("h3",{style:l,children:"With dropdown indicator"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(a,{items:c,type:"default",size:"default",activeId:"tab1"}),e.jsx(a,{items:c,type:"secondary",size:"default",activeId:"tab1"}),e.jsx(a,{items:c,type:"contained",size:"default",activeId:"tab1"})]})]})]}),parameters:{controls:{disable:!0}}};var w,k,E;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <TabsDocs />,
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
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var L,A,M;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(M=(A=b.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var B,_,C;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    type: 'default',
    size: 'default',
    activeId: 'tab2'
  }
}`,...(C=(_=g.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var U,F,O;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <p style={labelStyle}>{size}</p>
          <Tabs items={DEFAULT_ITEMS} size={size} type="default" activeId="tab2" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var W,P,R;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Status / Default (Underline Blue)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <p style={labelStyle}>{size}</p>
          <Tabs items={DEFAULT_ITEMS} type="default" size={size} activeId="tab2" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(P=m.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var N,Z,H;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Status / Secondary (Underline Dark)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <p style={labelStyle}>{size}</p>
          <Tabs items={DEFAULT_ITEMS} type="secondary" size={size} activeId="tab2" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(H=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var G,K,V;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Status / Contained',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <p style={labelStyle}>{size}</p>
          <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab2" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(K=y.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};var X,Y,$;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Status / Dark Contained',
  render: () => <div style={{
    background: 'var(--global-color-neutral-gray-800)',
    padding: 'var(--global-spacing-sizing-24px)',
    borderRadius: 'var(--global-spacing-radius-8px)'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-16px)'
    }}>
        {ALL_SIZES.map(size => <div key={size}>
            <p style={{
          ...labelStyle,
          color: 'var(--global-color-neutral-gray-400)'
        }}>{size}</p>
            <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab2" />
          </div>)}
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var q,J,Q;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Status / With Dropdown Indicator',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    padding: 'var(--global-spacing-sizing-16px)'
  }}>
      {(['default', 'secondary', 'contained'] as TabType[]).map(type => <div key={type}>
          <p style={labelStyle}>{type}</p>
          <Tabs items={DROPDOWN_ITEMS} type={type} size="default" activeId="tab1" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,ae,ie;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Status / Disabled Tab',
  args: {
    type: 'default',
    size: 'default',
    activeId: 'tab1'
  }
}`,...(ie=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var te,se,ne;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      <div>
        <p style={sectionStyle}>Anatomy</p>
        <p style={{
        ...labelStyle,
        marginBottom: 'var(--global-spacing-sizing-16px)'
      }}>
          A Tabs strip is composed of individual tab items. Each tab item may include:
          a leading icon, a text label, a trailing icon, and an optional badge/count.
          One tab is always active; others can be disabled.
        </p>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showLeadingIcon showTrailingIcon showBadge />
      </div>
      <div>
        <p style={sectionStyle}>Without badge</p>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showLeadingIcon showTrailingIcon showBadge={false} />
      </div>
      <div>
        <p style={sectionStyle}>Without icons</p>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showLeadingIcon={false} showTrailingIcon={false} showBadge />
      </div>
      <div>
        <p style={sectionStyle}>With dropdown indicators</p>
        <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" showLeadingIcon showTrailingIcon showBadge />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ne=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var le,re,de;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      <div>
        <p style={sectionStyle}>Default (resting)</p>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab1" />
      </div>
      <div>
        <p style={sectionStyle}>Active tab selected</p>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" />
      </div>
      <div>
        <p style={sectionStyle}>Disabled tab present</p>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab1" />
      </div>
      <div>
        <p style={sectionStyle}>Contained — active</p>
        <Tabs items={DEFAULT_ITEMS} type="contained" size="default" activeId="tab2" />
      </div>
      <div>
        <p style={{
        ...sectionStyle,
        color: 'var(--global-color-neutral-gray-200)'
      }}>Dark contained — active</p>
        <div style={{
        background: 'var(--global-color-neutral-gray-800)',
        padding: 'var(--global-spacing-sizing-16px)',
        borderRadius: 'var(--global-spacing-radius-8px)'
      }}>
          <Tabs items={DEFAULT_ITEMS} type="dark-contained" size="default" activeId="tab2" />
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(re=T.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var oe,ce,pe;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Full Design Matrix (48 variants)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-48px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      {/* Underline types */}
      {(['default', 'secondary'] as TabType[]).map(type => <div key={type}>
          <h3 style={sectionStyle}>Type: {type}</h3>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-16px)'
      }}>
            {ALL_SIZES.map(size => <div key={size}>
                <p style={labelStyle}>{size}</p>
                <Tabs items={DEFAULT_ITEMS} type={type} size={size} activeId="tab2" />
              </div>)}
          </div>
        </div>)}

      {/* Contained */}
      <div>
        <h3 style={sectionStyle}>Type: contained</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-16px)'
      }}>
          {ALL_SIZES.map(size => <div key={size}>
              <p style={labelStyle}>{size}</p>
              <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab2" />
            </div>)}
        </div>
      </div>

      {/* Dark contained */}
      <div style={{
      background: 'var(--global-color-neutral-gray-800)',
      padding: 'var(--global-spacing-sizing-24px)',
      borderRadius: 'var(--global-spacing-radius-8px)'
    }}>
        <h3 style={{
        ...sectionStyle,
        color: 'var(--global-color-neutral-gray-200)'
      }}>Type: dark-contained</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-16px)'
      }}>
          {ALL_SIZES.map(size => <div key={size}>
              <p style={{
            ...labelStyle,
            color: 'var(--global-color-neutral-gray-400)'
          }}>{size}</p>
              <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab2" />
            </div>)}
        </div>
      </div>

      {/* Dropdown variants */}
      <div>
        <h3 style={sectionStyle}>With dropdown indicator</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-16px)'
      }}>
          <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" />
          <Tabs items={DROPDOWN_ITEMS} type="secondary" size="default" activeId="tab1" />
          <Tabs items={DROPDOWN_ITEMS} type="contained" size="default" activeId="tab1" />
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pe=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const Me=["Documentation","Playground","Default","Sizes","StatusDefault","StatusSecondary","StatusContained","StatusDarkContained","StatusWithDropdown","StatusDisabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{T as AllInteractiveStates,j as ComponentBreakdown,g as Default,p as Documentation,z as FullDesignMatrix,b as Playground,u as Sizes,y as StatusContained,x as StatusDarkContained,m as StatusDefault,f as StatusDisabled,v as StatusSecondary,h as StatusWithDropdown,Me as __namedExportsOrder,Ae as default};
