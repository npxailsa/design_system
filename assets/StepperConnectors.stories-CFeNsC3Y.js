import{j as e,R as ie}from"./iframe-QuElcQ4p.js";import{D as l}from"./DocsTemplate-nnUP51y_.js";import"./preload-helper-Dp1pzeXC.js";const le="_connector_1tbqm_6",x={connector:le,"connector--horizontal":"_connector--horizontal_1tbqm_13","connector--size-small":"_connector--size-small_1tbqm_20","connector--size-large":"_connector--size-large_1tbqm_24","connector--vertical":"_connector--vertical_1tbqm_29","connector--solid":"_connector--solid_1tbqm_44","connector--dashed":"_connector--dashed_1tbqm_67","connector--dotted":"_connector--dotted_1tbqm_90","connector--state-default":"_connector--state-default_1tbqm_113","connector--state-complete":"_connector--state-complete_1tbqm_117","connector--state-disabled":"_connector--state-disabled_1tbqm_121"},t=({type:s="solid",state:i="default",size:o="default",orientation:p="horizontal",className:te,ariaLabel:T})=>{const se=[x.connector,x[`connector--${p}`],x[`connector--${s}`],x[`connector--size-${o}`],x[`connector--state-${i}`],te].filter(Boolean).join(" ");return e.jsx("span",{role:"presentation","aria-label":T,"aria-hidden":!T,className:se})};t.__docgenInfo={description:"",methods:[],displayName:"StepperConnectors",props:{type:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Visual style of the line.
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'complete' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'complete'"},{name:"literal",value:"'disabled'"}]},description:`Semantic state — controls the line colour.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Thickness of the line.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Whether the connector runs horizontally (between steps in a row)
or vertically (between steps in a column).
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional extra CSS class for layout overrides"},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const z={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},n={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},ee=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"StepperConnectors",subtitle:"A thin line segment that visually connects two adjacent step indicators in a stepper. Supports solid, dashed, and dotted line styles across default, active, complete, and disabled states."}),e.jsx(l.Section,{title:"Overview",children:e.jsx(l.BodyText,{children:"StepperConnectors render as a single styled line — horizontal or vertical — that bridges adjacent StepperSteps circles. The line colour communicates the progress state of the flow segment it represents. Use it together with StepperSteps to build a complete stepper pattern."})}),e.jsx(l.Section,{title:"Anatomy",children:e.jsx(l.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:16,background:"var(--global-color-neutral-gray-50)",borderRadius:8},children:[e.jsx(t,{type:"solid",state:"complete",size:"default"}),e.jsx(t,{type:"dashed",state:"default",size:"default"}),e.jsx(t,{type:"dotted",state:"disabled",size:"default"})]}),parts:[{id:1,name:"Line",token:"--stepper-connector-thickness-default",description:"A single CSS border applied to a zero-height (or zero-width for vertical) element."},{id:2,name:"Line style",token:"border-style: solid | dashed | dotted",description:"Solid = continuous line; dashed = equal-length segments; dotted = round dots."},{id:3,name:"State colour",token:"--stepper-connector-color-default / complete / disabled",description:"Communicates the progress state of the segment between two steps."}]})}),e.jsxs(l.Section,{title:"Types",children:[e.jsxs(l.Subsection,{title:"Solid",children:[e.jsx(l.BodyText,{children:"A continuous solid line. Use for the primary connector style — the most visually clear."}),e.jsx("div",{style:z,children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"default"}),e.jsx(t,{type:"solid",state:"complete"}),e.jsx(t,{type:"solid",state:"disabled"})]})})]}),e.jsxs(l.Subsection,{title:"Dashed",children:[e.jsx(l.BodyText,{children:"A dashed line. Use to indicate an upcoming or incomplete segment."}),e.jsx("div",{style:z,children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"dashed",state:"default"}),e.jsx(t,{type:"dashed",state:"complete"}),e.jsx(t,{type:"dashed",state:"disabled"})]})})]}),e.jsxs(l.Subsection,{title:"Dotted",children:[e.jsx(l.BodyText,{children:"A dotted line. Use for a lighter, more subtle connector."}),e.jsx("div",{style:z,children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"dotted",state:"default"}),e.jsx(t,{type:"dotted",state:"complete"}),e.jsx(t,{type:"dotted",state:"disabled"})]})})]})]}),e.jsx(l.Section,{title:"States",children:e.jsx(l.SizeDemo,{rows:[{label:"Default",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"default"}),e.jsx(t,{type:"dashed",state:"default"}),e.jsx(t,{type:"dotted",state:"default"})]})},{label:"Complete",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"complete"}),e.jsx(t,{type:"dashed",state:"complete"}),e.jsx(t,{type:"dotted",state:"complete"})]})},{label:"Disabled",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"disabled"}),e.jsx(t,{type:"dashed",state:"disabled"}),e.jsx(t,{type:"dotted",state:"disabled"})]})}]})}),e.jsx(l.Section,{title:"Sizes",children:e.jsx(l.SizeDemo,{rows:[{label:"Small (1px)",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"default",size:"small"}),e.jsx(t,{type:"dashed",state:"complete",size:"small"}),e.jsx(t,{type:"dotted",state:"disabled",size:"small"})]})},{label:"Default (2px)",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"default",size:"default"}),e.jsx(t,{type:"dashed",state:"complete",size:"default"}),e.jsx(t,{type:"dotted",state:"disabled",size:"default"})]})},{label:"Large (4px)",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"default",size:"large"}),e.jsx(t,{type:"dashed",state:"complete",size:"large"}),e.jsx(t,{type:"dotted",state:"disabled",size:"large"})]})}]})}),e.jsxs(l.Section,{title:"Orientation",children:[e.jsx(l.Subsection,{title:"Horizontal",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"complete",orientation:"horizontal"}),e.jsx(t,{type:"dashed",state:"default",orientation:"horizontal"}),e.jsx(t,{type:"dotted",state:"disabled",orientation:"horizontal"})]})}),e.jsxs(l.Subsection,{title:"Vertical",children:[e.jsx(l.BodyText,{children:"Use for vertical steppers where steps are stacked top-to-bottom."}),e.jsxs("div",{style:{display:"flex",gap:32,padding:16},children:[e.jsx(t,{type:"solid",state:"complete",orientation:"vertical"}),e.jsx(t,{type:"dashed",state:"default",orientation:"vertical"}),e.jsx(t,{type:"dotted",state:"disabled",orientation:"vertical"})]})]})]}),e.jsx(l.Section,{title:"Design Tokens",children:e.jsx(l.TokenTable,{tokens:[{name:"--stepper-connector-thickness-small",description:"Line thickness — small (1px)"},{name:"--stepper-connector-thickness-default",description:"Line thickness — default (2px)"},{name:"--stepper-connector-thickness-large",description:"Line thickness — large (4px)"},{name:"--stepper-connector-color-default",description:"Line colour for default/inactive state (--global-color-neutral-gray-300)"},{name:"--stepper-connector-color-complete",description:"Line colour for complete state (--global-color-secondary-navy)"},{name:"--stepper-connector-color-disabled",description:"Line colour for disabled state (--global-color-neutral-gray-200)"},{name:"--stepper-connector-length-small",description:"Minimum connector length — small (24px)"},{name:"--stepper-connector-length-default",description:"Minimum connector length — default (32px)"},{name:"--stepper-connector-length-large",description:"Minimum connector length — large (48px)"}]})}),e.jsx(l.Section,{title:"Usage Principles",children:e.jsxs(l.Principles,{children:[e.jsx(l.PrincipleCard,{number:1,title:"Match connector state to adjacent steps",children:'A connector between two completed steps should use the "complete" state. A connector between two upcoming steps should use "default". A connector in a disabled flow section should use "disabled".'}),e.jsx(l.PrincipleCard,{number:2,title:"Consistent type across a strip",children:"Don't mix solid, dashed, and dotted connectors within a single stepper strip unless each type conveys a deliberate, documented meaning."}),e.jsx(l.PrincipleCard,{number:3,title:"Let connectors flex to fill available space",children:"In horizontal steppers, allow connectors to grow (flex: 1) so the strip fills its container symmetrically, rather than setting fixed widths."})]})}),e.jsx(l.Section,{title:"Dos and Don'ts",children:e.jsx(l.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:16,background:"var(--global-color-neutral-gray-50)",borderRadius:8},children:[e.jsx(t,{type:"solid",state:"complete"}),e.jsx(t,{type:"solid",state:"disabled"}),e.jsx(t,{type:"solid",state:"default"})]}),description:"Use the same line type throughout a strip and vary only the state colour."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:16,background:"var(--global-color-neutral-gray-50)",borderRadius:8},children:[e.jsx(t,{type:"solid",state:"complete"}),e.jsx(t,{type:"dashed",state:"disabled"}),e.jsx(t,{type:"dotted",state:"default"})]}),description:"Don't mix line types in a single stepper — it adds confusion without meaning."}})}),e.jsx(l.Footer,{})]});ee.__docgenInfo={description:"",methods:[],displayName:"StepperConnectorsDocs"};const m=["solid","dashed","dotted"],d=["default","complete","disabled"],r=["small","default","large"],a={fontSize:10,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:6,whiteSpace:"nowrap"},_={fontSize:12,fontWeight:700,color:"#374151",textTransform:"capitalize",marginBottom:8},c={background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:6,padding:"12px 16px"},y=({type:s,state:i,size:o,length:p=120})=>e.jsx("div",{style:{display:"flex",alignItems:"center",width:p},children:e.jsx(t,{type:s,state:i,size:o})}),re={title:"Foundation/BuildingBlocks/StepperConnectors",component:t,parameters:{layout:"padded"},argTypes:{type:{control:"select",options:m,description:"Visual style of the connector line"},state:{control:"select",options:d,description:"Semantic state — controls line colour and opacity"},size:{control:"select",options:r,description:"Thickness of the line"},orientation:{control:"select",options:["horizontal","vertical"],description:"Layout axis of the connector"},className:{control:!1},ariaLabel:{control:"text"}},args:{type:"solid",state:"default",size:"default",orientation:"horizontal"}},f={name:"Documentation",render:()=>e.jsx(ee,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},u={name:"Playground",render:s=>e.jsx("div",{style:{display:"flex",alignItems:s.orientation==="vertical"?"flex-start":"center",flexDirection:s.orientation==="vertical"?"column":"row",gap:16,padding:24,background:"#f9fafb",borderRadius:6,minHeight:s.orientation==="vertical"?160:void 0,minWidth:s.orientation==="horizontal"?240:void 0},children:e.jsx(t,{...s})})},g={name:"Type / Solid",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:r.map(s=>e.jsxs("div",{children:[e.jsxs("div",{style:a,children:["Size: ",s]}),e.jsx("div",{style:{...c,display:"flex",gap:32,alignItems:"center"},children:d.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"center"},children:[e.jsx(y,{type:"solid",state:i,size:s}),e.jsx("span",{style:{...a,marginBottom:0},children:i})]},i))})]},s))})},h={name:"Type / Dashed",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:r.map(s=>e.jsxs("div",{children:[e.jsxs("div",{style:a,children:["Size: ",s]}),e.jsx("div",{style:{...c,display:"flex",gap:32,alignItems:"center"},children:d.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"center"},children:[e.jsx(y,{type:"dashed",state:i,size:s}),e.jsx("span",{style:{...a,marginBottom:0},children:i})]},i))})]},s))})},v={name:"Type / Dotted",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:r.map(s=>e.jsxs("div",{children:[e.jsxs("div",{style:a,children:["Size: ",s]}),e.jsx("div",{style:{...c,display:"flex",gap:32,alignItems:"center"},children:d.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"center"},children:[e.jsx(y,{type:"dotted",state:i,size:s}),e.jsx("span",{style:{...a,marginBottom:0},children:i})]},i))})]},s))})},j={name:"States",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:d.map(s=>e.jsxs("div",{children:[e.jsxs("div",{style:a,children:["State: ",s]}),e.jsx("div",{style:{...c,display:"flex",gap:32,alignItems:"center"},children:m.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"center"},children:[e.jsx(y,{type:i,state:s,size:"default"}),e.jsx("span",{style:{...a,marginBottom:0},children:i})]},i))})]},s))})},b={name:"Sizes",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:r.map(s=>e.jsxs("div",{children:[e.jsxs("div",{style:a,children:["Size: ",s]}),e.jsx("div",{style:{...c,display:"flex",gap:32,alignItems:"center"},children:m.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,alignItems:"center"},children:[e.jsx(y,{type:i,state:"default",size:s,length:160}),e.jsx("span",{style:{...a,marginBottom:0},children:i})]},i))})]},s))})},S={name:"Orientation / Vertical",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:d.map(s=>e.jsxs("div",{children:[e.jsxs("div",{style:a,children:["State: ",s]}),e.jsx("div",{style:{...c,display:"flex",gap:40,alignItems:"flex-start"},children:m.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx("span",{style:a,children:i}),e.jsx("div",{style:{display:"flex",alignItems:"center",height:80},children:e.jsx(t,{type:i,state:s,orientation:"vertical"})})]},i))})]},s))})},L={name:"Full Design Matrix",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx("div",{style:{fontSize:11,color:"#6d7280",fontStyle:"italic"},children:"Rows: type (solid / dashed / dotted)  ·  Columns: size (small / default / large)  ·  Groups: state"}),d.map(s=>e.jsxs("div",{children:[e.jsxs("div",{style:_,children:["State: ",s]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"80px repeat(3, 1fr)",gap:0,border:"1px solid #e5e7eb",borderRadius:8,overflow:"hidden"},children:[e.jsx("div",{style:{background:"#f3f4f6",padding:"8px 12px",borderBottom:"1px solid #e5e7eb"}}),r.map(i=>e.jsx("div",{style:{background:"#f3f4f6",padding:"8px 12px",borderBottom:"1px solid #e5e7eb",borderLeft:"1px solid #e5e7eb",fontSize:11,fontWeight:700,color:"#374151",textTransform:"uppercase",letterSpacing:"0.07em",textAlign:"center"},children:i},i)),m.map((i,o)=>e.jsxs(ie.Fragment,{children:[e.jsx("div",{style:{padding:"14px 12px",background:o%2===0?"#fafafa":"#ffffff",borderTop:o>0?"1px solid #e5e7eb":void 0,fontSize:11,fontWeight:700,color:"#374151",textTransform:"capitalize",display:"flex",alignItems:"center"},children:i}),r.map(p=>e.jsx("div",{style:{padding:"14px 16px",background:o%2===0?"#fafafa":"#ffffff",borderTop:o>0?"1px solid #e5e7eb":void 0,borderLeft:"1px solid #e5e7eb",display:"flex",alignItems:"center"},children:e.jsx(t,{type:i,state:s,size:p})},p))]},i))]})]},s)),e.jsxs("div",{children:[e.jsx("div",{style:_,children:"Orientation: Vertical — all types × sizes"}),e.jsx("div",{style:{...c,display:"flex",gap:48,alignItems:"flex-start",flexWrap:"wrap"},children:m.map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:a,children:s}),e.jsx("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:r.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx("div",{style:{height:80,display:"flex",alignItems:"center"},children:e.jsx(t,{type:s,state:"complete",size:i,orientation:"vertical"})}),e.jsx("span",{style:{...a,marginBottom:0},children:i})]},i))})]},s))})]})]})};var D,I,A;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <StepperConnectorsDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen'
  }
}`,...(A=(I=f.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var E,k,w;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    display: 'flex',
    alignItems: args.orientation === 'vertical' ? 'flex-start' : 'center',
    flexDirection: args.orientation === 'vertical' ? 'column' : 'row',
    gap: 16,
    padding: 24,
    background: '#f9fafb',
    borderRadius: 6,
    minHeight: args.orientation === 'vertical' ? 160 : undefined,
    minWidth: args.orientation === 'horizontal' ? 240 : undefined
  }}>
      <StepperConnectors {...args} />
    </div>
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var C,B,R;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Type / Solid',
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
      {ALL_SIZES.map(size => <div key={size}>
          <div style={LABEL_STYLE}>Size: {size}</div>
          <div style={{
        ...CARD,
        display: 'flex',
        gap: 32,
        alignItems: 'center'
      }}>
            {ALL_STATES.map(state => <div key={state} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'center'
        }}>
                <ConnectorRow type="solid" state={state} size={size} />
                <span style={{
            ...LABEL_STYLE,
            marginBottom: 0
          }}>{state}</span>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(R=(B=g.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var Y,q,P;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Type / Dashed',
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
      {ALL_SIZES.map(size => <div key={size}>
          <div style={LABEL_STYLE}>Size: {size}</div>
          <div style={{
        ...CARD,
        display: 'flex',
        gap: 32,
        alignItems: 'center'
      }}>
            {ALL_STATES.map(state => <div key={state} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'center'
        }}>
                <ConnectorRow type="dashed" state={state} size={size} />
                <span style={{
            ...LABEL_STYLE,
            marginBottom: 0
          }}>{state}</span>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(P=(q=h.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var V,O,W;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Type / Dotted',
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
      {ALL_SIZES.map(size => <div key={size}>
          <div style={LABEL_STYLE}>Size: {size}</div>
          <div style={{
        ...CARD,
        display: 'flex',
        gap: 32,
        alignItems: 'center'
      }}>
            {ALL_STATES.map(state => <div key={state} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'center'
        }}>
                <ConnectorRow type="dotted" state={state} size={size} />
                <span style={{
            ...LABEL_STYLE,
            marginBottom: 0
          }}>{state}</span>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(W=(O=v.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var F,M,N;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      {ALL_STATES.map(state => <div key={state}>
          <div style={LABEL_STYLE}>State: {state}</div>
          <div style={{
        ...CARD,
        display: 'flex',
        gap: 32,
        alignItems: 'center'
      }}>
            {ALL_TYPES.map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'center'
        }}>
                <ConnectorRow type={type} state={state} size="default" />
                <span style={{
            ...LABEL_STYLE,
            marginBottom: 0
          }}>{type}</span>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(N=(M=j.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var Z,U,H;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Sizes',
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
      {ALL_SIZES.map(size => <div key={size}>
          <div style={LABEL_STYLE}>Size: {size}</div>
          <div style={{
        ...CARD,
        display: 'flex',
        gap: 32,
        alignItems: 'center'
      }}>
            {ALL_TYPES.map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'center'
        }}>
                <ConnectorRow type={type} state="default" size={size} length={160} />
                <span style={{
            ...LABEL_STYLE,
            marginBottom: 0
          }}>{type}</span>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(H=(U=b.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var $,G,J;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Orientation / Vertical',
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
      {ALL_STATES.map(state => <div key={state}>
          <div style={LABEL_STYLE}>State: {state}</div>
          <div style={{
        ...CARD,
        display: 'flex',
        gap: 40,
        alignItems: 'flex-start'
      }}>
            {ALL_TYPES.map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
                <span style={LABEL_STYLE}>{type}</span>
                <div style={{
            display: 'flex',
            alignItems: 'center',
            height: 80
          }}>
                  <StepperConnectors type={type} state={state} orientation="vertical" />
                </div>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;L.parameters={...L.parameters,docs:{...(K=L.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
    gap: 40
  }}>
      {/* Header note */}
      <div style={{
      fontSize: 11,
      color: '#6d7280',
      fontStyle: 'italic'
    }}>
        Rows: type (solid / dashed / dotted) &nbsp;·&nbsp; Columns: size (small / default / large) &nbsp;·&nbsp; Groups: state
      </div>

      {ALL_STATES.map(state => <div key={state}>
          <div style={SECTION_TITLE}>State: {state}</div>

          {/* Table grid: row = type, col = size */}
          <div style={{
        display: 'grid',
        gridTemplateColumns: '80px repeat(3, 1fr)',
        gap: 0,
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        overflow: 'hidden'
      }}>
            {/* Header row */}
            <div style={{
          background: '#f3f4f6',
          padding: '8px 12px',
          borderBottom: '1px solid #e5e7eb'
        }} />
            {ALL_SIZES.map(size => <div key={size} style={{
          background: '#f3f4f6',
          padding: '8px 12px',
          borderBottom: '1px solid #e5e7eb',
          borderLeft: '1px solid #e5e7eb',
          fontSize: 11,
          fontWeight: 700,
          color: '#374151',
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
          textAlign: 'center'
        }}>
                {size}
              </div>)}

            {/* Data rows */}
            {ALL_TYPES.map((type, tIdx) => <React.Fragment key={type}>
                {/* Row label */}
                <div style={{
            padding: '14px 12px',
            background: tIdx % 2 === 0 ? '#fafafa' : '#ffffff',
            borderTop: tIdx > 0 ? '1px solid #e5e7eb' : undefined,
            fontSize: 11,
            fontWeight: 700,
            color: '#374151',
            textTransform: 'capitalize',
            display: 'flex',
            alignItems: 'center'
          }}>
                  {type}
                </div>

                {/* Cells: one per size */}
                {ALL_SIZES.map(size => <div key={size} style={{
            padding: '14px 16px',
            background: tIdx % 2 === 0 ? '#fafafa' : '#ffffff',
            borderTop: tIdx > 0 ? '1px solid #e5e7eb' : undefined,
            borderLeft: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center'
          }}>
                    <StepperConnectors type={type} state={state} size={size} />
                  </div>)}
              </React.Fragment>)}
          </div>
        </div>)}

      {/* Vertical orientation section */}
      <div>
        <div style={SECTION_TITLE}>Orientation: Vertical — all types × sizes</div>
        <div style={{
        ...CARD,
        display: 'flex',
        gap: 48,
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
          {ALL_TYPES.map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <div style={LABEL_STYLE}>{type}</div>
              <div style={{
            display: 'flex',
            gap: 16,
            alignItems: 'flex-end'
          }}>
                {ALL_SIZES.map(size => <div key={size} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6
            }}>
                    <div style={{
                height: 80,
                display: 'flex',
                alignItems: 'center'
              }}>
                    <StepperConnectors type={type} state="complete" size={size} orientation="vertical" />
                  </div>
                    <span style={{
                ...LABEL_STYLE,
                marginBottom: 0
              }}>{size}</span>
                  </div>)}
              </div>
            </div>)}
        </div>
      </div>
    </div>
}`,...(X=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const de=["Documentation","Playground","TypeSolid","TypeDashed","TypeDotted","States","Sizes","OrientationVertical","FullDesignMatrix"];export{f as Documentation,L as FullDesignMatrix,S as OrientationVertical,u as Playground,b as Sizes,j as States,h as TypeDashed,v as TypeDotted,g as TypeSolid,de as __namedExportsOrder,re as default};
