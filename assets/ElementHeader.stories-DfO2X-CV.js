import{j as e}from"./iframe-DFgijXN4.js";import{G as fe}from"./GhostButton-Cf8XVTBW.js";import{B as xe}from"./ButtonBase-DEIcHRt-.js";import{D as a}from"./DocsTemplate-B8PzL_3D.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-2m_8QURU.js";import"./index-DOHIEd42.js";import"./useEventCallback-r1BRypd8.js";import"./useForkRef-BaONxcU2.js";const ke="_root_q0l06_5",ve="_breadcrumbs_q0l06_70",ye="_breadcrumbList_q0l06_74",Be="_breadcrumbItem_q0l06_84",ze="_breadcrumbSeparator_q0l06_90",Se="_breadcrumbLink_q0l06_97",je="_breadcrumbLinkButton_q0l06_113",we="_breadcrumbCurrent_q0l06_122",Ee="_title_q0l06_135",s={root:ke,"root--sm":"_root--sm_q0l06_18","root--default":"_root--default_q0l06_34","root--lg":"_root--lg_q0l06_50",breadcrumbs:ve,breadcrumbList:ye,breadcrumbItem:Be,breadcrumbSeparator:ze,breadcrumbLink:Se,breadcrumbLinkButton:je,breadcrumbCurrent:we,title:Ee},Le={sm:"small",default:"default",lg:"large"},De=({className:r})=>e.jsx("svg",{className:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M6 3.5L10.5 8L6 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Te=({className:r})=>e.jsx("svg",{className:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M13.334 7.3333V8.66664H5.334L9.00065 12.3333L8.054 13.28L2.774 7.99997L8.054 2.71997L9.00065 3.66664L5.334 7.3333H13.334Z",fill:"currentColor"})}),t=({title:r,breadcrumbs:v=[],backLabel:de="Back",showBack:me=!0,onBack:ue,size:B="default",className:be="",breadcrumbAriaLabel:pe="Breadcrumb"})=>{const he=[s.root,s[`root--${B}`],be].filter(Boolean).join(" ");return e.jsxs("header",{className:he,children:[v.length>0&&e.jsx("nav",{className:s.breadcrumbs,"aria-label":pe,children:e.jsx("ol",{className:s.breadcrumbList,children:v.map((n,y)=>{const ge=y===v.length-1;return e.jsxs("li",{className:s.breadcrumbItem,children:[y>0&&e.jsx(De,{className:s.breadcrumbSeparator}),ge?e.jsx("span",{className:s.breadcrumbCurrent,"aria-current":"page",children:n.label}):n.href?e.jsx("a",{href:n.href,className:s.breadcrumbLink,onClick:n.onClick,children:n.label}):e.jsx(xe,{component:"button",type:"button",className:[s.breadcrumbLink,s.breadcrumbLinkButton].join(" "),onClick:n.onClick,children:n.label})]},y)})})}),me&&e.jsx(fe,{variant:"link",label:de,size:Le[B],leadingIcon:Te,showLeadingIcon:!0,onClick:ue}),e.jsx("h1",{className:s.title,children:r})]})};t.__docgenInfo={description:"ElementHeader — Atoms / Layout / ElementHeader\n\nA structured page-header layout block that combines a breadcrumb trail,\na contextual Back button (using GhostButton link variant), and a prominent\nelement/page title.\n\nThree size variants are available: `sm`, `default`, and `lg`.",methods:[],displayName:"ElementHeader",props:{title:{required:!0,tsType:{name:"string"},description:"Page / element title shown below the back button"},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"ElementHeaderBreadcrumbItem"}],raw:"ElementHeaderBreadcrumbItem[]"},description:"Breadcrumb trail items — last item is the current page (non-interactive)",defaultValue:{value:"[]",computed:!1}},backLabel:{required:!1,tsType:{name:"string"},description:"Label shown on the Back button",defaultValue:{value:"'Back'",computed:!1}},showBack:{required:!1,tsType:{name:"boolean"},description:"Show the Back button",defaultValue:{value:"true",computed:!1}},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler for the Back button"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"Size scale — affects typography and spacing",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}},breadcrumbAriaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for the breadcrumb nav",defaultValue:{value:"'Breadcrumb'",computed:!1}}}};const o=[{label:"Business",href:"#"},{label:"Equipment risk",href:"#"},{label:"Edit"}],_e={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-8px)"},ie=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"ElementHeader",subtitle:"A structured page-header layout block that combines a breadcrumb trail, a contextual Back button, and a prominent element/page title. Available in three size variants."}),e.jsxs(a.BodyText,{children:["The ",e.jsx("strong",{children:"ElementHeader"})," component acts as the primary header for detail and edit pages within the application. It provides wayfinding context through breadcrumbs, a Back navigation control, and a page-level title that identifies the record or element the user is working on. All sizing, spacing, typography, and colour values resolve to design tokens — ensuring visual consistency across sizes and themes."]}),e.jsxs(a.Section,{title:"MUI Foundation",children:[e.jsxs(a.BodyText,{children:["Uses MUI's ",e.jsx("strong",{children:"ButtonBase"})," for the inline tab navigation items within the header bar. Each breadcrumb-style tab link that isn't rendered via the"," ",e.jsx("code",{children:"GhostButton"})," sub-component falls back to a ",e.jsx("code",{children:"ButtonBase"})," element, ensuring accessible keyboard interaction and focus management across all tab items. The ",e.jsx("strong",{children:"GhostButton"})," component (used for the Back button) is itself built on"," ",e.jsx("code",{children:"ButtonBase"}),". All layout, spacing, typography, and colour tokens are applied via CSS Modules and the shared design token system."]}),e.jsx(a.CodeBlock,{children:`// MUI base imports
import ButtonBase from '@mui/material/ButtonBase';
// GhostButton is also built on ButtonBase
import { GhostButton } from '../GhostButton/GhostButton';

// Tab item fallback:
<ButtonBase component="button" className={styles['element-header__tab']} onClick={onTabClick}>
  {item.label}
</ButtonBase>`})]}),e.jsx(a.Section,{title:"Component Anatomy",children:e.jsx(a.Anatomy,{preview:e.jsx("div",{style:_e,children:e.jsx(t,{breadcrumbs:o,title:"This is the Element name for the user to see",size:"default"})}),parts:[{id:1,name:"Breadcrumb Trail",token:"--element-header-breadcrumb-*",description:'An accessible ordered list of navigation links. All items except the last are interactive; the last is the current page — rendered as bold text with aria-current="page".'},{id:2,name:"Back Button",token:"--element-header-back-*",description:"A ghost-style outlined button with a leading account icon and a trailing arrow-right icon. Uses the primary blue-blue palette for borders and shadow."},{id:3,name:"Element Title",token:"--element-header-title-*",description:"The primary heading for the page or record. Rendered in the secondary navy colour at heading-level typography."}]})}),e.jsxs(a.Section,{title:"Size Variants",children:[e.jsxs(a.BodyText,{children:["Three size variants control typography, spacing, and icon sizes throughout the component: ",e.jsx("strong",{children:"Small"}),", ",e.jsx("strong",{children:"Default"}),", and"," ",e.jsx("strong",{children:"Large"}),"."]}),e.jsx(a.SizeDemo,{rows:[{label:"Small",children:e.jsx(t,{size:"sm",breadcrumbs:o,title:"This is the Element name for the user to see"})},{label:"Default",children:e.jsx(t,{size:"default",breadcrumbs:o,title:"This is the Element name for the user to see"})},{label:"Large",children:e.jsx(t,{size:"lg",breadcrumbs:o,title:"This is the Element name for the user to see"})}]})]}),e.jsx(a.Section,{title:"Design Tokens",children:e.jsx(a.TokenTable,{tokens:[{name:"--element-header-gap-sm / -default / -lg",description:"Vertical gap between the breadcrumbs, Back button, and title sections for each size variant. Resolves to global-spacing-sizing-6/8/12px."},{name:"--element-header-breadcrumb-font-size-sm / -default / -lg",description:"Breadcrumb item font size per size variant. Resolves to global-type-size-primary-label-xs / label-sm / label."},{name:"--element-header-breadcrumb-sep-size-sm / -default / -lg",description:"Width and height of the chevron separator icon in the breadcrumb trail. Resolves to global-spacing-sizing-10/12/14px."},{name:"--element-header-breadcrumb-gap-sm / -default / -lg",description:"Gap between breadcrumb items (and between each item and its separator). Resolves to global-spacing-sizing-4/6/8px."},{name:"--element-header-back-font-size-sm / -default / -lg",description:"Back button label font size per size variant. Resolves to global-type-size-primary-label-xs / label-sm / label."},{name:"--element-header-back-icon-size-sm / -default / -lg",description:"Width and height of the account and arrow-right icons inside the Back button. Resolves to global-spacing-sizing-12/14/16px."},{name:"--element-header-back-padding-x-sm / -default / -lg",description:"Horizontal padding inside the Back button per size variant. Resolves to global-spacing-sizing-10/12/16px."},{name:"--element-header-back-gap-sm / -default / -lg",description:"Gap between icon and label inside the Back button per size variant. Resolves to global-spacing-sizing-4/6/8px."},{name:"--element-header-back-bg",description:"Default background of the Back button. Resolves to global-color-primary-blue-blue-50."},{name:"--element-header-back-border",description:"Border colour of the Back button. Resolves to global-color-primary-blue-blue-300."},{name:"--element-header-back-color",description:"Text and icon colour of the Back button in its resting state. Resolves to global-color-secondary-blue-gray."},{name:"--element-header-back-bg-hover",description:"Background of the Back button on hover/active. Resolves to global-color-primary-blue-blue-100."},{name:"--element-header-back-shadow-hover",description:"Box-shadow colour applied on hover/active (2×2 px offset). Resolves to global-color-primary-blue-blue-400."},{name:"--element-header-back-color-hover",description:"Text and icon colour of the Back button on hover/active. Resolves to global-color-base-black."},{name:"--element-header-title-font-size-sm / -default / -lg",description:"Title font size per size variant. Resolves to global-type-size-primary-label-lg / heading-5 / heading-4."},{name:"--element-header-title-line-height-sm / -default / -lg",description:"Title line-height per size variant. Resolves to global-type-line-height-label-lg / heading-5 / heading-4."},{name:"--element-header-title-color",description:"Colour of the element title. Resolves to global-color-secondary-navy (#3a3282)."}]})}),e.jsx(a.Section,{title:"Usage Guidelines",children:e.jsx(a.BulletList,{items:["Place ElementHeader at the very top of a detail or edit page, before any content.","Always populate the breadcrumbs array to give users clear wayfinding context.","The last breadcrumb item must represent the current page and should not include an href or onClick.","Keep breadcrumb labels concise — ideally 1–3 words.","Provide an onBack handler when the Back button should perform SPA routing rather than browser history navigation.","Use the same size variant throughout a page — do not mix sizes within the same view."]})}),e.jsx(a.Section,{title:"Dos and Don'ts",children:e.jsx(a.DosDonts,{doItem:{icon:e.jsx(t,{breadcrumbs:o,title:"Edit equipment risk assessment",size:"default"}),label:"Do",description:"Always include breadcrumbs and a meaningful title that identifies the record or action the user is performing."},dontItem:{icon:e.jsx(t,{breadcrumbs:[],showBack:!1,title:"Edit",size:"default"}),label:"Don't",description:`Don't omit breadcrumbs on deep pages, and don't use generic labels like "Edit" without the record name — users lose context.`}})}),e.jsx(a.Section,{title:"Design Principles",children:e.jsxs(a.Principles,{children:[e.jsx(a.PrincipleCard,{number:1,title:"Wayfinding first",children:"The breadcrumb trail must always reflect the real hierarchy. Users rely on it to understand where they are and navigate back efficiently."}),e.jsx(a.PrincipleCard,{number:2,title:"Consistent sizing",children:"Choose one size variant per page and apply it uniformly. Mixing sizes creates visual tension and undermines rhythm."}),e.jsx(a.PrincipleCard,{number:3,title:"Token-driven",children:"Every visual property — colour, spacing, typography — is expressed through a design token. Never hard-code values in components that use ElementHeader."})]})}),e.jsx(a.Footer,{})]});ie.__docgenInfo={description:"",methods:[],displayName:"ElementHeaderDocs"};const ce=[{label:"Business",href:"#"},{label:"Equipment risk",href:"#"},{label:"Edit"}],Ne={title:"Atoms/Layout/ElementHeader",component:t,parameters:{layout:"padded",docs:{description:{component:"A structured page-header layout block combining a breadcrumb trail, a contextual Back button, and a prominent element/page title."}}},argTypes:{size:{control:"radio",options:["sm","default","lg"],description:"Size scale — affects typography and spacing."},title:{control:"text",description:"Page / element title displayed below the Back button."},backLabel:{control:"text",description:"Label shown on the Back button."},showBack:{control:"boolean",description:"Whether to show the Back button."},breadcrumbs:{control:!1,description:"Array of breadcrumb items."}},args:{title:"This is the Element name for the user to see",backLabel:"Back",showBack:!0,size:"default",breadcrumbs:ce}},l={name:"Documentation",render:()=>e.jsx(ie,{}),parameters:{controls:{disable:!0},docs:{canvas:{sourceState:"hidden"}}}},i={name:"Playground"},c={name:"Default"},d={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"16px"},children:["sm","default","lg"].map(r=>e.jsx(t,{size:r,title:"Page Title",backLabel:"Back",breadcrumbs:[{label:"Home",href:"#"},{label:"Section"}]},r))}),parameters:{controls:{disable:!0}}},m={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"600px"},children:[e.jsx(t,{size:"default",title:"With all elements",backLabel:"Back",breadcrumbs:[{label:"Home",href:"#"},{label:"Section"}]}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"--element-header-title-font-size-default / --breadcrumbs-font-size-default"})]}),parameters:{controls:{disable:!0}}},u={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx(t,{size:"default",title:"With Back + Breadcrumbs",backLabel:"Back",breadcrumbs:[{label:"Home",href:"#"},{label:"Section"}]}),e.jsx(t,{size:"default",title:"Without Back",breadcrumbs:[{label:"Home",href:"#"},{label:"Section"}],showBack:!1}),e.jsx(t,{size:"default",title:"Minimal",showBack:!1,breadcrumbs:[]})]}),parameters:{controls:{disable:!0}}},b={name:"Full Design Matrix (12 variants)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)"},children:["lg","default","sm"].map(r=>e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--font-family-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",marginBottom:"var(--global-spacing-sizing-8px)",textTransform:"uppercase",letterSpacing:"0.08em"},children:r==="lg"?"Large":r==="default"?"Default":"Small"}),e.jsx(t,{size:r,title:"This is the Element name for the user to see",breadcrumbs:ce})]},r))}),parameters:{controls:{disable:!0}}},p={name:"Size / Large",args:{size:"lg"}},h={name:"Size / Default",args:{size:"default"}},g={name:"Size / Small",args:{size:"sm"}},f={name:"Without Back Button",args:{showBack:!1}},x={name:"Without Breadcrumbs",args:{breadcrumbs:[]}},k={name:"Deep Trail",args:{breadcrumbs:[{label:"Home",href:"#"},{label:"Business",href:"#"},{label:"Equipment risk",href:"#"},{label:"Edit"}],title:"Edit equipment risk assessment"}};var z,S,j;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <ElementHeaderDocs />,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      canvas: {
        sourceState: 'hidden'
      }
    }
  }
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var w,E,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(L=(E=i.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var D,T,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Default'
}`,...(_=(T=c.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var H,C,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '16px'
  }}>
      {(['sm', 'default', 'lg'] as const).map(size => <ElementHeader key={size} size={size} title="Page Title" backLabel="Back" breadcrumbs={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Section'
    }]} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(C=d.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var A,q,M;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '600px'
  }}>
      <ElementHeader size="default" title="With all elements" backLabel="Back" breadcrumbs={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Section'
    }]} />
      <code style={{
      fontSize: '10px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '4px 8px',
      borderRadius: '4px'
    }}>--element-header-title-font-size-default / --breadcrumbs-font-size-default</code>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(M=(q=m.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var W,I,P;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>
      <ElementHeader size="default" title="With Back + Breadcrumbs" backLabel="Back" breadcrumbs={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Section'
    }]} />
      <ElementHeader size="default" title="Without Back" breadcrumbs={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Section'
    }]} showBack={false} />
      <ElementHeader size="default" title="Minimal" showBack={false} breadcrumbs={[]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(P=(I=u.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var N,G,U;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Full Design Matrix (12 variants)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      {(['lg', 'default', 'sm'] as const).map(size => <div key={size}>
          <p style={{
        fontFamily: 'var(--font-family-primary)',
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: 'var(--global-spacing-sizing-8px)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
            {size === 'lg' ? 'Large' : size === 'default' ? 'Default' : 'Small'}
          </p>
          <ElementHeader size={size} title="This is the Element name for the user to see" breadcrumbs={EXAMPLE_BREADCRUMBS} />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(G=b.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var V,F,X;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Size / Large',
  args: {
    size: 'lg'
  }
}`,...(X=(F=p.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var $,K,O;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Size / Default',
  args: {
    size: 'default'
  }
}`,...(O=(K=h.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var Z,J,Q;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Size / Small',
  args: {
    size: 'sm'
  }
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,ee,ae;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Without Back Button',
  args: {
    showBack: false
  }
}`,...(ae=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,se;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Without Breadcrumbs',
  args: {
    breadcrumbs: []
  }
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,oe,le;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Deep Trail',
  args: {
    breadcrumbs: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Business',
      href: '#'
    }, {
      label: 'Equipment risk',
      href: '#'
    }, {
      label: 'Edit'
    }],
    title: 'Edit equipment risk assessment'
  }
}`,...(le=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const Ge=["Documentation","Playground","Default","Sizes","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix","SizeLarge","SizeDefault","SizeSmall","WithoutBack","WithoutBreadcrumbs","DeepTrail"];export{u as AllInteractiveStates,m as ComponentBreakdown,k as DeepTrail,c as Default,l as Documentation,b as FullDesignMatrix,i as Playground,h as SizeDefault,p as SizeLarge,g as SizeSmall,d as Sizes,f as WithoutBack,x as WithoutBreadcrumbs,Ge as __namedExportsOrder,Ne as default};
