import{r as x,j as e}from"./iframe-CljRg3Qj.js";import{B as Je}from"./ButtonMenu-Be92EYI5.js";import{K as Qe}from"./KeyboardArrowDown-DEYStKBn.js";import{B as q}from"./ButtonBase-DarqvuC4.js";import{D as n}from"./DocsTemplate-C1PCaRQJ.js";import{P}from"./Person-BRu34PtA.js";import{D as F}from"./Download-BglsEbWO.js";import{E as A}from"./Edit-BYIP21SR.js";import{C as Oe,A as Ve}from"./Archive-CLLV_j50.js";import{D as qe}from"./Delete-C2Ka88EI.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-l4TI029-.js";import"./DefaultPropsProvider-CMEq6pR7.js";import"./memoTheme-DX6eUG5m.js";import"./index-Jr_dyyn5.js";import"./useEventCallback-bt-yrc3D.js";import"./useForkRef-G8UPHOmR.js";const Xe="_splitBtn_1fxhh_9",Ye="_splitBtn__group_1fxhh_10",ea="_splitBtn__main_1fxhh_11",aa="_splitBtn__trigger_1fxhh_13",ta="_splitBtn__divider_1fxhh_12",na="_splitBtn__chevron_1fxhh_194",la="_splitBtn__icon_1fxhh_224",ia="_splitBtn__label_1fxhh_266",sa="_splitBtn__spinner_1fxhh_272",ra="_splitBtn__panel_1fxhh_14",s={splitBtn:Xe,"splitBtn--full-width":"_splitBtn--full-width_1fxhh_41",splitBtn__group:Ye,splitBtn__main:ea,splitBtn__trigger:aa,"splitBtn--disabled":"_splitBtn--disabled_1fxhh_151","splitBtn--loading":"_splitBtn--loading_1fxhh_163",splitBtn__divider:ta,splitBtn__chevron:na,"splitBtn__chevron--open":"_splitBtn__chevron--open_1fxhh_203","splitBtn--small":"_splitBtn--small_1fxhh_212","splitBtn__icon-svg":"_splitBtn__icon-svg_1fxhh_224","splitBtn--large":"_splitBtn--large_1fxhh_231",splitBtn__icon:la,splitBtn__label:ia,splitBtn__spinner:sa,"splitBtn-spin":"_splitBtn-spin_1fxhh_1",splitBtn__panel:ra,"splitBtn--primary-filled":"_splitBtn--primary-filled_1fxhh_313","splitBtn--primary-outline":"_splitBtn--primary-outline_1fxhh_329","splitBtn--secondary-solid":"_splitBtn--secondary-solid_1fxhh_345","splitBtn--secondary-alt":"_splitBtn--secondary-alt_1fxhh_361","splitBtn--tertiary-solid":"_splitBtn--tertiary-solid_1fxhh_377","splitBtn--tertiary-alt":"_splitBtn--tertiary-alt_1fxhh_393","splitBtn--ghost-ghost":"_splitBtn--ghost-ghost_1fxhh_409","splitBtn--ghost-link":"_splitBtn--ghost-link_1fxhh_425"},a=({buttonType:l="primary",variant:u="filled",size:m="default",label:c="Label",leadingIcon:p,showLeadingIcon:Re=!1,menuItems:O=[],loading:g=!1,disabled:V=!1,onMainClick:$e,onMenuToggle:E,className:Ke=""})=>{const[o,Ue]=x.useState(!1),G=x.useRef(null),b=r=>{Ue(r),E==null||E(r)};x.useEffect(()=>{if(!o)return;const r=d=>{G.current&&!G.current.contains(d.target)&&b(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[o]),x.useEffect(()=>{if(!o)return;const r=d=>{d.key==="Escape"&&b(!1)};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[o]);const He=`${l}-${u}`,Ze=[s.splitBtn,s[`splitBtn--${m}`],s[`splitBtn--${He}`],V?s["splitBtn--disabled"]:"",g?s["splitBtn--loading"]:"",o?s["splitBtn--open"]:"",Ke].filter(Boolean).join(" "),y=!V&&!g;return e.jsxs("div",{className:Ze,ref:G,children:[e.jsxs("div",{className:s.splitBtn__group,children:[e.jsxs(q,{component:"button",type:"button",className:s.splitBtn__main,onClick:y?$e:void 0,disabled:!y,"aria-label":c,children:[g&&e.jsx("span",{className:s.splitBtn__spinner,"aria-hidden":"true"}),Re&&p&&!g&&e.jsx("span",{className:s.splitBtn__icon,"aria-hidden":"true",children:e.jsx(p,{className:s["splitBtn__icon-svg"]})}),e.jsx("span",{className:s.splitBtn__label,children:c})]}),e.jsx("span",{className:s.splitBtn__divider,"aria-hidden":"true"}),e.jsx(q,{component:"button",type:"button",className:s.splitBtn__trigger,onClick:y?()=>b(!o):void 0,disabled:!y,"aria-haspopup":"listbox","aria-expanded":o,"aria-label":"Open options menu",children:e.jsx(Qe,{className:[s.splitBtn__chevron,o?s["splitBtn__chevron--open"]:""].filter(Boolean).join(" ")})})]}),o&&O.length>0&&e.jsx("div",{className:s.splitBtn__panel,role:"listbox",children:e.jsx(Je,{items:O.map(r=>({...r,onClick:()=>{var d;(d=r.onClick)==null||d.call(r),b(!1)}})),fullWidth:!0})})]})};a.__docgenInfo={description:"",methods:[],displayName:"SplitButton",props:{buttonType:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'ghost'"}]},description:"Which button family to use",defaultValue:{value:"'primary'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outline' | 'solid' | 'alt' | 'ghost' | 'link'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'alt'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'link'"}]},description:"Visual sub-variant within the family",defaultValue:{value:"'filled'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label for the main action zone",defaultValue:{value:"'Label'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI SvgIcon component)"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show the leading icon",defaultValue:{value:"false",computed:!1}},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonMenuItem"}],raw:"ButtonMenuItem[]"},description:"Menu items shown in the dropdown panel",defaultValue:{value:"[]",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show a loading spinner — disables interaction",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interaction",defaultValue:{value:"false",computed:!1}},onMainClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback for the main action button click"},onMenuToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback fired when dropdown open state changes"},className:{required:!1,tsType:{name:"string"},description:"Extra class on the container",defaultValue:{value:"''",computed:!1}}}};const t=[{label:"Edit",leadingIcon:A},{label:"Duplicate",leadingIcon:Oe},{label:"Archive",leadingIcon:Ve},{label:"Delete",leadingIcon:qe}],N=()=>e.jsxs(n,{children:[e.jsx(n.Header,{title:"Split / Dropdown Button",subtitle:"A compound button pairing a primary action with a chevron dropdown trigger — available in all four button families and their variants"}),e.jsxs(n.BodyText,{children:["The ",e.jsx("strong",{children:"Split Button"})," combines a main action zone with a separate chevron dropdown trigger, separated by a vertical divider. Clicking the main zone fires the primary action; clicking the chevron reveals a ",e.jsx("code",{children:"ButtonMenu"})," panel of secondary options. All four button families — ",e.jsx("strong",{children:"Primary"}),", ",e.jsx("strong",{children:"Secondary"}),","," ",e.jsx("strong",{children:"Tertiary"}),", and ",e.jsx("strong",{children:"Ghost"})," — are supported, including their respective alt/outline variants."]}),e.jsxs(n.Section,{title:"MUI Foundation",children:[e.jsxs(n.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"ButtonBase"})," — used for both the primary action zone and the chevron dropdown trigger. Each zone is an independent ",e.jsx("code",{children:"ButtonBase"})," ","element, which ensures both areas receive proper keyboard handling, accessible focus management, and disabled propagation independently. MUI's"," ",e.jsx("strong",{children:"KeyboardArrowDownIcon"})," from ",e.jsx("code",{children:"@mui/icons-material"})," is used as the dropdown chevron indicator. All visual styling is handled via CSS Modules and design tokens; MUI contributes no colour, border, or layout opinions."]}),e.jsx(n.CodeBlock,{children:`// MUI base imports
import ButtonBase from '@mui/material/ButtonBase';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Primary action zone:
<ButtonBase component="button" className={styles['split-btn__main']} onClick={onMainClick}>
// Dropdown trigger zone:
<ButtonBase component="button" className={styles['split-btn__chevron']} onClick={onChevronClick}>
  <KeyboardArrowDownIcon />
</ButtonBase>`})]}),e.jsx(n.Section,{title:"Component Anatomy",children:e.jsx(n.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Save",menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Export",showLeadingIcon:!0,leadingIcon:F,menuItems:t})]}),parts:[{id:1,name:"Main Button Zone",token:`--btn-padding-default (12px 16px)
--btn-font-size-default (16px)
--btn-font-weight (300 light)`,description:"Fires the primary action on click. Shares background, color, and border with the trigger zone. Takes up all available space (flex: 1)."},{id:2,name:"Vertical Divider",token:`--btn-split-divider-width (1px)
--btn-split-divider-opacity (0.4)`,description:"A 1px vertical rule at 40% opacity that visually separates the main zone from the dropdown trigger. Inherits the button's text color."},{id:3,name:"Chevron Trigger",token:`--btn-split-trigger-width-default (40px)
--btn-split-chevron-size (18px)
--btn-split-chevron-opacity (0.75)`,description:"Fixed-width zone that opens the dropdown panel. Rotates 180° when the panel is open. Width: 40px (S: 32px, L: 48px)."},{id:4,name:"Dropdown Panel",token:`--btn-split-panel-shadow (0px 5px 10px rgba(39,39,39,0.12))
--btn-split-panel-offset (4px)
--btn-split-panel-z-index (200)`,description:"Absolutely positioned below the button group. Contains a ButtonMenu component at full container width. Closes on outside-click or Escape."}]})}),e.jsxs(n.Section,{title:"Primary Button — Dropdown",children:[e.jsx(n.BodyText,{children:"The primary filled variant uses the brand blue background with white text. The outline variant uses the periwinkle-50 background with blue-gray text and a blue-300 border."}),e.jsx(n.Subsection,{title:"Filled (default)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"primary",variant:"filled",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"primary",variant:"filled",size:"large",label:"Large",menuItems:t})]})}),e.jsx(n.Subsection,{title:"Outline (alt)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"primary",variant:"outline",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"primary",variant:"outline",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"primary",variant:"outline",size:"large",label:"Large",menuItems:t})]})})]}),e.jsxs(n.Section,{title:"Secondary Button — Dropdown",children:[e.jsx(n.BodyText,{children:"Secondary split buttons use the sky-blue color family. Solid uses the sky-blue-50 tinted background; Alt uses white."}),e.jsx(n.Subsection,{title:"Solid",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"secondary",variant:"solid",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"solid",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"solid",size:"large",label:"Large",menuItems:t})]})}),e.jsx(n.Subsection,{title:"Alt (white background)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"secondary",variant:"alt",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"alt",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"alt",size:"large",label:"Large",menuItems:t})]})})]}),e.jsxs(n.Section,{title:"Tertiary Button — Dropdown",children:[e.jsx(n.BodyText,{children:"Tertiary split buttons use the yellow/amber color family with a dark-seafoam drop shadow on hover. Alt uses the seafoam-25 background."}),e.jsx(n.Subsection,{title:"Solid (yellow)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"tertiary",variant:"solid",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"solid",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"solid",size:"large",label:"Large",menuItems:t})]})}),e.jsx(n.Subsection,{title:"Alt (seafoam background)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"tertiary",variant:"alt",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"alt",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"alt",size:"large",label:"Large",menuItems:t})]})})]}),e.jsxs(n.Section,{title:"Ghost Button — Dropdown",children:[e.jsx(n.BodyText,{children:"Ghost split buttons use the blue-50 bordered style. The link variant uses a minimal bordered treatment with a light gray border for structure."}),e.jsx(n.Subsection,{title:"Ghost (bordered)",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"ghost",variant:"ghost",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"ghost",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"ghost",size:"large",label:"Large",menuItems:t})]})}),e.jsx(n.Subsection,{title:"Link variant",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"ghost",variant:"link",size:"small",label:"Small",menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"link",size:"default",label:"Default",menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"link",size:"large",label:"Large",menuItems:t})]})})]}),e.jsxs(n.Section,{title:"States",children:[e.jsx(n.Subsection,{title:"With Leading Icon",children:e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Download",showLeadingIcon:!0,leadingIcon:F,menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Profile",showLeadingIcon:!0,leadingIcon:P,menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"solid",label:"Edit",showLeadingIcon:!0,leadingIcon:A,menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"ghost",label:"Options",showLeadingIcon:!0,leadingIcon:P,menuItems:t})]})}),e.jsxs(n.Subsection,{title:"Loading",children:[e.jsxs(n.BodyText,{children:["Pass ",e.jsx("code",{children:"loading"})," to show a spinner in the main zone and disable all interaction."]}),e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Saving…",loading:!0,menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Saving…",loading:!0,menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"solid",label:"Saving…",loading:!0,menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"ghost",label:"Saving…",loading:!0,menuItems:t})]})]}),e.jsxs(n.Subsection,{title:"Disabled",children:[e.jsxs(n.BodyText,{children:["Pass ",e.jsx("code",{children:"disabled"})," to prevent all interaction. Both zones adopt the disabled colour palette from their respective button family tokens."]}),e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",padding:"var(--global-spacing-sizing-12px) 0",alignItems:"flex-start"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Disabled",disabled:!0,menuItems:t}),e.jsx(a,{buttonType:"primary",variant:"outline",label:"Disabled",disabled:!0,menuItems:t}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Disabled",disabled:!0,menuItems:t}),e.jsx(a,{buttonType:"tertiary",variant:"solid",label:"Disabled",disabled:!0,menuItems:t}),e.jsx(a,{buttonType:"ghost",variant:"ghost",label:"Disabled",disabled:!0,menuItems:t})]})]})]}),e.jsx(n.TokenTable,{title:"Design Tokens — Structure",description:"SplitButton structural tokens:",tokens:[{name:"--btn-split-trigger-width-small",description:"Chevron trigger width — small (32px)"},{name:"--btn-split-trigger-width-default",description:"Chevron trigger width — default (40px)"},{name:"--btn-split-trigger-width-large",description:"Chevron trigger width — large (48px)"},{name:"--btn-split-divider-width",description:"Vertical divider thickness — 1px (--global-spacing-stroke-1px)"},{name:"--btn-split-divider-opacity",description:"Divider opacity — 0.4"},{name:"--btn-split-chevron-size",description:"Chevron icon size — 18px (--global-spacing-sizing-18px)"},{name:"--btn-split-chevron-opacity",description:"Chevron icon opacity — 0.75"},{name:"--btn-split-chevron-rotate",description:"Chevron rotation when open — 180deg"},{name:"--btn-split-panel-shadow",description:"Dropdown panel shadow — 0px 5px 10px rgba(39,39,39,0.12)"},{name:"--btn-split-panel-offset",description:"Gap between button and panel — 4px"},{name:"--btn-split-panel-z-index",description:"Panel stacking order — 200"}]}),e.jsx(n.CodeBlock,{children:`import { SplitButton } from './SplitButton';
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
<SplitButton buttonType="primary" variant="filled" label="Submit"  disabled menuItems={menuItems} />`}),e.jsxs(n.Principles,{children:[e.jsx(n.PrincipleCard,{number:1,title:"Main action should be the most common path",children:"Put the highest-frequency action in the main zone. Secondary and destructive actions (delete, archive) belong in the dropdown. Don't hide the primary intent behind the chevron."}),e.jsx(n.PrincipleCard,{number:2,title:"Match the button family to its hierarchy",children:"Use the same button type as you would for a regular button in that context. A Split Primary Button competes with other Primary Buttons — use it only when the action genuinely needs a dropdown."}),e.jsx(n.PrincipleCard,{number:3,title:"Disable consistently across both zones",children:"Both the main action and the chevron should be disabled together. Never disable only one zone — it creates an ambiguous affordance about what actions are available."})]}),e.jsx(n.Footer,{})]});N.__docgenInfo={description:"",methods:[],displayName:"SplitButtonDocs"};const i=[{label:"Edit",leadingIcon:A,onClick:()=>{}},{label:"Duplicate",leadingIcon:Oe,onClick:()=>{}},{label:"Archive",leadingIcon:Ve,onClick:()=>{}},{label:"Delete",leadingIcon:qe,onClick:()=>{}}],Ta={title:"Atoms/Buttons/Split Button",component:a,parameters:{docs:{page:()=>e.jsx(N,{})}},argTypes:{buttonType:{control:"select",options:["primary","secondary","tertiary","ghost"],description:"Button family (controls the colour family)"},variant:{control:"select",options:["filled","outline","solid","alt","ghost","link"],description:"Visual sub-variant — must match the selected buttonType"},size:{control:"select",options:["small","default","large"]},label:{control:"text"},showLeadingIcon:{control:"boolean"},loading:{control:"boolean"},disabled:{control:"boolean"}},args:{buttonType:"primary",variant:"filled",size:"default",label:"Label",showLeadingIcon:!1,loading:!1,disabled:!1,menuItems:i}},h={name:"Documentation",render:()=>e.jsx(N,{}),parameters:{controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},v={name:"Playground"},f={name:"Default"},I={name:"Primary — Filled",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(l=>e.jsx(a,{buttonType:"primary",variant:"filled",size:l,label:l,menuItems:i},l))}),parameters:{controls:{disable:!0}}},B={name:"Primary — Outline",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(l=>e.jsx(a,{buttonType:"primary",variant:"outline",size:l,label:l,menuItems:i},l))}),parameters:{controls:{disable:!0}}},S={name:"Secondary — Solid",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(l=>e.jsx(a,{buttonType:"secondary",variant:"solid",size:l,label:l,menuItems:i},l))}),parameters:{controls:{disable:!0}}},z={name:"Secondary — Alt (white bg)",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(l=>e.jsx(a,{buttonType:"secondary",variant:"alt",size:l,label:l,menuItems:i},l))}),parameters:{controls:{disable:!0}}},T={name:"Tertiary — Solid (yellow)",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(l=>e.jsx(a,{buttonType:"tertiary",variant:"solid",size:l,label:l,menuItems:i},l))}),parameters:{controls:{disable:!0}}},_={name:"Tertiary — Alt (seafoam bg)",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(l=>e.jsx(a,{buttonType:"tertiary",variant:"alt",size:l,label:l,menuItems:i},l))}),parameters:{controls:{disable:!0}}},j={name:"Ghost — Ghost (bordered)",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(l=>e.jsx(a,{buttonType:"ghost",variant:"ghost",size:l,label:l,menuItems:i},l))}),parameters:{controls:{disable:!0}}},w={name:"Ghost — Link variant",render:()=>e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:["small","default","large"].map(l=>e.jsx(a,{buttonType:"ghost",variant:"link",size:l,label:l,menuItems:i},l))}),parameters:{controls:{disable:!0}}},k={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Download",showLeadingIcon:!0,leadingIcon:F,menuItems:i}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Profile",showLeadingIcon:!0,leadingIcon:P,menuItems:i}),e.jsx(a,{buttonType:"tertiary",variant:"solid",label:"Edit",showLeadingIcon:!0,leadingIcon:A,menuItems:i}),e.jsx(a,{buttonType:"ghost",variant:"ghost",label:"Options",showLeadingIcon:!0,leadingIcon:P,menuItems:i})]}),parameters:{controls:{disable:!0}}},D={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Saving…",loading:!0,menuItems:i}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Saving…",loading:!0,menuItems:i}),e.jsx(a,{buttonType:"tertiary",variant:"solid",label:"Saving…",loading:!0,menuItems:i}),e.jsx(a,{buttonType:"ghost",variant:"ghost",label:"Saving…",loading:!0,menuItems:i})]}),parameters:{controls:{disable:!0}}},M={render:()=>e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-16px)",flexWrap:"wrap",alignItems:"flex-start",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",label:"Disabled",disabled:!0,menuItems:i}),e.jsx(a,{buttonType:"primary",variant:"outline",label:"Disabled",disabled:!0,menuItems:i}),e.jsx(a,{buttonType:"secondary",variant:"solid",label:"Disabled",disabled:!0,menuItems:i}),e.jsx(a,{buttonType:"secondary",variant:"alt",label:"Disabled",disabled:!0,menuItems:i}),e.jsx(a,{buttonType:"tertiary",variant:"solid",label:"Disabled",disabled:!0,menuItems:i}),e.jsx(a,{buttonType:"ghost",variant:"ghost",label:"Disabled",disabled:!0,menuItems:i})]}),parameters:{controls:{disable:!0}}},L={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:"400px"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",size:"default",label:"Primary Filled",menuItems:i}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"4px 8px",borderRadius:"4px"},children:"--btn-split-trigger-width-default / main button + dropdown trigger"}),e.jsx(a,{buttonType:"ghost",variant:"ghost",size:"default",label:"Ghost",menuItems:i})]}),parameters:{controls:{disable:!0}}},C={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap",padding:"24px"},children:[e.jsx(a,{buttonType:"primary",variant:"filled",size:"default",label:"Default",menuItems:i}),e.jsx(a,{buttonType:"primary",variant:"filled",size:"default",label:"Loading",loading:!0,menuItems:i}),e.jsx(a,{buttonType:"primary",variant:"filled",size:"default",label:"Disabled",disabled:!0,menuItems:i})]}),parameters:{controls:{disable:!0}}},W={name:"Full Design Matrix (24 variants)",render:()=>{const l=[{buttonType:"primary",variant:"filled",label:"Primary / Filled"},{buttonType:"primary",variant:"outline",label:"Primary / Outline"},{buttonType:"secondary",variant:"solid",label:"Secondary / Solid"},{buttonType:"secondary",variant:"alt",label:"Secondary / Alt"},{buttonType:"tertiary",variant:"solid",label:"Tertiary / Solid"},{buttonType:"tertiary",variant:"alt",label:"Tertiary / Alt"},{buttonType:"ghost",variant:"ghost",label:"Ghost / Ghost"},{buttonType:"ghost",variant:"link",label:"Ghost / Link"}];return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)"},children:l.map(({buttonType:u,variant:m,label:c})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[e.jsx("span",{style:{width:"var(--global-spacing-sizing-160px)",flexShrink:0,fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)"},children:c}),["small","default","large"].map(p=>e.jsx(a,{buttonType:u,variant:m,size:p,label:p==="default"?"Label":p,menuItems:i},p))]},`${u}-${m}`))})},parameters:{controls:{disable:!0}}};var R,$,K;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <SplitButtonDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(K=($=h.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var U,H,Z;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(Z=(H=v.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var J,Q,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Default'
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,ae;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ae=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,le;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var ie,se,re;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(se=S.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var oe,pe,de;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var ue,me,ce;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ce=(me=T.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var ge,be,ye;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ye=(be=_.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var xe,he,ve;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ve=(he=j.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,Ie,Be;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Be=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:Be.source}}};var Se,ze,Te;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Te=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:Te.source}}};var _e,je,we;D.parameters={...D.parameters,docs:{...(_e=D.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(we=(je=D.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var ke,De,Me;M.parameters={...M.parameters,docs:{...(ke=M.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Me=(De=M.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}};var Le,Ce,We;L.parameters={...L.parameters,docs:{...(Le=L.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    maxWidth: '400px'
  }}>
      <SplitButton buttonType="primary" variant="filled" size="default" label="Primary Filled" menuItems={sampleMenu} />
      <code style={{
      fontSize: '10px',
      background: 'var(--global-color-neutral-gray-100)',
      padding: '4px 8px',
      borderRadius: '4px'
    }}>--btn-split-trigger-width-default / main button + dropdown trigger</code>
      <SplitButton buttonType="ghost" variant="ghost" size="default" label="Ghost" menuItems={sampleMenu} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(We=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:We.source}}};var Pe,Ae,Ee;C.parameters={...C.parameters,docs:{...(Pe=C.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>
      <SplitButton buttonType="primary" variant="filled" size="default" label="Default" menuItems={sampleMenu} />
      <SplitButton buttonType="primary" variant="filled" size="default" label="Loading" loading menuItems={sampleMenu} />
      <SplitButton buttonType="primary" variant="filled" size="default" label="Disabled" disabled menuItems={sampleMenu} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Ee=(Ae=C.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source}}};var Ge,Fe,Ne;W.parameters={...W.parameters,docs:{...(Ge=W.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Full Design Matrix (24 variants)',
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
}`,...(Ne=(Fe=W.parameters)==null?void 0:Fe.docs)==null?void 0:Ne.source}}};const _a=["Documentation","Playground","Default","PrimaryFilled","PrimaryOutline","SecondarySolid","SecondaryAlt","TertiarySolid","TertiaryAlt","GhostBordered","GhostLink","WithLeadingIcon","Loading","Disabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{C as AllInteractiveStates,L as ComponentBreakdown,f as Default,M as Disabled,h as Documentation,W as FullDesignMatrix,j as GhostBordered,w as GhostLink,D as Loading,v as Playground,I as PrimaryFilled,B as PrimaryOutline,z as SecondaryAlt,S as SecondarySolid,_ as TertiaryAlt,T as TertiarySolid,k as WithLeadingIcon,_a as __namedExportsOrder,Ta as default};
