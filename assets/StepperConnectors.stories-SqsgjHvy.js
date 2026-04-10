import{j as e}from"./iframe-DSsOwVx9.js";import{D as l}from"./DocsTemplate-BbERyz6P.js";import"./preload-helper-Dp1pzeXC.js";const ie="_connector_1lwqt_6",x={connector:ie,"connector--horizontal":"_connector--horizontal_1lwqt_13","connector--size-small":"_connector--size-small_1lwqt_20","connector--size-large":"_connector--size-large_1lwqt_24","connector--vertical":"_connector--vertical_1lwqt_29","connector--solid":"_connector--solid_1lwqt_44","connector--dashed":"_connector--dashed_1lwqt_67","connector--dotted":"_connector--dotted_1lwqt_90","connector--state-default":"_connector--state-default_1lwqt_113","connector--state-complete":"_connector--state-complete_1lwqt_117","connector--state-disabled":"_connector--state-disabled_1lwqt_121"},t=({type:s="solid",state:a="default",size:i="default",orientation:d="horizontal",className:c,ariaLabel:w})=>{const ae=[x.connector,x[`connector--${d}`],x[`connector--${s}`],x[`connector--size-${i}`],x[`connector--state-${a}`],c].filter(Boolean).join(" ");return e.jsx("span",{role:"presentation","aria-label":w,"aria-hidden":!w,className:ae})};t.__docgenInfo={description:"",methods:[],displayName:"StepperConnectors",props:{type:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`Visual style of the line.
@default 'solid'`,defaultValue:{value:"'solid'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'complete' | 'disabled'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'complete'"},{name:"literal",value:"'disabled'"}]},description:`Semantic state — controls the line colour.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Thickness of the line.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Whether the connector runs horizontally (between steps in a row)
or vertically (between steps in a column).
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional extra CSS class for layout overrides"},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const E={display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},n={display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},se=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"StepperConnectors",subtitle:"A thin line segment that visually connects two adjacent step indicators in a stepper. Supports solid, dashed, and dotted line styles across default, complete, and disabled states."}),e.jsx(l.Section,{title:"Overview",children:e.jsx(l.BodyText,{children:"StepperConnectors render as a single styled line — horizontal or vertical — that bridges adjacent StepperSteps circles. The line colour communicates the progress state of the flow segment it represents. Use it together with StepperSteps to build a complete stepper pattern."})}),e.jsx(l.Section,{title:"Anatomy",children:e.jsx(l.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:16,background:"var(--global-color-neutral-gray-50)",borderRadius:8},children:[e.jsx(t,{type:"solid",state:"complete",size:"default"}),e.jsx(t,{type:"dashed",state:"default",size:"default"}),e.jsx(t,{type:"dotted",state:"disabled",size:"default"})]}),parts:[{id:1,name:"Line",token:"--stepper-connector-thickness-default",description:"A single CSS border applied to a zero-height (or zero-width for vertical) element."},{id:2,name:"Line style",token:"border-style: solid | dashed | dotted",description:"Solid = continuous line; dashed = equal-length segments; dotted = round dots."},{id:3,name:"State colour",token:"--stepper-connector-color-default / complete / disabled",description:"Communicates the progress state of the segment between two steps."}]})}),e.jsxs(l.Section,{title:"Types",children:[e.jsxs(l.Subsection,{title:"Solid",children:[e.jsx(l.BodyText,{children:"A continuous solid line. Use for the primary connector style — the most visually clear."}),e.jsx("div",{style:E,children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"default"}),e.jsx(t,{type:"solid",state:"complete"}),e.jsx(t,{type:"solid",state:"disabled"})]})})]}),e.jsxs(l.Subsection,{title:"Dashed",children:[e.jsx(l.BodyText,{children:"A dashed line. Use to indicate an upcoming or incomplete segment."}),e.jsx("div",{style:E,children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"dashed",state:"default"}),e.jsx(t,{type:"dashed",state:"complete"}),e.jsx(t,{type:"dashed",state:"disabled"})]})})]}),e.jsxs(l.Subsection,{title:"Dotted",children:[e.jsx(l.BodyText,{children:"A dotted line. Use for a lighter, more subtle connector."}),e.jsx("div",{style:E,children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"dotted",state:"default"}),e.jsx(t,{type:"dotted",state:"complete"}),e.jsx(t,{type:"dotted",state:"disabled"})]})})]})]}),e.jsx(l.Section,{title:"States",children:e.jsx(l.SizeDemo,{rows:[{label:"Default",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"default"}),e.jsx(t,{type:"dashed",state:"default"}),e.jsx(t,{type:"dotted",state:"default"})]})},{label:"Complete",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"complete"}),e.jsx(t,{type:"dashed",state:"complete"}),e.jsx(t,{type:"dotted",state:"complete"})]})},{label:"Disabled",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"disabled"}),e.jsx(t,{type:"dashed",state:"disabled"}),e.jsx(t,{type:"dotted",state:"disabled"})]})}]})}),e.jsx(l.Section,{title:"Sizes",children:e.jsx(l.SizeDemo,{rows:[{label:"Small (1px)",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"default",size:"small"}),e.jsx(t,{type:"dashed",state:"complete",size:"small"}),e.jsx(t,{type:"dotted",state:"disabled",size:"small"})]})},{label:"Default (2px)",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"default",size:"default"}),e.jsx(t,{type:"dashed",state:"complete",size:"default"}),e.jsx(t,{type:"dotted",state:"disabled",size:"default"})]})},{label:"Large (4px)",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"default",size:"large"}),e.jsx(t,{type:"dashed",state:"complete",size:"large"}),e.jsx(t,{type:"dotted",state:"disabled",size:"large"})]})}]})}),e.jsxs(l.Section,{title:"Orientation",children:[e.jsx(l.Subsection,{title:"Horizontal",children:e.jsxs("div",{style:n,children:[e.jsx(t,{type:"solid",state:"complete",orientation:"horizontal"}),e.jsx(t,{type:"dashed",state:"default",orientation:"horizontal"}),e.jsx(t,{type:"dotted",state:"disabled",orientation:"horizontal"})]})}),e.jsxs(l.Subsection,{title:"Vertical",children:[e.jsx(l.BodyText,{children:"Use for vertical steppers where steps are stacked top-to-bottom."}),e.jsxs("div",{style:{display:"flex",gap:32,padding:16},children:[e.jsx(t,{type:"solid",state:"complete",orientation:"vertical"}),e.jsx(t,{type:"dashed",state:"default",orientation:"vertical"}),e.jsx(t,{type:"dotted",state:"disabled",orientation:"vertical"})]})]})]}),e.jsx(l.Section,{title:"Design Tokens",children:e.jsx(l.TokenTable,{tokens:[{name:"--stepper-connector-thickness-small",description:"Line thickness — small (1px)"},{name:"--stepper-connector-thickness-default",description:"Line thickness — default (2px)"},{name:"--stepper-connector-thickness-large",description:"Line thickness — large (4px)"},{name:"--stepper-connector-color-default",description:"Line colour for default/pending state → var(--global-color-neutral-gray-300) = #d2d5da"},{name:"--stepper-connector-color-complete",description:"Line colour for completed state → var(--global-color-secondary-navy) = #3a3282"},{name:"--stepper-connector-color-disabled",description:"Line colour for disabled state → var(--global-color-neutral-gray-200) = #e5e7eb"},{name:"--stepper-connector-length-small",description:"Minimum connector length — small (24px)"},{name:"--stepper-connector-length-default",description:"Minimum connector length — default (32px)"},{name:"--stepper-connector-length-large",description:"Minimum connector length — large (48px)"}]})}),e.jsx(l.Section,{title:"Usage Principles",children:e.jsxs(l.Principles,{children:[e.jsx(l.PrincipleCard,{number:1,title:"Match connector state to adjacent steps",children:'A connector between two completed steps should use the "complete" state. A connector between two upcoming steps should use "default". A connector in a disabled flow section should use "disabled".'}),e.jsx(l.PrincipleCard,{number:2,title:"Consistent type across a strip",children:"Don't mix solid, dashed, and dotted connectors within a single stepper strip unless each type conveys a deliberate, documented meaning."}),e.jsx(l.PrincipleCard,{number:3,title:"Let connectors flex to fill available space",children:"In horizontal steppers, allow connectors to grow (flex: 1) so the strip fills its container symmetrically, rather than setting fixed widths."})]})}),e.jsx(l.Section,{title:"Dos and Don'ts",children:e.jsx(l.DosDonts,{doItem:{icon:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:16,background:"var(--global-color-neutral-gray-50)",borderRadius:8},children:[e.jsx(t,{type:"solid",state:"complete"}),e.jsx(t,{type:"solid",state:"disabled"}),e.jsx(t,{type:"solid",state:"default"})]}),description:"Use the same line type throughout a strip and vary only the state colour."},dontItem:{icon:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:16,background:"var(--global-color-neutral-gray-50)",borderRadius:8},children:[e.jsx(t,{type:"solid",state:"complete"}),e.jsx(t,{type:"dashed",state:"disabled"}),e.jsx(t,{type:"dotted",state:"default"})]}),description:"Don't mix line types in a single stepper — it adds confusion without meaning."}})}),e.jsx(l.Footer,{})]});se.__docgenInfo={description:"",methods:[],displayName:"StepperConnectorsDocs"};const p=["solid","dashed","dotted"],m=["default","complete","disabled"],r=["small","default","large"],L={small:80,default:180,large:300},y={fontSize:10,fontWeight:600,color:"var(--global-color-secondary-blue-gray)",textTransform:"uppercase",letterSpacing:"0.08em"},o={fontSize:12,fontWeight:700,color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize",marginBottom:4},_={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:6,overflow:"hidden"},D={background:"var(--global-color-neutral-gray-100)",padding:"6px 12px",fontSize:10,fontWeight:700,color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.07em",textAlign:"center",borderBottom:"1px solid var(--global-color-neutral-gray-200)",borderLeft:"1px solid var(--global-color-neutral-gray-200)",display:"flex",alignItems:"center",justifyContent:"center"},de={title:"Foundation/BuildingBlocks/StepperConnectors",component:t,parameters:{layout:"padded"},argTypes:{type:{control:"select",options:p,description:"Visual style of the connector line"},state:{control:"select",options:m,description:"Semantic state — controls line colour and opacity"},size:{control:"select",options:r,description:"Thickness and minimum length of the line"},orientation:{control:"select",options:["horizontal","vertical"],description:"Layout axis of the connector"},className:{control:!1},ariaLabel:{control:"text"}},args:{type:"solid",state:"default",size:"default",orientation:"horizontal"}},z=({type:s})=>{const a=`80px ${r.map(i=>`${L[i]}px`).join(" ")}`;return e.jsxs("div",{style:_,children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:a},children:[e.jsx("div",{style:{...D,borderLeft:"none",background:"var(--global-color-neutral-gray-100)"}}),r.map(i=>e.jsx("div",{style:D,children:i},i))]}),m.map((i,d)=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:a,borderTop:d>0?"1px solid var(--global-color-neutral-gray-200)":void 0,background:d%2===0?"var(--global-color-base-white)":"var(--global-color-neutral-gray-50)"},children:[e.jsx("div",{style:{padding:"14px 12px",display:"flex",alignItems:"center",...y},children:i}),r.map(c=>e.jsx("div",{style:{borderLeft:"1px solid var(--global-color-neutral-gray-200)",padding:"14px 0",display:"flex",alignItems:"center"},children:e.jsx(t,{type:s,state:i,size:c})},c))]},i))]})},u={name:"Documentation",render:()=>e.jsx(se,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},g={name:"Playground",render:s=>e.jsx("div",{style:{display:"flex",alignItems:s.orientation==="vertical"?"flex-start":"center",flexDirection:s.orientation==="vertical"?"column":"row",gap:16,padding:24,background:"var(--global-color-neutral-gray-50)",borderRadius:6,minHeight:s.orientation==="vertical"?160:void 0,width:s.orientation==="horizontal"?L[s.size??"default"]:void 0},children:e.jsx(t,{...s})})},v={name:"Type / Solid",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:o,children:"Solid"}),e.jsx(z,{type:"solid"})]})},f={name:"Type / Dashed",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:o,children:"Dashed"}),e.jsx(z,{type:"dashed"})]})},h={name:"Type / Dotted",parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:o,children:"Dotted"}),e.jsx(z,{type:"dotted"})]})},j={name:"States",parameters:{controls:{disable:!0}},render:()=>{const s=`80px ${r.map(a=>`${L[a]}px`).join(" ")}`;return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:m.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsxs("div",{style:o,children:["State: ",a]}),e.jsxs("div",{style:_,children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:s},children:[e.jsx("div",{style:{...D,borderLeft:"none",background:"var(--global-color-neutral-gray-100)"}}),r.map(i=>e.jsx("div",{style:D,children:i},i))]}),p.map((i,d)=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:s,borderTop:d>0?"1px solid var(--global-color-neutral-gray-200)":void 0,background:d%2===0?"var(--global-color-base-white)":"var(--global-color-neutral-gray-50)"},children:[e.jsx("div",{style:{padding:"14px 12px",display:"flex",alignItems:"center",...y},children:i}),r.map(c=>e.jsx("div",{style:{borderLeft:"1px solid var(--global-color-neutral-gray-200)",padding:"14px 0",display:"flex",alignItems:"center"},children:e.jsx(t,{type:i,state:a,size:c})},c))]},i))]})]},a))})}},b={name:"Sizes",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:r.map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsxs("div",{style:o,children:["Size: ",s]}),e.jsx("div",{style:{..._,display:"flex",gap:24,padding:"16px 12px",alignItems:"center"},children:p.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,alignItems:"flex-start"},children:[e.jsx("span",{style:y,children:a}),e.jsx("div",{style:{width:L[s],display:"flex"},children:e.jsx(t,{type:a,state:"default",size:s})})]},a))})]},s))})},S={name:"Orientation / Vertical",parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:m.map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsxs("div",{style:o,children:["State: ",s]}),e.jsx("div",{style:{..._,display:"flex",gap:32,padding:"16px 20px",alignItems:"flex-start"},children:p.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx("span",{style:y,children:a}),e.jsx("div",{style:{height:80,display:"flex",alignItems:"center"},children:e.jsx(t,{type:a,state:s,orientation:"vertical"})})]},a))})]},s))})},T={name:"Full Design Matrix",parameters:{layout:"padded",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:p.map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("div",{style:o,children:s}),e.jsx(z,{type:s})]},s))}),e.jsxs("div",{children:[e.jsx("div",{style:{...o,marginBottom:12},children:"Vertical orientation"}),e.jsx("div",{style:{display:"flex",gap:40,flexWrap:"wrap"},children:p.map(s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:y,children:s}),e.jsx("div",{style:{display:"flex",gap:20,alignItems:"flex-end"},children:m.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx("div",{style:{height:80,display:"flex",alignItems:"center"},children:e.jsx(t,{type:s,state:a,orientation:"vertical"})}),e.jsx("span",{style:{...y,whiteSpace:"nowrap"},children:a})]},a))})]},s))})]})]})};var I,A,k;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=(A=u.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var C,P,Y;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    display: 'flex',
    alignItems: args.orientation === 'vertical' ? 'flex-start' : 'center',
    flexDirection: args.orientation === 'vertical' ? 'column' : 'row',
    gap: 16,
    padding: 24,
    background: 'var(--global-color-neutral-gray-50)',
    borderRadius: 6,
    minHeight: args.orientation === 'vertical' ? 160 : undefined,
    width: args.orientation === 'horizontal' ? SIZE_WIDTHS[args.size ?? 'default'] : undefined
  }}>
      <StepperConnectors {...args} />
    </div>
}`,...(Y=(P=g.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var q,B,R;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=(B=v.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var V,H,M;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(H=f.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var W,$,Z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=($=h.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};var O,U,F;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'States',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const gridCols = \`80px \${ALL_SIZES.map(s => \`\${SIZE_WIDTHS[s]}px\`).join(' ')}\`;
    return <div style={{
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
            <div style={CARD}>
              {/* Header */}
              <div style={{
            display: 'grid',
            gridTemplateColumns: gridCols
          }}>
                <div style={{
              ...HEADER_CELL,
              borderLeft: 'none',
              background: 'var(--global-color-neutral-gray-100)'
            }} />
                {ALL_SIZES.map(size => <div key={size} style={HEADER_CELL}>{size}</div>)}
              </div>
              {/* Type rows */}
              {ALL_TYPES.map((type, tIdx) => <div key={type} style={{
            display: 'grid',
            gridTemplateColumns: gridCols,
            borderTop: tIdx > 0 ? '1px solid var(--global-color-neutral-gray-200)' : undefined,
            background: tIdx % 2 === 0 ? 'var(--global-color-base-white)' : 'var(--global-color-neutral-gray-50)'
          }}>
                  <div style={{
              padding: '14px 12px',
              display: 'flex',
              alignItems: 'center',
              ...LABEL_STYLE
            }}>{type}</div>
                  {ALL_SIZES.map(size => <div key={size} style={{
              borderLeft: '1px solid var(--global-color-neutral-gray-200)',
              padding: '14px 0',
              display: 'flex',
              alignItems: 'center'
            }}>
                      <StepperConnectors type={type} state={state} size={size} />
                    </div>)}
                </div>)}
            </div>
          </div>)}
      </div>;
  }
}`,...(F=(U=j.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var N,G,J;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }}>
          <div style={TYPE_TITLE}>Size: {size}</div>
          <div style={{
        ...CARD,
        display: 'flex',
        gap: 24,
        padding: '16px 12px',
        alignItems: 'center'
      }}>
            {ALL_TYPES.map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          alignItems: 'flex-start'
        }}>
                <span style={LABEL_STYLE}>{type}</span>
                <div style={{
            width: SIZE_WIDTHS[size],
            display: 'flex'
          }}>
                  <StepperConnectors type={type} state="default" size={size} />
                </div>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
      {ALL_STATES.map(state => <div key={state} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }}>
          <div style={TYPE_TITLE}>State: {state}</div>
          <div style={{
        ...CARD,
        display: 'flex',
        gap: 32,
        padding: '16px 20px',
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
            height: 80,
            display: 'flex',
            alignItems: 'center'
          }}>
                  <StepperConnectors type={type} state={state} orientation="vertical" />
                </div>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,te,le;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
      {/* Horizontal — all types */}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
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

      {/* Vertical orientation */}
      <div>
        <div style={{
        ...TYPE_TITLE,
        marginBottom: 12
      }}>Vertical orientation</div>
        <div style={{
        display: 'flex',
        gap: 40,
        flexWrap: 'wrap' as const
      }}>
          {ALL_TYPES.map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <span style={LABEL_STYLE}>{type}</span>
              <div style={{
            display: 'flex',
            gap: 20,
            alignItems: 'flex-end'
          }}>
                {ALL_STATES.map(state => <div key={state} style={{
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
                      <StepperConnectors type={type} state={state} orientation="vertical" />
                    </div>
                    <span style={{
                ...LABEL_STYLE,
                whiteSpace: 'nowrap' as const
              }}>{state}</span>
                  </div>)}
              </div>
            </div>)}
        </div>
      </div>
    </div>
}`,...(le=(te=T.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const ce=["Documentation","Playground","TypeSolid","TypeDashed","TypeDotted","States","Sizes","OrientationVertical","FullDesignMatrix"];export{u as Documentation,T as FullDesignMatrix,S as OrientationVertical,g as Playground,b as Sizes,j as States,f as TypeDashed,h as TypeDotted,v as TypeSolid,ce as __namedExportsOrder,de as default};
