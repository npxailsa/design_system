import{j as e}from"./iframe-RnDzjzv1.js";import{B as I,a as Q}from"./BreadcrumbsDocs-B1iC6ZBY.js";import"./preload-helper-Dp1pzeXC.js";import"./DocsTemplate-I26sezOt.js";const G={title:"Foundation/BuildingBlocks/Breadcrumbs",component:I,parameters:{docs:{page:()=>e.jsx(Q,{})}},argTypes:{size:{control:"select",options:["sm","default","lg"]},ariaLabel:{control:"text"},className:{control:"text"}},args:{size:"default",ariaLabel:"Breadcrumb",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},n={name:"Documentation",render:()=>e.jsx(Q,{}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},r={name:"Playground"},l={name:"Size / Small",args:{size:"sm",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},s={name:"Size / Default",args:{size:"default",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},o={name:"Size / Large",args:{size:"lg",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]}},t={name:"Size / All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"24px"},children:["sm","default","lg"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"56px",flexShrink:0,fontSize:"11px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--font-family-primary)"},children:a==="sm"?"Small":a==="lg"?"Large":"Default"}),e.jsx(I,{size:a,items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"Reports"}]})]},a))}),parameters:{controls:{disable:!0}}},i={name:"Trail / Two Level",args:{size:"default",items:[{label:"Finance",href:"#"},{label:"Reports"}]}},m={name:"Trail / Deep (5 Levels)",args:{size:"default",items:[{label:"Home",href:"#"},{label:"Finance",href:"#"},{label:"FY 2025",href:"#"},{label:"Q1",href:"#"},{label:"Reports"}]}},c={name:"Trail / Button Navigation",args:{size:"default",items:[{label:"Home",onClick:()=>alert("Home clicked")},{label:"Finance",onClick:()=>alert("Finance clicked")},{label:"Reports"}]}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,f,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,S,z;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var x,y,F;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(F=(y=s.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var v,D,R;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(R=(D=o.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var H,L,B;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(B=(L=t.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var T,k,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(j=(k=i.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var w,C,A;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(A=(C=m.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var P,N,E;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(E=(N=c.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const J=["Documentation","Playground","Small","Default","Large","AllSizes","TwoLevel","DeepTrail","ButtonCrumbs"];export{t as AllSizes,c as ButtonCrumbs,m as DeepTrail,s as Default,n as Documentation,o as Large,r as Playground,l as Small,i as TwoLevel,J as __namedExportsOrder,G as default};
