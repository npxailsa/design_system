import{j as e,R as v}from"./iframe-CZA_iFYC.js";import{S as a}from"./StatusIcon-CtnKH8pd.js";import{D as r}from"./DocsTemplate-fxukIO4W.js";import"./preload-helper-Dp1pzeXC.js";const Q="_stepper_18ip9_1",X="_connector_18ip9_14",p={stepper:Q,"stepper--horizontal":"_stepper--horizontal_18ip9_6","stepper--vertical":"_stepper--vertical_18ip9_10",connector:X,"connector--horizontal":"_connector--horizontal_18ip9_18","connector--vertical":"_connector--vertical_18ip9_25"},i=({steps:t,size:s="default",showLabels:n=!0,orientation:l="horizontal",className:J})=>{const K={small:22,default:36,large:48}[s];return e.jsx("div",{className:[p.stepper,p[`stepper--${l}`],J].filter(Boolean).join(" "),children:t.map((o,z)=>e.jsxs(v.Fragment,{children:[e.jsx(a,{type:o.type??"warning",size:s,step:o.step,state:o.state??"default",label:n,labelText:o.label}),z<t.length-1&&e.jsx("div",{className:[p.connector,p[`connector--${l}`]].join(" "),style:{[l==="horizontal"?"marginTop":"marginLeft"]:K/2-1}})]},z))})};i.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:"Array of step definitions"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size of all status icons",defaultValue:{value:"'default'",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"Whether to show labels",defaultValue:{value:"true",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Layout orientation",defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};const ee=["warning","error","complete","locked","comments","notification","note","edit"],c=["current","future","past"],te=["small","default","large"],S=()=>e.jsxs(r,{children:[e.jsx(r.Header,{title:"Building Blocks",subtitle:"Status icons and steppers are foundational elements used to communicate progress, state, and workflow stages"}),e.jsxs(r.BodyText,{children:["Building Blocks are the visual atoms that power status communication across the Echo design system. The ",e.jsx("strong",{children:"StatusIcon"})," represents a single status indicator, while the ",e.jsx("strong",{children:"Stepper"})," composes multiple StatusIcons into a sequential progression."]}),e.jsxs(r.Section,{title:"StatusIcon",children:[e.jsx(r.BodyText,{children:"A circular indicator that communicates the state of a process step. Each type maps to a specific icon and colour, while the step prop controls whether the indicator appears as current, future, or past."}),e.jsx(r.Subsection,{title:"Types × Steps",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`120px repeat(${c.length}, 1fr)`,gap:"var(--global-spacing-sizing-16px)",alignItems:"start",padding:"var(--global-spacing-sizing-16px) 0"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontWeight:"var(--global-type-weight-medium)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-500)"},children:"Type"}),c.map(t=>e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontWeight:"var(--global-type-weight-medium)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",textAlign:"center"},children:t},t)),ee.map(t=>e.jsxs(v.Fragment,{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize",paddingTop:"var(--global-spacing-sizing-8px)"},children:t}),c.map(s=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(a,{type:t,step:s,size:"default",label:!1})},`${t}-${s}`))]},t))]})}),e.jsx(r.Subsection,{title:"Sizes",children:e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-40px)",alignItems:"flex-end",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:te.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(a,{type:"warning",step:"current",size:t,label:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:t})]},t))})}),e.jsx(r.Subsection,{title:"Disabled State",children:e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:c.map(t=>e.jsx(a,{type:"warning",step:t,size:"default",state:"disabled",label:!0},t))})})]}),e.jsxs(r.Section,{title:"Stepper",children:[e.jsx(r.BodyText,{children:"The Stepper composes multiple StatusIcons into a sequential progression, connected by horizontal or vertical lines. Use it to represent multi-step workflows, approval chains, or status timelines."}),e.jsx(r.Subsection,{title:"Horizontal Stepper",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-24px) 0"},children:e.jsx(i,{size:"default",steps:[{type:"complete",step:"past",label:"Submitted"},{type:"complete",step:"past",label:"Reviewed"},{type:"warning",step:"current",label:"In Progress"},{type:"notification",step:"future",label:"Approval"},{type:"locked",step:"future",label:"Complete"}]})})}),e.jsx(r.Subsection,{title:"Vertical Stepper",children:e.jsx("div",{style:{padding:"var(--global-spacing-sizing-24px) 0"},children:e.jsx(i,{size:"default",orientation:"vertical",steps:[{type:"complete",step:"past",label:"Step 1"},{type:"warning",step:"current",label:"Step 2"},{type:"error",step:"future",label:"Step 3"}]})})})]}),e.jsx(r.TokenTable,{title:"Design Tokens",description:"StatusIcon and Stepper use the following tokens:",tokens:[{name:"--status-icon-size-small",description:"Circle diameter for small size (22px)"},{name:"--status-icon-size-default",description:"Circle diameter for default size (36px)"},{name:"--status-icon-size-large",description:"Circle diameter for large size (48px)"},{name:"--status-icon-border-radius",description:"Full-round border radius for circles (99999px)"},{name:"--status-icon-border-width-current",description:"Border width for current step (2px)"},{name:"--status-icon-color-warning",description:"Warning type colour (#f4a403)"},{name:"--status-icon-color-error",description:"Error type colour (#ce2031)"},{name:"--status-icon-color-complete",description:"Complete type colour (#227f1a)"},{name:"--status-icon-color-locked",description:"Locked type colour (#61607c)"},{name:"--status-icon-color-comments",description:"Comments type colour (#0ba7ea)"},{name:"--status-icon-color-notification",description:"Notification type colour (#2f42bd)"},{name:"--status-icon-color-note",description:"Note type colour (#5d2c82)"},{name:"--status-icon-color-edit",description:"Edit type colour (#366f97)"},{name:"--stepper-connector-color",description:"Connecting line colour between steps (#d2d5da)"},{name:"--stepper-connector-width",description:"Connecting line thickness (2px)"}]}),e.jsx(r.CodeBlock,{children:`import { StatusIcon } from './BuildingBlocks/StatusIcon';
import { Stepper } from './BuildingBlocks/Stepper';

// Single status icon
<StatusIcon type="warning" step="current" size="default" />

// Stepper with multiple steps
<Stepper
  size="default"
  steps={[
    { type: 'complete', step: 'past', label: 'Done' },
    { type: 'warning', step: 'current', label: 'Active' },
    { type: 'locked', step: 'future', label: 'Pending' },
  ]}
/>`}),e.jsxs(r.Principles,{children:[e.jsx(r.PrincipleCard,{number:1,title:"Clear Status",children:"Each status type uses a distinct colour and icon to ensure users can instantly identify the state at a glance."}),e.jsx(r.PrincipleCard,{number:2,title:"Progressive Disclosure",children:"Past steps show solid filled circles, current steps show bordered circles, and future steps use dashed outlines to convey temporal progression."}),e.jsx(r.PrincipleCard,{number:3,title:"Scalable",children:"Three sizes (small, default, large) ensure the component works in dense data tables, standard forms, and prominent hero workflows."})]}),e.jsx(r.DosDonts,{doItem:{icon:e.jsx(a,{type:"complete",step:"past",size:"small",label:!1}),label:"Consistent usage",description:"Use consistent types across a stepper — all steps should share the same type or use type to indicate the nature of each step."},dontItem:{icon:e.jsx(a,{type:"error",step:"current",size:"small",label:!1}),label:"Inconsistent sizing",description:"Don't mix sizes within a single stepper. All steps should use the same size for visual consistency."}})]});S.__docgenInfo={description:"",methods:[],displayName:"BuildingBlocksDocs"};const ie={title:"Foundation/BuildingBlocks/StatusStepper",component:a,parameters:{docs:{page:()=>e.jsx(S,{})}},argTypes:{type:{control:"select",options:["warning","error","complete","locked","comments","notification","note","edit"]},size:{control:"select",options:["small","default","large"]},step:{control:"select",options:["future","current","past"]},state:{control:"select",options:["default","disabled"]},label:{control:"boolean"},labelText:{control:"text"}},args:{type:"warning",size:"default",step:"current",state:"default",label:!0}},d={render:()=>e.jsx(S,{}),parameters:{controls:{disable:!0},actions:{disable:!0}}},u={},m={render:()=>{const t=["warning","error","complete","locked","comments","notification","note","edit"];return e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"20px"},children:t.map(s=>e.jsx(a,{type:s,step:"current",size:"default",labelText:s},s))})},parameters:{controls:{disable:!0}}},g={render:()=>{const t=["future","current","past"];return e.jsx("div",{style:{display:"flex",gap:"32px",padding:"20px"},children:t.map(s=>e.jsx(a,{type:"warning",step:s,size:"default"},s))})},parameters:{controls:{disable:!0}}},y={render:()=>{const t=["small","default","large"];return e.jsx("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end",padding:"20px"},children:t.map(s=>e.jsx(a,{type:"complete",step:"current",size:s,labelText:s},s))})},parameters:{controls:{disable:!0}}},f={render:()=>{const t=["future","current","past"];return e.jsx("div",{style:{display:"flex",gap:"32px",padding:"20px"},children:t.map(s=>e.jsx(a,{type:"warning",step:s,size:"default",state:"disabled"},s))})},parameters:{controls:{disable:!0}}},x={render:()=>{const t=["warning","error","complete","locked","comments","notification","note","edit"],s=["current","future","past"];return e.jsx("div",{style:{padding:"20px"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:`100px repeat(${s.length}, 1fr)`,gap:"16px",alignItems:"start"},children:[e.jsx("div",{style:{fontWeight:600,fontSize:"12px",color:"#6d7280"},children:"Type"}),s.map(n=>e.jsx("div",{style:{fontWeight:600,fontSize:"12px",color:"#6d7280",textTransform:"capitalize",textAlign:"center"},children:n},n)),t.map(n=>e.jsxs(v.Fragment,{children:[e.jsx("div",{style:{fontSize:"13px",color:"#374151",textTransform:"capitalize",paddingTop:"8px"},children:n}),s.map(l=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(a,{type:n,step:l,size:"default",label:!1})},`${n}-${l}`))]},n))]})})},parameters:{controls:{disable:!0}}},b={render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(i,{size:"default",steps:[{type:"complete",step:"past",label:"Submitted"},{type:"complete",step:"past",label:"Reviewed"},{type:"warning",step:"current",label:"In Progress"},{type:"notification",step:"future",label:"Approval"},{type:"locked",step:"future",label:"Complete"}]})}),parameters:{controls:{disable:!0}}},h={render:()=>e.jsx("div",{style:{padding:"20px"},children:e.jsx(i,{size:"large",orientation:"vertical",steps:[{type:"complete",step:"past",label:"Requirements"},{type:"complete",step:"past",label:"Design"},{type:"edit",step:"current",label:"Development"},{type:"notification",step:"future",label:"Testing"},{type:"locked",step:"future",label:"Deployment"}]})}),parameters:{controls:{disable:!0}}};var j,w,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <BuildingBlocksDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var k,I,_;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(_=(I=u.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var D,C,B;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const types: StatusIconType[] = ['warning', 'error', 'complete', 'locked', 'comments', 'notification', 'note', 'edit'];
    return <div style={{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap',
      padding: '20px'
    }}>
        {types.map(type => <StatusIcon key={type} type={type} step="current" size="default" labelText={type} />)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(C=m.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var A,P,W;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const steps: StatusIconStep[] = ['future', 'current', 'past'];
    return <div style={{
      display: 'flex',
      gap: '32px',
      padding: '20px'
    }}>
        {steps.map(step => <StatusIcon key={step} type="warning" step={step} size="default" />)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(P=g.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var F,$,E;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const sizes: StatusIconSize[] = ['small', 'default', 'large'];
    return <div style={{
      display: 'flex',
      gap: '32px',
      alignItems: 'flex-end',
      padding: '20px'
    }}>
        {sizes.map(size => <StatusIcon key={size} type="complete" step="current" size={size} labelText={size} />)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=($=y.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var L,R,q;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const steps: StatusIconStep[] = ['future', 'current', 'past'];
    return <div style={{
      display: 'flex',
      gap: '32px',
      padding: '20px'
    }}>
        {steps.map(step => <StatusIcon key={step} type="warning" step={step} size="default" state="disabled" />)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(R=f.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var V,N,H;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const types: StatusIconType[] = ['warning', 'error', 'complete', 'locked', 'comments', 'notification', 'note', 'edit'];
    const steps: StatusIconStep[] = ['current', 'future', 'past'];
    return <div style={{
      padding: '20px'
    }}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: \`100px repeat(\${steps.length}, 1fr)\`,
        gap: '16px',
        alignItems: 'start'
      }}>
          <div style={{
          fontWeight: 600,
          fontSize: '12px',
          color: '#6d7280'
        }}>Type</div>
          {steps.map(s => <div key={s} style={{
          fontWeight: 600,
          fontSize: '12px',
          color: '#6d7280',
          textTransform: 'capitalize',
          textAlign: 'center'
        }}>
              {s}
            </div>)}
          {types.map(type => <React.Fragment key={type}>
              <div style={{
            fontSize: '13px',
            color: '#374151',
            textTransform: 'capitalize',
            paddingTop: '8px'
          }}>
                {type}
              </div>
              {steps.map(step => <div key={\`\${type}-\${step}\`} style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
                  <StatusIcon type={type} step={step} size="default" label={false} />
                </div>)}
            </React.Fragment>)}
        </div>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(H=(N=x.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var M,U,O;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px'
  }}>
      <Stepper size="default" steps={[{
      type: 'complete',
      step: 'past',
      label: 'Submitted'
    }, {
      type: 'complete',
      step: 'past',
      label: 'Reviewed'
    }, {
      type: 'warning',
      step: 'current',
      label: 'In Progress'
    }, {
      type: 'notification',
      step: 'future',
      label: 'Approval'
    }, {
      type: 'locked',
      step: 'future',
      label: 'Complete'
    }]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(O=(U=b.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var Y,Z,G;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px'
  }}>
      <Stepper size="large" orientation="vertical" steps={[{
      type: 'complete',
      step: 'past',
      label: 'Requirements'
    }, {
      type: 'complete',
      step: 'past',
      label: 'Design'
    }, {
      type: 'edit',
      step: 'current',
      label: 'Development'
    }, {
      type: 'notification',
      step: 'future',
      label: 'Testing'
    }, {
      type: 'locked',
      step: 'future',
      label: 'Deployment'
    }]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};const oe=["Documentation","Default","AllTypes","AllSteps","Sizes","DisabledState","AllVariants","HorizontalStepper","VerticalStepper"];export{g as AllSteps,m as AllTypes,x as AllVariants,u as Default,f as DisabledState,d as Documentation,b as HorizontalStepper,y as Sizes,h as VerticalStepper,oe as __namedExportsOrder,ie as default};
