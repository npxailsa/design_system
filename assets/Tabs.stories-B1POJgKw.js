import{r as Ja,j as a}from"./iframe-DR308Pqm.js";import{D as r}from"./DocsTemplate-BFPhN50V.js";import"./preload-helper-Dp1pzeXC.js";const Ka="_tabs_1ykw2_7",Qa="_tab_1ykw2_7",Xa="_disabled_1ykw2_93",Ya="_active_1ykw2_99",n={tabs:Ka,"tabs-variant-underline":"_tabs-variant-underline_1ykw2_16","tabs-variant-pill":"_tabs-variant-pill_1ykw2_22",tab:Qa,"size-small":"_size-small_1ykw2_56","size-default":"_size-default_1ykw2_64","size-large":"_size-large_1ykw2_72","variant-underline":"_variant-underline_1ykw2_84",disabled:Xa,active:Ya,"variant-pill":"_variant-pill_1ykw2_115","appearance-default":"_appearance-default_1ykw2_115","appearance-alt":"_appearance-alt_1ykw2_148","appearance-dark":"_appearance-dark_1ykw2_181","tab-icon":"_tab-icon_1ykw2_210","tab-trailing-icon":"_tab-trailing-icon_1ykw2_211","tab-label":"_tab-label_1ykw2_237","tab-badge":"_tab-badge_1ykw2_242"},ae=({className:e})=>a.jsx("svg",{className:e,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:a.jsx("path",{d:"M7.99935 2.66663C8.70659 2.66663 9.38487 2.94758 9.88497 3.44767C10.3851 3.94777 10.666 4.62605 10.666 5.33329C10.666 6.04054 10.3851 6.71881 9.88497 7.21891C9.38487 7.71901 8.70659 7.99996 7.99935 7.99996C7.29211 7.99996 6.61383 7.71901 6.11373 7.21891C5.61363 6.71881 5.33268 6.04054 5.33268 5.33329C5.33268 4.62605 5.61363 3.94777 6.11373 3.44767C6.61383 2.94758 7.29211 2.66663 7.99935 2.66663ZM7.99935 9.33329C10.946 9.33329 13.3327 10.5266 13.3327 12V13.3333H2.66602V12C2.66602 10.5266 5.05268 9.33329 7.99935 9.33329Z",fill:"currentColor"})}),ee=({className:e})=>a.jsx("svg",{className:e,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:a.jsx("path",{d:"M2.66602 7.3333V8.66664H10.666L6.99935 12.3333L7.94602 13.28L13.226 7.99997L7.94602 2.71997L6.99935 3.66664L10.666 7.3333H2.66602Z",fill:"currentColor"})}),te=({className:e})=>a.jsx("svg",{className:e,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:a.jsx("path",{d:"M4 6L8 10L12 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),re=({item:e,isActive:l,size:d,variant:W,appearance:u,showLeadingIcon:m,showTrailingIcon:I,onClick:U})=>{const C=e.leadingIcon??ae,E=[n.tab,n[`size-${d}`],n[`variant-${W}`],n[`appearance-${u}`],l?n.active:"",e.disabled?n.disabled:""].filter(Boolean).join(" ");return a.jsxs("button",{type:"button",role:"tab","aria-selected":l,"aria-disabled":e.disabled,disabled:e.disabled,className:E,onClick:()=>!e.disabled&&U(e.id),children:[m&&a.jsx("span",{className:n["tab-icon"],children:a.jsx(C,{})}),a.jsx("span",{className:n["tab-label"],children:e.label}),I&&a.jsx("span",{className:n["tab-trailing-icon"],children:e.dropdown?a.jsx(te,{}):a.jsx(ee,{})}),e.count!==void 0&&a.jsx("span",{className:n["tab-badge"],children:e.count})]})},t=({tabs:e,activeTab:l,onTabChange:d,size:W="default",variant:u="underline",appearance:m="default",showLeadingIcon:I=!0,showTrailingIcon:U=!0,className:C=""})=>{var N;const[E,Za]=Ja.useState(l??((N=e[0])==null?void 0:N.id)??""),$a=l??E,Ha=o=>{Za(o),d==null||d(o)},Ga=[n.tabs,n[`tabs-variant-${u}`],n[`tabs-appearance-${m}`],C].filter(Boolean).join(" ");return a.jsx("div",{role:"tablist","aria-orientation":"horizontal",className:Ga,children:e.map(o=>a.jsx(re,{item:o,isActive:$a===o.id,size:W,variant:u,appearance:m,showLeadingIcon:I,showTrailingIcon:U,onClick:Ha},o.id))})};t.__docgenInfo={description:`Tabs — A flexible tab navigation component supporting underline and pill
variants, three sizes, and multiple appearance modes (default, alt, dark).

Location: Foundation/BuildingBlocks/Tabs`,methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Array of tab items to render"},activeTab:{required:!1,tsType:{name:"string"},description:"Currently active tab id"},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when a tab is clicked"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Visual size of the tabs",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'underline' | 'pill'",elements:[{name:"literal",value:"'underline'"},{name:"literal",value:"'pill'"}]},description:"Underline style vs pill/bordered style",defaultValue:{value:"'underline'",computed:!1}},appearance:{required:!1,tsType:{name:"union",raw:"'default' | 'alt' | 'dark'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'alt'"},{name:"literal",value:"'dark'"}]},description:"Color appearance: default (outlined/underline), alt (blue tinted pill), dark (navy filled)",defaultValue:{value:"'default'",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show a leading icon on each tab",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show a trailing icon (arrow) on each tab",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}}}};const i=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],R=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7,dropdown:!0},{id:"tab3",label:"Tab label",count:7,dropdown:!0},{id:"tab4",label:"Tab label",count:7,disabled:!0}],c={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},ie={...c,background:"var(--global-color-neutral-gray-800)"},ne=()=>a.jsx("div",{style:{padding:"24px 0"},children:a.jsx(t,{tabs:i.slice(0,1),size:"default",variant:"pill",appearance:"default",activeTab:"tab1"})}),O=()=>a.jsxs(r,{children:[a.jsx(r.Header,{title:"Tabs",subtitle:"Navigation tabs supporting underline and pill variants, three sizes, and multiple color appearances."}),a.jsxs(r.BodyText,{children:["The ",a.jsx("strong",{children:"Tabs"})," component provides a standard tab navigation pattern. It supports two visual variants — an ",a.jsx("strong",{children:"underline"})," style for inline or page-level navigation, and a ",a.jsx("strong",{children:"pill"})," style for grouped actions or section switching. Each tab can display an optional leading icon, trailing icon or dropdown indicator, and a numeric badge count."]}),a.jsx(r.Section,{title:"Anatomy",children:a.jsx(r.Anatomy,{preview:a.jsx(ne,{}),parts:[{id:1,name:"Leading icon",token:"--tab-icon-size-default",description:"Optional 16 × 16 icon placed before the label."},{id:2,name:"Label",token:"--tab-font-size-default, --tab-font-family",description:"Short, descriptive text identifying the tab panel."},{id:3,name:"Trailing icon",token:"--tab-icon-size-default",description:"Arrow-right (navigation) or chevron-down (dropdown trigger)."},{id:4,name:"Badge",token:"--tab-badge-bg, --tab-badge-color",description:"Circular numeric indicator showing counts or notifications."}]})}),a.jsxs(r.Section,{title:"Sizes",children:[a.jsxs(r.BodyText,{children:["Three sizes are available — ",a.jsx("strong",{children:"small"}),", ",a.jsx("strong",{children:"default"}),", and ",a.jsx("strong",{children:"large"}),". Size controls the tab height, font size, and inner padding."]}),a.jsx(r.SizeDemo,{rows:[{label:"Small",children:a.jsx(t,{tabs:i,size:"small",variant:"pill",appearance:"default",activeTab:"tab1"})},{label:"Default",children:a.jsx(t,{tabs:i,size:"default",variant:"pill",appearance:"default",activeTab:"tab1"})},{label:"Large",children:a.jsx(t,{tabs:i,size:"large",variant:"pill",appearance:"default",activeTab:"tab1"})}]})]}),a.jsxs(r.Section,{title:"Variants",children:[a.jsxs(r.Subsection,{title:"Underline",children:[a.jsx(r.BodyText,{children:"The underline variant shows a subtle bottom indicator on the active tab. Used for primary page-level navigation where visual weight should remain minimal."}),a.jsxs("div",{style:c,children:[a.jsx(t,{tabs:i,size:"small",variant:"underline",activeTab:"tab1"}),a.jsx(t,{tabs:i,size:"default",variant:"underline",activeTab:"tab2"}),a.jsx(t,{tabs:i,size:"large",variant:"underline",activeTab:"tab3"})]})]}),a.jsxs(r.Subsection,{title:"Pill — Default (Blue outlined)",children:[a.jsx(r.BodyText,{children:"The pill default appearance renders each tab with a blue border and very light blue background. Active state fills the tab with a solid blue. Suitable for light backgrounds."}),a.jsxs("div",{style:c,children:[a.jsx(t,{tabs:i,size:"small",variant:"pill",appearance:"default",activeTab:"tab1"}),a.jsx(t,{tabs:i,size:"default",variant:"pill",appearance:"default",activeTab:"tab2"}),a.jsx(t,{tabs:i,size:"large",variant:"pill",appearance:"default",activeTab:"tab3"})]})]}),a.jsxs(r.Subsection,{title:"Pill — Alt (Light blue tint)",children:[a.jsx(r.BodyText,{children:"The alt appearance is a slightly more saturated blue-tint variant, ideal for use on white or off-white surfaces where stronger contrast is needed."}),a.jsxs("div",{style:c,children:[a.jsx(t,{tabs:i,size:"small",variant:"pill",appearance:"alt",activeTab:"tab1"}),a.jsx(t,{tabs:i,size:"default",variant:"pill",appearance:"alt",activeTab:"tab2"}),a.jsx(t,{tabs:i,size:"large",variant:"pill",appearance:"alt",activeTab:"tab3"})]})]}),a.jsxs(r.Subsection,{title:"Pill — Dark (Navy / charcoal)",children:[a.jsx(r.BodyText,{children:"The dark appearance is designed for use on dark or navy backgrounds. Tabs render with a charcoal fill, and the active tab uses a deeper shade."}),a.jsxs("div",{style:ie,children:[a.jsx(t,{tabs:i,size:"small",variant:"pill",appearance:"dark",activeTab:"tab1"}),a.jsx(t,{tabs:i,size:"default",variant:"pill",appearance:"dark",activeTab:"tab2"}),a.jsx(t,{tabs:i,size:"large",variant:"pill",appearance:"dark",activeTab:"tab3"})]})]})]}),a.jsxs(r.Section,{title:"Dropdown indicator",children:[a.jsxs(r.BodyText,{children:["Individual tabs can show a ",a.jsx("strong",{children:"chevron-down"})," icon instead of the arrow-right, signaling that the tab triggers a dropdown or sub-menu. Set ",a.jsx("code",{children:"dropdown: true"})," on the individual tab item."]}),a.jsxs("div",{style:c,children:[a.jsx(t,{tabs:R,size:"default",variant:"underline",activeTab:"tab1"}),a.jsx(t,{tabs:R,size:"default",variant:"pill",appearance:"default",activeTab:"tab1"})]})]}),a.jsx(r.Section,{title:"Usage guidelines",children:a.jsx(r.DosDonts,{doItem:{icon:a.jsx(t,{tabs:[{id:"t1",label:"Overview",count:3},{id:"t2",label:"Details"}],size:"default",variant:"pill",appearance:"default",activeTab:"t1"}),description:"Use clear, concise labels. Limit each row to 6 or fewer tabs with a shared visual style."},dontItem:{icon:a.jsx(t,{tabs:[{id:"t1",label:"Overview"},{id:"t2",label:"Details"}],size:"default",variant:"underline",activeTab:"t1"}),description:"Don't mix underline and pill tab styles in the same navigation context."}})}),a.jsx(r.Section,{title:"Design principles",children:a.jsxs(r.Principles,{children:[a.jsx(r.PrincipleCard,{number:1,title:"Clarity",children:'Each tab label must immediately communicate the content behind it. Avoid vague labels like "More" or "Other" without disambiguation.'}),a.jsx(r.PrincipleCard,{number:2,title:"Consistency",children:"All tabs within a single group must share the same size, variant, and appearance. Mixing visual styles within a tab list breaks visual hierarchy."}),a.jsxs(r.PrincipleCard,{number:3,title:"Accessibility",children:["The component uses semantic ",a.jsx("code",{children:'role="tablist"'})," and ",a.jsx("code",{children:'role="tab"'}),"with ",a.jsx("code",{children:"aria-selected"})," and ",a.jsx("code",{children:"aria-disabled"})," attributes. Always pair tabs with their associated panel content using ",a.jsx("code",{children:"aria-controls"}),"."]})]})}),a.jsx(r.Section,{title:"Design tokens",children:a.jsx(r.TokenTable,{tokens:[{name:"--tab-font-family",description:"Font family used across all tab labels."},{name:"--tab-font-weight",description:"Default (inactive) font weight."},{name:"--tab-font-weight-active",description:"Font weight for the active/selected tab."},{name:"--tab-letter-spacing",description:"Letter spacing applied to all tab labels."},{name:"--tab-disabled-opacity",description:"Opacity applied to disabled tab items (0.45)."},{name:"--tab-height-sm",description:"Minimum height for the small tab size."},{name:"--tab-height-default",description:"Minimum height for the default tab size."},{name:"--tab-height-lg",description:"Minimum height for the large tab size."},{name:"--tab-font-size-sm",description:"Font size for the small tab (maps to label-xs)."},{name:"--tab-font-size-default",description:"Font size for the default tab (maps to label)."},{name:"--tab-font-size-lg",description:"Font size for the large tab (maps to label-lg)."},{name:"--tab-padding-h-default",description:"Horizontal padding for default size tab."},{name:"--tab-padding-v-default",description:"Vertical padding for default size tab."},{name:"--tab-inner-gap-default",description:"Gap between icon, label, and badge."},{name:"--tab-pill-radius",description:"Border-radius for pill variant tabs (4px)."},{name:"--tab-pill-border-width",description:"Border width for pill tabs (1px)."},{name:"--tab-underline-track-color",description:"Color of the base line in underline variant."},{name:"--tab-underline-indicator-color-active",description:"Color of the underline indicator when active."},{name:"--tab-pill-default-bg",description:"Background for default pill tab (inactive)."},{name:"--tab-pill-default-border",description:"Border color for default pill tab."},{name:"--tab-pill-default-bg-active",description:"Background for default pill tab (active)."},{name:"--tab-pill-dark-bg",description:"Background for dark-appearance pill tab."},{name:"--tab-badge-bg",description:"Default badge background color."},{name:"--tab-badge-color",description:"Default badge text/icon color."},{name:"--tab-badge-min-size",description:"Minimum size (width and height) of the badge."},{name:"--tab-focus-ring-color",description:"Outline color shown on keyboard focus."}]})}),a.jsx(r.Footer,{})]});O.__docgenInfo={description:"",methods:[],displayName:"TabsDocs"};const s=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7},{id:"tab3",label:"Tab label",count:7},{id:"tab4",label:"Tab label",count:7,disabled:!0}],p=[{id:"tab1",label:"Tab label",count:7},{id:"tab2",label:"Tab label",count:7,dropdown:!0},{id:"tab3",label:"Tab label",count:7,dropdown:!0},{id:"tab4",label:"Tab label",count:7,disabled:!0}],b=["small","default","large"],le=["default","alt","dark"],ce={title:"Foundation/BuildingBlocks/Tabs",component:t,parameters:{docs:{page:()=>a.jsx(O,{})}},argTypes:{size:{control:"select",options:["small","default","large"]},variant:{control:"select",options:["underline","pill"]},appearance:{control:"select",options:["default","alt","dark"]},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},activeTab:{control:"text"}},args:{tabs:s,size:"default",variant:"underline",appearance:"default",showLeadingIcon:!0,showTrailingIcon:!0,activeTab:"tab1"}},g={name:"Documentation",render:()=>a.jsx(O,{}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},v={name:"Playground"},f={name:"All Sizes",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"16px"},children:b.map(e=>a.jsxs("div",{children:[a.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-600)",textTransform:"capitalize",marginBottom:"8px",marginTop:0},children:e}),a.jsx(t,{tabs:s,size:e,variant:"pill",appearance:"default",activeTab:"tab1"})]},e))}),parameters:{controls:{disable:!0}}},x={name:"Underline / Small",args:{size:"small",variant:"underline",activeTab:"tab1"}},h={name:"Underline / Default",args:{size:"default",variant:"underline",activeTab:"tab1"}},y={name:"Underline / Large",args:{size:"large",variant:"underline",activeTab:"tab1"}},T={name:"Underline / All Sizes",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"16px"},children:b.map(e=>a.jsxs("div",{children:[a.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-600)",textTransform:"capitalize",marginBottom:"8px",marginTop:0},children:e}),a.jsx(t,{tabs:s,size:e,variant:"underline",activeTab:"tab2"})]},e))}),parameters:{controls:{disable:!0}}},z={name:"Pill / Small",args:{size:"small",variant:"pill",appearance:"default",activeTab:"tab1"}},j={name:"Pill / Default",args:{size:"default",variant:"pill",appearance:"default",activeTab:"tab1"}},w={name:"Pill / Large",args:{size:"large",variant:"pill",appearance:"default",activeTab:"tab1"}},S={name:"Appearance / Default",args:{variant:"pill",appearance:"default",activeTab:"tab1"}},D={name:"Appearance / Alt",args:{variant:"pill",appearance:"alt",activeTab:"tab1"}},k={name:"Appearance / Dark",args:{variant:"pill",appearance:"dark",activeTab:"tab1"},parameters:{backgrounds:{default:"dark"}}},A={name:"All Appearances",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[a.jsxs("div",{children:[a.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-600)",marginBottom:"8px",marginTop:0},children:"Default"}),a.jsx(t,{tabs:s,size:"default",variant:"pill",appearance:"default",activeTab:"tab1"})]}),a.jsxs("div",{children:[a.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-600)",marginBottom:"8px",marginTop:0},children:"Alt"}),a.jsx(t,{tabs:s,size:"default",variant:"pill",appearance:"alt",activeTab:"tab1"})]}),a.jsxs("div",{style:{background:"var(--global-color-neutral-gray-800)",padding:"16px",borderRadius:"8px"},children:[a.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-300)",marginBottom:"8px",marginTop:0},children:"Dark"}),a.jsx(t,{tabs:s,size:"default",variant:"pill",appearance:"dark",activeTab:"tab1"})]})]}),parameters:{controls:{disable:!0}}},_={name:"With Dropdown indicator",args:{tabs:p,size:"default",variant:"underline",activeTab:"tab1"}},B={name:"Pill / With Dropdown",args:{tabs:p,size:"default",variant:"pill",appearance:"default",activeTab:"tab1"}},L={name:"Without Icons",args:{size:"default",variant:"pill",appearance:"default",activeTab:"tab1",showLeadingIcon:!1,showTrailingIcon:!1}},F={name:"Without Badge",args:{tabs:[{id:"tab1",label:"Tab label"},{id:"tab2",label:"Tab label"},{id:"tab3",label:"Tab label"},{id:"tab4",label:"Tab label",disabled:!0}],size:"default",variant:"pill",appearance:"default",activeTab:"tab1"}},P={name:"Full Design Matrix",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px",padding:"24px"},children:[a.jsxs("div",{children:[a.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"14px",color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",marginTop:0},children:"Underline variant"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:b.map(e=>a.jsxs("div",{children:[a.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"6px",marginTop:0},children:e}),a.jsx(t,{tabs:s,size:e,variant:"underline",activeTab:"tab2"})]},e))})]}),le.filter(e=>e!=="dark").map(e=>a.jsxs("div",{children:[a.jsxs("h3",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"14px",color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",marginTop:0},children:["Pill — ",e]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:b.map(l=>a.jsxs("div",{children:[a.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"6px",marginTop:0},children:l}),a.jsx(t,{tabs:s,size:l,variant:"pill",appearance:e,activeTab:"tab2"})]},l))})]},e)),a.jsxs("div",{style:{background:"var(--global-color-neutral-gray-800)",padding:"24px",borderRadius:"8px"},children:[a.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"14px",color:"var(--global-color-neutral-gray-200)",marginBottom:"16px",marginTop:0},children:"Pill — dark"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:b.map(e=>a.jsxs("div",{children:[a.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",textTransform:"capitalize",marginBottom:"6px",marginTop:0},children:e}),a.jsx(t,{tabs:s,size:e,variant:"pill",appearance:"dark",activeTab:"tab2"})]},e))})]}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"14px",color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",marginTop:0},children:"With dropdown indicator"}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(t,{tabs:p,size:"default",variant:"underline",activeTab:"tab1"}),a.jsx(t,{tabs:p,size:"default",variant:"pill",appearance:"default",activeTab:"tab1"}),a.jsx(t,{tabs:p,size:"default",variant:"pill",appearance:"alt",activeTab:"tab1"})]})]})]}),parameters:{controls:{disable:!0}}};var M,V,q;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(q=(V=g.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var Z,$,H;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(H=($=v.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var G,J,K;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-600)',
        textTransform: 'capitalize',
        marginBottom: '8px',
        marginTop: 0
      }}>
            {size}
          </p>
          <Tabs tabs={DEFAULT_TABS} size={size} variant="pill" appearance="default" activeTab="tab1" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Underline / Small',
  args: {
    size: 'small',
    variant: 'underline',
    activeTab: 'tab1'
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var aa,ea,ta;h.parameters={...h.parameters,docs:{...(aa=h.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: 'Underline / Default',
  args: {
    size: 'default',
    variant: 'underline',
    activeTab: 'tab1'
  }
}`,...(ta=(ea=h.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var ra,ia,na;y.parameters={...y.parameters,docs:{...(ra=y.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: 'Underline / Large',
  args: {
    size: 'large',
    variant: 'underline',
    activeTab: 'tab1'
  }
}`,...(na=(ia=y.parameters)==null?void 0:ia.docs)==null?void 0:na.source}}};var la,sa,oa;T.parameters={...T.parameters,docs:{...(la=T.parameters)==null?void 0:la.docs,source:{originalSource:`{
  name: 'Underline / All Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '16px'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-600)',
        textTransform: 'capitalize',
        marginBottom: '8px',
        marginTop: 0
      }}>
            {size}
          </p>
          <Tabs tabs={DEFAULT_TABS} size={size} variant="underline" activeTab="tab2" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oa=(sa=T.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var da,ca,pa;z.parameters={...z.parameters,docs:{...(da=z.parameters)==null?void 0:da.docs,source:{originalSource:`{
  name: 'Pill / Small',
  args: {
    size: 'small',
    variant: 'pill',
    appearance: 'default',
    activeTab: 'tab1'
  }
}`,...(pa=(ca=z.parameters)==null?void 0:ca.docs)==null?void 0:pa.source}}};var ba,ua,ma;j.parameters={...j.parameters,docs:{...(ba=j.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  name: 'Pill / Default',
  args: {
    size: 'default',
    variant: 'pill',
    appearance: 'default',
    activeTab: 'tab1'
  }
}`,...(ma=(ua=j.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var ga,va,fa;w.parameters={...w.parameters,docs:{...(ga=w.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  name: 'Pill / Large',
  args: {
    size: 'large',
    variant: 'pill',
    appearance: 'default',
    activeTab: 'tab1'
  }
}`,...(fa=(va=w.parameters)==null?void 0:va.docs)==null?void 0:fa.source}}};var xa,ha,ya;S.parameters={...S.parameters,docs:{...(xa=S.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  name: 'Appearance / Default',
  args: {
    variant: 'pill',
    appearance: 'default',
    activeTab: 'tab1'
  }
}`,...(ya=(ha=S.parameters)==null?void 0:ha.docs)==null?void 0:ya.source}}};var Ta,za,ja;D.parameters={...D.parameters,docs:{...(Ta=D.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  name: 'Appearance / Alt',
  args: {
    variant: 'pill',
    appearance: 'alt',
    activeTab: 'tab1'
  }
}`,...(ja=(za=D.parameters)==null?void 0:za.docs)==null?void 0:ja.source}}};var wa,Sa,Da;k.parameters={...k.parameters,docs:{...(wa=k.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  name: 'Appearance / Dark',
  args: {
    variant: 'pill',
    appearance: 'dark',
    activeTab: 'tab1'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(Da=(Sa=k.parameters)==null?void 0:Sa.docs)==null?void 0:Da.source}}};var ka,Aa,_a;A.parameters={...A.parameters,docs:{...(ka=A.parameters)==null?void 0:ka.docs,source:{originalSource:`{
  name: 'All Appearances',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '16px'
  }}>
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-600)',
        marginBottom: '8px',
        marginTop: 0
      }}>Default</p>
        <Tabs tabs={DEFAULT_TABS} size="default" variant="pill" appearance="default" activeTab="tab1" />
      </div>
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-600)',
        marginBottom: '8px',
        marginTop: 0
      }}>Alt</p>
        <Tabs tabs={DEFAULT_TABS} size="default" variant="pill" appearance="alt" activeTab="tab1" />
      </div>
      <div style={{
      background: 'var(--global-color-neutral-gray-800)',
      padding: '16px',
      borderRadius: '8px'
    }}>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-300)',
        marginBottom: '8px',
        marginTop: 0
      }}>Dark</p>
        <Tabs tabs={DEFAULT_TABS} size="default" variant="pill" appearance="dark" activeTab="tab1" />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_a=(Aa=A.parameters)==null?void 0:Aa.docs)==null?void 0:_a.source}}};var Ba,La,Fa;_.parameters={..._.parameters,docs:{...(Ba=_.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  name: 'With Dropdown indicator',
  args: {
    tabs: DROPDOWN_TABS,
    size: 'default',
    variant: 'underline',
    activeTab: 'tab1'
  }
}`,...(Fa=(La=_.parameters)==null?void 0:La.docs)==null?void 0:Fa.source}}};var Pa,Wa,Ia;B.parameters={...B.parameters,docs:{...(Pa=B.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  name: 'Pill / With Dropdown',
  args: {
    tabs: DROPDOWN_TABS,
    size: 'default',
    variant: 'pill',
    appearance: 'default',
    activeTab: 'tab1'
  }
}`,...(Ia=(Wa=B.parameters)==null?void 0:Wa.docs)==null?void 0:Ia.source}}};var Ua,Ca,Ea;L.parameters={...L.parameters,docs:{...(Ua=L.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  name: 'Without Icons',
  args: {
    size: 'default',
    variant: 'pill',
    appearance: 'default',
    activeTab: 'tab1',
    showLeadingIcon: false,
    showTrailingIcon: false
  }
}`,...(Ea=(Ca=L.parameters)==null?void 0:Ca.docs)==null?void 0:Ea.source}}};var Oa,Na,Ra;F.parameters={...F.parameters,docs:{...(Oa=F.parameters)==null?void 0:Oa.docs,source:{originalSource:`{
  name: 'Without Badge',
  args: {
    tabs: [{
      id: 'tab1',
      label: 'Tab label'
    }, {
      id: 'tab2',
      label: 'Tab label'
    }, {
      id: 'tab3',
      label: 'Tab label'
    }, {
      id: 'tab4',
      label: 'Tab label',
      disabled: true
    }],
    size: 'default',
    variant: 'pill',
    appearance: 'default',
    activeTab: 'tab1'
  }
}`,...(Ra=(Na=F.parameters)==null?void 0:Na.docs)==null?void 0:Ra.source}}};var Ma,Va,qa;P.parameters={...P.parameters,docs:{...(Ma=P.parameters)==null?void 0:Ma.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '48px',
    padding: '24px'
  }}>
      {/* Underline rows */}
      <div>
        <h3 style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '14px',
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '16px',
        marginTop: 0
      }}>
          Underline variant
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
              <Tabs tabs={DEFAULT_TABS} size={size} variant="underline" activeTab="tab2" />
            </div>)}
        </div>
      </div>

      {/* Pill appearances */}
      {ALL_APPEARANCES.filter(a => a !== 'dark').map(appearance => <div key={appearance}>
          <h3 style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '14px',
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '16px',
        marginTop: 0
      }}>
            Pill — {appearance}
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
                <Tabs tabs={DEFAULT_TABS} size={size} variant="pill" appearance={appearance} activeTab="tab2" />
              </div>)}
          </div>
        </div>)}

      {/* Dark */}
      <div style={{
      background: 'var(--global-color-neutral-gray-800)',
      padding: '24px',
      borderRadius: '8px'
    }}>
        <h3 style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '14px',
        color: 'var(--global-color-neutral-gray-200)',
        marginBottom: '16px',
        marginTop: 0
      }}>
          Pill — dark
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
              <Tabs tabs={DEFAULT_TABS} size={size} variant="pill" appearance="dark" activeTab="tab2" />
            </div>)}
        </div>
      </div>

      {/* Dropdown rows */}
      <div>
        <h3 style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '14px',
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
          <Tabs tabs={DROPDOWN_TABS} size="default" variant="underline" activeTab="tab1" />
          <Tabs tabs={DROPDOWN_TABS} size="default" variant="pill" appearance="default" activeTab="tab1" />
          <Tabs tabs={DROPDOWN_TABS} size="default" variant="pill" appearance="alt" activeTab="tab1" />
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(qa=(Va=P.parameters)==null?void 0:Va.docs)==null?void 0:qa.source}}};const pe=["Documentation","Playground","AllSizes","UnderlineSmall","UnderlineDefault","UnderlineLarge","UnderlineAllSizes","PillSmall","PillDefault","PillLarge","AppearanceDefault","AppearanceAlt","AppearanceDark","AllAppearances","WithDropdown","PillWithDropdown","WithoutIcons","WithoutBadge","FullMatrix"];export{A as AllAppearances,f as AllSizes,D as AppearanceAlt,k as AppearanceDark,S as AppearanceDefault,g as Documentation,P as FullMatrix,j as PillDefault,w as PillLarge,z as PillSmall,B as PillWithDropdown,v as Playground,T as UnderlineAllSizes,h as UnderlineDefault,y as UnderlineLarge,x as UnderlineSmall,_ as WithDropdown,F as WithoutBadge,L as WithoutIcons,pe as __namedExportsOrder,ce as default};
