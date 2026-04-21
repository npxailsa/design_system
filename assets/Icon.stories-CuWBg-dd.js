import{j as e}from"./vendor-react-DbhTI_a3.js";import{I as n}from"./Icon-Bg45_O6-.js";import{D as o}from"./DocsTemplate-IhRQ5m1Q.js";import{N as ve,c as j,L as ze,d as je,B as Se,S,V as we,e as w,H as s,f as h,g as C,h as y,P as Ce,F as ke,i as De,j as Me,M as Fe,k as Be,l as Te,m as Ae,I as Oe,W as Ue,n as Pe,o as He,p as We,q as Ve,r as Ee,s as Le,t as Ne,u as f,v as i,E as ge,w as ue,x as b,y as xe,z as he,G as I,J as ye,a as fe,K as be,O as Ie,Q as v,R as qe,T as Re,U as _e,X as Ge,Y as Xe,Z as Ye,_ as Je,$ as Ke,a0 as Qe,a1 as Ze,a2 as $e,a3 as en,a4 as nn,a5 as on,a6 as an,a7 as sn,a8 as rn,a9 as tn,aa as ln,ab as cn,ac as mn,D as pn,ad as dn,ae as gn,af as un,ag as xn,ah as hn,ai as yn,aj as fn,ak as bn,al as In,am as vn,an as zn,ao as jn,ap as Sn}from"./vendor-mui-icons-B9T1ySRh.js";import"../vite-inject-mocker-entry.js";import"./vendor-misc-BD0vWy5z.js";import"./vendor-mui-core-CjcFYzit.js";import"./vendor-emotion-DfrZ-FAO.js";const z=()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"Iconography",subtitle:"Icons are visual representations of commands, features, directories, or common actions"}),e.jsxs(o.BodyText,{children:["Icons are symbols designed to represent concepts or specific features. A company’s iconography style can express a lot about a brand and its values.",e.jsx("br",{}),"Our iconography has rounded corners and curves to align with our typography and other rounded UI elements, whilst square end terminals add boldness to create a harmonious app expression of NPX’s broader design language."]}),e.jsxs(o.Section,{title:"MUI Foundation",children:[e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"Icon"})," wrapper component is built on MUI's"," ",e.jsx("strong",{children:"SvgIconProps"})," interface from ",e.jsx("code",{children:"@mui/material/SvgIcon"}),". The ",e.jsx("code",{children:"Icon"})," component accepts any MUI SvgIcon element type as its"," ",e.jsx("code",{children:"icon"})," prop and passes down size, colour, and ",e.jsx("code",{children:"aria-hidden"})," ","attributes. All icons in the design system are sourced from"," ",e.jsx("code",{children:"@mui/icons-material"})," — the official MUI icon set. This ensures consistent SVG rendering, proper ",e.jsx("code",{children:'role="img"'})," semantics, and seamless scaling with the ",e.jsx("code",{children:"--icon-size-*"})," token family via CSS Modules."]}),e.jsx(o.CodeBlock,{children:`// MUI base interface
import { SvgIconProps } from '@mui/material/SvgIcon';

// All icons from MUI icons library:
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
// ... any icon from @mui/icons-material

// Usage via Icon wrapper:
<Icon icon={HomeIcon} size="default" aria-hidden />

// Or directly in components:
<HomeIcon className={styles['btn__icon-svg']} />`})]}),e.jsx(o.TokenTable,{title:"Design Tokens",description:"We use the following tokens to render our icons:",tokens:[{name:"--brand-icon-main",description:"Primary icon color"},{name:"--icon-size-2x-small",description:"2x-small icon size"},{name:"--icon-size-x-small",description:"x-small icon size"},{name:"--icon-size-small",description:"small icon size"},{name:"--icon-size-default",description:"default icon size"},{name:"--icon-size-large",description:"large icon size"}]}),e.jsx(o.Section,{title:"Iconography principles",subtitle:"Follow these common design principles by using icons in a cohesive, useful, and legible way."}),e.jsxs(o.Principles,{children:[e.jsx(o.PrincipleCard,{number:1,title:"Design for universal understanding",children:"Design icons that use widely recognized symbols and established visual metaphors. Ensure icons are easily understood by a diverse audience by avoiding specific cultural or language aspects."}),e.jsx(o.PrincipleCard,{number:2,title:"Balance simplicity and detail to create legibility",children:"Craft icons that are simple enough for quick recognition, yet detailed enough to convey meaning effectively, even at small sizes."}),e.jsx(o.PrincipleCard,{number:3,title:"Maintain visual harmony",children:"Ensure icons work together as a cohesive system by adhering to consistent size, shape, and style guidelines across the entire set."}),e.jsx(o.PrincipleCard,{number:4,title:"Use icons intentionally",children:"Icons are powerful signifiers that can aid comprehension and help with navigation. They can also add clutter or confuse people when used poorly. Use text labels to support icons wherever possible, and avoid using icons where they aren’t necessary."})]}),e.jsx(o.Section,{title:"Using icons",subtitle:"To use an icon, import the Icon component and a specific icon from @mui/icons-material"}),e.jsx(o.CodeBlock,{children:`import { Icon } from './components/Icon';
import HomeIcon from '@mui/icons-material/Home';

const MyComponent = () => (
  <Icon icon={HomeIcon} color="primary" size="default" />
);`}),e.jsxs(o.BodyText,{children:["You can find all available icons in the"," ",e.jsx("a",{href:"https://mui.com/material-ui/material-icons/",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-blue-blue)",textDecoration:"underline"},children:"Material UI Icon Search"}),". Simply find the name of the icon and import it from"," ",e.jsx("code",{style:{fontFamily:"monospace",fontWeight:600},children:"@mui/icons-material"}),e.jsx("br",{}),"For example:"]}),e.jsx(o.CodeBlock,{children:`Home -> import HomeIcon from '@mui/icons-material/Home'
Favorite -> import FavoriteIcon from '@mui/icons-material/Favorite'
Settings -> import SettingsIcon from '@mui/icons-material/Settings'`}),e.jsx(o.BodyText,{children:"Our icons are available as a component (React, via MUI Icons), within Figma, and in our documentation."}),e.jsx(o.BulletList,{variant:"link",items:["View MUI Symbols icons","MUI Material GitHub component usage","MUI Symbols Figma Plugin","NPX Design System Curated Icons (Figma library)"]}),e.jsx(o.Section,{title:"Visual style",subtitle:'Our icons are available as "filled" or "outline" options, dependant on the scenario you may need them for. Where accessibility contrast is low, using "filled" icons will create a better visual distinction for those who may be colourblind or partially sighted.'}),e.jsx(o.Subsection,{title:"Simplicity & metaphor"}),e.jsx(o.BodyText,{children:"Wherever possible, use icons from the Curated Icons Figma file to maintain consistency and reinforce visual concepts across experiences, so they become familiar to users."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(n,{icon:j,size:"x-large"}),description:"Use an existing icon or visual metaphor for consistency and clarity wherever possible."},dontItem:{icon:e.jsx(n,{icon:ve,size:"x-large"}),description:"Create a new icon if a suitable one already exists to represent the same metaphor."}}),e.jsx(o.BodyText,{children:"Use simplified shapes with the minimum detail required to express a metaphor. The goal of an icon is to aid clear, quick comprehension — excess detail can distract and do the opposite. The small size of icons makes it harder to see fine details, so we optimise for simplicity and legibility."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(n,{icon:je,size:"x-large"}),description:"Use simple shapes with the minimum detail required to express a metaphor with clarity and legibility."},dontItem:{icon:e.jsx(n,{icon:ze,size:"x-large"}),description:"Don’t add excess detail unless necessary. This can distract and be challenging to read at small sizes."}}),e.jsx(o.BodyText,{children:"When creating a new icon, use symbols that clearly represent a concept. Try to use metaphors with clear and established associations wherever possible."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(n,{icon:S,size:"x-large"}),label:"Settings",description:"Use familiar symbols with clear and established associations that clearly represent a concept."},dontItem:{icon:e.jsx(n,{icon:Se,size:"x-large"}),label:"Settings",description:"Use caution when creating an icon that isn’t a widely recognized symbol. It may be confused with another concept or misunderstood."}}),e.jsx(o.Subsection,{title:"Perspective & angles"}),e.jsx(o.BodyText,{children:"Shapes should appear straight on or from a full 90 degree profile. Don’t use diagonal perspectives to create 3D shapes because these can be hard to discern at a glance, especially for people with some cognitive disabilities."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(n,{icon:w,size:"x-large"}),description:"Try to use shapes that appear straight on without dimensionality."},dontItem:{icon:e.jsx(n,{icon:we,size:"x-large"}),description:"Don’t use diagonal perspectives to create 3D shapes as they can be hard to discern at a glance."}}),e.jsx(o.Section,{title:"Size & spacing",subtitle:"System icons are available at multiple sizes, depending of their usage:"}),e.jsx(o.SizeDemo,{rows:[{label:"Default (16px)",sublabel:"use in most cases",children:e.jsx(n,{icon:s,size:"default"})},{label:"Small (14px)",sublabel:"Use sparingly",children:e.jsx(n,{icon:s,size:"small"})},{label:"X-Small (12px)",sublabel:"Use rarely",children:e.jsx(n,{icon:s,size:"x-small"})},{label:"2X-Small (10px)",sublabel:"Use rarely",children:e.jsx(n,{icon:s,size:"2x-small"})},{label:"Large (18px)",sublabel:"Use sparingly",children:e.jsx(n,{icon:s,size:"large"})}]}),e.jsx(o.BodyText,{children:"By default, there is always at least 2px of padding around an icon, and in cases where the icon is not square itself, we default to the longest side and centre the icon on its shortest side. All padding values should be applied using the design tokens within the design system."}),e.jsx(o.Section,{title:"Shapes",children:e.jsx(o.BodyText,{children:"Icons use consistent shapes to ensure a consistent look and feel across the set. MUI designed each shape for optical scale and balance, so that taller, thinner shapes don’t feel like a different scale from shorter or wider shapes."})}),e.jsx(o.Subsection,{title:"Corner & curves"}),e.jsx(o.BodyText,{children:"Curved edges lend to a friendlier feel, but internal edges remain sharp to maintain clarity."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(n,{icon:C,size:"x-large"}),description:"Where possible, keep internal angles sharp."},dontItem:{icon:e.jsx(n,{icon:h,size:"x-large"}),description:"Use a rounded icon, when an outlined or sharp option is available."}}),e.jsx(o.Section,{title:"Colour",children:e.jsx(o.BodyText,{children:"Like most elements in our system, icons use design tokens for their colours. Never use inaccessible colours for icons, especially if there is no label to help the user further parse its meaning. There should be no use of hardcoded colours with icons – pick from the design system tokens available."})}),e.jsxs(o.Section,{title:"Contribution & adding new icons",children:[e.jsxs(o.BodyText,{children:["Currently, we use"," ",e.jsx("a",{href:"https://fonts.google.com/icons?icon.set=Material+Symbols",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-blue-blue)",textDecoration:"underline"},children:"Material Symbols"})," ","as our default icon library. Material Symbols have an extensive variety of options available, which can be searched with"," ",e.jsx("a",{href:"https://fonts.google.com/icons?icon.set=Material+Symbols",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-blue-blue)",textDecoration:"underline"},children:"Google Fonts"}),".",e.jsx("br",{}),"In the rare event that Material Symbols does not have an adequate icon available, designers can contribute new ideas for icons. Before contributing a new icon, take look at our existing icons within Material Symbols and consider the following questions:"]}),e.jsx(o.BulletList,{ordered:!0,items:["Is the icon I’m contributing very similar to another system icon?","Could my icon be confused with another concept that exists in apps?","Does this design really require an icon at all? Would a text label, button, or other approach provide a clearer affordance for customer understanding?"]}),e.jsxs(o.BodyText,{children:["To contribute a new icon, please bring it to our"," ",e.jsx("strong",{children:"Biweekly Design System meeting"})," for review with the whole team. If you need the calendar invite forwarding, please send the"," ",e.jsx("strong",{children:"design team"})," a message on Teams."]})]}),e.jsx(o.Section,{title:"Common icons gallery"}),e.jsx(o.IconGallery,{items:[{icon:e.jsx(n,{icon:s,size:"x-large"}),label:"Home"},{icon:e.jsx(n,{icon:y,size:"x-large"}),label:"Search"},{icon:e.jsx(n,{icon:Ce,size:"x-large"}),label:"Person"},{icon:e.jsx(n,{icon:S,size:"x-large"}),label:"Settings"},{icon:e.jsx(n,{icon:ke,size:"x-large"}),label:"Favorite"},{icon:e.jsx(n,{icon:j,size:"x-large"}),label:"Notifications"},{icon:e.jsx(n,{icon:De,size:"x-large"}),label:"Delete"},{icon:e.jsx(n,{icon:Me,size:"x-large"}),label:"Edit"},{icon:e.jsx(n,{icon:Fe,size:"x-large"}),label:"Mail"},{icon:e.jsx(n,{icon:Be,size:"x-large"}),label:"Lock"},{icon:e.jsx(n,{icon:Te,size:"x-large"}),label:"Visibility"},{icon:e.jsx(n,{icon:Ae,size:"x-large"}),label:"Check"},{icon:e.jsx(n,{icon:Oe,size:"x-large"}),label:"Info"},{icon:e.jsx(n,{icon:Ue,size:"x-large"}),label:"Warning"},{icon:e.jsx(n,{icon:Pe,size:"x-large"}),label:"Copy"},{icon:e.jsx(n,{icon:He,size:"x-large"}),label:"Download"},{icon:e.jsx(n,{icon:We,size:"x-large"}),label:"Share"},{icon:e.jsx(n,{icon:Ve,size:"x-large"}),label:"Filter"},{icon:e.jsx(n,{icon:Ee,size:"x-large"}),label:"Calendar"},{icon:e.jsx(n,{icon:Le,size:"x-large"}),label:"Time"},{icon:e.jsx(n,{icon:Ne,size:"x-large"}),label:"Add"},{icon:e.jsx(n,{icon:f,size:"x-large"}),label:"Close"},{icon:e.jsx(n,{icon:w,size:"x-large"}),label:"Archive"},{icon:e.jsx(n,{icon:C,size:"x-large"}),label:"Star"}]}),e.jsx(o.RelatedLinks,{links:[{label:"Browse Material Symbols on Google Fonts",href:"https://fonts.google.com/icons?icon.set=Material+Symbols"}]}),e.jsx(o.Footer,{})]});z.__docgenInfo={description:"",methods:[],displayName:"IconDocs"};const An={title:"Foundation/Iconography",component:n,parameters:{docs:{page:()=>e.jsx(z,{})}},argTypes:{icon:{description:"The Material UI icon component to render.",options:["Home","Search","Settings","Favorite","Mail","Delete","Add","CheckCircle","Menu","Close","Person","Warning","Info","Star","Edit"],mapping:{Home:i,Search:y,Settings:v,Favorite:Ie,Mail:be,Delete:fe,Add:ye,CheckCircle:I,Menu:he,Close:f,Person:xe,Warning:b,Info:ue,Star:h,Edit:ge},control:{type:"select"}},color:{description:"The color of the icon, using the theme color palette.",control:"select",options:["inherit","primary","secondary","error","info","success","warning","action","disabled"]},size:{description:"The size of the icon. Can be a predefined named size or a number in pixels.",control:"select",options:["2x-small","x-small","small","default","large","x-large","2x-large","inherit"]}},args:{icon:i,size:"default",color:"inherit"}},t={render:()=>e.jsx(z,{}),parameters:{controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},l={name:"Playground"},c={args:{icon:i}},m={render:a=>{const r=[{name:"2x-small",label:"2x-small (10px)"},{name:"x-small",label:"x-small (12px)"},{name:"small",label:"small (14px)"},{name:"default",label:"default (16px)"},{name:"large",label:"large (18px)"},{name:"x-large",label:"x-large (24px)"},{name:"2x-large",label:"2x-large (32px)"}];return e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-40px)",alignItems:"flex-end",flexWrap:"wrap",padding:"var(--global-spacing-sizing-20px)"},children:r.map(x=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(n,{...a,size:x.name}),e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",fontFamily:"var(--brand-font-secondary)",color:"var(--global-color-neutral-gray-500)",fontWeight:"var(--global-type-weight-medium)"},children:x.label})]},x.name))})}},p={name:"Status / Color Variants",render:a=>e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsx(n,{...a,color:"primary"}),e.jsx(n,{...a,color:"secondary"}),e.jsx(n,{...a,color:"error"}),e.jsx(n,{...a,color:"warning"}),e.jsx(n,{...a,color:"info"}),e.jsx(n,{...a,color:"success"})]})},d={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",marginTop:0},children:"Anatomy"}),e.jsxs("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-500)",marginBottom:"16px",marginTop:0},children:["The Icon component wraps a Material UI SvgIcon with design-system size tokens and colour tokens. Props: ",e.jsx("code",{children:"icon"}),", ",e.jsx("code",{children:"size"}),", ",e.jsx("code",{children:"color"}),"."]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(n,{icon:i,size:"default",color:"primary"}),e.jsx(n,{icon:i,size:"large",color:"secondary"}),e.jsx(n,{icon:i,size:"x-large",color:"error"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",marginTop:0},children:"Size token reference"}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-16px)"},children:["2x-small","x-small","small","default","large","x-large","2x-large"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[e.jsx(n,{icon:i,size:a}),e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)"},children:a})]},a))})]})]}),parameters:{controls:{disable:!0}}},g={name:"All Interactive States",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)"},children:["inherit","primary","secondary","error","warning","info","success","action","disabled"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"72px"},children:a}),e.jsx(n,{icon:i,size:"default",color:a}),e.jsx(n,{icon:v,size:"default",color:a}),e.jsx(n,{icon:I,size:"default",color:a}),e.jsx(n,{icon:b,size:"default",color:a})]},a))}),parameters:{controls:{disable:!0}}},u={name:"Full Design Matrix (50 icons × 7 sizes)",render:()=>{const a=[{name:"Home",component:i},{name:"Search",component:y},{name:"Settings",component:v},{name:"Favorite",component:Ie},{name:"Mail",component:be},{name:"Delete",component:fe},{name:"Add",component:ye},{name:"CheckCircle",component:I},{name:"Menu",component:he},{name:"Close",component:f},{name:"ArrowBack",component:qe},{name:"ArrowForward",component:Re},{name:"Notifications",component:_e},{name:"Person",component:xe},{name:"Warning",component:b},{name:"Error",component:Ge},{name:"AccountCircle",component:Xe},{name:"ShoppingCart",component:Ye},{name:"Email",component:Je},{name:"Star",component:h},{name:"Share",component:Ke},{name:"PlayArrow",component:Qe},{name:"Pause",component:Ze},{name:"Stop",component:$e},{name:"SkipNext",component:en},{name:"SkipPrevious",component:nn},{name:"Refresh",component:on},{name:"Edit",component:ge},{name:"Visibility",component:an},{name:"VisibilityOff",component:sn},{name:"Lock",component:rn},{name:"LockOpen",component:tn},{name:"Help",component:ln},{name:"Info",component:ue},{name:"Check",component:cn},{name:"Cancel",component:mn},{name:"Download",component:pn},{name:"Upload",component:dn},{name:"Cloud",component:gn},{name:"CameraAlt",component:un},{name:"Image",component:xn},{name:"VideoCall",component:hn},{name:"Mic",component:yn},{name:"MicOff",component:fn},{name:"VolumeUp",component:bn},{name:"VolumeOff",component:In},{name:"Bluetooth",component:vn},{name:"Wifi",component:zn},{name:"BatteryFull",component:jn},{name:"BluetoothConnected",component:Sn}];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-20px)"},children:a.map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"var(--global-spacing-sizing-16px)",border:"var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-8px)",backgroundColor:"var(--global-color-neutral-gray-50)"},children:[e.jsx(n,{icon:r.component,size:"large",color:"primary"}),e.jsx("span",{style:{marginTop:"var(--global-spacing-sizing-12px)",fontSize:"var(--global-type-size-primary-label-sm)",fontFamily:"var(--brand-font-secondary)",color:"var(--global-color-neutral-gray-600)",fontWeight:"var(--global-type-weight-medium)",textAlign:"center"},children:r.name})]},r.name))})}};var k,D,M,F,B;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <IconDocs />,
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
}`,...(M=(D=t.parameters)==null?void 0:D.docs)==null?void 0:M.source},description:{story:"Full branded documentation page for the Icon component.",...(B=(F=t.parameters)==null?void 0:F.docs)==null?void 0:B.description}}};var T,A,O,U,P;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(O=(A=l.parameters)==null?void 0:A.docs)==null?void 0:O.source},description:{story:"Interactive playground — adjust props via controls panel.",...(P=(U=l.parameters)==null?void 0:U.docs)==null?void 0:P.description}}};var H,W,V,E,L;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    icon: HomeIcon
  }
}`,...(V=(W=c.parameters)==null?void 0:W.docs)==null?void 0:V.source},description:{story:"The default icon story demonstrating the selectable icon prop.",...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.description}}};var N,q,R,_,G;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const sizes: {
      name: IconSize;
      label: string;
    }[] = [{
      name: '2x-small',
      label: '2x-small (10px)'
    }, {
      name: 'x-small',
      label: 'x-small (12px)'
    }, {
      name: 'small',
      label: 'small (14px)'
    }, {
      name: 'default',
      label: 'default (16px)'
    }, {
      name: 'large',
      label: 'large (18px)'
    }, {
      name: 'x-large',
      label: 'x-large (24px)'
    }, {
      name: '2x-large',
      label: '2x-large (32px)'
    }];
    return <div style={{
      display: 'flex',
      gap: 'var(--global-spacing-sizing-40px)',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      padding: 'var(--global-spacing-sizing-20px)'
    }}>
        {sizes.map(size => <div key={size.name} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-16px)'
      }}>
            <Icon {...args} size={size.name} />
            <span style={{
          fontSize: 'var(--global-type-size-primary-label-xs)',
          fontFamily: 'var(--brand-font-secondary)',
          color: 'var(--global-color-neutral-gray-500)',
          fontWeight: 'var(--global-type-weight-medium)'
        }}>
              {size.label}
            </span>
          </div>)}
      </div>;
  }
}`,...(R=(q=m.parameters)==null?void 0:q.docs)==null?void 0:R.source},description:{story:"Demonstrates the various predefined sizes available in the design system.",...(G=(_=m.parameters)==null?void 0:_.docs)==null?void 0:G.description}}};var X,Y,J,K,Q;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Status / Color Variants',
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--global-spacing-sizing-32px)',
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      <Icon {...args} color="primary" />
      <Icon {...args} color="secondary" />
      <Icon {...args} color="error" />
      <Icon {...args} color="warning" />
      <Icon {...args} color="info" />
      <Icon {...args} color="success" />
    </div>
}`,...(J=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"Demonstrates the icons using Material UI theme colors.",...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var Z,$,ee,ne,oe;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px',
        marginTop: 0
      }}>
          Anatomy
        </p>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '16px',
        marginTop: 0
      }}>
          The Icon component wraps a Material UI SvgIcon with design-system size tokens and colour tokens.
          Props: <code>icon</code>, <code>size</code>, <code>color</code>.
        </p>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--global-spacing-sizing-16px)'
      }}>
          <Icon icon={HomeIcon} size="default" color="primary" />
          <Icon icon={HomeIcon} size="large" color="secondary" />
          <Icon icon={HomeIcon} size="x-large" color="error" />
        </div>
      </div>
      <div>
        <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px',
        marginTop: 0
      }}>
          Size token reference
        </p>
        <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: 'var(--global-spacing-sizing-16px)'
      }}>
          {(['2x-small', 'x-small', 'small', 'default', 'large', 'x-large', '2x-large'] as IconSize[]).map(s => <div key={s} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
              <Icon icon={HomeIcon} size={s} />
              <span style={{
            fontFamily: 'var(--brand-font-secondary)',
            fontSize: '10px',
            color: 'var(--global-color-neutral-gray-400)'
          }}>{s}</span>
            </div>)}
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=($=d.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Component breakdown — shows icon anatomy: icon + size + colour props.",...(oe=(ne=d.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};var ae,ie,se,re,te;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-24px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      {(['inherit', 'primary', 'secondary', 'error', 'warning', 'info', 'success', 'action', 'disabled'] as const).map(color => <div key={color} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--global-spacing-sizing-16px)'
    }}>
          <span style={{
        fontFamily: 'var(--brand-font-secondary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-500)',
        width: '72px'
      }}>{color}</span>
          <Icon icon={HomeIcon} size="default" color={color} />
          <Icon icon={SettingsIcon} size="default" color={color} />
          <Icon icon={CheckCircleIcon} size="default" color={color} />
          <Icon icon={WarningIcon} size="default" color={color} />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(se=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:se.source},description:{story:"All interactive states — inherit, primary, secondary, error, disabled, action.",...(te=(re=g.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var le,ce,me,pe,de;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Full Design Matrix (50 icons × 7 sizes)',
  render: () => {
    const commonIcons = [{
      name: 'Home',
      component: HomeIcon
    }, {
      name: 'Search',
      component: SearchIcon
    }, {
      name: 'Settings',
      component: SettingsIcon
    }, {
      name: 'Favorite',
      component: FavoriteIcon
    }, {
      name: 'Mail',
      component: MailIcon
    }, {
      name: 'Delete',
      component: DeleteIcon
    }, {
      name: 'Add',
      component: AddIcon
    }, {
      name: 'CheckCircle',
      component: CheckCircleIcon
    }, {
      name: 'Menu',
      component: MenuIcon
    }, {
      name: 'Close',
      component: CloseIcon
    }, {
      name: 'ArrowBack',
      component: ArrowBackIcon
    }, {
      name: 'ArrowForward',
      component: ArrowForwardIcon
    }, {
      name: 'Notifications',
      component: NotificationsIcon
    }, {
      name: 'Person',
      component: PersonIcon
    }, {
      name: 'Warning',
      component: WarningIcon
    }, {
      name: 'Error',
      component: ErrorIcon
    }, {
      name: 'AccountCircle',
      component: AccountCircleIcon
    }, {
      name: 'ShoppingCart',
      component: ShoppingCartIcon
    }, {
      name: 'Email',
      component: EmailIcon
    }, {
      name: 'Star',
      component: StarIcon
    }, {
      name: 'Share',
      component: ShareIcon
    }, {
      name: 'PlayArrow',
      component: PlayArrowIcon
    }, {
      name: 'Pause',
      component: PauseIcon
    }, {
      name: 'Stop',
      component: StopIcon
    }, {
      name: 'SkipNext',
      component: SkipNextIcon
    }, {
      name: 'SkipPrevious',
      component: SkipPreviousIcon
    }, {
      name: 'Refresh',
      component: RefreshIcon
    }, {
      name: 'Edit',
      component: EditIcon
    }, {
      name: 'Visibility',
      component: VisibilityIcon
    }, {
      name: 'VisibilityOff',
      component: VisibilityOffIcon
    }, {
      name: 'Lock',
      component: LockIcon
    }, {
      name: 'LockOpen',
      component: LockOpenIcon
    }, {
      name: 'Help',
      component: HelpIcon
    }, {
      name: 'Info',
      component: InfoIcon
    }, {
      name: 'Check',
      component: CheckIcon
    }, {
      name: 'Cancel',
      component: CancelIcon
    }, {
      name: 'Download',
      component: DownloadIcon
    }, {
      name: 'Upload',
      component: UploadIcon
    }, {
      name: 'Cloud',
      component: CloudIcon
    }, {
      name: 'CameraAlt',
      component: CameraAltIcon
    }, {
      name: 'Image',
      component: ImageIcon
    }, {
      name: 'VideoCall',
      component: VideoCallIcon
    }, {
      name: 'Mic',
      component: MicIcon
    }, {
      name: 'MicOff',
      component: MicOffIcon
    }, {
      name: 'VolumeUp',
      component: VolumeUpIcon
    }, {
      name: 'VolumeOff',
      component: VolumeOffIcon
    }, {
      name: 'Bluetooth',
      component: BluetoothIcon
    }, {
      name: 'Wifi',
      component: WifiIcon
    }, {
      name: 'BatteryFull',
      component: BatteryFullIcon
    }, {
      name: 'BluetoothConnected',
      component: BluetoothConnectedIcon
    }];
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: 'var(--global-spacing-sizing-24px)',
      padding: 'var(--global-spacing-sizing-20px)'
    }}>
        {commonIcons.map(icon => <div key={icon.name} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'var(--global-spacing-sizing-16px)',
        border: 'var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-200)',
        borderRadius: 'var(--global-spacing-radius-8px)',
        backgroundColor: 'var(--global-color-neutral-gray-50)'
      }}>
            <Icon icon={icon.component} size="large" color="primary" />
            <span style={{
          marginTop: 'var(--global-spacing-sizing-12px)',
          fontSize: 'var(--global-type-size-primary-label-sm)',
          fontFamily: 'var(--brand-font-secondary)',
          color: 'var(--global-color-neutral-gray-600)',
          fontWeight: 'var(--global-type-weight-medium)',
          textAlign: 'center'
        }}>
              {icon.name}
            </span>
          </div>)}
      </div>;
  }
}`,...(me=(ce=u.parameters)==null?void 0:ce.docs)==null?void 0:me.source},description:{story:"A gallery of commonly used icons in our design system.",...(de=(pe=u.parameters)==null?void 0:pe.docs)==null?void 0:de.description}}};const On=["Documentation","Playground","Default","Sizes","StatusColors","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{g as AllInteractiveStates,d as ComponentBreakdown,c as Default,t as Documentation,u as FullDesignMatrix,l as Playground,m as Sizes,p as StatusColors,On as __namedExportsOrder,An as default};
