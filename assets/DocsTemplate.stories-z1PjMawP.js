import{j as e}from"./iframe-BBhHJKDv.js";import{D as o}from"./DocsTemplate-BovEMQdm.js";import{I as s}from"./createSvgIcon-DHBuE-VT.js";import{N as ae,a as u,L as re,b as le,B as se,S as m,V as ce,A as h,H as i,c as de,d as x,e as ie,P as pe,F as ne,D as me,E as ue,M as he,f as xe,g as be,C as ge,I as ye,W as fe,h as je,i as Ie,j as De,k as Te,l as ze,m as Se,n as ve,o as we}from"./Close-Cdov5rWH.js";import"./preload-helper-Dp1pzeXC.js";const te=()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"Typography",subtitle:"Icons are visual representations of commands, features, directories, or common actions"}),e.jsxs(o.BodyText,{children:["Icons are symbols designed to represent concepts or specific features. A company’s iconography style can express a lot about a brand and its values.",e.jsx("br",{}),"Our iconography has rounded corners and curves to align with our typography and other rounded UI elements, whilst square end terminals add boldness to create a harmonious app expression of NPX’s broader design language."]}),e.jsx(o.TokenTable,{title:"Design Tokens",description:"We use the following tokens to render our icons:",tokens:[{name:"--brand-icon-main",description:"Primary icon color"},{name:"--icon-size-2x-small",description:"2x-small icon size"},{name:"--icon-size-x-small",description:"x-small icon size"},{name:"--icon-size-small",description:"small icon size"},{name:"--icon-size-default",description:"default icon size"},{name:"--icon-size-large",description:"large icon size"}]}),e.jsx(o.Section,{title:"Iconography principles",subtitle:"Follow these common design principles by using icons in a cohesive, useful, and legible way."}),e.jsxs(o.Principles,{children:[e.jsx(o.PrincipleCard,{number:1,title:"Design for universal understanding",children:"Design icons that use widely recognized symbols and established visual metaphors. Ensure icons are easily understood by a diverse audience by avoiding specific cultural or language aspects."}),e.jsx(o.PrincipleCard,{number:2,title:"Balance simplicity and detail to create legibility",children:"Craft icons that are simple enough for quick recognition, yet detailed enough to convey meaning effectively, even at small sizes."}),e.jsx(o.PrincipleCard,{number:3,title:"Maintain visual harmony",children:"Ensure icons work together as a cohesive system by adhering to consistent size, shape, and style guidelines across the entire set."}),e.jsx(o.PrincipleCard,{number:4,title:"Use icons intentionally",children:"Icons are powerful signifiers that can aid comprehension and help with navigation. They can also add clutter or confuse people when used poorly. Use text labels to support icons wherever possible, and avoid using icons where they aren’t necessary."})]}),e.jsx(o.Section,{title:"Using icons",subtitle:"To use an icon, import the Icon component and a specific icon from @mui/icons-material"}),e.jsx(o.CodeBlock,{children:`import { Icon } from './components/Icon';
import HomeIcon from '@mui/icons-material/Home';

const MyComponent = () => (
  <Icon icon={HomeIcon} color="primary" size="default" />
);`}),e.jsxs(o.BodyText,{children:["You can find all available icons in the"," ",e.jsx("a",{href:"https://mui.com/material-ui/material-icons/",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-blue-blue)",textDecoration:"underline"},children:"Material UI Icon Search"}),". Simply find the name of the icon and import it from"," ",e.jsx("code",{style:{fontFamily:"monospace",fontWeight:600},children:"@mui/icons-material"}),e.jsx("br",{}),"For example:"]}),e.jsx(o.CodeBlock,{children:`Home -> import HomeIcon from '@mui/icons-material/Home'
Favorite -> import FavoriteIcon from '@mui/icons-material/Favorite'
Settings -> import SettingsIcon from '@mui/icons-material/Settings'`}),e.jsx(o.BodyText,{children:"Our icons are available as a component (React, via MUI Icons), within Figma, and in our documentation."}),e.jsx(o.BulletList,{variant:"link",items:["View MUI Symbols icons","MUI Material GitHub component usage","MUI Symbols Figma Plugin","NPX Design System Curated Icons (Figma library)"]}),e.jsx(o.Section,{title:"Visual style",subtitle:'Our icons are available as "filled" or "outline" options, dependant on the scenario you may need them for. Where accessibility contrast is low, using "filled" icons will create a better visual distinction for those who may be colourblind or partially sighted.'}),e.jsx(o.Subsection,{title:"Simplicity & metaphor"}),e.jsx(o.BodyText,{children:"Wherever possible, use icons from the Curated Icons Figma file to maintain consistency and reinforce visual concepts across experiences, so they become familiar to users."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(s,{icon:u,size:"x-large"}),description:"Use an existing icon or visual metaphor for consistency and clarity wherever possible."},dontItem:{icon:e.jsx(s,{icon:ae,size:"x-large"}),description:"Create a new icon if a suitable one already exists to represent the same metaphor."}}),e.jsx(o.BodyText,{children:"Use simplified shapes with the minimum detail required to express a metaphor. The goal of an icon is to aid clear, quick comprehension — excess detail can distract and do the opposite. The small size of icons makes it harder to see fine details, so we optimise for simplicity and legibility."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(s,{icon:le,size:"x-large"}),description:"Use simple shapes with the minimum detail required to express a metaphor with clarity and legibility."},dontItem:{icon:e.jsx(s,{icon:re,size:"x-large"}),description:"Don’t add excess detail unless necessary. This can distract and be challenging to read at small sizes."}}),e.jsx(o.BodyText,{children:"When creating a new icon, use symbols that clearly represent a concept. Try to use metaphors with clear and established associations wherever possible."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(s,{icon:m,size:"x-large"}),label:"Settings",description:"Use familiar symbols with clear and established associations that clearly represent a concept."},dontItem:{icon:e.jsx(s,{icon:se,size:"x-large"}),label:"Settings",description:"Use caution when creating an icon that isn’t a widely recognized symbol. It may be confused with another concept or misunderstood."}}),e.jsx(o.Subsection,{title:"Perspective & angles"}),e.jsx(o.BodyText,{children:"Shapes should appear straight on or from a full 90 degree profile. Don’t use diagonal perspectives to create 3D shapes because these can be hard to discern at a glance, especially for people with some cognitive disabilities."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(s,{icon:h,size:"x-large"}),description:"Try to use shapes that appear straight on without dimensionality."},dontItem:{icon:e.jsx(s,{icon:ce,size:"x-large"}),description:"Don’t use diagonal perspectives to create 3D shapes as they can be hard to discern at a glance."}}),e.jsx(o.Section,{title:"Size & spacing",subtitle:"System icons are available at multiple sizes, depending of their usage:"}),e.jsx(o.SizeDemo,{rows:[{label:"Default (16px)",sublabel:"use in most cases",children:e.jsx(s,{icon:i,size:"default"})},{label:"Small (14px)",sublabel:"Use sparingly",children:e.jsx(s,{icon:i,size:"small"})},{label:"X-Small (12px)",sublabel:"Use rarely",children:e.jsx(s,{icon:i,size:"x-small"})},{label:"2X-Small (10px)",sublabel:"Use rarely",children:e.jsx(s,{icon:i,size:"2x-small"})},{label:"Large (18px)",sublabel:"Use sparingly",children:e.jsx(s,{icon:i,size:"large"})}]}),e.jsx(o.BodyText,{children:"By default, there is always at least 2px of padding around an icon, and in cases where the icon is not square itself, we default to the longest side and centre the icon on its shortest side. All padding values should be applied using the design tokens within the design system."}),e.jsx(o.Section,{title:"Shapes",children:e.jsx(o.BodyText,{children:"Icons use consistent shapes to ensure a consistent look and feel across the set. MUI designed each shape for optical scale and balance, so that taller, thinner shapes don’t feel like a different scale from shorter or wider shapes."})}),e.jsx(o.Subsection,{title:"Corner & curves"}),e.jsx(o.BodyText,{children:"Curved edges lend to a friendlier feel, but internal edges remain sharp to maintain clarity."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(s,{icon:x,size:"x-large"}),description:"Where possible, keep internal angles sharp."},dontItem:{icon:e.jsx(s,{icon:de,size:"x-large"}),description:"Use a rounded icon, when an outlined or sharp option is available."}}),e.jsx(o.Section,{title:"Colour",children:e.jsx(o.BodyText,{children:"Like most elements in our system, icons use design tokens for their colours. Never use inaccessible colours for icons, especially if there is no label to help the user further parse its meaning. There should be no use of hardcoded colours with icons – pick from the design system tokens available."})}),e.jsxs(o.Section,{title:"Contribution & adding new icons",children:[e.jsxs(o.BodyText,{children:["Currently, we use"," ",e.jsx("a",{href:"https://fonts.google.com/icons?icon.set=Material+Symbols",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-blue-blue)",textDecoration:"underline"},children:"Material Symbols"})," ","as our default icon library. Material Symbols have an extensive variety of options available, which can be searched with"," ",e.jsx("a",{href:"https://fonts.google.com/icons?icon.set=Material+Symbols",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-blue-blue)",textDecoration:"underline"},children:"Google Fonts"}),".",e.jsx("br",{}),"In the rare event that Material Symbols does not have an adequate icon available, designers can contribute new ideas for icons. Before contributing a new icon, take look at our existing icons within Material Symbols and consider the following questions:"]}),e.jsx(o.BulletList,{ordered:!0,items:["Is the icon I’m contributing very similar to another system icon?","Could my icon be confused with another concept that exists in apps?","Does this design really require an icon at all? Would a text label, button, or other approach provide a clearer affordance for customer understanding?"]}),e.jsxs(o.BodyText,{children:["To contribute a new icon, please bring it to our"," ",e.jsx("strong",{children:"Biweekly Design System meeting"})," for review with the whole team. If you need the calendar invite forwarding, please send the"," ",e.jsx("strong",{children:"design team"})," a message on Teams."]})]}),e.jsx(o.Section,{title:"Common icons gallery"}),e.jsx(o.IconGallery,{items:[{icon:e.jsx(s,{icon:i,size:"x-large"}),label:"Home"},{icon:e.jsx(s,{icon:ie,size:"x-large"}),label:"Search"},{icon:e.jsx(s,{icon:pe,size:"x-large"}),label:"Person"},{icon:e.jsx(s,{icon:m,size:"x-large"}),label:"Settings"},{icon:e.jsx(s,{icon:ne,size:"x-large"}),label:"Favorite"},{icon:e.jsx(s,{icon:u,size:"x-large"}),label:"Notifications"},{icon:e.jsx(s,{icon:me,size:"x-large"}),label:"Delete"},{icon:e.jsx(s,{icon:ue,size:"x-large"}),label:"Edit"},{icon:e.jsx(s,{icon:he,size:"x-large"}),label:"Mail"},{icon:e.jsx(s,{icon:xe,size:"x-large"}),label:"Lock"},{icon:e.jsx(s,{icon:be,size:"x-large"}),label:"Visibility"},{icon:e.jsx(s,{icon:ge,size:"x-large"}),label:"Check"},{icon:e.jsx(s,{icon:ye,size:"x-large"}),label:"Info"},{icon:e.jsx(s,{icon:fe,size:"x-large"}),label:"Warning"},{icon:e.jsx(s,{icon:je,size:"x-large"}),label:"Copy"},{icon:e.jsx(s,{icon:Ie,size:"x-large"}),label:"Download"},{icon:e.jsx(s,{icon:De,size:"x-large"}),label:"Share"},{icon:e.jsx(s,{icon:Te,size:"x-large"}),label:"Filter"},{icon:e.jsx(s,{icon:ze,size:"x-large"}),label:"Calendar"},{icon:e.jsx(s,{icon:Se,size:"x-large"}),label:"Time"},{icon:e.jsx(s,{icon:ve,size:"x-large"}),label:"Add"},{icon:e.jsx(s,{icon:we,size:"x-large"}),label:"Close"},{icon:e.jsx(s,{icon:h,size:"x-large"}),label:"Archive"},{icon:e.jsx(s,{icon:x,size:"x-large"}),label:"Star"}]}),e.jsx(o.RelatedLinks,{links:[{label:"Browse Material Symbols on Google Fonts",href:"https://fonts.google.com/icons?icon.set=Material+Symbols"}]}),e.jsx(o.Footer,{text:"ⓒ 2026 NPX Design System"})]});te.__docgenInfo={description:"",methods:[],displayName:"IconographyDocs"};const Ue={title:"Documentation/DocsTemplate",component:o,parameters:{layout:"fullscreen"}},n={render:()=>e.jsx(te,{})},t={render:()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"Component Name",subtitle:"A short description of the component and its purpose"}),e.jsx(o.BodyText,{children:"This is body text that provides additional context about the component. It uses the secondary font family (Calibri) at the large body size."}),e.jsx(o.Section,{title:"Section Title",subtitle:"Optional subtitle that provides additional context.",children:e.jsx(o.BodyText,{children:"Content within a section is indented and spaced consistently."})}),e.jsx(o.Footer,{})]})},a={render:()=>e.jsx(o,{children:e.jsx(o.TokenTable,{title:"Design Tokens",description:"We use the following tokens to style this component:",tokens:[{name:"--brand-primary",description:"Primary brand colour"},{name:"--brand-secondary",description:"Secondary brand colour"},{name:"--global-spacing-sizing-8px",description:"Base spacing unit"}]})})},r={render:()=>e.jsx(o,{children:e.jsxs(o.Principles,{children:[e.jsx(o.PrincipleCard,{number:1,title:"Consistency",children:"Maintain visual and behavioural consistency across all components."}),e.jsx(o.PrincipleCard,{number:2,title:"Accessibility",children:"Ensure every component is usable by people of all abilities."})]})})},l={render:()=>e.jsx(o,{children:e.jsx(o.CodeBlock,{children:`import { Button } from './components/Button';

const App = () => (
  <Button variant="primary" size="default">
    Click me
  </Button>
);`})})},c={render:()=>e.jsx(o,{children:e.jsx(o.DosDonts,{doItem:{icon:e.jsx(s,{icon:m,size:"x-large"}),label:"Settings",description:"Use familiar symbols with clear associations."},dontItem:{icon:e.jsx(s,{icon:se,size:"x-large"}),label:"Settings",description:"Don’t use unfamiliar symbols that could be confused."}})})},d={render:()=>e.jsx(o,{children:e.jsx(o.IconGallery,{items:[{icon:e.jsx(s,{icon:i,size:"x-large"}),label:"Home"},{icon:e.jsx(s,{icon:ie,size:"x-large"}),label:"Search"},{icon:e.jsx(s,{icon:m,size:"x-large"}),label:"Settings"},{icon:e.jsx(s,{icon:ne,size:"x-large"}),label:"Favorite"}]})})},p={render:()=>e.jsx(o,{children:e.jsx(o.SizeDemo,{rows:[{label:"Default (16px)",sublabel:"use in most cases",children:e.jsx(s,{icon:i,size:"default"})},{label:"Small (14px)",sublabel:"Use sparingly",children:e.jsx(s,{icon:i,size:"small"})},{label:"Large (18px)",sublabel:"Use sparingly",children:e.jsx(s,{icon:i,size:"large"})}]})})};var b,g,y,f,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <IconographyDocs />
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source},description:{story:`The full Iconography documentation page — a complete reference
implementation of the DocsTemplate system.`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};var I,D,T,z,S;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DocsTemplate>
      <DocsTemplate.Header title="Component Name" subtitle="A short description of the component and its purpose" />
      <DocsTemplate.BodyText>
        This is body text that provides additional context about the component.
        It uses the secondary font family (Calibri) at the large body size.
      </DocsTemplate.BodyText>
      <DocsTemplate.Section title="Section Title" subtitle="Optional subtitle that provides additional context.">
        <DocsTemplate.BodyText>
          Content within a section is indented and spaced consistently.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>
      <DocsTemplate.Footer />
    </DocsTemplate>
}`,...(T=(D=t.parameters)==null?void 0:D.docs)==null?void 0:T.source},description:{story:"Shows the basic page structure: Header, Section, BodyText, and Footer.",...(S=(z=t.parameters)==null?void 0:z.docs)==null?void 0:S.description}}};var v,w,C,k,B;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <DocsTemplate>
      <DocsTemplate.TokenTable title="Design Tokens" description="We use the following tokens to style this component:" tokens={[{
      name: '--brand-primary',
      description: 'Primary brand colour'
    }, {
      name: '--brand-secondary',
      description: 'Secondary brand colour'
    }, {
      name: '--global-spacing-sizing-8px',
      description: 'Base spacing unit'
    }]} />
    </DocsTemplate>
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source},description:{story:`Demonstrates the TokenTable sub-component used to display design token
name/description pairs inside a styled blue card.`,...(B=(k=a.parameters)==null?void 0:k.docs)==null?void 0:B.description}}};var O,P,U,F,M;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <DocsTemplate>
      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Consistency">
          Maintain visual and behavioural consistency across all components.
        </DocsTemplate.PrincipleCard>
        <DocsTemplate.PrincipleCard number={2} title="Accessibility">
          Ensure every component is usable by people of all abilities.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>
    </DocsTemplate>
}`,...(U=(P=r.parameters)==null?void 0:P.docs)==null?void 0:U.source},description:{story:"Demonstrates PrincipleCards inside the Principles container.",...(M=(F=r.parameters)==null?void 0:F.docs)==null?void 0:M.description}}};var E,H,A,L,W;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <DocsTemplate>
      <DocsTemplate.CodeBlock>
        {\`import { Button } from './components/Button';

const App = () => (
  <Button variant="primary" size="default">
    Click me
  </Button>
);\`}
      </DocsTemplate.CodeBlock>
    </DocsTemplate>
}`,...(A=(H=l.parameters)==null?void 0:H.docs)==null?void 0:A.source},description:{story:"Demonstrates the CodeBlock sub-component for displaying code snippets.",...(W=(L=l.parameters)==null?void 0:L.docs)==null?void 0:W.description}}};var N,q,G,_,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <DocsTemplate>
      <DocsTemplate.DosDonts doItem={{
      icon: <Icon icon={SettingsOutlinedIcon} size="x-large" />,
      label: 'Settings',
      description: 'Use familiar symbols with clear associations.'
    }} dontItem={{
      icon: <Icon icon={BuildOutlinedIcon} size="x-large" />,
      label: 'Settings',
      description: "Don\\u2019t use unfamiliar symbols that could be confused."
    }} />
    </DocsTemplate>
}`,...(G=(q=c.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:`Demonstrates the DosDonts sub-component with side-by-side
Do and Don't comparison cards.`,...(V=(_=c.parameters)==null?void 0:_.docs)==null?void 0:V.description}}};var X,R,Y,J,K;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <DocsTemplate>
      <DocsTemplate.IconGallery items={[{
      icon: <Icon icon={HomeOutlinedIcon} size="x-large" />,
      label: 'Home'
    }, {
      icon: <Icon icon={SearchIcon} size="x-large" />,
      label: 'Search'
    }, {
      icon: <Icon icon={SettingsOutlinedIcon} size="x-large" />,
      label: 'Settings'
    }, {
      icon: <Icon icon={FavoriteBorderIcon} size="x-large" />,
      label: 'Favorite'
    }]} />
    </DocsTemplate>
}`,...(Y=(R=d.parameters)==null?void 0:R.docs)==null?void 0:Y.source},description:{story:`Demonstrates the IconGallery sub-component for displaying a grid
of icons with labels.`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,Z,$,ee,oe;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <DocsTemplate>
      <DocsTemplate.SizeDemo rows={[{
      label: 'Default (16px)',
      sublabel: 'use in most cases',
      children: <Icon icon={HomeOutlinedIcon} size="default" />
    }, {
      label: 'Small (14px)',
      sublabel: 'Use sparingly',
      children: <Icon icon={HomeOutlinedIcon} size="small" />
    }, {
      label: 'Large (18px)',
      sublabel: 'Use sparingly',
      children: <Icon icon={HomeOutlinedIcon} size="large" />
    }]} />
    </DocsTemplate>
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"Demonstrates the SizeDemo sub-component for showing icon sizes.",...(oe=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:oe.description}}};const Fe=["Iconography","BasicPageStructure","TokenTableExample","PrincipleCardsExample","CodeBlockExample","DosDontsExample","IconGalleryExample","SizeDemoExample"];export{t as BasicPageStructure,l as CodeBlockExample,c as DosDontsExample,d as IconGalleryExample,n as Iconography,r as PrincipleCardsExample,p as SizeDemoExample,a as TokenTableExample,Fe as __namedExportsOrder,Ue as default};
