import{j as e,R as me}from"./iframe-DFgijXN4.js";import{S as ue}from"./StepperSteps-B8-RX4ID.js";import{S as xe}from"./StepperLines-CmFyXz8j.js";import{D as s}from"./DocsTemplate-B8PzL_3D.js";import"./preload-helper-Dp1pzeXC.js";const be="_stepper_qmmww_7",he="_stepWrapper_qmmww_15",Se="_stepItem_qmmww_26",fe="_lineWrapper_qmmww_38",ye="_line_qmmww_38",i={stepper:be,stepWrapper:he,stepItem:Se,lineWrapper:fe,"lineWrapper--small":"_lineWrapper--small_qmmww_46","lineWrapper--default":"_lineWrapper--default_qmmww_47","lineWrapper--large":"_lineWrapper--large_qmmww_48",line:ye};function ve(t,a){return t==="disabled"||a==="disabled"?"disabled":t==="complete"&&(a==="complete"||a==="active")?"complete":"to-do"}const l=({steps:t,size:a="default",showLabel:r=!0,lineType:c="solid",lineStroke:w="1-px",className:ie})=>{if(!t||t.length===0)return null;const pe=[i.stepper,ie].filter(Boolean).join(" "),oe=[i.lineWrapper,i[`lineWrapper--${a}`]].join(" ");return e.jsx("div",{className:pe,role:"group","aria-label":"Progress steps",children:t.map((m,k)=>{const C=m.state??"default",T=k===t.length-1,de=T?"default":t[k+1].state??"default",ce=ve(C,de);return e.jsxs(me.Fragment,{children:[e.jsx("div",{className:i.stepWrapper,children:e.jsx(ue,{steps:[{id:m.id,label:m.label,state:C}],size:a,showLabel:r,className:i.stepItem})}),!T&&e.jsx("div",{className:oe,children:e.jsx(xe,{type:c,stroke:w,state:ce,className:i.line})})]},m.id)})})};l.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepperStep"}],raw:"StepperStep[]"},description:"Array of step definitions. Numbers are generated automatically."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Visual size of all step circles and connector lines.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show labels below the circles.
@default true`,defaultValue:{value:"true",computed:!1}},lineType:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Line style for the connectors between steps.
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},lineStroke:{required:!1,tsType:{name:"union",raw:"'1-px' | '2-px' | '3-px'",elements:[{name:"literal",value:"'1-px'"},{name:"literal",value:"'2-px'"},{name:"literal",value:"'3-px'"}]},description:`Stroke thickness for the connector lines.
@default '2-px'`,defaultValue:{value:"'1-px'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};const p=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"active"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],ge=[{id:1,label:"Step one",state:"default"},{id:2,label:"Step two",state:"default"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],L=[{id:1,label:"Complete",state:"complete"},{id:2,label:"Complete",state:"complete"},{id:3,label:"Complete",state:"complete"},{id:4,label:"Complete",state:"complete"}],je=[{id:1,label:"Step one",state:"disabled"},{id:2,label:"Step two",state:"disabled"},{id:3,label:"Step three",state:"disabled"},{id:4,label:"Step four",state:"disabled"}],u={padding:"24px",background:"var(--global-color-neutral-gray-50, #f9fafb)",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"24px"},o={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500, #6b7280)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},te=()=>e.jsxs(s,{children:[e.jsx(s.Header,{title:"Stepper",subtitle:"A horizontal progress indicator that guides users through a multi-step workflow. Composes StepperSteps and StepperLines building blocks to show numbered circles connected by progress lines."}),e.jsxs(s.Section,{title:"MUI Foundation",children:[e.jsxs(s.BodyText,{children:["The Stepper is a ",e.jsx("strong",{children:"pure React composition component"})," with no MUI base of its own. It delegates all rendering to two building blocks — ",e.jsx("strong",{children:"StepperSteps"})," and"," ",e.jsx("strong",{children:"StepperLines"})," — both of which are also pure React components. No MUI layout or interactive primitive is imported in the Stepper, StepperSteps, or StepperLines components. All colour, sizing, line style, and state transitions are driven by CSS Modules and the ",e.jsx("code",{children:"--stepper-steps-*"})," / ",e.jsx("code",{children:"--stepper-lines-*"})," token families."]}),e.jsx(s.CodeBlock,{children:`// No MUI base import required in Stepper, StepperSteps, or StepperLines
// Stepper composes its building blocks:
import { StepperSteps } from '../BuildingBlocks/StepperSteps/StepperSteps';
import { StepperLines } from '../BuildingBlocks/StepperLines/StepperLines';

// Renders as:
<div className={styles.stepper}>
  {steps.map((step, i) => (
    <>
      <StepperSteps key={step.id} step={step} size={size} />
      {i < steps.length - 1 && <StepperLines state={connectorState(i)} lineType={lineType} />}
    </>
  ))}
</div>`})]}),e.jsxs(s.Section,{title:"Overview",children:[e.jsx(s.BodyText,{children:"The Stepper renders numbered step circles and connector lines interleaved in a horizontal layout. It automatically derives each connector's state from adjacent step states — so you only need to manage step state in a single array."}),e.jsx("div",{style:u,children:e.jsx(l,{steps:p,size:"default"})})]}),e.jsx(s.Section,{title:"Anatomy",children:e.jsx(s.Anatomy,{preview:e.jsx("div",{style:{padding:"16px"},children:e.jsx(l,{steps:p,size:"default"})}),parts:[{id:1,name:"Step circle",token:"StepperSteps",description:"Displays the step number or a checkmark when complete. Colour is driven by the step state."},{id:2,name:"Step label",token:"--stepper-steps-font-family",description:"Optional text label below the circle identifying the step."},{id:3,name:"Connector line",token:"StepperLines",description:"Horizontal line between circles that reflects the progress state of that segment."}]})}),e.jsxs(s.Section,{title:"States",children:[e.jsxs(s.BodyText,{children:["Each step accepts a ",e.jsx("code",{children:"state"})," prop. The adjacent connector line colour is resolved automatically:"]}),e.jsx(s.BulletList,{items:["default — outlined circle with light border; not yet reached. Adjacent connectors show as to-do (dark gray).","active — outlined circle with navy border and text; current step. Connectors behind it are complete (blue), connectors ahead are to-do (dark gray).","complete — filled navy circle with white checkmark; step done. Connectors between complete steps are complete (blue).","disabled — outlined circle with faded border; step not available. Adjacent connectors show as disabled (light gray)."]}),e.jsxs("div",{style:u,children:[e.jsxs("div",{children:[e.jsx("div",{style:o,children:"Default — all steps pending"}),e.jsx(l,{steps:ge})]}),e.jsxs("div",{children:[e.jsx("div",{style:o,children:"Mixed — complete › active › default"}),e.jsx(l,{steps:p})]}),e.jsxs("div",{children:[e.jsx("div",{style:o,children:"Complete — all steps done"}),e.jsx(l,{steps:L})]}),e.jsxs("div",{children:[e.jsx("div",{style:o,children:"Disabled"}),e.jsx(l,{steps:je})]})]})]}),e.jsxs(s.Section,{title:"Sizes",children:[e.jsxs(s.BodyText,{children:["Three sizes are available — ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and ",e.jsx("code",{children:"large"}),". The size prop controls the circle diameter, typography scale, and gap between elements."]}),e.jsx("div",{style:u,children:["small","default","large"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:o,children:t}),e.jsx(l,{steps:p,size:t})]},t))})]}),e.jsxs(s.Section,{title:"Line Types",children:[e.jsxs(s.BodyText,{children:["The ",e.jsx("code",{children:"lineType"})," prop controls the visual style of the connectors between steps."]}),e.jsx("div",{style:u,children:["solid","dashed","dotted"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:o,children:t}),e.jsx(l,{steps:p,lineType:t})]},t))})]}),e.jsxs(s.Section,{title:"Design Tokens",children:[e.jsx(s.BodyText,{children:"The Stepper delegates token usage to its building blocks. The tokens below are consumed by StepperSteps and StepperLines respectively."}),e.jsx(s.Subsection,{title:"Step Circle Tokens (StepperSteps)",children:e.jsx(s.TokenTable,{tokens:[{name:"--stepper-steps-size-small",description:"Circle diameter — small → 24 px (global-spacing-sizing-24px)"},{name:"--stepper-steps-size-default",description:"Circle diameter — default → 36 px (global-spacing-sizing-36px)"},{name:"--stepper-steps-size-large",description:"Circle diameter — large → 48 px (global-spacing-sizing-48px)"},{name:"--stepper-steps-default-border",description:"Default circle border — neutral-gray-300"},{name:"--stepper-steps-default-text",description:"Default circle text — neutral-gray-500"},{name:"--stepper-steps-active-border",description:"Active circle border — secondary-navy (#3A3282)"},{name:"--stepper-steps-active-text",description:"Active circle text — secondary-navy (#3A3282)"},{name:"--stepper-steps-complete-bg",description:"Complete circle fill — secondary-navy (#3A3282)"},{name:"--stepper-steps-complete-icon",description:"Complete circle checkmark — white"}]})}),e.jsx(s.Subsection,{title:"Connector Line Tokens (StepperLines)",children:e.jsx(s.TokenTable,{tokens:[{name:"--stepper-lines-color-disabled",description:"Connector — disabled state → neutral-gray-300 (#d2d5da)"},{name:"--stepper-lines-color-todo",description:"Connector — to-do state → neutral-gray-700 (#374151)"},{name:"--stepper-lines-color-complete",description:"Connector — complete state → brand-primary (#3776ce)"},{name:"--stepper-lines-stroke-1px",description:"Connector — thin stroke (1 px)"},{name:"--stepper-lines-stroke-2px",description:"Connector — default stroke (2 px)"},{name:"--stepper-lines-stroke-3px",description:"Connector — thick stroke (3 px)"}]})})]}),e.jsx(s.Section,{title:"Usage Principles",children:e.jsxs(s.Principles,{children:[e.jsx(s.PrincipleCard,{number:1,title:"Reflect real progress",children:"Only mark steps as complete once the user has genuinely finished them. Do not pre-complete steps to show further progress."}),e.jsx(s.PrincipleCard,{number:2,title:"One active step at a time",children:"There should be at most one step in the active state. Active communicates the current position in the workflow."}),e.jsx(s.PrincipleCard,{number:3,title:"Keep labels concise",children:"Step labels should be 1–3 words. Longer labels wrap and can misalign the layout on smaller screens."}),e.jsx(s.PrincipleCard,{number:4,title:"Consistent size",children:"Use a single size prop for all steps in a stepper. Mixing sizes within one instance is not supported."})]})}),e.jsx(s.Section,{title:"Do and Don't",children:e.jsx(s.DosDonts,{doItem:{icon:e.jsx(l,{steps:p,size:"small"}),label:"Mark progress accurately",description:"Update step states as the user advances through the flow. Use complete, active, and default to reflect genuine progress."},dontItem:{icon:e.jsx(l,{steps:L,size:"small"}),label:"Do not pre-complete steps",description:"Do not mark steps as complete before the user has finished them. This misleads the user about their actual progress."}})}),e.jsx(s.Footer,{})]});te.__docgenInfo={description:"",methods:[],displayName:"StepperDocs"};const _e={title:"Atoms/Stepper",component:l,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["small","default","large"],description:"Size of all step circles"},showLabel:{control:"boolean",description:"Show labels below each circle"},lineType:{control:"select",options:["solid","dashed","dotted"],description:"Visual style of the connector line"},lineStroke:{control:"select",options:["1-px","2-px","3-px"],description:"Stroke thickness of the connector line"}},args:{size:"default",showLabel:!0,lineType:"solid",lineStroke:"1-px"}},d=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"active"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],se=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"complete"},{id:3,label:"Step three",state:"active"},{id:4,label:"Step four",state:"default"},{id:5,label:"Step five",state:"default"}],le=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"complete"},{id:3,label:"Step three",state:"complete"},{id:4,label:"Step four",state:"active"},{id:5,label:"Step five",state:"default"},{id:6,label:"Step six",state:"default"}],ae=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"complete"},{id:3,label:"Step three",state:"complete"},{id:4,label:"Step four",state:"complete"},{id:5,label:"Step five",state:"active"},{id:6,label:"Step six",state:"default"},{id:7,label:"Step seven",state:"default"},{id:8,label:"Step eight",state:"default"}],we=[{id:1,label:"Step one",state:"default"},{id:2,label:"Step two",state:"default"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],ne=[{id:1,label:"Complete",state:"complete"},{id:2,label:"Complete",state:"complete"},{id:3,label:"Complete",state:"complete"},{id:4,label:"Complete",state:"complete"}],re=[{id:1,label:"Step one",state:"disabled"},{id:2,label:"Step two",state:"disabled"},{id:3,label:"Step three",state:"disabled"},{id:4,label:"Step four",state:"disabled"}],n={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500, #6b7280)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},ke={background:"var(--global-color-neutral-gray-50, #f9fafb)",border:"1px solid var(--global-color-neutral-gray-200, #e5e7eb)",borderRadius:"var(--global-spacing-radius-md, 8px)",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},x={name:"Documentation",render:()=>e.jsx(te,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},b={name:"Playground",args:{steps:d}},h={name:"States",render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:n,children:"Default"}),e.jsx(l,{...t,steps:we})]}),e.jsxs("div",{children:[e.jsx("div",{style:n,children:"Active (step 2)"}),e.jsx(l,{...t,steps:d})]}),e.jsxs("div",{children:[e.jsx("div",{style:n,children:"Complete (all)"}),e.jsx(l,{...t,steps:ne})]}),e.jsxs("div",{children:[e.jsx("div",{style:n,children:"Disabled"}),e.jsx(l,{...t,steps:re})]})]}),parameters:{controls:{include:["size","showLabel","lineType","lineStroke"]}}},S={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:["small","default","large"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:n,children:t}),e.jsx(l,{steps:d,size:t})]},t))}),parameters:{controls:{disable:!0}}},f={name:"Step Counts",render:t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[{label:"4 steps",steps:d},{label:"5 steps",steps:se},{label:"6 steps",steps:le},{label:"8 steps",steps:ae}].map(({label:a,steps:r})=>e.jsxs("div",{children:[e.jsx("div",{style:n,children:a}),e.jsx(l,{...t,steps:r})]},a))}),parameters:{controls:{include:["size","showLabel","lineType","lineStroke"]}}},y={name:"Line Types",render:t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:["solid","dashed","dotted"].map(a=>e.jsxs("div",{children:[e.jsx("div",{style:n,children:a}),e.jsx(l,{...t,steps:d,lineType:a})]},a))}),parameters:{controls:{include:["size","showLabel","lineStroke"]}}},v={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"600px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontWeight:600,fontSize:"13px"},children:"Sub-atoms"}),e.jsx(l,{size:"default",showLabel:!0,steps:[{id:1,label:"Step 1",state:"past"},{id:2,label:"Step 2",state:"current"},{id:3,label:"Step 3",state:"future"}]}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"StepperSteps + StepperLines composite"})]}),parameters:{controls:{disable:!0}}},g={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx(l,{size:"default",showLabel:!0,lineType:"solid",steps:[{id:1,label:"Past",state:"past"},{id:2,label:"Current",state:"current"},{id:3,label:"Future",state:"future"}]}),e.jsx(l,{size:"default",showLabel:!0,lineType:"dashed",steps:[{id:1,label:"Past",state:"past"},{id:2,label:"Current",state:"current"},{id:3,label:"Future",state:"future"}]})]}),parameters:{controls:{disable:!0}}},j={name:"Full Design Matrix",render:()=>{const t=["small","default","large"],a=[{label:"4 steps — mixed states",steps:d},{label:"5 steps — mixed states",steps:se},{label:"6 steps — mixed states",steps:le},{label:"8 steps — mixed states",steps:ae},{label:"4 steps — all complete",steps:ne},{label:"4 steps — all disabled",steps:re}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:t.map(r=>e.jsxs("div",{children:[e.jsxs("div",{style:{...n,fontSize:"14px",marginBottom:"16px"},children:["Size: ",r]}),e.jsx("div",{style:ke,children:a.map(({label:c,steps:w})=>e.jsxs("div",{children:[e.jsx("div",{style:{...n,textTransform:"none",fontSize:"11px"},children:c}),e.jsx(l,{steps:w,size:r})]},c))})]},r))})},parameters:{controls:{disable:!0}}};var z,D,_;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(D=x.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var A,B,I;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    steps: steps4
  }
}`,...(I=(B=b.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var E,W,N;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(W=h.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var P,q,F;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(q=S.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var O,R,M;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(M=(R=f.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var U,V,H;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(V=y.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var K,$,G;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '600px'
  }}>
      <span style={{
      fontFamily: 'var(--brand-font-primary)',
      fontWeight: 600,
      fontSize: '13px'
    }}>Sub-atoms</span>
      <Stepper size="default" showLabel steps={[{
      id: 1,
      label: 'Step 1',
      state: 'past'
    }, {
      id: 2,
      label: 'Step 2',
      state: 'current'
    }, {
      id: 3,
      label: 'Step 3',
      state: 'future'
    }]} />
      <code style={{
      fontSize: '10px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '4px 8px',
      borderRadius: '4px'
    }}>StepperSteps + StepperLines composite</code>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=($=v.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,Q,X;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>
      <Stepper size="default" showLabel lineType="solid" steps={[{
      id: 1,
      label: 'Past',
      state: 'past'
    }, {
      id: 2,
      label: 'Current',
      state: 'current'
    }, {
      id: 3,
      label: 'Future',
      state: 'future'
    }]} />
      <Stepper size="default" showLabel lineType="dashed" steps={[{
      id: 1,
      label: 'Past',
      state: 'past'
    }, {
      id: 2,
      label: 'Current',
      state: 'current'
    }, {
      id: 3,
      label: 'Future',
      state: 'future'
    }]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;j.parameters={...j.parameters,docs:{...(Y=j.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ae=["Documentation","Playground","States","Sizes","StepCounts","LineTypes","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{g as AllInteractiveStates,v as ComponentBreakdown,x as Documentation,j as FullDesignMatrix,y as LineTypes,b as Playground,S as Sizes,h as States,f as StepCounts,Ae as __namedExportsOrder,_e as default};
