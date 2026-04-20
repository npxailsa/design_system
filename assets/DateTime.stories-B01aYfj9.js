import{j as e,r as u,R as Z}from"./iframe-BKdhF1q-.js";import{c as de}from"./createSvgIcon-Ce8WoS11.js";import{A as oe}from"./AccessTime-SjP9Bkj9.js";import{I as ce}from"./InputBase-BCFyQzKS.js";import{D as l}from"./DocsTemplate-B3vxmoEt.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-9HIQf9lg.js";import"./memoTheme-2V32Djq2.js";import"./useFormControl-i7Bm8TYF.js";import"./index-EWOLI5F-.js";import"./useTheme-DailTbof.js";import"./emotion-react.browser.esm-YLjFa5kS.js";import"./useForkRef-BK7iHAeS.js";import"./useEventCallback-Bbxd2UU1.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isHostComponent-DVu5iVWx.js";const pe=de(e.jsx("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V8h16z"})),ue="_field_1cxhj_8",me="_label_1cxhj_24",he="_control_1cxhj_38",xe="_inputRoot_1cxhj_102",fe="_nativeInput_1cxhj_111",ge="_trailingIcon_1cxhj_164",ye="_iconSvg_1cxhj_194",ve="_helper_1cxhj_219",d={field:ue,"field--small":"_field--small_1cxhj_18","field--default":"_field--default_1cxhj_19","field--large":"_field--large_1cxhj_20",label:me,control:he,"control--small":"_control--small_1cxhj_53","control--default":"_control--default_1cxhj_59","control--large":"_control--large_1cxhj_65","control--focused":"_control--focused_1cxhj_72","control--error":"_control--error_1cxhj_78","control--warning":"_control--warning_1cxhj_83","control--success":"_control--success_1cxhj_88","control--disabled":"_control--disabled_1cxhj_93",inputRoot:xe,nativeInput:fe,trailingIcon:ge,"trailingIcon--focused":"_trailingIcon--focused_1cxhj_174","trailingIcon--error":"_trailingIcon--error_1cxhj_178","trailingIcon--warning":"_trailingIcon--warning_1cxhj_182","trailingIcon--success":"_trailingIcon--success_1cxhj_186","trailingIcon--disabled":"_trailingIcon--disabled_1cxhj_190",iconSvg:ye,helper:ve,"helper--error":"_helper--error_1cxhj_226","helper--warning":"_helper--warning_1cxhj_230","helper--success":"_helper--success_1cxhj_234"};function be(t){if(!t)return"";const a=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],i=t.split("-");if(i.length!==3)return t;const[r,o,n]=i,c=parseInt(o,10)-1;return c<0||c>11?t:`${n.padStart(2,"0")} / ${a[c]} / ${r}`}function je(t){if(!t)return"";const a=t.split(":");if(a.length<2)return t;let i=parseInt(a[0],10);const r=a[1].padStart(2,"0"),o=(a[2]||"00").substring(0,2).padStart(2,"0"),n=i>=12?"PM":"AM";return i=i%12||12,`${String(i).padStart(2,"0")} : ${r} : ${o} ${n}`}const s=({type:t="date",label:a,value:i="",onChange:r,size:o="default",state:n="default",helperText:c,disabled:p=!1,id:V,name:D,className:_,ariaLabel:S})=>{const I=u.useId(),z=V??I,C=u.useRef(null),[x,F]=u.useState(!1),te=t==="date"?"DD / MMM / YYYY":"00 : 00 : 00 AM",ae=i?x?i:t==="date"?be(i):je(i):"",le=x?t:"text",ie=[d.field,d[`field--${o}`],_].filter(Boolean).join(" "),se=[d.control,d[`control--${o}`],x&&d["control--focused"],n!=="default"&&d[`control--${n}`],p&&d["control--disabled"]].filter(Boolean).join(" "),re=[d.trailingIcon,x&&d["trailingIcon--focused"],n!=="default"&&d[`trailingIcon--${n}`],p&&d["trailingIcon--disabled"]].filter(Boolean).join(" "),ne=t==="date"?pe:oe;return e.jsxs("div",{className:ie,children:[a&&e.jsx("label",{htmlFor:z,className:d.label,children:a}),e.jsxs("div",{className:se,onClick:()=>{var f;p||(f=C.current)==null||f.focus()},children:[e.jsx(ce,{id:z,inputRef:C,value:ae,onChange:f=>r==null?void 0:r(f.target.value),onFocus:()=>F(!0),onBlur:()=>F(!1),placeholder:te,disabled:p,type:le,name:D,inputProps:{"aria-label":S??a,className:d.nativeInput},classes:{root:d.inputRoot,input:d.nativeInput}}),e.jsx("span",{className:re,"aria-hidden":"true",children:e.jsx(ne,{className:d.iconSvg})})]}),c&&e.jsx("span",{className:[d.helper,n!=="default"&&d[`helper--${n}`]].filter(Boolean).join(" "),role:n==="error"?"alert":void 0,children:c})]})};s.__docgenInfo={description:`DateTime — a date or time input built on MUI's \`InputBase\`.

**MUI Foundation**: \`InputBase\` from \`@mui/material\` — the unstyled,
accessible input primitive. All visual treatment is applied via
design-token CSS Modules on top.

**Types**: date | time
**Sizes**: small | default | large
**States**: default | error | warning | success | disabled`,methods:[],displayName:"DateTime",props:{type:{required:!1,tsType:{name:"union",raw:"'date' | 'time'",elements:[{name:"literal",value:"'date'"},{name:"literal",value:"'time'"}]},description:`Whether the field captures a date or a time value.
@default 'date'`,defaultValue:{value:"'date'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the input"},value:{required:!1,tsType:{name:"string"},description:"Current value (controlled) — ISO date string for 'date', HH:mm[:ss] for 'time'",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler — called with the new raw string value"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Visual size of the field.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'warning' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"}]},description:`Validation state — drives border and helper text colour.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper / validation text shown below the field"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables interaction",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTML id (auto-generated when omitted)"},name:{required:!1,tsType:{name:"string"},description:"HTML name attribute"},className:{required:!1,tsType:{name:"string"},description:"Additional class on the root wrapper"},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for the input (used when there is no visible label)"}}};const m=({label:t="Date",value:a="",size:i="default",state:r="default",disabled:o=!1,helperText:n})=>{const[c,p]=Z.useState(a);return e.jsx(s,{type:"date",label:t,value:c,onChange:p,size:i,state:r,disabled:o,helperText:n})},h=({label:t="Time",value:a="",size:i="default",state:r="default",disabled:o=!1})=>{const[n,c]=Z.useState(a);return e.jsx(s,{type:"time",label:t,value:n,onChange:c,size:i,state:r,disabled:o})},ee=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"DateTime",subtitle:"A date or time input field built on MUI InputBase. Supports date and time types with size and validation-state variants."}),e.jsx(l.Section,{title:"MUI Foundation",children:e.jsxs(l.BodyText,{children:["DateTime is built on ",e.jsx("strong",{children:"InputBase"})," from"," ",e.jsx("code",{children:"@mui/material"})," — the unstyled, accessible input primitive. All visual treatment (borders, colours, sizes, icons) is applied through design-token CSS Modules layered on top, keeping full MUI interaction semantics and accessibility."]})}),e.jsxs(l.Section,{title:"Anatomy",children:[e.jsx(l.BodyText,{children:"Each DateTime field is composed of three optional slots:"}),e.jsx(l.BulletList,{items:["Label — displayed above the control, linked via htmlFor.","Control row — the bordered input area containing the text input and the trailing icon (calendar or clock).","Helper text — shown below the control; colour changes to match the validation state."]})]}),e.jsxs(l.Section,{title:"Date Input",children:[e.jsxs(l.BodyText,{children:["When ",e.jsx("code",{children:'type="date"'})," (default), the field shows a calendar icon on the right. The placeholder reads"," ",e.jsx("em",{children:"DD / MMM / YYYY"}),". Once a value is set, it displays in the same human-readable format — e.g. ",e.jsx("em",{children:"01 / JAN / 2000"}),"."]}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:200},children:e.jsx(m,{label:"Date (empty)"})}),e.jsx("div",{style:{width:200},children:e.jsx(m,{label:"Date (filled)",value:"2000-01-01"})})]})]}),e.jsxs(l.Section,{title:"Time Input",children:[e.jsxs(l.BodyText,{children:["When ",e.jsx("code",{children:'type="time"'}),", the field shows a clock icon. The placeholder reads ",e.jsx("em",{children:"00 : 00 : 00 AM"})," and a set value displays as ",e.jsx("em",{children:"08 : 01 : 54 PM"}),"."]}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:200},children:e.jsx(h,{label:"Time (empty)"})}),e.jsx("div",{style:{width:200},children:e.jsx(h,{label:"Time (filled)",value:"20:01:54"})})]})]}),e.jsxs(l.Section,{title:"Sizes",children:[e.jsxs(l.BodyText,{children:["Three sizes are available — ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and ",e.jsx("code",{children:"large"})," — matching the global input sizing scale."]}),e.jsx(l.SizeDemo,{rows:[{label:"Small",sublabel:"32 px — --datetime-height-small",children:e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx("div",{style:{width:200},children:e.jsx(m,{label:"Date",size:"small"})}),e.jsx("div",{style:{width:200},children:e.jsx(h,{label:"Time",size:"small"})})]})},{label:"Default",sublabel:"44 px — --datetime-height-default",children:e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx("div",{style:{width:200},children:e.jsx(m,{label:"Date",size:"default"})}),e.jsx("div",{style:{width:200},children:e.jsx(h,{label:"Time",size:"default"})})]})},{label:"Large",sublabel:"52 px — --datetime-height-large",children:e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx("div",{style:{width:200},children:e.jsx(m,{label:"Date",size:"large"})}),e.jsx("div",{style:{width:200},children:e.jsx(h,{label:"Time",size:"large"})})]})}]})]}),e.jsxs(l.Section,{title:"Validation States",children:[e.jsxs(l.BodyText,{children:["The ",e.jsx("code",{children:"state"})," prop drives the border and helper-text colour. The four states are"," ",e.jsx("code",{children:"default"}),", ",e.jsx("code",{children:"error"}),", ",e.jsx("code",{children:"warning"}),", and"," ",e.jsx("code",{children:"success"}),"."]}),e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:["default","error","warning","success"].map(t=>e.jsx("div",{style:{width:200},children:e.jsx(m,{label:t.charAt(0).toUpperCase()+t.slice(1),state:t,helperText:t!=="default"?`${t} helper text`:void 0})},t))})]}),e.jsxs(l.Section,{title:"Disabled",children:[e.jsxs(l.BodyText,{children:["Set ",e.jsx("code",{children:"disabled"})," to ",e.jsx("code",{children:"true"})," to prevent all interaction. The control background changes to the disabled gray and pointer events are removed."]}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx("div",{style:{width:200},children:e.jsx(m,{label:"Date (disabled)",disabled:!0})}),e.jsx("div",{style:{width:200},children:e.jsx(h,{label:"Time (disabled)",disabled:!0})})]})]}),e.jsxs(l.Section,{title:"Design Tokens",children:[e.jsxs(l.BodyText,{children:["All visual values are controlled through the tokens below. DateTime aliases the ",e.jsx("code",{children:"--simple-field-*"})," token set to stay consistent with the rest of the Input family."]}),e.jsx(l.TokenTable,{tokens:[{name:"--datetime-height-small",description:"Control height — small (32 px via --simple-field-height-small)"},{name:"--datetime-height-default",description:"Control height — default (44 px via --simple-field-height-default)"},{name:"--datetime-height-large",description:"Control height — large (52 px via --simple-field-height-large)"},{name:"--datetime-border-radius",description:"Corner radius (4 px via --global-spacing-radius-4px)"},{name:"--datetime-border-width",description:"Border thickness (0.5 px via --global-spacing-stroke-0-5px)"},{name:"--datetime-border-color",description:"Default border colour (gray-300)"},{name:"--datetime-border-color-focus",description:"Focused border colour (brand primary blue)"},{name:"--datetime-border-color-error",description:"Error state border colour"},{name:"--datetime-border-color-warning",description:"Warning state border colour"},{name:"--datetime-border-color-success",description:"Success state border colour"},{name:"--datetime-bg",description:"Default background (white)"},{name:"--datetime-bg-disabled",description:"Disabled background (gray-100)"},{name:"--datetime-text-color",description:"Input text colour (black)"},{name:"--datetime-placeholder-color",description:"Placeholder text colour (gray-400)"},{name:"--datetime-icon-color",description:"Trailing icon colour (gray-500)"},{name:"--datetime-icon-color-focus",description:"Trailing icon colour when focused (brand primary)"},{name:"--datetime-padding-x-small",description:"Horizontal padding — small (8 px)"},{name:"--datetime-padding-x-default",description:"Horizontal padding — default (12 px)"},{name:"--datetime-padding-x-large",description:"Horizontal padding — large (16 px)"},{name:"--datetime-icon-size-small",description:"Trailing icon size — small (14 px)"},{name:"--datetime-icon-size-default",description:"Trailing icon size — default (16 px)"},{name:"--datetime-icon-size-large",description:"Trailing icon size — large (18 px)"},{name:"--datetime-helper-gap",description:"Gap between control and helper text (4 px)"},{name:"--datetime-helper-color-error",description:"Error helper text colour"},{name:"--datetime-helper-color-warning",description:"Warning helper text colour"},{name:"--datetime-helper-color-success",description:"Success helper text colour"}]})]}),e.jsx(l.Section,{title:"Usage Principles",children:e.jsxs(l.Principles,{children:[e.jsx(l.PrincipleCard,{title:"Use the right type",description:"Use type='date' for calendar dates and type='time' for time-of-day values. Never mix the two roles in a single instance.",type:"do"}),e.jsx(l.PrincipleCard,{title:"Always provide a label",description:"Omitting the label prop removes the visible label. Only do this when an aria-label is provided for screen-reader users.",type:"caution"}),e.jsx(l.PrincipleCard,{title:"Pair with helper text for validation",description:"Use the helperText prop in combination with an error, warning, or success state to communicate validation outcomes clearly.",type:"do"}),e.jsx(l.PrincipleCard,{title:"Do not hard-code colours",description:"Always use the --datetime-* design tokens for any visual overrides. Never hard-code hex values inside component style overrides.",type:"dont"})]})}),e.jsx(l.Footer,{})]});ee.__docgenInfo={description:"",methods:[],displayName:"DateTimeDocs"};const Pe={title:"Atoms/Input/DateTime",component:s,parameters:{layout:"padded"},argTypes:{type:{control:"select",options:["date","time"],description:"Whether the field captures a date or a time value"},size:{control:"select",options:["small","default","large"],description:"Visual size of the field"},state:{control:"select",options:["default","error","warning","success"],description:"Validation / semantic state"},disabled:{control:"boolean",description:"Disable the field"},label:{control:"text",description:"Label displayed above the field"},helperText:{control:"text",description:"Helper / validation message shown below"}},args:{type:"date",size:"default",state:"default",disabled:!1,label:"Date"}},g={name:"Documentation",render:()=>e.jsx(ee,{}),parameters:{controls:{disable:!0}}},y={name:"Playground",render:t=>{const[a,i]=u.useState("");return e.jsx("div",{style:{maxWidth:320},children:e.jsx(s,{...t,value:a,onChange:i})})}},v={name:"Default",render:()=>e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:200},children:e.jsx(s,{type:"date",label:"Date"})}),e.jsx("div",{style:{width:200},children:e.jsx(s,{type:"time",label:"Time"})})]}),parameters:{controls:{disable:!0}}},b={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:480},children:["small","default","large"].map(t=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:[e.jsx("div",{style:{width:200},children:e.jsx(s,{type:"date",label:`Date — ${t}`,size:t})}),e.jsx("div",{style:{width:200},children:e.jsx(s,{type:"time",label:`Time — ${t}`,size:t})})]},t))}),parameters:{controls:{disable:!0}}},j={name:"States",render:()=>{const t=({state:a})=>{const[i,r]=u.useState("2000-01-01"),[o,n]=u.useState("20:01:54"),c=a.charAt(0).toUpperCase()+a.slice(1),p=a!=="default"?`${c} — helper text`:void 0;return e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:[e.jsx("div",{style:{width:220},children:e.jsx(s,{type:"date",label:`Date — ${c}`,value:i,onChange:r,state:a,helperText:p})}),e.jsx("div",{style:{width:220},children:e.jsx(s,{type:"time",label:`Time — ${c}`,value:o,onChange:n,state:a,helperText:p})})]})};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(t,{state:"default"}),e.jsx(t,{state:"error"}),e.jsx(t,{state:"warning"}),e.jsx(t,{state:"success"})]})},parameters:{controls:{disable:!0}}},w={name:"All Input States",render:()=>{const t=({type:a})=>{const r=`${a==="date"?"Date":"Time"}`,o=a==="date"?"2000-01-01":"20:01:54",[n,c]=u.useState(!1),[p,V]=u.useState(!1),[D,_]=u.useState(o),[S,I]=u.useState(o);return e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:180},children:e.jsx(s,{type:a,label:r})}),e.jsx("div",{style:{width:180},children:e.jsx(s,{type:a,label:r,value:D,onChange:_})}),e.jsx("div",{style:{width:180},children:e.jsx(s,{type:a,label:r})}),e.jsx("div",{style:{width:180},children:e.jsx(s,{type:a,label:r,value:S,onChange:I})})]})};return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:["small","default","large"].map(a=>e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:8,fontWeight:500,fontSize:12,color:"#6d7280",textTransform:"uppercase",letterSpacing:"0.05em"},children:["Size: ",a]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(t,{type:"date"}),e.jsx(t,{type:"time"})]})]},a))})},parameters:{controls:{disable:!0}}},T={name:"Disabled",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:200},children:e.jsx(s,{type:"date",label:"Date (disabled)",disabled:!0})}),e.jsx("div",{style:{width:200},children:e.jsx(s,{type:"date",label:"Date filled (disabled)",value:"2000-01-01",disabled:!0})}),e.jsx("div",{style:{width:200},children:e.jsx(s,{type:"time",label:"Time (disabled)",disabled:!0})}),e.jsx("div",{style:{width:200},children:e.jsx(s,{type:"time",label:"Time filled (disabled)",value:"20:01:54",disabled:!0})})]}),parameters:{controls:{disable:!0}}};var A,$,B;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <DateTimeDocs />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=($=g.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var M,W,k;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const [val, setVal] = useState('');
    return <div style={{
      maxWidth: 320
    }}>
        <DateTime {...args} value={val} onChange={setVal} />
      </div>;
  }
}`,...(k=(W=y.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var R,P,N;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  }}>
      <div style={{
      width: 200
    }}>
        <DateTime type="date" label="Date" />
      </div>
      <div style={{
      width: 200
    }}>
        <DateTime type="time" label="Time" />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(P=v.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var E,H,L;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 480
  }}>
      {(['small', 'default', 'large'] as const).map(size => <div key={size} style={{
      display: 'flex',
      gap: 16,
      alignItems: 'flex-end'
    }}>
          <div style={{
        width: 200
      }}>
            <DateTime type="date" label={\`Date — \${size}\`} size={size} />
          </div>
          <div style={{
        width: 200
      }}>
            <DateTime type="time" label={\`Time — \${size}\`} size={size} />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(L=(H=b.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var U,q,Y;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'States',
  render: () => {
    const StateRow: React.FC<{
      state: 'default' | 'error' | 'warning' | 'success';
    }> = ({
      state
    }) => {
      const [dateVal, setDateVal] = useState('2000-01-01');
      const [timeVal, setTimeVal] = useState('20:01:54');
      const label = state.charAt(0).toUpperCase() + state.slice(1);
      const helper = state !== 'default' ? \`\${label} — helper text\` : undefined;
      return <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'flex-end'
      }}>
          <div style={{
          width: 220
        }}>
            <DateTime type="date" label={\`Date — \${label}\`} value={dateVal} onChange={setDateVal} state={state} helperText={helper} />
          </div>
          <div style={{
          width: 220
        }}>
            <DateTime type="time" label={\`Time — \${label}\`} value={timeVal} onChange={setTimeVal} state={state} helperText={helper} />
          </div>
        </div>;
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <StateRow state="default" />
        <StateRow state="error" />
        <StateRow state="warning" />
        <StateRow state="success" />
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(q=j.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var O,G,J;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'All Input States',
  render: () => {
    const Grid: React.FC<{
      type: 'date' | 'time';
    }> = ({
      type
    }) => {
      const label = type === 'date' ? 'Date' : 'Time';
      const emptyLabel = \`\${label}\`;
      const filledValue = type === 'date' ? '2000-01-01' : '20:01:54';
      const [emptyFocused, setEmptyFocused] = useState(false);
      const [filledFocused, setFilledFocused] = useState(false);
      const [filled, setFilled] = useState(filledValue);
      const [filledFocusedVal, setFilledFocusedVal] = useState(filledValue);
      return <div style={{
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap',
        alignItems: 'flex-end'
      }}>
          {/* Empty default */}
          <div style={{
          width: 180
        }}>
            <DateTime type={type} label={emptyLabel} />
          </div>
          {/* Filled */}
          <div style={{
          width: 180
        }}>
            <DateTime type={type} label={emptyLabel} value={filled} onChange={setFilled} />
          </div>
          {/* Empty focused — simulated via state prop */}
          <div style={{
          width: 180
        }}>
            <DateTime type={type} label={emptyLabel} />
          </div>
          {/* Filled */}
          <div style={{
          width: 180
        }}>
            <DateTime type={type} label={emptyLabel} value={filledFocusedVal} onChange={setFilledFocusedVal} />
          </div>
        </div>;
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }}>
        {(['small', 'default', 'large'] as const).map(size => <div key={size}>
            <p style={{
          marginBottom: 8,
          fontWeight: 500,
          fontSize: 12,
          color: '#6d7280',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
              Size: {size}
            </p>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
              <Grid type="date" />
              <Grid type="time" />
            </div>
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(G=w.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  }}>
      <div style={{
      width: 200
    }}>
        <DateTime type="date" label="Date (disabled)" disabled />
      </div>
      <div style={{
      width: 200
    }}>
        <DateTime type="date" label="Date filled (disabled)" value="2000-01-01" disabled />
      </div>
      <div style={{
      width: 200
    }}>
        <DateTime type="time" label="Time (disabled)" disabled />
      </div>
      <div style={{
      width: 200
    }}>
        <DateTime type="time" label="Time filled (disabled)" value="20:01:54" disabled />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ne=["Documentation","Playground","Default","Sizes","States","AllInputStates","Disabled"];export{w as AllInputStates,v as Default,T as Disabled,g as Documentation,y as Playground,b as Sizes,j as States,Ne as __namedExportsOrder,Pe as default};
