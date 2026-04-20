import{j as e}from"./iframe-BD6w5lrE.js";import{T as i}from"./Tabs-BrNFxgZs.js";import{D as a}from"./DocsTemplate-V6oDg52g.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-bAJ0MJKY.js";import"./index-g3XP7It_.js";import"./useTheme-D6JmvL6_.js";import"./memoTheme-BqjHkQZT.js";import"./useEventCallback-DIhCHX5Z.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlot-Dv6-Nk64.js";import"./mergeSlotProps-BQEB4CIG.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BF_H-b2p.js";import"./useSlotProps-BhSqgd-4.js";import"./createSvgIcon-Dhj7AMnp.js";import"./ButtonBase-BqhUw9hj.js";import"./index-gAlz9S_E.js";import"./emotion-react.browser.esm-h0FvV5Ub.js";import"./isFocusVisible-B8k4qzLc.js";const d=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],ue=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7,dropdown:!0},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],n={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},ge={...n,background:"var(--global-color-neutral-gray-800)"},be=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Tabs",subtitle:"Tabs organise related content into selectable sections, allowing users to switch views without leaving the page. Built on the Foundation BuildingBlocks/Tabs primitive."}),e.jsxs(a.Section,{title:"MUI Foundation",children:[e.jsxs(a.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"Tabs"})," and ",e.jsx("strong",{children:"Tab"})," components from"," ",e.jsx("code",{children:"@mui/material"}),". ",e.jsx("code",{children:"MuiTabs"})," provides the accessible tab list container with ",e.jsx("code",{children:'role="tablist"'}),", keyboard navigation (arrow keys), and active-tab tracking. Each individual tab is a ",e.jsx("code",{children:"MuiTab"})," with ",e.jsx("code",{children:'role="tab"'})," and proper"," ",e.jsx("code",{children:"aria-selected"})," / ",e.jsx("code",{children:"aria-controls"})," attributes. MUI's scrollable tabs and indicator behaviour are used as a foundation — the NPX visual layer (underline colour, contained border, dark theme, count badges) is applied entirely via CSS Modules and the"," ",e.jsx("code",{children:"--tab-*"})," token family, overriding MUI's default indicator."]}),e.jsx(a.CodeBlock,{children:`// MUI base imports
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';

// BuildingBlocks/Tabs renders:
<MuiTabs value={activeTab} onChange={handleChange} className={styles.tabs}>
  {items.map(item => (
    <MuiTab key={item.id} value={item.id} label={item.label} className={styles.tab} />
  ))}
</MuiTabs>`})]}),e.jsx(a.Section,{title:"Overview",children:e.jsx(a.BodyText,{children:"The Tabs component renders a horizontal strip of tab items. Each tab item displays a leading icon, a text label, an optional trailing icon, and an optional badge count. Four visual types are available — two underline variants and two contained (bordered-box) variants — all responsive across small, default, and large sizes."})}),e.jsx(a.Section,{title:"Anatomy",children:e.jsx(a.Anatomy,{preview:e.jsx("div",{style:n,children:e.jsx(i,{items:d,type:"default",size:"default",activeId:"tab2"})}),parts:[{id:1,name:"Tab strip",token:"--tab-*",description:"Horizontal flex container holding all tab items."},{id:2,name:"Leading icon",token:"--tab-icon-size",description:"Optional account/person icon shown before the label."},{id:3,name:"Label",token:"--tab-font-size, --tab-font-family",description:"The text that identifies the tab's content section."},{id:4,name:"Trailing icon",token:"--tab-icon-size",description:"Optional arrow-right or chevron-down icon."},{id:5,name:"Badge",token:"--tab-default-badge-bg, --tab-badge-size",description:"Optional rounded count bubble (e.g. 7 unread items)."},{id:6,name:"Underline indicator",token:"--tab-line-width, --tab-line-color-default",description:"Active-state underline for default and secondary types."}]})}),e.jsxs(a.Section,{title:"Types",children:[e.jsxs(a.Subsection,{title:"Default (underline — blue active)",children:[e.jsx(a.BodyText,{children:"Active tab is highlighted with a sky-blue underline indicator. Use for primary navigation."}),e.jsx("div",{style:n,children:e.jsx(i,{items:d,type:"default",size:"default",activeId:"tab2"})})]}),e.jsxs(a.Subsection,{title:"Secondary (underline — dark active)",children:[e.jsx(a.BodyText,{children:"Active tab uses a dark/charcoal underline. Use for secondary or nested navigation."}),e.jsx("div",{style:n,children:e.jsx(i,{items:d,type:"secondary",size:"default",activeId:"tab2"})})]}),e.jsxs(a.Subsection,{title:"Contained (bordered box — light theme)",children:[e.jsx(a.BodyText,{children:"Each tab is a bordered box. The active tab fills with a solid blue background and white text."}),e.jsx("div",{style:n,children:e.jsx(i,{items:d,type:"contained",size:"default",activeId:"tab1"})})]}),e.jsxs(a.Subsection,{title:"Dark Contained (bordered box — dark theme)",children:[e.jsx(a.BodyText,{children:"A contained variant for dark backgrounds. The active tab uses a lighter highlight on dark."}),e.jsx("div",{style:ge,children:e.jsx(i,{items:d,type:"dark-contained",size:"default",activeId:"tab1"})})]})]}),e.jsx(a.Section,{title:"Sizes",children:e.jsx(a.SizeDemo,{rows:[{label:"Small",children:e.jsx("div",{style:n,children:e.jsx(i,{items:d,type:"default",size:"small",activeId:"tab2"})})},{label:"Default",children:e.jsx("div",{style:n,children:e.jsx(i,{items:d,type:"default",size:"default",activeId:"tab2"})})},{label:"Large",children:e.jsx("div",{style:n,children:e.jsx(i,{items:d,type:"default",size:"large",activeId:"tab2"})})}]})}),e.jsxs(a.Section,{title:"States",children:[e.jsxs(a.Subsection,{title:"Default / Active / Disabled",children:[e.jsx(a.BodyText,{children:"Tab item 1 is in default state, item 2 is active, item 4 is disabled."}),e.jsx("div",{style:n,children:e.jsx(i,{items:d,type:"default",size:"default",activeId:"tab2"})})]}),e.jsxs(a.Subsection,{title:"With Dropdown indicator",children:[e.jsx(a.BodyText,{children:"Tabs can display a chevron-down trailing icon to indicate a dropdown menu is available."}),e.jsx("div",{style:n,children:e.jsx(i,{items:ue,type:"default",size:"default",activeId:"tab1"})})]})]}),e.jsxs(a.Section,{title:"Icon & Badge Options",children:[e.jsx(a.Subsection,{title:"With leading icon, trailing icon, and badge (default)",children:e.jsx("div",{style:n,children:e.jsx(i,{items:d,type:"contained",size:"default",activeId:"tab1",showLeadingIcon:!0,showTrailingIcon:!0,showBadge:!0})})}),e.jsx(a.Subsection,{title:"Without badge",children:e.jsx("div",{style:n,children:e.jsx(i,{items:d,type:"contained",size:"default",activeId:"tab1",showBadge:!1})})}),e.jsx(a.Subsection,{title:"Without leading icon",children:e.jsx("div",{style:n,children:e.jsx(i,{items:d,type:"contained",size:"default",activeId:"tab1",showLeadingIcon:!1})})}),e.jsx(a.Subsection,{title:"Without trailing icon",children:e.jsx("div",{style:n,children:e.jsx(i,{items:d,type:"contained",size:"default",activeId:"tab1",showTrailingIcon:!1})})})]}),e.jsx(a.Section,{title:"Design Tokens",children:e.jsx(a.TokenTable,{tokens:[{name:"--tab-font-family",description:"Font family for tab labels (--brand-font-primary)"},{name:"--tab-font-weight",description:"Font weight for tab labels (--global-type-weight-light)"},{name:"--tab-focus-ring-color",description:"Focus outline colour (--global-color-primary-blue-blue-400)"},{name:"--tab-underline-track-color",description:"Colour of the inactive underline track (--global-color-neutral-gray-200)"},{name:"--tab-default-line-active",description:"Active underline colour for default type (--global-color-primary-sky-blue)"},{name:"--tab-secondary-line-active",description:"Active underline colour for secondary type (--global-color-neutral-gray-800)"},{name:"--tab-contained-bg-active",description:"Active background for contained tabs (--global-color-primary-blue-blue-500)"},{name:"--tab-contained-text-active",description:"Active text colour for contained tabs (--global-color-base-white)"},{name:"--tab-dark-bg-default",description:"Dark-contained background (--global-color-neutral-gray-700)"},{name:"--tab-dark-text-default",description:"Dark-contained text colour (--global-color-neutral-gray-200)"},{name:"--tab-default-badge-bg",description:"Default badge background (--global-color-primary-sky-blue-100)"},{name:"--tab-contained-radius",description:"Border radius for contained tabs (--global-spacing-radius-6px)"}]})}),e.jsx(a.Section,{title:"Usage Principles",children:e.jsxs(a.Principles,{children:[e.jsx(a.PrincipleCard,{number:1,title:"One active tab at a time",children:"Only one tab should be active per strip. Use controlled state (activeId) to manage which tab is selected and update it via the onTabChange callback."}),e.jsx(a.PrincipleCard,{number:2,title:"Consistent icon and badge usage",children:"If icons or badges are shown, apply them consistently across all tabs in a strip. Mixing tabs with and without icons creates visual imbalance."}),e.jsx(a.PrincipleCard,{number:3,title:"Choose the right type",children:"Use default/secondary underline tabs for page-level navigation. Use contained tabs when tabs sit inside a card or panel with a visible background."})]})}),e.jsx(a.Section,{title:"Dos and Don'ts",children:e.jsx(a.DosDonts,{doItem:{icon:e.jsx("div",{style:n,children:e.jsx(i,{items:d.slice(0,3),type:"default",size:"default",activeId:"tab1"})}),description:"Use tabs to switch between related views at the same hierarchy level."},dontItem:{icon:e.jsx("div",{style:n,children:e.jsx(i,{items:[{id:"a",label:"Tab label"},{id:"b",label:"Tab label"}],type:"default",size:"default",activeId:"a",showLeadingIcon:!1,showTrailingIcon:!1})}),description:"Don't mix tab types or skip icons inconsistently across a single tab strip."}})}),e.jsx(a.Footer,{})]});be.__docgenInfo={description:"",methods:[],displayName:"TabsDocs"};const l=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],D=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7,dropdown:!0},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],c=["small","default","large"],me=["default","secondary","contained","dark-contained"],s={padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-6px)"},I={...s,background:"var(--global-color-neutral-gray-700)"},o={fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"8px",marginTop:0},r={fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",marginTop:0},Ce={title:"Atoms/Tabs",component:i,parameters:{layout:"padded"},argTypes:{type:{control:"select",options:me},size:{control:"select",options:c},showBadge:{control:"boolean"},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},activeId:{control:"text"}},args:{items:l,type:"default",size:"default",showBadge:!0,showLeadingIcon:!0,showTrailingIcon:!0,activeId:"tab2"}},p={name:"Documentation",render:()=>e.jsx(be,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen",chromatic:{disableSnapshot:!0}}},b={name:"Playground",render:t=>e.jsx("div",{style:t.type==="dark-contained"?I:s,children:e.jsx(i,{...t})})},u={name:"Default",render:t=>e.jsx("div",{style:s,children:e.jsx(i,{...t,type:"default",size:"default",activeId:"tab2"})})},g={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)"},children:c.map(t=>e.jsxs("div",{children:[e.jsx("p",{style:o,children:t}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"default",size:t,activeId:"tab2"})})]},t))}),parameters:{controls:{disable:!0}}},m={name:"Status / Default (Underline Blue)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:c.map(t=>e.jsxs("div",{children:[e.jsx("p",{style:o,children:t}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"default",size:t,activeId:"tab2"})})]},t))}),parameters:{controls:{disable:!0}}},v={name:"Status / Secondary (Underline Dark)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:c.map(t=>e.jsxs("div",{children:[e.jsx("p",{style:o,children:t}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"secondary",size:t,activeId:"tab2"})})]},t))}),parameters:{controls:{disable:!0}}},y={name:"Status / Contained",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:c.map(t=>e.jsxs("div",{children:[e.jsx("p",{style:o,children:t}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"contained",size:t,activeId:"tab1"})})]},t))}),parameters:{controls:{disable:!0}}},x={name:"Status / Dark Contained",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:c.map(t=>e.jsxs("div",{children:[e.jsx("p",{style:o,children:t}),e.jsx("div",{style:I,children:e.jsx(i,{items:l,type:"dark-contained",size:t,activeId:"tab1"})})]},t))}),parameters:{controls:{disable:!0}}},h={name:"Status / With Dropdown Indicator",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:["default","contained"].map(t=>e.jsxs("div",{children:[e.jsx("p",{style:o,children:t}),e.jsx("div",{style:s,children:e.jsx(i,{items:D,type:t,size:"default",activeId:"tab1"})})]},t))}),parameters:{controls:{disable:!0}}},f={name:"Status / Disabled Tab",render:()=>e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"default",size:"default",activeId:"tab1"})}),parameters:{controls:{disable:!0}}},j={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:r,children:"Full anatomy — all sub-elements"}),e.jsx("p",{style:{...o,marginBottom:"var(--global-spacing-sizing-12px)"},children:"Each tab item: leading icon + label + trailing icon + badge/count. Disabled tab on right."}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"default",size:"default",activeId:"tab2",showLeadingIcon:!0,showTrailingIcon:!0,showBadge:!0})})]}),e.jsxs("div",{children:[e.jsx("p",{style:r,children:"Without badge"}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"default",size:"default",activeId:"tab2",showBadge:!1})})]}),e.jsxs("div",{children:[e.jsx("p",{style:r,children:"Without icons"}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"default",size:"default",activeId:"tab2",showLeadingIcon:!1,showTrailingIcon:!1})})]}),e.jsxs("div",{children:[e.jsx("p",{style:r,children:"With dropdown indicators"}),e.jsx("div",{style:s,children:e.jsx(i,{items:D,type:"default",size:"default",activeId:"tab1"})})]})]}),parameters:{controls:{disable:!0}}},S={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:r,children:"Resting (tab 1 active)"}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"default",size:"default",activeId:"tab1"})})]}),e.jsxs("div",{children:[e.jsx("p",{style:r,children:"Active tab 2 selected"}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"default",size:"default",activeId:"tab2"})})]}),e.jsxs("div",{children:[e.jsx("p",{style:r,children:"Tab 4 disabled"}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"default",size:"default",activeId:"tab1"})})]}),e.jsxs("div",{children:[e.jsx("p",{style:r,children:"Contained — active"}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"contained",size:"default",activeId:"tab2"})})]}),e.jsxs("div",{children:[e.jsx("p",{style:r,children:"Dark contained — active"}),e.jsx("div",{style:I,children:e.jsx(i,{items:l,type:"dark-contained",size:"default",activeId:"tab2"})})]})]}),parameters:{controls:{disable:!0}}},T={name:"Full Design Matrix (48 variants)",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)"},children:[["default","secondary"].map(t=>e.jsxs("div",{children:[e.jsx("p",{style:r,children:t}),c.map(z=>e.jsxs("div",{style:{marginBottom:"var(--global-spacing-sizing-12px)"},children:[e.jsx("p",{style:o,children:z}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:t,size:z,activeId:"tab2"})})]},z))]},t)),e.jsxs("div",{children:[e.jsx("p",{style:r,children:"contained"}),c.map(t=>e.jsxs("div",{style:{marginBottom:"var(--global-spacing-sizing-12px)"},children:[e.jsx("p",{style:o,children:t}),e.jsx("div",{style:s,children:e.jsx(i,{items:l,type:"contained",size:t,activeId:"tab1"})})]},t))]}),e.jsxs("div",{children:[e.jsx("p",{style:r,children:"dark-contained"}),c.map(t=>e.jsxs("div",{style:{marginBottom:"var(--global-spacing-sizing-12px)"},children:[e.jsx("p",{style:{...o,color:"var(--global-color-neutral-gray-400)"},children:t}),e.jsx("div",{style:I,children:e.jsx(i,{items:l,type:"dark-contained",size:t,activeId:"tab1"})})]},t))]}),e.jsxs("div",{children:[e.jsx("p",{style:r,children:"With dropdown indicator"}),["default","secondary","contained"].map(t=>e.jsxs("div",{style:{marginBottom:"var(--global-spacing-sizing-12px)"},children:[e.jsx("p",{style:o,children:t}),e.jsx("div",{style:s,children:e.jsx(i,{items:D,type:t,size:"default",activeId:"tab1"})})]},t))]})]})};var k,w,B;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <TabsDocs />,
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
}`,...(B=(w=p.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var E,L,A;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={args.type === 'dark-contained' ? darkBg : lightBg}>
      <Tabs {...args} />
    </div>
}`,...(A=(L=b.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var M,_,U;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Default',
  render: args => <div style={lightBg}>
      <Tabs {...args} type="default" size="default" activeId="tab2" />
    </div>
}`,...(U=(_=u.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var F,C,W;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-24px)'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <p style={labelStyle}>{size}</p>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="default" size={size} activeId="tab2" />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(C=g.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var O,P,R;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Status / Default (Underline Blue)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <p style={labelStyle}>{size}</p>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="default" size={size} activeId="tab2" />
          </div>
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
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <p style={labelStyle}>{size}</p>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="secondary" size={size} activeId="tab2" />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(H=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var X,Y,$;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Status / Contained',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <p style={labelStyle}>{size}</p>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab1" />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var q,G,J;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Status / Dark Contained',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <p style={labelStyle}>{size}</p>
          <div style={darkBg}>
            <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab1" />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,V;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Status / With Dropdown Indicator',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      {(['default', 'contained'] as TabType[]).map(type => <div key={type}>
          <p style={labelStyle}>{type}</p>
          <div style={lightBg}>
            <Tabs items={DROPDOWN_ITEMS} type={type} size="default" activeId="tab1" />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var ee,te,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Status / Disabled Tab',
  render: () => <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab1" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ie,se,le;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      <div>
        <p style={sectionStyle}>Full anatomy — all sub-elements</p>
        <p style={{
        ...labelStyle,
        marginBottom: 'var(--global-spacing-sizing-12px)'
      }}>
          Each tab item: leading icon + label + trailing icon + badge/count. Disabled tab on right.
        </p>
        <div style={lightBg}>
          <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showLeadingIcon showTrailingIcon showBadge />
        </div>
      </div>
      <div>
        <p style={sectionStyle}>Without badge</p>
        <div style={lightBg}>
          <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showBadge={false} />
        </div>
      </div>
      <div>
        <p style={sectionStyle}>Without icons</p>
        <div style={lightBg}>
          <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showLeadingIcon={false} showTrailingIcon={false} />
        </div>
      </div>
      <div>
        <p style={sectionStyle}>With dropdown indicators</p>
        <div style={lightBg}>
          <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" />
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(se=j.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ne,de,re;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-24px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      <div>
        <p style={sectionStyle}>Resting (tab 1 active)</p>
        <div style={lightBg}><Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab1" /></div>
      </div>
      <div>
        <p style={sectionStyle}>Active tab 2 selected</p>
        <div style={lightBg}><Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" /></div>
      </div>
      <div>
        <p style={sectionStyle}>Tab 4 disabled</p>
        <div style={lightBg}><Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab1" /></div>
      </div>
      <div>
        <p style={sectionStyle}>Contained — active</p>
        <div style={lightBg}><Tabs items={DEFAULT_ITEMS} type="contained" size="default" activeId="tab2" /></div>
      </div>
      <div>
        <p style={sectionStyle}>Dark contained — active</p>
        <div style={darkBg}><Tabs items={DEFAULT_ITEMS} type="dark-contained" size="default" activeId="tab2" /></div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(re=(de=S.parameters)==null?void 0:de.docs)==null?void 0:re.source}}};var oe,ce,pe;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Full Design Matrix (48 variants)',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)'
  }}>
      {(['default', 'secondary'] as TabType[]).map(type => <div key={type}>
          <p style={sectionStyle}>{type}</p>
          {ALL_SIZES.map(size => <div key={size} style={{
        marginBottom: 'var(--global-spacing-sizing-12px)'
      }}>
              <p style={labelStyle}>{size}</p>
              <div style={lightBg}>
                <Tabs items={DEFAULT_ITEMS} type={type} size={size} activeId="tab2" />
              </div>
            </div>)}
        </div>)}

      <div>
        <p style={sectionStyle}>contained</p>
        {ALL_SIZES.map(size => <div key={size} style={{
        marginBottom: 'var(--global-spacing-sizing-12px)'
      }}>
            <p style={labelStyle}>{size}</p>
            <div style={lightBg}>
              <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab1" />
            </div>
          </div>)}
      </div>

      <div>
        <p style={sectionStyle}>dark-contained</p>
        {ALL_SIZES.map(size => <div key={size} style={{
        marginBottom: 'var(--global-spacing-sizing-12px)'
      }}>
            <p style={{
          ...labelStyle,
          color: 'var(--global-color-neutral-gray-400)'
        }}>{size}</p>
            <div style={darkBg}>
              <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab1" />
            </div>
          </div>)}
      </div>

      <div>
        <p style={sectionStyle}>With dropdown indicator</p>
        {(['default', 'secondary', 'contained'] as TabType[]).map(type => <div key={type} style={{
        marginBottom: 'var(--global-spacing-sizing-12px)'
      }}>
            <p style={labelStyle}>{type}</p>
            <div style={lightBg}>
              <Tabs items={DROPDOWN_ITEMS} type={type} size="default" activeId="tab1" />
            </div>
          </div>)}
      </div>
    </div>
}`,...(pe=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const We=["Documentation","Playground","Default","Sizes","StatusDefault","StatusSecondary","StatusContained","StatusDarkContained","StatusWithDropdown","StatusDisabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{S as AllInteractiveStates,j as ComponentBreakdown,u as Default,p as Documentation,T as FullDesignMatrix,b as Playground,g as Sizes,y as StatusContained,x as StatusDarkContained,m as StatusDefault,f as StatusDisabled,v as StatusSecondary,h as StatusWithDropdown,We as __namedExportsOrder,Ce as default};
