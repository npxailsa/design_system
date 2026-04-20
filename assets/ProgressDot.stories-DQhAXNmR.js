import{j as e,R as Ae}from"./iframe-BKdhF1q-.js";import{D as r}from"./DocsTemplate-B3vxmoEt.js";import"./preload-helper-Dp1pzeXC.js";const Ce="_dot_1nrd3_5",P={dot:Ce,"dot--sm":"_dot--sm_1nrd3_15","dot--default":"_dot--default_1nrd3_21","dot--lg":"_dot--lg_1nrd3_27","dot--inactive":"_dot--inactive_1nrd3_35","dot--active":"_dot--active_1nrd3_40","dot--error":"_dot--error_1nrd3_45","dot--pending":"_dot--pending_1nrd3_50"},s=({state:a="inactive",size:n="default",className:Le="",ariaLabel:Te})=>{const Fe=[P.dot,P[`dot--${n}`],P[`dot--${a}`],Le].filter(Boolean).join(" "),_e=Te??`Progress step — ${a}`;return e.jsx("span",{role:"img","aria-label":_e,className:Fe})};s.__docgenInfo={description:"",methods:[],displayName:"ProgressDot",props:{state:{required:!1,tsType:{name:"union",raw:"'inactive' | 'active' | 'error' | 'pending'",elements:[{name:"literal",value:"'inactive'"},{name:"literal",value:"'active'"},{name:"literal",value:"'error'"},{name:"literal",value:"'pending'"}]},description:"Visual state of the dot",defaultValue:{value:"'inactive'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'default' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'default'"},{name:"literal",value:"'lg'"}]},description:"Size of the dot",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional class for layout overrides",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label for screen readers"}}};const A={display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},L={display:"grid",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},w={fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",minWidth:"56px",flexShrink:0},i=["inactive","active","error","pending"],T=["sm","default","lg"],D=()=>e.jsxs(r,{children:[e.jsx(r.Header,{title:"ProgressDot",subtitle:"A compact circular indicator for step and progress patterns. Each dot communicates a single step's status — inactive, active, error, or pending — through colour and fill."}),e.jsxs(r.BodyText,{children:[e.jsx("strong",{children:"ProgressDot"})," is a Foundation-level building block used to compose step indicators, progress trackers, and pagination controls. It renders a single circle whose appearance is fully driven by design tokens — no hardcoded colours or sizes. Three sizes (",e.jsx("code",{children:"sm"}),", ",e.jsx("code",{children:"default"}),", ",e.jsx("code",{children:"lg"}),") and four states (",e.jsx("code",{children:"inactive"}),", ",e.jsx("code",{children:"active"}),", ",e.jsx("code",{children:"error"}),","," ",e.jsx("code",{children:"pending"}),") cover every step-progress use case."]}),e.jsxs(r.Section,{title:"MUI Foundation",children:[e.jsxs(r.BodyText,{children:["The ProgressDot is a ",e.jsx("strong",{children:"pure React component"})," with no MUI base. It renders as a plain ",e.jsx("code",{children:"<span>"})," element — a simple circle whose appearance is entirely controlled by CSS Modules and the ",e.jsx("code",{children:"--progress-dot-*"})," token family. No MUI component is needed for a static circular indicator; keeping it dependency-free ensures zero style conflicts and maximum portability within the design system."]}),e.jsx(r.CodeBlock,{children:`// No MUI base import required
// ProgressDot renders as a plain <span>:
<span
  className={styles['progress-dot']}
  data-state={state}
  data-size={size}
  aria-hidden="true"
 />`})]}),e.jsx(r.Section,{title:"Component Anatomy",children:e.jsx(r.Anatomy,{preview:e.jsx("div",{style:{...A,alignItems:"center"},children:i.map(a=>e.jsx(s,{state:a,size:"default"},a))}),parts:[{id:1,name:"Inactive dot",token:"--progress-dot-inactive-bg",description:"Solid gray-filled circle. Represents a step that has been visited or completed but is not the current focus."},{id:2,name:"Active dot",token:"--progress-dot-active-bg",description:"Solid sky-blue filled circle. Represents the current step or selected position."},{id:3,name:"Error dot",token:"--progress-dot-error-border",description:"White fill with red border. Represents a step with a validation error or blocking issue."},{id:4,name:"Pending dot",token:"--progress-dot-pending-bg, --progress-dot-pending-border",description:"Very light fill with a faint border. Represents a step that has not yet been reached."}]})}),e.jsxs(r.Section,{title:"States",subtitle:"Four states communicate different positions within a progress or step flow.",children:[e.jsx("div",{style:{...L,gridTemplateColumns:"repeat(auto-fit, minmax(120px, 1fr))"},children:i.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(s,{state:a,size:"default"}),e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",textTransform:"capitalize"},children:a})]},a))}),e.jsxs(r.BodyText,{children:[e.jsx("strong",{children:"inactive"})," — a past or visited step that is not currently active."," ",e.jsx("strong",{children:"active"})," — the current step, highlighted in sky blue."," ",e.jsx("strong",{children:"error"})," — a step with a blocking issue; shown with a red border."," ",e.jsx("strong",{children:"pending"})," — a future step not yet reached."]})]}),e.jsx(r.Section,{title:"Sizes",subtitle:"Three sizes scale the dot for different density contexts.",children:e.jsx("div",{style:{...A,alignItems:"flex-end"},children:T.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(s,{state:"active",size:a}),e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:a})]},a))})}),e.jsx(r.Section,{title:"Size × State Matrix",subtitle:"All sizes across all four states for visual QA.",children:e.jsxs("div",{style:{...L,gridTemplateColumns:"auto repeat(4, 1fr)",alignItems:"center"},children:[e.jsx("span",{style:w}),i.map(a=>e.jsx("span",{style:{...w,minWidth:"auto",textAlign:"center",textTransform:"capitalize"},children:a},a)),T.map(a=>e.jsxs(Ae.Fragment,{children:[e.jsx("span",{style:w,children:a}),i.map(n=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(s,{size:a,state:n})},n))]},a))]})}),e.jsxs(r.Section,{title:"In Context",subtitle:"How ProgressDot dots compose into a multi-step progress indicator.",children:[e.jsxs(r.Subsection,{title:"In Context / Step Progress",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-4px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 1px 4px rgba(0,0,0,0.08)",minWidth:"200px",width:"100%"},children:[e.jsx(s,{state:"inactive",size:"default"}),e.jsx(s,{state:"active",size:"default"}),e.jsx(s,{state:"error",size:"default"}),e.jsx(s,{state:"pending",size:"default"}),e.jsx(s,{state:"pending",size:"default"})]}),e.jsx(r.BodyText,{children:"A typical five-step flow: one completed, one active, one with an error, and two pending."})]}),e.jsxs(r.Subsection,{title:"In Context / Small Pagination",children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-4px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 1px 4px rgba(0,0,0,0.08)",minWidth:"200px",width:"100%"},children:[0,1,2,3].map(a=>e.jsx(s,{state:a===1?"active":"pending",size:"sm"},a))}),e.jsx(r.BodyText,{children:"Small-size dots used for carousel or tab pagination. The active page is highlighted."})]})]}),e.jsxs(r.Section,{title:"Design Tokens",children:[e.jsx(r.Subsection,{title:"Size Tokens",children:e.jsx(r.TokenTable,{tokens:[{name:"--progress-dot-size-sm",description:"Dot diameter for size sm — var(--global-spacing-sizing-8px) 8px."},{name:"--progress-dot-size-default",description:"Dot diameter for size default — var(--global-spacing-sizing-12px) 12px."},{name:"--progress-dot-size-lg",description:"Dot diameter for size lg — var(--global-spacing-sizing-20px) 20px."},{name:"--progress-dot-border-sm",description:"Border width for sm — var(--global-spacing-stroke-1px) 1px."},{name:"--progress-dot-border-default",description:"Border width for default — var(--global-spacing-stroke-2px) 2px."},{name:"--progress-dot-border-lg",description:"Border width for lg — var(--global-spacing-stroke-2px) 2px."}]})}),e.jsx(r.Subsection,{title:"State Tokens",children:e.jsx(r.TokenTable,{tokens:[{name:"--progress-dot-inactive-bg",description:"Inactive fill — var(--global-color-neutral-gray-400) #9CA3AF."},{name:"--progress-dot-active-bg",description:"Active fill — var(--global-color-primary-sky-blue) #0BA7EA."},{name:"--progress-dot-error-bg",description:"Error fill — var(--global-color-base-white) #FFFFFF."},{name:"--progress-dot-error-border",description:"Error border — var(--global-color-status-red) #CE2031."},{name:"--progress-dot-pending-bg",description:"Pending fill — var(--global-color-neutral-gray-100) #F3F4F6."},{name:"--progress-dot-pending-border",description:"Pending border — var(--global-color-neutral-gray-300) #D2D5DA."}]})})]}),e.jsx(r.Section,{title:"Props Reference",children:e.jsx(r.TokenTable,{tokens:[{name:"state",description:'"inactive" | "active" | "error" | "pending" — visual state of the dot. Default: "inactive".'},{name:"size",description:'"sm" | "default" | "lg" — dot diameter. Default: "default".'},{name:"className",description:"string — optional CSS class for layout overrides (margin, flex-shrink, etc.)."},{name:"ariaLabel",description:'string — accessible label for screen readers. Defaults to "Progress step — {state}".'}]})}),e.jsx(r.Section,{title:"Usage",children:e.jsx(r.CodeBlock,{children:`import { ProgressDot } from './ProgressDot';

// Default inactive dot
<ProgressDot />

// Active (current step)
<ProgressDot state="active" size="default" />

// Error state
<ProgressDot state="error" size="lg" />

// Pending (future step)
<ProgressDot state="pending" size="sm" />

// Composing into a step row
<div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
  <ProgressDot state="inactive" ariaLabel="Step 1 — completed" />
  <ProgressDot state="active"   ariaLabel="Step 2 — in progress" />
  <ProgressDot state="pending"  ariaLabel="Step 3 — pending" />
  <ProgressDot state="pending"  ariaLabel="Step 4 — pending" />
</div>`})}),e.jsx(r.Section,{title:"Design Principles",children:e.jsxs(r.Principles,{children:[e.jsx(r.PrincipleCard,{number:1,title:"One dot, one state",children:"Each ProgressDot represents a single step. Never apply multiple states to one dot. Compose a row of dots to communicate the full progress flow."}),e.jsxs(r.PrincipleCard,{number:2,title:"Always label for accessibility",children:["The default ",e.jsx("code",{children:"ariaLabel"})," is generic. Provide a descriptive label such as",e.jsx("code",{children:'"Step 3 of 5 — active"'})," so screen reader users understand position and status."]}),e.jsxs(r.PrincipleCard,{number:3,title:"Match size to context",children:["Use ",e.jsx("strong",{children:"sm"})," for compact pagination and carousel indicators. Use ",e.jsx("strong",{children:"default"})," for standard step progress bars. Use ",e.jsx("strong",{children:"lg"})," for prominent onboarding flows or full-page wizards."]}),e.jsxs(r.PrincipleCard,{number:4,title:"Use tokens, not overrides",children:["All colours and dimensions use design tokens. Do not override them with inline styles. If a new state colour is needed, add a new token to ",e.jsx("code",{children:"tokens.css"}),"."]})]})}),e.jsx(r.Footer,{})]});D.__docgenInfo={description:"",methods:[],displayName:"ProgressDotDocs"};const I=["inactive","active","error","pending"],k=["sm","default","lg"],Be={title:"Foundation/BuildingBlocks/Progress",component:s,parameters:{docs:{page:()=>e.jsx(D,{})}},argTypes:{state:{control:"select",options:I},size:{control:"select",options:k},className:{control:!1},ariaLabel:{control:"text"}},args:{state:"active",size:"default"}},t={display:"flex",flexWrap:"wrap",alignItems:"center",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",minWidth:"200px",width:"100%"},o={name:"Documentation",tags:["!autodocs"],parameters:{docs:{page:()=>e.jsx(D,{})},chromatic:{disableSnapshot:!0}},render:()=>e.jsx(D,{})},l={name:"Playground",render:a=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-32px)",minWidth:"200px"},children:e.jsx(s,{...a})})},d={name:"State / Inactive",args:{state:"inactive",size:"default"},render:a=>e.jsx("div",{style:t,children:e.jsx(s,{...a})})},c={name:"State / Active",args:{state:"active",size:"default"},render:a=>e.jsx("div",{style:t,children:e.jsx(s,{...a})})},p={name:"State / Error",args:{state:"error",size:"default"},render:a=>e.jsx("div",{style:t,children:e.jsx(s,{...a})})},g={name:"State / Pending",args:{state:"pending",size:"default"},render:a=>e.jsx("div",{style:t,children:e.jsx(s,{...a})})},m={name:"Size / Small",args:{state:"active",size:"sm"},render:a=>e.jsx("div",{style:t,children:e.jsx(s,{...a})})},x={name:"Size / Default",args:{state:"active",size:"default"},render:a=>e.jsx("div",{style:t,children:e.jsx(s,{...a})})},u={name:"Size / Large",args:{state:"active",size:"lg"},render:a=>e.jsx("div",{style:t,children:e.jsx(s,{...a})})},v={name:"Status / All Sizes",render:()=>e.jsx("div",{style:{...t,alignItems:"flex-end"},children:k.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx(s,{state:"active",size:a}),e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:a})]},a))}),parameters:{controls:{disable:!0}}},f={name:"Default",args:{state:"active",size:"default"}},y={name:"Sizes",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",padding:"24px",alignItems:"center"},children:[e.jsx(s,{state:"active",size:"sm"}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)"},children:"sm"}),e.jsx(s,{state:"active",size:"default"}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)"},children:"default"}),e.jsx(s,{state:"active",size:"lg"}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)"},children:"lg"})]}),parameters:{controls:{disable:!0}}},b={name:"Component Breakdown",render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",padding:"24px",flexWrap:"wrap",alignItems:"flex-start"},children:["inactive","active","error","pending"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",alignItems:"center"},children:[e.jsx(s,{state:a,size:"default"}),e.jsx("span",{style:{fontSize:"11px",fontWeight:600,fontFamily:"var(--brand-font-primary)"},children:a}),e.jsxs("code",{style:{fontSize:"9px",background:"var(--global-color-neutral-gray-100)",padding:"2px 4px",borderRadius:"4px",textAlign:"center"},children:["--progress-dot-",a]})]},a))}),parameters:{controls:{disable:!0}}},h={name:"All Interactive States",render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",padding:"24px",alignItems:"center"},children:["inactive","active","error","pending"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",alignItems:"center"},children:[e.jsx(s,{state:a,size:"default"}),e.jsx("span",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:a})]},a))}),parameters:{controls:{disable:!0}}},S={name:"Full Design Matrix (12 variants)",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(4, minmax(60px, 1fr))",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",alignItems:"center",minWidth:"200px",width:"100%"},children:[e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"}}),I.map(a=>e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",textAlign:"center",textTransform:"capitalize"},children:a},a)),k.map(a=>e.jsxs(Ae.Fragment,{children:[e.jsx("span",{style:{fontFamily:"var(--font-family-secondary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:a}),I.map(n=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(s,{size:a,state:n})},n))]},a))]}),parameters:{controls:{disable:!0}}},z={name:"In Context / Step Progress",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-4px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 1px 4px rgba(0,0,0,0.08)",minWidth:"200px",width:"100%"},children:[e.jsx(s,{state:"inactive",size:"default",ariaLabel:"Step 1 — completed"}),e.jsx(s,{state:"active",size:"default",ariaLabel:"Step 2 — active"}),e.jsx(s,{state:"error",size:"default",ariaLabel:"Step 3 — error"}),e.jsx(s,{state:"pending",size:"default",ariaLabel:"Step 4 — pending"}),e.jsx(s,{state:"pending",size:"default",ariaLabel:"Step 5 — pending"})]}),parameters:{controls:{disable:!0}}},j={name:"In Context / Pagination",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-4px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-base-white)",borderRadius:"var(--global-spacing-radius-8px)",boxShadow:"0 1px 4px rgba(0,0,0,0.08)",minWidth:"200px",width:"100%"},children:[0,1,2,3,4].map(a=>e.jsx(s,{state:a===2?"active":"pending",size:"sm",ariaLabel:`Page ${a+1}`},a))}),parameters:{controls:{disable:!0}}};var F,_,C;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Documentation',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: () => <ProgressDotDocs />
    },
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <ProgressDotDocs />
}`,...(C=(_=o.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var R,E,W;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    padding: 'var(--global-spacing-sizing-32px)',
    minWidth: '200px'
  }}>
      <ProgressDot {...args} />
    </div>
}`,...(W=(E=l.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var B,M,N;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'State / Inactive',
  args: {
    state: 'inactive',
    size: 'default'
  },
  render: args => <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var U,$,q;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'State / Active',
  args: {
    state: 'active',
    size: 'default'
  },
  render: args => <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
}`,...(q=($=c.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var V,Z,H;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'State / Error',
  args: {
    state: 'error',
    size: 'default'
  },
  render: args => <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
}`,...(H=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var O,Q,G;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'State / Pending',
  args: {
    state: 'pending',
    size: 'default'
  },
  render: args => <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
}`,...(G=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};var J,K,X;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Size / Small',
  args: {
    state: 'active',
    size: 'sm'
  },
  render: args => <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
}`,...(X=(K=m.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,ee,ae;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Size / Default',
  args: {
    state: 'active',
    size: 'default'
  },
  render: args => <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
}`,...(ae=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;u.parameters={...u.parameters,docs:{...(re=u.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Size / Large',
  args: {
    state: 'active',
    size: 'lg'
  },
  render: args => <div style={rowStyle}>
      <ProgressDot {...args} />
    </div>
}`,...(te=(se=u.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ne,ie,oe;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Status / All Sizes',
  render: () => <div style={{
    ...rowStyle,
    alignItems: 'flex-end'
  }}>
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--global-spacing-sizing-6px)'
    }}>
          <ProgressDot state="active" size={size} />
          <span style={{
        fontFamily: 'var(--font-family-secondary)',
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-500)'
      }}>
            {size}
          </span>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,de,ce;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    state: 'active',
    size: 'default'
  }
}`,...(ce=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ge,me;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '24px',
    alignItems: 'center'
  }}>
      <ProgressDot state="active" size="sm" /><span style={{
      fontSize: '10px',
      color: 'var(--global-color-neutral-gray-400)'
    }}>sm</span>
      <ProgressDot state="active" size="default" /><span style={{
      fontSize: '10px',
      color: 'var(--global-color-neutral-gray-400)'
    }}>default</span>
      <ProgressDot state="active" size="lg" /><span style={{
      fontSize: '10px',
      color: 'var(--global-color-neutral-gray-400)'
    }}>lg</span>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var xe,ue,ve;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    padding: '24px',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      {(['inactive', 'active', 'error', 'pending'] as const).map(state => <div key={state} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      alignItems: 'center'
    }}>
          <ProgressDot state={state} size="default" />
          <span style={{
        fontSize: '11px',
        fontWeight: 600,
        fontFamily: 'var(--brand-font-primary)'
      }}>{state}</span>
          <code style={{
        fontSize: '9px',
        background: 'var(--global-color-neutral-gray-100)',
        padding: '2px 4px',
        borderRadius: '4px',
        textAlign: 'center'
      }}>--progress-dot-{state}</code>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ve=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:ve.source}}};var fe,ye,be;h.parameters={...h.parameters,docs:{...(fe=h.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '24px',
    alignItems: 'center'
  }}>
      {(['inactive', 'active', 'error', 'pending'] as const).map(state => <div key={state} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      alignItems: 'center'
    }}>
          <ProgressDot state={state} size="default" />
          <span style={{
        fontSize: '10px',
        color: 'var(--global-color-neutral-gray-400)',
        fontFamily: 'var(--brand-font-secondary)'
      }}>{state}</span>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(be=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var he,Se,ze;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'Full Design Matrix (12 variants)',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'auto repeat(4, minmax(60px, 1fr))',
    gap: 'var(--global-spacing-sizing-16px)',
    padding: 'var(--global-spacing-sizing-24px)',
    background: 'var(--global-color-neutral-gray-50)',
    borderRadius: 'var(--global-spacing-radius-8px)',
    alignItems: 'center',
    minWidth: '200px',
    width: '100%'
  }}>
      {/* Header */}
      <span style={{
      fontFamily: 'var(--font-family-secondary)',
      fontSize: 'var(--global-type-size-primary-label-xs)',
      color: 'var(--global-color-neutral-gray-400)'
    }} />
      {ALL_STATES.map(s => <span key={s} style={{
      fontFamily: 'var(--font-family-secondary)',
      fontSize: 'var(--global-type-size-primary-label-xs)',
      color: 'var(--global-color-neutral-gray-500)',
      textAlign: 'center',
      textTransform: 'capitalize'
    }}>
          {s}
        </span>)}
      {/* Rows */}
      {ALL_SIZES.map(size => <React.Fragment key={size}>
          <span style={{
        fontFamily: 'var(--font-family-secondary)',
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-500)'
      }}>
            {size}
          </span>
          {ALL_STATES.map(state => <div key={state} style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
              <ProgressDot size={size} state={state} />
            </div>)}
        </React.Fragment>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ze=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:ze.source}}};var je,De,Pe;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'In Context / Step Progress',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--global-spacing-sizing-4px)',
    padding: 'var(--global-spacing-sizing-24px)',
    background: 'var(--global-color-base-white)',
    borderRadius: 'var(--global-spacing-radius-8px)',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
    minWidth: '200px',
    width: '100%'
  }}>
      <ProgressDot state="inactive" size="default" ariaLabel="Step 1 — completed" />
      <ProgressDot state="active" size="default" ariaLabel="Step 2 — active" />
      <ProgressDot state="error" size="default" ariaLabel="Step 3 — error" />
      <ProgressDot state="pending" size="default" ariaLabel="Step 4 — pending" />
      <ProgressDot state="pending" size="default" ariaLabel="Step 5 — pending" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Pe=(De=z.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var we,Ie,ke;j.parameters={...j.parameters,docs:{...(we=j.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'In Context / Pagination',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--global-spacing-sizing-4px)',
    padding: 'var(--global-spacing-sizing-16px)',
    background: 'var(--global-color-base-white)',
    borderRadius: 'var(--global-spacing-radius-8px)',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
    minWidth: '200px',
    width: '100%'
  }}>
      {[0, 1, 2, 3, 4].map(i => <ProgressDot key={i} state={i === 2 ? 'active' : 'pending'} size="sm" ariaLabel={\`Page \${i + 1}\`} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ke=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};const Me=["Documentation","Playground","StateInactive","StateActive","StateError","StatePending","SizeSmall","SizeDefault","SizeLarge","StatusAllSizes","Default","Sizes","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix","InContextStepProgress","InContextPagination"];export{h as AllInteractiveStates,b as ComponentBreakdown,f as Default,o as Documentation,S as FullDesignMatrix,j as InContextPagination,z as InContextStepProgress,l as Playground,x as SizeDefault,u as SizeLarge,m as SizeSmall,y as Sizes,c as StateActive,p as StateError,d as StateInactive,g as StatePending,v as StatusAllSizes,Me as __namedExportsOrder,Be as default};
