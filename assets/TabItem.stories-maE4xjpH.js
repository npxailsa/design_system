import{r as ye,j as e,R as ze}from"./iframe-Bp18Mcq8.js";import{D as t}from"./DocsTemplate-CQNjwUpN.js";import"./preload-helper-Dp1pzeXC.js";const n={"tab-item":"_tab-item_1m71a_16","state-disabled":"_state-disabled_1m71a_45","tab-item-label-row":"_tab-item-label-row_1m71a_51","tab-item-icon":"_tab-item-icon_1m71a_61","tab-item-text":"_tab-item-text_1m71a_71","tab-item-badge":"_tab-item-badge_1m71a_82","tab-item-spinner":"_tab-item-spinner_1m71a_100","tab-item-spin":"_tab-item-spin_1m71a_100","size-small":"_size-small_1m71a_113","size-default":"_size-default_1m71a_126","size-large":"_size-large_1m71a_139","variant-inactive":"_variant-inactive_1m71a_156","state-hover":"_state-hover_1m71a_164","variant-active":"_variant-active_1m71a_175","state-loading":"_state-loading_1m71a_200"},Ie=({className:s})=>e.jsx("svg",{className:s,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M7.99935 2.66663C8.70659 2.66663 9.38487 2.94758 9.88497 3.44767C10.3851 3.94777 10.666 4.62605 10.666 5.33329C10.666 6.04054 10.3851 6.71881 9.88497 7.21891C9.38487 7.71901 8.70659 7.99996 7.99935 7.99996C7.29211 7.99996 6.61383 7.71901 6.11373 7.21891C5.61363 6.71881 5.33268 6.04054 5.33268 5.33329C5.33268 4.62605 5.61363 3.94777 6.11373 3.44767C6.61383 2.94758 7.29211 2.66663 7.99935 2.66663ZM7.99935 9.33329C10.946 9.33329 13.3327 10.5266 13.3327 12V13.3333H2.66602V12C2.66602 10.5266 5.05268 9.33329 7.99935 9.33329Z",fill:"currentColor"})}),Se=({className:s})=>e.jsx("svg",{className:s,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M2.66602 7.3333V8.66664H10.666L6.99935 12.3333L7.94602 13.28L13.226 7.99997L7.94602 2.71997L6.99935 3.66664L10.666 7.3333H2.66602Z",fill:"currentColor"})}),We=({className:s})=>e.jsx("svg",{className:s,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M4 6L8 10L12 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),De=({className:s})=>e.jsx("svg",{className:`${s??""} ${n["tab-item-spinner"]}`,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:e.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeDasharray:"28 10"})}),a=({label:s,size:o="default",active:l=!1,disabled:i=!1,loading:r=!1,showLeadingIcon:xe=!0,showTrailingIcon:fe=!0,showBadge:he=!0,count:I,dropdown:Te=!1,onClick:y,className:S=""})=>{const[ve,W]=ye.useState(!1),we=[n["tab-item"],n[`size-${o}`],l?n["variant-active"]:n["variant-inactive"],i?n["state-disabled"]:"",r?n["state-loading"]:"",ve&&!i&&!r&&!l?n["state-hover"]:""].filter(Boolean).join(" ")+(S?` ${S}`:""),je=Te?We:Se;return e.jsxs("button",{type:"button",role:"tab","aria-selected":l,"aria-disabled":i,disabled:i,className:we,onClick:()=>!i&&!r&&(y==null?void 0:y()),onMouseEnter:()=>W(!0),onMouseLeave:()=>W(!1),children:[e.jsxs("div",{className:n["tab-item-label-row"],children:[r?e.jsx(De,{className:n["tab-item-icon"]}):xe&&e.jsx(Ie,{className:n["tab-item-icon"]}),e.jsx("span",{className:n["tab-item-text"],children:s}),!r&&fe&&e.jsx(je,{className:n["tab-item-icon"]})]}),he&&I!==void 0&&e.jsx("span",{className:n["tab-item-badge"],children:I})]})};a.__docgenInfo={description:`TabItem — A single pill-style tab button atom.

Used as the atom building block for tab navigation. Can appear in
an active (filled blue) or inactive (outlined) state. Supports
optional leading icon, trailing icon, and badge count.

Location: Atoms / Tabs`,methods:[],displayName:"TabItem",props:{label:{required:!0,tsType:{name:"string"},description:"Display label for the tab"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Visual size scale",defaultValue:{value:"'default'",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"Whether this tab is currently active/selected",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the tab is disabled",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Whether the tab is in a loading state",defaultValue:{value:"false",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon (person/account)",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the trailing icon (arrow-right or chevron-down)",defaultValue:{value:"true",computed:!1}},showBadge:{required:!1,tsType:{name:"boolean"},description:"Show a numeric badge",defaultValue:{value:"true",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"Badge count number"},dropdown:{required:!1,tsType:{name:"boolean"},description:"Use chevron-down instead of arrow-right for trailing icon",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class",defaultValue:{value:"''",computed:!1}}}};const z=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Tab Item",subtitle:"A single pill-style tab button atom used to build tab navigation strips. Tabs allow users to switch between related content sections or views."}),e.jsx(t.Section,{title:"Overview",children:e.jsx(t.BodyText,{children:"The TabItem is the atomic building block of tab navigation. Each item can appear in two visual states — inactive (outlined) or active (solid filled) — and supports optional leading icon, trailing icon, and a numeric badge for counts or notifications. Multiple TabItems compose into a full tab strip."})}),e.jsx(t.Section,{title:"Anatomy",children:e.jsx(t.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{label:"Tab label",count:7,active:!0}),e.jsx(a,{label:"Tab label",count:7}),e.jsx(a,{label:"Tab label",count:7,disabled:!0})]}),parts:[{id:1,name:"Leading Icon",token:"--tab-item-icon-size",description:"Optional icon displayed before the label (account/person icon by default)."},{id:2,name:"Label",token:"--tab-item-font-size, --tab-item-font-family",description:"The text content that identifies the tab destination or category."},{id:3,name:"Trailing Icon",token:"--tab-item-icon-size",description:"Optional arrow-right or chevron-down icon displayed after the label."},{id:4,name:"Badge",token:"--tab-item-badge-bg, --tab-item-badge-size",description:"Optional rounded pill showing a numeric count (e.g. notification count)."}]})}),e.jsx(t.Section,{title:"Sizes",children:e.jsx(t.SizeDemo,{rows:[{label:"Small",children:e.jsx(a,{label:"Tab label",size:"small",count:7})},{label:"Default",children:e.jsx(a,{label:"Tab label",size:"default",count:7})},{label:"Large",children:e.jsx(a,{label:"Tab label",size:"large",count:7})}]})}),e.jsxs(t.Section,{title:"States",children:[e.jsxs(t.Subsection,{title:"Inactive (Default)",children:[e.jsx(t.BodyText,{children:"The default state. The tab is outlined with a light blue border and background, indicating it is not currently selected."}),e.jsxs("div",{style:{display:"flex",gap:12,padding:"16px 0",flexWrap:"wrap"},children:[e.jsx(a,{label:"Tab label",count:7}),e.jsx(a,{label:"Tab label",count:7,size:"small"}),e.jsx(a,{label:"Tab label",count:7,size:"large"})]})]}),e.jsxs(t.Subsection,{title:"Active (Selected)",children:[e.jsx(t.BodyText,{children:"The active/selected state. The tab is filled with a solid blue background and white text, indicating it is the currently selected tab."}),e.jsxs("div",{style:{display:"flex",gap:12,padding:"16px 0",flexWrap:"wrap"},children:[e.jsx(a,{label:"Tab label",count:7,active:!0}),e.jsx(a,{label:"Tab label",count:7,size:"small",active:!0}),e.jsx(a,{label:"Tab label",count:7,size:"large",active:!0})]})]}),e.jsxs(t.Subsection,{title:"Disabled",children:[e.jsx(t.BodyText,{children:"The tab is not interactive and appears greyed out."}),e.jsxs("div",{style:{display:"flex",gap:12,padding:"16px 0",flexWrap:"wrap"},children:[e.jsx(a,{label:"Tab label",count:7,disabled:!0}),e.jsx(a,{label:"Tab label",count:7,size:"small",disabled:!0}),e.jsx(a,{label:"Tab label",count:7,size:"large",disabled:!0})]})]}),e.jsxs(t.Subsection,{title:"Loading",children:[e.jsx(t.BodyText,{children:"When the tab content is loading, a spinner replaces the leading icon."}),e.jsxs("div",{style:{display:"flex",gap:12,padding:"16px 0",flexWrap:"wrap"},children:[e.jsx(a,{label:"Tab label",loading:!0}),e.jsx(a,{label:"Tab label",size:"small",loading:!0}),e.jsx(a,{label:"Tab label",size:"large",loading:!0})]})]})]}),e.jsxs(t.Section,{title:"Icon Options",children:[e.jsx(t.Subsection,{title:"With Icons (Default)",children:e.jsx("div",{style:{display:"flex",gap:12,padding:"16px 0"},children:e.jsx(a,{label:"Tab label",count:7,showLeadingIcon:!0,showTrailingIcon:!0})})}),e.jsx(t.Subsection,{title:"Without Leading Icon",children:e.jsx("div",{style:{display:"flex",gap:12,padding:"16px 0"},children:e.jsx(a,{label:"Tab label",count:7,showLeadingIcon:!1})})}),e.jsx(t.Subsection,{title:"Without Trailing Icon",children:e.jsx("div",{style:{display:"flex",gap:12,padding:"16px 0"},children:e.jsx(a,{label:"Tab label",count:7,showTrailingIcon:!1})})}),e.jsx(t.Subsection,{title:"With Dropdown (Chevron)",children:e.jsx("div",{style:{display:"flex",gap:12,padding:"16px 0"},children:e.jsx(a,{label:"Tab label",count:7,dropdown:!0})})}),e.jsx(t.Subsection,{title:"Without Badge",children:e.jsx("div",{style:{display:"flex",gap:12,padding:"16px 0"},children:e.jsx(a,{label:"Tab label",showBadge:!1})})})]}),e.jsx(t.Section,{title:"Design Tokens",children:e.jsx(t.TokenTable,{tokens:[{name:"--tab-item-inactive-bg",description:"Background for inactive state (--global-color-primary-blue-blue-50)"},{name:"--tab-item-inactive-border",description:"Border for inactive state (1px solid --global-color-primary-blue-blue-300)"},{name:"--tab-item-inactive-text",description:"Text/icon color for inactive state (--global-color-secondary-blue-gray)"},{name:"--tab-item-hover-bg",description:"Background on hover (--global-color-primary-blue-blue-100)"},{name:"--tab-item-hover-shadow",description:"Box-shadow on hover (2px 2px 0 0 --global-color-primary-blue-blue-400)"},{name:"--tab-item-hover-text",description:"Text color on hover (--global-color-base-black)"},{name:"--tab-item-active-bg",description:"Background for active state (--global-color-primary-blue-blue-400)"},{name:"--tab-item-active-text",description:"Text/icon color for active state (--global-color-base-white)"},{name:"--tab-item-disabled-bg",description:"Background for disabled state (--global-color-neutral-gray-50)"},{name:"--tab-item-disabled-text",description:"Text/icon color for disabled state (--global-color-neutral-gray-300)"},{name:"--tab-item-border-radius",description:"Border radius of the pill button (--global-spacing-radius-4px)"},{name:"--tab-item-focus-ring-color",description:"Focus outline color (--global-color-primary-blue-blue-400)"},{name:"--tab-item-badge-bg",description:"Resolved badge background (per state)"},{name:"--tab-item-badge-color",description:"Resolved badge text color (per state)"}]})}),e.jsx(t.Section,{title:"Usage Principles",children:e.jsxs(t.Principles,{children:[e.jsx(t.PrincipleCard,{number:1,title:"One active tab at a time",children:"Only one tab should be active at a time within a given tab group. The active tab should clearly communicate the current view to the user."}),e.jsx(t.PrincipleCard,{number:2,title:"Consistent icon usage",children:"If icons are used in a tab group, all tabs in that group should have icons for visual consistency. Avoid mixing tabs with and without icons."}),e.jsx(t.PrincipleCard,{number:3,title:"Meaningful badge counts",children:"Only show badge counts when the count is actionable or relevant to the user's task. Avoid using badges purely for decoration."})]})}),e.jsxs(t.Section,{title:"Dos and Don'ts",children:[e.jsx(t.DosDonts,{doItem:{icon:e.jsx(a,{label:"Overview",count:5,active:!0}),description:"Use tabs to switch between related content sections at the same level of hierarchy."},dontItem:{icon:e.jsx(a,{label:"Go to Settings page",showLeadingIcon:!1}),description:"Don't use tabs for navigation that changes the URL or takes users to a different page — use links instead."}}),e.jsx(t.DosDonts,{doItem:{icon:e.jsx(a,{label:"Details",count:3}),description:"Keep tab labels short and descriptive (1–3 words) so they scan quickly."},dontItem:{icon:e.jsx(a,{label:"All the detailed information in this section",showTrailingIcon:!1,showBadge:!1}),description:"Don't use long sentences or full paragraphs as tab labels."}})]}),e.jsx(t.Footer,{})]});z.__docgenInfo={description:"Documentation page for the Atoms / Tabs > TabItem component.",methods:[],displayName:"TabItemDocs"};const ke={title:"Atoms/Tabs",component:a,parameters:{docs:{page:()=>e.jsx(z,{})},layout:"padded"},argTypes:{size:{control:"select",options:["small","default","large"]},label:{control:"text"},count:{control:"number"},active:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},showBadge:{control:"boolean"},dropdown:{control:"boolean"}},args:{label:"Tab label",size:"default",count:7,active:!1,disabled:!1,loading:!1,showLeadingIcon:!0,showTrailingIcon:!0,showBadge:!0,dropdown:!1}},d={name:"Documentation",parameters:{docs:{page:()=>e.jsx(z,{})}}},c={name:"Playground",args:{label:"Tab label",size:"default",count:7},render:s=>e.jsx(a,{...s})},b={name:"Inactive",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Tab label",count:7,size:"small"}),e.jsx(a,{label:"Tab label",count:7,size:"default"}),e.jsx(a,{label:"Tab label",count:7,size:"large"})]})},u={name:"Active",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Tab label",count:7,size:"small",active:!0}),e.jsx(a,{label:"Tab label",count:7,size:"default",active:!0}),e.jsx(a,{label:"Tab label",count:7,size:"large",active:!0})]})},p={name:"Disabled",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Tab label",count:7,size:"small",disabled:!0}),e.jsx(a,{label:"Tab label",count:7,size:"default",disabled:!0}),e.jsx(a,{label:"Tab label",count:7,size:"large",disabled:!0})]})},m={name:"Loading",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Tab label",size:"small",loading:!0}),e.jsx(a,{label:"Tab label",size:"default",loading:!0}),e.jsx(a,{label:"Tab label",size:"large",loading:!0})]})},g={name:"Size / Small",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Tab label",count:7,size:"small"}),e.jsx(a,{label:"Tab label",count:7,size:"small",active:!0}),e.jsx(a,{label:"Tab label",count:7,size:"small",disabled:!0})]})},x={name:"Size / Default",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Tab label",count:7,size:"default"}),e.jsx(a,{label:"Tab label",count:7,size:"default",active:!0}),e.jsx(a,{label:"Tab label",count:7,size:"default",disabled:!0})]})},f={name:"Size / Large",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Tab label",count:7,size:"large"}),e.jsx(a,{label:"Tab label",count:7,size:"large",active:!0}),e.jsx(a,{label:"Tab label",count:7,size:"large",disabled:!0})]})},h={name:"With Dropdown Icon",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Tab label",count:7,size:"small",dropdown:!0}),e.jsx(a,{label:"Tab label",count:7,size:"default",dropdown:!0}),e.jsx(a,{label:"Tab label",count:7,size:"large",dropdown:!0})]})},T={name:"Without Badge",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Tab label",size:"small",showBadge:!1}),e.jsx(a,{label:"Tab label",size:"default",showBadge:!1}),e.jsx(a,{label:"Tab label",size:"large",showBadge:!1})]})},v={name:"Without Icons",render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Tab label",count:7,size:"small",showLeadingIcon:!1,showTrailingIcon:!1}),e.jsx(a,{label:"Tab label",count:7,size:"default",showLeadingIcon:!1,showTrailingIcon:!1}),e.jsx(a,{label:"Tab label",count:7,size:"large",showLeadingIcon:!1,showTrailingIcon:!1})]})},w={name:"Full Design Matrix",parameters:{layout:"padded"},render:()=>{const s=["small","default","large"],o=({label:l,children:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em"},children:l}),e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:i})]});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(o,{label:"Inactive — all sizes",children:s.map(l=>e.jsx(a,{label:"Tab label",count:7,size:l},l))}),e.jsx(o,{label:"Inactive — with badge dark",children:s.map(l=>e.jsx(a,{label:"Tab label",count:7,size:l,showBadge:!0},l))}),e.jsx(o,{label:"Active — all sizes",children:s.map(l=>e.jsx(a,{label:"Tab label",count:7,size:l,active:!0},l))}),e.jsx(o,{label:"Disabled — all sizes",children:s.map(l=>e.jsx(a,{label:"Tab label",count:7,size:l,disabled:!0},l))}),e.jsx(o,{label:"Loading — all sizes",children:s.map(l=>e.jsx(a,{label:"Tab label",size:l,loading:!0},l))}),e.jsx(o,{label:"Dropdown / Small",children:s.map(l=>e.jsx(a,{label:"Tab label",count:7,size:l,dropdown:!0},l))}),e.jsx(o,{label:"Dropdown Active — all sizes",children:s.map(l=>e.jsx(a,{label:"Tab label",count:7,size:l,dropdown:!0,active:!0},l))}),e.jsx(o,{label:"Without icons — all sizes",children:s.map(l=>e.jsx(a,{label:"Tab label",count:7,size:l,showLeadingIcon:!1,showTrailingIcon:!1},l))}),e.jsx(o,{label:"Without badge — all sizes",children:s.map(l=>e.jsx(a,{label:"Tab label",size:l,showBadge:!1},l))})]})}},j={name:"As Tab Strip",render:()=>{const[s,o]=ze.useState("overview"),l=[{id:"overview",label:"Overview",count:7},{id:"details",label:"Details",count:3},{id:"history",label:"History",count:12},{id:"settings",label:"Settings"}];return e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:l.map(i=>e.jsx(a,{label:i.label,count:i.count,showBadge:i.count!==void 0,active:s===i.id,onClick:()=>o(i.id)},i.id))})}};var D,_,L;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Documentation',
  parameters: {
    docs: {
      page: () => <TabItemDocs />
    }
  }
}`,...(L=(_=d.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var B,k,R;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    label: 'Tab label',
    size: 'default',
    count: 7
  },
  render: args => <TabItem {...args} />
}`,...(R=(k=c.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var A,C,q;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Inactive',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <TabItem label="Tab label" count={7} size="small" />
      <TabItem label="Tab label" count={7} size="default" />
      <TabItem label="Tab label" count={7} size="large" />
    </div>
}`,...(q=(C=b.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var V,M,O;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Active',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <TabItem label="Tab label" count={7} size="small" active />
      <TabItem label="Tab label" count={7} size="default" active />
      <TabItem label="Tab label" count={7} size="large" active />
    </div>
}`,...(O=(M=u.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var N,H,P;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <TabItem label="Tab label" count={7} size="small" disabled />
      <TabItem label="Tab label" count={7} size="default" disabled />
      <TabItem label="Tab label" count={7} size="large" disabled />
    </div>
}`,...(P=(H=p.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var E,F,U;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Loading',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <TabItem label="Tab label" size="small" loading />
      <TabItem label="Tab label" size="default" loading />
      <TabItem label="Tab label" size="large" loading />
    </div>
}`,...(U=(F=m.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var $,Z,G;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Size / Small',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <TabItem label="Tab label" count={7} size="small" />
      <TabItem label="Tab label" count={7} size="small" active />
      <TabItem label="Tab label" count={7} size="small" disabled />
    </div>
}`,...(G=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var K,J,Q;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Size / Default',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <TabItem label="Tab label" count={7} size="default" />
      <TabItem label="Tab label" count={7} size="default" active />
      <TabItem label="Tab label" count={7} size="default" disabled />
    </div>
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Size / Large',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <TabItem label="Tab label" count={7} size="large" />
      <TabItem label="Tab label" count={7} size="large" active />
      <TabItem label="Tab label" count={7} size="large" disabled />
    </div>
}`,...(ee=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,le,te;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With Dropdown Icon',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <TabItem label="Tab label" count={7} size="small" dropdown />
      <TabItem label="Tab label" count={7} size="default" dropdown />
      <TabItem label="Tab label" count={7} size="large" dropdown />
    </div>
}`,...(te=(le=h.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var se,ie,ne;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Without Badge',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <TabItem label="Tab label" size="small" showBadge={false} />
      <TabItem label="Tab label" size="default" showBadge={false} />
      <TabItem label="Tab label" size="large" showBadge={false} />
    </div>
}`,...(ne=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var oe,re,de;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Without Icons',
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <TabItem label="Tab label" count={7} size="small" showLeadingIcon={false} showTrailingIcon={false} />
      <TabItem label="Tab label" count={7} size="default" showLeadingIcon={false} showTrailingIcon={false} />
      <TabItem label="Tab label" count={7} size="large" showLeadingIcon={false} showTrailingIcon={false} />
    </div>
}`,...(de=(re=v.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var ce,be,ue;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const sizes = ['small', 'default', 'large'] as const;
    const Row = ({
      label,
      children
    }: {
      label: string;
      children: React.ReactNode;
    }) => <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 24
    }}>
        <div style={{
        fontSize: 11,
        fontWeight: 600,
        color: '#61607C',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
          {label}
        </div>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
          {children}
        </div>
      </div>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        {/* Horizontal strip — default size, all states */}
        <Row label="Inactive — all sizes">
          {sizes.map(s => <TabItem key={s} label="Tab label" count={7} size={s} />)}
        </Row>

        <Row label="Inactive — with badge dark">
          {sizes.map(s => <TabItem key={s} label="Tab label" count={7} size={s} showBadge />)}
        </Row>

        <Row label="Active — all sizes">
          {sizes.map(s => <TabItem key={s} label="Tab label" count={7} size={s} active />)}
        </Row>

        <Row label="Disabled — all sizes">
          {sizes.map(s => <TabItem key={s} label="Tab label" count={7} size={s} disabled />)}
        </Row>

        <Row label="Loading — all sizes">
          {sizes.map(s => <TabItem key={s} label="Tab label" size={s} loading />)}
        </Row>

        <Row label="Dropdown / Small">
          {sizes.map(s => <TabItem key={s} label="Tab label" count={7} size={s} dropdown />)}
        </Row>

        <Row label="Dropdown Active — all sizes">
          {sizes.map(s => <TabItem key={s} label="Tab label" count={7} size={s} dropdown active />)}
        </Row>

        <Row label="Without icons — all sizes">
          {sizes.map(s => <TabItem key={s} label="Tab label" count={7} size={s} showLeadingIcon={false} showTrailingIcon={false} />)}
        </Row>

        <Row label="Without badge — all sizes">
          {sizes.map(s => <TabItem key={s} label="Tab label" size={s} showBadge={false} />)}
        </Row>
      </div>;
  }
}`,...(ue=(be=w.parameters)==null?void 0:be.docs)==null?void 0:ue.source}}};var pe,me,ge;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'As Tab Strip',
  render: () => {
    const [active, setActive] = React.useState('overview');
    const tabs = [{
      id: 'overview',
      label: 'Overview',
      count: 7
    }, {
      id: 'details',
      label: 'Details',
      count: 3
    }, {
      id: 'history',
      label: 'History',
      count: 12
    }, {
      id: 'settings',
      label: 'Settings'
    }];
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        {tabs.map(tab => <TabItem key={tab.id} label={tab.label} count={tab.count} showBadge={tab.count !== undefined} active={active === tab.id} onClick={() => setActive(tab.id)} />)}
      </div>;
  }
}`,...(ge=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};const Re=["Documentation","Playground","Inactive","Active","Disabled","Loading","SizeSmall","SizeDefault","SizeLarge","WithDropdown","WithoutBadge","WithoutIcons","FullMatrix","AsTabStrip"];export{u as Active,j as AsTabStrip,p as Disabled,d as Documentation,w as FullMatrix,b as Inactive,m as Loading,c as Playground,x as SizeDefault,f as SizeLarge,g as SizeSmall,h as WithDropdown,T as WithoutBadge,v as WithoutIcons,Re as __namedExportsOrder,ke as default};
