import{j as e}from"./vendor-react-DbhTI_a3.js";import{B as u,a as J}from"./BreadcrumbsDocs-Dk-xwis4.js";import"../vite-inject-mocker-entry.js";import"./vendor-misc-BD0vWy5z.js";import"./DocsTemplate-IhRQ5m1Q.js";import"./vendor-mui-core-CjcFYzit.js";import"./vendor-emotion-DfrZ-FAO.js";const ae={title:"Foundation/BuildingBlocks/Breadcrumbs",component:u,parameters:{docs:{page:()=>e.jsx(J,{})}},argTypes:{size:{control:"select",options:["sm","default","lg"]},ariaLabel:{control:"text"},className:{control:"text"}},args:{size:"default",ariaLabel:"Breadcrumb",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},r={name:"Documentation",render:()=>e.jsx(J,{}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},n={name:"Playground"},l={name:"Size / Small",args:{size:"sm",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},s={name:"Size / Default",args:{size:"default",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},t={name:"Size / Large",args:{size:"lg",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},o={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:"480px"},children:[e.jsx(u,{size:"default",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"--breadcrumbs-font-size-default / --breadcrumbs-separator-color"})]}),parameters:{controls:{disable:!0}}},i={name:"All Interactive States",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px"},children:["sm","default","lg"].map(a=>e.jsx(u,{size:a,items:[{label:"Home",href:"#"},{label:"Section",href:"#"},{label:"Current Page"}]},a))}),parameters:{controls:{disable:!0}}},c={name:"Full Design Matrix (9 variants)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"24px"},children:["sm","default","lg"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"56px",flexShrink:0,fontSize:"11px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--font-family-primary)"},children:a==="sm"?"Small":a==="lg"?"Large":"Default"}),e.jsx(u,{size:a,items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]})]},a))}),parameters:{controls:{disable:!0}}},m={name:"Trail / Two Level",args:{size:"default",items:[{label:"Finance",href:"#"},{label:"Reports"}]}},p={name:"Trail / Deep (5 Levels)",args:{size:"default",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"FY 2025",href:"#"},{label:"Q1",href:"#"},{label:"Reports"}]}},d={name:"Trail / Button Navigation",args:{size:"default",items:[{label:"Home",onClick:()=>alert("Home clicked")},{label:"Finance",onClick:()=>alert("Finance clicked")},{label:"Reports"}]}};var b,f,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,h,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,z,v;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(z=l.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};var F,D,R;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(R=(D=s.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var k,B,H;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=(B=t.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var L,j,T;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    maxWidth: '480px'
  }}>
      <Breadcrumbs size="default" items={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Finance',
      href: '#'
    }, {
      label: 'Reports'
    }]} />
      <code style={{
      fontSize: '10px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '4px 8px',
      borderRadius: '4px'
    }}>--breadcrumbs-font-size-default / --breadcrumbs-separator-color</code>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(T=(j=o.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var C,w,I;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px'
  }}>
      {(['sm', 'default', 'lg'] as const).map(size => <Breadcrumbs key={size} size={size} items={[{
      label: 'Home',
      href: '#'
    }, {
      label: 'Section',
      href: '#'
    }, {
      label: 'Current Page'
    }]} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var P,A,M;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Full Design Matrix (9 variants)',
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
}`,...(M=(A=c.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var N,E,Q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(Q=(E=m.parameters)==null?void 0:E.docs)==null?void 0:Q.source}}};var W,Y,_;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(_=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var O,q,G;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(q=d.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const re=["Documentation","Playground","Small","Default","Large","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix","TwoLevel","DeepTrail","ButtonCrumbs"];export{i as AllInteractiveStates,d as ButtonCrumbs,o as ComponentBreakdown,p as DeepTrail,s as Default,r as Documentation,c as FullDesignMatrix,t as Large,n as Playground,l as Small,m as TwoLevel,re as __namedExportsOrder,ae as default};
