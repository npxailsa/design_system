import{r as m,j as e,R as Y}from"./iframe-CrOQID5z.js";import{C as pa}from"./Close-CtQTHP-J.js";import{T as ga}from"./Tag-DHGDguxJ.js";import{I as ua}from"./InputBase-C57XdYma.js";import{D as l}from"./DocsTemplate-BaK0TYDA.js";import{L as u}from"./LockOutlined-BFquwIdp.js";import{c as ma}from"./createSvgIcon-BKjFAbUy.js";import{S as k}from"./Search-Dc7aIWnP.js";import"./preload-helper-Dp1pzeXC.js";import"./ButtonBase-AS9UcvOB.js";import"./DefaultPropsProvider-sc7h-EHC.js";import"./index-CF3xkfHL.js";import"./useEventCallback-TxnDBXxM.js";import"./useForkRef-5w6NzoCB.js";import"./index-BMDcSvxJ.js";import"./useTheme-CjIfO1ej.js";import"./memoTheme-C5Dhjs4y.js";import"./ownerWindow-DIR61fab.js";import"./isHostComponent-DVu5iVWx.js";const ha="_field_1r54b_8",xa="_label_1r54b_17",ba="_control_1r54b_29",fa="_leadingIcon_1r54b_118",va="_iconSvg_1r54b_140",ya="_tagScrollArea_1r54b_149",Sa="_inputRoot_1r54b_166",Ta="_nativeInput_1r54b_178",Ia="_clearBtn_1r54b_211",ja="_clearIcon_1r54b_229",wa="_dropdown_1r54b_242",za="_dropdownOption_1r54b_263",_a="_dropdownEmpty_1r54b_284",Ca="_helper_1r54b_297",o={field:ha,label:xa,control:ba,"control--extra-small":"_control--extra-small_1r54b_58","control--small":"_control--small_1r54b_64","control--default":"_control--default_1r54b_70","control--large":"_control--large_1r54b_76","control--error":"_control--error_1r54b_83","control--warning":"_control--warning_1r54b_92","control--success":"_control--success_1r54b_101","control--disabled":"_control--disabled_1r54b_110",leadingIcon:fa,"field--extra-small":"_field--extra-small_1r54b_140",iconSvg:va,"field--small":"_field--small_1r54b_141","field--default":"_field--default_1r54b_142","field--large":"_field--large_1r54b_143",tagScrollArea:ya,inputRoot:Sa,nativeInput:Ta,"field--disabled":"_field--disabled_1r54b_199",clearBtn:Ia,clearIcon:ja,dropdown:wa,"control--open":"_control--open_1r54b_259",dropdownOption:za,"dropdownOption--active":"_dropdownOption--active_1r54b_280",dropdownEmpty:_a,helper:Ca,"helper--error":"_helper--error_1r54b_305","helper--warning":"_helper--warning_1r54b_306","helper--success":"_helper--success_1r54b_307"},c=({label:a,placeholder:i,value:r="",onChange:d,size:s="default",state:n="default",helperText:g,leadingIcon:p,clearable:v=!1,onClear:h,tags:x,onTagRemove:y,tagColour:b="blue",suggestions:S,onSuggestionSelect:I,suggestionsLabel:ae="option",disabled:j=!1,type:Xe="text",id:Ye,name:ea,className:aa,ariaLabel:la})=>{const le=m.useId(),F=`${le}-listbox`,te=Ye??le,J=m.useRef(null),X=m.useRef(null),[E,z]=m.useState(!1),[_,L]=m.useState(-1),ta=new Set((x??[]).map(t=>t.label.toLowerCase())),ra=r.toLowerCase().trim(),D=S?S.filter(t=>t.toLowerCase().includes(ra)&&!ta.has(t.toLowerCase())):[],C=!!S,re=C&&E&&!j;m.useEffect(()=>{if(!E)return;const t=f=>{X.current&&!X.current.contains(f.target)&&(z(!1),L(-1))};return document.addEventListener("pointerdown",t),()=>document.removeEventListener("pointerdown",t)},[E]);const se=m.useCallback(t=>{var f;I==null||I(t),z(!1),L(-1),(f=J.current)==null||f.focus()},[I]),sa=t=>{if(C)switch(t.key){case"ArrowDown":t.preventDefault(),z(!0),L(f=>Math.min(f+1,D.length-1));break;case"ArrowUp":t.preventDefault(),L(f=>Math.max(f-1,-1));break;case"Enter":E&&_>=0&&D[_]&&(t.preventDefault(),se(D[_]));break;case"Escape":z(!1),L(-1);break;case"Backspace":!r&&x&&x.length>0&&y&&y(x[x.length-1].id);break}},ia=t=>{d==null||d(t),z(!0),L(-1)},ie=x&&x.length>0,na=v&&!j&&r&&r.length>0,oa=[o.field,o[`field--${s}`],o[`field--${n}`],j&&o["field--disabled"],aa].filter(Boolean).join(" "),ca=[o.control,o[`control--${s}`],o[`control--${n}`],j&&o["control--disabled"],re&&o["control--open"]].filter(Boolean).join(" ");return e.jsxs("div",{ref:X,className:oa,children:[a&&e.jsx("label",{htmlFor:te,className:o.label,children:a}),e.jsxs("div",{className:ca,onClick:()=>{var t;j||(t=J.current)==null||t.focus()},children:[p&&e.jsx("span",{className:o.leadingIcon,"aria-hidden":"true",children:e.jsx(p,{className:o.iconSvg})}),e.jsxs("div",{className:o.tagScrollArea,children:[ie&&x.map(t=>e.jsx(ga,{label:t.label,size:s,colour:b,variant:"filled",showRemove:!!y&&!j,onRemove:y?()=>y(t.id):void 0,disabled:j},t.id)),e.jsx(ua,{id:te,inputRef:J,value:r,onChange:ia,onFocus:()=>{C&&r.length>0&&z(!0)},onKeyDown:sa,placeholder:ie?void 0:i,disabled:j,type:Xe,name:ea,inputProps:{"aria-label":la,"aria-autocomplete":C?"list":void 0,"aria-expanded":C?E:void 0,"aria-controls":C?F:void 0,"aria-activedescendant":_>=0?`${F}-opt-${_}`:void 0,role:C?"combobox":void 0,className:o.nativeInput},classes:{root:o.inputRoot,input:o.nativeInput}})]}),na&&e.jsx("button",{type:"button",className:o.clearBtn,onClick:t=>{t.stopPropagation(),h==null||h(),z(!1)},"aria-label":"Clear input",tabIndex:-1,children:e.jsx(pa,{className:o.clearIcon})})]}),re&&e.jsx("ul",{id:F,role:"listbox","aria-label":`${ae} suggestions`,className:o.dropdown,children:D.length>0?D.map((t,f)=>e.jsx("li",{id:`${F}-opt-${f}`,role:"option","aria-selected":f===_,className:[o.dropdownOption,f===_&&o["dropdownOption--active"]].filter(Boolean).join(" "),onPointerDown:da=>{da.preventDefault(),se(t)},children:t},t)):e.jsxs("li",{className:o.dropdownEmpty,"aria-disabled":"true",children:["No matching ",ae]})}),g&&e.jsx("span",{className:[o.helper,n!=="default"&&o[`helper--${n}`]].filter(Boolean).join(" "),role:n==="error"?"alert":void 0,children:g})]})};c.__docgenInfo={description:`SimpleField — a single-line text input built on MUI's \`InputBase\`.

**MUI Foundation**: \`InputBase\` from \`@mui/material\`
— the unstyled, accessible input primitive. All visual
treatment is applied via design-token CSS Modules on top.

**Sizes**: small (32 px) | default (40 px) | large (48 px)
**States**: default | error | warning | success | disabled

**Tag search**: supply \`suggestions\` + \`onSuggestionSelect\` to enable
the autocomplete dropdown — the input becomes a search box that filters
the suggestion list as the user types, selecting adds a Tag chip.`,methods:[],displayName:"SimpleField",props:{label:{required:!1,tsType:{name:"string"},description:"Field label displayed above the input"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text shown when the field is empty"},value:{required:!1,tsType:{name:"string"},description:"Current input value (controlled)",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},size:{required:!1,tsType:{name:"union",raw:"'extra-small' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'extra-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Visual size of the field.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'warning' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"}]},description:`Validation / semantic state — drives border and helper text colour.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text shown below the field (error / warning / success message)"},leadingIcon:{required:!1,tsType:{name:"union",raw:"SvgIconComponent | React.ElementType",elements:[{name:"SvgIconComponent"},{name:"ReactElementType",raw:"React.ElementType"}]},description:"MUI SvgIcon component rendered on the left side of the input"},clearable:{required:!1,tsType:{name:"boolean"},description:`Show a clear (×) button on the right when the field has a value.
@default false`,defaultValue:{value:"false",computed:!1}},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the clear button is clicked"},tags:{required:!1,tsType:{name:"Array",elements:[{name:"SimpleFieldTag"}],raw:"SimpleFieldTag[]"},description:"Inline tag chips rendered inside the input row (tag-input pattern)"},onTagRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"id"}],return:{name:"void"}}},description:"Callback when a tag's remove button is clicked"},tagColour:{required:!1,tsType:{name:"ReactComponentProps['colour']",raw:"React.ComponentProps<typeof Tag>['colour']"},description:`Colour variant passed to each Tag chip.
Accepts any TagColour value — defaults to 'blue'.
@default 'blue'`,defaultValue:{value:"'blue'",computed:!1}},suggestions:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Pool of suggestion strings to search against when the user types.
Activates the tag-search / autocomplete pattern.
Already-selected tag labels are automatically excluded.`},onSuggestionSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when the user selects a suggestion from the dropdown.\nThe parent should add the value to `tags` and clear the `value` prop."},suggestionsLabel:{required:!1,tsType:{name:"string"},description:`Human-readable name of what is being searched (shown in the empty state).
e.g. "location", "tag", "parameter"
@default 'option'`,defaultValue:{value:"'option'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the field",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"string"},description:"HTML input type",defaultValue:{value:"'text'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"HTML id attribute (auto-generated if omitted)"},name:{required:!1,tsType:{name:"string"},description:"HTML name attribute"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the root wrapper"},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label for the input (used when there is no visible label)"}}};const La=ma(e.jsx("path",{d:"M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"})),W=["Auckland","Wellington","Christchurch","Hamilton","Tauranga","Dunedin","Palmerston North","Nelson","Rotorua","Napier"],ka=["Urgent","Review required","Approved","On hold","Draft","Pending","In progress","Complete","Archived","High priority"],A=({label:a,suggestions:i,suggestionsLabel:r,size:d="default"})=>{const[s,n]=m.useState(""),[g,p]=m.useState([]),v=m.useRef(1);return e.jsx(c,{label:a,placeholder:`Search ${r}…`,value:s,onChange:h=>n(h.target.value),onClear:()=>n(""),clearable:!0,leadingIcon:k,size:d,tags:g,onTagRemove:h=>p(x=>x.filter(y=>y.id!==h)),suggestions:i,onSuggestionSelect:h=>{p(x=>[...x,{id:v.current++,label:h}]),n("")},suggestionsLabel:r})},w=({label:a="Input name",state:i="default",helperText:r,size:d="default"})=>{const[s,n]=m.useState("");return e.jsx(c,{label:a,placeholder:"Placeholder text",value:s,onChange:g=>n(g.target.value),onClear:()=>n(""),clearable:!0,leadingIcon:u,size:d,state:i,helperText:r})},Ze=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"Simple Field",subtitle:"A single-line text input for capturing user data — labels, placeholders, validation states, and optional inline tags"}),e.jsxs(l.BodyText,{children:["The ",e.jsx("strong",{children:"SimpleField"})," component is the foundational text input of the design system. It supports three sizes, four visual states (default, error, warning, success), an optional leading icon, a clearable mode, and an inline tag-chip variant. All styling is driven exclusively from the ",e.jsx("code",{children:"--simple-field-*"})," token set — no hardcoded values."]}),e.jsxs(l.Section,{title:"MUI Foundation",children:[e.jsxs(l.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"InputBase"})," from ",e.jsx("code",{children:"@mui/material"})," — the unstyled, accessible input primitive. ",e.jsx("code",{children:"InputBase"})," provides native keyboard navigation, ARIA attributes, and form integration while keeping zero visual opinion. All colours, spacing, typography, and interaction states are applied through"," ",e.jsx("code",{children:"SimpleField.module.css"})," using design tokens."]}),e.jsx(l.CodeBlock,{children:`// MUI base import
import InputBase from '@mui/material/InputBase';

// Design system wrappers
import { SimpleField } from './SimpleField';
import { Tag } from '../Tag/Tag'; // used for inline tag chips`})]}),e.jsxs(l.Section,{title:"Component Anatomy",children:[e.jsx(l.BodyText,{children:"Each SimpleField is composed of three optional layers stacked vertically — a label, the control row (icon + input + clear button), and a helper text line."}),e.jsx(l.Anatomy,{parts:[{name:"Label",description:"Short descriptor rendered above the control row. Uses F37 Ginger Pro, 12 px, weight 400."},{name:"Leading icon (optional)",description:"MUI SvgIcon on the left of the text area. Size scales with the field size."},{name:"Input area",description:"MUI InputBase — the native <input> with Calibri font and transparent background."},{name:"Inline tags (optional)",description:"Design system Tag components rendered inside the control row. Pass the `tags` prop and an `onTagRemove` callback. Tag colour is controlled via `tagColour` (default: blue)."},{name:"Clear button (optional)",description:"Appears when clearable=true and the field has a non-empty value."},{name:"Helper text (optional)",description:"Status message below the control. Colour is driven by the active state token."}]})]}),e.jsxs(l.Section,{title:"Sizes",children:[e.jsxs(l.BodyText,{children:["Four fixed heights control the field. The control row is capped at exactly the token value and cannot grow regardless of content. Token pattern: ",e.jsx("code",{children:"--simple-field-height-*"}),"."]}),e.jsx(l.Subsection,{title:"Extra Small — 28 px (--simple-field-height-extra-small)",children:e.jsx(w,{size:"extra-small"})}),e.jsx(l.Subsection,{title:"Small — 32 px (--simple-field-height-small)",children:e.jsx(w,{size:"small"})}),e.jsx(l.Subsection,{title:"Default — 44 px (--simple-field-height-default)",children:e.jsx(w,{size:"default"})}),e.jsx(l.Subsection,{title:"Large — 52 px (--simple-field-height-large)",children:e.jsx(w,{size:"large"})})]}),e.jsxs(l.Section,{title:"States",children:[e.jsxs(l.BodyText,{children:["The ",e.jsx("code",{children:"state"})," prop drives border colour, icon colour, and helper text colour via dedicated state tokens. The ",e.jsx("code",{children:"focused"})," appearance is automatic via"," ",e.jsx("code",{children:":focus-within"})," on the control row."]}),e.jsx(l.Subsection,{title:"Default",children:e.jsx(w,{})}),e.jsx(l.Subsection,{title:"Error",children:e.jsx(w,{state:"error",helperText:"This is an error associated with the input"})}),e.jsx(l.Subsection,{title:"Warning",children:e.jsx(w,{state:"warning",helperText:"This is a warning associated with the input"})}),e.jsx(l.Subsection,{title:"Success",children:e.jsx(w,{state:"success",helperText:"This is a success associated with this input"})}),e.jsx(l.Subsection,{title:"Disabled",children:e.jsx(c,{label:"Input name",placeholder:"Placeholder text",leadingIcon:u,disabled:!0})})]}),e.jsxs(l.Section,{title:"Leading Icons",children:[e.jsxs(l.BodyText,{children:["Pass any MUI SvgIcon component via the ",e.jsx("code",{children:"leadingIcon"})," prop. The icon inherits the state colour automatically via CSS cascade."]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",maxWidth:360},children:[e.jsx(c,{label:"Search",placeholder:"Placeholder text",leadingIcon:k}),e.jsx(c,{label:"Username",placeholder:"Placeholder text",leadingIcon:La}),e.jsx(c,{label:"Password",placeholder:"Placeholder text",leadingIcon:u,type:"password"})]})]}),e.jsxs(l.Section,{title:"Tag Input",children:[e.jsxs(l.BodyText,{children:["Inline tag chips from the design system ",e.jsx("strong",{children:"Tag"})," component are rendered inside the control row when the ",e.jsx("code",{children:"tags"})," prop is supplied. Each chip includes a remove button backed by ",e.jsx("code",{children:"onTagRemove"}),". Backspace on an empty input removes the last tag."]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",maxWidth:400},children:[e.jsx(A,{label:"Filter by location",suggestions:W,suggestionsLabel:"location",size:"small"}),e.jsx(A,{label:"Filter by location",suggestions:W,suggestionsLabel:"location",size:"default"}),e.jsx(A,{label:"Filter by location",suggestions:W,suggestionsLabel:"location",size:"large"})]})]}),e.jsxs(l.Section,{title:"Tag Search (Autocomplete)",children:[e.jsxs(l.BodyText,{children:["Supply a ",e.jsx("code",{children:"suggestions"})," array and an ",e.jsx("code",{children:"onSuggestionSelect"})," callback to activate the autocomplete mode. As the user types, the dropdown filters the suggestion pool — excluding already-selected tags — and shows matching results. Selecting an item adds a Tag chip and clears the input. The ",e.jsx("code",{children:"suggestionsLabel"})," prop names what is being searched (shown in the empty-state message)."]}),e.jsx(l.CodeBlock,{children:`<SimpleField
  label="Filter by location"
  placeholder="Search location…"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onClear={() => setQuery('')}
  clearable
  leadingIcon={SearchIcon}
  tags={tags}
  onTagRemove={(id) => setTags(t => t.filter(x => x.id !== id))}
  suggestions={LOCATION_SUGGESTIONS}
  onSuggestionSelect={(value) => {
    setTags(t => [...t, { id: Date.now(), label: value }]);
    setQuery('');
  }}
  suggestionsLabel="location"
/>`}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",maxWidth:400},children:[e.jsx(A,{label:"Filter by location",suggestions:W,suggestionsLabel:"location"}),e.jsx(A,{label:"Filter by tag",suggestions:ka,suggestionsLabel:"tag"})]}),e.jsxs(l.BodyText,{children:[e.jsx("strong",{children:"Keyboard support"}),": ",e.jsx("kbd",{children:"↓"})," / ",e.jsx("kbd",{children:"↑"})," to navigate the list,",e.jsx("kbd",{children:"Enter"})," to select, ",e.jsx("kbd",{children:"Escape"})," to dismiss, and"," ",e.jsx("kbd",{children:"Backspace"})," on an empty input removes the last tag."]})]}),e.jsxs(l.Section,{title:"Design Tokens",children:[e.jsxs(l.BodyText,{children:["All visual properties are controlled by the ",e.jsx("code",{children:"--simple-field-*"})," token group defined in ",e.jsx("code",{children:"tokens.css"}),"."]}),e.jsx(l.TokenTable,{tokens:[{name:"--simple-field-height-extra-small",description:"Extra-small field height — 28 px (--global-spacing-sizing-28px)"},{name:"--simple-field-height-small",description:"Small field height — 32 px (--global-spacing-sizing-32px)"},{name:"--simple-field-height-default",description:"Default field height — 44 px (--global-spacing-sizing-44px)"},{name:"--simple-field-height-large",description:"Large field height — 52 px (--global-spacing-sizing-52px)"},{name:"--simple-field-border-radius",description:"Corner radius — 4 px (--global-spacing-radius-4px)"},{name:"--simple-field-border-width",description:"Border stroke — 0.5 px (--global-spacing-stroke-0-5px)"},{name:"--simple-field-gap",description:"Gap between icon / input / button — 8 px"},{name:"--simple-field-border-color",description:"Default border — neutral-gray-300 (#d2d5da)"},{name:"--simple-field-border-color-focus",description:"Focused border — brand-primary (#3776ce)"},{name:"--simple-field-border-color-error",description:"Error border — status-red (#ce2031)"},{name:"--simple-field-border-color-warning",description:"Warning border — status-dark-orange (#d07c06)"},{name:"--simple-field-border-color-success",description:"Success border — status-dark-green (#227f1a)"},{name:"--simple-field-label-font",description:"Label typeface — F37 Ginger Pro (--brand-font-primary)"},{name:"--simple-field-input-font",description:"Input typeface — Calibri (--brand-font-secondary)"},{name:"--simple-field-helper-color-error",description:"Error helper text colour — status-red"},{name:"--simple-field-helper-color-warning",description:"Warning helper text colour — status-dark-orange"},{name:"--simple-field-helper-color-success",description:"Success helper text colour — status-dark-green"},{name:"--simple-field-tag-bg",description:"Tag chip background — primary-blue-blue-100"},{name:"--simple-field-tag-color",description:"Tag chip text colour — secondary-navy"},{name:"--simple-field-dropdown-bg",description:"Suggestion dropdown background — white"},{name:"--simple-field-dropdown-border",description:"Dropdown border colour — neutral-gray-200"},{name:"--simple-field-dropdown-radius",description:"Dropdown corner radius — 6 px (--global-spacing-radius-6px)"},{name:"--simple-field-dropdown-shadow",description:"Dropdown elevation — shadow-sm-box-shadow"},{name:"--simple-field-dropdown-option-hover",description:"Hovered option background — neutral-gray-50"},{name:"--simple-field-dropdown-option-active",description:"Keyboard-active option background — primary-blue-blue-100"},{name:"--simple-field-dropdown-empty-color",description:"Empty-state text colour — neutral-gray-400"}]})]}),e.jsxs(l.Section,{title:"Usage Guidelines",children:[e.jsxs(l.PrincipleCard,{number:1,title:"Always provide a label",children:["Every SimpleField should have a visible label that clearly describes what value is expected. Only omit the label when an ",e.jsx("code",{children:"ariaLabel"})," is provided for screen readers."]}),e.jsxs(l.PrincipleCard,{number:2,title:"Match size to context",children:["Use ",e.jsx("strong",{children:"small"})," in dense tables and compact toolbars, ",e.jsx("strong",{children:"default"})," ","for standard forms, and ",e.jsx("strong",{children:"large"})," for prominent hero-level inputs or when targeting touch interfaces."]}),e.jsxs(l.PrincipleCard,{number:3,title:"State drives meaning",children:["Only apply error / warning / success states after user interaction (on blur or submit), not on initial render. Always pair a state with a descriptive ",e.jsx("code",{children:"helperText"})," ","message so the issue is understandable without relying on colour alone."]}),e.jsxs(l.PrincipleCard,{number:4,title:"Clearable for long-form inputs",children:["Enable ",e.jsx("code",{children:"clearable"})," for search fields and long free-text inputs. Avoid it for short, required fields (e.g. username / password) where clearing is disruptive."]}),e.jsxs(l.PrincipleCard,{number:5,title:"Name what you are searching",children:["Always set ",e.jsx("code",{children:"suggestionsLabel"})," to a plain noun describing the search target — ",e.jsx("em",{children:"location"}),", ",e.jsx("em",{children:"tag"}),", ",e.jsx("em",{children:"parameter"}),". This noun appears in the empty-state message (“No matching location”) and the listbox",e.jsx("code",{children:"aria-label"})," for screen readers."]})]})]});Ze.__docgenInfo={description:"",methods:[],displayName:"SimpleFieldDocs"};const Ja={title:"Atoms/Input/SimpleField",component:c,parameters:{layout:"padded"},argTypes:{size:{control:"select",options:["extra-small","small","default","large"],description:"Height / typography size of the field"},state:{control:"select",options:["default","error","warning","success"],description:"Validation state — drives border and helper text colour"},clearable:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"},placeholder:{control:"text"},helperText:{control:"text"}},args:{label:"Input name",placeholder:"Placeholder text",size:"default",state:"default",clearable:!0,disabled:!1}},T=a=>{const[i,r]=m.useState(a.value??"");return e.jsx(c,{...a,value:i,onChange:d=>r(d.target.value),onClear:()=>r("")})},O={name:"Documentation",render:()=>e.jsx(Ze,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},R={name:"Playground",render:a=>e.jsx("div",{style:{maxWidth:360},children:e.jsx(T,{...a,leadingIcon:u})})},P={name:"Default",render:a=>e.jsx("div",{style:{maxWidth:360},children:e.jsx(T,{...a})}),args:{label:"Input name",placeholder:"Placeholder text",size:"default",state:"default",clearable:!0}},K=[{size:"extra-small",label:"Extra Small",height:"28px"},{size:"small",label:"Small",height:"32px"},{size:"default",label:"Default",height:"44px"},{size:"large",label:"Large",height:"52px"}],Ea={display:"inline-block",fontFamily:"var(--brand-font-secondary, monospace)",fontSize:"11px",fontWeight:600,letterSpacing:"0.04em",color:"var(--global-color-neutral-gray-500)",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-4px)",padding:"2px var(--global-spacing-sizing-6px)",marginBottom:"var(--global-spacing-sizing-4px)"},B={name:"Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",maxWidth:360},children:K.map(({size:a,label:i,height:r})=>e.jsxs("div",{children:[e.jsxs("div",{style:Ea,children:[i," — ",r]}),e.jsx(T,{label:"Input name",placeholder:"Placeholder text",size:a,leadingIcon:u,clearable:!0})]},a))}),parameters:{controls:{disable:!0}}},N={name:"Status / Error",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",maxWidth:360},children:["small","default","large"].map(a=>e.jsx(T,{label:"Input name",value:"This is a filled input",size:a,leadingIcon:u,clearable:!0,state:"error",helperText:"This is an error associated with the input"},a))}),parameters:{controls:{disable:!0}}},G={name:"Status / Warning",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",maxWidth:360},children:["small","default","large"].map(a=>e.jsx(T,{label:"Input name",value:"This is a filled input",size:a,leadingIcon:u,clearable:!0,state:"warning",helperText:"This is a warning associated with the input"},a))}),parameters:{controls:{disable:!0}}},q={name:"Status / Success",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",maxWidth:360},children:["small","default","large"].map(a=>e.jsx(T,{label:"Input name",value:"This is a filled input",size:a,leadingIcon:u,clearable:!0,state:"success",helperText:"This is a success associated with this input"},a))}),parameters:{controls:{disable:!0}}},H={name:"Status / Disabled",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",maxWidth:360},children:["small","default","large"].map(a=>e.jsx(c,{label:"Input name",placeholder:"Placeholder text",size:a,leadingIcon:u,disabled:!0},a))}),parameters:{controls:{disable:!0}}},M={name:"Status / Tag Input",render:()=>{const a=({size:i,label:r,suggestions:d,suggestionsLabel:s,initialTags:n})=>{const[g,p]=m.useState(""),[v,h]=m.useState(n??[]),x=Y.useRef(100),y=b=>{h(S=>[...S,{id:x.current++,label:b}]),p("")};return e.jsx(c,{label:r,placeholder:`Search ${s}…`,value:g,onChange:b=>p(b.target.value),onClear:()=>p(""),clearable:!0,leadingIcon:k,size:i,tags:v,onTagRemove:b=>h(S=>S.filter(I=>I.id!==b)),suggestions:d,onSuggestionSelect:y,suggestionsLabel:s})};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",maxWidth:400},children:[e.jsx(a,{size:"default",label:"Filter by location",suggestions:ee,suggestionsLabel:"location",initialTags:[{id:1,label:"Auckland"}]}),e.jsx(a,{size:"small",label:"Filter by tag (small)",suggestions:Ke,suggestionsLabel:"tag"}),e.jsx(a,{size:"large",label:"Filter by param (large)",suggestions:Je,suggestionsLabel:"parameter"})]})},parameters:{controls:{disable:!0}}},ee=["Auckland","Wellington","Christchurch","Hamilton","Tauranga","Dunedin","Palmerston North","Nelson","Rotorua","Napier","New Plymouth","Invercargill","Whanganui","Gisborne","Blenheim"],Ke=["Urgent","Review required","Approved","On hold","Draft","Pending","In progress","Complete","Archived","High priority","Low priority","Escalated","Blocked","Resolved","Closed"],Je=["Revenue","Operating cost","Net profit","EBITDA","Headcount","Customer count","Churn rate","Conversion rate","Retention rate","Average order value","NPS score","Response time","Uptime"],U={name:"Tag Input (legacy)",render:()=>{const a=({size:i,label:r,suggestions:d,suggestionsLabel:s,initialTags:n})=>{const[g,p]=m.useState(""),[v,h]=m.useState(n??[]),x=Y.useRef(100),y=b=>{h(S=>[...S,{id:x.current++,label:b}]),p("")};return e.jsx(c,{label:r,placeholder:`Search ${s}…`,value:g,onChange:b=>p(b.target.value),onClear:()=>p(""),clearable:!0,leadingIcon:k,size:i,tags:v,onTagRemove:b=>h(S=>S.filter(I=>I.id!==b)),suggestions:d,onSuggestionSelect:y,suggestionsLabel:s})};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",maxWidth:400},children:[e.jsx("div",{style:{fontSize:"11px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--global-color-neutral-gray-500)"},children:"Locations"}),e.jsx(a,{size:"default",label:"Filter by location",suggestions:ee,suggestionsLabel:"location",initialTags:[{id:1,label:"Auckland"}]}),e.jsx("div",{style:{fontSize:"11px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--global-color-neutral-gray-500)",marginTop:"var(--global-spacing-sizing-8px)"},children:"Tags"}),e.jsx(a,{size:"default",label:"Filter by tag",suggestions:Ke,suggestionsLabel:"tag"}),e.jsx("div",{style:{fontSize:"11px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--global-color-neutral-gray-500)",marginTop:"var(--global-spacing-sizing-8px)"},children:"Parameters"}),e.jsx(a,{size:"default",label:"Filter by parameter",suggestions:Je,suggestionsLabel:"parameter"})]})},parameters:{controls:{disable:!0}}},Q={name:"Tag Input — Sizes",render:()=>{const a=({size:i})=>{const[r,d]=m.useState(""),[s,n]=m.useState([]),g=Y.useRef(1);return e.jsx(c,{label:"Filter by location",placeholder:"Search location…",value:r,onChange:p=>d(p.target.value),onClear:()=>d(""),clearable:!0,leadingIcon:k,size:i,tags:s,onTagRemove:p=>n(v=>v.filter(h=>h.id!==p)),suggestions:ee,onSuggestionSelect:p=>{n(v=>[...v,{id:g.current++,label:p}]),d("")},suggestionsLabel:"location"})};return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",maxWidth:400},children:["small","default","large"].map(i=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"11px",fontWeight:600,letterSpacing:"0.06em",textTransform:"uppercase",color:"var(--global-color-neutral-gray-400)",marginBottom:"var(--global-spacing-sizing-6px)"},children:i}),e.jsx(a,{size:i})]},i))})},parameters:{controls:{disable:!0}}},$={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px",maxWidth:"640px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontWeight:600,fontSize:"13px",color:"var(--global-color-neutral-gray-800)"},children:"Anatomy"}),e.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[["Label only",e.jsx(c,{label:"Input name",placeholder:"Placeholder"}),"--simple-field-label-size / --simple-field-label-color"],["With leading icon",e.jsx(c,{label:"With Icon",placeholder:"Search",leadingIcon:k}),"--simple-field-icon-size-default"],["Clearable",e.jsx(T,{label:"Clearable",value:"Input value",clearable:!0,onClear:()=>{}}),"--simple-field-clear-color"],["Error helper",e.jsx(c,{label:"Field",placeholder:"",state:"error",helperText:"Error message"}),"--simple-field-border-color-error / --simple-field-helper-color-error"]].map(([a,i,r])=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",minWidth:"180px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,fontFamily:"var(--brand-font-primary)",color:"var(--global-color-neutral-gray-600)"},children:a}),i,e.jsx("code",{style:{fontSize:"10px",color:"var(--global-color-neutral-gray-500)",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px"},children:r})]},a))})]}),parameters:{controls:{disable:!0}}},V={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:"400px"},children:[e.jsx(c,{label:"Default",placeholder:"Resting state",leadingIcon:u}),e.jsx(T,{label:"Filled",value:"User has typed content",leadingIcon:u,clearable:!0}),e.jsx(c,{label:"Error",placeholder:"",state:"error",helperText:"Error message",leadingIcon:u}),e.jsx(c,{label:"Warning",placeholder:"",state:"warning",helperText:"Warning message",leadingIcon:u}),e.jsx(c,{label:"Success",placeholder:"",state:"success",helperText:"Success message",leadingIcon:u}),e.jsx(c,{label:"Disabled",placeholder:"Disabled state",leadingIcon:u,disabled:!0})]}),parameters:{controls:{disable:!0}}},Z={name:"Full Design Matrix",render:()=>{const a=[{state:"default",helperText:void 0},{state:"error",helperText:"This is an error associated with the input"},{state:"warning",helperText:"This is a warning associated with the input"},{state:"success",helperText:"This is a success associated with this input"}],i={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"11px",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:"var(--global-color-neutral-gray-500)",marginBottom:"var(--global-spacing-sizing-8px)"},r={fontFamily:"var(--brand-font-primary, sans-serif)",fontSize:"11px",fontWeight:600,letterSpacing:"0.06em",color:"var(--global-color-neutral-gray-600)",marginBottom:"var(--global-spacing-sizing-8px)"},d={display:"inline-block",fontFamily:"var(--brand-font-secondary, monospace)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-4px)",padding:"1px var(--global-spacing-sizing-4px)",marginLeft:"var(--global-spacing-sizing-4px)"};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-40px)",maxWidth:900},children:[e.jsxs("div",{children:[e.jsx("div",{style:i,children:"Default — Placeholder & Filled"}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap"},children:K.map(({size:s,label:n,height:g})=>e.jsxs("div",{style:{flex:"1 1 180px",display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsxs("div",{style:r,children:[n,e.jsx("span",{style:d,children:g})]}),e.jsx(c,{label:"Input name",placeholder:"Placeholder text",size:s,leadingIcon:u,clearable:!0}),e.jsx(T,{label:"Input name",value:"This is a filled input",size:s,leadingIcon:u,clearable:!0})]},s))})]}),e.jsxs("div",{children:[e.jsx("div",{style:i,children:"Validation States"}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap"},children:a.filter(s=>s.state!=="default").map(({state:s,helperText:n})=>e.jsxs("div",{style:{flex:"1 1 180px",display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsx("div",{style:{...r,textTransform:"capitalize"},children:s}),K.map(({size:g,height:p})=>e.jsxs("div",{children:[e.jsx("div",{style:{...d,display:"block",marginLeft:0,marginBottom:"var(--global-spacing-sizing-4px)",width:"fit-content"},children:p}),e.jsx(T,{label:"Input name",value:"This is a filled input",size:g,leadingIcon:u,clearable:!0,state:s,helperText:n})]},g))]},s))})]}),e.jsxs("div",{children:[e.jsx("div",{style:i,children:"Disabled"}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap"},children:K.map(({size:s,label:n,height:g})=>e.jsxs("div",{style:{flex:"1 1 180px"},children:[e.jsxs("div",{style:r,children:[n,e.jsx("span",{style:d,children:g})]}),e.jsx(c,{label:"Input name",placeholder:"Placeholder text",size:s,leadingIcon:u,disabled:!0})]},s))})]})]})},parameters:{controls:{disable:!0}}};var ne,oe,ce;O.parameters={...O.parameters,docs:{...(ne=O.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <SimpleFieldDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen'
  }
}`,...(ce=(oe=O.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,pe,ge;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => <div style={{
    maxWidth: 360
  }}>
      <Controlled {...args} leadingIcon={LockOutlinedIcon} />
    </div>
}`,...(ge=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ue,me,he;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Default',
  render: args => <div style={{
    maxWidth: 360
  }}>
      <Controlled {...args} />
    </div>,
  args: {
    label: 'Input name',
    placeholder: 'Placeholder text',
    size: 'default',
    state: 'default',
    clearable: true
  }
}`,...(he=(me=P.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var xe,be,fe;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)',
    maxWidth: 360
  }}>
      {SIZE_META.map(({
      size,
      label,
      height
    }) => <div key={size}>
          <div style={SIZE_CHIP}>{label} — {height}</div>
          <Controlled label="Input name" placeholder="Placeholder text" size={size} leadingIcon={LockOutlinedIcon} clearable />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(fe=(be=B.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ve,ye,Se;N.parameters={...N.parameters,docs:{...(ve=N.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  name: 'Status / Error',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    maxWidth: 360
  }}>
      {(['small', 'default', 'large'] as const).map(size => <Controlled key={size} label="Input name" value="This is a filled input" size={size} leadingIcon={LockOutlinedIcon} clearable state="error" helperText="This is an error associated with the input" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Se=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var Te,Ie,je;G.parameters={...G.parameters,docs:{...(Te=G.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  name: 'Status / Warning',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    maxWidth: 360
  }}>
      {(['small', 'default', 'large'] as const).map(size => <Controlled key={size} label="Input name" value="This is a filled input" size={size} leadingIcon={LockOutlinedIcon} clearable state="warning" helperText="This is a warning associated with the input" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(je=(Ie=G.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var we,ze,_e;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Status / Success',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    maxWidth: 360
  }}>
      {(['small', 'default', 'large'] as const).map(size => <Controlled key={size} label="Input name" value="This is a filled input" size={size} leadingIcon={LockOutlinedIcon} clearable state="success" helperText="This is a success associated with this input" />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(_e=(ze=q.parameters)==null?void 0:ze.docs)==null?void 0:_e.source}}};var Ce,Le,ke;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  name: 'Status / Disabled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    maxWidth: 360
  }}>
      {(['small', 'default', 'large'] as const).map(size => <SimpleField key={size} label="Input name" placeholder="Placeholder text" size={size} leadingIcon={LockOutlinedIcon} disabled />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ke=(Le=H.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Ee,De,Ae;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Status / Tag Input',
  render: () => {
    const TagSearch = ({
      size,
      label,
      suggestions,
      suggestionsLabel,
      initialTags
    }: {
      size: 'small' | 'default' | 'large';
      label: string;
      suggestions: string[];
      suggestionsLabel: string;
      initialTags?: Array<{
        id: number;
        label: string;
      }>;
    }) => {
      const [query, setQuery] = useState('');
      const [tags, setTags] = useState(initialTags ?? []);
      const nextId = React.useRef(100);
      const handleSelect = (value: string) => {
        setTags(t => [...t, {
          id: nextId.current++,
          label: value
        }]);
        setQuery('');
      };
      return <SimpleField label={label} placeholder={\`Search \${suggestionsLabel}…\`} value={query} onChange={e => setQuery(e.target.value)} onClear={() => setQuery('')} clearable leadingIcon={SearchIcon} size={size} tags={tags} onTagRemove={id => setTags(t => t.filter(x => x.id !== id))} suggestions={suggestions} onSuggestionSelect={handleSelect} suggestionsLabel={suggestionsLabel} />;
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-24px)',
      maxWidth: 400
    }}>
        <TagSearch size="default" label="Filter by location" suggestions={LOCATION_SUGGESTIONS} suggestionsLabel="location" initialTags={[{
        id: 1,
        label: 'Auckland'
      }]} />
        <TagSearch size="small" label="Filter by tag (small)" suggestions={TAG_SUGGESTIONS} suggestionsLabel="tag" />
        <TagSearch size="large" label="Filter by param (large)" suggestions={PARAMETER_SUGGESTIONS} suggestionsLabel="parameter" />
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ae=(De=M.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};var Fe,We,Oe;U.parameters={...U.parameters,docs:{...(Fe=U.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Tag Input (legacy)',
  render: () => {
    const TagSearch = ({
      size,
      label,
      suggestions,
      suggestionsLabel,
      initialTags
    }: {
      size: 'small' | 'default' | 'large';
      label: string;
      suggestions: string[];
      suggestionsLabel: string;
      initialTags?: Array<{
        id: number;
        label: string;
      }>;
    }) => {
      const [query, setQuery] = useState('');
      const [tags, setTags] = useState(initialTags ?? []);
      const nextId = React.useRef(100);
      const handleSelect = (value: string) => {
        setTags(t => [...t, {
          id: nextId.current++,
          label: value
        }]);
        setQuery('');
      };
      return <SimpleField label={label} placeholder={\`Search \${suggestionsLabel}…\`} value={query} onChange={e => setQuery(e.target.value)} onClear={() => setQuery('')} clearable leadingIcon={SearchIcon} size={size} tags={tags} onTagRemove={id => setTags(t => t.filter(x => x.id !== id))} suggestions={suggestions} onSuggestionSelect={handleSelect} suggestionsLabel={suggestionsLabel} />;
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-24px)',
      maxWidth: 400
    }}>
        <div style={{
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        color: 'var(--global-color-neutral-gray-500)'
      }}>
          Locations
        </div>
        <TagSearch size="default" label="Filter by location" suggestions={LOCATION_SUGGESTIONS} suggestionsLabel="location" initialTags={[{
        id: 1,
        label: 'Auckland'
      }]} />

        <div style={{
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        color: 'var(--global-color-neutral-gray-500)',
        marginTop: 'var(--global-spacing-sizing-8px)'
      }}>
          Tags
        </div>
        <TagSearch size="default" label="Filter by tag" suggestions={TAG_SUGGESTIONS} suggestionsLabel="tag" />

        <div style={{
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        color: 'var(--global-color-neutral-gray-500)',
        marginTop: 'var(--global-spacing-sizing-8px)'
      }}>
          Parameters
        </div>
        <TagSearch size="default" label="Filter by parameter" suggestions={PARAMETER_SUGGESTIONS} suggestionsLabel="parameter" />
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Oe=(We=U.parameters)==null?void 0:We.docs)==null?void 0:Oe.source}}};var Re,Pe,Be;Q.parameters={...Q.parameters,docs:{...(Re=Q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Tag Input — Sizes',
  render: () => {
    const TagSearch = ({
      size
    }: {
      size: 'small' | 'default' | 'large';
    }) => {
      const [query, setQuery] = useState('');
      const [tags, setTags] = useState<Array<{
        id: number;
        label: string;
      }>>([]);
      const nextId = React.useRef(1);
      return <SimpleField label="Filter by location" placeholder="Search location…" value={query} onChange={e => setQuery(e.target.value)} onClear={() => setQuery('')} clearable leadingIcon={SearchIcon} size={size} tags={tags} onTagRemove={id => setTags(t => t.filter(x => x.id !== id))} suggestions={LOCATION_SUGGESTIONS} onSuggestionSelect={v => {
        setTags(t => [...t, {
          id: nextId.current++,
          label: v
        }]);
        setQuery('');
      }} suggestionsLabel="location" />;
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-20px)',
      maxWidth: 400
    }}>
        {(['small', 'default', 'large'] as const).map(s => <div key={s}>
            <div style={{
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase' as const,
          color: 'var(--global-color-neutral-gray-400)',
          marginBottom: 'var(--global-spacing-sizing-6px)'
        }}>{s}</div>
            <TagSearch size={s} />
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Be=(Pe=Q.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var Ne,Ge,qe;$.parameters={...$.parameters,docs:{...(Ne=$.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px',
    maxWidth: '640px'
  }}>
      <span style={{
      fontFamily: 'var(--brand-font-primary)',
      fontWeight: 600,
      fontSize: '13px',
      color: 'var(--global-color-neutral-gray-800)'
    }}>Anatomy</span>
      <div style={{
      display: 'flex',
      gap: '24px',
      flexWrap: 'wrap'
    }}>
        {[['Label only', <SimpleField label="Input name" placeholder="Placeholder" />, '--simple-field-label-size / --simple-field-label-color'], ['With leading icon', <SimpleField label="With Icon" placeholder="Search" leadingIcon={SearchIcon} />, '--simple-field-icon-size-default'], ['Clearable', <Controlled label="Clearable" value="Input value" clearable onClear={() => {}} />, '--simple-field-clear-color'], ['Error helper', <SimpleField label="Field" placeholder="" state="error" helperText="Error message" />, '--simple-field-border-color-error / --simple-field-helper-color-error']].map(([lbl, el, tok]) => <div key={lbl as string} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        minWidth: '180px'
      }}>
            <span style={{
          fontSize: '11px',
          fontWeight: 600,
          fontFamily: 'var(--brand-font-primary)',
          color: 'var(--global-color-neutral-gray-600)'
        }}>{lbl as string}</span>
            {el as React.ReactElement}
            <code style={{
          fontSize: '10px',
          color: 'var(--global-color-neutral-gray-500)',
          background: 'var(--global-color-neutral-gray-100)',
          padding: '2px 6px',
          borderRadius: '4px'
        }}>{tok as string}</code>
          </div>)}
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(qe=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:qe.source}}};var He,Me,Ue;V.parameters={...V.parameters,docs:{...(He=V.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    maxWidth: '400px'
  }}>
      <SimpleField label="Default" placeholder="Resting state" leadingIcon={LockOutlinedIcon} />
      <Controlled label="Filled" value="User has typed content" leadingIcon={LockOutlinedIcon} clearable />
      <SimpleField label="Error" placeholder="" state="error" helperText="Error message" leadingIcon={LockOutlinedIcon} />
      <SimpleField label="Warning" placeholder="" state="warning" helperText="Warning message" leadingIcon={LockOutlinedIcon} />
      <SimpleField label="Success" placeholder="" state="success" helperText="Success message" leadingIcon={LockOutlinedIcon} />
      <SimpleField label="Disabled" placeholder="Disabled state" leadingIcon={LockOutlinedIcon} disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ue=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:Ue.source}}};var Qe,$e,Ve;Z.parameters={...Z.parameters,docs:{...(Qe=Z.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const states = [{
      state: 'default' as const,
      helperText: undefined
    }, {
      state: 'error' as const,
      helperText: 'This is an error associated with the input'
    }, {
      state: 'warning' as const,
      helperText: 'This is a warning associated with the input'
    }, {
      state: 'success' as const,
      helperText: 'This is a success associated with this input'
    }];
    const SECTION_LABEL: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary, sans-serif)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      color: 'var(--global-color-neutral-gray-500)',
      marginBottom: 'var(--global-spacing-sizing-8px)'
    };
    const COL_LABEL: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary, sans-serif)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.06em',
      color: 'var(--global-color-neutral-gray-600)',
      marginBottom: 'var(--global-spacing-sizing-8px)'
    };
    const HEIGHT_CHIP: React.CSSProperties = {
      display: 'inline-block',
      fontFamily: 'var(--brand-font-secondary, monospace)',
      fontSize: '10px',
      color: 'var(--global-color-neutral-gray-400)',
      background: 'var(--global-color-neutral-gray-100)',
      borderRadius: 'var(--global-spacing-radius-4px)',
      padding: '1px var(--global-spacing-sizing-4px)',
      marginLeft: 'var(--global-spacing-sizing-4px)'
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-40px)',
      maxWidth: 900
    }}>
        {/* Placeholder / Filled */}
        <div>
          <div style={SECTION_LABEL}>Default — Placeholder &amp; Filled</div>
          <div style={{
          display: 'flex',
          gap: 'var(--global-spacing-sizing-16px)',
          flexWrap: 'wrap'
        }}>
            {SIZE_META.map(({
            size,
            label,
            height
          }) => <div key={size} style={{
            flex: '1 1 180px',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--global-spacing-sizing-12px)'
          }}>
                <div style={COL_LABEL}>
                  {label}<span style={HEIGHT_CHIP}>{height}</span>
                </div>
                <SimpleField label="Input name" placeholder="Placeholder text" size={size} leadingIcon={LockOutlinedIcon} clearable />
                <Controlled label="Input name" value="This is a filled input" size={size} leadingIcon={LockOutlinedIcon} clearable />
              </div>)}
          </div>
        </div>

        {/* Validation states */}
        <div>
          <div style={SECTION_LABEL}>Validation States</div>
          <div style={{
          display: 'flex',
          gap: 'var(--global-spacing-sizing-16px)',
          flexWrap: 'wrap'
        }}>
            {states.filter(s => s.state !== 'default').map(({
            state,
            helperText
          }) => <div key={state} style={{
            flex: '1 1 180px',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--global-spacing-sizing-12px)'
          }}>
                <div style={{
              ...COL_LABEL,
              textTransform: 'capitalize'
            }}>{state}</div>
                {SIZE_META.map(({
              size,
              height
            }) => <div key={size}>
                    <div style={{
                ...HEIGHT_CHIP,
                display: 'block',
                marginLeft: 0,
                marginBottom: 'var(--global-spacing-sizing-4px)',
                width: 'fit-content'
              }}>{height}</div>
                    <Controlled label="Input name" value="This is a filled input" size={size} leadingIcon={LockOutlinedIcon} clearable state={state} helperText={helperText} />
                  </div>)}
              </div>)}
          </div>
        </div>

        {/* Disabled */}
        <div>
          <div style={SECTION_LABEL}>Disabled</div>
          <div style={{
          display: 'flex',
          gap: 'var(--global-spacing-sizing-16px)',
          flexWrap: 'wrap'
        }}>
            {SIZE_META.map(({
            size,
            label,
            height
          }) => <div key={size} style={{
            flex: '1 1 180px'
          }}>
                <div style={COL_LABEL}>{label}<span style={HEIGHT_CHIP}>{height}</span></div>
                <SimpleField label="Input name" placeholder="Placeholder text" size={size} leadingIcon={LockOutlinedIcon} disabled />
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
}`,...(Ve=($e=Z.parameters)==null?void 0:$e.docs)==null?void 0:Ve.source}}};const Xa=["Documentation","Playground","Default","Sizes","StatusError","StatusWarning","StatusSuccess","StatusDisabled","StatusTagInput","TagInput","TagInputSizes","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{V as AllInteractiveStates,$ as ComponentBreakdown,P as Default,O as Documentation,Z as FullDesignMatrix,R as Playground,B as Sizes,H as StatusDisabled,N as StatusError,q as StatusSuccess,M as StatusTagInput,G as StatusWarning,U as TagInput,Q as TagInputSizes,Xa as __namedExportsOrder,Ja as default};
