import{r as g,j as e,R as Q}from"./vendor-react-DbhTI_a3.js";import{ax as fe,s as xe}from"./vendor-mui-icons--gk6VE72.js";import{G as ge}from"./GhostButton-ZOCwuL9p.js";import{I as ve}from"./vendor-mui-core-CjcFYzit.js";import{D as i}from"./DocsTemplate-IhRQ5m1Q.js";import"../vite-inject-mocker-entry.js";import"./vendor-misc-BD0vWy5z.js";import"./vendor-emotion-DfrZ-FAO.js";const ye="_field_1kvh6_8",be="_label_1kvh6_24",je="_control_1kvh6_38",we="_inputRoot_1kvh6_102",Te="_nativeInput_1kvh6_111",De="_ampmSlot_1kvh6_164",Se="_ampmBtn_1kvh6_174",_e="_trailingIcon_1kvh6_192",Ie="_iconSvg_1kvh6_222",Me="_helper_1kvh6_247",r={field:ye,"field--small":"_field--small_1kvh6_18","field--default":"_field--default_1kvh6_19","field--large":"_field--large_1kvh6_20",label:be,control:je,"control--small":"_control--small_1kvh6_53","control--default":"_control--default_1kvh6_59","control--large":"_control--large_1kvh6_65","control--focused":"_control--focused_1kvh6_72","control--error":"_control--error_1kvh6_78","control--warning":"_control--warning_1kvh6_83","control--success":"_control--success_1kvh6_88","control--disabled":"_control--disabled_1kvh6_93",inputRoot:we,nativeInput:Te,ampmSlot:De,ampmBtn:Se,trailingIcon:_e,"trailingIcon--focused":"_trailingIcon--focused_1kvh6_202","trailingIcon--error":"_trailingIcon--error_1kvh6_206","trailingIcon--warning":"_trailingIcon--warning_1kvh6_210","trailingIcon--success":"_trailingIcon--success_1kvh6_214","trailingIcon--disabled":"_trailingIcon--disabled_1kvh6_218",iconSvg:Ie,helper:Me,"helper--error":"_helper--error_1kvh6_254","helper--warning":"_helper--warning_1kvh6_258","helper--success":"_helper--success_1kvh6_262"},X=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];function ke(t){if(!t)return"";const a=t.split("-");if(a.length!==3)return t;const[s,l,o]=a,n=parseInt(l,10)-1;return n<0||n>11?t:`${o.padStart(2,"0")} / ${X[n]} / ${s}`}function ze(t){if(!t)return"";const a=t.split(":");if(a.length<2)return t;let s=parseInt(a[0],10);if(isNaN(s))return t;const l=a[1].padStart(2,"0"),o=(a[2]||"00").substring(0,2).padStart(2,"0");return s=s%12||12,`${String(s).padStart(2,"0")} : ${l} : ${o}`}function Ae(t){const s=t.replace(/\s/g,"").match(/^(\d{1,2})\/([A-Za-z]{3})\/(\d{4})$/);if(!s)return t;const[,l,o,n]=s,p=X.indexOf(o.toUpperCase());return p===-1?t:`${n}-${String(p+1).padStart(2,"0")}-${l.padStart(2,"0")}`}function $e(t){const s=t.replace(/\s/g,"").match(/^(\d{1,2}):(\d{1,2}):(\d{1,2})$/);if(!s)return t;const[,l,o,n]=s;return`${l.padStart(2,"0")}:${o.padStart(2,"0")}:${n.padStart(2,"0")}`}function Be(t){if(!t)return"AM";const a=parseInt(t.split(":")[0],10);return isNaN(a)?"AM":a>=12?"PM":"AM"}function Pe(t,a){if(!t)return t;const s=t.split(":");let l=parseInt(s[0],10);return isNaN(l)?t:(a==="AM"?l=(l+12)%24:(l=l-12,l<0&&(l=0)),s[0]=String(l).padStart(2,"0"),s.join(":"))}const c=({type:t="date",label:a,value:s="",onChange:l,size:o="default",state:n="default",helperText:p,disabled:u=!1,id:te,name:ae,className:ie,ariaLabel:le})=>{const se=g.useId(),M=te??se,k=g.useRef(null),[S,z]=g.useState(!1),_=Be(s),ne=t==="date"?"DD / MMM / YYYY":"HH : MM : SS",re=s?t==="date"?ke(s):ze(s):"",oe=f=>{const I=f.target.value;if(!I){l==null||l("");return}const me=t==="date"?Ae(I):$e(I);l==null||l(me)},de=f=>{f.stopPropagation(),!(u||!s)&&(l==null||l(Pe(s,_)))},ce=[r.field,r[`field--${o}`],ie].filter(Boolean).join(" "),pe=[r.control,r[`control--${o}`],S&&r["control--focused"],n!=="default"&&r[`control--${n}`],u&&r["control--disabled"],t==="time"&&r["control--time"]].filter(Boolean).join(" "),ue=[r.trailingIcon,S&&r["trailingIcon--focused"],n!=="default"&&r[`trailingIcon--${n}`],u&&r["trailingIcon--disabled"]].filter(Boolean).join(" "),he=t==="date"?fe:xe;return e.jsxs("div",{className:ce,children:[a&&e.jsx("label",{htmlFor:M,className:r.label,children:a}),e.jsxs("div",{className:pe,onClick:()=>{var f;u||(f=k.current)==null||f.focus()},children:[e.jsx(ve,{id:M,inputRef:k,value:re,onChange:oe,onFocus:()=>z(!0),onBlur:()=>z(!1),placeholder:ne,disabled:u,type:"text",name:ae,inputProps:{"aria-label":le??a,className:r.nativeInput},classes:{root:r.inputRoot,input:r.nativeInput}}),t==="time"&&!S&&e.jsx("span",{className:r.ampmSlot,onClick:f=>f.stopPropagation(),children:e.jsx(ge,{label:_,size:"extra-small",variant:"ghost",disabled:u,onClick:de,ariaLabel:`Switch to ${_==="AM"?"PM":"AM"}`,className:r.ampmBtn})}),e.jsx("span",{className:ue,"aria-hidden":"true",children:e.jsx(he,{className:r.iconSvg})})]}),p&&e.jsx("span",{className:[r.helper,n!=="default"&&r[`helper--${n}`]].filter(Boolean).join(" "),role:n==="error"?"alert":void 0,children:p})]})};c.__docgenInfo={description:`DateTime — a date or time input built on MUI's \`InputBase\`.

**MUI Foundation**: \`InputBase\` from \`@mui/material\` — the unstyled,
accessible input primitive. All visual treatment is applied via
design-token CSS Modules on top.

**Date format**: DD / MMM / YYYY (e.g. 01 / JAN / 2001)
**Time format**: HH : MM : SS with a separate AM/PM ghost-button toggle

### Separator behaviour
The input always renders as \`type="text"\`. The "/" and ":" separators are
part of the formatted display string and therefore appear in a fixed position
at all times — including the focused state.

### AM/PM ghost button
Visible only when the input is **not** focused. Clicking it toggles the
stored 24-hour value between the AM and PM halves without focusing the
input. When the user focuses the input to edit, the button hides to avoid
clutter — the period is encoded inside the edited HH value.

**Types**: date | time
**Sizes**: small | default | large
**States**: default | error | warning | success | disabled`,methods:[],displayName:"DateTime",props:{type:{required:!1,tsType:{name:"union",raw:"'date' | 'time'",elements:[{name:"literal",value:"'date'"},{name:"literal",value:"'time'"}]},description:`Whether the field captures a date or a time value.
@default 'date'`,defaultValue:{value:"'date'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label displayed above the input"},value:{required:!1,tsType:{name:"string"},description:"Current value (controlled).\n- Date: ISO date string `YYYY-MM-DD`\n- Time: 24-hour string `HH:mm` or `HH:mm:ss`",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Change handler — called with the new raw string value"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Visual size of the field.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'warning' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"}]},description:`Validation state — drives border and helper text colour.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper / validation text shown below the field"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables interaction",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTML id (auto-generated when omitted)"},name:{required:!1,tsType:{name:"string"},description:"HTML name attribute"},className:{required:!1,tsType:{name:"string"},description:"Additional class on the root wrapper"},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for the input (used when there is no visible label)"}}};const m=({label:t="Date",value:a="",size:s="default",state:l="default",disabled:o=!1,helperText:n})=>{const[p,u]=Q.useState(a);return e.jsx(c,{type:"date",label:t,value:p,onChange:u,size:s,state:l,disabled:o,helperText:n})},h=({label:t="Time",value:a="",size:s="default",state:l="default",disabled:o=!1,helperText:n})=>{const[p,u]=Q.useState(a);return e.jsx(c,{type:"time",label:t,value:p,onChange:u,size:s,state:l,disabled:o,helperText:n})},x=({children:t,gap:a=16})=>e.jsx("div",{style:{display:"flex",gap:a,flexWrap:"wrap",alignItems:"flex-end"},children:t}),d=({width:t=200,children:a})=>e.jsx("div",{style:{width:t},children:a}),ee=()=>e.jsxs(i,{children:[e.jsx(i.Header,{title:"DateTime",subtitle:"A date or time input field built on MUI InputBase. Supports date and time types, three sizes, four validation states, and a built-in AM/PM ghost-button toggle."}),e.jsxs(i.Section,{title:"Overview",children:[e.jsxs(i.BodyText,{children:["The ",e.jsx("strong",{children:"DateTime"})," component provides accessible, consistently formatted date and time inputs. It always renders as a plain text field (never a native date/time browser picker), ensuring the display format is fully controlled by the design system at every interaction state."]}),e.jsxs(i.BodyText,{children:["The input accepts a controlled ",e.jsx("code",{children:"value"})," in ISO format (",e.jsx("code",{children:"YYYY-MM-DD"})," for dates, ",e.jsx("code",{children:"HH:mm:ss"})," in 24-hour notation for times) and displays it in the agreed human-readable format. Formatted display values are always shown — including when the field is focused — so the separators never jump or disappear."]}),e.jsxs(x,{gap:24,children:[e.jsx(d,{width:220,children:e.jsx(m,{label:"Date",value:"2024-03-15"})}),e.jsx(d,{width:240,children:e.jsx(h,{label:"Time",value:"14:30:00"})})]})]}),e.jsxs(i.Section,{title:"MUI Foundation",children:[e.jsxs(i.BodyText,{children:["DateTime is built on ",e.jsx("strong",{children:"InputBase"})," from"," ",e.jsx("code",{children:"@mui/material"})," — the unstyled, accessible input primitive. All visual treatment (borders, colours, sizes, icons, and states) is applied through design-token CSS Modules layered on top, preserving full MUI interaction semantics and WCAG accessibility."]}),e.jsxs(i.BodyText,{children:["The component intentionally avoids ",e.jsx("code",{children:'type="date"'})," and"," ",e.jsx("code",{children:'type="time"'})," native inputs. Instead it always uses"," ",e.jsx("code",{children:'type="text"'})," so the browser never injects its own UI chrome, picker dialogs, or locale-specific formatting — the design system retains full control at all times."]})]}),e.jsxs(i.Section,{title:"Anatomy",children:[e.jsx(i.BodyText,{children:"Each DateTime field is composed of up to four slots:"}),e.jsx(i.BulletList,{items:["Label — displayed above the control, linked to the input via htmlFor. Optional but strongly recommended.","Control row — the bordered input area. Contains the text input and the trailing icon (calendar for date, clock for time).","AM/PM ghost button — time inputs only. Appears inside the control row to the right of the text input when the field is not focused. Clicking it toggles the period without moving focus to the text field.","Helper text — shown below the control. Colour adapts to the active validation state."]}),e.jsxs(i.BodyText,{children:["The AM/PM ghost button slot is ",e.jsx("strong",{children:"only visible when the input is not focused"}),". When the user clicks into the text field to edit, the button hides so the user can enter the hour directly in 24-hour notation. Once the user leaves the field the button reappears showing the period derived from the stored value."]})]}),e.jsxs(i.Section,{title:"Date Input",children:[e.jsxs(i.BodyText,{children:["Use ",e.jsx("code",{children:'type="date"'})," (the default) to capture a calendar date. The field renders a calendar icon on the right. The placeholder and display format is always ",e.jsx("strong",{children:"DD / MMM / YYYY"})," — e.g."," ",e.jsx("em",{children:"15 / MAR / 2024"}),"."]}),e.jsxs(i.BodyText,{children:["The ",e.jsx("code",{children:"/"})," separators appear in a fixed position in the input text area at all times. They are part of the formatted display value, not decorative overlays, so they remain stable whether the field is empty (shown via placeholder), filled, or actively focused."]}),e.jsxs(x,{gap:16,children:[e.jsx(d,{width:220,children:e.jsx(m,{label:"Date — empty"})}),e.jsx(d,{width:220,children:e.jsx(m,{label:"Date — filled",value:"2024-03-15"})})]})]}),e.jsxs(i.Section,{title:"Time Input",children:[e.jsxs(i.BodyText,{children:["Use ",e.jsx("code",{children:'type="time"'})," to capture a time of day. The field renders a clock icon on the right. The placeholder and display format is always"," ",e.jsx("strong",{children:"HH : MM : SS"})," in 12-hour notation — e.g."," ",e.jsx("em",{children:"02 : 30 : 00"}),"."]}),e.jsxs(i.BodyText,{children:["The ",e.jsx("code",{children:":"})," separators are static — always at the same position regardless of focus state, identical to the date field behaviour."]}),e.jsxs(i.BodyText,{children:["The AM/PM period is displayed by a ghost button inside the control row. It appears only when the input is ",e.jsx("strong",{children:"not"})," focused. Clicking it flips the stored 24-hour value between AM and PM (±12 hours)."]}),e.jsxs(x,{gap:16,children:[e.jsx(d,{width:240,children:e.jsx(h,{label:"Time — empty"})}),e.jsx(d,{width:240,children:e.jsx(h,{label:"Time — AM (filled)",value:"08:01:54"})}),e.jsx(d,{width:240,children:e.jsx(h,{label:"Time — PM (filled)",value:"20:01:54"})})]})]}),e.jsxs(i.Section,{title:"Focused & Active States",children:[e.jsxs(i.BodyText,{children:["When a DateTime input is focused the control border changes to the brand primary colour (",e.jsx("code",{children:"--datetime-border-color-focus"}),") and the trailing icon colour updates to match."]}),e.jsxs(i.BodyText,{children:["The display value format does ",e.jsx("strong",{children:"not"})," change on focus —"," ",e.jsx("em",{children:"DD / MMM / YYYY"})," for dates and ",e.jsx("em",{children:"HH : MM : SS"})," for times are always shown. This ensures the separators stay in their fixed positions and the user always sees a familiar, consistent format whether they are reading or editing the field."]}),e.jsxs(i.BodyText,{children:["For time inputs, the AM/PM ghost button is hidden while the field is focused. The user edits the hour directly in 24-hour format (e.g."," ",e.jsx("code",{children:"14"})," for 2 PM). When focus leaves the field the button reappears reflecting the period that corresponds to the stored value."]})]}),e.jsxs(i.Section,{title:"Sizes",children:[e.jsxs(i.BodyText,{children:["Three sizes are available — ",e.jsx("code",{children:"small"}),", ",e.jsx("code",{children:"default"}),", and ",e.jsx("code",{children:"large"})," — matching the global input sizing scale."]}),e.jsx(i.SizeDemo,{rows:[{label:"Small",sublabel:"32 px — --datetime-height-small",children:e.jsxs(x,{gap:16,children:[e.jsx(d,{width:200,children:e.jsx(m,{label:"Date",size:"small",value:"2024-03-15"})}),e.jsx(d,{width:220,children:e.jsx(h,{label:"Time",size:"small",value:"14:30:00"})})]})},{label:"Default",sublabel:"44 px — --datetime-height-default",children:e.jsxs(x,{gap:16,children:[e.jsx(d,{width:200,children:e.jsx(m,{label:"Date",size:"default",value:"2024-03-15"})}),e.jsx(d,{width:220,children:e.jsx(h,{label:"Time",size:"default",value:"14:30:00"})})]})},{label:"Large",sublabel:"52 px — --datetime-height-large",children:e.jsxs(x,{gap:16,children:[e.jsx(d,{width:200,children:e.jsx(m,{label:"Date",size:"large",value:"2024-03-15"})}),e.jsx(d,{width:220,children:e.jsx(h,{label:"Time",size:"large",value:"14:30:00"})})]})}]})]}),e.jsxs(i.Section,{title:"Validation States",children:[e.jsxs(i.BodyText,{children:["The ",e.jsx("code",{children:"state"})," prop drives the border colour and helper-text colour. Use in combination with ",e.jsx("code",{children:"helperText"})," to communicate validation outcomes clearly. The four states are"," ",e.jsx("code",{children:"default"}),", ",e.jsx("code",{children:"error"}),", ",e.jsx("code",{children:"warning"}),", and"," ",e.jsx("code",{children:"success"}),"."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["default","error","warning","success"].map(t=>e.jsxs(x,{gap:16,children:[e.jsx(d,{width:220,children:e.jsx(m,{label:`Date — ${t}`,value:"2024-03-15",state:t,helperText:t!=="default"?`${t.charAt(0).toUpperCase()+t.slice(1)} — please check this date`:void 0})}),e.jsx(d,{width:240,children:e.jsx(h,{label:`Time — ${t}`,value:"14:30:00",state:t,helperText:t!=="default"?`${t.charAt(0).toUpperCase()+t.slice(1)} — please check this time`:void 0})})]},t))})]}),e.jsxs(i.Section,{title:"Disabled",children:[e.jsxs(i.BodyText,{children:["Set ",e.jsx("code",{children:"disabled"})," to ",e.jsx("code",{children:"true"})," to prevent all interaction. The control background changes to the disabled surface colour, text and icon colours become muted, and all pointer events are removed. The AM/PM ghost button also inherits the disabled state when the time field is disabled."]}),e.jsxs(x,{gap:16,children:[e.jsx(d,{width:200,children:e.jsx(m,{label:"Date — disabled (empty)",disabled:!0})}),e.jsx(d,{width:200,children:e.jsx(m,{label:"Date — disabled (filled)",value:"2024-03-15",disabled:!0})}),e.jsx(d,{width:220,children:e.jsx(h,{label:"Time — disabled (empty)",disabled:!0})}),e.jsx(d,{width:220,children:e.jsx(h,{label:"Time — disabled (filled)",value:"14:30:00",disabled:!0})})]})]}),e.jsxs(i.Section,{title:"Design Tokens",children:[e.jsxs(i.BodyText,{children:["All visual values are controlled through the tokens listed below. DateTime aliases the ",e.jsx("code",{children:"--simple-field-*"})," token set to stay consistent with the rest of the Input component family."]}),e.jsx(i.TokenTable,{tokens:[{name:"--datetime-height-small",description:"Control height — small (32 px via --simple-field-height-small)"},{name:"--datetime-height-default",description:"Control height — default (44 px via --simple-field-height-default)"},{name:"--datetime-height-large",description:"Control height — large (52 px via --simple-field-height-large)"},{name:"--datetime-border-radius",description:"Corner radius (4 px via --global-spacing-radius-4px)"},{name:"--datetime-border-width",description:"Border thickness (0.5 px via --global-spacing-stroke-0-5px)"},{name:"--datetime-border-color",description:"Default border colour (gray-300)"},{name:"--datetime-border-color-focus",description:"Focused border colour (brand primary blue)"},{name:"--datetime-border-color-error",description:"Error state border colour"},{name:"--datetime-border-color-warning",description:"Warning state border colour"},{name:"--datetime-border-color-success",description:"Success state border colour"},{name:"--datetime-border-color-disabled",description:"Disabled state border colour"},{name:"--datetime-bg",description:"Default background (white)"},{name:"--datetime-bg-disabled",description:"Disabled background (gray-100)"},{name:"--datetime-text-color",description:"Input text colour (near-black)"},{name:"--datetime-text-color-disabled",description:"Input text colour when disabled (gray-400)"},{name:"--datetime-placeholder-color",description:"Placeholder text colour (gray-400)"},{name:"--datetime-icon-color",description:"Trailing icon colour (gray-500)"},{name:"--datetime-icon-color-focus",description:"Trailing icon colour when focused (brand primary)"},{name:"--datetime-padding-x-small",description:"Horizontal padding — small (8 px)"},{name:"--datetime-padding-x-default",description:"Horizontal padding — default (12 px)"},{name:"--datetime-padding-x-large",description:"Horizontal padding — large (16 px)"},{name:"--datetime-icon-size-small",description:"Trailing icon size — small (14 px)"},{name:"--datetime-icon-size-default",description:"Trailing icon size — default (16 px)"},{name:"--datetime-icon-size-large",description:"Trailing icon size — large (18 px)"},{name:"--datetime-input-font",description:"Input text font family"},{name:"--datetime-input-weight",description:"Input text font weight"},{name:"--datetime-input-size-small",description:"Input font size — small"},{name:"--datetime-input-size-default",description:"Input font size — default"},{name:"--datetime-input-size-large",description:"Input font size — large"},{name:"--datetime-label-font",description:"Label font family"},{name:"--datetime-label-size",description:"Label font size"},{name:"--datetime-label-weight",description:"Label font weight"},{name:"--datetime-label-color",description:"Label text colour"},{name:"--datetime-helper-gap",description:"Gap between control and helper text (4 px)"},{name:"--datetime-helper-font",description:"Helper text font family"},{name:"--datetime-helper-size",description:"Helper text font size"},{name:"--datetime-helper-color",description:"Default helper text colour (gray-500)"},{name:"--datetime-helper-color-error",description:"Error helper text colour"},{name:"--datetime-helper-color-warning",description:"Warning helper text colour"},{name:"--datetime-helper-color-success",description:"Success helper text colour"},{name:"--datetime-gap",description:"Gap between input and trailing icon inside the control"}]})]}),e.jsx(i.Section,{title:"Usage Principles",children:e.jsxs(i.Principles,{children:[e.jsx(i.PrincipleCard,{title:"Use the right type",description:"Use type='date' for calendar dates and type='time' for time-of-day values. Never mix the two roles in a single instance.",type:"do"}),e.jsx(i.PrincipleCard,{title:"Always provide a label",description:"Omitting the label prop removes the visible label text. Only do this when an ariaLabel is explicitly provided for screen-reader users.",type:"caution"}),e.jsx(i.PrincipleCard,{title:"Pair helper text with validation states",description:"Use the helperText prop together with an error, warning, or success state to communicate validation outcomes clearly to the user.",type:"do"}),e.jsx(i.PrincipleCard,{title:"Do not use native date/time inputs",description:"Never swap this component for a native <input type='date'> or <input type='time'>. The design system component ensures consistent formatting, tokens, and accessibility across all browsers.",type:"dont"}),e.jsx(i.PrincipleCard,{title:"Store values in ISO / 24-hour format",description:"Always pass value in YYYY-MM-DD (date) or HH:mm:ss (time, 24-hour) format. The component handles formatting for display. Never pass pre-formatted strings as the controlled value.",type:"do"}),e.jsx(i.PrincipleCard,{title:"Do not hard-code colours or sizes",description:"Always use the --datetime-* design tokens for any visual customisation. Never apply hard-coded hex values, pixel sizes, or inline style overrides to this component.",type:"dont"})]})}),e.jsxs(i.Section,{title:"Accessibility",children:[e.jsxs(i.BodyText,{children:["DateTime is built on MUI ",e.jsx("code",{children:"InputBase"})," which provides correct ARIA roles and keyboard interaction out of the box. Additional accessibility considerations:"]}),e.jsx(i.BulletList,{items:["The label is linked to the input via htmlFor / id, ensuring screen readers announce it correctly.","When no label prop is provided, supply ariaLabel to give the input an accessible name.",'Helper text in the error state is rendered with role="alert" so screen readers announce validation errors immediately.','The AM/PM ghost button has ariaLabel="Switch to AM" or "Switch to PM" so its action is announced clearly.',"All interactive elements are keyboard-accessible: Tab to focus, Space/Enter to activate the AM/PM button.","Placeholder text meets minimum contrast ratios via --datetime-placeholder-color token."]})]}),e.jsx(i.Footer,{})]});ee.__docgenInfo={description:"",methods:[],displayName:"DateTimeDocs"};const Ue={title:"Atoms/Input/DateTime",component:c,parameters:{layout:"padded"},argTypes:{type:{control:"select",options:["date","time"],description:"Whether the field captures a date or a time value"},size:{control:"select",options:["small","default","large"],description:"Visual size of the field"},state:{control:"select",options:["default","error","warning","success"],description:"Validation / semantic state"},disabled:{control:"boolean",description:"Disable the field"},label:{control:"text",description:"Label displayed above the field"},helperText:{control:"text",description:"Helper / validation message shown below"}},args:{type:"date",size:"default",state:"default",disabled:!1,label:"Date"}},v={name:"Documentation",render:()=>e.jsx(ee,{}),parameters:{controls:{disable:!0}}},y={name:"Playground",render:t=>{const[a,s]=g.useState("");return e.jsx("div",{style:{maxWidth:320},children:e.jsx(c,{...t,value:a,onChange:s})})}},b={name:"Default",render:()=>e.jsxs("div",{style:{display:"flex",gap:24,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:200},children:e.jsx(c,{type:"date",label:"Date"})}),e.jsx("div",{style:{width:220},children:e.jsx(c,{type:"time",label:"Time"})})]}),parameters:{controls:{disable:!0}}},j={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:500},children:["small","default","large"].map(t=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:[e.jsx("div",{style:{width:200},children:e.jsx(c,{type:"date",label:`Date — ${t}`,size:t,value:"2024-03-15"})}),e.jsx("div",{style:{width:220},children:e.jsx(c,{type:"time",label:`Time — ${t}`,size:t,value:"14:30:00"})})]},t))}),parameters:{controls:{disable:!0}}},w={name:"States",render:()=>{const t=({state:a})=>{const[s,l]=g.useState("2024-03-15"),[o,n]=g.useState("14:30:00"),p=a.charAt(0).toUpperCase()+a.slice(1),u=a!=="default"?`${p} — please review this value`:void 0;return e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-end"},children:[e.jsx("div",{style:{width:220},children:e.jsx(c,{type:"date",label:`Date — ${p}`,value:s,onChange:l,state:a,helperText:u})}),e.jsx("div",{style:{width:240},children:e.jsx(c,{type:"time",label:`Time — ${p}`,value:o,onChange:n,state:a,helperText:u})})]})};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28},children:[e.jsx(t,{state:"default"}),e.jsx(t,{state:"error"}),e.jsx(t,{state:"warning"}),e.jsx(t,{state:"success"})]})},parameters:{controls:{disable:!0}}},T={name:"All Input States",render:()=>{const t=({type:a,size:s})=>{const l=a==="date"?"Date":"Time",o=a==="date"?"2024-03-15":"14:30:00",n=a==="date"?180:200,[p,u]=g.useState(o);return e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:n},children:e.jsx(c,{type:a,label:`${l} — empty`,size:s})}),e.jsx("div",{style:{width:n},children:e.jsx(c,{type:a,label:`${l} — filled`,value:p,onChange:u,size:s})}),e.jsx("div",{style:{width:n},children:e.jsx(c,{type:a,label:`${l} — disabled`,size:s,disabled:!0})}),e.jsx("div",{style:{width:n},children:e.jsx(c,{type:a,label:`${l} — disabled filled`,value:o,size:s,disabled:!0})})]})};return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:36},children:["small","default","large"].map(a=>e.jsxs("div",{children:[e.jsxs("p",{style:{marginBottom:12,fontWeight:600,fontSize:11,color:"#6d7280",textTransform:"uppercase",letterSpacing:"0.08em"},children:["Size: ",a]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(t,{type:"date",size:a}),e.jsx(t,{type:"time",size:a})]})]},a))})},parameters:{controls:{disable:!0}}},D={name:"Disabled",render:()=>e.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx("div",{style:{width:200},children:e.jsx(c,{type:"date",label:"Date — disabled",disabled:!0})}),e.jsx("div",{style:{width:200},children:e.jsx(c,{type:"date",label:"Date — disabled filled",value:"2024-03-15",disabled:!0})}),e.jsx("div",{style:{width:220},children:e.jsx(c,{type:"time",label:"Time — disabled",disabled:!0})}),e.jsx("div",{style:{width:220},children:e.jsx(c,{type:"time",label:"Time — disabled filled",value:"14:30:00",disabled:!0})})]}),parameters:{controls:{disable:!0}}};var A,$,B;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <DateTimeDocs />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=($=v.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var P,V,C;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const [val, setVal] = useState('');
    return <div style={{
      maxWidth: 320
    }}>
        <DateTime {...args} value={val} onChange={setVal} />
      </div>;
  }
}`,...(C=(V=y.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var H,Y,N;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
      width: 220
    }}>
        <DateTime type="time" label="Time" />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(N=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:N.source}}};var F,W,R;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 500
  }}>
      {(['small', 'default', 'large'] as const).map(size => <div key={size} style={{
      display: 'flex',
      gap: 16,
      alignItems: 'flex-end'
    }}>
          <div style={{
        width: 200
      }}>
            <DateTime type="date" label={\`Date — \${size}\`} size={size} value="2024-03-15" />
          </div>
          <div style={{
        width: 220
      }}>
            <DateTime type="time" label={\`Time — \${size}\`} size={size} value="14:30:00" />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(R=(W=j.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var U,L,O;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'States',
  render: () => {
    const StateRow: React.FC<{
      state: 'default' | 'error' | 'warning' | 'success';
    }> = ({
      state
    }) => {
      const [dateVal, setDateVal] = useState('2024-03-15');
      const [timeVal, setTimeVal] = useState('14:30:00');
      const label = state.charAt(0).toUpperCase() + state.slice(1);
      const helper = state !== 'default' ? \`\${label} — please review this value\` : undefined;
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
          width: 240
        }}>
            <DateTime type="time" label={\`Time — \${label}\`} value={timeVal} onChange={setTimeVal} state={state} helperText={helper} />
          </div>
        </div>;
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 28
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
}`,...(O=(L=w.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var q,E,G;T.parameters={...T.parameters,docs:{...(q=T.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'All Input States',
  render: () => {
    const Grid: React.FC<{
      type: 'date' | 'time';
      size: 'small' | 'default' | 'large';
    }> = ({
      type,
      size
    }) => {
      const label = type === 'date' ? 'Date' : 'Time';
      const filledValue = type === 'date' ? '2024-03-15' : '14:30:00';
      const width = type === 'date' ? 180 : 200;
      const [filledVal, setFilledVal] = useState(filledValue);
      return <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'flex-end'
      }}>
          {/* Empty */}
          <div style={{
          width
        }}>
            <DateTime type={type} label={\`\${label} — empty\`} size={size} />
          </div>
          {/* Filled */}
          <div style={{
          width
        }}>
            <DateTime type={type} label={\`\${label} — filled\`} value={filledVal} onChange={setFilledVal} size={size} />
          </div>
          {/* Disabled empty */}
          <div style={{
          width
        }}>
            <DateTime type={type} label={\`\${label} — disabled\`} size={size} disabled />
          </div>
          {/* Disabled filled */}
          <div style={{
          width
        }}>
            <DateTime type={type} label={\`\${label} — disabled filled\`} value={filledValue} size={size} disabled />
          </div>
        </div>;
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 36
    }}>
        {(['small', 'default', 'large'] as const).map(size => <div key={size}>
            <p style={{
          marginBottom: 12,
          fontWeight: 600,
          fontSize: 11,
          color: '#6d7280',
          textTransform: 'uppercase',
          letterSpacing: '0.08em'
        }}>
              Size: {size}
            </p>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
              <Grid type="date" size={size} />
              <Grid type="time" size={size} />
            </div>
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(G=(E=T.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var J,Z,K;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
        <DateTime type="date" label="Date — disabled" disabled />
      </div>
      <div style={{
      width: 200
    }}>
        <DateTime type="date" label="Date — disabled filled" value="2024-03-15" disabled />
      </div>
      <div style={{
      width: 220
    }}>
        <DateTime type="time" label="Time — disabled" disabled />
      </div>
      <div style={{
      width: 220
    }}>
        <DateTime type="time" label="Time — disabled filled" value="14:30:00" disabled />
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(Z=D.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};const Le=["Documentation","Playground","Default","Sizes","States","AllInputStates","Disabled"];export{T as AllInputStates,b as Default,D as Disabled,v as Documentation,y as Playground,j as Sizes,w as States,Le as __namedExportsOrder,Ue as default};
