import{j as e}from"./iframe-B8AOd-mg.js";import{useMDXComponents as a}from"./index-C2OwVF8Y.js";import{M as r,C as l,a as s}from"./blocks-B386bpmK.js";import{I as t,S as c,C as d,G as h}from"./Icon.stories-DQgOvA-7.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D_ANpDK5.js";import"./createSvgIcon-DMCiAct0.js";import"./DocsTemplate-BtZTeUpx.js";import"./Close-uwA5p7OT.js";import"./Person-DdzgEJ9p.js";import"./Mail-mFESTdx3.js";import"./Cancel-hG07fJh2.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:t,title:"Foundations/Icon"}),`
`,e.jsx(n.h1,{id:"iconography",children:"Iconography"}),`
`,e.jsx(n.p,{children:"Icons are visual representations of commands, features, directories, or common actions."}),`
`,e.jsx(n.p,{children:"Icons are symbols designed to represent concepts or specific features. A company's iconography style can express a lot about a brand and its values."}),`
`,e.jsx(n.p,{children:"Our iconography has rounded corners and curves to align with our typography and other rounded UI elements, whilst square end terminals add boldness to create a harmonious app expression of NPX's broader design language."}),`
`,e.jsx(n.h2,{id:"design-tokens",children:"Design Tokens"}),`
`,e.jsx(n.p,{children:"We use the following tokens to render our icons:"}),`
`,e.jsxs(n.p,{children:[`| Token Name | Description |
| :--- | :--- |
| `,e.jsx(n.code,{children:"--brand-icon-main"}),` | Primary icon color |
| `,e.jsx(n.code,{children:"--icon-size-2x-small"}),` | 2x-small icon size |
| `,e.jsx(n.code,{children:"--icon-size-x-small"}),` | x-small icon size |
| `,e.jsx(n.code,{children:"--icon-size-small"}),` | small icon size |
| `,e.jsx(n.code,{children:"--icon-size-default"}),` | default icon size |
| `,e.jsx(n.code,{children:"--icon-size-large"})," | large icon size |"]}),`
`,e.jsx(n.h2,{id:"iconography-principles",children:"Iconography principles"}),`
`,e.jsx(n.p,{children:"Follow these common design principles by using icons in a cohesive, useful, and legible way."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Design for universal understanding"})}),`
`,e.jsx(n.p,{children:"Design icons that use widely recognized symbols and established visual metaphors. Ensure icons are easily understood by a diverse audience by avoiding specific cultural or language aspects."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Balance simplicity and detail to create legibility"})}),`
`,e.jsx(n.p,{children:"Craft icons that are simple enough for quick recognition, yet detailed enough to convey meaning effectively, even at small sizes."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Maintain visual harmony"})}),`
`,e.jsx(n.p,{children:"Ensure icons work together as a cohesive system by adhering to consistent size, shape, and style guidelines across the entire set."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Use icons intentionally"})}),`
`,e.jsx(n.p,{children:"Icons are powerful signifiers that can aid comprehension and help with navigation. They can also add clutter or confuse people when used poorly. Use text labels to support icons wherever possible, and avoid using icons where they aren't necessary."}),`
`,e.jsx(n.h2,{id:"using-icons",children:"Using Icons"}),`
`,e.jsxs(n.p,{children:["To use an icon, import the ",e.jsx(n.code,{children:"Icon"})," component and a specific icon from ",e.jsx(n.strong,{children:"@mui/icons-material"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Icon } from './components/Icon';
import HomeIcon from '@mui/icons-material/Home';

const MyComponent = () => (
  <Icon icon={HomeIcon} color="primary" size="default" />
);
`})}),`
`,e.jsxs(n.p,{children:["You can find all available icons in the ",e.jsx(n.a,{href:"https://mui.com/material-ui/material-icons/",rel:"nofollow",children:"Material UI Icon Search"}),". Simply find the name of the icon and import it from ",e.jsx(n.code,{children:"@mui/icons-material"}),"."]}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Home"})," -> ",e.jsx(n.code,{children:"import HomeIcon from '@mui/icons-material/Home'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Favorite"})," -> ",e.jsx(n.code,{children:"import FavoriteIcon from '@mui/icons-material/Favorite'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Settings"})," -> ",e.jsx(n.code,{children:"import SettingsIcon from '@mui/icons-material/Settings'"})]}),`
`]}),`
`,e.jsx(n.p,{children:"Our icons are available as a component (React, via MUI Icons), within Figma, and in our documentation."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://fonts.google.com/icons?icon.set=Material+Symbols",rel:"nofollow",children:"View MUI Symbols icons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/google/material-design-icons",rel:"nofollow",children:"MUI Material GitHub component usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.figma.com/community/plugin/1088610476491668236/material-symbols",rel:"nofollow",children:"MUI Symbols Figma Plugin"})}),`
`,e.jsx(n.li,{children:"NPX Design System Curated Icons (Figma library)"}),`
`]}),`
`,e.jsx(n.p,{children:"The component accepts the following props:"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"visual-style",children:"Visual Style"}),`
`,e.jsx(n.p,{children:'Our icons are available as "filled" or "outline" options, dependant on the scenario you may need them for. Where accessibility contrast is low, using "filled" icons will create a better visual distinction for those who may be colourblind or partially sighted.'}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Simplicity & metaphor"})}),`
`,e.jsx(n.p,{children:"Wherever possible, use icons from the Curated Icons Figma file to maintain consistency and reinforce visual concepts across experiences, so they become familiar to users."}),`
`,e.jsx(n.h3,{id:"do",children:"Do"}),`
`,e.jsx(n.p,{children:"Use an existing icon or visual metaphor for consistency and clarity wherever possible."}),`
`,e.jsx(n.h3,{id:"dont",children:"Don't"}),`
`,e.jsx(n.p,{children:"Create a new icon if a suitable one already exists to represent the same metaphor."}),`
`,e.jsx(n.p,{children:"Use simplified shapes with the minimum detail required to express a metaphor. The goal of an icon is to aid clear, quick comprehension — excess detail can distract and do the opposite. The small size of icons makes it harder to see fine details, so we optimise for simplicity and legibility."}),`
`,e.jsx(n.h3,{id:"do-1",children:"Do"}),`
`,e.jsx(n.p,{children:"Use simple shapes with the minimum detail required to express a metaphor with clarity and legibility."}),`
`,e.jsx(n.h3,{id:"dont-1",children:"Don't"}),`
`,e.jsx(n.p,{children:"Don't add excess detail unless necessary. This can distract and be challenging to read at a small sizes."}),`
`,e.jsx(n.p,{children:"When creating a new icon, use symbols that clearly represent a concept. Try to use metaphors with clear and established associations wherever possible."}),`
`,e.jsx(n.h3,{id:"do-2",children:"Do"}),`
`,e.jsx(n.p,{children:"Use familiar symbols with clear and established associations that clearly represent a concept."}),`
`,e.jsx(n.h3,{id:"dont-2",children:"Don't"}),`
`,e.jsx(n.p,{children:"Use caution when creating an icon that isn't a widely recognized symbol. It may be confused with another concept or misunderstood."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Perspective & angles"})}),`
`,e.jsx(n.p,{children:"Shapes should appear straight on or from a full 90 degree profile. Don't use diagonal perspectives to create 3D shapes because these can be hard to discern at a glance, especially for people with some cognitive disabilities."}),`
`,e.jsx(n.h3,{id:"do-3",children:"Do"}),`
`,e.jsx(n.p,{children:"Try to use shapes that appear straight on without dimensionality."}),`
`,e.jsx(n.h3,{id:"dont-3",children:"Don't"}),`
`,e.jsx(n.p,{children:"Don't use diagonal perspectives to create 3D shapes as they can be hard to discern at a glance."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Shapes"})}),`
`,e.jsx(n.p,{children:"Icons use consistent shapes to ensure a consistent look and feel across the set. MUI designed each shape for optical scale and balance, so that taller, thinner shapes don't feel like a different scale from shorter or wider shapes."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Corner & curves"})}),`
`,e.jsx(n.p,{children:"Curved edges lend to a friendlier feel, but internal edges remain sharp to maintain clarity."}),`
`,e.jsx(n.h3,{id:"do-4",children:"Do"}),`
`,e.jsx(n.p,{children:"Where possible, keep internal angles sharp."}),`
`,e.jsx(n.h3,{id:"dont-4",children:"Don't"}),`
`,e.jsx(n.p,{children:"Use a rounded icon, when a outlined or sharp option is available."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Colour"})}),`
`,e.jsx(n.p,{children:"Like most elements in our system, icons use design tokens for their colours. Never use inaccessible colours for icons, especially if there is no label to help the user further parse it's meaning. There should be no use of hardcoded colours with icons – pick from the design system tokens available."}),`
`,e.jsx(n.h2,{id:"size-and-spacing",children:"Size and spacing"}),`
`,e.jsx(n.p,{children:"System icons are available at multiple sizes, depending of their usage:"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Default (var(--global-spacing-sizing-16px)) — use in most cases"})}),`
`,e.jsxs(n.p,{children:["Default icons are ",e.jsx(n.code,{children:"var(--global-spacing-sizing-16px)"})," × ",e.jsx(n.code,{children:"var(--global-spacing-sizing-16px)"})," in size and are the ",e.jsx(n.strong,{children:"default"})," size in our system. This size balances harmoniously with our regular body text and the density of the apps NPX creates."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Small (var(--global-spacing-sizing-14px)) — Use sparingly"})}),`
`,e.jsxs(n.p,{children:["Small icons are ",e.jsx(n.code,{children:"var(--global-spacing-sizing-14px)"})," × ",e.jsx(n.code,{children:"var(--global-spacing-sizing-14px)"})," in size and are downscaled from our ",e.jsx(n.code,{children:"var(--global-spacing-sizing-16px)"})," default. This size should be used for footnotes and terms that don't need prominent placement in our visual hierarchy. Outside of accompanying small text, limit usage of small icons to the following areas:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Footnotes, terms and conditions"}),`
`,e.jsx(n.li,{children:"Comments"}),`
`,e.jsx(n.li,{children:"Metrics & data display"}),`
`,e.jsx(n.li,{children:"Tables"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"X-Small (var(--global-spacing-sizing-12px)) — Use rarely"})}),`
`,e.jsxs(n.p,{children:["X-Small icons are ",e.jsx(n.code,{children:"var(--global-spacing-sizing-12px)"})," × ",e.jsx(n.code,{children:"var(--global-spacing-sizing-12px)"})," in size and are downscaled from our ",e.jsx(n.code,{children:"var(--global-spacing-sizing-16px)"})," default. This size should be used sparingly as they aren't as legible as ",e.jsx(n.code,{children:"var(--global-spacing-sizing-16px)"})," icons. Limit usage of ",e.jsx(n.code,{children:"var(--global-spacing-sizing-12px)"})," icons to accompanying X-Small text only."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"2X-Small (var(--global-spacing-sizing-10px)) — Use rarely"})}),`
`,e.jsxs(n.p,{children:["2X-Small icons are ",e.jsx(n.code,{children:"var(--global-spacing-sizing-10px)"})," × ",e.jsx(n.code,{children:"var(--global-spacing-sizing-10px)"})," in size and are downscaled from our ",e.jsx(n.code,{children:"var(--global-spacing-sizing-16px)"})," default. This size should be used sparingly as they aren't as legible as ",e.jsx(n.code,{children:"var(--global-spacing-sizing-16px)"})," icons. Limit usage of ",e.jsx(n.code,{children:"var(--global-spacing-sizing-10px)"})," icons to accompanying 2X-Small text only."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Large (var(--global-spacing-sizing-18px)) — Use sparingly"})}),`
`,e.jsxs(n.p,{children:["Large icons are ",e.jsx(n.code,{children:"var(--global-spacing-sizing-18px)"})," × ",e.jsx(n.code,{children:"var(--global-spacing-sizing-18px)"})," in size and are upscaled from our ",e.jsx(n.code,{children:"var(--global-spacing-sizing-16px)"})," default. This size should be used sparingly as they can overwhelm the UI at times. Limit usage of ",e.jsx(n.code,{children:"var(--global-spacing-sizing-18px)"})," icons to the following areas:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Metrics & data display"}),`
`,e.jsx(n.li,{children:"Headings & subtitles"}),`
`,e.jsx(n.li,{children:"Dashboards"}),`
`]}),`
`,e.jsxs(n.p,{children:["By default, there is always at least ",e.jsx(n.code,{children:"var(--global-spacing-sizing-2px)"})," of padding around an icon, and in cases where the icon is not square itself, we default to the longest side and centre the icon on its shortest side. All padding values should be applied using the design tokens within the design system."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h2,{id:"contribution--adding-new-icons",children:"Contribution & adding new icons"}),`
`,e.jsxs(n.p,{children:["Currently, we use ",e.jsx(n.a,{href:"https://fonts.google.com/icons?icon.set=Material+Symbols",rel:"nofollow",children:"Material Symbols"})," as our default icon library. Material Symbols have an extensive variety of options available, which can be ",e.jsx(n.a,{href:"https://fonts.google.com/icons?icon.set=Material+Symbols",rel:"nofollow",children:"searched with Google Fonts."})]}),`
`,e.jsx(n.p,{children:"In the rare event that Material Symbols does not have an adequate icon available, designers can contribute new ideas for icons. Before contributing a new icon, take look at our existing icons within Material Symbols and consider the following questions:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Is the icon I'm contributing very similar to another system icon?"}),`
`,e.jsx(n.li,{children:"Could my icon be confused with another concept that exists in apps?"}),`
`,e.jsx(n.li,{children:"Does this design really require an icon at all? Would a text label, button, or other approach provide a clearer affordance for customer understanding?"}),`
`]}),`
`,e.jsxs(n.p,{children:["To contribute a new icon, please bring it to our ",e.jsx(n.a,{href:"https://teams.microsoft.com/meet/2968871577190?p=VGxQDsCWAp9iD0mK7p",rel:"nofollow",children:"Biweekly Design System meeting"})," for review with the whole team. If you need the calendar invite forwarding, please send the ",e.jsx(n.a,{href:"https://teams.cloud.microsoft/l/chat/19:c3c7d1170ba949228c4c6885a39882d2@thread.v2/conversations?context=%7B%22contextType%22%3A%22chat%22%7D",rel:"nofollow",children:"design team"})," a message on Teams."]}),`
`,e.jsx(n.h2,{id:"common-icons-gallery",children:"Common Icons Gallery"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.p,{children:"Related"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://fonts.google.com/icons?icon.set=Material+Symbols",rel:"nofollow",children:"Browse all Material Symbols on Google"})}),`
`]})]})}function I(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{I as default};
