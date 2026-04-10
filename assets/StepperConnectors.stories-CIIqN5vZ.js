import{j as e}from"./iframe-Bcl9ehwc.js";import{D as a}from"./DocsTemplate-Ck647IGQ.js";import"./preload-helper-Dp1pzeXC.js";const te="_connector_8mfqa_6",d={connector:te,"connector--horizontal":"_connector--horizontal_8mfqa_14","connector--size-small":"_connector--size-small_8mfqa_20","connector--size-large":"_connector--size-large_8mfqa_24","connector--vertical":"_connector--vertical_8mfqa_29","connector--solid":"_connector--solid_8mfqa_47","connector--dashed":"_connector--dashed_8mfqa_69","connector--dotted":"_connector--dotted_8mfqa_91","connector--state-default":"_connector--state-default_8mfqa_113","connector--state-active":"_connector--state-active_8mfqa_117","connector--state-complete":"_connector--state-complete_8mfqa_121","connector--state-disabled":"_connector--state-disabled_8mfqa_125"},t=({type:s="solid",state:l="default",size:c="default",orientation:Q="horizontal",className:X,ariaLabel:z})=>{const ee=[d.connector,d[`connector--${Q}`],d[`connector--${s}`],d[`connector--size-${c}`],d[`connector--state-${l}`],X].filter(Boolean).join(" ");return e.jsx("span",{role:"presentation","aria-label":z,"aria-hidden":!z,className:ee})};t.__docgenInfo={description:"",methods:[],displayName:"StepperConnectors",props:{type:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Visual style of the line.
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'active' | 'complete' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'active'"},{name:"literal",value:"'complete'"},{name:"literal",value:"'disabled'"}]},description:`Semantic state — controls the line colour.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Thickness of the line.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Whether the connector runs horizontally (between steps in a row)
or vertically (between steps in a column).
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional extra CSS class for layout overrides"},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const S={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},i={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},K=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"StepperConnectors",subtitle:"A thin line segment that visually connects two adjacent step indicators in a stepper. Supports solid, dashed, and dotted line styles across default, active, complete, and disabled states."}),e.jsx(a.Section,{title:"Overview",children:e.jsx(a.BodyText,{children:"StepperConnectors render as a single styled line — horizontal or vertical — that bridges adjacent StepperSteps circles. The line colour communicates the progress state of the flow segment it represents. Use it together with StepperSteps to build a complete stepper pattern."})}),e.jsx(a.Section,{title:"Anatomy",children:e.jsx(a.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:16,background:"var(--global-color-neutral-gray-50)",borderRadius:8},children:[e.jsx(t,{type:"solid",state:"complete",size:"default"}),e.jsx(t,{type:"dashed",state:"active",size:"default"}),e.jsx(t,{type:"dotted",state:"default",size:"default"})]}),parts:[{id:1,name:"Line",token:"--stepper-connector-thickness-default",description:"A single CSS border applied to a zero-height (or zero-width for vertical) element."},{id:2,name:"Line style",token:"border-style: solid | dashed | dotted",description:"Solid = continuous line; dashed = equal-length segments; dotted = round dots."},{id:3,name:"State colour",token:"--stepper-connector-color-default / active / complete / disabled",description:"Communicates the progress state of the segment between two steps."}]})}),e.jsxs(a.Section,{title:"Types",children:[e.jsxs(a.Subsection,{title:"Solid",children:[e.jsx(a.BodyText,{children:"A continuous solid line. Use for the primary connector style — the most visually clear."}),e.jsx("div",{style:S,children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"solid",state:"default"}),e.jsx(t,{type:"solid",state:"active"}),e.jsx(t,{type:"solid",state:"complete"}),e.jsx(t,{type:"solid",state:"disabled"})]})})]}),e.jsxs(a.Subsection,{title:"Dashed",children:[e.jsx(a.BodyText,{children:"A dashed line. Use to indicate an upcoming or incomplete segment."}),e.jsx("div",{style:S,children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"dashed",state:"default"}),e.jsx(t,{type:"dashed",state:"active"}),e.jsx(t,{type:"dashed",state:"complete"}),e.jsx(t,{type:"dashed",state:"disabled"})]})})]}),e.jsxs(a.Subsection,{title:"Dotted",children:[e.jsx(a.BodyText,{children:"A dotted line. Use for a lighter, more subtle connector."}),e.jsx("div",{style:S,children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"dotted",state:"default"}),e.jsx(t,{type:"dotted",state:"active"}),e.jsx(t,{type:"dotted",state:"complete"}),e.jsx(t,{type:"dotted",state:"disabled"})]})})]})]}),e.jsx(a.Section,{title:"States",children:e.jsx(a.SizeDemo,{rows:[{label:"Default",children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"solid",state:"default"}),e.jsx(t,{type:"dashed",state:"default"}),e.jsx(t,{type:"dotted",state:"default"})]})},{label:"Active",children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"solid",state:"active"}),e.jsx(t,{type:"dashed",state:"active"}),e.jsx(t,{type:"dotted",state:"active"})]})},{label:"Complete",children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"solid",state:"complete"}),e.jsx(t,{type:"dashed",state:"complete"}),e.jsx(t,{type:"dotted",state:"complete"})]})},{label:"Disabled",children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"solid",state:"disabled"}),e.jsx(t,{type:"dashed",state:"disabled"}),e.jsx(t,{type:"dotted",state:"disabled"})]})}]})}),e.jsx(a.Section,{title:"Sizes",children:e.jsx(a.SizeDemo,{rows:[{label:"Small (1px)",children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"solid",state:"default",size:"small"}),e.jsx(t,{type:"dashed",state:"active",size:"small"}),e.jsx(t,{type:"dotted",state:"complete",size:"small"})]})},{label:"Default (2px)",children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"solid",state:"default",size:"default"}),e.jsx(t,{type:"dashed",state:"active",size:"default"}),e.jsx(t,{type:"dotted",state:"complete",size:"default"})]})},{label:"Large (4px)",children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"solid",state:"default",size:"large"}),e.jsx(t,{type:"dashed",state:"active",size:"large"}),e.jsx(t,{type:"dotted",state:"complete",size:"large"})]})}]})}),e.jsxs(a.Section,{title:"Orientation",children:[e.jsx(a.Subsection,{title:"Horizontal",children:e.jsxs("div",{style:i,children:[e.jsx(t,{type:"solid",state:"complete",orientation:"horizontal"}),e.jsx(t,{type:"dashed",state:"active",orientation:"horizontal"}),e.jsx(t,{type:"dotted",state:"default",orientation:"horizontal"})]})}),e.jsxs(a.Subsection,{title:"Vertical",children:[e.jsx(a.BodyText,{children:"Use for vertical steppers where steps are stacked top-to-bottom."}),e.jsxs("div",{style:{display:"flex",gap:32,padding:16},children:[e.jsx(t,{type:"solid",state:"complete",orientation:"vertical"}),e.jsx(t,{type:"dashed",state:"active",orientation:"vertical"}),e.jsx(t,{type:"dotted",state:"default",orientation:"vertical"})]})]})]}),e.jsx(a.Section,{title:"Design Tokens",children:e.jsx(a.TokenTable,{tokens:[{name:"--stepper-connector-thickness-small",description:"Line thickness — small (1px)"},{name:"--stepper-connector-thickness-default",description:"Line thickness — default (2px)"},{name:"--stepper-connector-thickness-large",description:"Line thickness — large (4px)"},{name:"--stepper-connector-color-default",description:"Line colour for default/inactive state (--global-color-neutral-gray-300)"},{name:"--stepper-connector-color-active",description:"Line colour for active state (--global-color-secondary-navy)"},{name:"--stepper-connector-color-complete",description:"Line colour for complete state (--global-color-secondary-navy)"},{name:"--stepper-connector-color-disabled",description:"Line colour for disabled state (--global-color-neutral-gray-200)"},{name:"--stepper-connector-length-small",description:"Minimum connector length — small (24px)"},{name:"--stepper-connector-length-default",description:"Minimum connector length — default (32px)"},{name:"--stepper-connector-length-large",description:"Minimum connector length — large (48px)"}]})}),e.jsx(a.Section,{title:"Usage Principles",children:e.jsxs(a.Principles,{children:[e.jsx(a.PrincipleCard,{number:1,title:"Match connector state to adjacent steps",children:'A connector between a complete step and an active step should use the "complete" state. A connector between two future/default steps should use "default".'}),e.jsx(a.PrincipleCard,{number:2,title:"Consistent type across a strip",children:"Don't mix solid, dashed, and dotted connectors within a single stepper strip unless each type conveys a deliberate, documented meaning."}),e.jsx(a.PrincipleCard,{number:3,title:"Let connectors flex to fill available space",children:"In horizontal steppers, allow connectors to grow (flex: 1) so the strip fills its container symmetrically, rather than setting fixed widths."})]})}),e.jsx(a.Section,{title:"Dos and Don'ts",children:e.jsx(a.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:16,background:"var(--global-color-neutral-gray-50)",borderRadius:8},children:[e.jsx(t,{type:"solid",state:"complete"}),e.jsx(t,{type:"solid",state:"active"}),e.jsx(t,{type:"solid",state:"default"})]}),description:"Use the same line type throughout a strip and vary only the state colour."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:16,background:"var(--global-color-neutral-gray-50)",borderRadius:8},children:[e.jsx(t,{type:"solid",state:"complete"}),e.jsx(t,{type:"dashed",state:"active"}),e.jsx(t,{type:"dotted",state:"default"})]}),description:"Don't mix line types in a single stepper — it adds confusion without meaning."}})}),e.jsx(a.Footer,{})]});K.__docgenInfo={description:"",methods:[],displayName:"StepperConnectorsDocs"};const j=["solid","dashed","dotted"],o=["default","active","complete","disabled"],b=["small","default","large"],n={display:"flex",alignItems:"center",gap:24,padding:16,background:"#f9fafb",borderRadius:6},se={display:"flex",flexDirection:"column",gap:16,padding:16,background:"#f9fafb",borderRadius:6},r=s=>({fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:8}),ne={title:"Foundation/BuildingBlocks/StepperConnectors",component:t,parameters:{layout:"padded"},argTypes:{type:{control:"select",options:j},state:{control:"select",options:o},size:{control:"select",options:b},orientation:{control:"select",options:["horizontal","vertical"]}},args:{type:"solid",state:"default",size:"default",orientation:"horizontal"}},p={name:"Documentation",render:()=>e.jsx(K,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},m={name:"Playground",render:s=>e.jsx("div",{style:s.orientation==="vertical"?se:n,children:e.jsx(t,{...s})})},y={name:"Type / Solid",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:o.map(s=>e.jsxs("div",{children:[e.jsx("div",{style:r(),children:s}),e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:s,size:"small"}),e.jsx(t,{type:"solid",state:s,size:"default"}),e.jsx(t,{type:"solid",state:s,size:"large"})]})]},s))})},u={name:"Type / Dashed",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:o.map(s=>e.jsxs("div",{children:[e.jsx("div",{style:r(),children:s}),e.jsxs("div",{style:n,children:[e.jsx(t,{type:"dashed",state:s,size:"small"}),e.jsx(t,{type:"dashed",state:s,size:"default"}),e.jsx(t,{type:"dashed",state:s,size:"large"})]})]},s))})},x={name:"Type / Dotted",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:o.map(s=>e.jsxs("div",{children:[e.jsx("div",{style:r(),children:s}),e.jsxs("div",{style:n,children:[e.jsx(t,{type:"dotted",state:s,size:"small"}),e.jsx(t,{type:"dotted",state:s,size:"default"}),e.jsx(t,{type:"dotted",state:s,size:"large"})]})]},s))})},h={name:"States",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:o.map(s=>e.jsxs("div",{children:[e.jsx("div",{style:r(),children:s}),e.jsx("div",{style:n,children:j.map(l=>e.jsx(t,{type:l,state:s,size:"default"},l))})]},s))})},v={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:b.map(s=>e.jsxs("div",{children:[e.jsx("div",{style:r(),children:s}),e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"default",size:s}),e.jsx(t,{type:"dashed",state:"active",size:s}),e.jsx(t,{type:"dotted",state:"complete",size:s})]})]},s))})},f={name:"Orientation / Vertical",render:()=>e.jsx("div",{style:{display:"flex",gap:32,padding:16,background:"#f9fafb",borderRadius:6},children:j.map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx("span",{style:{fontSize:11,fontWeight:600,color:"#61607C",textTransform:"uppercase"},children:s}),e.jsx(t,{type:s,state:"complete",orientation:"vertical"}),e.jsx(t,{type:s,state:"active",orientation:"vertical"}),e.jsx(t,{type:s,state:"default",orientation:"vertical"})]},s))})},g={name:"Full Design Matrix",parameters:{layout:"padded"},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:j.map(s=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#374151",marginBottom:12,textTransform:"capitalize"},children:s}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:b.map(l=>e.jsxs("div",{children:[e.jsxs("div",{style:r(),children:["size: ",l]}),e.jsx("div",{style:n,children:o.map(c=>e.jsx(t,{type:s,state:c,size:l},c))})]},l))})]},s))})};var _,D,T;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var C,L,w;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={args.orientation === 'vertical' ? col : wrap}>
      <StepperConnectors {...args} />
    </div>
}`,...(w=(L=m.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var k,A,q;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Type / Solid',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {ALL_STATES.map(state => <div key={state}>
          <div style={label(state)}>{state}</div>
          <div style={wrap}>
            <StepperConnectors type="solid" state={state} size="small" />
            <StepperConnectors type="solid" state={state} size="default" />
            <StepperConnectors type="solid" state={state} size="large" />
          </div>
        </div>)}
    </div>
}`,...(q=(A=y.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var E,I,P;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Type / Dashed',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {ALL_STATES.map(state => <div key={state}>
          <div style={label(state)}>{state}</div>
          <div style={wrap}>
            <StepperConnectors type="dashed" state={state} size="small" />
            <StepperConnectors type="dashed" state={state} size="default" />
            <StepperConnectors type="dashed" state={state} size="large" />
          </div>
        </div>)}
    </div>
}`,...(P=(I=u.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var B,V,R;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Type / Dotted',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {ALL_STATES.map(state => <div key={state}>
          <div style={label(state)}>{state}</div>
          <div style={wrap}>
            <StepperConnectors type="dotted" state={state} size="small" />
            <StepperConnectors type="dotted" state={state} size="default" />
            <StepperConnectors type="dotted" state={state} size="large" />
          </div>
        </div>)}
    </div>
}`,...(R=(V=x.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var M,O,U;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {ALL_STATES.map(state => <div key={state}>
          <div style={label(state)}>{state}</div>
          <div style={wrap}>
            {ALL_TYPES.map(type => <StepperConnectors key={type} type={type} state={state} size="default" />)}
          </div>
        </div>)}
    </div>
}`,...(U=(O=h.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var W,F,$;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <div style={label(size)}>{size}</div>
          <div style={wrap}>
            <StepperConnectors type="solid" state="default" size={size} />
            <StepperConnectors type="dashed" state="active" size={size} />
            <StepperConnectors type="dotted" state="complete" size={size} />
          </div>
        </div>)}
    </div>
}`,...($=(F=v.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var N,Y,Z;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Orientation / Vertical',
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    padding: 16,
    background: '#f9fafb',
    borderRadius: 6
  }}>
      {ALL_TYPES.map(type => <div key={type} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <span style={{
        fontSize: 11,
        fontWeight: 600,
        color: '#61607C',
        textTransform: 'uppercase'
      }}>{type}</span>
          <StepperConnectors type={type} state="complete" orientation="vertical" />
          <StepperConnectors type={type} state="active" orientation="vertical" />
          <StepperConnectors type={type} state="default" orientation="vertical" />
        </div>)}
    </div>
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var H,G,J;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      {ALL_TYPES.map(type => <div key={type}>
          <div style={{
        fontSize: 13,
        fontWeight: 600,
        color: '#374151',
        marginBottom: 12,
        textTransform: 'capitalize'
      }}>
            {type}
          </div>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
            {ALL_SIZES.map(size => <div key={size}>
                <div style={label(\`\${size}\`)}>size: {size}</div>
                <div style={wrap}>
                  {ALL_STATES.map(state => <StepperConnectors key={state} type={type} state={state} size={size} />)}
                </div>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const oe=["Documentation","Playground","TypeSolid","TypeDashed","TypeDotted","States","Sizes","OrientationVertical","FullDesignMatrix"];export{p as Documentation,g as FullDesignMatrix,f as OrientationVertical,m as Playground,v as Sizes,h as States,u as TypeDashed,x as TypeDotted,y as TypeSolid,oe as __namedExportsOrder,ne as default};
