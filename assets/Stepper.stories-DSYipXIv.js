import{R as D,j as e}from"./iframe-Dar69v5t.js";import{S as we}from"./StepperSteps-CABG4Z77.js";import{S as Te}from"./StepperLines-BWqvCuvT.js";import{D as s}from"./DocsTemplate-B3INTUY7.js";import"./preload-helper-Dp1pzeXC.js";const Le="_stepper_1ez12_7",De="_stepWrapper_1ez12_15",_e="_stepItem_1ez12_26",Ie="_lineWrapper_1ez12_38",Ae="_line_1ez12_38",Be="_stepWrapperInteractive_1ez12_61",m={stepper:Le,stepWrapper:De,stepItem:_e,lineWrapper:Ie,"lineWrapper--small":"_lineWrapper--small_1ez12_46","lineWrapper--default":"_lineWrapper--default_1ez12_47","lineWrapper--large":"_lineWrapper--large_1ez12_48",line:Ae,stepWrapperInteractive:Be};function We(t,a){return t==="disabled"||a==="disabled"?"disabled":t==="complete"&&(a==="complete"||a==="active")?"complete":"to-do"}function E(t,a,n){const o=t.state??"default";return o==="disabled"?"disabled":a===n?"active":a<n?o==="complete"?"complete":o:"default"}const l=({steps:t,size:a="default",showLabel:n=!0,lineType:o="solid",lineStroke:f="1-px",interactive:i=!1,onStepClick:_,className:ye})=>{const ge=D.useMemo(()=>t.findIndex(r=>r.state==="active"),[]),[A,ve]=D.useState(ge);if(!t||t.length===0)return null;const je=[m.stepper,ye].filter(Boolean).join(" "),ke=[m.lineWrapper,m[`lineWrapper--${a}`]].join(" "),B=r=>{i&&(ve(r),_==null||_(r,t[r]))};return e.jsx("div",{className:je,role:"group","aria-label":"Progress steps",children:t.map((r,d)=>{const h=i?E(r,d,A):r.state??"default",W=d===t.length-1,c=h==="disabled",ze=W?"default":i?E(t[d+1],d+1,A):t[d+1].state??"default",Ce=We(h,ze);return e.jsxs(D.Fragment,{children:[e.jsx("div",{className:[m.stepWrapper,i&&!c?m.stepWrapperInteractive:""].filter(Boolean).join(" "),onClick:i&&!c?()=>B(d):void 0,onKeyDown:i&&!c?I=>{(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),B(d))}:void 0,role:i&&!c?"button":void 0,tabIndex:i&&!c?0:void 0,"aria-label":i&&!c?`Go to ${r.label??`step ${d+1}`}`:void 0,"aria-current":h==="active"?"step":void 0,"aria-disabled":c||void 0,children:e.jsx(we,{steps:[{id:r.id,label:r.label,state:h}],size:a,showLabel:n,className:m.stepItem})}),!W&&e.jsx("div",{className:ke,children:e.jsx(Te,{type:o,stroke:f,state:Ce,className:m.line})})]},r.id)})})};l.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepperStep"}],raw:"StepperStep[]"},description:"Array of step definitions. Numbers are generated automatically."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Visual size of all step circles and connector lines.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show labels below the circles.
@default true`,defaultValue:{value:"true",computed:!1}},lineType:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Line style for the connectors between steps.
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},lineStroke:{required:!1,tsType:{name:"union",raw:"'1-px' | '2-px' | '3-px'",elements:[{name:"literal",value:"'1-px'"},{name:"literal",value:"'2-px'"},{name:"literal",value:"'3-px'"}]},description:`Stroke thickness for the connector lines.
@default '2-px'`,defaultValue:{value:"'1-px'",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:`When true, each step is clickable. Clicking a step sets it as the active
(current) step. Only steps that were explicitly marked \`complete\` in the
original data remain complete — no steps are auto-promoted to complete
purely because they precede the clicked step.
@default false`,defaultValue:{value:"false",computed:!1}},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number, step: StepperStep) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"StepperStep"},name:"step"}],return:{name:"void"}}},description:"Callback fired when the user clicks a step (only when `interactive` is true).\nReceives the zero-based index and the original step definition."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};const u=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"active"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],Ee=[{id:1,label:"Step one",state:"default"},{id:2,label:"Step two",state:"default"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],N=[{id:1,label:"Complete",state:"complete"},{id:2,label:"Complete",state:"complete"},{id:3,label:"Complete",state:"complete"},{id:4,label:"Complete",state:"complete"}],Ne=[{id:1,label:"Step one",state:"disabled"},{id:2,label:"Step two",state:"disabled"},{id:3,label:"Step three",state:"disabled"},{id:4,label:"Step four",state:"disabled"}],S={padding:"24px",background:"var(--global-color-neutral-gray-50, #f9fafb)",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"24px"},b={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500, #6b7280)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},ue=()=>e.jsxs(s,{children:[e.jsx(s.Header,{title:"Stepper",subtitle:"A horizontal progress indicator that guides users through a multi-step workflow. Composes StepperSteps and StepperLines building blocks to show numbered circles connected by progress lines."}),e.jsxs(s.Section,{title:"MUI Foundation",children:[e.jsxs(s.BodyText,{children:["The Stepper is a ",e.jsx("strong",{children:"pure React composition component"})," with no MUI base of its own. It delegates all rendering to two building blocks — ",e.jsx("strong",{children:"StepperSteps"})," and"," ",e.jsx("strong",{children:"StepperLines"})," — both of which are also pure React components. No MUI layout or interactive primitive is imported in the Stepper, StepperSteps, or StepperLines components. All colour, sizing, line style, and state transitions are driven by CSS Modules and the ",e.jsx("code",{children:"--stepper-steps-*"})," / ",e.jsx("code",{children:"--stepper-lines-*"})," token families."]}),e.jsx(s.CodeBlock,{children:`// No MUI base import required in Stepper, StepperSteps, or StepperLines
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
</div>`})]}),e.jsxs(s.Section,{title:"Overview",children:[e.jsx(s.BodyText,{children:"The Stepper renders numbered step circles and connector lines interleaved in a horizontal layout. It automatically derives each connector's state from adjacent step states — so you only need to manage step state in a single array."}),e.jsx("div",{style:S,children:e.jsx(l,{steps:u,size:"default"})})]}),e.jsx(s.Section,{title:"Anatomy",children:e.jsx(s.Anatomy,{preview:e.jsx("div",{style:{padding:"16px"},children:e.jsx(l,{steps:u,size:"default"})}),parts:[{id:1,name:"Step circle",token:"StepperSteps",description:"Displays the step number or a checkmark when complete. Colour is driven by the step state."},{id:2,name:"Step label",token:"--stepper-steps-font-family",description:"Optional text label below the circle identifying the step."},{id:3,name:"Connector line",token:"StepperLines",description:"Horizontal line between circles that reflects the progress state of that segment."}]})}),e.jsxs(s.Section,{title:"States",children:[e.jsxs(s.BodyText,{children:["Each step accepts a ",e.jsx("code",{children:"state"})," prop. The adjacent connector line colour is resolved automatically:"]}),e.jsx(s.BulletList,{items:["default — outlined circle with light border; not yet reached. Adjacent connectors show as to-do (dark gray).","active — outlined circle with navy border and text; current step. Connectors behind it are complete (blue), connectors ahead are to-do (dark gray).","complete — filled navy circle with white checkmark; step done. Connectors between complete steps are complete (blue).","disabled — outlined circle with faded border; step not available. Adjacent connectors show as disabled (light gray)."]}),e.jsxs("div",{style:S,children:[e.jsxs("div",{children:[e.jsx("div",{style:b,children:"Default — all steps pending"}),e.jsx(l,{steps:Ee})]}),e.jsxs("div",{children:[e.jsx("div",{style:b,children:"Mixed — complete › active › default"}),e.jsx(l,{steps:u})]}),e.jsxs("div",{children:[e.jsx("div",{style:b,children:"Complete — all steps done"}),e.jsx(l,{steps:N})]}),e.jsxs("div",{children:[e.jsx("div",{style:b,children:"Disabled"}),e.jsx(l,{steps:Ne})]})]})]}),e.jsxs(s.Section,{title:"Sizes",children:[e.jsxs(s.BodyText,{children:["Three sizes are available — ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and ",e.jsx("code",{children:"large"}),". The size prop controls the circle diameter, typography scale, and gap between elements."]}),e.jsx("div",{style:S,children:["small","default","large"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:b,children:t}),e.jsx(l,{steps:u,size:t})]},t))})]}),e.jsxs(s.Section,{title:"Line Types",children:[e.jsxs(s.BodyText,{children:["The ",e.jsx("code",{children:"lineType"})," prop controls the visual style of the connectors between steps."]}),e.jsx("div",{style:S,children:["solid","dashed","dotted"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:b,children:t}),e.jsx(l,{steps:u,lineType:t})]},t))})]}),e.jsxs(s.Section,{title:"Design Tokens",children:[e.jsx(s.BodyText,{children:"The Stepper delegates token usage to its building blocks. The tokens below are consumed by StepperSteps and StepperLines respectively."}),e.jsx(s.Subsection,{title:"Step Circle Tokens (StepperSteps)",children:e.jsx(s.TokenTable,{tokens:[{name:"--stepper-steps-size-small",description:"Circle diameter — small → 24 px (global-spacing-sizing-24px)"},{name:"--stepper-steps-size-default",description:"Circle diameter — default → 36 px (global-spacing-sizing-36px)"},{name:"--stepper-steps-size-large",description:"Circle diameter — large → 48 px (global-spacing-sizing-48px)"},{name:"--stepper-steps-default-border",description:"Default circle border — neutral-gray-300"},{name:"--stepper-steps-default-text",description:"Default circle text — neutral-gray-500"},{name:"--stepper-steps-active-border",description:"Active circle border — secondary-navy (#3A3282)"},{name:"--stepper-steps-active-text",description:"Active circle text — secondary-navy (#3A3282)"},{name:"--stepper-steps-complete-bg",description:"Complete circle fill — secondary-navy (#3A3282)"},{name:"--stepper-steps-complete-icon",description:"Complete circle checkmark — white"}]})}),e.jsx(s.Subsection,{title:"Connector Line Tokens (StepperLines)",children:e.jsx(s.TokenTable,{tokens:[{name:"--stepper-lines-color-disabled",description:"Connector — disabled state → neutral-gray-300 (#d2d5da)"},{name:"--stepper-lines-color-todo",description:"Connector — to-do state → neutral-gray-700 (#374151)"},{name:"--stepper-lines-color-complete",description:"Connector — complete state → brand-primary (#3776ce)"},{name:"--stepper-lines-stroke-1px",description:"Connector — thin stroke (1 px)"},{name:"--stepper-lines-stroke-2px",description:"Connector — default stroke (2 px)"},{name:"--stepper-lines-stroke-3px",description:"Connector — thick stroke (3 px)"}]})})]}),e.jsx(s.Section,{title:"Usage Principles",children:e.jsxs(s.Principles,{children:[e.jsx(s.PrincipleCard,{number:1,title:"Reflect real progress",children:"Only mark steps as complete once the user has genuinely finished them. Do not pre-complete steps to show further progress."}),e.jsx(s.PrincipleCard,{number:2,title:"One active step at a time",children:"There should be at most one step in the active state. Active communicates the current position in the workflow."}),e.jsx(s.PrincipleCard,{number:3,title:"Keep labels concise",children:"Step labels should be 1–3 words. Longer labels wrap and can misalign the layout on smaller screens."}),e.jsx(s.PrincipleCard,{number:4,title:"Consistent size",children:"Use a single size prop for all steps in a stepper. Mixing sizes within one instance is not supported."})]})}),e.jsx(s.Section,{title:"Do and Don't",children:e.jsx(s.DosDonts,{doItem:{icon:e.jsx(l,{steps:u,size:"small"}),label:"Mark progress accurately",description:"Update step states as the user advances through the flow. Use complete, active, and default to reflect genuine progress."},dontItem:{icon:e.jsx(l,{steps:N,size:"small"}),label:"Do not pre-complete steps",description:"Do not mark steps as complete before the user has finished them. This misleads the user about their actual progress."}})}),e.jsx(s.Footer,{})]});ue.__docgenInfo={description:"",methods:[],displayName:"StepperDocs"};const Ve={title:"Atoms/Stepper",component:l,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["small","default","large"],description:"Size of all step circles"},showLabel:{control:"boolean",description:"Show labels below each circle"},lineType:{control:"select",options:["solid","dashed","dotted"],description:"Visual style of the connector line"},lineStroke:{control:"select",options:["1-px","2-px","3-px"],description:"Stroke thickness of the connector line"},interactive:{control:"boolean",description:"When true, each step is clickable. Clicking sets it as the current (active) step. Only steps explicitly marked complete in the data remain complete — prior steps are not auto-promoted."}},args:{size:"default",showLabel:!0,lineType:"solid",lineStroke:"1-px",interactive:!1}},x=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"active"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],be=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"complete"},{id:3,label:"Step three",state:"active"},{id:4,label:"Step four",state:"default"},{id:5,label:"Step five",state:"default"}],xe=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"complete"},{id:3,label:"Step three",state:"complete"},{id:4,label:"Step four",state:"active"},{id:5,label:"Step five",state:"default"},{id:6,label:"Step six",state:"default"}],fe=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"complete"},{id:3,label:"Step three",state:"complete"},{id:4,label:"Step four",state:"complete"},{id:5,label:"Step five",state:"active"},{id:6,label:"Step six",state:"default"},{id:7,label:"Step seven",state:"default"},{id:8,label:"Step eight",state:"default"}],Pe=[{id:1,label:"Step one",state:"default"},{id:2,label:"Step two",state:"default"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],he=[{id:1,label:"Complete",state:"complete"},{id:2,label:"Complete",state:"complete"},{id:3,label:"Complete",state:"complete"},{id:4,label:"Complete",state:"complete"}],Se=[{id:1,label:"Step one",state:"disabled"},{id:2,label:"Step two",state:"disabled"},{id:3,label:"Step three",state:"disabled"},{id:4,label:"Step four",state:"disabled"}],p={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500, #6b7280)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},Re={background:"var(--global-color-neutral-gray-50, #f9fafb)",border:"1px solid var(--global-color-neutral-gray-200, #e5e7eb)",borderRadius:"var(--global-spacing-radius-md, 8px)",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},y={name:"Documentation",render:()=>e.jsx(ue,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},g={name:"Playground",args:{steps:x}},v={name:"States",render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Default"}),e.jsx(l,{...t,steps:Pe})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Active (step 2)"}),e.jsx(l,{...t,steps:x})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Complete (all)"}),e.jsx(l,{...t,steps:he})]}),e.jsxs("div",{children:[e.jsx("div",{style:p,children:"Disabled"}),e.jsx(l,{...t,steps:Se})]})]}),parameters:{controls:{include:["size","showLabel","lineType","lineStroke"]}}},j={name:"Interactive",render:t=>{const[a,n]=D.useState("Click any step to navigate"),o=[{id:1,label:"Account setup",state:"complete"},{id:2,label:"Plan selection",state:"complete"},{id:3,label:"Payment",state:"active"},{id:4,label:"Confirmation",state:"default"},{id:5,label:"Done",state:"default"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"640px"},children:[e.jsxs("p",{style:{margin:0,fontSize:"13px",color:"var(--global-color-neutral-gray-500)"},children:["Click any step to jump to it. Steps marked ",e.jsx("strong",{children:"complete"})," in the data remain complete; future steps reset to ",e.jsx("strong",{children:"default"}),"."]}),e.jsx(l,{...t,steps:o,interactive:!0,onStepClick:(f,i)=>n(`Navigated to step ${f+1}: "${i.label}"`)}),e.jsx("p",{style:{margin:0,padding:"8px 12px",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-sm, 4px)",fontSize:"12px",fontFamily:"monospace",color:"var(--global-color-neutral-gray-700)"},children:a})]})},parameters:{controls:{include:["size","showLabel","lineType","lineStroke"]},chromatic:{disableSnapshot:!0}}},k={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:["small","default","large"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:p,children:t}),e.jsx(l,{steps:x,size:t})]},t))}),parameters:{controls:{disable:!0}}},z={name:"Step Counts",render:t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[{label:"4 steps",steps:x},{label:"5 steps",steps:be},{label:"6 steps",steps:xe},{label:"8 steps",steps:fe}].map(({label:a,steps:n})=>e.jsxs("div",{children:[e.jsx("div",{style:p,children:a}),e.jsx(l,{...t,steps:n})]},a))}),parameters:{controls:{include:["size","showLabel","lineType","lineStroke"]}}},C={name:"Line Types",render:t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:["solid","dashed","dotted"].map(a=>e.jsxs("div",{children:[e.jsx("div",{style:p,children:a}),e.jsx(l,{...t,steps:x,lineType:a})]},a))}),parameters:{controls:{include:["size","showLabel","lineStroke"]}}},w={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"600px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontWeight:600,fontSize:"13px"},children:"Sub-atoms"}),e.jsx(l,{size:"default",showLabel:!0,steps:[{id:1,label:"Step 1",state:"past"},{id:2,label:"Step 2",state:"current"},{id:3,label:"Step 3",state:"future"}]}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"StepperSteps + StepperLines composite"})]}),parameters:{controls:{disable:!0}}},T={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx(l,{size:"default",showLabel:!0,lineType:"solid",steps:[{id:1,label:"Past",state:"past"},{id:2,label:"Current",state:"current"},{id:3,label:"Future",state:"future"}]}),e.jsx(l,{size:"default",showLabel:!0,lineType:"dashed",steps:[{id:1,label:"Past",state:"past"},{id:2,label:"Current",state:"current"},{id:3,label:"Future",state:"future"}]})]}),parameters:{controls:{disable:!0}}},L={name:"Full Design Matrix",render:()=>{const t=["small","default","large"],a=[{label:"4 steps — mixed states",steps:x},{label:"5 steps — mixed states",steps:be},{label:"6 steps — mixed states",steps:xe},{label:"8 steps — mixed states",steps:fe},{label:"4 steps — all complete",steps:he},{label:"4 steps — all disabled",steps:Se}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:t.map(n=>e.jsxs("div",{children:[e.jsxs("div",{style:{...p,fontSize:"14px",marginBottom:"16px"},children:["Size: ",n]}),e.jsx("div",{style:Re,children:a.map(({label:o,steps:f})=>e.jsxs("div",{children:[e.jsx("div",{style:{...p,textTransform:"none",fontSize:"11px"},children:o}),e.jsx(l,{steps:f,size:n})]},o))})]},n))})},parameters:{controls:{disable:!0}}};var P,R,F;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(R=y.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var O,M,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    steps: steps4
  }
}`,...(q=(M=g.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var U,V,$;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...($=(V=v.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var H,K,G;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Interactive',
  render: args => {
    const [log, setLog] = React.useState<string>('Click any step to navigate');
    const baseSteps: StepperStep[] = [{
      id: 1,
      label: 'Account setup',
      state: 'complete'
    }, {
      id: 2,
      label: 'Plan selection',
      state: 'complete'
    }, {
      id: 3,
      label: 'Payment',
      state: 'active'
    }, {
      id: 4,
      label: 'Confirmation',
      state: 'default'
    }, {
      id: 5,
      label: 'Done',
      state: 'default'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '640px'
    }}>
        <p style={{
        margin: 0,
        fontSize: '13px',
        color: 'var(--global-color-neutral-gray-500)'
      }}>
          Click any step to jump to it. Steps marked <strong>complete</strong> in the data remain
          complete; future steps reset to <strong>default</strong>.
        </p>
        <Stepper {...args} steps={baseSteps} interactive onStepClick={(index, step) => setLog(\`Navigated to step \${index + 1}: "\${step.label}"\`)} />
        <p style={{
        margin: 0,
        padding: '8px 12px',
        background: 'var(--global-color-neutral-gray-100)',
        borderRadius: 'var(--global-spacing-radius-sm, 4px)',
        fontSize: '12px',
        fontFamily: 'monospace',
        color: 'var(--global-color-neutral-gray-700)'
      }}>
          {log}
        </p>
      </div>;
  },
  parameters: {
    controls: {
      include: ['size', 'showLabel', 'lineType', 'lineStroke']
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(G=(K=j.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Q,X;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=z.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,le;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(se=C.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ae,ne,re;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,oe,pe;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(pe=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:pe.source}}};var de,ce,me;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const $e=["Documentation","Playground","States","Interactive","Sizes","StepCounts","LineTypes","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{T as AllInteractiveStates,w as ComponentBreakdown,y as Documentation,L as FullDesignMatrix,j as Interactive,C as LineTypes,g as Playground,k as Sizes,v as States,z as StepCounts,$e as __namedExportsOrder,Ve as default};
