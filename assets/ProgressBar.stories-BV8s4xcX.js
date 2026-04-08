import{j as e}from"./iframe-Bd2dYSjB.js";import{D as r}from"./DocsTemplate-BrbJ48zK.js";import"./preload-helper-Dp1pzeXC.js";const te="_root_ukwpc_21",le="_track_ukwpc_31",ie="_fill_ukwpc_43",oe="_dot_ukwpc_52",ne="_label_ukwpc_61",i={root:te,track:le,fill:ie,dot:oe,label:ne,"root--sm":"_root--sm_ukwpc_78","root--default":"_root--default_ukwpc_94","root--lg":"_root--lg_ukwpc_110"},s=({value:a,size:t="default",showLabel:Y=!0,className:ee="",ariaLabel:ae="Progress"})=>{const c=Math.min(100,Math.max(0,a)),re=c===0,se=[i.root,i[`root--${t}`],ee].filter(Boolean).join(" ");return e.jsxs("div",{className:se,children:[e.jsx("div",{className:i.track,role:"progressbar","aria-label":ae,"aria-valuenow":c,"aria-valuemin":0,"aria-valuemax":100,children:re?e.jsx("span",{className:i.dot}):e.jsx("div",{className:i.fill,style:{width:`${c}%`}})}),Y&&e.jsxs("span",{className:i.label,children:[c,"%"]})]})};s.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:"Current progress value as a percentage (0–100)."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"Visual size of the progress bar — controls track height and indicator dot.\n- `sm`      — thin (4px track)\n- `default` — medium (8px track)\n- `lg`      — thick (16px track)\n@default 'default'",defaultValue:{value:"'default'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to display a percentage label to the right of the track.
@default true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional extra CSS class for layout overrides.",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for screen readers.
@default 'Progress'`,defaultValue:{value:"'Progress'",computed:!1}}}};const o={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},n=[0,10,20,30,40,50,60,70,80,90,100],de=["sm","default","lg"],z=()=>e.jsxs(r,{children:[e.jsx(r.Header,{title:"ProgressBar",subtitle:"A horizontal loading indicator that fills left-to-right based on a numeric value (0–100). Used to communicate the current state of a task, upload, or process."}),e.jsxs(r.BodyText,{children:[e.jsx("strong",{children:"ProgressBar"})," is an Atom-level loader primitive. It renders a rounded track with a blue fill proportional to the ",e.jsx("code",{children:"value"})," prop. At 0% a dot indicator replaces the fill to clearly signal the process has not started. An optional percentage label is shown to the right of the track. Three size variants control track height and label weight. All colours and dimensions are fully token-driven."]}),e.jsx(r.Section,{title:"Component Anatomy",children:e.jsx(r.Anatomy,{preview:e.jsxs("div",{style:{...o,maxWidth:"400px"},children:[e.jsx(s,{value:0,size:"default"}),e.jsx(s,{value:50,size:"default"}),e.jsx(s,{value:100,size:"default"})]}),parts:[{id:1,name:"Track",token:"--progress-track-bg",description:"Full-width rounded background bar. Colour: neutral-gray-200. Always full width of its container."},{id:2,name:"Fill",token:"--progress-fill-bg",description:"The filled portion of the track. Width is set inline to `value%`. Colour: primary-sky-blue (#0ba7ea). Rounded on both ends."},{id:3,name:"Dot indicator",token:"--progress-dot-bg",description:"Shown only at 0% to signal the process has not yet started. Circular, same colour as the fill."},{id:4,name:"Label",token:"--progress-label-color",description:"Optional percentage text to the right of the track. Weight varies by size: default size uses semibold, sm and lg use regular."}]})}),e.jsx(r.Section,{title:"Size / Small",subtitle:"4px track height. Thin, compact progress indicator for dense layouts.",children:e.jsx("div",{style:{maxWidth:"360px",...o},children:n.map(a=>e.jsx(s,{value:a,size:"sm"},a))})}),e.jsx(r.Section,{title:"Size / Default",subtitle:"8px track height. Standard progress bar for most use cases. Label is semibold for added legibility.",children:e.jsx("div",{style:{maxWidth:"360px",...o},children:n.map(a=>e.jsx(s,{value:a,size:"default"},a))})}),e.jsx(r.Section,{title:"Size / Large",subtitle:"16px track height. High-visibility progress indicator for prominent status displays.",children:e.jsx("div",{style:{maxWidth:"360px",...o},children:n.map(a=>e.jsx(s,{value:a,size:"lg"},a))})}),e.jsx(r.Section,{title:"Size / All (Side by Side)",subtitle:"All three size variants at every 10% step for direct comparison.",children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:de.map(a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:n.map(t=>e.jsx(s,{value:t,size:a},t))},a))})}),e.jsx(r.Section,{title:"Without Label",subtitle:"Use showLabel={false} when a label is supplied externally or space is constrained.",children:e.jsx("div",{style:{maxWidth:"320px",...o},children:n.map(a=>e.jsx(s,{value:a,showLabel:!1},a))})}),e.jsx(r.Section,{title:"Design Tokens",children:e.jsx(r.Subsection,{title:"Component Tokens",children:e.jsx(r.TokenTable,{tokens:[{name:"--progress-track-bg",description:"Track background — var(--global-color-neutral-gray-200) #E5E7EB."},{name:"--progress-fill-bg",description:"Fill colour — var(--global-color-primary-sky-blue) #0BA7EA."},{name:"--progress-dot-bg",description:"Zero-state dot colour — var(--global-color-primary-sky-blue) #0BA7EA."},{name:"--progress-label-color",description:"Label text colour — var(--global-color-neutral-gray-700) #374151."},{name:"--progress-track-height-sm",description:"Track height for size sm — var(--global-spacing-sizing-4px) 4px."},{name:"--progress-track-height-default",description:"Track height for size default — var(--global-spacing-sizing-8px) 8px."},{name:"--progress-track-height-lg",description:"Track height for size lg — var(--global-spacing-sizing-16px) 16px."},{name:"--progress-dot-size-sm",description:"Dot diameter for size sm — 6px."},{name:"--progress-dot-size-default",description:"Dot diameter for size default — var(--global-spacing-sizing-10px) 10px."},{name:"--progress-dot-size-lg",description:"Dot diameter for size lg — var(--global-spacing-sizing-20px) 20px."}]})})}),e.jsx(r.Section,{title:"Props Reference",children:e.jsx(r.TokenTable,{tokens:[{name:"value",description:"number (0–100) — required. Current progress percentage. Values outside 0–100 are clamped."},{name:"size",description:'"sm" | "default" | "lg" — track height and label weight. Default: "default".'},{name:"showLabel",description:"boolean — whether to render the percentage label to the right. Default: true."},{name:"className",description:"string — optional CSS class for layout overrides."},{name:"ariaLabel",description:'string — accessible label for screen readers. Default: "Progress".'}]})}),e.jsx(r.Section,{title:"Usage",children:e.jsx(r.CodeBlock,{children:`import { ProgressBar } from './ProgressBar';

// Default — medium track with percentage label
<ProgressBar value={60} />

// Small, no label
<ProgressBar value={40} size="sm" showLabel={false} />

// Large with accessible label
<ProgressBar value={75} size="lg" ariaLabel="File upload progress" />

// Zero state — shows dot indicator
<ProgressBar value={0} />

// Fully complete
<ProgressBar value={100} />`})}),e.jsx(r.Section,{title:"Design Principles",children:e.jsxs(r.Principles,{children:[e.jsx(r.PrincipleCard,{number:1,title:"Always clamp the value",children:"Values below 0 are rendered as 0 (dot indicator) and values above 100 render as 100. Never allow the fill to exceed the track bounds."}),e.jsx(r.PrincipleCard,{number:2,title:"Dot at zero is intentional",children:"A 0% progress bar without any visual affordance looks indistinguishable from an empty track. The dot indicator makes it clear the process exists but has not started."}),e.jsxs(r.PrincipleCard,{number:3,title:"Match size to context",children:["Use ",e.jsx("strong",{children:"sm"})," inside compact list rows or data tables. Use"," ",e.jsx("strong",{children:"default"})," for form uploads and task trackers. Use"," ",e.jsx("strong",{children:"lg"})," for prominent dashboard metrics or onboarding flows."]}),e.jsxs(r.PrincipleCard,{number:4,title:"Provide a meaningful ariaLabel",children:["The default ",e.jsx("code",{children:'ariaLabel="Progress"'})," is generic. Set a descriptive label such as ",e.jsx("code",{children:'"File upload progress"'})," or ",e.jsx("code",{children:'"Step 2 of 4"'})," for screen reader users."]})]})}),e.jsx(r.Footer,{})]});z.__docgenInfo={description:"",methods:[],displayName:"ProgressBarDocs"};const X=["sm","default","lg"],d=[0,10,20,30,40,50,60,70,80,90,100],ge={title:"Atoms/Loaders/ProgressBar",component:s,parameters:{docs:{page:()=>e.jsx(z,{})}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},size:{control:"select",options:X},showLabel:{control:"boolean"},className:{control:!1},ariaLabel:{control:"text"}},args:{value:60,size:"default",showLabel:!0,ariaLabel:"Progress"}},l={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},p={name:"Documentation",tags:["!autodocs"],parameters:{docs:{page:()=>e.jsx(z,{})},chromatic:{disableSnapshot:!0}},render:()=>e.jsx(z,{})},u={name:"Playground",render:a=>e.jsx("div",{style:{maxWidth:"480px",padding:"var(--global-spacing-sizing-24px)"},children:e.jsx(s,{...a})})},g={name:"Size / Small",render:()=>e.jsx("div",{style:{maxWidth:"360px",...l},children:d.map(a=>e.jsx(s,{value:a,size:"sm"},a))}),parameters:{controls:{disable:!0}}},m={name:"Size / Default",render:()=>e.jsx("div",{style:{maxWidth:"360px",...l},children:d.map(a=>e.jsx(s,{value:a,size:"default"},a))}),parameters:{controls:{disable:!0}}},x={name:"Size / Large",render:()=>e.jsx("div",{style:{maxWidth:"360px",...l},children:d.map(a=>e.jsx(s,{value:a,size:"lg"},a))}),parameters:{controls:{disable:!0}}},h={name:"Size / All (Side by Side)",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:X.map(a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:d.map(t=>e.jsx(s,{value:t,size:a},t))},a))}),parameters:{controls:{disable:!0}}},b={name:"Without Label",render:()=>e.jsx("div",{style:{maxWidth:"360px",...l},children:d.map(a=>e.jsx(s,{value:a,showLabel:!1},a))}),parameters:{controls:{disable:!0}}},v={name:"Value / 0%",args:{value:0,size:"default"},render:a=>e.jsx("div",{style:{maxWidth:"360px",...l},children:e.jsx(s,{...a})})},f={name:"Value / 50%",args:{value:50,size:"default"},render:a=>e.jsx("div",{style:{maxWidth:"360px",...l},children:e.jsx(s,{...a})})},y={name:"Value / 100%",args:{value:100,size:"default"},render:a=>e.jsx("div",{style:{maxWidth:"360px",...l},children:e.jsx(s,{...a})})};var k,j,S;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Documentation',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: () => <ProgressBarDocs />
    },
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <ProgressBarDocs />
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var L,P,w;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    maxWidth: '480px',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      <ProgressBar {...args} />
    </div>
}`,...(w=(P=u.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var _,A,B;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Size / Small',
  render: () => <div style={{
    maxWidth: '360px',
    ...stack
  }}>
      {ALL_VALUES.map(v => <ProgressBar key={v} value={v} size="sm" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(A=g.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var D,W,T;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Size / Default',
  render: () => <div style={{
    maxWidth: '360px',
    ...stack
  }}>
      {ALL_VALUES.map(v => <ProgressBar key={v} value={v} size="default" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(T=(W=m.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var V,C,E;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Size / Large',
  render: () => <div style={{
    maxWidth: '360px',
    ...stack
  }}>
      {ALL_VALUES.map(v => <ProgressBar key={v} value={v} size="lg" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=(C=x.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var U,N,F;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Size / All (Side by Side)',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
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
          {ALL_VALUES.map(v => <ProgressBar key={v} value={v} size={size} />)}
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(F=(N=h.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var R,Z,q;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Without Label',
  render: () => <div style={{
    maxWidth: '360px',
    ...stack
  }}>
      {ALL_VALUES.map(v => <ProgressBar key={v} value={v} showLabel={false} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var I,$,H;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Value / 0%',
  args: {
    value: 0,
    size: 'default'
  },
  render: args => <div style={{
    maxWidth: '360px',
    ...stack
  }}>
      <ProgressBar {...args} />
    </div>
}`,...(H=($=v.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var M,O,G;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Value / 50%',
  args: {
    value: 50,
    size: 'default'
  },
  render: args => <div style={{
    maxWidth: '360px',
    ...stack
  }}>
      <ProgressBar {...args} />
    </div>
}`,...(G=(O=f.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Value / 100%',
  args: {
    value: 100,
    size: 'default'
  },
  render: args => <div style={{
    maxWidth: '360px',
    ...stack
  }}>
      <ProgressBar {...args} />
    </div>
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const me=["Documentation","Playground","SizeSmall","SizeDefault","SizeLarge","AllSizes","WithoutLabel","ZeroPercent","HalfPercent","FullPercent"];export{h as AllSizes,p as Documentation,y as FullPercent,f as HalfPercent,u as Playground,m as SizeDefault,x as SizeLarge,g as SizeSmall,b as WithoutLabel,v as ZeroPercent,me as __namedExportsOrder,ge as default};
