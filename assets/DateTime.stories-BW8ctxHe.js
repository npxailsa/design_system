import{j as e,r as m,R as ee}from"./iframe-C-rm1-E5.js";import{c as ce}from"./createSvgIcon-DMOSo898.js";import{A as pe}from"./AccessTime-BNh_jKF3.js";import{G as me}from"./GhostButton-BLvwjaDY.js";import{I as ue}from"./InputBase-Cw90WUbh.js";import{D as i}from"./DocsTemplate-Ivs1_-l2.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-9-Q5T7ov.js";import"./memoTheme-7s0Cz3mE.js";import"./ButtonBase-CUGVCEDP.js";import"./index-C3JqZ0T1.js";import"./emotion-react.browser.esm-CDInP4iC.js";import"./useForkRef-D9HkuRNP.js";import"./useEventCallback-DcY1CYNH.js";import"./isFocusVisible-B8k4qzLc.js";import"./useFormControl-Bvbd7s_s.js";import"./index-Dkol1RXq.js";import"./useTheme-Ce-DSjxK.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isHostComponent-DVu5iVWx.js";const he=ce(e.jsx("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V8h16z"})),fe="_field_1kvh6_8",xe="_label_1kvh6_24",ge="_control_1kvh6_38",ve="_inputRoot_1kvh6_102",ye="_nativeInput_1kvh6_111",be="_ampmSlot_1kvh6_164",je="_ampmBtn_1kvh6_174",we="_trailingIcon_1kvh6_192",Te="_iconSvg_1kvh6_222",De="_helper_1kvh6_247",r={field:fe,"field--small":"_field--small_1kvh6_18","field--default":"_field--default_1kvh6_19","field--large":"_field--large_1kvh6_20",label:xe,control:ge,"control--small":"_control--small_1kvh6_53","control--default":"_control--default_1kvh6_59","control--large":"_control--large_1kvh6_65","control--focused":"_control--focused_1kvh6_72","control--error":"_control--error_1kvh6_78","control--warning":"_control--warning_1kvh6_83","control--success":"_control--success_1kvh6_88","control--disabled":"_control--disabled_1kvh6_93",inputRoot:ve,nativeInput:ye,ampmSlot:be,ampmBtn:je,trailingIcon:we,"trailingIcon--focused":"_trailingIcon--focused_1kvh6_202","trailingIcon--error":"_trailingIcon--error_1kvh6_206","trailingIcon--warning":"_trailingIcon--warning_1kvh6_210","trailingIcon--success":"_trailingIcon--success_1kvh6_214","trailingIcon--disabled":"_trailingIcon--disabled_1kvh6_218",iconSvg:Te,helper:De,"helper--error":"_helper--error_1kvh6_254","helper--warning":"_helper--warning_1kvh6_258","helper--success":"_helper--success_1kvh6_262"},Se=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function _e(t){if(!t)return"";const a=t.split("-");if(a.length!==3)return t;const[s,l,o]=a,d=parseInt(l,10)-1;return d<0||d>11?t:`${o.padStart(2,"0")} / ${Se[d]} / ${s}`}function Ie(t){if(!t)return"";const a=t.split(":");if(a.length<2)return t;let s=parseInt(a[0],10);const l=a[1].padStart(2,"0"),o=(a[2]||"00").substring(0,2).padStart(2,"0");return s=s%12||12,`${String(s).padStart(2,"0")} : ${l} : ${o}`}function ke(t){return t&&parseInt(t.split(":")[0],10)>=12?"PM":"AM"}function Me(t,a){if(!t)return t;const s=t.split(":");let l=parseInt(s[0],10);return a==="AM"?l=(l+12)%24:(l=l-12,l<0&&(l=0)),s[0]=String(l).padStart(2,"0"),s.join(":")}const n=({type:t="date",label:a,value:s="",onChange:l,size:o="default",state:d="default",helperText:p,disabled:c=!1,id:M,name:D,className:S,ariaLabel:_})=>{const I=m.useId(),V=M??I,z=m.useRef(null),[x,F]=m.useState(!1),k=ke(s),ae=t==="date"?"DD / MMM / YYYY":"HH : MM : SS",le=s?x?s:t==="date"?_e(s):Ie(s):"",ie=x?t:"text",se=u=>{u.stopPropagation(),!c&&s&&(l==null||l(Me(s,k)))},re=[r.field,r[`field--${o}`],S].filter(Boolean).join(" "),ne=[r.control,r[`control--${o}`],x&&r["control--focused"],d!=="default"&&r[`control--${d}`],c&&r["control--disabled"],t==="time"&&r["control--time"]].filter(Boolean).join(" "),de=[r.trailingIcon,x&&r["trailingIcon--focused"],d!=="default"&&r[`trailingIcon--${d}`],c&&r["trailingIcon--disabled"]].filter(Boolean).join(" "),oe=t==="date"?he:pe;return e.jsxs("div",{className:re,children:[a&&e.jsx("label",{htmlFor:V,className:r.label,children:a}),e.jsxs("div",{className:ne,onClick:()=>{var u;c||(u=z.current)==null||u.focus()},children:[e.jsx(ue,{id:V,inputRef:z,value:le,onChange:u=>l==null?void 0:l(u.target.value),onFocus:()=>F(!0),onBlur:()=>F(!1),placeholder:ae,disabled:c,type:ie,name:D,inputProps:{"aria-label":_??a,className:r.nativeInput},classes:{root:r.inputRoot,input:r.nativeInput}}),t==="time"&&e.jsx("span",{className:r.ampmSlot,onClick:u=>u.stopPropagation(),children:e.jsx(me,{label:k,size:"extra-small",variant:"ghost",disabled:c,onClick:se,ariaLabel:`Switch to ${k==="AM"?"PM":"AM"}`,className:r.ampmBtn})}),e.jsx("span",{className:de,"aria-hidden":"true",children:e.jsx(oe,{className:r.iconSvg})})]}),p&&e.jsx("span",{className:[r.helper,d!=="default"&&r[`helper--${d}`]].filter(Boolean).join(" "),role:d==="error"?"alert":void 0,children:p})]})};n.__docgenInfo={description:`DateTime — a date or time input built on MUI's \`InputBase\`.

**MUI Foundation**: \`InputBase\` from \`@mui/material\` — the unstyled,
accessible input primitive. All visual treatment is applied via
design-token CSS Modules on top.

**Date format**: DD / MMM / YYYY (e.g. 01 / JAN / 2001)
**Time format**: HH : MM : SS with a separate AM/PM ghost button toggle

**Types**: date | time
**Sizes**: small | default | large
**States**: default | error | warning | success | disabled`,methods:[],displayName:"DateTime",props:{type:{required:!1,tsType:{name:"union",raw:"'date' | 'time'",elements:[{name:"literal",value:"'date'"},{name:"literal",value:"'time'"}]},description:`Whether the field captures a date or a time value.
@default 'date'`,defaultValue:{value:"'date'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the input"},value:{required:!1,tsType:{name:"string"},description:"Current value (controlled).\n- Date: ISO date string `YYYY-MM-DD`\n- Time: 24-hour string `HH:mm` or `HH:mm:ss`",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler — called with the new raw string value"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Visual size of the field.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'warning' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"}]},description:`Validation state — drives border and helper text colour.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper / validation text shown below the field"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables interaction",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTML id (auto-generated when omitted)"},name:{required:!1,tsType:{name:"string"},description:"HTML name attribute"},className:{required:!1,tsType:{name:"string"},description:"Additional class on the root wrapper"},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for the input (used when there is no visible label)"}}};const h=({label:t="Date",value:a="",size:s="default",state:l="default",disabled:o=!1,helperText:d})=>{const[p,c]=ee.useState(a);return e.jsx(n,{type:"date",label:t,value:p,onChange:c,size:s,state:l,disabled:o,helperText:d})},f=({label:t="Time",value:a="",size:s="default",state:l="default",disabled:o=!1})=>{const[d,p]=ee.useState(a);return e.jsx(n,{type:"time",label:t,value:d,onChange:p,size:s,state:l,disabled:o})},te=()=>e.jsxs(i,{children:[e.jsx(i.Header,{title:"DateTime",subtitle:"A date or time input field built on MUI InputBase. Supports date and time types with size and validation-state variants."}),e.jsx(i.Section,{title:"MUI Foundation",children:e.jsxs(i.BodyText,{children:["DateTime is built on ",e.jsx("strong",{children:"InputBase"})," from"," ",e.jsx("code",{children:"@mui/material"})," — the unstyled, accessible input primitive. All visual treatment (borders, colours, sizes, icons) is applied through design-token CSS Modules layered on top, keeping full MUI interaction semantics and accessibility."]})}),e.jsxs(i.Section,{title:"Anatomy",children:[e.jsx(i.BodyText,{children:"Each DateTime field is composed of three optional slots:"}),e.jsx(i.BulletList,{items:["Label — displayed above the control, linked via htmlFor.","Control row — the bordered input area containing the text input and the trailing icon (calendar or clock).","Helper text — shown below the control; colour changes to match the validation state."]})]}),e.jsxs(i.Section,{title:"Date Input",children:[e.jsxs(i.BodyText,{children:["When ",e.jsx("code",{children:'type="date"'})," (default), the field shows a calendar icon on the right. The placeholder reads"," ",e.jsx("em",{children:"DD / MMM / YYYY"}),". Once a value is set, it displays in the same human-readable format — e.g. ",e.jsx("em",{children:"01 / JAN / 2000"}),"."]}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:200},children:e.jsx(h,{label:"Date (empty)"})}),e.jsx("div",{style:{width:200},children:e.jsx(h,{label:"Date (filled)",value:"2000-01-01"})})]})]}),e.jsxs(i.Section,{title:"Time Input",children:[e.jsxs(i.BodyText,{children:["When ",e.jsx("code",{children:'type="time"'}),", the field shows a clock icon and an extra-small AM/PM ghost button toggle. The input placeholder reads"," ",e.jsx("em",{children:"HH : MM : SS"})," and a set value displays in 12-hour format — e.g. ",e.jsx("em",{children:"08 : 01 : 54"})," with the AM/PM button showing the current period. Clicking the button flips between AM and PM."]}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:240},children:e.jsx(f,{label:"Time (empty)"})}),e.jsx("div",{style:{width:240},children:e.jsx(f,{label:"Time (filled)",value:"20:01:54"})})]})]}),e.jsxs(i.Section,{title:"Sizes",children:[e.jsxs(i.BodyText,{children:["Three sizes are available — ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and ",e.jsx("code",{children:"large"})," — matching the global input sizing scale."]}),e.jsx(i.SizeDemo,{rows:[{label:"Small",sublabel:"32 px — --datetime-height-small",children:e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx("div",{style:{width:200},children:e.jsx(h,{label:"Date",size:"small"})}),e.jsx("div",{style:{width:200},children:e.jsx(f,{label:"Time",size:"small"})})]})},{label:"Default",sublabel:"44 px — --datetime-height-default",children:e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx("div",{style:{width:200},children:e.jsx(h,{label:"Date",size:"default"})}),e.jsx("div",{style:{width:200},children:e.jsx(f,{label:"Time",size:"default"})})]})},{label:"Large",sublabel:"52 px — --datetime-height-large",children:e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx("div",{style:{width:200},children:e.jsx(h,{label:"Date",size:"large"})}),e.jsx("div",{style:{width:200},children:e.jsx(f,{label:"Time",size:"large"})})]})}]})]}),e.jsxs(i.Section,{title:"Validation States",children:[e.jsxs(i.BodyText,{children:["The ",e.jsx("code",{children:"state"})," prop drives the border and helper-text colour. The four states are"," ",e.jsx("code",{children:"default"}),", ",e.jsx("code",{children:"error"}),", ",e.jsx("code",{children:"warning"}),", and"," ",e.jsx("code",{children:"success"}),"."]}),e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:["default","error","warning","success"].map(t=>e.jsx("div",{style:{width:200},children:e.jsx(h,{label:t.charAt(0).toUpperCase()+t.slice(1),state:t,helperText:t!=="default"?`${t} helper text`:void 0})},t))})]}),e.jsxs(i.Section,{title:"Disabled",children:[e.jsxs(i.BodyText,{children:["Set ",e.jsx("code",{children:"disabled"})," to ",e.jsx("code",{children:"true"})," to prevent all interaction. The control background changes to the disabled gray and pointer events are removed."]}),e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:[e.jsx("div",{style:{width:200},children:e.jsx(h,{label:"Date (disabled)",disabled:!0})}),e.jsx("div",{style:{width:200},children:e.jsx(f,{label:"Time (disabled)",disabled:!0})})]})]}),e.jsxs(i.Section,{title:"Design Tokens",children:[e.jsxs(i.BodyText,{children:["All visual values are controlled through the tokens below. DateTime aliases the ",e.jsx("code",{children:"--simple-field-*"})," token set to stay consistent with the rest of the Input family."]}),e.jsx(i.TokenTable,{tokens:[{name:"--datetime-height-small",description:"Control height — small (32 px via --simple-field-height-small)"},{name:"--datetime-height-default",description:"Control height — default (44 px via --simple-field-height-default)"},{name:"--datetime-height-large",description:"Control height — large (52 px via --simple-field-height-large)"},{name:"--datetime-border-radius",description:"Corner radius (4 px via --global-spacing-radius-4px)"},{name:"--datetime-border-width",description:"Border thickness (0.5 px via --global-spacing-stroke-0-5px)"},{name:"--datetime-border-color",description:"Default border colour (gray-300)"},{name:"--datetime-border-color-focus",description:"Focused border colour (brand primary blue)"},{name:"--datetime-border-color-error",description:"Error state border colour"},{name:"--datetime-border-color-warning",description:"Warning state border colour"},{name:"--datetime-border-color-success",description:"Success state border colour"},{name:"--datetime-bg",description:"Default background (white)"},{name:"--datetime-bg-disabled",description:"Disabled background (gray-100)"},{name:"--datetime-text-color",description:"Input text colour (black)"},{name:"--datetime-placeholder-color",description:"Placeholder text colour (gray-400)"},{name:"--datetime-icon-color",description:"Trailing icon colour (gray-500)"},{name:"--datetime-icon-color-focus",description:"Trailing icon colour when focused (brand primary)"},{name:"--datetime-padding-x-small",description:"Horizontal padding — small (8 px)"},{name:"--datetime-padding-x-default",description:"Horizontal padding — default (12 px)"},{name:"--datetime-padding-x-large",description:"Horizontal padding — large (16 px)"},{name:"--datetime-icon-size-small",description:"Trailing icon size — small (14 px)"},{name:"--datetime-icon-size-default",description:"Trailing icon size — default (16 px)"},{name:"--datetime-icon-size-large",description:"Trailing icon size — large (18 px)"},{name:"--datetime-helper-gap",description:"Gap between control and helper text (4 px)"},{name:"--datetime-helper-color-error",description:"Error helper text colour"},{name:"--datetime-helper-color-warning",description:"Warning helper text colour"},{name:"--datetime-helper-color-success",description:"Success helper text colour"}]})]}),e.jsx(i.Section,{title:"Usage Principles",children:e.jsxs(i.Principles,{children:[e.jsx(i.PrincipleCard,{title:"Use the right type",description:"Use type='date' for calendar dates and type='time' for time-of-day values. Never mix the two roles in a single instance.",type:"do"}),e.jsx(i.PrincipleCard,{title:"Always provide a label",description:"Omitting the label prop removes the visible label. Only do this when an aria-label is provided for screen-reader users.",type:"caution"}),e.jsx(i.PrincipleCard,{title:"Pair with helper text for validation",description:"Use the helperText prop in combination with an error, warning, or success state to communicate validation outcomes clearly.",type:"do"}),e.jsx(i.PrincipleCard,{title:"Do not hard-code colours",description:"Always use the --datetime-* design tokens for any visual overrides. Never hard-code hex values inside component style overrides.",type:"dont"})]})}),e.jsx(i.Footer,{})]});te.__docgenInfo={description:"",methods:[],displayName:"DateTimeDocs"};const Qe={title:"Atoms/Input/DateTime",component:n,parameters:{layout:"padded"},argTypes:{type:{control:"select",options:["date","time"],description:"Whether the field captures a date or a time value"},size:{control:"select",options:["small","default","large"],description:"Visual size of the field"},state:{control:"select",options:["default","error","warning","success"],description:"Validation / semantic state"},disabled:{control:"boolean",description:"Disable the field"},label:{control:"text",description:"Label displayed above the field"},helperText:{control:"text",description:"Helper / validation message shown below"}},args:{type:"date",size:"default",state:"default",disabled:!1,label:"Date"}},g={name:"Documentation",render:()=>e.jsx(te,{}),parameters:{controls:{disable:!0}}},v={name:"Playground",render:t=>{const[a,s]=m.useState("");return e.jsx("div",{style:{maxWidth:320},children:e.jsx(n,{...t,value:a,onChange:s})})}},y={name:"Default",render:()=>e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:200},children:e.jsx(n,{type:"date",label:"Date"})}),e.jsx("div",{style:{width:200},children:e.jsx(n,{type:"time",label:"Time"})})]}),parameters:{controls:{disable:!0}}},b={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:480},children:["small","default","large"].map(t=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:[e.jsx("div",{style:{width:200},children:e.jsx(n,{type:"date",label:`Date — ${t}`,size:t})}),e.jsx("div",{style:{width:200},children:e.jsx(n,{type:"time",label:`Time — ${t}`,size:t})})]},t))}),parameters:{controls:{disable:!0}}},j={name:"States",render:()=>{const t=({state:a})=>{const[s,l]=m.useState("2000-01-01"),[o,d]=m.useState("20:01:54"),p=a.charAt(0).toUpperCase()+a.slice(1),c=a!=="default"?`${p} — helper text`:void 0;return e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:[e.jsx("div",{style:{width:220},children:e.jsx(n,{type:"date",label:`Date — ${p}`,value:s,onChange:l,state:a,helperText:c})}),e.jsx("div",{style:{width:220},children:e.jsx(n,{type:"time",label:`Time — ${p}`,value:o,onChange:d,state:a,helperText:c})})]})};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx(t,{state:"default"}),e.jsx(t,{state:"error"}),e.jsx(t,{state:"warning"}),e.jsx(t,{state:"success"})]})},parameters:{controls:{disable:!0}}},w={name:"All Input States",render:()=>{const t=({type:a})=>{const l=`${a==="date"?"Date":"Time"}`,o=a==="date"?"2000-01-01":"20:01:54",[d,p]=m.useState(!1),[c,M]=m.useState(!1),[D,S]=m.useState(o),[_,I]=m.useState(o);return e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:180},children:e.jsx(n,{type:a,label:l})}),e.jsx("div",{style:{width:180},children:e.jsx(n,{type:a,label:l,value:D,onChange:S})}),e.jsx("div",{style:{width:180},children:e.jsx(n,{type:a,label:l})}),e.jsx("div",{style:{width:180},children:e.jsx(n,{type:a,label:l,value:_,onChange:I})})]})};return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:["small","default","large"].map(a=>e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:8,fontWeight:500,fontSize:12,color:"#6d7280",textTransform:"uppercase",letterSpacing:"0.05em"},children:["Size: ",a]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(t,{type:"date"}),e.jsx(t,{type:"time"})]})]},a))})},parameters:{controls:{disable:!0}}},T={name:"Disabled",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:200},children:e.jsx(n,{type:"date",label:"Date (disabled)",disabled:!0})}),e.jsx("div",{style:{width:200},children:e.jsx(n,{type:"date",label:"Date filled (disabled)",value:"2000-01-01",disabled:!0})}),e.jsx("div",{style:{width:200},children:e.jsx(n,{type:"time",label:"Time (disabled)",disabled:!0})}),e.jsx("div",{style:{width:200},children:e.jsx(n,{type:"time",label:"Time filled (disabled)",value:"20:01:54",disabled:!0})})]}),parameters:{controls:{disable:!0}}};var A,C,B;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <DateTimeDocs />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(C=g.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var P,$,H;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const [val, setVal] = useState('');
    return <div style={{
      maxWidth: 320
    }}>
        <DateTime {...args} value={val} onChange={setVal} />
      </div>;
  }
}`,...(H=($=v.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var W,N,R;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(R=(N=y.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var Y,L,E;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(E=(L=b.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var U,q,G;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(q=j.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var O,J,K;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Z;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const Xe=["Documentation","Playground","Default","Sizes","States","AllInputStates","Disabled"];export{w as AllInputStates,y as Default,T as Disabled,g as Documentation,v as Playground,b as Sizes,j as States,Xe as __namedExportsOrder,Qe as default};
