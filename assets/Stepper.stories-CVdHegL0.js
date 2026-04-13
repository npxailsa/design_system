import{j as e,R as ae}from"./iframe-CrrYeAlt.js";import{S as ne}from"./StepperSteps-B7tPtBwC.js";import{S as ie}from"./StepperLines-CLstWeHb.js";import{D as s}from"./DocsTemplate-CKVnmNf1.js";import"./preload-helper-Dp1pzeXC.js";const re="_stepper_qmmww_7",oe="_stepWrapper_qmmww_15",pe="_stepItem_qmmww_26",de="_lineWrapper_qmmww_38",ce="_line_qmmww_38",r={stepper:re,stepWrapper:oe,stepItem:pe,lineWrapper:de,"lineWrapper--small":"_lineWrapper--small_qmmww_46","lineWrapper--default":"_lineWrapper--default_qmmww_47","lineWrapper--large":"_lineWrapper--large_qmmww_48",line:ce};function me(t,a){return t==="disabled"||a==="disabled"?"disabled":t==="complete"&&(a==="complete"||a==="active")?"complete":"to-do"}const l=({steps:t,size:a="default",showLabel:i=!0,lineType:c="solid",lineStroke:g="2-px",className:Z})=>{if(!t||t.length===0)return null;const ee=[r.stepper,Z].filter(Boolean).join(" "),te=[r.lineWrapper,r[`lineWrapper--${a}`]].join(" ");return e.jsx("div",{className:ee,role:"group","aria-label":"Progress steps",children:t.map((m,j)=>{const w=m.state??"default",T=j===t.length-1,se=T?"default":t[j+1].state??"default",le=me(w,se);return e.jsxs(ae.Fragment,{children:[e.jsx("div",{className:r.stepWrapper,children:e.jsx(ne,{steps:[{id:m.id,label:m.label,state:w}],size:a,showLabel:i,className:r.stepItem})}),!T&&e.jsx("div",{className:te,children:e.jsx(ie,{type:c,stroke:g,state:le,className:r.line})})]},m.id)})})};l.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepperStep"}],raw:"StepperStep[]"},description:"Array of step definitions. Numbers are generated automatically."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Visual size of all step circles and connector lines.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show labels below the circles.
@default true`,defaultValue:{value:"true",computed:!1}},lineType:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Line style for the connectors between steps.
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},lineStroke:{required:!1,tsType:{name:"union",raw:"'1-px' | '2-px' | '3-px'",elements:[{name:"literal",value:"'1-px'"},{name:"literal",value:"'2-px'"},{name:"literal",value:"'3-px'"}]},description:`Stroke thickness for the connector lines.
@default '2-px'`,defaultValue:{value:"'2-px'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};const o=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"active"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],ue=[{id:1,label:"Step one",state:"default"},{id:2,label:"Step two",state:"default"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],C=[{id:1,label:"Complete",state:"complete"},{id:2,label:"Complete",state:"complete"},{id:3,label:"Complete",state:"complete"},{id:4,label:"Complete",state:"complete"}],xe=[{id:1,label:"Step one",state:"disabled"},{id:2,label:"Step two",state:"disabled"},{id:3,label:"Step three",state:"disabled"},{id:4,label:"Step four",state:"disabled"}],u={padding:"24px",background:"var(--global-color-neutral-gray-50, #f9fafb)",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"24px"},p={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500, #6b7280)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},$=()=>e.jsxs(s,{children:[e.jsx(s.Header,{title:"Stepper",subtitle:"A horizontal progress indicator that guides users through a multi-step workflow. Composes StepperSteps and StepperLines building blocks to show numbered circles connected by progress lines."}),e.jsxs(s.Section,{title:"Overview",children:[e.jsx(s.BodyText,{children:"The Stepper renders numbered step circles and connector lines interleaved in a horizontal layout. It automatically derives each connector's state from adjacent step states — so you only need to manage step state in a single array."}),e.jsx("div",{style:u,children:e.jsx(l,{steps:o,size:"default"})})]}),e.jsx(s.Section,{title:"Anatomy",children:e.jsx(s.Anatomy,{preview:e.jsx("div",{style:{padding:"16px"},children:e.jsx(l,{steps:o,size:"default"})}),parts:[{id:1,name:"Step circle",token:"StepperSteps",description:"Displays the step number or a checkmark when complete. Colour is driven by the step state."},{id:2,name:"Step label",token:"--stepper-steps-font-family",description:"Optional text label below the circle identifying the step."},{id:3,name:"Connector line",token:"StepperLines",description:"Horizontal line between circles that reflects the progress state of that segment."}]})}),e.jsxs(s.Section,{title:"States",children:[e.jsxs(s.BodyText,{children:["Each step accepts a ",e.jsx("code",{children:"state"})," prop. The adjacent connector line colour is resolved automatically:"]}),e.jsx(s.BulletList,{items:["default — outlined circle with light border; not yet reached. Adjacent connectors show as to-do (dark gray).","active — outlined circle with navy border and text; current step. Connectors behind it are complete (blue), connectors ahead are to-do (dark gray).","complete — filled navy circle with white checkmark; step done. Connectors between complete steps are complete (blue).","disabled — outlined circle with faded border; step not available. Adjacent connectors show as disabled (light gray)."]}),e.jsxs("div",{style:u,children:[e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Default — all steps pending"}),e.jsx(l,{steps:ue})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Mixed — complete › active › default"}),e.jsx(l,{steps:o})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Complete — all steps done"}),e.jsx(l,{steps:C})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Disabled"}),e.jsx(l,{steps:xe})]})]})]}),e.jsxs(s.Section,{title:"Sizes",children:[e.jsxs(s.BodyText,{children:["Three sizes are available — ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and ",e.jsx("code",{children:"large"}),". The size prop controls the circle diameter, typography scale, and gap between elements."]}),e.jsx("div",{style:u,children:["small","default","large"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:p,children:t}),e.jsx(l,{steps:o,size:t})]},t))})]}),e.jsxs(s.Section,{title:"Line Types",children:[e.jsxs(s.BodyText,{children:["The ",e.jsx("code",{children:"lineType"})," prop controls the visual style of the connectors between steps."]}),e.jsx("div",{style:u,children:["solid","dashed","dotted"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:p,children:t}),e.jsx(l,{steps:o,lineType:t})]},t))})]}),e.jsxs(s.Section,{title:"Design Tokens",children:[e.jsx(s.BodyText,{children:"The Stepper delegates token usage to its building blocks. The tokens below are consumed by StepperSteps and StepperLines respectively."}),e.jsx(s.Subsection,{title:"Step Circle Tokens (StepperSteps)",children:e.jsx(s.TokenTable,{tokens:[{name:"--stepper-steps-size-small",description:"Circle diameter — small → 24 px (global-spacing-sizing-24px)"},{name:"--stepper-steps-size-default",description:"Circle diameter — default → 36 px (global-spacing-sizing-36px)"},{name:"--stepper-steps-size-large",description:"Circle diameter — large → 48 px (global-spacing-sizing-48px)"},{name:"--stepper-steps-default-border",description:"Default circle border — neutral-gray-300"},{name:"--stepper-steps-default-text",description:"Default circle text — neutral-gray-500"},{name:"--stepper-steps-active-border",description:"Active circle border — secondary-navy (#3A3282)"},{name:"--stepper-steps-active-text",description:"Active circle text — secondary-navy (#3A3282)"},{name:"--stepper-steps-complete-bg",description:"Complete circle fill — secondary-navy (#3A3282)"},{name:"--stepper-steps-complete-icon",description:"Complete circle checkmark — white"}]})}),e.jsx(s.Subsection,{title:"Connector Line Tokens (StepperLines)",children:e.jsx(s.TokenTable,{tokens:[{name:"--stepper-lines-color-disabled",description:"Connector — disabled state → neutral-gray-300 (#d2d5da)"},{name:"--stepper-lines-color-todo",description:"Connector — to-do state → neutral-gray-700 (#374151)"},{name:"--stepper-lines-color-complete",description:"Connector — complete state → brand-primary (#3776ce)"},{name:"--stepper-lines-stroke-1px",description:"Connector — thin stroke (1 px)"},{name:"--stepper-lines-stroke-2px",description:"Connector — default stroke (2 px)"},{name:"--stepper-lines-stroke-3px",description:"Connector — thick stroke (3 px)"}]})})]}),e.jsx(s.Section,{title:"Usage Principles",children:e.jsxs(s.Principles,{children:[e.jsx(s.PrincipleCard,{number:1,title:"Reflect real progress",children:"Only mark steps as complete once the user has genuinely finished them. Do not pre-complete steps to show further progress."}),e.jsx(s.PrincipleCard,{number:2,title:"One active step at a time",children:"There should be at most one step in the active state. Active communicates the current position in the workflow."}),e.jsx(s.PrincipleCard,{number:3,title:"Keep labels concise",children:"Step labels should be 1–3 words. Longer labels wrap and can misalign the layout on smaller screens."}),e.jsx(s.PrincipleCard,{number:4,title:"Consistent size",children:"Use a single size prop for all steps in a stepper. Mixing sizes within one instance is not supported."})]})}),e.jsx(s.Section,{title:"Do and Don't",children:e.jsx(s.DosDonts,{doItem:{icon:e.jsx(l,{steps:o,size:"small"}),label:"Mark progress accurately",description:"Update step states as the user advances through the flow. Use complete, active, and default to reflect genuine progress."},dontItem:{icon:e.jsx(l,{steps:C,size:"small"}),label:"Do not pre-complete steps",description:"Do not mark steps as complete before the user has finished them. This misleads the user about their actual progress."}})}),e.jsx(s.Footer,{})]});$.__docgenInfo={description:"",methods:[],displayName:"StepperDocs"};const je={title:"Atoms/Stepper",component:l,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["small","default","large"],description:"Size of all step circles"},showLabel:{control:"boolean",description:"Show labels below each circle"},lineType:{control:"select",options:["solid","dashed","dotted"],description:"Visual style of the connector line"},lineStroke:{control:"select",options:["1-px","2-px","3-px"],description:"Stroke thickness of the connector line"}},args:{size:"default",showLabel:!0,lineType:"solid",lineStroke:"2-px"}},d=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"active"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],G=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"complete"},{id:3,label:"Step three",state:"active"},{id:4,label:"Step four",state:"default"},{id:5,label:"Step five",state:"default"}],J=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"complete"},{id:3,label:"Step three",state:"complete"},{id:4,label:"Step four",state:"active"},{id:5,label:"Step five",state:"default"},{id:6,label:"Step six",state:"default"}],Q=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"complete"},{id:3,label:"Step three",state:"complete"},{id:4,label:"Step four",state:"complete"},{id:5,label:"Step five",state:"active"},{id:6,label:"Step six",state:"default"},{id:7,label:"Step seven",state:"default"},{id:8,label:"Step eight",state:"default"}],be=[{id:1,label:"Step one",state:"default"},{id:2,label:"Step two",state:"default"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],X=[{id:1,label:"Complete",state:"complete"},{id:2,label:"Complete",state:"complete"},{id:3,label:"Complete",state:"complete"},{id:4,label:"Complete",state:"complete"}],Y=[{id:1,label:"Step one",state:"disabled"},{id:2,label:"Step two",state:"disabled"},{id:3,label:"Step three",state:"disabled"},{id:4,label:"Step four",state:"disabled"}],n={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500, #6b7280)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},he={background:"var(--global-color-neutral-gray-50, #f9fafb)",border:"1px solid var(--global-color-neutral-gray-200, #e5e7eb)",borderRadius:"var(--global-spacing-radius-md, 8px)",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},x={name:"Documentation",render:()=>e.jsx($,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},b={name:"Playground",args:{steps:d}},h={name:"States",render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:n,children:"Default"}),e.jsx(l,{...t,steps:be})]}),e.jsxs("div",{children:[e.jsx("div",{style:n,children:"Active (step 2)"}),e.jsx(l,{...t,steps:d})]}),e.jsxs("div",{children:[e.jsx("div",{style:n,children:"Complete (all)"}),e.jsx(l,{...t,steps:X})]}),e.jsxs("div",{children:[e.jsx("div",{style:n,children:"Disabled"}),e.jsx(l,{...t,steps:Y})]})]}),parameters:{controls:{include:["size","showLabel","lineType","lineStroke"]}}},f={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:["small","default","large"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:n,children:t}),e.jsx(l,{steps:d,size:t})]},t))}),parameters:{controls:{disable:!0}}},S={name:"Step Counts",render:t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[{label:"4 steps",steps:d},{label:"5 steps",steps:G},{label:"6 steps",steps:J},{label:"8 steps",steps:Q}].map(({label:a,steps:i})=>e.jsxs("div",{children:[e.jsx("div",{style:n,children:a}),e.jsx(l,{...t,steps:i})]},a))}),parameters:{controls:{include:["size","showLabel","lineType","lineStroke"]}}},v={name:"Line Types",render:t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:["solid","dashed","dotted"].map(a=>e.jsxs("div",{children:[e.jsx("div",{style:n,children:a}),e.jsx(l,{...t,steps:d,lineType:a})]},a))}),parameters:{controls:{include:["size","showLabel","lineStroke"]}}},y={name:"Full Design Matrix",render:()=>{const t=["small","default","large"],a=[{label:"4 steps — mixed states",steps:d},{label:"5 steps — mixed states",steps:G},{label:"6 steps — mixed states",steps:J},{label:"8 steps — mixed states",steps:Q},{label:"4 steps — all complete",steps:X},{label:"4 steps — all disabled",steps:Y}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:t.map(i=>e.jsxs("div",{children:[e.jsxs("div",{style:{...n,fontSize:"14px",marginBottom:"16px"},children:["Size: ",i]}),e.jsx("div",{style:he,children:a.map(({label:c,steps:g})=>e.jsxs("div",{children:[e.jsx("div",{style:{...n,textTransform:"none",fontSize:"11px"},children:c}),e.jsx(l,{steps:g,size:i})]},c))})]},i))})},parameters:{controls:{disable:!0}}};var k,D,z;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <StepperDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen'
  }
}`,...(z=(D=x.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var L,_,A;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    steps: steps4
  }
}`,...(A=(_=b.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var E,B,I;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'States',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <div style={SECTION_LABEL}>Default</div>
        <Stepper {...args} steps={allDefault4} />
      </div>
      <div>
        <div style={SECTION_LABEL}>Active (step 2)</div>
        <Stepper {...args} steps={steps4} />
      </div>
      <div>
        <div style={SECTION_LABEL}>Complete (all)</div>
        <Stepper {...args} steps={allComplete4} />
      </div>
      <div>
        <div style={SECTION_LABEL}>Disabled</div>
        <Stepper {...args} steps={allDisabled4} />
      </div>
    </div>,
  parameters: {
    controls: {
      include: ['size', 'showLabel', 'lineType', 'lineStroke']
    }
  }
}`,...(I=(B=h.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var W,N,O;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px'
  }}>
      {(['small', 'default', 'large'] as const).map(size => <div key={size}>
          <div style={SECTION_LABEL}>{size}</div>
          <Stepper steps={steps4} size={size} />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(O=(N=f.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var q,P,R;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Step Counts',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      {[{
      label: '4 steps',
      steps: steps4
    }, {
      label: '5 steps',
      steps: steps5
    }, {
      label: '6 steps',
      steps: steps6
    }, {
      label: '8 steps',
      steps: steps8
    }].map(({
      label,
      steps
    }) => <div key={label}>
          <div style={SECTION_LABEL}>{label}</div>
          <Stepper {...args} steps={steps} />
        </div>)}
    </div>,
  parameters: {
    controls: {
      include: ['size', 'showLabel', 'lineType', 'lineStroke']
    }
  }
}`,...(R=(P=S.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var F,M,V;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Line Types',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      {(['solid', 'dashed', 'dotted'] as const).map(type => <div key={type}>
          <div style={SECTION_LABEL}>{type}</div>
          <Stepper {...args} steps={steps4} lineType={type} />
        </div>)}
    </div>,
  parameters: {
    controls: {
      include: ['size', 'showLabel', 'lineStroke']
    }
  }
}`,...(V=(M=v.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var U,H,K;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const sizes = ['small', 'default', 'large'] as const;
    const allStepSets = [{
      label: '4 steps — mixed states',
      steps: steps4
    }, {
      label: '5 steps — mixed states',
      steps: steps5
    }, {
      label: '6 steps — mixed states',
      steps: steps6
    }, {
      label: '8 steps — mixed states',
      steps: steps8
    }, {
      label: '4 steps — all complete',
      steps: allComplete4
    }, {
      label: '4 steps — all disabled',
      steps: allDisabled4
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '48px'
    }}>
        {sizes.map(size => <div key={size}>
            <div style={{
          ...SECTION_LABEL,
          fontSize: '14px',
          marginBottom: '16px'
        }}>
              Size: {size}
            </div>
            <div style={CARD}>
              {allStepSets.map(({
            label,
            steps
          }) => <div key={label}>
                  <div style={{
              ...SECTION_LABEL,
              textTransform: 'none',
              fontSize: '11px'
            }}>
                    {label}
                  </div>
                  <Stepper steps={steps} size={size} />
                </div>)}
            </div>
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(H=y.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const we=["Documentation","Playground","States","Sizes","StepCounts","LineTypes","FullDesignMatrix"];export{x as Documentation,y as FullDesignMatrix,v as LineTypes,b as Playground,f as Sizes,h as States,S as StepCounts,we as __namedExportsOrder,je as default};
