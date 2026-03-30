import{j as e}from"./iframe-C5wYm6V4.js";import{P as We}from"./Person-BjCti7c2.js";import{S as Ee}from"./StatusIndicator-BkDLgBBx.js";import{D as t}from"./DocsTemplate-BnM2UxzU.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-DKLRlYih.js";const Le="_avatar_b8tee_7",Be="_imageWrap_b8tee_110",Me="_photo_b8tee_121",Fe="_personIcon_b8tee_129",Ne="_initials_b8tee_142",Ce="_badge_b8tee_163",n={avatar:Le,"size-x-small":"_size-x-small_b8tee_34","size-small":"_size-small_b8tee_39","size-default":"_size-default_b8tee_44","size-large":"_size-large_b8tee_49","shape-circle":"_shape-circle_b8tee_59","shape-square":"_shape-square_b8tee_64","type-empty-state":"_type-empty-state_b8tee_72","type-profile-photo":"_type-profile-photo_b8tee_76","type-initial-light":"_type-initial-light_b8tee_80","type-initial-dark":"_type-initial-dark_b8tee_84","border-false":"_border-false_b8tee_93","border-true":"_border-true_b8tee_100",imageWrap:Be,photo:Me,personIcon:Fe,initials:Ne,badge:Ce},He={"x-small":"small",small:"large",default:"default",large:"default"},s=({type:a="empty-state",size:r="default",shape:i="square",border:T=!1,statusIcon:we=!1,initials:Te="A",src:q,alt:O="User avatar",className:De=""})=>{const Pe=[n.avatar,n[`size-${r}`],n[`type-${a}`],n[`shape-${i}`],T?n["border-true"]:n["border-false"],De].filter(Boolean).join(" "),qe=a==="profile-photo"||a==="empty-state",Oe=a==="initial-light"||a==="initial-dark";return e.jsxs("div",{className:Pe,"aria-label":O,role:"img",children:[qe&&e.jsx("div",{className:n.imageWrap,children:a==="profile-photo"&&q?e.jsx("img",{className:n.photo,src:q,alt:O}):e.jsx(We,{className:n.personIcon,"aria-hidden":"true"})}),Oe&&e.jsx("span",{className:n.initials,"aria-hidden":"true",children:Te}),we&&e.jsx(Ee,{status:"do-not-disturb",size:He[r],className:n.badge,ariaLabel:"Do not disturb"})]})};s.__docgenInfo={description:`Avatar — Displays a user identity in one of four modes:
empty-state (person icon), profile-photo (image), initial-light, initial-dark.
Supports four sizes, two shapes, an optional white border, and a presence badge.

Location: Atoms/Avatar`,methods:[],displayName:"Avatar",props:{type:{required:!1,tsType:{name:"union",raw:"'empty-state' | 'profile-photo' | 'initial-light' | 'initial-dark'",elements:[{name:"literal",value:"'empty-state'"},{name:"literal",value:"'profile-photo'"},{name:"literal",value:"'initial-light'"},{name:"literal",value:"'initial-dark'"}]},description:"Avatar display mode",defaultValue:{value:"'empty-state'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'x-small' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Overall size",defaultValue:{value:"'default'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}]},description:"Square (rounded) or circle",defaultValue:{value:"'square'",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"Show white border + drop-shadow",defaultValue:{value:"false",computed:!1}},statusIcon:{required:!1,tsType:{name:"boolean"},description:"Show the status / notification indicator dot",defaultValue:{value:"false",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:`Initials shown for initial-light / initial-dark types.
Typically 1–2 characters. Defaults to "A".`,defaultValue:{value:"'A'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:'Image src — used when type="profile-photo"'},alt:{required:!1,tsType:{name:"string"},description:"Alt text for profile photo",defaultValue:{value:"'User avatar'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class",defaultValue:{value:"''",computed:!1}}}};const o="https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",Ve="https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",p=["x-small","small","default","large"],D=[{type:"empty-state",label:"Empty State",description:"Shows a generic person icon when no photo or initials are available. Gray-200 background with a gray-400 person icon."},{type:"profile-photo",label:"Profile Photo",description:"Displays the user's photo, cropped to fill the container with object-fit: cover."},{type:"initial-light",label:"Initial — Light",description:"Shows initials on a light gray-200 background with black text. Use when a photo is unavailable but initials are known."},{type:"initial-dark",label:"Initial — Dark",description:"Shows initials on a black background with white text. Higher visual weight — use for primary / current user."}],$e=[{size:"x-small",label:"X-Small",px:"26 × 26 px",usage:"Dense lists, comment threads, micro-layouts"},{size:"small",label:"Small",px:"38 × 38 px",usage:"Sidebar items, compact tables, dropdowns"},{size:"default",label:"Default",px:"46 × 46 px",usage:"Standard profile tiles, cards, nav headers"},{size:"large",label:"Large",px:"62 × 62 px",usage:"Profile pages, modals, prominent user displays"}],Ze={display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},P=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Avatar",subtitle:"User identity badge with four display types, four sizes, two shapes, optional border, and a status indicator"}),e.jsxs(t.BodyText,{children:["The ",e.jsx("strong",{children:"Avatar"})," identifies a user or entity at a glance. It supports an empty-state person icon, a profile photo, or monogram initials in light and dark variants. A white border + shadow treatment elevates it on coloured or complex backgrounds, and an optional status indicator communicates presence."]}),e.jsx(t.Section,{title:"Component Anatomy",children:e.jsx(t.Anatomy,{preview:e.jsxs("div",{style:Ze,children:[e.jsx(s,{type:"profile-photo",size:"large",shape:"square",src:o,statusIcon:!0}),e.jsx(s,{type:"profile-photo",size:"large",shape:"circle",src:o,statusIcon:!0})]}),parts:[{id:1,name:"Container",token:`--avatar-size-default (46px)
--avatar-radius-sq-default (8px)`,description:"Fixed square container. Size and border-radius are controlled by size + shape tokens. Overflow is hidden to clip the photo."},{id:2,name:"Photo / Icon / Initials",token:`--avatar-icon-size-default (24px)
--avatar-initial-size-default (heading-5)`,description:"The visual content of the avatar — a person icon SVG (empty-state), a cropped image (profile-photo), or a typographic initial (initial-light / initial-dark)."},{id:3,name:"Border",token:`--avatar-border-width (1px)
--avatar-border-color (gray-200)`,description:"A 1 px border is visible in the default state. When border=true, a 4 px white ring with a gray drop-shadow is applied for use on coloured surfaces."},{id:4,name:"Status badge",token:"--avatar-badge-size-default (14px)",description:"A StatusIndicator dot positioned at the top-right corner. Scales with the avatar size. Only rendered when statusIcon=true."}]})}),e.jsxs(t.Section,{title:"Profile Photo States",children:[e.jsx(t.BodyText,{children:"The profile-photo type covers three scenarios: an empty state when no image has been uploaded (falls back to a person icon), and uploaded portrait photos."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-32px)"},children:[{src:void 0,label:"No photo uploaded (icon)",type:"empty-state"},{src:o,label:"Woman profile photo",type:"profile-photo"},{src:Ve,label:"Man profile photo",type:"profile-photo"}].map(({src:a,label:r,type:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(s,{type:i,size:"large",shape:"square",src:a}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",textAlign:"center",maxWidth:"80px"},children:r})]},r))})]}),e.jsxs(t.Section,{title:"Types",children:[e.jsx(t.BodyText,{children:"Four content types cover the common user-identity scenarios in order of information fidelity."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",maxWidth:"600px"},children:D.map(({type:a,label:r,description:i})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"56px 120px 1fr",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(s,{type:a,size:"default",shape:"square",src:o,initials:"A"}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-base-black)"},children:r}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-light)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:i})]},a))})]}),e.jsxs(t.Section,{title:"Shapes",children:[e.jsx(t.BodyText,{children:"Square uses a rounded-corner rectangle (radius scales with size). Circle uses a full pill radius to produce a perfect circle."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-32px)"},children:["square","circle"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(s,{type:"profile-photo",size:"large",shape:a,src:o}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",textTransform:"capitalize"},children:a})]},a))})]}),e.jsxs(t.Section,{title:"Sizes",children:[e.jsx(t.BodyText,{children:"Four sizes scale the container, photo, icon, and initials proportionally. Choose based on the density of the surrounding layout."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"70px 80px 110px 1fr",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:["","Size","Dimensions","Typical usage"].map(a=>e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.05em"},children:a},a))}),$e.map(({size:a,label:r,px:i,usage:T})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"70px 80px 110px 1fr",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center"},children:e.jsx(s,{type:"profile-photo",size:a,shape:"square",src:o})}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-base-black)"},children:r}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:i}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:T})]},a))]})]}),e.jsxs(t.Section,{title:"Border Variants",children:[e.jsx(t.BodyText,{children:"The default 1 px gray-200 border provides subtle separation. The active border (border=true) applies a 4 px white ring and a gray drop-shadow — use when avatars overlap or appear on coloured/image backgrounds."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-8px)"},children:["square","circle"].map(a=>[!1,!0].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(s,{type:"profile-photo",size:"default",shape:a,border:r,src:o}),e.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:[a," / border=",r?"true":"false"]})]},`${a}-${r}`)))})]}),e.jsxs(t.Section,{title:"With Status Indicator",children:[e.jsx(t.BodyText,{children:"When statusIcon=true, a do-not-disturb badge (red dot) is positioned at the top-right corner. The dot size scales automatically with the avatar size using the StatusIndicator component tokens."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:p.map(a=>e.jsx(s,{type:"profile-photo",size:a,shape:"square",statusIcon:!0,src:o},a))}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:p.map(a=>e.jsx(s,{type:"profile-photo",size:a,shape:"circle",statusIcon:!0,src:o},a))})]}),e.jsxs(t.Section,{title:"Without Status Indicator",children:[e.jsx(t.BodyText,{children:"When statusIcon=false (the default), no presence badge is shown. The avatar renders cleanly without any overlay — use this when presence status is not relevant."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:p.map(a=>e.jsx(s,{type:"profile-photo",size:a,shape:"square",src:o},a))}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:p.map(a=>e.jsx(s,{type:"profile-photo",size:a,shape:"circle",src:o},a))})]}),e.jsx(t.Section,{title:"All Types × Sizes (Square)",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:D.map(({type:a,label:r})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px repeat(4, auto)",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:1.4},children:r}),p.map(i=>e.jsx(s,{type:a,size:i,shape:"square",statusIcon:!0,src:o,initials:"A"},i))]},a))})}),e.jsx(t.Section,{title:"All Types × Sizes (Circle)",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:D.map(({type:a,label:r})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px repeat(4, auto)",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:1.4},children:r}),p.map(i=>e.jsx(s,{type:a,size:i,shape:"circle",statusIcon:!0,src:o,initials:"A"},i))]},a))})}),e.jsx(t.TokenTable,{title:"Design Tokens — Sizes",description:"Container dimensions per size:",tokens:[{name:"--avatar-size-xs",description:"X-small container — 26px"},{name:"--avatar-size-sm",description:"Small container — 38px"},{name:"--avatar-size-default",description:"Default container — 46px"},{name:"--avatar-size-lg",description:"Large container — 62px"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Shape & Border Radius",description:"Border radius tokens per size and shape:",tokens:[{name:"--avatar-radius-circle",description:"Circle shape — --global-spacing-radius-full (99999px)"},{name:"--avatar-radius-sq-xs",description:"Square x-small radius — --global-spacing-radius-4px (4px)"},{name:"--avatar-radius-sq-sm",description:"Square small radius — 6px"},{name:"--avatar-radius-sq-default",description:"Square default radius — --global-spacing-radius-8px (8px)"},{name:"--avatar-radius-sq-lg",description:"Square large radius — --global-spacing-radius-12px (12px)"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Colours",description:"Background and text colour tokens:",tokens:[{name:"--avatar-bg-empty-state",description:"Empty-state & photo bg — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--avatar-bg-initial-light",description:"Initial-light bg — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--avatar-bg-initial-dark",description:"Initial-dark bg — --global-color-base-black (#1C1C1C)"},{name:"--avatar-color-initial-light",description:"Initial-light text — --global-color-base-black"},{name:"--avatar-color-initial-dark",description:"Initial-dark text — --global-color-base-white"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Border",description:"Border tokens for default and active (border=true) states:",tokens:[{name:"--avatar-border-width",description:"Default border — --global-spacing-stroke-1px (1px)"},{name:"--avatar-border-color",description:"Default border colour — --global-color-neutral-gray-200"},{name:"--avatar-border-width-active",description:"Active border width — 4px"},{name:"--avatar-border-color-active",description:"Active border colour — --global-color-base-white"},{name:"--avatar-border-shadow-active",description:"Active box-shadow — 2px 2px 0px 0px gray-200"}]}),e.jsx(t.CodeBlock,{children:`import { Avatar } from '@/components/Avatar';

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
<Avatar type="profile-photo" size="default" statusIcon src="/photo.jpg" />`}),e.jsxs(t.Principles,{children:[e.jsx(t.PrincipleCard,{number:1,title:"Prefer photo → initials → empty state",children:"Always use the highest-fidelity representation available. Show a profile photo when you have one, fall back to initials when the name is known, and use the empty-state only as a last resort."}),e.jsxs(t.PrincipleCard,{number:2,title:"Use dark initials for the current user",children:["Reserve ",e.jsx("code",{children:"initial-dark"})," for the authenticated / primary user in contexts where distinguishing them from other participants matters (e.g. chat, comments, meeting participants). All other users use ",e.jsx("code",{children:"initial-light"}),"."]}),e.jsxs(t.PrincipleCard,{number:3,title:"Match size to information density",children:["Use ",e.jsx("code",{children:"x-small"})," and ",e.jsx("code",{children:"small"})," in high-density lists where avatars are supportive context. Use ",e.jsx("code",{children:"default"})," for standard cards and navigation. Reserve ",e.jsx("code",{children:"large"})," for profile pages and prominent user displays where the identity is the primary focus."]}),e.jsx(t.PrincipleCard,{number:4,title:"Apply border=true on complex backgrounds",children:"The white ring + shadow is designed for use on coloured, gradient, or image backgrounds where the avatar edge would otherwise be lost. Do not apply it on plain white or light-gray surfaces — the default 1 px border provides sufficient separation."})]}),e.jsx(t.Footer,{})]});P.__docgenInfo={description:"",methods:[],displayName:"AvatarDocs"};const l="https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",Ue="https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",d=["x-small","small","default","large"],k=["empty-state","profile-photo","initial-light","initial-dark"],w=["square","circle"],Qe={title:"Atoms/Avatar",component:s,parameters:{docs:{page:()=>e.jsx(P,{})}},argTypes:{type:{control:"select",options:k},size:{control:"select",options:d},shape:{control:"select",options:w},border:{control:"boolean"},statusIcon:{control:"boolean"},initials:{control:"text"},src:{control:"text"}},args:{type:"empty-state",size:"default",shape:"square",border:!1,statusIcon:!1,initials:"A",src:l}},c={name:"Documentation",render:()=>e.jsx(P,{})},u={name:"Playground",args:{type:"profile-photo",size:"default",shape:"square",border:!1,statusIcon:!0,src:l}},m={name:"Empty State",args:{type:"empty-state",size:"default",shape:"square"}},g={name:"Profile Photo — Empty (Icon)",args:{type:"empty-state",size:"default",shape:"square"}},h={name:"Profile Photo — Woman",args:{type:"profile-photo",size:"default",shape:"square",src:l}},y={name:"Profile Photo — Man",args:{type:"profile-photo",size:"default",shape:"square",src:Ue}},f={name:"Initial — Light",args:{type:"initial-light",size:"default",shape:"square",initials:"A"}},x={name:"Initial — Dark",args:{type:"initial-dark",size:"default",shape:"square",initials:"A"}},v={args:{type:"profile-photo",size:"default",shape:"square",src:l}},b={args:{type:"profile-photo",size:"default",shape:"circle",src:l}},z={name:"With Border",args:{type:"profile-photo",size:"default",shape:"square",border:!0,src:l}},S={name:"With Status Badge",args:{type:"profile-photo",size:"default",shape:"square",statusIcon:!0,src:l}},j={name:"All Sizes",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"24px",padding:"12px"},children:d.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(s,{type:"profile-photo",size:a,shape:"square",src:l,statusIcon:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-600)"},children:a})]},a))})},A={name:"With Status Icon — All Types",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:w.map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Shape: ",a]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:k.map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"100px",flexShrink:0},children:r}),d.map(i=>e.jsx(s,{type:r,size:i,shape:a,statusIcon:!0,src:l,initials:"A"},i))]},r))})]},a))})},_={name:"Without Status Indicator — All Types",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:w.map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Shape: ",a]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:k.map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"100px",flexShrink:0},children:r}),d.map(i=>e.jsx(s,{type:r,size:i,shape:a,statusIcon:!1,src:l,initials:"A"},i))]},r))})]},a))})},I={name:"All Variants",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:w.map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Shape: ",a]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:k.map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"100px",flexShrink:0},children:r}),d.map(i=>e.jsx(s,{type:r,size:i,shape:a,border:!1,statusIcon:!0,src:l,initials:"A"},i)),e.jsx("div",{style:{width:"16px"}}),d.map(i=>e.jsx(s,{type:r,size:i,shape:a,border:!0,statusIcon:!0,src:l,initials:"A"},`${i}-border`))]},r))})]},a))})};var W,E,L;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <AvatarDocs />
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var B,M,F;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    border: false,
    statusIcon: true,
    src: DEMO_PHOTO_WOMAN
  }
}`,...(F=(M=u.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var N,C,H;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Empty State',
  args: {
    type: 'empty-state',
    size: 'default',
    shape: 'square'
  }
}`,...(H=(C=m.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var V,$,Z;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Profile Photo — Empty (Icon)',
  args: {
    type: 'empty-state',
    size: 'default',
    shape: 'square'
  }
}`,...(Z=($=g.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};var U,R,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Profile Photo — Woman',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    src: DEMO_PHOTO_WOMAN
  }
}`,...(Y=(R=h.parameters)==null?void 0:R.docs)==null?void 0:Y.source}}};var G,X,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Profile Photo — Man',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    src: DEMO_PHOTO_MAN
  }
}`,...(J=(X=y.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Q,ee;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Initial — Light',
  args: {
    type: 'initial-light',
    size: 'default',
    shape: 'square',
    initials: 'A'
  }
}`,...(ee=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ae,te,re;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Initial — Dark',
  args: {
    type: 'initial-dark',
    size: 'default',
    shape: 'square',
    initials: 'A'
  }
}`,...(re=(te=x.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,se,oe;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    src: DEMO_PHOTO_WOMAN
  }
}`,...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ne,pe;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'circle',
    src: DEMO_PHOTO_WOMAN
  }
}`,...(pe=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:pe.source}}};var de,ce,ue;z.parameters={...z.parameters,docs:{...(de=z.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'With Border',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    border: true,
    src: DEMO_PHOTO_WOMAN
  }
}`,...(ue=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,ge,he;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'With Status Badge',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    statusIcon: true,
    src: DEMO_PHOTO_WOMAN
  }
}`,...(he=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ye,fe,xe;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'All Sizes',
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
}`,...(xe=(fe=j.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ve,be,ze;A.parameters={...A.parameters,docs:{...(ve=A.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ze=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ze.source}}};var Se,je,Ae;_.parameters={..._.parameters,docs:{...(Se=_.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ae=(je=_.parameters)==null?void 0:je.docs)==null?void 0:Ae.source}}};var _e,Ie,ke;I.parameters={...I.parameters,docs:{...(_e=I.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  name: 'All Variants',
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
}`,...(ke=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:ke.source}}};const ea=["Documentation","Playground","EmptyState","ProfilePhotoEmpty","ProfilePhotoWoman","ProfilePhotoMan","InitialLight","InitialDark","Square","Circle","WithBorder","WithStatusBadge","AllSizes","WithStatusIconAllTypes","WithoutStatusIndicator","AllVariants"];export{j as AllSizes,I as AllVariants,b as Circle,c as Documentation,m as EmptyState,x as InitialDark,f as InitialLight,u as Playground,g as ProfilePhotoEmpty,y as ProfilePhotoMan,h as ProfilePhotoWoman,v as Square,z as WithBorder,S as WithStatusBadge,A as WithStatusIconAllTypes,_ as WithoutStatusIndicator,ea as __namedExportsOrder,Qe as default};
