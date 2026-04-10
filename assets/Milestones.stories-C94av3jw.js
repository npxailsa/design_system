import{j as e}from"./iframe-Cqdqh0qK.js";import{D as t}from"./DocsTemplate-Cz6tFo94.js";import"./preload-helper-Dp1pzeXC.js";const me="_root_1lnwd_21",ue="_track_1lnwd_32",ge="_dot_1lnwd_40",xe="_label_1lnwd_61",l={root:me,track:ue,dot:ge,"dot--active":"_dot--active_1lnwd_51","dot--inactive":"_dot--inactive_1lnwd_55",label:xe,"root--sm":"_root--sm_1lnwd_77","root--default":"_root--default_1lnwd_97","root--lg":"_root--lg_1lnwd_117"},a=({value:s,size:r="default",showLabel:re=!0,steps:S=10,className:le="",ariaLabel:ne="Milestone progress"})=>{const j=Math.min(100,Math.max(0,s)),oe=Math.round(j/100*S),de=[l.root,l[`root--${r}`],le].filter(Boolean).join(" ");return e.jsxs("div",{className:de,role:"progressbar","aria-label":ne,"aria-valuenow":j,"aria-valuemin":0,"aria-valuemax":100,children:[e.jsx("div",{className:l.track,children:Array.from({length:S},(ve,w)=>{const pe=w<oe,ce=[l.dot,pe?l["dot--active"]:l["dot--inactive"]].join(" ");return e.jsx("span",{className:ce,"aria-hidden":"true"},w)})}),re&&e.jsxs("span",{className:l.label,children:[j,"%"]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Milestones",props:{value:{required:!0,tsType:{name:"number"},description:`Current progress value as a percentage (0–100).
Each 10% fills one additional dot (out of 10 total).`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"Visual size of the dots.\n- `sm`      — 8px dots with 4px gap\n- `default` — 12px dots with 6px gap\n- `lg`      — 20px dots with 8px gap\n@default 'default'",defaultValue:{value:"'default'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to display a percentage label to the right of the dots.
@default true`,defaultValue:{value:"true",computed:!1}},steps:{required:!1,tsType:{name:"number"},description:`Total number of milestone dots.
@default 10`,defaultValue:{value:"10",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional extra CSS class for layout overrides.",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for screen readers.
@default 'Milestone progress'`,defaultValue:{value:"'Milestone progress'",computed:!1}}}};const n={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},o=[0,10,20,30,40,50,60,70,80,90,100],he=["sm","default","lg"],z=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Milestones",subtitle:"A dot-based milestone progress indicator. Each dot represents an equal step toward completion. Used to communicate discrete progress in onboarding flows, multi-step processes, or task trackers."}),e.jsxs(t.BodyText,{children:[e.jsx("strong",{children:"Milestones"})," is an Atom-level loader primitive. It renders a horizontal row of circular dots — filled dots indicate completed steps, unfilled dots indicate remaining steps. By default 10 dots are displayed, each representing 10% of progress. An optional percentage label is shown to the right. Three size variants control dot diameter and spacing. All colours and dimensions are fully token-driven."]}),e.jsx(t.Section,{title:"Component Anatomy",children:e.jsx(t.Anatomy,{preview:e.jsxs("div",{style:{...n,minWidth:"200px",width:"100%",maxWidth:"400px"},children:[e.jsx(a,{value:0,size:"default"}),e.jsx(a,{value:50,size:"default"}),e.jsx(a,{value:100,size:"default"})]}),parts:[{id:1,name:"Active dot",token:"--milestones-dot-active-bg",description:"Filled dot indicating a completed milestone step. Colour: primary-sky-blue (#0ba7ea)."},{id:2,name:"Inactive dot",token:"--milestones-dot-inactive-bg",description:"Unfilled dot indicating a remaining milestone step. Colour: neutral-gray-300 (#d2d5da)."},{id:3,name:"Label",token:"--milestones-label-color",description:"Optional percentage text displayed to the right of the dot track. Colour: neutral-gray-700 (#374151). Weight varies by size."}]})}),e.jsx(t.Section,{title:"Size / Small",subtitle:"8px dots with 4px gap. Compact milestone indicator for dense layouts.",children:e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...n},children:o.map(s=>e.jsx(a,{value:s,size:"sm"},s))})}),e.jsx(t.Section,{title:"Size / Default",subtitle:"12px dots with 6px gap. Standard milestone indicator for most use cases. Label is semibold for added legibility.",children:e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...n},children:o.map(s=>e.jsx(a,{value:s,size:"default"},s))})}),e.jsx(t.Section,{title:"Size / Large",subtitle:"20px dots with 8px gap. High-visibility milestone indicator for prominent status displays.",children:e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...n},children:o.map(s=>e.jsx(a,{value:s,size:"lg"},s))})}),e.jsx(t.Section,{title:"Size / All (Side by Side)",subtitle:"All three size variants at every 10% step for direct comparison.",children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(200px, 1fr))",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:he.map(s=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:o.map(r=>e.jsx(a,{value:r,size:s},r))},s))})}),e.jsx(t.Section,{title:"Without Label",subtitle:"Use showLabel={false} when a label is supplied externally or space is constrained.",children:e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...n},children:o.map(s=>e.jsx(a,{value:s,showLabel:!1},s))})}),e.jsx(t.Section,{title:"Custom Step Count",subtitle:"Use the steps prop to control the number of milestone dots (default 10). Useful for tracking explicit task counts.",children:e.jsxs("div",{style:{minWidth:"200px",width:"100%",maxWidth:"480px",...n},children:[e.jsx(a,{value:0,steps:5,size:"default"}),e.jsx(a,{value:20,steps:5,size:"default"}),e.jsx(a,{value:40,steps:5,size:"default"}),e.jsx(a,{value:60,steps:5,size:"default"}),e.jsx(a,{value:80,steps:5,size:"default"}),e.jsx(a,{value:100,steps:5,size:"default"})]})}),e.jsx(t.Section,{title:"Design Tokens",children:e.jsx(t.Subsection,{title:"Component Tokens",children:e.jsx(t.TokenTable,{tokens:[{name:"--milestones-dot-active-bg",description:"Active (completed) dot colour — var(--global-color-primary-sky-blue) #0BA7EA."},{name:"--milestones-dot-inactive-bg",description:"Inactive (remaining) dot colour — var(--global-color-neutral-gray-300) #D2D5DA."},{name:"--milestones-label-color",description:"Label text colour — var(--global-color-neutral-gray-700) #374151."},{name:"--milestones-gap-sm",description:"Inter-dot gap for size sm — var(--global-spacing-sizing-4px) 4px."},{name:"--milestones-gap-default",description:"Inter-dot gap for size default — var(--global-spacing-sizing-6px) 6px."},{name:"--milestones-gap-lg",description:"Inter-dot gap for size lg — var(--global-spacing-sizing-8px) 8px."},{name:"--milestones-label-gap-sm",description:"Track-to-label spacing for size sm — var(--global-spacing-sizing-4px) 4px. (min 4px)"},{name:"--milestones-label-gap-default",description:"Track-to-label spacing for size default — var(--global-spacing-sizing-8px) 8px."},{name:"--milestones-label-gap-lg",description:"Track-to-label spacing for size lg — var(--global-spacing-sizing-16px) 16px. (max 16px)"},{name:"--progress-dot-size-sm",description:"Dot diameter for size sm — var(--global-spacing-sizing-8px) 8px."},{name:"--progress-dot-size-default",description:"Dot diameter for size default — var(--global-spacing-sizing-12px) 12px."},{name:"--progress-dot-size-lg",description:"Dot diameter for size lg — var(--global-spacing-sizing-20px) 20px."}]})})}),e.jsx(t.Section,{title:"Props Reference",children:e.jsx(t.TokenTable,{tokens:[{name:"value",description:"number (0–100) — required. Current progress percentage. Values outside 0–100 are clamped."},{name:"size",description:'"sm" | "default" | "lg" — dot size and spacing. Default: "default".'},{name:"showLabel",description:"boolean — whether to render the percentage label to the right. Default: true."},{name:"steps",description:"number — total number of milestone dots to display. Default: 10."},{name:"className",description:"string — optional CSS class for layout overrides."},{name:"ariaLabel",description:'string — accessible label for screen readers. Default: "Milestone progress".'}]})}),e.jsx(t.Section,{title:"Usage",children:e.jsx(t.CodeBlock,{children:`import { Milestones } from './Milestones';

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
<Milestones value={100} />`})}),e.jsx(t.Section,{title:"Design Principles",children:e.jsxs(t.Principles,{children:[e.jsxs(t.PrincipleCard,{number:1,title:"Value is always a percentage",children:["The ",e.jsx("code",{children:"value"})," prop is always 0–100. The number of filled dots is computed as ",e.jsx("code",{children:"Math.round((value / 100) × steps)"}),", so a value of 50 with 10 steps fills exactly 5 dots."]}),e.jsxs(t.PrincipleCard,{number:2,title:"Dots, not bars, for discrete steps",children:["Use ",e.jsx("strong",{children:"Milestones"})," when progress is measured in discrete, equal stages (e.g., onboarding steps, survey completion). For continuous progress or file uploads, use ",e.jsx("strong",{children:"ProgressBar"})," instead."]}),e.jsxs(t.PrincipleCard,{number:3,title:"Match size to context",children:["Use ",e.jsx("strong",{children:"sm"})," inside compact list rows or data tables. Use"," ",e.jsx("strong",{children:"default"})," for task trackers and onboarding cards. Use"," ",e.jsx("strong",{children:"lg"})," for prominent dashboard metrics or hero sections."]}),e.jsxs(t.PrincipleCard,{number:4,title:"Provide a meaningful ariaLabel",children:["The default ",e.jsx("code",{children:'ariaLabel="Milestone progress"'})," is generic. Set a descriptive label such as ",e.jsx("code",{children:'"Onboarding step 3 of 5"'})," for screen reader users."]})]})}),e.jsx(t.Footer,{})]});z.__docgenInfo={description:"",methods:[],displayName:"MilestonesDocs"};const ie=["sm","default","lg"],d=[0,10,20,30,40,50,60,70,80,90,100],ze={title:"Atoms/Loaders/Milestones",component:a,parameters:{docs:{page:()=>e.jsx(z,{})}},argTypes:{value:{control:{type:"range",min:0,max:100,step:10}},size:{control:"select",options:ie},showLabel:{control:"boolean"},steps:{control:{type:"number",min:1,max:20,step:1}},className:{control:!1},ariaLabel:{control:"text"}},args:{value:60,size:"default",showLabel:!0,steps:10,ariaLabel:"Milestone progress"}},i={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},p={name:"Documentation",tags:["!autodocs"],parameters:{docs:{page:()=>e.jsx(z,{})},chromatic:{disableSnapshot:!0}},render:()=>e.jsx(z,{})},c={name:"Playground",render:s=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"480px",padding:"var(--global-spacing-sizing-24px)"},children:e.jsx(a,{...s})})},m={name:"Size / Small",render:()=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:d.map(s=>e.jsx(a,{value:s,size:"sm"},s))}),parameters:{controls:{disable:!0}}},u={name:"Size / Default",render:()=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:d.map(s=>e.jsx(a,{value:s,size:"default"},s))}),parameters:{controls:{disable:!0}}},g={name:"Size / Large",render:()=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:d.map(s=>e.jsx(a,{value:s,size:"lg"},s))}),parameters:{controls:{disable:!0}}},x={name:"Size / All (Side by Side)",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(200px, 1fr))",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:ie.map(s=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:d.map(r=>e.jsx(a,{value:r,size:s},r))},s))}),parameters:{controls:{disable:!0}}},h={name:"Without Label",render:()=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:d.map(s=>e.jsx(a,{value:s,showLabel:!1},s))}),parameters:{controls:{disable:!0}}},v={name:"Custom Step Count / 5 Steps",render:()=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:[0,20,40,60,80,100].map(s=>e.jsx(a,{value:s,steps:5,size:"default"},s))}),parameters:{controls:{disable:!0}}},b={name:"Value / 0%",args:{value:0,size:"default"},render:s=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:e.jsx(a,{...s})})},f={name:"Value / 50%",args:{value:50,size:"default"},render:s=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:e.jsx(a,{...s})})},y={name:"Value / 100%",args:{value:100,size:"default"},render:s=>e.jsx("div",{style:{minWidth:"200px",width:"100%",maxWidth:"400px",...i},children:e.jsx(a,{...s})})};var L,W,k;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(W=p.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var _,M,A;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    minWidth: '200px',
    width: '100%',
    maxWidth: '480px',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      <Milestones {...args} />
    </div>
}`,...(A=(M=c.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var D,C,T;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(C=m.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var V,P,U;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(U=(P=u.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var E,I,q;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(q=(I=g.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var N,F,R;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Size / All (Side by Side)',
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
}`,...(R=(F=x.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var B,Z,O;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:O.source}}};var H,$,G;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(G=($=v.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var se,ae,te;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(te=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const je=["Documentation","Playground","SizeSmall","SizeDefault","SizeLarge","AllSizes","WithoutLabel","CustomSteps","ZeroPercent","HalfPercent","FullPercent"];export{x as AllSizes,v as CustomSteps,p as Documentation,y as FullPercent,f as HalfPercent,c as Playground,u as SizeDefault,g as SizeLarge,m as SizeSmall,h as WithoutLabel,b as ZeroPercent,je as __namedExportsOrder,ze as default};
