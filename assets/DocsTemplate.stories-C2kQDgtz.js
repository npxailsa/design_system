import{j as e}from"./iframe-CJVtyect.js";import{D as o}from"./DocsTemplate-B8DPeKGX.js";import{I as n}from"./Icon-W7i8oOgI.js";import{N as fe,a as g,L as Te,B as he,S as h,V as De,A as b,H as t,b as je,c as x,d as ge,P as Ie,F as be,D as we,E as Se,M as ke,e as ze,f as ve,C as Ce,I as Be,W as Pe,g as Fe,h as Ae,i as Oe,j as Ue,k as Ee,l as Ge,m as He,n as Me}from"./Close-C0ePbVU6.js";import{L as Le}from"./LocalOfferOutlined-CLEnqtxH.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-B1Ho3nXy.js";const xe=()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"Typography",subtitle:"Icons are visual representations of commands, features, directories, or common actions"}),e.jsxs(o.BodyText,{children:["Icons are symbols designed to represent concepts or specific features. A company’s iconography style can express a lot about a brand and its values.",e.jsx("br",{}),"Our iconography has rounded corners and curves to align with our typography and other rounded UI elements, whilst square end terminals add boldness to create a harmonious app expression of NPX’s broader design language."]}),e.jsx(o.TokenTable,{title:"Design Tokens",description:"We use the following tokens to render our icons:",tokens:[{name:"--brand-icon-main",description:"Primary icon color"},{name:"--icon-size-2x-small",description:"2x-small icon size"},{name:"--icon-size-x-small",description:"x-small icon size"},{name:"--icon-size-small",description:"small icon size"},{name:"--icon-size-default",description:"default icon size"},{name:"--icon-size-large",description:"large icon size"}]}),e.jsx(o.Section,{title:"Iconography principles",subtitle:"Follow these common design principles by using icons in a cohesive, useful, and legible way."}),e.jsxs(o.Principles,{children:[e.jsx(o.PrincipleCard,{number:1,title:"Design for universal understanding",children:"Design icons that use widely recognized symbols and established visual metaphors. Ensure icons are easily understood by a diverse audience by avoiding specific cultural or language aspects."}),e.jsx(o.PrincipleCard,{number:2,title:"Balance simplicity and detail to create legibility",children:"Craft icons that are simple enough for quick recognition, yet detailed enough to convey meaning effectively, even at small sizes."}),e.jsx(o.PrincipleCard,{number:3,title:"Maintain visual harmony",children:"Ensure icons work together as a cohesive system by adhering to consistent size, shape, and style guidelines across the entire set."}),e.jsx(o.PrincipleCard,{number:4,title:"Use icons intentionally",children:"Icons are powerful signifiers that can aid comprehension and help with navigation. They can also add clutter or confuse people when used poorly. Use text labels to support icons wherever possible, and avoid using icons where they aren’t necessary."})]}),e.jsx(o.Section,{title:"Using icons",subtitle:"To use an icon, import the Icon component and a specific icon from @mui/icons-material"}),e.jsx(o.CodeBlock,{children:`import { Icon } from './components/Icon';
import HomeIcon from '@mui/icons-material/Home';

const MyComponent = () => (
  <Icon icon={HomeIcon} color="primary" size="default" />
);`}),e.jsxs(o.BodyText,{children:["You can find all available icons in the"," ",e.jsx("a",{href:"https://mui.com/material-ui/material-icons/",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-blue-blue)",textDecoration:"underline"},children:"Material UI Icon Search"}),". Simply find the name of the icon and import it from"," ",e.jsx("code",{style:{fontFamily:"monospace",fontWeight:600},children:"@mui/icons-material"}),e.jsx("br",{}),"For example:"]}),e.jsx(o.CodeBlock,{children:`Home -> import HomeIcon from '@mui/icons-material/Home'
Favorite -> import FavoriteIcon from '@mui/icons-material/Favorite'
Settings -> import SettingsIcon from '@mui/icons-material/Settings'`}),e.jsx(o.BodyText,{children:"Our icons are available as a component (React, via MUI Icons), within Figma, and in our documentation."}),e.jsx(o.BulletList,{variant:"link",items:["View MUI Symbols icons","MUI Material GitHub component usage","MUI Symbols Figma Plugin","NPX Design System Curated Icons (Figma library)"]}),e.jsx(o.Section,{title:"Visual style",subtitle:'Our icons are available as "filled" or "outline" options, dependant on the scenario you may need them for. Where accessibility contrast is low, using "filled" icons will create a better visual distinction for those who may be colourblind or partially sighted.'}),e.jsx(o.Subsection,{title:"Simplicity & metaphor"}),e.jsx(o.BodyText,{children:"Wherever possible, use icons from the Curated Icons Figma file to maintain consistency and reinforce visual concepts across experiences, so they become familiar to users."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(n,{icon:g,size:"x-large"}),description:"Use an existing icon or visual metaphor for consistency and clarity wherever possible."},dontItem:{icon:e.jsx(n,{icon:fe,size:"x-large"}),description:"Create a new icon if a suitable one already exists to represent the same metaphor."}}),e.jsx(o.BodyText,{children:"Use simplified shapes with the minimum detail required to express a metaphor. The goal of an icon is to aid clear, quick comprehension — excess detail can distract and do the opposite. The small size of icons makes it harder to see fine details, so we optimise for simplicity and legibility."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(n,{icon:Le,size:"x-large"}),description:"Use simple shapes with the minimum detail required to express a metaphor with clarity and legibility."},dontItem:{icon:e.jsx(n,{icon:Te,size:"x-large"}),description:"Don’t add excess detail unless necessary. This can distract and be challenging to read at small sizes."}}),e.jsx(o.BodyText,{children:"When creating a new icon, use symbols that clearly represent a concept. Try to use metaphors with clear and established associations wherever possible."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(n,{icon:h,size:"x-large"}),label:"Settings",description:"Use familiar symbols with clear and established associations that clearly represent a concept."},dontItem:{icon:e.jsx(n,{icon:he,size:"x-large"}),label:"Settings",description:"Use caution when creating an icon that isn’t a widely recognized symbol. It may be confused with another concept or misunderstood."}}),e.jsx(o.Subsection,{title:"Perspective & angles"}),e.jsx(o.BodyText,{children:"Shapes should appear straight on or from a full 90 degree profile. Don’t use diagonal perspectives to create 3D shapes because these can be hard to discern at a glance, especially for people with some cognitive disabilities."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(n,{icon:b,size:"x-large"}),description:"Try to use shapes that appear straight on without dimensionality."},dontItem:{icon:e.jsx(n,{icon:De,size:"x-large"}),description:"Don’t use diagonal perspectives to create 3D shapes as they can be hard to discern at a glance."}}),e.jsx(o.Section,{title:"Size & spacing",subtitle:"System icons are available at multiple sizes, depending of their usage:"}),e.jsx(o.SizeDemo,{rows:[{label:"Default (16px)",sublabel:"use in most cases",children:e.jsx(n,{icon:t,size:"default"})},{label:"Small (14px)",sublabel:"Use sparingly",children:e.jsx(n,{icon:t,size:"small"})},{label:"X-Small (12px)",sublabel:"Use rarely",children:e.jsx(n,{icon:t,size:"x-small"})},{label:"2X-Small (10px)",sublabel:"Use rarely",children:e.jsx(n,{icon:t,size:"2x-small"})},{label:"Large (18px)",sublabel:"Use sparingly",children:e.jsx(n,{icon:t,size:"large"})}]}),e.jsx(o.BodyText,{children:"By default, there is always at least 2px of padding around an icon, and in cases where the icon is not square itself, we default to the longest side and centre the icon on its shortest side. All padding values should be applied using the design tokens within the design system."}),e.jsx(o.Section,{title:"Shapes",children:e.jsx(o.BodyText,{children:"Icons use consistent shapes to ensure a consistent look and feel across the set. MUI designed each shape for optical scale and balance, so that taller, thinner shapes don’t feel like a different scale from shorter or wider shapes."})}),e.jsx(o.Subsection,{title:"Corner & curves"}),e.jsx(o.BodyText,{children:"Curved edges lend to a friendlier feel, but internal edges remain sharp to maintain clarity."}),e.jsx(o.DosDonts,{doItem:{icon:e.jsx(n,{icon:x,size:"x-large"}),description:"Where possible, keep internal angles sharp."},dontItem:{icon:e.jsx(n,{icon:je,size:"x-large"}),description:"Use a rounded icon, when an outlined or sharp option is available."}}),e.jsx(o.Section,{title:"Colour",children:e.jsx(o.BodyText,{children:"Like most elements in our system, icons use design tokens for their colours. Never use inaccessible colours for icons, especially if there is no label to help the user further parse its meaning. There should be no use of hardcoded colours with icons – pick from the design system tokens available."})}),e.jsxs(o.Section,{title:"Contribution & adding new icons",children:[e.jsxs(o.BodyText,{children:["Currently, we use"," ",e.jsx("a",{href:"https://fonts.google.com/icons?icon.set=Material+Symbols",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-blue-blue)",textDecoration:"underline"},children:"Material Symbols"})," ","as our default icon library. Material Symbols have an extensive variety of options available, which can be searched with"," ",e.jsx("a",{href:"https://fonts.google.com/icons?icon.set=Material+Symbols",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-blue-blue)",textDecoration:"underline"},children:"Google Fonts"}),".",e.jsx("br",{}),"In the rare event that Material Symbols does not have an adequate icon available, designers can contribute new ideas for icons. Before contributing a new icon, take look at our existing icons within Material Symbols and consider the following questions:"]}),e.jsx(o.BulletList,{ordered:!0,items:["Is the icon I’m contributing very similar to another system icon?","Could my icon be confused with another concept that exists in apps?","Does this design really require an icon at all? Would a text label, button, or other approach provide a clearer affordance for customer understanding?"]}),e.jsxs(o.BodyText,{children:["To contribute a new icon, please bring it to our"," ",e.jsx("strong",{children:"Biweekly Design System meeting"})," for review with the whole team. If you need the calendar invite forwarding, please send the"," ",e.jsx("strong",{children:"design team"})," a message on Teams."]})]}),e.jsx(o.Section,{title:"Common icons gallery"}),e.jsx(o.IconGallery,{items:[{icon:e.jsx(n,{icon:t,size:"x-large"}),label:"Home"},{icon:e.jsx(n,{icon:ge,size:"x-large"}),label:"Search"},{icon:e.jsx(n,{icon:Ie,size:"x-large"}),label:"Person"},{icon:e.jsx(n,{icon:h,size:"x-large"}),label:"Settings"},{icon:e.jsx(n,{icon:be,size:"x-large"}),label:"Favorite"},{icon:e.jsx(n,{icon:g,size:"x-large"}),label:"Notifications"},{icon:e.jsx(n,{icon:we,size:"x-large"}),label:"Delete"},{icon:e.jsx(n,{icon:Se,size:"x-large"}),label:"Edit"},{icon:e.jsx(n,{icon:ke,size:"x-large"}),label:"Mail"},{icon:e.jsx(n,{icon:ze,size:"x-large"}),label:"Lock"},{icon:e.jsx(n,{icon:ve,size:"x-large"}),label:"Visibility"},{icon:e.jsx(n,{icon:Ce,size:"x-large"}),label:"Check"},{icon:e.jsx(n,{icon:Be,size:"x-large"}),label:"Info"},{icon:e.jsx(n,{icon:Pe,size:"x-large"}),label:"Warning"},{icon:e.jsx(n,{icon:Fe,size:"x-large"}),label:"Copy"},{icon:e.jsx(n,{icon:Ae,size:"x-large"}),label:"Download"},{icon:e.jsx(n,{icon:Oe,size:"x-large"}),label:"Share"},{icon:e.jsx(n,{icon:Ue,size:"x-large"}),label:"Filter"},{icon:e.jsx(n,{icon:Ee,size:"x-large"}),label:"Calendar"},{icon:e.jsx(n,{icon:Ge,size:"x-large"}),label:"Time"},{icon:e.jsx(n,{icon:He,size:"x-large"}),label:"Add"},{icon:e.jsx(n,{icon:Me,size:"x-large"}),label:"Close"},{icon:e.jsx(n,{icon:b,size:"x-large"}),label:"Archive"},{icon:e.jsx(n,{icon:x,size:"x-large"}),label:"Star"}]}),e.jsx(o.RelatedLinks,{links:[{label:"Browse Material Symbols on Google Fonts",href:"https://fonts.google.com/icons?icon.set=Material+Symbols"}]}),e.jsx(o.Footer,{text:"ⓒ 2026 NPX Design System"})]});xe.__docgenInfo={description:"",methods:[],displayName:"IconographyDocs"};const ye=()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"DocsTemplate",subtitle:"A reusable documentation page template system for the NPX Design System"}),e.jsx(o.BodyText,{children:"Use DocsTemplate to create consistent, branded documentation pages for components, tokens, and guidelines. The root wrapper provides the page layout (white background, centered 944px column), and each sub-component handles a specific documentation pattern."}),e.jsx(o.TokenTable,{title:"Sub-components",description:"Each sub-component handles a specific documentation pattern:",tokens:[{name:"DocsTemplate.Header",description:"NPX logo + page title + subtitle"},{name:"DocsTemplate.Section",description:"H1-level section with title, optional subtitle, and children"},{name:"DocsTemplate.Subsection",description:"H4-level subsection with title and children"},{name:"DocsTemplate.BodyText",description:"Styled paragraph text (default or small size)"},{name:"DocsTemplate.TokenTable",description:"Blue-bordered card showing design token name/description rows"},{name:"DocsTemplate.Principles",description:"Container for PrincipleCard items"},{name:"DocsTemplate.PrincipleCard",description:"Numbered principle with title and body text"},{name:"DocsTemplate.CodeBlock",description:"Gray background code snippet block"},{name:"DocsTemplate.DosDonts",description:"Side-by-side Do/Don’t comparison cards"},{name:"DocsTemplate.BulletList",description:"Unordered or ordered list with optional link styling"},{name:"DocsTemplate.RelatedLinks",description:"Section with external reference links"},{name:"DocsTemplate.IconGallery",description:"Grid of icons with labels"},{name:"DocsTemplate.SizeDemo",description:"Rows demonstrating icon/component sizes"},{name:"DocsTemplate.Anatomy",description:"Component anatomy diagram with static annotated image and parts table"},{name:"DocsTemplate.Footer",description:"Separator line + copyright text"}]}),e.jsx(o.Section,{title:"Using the component",subtitle:"Import DocsTemplate and compose your documentation page using sub-components."}),e.jsx(o.CodeBlock,{children:`import { DocsTemplate } from './components/DocsTemplate';

const MyDocsPage = () => (
  <DocsTemplate>
    <DocsTemplate.Header
      title="Component Name"
      subtitle="Short description of the component"
    />

    <DocsTemplate.BodyText>
      Introductory paragraph about the component.
    </DocsTemplate.BodyText>

    <DocsTemplate.TokenTable
      title="Design Tokens"
      description="Tokens used by this component:"
      tokens={[
        { name: '--example-color', description: 'Primary colour' },
        { name: '--example-size', description: 'Default size' },
      ]}
    />

    <DocsTemplate.Section title="Guidelines">
      <DocsTemplate.BodyText>
        Guideline content goes here.
      </DocsTemplate.BodyText>
    </DocsTemplate.Section>

    <DocsTemplate.Footer />
  </DocsTemplate>
);`}),e.jsx(o.Section,{title:"Component Anatomy",subtitle:"Use DocsTemplate.Anatomy to document the numbered parts of a component, the design tokens that control each element, and how they relate."}),e.jsxs(o.BodyText,{children:["The ",e.jsx("strong",{children:"Anatomy"})," sub-component displays a static annotated diagram (exported from Figma as an SVG or image) with numbered callouts and connector lines baked in, followed by a structured parts table. Each part lists its name, associated design token(s), and a short description. Use it as the first section after the introductory text in every component’s documentation page."]}),e.jsx(o.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Fbf096656a4e94f0ab4dee13de9549353",alt:"Example component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Close Icon",token:`filled/icons (action category)
--alert-close-icon-{size}
--alert-icon-opacity`,description:"Optional dismiss action icon (16×16). Toggle with showTrailingIcon prop."},{id:2,name:"Title",token:`--alert-font-family
--alert-title-size-{size}
--alert-title-weight
--alert-title-{colour}`,description:"Primary message text (283×20). Uses F37 Ginger (Regular) at 14px / 18px line-height."},{id:3,name:"Leading Icon",token:`filled/icons (display category)
--alert-leading-icon-{size}
--alert-icon-opacity`,description:"Context-sensitive SVG icon (22×22) indicating the alert type. Rendered at 50% opacity."}]}),e.jsx(o.Subsection,{title:"Props"}),e.jsx(o.TokenTable,{title:"Anatomy Props",description:"The Anatomy component accepts the following props:",tokens:[{name:"preview",description:"React node — a static annotated image (SVG or PNG exported from Figma) showing the component with numbered callouts"},{name:"parts",description:"Array of AnatomyPart objects (id, name, token, description)"}]}),e.jsx(o.TokenTable,{title:"AnatomyPart shape",description:"Each item in the parts array has the following fields:",tokens:[{name:"id",description:"number — the callout number matching the diagram"},{name:"name",description:"string — short element name (e.g. “Leading Icon”, “Title”)"},{name:"token",description:"string — design token name(s) or component reference. Use \\n for multi-line"},{name:"description",description:"string — what this element does and how it behaves"}]}),e.jsx(o.Subsection,{title:"Usage"}),e.jsx(o.CodeBlock,{children:`<DocsTemplate.Anatomy
  preview={
    <img
      src="/path/to/component-anatomy.svg"
      alt="Component anatomy diagram"
      style={{ width: '100%', height: 'auto' }}
    />
  }
  parts={[
    {
      id: 1,
      name: 'Close Icon',
      token: '--component-close-icon-size\\n--component-icon-opacity',
      description: 'Optional dismiss action icon.',
    },
    {
      id: 2,
      name: 'Title',
      token: '--component-font-family\\n--component-font-size',
      description: 'Primary heading text.',
    },
  ]}
/>`}),e.jsx(o.TokenTable,{title:"Design Tokens Used",description:"The template relies on existing design system tokens. Key tokens include:",tokens:[{name:"--font-family-primary",description:"Typography — F37 Ginger Pro"},{name:"--font-family-secondary",description:"Typography — Calibri"},{name:"--global-color-base-black",description:"Colour — base black text"},{name:"--color-primary-blue-blue",description:"Colour — primary brand blue"},{name:"--color-primary-blue-blue-50",description:"Background — principle cards, token tables"},{name:"--color-additional-gray-light-light-gray-default",description:"Background — code blocks"},{name:"--global-spacing-sizing-*",description:"Spacing — all spacing scale values"},{name:"--global-spacing-radius-12px",description:"Spacing — card border radius"}]}),e.jsx(o.Section,{title:"Reference implementation",children:e.jsxs(o.BodyText,{children:["See the ",e.jsx("strong",{children:"Iconography"})," story under"," ",e.jsx("strong",{children:"Foundation/DocsTemplate"})," for a complete example of all sub-components working together to produce a full documentation page."]})}),e.jsx(o.Footer,{})]});ye.__docgenInfo={description:"",methods:[],displayName:"DocsTemplateDocs"};const Ke={title:"Foundation/DocsTemplate",component:o,parameters:{layout:"fullscreen"}},i={render:()=>e.jsx(ye,{}),parameters:{controls:{disable:!0},actions:{disable:!0}}},s={render:()=>e.jsx(xe,{})},a={render:()=>e.jsxs(o,{children:[e.jsx(o.Header,{title:"Component Name",subtitle:"A short description of the component and its purpose"}),e.jsx(o.BodyText,{children:"This is body text that provides additional context about the component. It uses the secondary font family (Calibri) at the large body size."}),e.jsx(o.Section,{title:"Section Title",subtitle:"Optional subtitle that provides additional context.",children:e.jsx(o.BodyText,{children:"Content within a section is indented and spaced consistently."})}),e.jsx(o.Footer,{})]})},r={render:()=>e.jsx(o,{children:e.jsx(o.TokenTable,{title:"Design Tokens",description:"We use the following tokens to style this component:",tokens:[{name:"--brand-primary",description:"Primary brand colour"},{name:"--brand-secondary",description:"Secondary brand colour"},{name:"--global-spacing-sizing-8px",description:"Base spacing unit"}]})})},c={render:()=>e.jsx(o,{children:e.jsxs(o.Principles,{children:[e.jsx(o.PrincipleCard,{number:1,title:"Consistency",children:"Maintain visual and behavioural consistency across all components."}),e.jsx(o.PrincipleCard,{number:2,title:"Accessibility",children:"Ensure every component is usable by people of all abilities."})]})})},l={render:()=>e.jsx(o,{children:e.jsx(o.CodeBlock,{children:`import { Button } from './components/Button';

const App = () => (
  <Button variant="primary" size="default">
    Click me
  </Button>
);`})})},d={render:()=>e.jsx(o,{children:e.jsx(o.DosDonts,{doItem:{icon:e.jsx(n,{icon:h,size:"x-large"}),label:"Settings",description:"Use familiar symbols with clear associations."},dontItem:{icon:e.jsx(n,{icon:he,size:"x-large"}),label:"Settings",description:"Don’t use unfamiliar symbols that could be confused."}})})},p={render:()=>e.jsx(o,{children:e.jsx(o.IconGallery,{items:[{icon:e.jsx(n,{icon:t,size:"x-large"}),label:"Home"},{icon:e.jsx(n,{icon:ge,size:"x-large"}),label:"Search"},{icon:e.jsx(n,{icon:h,size:"x-large"}),label:"Settings"},{icon:e.jsx(n,{icon:be,size:"x-large"}),label:"Favorite"}]})})},m={render:()=>e.jsxs(o,{children:[e.jsx(o.Section,{title:"Component Anatomy",children:e.jsxs(o.BodyText,{children:["Use ",e.jsx("strong",{children:"DocsTemplate.Anatomy"})," to document the numbered parts of a component. Pass a static annotated SVG or image (exported from Figma) as the ",e.jsx("code",{children:"preview"}),", with numbered callouts and connector lines baked into the image. The ",e.jsx("code",{children:"parts"})," ","array populates the detail table below the diagram, mapping each number to its element name, design tokens, and description."]})}),e.jsx(o.Anatomy,{preview:e.jsx("img",{src:"https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Fbf096656a4e94f0ab4dee13de9549353",alt:"Example component anatomy diagram with numbered callouts",style:{width:"100%",height:"auto"}}),parts:[{id:1,name:"Leading Icon",token:`filled/icons (display)
--component-leading-icon-size
--component-icon-opacity`,description:"Context-sensitive icon indicating the component type or state. Rendered at 50% opacity."},{id:2,name:"Title",token:`--component-font-family
--component-title-size
--component-title-color`,description:"Primary text using F37 Ginger Pro Regular. Colour changes per variant."},{id:3,name:"Description",token:`--component-font-family
--component-desc-size
--component-desc-color`,description:"Supporting subtext at 300 weight. Always gray-700."},{id:4,name:"Close Icon",token:`filled/icons (action)
--component-close-icon-size
--component-icon-opacity`,description:"Optional dismiss action with 50% opacity. Toggle with showTrailingIcon prop."}]})]})},u={render:()=>e.jsx(o,{children:e.jsx(o.SizeDemo,{rows:[{label:"Default (16px)",sublabel:"use in most cases",children:e.jsx(n,{icon:t,size:"default"})},{label:"Small (14px)",sublabel:"Use sparingly",children:e.jsx(n,{icon:t,size:"small"})},{label:"Large (18px)",sublabel:"Use sparingly",children:e.jsx(n,{icon:t,size:"large"})}]})})};var y,f,T,D,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <DocsTemplateDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(T=(f=i.parameters)==null?void 0:f.docs)==null?void 0:T.source},description:{story:"Full branded documentation page for the DocsTemplate system.",...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.description}}};var I,w,S,k,z;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <IconographyDocs />
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source},description:{story:`The full Iconography documentation page — a complete reference
implementation of the DocsTemplate system.`,...(z=(k=s.parameters)==null?void 0:k.docs)==null?void 0:z.description}}};var v,C,B,P,F;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(B=(C=a.parameters)==null?void 0:C.docs)==null?void 0:B.source},description:{story:"Shows the basic page structure: Header, Section, BodyText, and Footer.",...(F=(P=a.parameters)==null?void 0:P.docs)==null?void 0:F.description}}};var A,O,U,E,G;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(U=(O=r.parameters)==null?void 0:O.docs)==null?void 0:U.source},description:{story:`Demonstrates the TokenTable sub-component used to display design token
name/description pairs inside a styled blue card.`,...(G=(E=r.parameters)==null?void 0:E.docs)==null?void 0:G.description}}};var H,M,L,N,R;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(M=c.parameters)==null?void 0:M.docs)==null?void 0:L.source},description:{story:"Demonstrates PrincipleCards inside the Principles container.",...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.description}}};var W,V,q,_,X;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:"Demonstrates the CodeBlock sub-component for displaying code snippets.",...(X=(_=l.parameters)==null?void 0:_.docs)==null?void 0:X.description}}};var K,Y,J,Q,Z;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(J=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:`Demonstrates the DosDonts sub-component with side-by-side
Do and Don't comparison cards.`,...(Z=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var $,ee,oe,ne,te;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(oe=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:oe.source},description:{story:`Demonstrates the IconGallery sub-component for displaying a grid
of icons with labels.`,...(te=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:te.description}}};var ie,se,ae,re,ce;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <DocsTemplate>
      <DocsTemplate.Section title="Component Anatomy">
        <DocsTemplate.BodyText>
          Use <strong>DocsTemplate.Anatomy</strong> to document the numbered parts of a component.
          Pass a static annotated SVG or image (exported from Figma) as the <code>preview</code>,
          with numbered callouts and connector lines baked into the image. The <code>parts</code>{' '}
          array populates the detail table below the diagram, mapping each number to its element
          name, design tokens, and description.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>
      <DocsTemplate.Anatomy preview={<img src="https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2Fbf096656a4e94f0ab4dee13de9549353" alt="Example component anatomy diagram with numbered callouts" style={{
      width: '100%',
      height: 'auto'
    }} />} parts={[{
      id: 1,
      name: 'Leading Icon',
      token: 'filled/icons (display)\\n--component-leading-icon-size\\n--component-icon-opacity',
      description: 'Context-sensitive icon indicating the component type or state. Rendered at 50% opacity.'
    }, {
      id: 2,
      name: 'Title',
      token: '--component-font-family\\n--component-title-size\\n--component-title-color',
      description: 'Primary text using F37 Ginger Pro Regular. Colour changes per variant.'
    }, {
      id: 3,
      name: 'Description',
      token: '--component-font-family\\n--component-desc-size\\n--component-desc-color',
      description: 'Supporting subtext at 300 weight. Always gray-700.'
    }, {
      id: 4,
      name: 'Close Icon',
      token: 'filled/icons (action)\\n--component-close-icon-size\\n--component-icon-opacity',
      description: 'Optional dismiss action with 50% opacity. Toggle with showTrailingIcon prop.'
    }]} />
    </DocsTemplate>
}`,...(ae=(se=m.parameters)==null?void 0:se.docs)==null?void 0:ae.source},description:{story:`Demonstrates the Anatomy sub-component for documenting
the numbered parts of a component with tokens and descriptions.`,...(ce=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ce.description}}};var le,de,pe,me,ue;u.parameters={...u.parameters,docs:{...(le=u.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(de=u.parameters)==null?void 0:de.docs)==null?void 0:pe.source},description:{story:"Demonstrates the SizeDemo sub-component for showing icon sizes.",...(ue=(me=u.parameters)==null?void 0:me.docs)==null?void 0:ue.description}}};const Ye=["UsageGuide","Iconography","BasicPageStructure","TokenTableExample","PrincipleCardsExample","CodeBlockExample","DosDontsExample","IconGalleryExample","ComponentAnatomyExample","SizeDemoExample"];export{a as BasicPageStructure,l as CodeBlockExample,m as ComponentAnatomyExample,d as DosDontsExample,p as IconGalleryExample,s as Iconography,c as PrincipleCardsExample,u as SizeDemoExample,r as TokenTableExample,i as UsageGuide,Ye as __namedExportsOrder,Ke as default};
