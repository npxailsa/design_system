import{j as e}from"./iframe-Bcl9ehwc.js";import{D as s}from"./DocsTemplate-Ck647IGQ.js";import"./preload-helper-Dp1pzeXC.js";const be="_strip_126sd_6",fe="_step_126sd_15",ge="_circle_126sd_26",ve="_checkIcon_126sd_95",ye="_label_126sd_102",n={strip:be,step:fe,"step--small":"_step--small_126sd_21","step--default":"_step--default_126sd_22","step--large":"_step--large_126sd_23",circle:ge,"circle--small":"_circle--small_126sd_47","circle--default":"_circle--default_126sd_53","circle--large":"_circle--large_126sd_59","circle--state-default":"_circle--state-default_126sd_66","circle--state-active":"_circle--state-active_126sd_73","circle--state-complete":"_circle--state-complete_126sd_80","circle--state-disabled":"_circle--state-disabled_126sd_87",checkIcon:ve,label:ye,"label--small":"_label--small_126sd_110","label--default":"_label--default_126sd_111","label--large":"_label--large_126sd_112","label--active":"_label--active_126sd_114","label--complete":"_label--complete_126sd_114","label--disabled":"_label--disabled_126sd_118"},je=({size:t})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:n.checkIcon,children:e.jsx("path",{d:"M5.99986 13.6134L1.85986 9.47336L3.74653 7.58669L5.99986 9.84669L12.5865 3.25336L14.4732 5.14002L5.99986 13.6134Z",fill:"currentColor"})}),_e={small:10,default:14,large:20},a=({steps:t,size:u="default",showLabel:l=!0,className:o})=>{const pe=[n.strip,o].filter(Boolean).join(" ");return e.jsx("div",{className:pe,role:"list","aria-label":"Step progress",children:t.map((h,S)=>{const d=h.state??"default",me=String(S+1).padStart(2,"0"),ue=[n.circle,n[`circle--${u}`],n[`circle--state-${d}`]].join(" "),Se=[n.step,n[`step--${u}`]].join(" "),he=[n.label,n[`label--${u}`],d!=="default"?n[`label--${d}`]:""].filter(Boolean).join(" "),xe=d==="complete"?`Step ${S+1} complete`:d==="active"?`Step ${S+1} active`:d==="disabled"?`Step ${S+1} disabled`:`Step ${S+1}`;return e.jsxs("div",{className:Se,role:"listitem","aria-label":xe,children:[e.jsx("div",{className:ue,children:d==="complete"?e.jsx(je,{size:_e[u]}):me}),l&&h.label&&e.jsx("span",{className:he,children:h.label})]},h.id)})})};a.__docgenInfo={description:"",methods:[],displayName:"StepperSteps",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepperStep"}],raw:"StepperStep[]"},description:`Array of step definitions.
Step numbers are auto-generated (1-based, zero-padded to 2 digits).`},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Visual size of each step circle.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show the label below each step circle.
@default true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional additional CSS class"}}};const c=[{id:1,label:"Text"},{id:2,label:"Text"},{id:3,label:"Text"},{id:4,label:"Text"},{id:5,label:"Text"}],x=[{id:1,label:"Step 1",state:"complete"},{id:2,label:"Step 2",state:"complete"},{id:3,label:"Step 3",state:"active"},{id:4,label:"Step 4",state:"default"},{id:5,label:"Step 5",state:"default"}],ze=c.map(t=>({...t,state:"complete",label:"Complete"})),Te=c.map(t=>({...t,state:"disabled"})),C=c.map(t=>({...t,state:"active"})),r={padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",display:"inline-flex"},de=()=>e.jsxs(s,{children:[e.jsx(s.Header,{title:"StepperSteps",subtitle:"A horizontal strip of numbered step indicators, used to communicate progress through a multi-step flow. Supports default, active, complete, and disabled states across three sizes."}),e.jsx(s.Section,{title:"Overview",children:e.jsx(s.BodyText,{children:"StepperSteps renders a row of numbered circles — each representing one step in a sequence. Step numbers are automatically generated and zero-padded (01, 02, …). An optional label can appear below each circle. The complete state replaces the number with a checkmark."})}),e.jsx(s.Section,{title:"Anatomy",children:e.jsx(s.Anatomy,{preview:e.jsx("div",{style:r,children:e.jsx(a,{steps:x,size:"default"})}),parts:[{id:1,name:"Strip",token:"--stepper-steps-item-gap",description:"Flex container holding all step items with a configurable gap."},{id:2,name:"Circle",token:"--stepper-steps-size-default, --stepper-steps-border-width",description:"Rounded border container that holds the step number or checkmark."},{id:3,name:"Step number",token:"--stepper-steps-number-size-default, --stepper-steps-number-weight",description:"Auto-generated zero-padded number (01, 02, …) inside the circle."},{id:4,name:"Checkmark icon",token:"--stepper-steps-complete-icon",description:'Replaces the step number when the step state is "complete".'},{id:5,name:"Label",token:"--stepper-steps-label-size-default, --stepper-steps-label-color",description:'Optional text displayed below the circle (e.g. "Step 1" or "Complete").'}]})}),e.jsx(s.Section,{title:"Sizes",children:e.jsx(s.SizeDemo,{rows:[{label:"Small",children:e.jsx("div",{style:r,children:e.jsx(a,{steps:c,size:"small"})})},{label:"Default",children:e.jsx("div",{style:r,children:e.jsx(a,{steps:c,size:"default"})})},{label:"Large",children:e.jsx("div",{style:r,children:e.jsx(a,{steps:c,size:"large"})})}]})}),e.jsxs(s.Section,{title:"States",children:[e.jsxs(s.Subsection,{title:"Default",children:[e.jsx(s.BodyText,{children:"Steps with no assigned state render with a thin gray border and a muted number."}),e.jsx("div",{style:r,children:e.jsx(a,{steps:c,size:"default"})})]}),e.jsxs(s.Subsection,{title:"Active",children:[e.jsx(s.BodyText,{children:"The active step uses the primary navy border and text, drawing attention to the current position."}),e.jsx("div",{style:r,children:e.jsx(a,{steps:C,size:"default"})})]}),e.jsxs(s.Subsection,{title:"Complete",children:[e.jsx(s.BodyText,{children:'Completed steps show a filled navy circle with a white checkmark icon and the label "Complete".'}),e.jsx("div",{style:r,children:e.jsx(a,{steps:ze,size:"default"})})]}),e.jsxs(s.Subsection,{title:"Disabled",children:[e.jsx(s.BodyText,{children:"Disabled steps use a very light gray border and washed-out number, indicating they are not yet reachable."}),e.jsx("div",{style:r,children:e.jsx(a,{steps:Te,size:"default"})})]}),e.jsxs(s.Subsection,{title:"Mixed states (typical in-flow usage)",children:[e.jsx(s.BodyText,{children:"Steps 1–2 complete, step 3 active, steps 4–5 default — the most common real-world pattern."}),e.jsx("div",{style:r,children:e.jsx(a,{steps:x,size:"default"})})]})]}),e.jsxs(s.Section,{title:"Without labels",children:[e.jsx(s.BodyText,{children:"Labels can be hidden when space is constrained or when the steps are self-explanatory."}),e.jsx("div",{style:r,children:e.jsx(a,{steps:x,size:"default",showLabel:!1})})]}),e.jsx(s.Section,{title:"Design Tokens",children:e.jsx(s.TokenTable,{tokens:[{name:"--stepper-steps-size-small",description:"Circle diameter — small (24px)"},{name:"--stepper-steps-size-default",description:"Circle diameter — default (36px)"},{name:"--stepper-steps-size-large",description:"Circle diameter — large (48px)"},{name:"--stepper-steps-border-width",description:"Border thickness on all states (--global-spacing-stroke-2px)"},{name:"--stepper-steps-border-radius",description:"Full radius for circular shape (--global-spacing-radius-full)"},{name:"--stepper-steps-default-border",description:"Border color for default/future steps (--global-color-neutral-gray-300)"},{name:"--stepper-steps-active-border",description:"Border and text color for active step (--global-color-secondary-navy)"},{name:"--stepper-steps-complete-bg",description:"Background of completed step circle (--global-color-secondary-navy)"},{name:"--stepper-steps-complete-icon",description:"Checkmark color inside complete circle (--global-color-base-white)"},{name:"--stepper-steps-label-color",description:"Default label text color (--global-color-neutral-gray-700)"},{name:"--stepper-steps-label-color-active",description:"Label color for active/complete steps (--global-color-base-black)"},{name:"--stepper-steps-item-gap",description:"Gap between step items in the strip (--global-spacing-sizing-8px)"}]})}),e.jsx(s.Section,{title:"Usage Principles",children:e.jsxs(s.Principles,{children:[e.jsx(s.PrincipleCard,{number:1,title:"One active step at a time",children:'Only one step should be in the "active" state at once. Steps before it should be "complete" and steps after should be "default" or "disabled".'}),e.jsx(s.PrincipleCard,{number:2,title:"Progress flows left to right",children:"Always lay out StepperSteps horizontally with completed steps on the left and future steps on the right, matching the natural reading direction."}),e.jsx(s.PrincipleCard,{number:3,title:"Consistent labels",children:"Either show labels on all steps or none. Mixing labelled and unlabelled steps in a single strip creates visual imbalance."})]})}),e.jsx(s.Section,{title:"Dos and Don'ts",children:e.jsx(s.DosDonts,{doItem:{icon:e.jsx("div",{style:r,children:e.jsx(a,{steps:x,size:"default"})}),description:"Show mixed states to reflect real progress: complete → active → default."},dontItem:{icon:e.jsx("div",{style:r,children:e.jsx(a,{steps:C,size:"default"})}),description:"Don't set all steps to active — only the current step should be highlighted."}})}),e.jsx(s.Footer,{})]});de.__docgenInfo={description:"",methods:[],displayName:"StepperStepsDocs"};const m=[{id:1,label:"Text"},{id:2,label:"Text"},{id:3,label:"Text"},{id:4,label:"Text"},{id:5,label:"Text"}],E=[{id:1,label:"Step 1",state:"complete"},{id:2,label:"Step 2",state:"complete"},{id:3,label:"Step 3",state:"active"},{id:4,label:"Step 4",state:"default"},{id:5,label:"Step 5",state:"default"}],ce=m.map(t=>({...t,state:"complete",label:"Complete"})),we=m.map(t=>({...t,state:"active"})),De=m.map(t=>({...t,state:"disabled"})),p=["small","default","large"],i={padding:"16px",background:"#f9fafb",borderRadius:"6px",display:"inline-flex"},ke={title:"Foundation/BuildingBlocks/StepperSteps",component:a,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:p},showLabel:{control:"boolean"}},args:{steps:m,size:"default",showLabel:!0}},b={name:"Documentation",render:()=>e.jsx(de,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},f={name:"Playground",render:t=>e.jsx("div",{style:i,children:e.jsx(a,{...t})})},g={name:"All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:p.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:t}),e.jsx("div",{style:i,children:e.jsx(a,{steps:m,size:t})})]},t))})},v={name:"State / Default",render:()=>e.jsx("div",{style:i,children:e.jsx(a,{steps:m,size:"default"})})},y={name:"State / Active",render:()=>e.jsx("div",{style:i,children:e.jsx(a,{steps:we,size:"default"})})},j={name:"State / Complete",render:()=>e.jsx("div",{style:i,children:e.jsx(a,{steps:ce,size:"default"})})},_={name:"State / Disabled",render:()=>e.jsx("div",{style:i,children:e.jsx(a,{steps:De,size:"default"})})},z={name:"Mixed States",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:p.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:t}),e.jsx("div",{style:i,children:e.jsx(a,{steps:E,size:t})})]},t))})},T={name:"Without Labels",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:p.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:t}),e.jsx("div",{style:i,children:e.jsx(a,{steps:E,size:t,showLabel:!1})})]},t))})},w={name:"Complete / All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:p.map(t=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},children:t}),e.jsx("div",{style:i,children:e.jsx(a,{steps:ce,size:t})})]},t))})},D={name:"Full Design Matrix",parameters:{layout:"padded"},render:()=>{const t={fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8},u=l=>m.map(o=>({...o,state:l,label:l==="complete"?"Complete":"Text"}));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[p.map(l=>["default","active","complete","disabled"].map(o=>e.jsxs("div",{children:[e.jsxs("div",{style:t,children:[l," — ",o]}),e.jsx("div",{style:i,children:e.jsx(a,{steps:u(o),size:l})})]},`${l}-${o}`))),p.map(l=>e.jsxs("div",{children:[e.jsxs("div",{style:t,children:[l," — mixed states"]}),e.jsx("div",{style:i,children:e.jsx(a,{steps:E,size:l})})]},`${l}-mixed`))]})}};var L,k,A;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(k=b.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var P,I,B;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={wrap}>
      <StepperSteps {...args} />
    </div>
}`,...(B=(I=f.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var M,$,W;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(W=($=g.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var F,O,N;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'State / Default',
  render: () => <div style={wrap}>
      <StepperSteps steps={DEFAULT_STEPS} size="default" />
    </div>
}`,...(N=(O=v.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};var Z,V,R;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'State / Active',
  render: () => <div style={wrap}>
      <StepperSteps steps={ACTIVE_STEPS} size="default" />
    </div>
}`,...(R=(V=y.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var q,U,X;j.parameters={...j.parameters,docs:{...(q=j.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'State / Complete',
  render: () => <div style={wrap}>
      <StepperSteps steps={COMPLETE_STEPS} size="default" />
    </div>
}`,...(X=(U=j.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var G,H,J;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'State / Disabled',
  render: () => <div style={wrap}>
      <StepperSteps steps={DISABLED_STEPS} size="default" />
    </div>
}`,...(J=(H=_.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,Y;z.parameters={...z.parameters,docs:{...(K=z.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Q=z.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,te,se;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(te=T.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,le,re;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(le=w.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ie,ne,oe;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const Ae=["Documentation","Playground","AllSizes","StateDefault","StateActive","StateComplete","StateDisabled","MixedStates","WithoutLabels","CompleteSizes","FullDesignMatrix"];export{g as AllSizes,w as CompleteSizes,b as Documentation,D as FullDesignMatrix,z as MixedStates,f as Playground,y as StateActive,j as StateComplete,v as StateDefault,_ as StateDisabled,T as WithoutLabels,Ae as __namedExportsOrder,ke as default};
