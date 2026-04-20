import{j as e}from"./iframe-DztH3mup.js";import{A as r}from"./Avatar-DmjWuCpb.js";import{D as t}from"./DocsTemplate-BKaC0xT7.js";import"./preload-helper-Dp1pzeXC.js";import"./Person-Dj8XY6V-.js";import"./createSvgIcon-CWrZ42_U.js";import"./DefaultPropsProvider-B2JkjKzk.js";import"./memoTheme-DBSs9WqJ.js";import"./StatusIndicator-ClYA9YIv.js";import"./useSlot-Drh94fen.js";import"./mergeSlotProps-B9elgaVC.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-CVc7T3il.js";const l="https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",ye="https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",n=["x-small","small","default","large"],k=[{type:"empty-state",label:"Empty State",description:"Shows a generic person icon when no photo or initials are available. Gray-200 background with a gray-400 person icon."},{type:"profile-photo",label:"Profile Photo",description:"Displays the user's photo, cropped to fill the container with object-fit: cover."},{type:"initial-light",label:"Initial — Light",description:"Shows initials on a light gray-200 background with black text. Use when a photo is unavailable but initials are known."},{type:"initial-dark",label:"Initial — Dark",description:"Shows initials on a black background with white text. Higher visual weight — use for primary / current user."}],fe=[{size:"x-small",label:"X-Small",px:"26 × 26 px",usage:"Dense lists, comment threads, micro-layouts"},{size:"small",label:"Small",px:"38 × 38 px",usage:"Sidebar items, compact tables, dropdowns"},{size:"default",label:"Default",px:"46 × 46 px",usage:"Standard profile tiles, cards, nav headers"},{size:"large",label:"Large",px:"62 × 62 px",usage:"Profile pages, modals, prominent user displays"}],ve={display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},T=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Avatar",subtitle:"User identity badge with four display types, four sizes, two shapes, optional border, and a status indicator"}),e.jsxs(t.BodyText,{children:["The ",e.jsx("strong",{children:"Avatar"})," identifies a user or entity at a glance. It supports an empty-state person icon, a profile photo, or monogram initials in light and dark variants. A white border + shadow treatment elevates it on coloured or complex backgrounds, and an optional status indicator communicates presence."]}),e.jsxs(t.Section,{title:"MUI Foundation",children:[e.jsxs(t.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"Avatar"})," component (",e.jsx("code",{children:"@mui/material/Avatar"}),").",e.jsx("code",{children:"MuiAvatar"})," provides accessible image-with-fallback semantics, including automatic ",e.jsx("code",{children:"alt"})," text propagation and graceful degradation when an image fails to load. MUI's ",e.jsx("strong",{children:"PersonIcon"})," from"," ",e.jsx("code",{children:"@mui/icons-material/Person"})," is used as the fallback person icon in the"," ",e.jsx("em",{children:"empty-state"})," display type. All visual aspects — size, shape, border, background colour, and status badge position — are applied via CSS Modules and the"," ",e.jsx("code",{children:"--avatar-*"})," token family."]}),e.jsx(t.CodeBlock,{children:`// MUI base imports
import MuiAvatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person'; // empty-state fallback

// Profile photo:
<MuiAvatar className={styles.imageWrap} src={src} alt={alt} />

// Initials:
<MuiAvatar className={styles.imageWrap}><span>{initials}</span></MuiAvatar>

// Empty state (person icon fallback):
<MuiAvatar className={styles.imageWrap}><PersonIcon /></MuiAvatar>`})]}),e.jsx(t.Section,{title:"Component Anatomy",children:e.jsx(t.Anatomy,{preview:e.jsxs("div",{style:ve,children:[e.jsx(r,{type:"profile-photo",size:"large",shape:"square",src:l,statusIcon:!0}),e.jsx(r,{type:"profile-photo",size:"large",shape:"circle",src:l,statusIcon:!0})]}),parts:[{id:1,name:"Container",token:`--avatar-size-default (46px)
--avatar-radius-sq-default (8px)`,description:"Fixed square container. Size and border-radius are controlled by size + shape tokens. Overflow is hidden to clip the photo."},{id:2,name:"Photo / Icon / Initials",token:`--avatar-icon-size-default (24px)
--avatar-initial-size-default (heading-5)`,description:"The visual content of the avatar — a person icon SVG (empty-state), a cropped image (profile-photo), or a typographic initial (initial-light / initial-dark)."},{id:3,name:"Border",token:`--avatar-border-width (1px)
--avatar-border-color (gray-200)`,description:"A 1 px border is visible in the default state. When border=true, a 4 px white ring with a gray drop-shadow is applied for use on coloured surfaces."},{id:4,name:"Status badge",token:"--avatar-badge-size-default (14px)",description:"A StatusIndicator dot positioned at the top-right corner. Scales with the avatar size. Only rendered when statusIcon=true."}]})}),e.jsxs(t.Section,{title:"Profile Photo States",children:[e.jsx(t.BodyText,{children:"The profile-photo type covers three scenarios: an empty state when no image has been uploaded (falls back to a person icon), and uploaded portrait photos."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-32px)"},children:[{src:void 0,label:"No photo uploaded (icon)",type:"empty-state"},{src:l,label:"Woman profile photo",type:"profile-photo"},{src:ye,label:"Man profile photo",type:"profile-photo"}].map(({src:a,label:i,type:s})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(r,{type:s,size:"large",shape:"square",src:a}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",textAlign:"center",maxWidth:"80px"},children:i})]},i))})]}),e.jsxs(t.Section,{title:"Types",children:[e.jsx(t.BodyText,{children:"Four content types cover the common user-identity scenarios in order of information fidelity."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",maxWidth:"600px"},children:k.map(({type:a,label:i,description:s})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"56px 120px 1fr",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(r,{type:a,size:"default",shape:"square",src:l,initials:"A"}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-base-black)"},children:i}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-light)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:s})]},a))})]}),e.jsxs(t.Section,{title:"Shapes",children:[e.jsx(t.BodyText,{children:"Square uses a rounded-corner rectangle (radius scales with size). Circle uses a full pill radius to produce a perfect circle."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-32px)"},children:["square","circle"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(r,{type:"profile-photo",size:"large",shape:a,src:l}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",textTransform:"capitalize"},children:a})]},a))})]}),e.jsxs(t.Section,{title:"Sizes",children:[e.jsx(t.BodyText,{children:"Four sizes scale the container, photo, icon, and initials proportionally. Choose based on the density of the surrounding layout."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"70px 80px 110px 1fr",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:["","Size","Dimensions","Typical usage"].map(a=>e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.05em"},children:a},a))}),fe.map(({size:a,label:i,px:s,usage:xe})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"70px 80px 110px 1fr",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center"},children:e.jsx(r,{type:"profile-photo",size:a,shape:"square",src:l})}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-base-black)"},children:i}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:s}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:xe})]},a))]})]}),e.jsxs(t.Section,{title:"Border Variants",children:[e.jsx(t.BodyText,{children:"The default 1 px gray-200 border provides subtle separation. The active border (border=true) applies a 4 px white ring and a gray drop-shadow — use when avatars overlap or appear on coloured/image backgrounds."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-8px)"},children:["square","circle"].map(a=>[!1,!0].map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(r,{type:"profile-photo",size:"default",shape:a,border:i,src:l}),e.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:[a," / border=",i?"true":"false"]})]},`${a}-${i}`)))})]}),e.jsxs(t.Section,{title:"With Status Indicator",children:[e.jsx(t.BodyText,{children:"When statusIcon=true, a do-not-disturb badge (red dot) is positioned at the top-right corner. The dot size scales automatically with the avatar size using the StatusIndicator component tokens."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:n.map(a=>e.jsx(r,{type:"profile-photo",size:a,shape:"square",statusIcon:!0,src:l},a))}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:n.map(a=>e.jsx(r,{type:"profile-photo",size:a,shape:"circle",statusIcon:!0,src:l},a))})]}),e.jsxs(t.Section,{title:"Without Status Indicator",children:[e.jsx(t.BodyText,{children:"When statusIcon=false (the default), no presence badge is shown. The avatar renders cleanly without any overlay — use this when presence status is not relevant."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:n.map(a=>e.jsx(r,{type:"profile-photo",size:a,shape:"square",src:l},a))}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:n.map(a=>e.jsx(r,{type:"profile-photo",size:a,shape:"circle",src:l},a))})]}),e.jsx(t.Section,{title:"All Types × Sizes (Square)",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:k.map(({type:a,label:i})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px repeat(4, auto)",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:1.4},children:i}),n.map(s=>e.jsx(r,{type:a,size:s,shape:"square",statusIcon:!0,src:l,initials:"A"},s))]},a))})}),e.jsx(t.Section,{title:"All Types × Sizes (Circle)",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:k.map(({type:a,label:i})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px repeat(4, auto)",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:1.4},children:i}),n.map(s=>e.jsx(r,{type:a,size:s,shape:"circle",statusIcon:!0,src:l,initials:"A"},s))]},a))})}),e.jsx(t.TokenTable,{title:"Design Tokens — Sizes",description:"Container dimensions per size:",tokens:[{name:"--avatar-size-xs",description:"X-small container — 26px"},{name:"--avatar-size-sm",description:"Small container — 38px"},{name:"--avatar-size-default",description:"Default container — 46px"},{name:"--avatar-size-lg",description:"Large container — 62px"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Shape & Border Radius",description:"Border radius tokens per size and shape:",tokens:[{name:"--avatar-radius-circle",description:"Circle shape — --global-spacing-radius-full (99999px)"},{name:"--avatar-radius-sq-xs",description:"Square x-small radius — --global-spacing-radius-4px (4px)"},{name:"--avatar-radius-sq-sm",description:"Square small radius — 6px"},{name:"--avatar-radius-sq-default",description:"Square default radius — --global-spacing-radius-8px (8px)"},{name:"--avatar-radius-sq-lg",description:"Square large radius — --global-spacing-radius-12px (12px)"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Colours",description:"Background and text colour tokens:",tokens:[{name:"--avatar-bg-empty-state",description:"Empty-state & photo bg — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--avatar-bg-initial-light",description:"Initial-light bg — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--avatar-bg-initial-dark",description:"Initial-dark bg — --global-color-base-black (#1C1C1C)"},{name:"--avatar-color-initial-light",description:"Initial-light text — --global-color-base-black"},{name:"--avatar-color-initial-dark",description:"Initial-dark text — --global-color-base-white"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Border",description:"Border tokens for default and active (border=true) states:",tokens:[{name:"--avatar-border-width",description:"Default border — --global-spacing-stroke-1px (1px)"},{name:"--avatar-border-color",description:"Default border colour — --global-color-neutral-gray-200"},{name:"--avatar-border-width-active",description:"Active border width — 4px"},{name:"--avatar-border-color-active",description:"Active border colour — --global-color-base-white"},{name:"--avatar-border-shadow-active",description:"Active box-shadow — 2px 2px 0px 0px gray-200"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Status Badge Positioning",description:"Negative offset tokens used to position the status indicator badge at the top-right corner of the avatar. These reference the global negative spacing scale — no hardcoded values are used.",tokens:[{name:"--global-spacing-sizing-neg-2px",description:"Badge top/right offset for x-small avatars (−2px) — pixel-precise inset from the avatar edge."},{name:"--global-spacing-sizing-neg-6px",description:"Badge top/right offset for small, default, and large avatars (−6px) — slightly larger overlap that keeps the badge optically centred on the avatar corner."}]}),e.jsx(t.CodeBlock,{children:`import { Avatar } from '@/components/Avatar';

// Empty state (no photo)
<Avatar type="empty-state" size="default" shape="square" />

// Profile photo
<Avatar type="profile-photo" size="default" shape="square" src="/path/to/photo.jpg" alt="Ailsa Blair" />

// Initials — light
<Avatar type="initial-light" size="default" shape="square" initials="AB" />

// Initials — dark (primary/current user)
<Avatar type="initial-dark" size="default" shape="square" initials="AB" />

// With white border (on coloured background)
<Avatar type="profile-photo" size="default" shape="circle" border src="/photo.jpg" />

// With status badge
<Avatar type="profile-photo" size="default" statusIcon src="/photo.jpg" />`}),e.jsxs(t.Principles,{children:[e.jsx(t.PrincipleCard,{number:1,title:"Prefer photo → initials → empty state",children:"Always use the highest-fidelity representation available. Show a profile photo when you have one, fall back to initials when the name is known, and use the empty-state only as a last resort."}),e.jsxs(t.PrincipleCard,{number:2,title:"Use dark initials for the current user",children:["Reserve ",e.jsx("code",{children:"initial-dark"})," for the authenticated / primary user in contexts where distinguishing them from other participants matters (e.g. chat, comments, meeting participants). All other users use ",e.jsx("code",{children:"initial-light"}),"."]}),e.jsxs(t.PrincipleCard,{number:3,title:"Match size to information density",children:["Use ",e.jsx("code",{children:"x-small"})," and ",e.jsx("code",{children:"small"})," in high-density lists where avatars are supportive context. Use ",e.jsx("code",{children:"default"})," for standard cards and navigation. Reserve ",e.jsx("code",{children:"large"})," for profile pages and prominent user displays where the identity is the primary focus."]}),e.jsx(t.PrincipleCard,{number:4,title:"Apply border=true on complex backgrounds",children:"The white ring + shadow is designed for use on coloured, gradient, or image backgrounds where the avatar edge would otherwise be lost. Do not apply it on plain white or light-gray surfaces — the default 1 px border provides sufficient separation."})]}),e.jsx(t.Footer,{})]});T.__docgenInfo={description:"",methods:[],displayName:"AvatarDocs"};const o="https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",p=["x-small","small","default","large"],A=["empty-state","profile-photo","initial-light","initial-dark"],I=["square","circle"],Pe={title:"Atoms/Avatar",component:r,parameters:{docs:{page:()=>e.jsx(T,{})}},argTypes:{type:{control:"select",options:A},size:{control:"select",options:p},shape:{control:"select",options:I},border:{control:"boolean"},statusIcon:{control:"boolean"},initials:{control:"text"},src:{control:"text"}},args:{type:"empty-state",size:"default",shape:"square",border:!1,statusIcon:!1,initials:"A",src:o}},d={name:"Documentation",render:()=>e.jsx(T,{}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},c={name:"Playground",args:{type:"profile-photo",size:"default",shape:"square",border:!1,statusIcon:!0,src:o}},g={name:"Default",args:{type:"profile-photo",size:"default",shape:"square",src:o}},u={name:"Status / Empty State",args:{type:"empty-state",size:"default",shape:"square"}},m={name:"Status / Profile Photo",args:{type:"profile-photo",size:"default",shape:"square",src:o}},h={name:"Status / Initial",render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(r,{type:"initial-light",size:"default",shape:"square",initials:"A"}),e.jsx(r,{type:"initial-dark",size:"default",shape:"square",initials:"A"})]}),parameters:{controls:{disable:!0}}},x={name:"Status / With Border",args:{type:"profile-photo",size:"default",shape:"square",border:!0,src:o}},y={name:"Status / With Status Badge",args:{type:"profile-photo",size:"default",shape:"square",statusIcon:!0,src:o}},f={name:"Component Breakdown",render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",padding:"24px",flexWrap:"wrap"},children:[["Empty state",e.jsx(r,{type:"empty-state",size:"default",shape:"square"}),"--avatar-size-default / --avatar-bg-empty"],["Profile photo",e.jsx(r,{type:"profile-photo",size:"default",shape:"square",src:o}),"--avatar-size-default"],["Initial light",e.jsx(r,{type:"initial-light",size:"default",shape:"square",initials:"JD"}),"--avatar-initial-size-default"],["With border",e.jsx(r,{type:"profile-photo",size:"default",shape:"square",border:!0,src:o}),"--avatar-border"],["With badge",e.jsx(r,{type:"profile-photo",size:"default",shape:"square",statusIcon:!0,src:o}),"--avatar-badge-size"]].map(([a,i,s])=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",alignItems:"center"},children:[i,e.jsx("span",{style:{fontSize:"11px",fontWeight:600,fontFamily:"var(--brand-font-primary)",color:"var(--global-color-neutral-gray-600)"},children:a}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px",textAlign:"center"},children:s})]},a))}),parameters:{controls:{disable:!0}}},v={name:"All Interactive States",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",padding:"24px",flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsx(r,{type:"empty-state",size:"default",shape:"square"}),e.jsx(r,{type:"profile-photo",size:"default",shape:"square",src:o}),e.jsx(r,{type:"profile-photo",size:"default",shape:"circle",src:o}),e.jsx(r,{type:"initial-light",size:"default",shape:"square",initials:"JD"}),e.jsx(r,{type:"profile-photo",size:"default",shape:"square",border:!0,statusIcon:!0,src:o})]}),parameters:{controls:{disable:!0}}},b={name:"All Sizes (legacy)",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"24px",padding:"12px"},children:p.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{type:"profile-photo",size:a,shape:"square",src:o,statusIcon:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-600)"},children:a})]},a))})},S={name:"With Status Icon — All Types",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:I.map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Shape: ",a]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:A.map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"100px",flexShrink:0},children:i}),p.map(s=>e.jsx(r,{type:i,size:s,shape:a,statusIcon:!0,src:o,initials:"A"},s))]},i))})]},a))})},z={name:"Without Status Indicator — All Types",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:I.map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Shape: ",a]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:A.map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"100px",flexShrink:0},children:i}),p.map(s=>e.jsx(r,{type:i,size:s,shape:a,statusIcon:!1,src:o,initials:"A"},s))]},i))})]},a))})},j={name:"Full Design Matrix (64 variants)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:I.map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Shape: ",a]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:A.map(i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"100px",flexShrink:0},children:i}),p.map(s=>e.jsx(r,{type:i,size:s,shape:a,border:!1,statusIcon:!0,src:o,initials:"A"},s)),e.jsx("div",{style:{width:"16px"}}),p.map(s=>e.jsx(r,{type:i,size:s,shape:a,border:!0,statusIcon:!0,src:o,initials:"A"},`${s}-border`))]},i))})]},a))})};var w,D,O;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <AvatarDocs />,
  parameters: {
    controls: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var W,q,P;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    border: false,
    statusIcon: true,
    src: DEMO_PHOTO_WOMAN
  }
}`,...(P=(q=c.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var _,M,E;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    src: DEMO_PHOTO_WOMAN
  }
}`,...(E=(M=g.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var B,L,F;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Status / Empty State',
  args: {
    type: 'empty-state',
    size: 'default',
    shape: 'square'
  }
}`,...(F=(L=u.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var H,C,N;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Status / Profile Photo',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    src: DEMO_PHOTO_WOMAN
  }
}`,...(N=(C=m.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var R,U,Z;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Status / Initial',
  render: () => <div style={{
    display: 'flex',
    gap: '12px'
  }}>
      <Avatar type="initial-light" size="default" shape="square" initials="A" />
      <Avatar type="initial-dark" size="default" shape="square" initials="A" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var $,Y,J;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Status / With Border',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    border: true,
    src: DEMO_PHOTO_WOMAN
  }
}`,...(J=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var G,V,X;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Status / With Status Badge',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    statusIcon: true,
    src: DEMO_PHOTO_WOMAN
  }
}`,...(X=(V=y.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var K,Q,ee;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    padding: '24px',
    flexWrap: 'wrap'
  }}>
      {[['Empty state', <Avatar type="empty-state" size="default" shape="square" />, '--avatar-size-default / --avatar-bg-empty'], ['Profile photo', <Avatar type="profile-photo" size="default" shape="square" src={DEMO_PHOTO_WOMAN} />, '--avatar-size-default'], ['Initial light', <Avatar type="initial-light" size="default" shape="square" initials="JD" />, '--avatar-initial-size-default'], ['With border', <Avatar type="profile-photo" size="default" shape="square" border src={DEMO_PHOTO_WOMAN} />, '--avatar-border'], ['With badge', <Avatar type="profile-photo" size="default" shape="square" statusIcon src={DEMO_PHOTO_WOMAN} />, '--avatar-badge-size']].map(([lbl, el, tok]) => <div key={lbl as string} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      alignItems: 'center'
    }}>
          {el as React.ReactElement}
          <span style={{
        fontSize: '11px',
        fontWeight: 600,
        fontFamily: 'var(--brand-font-primary)',
        color: 'var(--global-color-neutral-gray-600)'
      }}>{lbl as string}</span>
          <code style={{
        fontSize: '10px',
        background: 'var(--global-color-neutral-gray-100)',
        padding: '2px 6px',
        borderRadius: '4px',
        textAlign: 'center'
      }}>{tok as string}</code>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ee=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ae,te,re;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '24px',
    flexWrap: 'wrap',
    alignItems: 'flex-end'
  }}>
      <Avatar type="empty-state" size="default" shape="square" />
      <Avatar type="profile-photo" size="default" shape="square" src={DEMO_PHOTO_WOMAN} />
      <Avatar type="profile-photo" size="default" shape="circle" src={DEMO_PHOTO_WOMAN} />
      <Avatar type="initial-light" size="default" shape="square" initials="JD" />
      <Avatar type="profile-photo" size="default" shape="square" border statusIcon src={DEMO_PHOTO_WOMAN} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(re=(te=v.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,se,oe;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'All Sizes (legacy)',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    gap: '24px',
    padding: '12px'
  }}>
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <Avatar type="profile-photo" size={size} shape="square" src={DEMO_PHOTO_WOMAN} statusIcon />
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        color: 'var(--global-color-neutral-gray-600)'
      }}>
            {size}
          </span>
        </div>)}
    </div>
}`,...(oe=(se=b.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ne,pe;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'With Status Icon — All Types',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      {ALL_SHAPES.map(shape => <div key={shape}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px',
        textTransform: 'capitalize'
      }}>
            Shape: {shape}
          </div>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
            {ALL_TYPES.map(type => <div key={type} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
                <div style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            color: 'var(--global-color-neutral-gray-500)',
            width: '100px',
            flexShrink: 0
          }}>
                  {type}
                </div>
                {ALL_SIZES.map(size => <Avatar key={size} type={type} size={size} shape={shape} statusIcon src={DEMO_PHOTO_WOMAN} initials="A" />)}
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(pe=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:pe.source}}};var de,ce,ge;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Without Status Indicator — All Types',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      {ALL_SHAPES.map(shape => <div key={shape}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px',
        textTransform: 'capitalize'
      }}>
            Shape: {shape}
          </div>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
            {ALL_TYPES.map(type => <div key={type} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
                <div style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            color: 'var(--global-color-neutral-gray-500)',
            width: '100px',
            flexShrink: 0
          }}>
                  {type}
                </div>
                {ALL_SIZES.map(size => <Avatar key={size} type={type} size={size} shape={shape} statusIcon={false} src={DEMO_PHOTO_WOMAN} initials="A" />)}
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(ge=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var ue,me,he;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Full Design Matrix (64 variants)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      {ALL_SHAPES.map(shape => <div key={shape}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        marginBottom: '12px',
        textTransform: 'capitalize'
      }}>
            Shape: {shape}
          </div>
          {/* No border */}
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
            {ALL_TYPES.map(type => <div key={type} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
                <div style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            color: 'var(--global-color-neutral-gray-500)',
            width: '100px',
            flexShrink: 0
          }}>
                  {type}
                </div>
                {ALL_SIZES.map(size => <Avatar key={size} type={type} size={size} shape={shape} border={false} statusIcon src={DEMO_PHOTO_WOMAN} initials="A" />)}
                <div style={{
            width: '16px'
          }} />
                {/* Border true */}
                {ALL_SIZES.map(size => <Avatar key={\`\${size}-border\`} type={type} size={size} shape={shape} border statusIcon src={DEMO_PHOTO_WOMAN} initials="A" />)}
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(he=(me=j.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};const _e=["Documentation","Playground","Default","StatusEmptyState","StatusProfilePhoto","StatusInitial","StatusWithBorder","StatusWithStatusBadge","ComponentBreakdown","AllInteractiveStates","AllSizesLegacy","WithStatusIconAllTypes","WithoutStatusIndicator","FullDesignMatrix"];export{v as AllInteractiveStates,b as AllSizesLegacy,f as ComponentBreakdown,g as Default,d as Documentation,j as FullDesignMatrix,c as Playground,u as StatusEmptyState,h as StatusInitial,m as StatusProfilePhoto,x as StatusWithBorder,y as StatusWithStatusBadge,S as WithStatusIconAllTypes,z as WithoutStatusIndicator,_e as __namedExportsOrder,Pe as default};
