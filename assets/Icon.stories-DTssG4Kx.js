import{j as e}from"./iframe-YNeplzSN.js";import{I as o}from"./Icon-BX_R8his.js";import{D as n}from"./DocsTemplate-YmZ5wZfr.js";import{N as ze,a as S,L as je,B as Se,S as C,V as Ce,A as w,H as r,b as y,c as M,P as we,F as Me,D as ke,E as De,M as Ve,d as He,C as Fe,I as Be,W as Ae,e as Te,f as Le,g as Oe,h as Pe,i as Ue,j as We,k as Ee}from"./AddCircleOutline-BWSZkToz.js";import{L as Ne}from"./LocalOfferOutlined-cN_4A3gs.js";import{S as f}from"./Search-CXWBoxmI.js";import{L as qe}from"./LockOutlined-gjEbeSzh.js";import{C as b}from"./Close-DXkIh4Ei.js";import{c as a}from"./createSvgIcon-BTOcO4F2.js";import{S as I}from"./Settings-DTUkcsP8.js";import{M as he}from"./Mail-BtWiudXa.js";import{D as xe}from"./Delete-DDktA-Zk.js";import{A as ue}from"./Add-Ccl0v2H_.js";import{A as Re}from"./ArrowForward-Ctnf-ef-.js";import{P as ye}from"./Person-D-u90RGW.js";import{E as fe}from"./Edit-DUcIK-fu.js";import{C as _e}from"./Check-GcgSdfWc.js";import{C as Ge}from"./Cancel-BAiwLzT-.js";import{D as Xe}from"./Download-CeFOkUoI.js";import"./preload-helper-Dp1pzeXC.js";import"./DefaultPropsProvider-DYdsgcMI.js";import"./memoTheme-CDzK_TtI.js";const v=()=>e.jsxs(n,{children:[e.jsx(n.Header,{title:"Iconography",subtitle:"Icons are visual representations of commands, features, directories, or common actions"}),e.jsxs(n.BodyText,{children:["Icons are symbols designed to represent concepts or specific features. A company’s iconography style can express a lot about a brand and its values.",e.jsx("br",{}),"Our iconography has rounded corners and curves to align with our typography and other rounded UI elements, whilst square end terminals add boldness to create a harmonious app expression of NPX’s broader design language."]}),e.jsxs(n.Section,{title:"MUI Foundation",children:[e.jsxs(n.BodyText,{children:["The ",e.jsx("strong",{children:"Icon"})," wrapper component is built on MUI's"," ",e.jsx("strong",{children:"SvgIconProps"})," interface from ",e.jsx("code",{children:"@mui/material/SvgIcon"}),". The ",e.jsx("code",{children:"Icon"})," component accepts any MUI SvgIcon element type as its"," ",e.jsx("code",{children:"icon"})," prop and passes down size, colour, and ",e.jsx("code",{children:"aria-hidden"})," ","attributes. All icons in the design system are sourced from"," ",e.jsx("code",{children:"@mui/icons-material"})," — the official MUI icon set. This ensures consistent SVG rendering, proper ",e.jsx("code",{children:'role="img"'})," semantics, and seamless scaling with the ",e.jsx("code",{children:"--icon-size-*"})," token family via CSS Modules."]}),e.jsx(n.CodeBlock,{children:`// MUI base interface
import { SvgIconProps } from '@mui/material/SvgIcon';

// All icons from MUI icons library:
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
// ... any icon from @mui/icons-material

// Usage via Icon wrapper:
<Icon icon={HomeIcon} size="default" aria-hidden />

// Or directly in components:
<HomeIcon className={styles['btn__icon-svg']} />`})]}),e.jsx(n.TokenTable,{title:"Design Tokens",description:"We use the following tokens to render our icons:",tokens:[{name:"--brand-icon-main",description:"Primary icon color"},{name:"--icon-size-2x-small",description:"2x-small icon size"},{name:"--icon-size-x-small",description:"x-small icon size"},{name:"--icon-size-small",description:"small icon size"},{name:"--icon-size-default",description:"default icon size"},{name:"--icon-size-large",description:"large icon size"}]}),e.jsx(n.Section,{title:"Iconography principles",subtitle:"Follow these common design principles by using icons in a cohesive, useful, and legible way."}),e.jsxs(n.Principles,{children:[e.jsx(n.PrincipleCard,{number:1,title:"Design for universal understanding",children:"Design icons that use widely recognized symbols and established visual metaphors. Ensure icons are easily understood by a diverse audience by avoiding specific cultural or language aspects."}),e.jsx(n.PrincipleCard,{number:2,title:"Balance simplicity and detail to create legibility",children:"Craft icons that are simple enough for quick recognition, yet detailed enough to convey meaning effectively, even at small sizes."}),e.jsx(n.PrincipleCard,{number:3,title:"Maintain visual harmony",children:"Ensure icons work together as a cohesive system by adhering to consistent size, shape, and style guidelines across the entire set."}),e.jsx(n.PrincipleCard,{number:4,title:"Use icons intentionally",children:"Icons are powerful signifiers that can aid comprehension and help with navigation. They can also add clutter or confuse people when used poorly. Use text labels to support icons wherever possible, and avoid using icons where they aren’t necessary."})]}),e.jsx(n.Section,{title:"Using icons",subtitle:"To use an icon, import the Icon component and a specific icon from @mui/icons-material"}),e.jsx(n.CodeBlock,{children:`import { Icon } from './components/Icon';
import HomeIcon from '@mui/icons-material/Home';

const MyComponent = () => (
  <Icon icon={HomeIcon} color="primary" size="default" />
);`}),e.jsxs(n.BodyText,{children:["You can find all available icons in the"," ",e.jsx("a",{href:"https://mui.com/material-ui/material-icons/",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-blue-blue)",textDecoration:"underline"},children:"Material UI Icon Search"}),". Simply find the name of the icon and import it from"," ",e.jsx("code",{style:{fontFamily:"monospace",fontWeight:600},children:"@mui/icons-material"}),e.jsx("br",{}),"For example:"]}),e.jsx(n.CodeBlock,{children:`Home -> import HomeIcon from '@mui/icons-material/Home'
Favorite -> import FavoriteIcon from '@mui/icons-material/Favorite'
Settings -> import SettingsIcon from '@mui/icons-material/Settings'`}),e.jsx(n.BodyText,{children:"Our icons are available as a component (React, via MUI Icons), within Figma, and in our documentation."}),e.jsx(n.BulletList,{variant:"link",items:["View MUI Symbols icons","MUI Material GitHub component usage","MUI Symbols Figma Plugin","NPX Design System Curated Icons (Figma library)"]}),e.jsx(n.Section,{title:"Visual style",subtitle:'Our icons are available as "filled" or "outline" options, dependant on the scenario you may need them for. Where accessibility contrast is low, using "filled" icons will create a better visual distinction for those who may be colourblind or partially sighted.'}),e.jsx(n.Subsection,{title:"Simplicity & metaphor"}),e.jsx(n.BodyText,{children:"Wherever possible, use icons from the Curated Icons Figma file to maintain consistency and reinforce visual concepts across experiences, so they become familiar to users."}),e.jsx(n.DosDonts,{doItem:{icon:e.jsx(o,{icon:S,size:"x-large"}),description:"Use an existing icon or visual metaphor for consistency and clarity wherever possible."},dontItem:{icon:e.jsx(o,{icon:ze,size:"x-large"}),description:"Create a new icon if a suitable one already exists to represent the same metaphor."}}),e.jsx(n.BodyText,{children:"Use simplified shapes with the minimum detail required to express a metaphor. The goal of an icon is to aid clear, quick comprehension — excess detail can distract and do the opposite. The small size of icons makes it harder to see fine details, so we optimise for simplicity and legibility."}),e.jsx(n.DosDonts,{doItem:{icon:e.jsx(o,{icon:Ne,size:"x-large"}),description:"Use simple shapes with the minimum detail required to express a metaphor with clarity and legibility."},dontItem:{icon:e.jsx(o,{icon:je,size:"x-large"}),description:"Don’t add excess detail unless necessary. This can distract and be challenging to read at small sizes."}}),e.jsx(n.BodyText,{children:"When creating a new icon, use symbols that clearly represent a concept. Try to use metaphors with clear and established associations wherever possible."}),e.jsx(n.DosDonts,{doItem:{icon:e.jsx(o,{icon:C,size:"x-large"}),label:"Settings",description:"Use familiar symbols with clear and established associations that clearly represent a concept."},dontItem:{icon:e.jsx(o,{icon:Se,size:"x-large"}),label:"Settings",description:"Use caution when creating an icon that isn’t a widely recognized symbol. It may be confused with another concept or misunderstood."}}),e.jsx(n.Subsection,{title:"Perspective & angles"}),e.jsx(n.BodyText,{children:"Shapes should appear straight on or from a full 90 degree profile. Don’t use diagonal perspectives to create 3D shapes because these can be hard to discern at a glance, especially for people with some cognitive disabilities."}),e.jsx(n.DosDonts,{doItem:{icon:e.jsx(o,{icon:w,size:"x-large"}),description:"Try to use shapes that appear straight on without dimensionality."},dontItem:{icon:e.jsx(o,{icon:Ce,size:"x-large"}),description:"Don’t use diagonal perspectives to create 3D shapes as they can be hard to discern at a glance."}}),e.jsx(n.Section,{title:"Size & spacing",subtitle:"System icons are available at multiple sizes, depending of their usage:"}),e.jsx(n.SizeDemo,{rows:[{label:"Default (16px)",sublabel:"use in most cases",children:e.jsx(o,{icon:r,size:"default"})},{label:"Small (14px)",sublabel:"Use sparingly",children:e.jsx(o,{icon:r,size:"small"})},{label:"X-Small (12px)",sublabel:"Use rarely",children:e.jsx(o,{icon:r,size:"x-small"})},{label:"2X-Small (10px)",sublabel:"Use rarely",children:e.jsx(o,{icon:r,size:"2x-small"})},{label:"Large (18px)",sublabel:"Use sparingly",children:e.jsx(o,{icon:r,size:"large"})}]}),e.jsx(n.BodyText,{children:"By default, there is always at least 2px of padding around an icon, and in cases where the icon is not square itself, we default to the longest side and centre the icon on its shortest side. All padding values should be applied using the design tokens within the design system."}),e.jsx(n.Section,{title:"Shapes",children:e.jsx(n.BodyText,{children:"Icons use consistent shapes to ensure a consistent look and feel across the set. MUI designed each shape for optical scale and balance, so that taller, thinner shapes don’t feel like a different scale from shorter or wider shapes."})}),e.jsx(n.Subsection,{title:"Corner & curves"}),e.jsx(n.BodyText,{children:"Curved edges lend to a friendlier feel, but internal edges remain sharp to maintain clarity."}),e.jsx(n.DosDonts,{doItem:{icon:e.jsx(o,{icon:M,size:"x-large"}),description:"Where possible, keep internal angles sharp."},dontItem:{icon:e.jsx(o,{icon:y,size:"x-large"}),description:"Use a rounded icon, when an outlined or sharp option is available."}}),e.jsx(n.Section,{title:"Colour",children:e.jsx(n.BodyText,{children:"Like most elements in our system, icons use design tokens for their colours. Never use inaccessible colours for icons, especially if there is no label to help the user further parse its meaning. There should be no use of hardcoded colours with icons – pick from the design system tokens available."})}),e.jsxs(n.Section,{title:"Contribution & adding new icons",children:[e.jsxs(n.BodyText,{children:["Currently, we use"," ",e.jsx("a",{href:"https://fonts.google.com/icons?icon.set=Material+Symbols",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-blue-blue)",textDecoration:"underline"},children:"Material Symbols"})," ","as our default icon library. Material Symbols have an extensive variety of options available, which can be searched with"," ",e.jsx("a",{href:"https://fonts.google.com/icons?icon.set=Material+Symbols",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-primary-blue-blue)",textDecoration:"underline"},children:"Google Fonts"}),".",e.jsx("br",{}),"In the rare event that Material Symbols does not have an adequate icon available, designers can contribute new ideas for icons. Before contributing a new icon, take look at our existing icons within Material Symbols and consider the following questions:"]}),e.jsx(n.BulletList,{ordered:!0,items:["Is the icon I’m contributing very similar to another system icon?","Could my icon be confused with another concept that exists in apps?","Does this design really require an icon at all? Would a text label, button, or other approach provide a clearer affordance for customer understanding?"]}),e.jsxs(n.BodyText,{children:["To contribute a new icon, please bring it to our"," ",e.jsx("strong",{children:"Biweekly Design System meeting"})," for review with the whole team. If you need the calendar invite forwarding, please send the"," ",e.jsx("strong",{children:"design team"})," a message on Teams."]})]}),e.jsx(n.Section,{title:"Common icons gallery"}),e.jsx(n.IconGallery,{items:[{icon:e.jsx(o,{icon:r,size:"x-large"}),label:"Home"},{icon:e.jsx(o,{icon:f,size:"x-large"}),label:"Search"},{icon:e.jsx(o,{icon:we,size:"x-large"}),label:"Person"},{icon:e.jsx(o,{icon:C,size:"x-large"}),label:"Settings"},{icon:e.jsx(o,{icon:Me,size:"x-large"}),label:"Favorite"},{icon:e.jsx(o,{icon:S,size:"x-large"}),label:"Notifications"},{icon:e.jsx(o,{icon:ke,size:"x-large"}),label:"Delete"},{icon:e.jsx(o,{icon:De,size:"x-large"}),label:"Edit"},{icon:e.jsx(o,{icon:Ve,size:"x-large"}),label:"Mail"},{icon:e.jsx(o,{icon:qe,size:"x-large"}),label:"Lock"},{icon:e.jsx(o,{icon:He,size:"x-large"}),label:"Visibility"},{icon:e.jsx(o,{icon:Fe,size:"x-large"}),label:"Check"},{icon:e.jsx(o,{icon:Be,size:"x-large"}),label:"Info"},{icon:e.jsx(o,{icon:Ae,size:"x-large"}),label:"Warning"},{icon:e.jsx(o,{icon:Te,size:"x-large"}),label:"Copy"},{icon:e.jsx(o,{icon:Le,size:"x-large"}),label:"Download"},{icon:e.jsx(o,{icon:Oe,size:"x-large"}),label:"Share"},{icon:e.jsx(o,{icon:Pe,size:"x-large"}),label:"Filter"},{icon:e.jsx(o,{icon:Ue,size:"x-large"}),label:"Calendar"},{icon:e.jsx(o,{icon:We,size:"x-large"}),label:"Time"},{icon:e.jsx(o,{icon:Ee,size:"x-large"}),label:"Add"},{icon:e.jsx(o,{icon:b,size:"x-large"}),label:"Close"},{icon:e.jsx(o,{icon:w,size:"x-large"}),label:"Archive"},{icon:e.jsx(o,{icon:M,size:"x-large"}),label:"Star"}]}),e.jsx(n.RelatedLinks,{links:[{label:"Browse Material Symbols on Google Fonts",href:"https://fonts.google.com/icons?icon.set=Material+Symbols"}]}),e.jsx(n.Footer,{})]});v.__docgenInfo={description:"",methods:[],displayName:"IconDocs"};const s=a(e.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})),be=a(e.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"})),z=a(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"})),Ie=a(e.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"})),Ye=a(e.jsx("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"})),Je=a(e.jsx("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"})),j=a(e.jsx("path",{d:"M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z"})),Ke=a(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"})),Qe=a(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"})),Ze=a(e.jsx("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"})),$e=a(e.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"})),eo=a(e.jsx("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"})),oo=a(e.jsx("path",{d:"M8 5v14l11-7z"})),no=a(e.jsx("path",{d:"M6 19h4V5H6zm8-14v14h4V5z"})),ao=a(e.jsx("path",{d:"M6 6h12v12H6z"})),io=a(e.jsx("path",{d:"m6 18 8.5-6L6 6zM16 6v12h2V6z"})),so=a(e.jsx("path",{d:"M6 6h2v12H6zm3.5 6 8.5 6V6z"})),ro=a(e.jsx("path",{d:"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"})),to=a(e.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"})),co=a(e.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"})),lo=a(e.jsx("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"})),mo=a(e.jsx("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 12H6V10h12z"})),po=a(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 17h-2v-2h2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25"})),ve=a(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"})),go=a(e.jsx("path",{d:"M5 20h14v-2H5zm0-10h4v6h6v-6h4l-7-7z"})),ho=a(e.jsx("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96"})),xo=a([e.jsx("circle",{cx:"12",cy:"12",r:"3.2"},"0"),e.jsx("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")]),uo=a(e.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"})),yo=a(e.jsx("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3z"})),fo=a(e.jsx("path",{d:"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z"})),bo=a(e.jsx("path",{d:"M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28m-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18zM4.27 3 3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73z"})),Io=a(e.jsx("path",{d:"M3 9v6h4l5 5V4L7 9zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77"})),vo=a(e.jsx("path",{d:"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63m2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71M4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9zM12 4 9.91 6.09 12 8.18z"})),zo=a(e.jsx("path",{d:"M17.71 7.71 12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29zM13 5.83l1.88 1.88L13 9.59zm1.88 10.46L13 18.17v-3.76z"})),jo=a(e.jsx("path",{d:"m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9m8 8 3 3 3-3c-1.65-1.66-4.34-1.66-6 0m-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13"})),So=a(e.jsx("path",{d:"M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4"})),Co=a(e.jsx("path",{d:"m7 12-2-2-2 2 2 2zm10.71-4.29L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29zM13 5.83l1.88 1.88L13 9.59zm1.88 10.46L13 18.17v-3.76zM19 10l-2 2 2 2 2-2z"})),Yo={title:"Foundation/Iconography",component:o,parameters:{docs:{page:()=>e.jsx(v,{})}},argTypes:{icon:{description:"The Material UI icon component to render.",options:["Home","Search","Settings","Favorite","Mail","Delete","Add","CheckCircle","Menu","Close","Person","Warning","Info","Star","Edit"],mapping:{Home:s,Search:f,Settings:I,Favorite:be,Mail:he,Delete:xe,Add:ue,CheckCircle:z,Menu:Ie,Close:b,Person:ye,Warning:j,Info:ve,Star:y,Edit:fe},control:{type:"select"}},color:{description:"The color of the icon, using the theme color palette.",control:"select",options:["inherit","primary","secondary","error","info","success","warning","action","disabled"]},size:{description:"The size of the icon. Can be a predefined named size or a number in pixels.",control:"select",options:["2x-small","x-small","small","default","large","x-large","2x-large","inherit"]}},args:{icon:s,size:"default",color:"inherit"}},c={render:()=>e.jsx(v,{}),parameters:{controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},l={name:"Playground"},m={args:{icon:s}},p={render:i=>{const t=[{name:"2x-small",label:"2x-small (10px)"},{name:"x-small",label:"x-small (12px)"},{name:"small",label:"small (14px)"},{name:"default",label:"default (16px)"},{name:"large",label:"large (18px)"},{name:"x-large",label:"x-large (24px)"},{name:"2x-large",label:"2x-large (32px)"}];return e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-40px)",alignItems:"flex-end",flexWrap:"wrap",padding:"var(--global-spacing-sizing-20px)"},children:t.map(u=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(o,{...i,size:u.name}),e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",fontFamily:"var(--brand-font-secondary)",color:"var(--global-color-neutral-gray-500)",fontWeight:"var(--global-type-weight-medium)"},children:u.label})]},u.name))})}},d={name:"Status / Color Variants",render:i=>e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-20px)"},children:[e.jsx(o,{...i,color:"primary"}),e.jsx(o,{...i,color:"secondary"}),e.jsx(o,{...i,color:"error"}),e.jsx(o,{...i,color:"warning"}),e.jsx(o,{...i,color:"info"}),e.jsx(o,{...i,color:"success"})]})},g={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",marginTop:0},children:"Anatomy"}),e.jsxs("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-500)",marginBottom:"16px",marginTop:0},children:["The Icon component wraps a Material UI SvgIcon with design-system size tokens and colour tokens. Props: ",e.jsx("code",{children:"icon"}),", ",e.jsx("code",{children:"size"}),", ",e.jsx("code",{children:"color"}),"."]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(o,{icon:s,size:"default",color:"primary"}),e.jsx(o,{icon:s,size:"large",color:"secondary"}),e.jsx(o,{icon:s,size:"x-large",color:"error"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",marginTop:0},children:"Size token reference"}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-16px)"},children:["2x-small","x-small","small","default","large","x-large","2x-large"].map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:[e.jsx(o,{icon:s,size:i}),e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)"},children:i})]},i))})]})]}),parameters:{controls:{disable:!0}}},h={name:"All Interactive States",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)"},children:["inherit","primary","secondary","error","warning","info","success","action","disabled"].map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-secondary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"72px"},children:i}),e.jsx(o,{icon:s,size:"default",color:i}),e.jsx(o,{icon:I,size:"default",color:i}),e.jsx(o,{icon:z,size:"default",color:i}),e.jsx(o,{icon:j,size:"default",color:i})]},i))}),parameters:{controls:{disable:!0}}},x={name:"Full Design Matrix (50 icons × 7 sizes)",render:()=>{const i=[{name:"Home",component:s},{name:"Search",component:f},{name:"Settings",component:I},{name:"Favorite",component:be},{name:"Mail",component:he},{name:"Delete",component:xe},{name:"Add",component:ue},{name:"CheckCircle",component:z},{name:"Menu",component:Ie},{name:"Close",component:b},{name:"ArrowBack",component:Ye},{name:"ArrowForward",component:Re},{name:"Notifications",component:Je},{name:"Person",component:ye},{name:"Warning",component:j},{name:"Error",component:Ke},{name:"AccountCircle",component:Qe},{name:"ShoppingCart",component:Ze},{name:"Email",component:$e},{name:"Star",component:y},{name:"Share",component:eo},{name:"PlayArrow",component:oo},{name:"Pause",component:no},{name:"Stop",component:ao},{name:"SkipNext",component:io},{name:"SkipPrevious",component:so},{name:"Refresh",component:ro},{name:"Edit",component:fe},{name:"Visibility",component:to},{name:"VisibilityOff",component:co},{name:"Lock",component:lo},{name:"LockOpen",component:mo},{name:"Help",component:po},{name:"Info",component:ve},{name:"Check",component:_e},{name:"Cancel",component:Ge},{name:"Download",component:Xe},{name:"Upload",component:go},{name:"Cloud",component:ho},{name:"CameraAlt",component:xo},{name:"Image",component:uo},{name:"VideoCall",component:yo},{name:"Mic",component:fo},{name:"MicOff",component:bo},{name:"VolumeUp",component:Io},{name:"VolumeOff",component:vo},{name:"Bluetooth",component:zo},{name:"Wifi",component:jo},{name:"BatteryFull",component:So},{name:"BluetoothConnected",component:Co}];return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-20px)"},children:i.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"var(--global-spacing-sizing-16px)",border:"var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-8px)",backgroundColor:"var(--global-color-neutral-gray-50)"},children:[e.jsx(o,{icon:t.component,size:"large",color:"primary"}),e.jsx("span",{style:{marginTop:"var(--global-spacing-sizing-12px)",fontSize:"var(--global-type-size-primary-label-sm)",fontFamily:"var(--brand-font-secondary)",color:"var(--global-color-neutral-gray-600)",fontWeight:"var(--global-type-weight-medium)",textAlign:"center"},children:t.name})]},t.name))})}};var k,D,V,H,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(D=c.parameters)==null?void 0:D.docs)==null?void 0:V.source},description:{story:"Full branded documentation page for the Icon component.",...(F=(H=c.parameters)==null?void 0:H.docs)==null?void 0:F.description}}};var B,A,T,L,O;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source},description:{story:"Interactive playground — adjust props via controls panel.",...(O=(L=l.parameters)==null?void 0:L.docs)==null?void 0:O.description}}};var P,U,W,E,N;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    icon: HomeIcon
  }
}`,...(W=(U=m.parameters)==null?void 0:U.docs)==null?void 0:W.source},description:{story:"The default icon story demonstrating the selectable icon prop.",...(N=(E=m.parameters)==null?void 0:E.docs)==null?void 0:N.description}}};var q,R,_,G,X;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(_=(R=p.parameters)==null?void 0:R.docs)==null?void 0:_.source},description:{story:"Demonstrates the various predefined sizes available in the design system.",...(X=(G=p.parameters)==null?void 0:G.docs)==null?void 0:X.description}}};var Y,J,K,Q,Z;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Demonstrates the icons using Material UI theme colors.",...(Z=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};var $,ee,oe,ne,ae;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(oe=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:oe.source},description:{story:"Component breakdown — shows icon anatomy: icon + size + colour props.",...(ae=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};var ie,se,re,te,ce;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(se=h.parameters)==null?void 0:se.docs)==null?void 0:re.source},description:{story:"All interactive states — inherit, primary, secondary, error, disabled, action.",...(ce=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ce.description}}};var le,me,pe,de,ge;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:pe.source},description:{story:"A gallery of commonly used icons in our design system.",...(ge=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ge.description}}};const Jo=["Documentation","Playground","Default","Sizes","StatusColors","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{h as AllInteractiveStates,g as ComponentBreakdown,m as Default,c as Documentation,x as FullDesignMatrix,l as Playground,p as Sizes,d as StatusColors,Jo as __namedExportsOrder,Yo as default};
