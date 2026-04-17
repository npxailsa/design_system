import{j as e}from"./iframe-CVrhevKq.js";import{S as s}from"./StepperLines-ZoumyHOy.js";import{D as r}from"./DocsTemplate-CH9shMJB.js";import"./preload-helper-Dp1pzeXC.js";const n={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},l={display:"flex",alignItems:"center",width:"100%"},de=()=>e.jsxs(r,{children:[e.jsx(r.Header,{title:"StepperLines",subtitle:"A horizontal connector line used between step indicators in a stepper. Supports solid, dashed, and dotted line styles across to-do, complete, and disabled states in three stroke thicknesses."}),e.jsxs(r.Section,{title:"MUI Foundation",children:[e.jsxs(r.BodyText,{children:["StepperLines is a ",e.jsx("strong",{children:"pure React component"})," with no MUI dependency. Each line renders as a plain ",e.jsx("code",{children:"<div>"})," — all line style (solid, dashed, dotted), stroke thickness, and state colour are applied via CSS Modules and the"," ",e.jsx("code",{children:"--stepper-lines-*"})," token family. No MUI component is needed for a static visual connector element. StepperLines is used alongside StepperSteps (also pure React) to compose the full Stepper pattern."]}),e.jsx(r.CodeBlock,{children:`// No MUI base import required
// StepperLines renders as:
<div
  className={styles['stepper-line']}
  data-type={type}
  data-state={state}
  data-stroke={stroke}
/>`})]}),e.jsx(r.Section,{title:"Overview",children:e.jsx(r.BodyText,{children:"StepperLines render as a single styled horizontal line that bridges adjacent step nodes in a stepper layout. The line colour communicates the progress state of the segment it represents. Use it alongside StepperSteps to build a complete stepper pattern."})}),e.jsx(r.Section,{title:"Anatomy",children:e.jsx(r.Anatomy,{preview:e.jsxs("div",{style:{...n,flexDirection:"row",gap:"var(--global-spacing-sizing-24px)"},children:[e.jsx("div",{style:{...l,flex:1},children:e.jsx(s,{type:"solid",state:"complete",stroke:"2-px"})}),e.jsx("div",{style:{...l,flex:1},children:e.jsx(s,{type:"dashed",state:"to-do",stroke:"2-px"})}),e.jsx("div",{style:{...l,flex:1},children:e.jsx(s,{type:"dotted",state:"disabled",stroke:"2-px"})})]}),parts:[{id:1,name:"Line",token:"--stepper-lines-stroke-2px",description:"A zero-height div whose top border forms the visible connector line."},{id:2,name:"Type",token:"border-top-style: solid | dashed | dotted",description:"Controls the visual pattern of the line — continuous, segmented, or dotted."},{id:3,name:"State colour",token:"--stepper-lines-color-disabled / -todo / -complete",description:"Communicates the progress state of the segment between two steps."}]})}),e.jsxs(r.Section,{title:"Types",children:[e.jsxs(r.Subsection,{title:"Solid",children:[e.jsx(r.BodyText,{children:"A continuous line. Use as the default connector style for its visual clarity."}),e.jsx("div",{style:n,children:["to-do","complete","disabled"].map(t=>e.jsx("div",{style:l,children:e.jsx(s,{type:"solid",state:t,stroke:"2-px"})},t))})]}),e.jsxs(r.Subsection,{title:"Dashed",children:[e.jsx(r.BodyText,{children:"A dashed line. Use to indicate segments with a distinct visual treatment."}),e.jsx("div",{style:n,children:["to-do","complete","disabled"].map(t=>e.jsx("div",{style:l,children:e.jsx(s,{type:"dashed",state:t,stroke:"2-px"})},t))})]}),e.jsxs(r.Subsection,{title:"Dotted",children:[e.jsx(r.BodyText,{children:"A dotted line. Use for a lighter, more subtle connector style."}),e.jsx("div",{style:n,children:["to-do","complete","disabled"].map(t=>e.jsx("div",{style:l,children:e.jsx(s,{type:"dotted",state:t,stroke:"2-px"})},t))})]})]}),e.jsx(r.Section,{title:"States",children:e.jsx(r.SizeDemo,{rows:[{label:"Disabled",children:e.jsxs("div",{style:l,children:[e.jsx(s,{type:"solid",state:"disabled"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(s,{type:"dashed",state:"disabled"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(s,{type:"dotted",state:"disabled"})]})},{label:"To-do",children:e.jsxs("div",{style:l,children:[e.jsx(s,{type:"solid",state:"to-do"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(s,{type:"dashed",state:"to-do"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(s,{type:"dotted",state:"to-do"})]})},{label:"Complete",children:e.jsxs("div",{style:l,children:[e.jsx(s,{type:"solid",state:"complete"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(s,{type:"dashed",state:"complete"}),e.jsx("span",{style:{width:"var(--global-spacing-sizing-16px)",flexShrink:0}}),e.jsx(s,{type:"dotted",state:"complete"})]})}]})}),e.jsx(r.Section,{title:"Stroke Thicknesses",children:e.jsx(r.SizeDemo,{rows:[{label:"1px",children:e.jsx("div",{style:l,children:e.jsx(s,{type:"solid",state:"to-do",stroke:"1-px"})})},{label:"2px (default)",children:e.jsx("div",{style:l,children:e.jsx(s,{type:"solid",state:"to-do",stroke:"2-px"})})},{label:"3px",children:e.jsx("div",{style:l,children:e.jsx(s,{type:"solid",state:"to-do",stroke:"3-px"})})}]})}),e.jsx(r.Section,{title:"Design Tokens",children:e.jsx(r.TokenTable,{tokens:[{name:"--stepper-lines-color-disabled",description:"Line colour — disabled state → var(--global-color-neutral-gray-300) = #d2d5da"},{name:"--stepper-lines-color-todo",description:"Line colour — to-do state → var(--global-color-neutral-gray-700) = #374151"},{name:"--stepper-lines-color-complete",description:"Line colour — complete state → var(--brand-primary) = #3776ce"},{name:"--stepper-lines-stroke-1px",description:"Stroke thickness — 1px → var(--global-spacing-stroke-1px)"},{name:"--stepper-lines-stroke-2px",description:"Stroke thickness — 2px (default) → var(--global-spacing-stroke-2px)"},{name:"--stepper-lines-stroke-3px",description:"Stroke thickness — 3px → var(--global-spacing-stroke-3px)"}]})}),e.jsx(r.Section,{title:"Usage Principles",children:e.jsxs(r.Principles,{children:[e.jsx(r.PrincipleCard,{number:1,title:"Match line state to flow progress",children:'A connector between completed steps should use "complete". A connector between upcoming steps should use "to-do". A connector in a disabled or unavailable flow section should use "disabled".'}),e.jsx(r.PrincipleCard,{number:2,title:"Keep type consistent within a strip",children:"Don't mix solid, dashed, and dotted connectors within a single stepper unless each type carries a deliberate, documented meaning."}),e.jsx(r.PrincipleCard,{number:3,title:"Let lines flex to fill available space",children:"StepperLines use flex: 1 to grow and fill the space between step nodes, keeping the stepper strip symmetrical inside its container."})]})}),e.jsx(r.Section,{title:"Dos and Don'ts",children:e.jsx(r.DosDonts,{doItem:{icon:e.jsxs("div",{style:{...n,flexDirection:"row",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("div",{style:{flex:1},children:e.jsx(s,{type:"solid",state:"complete"})}),e.jsx("div",{style:{flex:1},children:e.jsx(s,{type:"solid",state:"to-do"})}),e.jsx("div",{style:{flex:1},children:e.jsx(s,{type:"solid",state:"disabled"})})]}),description:"Use the same line type throughout a strip and vary only the state colour."},dontItem:{icon:e.jsxs("div",{style:{...n,flexDirection:"row",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("div",{style:{flex:1},children:e.jsx(s,{type:"solid",state:"complete"})}),e.jsx("div",{style:{flex:1},children:e.jsx(s,{type:"dashed",state:"to-do"})}),e.jsx("div",{style:{flex:1},children:e.jsx(s,{type:"dotted",state:"disabled"})})]}),description:"Don't mix line types in a single stepper — it creates visual noise without meaning."}})}),e.jsx(r.Footer,{})]});de.__docgenInfo={description:"",methods:[],displayName:"StepperLinesDocs"};const p=["solid","dashed","dotted"],d=["1-px","2-px","3-px"],k=["disabled","to-do","complete"],c={fontSize:10,fontWeight:600,color:"var(--global-color-secondary-blue-gray)",textTransform:"uppercase",letterSpacing:"0.08em",whiteSpace:"nowrap"},o={fontSize:12,fontWeight:700,color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize",marginBottom:4},T={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:6,overflow:"hidden"},A={background:"var(--global-color-neutral-gray-100)",padding:"6px 12px",fontSize:10,fontWeight:700,color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.07em",textAlign:"center",borderBottom:"1px solid var(--global-color-neutral-gray-200)",borderLeft:"1px solid var(--global-color-neutral-gray-200)",display:"flex",alignItems:"center",justifyContent:"center"},L=({type:t})=>{const i={"1-px":100,"2-px":200,"3-px":300},D=`80px ${d.map(a=>`${i[a]}px`).join(" ")}`;return e.jsxs("div",{style:T,children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:D},children:[e.jsx("div",{style:{...A,borderLeft:"none",background:"var(--global-color-neutral-gray-100)"}}),d.map(a=>e.jsx("div",{style:A,children:a},a))]}),k.map((a,w)=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:D,borderTop:w>0?"1px solid var(--global-color-neutral-gray-200)":void 0,background:w%2===0?"var(--global-color-base-white)":"var(--global-color-neutral-gray-50)"},children:[e.jsx("div",{style:{padding:"16px 12px",display:"flex",alignItems:"center",...c},children:a}),d.map(E=>e.jsx("div",{style:{borderLeft:"1px solid var(--global-color-neutral-gray-200)",padding:"16px 12px",display:"flex",alignItems:"center"},children:e.jsx(s,{type:t,state:a,stroke:E})},E))]},a))]})},me={title:"Foundation/BuildingBlocks/StepperLines",component:s,parameters:{layout:"padded"},argTypes:{type:{control:"select",options:p,description:"Visual style of the connector line"},stroke:{control:"select",options:d,description:"Stroke thickness of the line"},state:{control:"select",options:k,description:"Progress state — controls line colour"},className:{control:!1},ariaLabel:{control:"text"}},args:{type:"solid",stroke:"2-px",state:"to-do"}},x={name:"Documentation",render:()=>e.jsx(de,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},y={name:"Playground",render:t=>e.jsx("div",{style:{display:"flex",alignItems:"center",padding:24,background:"var(--global-color-neutral-gray-50)",borderRadius:6,minWidth:300},children:e.jsx(s,{...t})})},m={name:"Default"},g={name:"Status / Solid",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:o,children:"Solid"}),e.jsx(L,{type:"solid"})]})},u={name:"Status / Dashed",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:o,children:"Dashed"}),e.jsx(L,{type:"dashed"})]})},h={name:"Status / Dotted",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:o,children:"Dotted"}),e.jsx(L,{type:"dotted"})]})},v={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:k.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsxs("div",{style:o,children:["State: ",t]}),e.jsx("div",{style:{...T,display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"16px 12px",alignItems:"center"},children:p.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,flex:1},children:[e.jsx("span",{style:c,children:i}),e.jsx(s,{type:i,state:t,stroke:"2-px"})]},i))})]},t))})},j={name:"Strokes",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:d.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsxs("div",{style:o,children:["Stroke: ",t]}),e.jsx("div",{style:{...T,display:"flex",gap:"var(--global-spacing-sizing-16px)",padding:"16px 12px",alignItems:"center"},children:p.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,flex:1},children:[e.jsx("span",{style:c,children:i}),e.jsx(s,{type:i,state:"to-do",stroke:t})]},i))})]},t))})},f={name:"Component Breakdown",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:o,children:"Anatomy: type × stroke × state"}),e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-500)",marginTop:"8px"},children:"StepperLines are horizontal connectors. Props: type (solid | dashed | dotted), stroke (1–3 px), state (disabled | to-do | complete)."})]}),p.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("span",{style:{...c,width:"56px"},children:t}),e.jsx(s,{type:t,stroke:"2-px",state:"to-do"}),e.jsx(s,{type:t,stroke:"2-px",state:"complete"}),e.jsx(s,{type:t,stroke:"2-px",state:"disabled"})]},t))]})},b={name:"All Interactive States",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:k.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("span",{style:{...c,width:"72px"},children:t}),e.jsx(s,{type:"solid",stroke:"2-px",state:t}),e.jsx(s,{type:"dashed",stroke:"2-px",state:t}),e.jsx(s,{type:"dotted",stroke:"2-px",state:t})]},t))})},S={name:"Full Design Matrix",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:p.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("div",{style:o,children:t}),e.jsx(L,{type:t})]},t))})};var I,z,_;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(z=x.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var P,C,B;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(B=(C=y.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var Y,M,R;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Default'
}`,...(R=(M=m.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var U,F,W;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Status / Solid',
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
}`,...(W=(F=g.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var N,O,K;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Status / Dashed',
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
}`,...(K=(O=u.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var H,$,q;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Status / Dotted',
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
}`,...(q=($=h.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var V,G,J;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,se;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>
      <div>
        <div style={TYPE_TITLE}>Anatomy: type × stroke × state</div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        color: 'var(--global-color-neutral-gray-500)',
        marginTop: '8px'
      }}>
          StepperLines are horizontal connectors. Props: type (solid | dashed | dotted), stroke (1–3 px), state (disabled | to-do | complete).
        </p>
      </div>
      {ALL_TYPES.map(type => <div key={type} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <span style={{
        ...LABEL_STYLE,
        width: '56px'
      }}>{type}</span>
          <StepperLines type={type} stroke="2-px" state="to-do" />
          <StepperLines type={type} stroke="2-px" state="complete" />
          <StepperLines type={type} stroke="2-px" state="disabled" />
        </div>)}
    </div>
}`,...(se=(te=f.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,le,ie;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'All Interactive States',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>
      {ALL_STATES.map(state => <div key={state} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <span style={{
        ...LABEL_STYLE,
        width: '72px'
      }}>{state}</span>
          <StepperLines type="solid" stroke="2-px" state={state} />
          <StepperLines type="dashed" stroke="2-px" state={state} />
          <StepperLines type="dotted" stroke="2-px" state={state} />
        </div>)}
    </div>
}`,...(ie=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ae,oe,ne;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(ne=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};const ge=["Documentation","Playground","Default","TypeSolid","TypeDashed","TypeDotted","States","Strokes","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{b as AllInteractiveStates,f as ComponentBreakdown,m as Default,x as Documentation,S as FullDesignMatrix,y as Playground,v as States,j as Strokes,u as TypeDashed,h as TypeDotted,g as TypeSolid,ge as __namedExportsOrder,me as default};
