import{j as e}from"./iframe-DxHMXfYS.js";import{D as a}from"./DocsTemplate-CsmpOFlJ.js";import"./preload-helper-Dp1pzeXC.js";const J="_root_11nu1_7",ee="_list_11nu1_13",ae="_item_11nu1_24",re="_separator_11nu1_31",ne="_link_11nu1_39",te="_linkButton_11nu1_57",se="_current_11nu1_66",n={root:J,list:ee,item:ae,separator:re,link:ne,linkButton:te,current:se,"root--sm":"_root--sm_11nu1_82","root--default":"_root--default_11nu1_90","root--lg":"_root--lg_11nu1_98"},le=({className:r})=>e.jsx("svg",{className:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M6 3.5L10.5 8L6 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),s=({items:r,size:Q="default",ariaLabel:Y="Breadcrumb",className:Z=""})=>{const X=[n.root,n[`root--${Q}`],Z].filter(Boolean).join(" ");return e.jsx("nav",{"aria-label":Y,className:X,children:e.jsx("ol",{className:n.list,children:r.map((t,h)=>{const $=h===r.length-1;return e.jsxs("li",{className:n.item,children:[h>0&&e.jsx(le,{className:n.separator}),$?e.jsx("span",{className:n.current,"aria-current":"page",children:t.label}):t.href?e.jsx("a",{href:t.href,className:n.link,onClick:t.onClick,children:t.label}):e.jsx("button",{type:"button",className:[n.link,n.linkButton].join(" "),onClick:t.onClick,children:t.label})]},h)})})})};s.__docgenInfo={description:"Breadcrumbs — Foundation / BuildingBlocks / Breadcrumbs\n\nRenders an accessible, token-driven breadcrumb trail. The last item in\n`items` is treated as the current page and is rendered as bold text\n(non-interactive). All preceding items are rendered as links.\n\nThree size variants are available: `sm`, `default`, and `lg`.",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Ordered list of breadcrumb items. The last item is always the current page."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"Size scale — affects font size, separator size and gap.",defaultValue:{value:"'default'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for the <nav> landmark.",defaultValue:{value:"'Breadcrumb'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element.",defaultValue:{value:"''",computed:!1}}}};const x=["sm","default","lg"],y={sm:"Small",default:"Default",lg:"Large"},f=[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}],ie=[{label:"Finance",href:"#"},{label:"Reports"}],l={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-8px)"},oe={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},v=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Breadcrumbs",subtitle:"An accessible, token-driven breadcrumb trail with three size variants. Used to communicate location within a hierarchical navigation structure."}),e.jsxs(a.BodyText,{children:["The ",e.jsx("strong",{children:"Breadcrumbs"})," component renders an ordered list of navigation links that reflect the current page's position within the site hierarchy. All preceding items are interactive links; the last item is the current page and is rendered as non-interactive bold text with an ",e.jsx("code",{children:'aria-current="page"'})," ","attribute. Three size variants — ",e.jsx("em",{children:"Small"}),", ",e.jsx("em",{children:"Default"}),", and"," ",e.jsx("em",{children:"Large"})," — map directly to design tokens for font size, separator size, and item gap."]}),e.jsx(a.Section,{title:"Component Anatomy",children:e.jsx(a.Anatomy,{preview:e.jsx("div",{style:l,children:e.jsx(s,{items:f,size:"lg"})}),parts:[{id:1,name:"Nav Landmark",token:'aria-label="Breadcrumb"',description:"Wraps the entire trail in a <nav> element, making it discoverable by assistive technology as a landmark region."},{id:2,name:"Link Crumb",token:`--breadcrumbs-link-color
--breadcrumbs-link-hover
--breadcrumbs-link-weight (400)`,description:"Each non-current item rendered as an anchor or button. Colour and hover state are token-driven. Provides underline on hover."},{id:3,name:"Separator",token:`--breadcrumbs-separator-color
--breadcrumbs-separator-size-{size}`,description:"Chevron-right SVG icon positioned between items. Size scales with the chosen size variant."},{id:4,name:"Current Crumb",token:`--breadcrumbs-current-color
--breadcrumbs-current-weight (700)`,description:'The last item — the active/current page. Rendered in bold, dark text. Carries aria-current="page" for accessibility.'}]})}),e.jsxs(a.Section,{title:"Size Variants",children:[e.jsx(a.BodyText,{children:"Three sizes are available. Each maps to a specific type size, separator icon size, and gap token. Choose the size that best fits the surrounding typographic hierarchy."}),e.jsx("div",{style:oe,children:x.map(r=>e.jsx(a.Example,{label:y[r],preview:e.jsx("div",{style:l,children:e.jsx(s,{items:f,size:r})})},r))})]}),e.jsx(a.Section,{title:"All Sizes — Side by Side",children:e.jsx("div",{style:{...l,flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:x.map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{width:"60px",flexShrink:0,fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--font-family-primary)"},children:y[r]}),e.jsx(s,{items:f,size:r})]},r))})}),e.jsxs(a.Section,{title:"Two-Level Trail",children:[e.jsx(a.BodyText,{children:"A minimal trail with one ancestor link and the current page. This is the most common pattern for first-level page navigation."}),e.jsx("div",{style:l,children:e.jsx(s,{items:ie,size:"default"})})]}),e.jsx(a.Section,{title:"Design Tokens",children:e.jsx(a.TokenTable,{tokens:[{token:"--breadcrumbs-font-family",value:"var(--font-family-primary)",description:"Typeface used for all breadcrumb text."},{token:"--breadcrumbs-letter-spacing",value:"var(--global-type-letter-spacing-primary-label)",description:"Letter spacing applied to all text nodes."},{token:"--breadcrumbs-font-size-sm",value:"var(--global-type-size-primary-label-xs) — 12px",description:"Font size for the small size variant."},{token:"--breadcrumbs-font-size-default",value:"var(--global-type-size-primary-label-sm) — 14px",description:"Font size for the default size variant."},{token:"--breadcrumbs-font-size-lg",value:"var(--global-type-size-primary-label) — 16px",description:"Font size for the large size variant."},{token:"--breadcrumbs-gap-sm",value:"var(--global-spacing-sizing-4px)",description:"Gap between items and separator for small."},{token:"--breadcrumbs-gap-default",value:"var(--global-spacing-sizing-6px)",description:"Gap between items and separator for default."},{token:"--breadcrumbs-gap-lg",value:"var(--global-spacing-sizing-8px)",description:"Gap between items and separator for large."},{token:"--breadcrumbs-separator-size-sm",value:"var(--global-spacing-sizing-10px)",description:"Chevron icon size for small."},{token:"--breadcrumbs-separator-size-default",value:"var(--global-spacing-sizing-12px)",description:"Chevron icon size for default."},{token:"--breadcrumbs-separator-size-lg",value:"var(--global-spacing-sizing-14px)",description:"Chevron icon size for large."},{token:"--breadcrumbs-link-color",value:"var(--global-color-neutral-gray-500)",description:"Colour for inactive/link crumbs."},{token:"--breadcrumbs-link-hover",value:"var(--global-color-neutral-gray-700)",description:"Colour for link crumbs on hover."},{token:"--breadcrumbs-separator-color",value:"var(--global-color-neutral-gray-400)",description:"Colour of the chevron separator."},{token:"--breadcrumbs-current-color",value:"var(--global-color-base-black)",description:"Colour of the current/active page crumb."},{token:"--breadcrumbs-link-weight",value:"var(--global-type-weight-default) — 400",description:"Font weight for link crumbs."},{token:"--breadcrumbs-current-weight",value:"var(--global-type-weight-bold) — 700",description:"Font weight for the current page crumb."}]})}),e.jsx(a.Section,{title:"Props",children:e.jsx(a.PropsTable,{props:[{name:"items",type:"BreadcrumbItem[]",default:"—",required:!0,description:"Ordered array of breadcrumb items. The last entry is always the current page. Each item may have label, href, and/or onClick."},{name:"size",type:'"sm" | "default" | "lg"',default:'"default"',required:!1,description:"Controls font size, separator size, and item gap."},{name:"ariaLabel",type:"string",default:'"Breadcrumb"',required:!1,description:"Accessible label applied to the wrapping <nav> landmark element."},{name:"className",type:"string",default:'""',required:!1,description:"Additional CSS class applied to the root element."}]})}),e.jsxs(a.Section,{title:"Usage",children:[e.jsx(a.Do,{items:["Place breadcrumbs at the top of a page, above the page title.","Keep labels concise — use single nouns or short noun phrases.","Always include the current page as the last non-linked item.","Use href for traditional navigation; use onClick for SPA routing without href.","Choose a size consistent with surrounding typographic hierarchy."]}),e.jsx(a.Dont,{items:["Do not link the current page item — it should be static text.","Do not use breadcrumbs for flat navigation structures with no hierarchy.","Do not exceed 5–6 levels; collapse middle levels if the trail is very deep.","Do not mix sizes within the same trail.","Do not use breadcrumbs as a replacement for primary navigation."]})]}),e.jsxs(a.Section,{title:"Design Principles",children:[e.jsxs(a.BodyText,{children:[e.jsx("strong",{children:"Hierarchy first."})," Breadcrumbs exist to communicate depth, not to duplicate a side-nav. Only render them when there are two or more levels of hierarchy above the current page."]}),e.jsxs(a.BodyText,{children:[e.jsx("strong",{children:"Accessible by default."})," The component wraps content in a"," ",e.jsx("code",{children:"<nav>"})," landmark and applies ",e.jsx("code",{children:'aria-current="page"'})," ","to the current item. Separators are hidden from assistive technology via"," ",e.jsx("code",{children:'aria-hidden="true"'}),"."]}),e.jsxs(a.BodyText,{children:[e.jsx("strong",{children:"Token-driven."})," Every visual attribute — colour, weight, size, gap — is driven by a design token, ensuring global updates to the system propagate automatically. Never override these values with hard-coded styles."]})]})]});v.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsDocs"};const pe={title:"Foundation/BuildingBlocks/Breadcrumbs",component:s,parameters:{docs:{page:()=>e.jsx(v,{})}},argTypes:{size:{control:"select",options:["sm","default","lg"]},ariaLabel:{control:"text"},className:{control:"text"}},args:{size:"default",ariaLabel:"Breadcrumb",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},i={name:"Documentation",render:()=>e.jsx(v,{}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},o={name:"Playground"},c={name:"Size / Small",args:{size:"sm",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},d={name:"Size / Default",args:{size:"default",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},m={name:"Size / Large",args:{size:"lg",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},p={name:"Size / All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"24px"},children:["sm","default","lg"].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"56px",flexShrink:0,fontSize:"11px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--font-family-primary)"},children:r==="sm"?"Small":r==="lg"?"Large":"Default"}),e.jsx(s,{size:r,items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]})]},r))}),parameters:{controls:{disable:!0}}},u={name:"Trail / Two Level",args:{size:"default",items:[{label:"Finance",href:"#"},{label:"Reports"}]}},b={name:"Trail / Deep (5 Levels)",args:{size:"default",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"FY 2025",href:"#"},{label:"Q1",href:"#"},{label:"Reports"}]}},g={name:"Trail / Button Navigation",args:{size:"default",items:[{label:"Home",onClick:()=>alert("Home clicked")},{label:"Finance",onClick:()=>alert("Finance clicked")},{label:"Reports"}]}};var k,z,S;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(z=i.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var j,w,T;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(T=(w=o.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var B,_,D;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(_=c.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var C,L,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var R,A,H;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(A=m.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var N,E,I;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var P,q,G;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var V,O,W;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(O=b.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var M,U,K;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(K=(U=g.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};const ue=["Documentation","Playground","Small","Default","Large","AllSizes","TwoLevel","DeepTrail","ButtonCrumbs"];export{p as AllSizes,g as ButtonCrumbs,b as DeepTrail,d as Default,i as Documentation,m as Large,o as Playground,c as Small,u as TwoLevel,ue as __namedExportsOrder,pe as default};
