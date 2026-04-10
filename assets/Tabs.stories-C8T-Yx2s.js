import{j as e}from"./iframe-Bcl9ehwc.js";import{T as t}from"./Tabs-BVwSnQJI.js";import{D as a}from"./DocsTemplate-Ck647IGQ.js";import"./preload-helper-Dp1pzeXC.js";const i=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],L=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7,dropdown:!0},{id:"tab3",label:"Tab label",count:7,dropdown:!0},{id:"tab4",label:"Tab label",count:7,disabled:!0}],r={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},Ae={...r,background:"var(--global-color-neutral-gray-800)"},B=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Tabs",subtitle:"Navigation tabs with underline or contained variants, three sizes, and optional badge counts."}),e.jsxs(a.BodyText,{children:["The ",e.jsx("strong",{children:"Tabs"})," component is a horizontal navigation strip. Each tab item is structured as a column — a label row (leading icon + label text + trailing icon + badge), a small spacer, and an underline indicator line (for underline types). Clicking a tab marks it as active and calls the ",e.jsx("code",{children:"onTabChange"})," callback."]}),e.jsx(a.Section,{title:"Anatomy",children:e.jsx(a.Anatomy,{preview:e.jsx("div",{style:{padding:"24px 0"},children:e.jsx(t,{items:[{id:"t",label:"Tab label",count:7}],type:"default",size:"default",activeId:"t"})}),parts:[{id:1,name:"Leading icon",token:"--tab-icon-size-default",description:"Optional 16 × 16 account icon placed before the label text."},{id:2,name:"Label text",token:"--tab-font-size-default, --tab-font-family",description:"Short descriptive label identifying the tab panel."},{id:3,name:"Trailing icon",token:"--tab-icon-size-default",description:"Arrow-right for navigation, or chevron-down for dropdown tabs."},{id:4,name:"Badge",token:"--tab-default-badge-bg",description:"Circular count indicator. Only shown when count is provided and showBadge is true."},{id:5,name:"Spacer",token:"--tab-spacer-height",description:"4px gap between the label row and the underline indicator."},{id:6,name:"Line",token:"--tab-line-width, --tab-underline-track-color",description:"2px underline at the base of each tab item. Changes color when active or hovered."}]})}),e.jsxs(a.Section,{title:"Sizes",children:[e.jsxs(a.BodyText,{children:["Three sizes — ",e.jsx("strong",{children:"small"}),", ",e.jsx("strong",{children:"default"}),", and ",e.jsx("strong",{children:"large"}),". Size scales the font, icons, badge, and internal padding."]}),e.jsx(a.SizeDemo,{rows:[{label:"Small",children:e.jsx(t,{items:i,type:"default",size:"small",activeId:"tab2"})},{label:"Default",children:e.jsx(t,{items:i,type:"default",size:"default",activeId:"tab2"})},{label:"Large",children:e.jsx(t,{items:i,type:"default",size:"large",activeId:"tab2"})}]})]}),e.jsxs(a.Section,{title:"Types",children:[e.jsxs(a.Subsection,{title:"Default (underline, blue indicator)",children:[e.jsx(a.BodyText,{children:"The default type renders an underline indicator at the bottom of each tab. The active tab displays a blue indicator line. Used for primary page-level navigation."}),e.jsxs("div",{style:r,children:[e.jsx(t,{items:i,type:"default",size:"small",activeId:"tab2"}),e.jsx(t,{items:i,type:"default",size:"default",activeId:"tab2"}),e.jsx(t,{items:i,type:"default",size:"large",activeId:"tab2"})]})]}),e.jsxs(a.Subsection,{title:"Secondary (underline, dark indicator)",children:[e.jsx(a.BodyText,{children:"The secondary type uses a dark charcoal underline for the active state, alongside a sky-blue badge for the default state. Suitable for secondary navigation contexts."}),e.jsxs("div",{style:r,children:[e.jsx(t,{items:i,type:"secondary",size:"small",activeId:"tab2"}),e.jsx(t,{items:i,type:"secondary",size:"default",activeId:"tab2"}),e.jsx(t,{items:i,type:"secondary",size:"large",activeId:"tab2"})]})]}),e.jsxs(a.Subsection,{title:"Contained (bordered box, light theme)",children:[e.jsx(a.BodyText,{children:"Each tab is enclosed in a rounded bordered box. Inactive tabs show a white background with a blue border. The active state fills the box with solid blue. Hover transitions to a filled state. Use for section switching on light backgrounds."}),e.jsxs("div",{style:r,children:[e.jsx(t,{items:i,type:"contained",size:"small",activeId:"tab2"}),e.jsx(t,{items:i,type:"contained",size:"default",activeId:"tab2"}),e.jsx(t,{items:i,type:"contained",size:"large",activeId:"tab2"})]})]}),e.jsxs(a.Subsection,{title:"Dark Contained (bordered box, dark theme)",children:[e.jsx(a.BodyText,{children:"The dark-contained variant uses a navy/charcoal fill for all states. Designed for use on dark backgrounds such as navy headers or dark sidebars."}),e.jsxs("div",{style:Ae,children:[e.jsx(t,{items:i,type:"dark-contained",size:"small",activeId:"tab2"}),e.jsx(t,{items:i,type:"dark-contained",size:"default",activeId:"tab2"}),e.jsx(t,{items:i,type:"dark-contained",size:"large",activeId:"tab2"})]})]})]}),e.jsxs(a.Section,{title:"Dropdown indicator",children:[e.jsxs(a.BodyText,{children:["Individual tabs can show a ",e.jsx("strong",{children:"chevron-down"})," icon instead of the arrow-right by setting ",e.jsx("code",{children:"dropdown: true"})," on the tab item. This signals that the tab opens a sub-menu or dropdown panel rather than navigating to a new section."]}),e.jsxs("div",{style:r,children:[e.jsx(t,{items:L,type:"default",size:"default",activeId:"tab1"}),e.jsx(t,{items:L,type:"secondary",size:"default",activeId:"tab1"}),e.jsx(t,{items:L,type:"contained",size:"default",activeId:"tab1"})]})]}),e.jsx(a.Section,{title:"Usage guidelines",children:e.jsx(a.DosDonts,{doItem:{icon:e.jsx(t,{items:[{id:"t1",label:"Overview",count:3},{id:"t2",label:"Details"}],type:"default",size:"default",activeId:"t1"}),description:"Use clear, short labels. Keep the active state clearly distinguished with the underline indicator or filled state."},dontItem:{icon:e.jsx(t,{items:[{id:"t1",label:"Overview"},{id:"t2",label:"Details"}],type:"contained",size:"default",activeId:"t1"}),description:"Don't mix underline and contained tab types in the same navigation context."}})}),e.jsx(a.Section,{title:"Design principles",children:e.jsxs(a.Principles,{children:[e.jsx(a.PrincipleCard,{number:1,title:"Clarity",children:'Each tab label must immediately communicate the content behind it. Avoid vague labels like "More" or "Other" without additional context.'}),e.jsx(a.PrincipleCard,{number:2,title:"Consistency",children:"All tabs in a strip must share the same type, size, and badge visibility. Never mix types within a single navigation row."}),e.jsxs(a.PrincipleCard,{number:3,title:"Accessibility",children:["The strip uses ",e.jsx("code",{children:'role="tablist"'})," and each item uses ",e.jsx("code",{children:'role="tab"'}),"with ",e.jsx("code",{children:"aria-selected"})," and ",e.jsx("code",{children:"aria-disabled"})," attributes. Pair tabs with visible panel content."]})]})}),e.jsx(a.Section,{title:"Design tokens",children:e.jsx(a.TokenTable,{tokens:[{name:"--tab-font-family",description:"Font family for all tab labels."},{name:"--tab-font-weight",description:"Font weight for inactive tab labels (light/300)."},{name:"--tab-letter-spacing",description:"Letter spacing applied to all tab text."},{name:"--tab-font-size-sm / -default / -lg",description:"Font size per size scale."},{name:"--tab-line-height-sm / -default / -lg",description:"Line height per size scale."},{name:"--tab-icon-size-sm / -default / -lg",description:"Leading and trailing icon dimensions per size."},{name:"--tab-inner-gap-sm / -default / -lg",description:"Gap between icon, label text, and trailing icon."},{name:"--tab-label-pl-default / pr-default",description:"Left and right outer padding of the label row."},{name:"--tab-spacer-height",description:"Vertical gap between the label row and the underline indicator (4px)."},{name:"--tab-line-width",description:"Thickness of the underline indicator line (2px)."},{name:"--tab-underline-track-color",description:"Default (inactive) underline line color — gray-200."},{name:"--tab-default-line-active",description:"Active underline indicator color for type=default (sky-blue)."},{name:"--tab-secondary-line-active",description:"Active underline indicator color for type=secondary (dark)."},{name:"--tab-contained-bg-default",description:"Background for contained tab in default/inactive state."},{name:"--tab-contained-border-default",description:"Border color for contained tab (inactive)."},{name:"--tab-contained-bg-active",description:"Background for contained tab in active state (solid blue)."},{name:"--tab-dark-bg-default",description:"Background for dark-contained tab in default state."},{name:"--tab-default-badge-bg",description:"Badge background for type=default tabs (sky-blue tint)."},{name:"--tab-secondary-badge-bg",description:"Badge background for type=secondary tabs (sky-blue)."},{name:"--tab-contained-radius",description:"Border-radius of contained tab boxes (6px)."},{name:"--tab-badge-size-default",description:"Minimum width and height of the badge circle."},{name:"--tab-focus-ring-color",description:"Outline color shown on keyboard focus."}]})}),e.jsx(a.Footer,{})]});B.__docgenInfo={description:"",methods:[],displayName:"TabsDocs"};const o=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],k=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7,dropdown:!0},{id:"tab3",label:"Tab label",count:7,dropdown:!0},{id:"tab4",label:"Tab label",count:7,disabled:!0}],s=["small","default","large"],We=["default","secondary","contained","dark-contained"],Re={title:"Foundation/BuildingBlocks/Tabs",component:t,parameters:{docs:{page:()=>e.jsx(B,{})}},argTypes:{type:{control:"select",options:We},size:{control:"select",options:s},showBadge:{control:"boolean"},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},activeId:{control:"text"}},args:{items:o,type:"default",size:"default",showBadge:!0,showLeadingIcon:!0,showTrailingIcon:!0,activeId:"tab2"}},l={name:"Documentation",render:()=>e.jsx(B,{}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},d={name:"Playground"},c={name:"All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"16px"},children:s.map(n=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"8px",marginTop:0},children:n}),e.jsx(t,{items:o,size:n,type:"default",activeId:"tab2"})]},n))}),parameters:{controls:{disable:!0}}},p={name:"Default / Small",args:{type:"default",size:"small",activeId:"tab1"}},m={name:"Default / Default",args:{type:"default",size:"default",activeId:"tab2"}},b={name:"Default / Large",args:{type:"default",size:"large",activeId:"tab3"}},u={name:"Secondary / Small",args:{type:"secondary",size:"small",activeId:"tab1"}},g={name:"Secondary / Default",args:{type:"secondary",size:"default",activeId:"tab2"}},y={name:"Secondary / Large",args:{type:"secondary",size:"large",activeId:"tab3"}},f={name:"Contained / Small",args:{type:"contained",size:"small",activeId:"tab1"}},x={name:"Contained / Default",args:{type:"contained",size:"default",activeId:"tab2"}},h={name:"Contained / Large",args:{type:"contained",size:"large",activeId:"tab3"}},v={name:"Dark Contained / Small",args:{type:"dark-contained",size:"small",activeId:"tab1"}},T={name:"Dark Contained / Default",args:{type:"dark-contained",size:"default",activeId:"tab2"}},z={name:"Dark Contained / Large",args:{type:"dark-contained",size:"large",activeId:"tab3"}},S={name:"With Dropdown indicator",args:{items:k,type:"default",activeId:"tab1"}},D={name:"Without Badge",args:{showBadge:!1,type:"default",activeId:"tab1"}},I={name:"Without Icons",args:{showLeadingIcon:!1,showTrailingIcon:!1,type:"default",activeId:"tab1"}},j={name:"Full Design Matrix",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px",padding:"24px"},children:[["default","secondary"].map(n=>e.jsxs("div",{children:[e.jsxs("h3",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",marginTop:0,textTransform:"capitalize"},children:["Type: ",n]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:s.map(w=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"6px",marginTop:0},children:w}),e.jsx(t,{items:o,type:n,size:w,activeId:"tab2"})]},w))})]},n)),e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",marginTop:0},children:"Type: contained"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:s.map(n=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"6px",marginTop:0},children:n}),e.jsx(t,{items:o,type:"contained",size:n,activeId:"tab2"})]},n))})]}),e.jsxs("div",{style:{background:"var(--global-color-neutral-gray-800)",padding:"24px",borderRadius:"8px"},children:[e.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",color:"var(--global-color-neutral-gray-200)",marginBottom:"16px",marginTop:0},children:"Type: dark-contained"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:s.map(n=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",textTransform:"capitalize",marginBottom:"6px",marginTop:0},children:n}),e.jsx(t,{items:o,type:"dark-contained",size:n,activeId:"tab2"})]},n))})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",marginTop:0},children:"With dropdown indicator"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{items:k,type:"default",size:"default",activeId:"tab1"}),e.jsx(t,{items:k,type:"secondary",size:"default",activeId:"tab1"}),e.jsx(t,{items:k,type:"contained",size:"default",activeId:"tab1"})]})]})]}),parameters:{controls:{disable:!0}}};var C,F,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <TabsDocs />,
  parameters: {
    controls: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(E=(F=l.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var A,W,_;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var M,O,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '16px'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'capitalize',
        marginBottom: '8px',
        marginTop: 0
      }}>{size}</p>
          <Tabs items={DEFAULT_ITEMS} size={size} type="default" activeId="tab2" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var R,U,N;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Default / Small',
  args: {
    type: 'default',
    size: 'small',
    activeId: 'tab1'
  }
}`,...(N=(U=p.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var Z,H,G;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Default / Default',
  args: {
    type: 'default',
    size: 'default',
    activeId: 'tab2'
  }
}`,...(G=(H=m.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var K,V,Y;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Default / Large',
  args: {
    type: 'default',
    size: 'large',
    activeId: 'tab3'
  }
}`,...(Y=(V=b.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var $,q,J;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Secondary / Small',
  args: {
    type: 'secondary',
    size: 'small',
    activeId: 'tab1'
  }
}`,...(J=(q=u.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,ee;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Secondary / Default',
  args: {
    type: 'secondary',
    size: 'default',
    activeId: 'tab2'
  }
}`,...(ee=(X=g.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ae,te,ne;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Secondary / Large',
  args: {
    type: 'secondary',
    size: 'large',
    activeId: 'tab3'
  }
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,re,oe;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Contained / Small',
  args: {
    type: 'contained',
    size: 'small',
    activeId: 'tab1'
  }
}`,...(oe=(re=f.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,le,de;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Contained / Default',
  args: {
    type: 'contained',
    size: 'default',
    activeId: 'tab2'
  }
}`,...(de=(le=x.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,me;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Contained / Large',
  args: {
    type: 'contained',
    size: 'large',
    activeId: 'tab3'
  }
}`,...(me=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var be,ue,ge;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Dark Contained / Small',
  args: {
    type: 'dark-contained',
    size: 'small',
    activeId: 'tab1'
  }
}`,...(ge=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var ye,fe,xe;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Dark Contained / Default',
  args: {
    type: 'dark-contained',
    size: 'default',
    activeId: 'tab2'
  }
}`,...(xe=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var he,ve,Te;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Dark Contained / Large',
  args: {
    type: 'dark-contained',
    size: 'large',
    activeId: 'tab3'
  }
}`,...(Te=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var ze,Se,De;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'With Dropdown indicator',
  args: {
    items: DROPDOWN_ITEMS,
    type: 'default',
    activeId: 'tab1'
  }
}`,...(De=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:De.source}}};var Ie,je,ke;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Without Badge',
  args: {
    showBadge: false,
    type: 'default',
    activeId: 'tab1'
  }
}`,...(ke=(je=D.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var we,Le,Be;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Without Icons',
  args: {
    showLeadingIcon: false,
    showTrailingIcon: false,
    type: 'default',
    activeId: 'tab1'
  }
}`,...(Be=(Le=I.parameters)==null?void 0:Le.docs)==null?void 0:Be.source}}};var Ce,Fe,Ee;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    padding: '24px'
  }}>
      {/* Underline rows */}
      {(['default', 'secondary'] as TabType[]).map(type => <div key={type}>
          <h3 style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '16px',
        marginTop: 0,
        textTransform: 'capitalize'
      }}>
            Type: {type}
          </h3>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
            {ALL_SIZES.map(size => <div key={size}>
                <p style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            color: 'var(--global-color-neutral-gray-500)',
            textTransform: 'capitalize',
            marginBottom: '6px',
            marginTop: 0
          }}>{size}</p>
                <Tabs items={DEFAULT_ITEMS} type={type} size={size} activeId="tab2" />
              </div>)}
          </div>
        </div>)}

      {/* Contained */}
      <div>
        <h3 style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '16px',
        marginTop: 0
      }}>
          Type: contained
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          {ALL_SIZES.map(size => <div key={size}>
              <p style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            color: 'var(--global-color-neutral-gray-500)',
            textTransform: 'capitalize',
            marginBottom: '6px',
            marginTop: 0
          }}>{size}</p>
              <Tabs items={DEFAULT_ITEMS} type="contained" size={size} activeId="tab2" />
            </div>)}
        </div>
      </div>

      {/* Dark contained */}
      <div style={{
      background: 'var(--global-color-neutral-gray-800)',
      padding: '24px',
      borderRadius: '8px'
    }}>
        <h3 style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        color: 'var(--global-color-neutral-gray-200)',
        marginBottom: '16px',
        marginTop: 0
      }}>
          Type: dark-contained
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          {ALL_SIZES.map(size => <div key={size}>
              <p style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            color: 'var(--global-color-neutral-gray-400)',
            textTransform: 'capitalize',
            marginBottom: '6px',
            marginTop: 0
          }}>{size}</p>
              <Tabs items={DEFAULT_ITEMS} type="dark-contained" size={size} activeId="tab2" />
            </div>)}
        </div>
      </div>

      {/* Dropdown variants */}
      <div>
        <h3 style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '16px',
        marginTop: 0
      }}>
          With dropdown indicator
        </h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
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
}`,...(Ee=(Fe=j.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.source}}};const Ue=["Documentation","Playground","AllSizes","TypeDefaultSmall","TypeDefaultDefault","TypeDefaultLarge","TypeSecondarySmall","TypeSecondaryDefault","TypeSecondaryLarge","TypeContainedSmall","TypeContainedDefault","TypeContainedLarge","TypeDarkSmall","TypeDarkDefault","TypeDarkLarge","WithDropdown","WithoutBadge","WithoutIcons","FullMatrix"];export{c as AllSizes,l as Documentation,j as FullMatrix,d as Playground,x as TypeContainedDefault,h as TypeContainedLarge,f as TypeContainedSmall,T as TypeDarkDefault,z as TypeDarkLarge,v as TypeDarkSmall,m as TypeDefaultDefault,b as TypeDefaultLarge,p as TypeDefaultSmall,g as TypeSecondaryDefault,y as TypeSecondaryLarge,u as TypeSecondarySmall,S as WithDropdown,D as WithoutBadge,I as WithoutIcons,Ue as __namedExportsOrder,Re as default};
