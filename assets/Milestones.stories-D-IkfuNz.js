import{j as e}from"./iframe-DFgijXN4.js";import{D as t}from"./DocsTemplate-B8PzL_3D.js";import"./preload-helper-Dp1pzeXC.js";const Me="_root_1lnwd_21",De="_track_1lnwd_32",_e="_dot_1lnwd_40",Ae="_label_1lnwd_61",l={root:Me,track:De,dot:_e,"dot--active":"_dot--active_1lnwd_51","dot--inactive":"_dot--inactive_1lnwd_55",label:Ae,"root--sm":"_root--sm_1lnwd_77","root--default":"_root--default_1lnwd_97","root--lg":"_root--lg_1lnwd_117"},a=({value:s,size:r="default",showLabel:ze=!0,steps:W=10,className:je="",ariaLabel:Se="Milestone progress"})=>{const k=Math.min(100,Math.max(0,s)),we=Math.round(k/100*W),Le=[l.root,l[`root--${r}`],je].filter(Boolean).join(" ");return e.jsxs("div",{className:Le,role:"progressbar","aria-label":Se,"aria-valuenow":k,"aria-valuemin":0,"aria-valuemax":100,children:[e.jsx("div",{className:l.track,children:Array.from({length:W},(Te,M)=>{const ke=M<we,We=[l.dot,ke?l["dot--active"]:l["dot--inactive"]].join(" ");return e.jsx("span",{className:We,"aria-hidden":"true"},M)})}),ze&&e.jsxs("span",{className:l.label,children:[k,"%"]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Milestones",props:{value:{required:!0,tsType:{name:"number"},description:`Current progress value as a percentage (0–100).
Each 10% fills one additional dot (out of 10 total).`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"Visual size of the dots.\n- `sm`      — 8px dots with 4px gap\n- `default` — 12px dots with 6px gap\n- `lg`      — 20px dots with 8px gap\n@default 'default'",defaultValue:{value:"'default'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to display a percentage label to the right of the dots.
@default true`,defaultValue:{value:"true",computed:!1}},steps:{required:!1,tsType:{name:"number"},description:`Total number of milestone dots.
@default 10`,defaultValue:{value:"10",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional extra CSS class for layout overrides.",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for screen readers.
@default 'Milestone progress'`,defaultValue:{value:"'Milestone progress'",computed:!1}}}};const n={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},o=[0,10,20,30,40,50,60,70,80,90,100],Ce=["sm","default","lg"],L=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Milestones",subtitle:"A dot-based milestone progress indicator. Each dot represents an equal step toward completion. Used to communicate discrete progress in onboarding flows, multi-step processes, or task trackers."}),e.jsxs(t.BodyText,{children:[e.jsx("strong",{children:"Milestones"})," is an Atom-level loader primitive. It renders a horizontal row of circular dots — filled dots indicate completed steps, unfilled dots indicate remaining steps. By default 10 dots are displayed, each representing 10% of progress. An optional percentage label is shown to the right. Three size variants control dot diameter and spacing. All colours and dimensions are fully token-driven."]}),e.jsxs(t.Section,{title:"MUI Foundation",children:[e.jsxs(t.BodyText,{children:["Milestones is a ",e.jsx("strong",{children:"pure React component"})," with no MUI base. It renders a flex row of ",e.jsx("code",{children:"<span>"})," dots — filled dots for completed steps, outlined for remaining — driven entirely by CSS Modules and the ",e.jsx("code",{children:"--milestones-*"})," token family. No MUI component is imported; this keeps the loader minimal and interference-free. The optional percentage label is a plain ",e.jsx("code",{children:"<span>"}),"."]}),e.jsx(t.CodeBlock,{children:`// No MUI base import required
// Milestones renders as:
<div className={styles.milestones} data-size={size}>
  {dots.map((filled, i) => (
    <span key={i} className={styles['milestones__dot']} data-filled={filled} />
  ))}
  {showLabel && <span className={styles['milestones__label']}>{value}%</span>}
</div>`})]}),e.jsx(t.Section,{title:"Component Anatomy",children:e.jsx(t.Anatomy,{preview:e.jsxs("div",{style:{...n,minWidth:"200px",width:"100%",maxWidth:"400px"},children:[e.jsx(a,{value:0,size:"default"}),e.jsx(a,{value:50,size:"default"}),e.jsx(a,{value:100,size:"default"})]}),parts:[{id:1,name:"Active dot",token:"--milestones-dot-active-bg",description:"Filled dot indicating a completed milestone step. Colour: primary-sky-blue (#0ba7ea)."},{id:2,name:"Inactive dot",token:"--milestones-dot-inactive-bg",description:"Unfilled dot indicating a remaining milestone step. Colour: neutral-gray-300 (#d2d5da)."},{id:3,name:"Label",token:"--milestones-label-color",description:"Optional percentage text displayed to the right of the dot track. Colour: neutral-gray-700 (#374151). Weight varies by size."}]})}),e.jsx(t.Section,{title:"Size / Small",subtitle:"8px dots with 4px gap. Compact milestone indicator for dense layouts.",children:e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...n},children:o.map(s=>e.jsx(a,{value:s,size:"sm"},s))})}),e.jsx(t.Section,{title:"Size / Default",subtitle:"12px dots with 6px gap. Standard milestone indicator for most use cases. Label is semibold for added legibility.",children:e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...n},children:o.map(s=>e.jsx(a,{value:s,size:"default"},s))})}),e.jsx(t.Section,{title:"Size / Large",subtitle:"20px dots with 8px gap. High-visibility milestone indicator for prominent status displays.",children:e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...n},children:o.map(s=>e.jsx(a,{value:s,size:"lg"},s))})}),e.jsx(t.Section,{title:"Size / All (Side by Side)",subtitle:"All three size variants at every 10% step for direct comparison.",children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(200px, 1fr))",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:Ce.map(s=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:o.map(r=>e.jsx(a,{value:r,size:s},r))},s))})}),e.jsx(t.Section,{title:"Without Label",subtitle:"Use showLabel={false} when a label is supplied externally or space is constrained.",children:e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...n},children:o.map(s=>e.jsx(a,{value:s,showLabel:!1},s))})}),e.jsx(t.Section,{title:"Custom Step Count",subtitle:"Use the steps prop to control the number of milestone dots (default 10). Useful for tracking explicit task counts.",children:e.jsxs("div",{style:{minWidth:"200px",width:"100%",maxWidth:"480px",...n},children:[e.jsx(a,{value:0,steps:5,size:"default"}),e.jsx(a,{value:20,steps:5,size:"default"}),e.jsx(a,{value:40,steps:5,size:"default"}),e.jsx(a,{value:60,steps:5,size:"default"}),e.jsx(a,{value:80,steps:5,size:"default"}),e.jsx(a,{value:100,steps:5,size:"default"})]})}),e.jsx(t.Section,{title:"Design Tokens",children:e.jsx(t.Subsection,{title:"Component Tokens",children:e.jsx(t.TokenTable,{tokens:[{name:"--milestones-dot-active-bg",description:"Active (completed) dot colour — var(--global-color-primary-sky-blue) #0BA7EA."},{name:"--milestones-dot-inactive-bg",description:"Inactive (remaining) dot colour — var(--global-color-neutral-gray-300) #D2D5DA."},{name:"--milestones-label-color",description:"Label text colour — var(--global-color-neutral-gray-700) #374151."},{name:"--milestones-gap-sm",description:"Inter-dot gap for size sm — var(--global-spacing-sizing-4px) 4px."},{name:"--milestones-gap-default",description:"Inter-dot gap for size default — var(--global-spacing-sizing-6px) 6px."},{name:"--milestones-gap-lg",description:"Inter-dot gap for size lg — var(--global-spacing-sizing-8px) 8px."},{name:"--milestones-label-gap-sm",description:"Track-to-label spacing for size sm — var(--global-spacing-sizing-4px) 4px. (min 4px)"},{name:"--milestones-label-gap-default",description:"Track-to-label spacing for size default — var(--global-spacing-sizing-8px) 8px."},{name:"--milestones-label-gap-lg",description:"Track-to-label spacing for size lg — var(--global-spacing-sizing-16px) 16px. (max 16px)"},{name:"--progress-dot-size-sm",description:"Dot diameter for size sm — var(--global-spacing-sizing-8px) 8px."},{name:"--progress-dot-size-default",description:"Dot diameter for size default — var(--global-spacing-sizing-12px) 12px."},{name:"--progress-dot-size-lg",description:"Dot diameter for size lg — var(--global-spacing-sizing-20px) 20px."}]})})}),e.jsx(t.Section,{title:"Props Reference",children:e.jsx(t.TokenTable,{tokens:[{name:"value",description:"number (0–100) — required. Current progress percentage. Values outside 0–100 are clamped."},{name:"size",description:'"sm" | "default" | "lg" — dot size and spacing. Default: "default".'},{name:"showLabel",description:"boolean — whether to render the percentage label to the right. Default: true."},{name:"steps",description:"number — total number of milestone dots to display. Default: 10."},{name:"className",description:"string — optional CSS class for layout overrides."},{name:"ariaLabel",description:'string — accessible label for screen readers. Default: "Milestone progress".'}]})}),e.jsx(t.Section,{title:"Usage",children:e.jsx(t.CodeBlock,{children:`import { Milestones } from './Milestones';

// Default — 10 dots, medium size, with percentage label
<Milestones value={60} />

// Small, no label
<Milestones value={40} size="sm" showLabel={false} />

// Large with accessible label
<Milestones value={75} size="lg" ariaLabel="Onboarding progress" />

// Custom step count — 5 dots, each = 20%
<Milestones value={60} steps={5} />

// Zero progress
<Milestones value={0} />

// Fully complete
<Milestones value={100} />`})}),e.jsx(t.Section,{title:"Design Principles",children:e.jsxs(t.Principles,{children:[e.jsxs(t.PrincipleCard,{number:1,title:"Value is always a percentage",children:["The ",e.jsx("code",{children:"value"})," prop is always 0–100. The number of filled dots is computed as ",e.jsx("code",{children:"Math.round((value / 100) × steps)"}),", so a value of 50 with 10 steps fills exactly 5 dots."]}),e.jsxs(t.PrincipleCard,{number:2,title:"Dots, not bars, for discrete steps",children:["Use ",e.jsx("strong",{children:"Milestones"})," when progress is measured in discrete, equal stages (e.g., onboarding steps, survey completion). For continuous progress or file uploads, use ",e.jsx("strong",{children:"ProgressBar"})," instead."]}),e.jsxs(t.PrincipleCard,{number:3,title:"Match size to context",children:["Use ",e.jsx("strong",{children:"sm"})," inside compact list rows or data tables. Use"," ",e.jsx("strong",{children:"default"})," for task trackers and onboarding cards. Use"," ",e.jsx("strong",{children:"lg"})," for prominent dashboard metrics or hero sections."]}),e.jsxs(t.PrincipleCard,{number:4,title:"Provide a meaningful ariaLabel",children:["The default ",e.jsx("code",{children:'ariaLabel="Milestone progress"'})," is generic. Set a descriptive label such as ",e.jsx("code",{children:'"Onboarding step 3 of 5"'})," for screen reader users."]})]})}),e.jsx(t.Footer,{})]});L.__docgenInfo={description:"",methods:[],displayName:"MilestonesDocs"};const ye=["sm","default","lg"],d=[0,10,20,30,40,50,60,70,80,90,100],Pe={title:"Atoms/Loaders/Milestones",component:a,parameters:{docs:{page:()=>e.jsx(L,{})}},argTypes:{value:{control:{type:"range",min:0,max:100,step:10}},size:{control:"select",options:ye},showLabel:{control:"boolean"},steps:{control:{type:"number",min:1,max:20,step:1}},className:{control:!1},ariaLabel:{control:"text"}},args:{value:60,size:"default",showLabel:!0,steps:10,ariaLabel:"Milestone progress"}},i={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},p={name:"Documentation",tags:["!autodocs"],parameters:{docs:{page:()=>e.jsx(L,{})},chromatic:{disableSnapshot:!0}},render:()=>e.jsx(L,{})},c={name:"Playground",render:s=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"480px",padding:"var(--global-spacing-sizing-24px)"},children:e.jsx(a,{...s})})},u={name:"Size / Small",render:()=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:d.map(s=>e.jsx(a,{value:s,size:"sm"},s))}),parameters:{controls:{disable:!0}}},m={name:"Size / Default",render:()=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:d.map(s=>e.jsx(a,{value:s,size:"default"},s))}),parameters:{controls:{disable:!0}}},g={name:"Size / Large",render:()=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:d.map(s=>e.jsx(a,{value:s,size:"lg"},s))}),parameters:{controls:{disable:!0}}},x={name:"Default",args:{value:50,size:"default",showLabel:!0}},h={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"16px",maxWidth:"360px"},children:["sm","default","lg"].map(s=>e.jsx(a,{size:s,value:50,showLabel:!0},s))}),parameters:{controls:{disable:!0}}},v={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"360px"},children:[e.jsx(a,{size:"default",value:33,showLabel:!0}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"--milestones-track-height / --milestones-fill-color"}),e.jsx(a,{size:"default",value:66,showLabel:!1}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"Without label"})]}),parameters:{controls:{disable:!0}}},b={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"24px",maxWidth:"360px"},children:[e.jsx(a,{size:"default",value:0,showLabel:!0}),e.jsx(a,{size:"default",value:25,showLabel:!0}),e.jsx(a,{size:"default",value:50,showLabel:!0}),e.jsx(a,{size:"default",value:75,showLabel:!0}),e.jsx(a,{size:"default",value:100,showLabel:!0})]}),parameters:{controls:{disable:!0}}},f={name:"Full Design Matrix (12 variants)",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(200px, 1fr))",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:ye.map(s=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:d.map(r=>e.jsx(a,{value:r,size:s},r))},s))}),parameters:{controls:{disable:!0}}},y={name:"Without Label",render:()=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:d.map(s=>e.jsx(a,{value:s,showLabel:!1},s))}),parameters:{controls:{disable:!0}}},z={name:"Custom Step Count / 5 Steps",render:()=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:[0,20,40,60,80,100].map(s=>e.jsx(a,{value:s,steps:5,size:"default"},s))}),parameters:{controls:{disable:!0}}},j={name:"Value / 0%",args:{value:0,size:"default"},render:s=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:e.jsx(a,{...s})})},S={name:"Value / 50%",args:{value:50,size:"default"},render:s=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:e.jsx(a,{...s})})},w={name:"Value / 100%",args:{value:100,size:"default"},render:s=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:e.jsx(a,{...s})})};var D,_,A;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Documentation',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: () => <MilestonesDocs />
    },
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <MilestonesDocs />
}`,...(A=(_=p.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var C,T,U;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    minWidth: '200px',
    width: '100%',
    maxWidth: '480px',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      <Milestones {...args} />
    </div>
}`,...(U=(T=c.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var V,I,P;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Size / Small',
  render: () => <div style={{
    minWidth: '200px',
    width: '100%',
    maxWidth: '400px',
    ...stack
  }}>
      {ALL_VALUES.map(v => <Milestones key={v} value={v} size="sm" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(P=(I=u.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var E,N,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Size / Default',
  render: () => <div style={{
    minWidth: '200px',
    width: '100%',
    maxWidth: '400px',
    ...stack
  }}>
      {ALL_VALUES.map(v => <Milestones key={v} value={v} size="default" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(N=m.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var F,R,q;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Size / Large',
  render: () => <div style={{
    minWidth: '200px',
    width: '100%',
    maxWidth: '400px',
    ...stack
  }}>
      {ALL_VALUES.map(v => <Milestones key={v} value={v} size="lg" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(R=g.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var Z,O,H;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    value: 50,
    size: 'default',
    showLabel: true
  }
}`,...(H=(O=x.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var $,G,J;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '16px',
    maxWidth: '360px'
  }}>
      {(['sm', 'default', 'lg'] as const).map(size => <Milestones key={size} size={size} value={50} showLabel />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '360px'
  }}>
      <Milestones size="default" value={33} showLabel />
      <code style={{
      fontSize: '10px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '4px 8px',
      borderRadius: '4px'
    }}>--milestones-track-height / --milestones-fill-color</code>
      <Milestones size="default" value={66} showLabel={false} />
      <code style={{
      fontSize: '10px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '4px 8px',
      borderRadius: '4px'
    }}>Without label</code>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,se;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '24px',
    maxWidth: '360px'
  }}>
      <Milestones size="default" value={0} showLabel />
      <Milestones size="default" value={25} showLabel />
      <Milestones size="default" value={50} showLabel />
      <Milestones size="default" value={75} showLabel />
      <Milestones size="default" value={100} showLabel />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var ae,te,ie;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Full Design Matrix (12 variants)',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))',
    gap: 'var(--global-spacing-sizing-32px)',
    padding: 'var(--global-spacing-sizing-24px)',
    background: 'var(--global-color-neutral-gray-50)',
    borderRadius: 'var(--global-spacing-radius-8px)'
  }}>
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-12px)'
    }}>
          {ALL_VALUES.map(v => <Milestones key={v} value={v} size={size} />)}
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var re,le,ne;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Without Label',
  render: () => <div style={{
    minWidth: '200px',
    width: '100%',
    maxWidth: '400px',
    ...stack
  }}>
      {ALL_VALUES.map(v => <Milestones key={v} value={v} showLabel={false} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ne=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var oe,de,pe;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Custom Step Count / 5 Steps',
  render: () => <div style={{
    minWidth: '200px',
    width: '100%',
    maxWidth: '400px',
    ...stack
  }}>
      {[0, 20, 40, 60, 80, 100].map(v => <Milestones key={v} value={v} steps={5} size="default" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pe=(de=z.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,ue,me;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Value / 0%',
  args: {
    value: 0,
    size: 'default'
  },
  render: args => <div style={{
    minWidth: '200px',
    width: '100%',
    maxWidth: '400px',
    ...stack
  }}>
      <Milestones {...args} />
    </div>
}`,...(me=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ge,xe,he;S.parameters={...S.parameters,docs:{...(ge=S.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Value / 50%',
  args: {
    value: 50,
    size: 'default'
  },
  render: args => <div style={{
    minWidth: '200px',
    width: '100%',
    maxWidth: '400px',
    ...stack
  }}>
      <Milestones {...args} />
    </div>
}`,...(he=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var ve,be,fe;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Value / 100%',
  args: {
    value: 100,
    size: 'default'
  },
  render: args => <div style={{
    minWidth: '200px',
    width: '100%',
    maxWidth: '400px',
    ...stack
  }}>
      <Milestones {...args} />
    </div>
}`,...(fe=(be=w.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};const Ee=["Documentation","Playground","SizeSmall","SizeDefault","SizeLarge","Default","Sizes","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix","WithoutLabel","CustomSteps","ZeroPercent","HalfPercent","FullPercent"];export{b as AllInteractiveStates,v as ComponentBreakdown,z as CustomSteps,x as Default,p as Documentation,f as FullDesignMatrix,w as FullPercent,S as HalfPercent,c as Playground,m as SizeDefault,g as SizeLarge,u as SizeSmall,h as Sizes,y as WithoutLabel,j as ZeroPercent,Ee as __namedExportsOrder,Pe as default};
