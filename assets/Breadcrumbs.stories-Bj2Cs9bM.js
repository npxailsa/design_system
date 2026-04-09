import{j as e}from"./iframe-B1rlHYVG.js";import{D as a}from"./DocsTemplate-7yc-VS5i.js";import"./preload-helper-Dp1pzeXC.js";const J="_root_11nu1_7",ee="_list_11nu1_13",ae="_item_11nu1_24",re="_separator_11nu1_31",ne="_link_11nu1_39",te="_linkButton_11nu1_57",se="_current_11nu1_66",n={root:J,list:ee,item:ae,separator:re,link:ne,linkButton:te,current:se,"root--sm":"_root--sm_11nu1_82","root--default":"_root--default_11nu1_90","root--lg":"_root--lg_11nu1_98"},le=({className:r})=>e.jsx("svg",{className:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M6 3.5L10.5 8L6 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),t=({items:r,size:U="default",ariaLabel:Y="Breadcrumb",className:Z=""})=>{const X=[n.root,n[`root--${U}`],Z].filter(Boolean).join(" ");return e.jsx("nav",{"aria-label":Y,className:X,children:e.jsx("ol",{className:n.list,children:r.map((s,f)=>{const $=f===r.length-1;return e.jsxs("li",{className:n.item,children:[f>0&&e.jsx(le,{className:n.separator}),$?e.jsx("span",{className:n.current,"aria-current":"page",children:s.label}):s.href?e.jsx("a",{href:s.href,className:n.link,onClick:s.onClick,children:s.label}):e.jsx("button",{type:"button",className:[n.link,n.linkButton].join(" "),onClick:s.onClick,children:s.label})]},f)})})})};t.__docgenInfo={description:"Breadcrumbs — Foundation / BuildingBlocks / Breadcrumbs\n\nRenders an accessible, token-driven breadcrumb trail. The last item in\n`items` is treated as the current page and is rendered as bold text\n(non-interactive). All preceding items are rendered as links.\n\nThree size variants are available: `sm`, `default`, and `lg`.",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Ordered list of breadcrumb items. The last item is always the current page."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"Size scale — affects font size, separator size and gap.",defaultValue:{value:"'default'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for the <nav> landmark.",defaultValue:{value:"'Breadcrumb'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element.",defaultValue:{value:"''",computed:!1}}}};const v=["sm","default","lg"],y={sm:"Small",default:"Default",lg:"Large"},l=[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}],ie=[{label:"Finance",href:"#"},{label:"Reports"}],i={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-8px)"},x=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Breadcrumbs",subtitle:"An accessible, token-driven breadcrumb trail with three size variants. Used to communicate location within a hierarchical navigation structure."}),e.jsxs(a.BodyText,{children:["The ",e.jsx("strong",{children:"Breadcrumbs"})," component renders an ordered list of navigation links reflecting the current page's position within the site hierarchy. All preceding items are interactive links; the last item is the current page — rendered as non-interactive bold text with ",e.jsx("code",{children:'aria-current="page"'}),". Three size variants — ",e.jsx("em",{children:"Small"}),", ",e.jsx("em",{children:"Default"}),", and ",e.jsx("em",{children:"Large"})," — map directly to design tokens for font size, separator size, and item gap."]}),e.jsx(a.Section,{title:"Component Anatomy",children:e.jsx(a.Anatomy,{preview:e.jsx("div",{style:i,children:e.jsx(t,{items:l,size:"lg"})}),parts:[{id:1,name:"Nav Landmark",token:'aria-label="Breadcrumb"',description:"Wraps the entire trail in a <nav> element, making it discoverable by assistive technology as a landmark region."},{id:2,name:"Link Crumb",token:`--breadcrumbs-link-color
--breadcrumbs-link-hover
--breadcrumbs-link-weight`,description:"Each non-current item rendered as an anchor or button. Colour and hover state are token-driven."},{id:3,name:"Separator",token:`--breadcrumbs-separator-color
--breadcrumbs-separator-size-{size}`,description:"Chevron-right SVG icon positioned between items. Size scales with the chosen size variant."},{id:4,name:"Current Crumb",token:`--breadcrumbs-current-color
--breadcrumbs-current-weight`,description:'The last item — the active/current page. Rendered in bold, dark text with aria-current="page".'}]})}),e.jsxs(a.Section,{title:"Size Variants",children:[e.jsx(a.BodyText,{children:"Three sizes are available. Each maps to a specific type size, separator icon size, and gap token. Choose the size that best fits the surrounding typographic hierarchy."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:v.map(r=>e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-8px)",fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontWeight:"var(--global-type-weight-medium)"},children:y[r]}),e.jsx("div",{style:i,children:e.jsx(t,{items:l,size:r})})]},r))})]}),e.jsx(a.Section,{title:"All Sizes — Side by Side",children:e.jsx("div",{style:{...i,gap:"var(--global-spacing-sizing-20px)"},children:v.map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{width:"56px",flexShrink:0,fontSize:"11px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--font-family-primary)"},children:y[r]}),e.jsx(t,{items:l,size:r})]},r))})}),e.jsxs(a.Section,{title:"Two-Level Trail",children:[e.jsx(a.BodyText,{children:"A minimal trail with one ancestor link and the current page — the most common pattern for first-level page navigation."}),e.jsx("div",{style:i,children:e.jsx(t,{items:ie,size:"default"})})]}),e.jsx(a.Section,{title:"Design Tokens",children:e.jsx(a.TokenTable,{tokens:[{name:"--breadcrumbs-font-family",description:"Typeface used for all breadcrumb text. Resolves to var(--font-family-primary)."},{name:"--breadcrumbs-letter-spacing",description:"Letter spacing applied to all text nodes. Resolves to var(--global-type-letter-spacing-primary-label)."},{name:"--breadcrumbs-font-size-sm",description:"Font size for the small variant — 12px via var(--global-type-size-primary-label-xs)."},{name:"--breadcrumbs-font-size-default",description:"Font size for the default variant — 14px via var(--global-type-size-primary-label-sm)."},{name:"--breadcrumbs-font-size-lg",description:"Font size for the large variant — 16px via var(--global-type-size-primary-label)."},{name:"--breadcrumbs-gap-sm",description:"Gap between items and separator for small — 4px."},{name:"--breadcrumbs-gap-default",description:"Gap between items and separator for default — 6px."},{name:"--breadcrumbs-gap-lg",description:"Gap between items and separator for large — 8px."},{name:"--breadcrumbs-separator-size-sm",description:"Chevron icon size for small — 10px."},{name:"--breadcrumbs-separator-size-default",description:"Chevron icon size for default — 12px."},{name:"--breadcrumbs-separator-size-lg",description:"Chevron icon size for large — 14px."},{name:"--breadcrumbs-link-color",description:"Colour for inactive/link crumbs — var(--global-color-neutral-gray-500)."},{name:"--breadcrumbs-link-hover",description:"Colour for link crumbs on hover — var(--global-color-neutral-gray-700)."},{name:"--breadcrumbs-separator-color",description:"Colour of the chevron separator — var(--global-color-neutral-gray-400)."},{name:"--breadcrumbs-current-color",description:"Colour of the current/active page crumb — var(--global-color-base-black)."},{name:"--breadcrumbs-link-weight",description:"Font weight for link crumbs — 400 (var(--global-type-weight-default))."},{name:"--breadcrumbs-current-weight",description:"Font weight for the current page crumb — 700 (var(--global-type-weight-bold))."}]})}),e.jsxs(a.Section,{title:"Props",children:[e.jsxs(a.BodyText,{children:["The ",e.jsx("code",{children:"Breadcrumbs"})," component accepts the following props:"]}),e.jsx(a.BulletList,{items:[e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"items"})," ",e.jsx("em",{children:"(BreadcrumbItem[], required)"})," — Ordered array of crumb objects. The last entry is always the current page. Each item accepts ",e.jsx("code",{children:"label"}),", optional ",e.jsx("code",{children:"href"}),", and optional ",e.jsx("code",{children:"onClick"}),"."]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"size"})," ",e.jsx("em",{children:'("sm" | "default" | "lg", default: "default")'})," — Controls font size, separator icon size, and gap between items."]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"ariaLabel"})," ",e.jsx("em",{children:'(string, default: "Breadcrumb")'})," — Accessible label applied to the wrapping <nav> landmark element."]}),e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"className"})," ",e.jsx("em",{children:'(string, default: "")'})," — Additional CSS class applied to the root element."]})]})]}),e.jsx(a.Section,{title:"Usage",children:e.jsx(a.DosDonts,{doItem:{icon:e.jsx(t,{items:l,size:"default"}),label:"Do",description:"Place breadcrumbs at the top of a page above the title. Keep labels concise and always include the current page as non-interactive bold text."},dontItem:{icon:e.jsx(t,{items:[{label:"Reports",href:"#"}],size:"default"}),label:"Don't",description:"Don't link the current page item, don't use breadcrumbs for flat navigation, and don't exceed 5–6 levels without collapsing."}})}),e.jsx(a.Section,{title:"Design Principles",children:e.jsxs(a.Principles,{children:[e.jsx(a.PrincipleCard,{number:1,title:"Hierarchy first",children:"Breadcrumbs exist to communicate depth, not to duplicate a side-nav. Only render them when there are two or more levels of hierarchy above the current page."}),e.jsx(a.PrincipleCard,{number:2,title:"Accessible by default",children:'The component wraps content in a nav landmark and applies aria-current="page" to the current item. Separators are hidden from assistive technology via aria-hidden="true".'}),e.jsx(a.PrincipleCard,{number:3,title:"Token-driven",children:"Every visual attribute — colour, weight, size, gap — is driven by a design token, ensuring global updates to the system propagate automatically. Never override these values with hard-coded styles."})]})}),e.jsx(a.Footer,{})]});x.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsDocs"};const me={title:"Foundation/BuildingBlocks/Breadcrumbs",component:t,parameters:{docs:{page:()=>e.jsx(x,{})}},argTypes:{size:{control:"select",options:["sm","default","lg"]},ariaLabel:{control:"text"},className:{control:"text"}},args:{size:"default",ariaLabel:"Breadcrumb",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},o={name:"Documentation",render:()=>e.jsx(x,{}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},c={name:"Playground"},d={name:"Size / Small",args:{size:"sm",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},m={name:"Size / Default",args:{size:"default",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},p={name:"Size / Large",args:{size:"lg",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},u={name:"Size / All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"24px"},children:["sm","default","lg"].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"56px",flexShrink:0,fontSize:"11px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--font-family-primary)"},children:r==="sm"?"Small":r==="lg"?"Large":"Default"}),e.jsx(t,{size:r,items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]})]},r))}),parameters:{controls:{disable:!0}}},b={name:"Trail / Two Level",args:{size:"default",items:[{label:"Finance",href:"#"},{label:"Reports"}]}},h={name:"Trail / Deep (5 Levels)",args:{size:"default",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"FY 2025",href:"#"},{label:"Q1",href:"#"},{label:"Reports"}]}},g={name:"Trail / Button Navigation",args:{size:"default",items:[{label:"Home",onClick:()=>alert("Home clicked")},{label:"Finance",onClick:()=>alert("Finance clicked")},{label:"Reports"}]}};var j,z,k;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <BreadcrumbsDocs />,
  parameters: {
    controls: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(k=(z=o.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var S,w,B;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(B=(w=c.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var T,_,F;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Size / Small',
  args: {
    size: 'sm',
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Finance',
      href: '#'
    }, {
      label: 'Reports'
    }]
  }
}`,...(F=(_=d.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var L,C,D;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Size / Default',
  args: {
    size: 'default',
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Finance',
      href: '#'
    }, {
      label: 'Reports'
    }]
  }
}`,...(D=(C=m.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var R,A,H;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Size / Large',
  args: {
    size: 'lg',
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Finance',
      href: '#'
    }, {
      label: 'Reports'
    }]
  }
}`,...(H=(A=p.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var N,I,E;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Size / All Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '24px'
  }}>
      {(['sm', 'default', 'lg'] as const).map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
          <span style={{
        width: '56px',
        flexShrink: 0,
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-400)',
        fontFamily: 'var(--font-family-primary)'
      }}>
            {size === 'sm' ? 'Small' : size === 'lg' ? 'Large' : 'Default'}
          </span>
          <Breadcrumbs size={size} items={[{
        label: 'Home',
        href: '#'
      }, {
        label: 'Finance',
        href: '#'
      }, {
        label: 'Reports'
      }]} />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(I=u.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var P,q,G;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Trail / Two Level',
  args: {
    size: 'default',
    items: [{
      label: 'Finance',
      href: '#'
    }, {
      label: 'Reports'
    }]
  }
}`,...(G=(q=b.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var V,O,W;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Trail / Deep (5 Levels)',
  args: {
    size: 'default',
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Finance',
      href: '#'
    }, {
      label: 'FY 2025',
      href: '#'
    }, {
      label: 'Q1',
      href: '#'
    }, {
      label: 'Reports'
    }]
  }
}`,...(W=(O=h.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var M,K,Q;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Trail / Button Navigation',
  args: {
    size: 'default',
    items: [{
      label: 'Home',
      onClick: () => alert('Home clicked')
    }, {
      label: 'Finance',
      onClick: () => alert('Finance clicked')
    }, {
      label: 'Reports'
    }]
  }
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const pe=["Documentation","Playground","Small","Default","Large","AllSizes","TwoLevel","DeepTrail","ButtonCrumbs"];export{u as AllSizes,g as ButtonCrumbs,h as DeepTrail,m as Default,o as Documentation,p as Large,c as Playground,d as Small,b as TwoLevel,pe as __namedExportsOrder,me as default};
