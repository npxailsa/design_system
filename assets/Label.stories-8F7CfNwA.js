import{j as e,R as W}from"./iframe-IGtK3W5w.js";import{P as ze}from"./Person-EKiXH2Hd.js";import{A as Fe}from"./ArrowForward-DhEwN6pj.js";import{K as Ae}from"./KeyboardArrowDown-ZDEO6ZBF.js";import{I as L}from"./Icon-CMUfYU4p.js";import{D as a}from"./DocsTemplate-CBWx9qNz.js";import{M as Me}from"./Mail-i3SyYHoe.js";import{S as Ce}from"./Settings-DDCY5cwd.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-DSQKAc7b.js";import"./DefaultPropsProvider-BRupinb1.js";import"./memoTheme-gJInF0im.js";const Be="_labelContainer_1tsg7_6",Pe="_split_1tsg7_121",Re="_splitDivider_1tsg7_130",Ue="_chevronIcon_1tsg7_137",Ve="_labelText_1tsg7_141",n={labelContainer:Be,"font-secondary":"_font-secondary_1tsg7_37","font-primary":"_font-primary_1tsg7_41","align-left":"_align-left_1tsg7_46","align-centre":"_align-centre_1tsg7_50","align-right":"_align-right_1tsg7_55","weight-bold":"_weight-bold_1tsg7_61","weight-medium":"_weight-medium_1tsg7_65","weight-light":"_weight-light_1tsg7_69","weight-thin":"_weight-thin_1tsg7_73","size-large":"_size-large_1tsg7_80","size-default":"_size-default_1tsg7_92","size-small":"_size-small_1tsg7_99","size-x-small":"_size-x-small_1tsg7_106","size-2x-small":"_size-2x-small_1tsg7_113",split:Pe,splitDivider:Re,chevronIcon:Ue,labelText:Ve},l=({children:t="Label",size:r="default",weight:s="bold",font:i="primary",align:d="left",dropdown:Le=!1,component:Se="div",ariaLabel:De,leadingIcon:T=ze,trailingIcon:I=Fe,showLeadingIcon:_e=!0,showTrailingIcon:Te=!0,showSplit:Ie=!0,className:We=""})=>{const ke=[n.labelContainer,n[`size-${r}`],n[`weight-${s}`],n[`font-${i}`],n[`align-${d}`],We].join(" ");return e.jsxs(Se,{className:ke,"aria-label":De,children:[_e&&T&&e.jsx(L,{icon:T,size:r}),e.jsx("span",{className:n.labelText,children:t}),Te&&I&&e.jsx(L,{icon:I,size:r}),Le&&Ie&&e.jsxs("div",{className:n.split,children:[e.jsx("div",{className:n.splitDivider}),e.jsx(L,{icon:Ae,size:r,className:n.chevronIcon})]})]})};l.__docgenInfo={description:"A versatile Label component for displaying text with optional icons and dropdown split.",methods:[],displayName:"Label",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label text content",defaultValue:{value:"'Label'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'large' | 'default' | 'small' | 'x-small' | '2x-small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'default'"},{name:"literal",value:"'small'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'2x-small'"}]},description:"Size variant — controls font-size, line-height, gap, and icon size",defaultValue:{value:"'default'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'medium' | 'light' | 'thin'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'light'"},{name:"literal",value:"'thin'"}]},description:"Font weight",defaultValue:{value:"'bold'",computed:!1}},font:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"Font family variant — 'primary' or 'secondary' as defined in brand tokens.",defaultValue:{value:"'primary'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'centre' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'centre'"},{name:"literal",value:"'right'"}]},description:"Text and content alignment",defaultValue:{value:"'left'",computed:!1}},dropdown:{required:!1,tsType:{name:"boolean"},description:"Shows dropdown split + chevron-down icon after trailing icon",defaultValue:{value:"false",computed:!1}},component:{required:!1,tsType:{name:"union",raw:"'label' | 'span' | 'div'",elements:[{name:"literal",value:"'label'"},{name:"literal",value:"'span'"},{name:"literal",value:"'div'"}]},description:"Semantic HTML element to render",defaultValue:{value:"'div'",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},leadingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional leading icon (MUI icon component).",defaultValue:{value:"PersonIcon",computed:!0}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the leading icon",defaultValue:{value:"true",computed:!1}},trailingIcon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Optional trailing icon (MUI icon component). Defaults to ArrowForwardIcon.",defaultValue:{value:"ArrowForwardIcon",computed:!0}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show the trailing icon",defaultValue:{value:"true",computed:!1}},showSplit:{required:!1,tsType:{name:"boolean"},description:"Whether to show the split divider and chevron (only if dropdown is true)",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const _=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Label",subtitle:"A core building block for displaying text with optional icons and dropdown split functionality"}),e.jsx(a.BodyText,{children:"The Label component is a core building block of the design system, used to display text with optional icons and dropdown split functionality. It is designed to be highly systematic, with 120 possible variants based on size, weight, alignment, and state."}),e.jsxs(a.Section,{title:"MUI Foundation",children:[e.jsxs(a.BodyText,{children:["The Label component itself has ",e.jsx("strong",{children:"no MUI layout base"})," — it renders as a plain ",e.jsx("code",{children:"<span>"})," / ",e.jsx("code",{children:"<div>"})," flex container. However, it uses MUI icons from ",e.jsx("code",{children:"@mui/icons-material"})," extensively: the"," ",e.jsx("strong",{children:"PersonIcon"})," appears as the default leading icon, the"," ",e.jsx("strong",{children:"ArrowForwardIcon"})," as the trailing action icon, and the"," ",e.jsx("strong",{children:"KeyboardArrowDownIcon"})," as the dropdown chevron. All sizing, spacing, and state tokens are from the ",e.jsx("code",{children:"--label-*"})," token family applied via CSS Modules."]}),e.jsx(a.CodeBlock,{children:`// MUI icon imports used in Label
import PersonIcon from '@mui/icons-material/Person';          // leading
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // trailing
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // dropdown

// Label renders as:
<span className={styles.label}>
  {showLeadingIcon && <PersonIcon className={styles['label__icon']} />}
  <span className={styles['label__text']}>{children}</span>
  {trailingIcon && <ArrowForwardIcon className={styles['label__icon']} />}
</span>`})]}),e.jsxs(a.Section,{title:"Component Anatomy",children:[e.jsx(a.BodyText,{children:"The diagram below shows the anatomy of a default-size bold Label with a leading icon and optional dropdown split. All three elements are independently optional."}),e.jsx(a.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2F19def398fc2449d4811d7e7b92b6c603",alt:"Label component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Leading Icon",token:`filled/icons (user category)
--label-icon-color
--label-gap-{size}`,description:"Optional icon preceding the text. W: 18, H: 18, fill: #FFFFFF. Icon name: account, category: user. Controlled by showLeadingIcon prop."},{id:2,name:"Label",token:`--label-font-family (--brand-font-primary)
--label-size (18px)
--label-line-height (24px)
--label-text-color (color/base/black)`,description:"Primary text content. W: HUG, H: HUG. Uses F37 Ginger Regular at 18px with 24px line-height. Colour: color/base/black."},{id:3,name:"Trailing Icon",token:`filled/icons (action category)
--label-icon-color
--label-gap-{size}`,description:"Optional icon after the text. W: 18, H: 18, fill: #FFFFFF. Icon name: arrow-right, category: action. Controlled by showTrailingIcon prop."},{id:4,name:"Split",token:`--label-dropdown-split-width
--label-dropdown-split-gap (--global-spacing-sizing-4px)`,description:"Optional split divider for dropdown-trigger labels. W: HUG, H: FILL. Gap uses spacing/sizing/4px. Controlled by the showDropdown prop."}]})]}),e.jsx(a.TokenTable,{title:"Design Tokens — Core",description:"We use the following core tokens to render our labels:",tokens:[{name:"--label-text-color",description:"Primary text color"},{name:"--label-font-family",description:"Font family"},{name:"--label-icon-color",description:"Primary icon color"},{name:"--label-divider-color",description:"Dropdown divider color"},{name:"--label-letter-spacing",description:"Global letter spacing"}]}),e.jsx(a.TokenTable,{title:"Design Tokens — Size",description:"Size tokens control font size, line height, and gap at each scale:",tokens:[{name:"--label-size-large",description:"Large font size"},{name:"--label-size-default",description:"Default font size"},{name:"--label-size-small",description:"Small font size"},{name:"--label-size-x-small",description:"X-Small font size"},{name:"--label-size-2x-small",description:"2X-Small font size"},{name:"--label-line-height-large",description:"Large line height"},{name:"--label-line-height-default",description:"Default line height"},{name:"--label-line-height-small",description:"Small line height"},{name:"--label-line-height-x-small",description:"X-Small line height"},{name:"--label-line-height-2x-small",description:"2X-Small line height"},{name:"--label-gap-large",description:"Large gap between icons/text"},{name:"--label-gap-default",description:"Default gap between icons/text"},{name:"--label-gap-small",description:"Small gap between icons/text"},{name:"--label-gap-x-small",description:"X-Small gap between icons/text"},{name:"--label-gap-2x-small",description:"2X-Small gap between icons/text"}]}),e.jsx(a.TokenTable,{title:"Design Tokens — Weight",description:"Weight tokens control font weight values:",tokens:[{name:"--label-weight-bold",description:"Bold font weight"},{name:"--label-weight-medium",description:"Medium font weight"},{name:"--label-weight-light",description:"Light font weight"},{name:"--label-weight-thin",description:"Thin font weight"}]}),e.jsx(a.TokenTable,{title:"Design Tokens — Dropdown",description:"Dropdown-specific tokens for the split variant:",tokens:[{name:"--label-dropdown-split-width",description:"Divider width"},{name:"--label-dropdown-split-opacity",description:"Divider opacity"},{name:"--label-dropdown-chevron-opacity",description:"Chevron icon opacity"},{name:"--label-dropdown-split-gap",description:"Gap within dropdown split"},{name:"--label-dropdown-padding-left",description:"Padding left for split section"}]}),e.jsx(a.Section,{title:"Principles",subtitle:"Follow these common design principles by using labels in a cohesive, useful, and legible way."}),e.jsxs(a.Principles,{children:[e.jsx(a.PrincipleCard,{number:1,title:"Design for universal understanding",children:"Labels should be clear, concise, and clearly describe the content or action they relate to."}),e.jsx(a.PrincipleCard,{number:2,title:"Balance simplicity and detail to create legibility",children:"Craft labels that use short, simple words, whilst containing enough context to properly identify the associated action or content."}),e.jsx(a.PrincipleCard,{number:3,title:"Maintain visual harmony",children:"Ensure labels work together as a cohesive system by adhering to consistent size, shape, and alignment guidelines across the entire interface."}),e.jsx(a.PrincipleCard,{number:4,title:"Use labels intentionally",children:"Labels provide crucial context and hierarchy to UI elements. Avoid unnecessary labels that repeat information clearly implied by icons or surrounding context."})]}),e.jsx(a.Section,{title:"Using the component",subtitle:"Import the Label component and pass your desired props."}),e.jsx(a.CodeBlock,{children:`import { Label } from './Label';
import PersonIcon from '@mui/icons-material/Person';

const MyComponent = () => (
  <Label size="default" weight="bold" leadingIcon={PersonIcon}>
    Example Label
  </Label>
);`}),e.jsx(a.Section,{title:"Visual style",subtitle:"Labels support different visual weights, dropdown variations, and alignments. Ensure appropriate contrast ratios when switching between brands."}),e.jsx(a.Subsection,{title:"Weights"}),e.jsx(a.BodyText,{children:"The Label component supports four font weights: bold, medium, light, and thin. Use systematic weights for consistent hierarchy throughout the interface."}),e.jsx(a.DosDonts,{doItem:{icon:e.jsx("span",{style:{fontWeight:"var(--global-type-weight-bold)",fontSize:"var(--global-type-size-primary-label-lg)"},children:"Aa"}),description:"Use systematic weights (bold, medium, light, thin) for consistent hierarchy."},dontItem:{icon:e.jsx("span",{style:{fontWeight:450,fontSize:"var(--global-type-size-primary-label-lg)"},children:"Aa"}),description:"Overwrite internal component styles directly; use the token system. Avoid creating new custom weights or hardcoding pixel sizes."}}),e.jsx(a.Subsection,{title:"Alignment"}),e.jsx(a.BodyText,{children:"Labels can be aligned left, centre, or right. Choose alignment that matches the context of the surrounding layout."}),e.jsx(a.Section,{title:"Size & spacing",subtitle:"The Label component supports multiple sizes. Use the size prop to ensure consistent scaling alongside other components."}),e.jsx(a.SizeDemo,{rows:[{label:"Large",sublabel:"Use for headings and emphasis",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-lg)",fontWeight:"var(--global-type-weight-bold)"},children:"Label"})},{label:"Default",sublabel:"Use in most cases",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label)",fontWeight:"var(--global-type-weight-bold)"},children:"Label"})},{label:"Small",sublabel:"Use sparingly",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-bold)"},children:"Label"})},{label:"X-Small",sublabel:"Use rarely",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-bold)"},children:"Label"})},{label:"2X-Small",sublabel:"Use rarely",children:e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xxs)",fontWeight:"var(--global-type-weight-bold)"},children:"Label"})}]}),e.jsx(a.BodyText,{children:"This component provides 120 possible variants: 5 sizes × 4 weights × 3 alignments × 2 dropdown states. See the interactive stories for a full variant matrix."}),e.jsxs(a.Section,{title:"Contribution",children:[e.jsx(a.BodyText,{children:"When proposing updates or new properties for the Label component, consider the following:"}),e.jsx(a.BulletList,{ordered:!0,items:["Does the proposed change align with existing typography scales?","Does it maintain backward compatibility with our systematic sizing approach?"]}),e.jsxs(a.BodyText,{children:["To contribute a new variation, please bring it to our"," ",e.jsx("strong",{children:"Biweekly Design System meeting"})," for review with the whole team. If you need the calendar invite forwarding, please send the"," ",e.jsx("strong",{children:"design team"})," a message on Teams."]})]}),e.jsx(a.Footer,{})]});_.__docgenInfo={description:"",methods:[],displayName:"LabelDocs"};const Ze={title:"Foundation/Label",component:l,parameters:{docs:{page:()=>e.jsx(_,{})}},argTypes:{size:{control:"select",options:["large","default","small","x-small","2x-small"]},weight:{control:"select",options:["bold","medium","light","thin"]},font:{control:"select",options:["primary","secondary"]},align:{control:"select",options:["left","centre","right"]},leadingIcon:{control:"select",options:["Person","Mail","Settings","None"],mapping:{Person:ze,Mail:Me,Settings:Ce,None:null}},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},dropdown:{control:"boolean"},showSplit:{control:"boolean"}},decorators:[t=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(t,{})})]},c={name:"Documentation",render:()=>e.jsx(_,{}),parameters:{controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},g={name:"Playground",args:{children:"Label text",size:"default",weight:"bold",align:"left",dropdown:!1}},o=({weight:t})=>{const r=["large","default","small","x-small","2x-small"],s=["left","centre","right"];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-40px)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("h2",{style:{margin:0,textTransform:"uppercase",letterSpacing:"var(--global-spacing-sizing-1px)"},children:[t," weight variants"]}),e.jsx("div",{style:{height:"var(--global-spacing-stroke-2px)",flexGrow:1,backgroundColor:"var(--global-color-neutral-gray-200)"}})]}),e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",minWidth:"1000px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:S,children:"Size"}),s.map(i=>e.jsxs(W.Fragment,{children:[e.jsx("th",{style:S,children:i}),e.jsxs("th",{style:S,children:[i," + Dropdown"]})]},i))]})}),e.jsx("tbody",{children:r.map(i=>e.jsxs("tr",{style:{borderBottom:"var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-100)"},children:[e.jsx("td",{style:{...D,fontWeight:"var(--global-type-weight-bold)",color:"var(--global-color-neutral-gray-600)",width:"100px"},children:i}),s.map(d=>e.jsxs(W.Fragment,{children:[e.jsx("td",{style:D,children:e.jsx(l,{size:i,weight:t,align:d,dropdown:!1,children:"Label"})}),e.jsx("td",{style:D,children:e.jsx(l,{size:i,weight:t,align:d,dropdown:!0,children:"Label"})})]},d))]},i))})]})})]})},S={textAlign:"left",padding:"var(--global-spacing-sizing-12px)",color:"var(--global-color-neutral-gray-400)",fontSize:"var(--global-type-size-primary-label-xs)",textTransform:"uppercase",borderBottom:"var(--global-spacing-stroke-2px) solid var(--global-color-neutral-gray-200)"},D={padding:"var(--global-spacing-sizing-16px) var(--global-spacing-sizing-12px)"},m={args:{children:"Label",size:"default",weight:"bold",align:"left",dropdown:!1,showTrailingIcon:!0}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(l,{size:"large",children:"Large Label"}),e.jsx(l,{size:"default",children:"Default Label"}),e.jsx(l,{size:"small",children:"Small Label"}),e.jsx(l,{size:"x-small",children:"X-Small Label"}),e.jsx(l,{size:"2x-small",children:"2X-Small Label"})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(l,{weight:"bold",children:"Bold Weight"}),e.jsx(l,{weight:"medium",children:"Medium Weight"}),e.jsx(l,{weight:"light",children:"Light Weight"}),e.jsx(l,{weight:"thin",children:"Thin Weight"})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-20px)",width:"400px",border:"var(--global-spacing-stroke-1px) dashed var(--global-color-neutral-gray-200)",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Left"}),e.jsx(l,{align:"left",children:"Left Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Centre"}),e.jsx(l,{align:"centre",children:"Centre Aligned"})]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-400)"},children:"Right"}),e.jsx(l,{align:"right",children:"Right Aligned"})]})]})},p={name:"Status / Bold",render:()=>e.jsx(o,{weight:"bold"}),parameters:{controls:{disable:!0}}},x={name:"Status / Medium",render:()=>e.jsx(o,{weight:"medium"}),parameters:{controls:{disable:!0}}},y={name:"Status / Light",render:()=>e.jsx(o,{weight:"light"}),parameters:{controls:{disable:!0}}},f={name:"Status / Thin",render:()=>e.jsx(o,{weight:"thin"}),parameters:{controls:{disable:!0}}},w={name:"Component Breakdown",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px",maxWidth:"480px"},children:[["Bold default",e.jsx(l,{size:"default",weight:"bold",children:"Bold Label"}),"--label-size-default / --global-type-weight-bold"],["Medium small",e.jsx(l,{size:"small",weight:"medium",children:"Medium Small"}),"--label-size-small / --global-type-weight-medium"],["With dropdown",e.jsx(l,{size:"default",dropdown:!0,children:"With Dropdown"}),"--label-dropdown-icon-size"]].map(([t,r,s])=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,fontFamily:"var(--brand-font-primary)",color:"var(--global-color-neutral-gray-600)"},children:t}),r,e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px"},children:s})]},t))}),parameters:{controls:{disable:!0}}},v={name:"All Interactive States",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px"},children:["bold","medium","light","thin"].map(t=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"10px",width:"50px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:t}),e.jsx(l,{size:"default",weight:t,children:"Sample Label"}),e.jsx(l,{size:"default",weight:t,dropdown:!0,children:"With Dropdown"})]},t))}),parameters:{controls:{disable:!0}}},j={name:"Full Design Matrix (120 variants)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-80px)"},children:[e.jsxs("div",{style:{textAlign:"center",marginBottom:"var(--global-spacing-sizing-20px)"},children:[e.jsx("h1",{style:{margin:0},children:"Label Component Variant Matrix"}),e.jsx("p",{style:{color:"var(--global-color-neutral-gray-600)"},children:"5 Sizes × 4 Weights × 3 Alignments × 2 Dropdown States = 120 Variants"})]}),e.jsx(o,{weight:"bold"}),e.jsx(o,{weight:"medium"}),e.jsx(o,{weight:"light"}),e.jsx(o,{weight:"thin"})]})},z={args:{dropdown:!0}};var k,F,A,M,C;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <LabelDocs />,
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
}`,...(A=(F=c.parameters)==null?void 0:F.docs)==null?void 0:A.source},description:{story:"Full branded documentation page for the Label component.",...(C=(M=c.parameters)==null?void 0:M.docs)==null?void 0:C.description}}};var B,P,R;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    children: 'Label text',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false
  }
}`,...(R=(P=g.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var U,V,N;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    size: 'default',
    weight: 'bold',
    align: 'left',
    dropdown: false,
    showTrailingIcon: true
  }
}`,...(N=(V=m.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var q,X,E;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)'
  }}>
      <Label size="large">Large Label</Label>
      <Label size="default">Default Label</Label>
      <Label size="small">Small Label</Label>
      <Label size="x-small">X-Small Label</Label>
      <Label size="2x-small">2X-Small Label</Label>
    </div>
}`,...(E=(X=h.parameters)==null?void 0:X.docs)==null?void 0:E.source}}};var H,G,O;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)'
  }}>
      <Label weight="bold">Bold Weight</Label>
      <Label weight="medium">Medium Weight</Label>
      <Label weight="light">Light Weight</Label>
      <Label weight="thin">Thin Weight</Label>
    </div>
}`,...(O=(G=b.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var K,$,J;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-20px)',
    width: '400px',
    border: 'var(--global-spacing-stroke-1px) dashed var(--global-color-neutral-gray-200)',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      <div>
        <span style={{
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-400)'
      }}>Left</span>
        <Label align="left">Left Aligned</Label>
      </div>
      <div>
        <span style={{
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-400)'
      }}>Centre</span>
        <Label align="centre">Centre Aligned</Label>
      </div>
      <div>
        <span style={{
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-400)'
      }}>Right</span>
        <Label align="right">Right Aligned</Label>
      </div>
    </div>
}`,...(J=($=u.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,Y,Z,ee,ae;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Status / Bold',
  render: () => <WeightMatrix weight="bold" />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Bold variants systematic overview",...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};var le,te,ie;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Status / Medium',
  render: () => <WeightMatrix weight="medium" />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ie=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ne,re,oe;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Status / Light',
  render: () => <WeightMatrix weight="light" />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(re=y.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,de,ce;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Status / Thin',
  render: () => <WeightMatrix weight="thin" />,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ge,me;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px',
    maxWidth: '480px'
  }}>
      {[['Bold default', <Label size="default" weight="bold">Bold Label</Label>, '--label-size-default / --global-type-weight-bold'], ['Medium small', <Label size="small" weight="medium">Medium Small</Label>, '--label-size-small / --global-type-weight-medium'], ['With dropdown', <Label size="default" dropdown>With Dropdown</Label>, '--label-dropdown-icon-size']].map(([lbl, el, tok]) => <div key={lbl as string} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
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
        background: 'var(--global-color-neutral-gray-100)',
        padding: '2px 6px',
        borderRadius: '4px'
      }}>{tok as string}</code>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(me=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var he,be,ue;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px'
  }}>
      {(['bold', 'medium', 'light', 'thin'] as const).map(w => <div key={w} style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    }}>
          <span style={{
        fontSize: '10px',
        width: '50px',
        color: 'var(--global-color-neutral-gray-400)',
        fontFamily: 'var(--brand-font-secondary)'
      }}>{w}</span>
          <Label size="default" weight={w}>Sample Label</Label>
          <Label size="default" weight={w} dropdown>With Dropdown</Label>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ue=(be=v.parameters)==null?void 0:be.docs)==null?void 0:ue.source}}};var xe,ye,fe;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  name: 'Full Design Matrix (120 variants)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-80px)'
  }}>
      <div style={{
      textAlign: 'center',
      marginBottom: 'var(--global-spacing-sizing-20px)'
    }}>
        <h1 style={{
        margin: 0
      }}>Label Component Variant Matrix</h1>
        <p style={{
        color: 'var(--global-color-neutral-gray-600)'
      }}>5 Sizes × 4 Weights × 3 Alignments × 2 Dropdown States = 120 Variants</p>
      </div>
      <WeightMatrix weight="bold" />
      <WeightMatrix weight="medium" />
      <WeightMatrix weight="light" />
      <WeightMatrix weight="thin" />
    </div>
}`,...(fe=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var we,ve,je;z.parameters={...z.parameters,docs:{...(we=z.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    dropdown: true
  }
}`,...(je=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:je.source}}};const ea=["Documentation","Playground","Default","Sizes","Weights","Alignments","StatusBold","StatusMedium","StatusLight","StatusThin","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix","WithDropdown"];export{u as Alignments,v as AllInteractiveStates,w as ComponentBreakdown,m as Default,c as Documentation,j as FullDesignMatrix,g as Playground,h as Sizes,p as StatusBold,y as StatusLight,x as StatusMedium,f as StatusThin,b as Weights,z as WithDropdown,ea as __namedExportsOrder,Ze as default};
