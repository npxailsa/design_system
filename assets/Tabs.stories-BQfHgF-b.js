import{j as e}from"./iframe-Cqdqh0qK.js";import{T as a}from"./Tabs-CpMUltU9.js";import{D as t}from"./DocsTemplate-Cz6tFo94.js";import"./preload-helper-Dp1pzeXC.js";const l=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],Ge=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7,dropdown:!0},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],r={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},Je={...r,background:"var(--global-color-neutral-gray-800)"},Ye=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Tabs",subtitle:"Tabs organise related content into selectable sections, allowing users to switch views without leaving the page. Built on the Foundation BuildingBlocks/Tabs primitive."}),e.jsx(t.Section,{title:"Overview",children:e.jsx(t.BodyText,{children:"The Tabs component renders a horizontal strip of tab items. Each tab item displays a leading icon, a text label, an optional trailing icon, and an optional badge count. Four visual types are available — two underline variants and two contained (bordered-box) variants — all responsive across small, default, and large sizes."})}),e.jsx(t.Section,{title:"Anatomy",children:e.jsx(t.Anatomy,{preview:e.jsx("div",{style:r,children:e.jsx(a,{items:l,type:"default",size:"default",activeId:"tab2"})}),parts:[{id:1,name:"Tab strip",token:"--tab-*",description:"Horizontal flex container holding all tab items."},{id:2,name:"Leading icon",token:"--tab-icon-size",description:"Optional account/person icon shown before the label."},{id:3,name:"Label",token:"--tab-font-size, --tab-font-family",description:"The text that identifies the tab's content section."},{id:4,name:"Trailing icon",token:"--tab-icon-size",description:"Optional arrow-right or chevron-down icon."},{id:5,name:"Badge",token:"--tab-default-badge-bg, --tab-badge-size",description:"Optional rounded count bubble (e.g. 7 unread items)."},{id:6,name:"Underline indicator",token:"--tab-line-width, --tab-line-color-default",description:"Active-state underline for default and secondary types."}]})}),e.jsxs(t.Section,{title:"Types",children:[e.jsxs(t.Subsection,{title:"Default (underline — blue active)",children:[e.jsx(t.BodyText,{children:"Active tab is highlighted with a sky-blue underline indicator. Use for primary navigation."}),e.jsx("div",{style:r,children:e.jsx(a,{items:l,type:"default",size:"default",activeId:"tab2"})})]}),e.jsxs(t.Subsection,{title:"Secondary (underline — dark active)",children:[e.jsx(t.BodyText,{children:"Active tab uses a dark/charcoal underline. Use for secondary or nested navigation."}),e.jsx("div",{style:r,children:e.jsx(a,{items:l,type:"secondary",size:"default",activeId:"tab2"})})]}),e.jsxs(t.Subsection,{title:"Contained (bordered box — light theme)",children:[e.jsx(t.BodyText,{children:"Each tab is a bordered box. The active tab fills with a solid blue background and white text."}),e.jsx("div",{style:r,children:e.jsx(a,{items:l,type:"contained",size:"default",activeId:"tab1"})})]}),e.jsxs(t.Subsection,{title:"Dark Contained (bordered box — dark theme)",children:[e.jsx(t.BodyText,{children:"A contained variant for dark backgrounds. The active tab uses a lighter highlight on dark."}),e.jsx("div",{style:Je,children:e.jsx(a,{items:l,type:"dark-contained",size:"default",activeId:"tab1"})})]})]}),e.jsx(t.Section,{title:"Sizes",children:e.jsx(t.SizeDemo,{rows:[{label:"Small",children:e.jsx("div",{style:r,children:e.jsx(a,{items:l,type:"default",size:"small",activeId:"tab2"})})},{label:"Default",children:e.jsx("div",{style:r,children:e.jsx(a,{items:l,type:"default",size:"default",activeId:"tab2"})})},{label:"Large",children:e.jsx("div",{style:r,children:e.jsx(a,{items:l,type:"default",size:"large",activeId:"tab2"})})}]})}),e.jsxs(t.Section,{title:"States",children:[e.jsxs(t.Subsection,{title:"Default / Active / Disabled",children:[e.jsx(t.BodyText,{children:"Tab item 1 is in default state, item 2 is active, item 4 is disabled."}),e.jsx("div",{style:r,children:e.jsx(a,{items:l,type:"default",size:"default",activeId:"tab2"})})]}),e.jsxs(t.Subsection,{title:"With Dropdown indicator",children:[e.jsx(t.BodyText,{children:"Tabs can display a chevron-down trailing icon to indicate a dropdown menu is available."}),e.jsx("div",{style:r,children:e.jsx(a,{items:Ge,type:"default",size:"default",activeId:"tab1"})})]})]}),e.jsxs(t.Section,{title:"Icon & Badge Options",children:[e.jsx(t.Subsection,{title:"With leading icon, trailing icon, and badge (default)",children:e.jsx("div",{style:r,children:e.jsx(a,{items:l,type:"contained",size:"default",activeId:"tab1",showLeadingIcon:!0,showTrailingIcon:!0,showBadge:!0})})}),e.jsx(t.Subsection,{title:"Without badge",children:e.jsx("div",{style:r,children:e.jsx(a,{items:l,type:"contained",size:"default",activeId:"tab1",showBadge:!1})})}),e.jsx(t.Subsection,{title:"Without leading icon",children:e.jsx("div",{style:r,children:e.jsx(a,{items:l,type:"contained",size:"default",activeId:"tab1",showLeadingIcon:!1})})}),e.jsx(t.Subsection,{title:"Without trailing icon",children:e.jsx("div",{style:r,children:e.jsx(a,{items:l,type:"contained",size:"default",activeId:"tab1",showTrailingIcon:!1})})})]}),e.jsx(t.Section,{title:"Design Tokens",children:e.jsx(t.TokenTable,{tokens:[{name:"--tab-font-family",description:"Font family for tab labels (--brand-font-primary)"},{name:"--tab-font-weight",description:"Font weight for tab labels (--global-type-weight-light)"},{name:"--tab-focus-ring-color",description:"Focus outline colour (--global-color-primary-blue-blue-400)"},{name:"--tab-underline-track-color",description:"Colour of the inactive underline track (--global-color-neutral-gray-200)"},{name:"--tab-default-line-active",description:"Active underline colour for default type (--global-color-primary-sky-blue)"},{name:"--tab-secondary-line-active",description:"Active underline colour for secondary type (--global-color-neutral-gray-800)"},{name:"--tab-contained-bg-active",description:"Active background for contained tabs (--global-color-primary-blue-blue-500)"},{name:"--tab-contained-text-active",description:"Active text colour for contained tabs (--global-color-base-white)"},{name:"--tab-dark-bg-default",description:"Dark-contained background (--global-color-neutral-gray-700)"},{name:"--tab-dark-text-default",description:"Dark-contained text colour (--global-color-neutral-gray-200)"},{name:"--tab-default-badge-bg",description:"Default badge background (--global-color-primary-sky-blue-100)"},{name:"--tab-contained-radius",description:"Border radius for contained tabs (--global-spacing-radius-6px)"}]})}),e.jsx(t.Section,{title:"Usage Principles",children:e.jsxs(t.Principles,{children:[e.jsx(t.PrincipleCard,{number:1,title:"One active tab at a time",children:"Only one tab should be active per strip. Use controlled state (activeId) to manage which tab is selected and update it via the onTabChange callback."}),e.jsx(t.PrincipleCard,{number:2,title:"Consistent icon and badge usage",children:"If icons or badges are shown, apply them consistently across all tabs in a strip. Mixing tabs with and without icons creates visual imbalance."}),e.jsx(t.PrincipleCard,{number:3,title:"Choose the right type",children:"Use default/secondary underline tabs for page-level navigation. Use contained tabs when tabs sit inside a card or panel with a visible background."})]})}),e.jsx(t.Section,{title:"Dos and Don'ts",children:e.jsx(t.DosDonts,{doItem:{icon:e.jsx("div",{style:r,children:e.jsx(a,{items:l.slice(0,3),type:"default",size:"default",activeId:"tab1"})}),description:"Use tabs to switch between related views at the same hierarchy level."},dontItem:{icon:e.jsx("div",{style:r,children:e.jsx(a,{items:[{id:"a",label:"Tab label"},{id:"b",label:"Tab label"}],type:"default",size:"default",activeId:"a",showLeadingIcon:!1,showTrailingIcon:!1})}),description:"Don't mix tab types or skip icons inconsistently across a single tab strip."}})}),e.jsx(t.Footer,{})]});Ye.__docgenInfo={description:"",methods:[],displayName:"TabsDocs"};const i=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],A=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7,dropdown:!0},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],o=["small","default","large"],Ke=["default","secondary","contained","dark-contained"],n={padding:"16px",background:"#f9fafb",borderRadius:"6px",display:"inline-flex"},c={...n,background:"#374151"},aa={title:"Atoms/Tabs",component:a,parameters:{layout:"padded"},argTypes:{type:{control:"select",options:Ke},size:{control:"select",options:o},showBadge:{control:"boolean"},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},activeId:{control:"text"}},args:{items:i,type:"default",size:"default",showBadge:!0,showLeadingIcon:!0,showTrailingIcon:!0,activeId:"tab2"}},m={name:"Documentation",render:()=>e.jsx(Ye,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},u={name:"Playground",render:s=>e.jsx("div",{style:s.type==="dark-contained"?c:n,children:e.jsx(a,{...s})})},p={name:"Type / Default",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:o.map(s=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:s}),e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"default",size:s,activeId:"tab2"})})]},s))})},b={name:"Type / Secondary",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:o.map(s=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:s}),e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"secondary",size:s,activeId:"tab2"})})]},s))})},y={name:"Type / Contained",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:o.map(s=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:s}),e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"contained",size:s,activeId:"tab1"})})]},s))})},v={name:"Type / Dark Contained",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:o.map(s=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:s}),e.jsx("div",{style:c,children:e.jsx(a,{items:i,type:"dark-contained",size:s,activeId:"tab1"})})]},s))})},g={name:"Default / Small",render:()=>e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"default",size:"small",activeId:"tab2"})})},h={name:"Default / Default",render:()=>e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"default",size:"default",activeId:"tab2"})})},f={name:"Default / Large",render:()=>e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"default",size:"large",activeId:"tab2"})})},x={name:"Secondary / Small",render:()=>e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"secondary",size:"small",activeId:"tab2"})})},T={name:"Secondary / Default",render:()=>e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"secondary",size:"default",activeId:"tab2"})})},j={name:"Secondary / Large",render:()=>e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"secondary",size:"large",activeId:"tab2"})})},S={name:"Contained / Small",render:()=>e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"contained",size:"small",activeId:"tab1"})})},D={name:"Contained / Default",render:()=>e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"contained",size:"default",activeId:"tab1"})})},I={name:"Contained / Large",render:()=>e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"contained",size:"large",activeId:"tab1"})})},z={name:"Dark Contained / Small",render:()=>e.jsx("div",{style:c,children:e.jsx(a,{items:i,type:"dark-contained",size:"small",activeId:"tab1"})})},k={name:"Dark Contained / Default",render:()=>e.jsx("div",{style:c,children:e.jsx(a,{items:i,type:"dark-contained",size:"default",activeId:"tab1"})})},L={name:"Dark Contained / Large",render:()=>e.jsx("div",{style:c,children:e.jsx(a,{items:i,type:"dark-contained",size:"large",activeId:"tab1"})})},E={name:"With Dropdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx("div",{style:n,children:e.jsx(a,{items:A,type:"default",size:"default",activeId:"tab1"})}),e.jsx("div",{style:n,children:e.jsx(a,{items:A,type:"contained",size:"default",activeId:"tab1"})})]})},B={name:"Without Badge",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"default",size:"default",activeId:"tab2",showBadge:!1})}),e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"contained",size:"default",activeId:"tab1",showBadge:!1})})]})},w={name:"Without Icons",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"default",size:"default",activeId:"tab2",showLeadingIcon:!1,showTrailingIcon:!1})}),e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"contained",size:"default",activeId:"tab1",showLeadingIcon:!1,showTrailingIcon:!1})})]})},C={name:"Full Design Matrix",parameters:{layout:"padded"},render:()=>{const s=(d,qe=!1)=>({fontSize:11,fontWeight:600,color:qe?"#9CA3AF":"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[o.map(d=>e.jsxs("div",{children:[e.jsxs("div",{style:s(),children:["Default — ",d]}),e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"default",size:d,activeId:"tab2"})})]},`default-${d}`)),o.map(d=>e.jsxs("div",{children:[e.jsxs("div",{style:s(),children:["Secondary — ",d]}),e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"secondary",size:d,activeId:"tab2"})})]},`secondary-${d}`)),o.map(d=>e.jsxs("div",{children:[e.jsxs("div",{style:s(),children:["Contained — ",d]}),e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"contained",size:d,activeId:"tab1"})})]},`contained-${d}`)),o.map(d=>e.jsxs("div",{children:[e.jsxs("div",{style:s(`Dark Contained — ${d}`,!0),children:["Dark Contained — ",d]}),e.jsx("div",{style:c,children:e.jsx(a,{items:i,type:"dark-contained",size:d,activeId:"tab1"})})]},`dark-${d}`)),e.jsxs("div",{children:[e.jsx("div",{style:s(),children:"With Dropdown — Default"}),e.jsx("div",{style:n,children:e.jsx(a,{items:A,type:"default",size:"default",activeId:"tab1"})})]}),e.jsxs("div",{children:[e.jsx("div",{style:s(),children:"Without Badge — Contained"}),e.jsx("div",{style:n,children:e.jsx(a,{items:i,type:"contained",size:"default",activeId:"tab1",showBadge:!1})})]})]})}};var _,W,F;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <TabsDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen'
  }
}`,...(F=(W=m.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var M,U,O;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={args.type === 'dark-contained' ? darkBg : lightBg}>
      <Tabs {...args} />
    </div>
}`,...(O=(U=u.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var P,$,R;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Type / Default',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <div style={{
        fontSize: 11,
        fontWeight: 600,
        color: '#61607C',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 8
      }}>
            {size}
          </div>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="default" size={size} activeId="tab2" />
          </div>
        </div>)}
    </div>
}`,...(R=($=p.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var Z,N,H;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Type / Secondary',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <div style={{
        fontSize: 11,
        fontWeight: 600,
        color: '#61607C',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 8
      }}>
            {size}
          </div>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="secondary" size={size} activeId="tab2" />
          </div>
        </div>)}
    </div>
}`,...(H=(N=b.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var Y,q,G;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Type / Contained',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <div style={{
        fontSize: 11,
        fontWeight: 600,
        color: '#61607C',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 8
      }}>
            {size}
          </div>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab1" />
          </div>
        </div>)}
    </div>
}`,...(G=(q=y.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Type / Dark Contained',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <div style={{
        fontSize: 11,
        fontWeight: 600,
        color: '#9CA3AF',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 8
      }}>
            {size}
          </div>
          <div style={darkBg}>
            <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab1" />
          </div>
        </div>)}
    </div>
}`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,X,ee;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Default / Small',
  render: () => <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="default" size="small" activeId="tab2" />
    </div>
}`,...(ee=(X=g.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ae,te,ie;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Default / Default',
  render: () => <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" />
    </div>
}`,...(ie=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var se,ne,de;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Default / Large',
  render: () => <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="default" size="large" activeId="tab2" />
    </div>
}`,...(de=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var re,le,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Secondary / Small',
  render: () => <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="secondary" size="small" activeId="tab2" />
    </div>
}`,...(oe=(le=x.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,me,ue;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Secondary / Default',
  render: () => <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="secondary" size="default" activeId="tab2" />
    </div>
}`,...(ue=(me=T.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,be,ye;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Secondary / Large',
  render: () => <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="secondary" size="large" activeId="tab2" />
    </div>
}`,...(ye=(be=j.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var ve,ge,he;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Contained / Small',
  render: () => <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="contained" size="small" activeId="tab1" />
    </div>
}`,...(he=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,xe,Te;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Contained / Default',
  render: () => <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="contained" size="default" activeId="tab1" />
    </div>
}`,...(Te=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var je,Se,De;I.parameters={...I.parameters,docs:{...(je=I.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Contained / Large',
  render: () => <div style={lightBg}>
      <Tabs items={DEFAULT_ITEMS} type="contained" size="large" activeId="tab1" />
    </div>
}`,...(De=(Se=I.parameters)==null?void 0:Se.docs)==null?void 0:De.source}}};var Ie,ze,ke;z.parameters={...z.parameters,docs:{...(Ie=z.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Dark Contained / Small',
  render: () => <div style={darkBg}>
      <Tabs items={DEFAULT_ITEMS} type="dark-contained" size="small" activeId="tab1" />
    </div>
}`,...(ke=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:ke.source}}};var Le,Ee,Be;k.parameters={...k.parameters,docs:{...(Le=k.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Dark Contained / Default',
  render: () => <div style={darkBg}>
      <Tabs items={DEFAULT_ITEMS} type="dark-contained" size="default" activeId="tab1" />
    </div>
}`,...(Be=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var we,Ce,Ae;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Dark Contained / Large',
  render: () => <div style={darkBg}>
      <Tabs items={DEFAULT_ITEMS} type="dark-contained" size="large" activeId="tab1" />
    </div>
}`,...(Ae=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:Ae.source}}};var _e,We,Fe;E.parameters={...E.parameters,docs:{...(_e=E.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'With Dropdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div style={lightBg}>
        <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" />
      </div>
      <div style={lightBg}>
        <Tabs items={DROPDOWN_ITEMS} type="contained" size="default" activeId="tab1" />
      </div>
    </div>
}`,...(Fe=(We=E.parameters)==null?void 0:We.docs)==null?void 0:Fe.source}}};var Me,Ue,Oe;B.parameters={...B.parameters,docs:{...(Me=B.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'Without Badge',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div style={lightBg}>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showBadge={false} />
      </div>
      <div style={lightBg}>
        <Tabs items={DEFAULT_ITEMS} type="contained" size="default" activeId="tab1" showBadge={false} />
      </div>
    </div>
}`,...(Oe=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:Oe.source}}};var Pe,$e,Re;w.parameters={...w.parameters,docs:{...(Pe=w.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Without Icons',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div style={lightBg}>
        <Tabs items={DEFAULT_ITEMS} type="default" size="default" activeId="tab2" showLeadingIcon={false} showTrailingIcon={false} />
      </div>
      <div style={lightBg}>
        <Tabs items={DEFAULT_ITEMS} type="contained" size="default" activeId="tab1" showLeadingIcon={false} showTrailingIcon={false} />
      </div>
    </div>
}`,...(Re=($e=w.parameters)==null?void 0:$e.docs)==null?void 0:Re.source}}};var Ze,Ne,He;C.parameters={...C.parameters,docs:{...(Ze=C.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const heading = (text: string, dark = false): React.CSSProperties => ({
      fontSize: 11,
      fontWeight: 600,
      color: dark ? '#9CA3AF' : '#61607C',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.08em',
      marginBottom: 8
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }}>
        {/* Default underline — all sizes */}
        {ALL_SIZES.map(size => <div key={\`default-\${size}\`}>
            <div style={heading(\`Default — \${size}\`)}>Default — {size}</div>
            <div style={lightBg}>
              <Tabs items={DEFAULT_ITEMS} type="default" size={size} activeId="tab2" />
            </div>
          </div>)}

        {/* Secondary underline — all sizes */}
        {ALL_SIZES.map(size => <div key={\`secondary-\${size}\`}>
            <div style={heading(\`Secondary — \${size}\`)}>Secondary — {size}</div>
            <div style={lightBg}>
              <Tabs items={DEFAULT_ITEMS} type="secondary" size={size} activeId="tab2" />
            </div>
          </div>)}

        {/* Contained — all sizes */}
        {ALL_SIZES.map(size => <div key={\`contained-\${size}\`}>
            <div style={heading(\`Contained — \${size}\`)}>Contained — {size}</div>
            <div style={lightBg}>
              <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab1" />
            </div>
          </div>)}

        {/* Dark Contained — all sizes */}
        {ALL_SIZES.map(size => <div key={\`dark-\${size}\`}>
            <div style={heading(\`Dark Contained — \${size}\`, true)}>Dark Contained — {size}</div>
            <div style={darkBg}>
              <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab1" />
            </div>
          </div>)}

        {/* Dropdown variant */}
        <div>
          <div style={heading('With Dropdown — Default')}>With Dropdown — Default</div>
          <div style={lightBg}>
            <Tabs items={DROPDOWN_ITEMS} type="default" size="default" activeId="tab1" />
          </div>
        </div>

        {/* Without badge */}
        <div>
          <div style={heading('Without Badge — Contained')}>Without Badge — Contained</div>
          <div style={lightBg}>
            <Tabs items={DEFAULT_ITEMS} type="contained" size="default" activeId="tab1" showBadge={false} />
          </div>
        </div>
      </div>;
  }
}`,...(He=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:He.source}}};const ta=["Documentation","Playground","TypeDefault","TypeSecondary","TypeContained","TypeDarkContained","DefaultSmall","DefaultDefault","DefaultLarge","SecondarySmall","SecondaryDefault","SecondaryLarge","ContainedSmall","ContainedDefault","ContainedLarge","DarkContainedSmall","DarkContainedDefault","DarkContainedLarge","WithDropdown","WithoutBadge","WithoutIcons","FullDesignMatrix"];export{D as ContainedDefault,I as ContainedLarge,S as ContainedSmall,k as DarkContainedDefault,L as DarkContainedLarge,z as DarkContainedSmall,h as DefaultDefault,f as DefaultLarge,g as DefaultSmall,m as Documentation,C as FullDesignMatrix,u as Playground,T as SecondaryDefault,j as SecondaryLarge,x as SecondarySmall,y as TypeContained,v as TypeDarkContained,p as TypeDefault,b as TypeSecondary,E as WithDropdown,B as WithoutBadge,w as WithoutIcons,ta as __namedExportsOrder,aa as default};
