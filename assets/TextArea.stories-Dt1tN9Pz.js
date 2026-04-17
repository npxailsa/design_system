import{r as d,j as e}from"./iframe-DRIQLXCv.js";import{C as Ye}from"./Close-NvRlBU_U.js";import{I as Je}from"./InputBase-D5XMlyrW.js";import{D as a}from"./DocsTemplate-BEfgln9S.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-B4IhwgPi.js";import"./DefaultPropsProvider-BZe6dggl.js";import"./memoTheme-Cr_BVE8a.js";import"./useFormControl-j7tHs2dV.js";import"./index-7la041_k.js";import"./useTheme-Bdtw-0G3.js";import"./emotion-react.browser.esm-CBFysbcg.js";import"./useForkRef-CvFXjQAB.js";import"./useEventCallback-tUyuTj1r.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isHostComponent-DVu5iVWx.js";const Ke="_field_180ia_8",Qe="_label_180ia_17",Xe="_control_180ia_29",Ze="_inputRoot_180ia_93",ea="_nativeTextarea_180ia_100",aa="_resizeGrip_180ia_157",ta="_resizeIcon_180ia_180",ra="_clearBtn_180ia_192",la="_clearIcon_180ia_214",ia="_helper_180ia_221",r={field:Ke,label:Qe,control:Xe,"control--small":"_control--small_180ia_50","control--default":"_control--default_180ia_53","control--large":"_control--large_180ia_56","control--error":"_control--error_180ia_61","control--warning":"_control--warning_180ia_69","control--success":"_control--success_180ia_77","control--disabled":"_control--disabled_180ia_85",inputRoot:Ze,nativeTextarea:ea,"field--disabled":"_field--disabled_180ia_120","field--small":"_field--small_180ia_126","field--default":"_field--default_180ia_132","field--large":"_field--large_180ia_138",resizeGrip:aa,resizeIcon:ta,clearBtn:ra,clearIcon:la,helper:ia,"helper--error":"_helper--error_180ia_229","helper--warning":"_helper--warning_180ia_230","helper--success":"_helper--success_180ia_231"},o=({label:i,placeholder:h,value:s="",onChange:t,size:m="default",state:c="default",helperText:x,clearable:C=!1,onClear:g,disabled:p=!1,minRows:ke=3,maxRows:Be,resizable:Ee=!0,id:Re,name:Le,className:Me,ariaLabel:Fe})=>{const He=d.useId(),k=Re??He,B=d.useRef(null),E=d.useRef(null),D={small:80,default:104,large:132}[m],[P,Ne]=d.useState(null),b=d.useRef(null),qe=d.useCallback(n=>{var A;if(p)return;n.preventDefault(),n.currentTarget.setPointerCapture(n.pointerId);const W=((A=E.current)==null?void 0:A.getBoundingClientRect().height)??D;b.current={y:n.clientY,h:W}},[p,D]),Ve=d.useCallback(n=>{if(!b.current)return;const W=n.clientY-b.current.y,A=Math.max(D,b.current.h+W);Ne(A)},[D]),Ue=d.useCallback(()=>{b.current=null},[]),Ge=C&&!p&&s.length>0,Oe=[r.field,r[`field--${m}`],r[`field--${c}`],p&&r["field--disabled"],Me].filter(Boolean).join(" "),$e=[r.control,r[`control--${m}`],r[`control--${c}`],p&&r["control--disabled"]].filter(Boolean).join(" ");return e.jsxs("div",{className:Oe,children:[i&&e.jsx("label",{htmlFor:k,className:r.label,children:i}),e.jsxs("div",{ref:E,className:$e,style:P!==null?{height:P,minHeight:P}:void 0,onClick:()=>{var n;p||(n=B.current)==null||n.focus()},children:[e.jsx(Je,{id:k,inputRef:B,value:s,onChange:t,placeholder:h,disabled:p,multiline:!0,minRows:ke,maxRows:Be,name:Le,inputProps:{"aria-label":Fe,className:r.nativeTextarea,style:{resize:"none",height:P!==null?"100%":void 0}},classes:{root:r.inputRoot,input:r.nativeTextarea}}),Ee&&!p&&e.jsx("span",{className:r.resizeGrip,"aria-hidden":"true",onPointerDown:qe,onPointerMove:Ve,onPointerUp:Ue,children:e.jsxs("svg",{className:r.resizeIcon,viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("line",{x1:"2",y1:"9",x2:"9",y2:"2",strokeLinecap:"round"}),e.jsx("line",{x1:"5",y1:"9",x2:"9",y2:"5",strokeLinecap:"round"})]})}),Ge&&e.jsx("button",{type:"button",className:r.clearBtn,onClick:n=>{n.stopPropagation(),g==null||g()},"aria-label":"Clear text area",tabIndex:-1,children:e.jsx(Ye,{className:r.clearIcon})})]}),x&&e.jsx("span",{className:[r.helper,c!=="default"&&r[`helper--${c}`]].filter(Boolean).join(" "),role:c==="error"?"alert":void 0,children:x})]})};o.__docgenInfo={description:`TextArea — a multi-line text input built on MUI's \`InputBase\`.

**MUI Foundation**: \`InputBase\` (multiline) from \`@mui/material\`.
Provides accessible, form-integrated multi-line input with automatic
height expansion via \`minRows\` / \`maxRows\`.

**Sizes**: small | default | large
**States**: default | error | warning | success | disabled

All visual treatment is applied through design-token CSS Modules —
no hardcoded values. Tokens are prefixed with \`--textarea-*\`.

**Resize**: a custom two-line grip is pinned to the bottom-right corner.
Dragging it adjusts the control height via pointer-capture events.`,methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"Field label displayed above the textarea"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text shown when the field is empty"},value:{required:!1,tsType:{name:"string"},description:"Current value (controlled)",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Visual size of the field.
Controls minimum height and typography scale.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'warning' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"}]},description:`Validation / semantic state — drives border and helper text colour.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper / validation text rendered below the control"},clearable:{required:!1,tsType:{name:"boolean"},description:`Show a clear (×) button in the top-right corner when the field has a value.
@default false`,defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the clear button is clicked"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the field",defaultValue:{value:"false",computed:!1}},minRows:{required:!1,tsType:{name:"number"},description:`Minimum number of visible text rows.
Combines with the size token to set a minimum height.
The textarea grows beyond this as the user types (autosize behaviour).
@default 3`,defaultValue:{value:"3",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:`Maximum number of rows before a vertical scrollbar appears.
When omitted the textarea grows without bound.`},resizable:{required:!1,tsType:{name:"boolean"},description:`Whether the user can drag the resize grip to change the textarea height.
Disable this when the textarea is used in a fixed-height container.
@default true`,defaultValue:{value:"true",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTML id — auto-generated if omitted"},name:{required:!1,tsType:{name:"string"},description:"HTML name attribute"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the root wrapper"},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for the textarea (use when there is no visible label)"}}};const u=({label:i="Input name",state:h="default",helperText:s,size:t="default",placeholder:m="Placeholder text",disabled:c=!1})=>{const[x,C]=d.useState("");return e.jsx(o,{label:i,placeholder:m,value:x,onChange:g=>C(g.target.value),onClear:()=>C(""),clearable:!0,size:t,state:h,helperText:s,disabled:c})},We=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Text Area",subtitle:"A multi-line text input for capturing longer user-supplied content — labels, placeholder, validation states, and a clearable mode"}),e.jsxs(a.BodyText,{children:["The ",e.jsx("strong",{children:"TextArea"})," component is the multi-line counterpart to"," ",e.jsx("strong",{children:"SimpleField"}),". It supports three sizes, four visual states (default, error, warning, success), an optional clear button, and automatic height expansion via ",e.jsx("code",{children:"minRows"})," / ",e.jsx("code",{children:"maxRows"}),". All styling is driven exclusively from the ",e.jsx("code",{children:"--textarea-*"})," token set — no hardcoded values."]}),e.jsxs(a.Section,{title:"MUI Foundation",children:[e.jsxs(a.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"InputBase"})," with ",e.jsx("code",{children:"multiline"})," from"," ",e.jsx("code",{children:"@mui/material"}),". In multiline mode, ",e.jsx("code",{children:"InputBase"})," renders an accessible native ",e.jsx("code",{children:"<textarea>"})," with automatic row expansion, keyboard navigation, and full form integration. All visual properties are applied through ",e.jsx("code",{children:"TextArea.module.css"})," using design tokens."]}),e.jsx(a.CodeBlock,{children:`// MUI base import
import InputBase from '@mui/material/InputBase';

// Design system wrapper
import { TextArea } from './TextArea';`})]}),e.jsxs(a.Section,{title:"Component Anatomy",children:[e.jsx(a.BodyText,{children:"Each TextArea is composed of three optional layers stacked vertically — a label, the textarea control (with optional clear button), and a helper text line."}),e.jsx(a.Anatomy,{preview:e.jsx("div",{style:{maxWidth:280},children:e.jsx(o,{label:"Input name",placeholder:"Placeholder text",clearable:!0})}),parts:[{id:1,name:"Label",token:"--textarea-label-font, --textarea-label-size",description:"Short descriptor above the control. F37 Ginger Pro, 12 px, weight 400."},{id:2,name:"Textarea area",token:"--textarea-input-font, --textarea-input-size-*",description:"MUI InputBase (multiline) — native <textarea> with Calibri font. Grows with content up to maxRows."},{id:3,name:"Clear button",token:"--textarea-clear-size, --textarea-clear-color",description:"Appears top-right when clearable=true and the field has a value."},{id:4,name:"Resize handle",token:"resize prop (CSS)",description:"CSS resize handle — vertical by default. Allows manual height adjustment."},{id:5,name:"Helper text",token:"--textarea-helper-color-*, --textarea-helper-font",description:"Status or instruction text below the control. Colour driven by the active state token."}]})]}),e.jsxs(a.Section,{title:"Sizes",children:[e.jsxs(a.BodyText,{children:["Three sizes control the minimum height, padding, and typography scale. The control can grow beyond the minimum as the user types (autosize). Tokens control each size via ",e.jsx("code",{children:"--textarea-min-height-*"})," and ",e.jsx("code",{children:"--textarea-padding-*"}),"."]}),e.jsx(a.Subsection,{title:"Small — min 80 px (--textarea-min-height-small)",children:e.jsx("div",{style:{maxWidth:400},children:e.jsx(u,{size:"small"})})}),e.jsx(a.Subsection,{title:"Default — min 104 px (--textarea-min-height-default)",children:e.jsx("div",{style:{maxWidth:400},children:e.jsx(u,{size:"default"})})}),e.jsx(a.Subsection,{title:"Large — min 132 px (--textarea-min-height-large)",children:e.jsx("div",{style:{maxWidth:400},children:e.jsx(u,{size:"large"})})})]}),e.jsxs(a.Section,{title:"States",children:[e.jsxs(a.BodyText,{children:["The ",e.jsx("code",{children:"state"})," prop drives border colour and helper text colour via dedicated state tokens. The ",e.jsx("code",{children:"focused"})," appearance is automatic via"," ",e.jsx("code",{children:":focus-within"}),"."]}),e.jsx(a.Subsection,{title:"Default",children:e.jsx("div",{style:{maxWidth:400},children:e.jsx(u,{})})}),e.jsx(a.Subsection,{title:"Error (--textarea-border-color-error)",children:e.jsx("div",{style:{maxWidth:400},children:e.jsx(u,{state:"error",helperText:"This is an error associated with the input"})})}),e.jsx(a.Subsection,{title:"Warning (--textarea-border-color-warning)",children:e.jsx("div",{style:{maxWidth:400},children:e.jsx(u,{state:"warning",helperText:"This is a warning associated with the input"})})}),e.jsx(a.Subsection,{title:"Success (--textarea-border-color-success)",children:e.jsx("div",{style:{maxWidth:400},children:e.jsx(u,{state:"success",helperText:"This is a success associated with the input"})})}),e.jsx(a.Subsection,{title:"Disabled",children:e.jsx("div",{style:{maxWidth:400},children:e.jsx(u,{disabled:!0})})})]}),e.jsx(a.Section,{title:"Basic Usage",children:e.jsx(a.CodeBlock,{children:`import { TextArea } from './TextArea';

// Controlled example
const [value, setValue] = useState('');

<TextArea
  label="Description"
  placeholder="Enter a description…"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onClear={() => setValue('')}
  clearable
  state="default"
  helperText="Max 500 characters"
/>`})}),e.jsxs(a.Section,{title:"Design Tokens",children:[e.jsxs(a.BodyText,{children:["All visual properties are controlled by the ",e.jsx("code",{children:"--textarea-*"})," token group defined in ",e.jsx("code",{children:"tokens.css"}),". Global tokens are referenced — no brand-specific or hardcoded values exist in the component."]}),e.jsx(a.TokenTable,{tokens:[{name:"--textarea-min-height-small",description:"Small textarea minimum height — 80 px"},{name:"--textarea-min-height-default",description:"Default textarea minimum height — 104 px"},{name:"--textarea-min-height-large",description:"Large textarea minimum height — 132 px"},{name:"--textarea-padding-small",description:"Small control padding — 6px 8px (--global-spacing-sizing-6px / 8px)"},{name:"--textarea-padding-default",description:"Default control padding — 8px 12px"},{name:"--textarea-padding-large",description:"Large control padding — 12px 16px"},{name:"--textarea-border-radius",description:"Corner radius — 4 px (--global-spacing-radius-4px)"},{name:"--textarea-border-width",description:"Border stroke — 0.5 px (--global-spacing-stroke-0-5px)"},{name:"--textarea-border-color",description:"Default border — neutral-gray-300 (#d2d5da)"},{name:"--textarea-border-color-focus",description:"Focused border — brand-primary (#3776ce)"},{name:"--textarea-border-color-error",description:"Error border — status-red (#ce2031)"},{name:"--textarea-border-color-warning",description:"Warning border — status-dark-orange (#d07c06)"},{name:"--textarea-border-color-success",description:"Success border — status-dark-green (#227f1a)"},{name:"--textarea-bg",description:"Control background — white"},{name:"--textarea-bg-disabled",description:"Disabled background — neutral-gray-100"},{name:"--textarea-border-color-disabled",description:"Disabled border — neutral-gray-200"},{name:"--textarea-text-color",description:"Input text — base-black (#1c1c1c)"},{name:"--textarea-text-color-disabled",description:"Disabled input text — neutral-gray-400"},{name:"--textarea-placeholder-color",description:"Placeholder text — neutral-gray-400"},{name:"--textarea-clear-color",description:"Clear icon default colour — neutral-gray-400"},{name:"--textarea-clear-size",description:"Clear icon size — 16 px (--global-spacing-sizing-16px)"},{name:"--textarea-label-font",description:"Label typeface — F37 Ginger Pro (--brand-font-primary)"},{name:"--textarea-input-font",description:"Input typeface — Calibri (--brand-font-secondary)"},{name:"--textarea-input-size-small",description:"Small input font size — 14 px (--global-type-size-primary-label-sm)"},{name:"--textarea-input-size-default",description:"Default input font size — 16 px (--global-type-size-primary-label)"},{name:"--textarea-input-size-large",description:"Large input font size — 18 px (--global-type-size-primary-label-lg)"},{name:"--textarea-helper-font",description:"Helper text typeface — Calibri (--brand-font-secondary)"},{name:"--textarea-helper-size",description:"Helper text size — 12 px (--global-type-size-primary-label-xs)"},{name:"--textarea-helper-color-error",description:"Error helper colour — status-red"},{name:"--textarea-helper-color-warning",description:"Warning helper colour — status-dark-orange"},{name:"--textarea-helper-color-success",description:"Success helper colour — status-dark-green"}]})]}),e.jsxs(a.Section,{title:"Usage Guidelines",children:[e.jsxs(a.PrincipleCard,{number:1,title:"Use TextArea for multi-line content",children:["Reserve TextArea for content that naturally spans multiple lines — descriptions, notes, comments, and rich free text. For single-line inputs, use"," ",e.jsx("strong",{children:"SimpleField"}),"."]}),e.jsxs(a.PrincipleCard,{number:2,title:"Set minRows to match expected content",children:["Tune ",e.jsx("code",{children:"minRows"})," to give the user a visual hint of how much content is expected. Short comments: 2–3 rows. Long descriptions: 4–6 rows."]}),e.jsxs(a.PrincipleCard,{number:3,title:"Pair validation with descriptive helper text",children:["Always supply a ",e.jsx("code",{children:"helperText"})," message alongside an ",e.jsx("code",{children:"error"}),","," ",e.jsx("code",{children:"warning"}),", or ",e.jsx("code",{children:"success"})," state. Colour alone is not sufficient for accessibility."]}),e.jsxs(a.PrincipleCard,{number:4,title:"Match size to surrounding context",children:["Use ",e.jsx("strong",{children:"small"})," inside compact panels or sidebars,"," ",e.jsx("strong",{children:"default"})," for standard forms, and ",e.jsx("strong",{children:"large"})," for prominent or hero-level inputs."]})]})]});We.__docgenInfo={description:"",methods:[],displayName:"TextAreaDocs"};const wa={title:"Atoms/Input/TextArea",component:o,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["small","default","large"],description:"Minimum height and typography scale"},state:{control:"select",options:["default","error","warning","success"],description:"Validation state — drives border and helper text colour"},resizable:{control:"boolean",description:"Show the custom resize grip at the bottom-right corner"},clearable:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"},minRows:{control:"number"},maxRows:{control:"number"}},args:{label:"Input name",placeholder:"Placeholder text",size:"default",state:"default",clearable:!0,disabled:!1,minRows:3,resizable:!0}},l=i=>{const[h,s]=d.useState(i.value??"");return e.jsx(o,{...i,value:h,onChange:t=>s(t.target.value),onClear:()=>s("")})},f={name:"Documentation",render:()=>e.jsx(We,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},v={name:"Playground",render:i=>e.jsx("div",{style:{maxWidth:400},children:e.jsx(l,{...i})})},y={name:"Default",render:()=>e.jsx("div",{style:{maxWidth:400},children:e.jsx(o,{label:"Input name",placeholder:"Placeholder text",clearable:!0})}),parameters:{controls:{disable:!0}}},T={name:"Sizes",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",maxWidth:400},children:[e.jsx(l,{label:"Input name",placeholder:"Placeholder text",size:"small",clearable:!0}),e.jsx(l,{label:"Input name",placeholder:"Placeholder text",size:"default",clearable:!0}),e.jsx(l,{label:"Input name",placeholder:"Placeholder text",size:"large",clearable:!0})]}),parameters:{controls:{disable:!0}}},j={name:"Filled",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",maxWidth:400},children:[e.jsx(l,{label:"Input name",value:"This is a filled input",size:"small",clearable:!0}),e.jsx(l,{label:"Input name",value:"This is a filled input",size:"default",clearable:!0}),e.jsx(l,{label:"Input name",value:"This is a filled input",size:"large",clearable:!0})]}),parameters:{controls:{disable:!0}}},z={name:"Error",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",maxWidth:400},children:[e.jsx(l,{label:"Input name",value:"This is a filled input",size:"small",state:"error",helperText:"This is an error associated with the input",clearable:!0}),e.jsx(l,{label:"Input name",value:"This is a filled input",size:"default",state:"error",helperText:"This is an error associated with the input",clearable:!0}),e.jsx(l,{label:"Input name",value:"This is a filled input",size:"large",state:"error",helperText:"This is an error associated with the input",clearable:!0})]}),parameters:{controls:{disable:!0}}},w={name:"Warning",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",maxWidth:400},children:[e.jsx(l,{label:"Input name",value:"This is a filled input",size:"small",state:"warning",helperText:"This is a warning associated with the input",clearable:!0}),e.jsx(l,{label:"Input name",value:"This is a filled input",size:"default",state:"warning",helperText:"This is a warning associated with the input",clearable:!0}),e.jsx(l,{label:"Input name",value:"This is a filled input",size:"large",state:"warning",helperText:"This is a warning associated with the input",clearable:!0})]}),parameters:{controls:{disable:!0}}},I={name:"Success",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",maxWidth:400},children:[e.jsx(l,{label:"Input name",value:"This is a filled input",size:"small",state:"success",helperText:"This is a success associated with the input",clearable:!0}),e.jsx(l,{label:"Input name",value:"This is a filled input",size:"default",state:"success",helperText:"This is a success associated with the input",clearable:!0}),e.jsx(l,{label:"Input name",value:"This is a filled input",size:"large",state:"success",helperText:"This is a success associated with the input",clearable:!0})]}),parameters:{controls:{disable:!0}}},_={name:"Disabled",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",maxWidth:400},children:[e.jsx(o,{label:"Input name",placeholder:"Placeholder text",size:"small",disabled:!0}),e.jsx(o,{label:"Input name",placeholder:"Placeholder text",size:"default",disabled:!0}),e.jsx(o,{label:"Input name",placeholder:"Placeholder text",size:"large",disabled:!0})]}),parameters:{controls:{disable:!0}}},S={name:"Full Design Matrix",render:()=>{const i=["small","default","large"],h=[{state:"default",helperText:void 0,label:"Default"},{state:"error",helperText:"This is an error associated with the input",label:"Error"},{state:"warning",helperText:"This is a warning associated with the input",label:"Warning"},{state:"success",helperText:"This is a success associated with the input",label:"Success"}],s={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"11px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--global-color-neutral-gray-500)",marginBottom:"var(--global-spacing-sizing-8px)"};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-40px)",maxWidth:1100},children:[e.jsxs("div",{children:[e.jsx("div",{style:s,children:"Placeholder → Filled (all sizes)"}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap"},children:i.map(t=>e.jsxs("div",{style:{flex:"1 1 200px",display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsx("div",{style:{...s,textTransform:"none"},children:t}),e.jsx(o,{label:"Input name",placeholder:"Placeholder text",size:t,clearable:!0}),e.jsx(l,{label:"Input name",value:"This is a filled input",size:t,clearable:!0})]},t))})]}),h.filter(t=>t.state!=="default").map(({state:t,helperText:m,label:c})=>e.jsxs("div",{children:[e.jsxs("div",{style:s,children:[c," state"]}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap"},children:i.map(x=>e.jsx("div",{style:{flex:"1 1 200px"},children:e.jsx(l,{label:"Input name",value:"This is a filled input",size:x,state:t,helperText:m,clearable:!0})},x))})]},t)),e.jsxs("div",{children:[e.jsx("div",{style:s,children:"Disabled"}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap"},children:i.map(t=>e.jsx("div",{style:{flex:"1 1 200px"},children:e.jsx(o,{label:"Input name",placeholder:"Placeholder text",size:t,disabled:!0})},t))})]})]})},parameters:{controls:{disable:!0}}};var R,L,M,F,H;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <TextAreaDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen'
  }
}`,...(M=(L=f.parameters)==null?void 0:L.docs)==null?void 0:M.source},description:{story:"Full documentation page for the TextArea component.",...(H=(F=f.parameters)==null?void 0:F.docs)==null?void 0:H.description}}};var N,q,V,U,G;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    maxWidth: 400
  }}>
      <Controlled {...args} />
    </div>
}`,...(V=(q=v.parameters)==null?void 0:q.docs)==null?void 0:V.source},description:{story:"Interactive playground — use the Controls panel to adjust every prop.",...(G=(U=v.parameters)==null?void 0:U.docs)==null?void 0:G.description}}};var O,$,Y,J,K;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <div style={{
    maxWidth: 400
  }}>
      <TextArea label="Input name" placeholder="Placeholder text" clearable />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=($=y.parameters)==null?void 0:$.docs)==null?void 0:Y.source},description:{story:"Default — placeholder state, no value entered.",...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Z,ee,ae;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    maxWidth: 400
  }}>
      <Controlled label="Input name" placeholder="Placeholder text" size="small" clearable />
      <Controlled label="Input name" placeholder="Placeholder text" size="default" clearable />
      <Controlled label="Input name" placeholder="Placeholder text" size="large" clearable />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"All three sizes: small, default, large.",...(ae=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var te,re,le,ie,se;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Filled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    maxWidth: 400
  }}>
      <Controlled label="Input name" value="This is a filled input" size="small" clearable />
      <Controlled label="Input name" value="This is a filled input" size="default" clearable />
      <Controlled label="Input name" value="This is a filled input" size="large" clearable />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(re=j.parameters)==null?void 0:re.docs)==null?void 0:le.source},description:{story:"Focused / typing — focused appearance with text value.",...(se=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:se.description}}};var ne,oe,de,ce,pe;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Error',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    maxWidth: 400
  }}>
      <Controlled label="Input name" value="This is a filled input" size="small" state="error" helperText="This is an error associated with the input" clearable />
      <Controlled label="Input name" value="This is a filled input" size="default" state="error" helperText="This is an error associated with the input" clearable />
      <Controlled label="Input name" value="This is a filled input" size="large" state="error" helperText="This is an error associated with the input" clearable />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(de=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:de.source},description:{story:"Error state — red border, error helper text.",...(pe=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:pe.description}}};var ue,he,me,xe,ge;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Warning',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    maxWidth: 400
  }}>
      <Controlled label="Input name" value="This is a filled input" size="small" state="warning" helperText="This is a warning associated with the input" clearable />
      <Controlled label="Input name" value="This is a filled input" size="default" state="warning" helperText="This is a warning associated with the input" clearable />
      <Controlled label="Input name" value="This is a filled input" size="large" state="warning" helperText="This is a warning associated with the input" clearable />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(he=w.parameters)==null?void 0:he.docs)==null?void 0:me.source},description:{story:"Warning state — amber border, warning helper text.",...(ge=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:ge.description}}};var be,fe,ve,ye,Te;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
  name: 'Success',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    maxWidth: 400
  }}>
      <Controlled label="Input name" value="This is a filled input" size="small" state="success" helperText="This is a success associated with the input" clearable />
      <Controlled label="Input name" value="This is a filled input" size="default" state="success" helperText="This is a success associated with the input" clearable />
      <Controlled label="Input name" value="This is a filled input" size="large" state="success" helperText="This is a success associated with the input" clearable />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ve=(fe=I.parameters)==null?void 0:fe.docs)==null?void 0:ve.source},description:{story:"Success state — green border, success helper text.",...(Te=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:Te.description}}};var je,ze,we,Ie,_e;_.parameters={..._.parameters,docs:{...(je=_.parameters)==null?void 0:je.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    maxWidth: 400
  }}>
      <TextArea label="Input name" placeholder="Placeholder text" size="small" disabled />
      <TextArea label="Input name" placeholder="Placeholder text" size="default" disabled />
      <TextArea label="Input name" placeholder="Placeholder text" size="large" disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(we=(ze=_.parameters)==null?void 0:ze.docs)==null?void 0:we.source},description:{story:"Disabled — no pointer events, muted colours.",...(_e=(Ie=_.parameters)==null?void 0:Ie.docs)==null?void 0:_e.description}}};var Se,Ce,De,Pe,Ae;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const sizes = ['small', 'default', 'large'] as const;
    const states = [{
      state: 'default' as const,
      helperText: undefined,
      label: 'Default'
    }, {
      state: 'error' as const,
      helperText: 'This is an error associated with the input',
      label: 'Error'
    }, {
      state: 'warning' as const,
      helperText: 'This is a warning associated with the input',
      label: 'Warning'
    }, {
      state: 'success' as const,
      helperText: 'This is a success associated with the input',
      label: 'Success'
    }];
    const SECTION_LABEL: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary, sans-serif)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--global-color-neutral-gray-500)',
      marginBottom: 'var(--global-spacing-sizing-8px)'
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-40px)',
      maxWidth: 1100
    }}>

        {/* Placeholder / Filled */}
        <div>
          <div style={SECTION_LABEL}>Placeholder → Filled (all sizes)</div>
          <div style={{
          display: 'flex',
          gap: 'var(--global-spacing-sizing-16px)',
          flexWrap: 'wrap'
        }}>
            {sizes.map(size => <div key={size} style={{
            flex: '1 1 200px',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--global-spacing-sizing-12px)'
          }}>
                <div style={{
              ...SECTION_LABEL,
              textTransform: 'none'
            }}>{size}</div>
                <TextArea label="Input name" placeholder="Placeholder text" size={size} clearable />
                <Controlled label="Input name" value="This is a filled input" size={size} clearable />
              </div>)}
          </div>
        </div>

        {/* All states */}
        {states.filter(s => s.state !== 'default').map(({
        state,
        helperText,
        label
      }) => <div key={state}>
            <div style={SECTION_LABEL}>{label} state</div>
            <div style={{
          display: 'flex',
          gap: 'var(--global-spacing-sizing-16px)',
          flexWrap: 'wrap'
        }}>
              {sizes.map(size => <div key={size} style={{
            flex: '1 1 200px'
          }}>
                  <Controlled label="Input name" value="This is a filled input" size={size} state={state} helperText={helperText} clearable />
                </div>)}
            </div>
          </div>)}

        {/* Disabled */}
        <div>
          <div style={SECTION_LABEL}>Disabled</div>
          <div style={{
          display: 'flex',
          gap: 'var(--global-spacing-sizing-16px)',
          flexWrap: 'wrap'
        }}>
            {sizes.map(size => <div key={size} style={{
            flex: '1 1 200px'
          }}>
                <TextArea label="Input name" placeholder="Placeholder text" size={size} disabled />
              </div>)}
          </div>
        </div>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(De=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:De.source},description:{story:"Full design matrix — all sizes × all states, matching the Figma design spec.",...(Ae=(Pe=S.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.description}}};const Ia=["Documentation","Playground","Default","Sizes","Filled","Error","Warning","Success","Disabled","FullDesignMatrix"];export{y as Default,_ as Disabled,f as Documentation,z as Error,j as Filled,S as FullDesignMatrix,v as Playground,T as Sizes,I as Success,w as Warning,Ia as __namedExportsOrder,wa as default};
