import{j as e,R as fe}from"./vendor-react-DbhTI_a3.js";import{A as be}from"./Avatar-C3rNqXAP.js";import{D as t}from"./DocsTemplate-IhRQ5m1Q.js";import"../vite-inject-mocker-entry.js";import"./vendor-misc-BD0vWy5z.js";import"./vendor-mui-icons-B9T1ySRh.js";import"./vendor-mui-core-CjcFYzit.js";import"./vendor-emotion-DfrZ-FAO.js";import"./StatusIndicator-DO5R_pOg.js";const we="_root_hb8b4_7",Te="_avatar_hb8b4_21",ze="_textCol_hb8b4_26",Ae="_name_hb8b4_35",Se="_subtext_hb8b4_45",je="_email_hb8b4_55",l={root:we,avatar:Te,textCol:ze,name:Ae,subtext:Se,email:je,"size-large":"_size-large_hb8b4_68","size-default":"_size-default_hb8b4_73","size-small":"_size-small_hb8b4_78","size-x-small":"_size-x-small_hb8b4_83"},r=({variant:a="name-only",size:c="default",shape:W="circle",avatarType:_="profile-photo",statusIcon:O=!1,border:D=!1,name:d="Willow Quinn",subtext:m="Additional subtext (e.g role)",email:u="willowquin@email.com",initials:xe="WQ",src:he,alt:ve,className:ye=""})=>{const ge=[l.root,l[`size-${c}`],l[`variant-${a}`],ye].filter(Boolean).join(" ");return e.jsxs("div",{className:ge,children:[e.jsx(be,{type:_,size:c,shape:W,border:D,statusIcon:O,initials:xe,src:he,alt:ve??d,className:l.avatar}),e.jsxs("div",{className:l.textCol,children:[e.jsx("span",{className:l.name,children:d}),a==="w-subtext"&&m&&e.jsx("span",{className:l.subtext,children:m}),a==="default"&&u&&e.jsx("span",{className:l.email,children:u})]})]})};r.__docgenInfo={description:`AvatarWithText (horizontal) — combines an Avatar with a text column.

Three variants:
- \`w-subtext\`  → avatar + name + supporting subtext (e.g. role)
- \`name-only\`  → avatar + name only
- \`default\`    → avatar + name + email (rendered in brand-primary blue)

Four sizes mirror the Avatar sizes and scale all typography accordingly.

Location: Atoms/AvatarWithText`,methods:[],displayName:"AvatarWithText",props:{variant:{required:!1,tsType:{name:"union",raw:"'w-subtext' | 'name-only' | 'default'",elements:[{name:"literal",value:"'w-subtext'"},{name:"literal",value:"'name-only'"},{name:"literal",value:"'default'"}]},description:"Content variant:\n- `w-subtext` — name + subtext line (e.g. role)\n- `name-only` — name only\n- `default`   — name + email address",defaultValue:{value:"'name-only'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'x-small' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Controls Avatar size and scales all text proportionally",defaultValue:{value:"'default'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}]},description:"Avatar shape: square (rounded corners) or circle",defaultValue:{value:"'circle'",computed:!1}},avatarType:{required:!1,tsType:{name:"union",raw:"'empty-state' | 'profile-photo' | 'initial-light' | 'initial-dark'",elements:[{name:"literal",value:"'empty-state'"},{name:"literal",value:"'profile-photo'"},{name:"literal",value:"'initial-light'"},{name:"literal",value:"'initial-dark'"}]},description:"Avatar display type",defaultValue:{value:"'profile-photo'",computed:!1}},statusIcon:{required:!1,tsType:{name:"boolean"},description:"Show the status-indicator badge on the avatar",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"Show the white border + shadow treatment on the avatar",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Primary name label",defaultValue:{value:"'Willow Quinn'",computed:!1}},subtext:{required:!1,tsType:{name:"string"},description:'Supporting text — shown when variant="w-subtext"',defaultValue:{value:"'Additional subtext (e.g role)'",computed:!1}},email:{required:!1,tsType:{name:"string"},description:'Email — shown when variant="default"',defaultValue:{value:"'willowquin@email.com'",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:'Initials — used when avatarType="initial-light" or "initial-dark"',defaultValue:{value:"'WQ'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:'Image src — used when avatarType="profile-photo"'},alt:{required:!1,tsType:{name:"string"},description:"Alt text for the avatar photo"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}}}};const s="https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",o="https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",x=["large","default","small","x-small"],We={display:"flex",alignItems:"flex-start",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},I=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"AvatarWithText (Horizontal)",subtitle:"Combines an Avatar with a text column — showing a name with optional subtext or email."}),e.jsxs(t.BodyText,{children:[e.jsx("strong",{children:"AvatarWithText"})," is a horizontal compound component that pairs an Avatar with a label column. Three content variants cover the most common identity display patterns: name only, name + role/subtext, and name + email. All four avatar sizes are supported and scale the typography proportionally."]}),e.jsxs(t.Section,{title:"MUI Foundation",children:[e.jsxs(t.BodyText,{children:["Inherits its MUI base from the ",e.jsx("strong",{children:"Avatar"})," sub-component, which uses"," ","MUI's ",e.jsx("strong",{children:"MuiAvatar"})," (",e.jsx("code",{children:"@mui/material/Avatar"}),"). The outer horizontal layout container is a plain ",e.jsx("code",{children:"<div>"})," — no MUI layout component is used for the text column or the overall composition. MUI's"," ",e.jsx("strong",{children:"PersonIcon"})," (",e.jsx("code",{children:"@mui/icons-material/Person"}),") is used as the empty-state fallback inside the Avatar. All spacing, typography scale, and colour tokens for the text column are driven by the ",e.jsx("code",{children:"--avatar-with-text-*"})," token family."]}),e.jsx(t.CodeBlock,{children:`// MUI base import (inside Avatar sub-component)
import MuiAvatar from '@mui/material/Avatar';

// AvatarWithText renders as:
<div className={styles['avatar-with-text']}>
  <Avatar type={avatarType} size={size} ... /> {/* uses MuiAvatar internally */}
  <div className={styles['avatar-with-text__labels']}>
    <span className={styles['avatar-with-text__name']}>{name}</span>
    {subtext && <span className={styles['avatar-with-text__subtext']}>{subtext}</span>}
  </div>
</div>`})]}),e.jsx(t.Section,{title:"Component Anatomy",children:e.jsx(t.Anatomy,{preview:e.jsxs("div",{style:We,children:[e.jsx(r,{variant:"w-subtext",size:"large",shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:o}),e.jsx(r,{variant:"default",size:"large",shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",email:"willowquin@email.com",src:s})]}),parts:[{id:1,name:"Avatar",token:"--avatar-size-default (46px)",description:"The Avatar component positioned on the left. Inherits all Avatar props: type, shape, border, statusIcon."},{id:2,name:"Name",token:"--avatar-with-text-name-size-default (16px)",description:"Primary label — always visible. Font size scales with the size prop."},{id:3,name:"Subtext",token:"--avatar-with-text-subtext-size (13px)",description:'Supporting role / description line. Only rendered when variant="w-subtext". Uses footnote scale in gray-600.'},{id:4,name:"Email",token:"--avatar-with-text-email-color (--global-color-primary-blue)",description:'Email address rendered in brand primary blue. Only shown when variant="default".'}]})}),e.jsxs(t.Section,{title:"Variants",children:[e.jsx(t.BodyText,{children:"Three content variants cover the most common user-identity display patterns."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)"},children:[{variant:"name-only",label:"name-only",desc:"Name only — use in dense lists and dropdowns where extra context is not needed.",shape:"circle",src:s,name:"Willow Quinn"},{variant:"w-subtext",label:"w-subtext",desc:"Name + supporting text (role, team, location). Use where additional context helps identify the person.",shape:"square",src:o,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",statusIcon:!0},{variant:"default",label:"default",desc:"Name + email address in brand-primary blue. Use in contact cards, member lists, and settings panels.",shape:"circle",src:s,name:"Willow Quinn",email:"willowquin@email.com"}].map(({variant:a,label:c,desc:W,shape:_,src:O,name:D,subtext:d,email:m,statusIcon:u})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 120px 1fr",alignItems:"center",gap:"var(--global-spacing-sizing-24px)"},children:[e.jsx(r,{variant:a,size:"default",shape:_,avatarType:"profile-photo",statusIcon:u,name:D,subtext:d,email:m,src:O}),e.jsx("code",{style:{fontFamily:"monospace",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-700)"},children:c}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:W})]},a))})]}),e.jsxs(t.Section,{title:"Profile Photo States",children:[e.jsx(t.BodyText,{children:"The avatarType prop controls the visual representation. All three core photo states are shown below — empty (icon fallback), woman, and man."}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-32px)",flexWrap:"wrap"},children:[e.jsx(r,{variant:"name-only",size:"default",shape:"circle",avatarType:"empty-state",name:"No Photo"}),e.jsx(r,{variant:"name-only",size:"default",shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:s}),e.jsx(r,{variant:"name-only",size:"default",shape:"square",avatarType:"profile-photo",name:"Damon Underwood",src:o,statusIcon:!0})]})]}),e.jsxs(t.Section,{title:"Sizes",children:[e.jsx(t.BodyText,{children:"All four sizes. The avatar scales and the name typography scales proportionally."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",marginBottom:"var(--global-spacing-sizing-32px)"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-semibold)",color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"With Status + Subtext (square)"}),x.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("div",{style:{width:"60px",fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",flexShrink:0},children:a}),e.jsx(r,{variant:"w-subtext",size:a,shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:o})]},a))]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",marginBottom:"var(--global-spacing-sizing-32px)"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-semibold)",color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Name Only (circle)"}),x.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("div",{style:{width:"60px",fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",flexShrink:0},children:a}),e.jsx(r,{variant:"name-only",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:s})]},a))]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-semibold)",color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Name + Email (circle)"}),x.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("div",{style:{width:"60px",fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",flexShrink:0},children:a}),e.jsx(r,{variant:"default",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",email:"willowquin@email.com",src:s})]},a))]})]}),e.jsxs(t.Section,{title:"All Variants × All Sizes",children:[e.jsx(t.BodyText,{children:"Complete matrix showing all three variants at all four sizes. Left: with-subtext (square + status). Centre: name-only (circle). Right: name + email (circle)."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, auto)",gap:"var(--global-spacing-sizing-32px) var(--global-spacing-sizing-48px)",alignItems:"start",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:x.map(a=>e.jsxs(fe.Fragment,{children:[e.jsx(r,{variant:"w-subtext",size:a,shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:o}),e.jsx(r,{variant:"name-only",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:s}),e.jsx(r,{variant:"default",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",email:"willowquin@email.com",src:s})]},a))})]}),e.jsx(t.TokenTable,{title:"Design Tokens — Layout",description:"Spacing tokens controlling the horizontal gap and the internal text column gap:",tokens:[{name:"--avatar-with-text-gap",description:"Gap between avatar and text column — --global-spacing-sizing-8px (8px)"},{name:"--avatar-with-text-text-gap",description:"Gap between name and secondary line — --global-spacing-sizing-2px (2px)"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Name Typography",description:"Font family, weight, and per-size dimensions for the primary name label:",tokens:[{name:"--avatar-with-text-name-font",description:"Font family — --brand-font-primary (F37 Ginger Pro)"},{name:"--avatar-with-text-name-color",description:"Text colour — --global-color-base-black (#1C1C1C)"},{name:"--avatar-with-text-name-weight",description:"Font weight — --global-type-weight-default (400)"},{name:"--avatar-with-text-name-size-lg",description:"Name size at large avatar — 18px"},{name:"--avatar-with-text-name-size-default",description:"Name size at default avatar — 16px"},{name:"--avatar-with-text-name-size-sm",description:"Name size at small avatar — 14px"},{name:"--avatar-with-text-name-size-xs",description:"Name size at x-small avatar — 12px"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Subtext & Email",description:"Footnote-scale tokens for the secondary text lines:",tokens:[{name:"--avatar-with-text-subtext-color",description:"Subtext colour — --global-color-neutral-gray-600 (#4B5563)"},{name:"--avatar-with-text-subtext-size",description:"Subtext font size — --global-type-size-primary-footnote (13px)"},{name:"--avatar-with-text-subtext-weight",description:"Subtext weight — --global-type-weight-light (300)"},{name:"--avatar-with-text-email-color",description:"Email colour — --global-color-primary-blue (#2F42BD)"},{name:"--avatar-with-text-email-size",description:"Email font size — --global-type-size-primary-footnote (13px)"},{name:"--avatar-with-text-email-weight",description:"Email weight — --global-type-weight-light (300)"}]}),e.jsx(t.CodeBlock,{children:`import { AvatarWithText } from '@/components/Avatar';

// Name only (circle avatar)
<AvatarWithText
  variant="name-only"
  size="default"
  shape="circle"
  avatarType="profile-photo"
  name="Willow Quinn"
  src="/photos/willow.jpg"
/>

// Name + role/subtext (square avatar with status indicator)
<AvatarWithText
  variant="w-subtext"
  size="default"
  shape="square"
  avatarType="profile-photo"
  statusIcon
  name="Damon Underwood"
  subtext="Product Designer"
  src="/photos/damon.jpg"
/>

// Name + email
<AvatarWithText
  variant="default"
  size="default"
  shape="circle"
  avatarType="profile-photo"
  name="Willow Quinn"
  email="willow@example.com"
  src="/photos/willow.jpg"
/>`}),e.jsxs(t.Principles,{children:[e.jsxs(t.PrincipleCard,{number:1,title:"Choose the variant that matches your information density",children:["Use ",e.jsx("code",{children:"name-only"})," for compact lists and dropdowns. Use ",e.jsx("code",{children:"w-subtext"})," ","when a supporting role or team name adds meaningful context. Reserve"," ",e.jsx("code",{children:"default"})," (name + email) for settings pages, contact cards, and member lists where the email address is actionable or verifiable."]}),e.jsxs(t.PrincipleCard,{number:2,title:"Match avatar size to layout density",children:["Use ",e.jsx("code",{children:"x-small"})," and ",e.jsx("code",{children:"small"})," in high-density tables and sidebars. Use ",e.jsx("code",{children:"default"})," for standard cards. Reserve ",e.jsx("code",{children:"large"})," ","for primary user tiles, profile headers, and modal contexts."]}),e.jsxs(t.PrincipleCard,{number:3,title:"Reserve statusIcon for presence-aware contexts",children:["The status indicator communicates real-time availability. Only attach"," ",e.jsx("code",{children:"statusIcon=true"})," where presence is actively managed and kept up-to-date — chat, video, or collaboration surfaces. Avoid it in static lists where the status cannot change."]}),e.jsx(t.PrincipleCard,{number:4,title:"Prefer circle for photos, square for initials or branded icons",children:"Circle avatars are the convention for profile photos across most contexts. Square (rounded-corner) avatars read well for initials or when the avatar sits in a structured grid or card layout."})]}),e.jsx(t.Footer,{})]});I.__docgenInfo={description:"",methods:[],displayName:"AvatarWithTextDocs"};const i="https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",n="https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",p=["large","default","small","x-small"],_e=["name-only","w-subtext","default"],Oe=["circle","square"],De=["empty-state","profile-photo","initial-light","initial-dark"],Qe={title:"Atoms/AvatarWithText",component:r,parameters:{docs:{page:()=>e.jsx(I,{})}},argTypes:{variant:{control:"select",options:_e},size:{control:"select",options:p},shape:{control:"select",options:Oe},avatarType:{control:"select",options:De},statusIcon:{control:"boolean"},border:{control:"boolean"},name:{control:"text"},subtext:{control:"text"},email:{control:"text"},initials:{control:"text"},src:{control:"text"}},args:{variant:"name-only",size:"default",shape:"circle",avatarType:"profile-photo",statusIcon:!1,border:!1,name:"Willow Quinn",subtext:"Additional subtext (e.g role)",email:"willowquin@email.com",initials:"WQ",src:i}},h={name:"Documentation",render:()=>e.jsx(I,{}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},v={name:"Playground",args:{variant:"w-subtext",size:"default",shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:n}},y={name:"Default",args:{variant:"w-subtext",size:"default",shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Role / Title",src:n}},g={name:"Status / Name Only",args:{variant:"name-only",size:"default",shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:i}},f={name:"Status / With Subtext",args:{variant:"w-subtext",size:"default",shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:n}},b={name:"Status / With Email",args:{variant:"default",size:"default",shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",email:"willowquin@email.com",src:i}},w={name:"Component Breakdown",render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",padding:"24px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,fontFamily:"var(--brand-font-primary)"},children:"Name only"}),e.jsx(r,{variant:"name-only",size:"default",shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:i}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px"},children:"--avatar-with-text-name-size-default"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"11px",fontWeight:600,fontFamily:"var(--brand-font-primary)"},children:"With subtext"}),e.jsx(r,{variant:"w-subtext",size:"default",shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Role",src:n}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px"},children:"--avatar-with-text-subtext-size-default"})]})]}),parameters:{controls:{disable:!0}}},T={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"24px"},children:[e.jsx(r,{variant:"name-only",size:"default",shape:"circle",avatarType:"profile-photo",name:"Name Only",src:i}),e.jsx(r,{variant:"w-subtext",size:"default",shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"With Subtext",subtext:"Role",src:n}),e.jsx(r,{variant:"default",size:"default",shape:"circle",avatarType:"profile-photo",name:"With Email",email:"user@email.com",src:i})]}),parameters:{controls:{disable:!0}}},z={name:"All Sizes — With Subtext",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"16px"},children:p.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"60px",flexShrink:0},children:a}),e.jsx(r,{variant:"w-subtext",size:a,shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:n})]},a))})},A={name:"All Sizes — Name Only",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"16px"},children:p.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"60px",flexShrink:0},children:a}),e.jsx(r,{variant:"name-only",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:i})]},a))})},S={name:"All Sizes — With Email",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"16px"},children:p.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"60px",flexShrink:0},children:a}),e.jsx(r,{variant:"default",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",email:"willowquin@email.com",src:i})]},a))})},j={name:"Full Design Matrix (48 variants)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"16px"},children:p.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"48px",flexWrap:"wrap"},children:[e.jsx(r,{variant:"w-subtext",size:a,shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:n}),e.jsx(r,{variant:"name-only",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:i}),e.jsx(r,{variant:"default",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",email:"willowquin@email.com",src:i})]},a))})};var N,q,M;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <AvatarWithTextDocs />,
  parameters: {
    controls: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(M=(q=h.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var k,E,P;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    variant: 'w-subtext',
    size: 'default',
    shape: 'square',
    avatarType: 'profile-photo',
    statusIcon: true,
    name: 'Damon Underwood',
    subtext: 'Additional subtext (e.g role)',
    src: DEMO_PHOTO_MAN
  }
}`,...(P=(E=v.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var F,U,Q;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    variant: 'w-subtext',
    size: 'default',
    shape: 'square',
    avatarType: 'profile-photo',
    statusIcon: true,
    name: 'Damon Underwood',
    subtext: 'Role / Title',
    src: DEMO_PHOTO_MAN
  }
}`,...(Q=(U=y.parameters)==null?void 0:U.docs)==null?void 0:Q.source}}};var C,H,L;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Status / Name Only',
  args: {
    variant: 'name-only',
    size: 'default',
    shape: 'circle',
    avatarType: 'profile-photo',
    name: 'Willow Quinn',
    src: DEMO_PHOTO_WOMAN
  }
}`,...(L=(H=g.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var R,B,V;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Status / With Subtext',
  args: {
    variant: 'w-subtext',
    size: 'default',
    shape: 'square',
    avatarType: 'profile-photo',
    statusIcon: true,
    name: 'Damon Underwood',
    subtext: 'Additional subtext (e.g role)',
    src: DEMO_PHOTO_MAN
  }
}`,...(V=(B=f.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var Z,$,G;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Status / With Email',
  args: {
    variant: 'default',
    size: 'default',
    shape: 'circle',
    avatarType: 'profile-photo',
    name: 'Willow Quinn',
    email: 'willowquin@email.com',
    src: DEMO_PHOTO_WOMAN
  }
}`,...(G=($=b.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var Y,J,K;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }}>
        <span style={{
        fontSize: '11px',
        fontWeight: 600,
        fontFamily: 'var(--brand-font-primary)'
      }}>Name only</span>
        <AvatarWithText variant="name-only" size="default" shape="circle" avatarType="profile-photo" name="Willow Quinn" src={DEMO_PHOTO_WOMAN} />
        <code style={{
        fontSize: '10px',
        background: 'var(--global-color-neutral-gray-100)',
        padding: '2px 6px',
        borderRadius: '4px'
      }}>--avatar-with-text-name-size-default</code>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }}>
        <span style={{
        fontSize: '11px',
        fontWeight: 600,
        fontFamily: 'var(--brand-font-primary)'
      }}>With subtext</span>
        <AvatarWithText variant="w-subtext" size="default" shape="square" avatarType="profile-photo" statusIcon name="Damon Underwood" subtext="Role" src={DEMO_PHOTO_MAN} />
        <code style={{
        fontSize: '10px',
        background: 'var(--global-color-neutral-gray-100)',
        padding: '2px 6px',
        borderRadius: '4px'
      }}>--avatar-with-text-subtext-size-default</code>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,ee,ae;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '24px'
  }}>
      <AvatarWithText variant="name-only" size="default" shape="circle" avatarType="profile-photo" name="Name Only" src={DEMO_PHOTO_WOMAN} />
      <AvatarWithText variant="w-subtext" size="default" shape="square" avatarType="profile-photo" statusIcon name="With Subtext" subtext="Role" src={DEMO_PHOTO_MAN} />
      <AvatarWithText variant="default" size="default" shape="circle" avatarType="profile-photo" name="With Email" email="user@email.com" src={DEMO_PHOTO_WOMAN} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,ie;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'All Sizes — With Subtext',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '16px'
  }}>
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-500)',
        width: '60px',
        flexShrink: 0
      }}>
            {size}
          </span>
          <AvatarWithText variant="w-subtext" size={size} shape="square" avatarType="profile-photo" statusIcon name="Damon Underwood" subtext="Additional subtext (e.g role)" src={DEMO_PHOTO_MAN} />
        </div>)}
    </div>
}`,...(ie=(re=z.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var le,se,ne;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'All Sizes — Name Only',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '16px'
  }}>
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-500)',
        width: '60px',
        flexShrink: 0
      }}>
            {size}
          </span>
          <AvatarWithText variant="name-only" size={size} shape="circle" avatarType="profile-photo" name="Willow Quinn" src={DEMO_PHOTO_WOMAN} />
        </div>)}
    </div>
}`,...(ne=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,pe,ce;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'All Sizes — With Email',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '16px'
  }}>
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-500)',
        width: '60px',
        flexShrink: 0
      }}>
            {size}
          </span>
          <AvatarWithText variant="default" size={size} shape="circle" avatarType="profile-photo" name="Willow Quinn" email="willowquin@email.com" src={DEMO_PHOTO_WOMAN} />
        </div>)}
    </div>
}`,...(ce=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var de,me,ue;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Full Design Matrix (48 variants)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '16px'
  }}>
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '48px',
      flexWrap: 'wrap'
    }}>
          <AvatarWithText variant="w-subtext" size={size} shape="square" avatarType="profile-photo" statusIcon name="Damon Underwood" subtext="Additional subtext (e.g role)" src={DEMO_PHOTO_MAN} />
          <AvatarWithText variant="name-only" size={size} shape="circle" avatarType="profile-photo" name="Willow Quinn" src={DEMO_PHOTO_WOMAN} />
          <AvatarWithText variant="default" size={size} shape="circle" avatarType="profile-photo" name="Willow Quinn" email="willowquin@email.com" src={DEMO_PHOTO_WOMAN} />
        </div>)}
    </div>
}`,...(ue=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};const Ce=["Documentation","Playground","Default","StatusNameOnly","StatusWithSubtext","StatusWithEmail","ComponentBreakdown","AllInteractiveStates","AllSizesWithSubtext","AllSizesNameOnly","AllSizesWithEmail","FullDesignMatrix"];export{T as AllInteractiveStates,A as AllSizesNameOnly,S as AllSizesWithEmail,z as AllSizesWithSubtext,w as ComponentBreakdown,y as Default,h as Documentation,j as FullDesignMatrix,v as Playground,g as StatusNameOnly,b as StatusWithEmail,f as StatusWithSubtext,Ce as __namedExportsOrder,Qe as default};
