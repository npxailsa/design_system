import{R as I,j as e}from"./iframe-DXERnEz1.js";import{S as Te}from"./StepperSteps-MuAjns3m.js";import{S as Le}from"./StepperLines-6-8KXtjm.js";import{D as s}from"./DocsTemplate-BcEQml24.js";import"./preload-helper-Dp1pzeXC.js";const De="_stepper_1ez12_7",_e="_stepWrapper_1ez12_15",Ae="_stepItem_1ez12_26",Be="_lineWrapper_1ez12_38",Ie="_line_1ez12_38",We="_stepWrapperInteractive_1ez12_61",x={stepper:De,stepWrapper:_e,stepItem:Ae,lineWrapper:Be,"lineWrapper--small":"_lineWrapper--small_1ez12_46","lineWrapper--default":"_lineWrapper--default_1ez12_47","lineWrapper--large":"_lineWrapper--large_1ez12_48",line:Ie,stepWrapperInteractive:We};function Ee(t,n){return t==="disabled"||n==="disabled"?"disabled":t==="complete"&&(n==="complete"||n==="active")?"complete":"to-do"}const l=({steps:t,size:n="default",showLabel:d=!0,lineType:f="solid",lineStroke:v="1-px",interactive:o=!1,onStepClick:W,className:ge})=>{const[m,je]=I.useState(()=>t.findIndex(a=>a.state==="active")),[ke,we]=I.useState(()=>{const a=new Set;return t.forEach((r,u)=>{r.state==="complete"&&a.add(u)}),a});if(!t||t.length===0)return null;const N=(a,r)=>o?a.state==="disabled"?"disabled":r===m?"active":ke.has(r)?"complete":"default":a.state??"default",P=a=>{var r;o&&((r=t[a])==null?void 0:r.state)!=="disabled"&&a!==m&&(we(u=>{var p,g;const b=new Set(u);if(a>m&&m>=0)for(let i=m;i<a;i++)((p=t[i])==null?void 0:p.state)!=="disabled"&&b.add(i);else if(a<m)for(let i=a+1;i<=m;i++)((g=t[i])==null?void 0:g.state)!=="complete"&&b.delete(i);return b.delete(a),b}),je(a),W==null||W(a,t[a]))},ze=[x.stepper,ge].filter(Boolean).join(" "),Ce=[x.lineWrapper,x[`lineWrapper--${n}`]].join(" ");return e.jsx("div",{className:ze,role:"group","aria-label":"Progress steps",children:t.map((a,r)=>{const u=N(a,r),b=r===t.length-1,p=a.state==="disabled",g=b?"default":N(t[r+1],r+1),i=Ee(u,g);return e.jsxs(I.Fragment,{children:[e.jsx("div",{className:[x.stepWrapper,o&&!p?x.stepWrapperInteractive:""].filter(Boolean).join(" "),onClick:o&&!p?()=>P(r):void 0,onKeyDown:o&&!p?E=>{(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),P(r))}:void 0,role:o&&!p?"button":void 0,tabIndex:o&&!p?0:void 0,"aria-label":o&&!p?`Go to ${a.label??`step ${r+1}`}`:void 0,"aria-current":u==="active"?"step":void 0,"aria-disabled":p||void 0,children:e.jsx(Te,{steps:[{id:a.id,label:a.label,state:u}],size:n,showLabel:d,className:x.stepItem})}),!b&&e.jsx("div",{className:Ce,children:e.jsx(Le,{type:f,stroke:v,state:i,className:x.line})})]},a.id)})})};l.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepperStep"}],raw:"StepperStep[]"},description:"Array of step definitions. Numbers are generated automatically."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Visual size of all step circles and connector lines.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show labels below the circles.
@default true`,defaultValue:{value:"true",computed:!1}},lineType:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Line style for the connectors between steps.
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},lineStroke:{required:!1,tsType:{name:"union",raw:"'1-px' | '2-px' | '3-px'",elements:[{name:"literal",value:"'1-px'"},{name:"literal",value:"'2-px'"},{name:"literal",value:"'3-px'"}]},description:`Stroke thickness for the connector lines.
@default '1-px'`,defaultValue:{value:"'1-px'",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:`When true, each step is clickable.

Navigation rules:
- **Forward** (clicking a step after the current one): all steps between
  the old active step and the newly clicked step are marked \`complete\`.
- **Backward** (clicking a step before the current one): steps that were
  only dynamically completed revert to \`default\`; steps that were
  explicitly \`complete\` in the original data are preserved.
- \`disabled\` steps are never interactive.

@default false`,defaultValue:{value:"false",computed:!1}},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number, step: StepperStep) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"StepperStep"},name:"step"}],return:{name:"void"}}},description:"Callback fired when the user clicks a step (only when `interactive` is true).\nReceives the zero-based index and the original step definition."},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};const h=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"active"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],Ne=[{id:1,label:"Step one",state:"default"},{id:2,label:"Step two",state:"default"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],F=[{id:1,label:"Complete",state:"complete"},{id:2,label:"Complete",state:"complete"},{id:3,label:"Complete",state:"complete"},{id:4,label:"Complete",state:"complete"}],Pe=[{id:1,label:"Step one",state:"disabled"},{id:2,label:"Step two",state:"disabled"},{id:3,label:"Step three",state:"disabled"},{id:4,label:"Step four",state:"disabled"}],j={padding:"24px",background:"var(--global-color-neutral-gray-50, #f9fafb)",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"24px"},S={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500, #6b7280)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},xe=()=>e.jsxs(s,{children:[e.jsx(s.Header,{title:"Stepper",subtitle:"A horizontal progress indicator that guides users through a multi-step workflow. Composes StepperSteps and StepperLines building blocks to show numbered circles connected by progress lines."}),e.jsxs(s.Section,{title:"MUI Foundation",children:[e.jsxs(s.BodyText,{children:["The Stepper is a ",e.jsx("strong",{children:"pure React composition component"})," with no MUI base of its own. It delegates all rendering to two building blocks — ",e.jsx("strong",{children:"StepperSteps"})," and"," ",e.jsx("strong",{children:"StepperLines"})," — both of which are also pure React components. No MUI layout or interactive primitive is imported in the Stepper, StepperSteps, or StepperLines components. All colour, sizing, line style, and state transitions are driven by CSS Modules and the ",e.jsx("code",{children:"--stepper-steps-*"})," / ",e.jsx("code",{children:"--stepper-lines-*"})," token families."]}),e.jsx(s.CodeBlock,{children:`// No MUI base import required in Stepper, StepperSteps, or StepperLines
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
</div>`})]}),e.jsxs(s.Section,{title:"Overview",children:[e.jsx(s.BodyText,{children:"The Stepper renders numbered step circles and connector lines interleaved in a horizontal layout. It automatically derives each connector's state from adjacent step states — so you only need to manage step state in a single array."}),e.jsx("div",{style:j,children:e.jsx(l,{steps:h,size:"default"})})]}),e.jsx(s.Section,{title:"Anatomy",children:e.jsx(s.Anatomy,{preview:e.jsx("div",{style:{padding:"16px"},children:e.jsx(l,{steps:h,size:"default"})}),parts:[{id:1,name:"Step circle",token:"StepperSteps",description:"Displays the step number or a checkmark when complete. Colour is driven by the step state."},{id:2,name:"Step label",token:"--stepper-steps-font-family",description:"Optional text label below the circle identifying the step."},{id:3,name:"Connector line",token:"StepperLines",description:"Horizontal line between circles that reflects the progress state of that segment."}]})}),e.jsxs(s.Section,{title:"States",children:[e.jsxs(s.BodyText,{children:["Each step accepts a ",e.jsx("code",{children:"state"})," prop. The adjacent connector line colour is resolved automatically:"]}),e.jsx(s.BulletList,{items:["default — outlined circle with light border; not yet reached. Adjacent connectors show as to-do (dark gray).","active — outlined circle with navy border and text; current step. Connectors behind it are complete (blue), connectors ahead are to-do (dark gray).","complete — filled navy circle with white checkmark; step done. Connectors between complete steps are complete (blue).","disabled — outlined circle with faded border; step not available. Adjacent connectors show as disabled (light gray)."]}),e.jsxs("div",{style:j,children:[e.jsxs("div",{children:[e.jsx("div",{style:S,children:"Default — all steps pending"}),e.jsx(l,{steps:Ne})]}),e.jsxs("div",{children:[e.jsx("div",{style:S,children:"Mixed — complete › active › default"}),e.jsx(l,{steps:h})]}),e.jsxs("div",{children:[e.jsx("div",{style:S,children:"Complete — all steps done"}),e.jsx(l,{steps:F})]}),e.jsxs("div",{children:[e.jsx("div",{style:S,children:"Disabled"}),e.jsx(l,{steps:Pe})]})]})]}),e.jsxs(s.Section,{title:"Sizes",children:[e.jsxs(s.BodyText,{children:["Three sizes are available — ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and ",e.jsx("code",{children:"large"}),". The size prop controls the circle diameter, typography scale, and gap between elements."]}),e.jsx("div",{style:j,children:["small","default","large"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:S,children:t}),e.jsx(l,{steps:h,size:t})]},t))})]}),e.jsxs(s.Section,{title:"Line Types",children:[e.jsxs(s.BodyText,{children:["The ",e.jsx("code",{children:"lineType"})," prop controls the visual style of the connectors between steps."]}),e.jsx("div",{style:j,children:["solid","dashed","dotted"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:S,children:t}),e.jsx(l,{steps:h,lineType:t})]},t))})]}),e.jsxs(s.Section,{title:"Design Tokens",children:[e.jsx(s.BodyText,{children:"The Stepper delegates token usage to its building blocks. The tokens below are consumed by StepperSteps and StepperLines respectively."}),e.jsx(s.Subsection,{title:"Step Circle Tokens (StepperSteps)",children:e.jsx(s.TokenTable,{tokens:[{name:"--stepper-steps-size-small",description:"Circle diameter — small → 24 px (global-spacing-sizing-24px)"},{name:"--stepper-steps-size-default",description:"Circle diameter — default → 36 px (global-spacing-sizing-36px)"},{name:"--stepper-steps-size-large",description:"Circle diameter — large → 48 px (global-spacing-sizing-48px)"},{name:"--stepper-steps-default-border",description:"Default circle border — neutral-gray-300"},{name:"--stepper-steps-default-text",description:"Default circle text — neutral-gray-500"},{name:"--stepper-steps-active-border",description:"Active circle border — secondary-navy (#3A3282)"},{name:"--stepper-steps-active-text",description:"Active circle text — secondary-navy (#3A3282)"},{name:"--stepper-steps-complete-bg",description:"Complete circle fill — secondary-navy (#3A3282)"},{name:"--stepper-steps-complete-icon",description:"Complete circle checkmark — white"}]})}),e.jsx(s.Subsection,{title:"Connector Line Tokens (StepperLines)",children:e.jsx(s.TokenTable,{tokens:[{name:"--stepper-lines-color-disabled",description:"Connector — disabled state → neutral-gray-300 (#d2d5da)"},{name:"--stepper-lines-color-todo",description:"Connector — to-do state → neutral-gray-700 (#374151)"},{name:"--stepper-lines-color-complete",description:"Connector — complete state → brand-primary (#3776ce)"},{name:"--stepper-lines-stroke-1px",description:"Connector — thin stroke (1 px)"},{name:"--stepper-lines-stroke-2px",description:"Connector — default stroke (2 px)"},{name:"--stepper-lines-stroke-3px",description:"Connector — thick stroke (3 px)"}]})})]}),e.jsx(s.Section,{title:"Usage Principles",children:e.jsxs(s.Principles,{children:[e.jsx(s.PrincipleCard,{number:1,title:"Reflect real progress",children:"Only mark steps as complete once the user has genuinely finished them. Do not pre-complete steps to show further progress."}),e.jsx(s.PrincipleCard,{number:2,title:"One active step at a time",children:"There should be at most one step in the active state. Active communicates the current position in the workflow."}),e.jsx(s.PrincipleCard,{number:3,title:"Keep labels concise",children:"Step labels should be 1–3 words. Longer labels wrap and can misalign the layout on smaller screens."}),e.jsx(s.PrincipleCard,{number:4,title:"Consistent size",children:"Use a single size prop for all steps in a stepper. Mixing sizes within one instance is not supported."})]})}),e.jsx(s.Section,{title:"Do and Don't",children:e.jsx(s.DosDonts,{doItem:{icon:e.jsx(l,{steps:h,size:"small"}),label:"Mark progress accurately",description:"Update step states as the user advances through the flow. Use complete, active, and default to reflect genuine progress."},dontItem:{icon:e.jsx(l,{steps:F,size:"small"}),label:"Do not pre-complete steps",description:"Do not mark steps as complete before the user has finished them. This misleads the user about their actual progress."}})}),e.jsx(s.Footer,{})]});xe.__docgenInfo={description:"",methods:[],displayName:"StepperDocs"};const $e={title:"Atoms/Stepper",component:l,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["small","default","large"],description:"Size of all step circles"},showLabel:{control:"boolean",description:"Show labels below each circle"},lineType:{control:"select",options:["solid","dashed","dotted"],description:"Visual style of the connector line"},lineStroke:{control:"select",options:["1-px","2-px","3-px"],description:"Stroke thickness of the connector line"},interactive:{control:"boolean",description:"When true, each step is clickable. Clicking sets it as the current (active) step. Only steps explicitly marked complete in the data remain complete — prior steps are not auto-promoted."}},args:{size:"default",showLabel:!0,lineType:"solid",lineStroke:"1-px",interactive:!1}},y=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"active"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],fe=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"complete"},{id:3,label:"Step three",state:"active"},{id:4,label:"Step four",state:"default"},{id:5,label:"Step five",state:"default"}],he=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"complete"},{id:3,label:"Step three",state:"complete"},{id:4,label:"Step four",state:"active"},{id:5,label:"Step five",state:"default"},{id:6,label:"Step six",state:"default"}],Se=[{id:1,label:"Step one",state:"complete"},{id:2,label:"Step two",state:"complete"},{id:3,label:"Step three",state:"complete"},{id:4,label:"Step four",state:"complete"},{id:5,label:"Step five",state:"active"},{id:6,label:"Step six",state:"default"},{id:7,label:"Step seven",state:"default"},{id:8,label:"Step eight",state:"default"}],Fe=[{id:1,label:"Step one",state:"default"},{id:2,label:"Step two",state:"default"},{id:3,label:"Step three",state:"default"},{id:4,label:"Step four",state:"default"}],ye=[{id:1,label:"Complete",state:"complete"},{id:2,label:"Complete",state:"complete"},{id:3,label:"Complete",state:"complete"},{id:4,label:"Complete",state:"complete"}],ve=[{id:1,label:"Step one",state:"disabled"},{id:2,label:"Step two",state:"disabled"},{id:3,label:"Step three",state:"disabled"},{id:4,label:"Step four",state:"disabled"}],c={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-500, #6b7280)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:"8px"},Re={background:"var(--global-color-neutral-gray-50, #f9fafb)",border:"1px solid var(--global-color-neutral-gray-200, #e5e7eb)",borderRadius:"var(--global-spacing-radius-md, 8px)",padding:"24px",display:"flex",flexDirection:"column",gap:"24px"},k={name:"Documentation",render:()=>e.jsx(xe,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},w={name:"Playground",args:{steps:y}},z={name:"States",render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:c,children:"Default"}),e.jsx(l,{...t,steps:Fe})]}),e.jsxs("div",{children:[e.jsx("div",{style:c,children:"Active (step 2)"}),e.jsx(l,{...t,steps:y})]}),e.jsxs("div",{children:[e.jsx("div",{style:c,children:"Complete (all)"}),e.jsx(l,{...t,steps:ye})]}),e.jsxs("div",{children:[e.jsx("div",{style:c,children:"Disabled"}),e.jsx(l,{...t,steps:ve})]})]}),parameters:{controls:{include:["size","showLabel","lineType","lineStroke"]}}},C={name:"Interactive",render:t=>{const[n,d]=I.useState("Click any step to navigate"),f=[{id:1,label:"Account setup",state:"complete"},{id:2,label:"Plan selection",state:"complete"},{id:3,label:"Payment",state:"active"},{id:4,label:"Confirmation",state:"default"},{id:5,label:"Done",state:"default"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"640px"},children:[e.jsxs("p",{style:{margin:0,fontSize:"13px",color:"var(--global-color-neutral-gray-500)"},children:["Click any step to jump to it. Steps marked ",e.jsx("strong",{children:"complete"})," in the data remain complete; future steps reset to ",e.jsx("strong",{children:"default"}),"."]}),e.jsx(l,{...t,steps:f,interactive:!0,onStepClick:(v,o)=>d(`Navigated to step ${v+1}: "${o.label}"`)}),e.jsx("p",{style:{margin:0,padding:"8px 12px",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-sm, 4px)",fontSize:"12px",fontFamily:"monospace",color:"var(--global-color-neutral-gray-700)"},children:n})]})},parameters:{controls:{include:["size","showLabel","lineType","lineStroke"]},chromatic:{disableSnapshot:!0}}},T={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"40px"},children:["small","default","large"].map(t=>e.jsxs("div",{children:[e.jsx("div",{style:c,children:t}),e.jsx(l,{steps:y,size:t})]},t))}),parameters:{controls:{disable:!0}}},L={name:"Step Counts",render:t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[{label:"4 steps",steps:y},{label:"5 steps",steps:fe},{label:"6 steps",steps:he},{label:"8 steps",steps:Se}].map(({label:n,steps:d})=>e.jsxs("div",{children:[e.jsx("div",{style:c,children:n}),e.jsx(l,{...t,steps:d})]},n))}),parameters:{controls:{include:["size","showLabel","lineType","lineStroke"]}}},D={name:"Line Types",render:t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:["solid","dashed","dotted"].map(n=>e.jsxs("div",{children:[e.jsx("div",{style:c,children:n}),e.jsx(l,{...t,steps:y,lineType:n})]},n))}),parameters:{controls:{include:["size","showLabel","lineStroke"]}}},_={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"600px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontWeight:600,fontSize:"13px"},children:"Sub-atoms"}),e.jsx(l,{size:"default",showLabel:!0,steps:[{id:1,label:"Step 1",state:"past"},{id:2,label:"Step 2",state:"current"},{id:3,label:"Step 3",state:"future"}]}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"StepperSteps + StepperLines composite"})]}),parameters:{controls:{disable:!0}}},A={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsx(l,{size:"default",showLabel:!0,lineType:"solid",steps:[{id:1,label:"Past",state:"past"},{id:2,label:"Current",state:"current"},{id:3,label:"Future",state:"future"}]}),e.jsx(l,{size:"default",showLabel:!0,lineType:"dashed",steps:[{id:1,label:"Past",state:"past"},{id:2,label:"Current",state:"current"},{id:3,label:"Future",state:"future"}]})]}),parameters:{controls:{disable:!0}}},B={name:"Full Design Matrix",render:()=>{const t=["small","default","large"],n=[{label:"4 steps — mixed states",steps:y},{label:"5 steps — mixed states",steps:fe},{label:"6 steps — mixed states",steps:he},{label:"8 steps — mixed states",steps:Se},{label:"4 steps — all complete",steps:ye},{label:"4 steps — all disabled",steps:ve}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:t.map(d=>e.jsxs("div",{children:[e.jsxs("div",{style:{...c,fontSize:"14px",marginBottom:"16px"},children:["Size: ",d]}),e.jsx("div",{style:Re,children:n.map(({label:f,steps:v})=>e.jsxs("div",{children:[e.jsx("div",{style:{...c,textTransform:"none",fontSize:"11px"},children:f}),e.jsx(l,{steps:v,size:d})]},f))})]},d))})},parameters:{controls:{disable:!0}}};var R,O,M;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(M=(O=k.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var q,U,V;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    steps: steps4
  }
}`,...(V=(U=w.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var $,H,K;z.parameters={...z.parameters,docs:{...($=z.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(K=(H=z.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var G,J,Q;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,se;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(se=(te=L.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,le,ne;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(le=D.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var re,ie,oe;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var pe,de,ce;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ce=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,ue,be;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};const He=["Documentation","Playground","States","Interactive","Sizes","StepCounts","LineTypes","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{A as AllInteractiveStates,_ as ComponentBreakdown,k as Documentation,B as FullDesignMatrix,C as Interactive,D as LineTypes,w as Playground,T as Sizes,z as States,L as StepCounts,He as __namedExportsOrder,$e as default};
