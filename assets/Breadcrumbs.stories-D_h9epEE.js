import{j as e}from"./iframe-Dar69v5t.js";import{B as a,a as X}from"./BreadcrumbsDocs-Dfgawtny.js";import"./preload-helper-Dp1pzeXC.js";import"./DocsTemplate-B3INTUY7.js";import"./DefaultPropsProvider-DYvj0fg1.js";import"./memoTheme-n5UlHhtg.js";import"./createSvgIcon-DbjYR0NQ.js";import"./ButtonBase-DtcsKBT-.js";import"./index-DmEN9vMH.js";import"./useEventCallback-IMUsyEcN.js";import"./useForkRef-C8iv6bB9.js";import"./useSlotProps-Cy3C6xG6.js";import"./mergeSlotProps-YhzLqcrY.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DNKJACkZ.js";import"./useTheme-CE1dW_qj.js";const ue={title:"Atoms/Navigation/Breadcrumbs",component:a,parameters:{docs:{page:()=>e.jsx(X,{})}},argTypes:{size:{control:"select",options:["sm","default","lg"]},ariaLabel:{control:"text"},className:{control:"text"}},args:{size:"default",ariaLabel:"Breadcrumb",items:[{label:"Finance",href:"#"},{label:"Finance",href:"#"},{label:"Finance"}]}},r={name:"Documentation",render:()=>e.jsx(X,{}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},n={name:"Playground"},l={name:"Default"},s={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px"},children:["sm","default","lg"].map(u=>e.jsx(a,{size:u,items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]},u))}),parameters:{controls:{disable:!0}}},i={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px",maxWidth:"400px"},children:[e.jsx(a,{size:"default",items:[{label:"Home",href:"#"},{label:"Section",href:"#"},{label:"Current"}]}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"--breadcrumbs-font-size-default / --breadcrumbs-separator-color / --breadcrumbs-active-color"})]}),parameters:{controls:{disable:!0}}},t={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px"},children:[e.jsx(a,{size:"sm",items:[{label:"Home",href:"#"},{label:"Small"}]}),e.jsx(a,{size:"default",items:[{label:"Home",href:"#"},{label:"Default"}]}),e.jsx(a,{size:"lg",items:[{label:"Home",href:"#"},{label:"Large"}]})]}),parameters:{controls:{disable:!0}}},o={name:"Full Design Matrix (9 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)"},children:[e.jsx(a,{size:"lg",items:[{label:"Finance",href:"#"},{label:"Finance",href:"#"},{label:"Finance"}]}),e.jsx(a,{size:"default",items:[{label:"Finance",href:"#"},{label:"Finance",href:"#"},{label:"Finance"}]}),e.jsx(a,{size:"sm",items:[{label:"Finance",href:"#"},{label:"Finance",href:"#"},{label:"Finance"}]})]}),parameters:{controls:{disable:!0}}},c={name:"Size / Small",args:{size:"sm",items:[{label:"Finance",href:"#"},{label:"Finance",href:"#"},{label:"Finance"}]}},m={name:"Size / Default",args:{size:"default",items:[{label:"Finance",href:"#"},{label:"Finance",href:"#"},{label:"Finance"}]}},d={name:"Size / Large",args:{size:"lg",items:[{label:"Finance",href:"#"},{label:"Finance",href:"#"},{label:"Finance"}]}},p={name:"Trail / Two Level",args:{size:"default",items:[{label:"Finance",href:"#"},{label:"Finance"}]}},b={name:"Trail / Deep",args:{size:"default",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"FY 2025",href:"#"},{label:"Q1",href:"#"},{label:"Reports"}]}};var f,g,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,F,z;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(z=(F=n.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var S,D,v;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Default'
}`,...(v=(D=l.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var y,B,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '16px'
  }}>
      {(['sm', 'default', 'lg'] as const).map(size => <Breadcrumbs key={size} size={size} items={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Finance',
      href: '#'
    }, {
      label: 'Reports'
    }]} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(j=(B=s.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var H,L,T;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px',
    maxWidth: '400px'
  }}>
      <Breadcrumbs size="default" items={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Section',
      href: '#'
    }, {
      label: 'Current'
    }]} />
      <code style={{
      fontSize: '10px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '4px 8px',
      borderRadius: '4px'
    }}>--breadcrumbs-font-size-default / --breadcrumbs-separator-color / --breadcrumbs-active-color</code>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(T=(L=i.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var w,k,R;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px'
  }}>
      <Breadcrumbs size="sm" items={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Small'
    }]} />
      <Breadcrumbs size="default" items={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Default'
    }]} />
      <Breadcrumbs size="lg" items={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Large'
    }]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(k=t.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var C,A,I;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Full Design Matrix (9 variants)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-24px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      <Breadcrumbs size="lg" items={[{
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance'
    }]} />
      <Breadcrumbs size="default" items={[{
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance'
    }]} />
      <Breadcrumbs size="sm" items={[{
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance'
    }]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(A=o.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var M,P,E;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Size / Small',
  args: {
    size: 'sm',
    items: [{
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance'
    }]
  }
}`,...(E=(P=c.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var N,Q,W;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Size / Default',
  args: {
    size: 'default',
    items: [{
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance'
    }]
  }
}`,...(W=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Y,_,O;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Size / Large',
  args: {
    size: 'lg',
    items: [{
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance'
    }]
  }
}`,...(O=(_=d.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,G,J;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Trail / Two Level',
  args: {
    size: 'default',
    items: [{
      label: 'Finance',
      href: '#'
    }, {
      label: 'Finance'
    }]
  }
}`,...(J=(G=p.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,U,V;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Trail / Deep',
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
}`,...(V=(U=b.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const fe=["Documentation","Playground","Default","Sizes","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix","Small","SizeDefault","Large","TwoLevel","DeepTrail"];export{t as AllInteractiveStates,i as ComponentBreakdown,b as DeepTrail,l as Default,r as Documentation,o as FullDesignMatrix,d as Large,n as Playground,m as SizeDefault,s as Sizes,c as Small,p as TwoLevel,fe as __namedExportsOrder,ue as default};
