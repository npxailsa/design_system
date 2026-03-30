import{r as x,j as e}from"./iframe-ed3UfVX2.js";import{B as Ae}from"./ButtonMenu-BJayBucj.js";import{K as Ge}from"./KeyboardArrowDown-h1Zn9Rbq.js";import{D as l}from"./DocsTemplate-GIGdF2Zd.js";import{P as W}from"./Person-amsY0Uv1.js";import{D as E}from"./Download-GFcwT51J.js";import{E as M}from"./Edit-Kv1DZJMM.js";import{C as we,A as ke}from"./Archive-CDr7hRA0.js";import{D as De}from"./Delete-BL25u6YK.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-B-TwLYzZ.js";const Oe="_splitBtn_1fxhh_9",Ve="_splitBtn__group_1fxhh_10",Ne="_splitBtn__main_1fxhh_11",qe="_splitBtn__trigger_1fxhh_13",Fe="_splitBtn__divider_1fxhh_12",Re="_splitBtn__chevron_1fxhh_194",$e="_splitBtn__icon_1fxhh_224",He="_splitBtn__label_1fxhh_266",Ke="_splitBtn__spinner_1fxhh_272",Ue="_splitBtn__panel_1fxhh_14",s={splitBtn:Oe,"splitBtn--full-width":"_splitBtn--full-width_1fxhh_41",splitBtn__group:Ve,splitBtn__main:Ne,splitBtn__trigger:qe,"splitBtn--disabled":"_splitBtn--disabled_1fxhh_151","splitBtn--loading":"_splitBtn--loading_1fxhh_163",splitBtn__divider:Fe,splitBtn__chevron:Re,"splitBtn__chevron--open":"_splitBtn__chevron--open_1fxhh_203","splitBtn--small":"_splitBtn--small_1fxhh_212","splitBtn__icon-svg":"_splitBtn__icon-svg_1fxhh_224","splitBtn--large":"_splitBtn--large_1fxhh_231",splitBtn__icon:$e,splitBtn__label:He,splitBtn__spinner:Ke,"splitBtn-spin":"_splitBtn-spin_1fxhh_1",splitBtn__panel:Ue,"splitBtn--primary-filled":"_splitBtn--primary-filled_1fxhh_313","splitBtn--primary-outline":"_splitBtn--primary-outline_1fxhh_329","splitBtn--secondary-solid":"_splitBtn--secondary-solid_1fxhh_345","splitBtn--secondary-alt":"_splitBtn--secondary-alt_1fxhh_361","splitBtn--tertiary-solid":"_splitBtn--tertiary-solid_1fxhh_377","splitBtn--tertiary-alt":"_splitBtn--tertiary-alt_1fxhh_393","splitBtn--ghost-ghost":"_splitBtn--ghost-ghost_1fxhh_409","splitBtn--ghost-link":"_splitBtn--ghost-link_1fxhh_425"},a=({buttonType:n="primary",variant:u="filled",size:m="default",label:c="Label",leadingIcon:p,showLeadingIcon:Le=!1,menuItems:G=[],loading:g=!1,disabled:O=!1,onMainClick:We,onMenuToggle:P,className:Me=""})=>{const[o,Pe]=x.useState(!1),C=x.useRef(null),b=r=>{Pe(r),P==null||P(r)};x.useEffect(()=>{if(!o)return;const r=d=>{C.current&&!C.current.contains(d.target)&&b(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[o]),x.useEffect(()=>{if(!o)return;const r=d=>{d.key==="Escape"&&b(!1)};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[o]);const Ce=`${n}-${u}`,Ee=[s.splitBtn,s[`splitBtn--${m}`],s[`splitBtn--${Ce}`],O?s["splitBtn--disabled"]:"",g?s["splitBtn--loading"]:"",o?s["splitBtn--open"]:"",Me].filter(Boolean).join(" "),y=!O&&!g;return e.jsxs("div",{className:Ee,ref:C,children:[e.jsxs("div",{className:s.splitBtn__group,children:[e.jsxs("button",{type:"button",className:s.splitBtn__main,onClick:y?We:void 0,disabled:!y,"aria-label":c,children:[g&&e.jsx("span",{className:s.splitBtn__spinner,"aria-hidden":"true"}),Le&&p&&!g&&e.jsx("span",{className:s.splitBtn__icon,"aria-hidden":"true",children:e.jsx(p,{className:s["splitBtn__icon-svg"]})}),e.jsx("span",{className:s.splitBtn__label,children:c})]}),e.jsx("span",{className:s.splitBtn__divider,"aria-hidden":"true"}),e.jsx("button",{type:"button",className:s.splitBtn__trigger,onClick:y?()=>b(!o):void 0,disabled:!y,"aria-haspopup":"listbox","aria-expanded":o,"aria-label":"Open options menu",children:e.jsx(Ge,{className:[s.splitBtn__chevron,o?s["splitBtn__chevron--open"]:""].filter(Boolean).join(" ")})})]}),o&&G.length>0&&e.jsx("div",{className:s.splitBtn__panel,role:"listbox",children:e.jsx(Ae,{items:G.map(r=>({...r,onClick:()=>{var d;(d=r.onClick)==null||d.call(r),b(!1)}})),fullWidth:!0})})]})};a.__docgenInfo={description:"",methods:[],displayName:"SplitButton",props:{buttonType:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'ghost'"}]},description:"Which button family to use",defaultValue:{value:"'primary'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline' | 'solid' | 'alt' | 'ghost' | 'link'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'alt'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'link'"}]},description:"Visual sub-variant within the family",defaultValue:{value:"'filled'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label for the main action zone",defaultValue:{value:"'Label'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI SvgIcon component)"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonMenuItem"}],raw:"ButtonMenuItem[]"},description:"Menu items shown in the dropdown panel",defaultValue:{value:"[]",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner — disables interaction",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interaction",defaultValue:{value:"false",computed:!1}},onMainClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback for the main action button click"},onMenuToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback fired when dropdown open state changes"},className:{required:!1,tsType:{name:"string"},description:"Extra class on the container",defaultValue:{value:"''",computed:!1}}}};const t=[{label:"Edit",leadingIcon:M},{label:"Duplicate",leadingIcon:we},{label:"Archive",leadingIcon:ke},{label:"Delete",leadingIcon:De}],A=()=>e.jsxs(l,{children:[e.jsx(l.Header,{title:"Split / Dropdown Button",subtitle:"A compound button pairing a primary action with a chevron dropdown trigger — available in all four button families and their variants"}),e.jsxs(l.BodyText,{children:["The ",e.jsx("strong",{children:"Split Button"})," combines a main action zone with a separate chevron dropdown trigger, separated by a vertical divider. Clicking the main zone fires the primary action; clicking the chevron reveals a ",e.jsx("code",{children:"ButtonMenu"})," panel of secondary options. All four button families — ",e.jsx("strong",{children:"Primary"}),", ",e.jsx("strong",{children:"Secondary"}),","," ",e.jsx("strong",{children:"Tertiary"}),", and ",e.jsx("strong",{children:"Ghost"})," — are supported, including their respective alt/outline variants."]}),e.jsx(l.Section,{title:"Component Anatomy",children:e.jsx(l.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Save",menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Export",showLeadingIcon:!0,leadingIcon:E,menuItems:t})]}),parts:[{id:1,name:"Main Button Zone",token:`--btn-padding-default (12px 16px)
--btn-font-size-default (16px)
--btn-font-weight (300 light)`,description:"Fires the primary action on click. Shares background, color, and border with the trigger zone. Takes up all available space (flex: 1)."},{id:2,name:"Vertical Divider",token:`--btn-split-divider-width (1px)
--btn-split-divider-opacity (0.4)`,description:"A 1px vertical rule at 40% opacity that visually separates the main zone from the dropdown trigger. Inherits the button's text color."},{id:3,name:"Chevron Trigger",token:`--btn-split-trigger-width-default (40px)
--btn-split-chevron-size (18px)
--btn-split-chevron-opacity (0.75)`,description:"Fixed-width zone that opens the dropdown panel. Rotates 180° when the panel is open. Width: 40px (S: 32px, L: 48px)."},{id:4,name:"Dropdown Panel",token:`--btn-split-panel-shadow (0px 5px 10px rgba(39,39,39,0.12))
--btn-split-panel-offset (4px)
--btn-split-panel-z-index (200)`,description:"Absolutely positioned below the button group. Contains a ButtonMenu component at full container width. Closes on outside-click or Escape."}]})}),e.jsxs(l.Section,{title:"Primary Button — Dropdown",children:[e.jsx(l.BodyText,{children:"The primary filled variant uses the brand blue background with white text. The outline variant uses the periwinkle-50 background with blue-gray text and a blue-300 border."}),e.jsx(l.Subsection,{title:"Filled (default)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"primary",variant:"filled",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"primary",variant:"filled",size:"large",label:"Large",menuItems:t})]})}),e.jsx(l.Subsection,{title:"Outline (alt)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"primary",variant:"outline",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"primary",variant:"outline",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"primary",variant:"outline",size:"large",label:"Large",menuItems:t})]})})]}),e.jsxs(l.Section,{title:"Secondary Button — Dropdown",children:[e.jsx(l.BodyText,{children:"Secondary split buttons use the sky-blue color family. Solid uses the sky-blue-50 tinted background; Alt uses white."}),e.jsx(l.Subsection,{title:"Solid",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"secondary",variant:"solid",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"solid",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"solid",size:"large",label:"Large",menuItems:t})]})}),e.jsx(l.Subsection,{title:"Alt (white background)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"secondary",variant:"alt",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"alt",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"alt",size:"large",label:"Large",menuItems:t})]})})]}),e.jsxs(l.Section,{title:"Tertiary Button — Dropdown",children:[e.jsx(l.BodyText,{children:"Tertiary split buttons use the yellow/amber color family with a dark-seafoam drop shadow on hover. Alt uses the seafoam-25 background."}),e.jsx(l.Subsection,{title:"Solid (yellow)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"tertiary",variant:"solid",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"solid",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"solid",size:"large",label:"Large",menuItems:t})]})}),e.jsx(l.Subsection,{title:"Alt (seafoam background)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"tertiary",variant:"alt",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"alt",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"alt",size:"large",label:"Large",menuItems:t})]})})]}),e.jsxs(l.Section,{title:"Ghost Button — Dropdown",children:[e.jsx(l.BodyText,{children:"Ghost split buttons use the blue-50 bordered style. The link variant uses a minimal bordered treatment with a light gray border for structure."}),e.jsx(l.Subsection,{title:"Ghost (bordered)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"ghost",variant:"ghost",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"ghost",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"ghost",size:"large",label:"Large",menuItems:t})]})}),e.jsx(l.Subsection,{title:"Link variant",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"ghost",variant:"link",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"link",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"link",size:"large",label:"Large",menuItems:t})]})})]}),e.jsxs(l.Section,{title:"States",children:[e.jsx(l.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Download",showLeadingIcon:!0,leadingIcon:E,menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Profile",showLeadingIcon:!0,leadingIcon:W,menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"solid",label:"Edit",showLeadingIcon:!0,leadingIcon:M,menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"ghost",label:"Options",showLeadingIcon:!0,leadingIcon:W,menuItems:t})]})}),e.jsxs(l.Subsection,{title:"Loading",children:[e.jsxs(l.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner in the main zone and disable all interaction."]}),e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Saving…",loading:!0,menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Saving…",loading:!0,menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"solid",label:"Saving…",loading:!0,menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"ghost",label:"Saving…",loading:!0,menuItems:t})]})]}),e.jsxs(l.Subsection,{title:"Disabled",children:[e.jsxs(l.BodyText,{children:["Pass ",e.jsx("code",{children:"disabled"})," to prevent all interaction. Both zones adopt the disabled colour palette from their respective button family tokens."]}),e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Disabled",disabled:!0,menuItems:t}),e.jsx(a,{buttonType:"primary",variant:"outline",label:"Disabled",disabled:!0,menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Disabled",disabled:!0,menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"solid",label:"Disabled",disabled:!0,menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"ghost",label:"Disabled",disabled:!0,menuItems:t})]})]})]}),e.jsx(l.TokenTable,{title:"Design Tokens — Structure",description:"SplitButton structural tokens:",tokens:[{name:"--btn-split-trigger-width-small",description:"Chevron trigger width — small (32px)"},{name:"--btn-split-trigger-width-default",description:"Chevron trigger width — default (40px)"},{name:"--btn-split-trigger-width-large",description:"Chevron trigger width — large (48px)"},{name:"--btn-split-divider-width",description:"Vertical divider thickness — 1px (--global-spacing-stroke-1px)"},{name:"--btn-split-divider-opacity",description:"Divider opacity — 0.4"},{name:"--btn-split-chevron-size",description:"Chevron icon size — 18px (--global-spacing-sizing-18px)"},{name:"--btn-split-chevron-opacity",description:"Chevron icon opacity — 0.75"},{name:"--btn-split-chevron-rotate",description:"Chevron rotation when open — 180deg"},{name:"--btn-split-panel-shadow",description:"Dropdown panel shadow — 0px 5px 10px rgba(39,39,39,0.12)"},{name:"--btn-split-panel-offset",description:"Gap between button and panel — 4px"},{name:"--btn-split-panel-z-index",description:"Panel stacking order — 200"}]}),e.jsx(l.CodeBlock,{children:`import { SplitButton } from './SplitButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const menuItems = [
  { label: 'Edit',      onClick: () => console.log('Edit') },
  { label: 'Duplicate', onClick: () => console.log('Duplicate') },
  { label: 'Delete',    onClick: () => console.log('Delete'), disabled: true },
];

// Primary filled (default)
<SplitButton
  buttonType="primary"
  variant="filled"
  label="Save"
  menuItems={menuItems}
  onMainClick={() => console.log('Save clicked')}
/>

// Primary outline
<SplitButton buttonType="primary" variant="outline" label="Save" menuItems={menuItems} />

// Secondary solid / alt
<SplitButton buttonType="secondary" variant="solid" label="Export" menuItems={menuItems} />
<SplitButton buttonType="secondary" variant="alt"   label="Export" menuItems={menuItems} />

// Tertiary solid / alt
<SplitButton buttonType="tertiary" variant="solid" label="Publish" menuItems={menuItems} />
<SplitButton buttonType="tertiary" variant="alt"   label="Publish" menuItems={menuItems} />

// Ghost / Link
<SplitButton buttonType="ghost" variant="ghost" label="Options" menuItems={menuItems} />
<SplitButton buttonType="ghost" variant="link"  label="Options" menuItems={menuItems} />

// Loading / Disabled
<SplitButton buttonType="primary" variant="filled" label="Saving…" loading menuItems={menuItems} />
<SplitButton buttonType="primary" variant="filled" label="Submit"  disabled menuItems={menuItems} />`}),e.jsxs(l.Principles,{children:[e.jsx(l.PrincipleCard,{number:1,title:"Main action should be the most common path",children:"Put the highest-frequency action in the main zone. Secondary and destructive actions (delete, archive) belong in the dropdown. Don't hide the primary intent behind the chevron."}),e.jsx(l.PrincipleCard,{number:2,title:"Match the button family to its hierarchy",children:"Use the same button type as you would for a regular button in that context. A Split Primary Button competes with other Primary Buttons — use it only when the action genuinely needs a dropdown."}),e.jsx(l.PrincipleCard,{number:3,title:"Disable consistently across both zones",children:"Both the main action and the chevron should be disabled together. Never disable only one zone — it creates an ambiguous affordance about what actions are available."})]}),e.jsx(l.Footer,{})]});A.__docgenInfo={description:"",methods:[],displayName:"SplitButtonDocs"};const i=[{label:"Edit",leadingIcon:M,onClick:()=>{}},{label:"Duplicate",leadingIcon:we,onClick:()=>{}},{label:"Archive",leadingIcon:ke,onClick:()=>{}},{label:"Delete",leadingIcon:De,onClick:()=>{}}],sa={title:"Atoms/Buttons/Split Button",component:a,parameters:{docs:{page:()=>e.jsx(A,{})}},argTypes:{buttonType:{control:"select",options:["primary","secondary","tertiary","ghost"],description:"Button family (controls the colour family)"},variant:{control:"select",options:["filled","outline","solid","alt","ghost","link"],description:"Visual sub-variant — must match the selected buttonType"},size:{control:"select",options:["small","default","large"]},label:{control:"text"},showLeadingIcon:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"}},args:{buttonType:"primary",variant:"filled",size:"default",label:"Label",showLeadingIcon:!1,loading:!1,disabled:!1,menuItems:i}},v={render:()=>e.jsx(A,{}),parameters:{controls:{disable:!0},actions:{disable:!0}}},h={},f={name:"Primary — Filled",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(n=>e.jsx(a,{buttonType:"primary",variant:"filled",size:n,label:n,menuItems:i},n))}),parameters:{controls:{disable:!0}}},I={name:"Primary — Outline",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(n=>e.jsx(a,{buttonType:"primary",variant:"outline",size:n,label:n,menuItems:i},n))}),parameters:{controls:{disable:!0}}},_={name:"Secondary — Solid",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(n=>e.jsx(a,{buttonType:"secondary",variant:"solid",size:n,label:n,menuItems:i},n))}),parameters:{controls:{disable:!0}}},S={name:"Secondary — Alt (white bg)",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(n=>e.jsx(a,{buttonType:"secondary",variant:"alt",size:n,label:n,menuItems:i},n))}),parameters:{controls:{disable:!0}}},B={name:"Tertiary — Solid (yellow)",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(n=>e.jsx(a,{buttonType:"tertiary",variant:"solid",size:n,label:n,menuItems:i},n))}),parameters:{controls:{disable:!0}}},T={name:"Tertiary — Alt (seafoam bg)",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(n=>e.jsx(a,{buttonType:"tertiary",variant:"alt",size:n,label:n,menuItems:i},n))}),parameters:{controls:{disable:!0}}},z={name:"Ghost — Ghost (bordered)",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(n=>e.jsx(a,{buttonType:"ghost",variant:"ghost",size:n,label:n,menuItems:i},n))}),parameters:{controls:{disable:!0}}},j={name:"Ghost — Link variant",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(n=>e.jsx(a,{buttonType:"ghost",variant:"link",size:n,label:n,menuItems:i},n))}),parameters:{controls:{disable:!0}}},w={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Download",showLeadingIcon:!0,leadingIcon:E,menuItems:i}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Profile",showLeadingIcon:!0,leadingIcon:W,menuItems:i}),e.jsx(a,{buttonType:"tertiary",variant:"solid",label:"Edit",showLeadingIcon:!0,leadingIcon:M,menuItems:i}),e.jsx(a,{buttonType:"ghost",variant:"ghost",label:"Options",showLeadingIcon:!0,leadingIcon:W,menuItems:i})]}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Saving…",loading:!0,menuItems:i}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Saving…",loading:!0,menuItems:i}),e.jsx(a,{buttonType:"tertiary",variant:"solid",label:"Saving…",loading:!0,menuItems:i}),e.jsx(a,{buttonType:"ghost",variant:"ghost",label:"Saving…",loading:!0,menuItems:i})]}),parameters:{controls:{disable:!0}}},D={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Disabled",disabled:!0,menuItems:i}),e.jsx(a,{buttonType:"primary",variant:"outline",label:"Disabled",disabled:!0,menuItems:i}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Disabled",disabled:!0,menuItems:i}),e.jsx(a,{buttonType:"secondary",variant:"alt",label:"Disabled",disabled:!0,menuItems:i}),e.jsx(a,{buttonType:"tertiary",variant:"solid",label:"Disabled",disabled:!0,menuItems:i}),e.jsx(a,{buttonType:"ghost",variant:"ghost",label:"Disabled",disabled:!0,menuItems:i})]}),parameters:{controls:{disable:!0}}},L={render:()=>{const n=[{buttonType:"primary",variant:"filled",label:"Primary / Filled"},{buttonType:"primary",variant:"outline",label:"Primary / Outline"},{buttonType:"secondary",variant:"solid",label:"Secondary / Solid"},{buttonType:"secondary",variant:"alt",label:"Secondary / Alt"},{buttonType:"tertiary",variant:"solid",label:"Tertiary / Solid"},{buttonType:"tertiary",variant:"alt",label:"Tertiary / Alt"},{buttonType:"ghost",variant:"ghost",label:"Ghost / Ghost"},{buttonType:"ghost",variant:"link",label:"Ghost / Link"}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)"},children:n.map(({buttonType:u,variant:m,label:c})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[e.jsx("span",{style:{width:"var(--global-spacing-sizing-160px)",flexShrink:0,fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)"},children:c}),["small","default","large"].map(p=>e.jsx(a,{buttonType:u,variant:m,size:p,label:p==="default"?"Label":p,menuItems:i},p))]},`${u}-${m}`))})},parameters:{controls:{disable:!0}}};var V,N,q;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <SplitButtonDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(q=(N=v.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var F,R,$;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...($=(R=h.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var H,K,U;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Primary — Filled',
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-16px)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map(size => <SplitButton key={size} buttonType="primary" variant="filled" size={size} label={size} menuItems={sampleMenu} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(K=f.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Z,J,Q;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Primary — Outline',
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-16px)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map(size => <SplitButton key={size} buttonType="primary" variant="outline" size={size} label={size} menuItems={sampleMenu} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Q=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,ee;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Secondary — Solid',
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-16px)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map(size => <SplitButton key={size} buttonType="secondary" variant="solid" size={size} label={size} menuItems={sampleMenu} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,te,ne;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Secondary — Alt (white bg)',
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-16px)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map(size => <SplitButton key={size} buttonType="secondary" variant="alt" size={size} label={size} menuItems={sampleMenu} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,ie,se;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Tertiary — Solid (yellow)',
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-16px)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map(size => <SplitButton key={size} buttonType="tertiary" variant="solid" size={size} label={size} menuItems={sampleMenu} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var re,oe,pe;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Tertiary — Alt (seafoam bg)',
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-16px)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map(size => <SplitButton key={size} buttonType="tertiary" variant="alt" size={size} label={size} menuItems={sampleMenu} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(pe=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:pe.source}}};var de,ue,me;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Ghost — Ghost (bordered)',
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-16px)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map(size => <SplitButton key={size} buttonType="ghost" variant="ghost" size={size} label={size} menuItems={sampleMenu} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(ue=z.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ce,ge,be;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Ghost — Link variant',
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-16px)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      {(['small', 'default', 'large'] as SplitButtonSize[]).map(size => <SplitButton key={size} buttonType="ghost" variant="link" size={size} label={size} menuItems={sampleMenu} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(be=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ye,xe,ve;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-16px)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      <SplitButton buttonType="primary" variant="filled" label="Download" showLeadingIcon leadingIcon={DownloadIcon} menuItems={sampleMenu} />
      <SplitButton buttonType="secondary" variant="solid" label="Profile" showLeadingIcon leadingIcon={PersonIcon} menuItems={sampleMenu} />
      <SplitButton buttonType="tertiary" variant="solid" label="Edit" showLeadingIcon leadingIcon={EditIcon} menuItems={sampleMenu} />
      <SplitButton buttonType="ghost" variant="ghost" label="Options" showLeadingIcon leadingIcon={PersonIcon} menuItems={sampleMenu} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ve=(xe=w.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var he,fe,Ie;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-16px)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      <SplitButton buttonType="primary" variant="filled" label="Saving…" loading menuItems={sampleMenu} />
      <SplitButton buttonType="secondary" variant="solid" label="Saving…" loading menuItems={sampleMenu} />
      <SplitButton buttonType="tertiary" variant="solid" label="Saving…" loading menuItems={sampleMenu} />
      <SplitButton buttonType="ghost" variant="ghost" label="Saving…" loading menuItems={sampleMenu} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ie=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:Ie.source}}};var _e,Se,Be;D.parameters={...D.parameters,docs:{...(_e=D.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-16px)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      <SplitButton buttonType="primary" variant="filled" label="Disabled" disabled menuItems={sampleMenu} />
      <SplitButton buttonType="primary" variant="outline" label="Disabled" disabled menuItems={sampleMenu} />
      <SplitButton buttonType="secondary" variant="solid" label="Disabled" disabled menuItems={sampleMenu} />
      <SplitButton buttonType="secondary" variant="alt" label="Disabled" disabled menuItems={sampleMenu} />
      <SplitButton buttonType="tertiary" variant="solid" label="Disabled" disabled menuItems={sampleMenu} />
      <SplitButton buttonType="ghost" variant="ghost" label="Disabled" disabled menuItems={sampleMenu} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Be=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var Te,ze,je;L.parameters={...L.parameters,docs:{...(Te=L.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const variants: Array<{
      buttonType: SplitButtonType;
      variant: SplitButtonVariant;
      label: string;
    }> = [{
      buttonType: 'primary',
      variant: 'filled',
      label: 'Primary / Filled'
    }, {
      buttonType: 'primary',
      variant: 'outline',
      label: 'Primary / Outline'
    }, {
      buttonType: 'secondary',
      variant: 'solid',
      label: 'Secondary / Solid'
    }, {
      buttonType: 'secondary',
      variant: 'alt',
      label: 'Secondary / Alt'
    }, {
      buttonType: 'tertiary',
      variant: 'solid',
      label: 'Tertiary / Solid'
    }, {
      buttonType: 'tertiary',
      variant: 'alt',
      label: 'Tertiary / Alt'
    }, {
      buttonType: 'ghost',
      variant: 'ghost',
      label: 'Ghost / Ghost'
    }, {
      buttonType: 'ghost',
      variant: 'link',
      label: 'Ghost / Link'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--global-spacing-sizing-16px)',
      padding: 'var(--global-spacing-sizing-24px)'
    }}>
        {variants.map(({
        buttonType,
        variant,
        label
      }) => <div key={\`\${buttonType}-\${variant}\`} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-24px)',
        flexWrap: 'wrap'
      }}>
            <span style={{
          width: 'var(--global-spacing-sizing-160px)',
          flexShrink: 0,
          fontSize: 'var(--global-type-size-primary-label-xs)',
          color: 'var(--global-color-neutral-gray-500)',
          fontFamily: 'var(--brand-font-primary)'
        }}>
              {label}
            </span>
            {(['small', 'default', 'large'] as SplitButtonSize[]).map(size => <SplitButton key={size} buttonType={buttonType} variant={variant} size={size} label={size === 'default' ? 'Label' : size} menuItems={sampleMenu} />)}
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(je=(ze=L.parameters)==null?void 0:ze.docs)==null?void 0:je.source}}};const ra=["Documentation","Default","PrimaryFilled","PrimaryOutline","SecondarySolid","SecondaryAlt","TertiarySolid","TertiaryAlt","GhostBordered","GhostLink","WithLeadingIcon","Loading","Disabled","AllVariants"];export{L as AllVariants,h as Default,D as Disabled,v as Documentation,z as GhostBordered,j as GhostLink,k as Loading,f as PrimaryFilled,I as PrimaryOutline,S as SecondaryAlt,_ as SecondarySolid,T as TertiaryAlt,B as TertiarySolid,w as WithLeadingIcon,ra as __namedExportsOrder,sa as default};
