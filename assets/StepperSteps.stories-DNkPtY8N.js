import{j as e}from"./iframe-Cqdqh0qK.js";import{S as a}from"./StepperSteps-upG4oiGx.js";import{D as s}from"./DocsTemplate-Cz6tFo94.js";import"./preload-helper-Dp1pzeXC.js";const l=[{id:1,label:"Text"},{id:2,label:"Text"},{id:3,label:"Text"},{id:4,label:"Text"},{id:5,label:"Text"}],c=[{id:1,label:"Step 1",state:"complete"},{id:2,label:"Step 2",state:"complete"},{id:3,label:"Step 3",state:"active"},{id:4,label:"Step 4",state:"default"},{id:5,label:"Step 5",state:"default"}],le=l.map(t=>({...t,state:"complete",label:"Complete"})),oe=l.map(t=>({...t,state:"disabled"})),T=l.map(t=>({...t,state:"active"})),i={padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",display:"inline-flex"},ie=()=>e.jsxs(s,{children:[e.jsx(s.Header,{title:"StepperSteps",subtitle:"A horizontal strip of numbered step indicators, used to communicate progress through a multi-step flow. Supports default, active, complete, and disabled states across three sizes."}),e.jsx(s.Section,{title:"Overview",children:e.jsx(s.BodyText,{children:"StepperSteps renders a row of numbered circles — each representing one step in a sequence. Step numbers are automatically generated and zero-padded (01, 02, …). An optional label can appear below each circle. The complete state replaces the number with a checkmark."})}),e.jsx(s.Section,{title:"Anatomy",children:e.jsx(s.Anatomy,{preview:e.jsx("div",{style:i,children:e.jsx(a,{steps:c,size:"default"})}),parts:[{id:1,name:"Strip",token:"--stepper-steps-item-gap",description:"Flex container holding all step items with a configurable gap."},{id:2,name:"Circle",token:"--stepper-steps-size-default, --stepper-steps-border-width",description:"Rounded border container that holds the step number or checkmark."},{id:3,name:"Step number",token:"--stepper-steps-number-size-default, --stepper-steps-number-weight",description:"Auto-generated zero-padded number (01, 02, …) inside the circle."},{id:4,name:"Checkmark icon",token:"--stepper-steps-complete-icon",description:'Replaces the step number when the step state is "complete".'},{id:5,name:"Label",token:"--stepper-steps-label-size-default, --stepper-steps-label-color",description:'Optional text displayed below the circle (e.g. "Step 1" or "Complete").'}]})}),e.jsx(s.Section,{title:"Sizes",children:e.jsx(s.SizeDemo,{rows:[{label:"Small",children:e.jsx("div",{style:i,children:e.jsx(a,{steps:l,size:"small"})})},{label:"Default",children:e.jsx("div",{style:i,children:e.jsx(a,{steps:l,size:"default"})})},{label:"Large",children:e.jsx("div",{style:i,children:e.jsx(a,{steps:l,size:"large"})})}]})}),e.jsxs(s.Section,{title:"States",children:[e.jsxs(s.Subsection,{title:"Default",children:[e.jsx(s.BodyText,{children:"Steps with no assigned state render with a thin gray border and a muted number."}),e.jsx("div",{style:i,children:e.jsx(a,{steps:l,size:"default"})})]}),e.jsxs(s.Subsection,{title:"Active",children:[e.jsx(s.BodyText,{children:"The active step uses the primary navy border and text, drawing attention to the current position."}),e.jsx("div",{style:i,children:e.jsx(a,{steps:T,size:"default"})})]}),e.jsxs(s.Subsection,{title:"Complete",children:[e.jsx(s.BodyText,{children:'Completed steps show a filled navy circle with a white checkmark icon and the label "Complete".'}),e.jsx("div",{style:i,children:e.jsx(a,{steps:le,size:"default"})})]}),e.jsxs(s.Subsection,{title:"Disabled",children:[e.jsx(s.BodyText,{children:"Disabled steps use a very light gray border and washed-out number, indicating they are not yet reachable."}),e.jsx("div",{style:i,children:e.jsx(a,{steps:oe,size:"default"})})]}),e.jsxs(s.Subsection,{title:"Mixed states (typical in-flow usage)",children:[e.jsx(s.BodyText,{children:"Steps 1–2 complete, step 3 active, steps 4–5 default — the most common real-world pattern."}),e.jsx("div",{style:i,children:e.jsx(a,{steps:c,size:"default"})})]})]}),e.jsxs(s.Section,{title:"Without labels",children:[e.jsx(s.BodyText,{children:"Labels can be hidden when space is constrained or when the steps are self-explanatory."}),e.jsx("div",{style:i,children:e.jsx(a,{steps:c,size:"default",showLabel:!1})})]}),e.jsx(s.Section,{title:"Design Tokens",children:e.jsx(s.TokenTable,{tokens:[{name:"--stepper-steps-size-small",description:"Circle diameter — small (24px)"},{name:"--stepper-steps-size-default",description:"Circle diameter — default (36px)"},{name:"--stepper-steps-size-large",description:"Circle diameter — large (48px)"},{name:"--stepper-steps-border-width",description:"Border thickness on all states (--global-spacing-stroke-2px)"},{name:"--stepper-steps-border-radius",description:"Full radius for circular shape (--global-spacing-radius-full)"},{name:"--stepper-steps-default-border",description:"Border color for default/future steps (--global-color-neutral-gray-300)"},{name:"--stepper-steps-active-border",description:"Border and text color for active step (--global-color-secondary-navy)"},{name:"--stepper-steps-complete-bg",description:"Background of completed step circle (--global-color-secondary-navy)"},{name:"--stepper-steps-complete-icon",description:"Checkmark color inside complete circle (--global-color-base-white)"},{name:"--stepper-steps-label-color",description:"Default label text color (--global-color-neutral-gray-700)"},{name:"--stepper-steps-label-color-active",description:"Label color for active/complete steps (--global-color-base-black)"},{name:"--stepper-steps-item-gap",description:"Gap between step items in the strip (--global-spacing-sizing-8px)"}]})}),e.jsx(s.Section,{title:"Usage Principles",children:e.jsxs(s.Principles,{children:[e.jsx(s.PrincipleCard,{number:1,title:"One active step at a time",children:'Only one step should be in the "active" state at once. Steps before it should be "complete" and steps after should be "default" or "disabled".'}),e.jsx(s.PrincipleCard,{number:2,title:"Progress flows left to right",children:"Always lay out StepperSteps horizontally with completed steps on the left and future steps on the right, matching the natural reading direction."}),e.jsx(s.PrincipleCard,{number:3,title:"Consistent labels",children:"Either show labels on all steps or none. Mixing labelled and unlabelled steps in a single strip creates visual imbalance."})]})}),e.jsx(s.Section,{title:"Dos and Don'ts",children:e.jsx(s.DosDonts,{doItem:{icon:e.jsx("div",{style:i,children:e.jsx(a,{steps:c,size:"default"})}),description:"Show mixed states to reflect real progress: complete → active → default."},dontItem:{icon:e.jsx("div",{style:i,children:e.jsx(a,{steps:T,size:"default"})}),description:"Don't set all steps to active — only the current step should be highlighted."}})}),e.jsx(s.Footer,{})]});ie.__docgenInfo={description:"",methods:[],displayName:"StepperStepsDocs"};const d=[{id:1,label:"Text"},{id:2,label:"Text"},{id:3,label:"Text"},{id:4,label:"Text"},{id:5,label:"Text"}],z=[{id:1,label:"Step 1",state:"complete"},{id:2,label:"Step 2",state:"complete"},{id:3,label:"Step 3",state:"active"},{id:4,label:"Step 4",state:"default"},{id:5,label:"Step 5",state:"default"}],re=d.map(t=>({...t,state:"complete",label:"Complete"})),de=d.map(t=>({...t,state:"active"})),pe=d.map(t=>({...t,state:"disabled"})),o=["small","default","large"],r={padding:"16px",background:"#f9fafb",borderRadius:"6px",display:"inline-flex"},xe={title:"Foundation/BuildingBlocks/StepperSteps",component:a,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:o},showLabel:{control:"boolean"}},args:{steps:d,size:"default",showLabel:!0}},m={name:"Documentation",render:()=>e.jsx(ie,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},S={name:"Playground",render:t=>e.jsx("div",{style:r,children:e.jsx(a,{...t})})},u={name:"All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:o.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:t}),e.jsx("div",{style:r,children:e.jsx(a,{steps:d,size:t})})]},t))})},x={name:"State / Default",render:()=>e.jsx("div",{style:r,children:e.jsx(a,{steps:d,size:"default"})})},h={name:"State / Active",render:()=>e.jsx("div",{style:r,children:e.jsx(a,{steps:de,size:"default"})})},b={name:"State / Complete",render:()=>e.jsx("div",{style:r,children:e.jsx(a,{steps:re,size:"default"})})},g={name:"State / Disabled",render:()=>e.jsx("div",{style:r,children:e.jsx(a,{steps:pe,size:"default"})})},f={name:"Mixed States",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:o.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:t}),e.jsx("div",{style:r,children:e.jsx(a,{steps:z,size:t})})]},t))})},v={name:"Without Labels",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:o.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:t}),e.jsx("div",{style:r,children:e.jsx(a,{steps:z,size:t,showLabel:!1})})]},t))})},y={name:"Complete / All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:o.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:t}),e.jsx("div",{style:r,children:e.jsx(a,{steps:re,size:t})})]},t))})},j={name:"Full Design Matrix",parameters:{layout:"padded"},render:()=>{const t={fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},ne=n=>d.map(p=>({...p,state:n,label:n==="complete"?"Complete":"Text"}));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[o.map(n=>["default","active","complete","disabled"].map(p=>e.jsxs("div",{children:[e.jsxs("div",{style:t,children:[n," — ",p]}),e.jsx("div",{style:r,children:e.jsx(a,{steps:ne(p),size:n})})]},`${n}-${p}`))),o.map(n=>e.jsxs("div",{children:[e.jsxs("div",{style:t,children:[n," — mixed states"]}),e.jsx("div",{style:r,children:e.jsx(a,{steps:z,size:n})})]},`${n}-mixed`))]})}};var D,E,w;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <StepperStepsDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen'
  }
}`,...(w=(E=m.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var C,L,P;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={wrap}>
      <StepperSteps {...args} />
    </div>
}`,...(P=(L=S.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var A,k,_;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <div style={{
        fontSize: 11,
        fontWeight: 600,
        color: '#61607C',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 8
      }}>
            {size}
          </div>
          <div style={wrap}>
            <StepperSteps steps={DEFAULT_STEPS} size={size} />
          </div>
        </div>)}
    </div>
}`,...(_=(k=u.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var B,I,M;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'State / Default',
  render: () => <div style={wrap}>
      <StepperSteps steps={DEFAULT_STEPS} size="default" />
    </div>
}`,...(M=(I=x.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var W,F,$;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'State / Active',
  render: () => <div style={wrap}>
      <StepperSteps steps={ACTIVE_STEPS} size="default" />
    </div>
}`,...($=(F=h.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var O,Z,R;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'State / Complete',
  render: () => <div style={wrap}>
      <StepperSteps steps={COMPLETE_STEPS} size="default" />
    </div>
}`,...(R=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:R.source}}};var U,X,V;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'State / Disabled',
  render: () => <div style={wrap}>
      <StepperSteps steps={DISABLED_STEPS} size="default" />
    </div>
}`,...(V=(X=g.parameters)==null?void 0:X.docs)==null?void 0:V.source}}};var q,G,H;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Mixed States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <div style={{
        fontSize: 11,
        fontWeight: 600,
        color: '#61607C',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 8
      }}>
            {size}
          </div>
          <div style={wrap}>
            <StepperSteps steps={MIXED_STEPS} size={size} />
          </div>
        </div>)}
    </div>
}`,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var N,J,K;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Without Labels',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <div style={{
        fontSize: 11,
        fontWeight: 600,
        color: '#61607C',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 8
      }}>
            {size}
          </div>
          <div style={wrap}>
            <StepperSteps steps={MIXED_STEPS} size={size} showLabel={false} />
          </div>
        </div>)}
    </div>
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Complete / All Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <div style={{
        fontSize: 11,
        fontWeight: 600,
        color: '#61607C',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: 8
      }}>
            {size}
          </div>
          <div style={wrap}>
            <StepperSteps steps={COMPLETE_STEPS} size={size} />
          </div>
        </div>)}
    </div>
}`,...(ee=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,se,ae;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  parameters: {
    layout: 'padded'
  },
  render: () => {
    const heading: React.CSSProperties = {
      fontSize: 11,
      fontWeight: 600,
      color: '#61607C',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginBottom: 8
    };
    const allStateSteps = (state: 'default' | 'active' | 'complete' | 'disabled') => DEFAULT_STEPS.map(s => ({
      ...s,
      state,
      label: state === 'complete' ? 'Complete' : 'Text'
    }));
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }}>
        {ALL_SIZES.map(size => (['default', 'active', 'complete', 'disabled'] as const).map(state => <div key={\`\${size}-\${state}\`}>
              <div style={heading}>{size} — {state}</div>
              <div style={wrap}>
                <StepperSteps steps={allStateSteps(state)} size={size} />
              </div>
            </div>))}

        {/* Mixed states */}
        {ALL_SIZES.map(size => <div key={\`\${size}-mixed\`}>
            <div style={heading}>{size} — mixed states</div>
            <div style={wrap}>
              <StepperSteps steps={MIXED_STEPS} size={size} />
            </div>
          </div>)}
      </div>;
  }
}`,...(ae=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const he=["Documentation","Playground","AllSizes","StateDefault","StateActive","StateComplete","StateDisabled","MixedStates","WithoutLabels","CompleteSizes","FullDesignMatrix"];export{u as AllSizes,y as CompleteSizes,m as Documentation,j as FullDesignMatrix,f as MixedStates,S as Playground,h as StateActive,b as StateComplete,x as StateDefault,g as StateDisabled,v as WithoutLabels,he as __namedExportsOrder,xe as default};
