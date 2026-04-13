import{j as e}from"./iframe-CrrYeAlt.js";import{S as s}from"./StepperLines-CLstWeHb.js";import{D as t}from"./DocsTemplate-CKVnmNf1.js";import"./preload-helper-Dp1pzeXC.js";const a={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},i={display:"flex",alignItems:"center",width:"100%"},Q=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"StepperLines",subtitle:"A horizontal connector line used between step indicators in a stepper. Supports solid, dashed, and dotted line styles across to-do, complete, and disabled states in three stroke thicknesses."}),e.jsx(t.Section,{title:"Overview",children:e.jsx(t.BodyText,{children:"StepperLines render as a single styled horizontal line that bridges adjacent step nodes in a stepper layout. The line colour communicates the progress state of the segment it represents. Use it alongside StepperSteps to build a complete stepper pattern."})}),e.jsx(t.Section,{title:"Anatomy",children:e.jsx(t.Anatomy,{preview:e.jsxs("div",{style:{...a,flexDirection:"row",gap:"var(--global-spacing-sizing-24px)"},children:[e.jsx("div",{style:{...i,flex:1},children:e.jsx(s,{type:"solid",state:"complete",stroke:"2-px"})}),e.jsx("div",{style:{...i,flex:1},children:e.jsx(s,{type:"dashed",state:"to-do",stroke:"2-px"})}),e.jsx("div",{style:{...i,flex:1},children:e.jsx(s,{type:"dotted",state:"disabled",stroke:"2-px"})})]}),parts:[{id:1,name:"Line",token:"--stepper-lines-stroke-2px",description:"A zero-height div whose top border forms the visible connector line."},{id:2,name:"Type",token:"border-top-style: solid | dashed | dotted",description:"Controls the visual pattern of the line — continuous, segmented, or dotted."},{id:3,name:"State colour",token:"--stepper-lines-color-disabled / -todo / -complete",description:"Communicates the progress state of the segment between two steps."}]})}),e.jsxs(t.Section,{title:"Types",children:[e.jsxs(t.Subsection,{title:"Solid",children:[e.jsx(t.BodyText,{children:"A continuous line. Use as the default connector style for its visual clarity."}),e.jsx("div",{style:a,children:["to-do","complete","disabled"].map(l=>e.jsx("div",{style:i,children:e.jsx(s,{type:"solid",state:l,stroke:"2-px"})},l))})]}),e.jsxs(t.Subsection,{title:"Dashed",children:[e.jsx(t.BodyText,{children:"A dashed line. Use to indicate segments with a distinct visual treatment."}),e.jsx("div",{style:a,children:["to-do","complete","disabled"].map(l=>e.jsx("div",{style:i,children:e.jsx(s,{type:"dashed",state:l,stroke:"2-px"})},l))})]}),e.jsxs(t.Subsection,{title:"Dotted",children:[e.jsx(t.BodyText,{children:"A dotted line. Use for a lighter, more subtle connector style."}),e.jsx("div",{style:a,children:["to-do","complete","disabled"].map(l=>e.jsx("div",{style:i,children:e.jsx(s,{type:"dotted",state:l,stroke:"2-px"})},l))})]})]}),e.jsx(t.Section,{title:"States",children:e.jsx(t.SizeDemo,{rows:[{label:"Disabled",children:e.jsxs("div",{style:i,children:[e.jsx(s,{type:"solid",state:"disabled"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(s,{type:"dashed",state:"disabled"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(s,{type:"dotted",state:"disabled"})]})},{label:"To-do",children:e.jsxs("div",{style:i,children:[e.jsx(s,{type:"solid",state:"to-do"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(s,{type:"dashed",state:"to-do"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(s,{type:"dotted",state:"to-do"})]})},{label:"Complete",children:e.jsxs("div",{style:i,children:[e.jsx(s,{type:"solid",state:"complete"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(s,{type:"dashed",state:"complete"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(s,{type:"dotted",state:"complete"})]})}]})}),e.jsx(t.Section,{title:"Stroke Thicknesses",children:e.jsx(t.SizeDemo,{rows:[{label:"1px",children:e.jsx("div",{style:i,children:e.jsx(s,{type:"solid",state:"to-do",stroke:"1-px"})})},{label:"2px (default)",children:e.jsx("div",{style:i,children:e.jsx(s,{type:"solid",state:"to-do",stroke:"2-px"})})},{label:"3px",children:e.jsx("div",{style:i,children:e.jsx(s,{type:"solid",state:"to-do",stroke:"3-px"})})}]})}),e.jsx(t.Section,{title:"Design Tokens",children:e.jsx(t.TokenTable,{tokens:[{name:"--stepper-lines-color-disabled",description:"Line colour — disabled state → var(--global-color-neutral-gray-300) = #d2d5da"},{name:"--stepper-lines-color-todo",description:"Line colour — to-do state → var(--global-color-neutral-gray-700) = #374151"},{name:"--stepper-lines-color-complete",description:"Line colour — complete state → var(--brand-primary) = #3776ce"},{name:"--stepper-lines-stroke-1px",description:"Stroke thickness — 1px → var(--global-spacing-stroke-1px)"},{name:"--stepper-lines-stroke-2px",description:"Stroke thickness — 2px (default) → var(--global-spacing-stroke-2px)"},{name:"--stepper-lines-stroke-3px",description:"Stroke thickness — 3px → var(--global-spacing-stroke-3px)"}]})}),e.jsx(t.Section,{title:"Usage Principles",children:e.jsxs(t.Principles,{children:[e.jsx(t.PrincipleCard,{number:1,title:"Match line state to flow progress",children:'A connector between completed steps should use "complete". A connector between upcoming steps should use "to-do". A connector in a disabled or unavailable flow section should use "disabled".'}),e.jsx(t.PrincipleCard,{number:2,title:"Keep type consistent within a strip",children:"Don't mix solid, dashed, and dotted connectors within a single stepper unless each type carries a deliberate, documented meaning."}),e.jsx(t.PrincipleCard,{number:3,title:"Let lines flex to fill available space",children:"StepperLines use flex: 1 to grow and fill the space between step nodes, keeping the stepper strip symmetrical inside its container."})]})}),e.jsx(t.Section,{title:"Dos and Don'ts",children:e.jsx(t.DosDonts,{doItem:{icon:e.jsxs("div",{style:{...a,flexDirection:"row",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("div",{style:{flex:1},children:e.jsx(s,{type:"solid",state:"complete"})}),e.jsx("div",{style:{flex:1},children:e.jsx(s,{type:"solid",state:"to-do"})}),e.jsx("div",{style:{flex:1},children:e.jsx(s,{type:"solid",state:"disabled"})})]}),description:"Use the same line type throughout a strip and vary only the state colour."},dontItem:{icon:e.jsxs("div",{style:{...a,flexDirection:"row",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("div",{style:{flex:1},children:e.jsx(s,{type:"solid",state:"complete"})}),e.jsx("div",{style:{flex:1},children:e.jsx(s,{type:"dashed",state:"to-do"})}),e.jsx("div",{style:{flex:1},children:e.jsx(s,{type:"dotted",state:"disabled"})})]}),description:"Don't mix line types in a single stepper — it creates visual noise without meaning."}})}),e.jsx(t.Footer,{})]});Q.__docgenInfo={description:"",methods:[],displayName:"StepperLinesDocs"};const v=["solid","dashed","dotted"],d=["1-px","2-px","3-px"],b=["disabled","to-do","complete"],f={fontSize:10,fontWeight:600,color:"var(--global-color-secondary-blue-gray)",textTransform:"uppercase",letterSpacing:"0.08em",whiteSpace:"nowrap"},n={fontSize:12,fontWeight:700,color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize",marginBottom:4},S={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:6,overflow:"hidden"},L={background:"var(--global-color-neutral-gray-100)",padding:"6px 12px",fontSize:10,fontWeight:700,color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.07em",textAlign:"center",borderBottom:"1px solid var(--global-color-neutral-gray-200)",borderLeft:"1px solid var(--global-color-neutral-gray-200)",display:"flex",alignItems:"center",justifyContent:"center"},j=({type:l})=>{const r={"1-px":100,"2-px":200,"3-px":300},T=`80px ${d.map(o=>`${r[o]}px`).join(" ")}`;return e.jsxs("div",{style:S,children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:T},children:[e.jsx("div",{style:{...L,borderLeft:"none",background:"var(--global-color-neutral-gray-100)"}}),d.map(o=>e.jsx("div",{style:L,children:o},o))]}),b.map((o,D)=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:T,borderTop:D>0?"1px solid var(--global-color-neutral-gray-200)":void 0,background:D%2===0?"var(--global-color-base-white)":"var(--global-color-neutral-gray-50)"},children:[e.jsx("div",{style:{padding:"16px 12px",display:"flex",alignItems:"center",...f},children:o}),d.map(k=>e.jsx("div",{style:{borderLeft:"1px solid var(--global-color-neutral-gray-200)",padding:"16px 12px",display:"flex",alignItems:"center"},children:e.jsx(s,{type:l,state:o,stroke:k})},k))]},o))]})},te={title:"Foundation/BuildingBlocks/StepperLines",component:s,parameters:{layout:"padded"},argTypes:{type:{control:"select",options:v,description:"Visual style of the connector line"},stroke:{control:"select",options:d,description:"Stroke thickness of the line"},state:{control:"select",options:b,description:"Progress state — controls line colour"},className:{control:!1},ariaLabel:{control:"text"}},args:{type:"solid",stroke:"2-px",state:"to-do"}},p={name:"Documentation",render:()=>e.jsx(Q,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},c={name:"Playground",render:l=>e.jsx("div",{style:{display:"flex",alignItems:"center",padding:24,background:"var(--global-color-neutral-gray-50)",borderRadius:6,minWidth:300},children:e.jsx(s,{...l})})},x={name:"Type / Solid",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:n,children:"Solid"}),e.jsx(j,{type:"solid"})]})},y={name:"Type / Dashed",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:n,children:"Dashed"}),e.jsx(j,{type:"dashed"})]})},m={name:"Type / Dotted",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:n,children:"Dotted"}),e.jsx(j,{type:"dotted"})]})},g={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:b.map(l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsxs("div",{style:n,children:["State: ",l]}),e.jsx("div",{style:{...S,display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"16px 12px",alignItems:"center"},children:v.map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,flex:1},children:[e.jsx("span",{style:f,children:r}),e.jsx(s,{type:r,state:l,stroke:"2-px"})]},r))})]},l))})},u={name:"Strokes",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:d.map(l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsxs("div",{style:n,children:["Stroke: ",l]}),e.jsx("div",{style:{...S,display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"16px 12px",alignItems:"center"},children:v.map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,flex:1},children:[e.jsx("span",{style:f,children:r}),e.jsx(s,{type:r,state:"to-do",stroke:l})]},r))})]},l))})},h={name:"Full Design Matrix",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:v.map(l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("div",{style:n,children:l}),e.jsx(j,{type:l})]},l))})};var w,E,A;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <StepperLinesDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen'
  }
}`,...(A=(E=p.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var z,_,P;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    padding: 24,
    background: 'var(--global-color-neutral-gray-50)',
    borderRadius: 6,
    minWidth: 300
  }}>
      <StepperLines {...args} />
    </div>
}`,...(P=(_=c.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var I,C,Y;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Type / Solid',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <div style={TYPE_TITLE}>Solid</div>
      <TypeMatrix type="solid" />
    </div>
}`,...(Y=(C=x.parameters)==null?void 0:C.docs)==null?void 0:Y.source}}};var B,R,M;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Type / Dashed',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <div style={TYPE_TITLE}>Dashed</div>
      <TypeMatrix type="dashed" />
    </div>
}`,...(M=(R=y.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var F,U,W;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Type / Dotted',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <div style={TYPE_TITLE}>Dotted</div>
      <TypeMatrix type="dotted" />
    </div>
}`,...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var O,K,H;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'States',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {ALL_STATES.map(state => <div key={state} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }}>
          <div style={TYPE_TITLE}>State: {state}</div>
          <div style={{
        ...CARD,
        display: 'flex',
        gap: 'var(--global-spacing-sizing-16px)',
        padding: '16px 12px',
        alignItems: 'center'
      }}>
            {ALL_TYPES.map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          flex: 1
        }}>
                <span style={LABEL_STYLE}>{type}</span>
                <StepperLines type={type} state={state} stroke="2-px" />
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(H=(K=g.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var N,$,V;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Strokes',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {ALL_STROKES.map(stroke => <div key={stroke} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }}>
          <div style={TYPE_TITLE}>Stroke: {stroke}</div>
          <div style={{
        ...CARD,
        display: 'flex',
        gap: 'var(--global-spacing-sizing-16px)',
        padding: '16px 12px',
        alignItems: 'center'
      }}>
            {ALL_TYPES.map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          flex: 1
        }}>
                <span style={LABEL_STYLE}>{type}</span>
                <StepperLines type={type} state="to-do" stroke={stroke} />
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(V=($=u.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var q,G,J;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {ALL_TYPES.map(type => <div key={type} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }}>
          <div style={TYPE_TITLE}>{type}</div>
          <TypeMatrix type={type} />
        </div>)}
    </div>
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const le=["Documentation","Playground","TypeSolid","TypeDashed","TypeDotted","States","Strokes","FullDesignMatrix"];export{p as Documentation,h as FullDesignMatrix,c as Playground,g as States,u as Strokes,y as TypeDashed,m as TypeDotted,x as TypeSolid,le as __namedExportsOrder,te as default};
