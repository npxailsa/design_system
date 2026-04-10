import{j as e}from"./iframe-D7K6PyuB.js";import{D as s}from"./DocsTemplate-CxMaWTiG.js";import"./preload-helper-Dp1pzeXC.js";const Z="_line_xsa1c_8",y={line:Z,"type-solid":"_type-solid_xsa1c_25","type-dashed":"_type-dashed_xsa1c_29","type-dotted":"_type-dotted_xsa1c_33","stroke-1-px":"_stroke-1-px_xsa1c_38","stroke-2-px":"_stroke-2-px_xsa1c_43","stroke-3-px":"_stroke-3-px_xsa1c_48","state-disabled":"_state-disabled_xsa1c_56","state-to-do":"_state-to-do_xsa1c_61","state-complete":"_state-complete_xsa1c_66"},t=({type:l="solid",stroke:a="2-px",state:c="disabled",className:r,ariaLabel:d})=>{const x=[y.line,y[`type-${l}`],y[`stroke-${a}`],y[`state-${c}`],r].filter(Boolean).join(" ");return e.jsx("div",{role:"presentation","aria-label":d,"aria-hidden":!d,className:x})};t.__docgenInfo={description:"",methods:[],displayName:"StepperLines",props:{type:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Visual style of the connector line.
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},stroke:{required:!1,tsType:{name:"union",raw:"'1-px' | '2-px' | '3-px'",elements:[{name:"literal",value:"'1-px'"},{name:"literal",value:"'2-px'"},{name:"literal",value:"'3-px'"}]},description:`Stroke thickness of the line.
@default '2-px'`,defaultValue:{value:"'2-px'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'to-do' | 'complete' | 'disabled'",elements:[{name:"literal",value:"'to-do'"},{name:"literal",value:"'complete'"},{name:"literal",value:"'disabled'"}]},description:`Semantic progress state — drives the line colour.
@default 'disabled'`,defaultValue:{value:"'disabled'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional extra CSS class for layout overrides."},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible description of this connector's purpose."}}};const o={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},i={display:"flex",alignItems:"center",width:"100%"},X=()=>e.jsxs(s,{children:[e.jsx(s.Header,{title:"StepperLines",subtitle:"A horizontal connector line used between step indicators in a stepper. Supports solid, dashed, and dotted line styles across to-do, complete, and disabled states in three stroke thicknesses."}),e.jsx(s.Section,{title:"Overview",children:e.jsx(s.BodyText,{children:"StepperLines render as a single styled horizontal line that bridges adjacent step nodes in a stepper layout. The line colour communicates the progress state of the segment it represents. Use it alongside StepperSteps to build a complete stepper pattern."})}),e.jsx(s.Section,{title:"Anatomy",children:e.jsx(s.Anatomy,{preview:e.jsxs("div",{style:{...o,flexDirection:"row",gap:"var(--global-spacing-sizing-24px)"},children:[e.jsx("div",{style:{...i,flex:1},children:e.jsx(t,{type:"solid",state:"complete",stroke:"2-px"})}),e.jsx("div",{style:{...i,flex:1},children:e.jsx(t,{type:"dashed",state:"to-do",stroke:"2-px"})}),e.jsx("div",{style:{...i,flex:1},children:e.jsx(t,{type:"dotted",state:"disabled",stroke:"2-px"})})]}),parts:[{id:1,name:"Line",token:"--stepper-lines-stroke-2px",description:"A zero-height div whose top border forms the visible connector line."},{id:2,name:"Type",token:"border-top-style: solid | dashed | dotted",description:"Controls the visual pattern of the line — continuous, segmented, or dotted."},{id:3,name:"State colour",token:"--stepper-lines-color-disabled / -todo / -complete",description:"Communicates the progress state of the segment between two steps."}]})}),e.jsxs(s.Section,{title:"Types",children:[e.jsxs(s.Subsection,{title:"Solid",children:[e.jsx(s.BodyText,{children:"A continuous line. Use as the default connector style for its visual clarity."}),e.jsx("div",{style:o,children:["to-do","complete","disabled"].map(l=>e.jsx("div",{style:i,children:e.jsx(t,{type:"solid",state:l,stroke:"2-px"})},l))})]}),e.jsxs(s.Subsection,{title:"Dashed",children:[e.jsx(s.BodyText,{children:"A dashed line. Use to indicate segments with a distinct visual treatment."}),e.jsx("div",{style:o,children:["to-do","complete","disabled"].map(l=>e.jsx("div",{style:i,children:e.jsx(t,{type:"dashed",state:l,stroke:"2-px"})},l))})]}),e.jsxs(s.Subsection,{title:"Dotted",children:[e.jsx(s.BodyText,{children:"A dotted line. Use for a lighter, more subtle connector style."}),e.jsx("div",{style:o,children:["to-do","complete","disabled"].map(l=>e.jsx("div",{style:i,children:e.jsx(t,{type:"dotted",state:l,stroke:"2-px"})},l))})]})]}),e.jsx(s.Section,{title:"States",children:e.jsx(s.SizeDemo,{rows:[{label:"Disabled",children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"solid",state:"disabled"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(t,{type:"dashed",state:"disabled"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(t,{type:"dotted",state:"disabled"})]})},{label:"To-do",children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"solid",state:"to-do"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(t,{type:"dashed",state:"to-do"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(t,{type:"dotted",state:"to-do"})]})},{label:"Complete",children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"solid",state:"complete"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(t,{type:"dashed",state:"complete"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(t,{type:"dotted",state:"complete"})]})}]})}),e.jsx(s.Section,{title:"Stroke Thicknesses",children:e.jsx(s.SizeDemo,{rows:[{label:"1px",children:e.jsx("div",{style:i,children:e.jsx(t,{type:"solid",state:"to-do",stroke:"1-px"})})},{label:"2px (default)",children:e.jsx("div",{style:i,children:e.jsx(t,{type:"solid",state:"to-do",stroke:"2-px"})})},{label:"3px",children:e.jsx("div",{style:i,children:e.jsx(t,{type:"solid",state:"to-do",stroke:"3-px"})})}]})}),e.jsx(s.Section,{title:"Design Tokens",children:e.jsx(s.TokenTable,{tokens:[{name:"--stepper-lines-color-disabled",description:"Line colour — disabled state → var(--global-color-neutral-gray-300) = #d2d5da"},{name:"--stepper-lines-color-todo",description:"Line colour — to-do state → var(--global-color-neutral-gray-700) = #374151"},{name:"--stepper-lines-color-complete",description:"Line colour — complete state → var(--brand-primary) = #3776ce"},{name:"--stepper-lines-stroke-1px",description:"Stroke thickness — 1px → var(--global-spacing-stroke-1px)"},{name:"--stepper-lines-stroke-2px",description:"Stroke thickness — 2px (default) → var(--global-spacing-stroke-2px)"},{name:"--stepper-lines-stroke-3px",description:"Stroke thickness — 3px → var(--global-spacing-stroke-3px)"}]})}),e.jsx(s.Section,{title:"Usage Principles",children:e.jsxs(s.Principles,{children:[e.jsx(s.PrincipleCard,{number:1,title:"Match line state to flow progress",children:'A connector between completed steps should use "complete". A connector between upcoming steps should use "to-do". A connector in a disabled or unavailable flow section should use "disabled".'}),e.jsx(s.PrincipleCard,{number:2,title:"Keep type consistent within a strip",children:"Don't mix solid, dashed, and dotted connectors within a single stepper unless each type carries a deliberate, documented meaning."}),e.jsx(s.PrincipleCard,{number:3,title:"Let lines flex to fill available space",children:"StepperLines use flex: 1 to grow and fill the space between step nodes, keeping the stepper strip symmetrical inside its container."})]})}),e.jsx(s.Section,{title:"Dos and Don'ts",children:e.jsx(s.DosDonts,{doItem:{icon:e.jsxs("div",{style:{...o,flexDirection:"row",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("div",{style:{flex:1},children:e.jsx(t,{type:"solid",state:"complete"})}),e.jsx("div",{style:{flex:1},children:e.jsx(t,{type:"solid",state:"to-do"})}),e.jsx("div",{style:{flex:1},children:e.jsx(t,{type:"solid",state:"disabled"})})]}),description:"Use the same line type throughout a strip and vary only the state colour."},dontItem:{icon:e.jsxs("div",{style:{...o,flexDirection:"row",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("div",{style:{flex:1},children:e.jsx(t,{type:"solid",state:"complete"})}),e.jsx("div",{style:{flex:1},children:e.jsx(t,{type:"dashed",state:"to-do"})}),e.jsx("div",{style:{flex:1},children:e.jsx(t,{type:"dotted",state:"disabled"})})]}),description:"Don't mix line types in a single stepper — it creates visual noise without meaning."}})}),e.jsx(s.Footer,{})]});X.__docgenInfo={description:"",methods:[],displayName:"StepperLinesDocs"};const S=["solid","dashed","dotted"],p=["1-px","2-px","3-px"],T=["disabled","to-do","complete"],D={fontSize:10,fontWeight:600,color:"var(--global-color-secondary-blue-gray)",textTransform:"uppercase",letterSpacing:"0.08em",whiteSpace:"nowrap"},n={fontSize:12,fontWeight:700,color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize",marginBottom:4},L={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:6,overflow:"hidden"},_={background:"var(--global-color-neutral-gray-100)",padding:"6px 12px",fontSize:10,fontWeight:700,color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.07em",textAlign:"center",borderBottom:"1px solid var(--global-color-neutral-gray-200)",borderLeft:"1px solid var(--global-color-neutral-gray-200)",display:"flex",alignItems:"center",justifyContent:"center"},k=({type:l})=>{const a={"1-px":100,"2-px":200,"3-px":300},c=`80px ${p.map(r=>`${a[r]}px`).join(" ")}`;return e.jsxs("div",{style:L,children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:c},children:[e.jsx("div",{style:{..._,borderLeft:"none",background:"var(--global-color-neutral-gray-100)"}}),p.map(r=>e.jsx("div",{style:_,children:r},r))]}),T.map((r,d)=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:c,borderTop:d>0?"1px solid var(--global-color-neutral-gray-200)":void 0,background:d%2===0?"var(--global-color-base-white)":"var(--global-color-neutral-gray-50)"},children:[e.jsx("div",{style:{padding:"16px 12px",display:"flex",alignItems:"center",...D},children:r}),p.map(x=>e.jsx("div",{style:{borderLeft:"1px solid var(--global-color-neutral-gray-200)",padding:"16px 12px",display:"flex",alignItems:"center"},children:e.jsx(t,{type:l,state:r,stroke:x})},x))]},r))]})},le={title:"Foundation/BuildingBlocks/StepperLines",component:t,parameters:{layout:"padded"},argTypes:{type:{control:"select",options:S,description:"Visual style of the connector line"},stroke:{control:"select",options:p,description:"Stroke thickness of the line"},state:{control:"select",options:T,description:"Progress state — controls line colour"},className:{control:!1},ariaLabel:{control:"text"}},args:{type:"solid",stroke:"2-px",state:"to-do"}},m={name:"Documentation",render:()=>e.jsx(X,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},g={name:"Playground",render:l=>e.jsx("div",{style:{display:"flex",alignItems:"center",padding:24,background:"var(--global-color-neutral-gray-50)",borderRadius:6,minWidth:300},children:e.jsx(t,{...l})})},u={name:"Type / Solid",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:n,children:"Solid"}),e.jsx(k,{type:"solid"})]})},h={name:"Type / Dashed",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:n,children:"Dashed"}),e.jsx(k,{type:"dashed"})]})},v={name:"Type / Dotted",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:n,children:"Dotted"}),e.jsx(k,{type:"dotted"})]})},f={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:T.map(l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsxs("div",{style:n,children:["State: ",l]}),e.jsx("div",{style:{...L,display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"16px 12px",alignItems:"center"},children:S.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,flex:1},children:[e.jsx("span",{style:D,children:a}),e.jsx(t,{type:a,state:l,stroke:"2-px"})]},a))})]},l))})},b={name:"Strokes",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:p.map(l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsxs("div",{style:n,children:["Stroke: ",l]}),e.jsx("div",{style:{...L,display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"16px 12px",alignItems:"center"},children:S.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,flex:1},children:[e.jsx("span",{style:D,children:a}),e.jsx(t,{type:a,state:"to-do",stroke:l})]},a))})]},l))})},j={name:"Full Design Matrix",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:S.map(l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("div",{style:n,children:l}),e.jsx(k,{type:l})]},l))})};var w,E,A;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(A=(E=m.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var z,P,I;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=(P=g.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var C,Y,B;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var R,M,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(M=h.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var U,W,q;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=(W=v.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var N,O,V;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(O=f.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var $,K,H;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(H=(K=b.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var G,J,Q;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const ie=["Documentation","Playground","TypeSolid","TypeDashed","TypeDotted","States","Strokes","FullDesignMatrix"];export{m as Documentation,j as FullDesignMatrix,g as Playground,f as States,b as Strokes,h as TypeDashed,v as TypeDotted,u as TypeSolid,ie as __namedExportsOrder,le as default};
