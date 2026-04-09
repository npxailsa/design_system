import{r as Qe,j as e}from"./iframe-Bv_28mEe.js";import{D as n}from"./DocsTemplate-D3YWnELR.js";import"./preload-helper-Dp1pzeXC.js";const i={"tabs-strip":"_tabs-strip_14uao_16","strip-type-contained":"_strip-type-contained_14uao_24","strip-type-dark-contained":"_strip-type-dark-contained_14uao_25","bb-tab":"_bb-tab_14uao_33","state-disabled":"_state-disabled_14uao_54","tab-label-row":"_tab-label-row_14uao_63","tab-label-inner":"_tab-label-inner_14uao_73","tab-spacer":"_tab-spacer_14uao_83","tab-line":"_tab-line_14uao_90","tab-content-row":"_tab-content-row_14uao_102","tab-icon":"_tab-icon_14uao_114","tab-trailing-icon":"_tab-trailing-icon_14uao_115","tab-text":"_tab-text_14uao_129","tab-badge":"_tab-badge_14uao_143","size-small":"_size-small_14uao_164","size-default":"_size-default_14uao_177","size-large":"_size-large_14uao_190","type-default":"_type-default_14uao_207","state-active":"_state-active_14uao_228","type-secondary":"_type-secondary_14uao_253","type-contained":"_type-contained_14uao_295","type-dark-contained":"_type-dark-contained_14uao_340"},V=({className:a})=>e.jsx("svg",{className:a,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M7.99935 2.66663C8.70659 2.66663 9.38487 2.94758 9.88497 3.44767C10.3851 3.94777 10.666 4.62605 10.666 5.33329C10.666 6.04054 10.3851 6.71881 9.88497 7.21891C9.38487 7.71901 8.70659 7.99996 7.99935 7.99996C7.29211 7.99996 6.61383 7.71901 6.11373 7.21891C5.61363 6.71881 5.33268 6.04054 5.33268 5.33329C5.33268 4.62605 5.61363 3.94777 6.11373 3.44767C6.61383 2.94758 7.29211 2.66663 7.99935 2.66663ZM7.99935 9.33329C10.946 9.33329 13.3327 10.5266 13.3327 12V13.3333H2.66602V12C2.66602 10.5266 5.05268 9.33329 7.99935 9.33329Z",fill:"currentColor"})}),q=({className:a})=>e.jsx("svg",{className:a,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M2.66602 7.3333V8.66664H10.666L6.99935 12.3333L7.94602 13.28L13.226 7.99997L7.94602 2.71997L6.99935 3.66664L10.666 7.3333H2.66602Z",fill:"currentColor"})}),Z=({className:a})=>e.jsx("svg",{className:a,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M4 6L8 10L12 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Xe=({item:a,isActive:o,type:s,size:u,showBadge:b,showLeadingIcon:m,showTrailingIcon:g,onClick:W})=>{const y=s==="contained"||s==="dark-contained",M=!y,O=[i["bb-tab"],i[`type-${s}`],i[`size-${u}`],o?i["state-active"]:i["state-default"],a.disabled?i["state-disabled"]:""].filter(Boolean).join(" ");return e.jsxs("button",{type:"button",role:"tab","aria-selected":o,"aria-disabled":a.disabled,disabled:a.disabled,className:O,onClick:()=>!a.disabled&&W(a.id),children:[M&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:i["tab-label-row"],children:[e.jsxs("div",{className:i["tab-label-inner"],children:[m&&e.jsx(V,{className:i["tab-icon"]}),e.jsx("span",{className:i["tab-text"],children:a.label}),g&&(a.dropdown?e.jsx(Z,{className:i["tab-trailing-icon"]}):e.jsx(q,{className:i["tab-trailing-icon"]}))]}),b&&a.count!==void 0&&e.jsx("span",{className:i["tab-badge"],children:a.count})]}),e.jsx("div",{className:i["tab-spacer"]}),e.jsx("div",{className:i["tab-line"]})]}),y&&e.jsxs("div",{className:i["tab-content-row"],children:[m&&e.jsx(V,{className:i["tab-icon"]}),e.jsx("span",{className:i["tab-text"],children:a.label}),g&&(a.dropdown?e.jsx(Z,{className:i["tab-trailing-icon"]}):e.jsx(q,{className:i["tab-trailing-icon"]})),b&&a.count!==void 0&&e.jsx("span",{className:i["tab-badge"],children:a.count})]})]})},t=({items:a,activeId:o,onTabChange:s,type:u="default",size:b="default",showBadge:m=!0,showLeadingIcon:g=!0,showTrailingIcon:W=!0,className:y=""})=>{var U;const[M,O]=Qe.useState(o??((U=a[0])==null?void 0:U.id)??""),Ke=o??M,Ye=l=>{O(l),s==null||s(l)},Je=[i["tabs-strip"],i[`strip-type-${u}`],y].filter(Boolean).join(" ");return e.jsx("div",{role:"tablist","aria-orientation":"horizontal",className:Je,children:a.map(l=>e.jsx(Xe,{item:l,isActive:Ke===l.id,type:u,size:b,showBadge:m,showLeadingIcon:g,showTrailingIcon:W,onClick:Ye},l.id))})};t.__docgenInfo={description:`Tabs — A tab navigation strip built from individual tab items.
Each item is a column of: label-row | spacer | underline indicator.
For contained types, the item is a bordered box.

Location: Foundation/BuildingBlocks/Tabs`,methods:[],displayName:"Tabs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Array of tab items to render"},activeId:{required:!1,tsType:{name:"string"},description:"ID of the currently active tab"},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when a tab is selected"},type:{required:!1,tsType:{name:"union",raw:"'default' | 'secondary' | 'contained' | 'dark-contained'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'contained'"},{name:"literal",value:"'dark-contained'"}]},description:"Visual variant style",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size scale",defaultValue:{value:"'default'",computed:!1}},showBadge:{required:!1,tsType:{name:"boolean"},description:"Whether to show the badge/count on each tab",defaultValue:{value:"true",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon (person/account icon)",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the trailing icon (arrow or chevron)",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}}}};const r=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],P=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7,dropdown:!0},{id:"tab3",label:"Tab label",count:7,dropdown:!0},{id:"tab4",label:"Tab label",count:7,disabled:!0}],d={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},ea={...d,background:"var(--global-color-neutral-gray-800)"},R=()=>e.jsxs(n,{children:[e.jsx(n.Header,{title:"Tabs",subtitle:"Navigation tabs with underline or contained variants, three sizes, and optional badge counts."}),e.jsxs(n.BodyText,{children:["The ",e.jsx("strong",{children:"Tabs"})," component is a horizontal navigation strip. Each tab item is structured as a column — a label row (leading icon + label text + trailing icon + badge), a small spacer, and an underline indicator line (for underline types). Clicking a tab marks it as active and calls the ",e.jsx("code",{children:"onTabChange"})," callback."]}),e.jsx(n.Section,{title:"Anatomy",children:e.jsx(n.Anatomy,{preview:e.jsx("div",{style:{padding:"24px 0"},children:e.jsx(t,{items:[{id:"t",label:"Tab label",count:7}],type:"default",size:"default",activeId:"t"})}),parts:[{id:1,name:"Leading icon",token:"--tab-icon-size-default",description:"Optional 16 × 16 account icon placed before the label text."},{id:2,name:"Label text",token:"--tab-font-size-default, --tab-font-family",description:"Short descriptive label identifying the tab panel."},{id:3,name:"Trailing icon",token:"--tab-icon-size-default",description:"Arrow-right for navigation, or chevron-down for dropdown tabs."},{id:4,name:"Badge",token:"--tab-default-badge-bg",description:"Circular count indicator. Only shown when count is provided and showBadge is true."},{id:5,name:"Spacer",token:"--tab-spacer-height",description:"4px gap between the label row and the underline indicator."},{id:6,name:"Line",token:"--tab-line-width, --tab-underline-track-color",description:"2px underline at the base of each tab item. Changes color when active or hovered."}]})}),e.jsxs(n.Section,{title:"Sizes",children:[e.jsxs(n.BodyText,{children:["Three sizes — ",e.jsx("strong",{children:"small"}),", ",e.jsx("strong",{children:"default"}),", and ",e.jsx("strong",{children:"large"}),". Size scales the font, icons, badge, and internal padding."]}),e.jsx(n.SizeDemo,{rows:[{label:"Small",children:e.jsx(t,{items:r,type:"default",size:"small",activeId:"tab2"})},{label:"Default",children:e.jsx(t,{items:r,type:"default",size:"default",activeId:"tab2"})},{label:"Large",children:e.jsx(t,{items:r,type:"default",size:"large",activeId:"tab2"})}]})]}),e.jsxs(n.Section,{title:"Types",children:[e.jsxs(n.Subsection,{title:"Default (underline, blue indicator)",children:[e.jsx(n.BodyText,{children:"The default type renders an underline indicator at the bottom of each tab. The active tab displays a blue indicator line. Used for primary page-level navigation."}),e.jsxs("div",{style:d,children:[e.jsx(t,{items:r,type:"default",size:"small",activeId:"tab2"}),e.jsx(t,{items:r,type:"default",size:"default",activeId:"tab2"}),e.jsx(t,{items:r,type:"default",size:"large",activeId:"tab2"})]})]}),e.jsxs(n.Subsection,{title:"Secondary (underline, dark indicator)",children:[e.jsx(n.BodyText,{children:"The secondary type uses a dark charcoal underline for the active state, alongside a sky-blue badge for the default state. Suitable for secondary navigation contexts."}),e.jsxs("div",{style:d,children:[e.jsx(t,{items:r,type:"secondary",size:"small",activeId:"tab2"}),e.jsx(t,{items:r,type:"secondary",size:"default",activeId:"tab2"}),e.jsx(t,{items:r,type:"secondary",size:"large",activeId:"tab2"})]})]}),e.jsxs(n.Subsection,{title:"Contained (bordered box, light theme)",children:[e.jsx(n.BodyText,{children:"Each tab is enclosed in a rounded bordered box. Inactive tabs show a white background with a blue border. The active state fills the box with solid blue. Hover transitions to a filled state. Use for section switching on light backgrounds."}),e.jsxs("div",{style:d,children:[e.jsx(t,{items:r,type:"contained",size:"small",activeId:"tab2"}),e.jsx(t,{items:r,type:"contained",size:"default",activeId:"tab2"}),e.jsx(t,{items:r,type:"contained",size:"large",activeId:"tab2"})]})]}),e.jsxs(n.Subsection,{title:"Dark Contained (bordered box, dark theme)",children:[e.jsx(n.BodyText,{children:"The dark-contained variant uses a navy/charcoal fill for all states. Designed for use on dark backgrounds such as navy headers or dark sidebars."}),e.jsxs("div",{style:ea,children:[e.jsx(t,{items:r,type:"dark-contained",size:"small",activeId:"tab2"}),e.jsx(t,{items:r,type:"dark-contained",size:"default",activeId:"tab2"}),e.jsx(t,{items:r,type:"dark-contained",size:"large",activeId:"tab2"})]})]})]}),e.jsxs(n.Section,{title:"Dropdown indicator",children:[e.jsxs(n.BodyText,{children:["Individual tabs can show a ",e.jsx("strong",{children:"chevron-down"})," icon instead of the arrow-right by setting ",e.jsx("code",{children:"dropdown: true"})," on the tab item. This signals that the tab opens a sub-menu or dropdown panel rather than navigating to a new section."]}),e.jsxs("div",{style:d,children:[e.jsx(t,{items:P,type:"default",size:"default",activeId:"tab1"}),e.jsx(t,{items:P,type:"secondary",size:"default",activeId:"tab1"}),e.jsx(t,{items:P,type:"contained",size:"default",activeId:"tab1"})]})]}),e.jsx(n.Section,{title:"Usage guidelines",children:e.jsx(n.DosDonts,{doItem:{icon:e.jsx(t,{items:[{id:"t1",label:"Overview",count:3},{id:"t2",label:"Details"}],type:"default",size:"default",activeId:"t1"}),description:"Use clear, short labels. Keep the active state clearly distinguished with the underline indicator or filled state."},dontItem:{icon:e.jsx(t,{items:[{id:"t1",label:"Overview"},{id:"t2",label:"Details"}],type:"contained",size:"default",activeId:"t1"}),description:"Don't mix underline and contained tab types in the same navigation context."}})}),e.jsx(n.Section,{title:"Design principles",children:e.jsxs(n.Principles,{children:[e.jsx(n.PrincipleCard,{number:1,title:"Clarity",children:'Each tab label must immediately communicate the content behind it. Avoid vague labels like "More" or "Other" without additional context.'}),e.jsx(n.PrincipleCard,{number:2,title:"Consistency",children:"All tabs in a strip must share the same type, size, and badge visibility. Never mix types within a single navigation row."}),e.jsxs(n.PrincipleCard,{number:3,title:"Accessibility",children:["The strip uses ",e.jsx("code",{children:'role="tablist"'})," and each item uses ",e.jsx("code",{children:'role="tab"'}),"with ",e.jsx("code",{children:"aria-selected"})," and ",e.jsx("code",{children:"aria-disabled"})," attributes. Pair tabs with visible panel content."]})]})}),e.jsx(n.Section,{title:"Design tokens",children:e.jsx(n.TokenTable,{tokens:[{name:"--tab-font-family",description:"Font family for all tab labels."},{name:"--tab-font-weight",description:"Font weight for inactive tab labels (light/300)."},{name:"--tab-letter-spacing",description:"Letter spacing applied to all tab text."},{name:"--tab-font-size-sm / -default / -lg",description:"Font size per size scale."},{name:"--tab-line-height-sm / -default / -lg",description:"Line height per size scale."},{name:"--tab-icon-size-sm / -default / -lg",description:"Leading and trailing icon dimensions per size."},{name:"--tab-inner-gap-sm / -default / -lg",description:"Gap between icon, label text, and trailing icon."},{name:"--tab-label-pl-default / pr-default",description:"Left and right outer padding of the label row."},{name:"--tab-spacer-height",description:"Vertical gap between the label row and the underline indicator (4px)."},{name:"--tab-line-width",description:"Thickness of the underline indicator line (2px)."},{name:"--tab-underline-track-color",description:"Default (inactive) underline line color — gray-200."},{name:"--tab-default-line-active",description:"Active underline indicator color for type=default (sky-blue)."},{name:"--tab-secondary-line-active",description:"Active underline indicator color for type=secondary (dark)."},{name:"--tab-contained-bg-default",description:"Background for contained tab in default/inactive state."},{name:"--tab-contained-border-default",description:"Border color for contained tab (inactive)."},{name:"--tab-contained-bg-active",description:"Background for contained tab in active state (solid blue)."},{name:"--tab-dark-bg-default",description:"Background for dark-contained tab in default state."},{name:"--tab-default-badge-bg",description:"Badge background for type=default tabs (sky-blue tint)."},{name:"--tab-secondary-badge-bg",description:"Badge background for type=secondary tabs (sky-blue)."},{name:"--tab-contained-radius",description:"Border-radius of contained tab boxes (6px)."},{name:"--tab-badge-size-default",description:"Minimum width and height of the badge circle."},{name:"--tab-focus-ring-color",description:"Outline color shown on keyboard focus."}]})}),e.jsx(n.Footer,{})]});R.__docgenInfo={description:"",methods:[],displayName:"TabsDocs"};const c=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],N=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7,dropdown:!0},{id:"tab3",label:"Tab label",count:7,dropdown:!0},{id:"tab4",label:"Tab label",count:7,disabled:!0}],p=["small","default","large"],aa=["default","secondary","contained","dark-contained"],ra={title:"Foundation/BuildingBlocks/Tabs",component:t,parameters:{docs:{page:()=>e.jsx(R,{})}},argTypes:{type:{control:"select",options:aa},size:{control:"select",options:p},showBadge:{control:"boolean"},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},activeId:{control:"text"}},args:{items:c,type:"default",size:"default",showBadge:!0,showLeadingIcon:!0,showTrailingIcon:!0,activeId:"tab2"}},f={name:"Documentation",render:()=>e.jsx(R,{}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},x={name:"Playground"},h={name:"All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"16px"},children:p.map(a=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"8px",marginTop:0},children:a}),e.jsx(t,{items:c,size:a,type:"default",activeId:"tab2"})]},a))}),parameters:{controls:{disable:!0}}},v={name:"Default / Small",args:{type:"default",size:"small",activeId:"tab1"}},T={name:"Default / Default",args:{type:"default",size:"default",activeId:"tab2"}},j={name:"Default / Large",args:{type:"default",size:"large",activeId:"tab3"}},z={name:"Secondary / Small",args:{type:"secondary",size:"small",activeId:"tab1"}},S={name:"Secondary / Default",args:{type:"secondary",size:"default",activeId:"tab2"}},I={name:"Secondary / Large",args:{type:"secondary",size:"large",activeId:"tab3"}},w={name:"Contained / Small",args:{type:"contained",size:"small",activeId:"tab1"}},D={name:"Contained / Default",args:{type:"contained",size:"default",activeId:"tab2"}},k={name:"Contained / Large",args:{type:"contained",size:"large",activeId:"tab3"}},_={name:"Dark Contained / Small",args:{type:"dark-contained",size:"small",activeId:"tab1"}},L={name:"Dark Contained / Default",args:{type:"dark-contained",size:"default",activeId:"tab2"}},B={name:"Dark Contained / Large",args:{type:"dark-contained",size:"large",activeId:"tab3"}},C={name:"With Dropdown indicator",args:{items:N,type:"default",activeId:"tab1"}},F={name:"Without Badge",args:{showBadge:!1,type:"default",activeId:"tab1"}},E={name:"Without Icons",args:{showLeadingIcon:!1,showTrailingIcon:!1,type:"default",activeId:"tab1"}},A={name:"Full Design Matrix",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px",padding:"24px"},children:[["default","secondary"].map(a=>e.jsxs("div",{children:[e.jsxs("h3",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",marginTop:0,textTransform:"capitalize"},children:["Type: ",a]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:p.map(o=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"6px",marginTop:0},children:o}),e.jsx(t,{items:c,type:a,size:o,activeId:"tab2"})]},o))})]},a)),e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",marginTop:0},children:"Type: contained"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:p.map(a=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"6px",marginTop:0},children:a}),e.jsx(t,{items:c,type:"contained",size:a,activeId:"tab2"})]},a))})]}),e.jsxs("div",{style:{background:"var(--global-color-neutral-gray-800)",padding:"24px",borderRadius:"8px"},children:[e.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",color:"var(--global-color-neutral-gray-200)",marginBottom:"16px",marginTop:0},children:"Type: dark-contained"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:p.map(a=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",textTransform:"capitalize",marginBottom:"6px",marginTop:0},children:a}),e.jsx(t,{items:c,type:"dark-contained",size:a,activeId:"tab2"})]},a))})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",marginTop:0},children:"With dropdown indicator"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{items:N,type:"default",size:"default",activeId:"tab1"}),e.jsx(t,{items:N,type:"secondary",size:"default",activeId:"tab1"}),e.jsx(t,{items:N,type:"contained",size:"default",activeId:"tab1"})]})]})]}),parameters:{controls:{disable:!0}}};var H,$,G;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=($=f.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var K,Y,J;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(J=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,ee;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(X=h.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ae,te,ne;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Default / Small',
  args: {
    type: 'default',
    size: 'small',
    activeId: 'tab1'
  }
}`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,re,oe;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Default / Default',
  args: {
    type: 'default',
    size: 'default',
    activeId: 'tab2'
  }
}`,...(oe=(re=T.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,le,de;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Default / Large',
  args: {
    type: 'default',
    size: 'large',
    activeId: 'tab3'
  }
}`,...(de=(le=j.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,ue;z.parameters={...z.parameters,docs:{...(ce=z.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Secondary / Small',
  args: {
    type: 'secondary',
    size: 'small',
    activeId: 'tab1'
  }
}`,...(ue=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var be,me,ge;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Secondary / Default',
  args: {
    type: 'secondary',
    size: 'default',
    activeId: 'tab2'
  }
}`,...(ge=(me=S.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ye,fe,xe;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Secondary / Large',
  args: {
    type: 'secondary',
    size: 'large',
    activeId: 'tab3'
  }
}`,...(xe=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var he,ve,Te;w.parameters={...w.parameters,docs:{...(he=w.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Contained / Small',
  args: {
    type: 'contained',
    size: 'small',
    activeId: 'tab1'
  }
}`,...(Te=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var je,ze,Se;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Contained / Default',
  args: {
    type: 'contained',
    size: 'default',
    activeId: 'tab2'
  }
}`,...(Se=(ze=D.parameters)==null?void 0:ze.docs)==null?void 0:Se.source}}};var Ie,we,De;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  name: 'Contained / Large',
  args: {
    type: 'contained',
    size: 'large',
    activeId: 'tab3'
  }
}`,...(De=(we=k.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var ke,_e,Le;_.parameters={..._.parameters,docs:{...(ke=_.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'Dark Contained / Small',
  args: {
    type: 'dark-contained',
    size: 'small',
    activeId: 'tab1'
  }
}`,...(Le=(_e=_.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};var Be,Ce,Fe;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  name: 'Dark Contained / Default',
  args: {
    type: 'dark-contained',
    size: 'default',
    activeId: 'tab2'
  }
}`,...(Fe=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:Fe.source}}};var Ee,Ae,Ne;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Dark Contained / Large',
  args: {
    type: 'dark-contained',
    size: 'large',
    activeId: 'tab3'
  }
}`,...(Ne=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var We,Me,Oe;C.parameters={...C.parameters,docs:{...(We=C.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'With Dropdown indicator',
  args: {
    items: DROPDOWN_ITEMS,
    type: 'default',
    activeId: 'tab1'
  }
}`,...(Oe=(Me=C.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Pe,Re,Ue;F.parameters={...F.parameters,docs:{...(Pe=F.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'Without Badge',
  args: {
    showBadge: false,
    type: 'default',
    activeId: 'tab1'
  }
}`,...(Ue=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:Ue.source}}};var Ve,qe,Ze;E.parameters={...E.parameters,docs:{...(Ve=E.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Without Icons',
  args: {
    showLeadingIcon: false,
    showTrailingIcon: false,
    type: 'default',
    activeId: 'tab1'
  }
}`,...(Ze=(qe=E.parameters)==null?void 0:qe.docs)==null?void 0:Ze.source}}};var He,$e,Ge;A.parameters={...A.parameters,docs:{...(He=A.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ge=($e=A.parameters)==null?void 0:$e.docs)==null?void 0:Ge.source}}};const oa=["Documentation","Playground","AllSizes","TypeDefaultSmall","TypeDefaultDefault","TypeDefaultLarge","TypeSecondarySmall","TypeSecondaryDefault","TypeSecondaryLarge","TypeContainedSmall","TypeContainedDefault","TypeContainedLarge","TypeDarkSmall","TypeDarkDefault","TypeDarkLarge","WithDropdown","WithoutBadge","WithoutIcons","FullMatrix"];export{h as AllSizes,f as Documentation,A as FullMatrix,x as Playground,D as TypeContainedDefault,k as TypeContainedLarge,w as TypeContainedSmall,L as TypeDarkDefault,B as TypeDarkLarge,_ as TypeDarkSmall,T as TypeDefaultDefault,j as TypeDefaultLarge,v as TypeDefaultSmall,S as TypeSecondaryDefault,I as TypeSecondaryLarge,z as TypeSecondarySmall,C as WithDropdown,F as WithoutBadge,E as WithoutIcons,oa as __namedExportsOrder,ra as default};
