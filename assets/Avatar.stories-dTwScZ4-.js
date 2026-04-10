import{j as e}from"./iframe-Bcl9ehwc.js";import{A as s}from"./Avatar-Bmha6bD1.js";import{D as r}from"./DocsTemplate-Ck647IGQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Person-DDmhJ7kY.js";import"./createSvgIcon-xrkVuT_v.js";import"./StatusIndicator-Be6ynRiQ.js";const o="https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",Ie="https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",n=["x-small","small","default","large"],w=[{type:"empty-state",label:"Empty State",description:"Shows a generic person icon when no photo or initials are available. Gray-200 background with a gray-400 person icon."},{type:"profile-photo",label:"Profile Photo",description:"Displays the user's photo, cropped to fill the container with object-fit: cover."},{type:"initial-light",label:"Initial — Light",description:"Shows initials on a light gray-200 background with black text. Use when a photo is unavailable but initials are known."},{type:"initial-dark",label:"Initial — Dark",description:"Shows initials on a black background with white text. Higher visual weight — use for primary / current user."}],ke=[{size:"x-small",label:"X-Small",px:"26 × 26 px",usage:"Dense lists, comment threads, micro-layouts"},{size:"small",label:"Small",px:"38 × 38 px",usage:"Sidebar items, compact tables, dropdowns"},{size:"default",label:"Default",px:"46 × 46 px",usage:"Standard profile tiles, cards, nav headers"},{size:"large",label:"Large",px:"62 × 62 px",usage:"Profile pages, modals, prominent user displays"}],Te={display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},P=()=>e.jsxs(r,{children:[e.jsx(r.Header,{title:"Avatar",subtitle:"User identity badge with four display types, four sizes, two shapes, optional border, and a status indicator"}),e.jsxs(r.BodyText,{children:["The ",e.jsx("strong",{children:"Avatar"})," identifies a user or entity at a glance. It supports an empty-state person icon, a profile photo, or monogram initials in light and dark variants. A white border + shadow treatment elevates it on coloured or complex backgrounds, and an optional status indicator communicates presence."]}),e.jsx(r.Section,{title:"Component Anatomy",children:e.jsx(r.Anatomy,{preview:e.jsxs("div",{style:Te,children:[e.jsx(s,{type:"profile-photo",size:"large",shape:"square",src:o,statusIcon:!0}),e.jsx(s,{type:"profile-photo",size:"large",shape:"circle",src:o,statusIcon:!0})]}),parts:[{id:1,name:"Container",token:`--avatar-size-default (46px)
--avatar-radius-sq-default (8px)`,description:"Fixed square container. Size and border-radius are controlled by size + shape tokens. Overflow is hidden to clip the photo."},{id:2,name:"Photo / Icon / Initials",token:`--avatar-icon-size-default (24px)
--avatar-initial-size-default (heading-5)`,description:"The visual content of the avatar — a person icon SVG (empty-state), a cropped image (profile-photo), or a typographic initial (initial-light / initial-dark)."},{id:3,name:"Border",token:`--avatar-border-width (1px)
--avatar-border-color (gray-200)`,description:"A 1 px border is visible in the default state. When border=true, a 4 px white ring with a gray drop-shadow is applied for use on coloured surfaces."},{id:4,name:"Status badge",token:"--avatar-badge-size-default (14px)",description:"A StatusIndicator dot positioned at the top-right corner. Scales with the avatar size. Only rendered when statusIcon=true."}]})}),e.jsxs(r.Section,{title:"Profile Photo States",children:[e.jsx(r.BodyText,{children:"The profile-photo type covers three scenarios: an empty state when no image has been uploaded (falls back to a person icon), and uploaded portrait photos."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-32px)"},children:[{src:void 0,label:"No photo uploaded (icon)",type:"empty-state"},{src:o,label:"Woman profile photo",type:"profile-photo"},{src:Ie,label:"Man profile photo",type:"profile-photo"}].map(({src:a,label:t,type:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(s,{type:i,size:"large",shape:"square",src:a}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",textAlign:"center",maxWidth:"80px"},children:t})]},t))})]}),e.jsxs(r.Section,{title:"Types",children:[e.jsx(r.BodyText,{children:"Four content types cover the common user-identity scenarios in order of information fidelity."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",maxWidth:"600px"},children:w.map(({type:a,label:t,description:i})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"56px 120px 1fr",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(s,{type:a,size:"default",shape:"square",src:o,initials:"A"}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-base-black)"},children:t}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-light)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:i})]},a))})]}),e.jsxs(r.Section,{title:"Shapes",children:[e.jsx(r.BodyText,{children:"Square uses a rounded-corner rectangle (radius scales with size). Circle uses a full pill radius to produce a perfect circle."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-32px)"},children:["square","circle"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(s,{type:"profile-photo",size:"large",shape:a,src:o}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",textTransform:"capitalize"},children:a})]},a))})]}),e.jsxs(r.Section,{title:"Sizes",children:[e.jsx(r.BodyText,{children:"Four sizes scale the container, photo, icon, and initials proportionally. Choose based on the density of the surrounding layout."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"70px 80px 110px 1fr",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:["","Size","Dimensions","Typical usage"].map(a=>e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.05em"},children:a},a))}),ke.map(({size:a,label:t,px:i,usage:Ae})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"70px 80px 110px 1fr",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center"},children:e.jsx(s,{type:"profile-photo",size:a,shape:"square",src:o})}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-base-black)"},children:t}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:i}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:Ae})]},a))]})]}),e.jsxs(r.Section,{title:"Border Variants",children:[e.jsx(r.BodyText,{children:"The default 1 px gray-200 border provides subtle separation. The active border (border=true) applies a 4 px white ring and a gray drop-shadow — use when avatars overlap or appear on coloured/image backgrounds."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-8px)"},children:["square","circle"].map(a=>[!1,!0].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(s,{type:"profile-photo",size:"default",shape:a,border:t,src:o}),e.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:[a," / border=",t?"true":"false"]})]},`${a}-${t}`)))})]}),e.jsxs(r.Section,{title:"With Status Indicator",children:[e.jsx(r.BodyText,{children:"When statusIcon=true, a do-not-disturb badge (red dot) is positioned at the top-right corner. The dot size scales automatically with the avatar size using the StatusIndicator component tokens."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:n.map(a=>e.jsx(s,{type:"profile-photo",size:a,shape:"square",statusIcon:!0,src:o},a))}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:n.map(a=>e.jsx(s,{type:"profile-photo",size:a,shape:"circle",statusIcon:!0,src:o},a))})]}),e.jsxs(r.Section,{title:"Without Status Indicator",children:[e.jsx(r.BodyText,{children:"When statusIcon=false (the default), no presence badge is shown. The avatar renders cleanly without any overlay — use this when presence status is not relevant."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:n.map(a=>e.jsx(s,{type:"profile-photo",size:a,shape:"square",src:o},a))}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:n.map(a=>e.jsx(s,{type:"profile-photo",size:a,shape:"circle",src:o},a))})]}),e.jsx(r.Section,{title:"All Types × Sizes (Square)",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:w.map(({type:a,label:t})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px repeat(4, auto)",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:1.4},children:t}),n.map(i=>e.jsx(s,{type:a,size:i,shape:"square",statusIcon:!0,src:o,initials:"A"},i))]},a))})}),e.jsx(r.Section,{title:"All Types × Sizes (Circle)",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:w.map(({type:a,label:t})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px repeat(4, auto)",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:1.4},children:t}),n.map(i=>e.jsx(s,{type:a,size:i,shape:"circle",statusIcon:!0,src:o,initials:"A"},i))]},a))})}),e.jsx(r.TokenTable,{title:"Design Tokens — Sizes",description:"Container dimensions per size:",tokens:[{name:"--avatar-size-xs",description:"X-small container — 26px"},{name:"--avatar-size-sm",description:"Small container — 38px"},{name:"--avatar-size-default",description:"Default container — 46px"},{name:"--avatar-size-lg",description:"Large container — 62px"}]}),e.jsx(r.TokenTable,{title:"Design Tokens — Shape & Border Radius",description:"Border radius tokens per size and shape:",tokens:[{name:"--avatar-radius-circle",description:"Circle shape — --global-spacing-radius-full (99999px)"},{name:"--avatar-radius-sq-xs",description:"Square x-small radius — --global-spacing-radius-4px (4px)"},{name:"--avatar-radius-sq-sm",description:"Square small radius — 6px"},{name:"--avatar-radius-sq-default",description:"Square default radius — --global-spacing-radius-8px (8px)"},{name:"--avatar-radius-sq-lg",description:"Square large radius — --global-spacing-radius-12px (12px)"}]}),e.jsx(r.TokenTable,{title:"Design Tokens — Colours",description:"Background and text colour tokens:",tokens:[{name:"--avatar-bg-empty-state",description:"Empty-state & photo bg — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--avatar-bg-initial-light",description:"Initial-light bg — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--avatar-bg-initial-dark",description:"Initial-dark bg — --global-color-base-black (#1C1C1C)"},{name:"--avatar-color-initial-light",description:"Initial-light text — --global-color-base-black"},{name:"--avatar-color-initial-dark",description:"Initial-dark text — --global-color-base-white"}]}),e.jsx(r.TokenTable,{title:"Design Tokens — Border",description:"Border tokens for default and active (border=true) states:",tokens:[{name:"--avatar-border-width",description:"Default border — --global-spacing-stroke-1px (1px)"},{name:"--avatar-border-color",description:"Default border colour — --global-color-neutral-gray-200"},{name:"--avatar-border-width-active",description:"Active border width — 4px"},{name:"--avatar-border-color-active",description:"Active border colour — --global-color-base-white"},{name:"--avatar-border-shadow-active",description:"Active box-shadow — 2px 2px 0px 0px gray-200"}]}),e.jsx(r.TokenTable,{title:"Design Tokens — Status Badge Positioning",description:"Negative offset tokens used to position the status indicator badge at the top-right corner of the avatar. These reference the global negative spacing scale — no hardcoded values are used.",tokens:[{name:"--global-spacing-sizing-neg-2px",description:"Badge top/right offset for x-small avatars (−2px) — pixel-precise inset from the avatar edge."},{name:"--global-spacing-sizing-neg-6px",description:"Badge top/right offset for small, default, and large avatars (−6px) — slightly larger overlap that keeps the badge optically centred on the avatar corner."}]}),e.jsx(r.CodeBlock,{children:`import { Avatar } from '@/components/Avatar';

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
<Avatar type="profile-photo" size="default" statusIcon src="/photo.jpg" />`}),e.jsxs(r.Principles,{children:[e.jsx(r.PrincipleCard,{number:1,title:"Prefer photo → initials → empty state",children:"Always use the highest-fidelity representation available. Show a profile photo when you have one, fall back to initials when the name is known, and use the empty-state only as a last resort."}),e.jsxs(r.PrincipleCard,{number:2,title:"Use dark initials for the current user",children:["Reserve ",e.jsx("code",{children:"initial-dark"})," for the authenticated / primary user in contexts where distinguishing them from other participants matters (e.g. chat, comments, meeting participants). All other users use ",e.jsx("code",{children:"initial-light"}),"."]}),e.jsxs(r.PrincipleCard,{number:3,title:"Match size to information density",children:["Use ",e.jsx("code",{children:"x-small"})," and ",e.jsx("code",{children:"small"})," in high-density lists where avatars are supportive context. Use ",e.jsx("code",{children:"default"})," for standard cards and navigation. Reserve ",e.jsx("code",{children:"large"})," for profile pages and prominent user displays where the identity is the primary focus."]}),e.jsx(r.PrincipleCard,{number:4,title:"Apply border=true on complex backgrounds",children:"The white ring + shadow is designed for use on coloured, gradient, or image backgrounds where the avatar edge would otherwise be lost. Do not apply it on plain white or light-gray surfaces — the default 1 px border provides sufficient separation."})]}),e.jsx(r.Footer,{})]});P.__docgenInfo={description:"",methods:[],displayName:"AvatarDocs"};const l="https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",we="https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",p=["x-small","small","default","large"],k=["empty-state","profile-photo","initial-light","initial-dark"],T=["square","circle"],Be={title:"Atoms/Avatar",component:s,parameters:{docs:{page:()=>e.jsx(P,{})}},argTypes:{type:{control:"select",options:k},size:{control:"select",options:p},shape:{control:"select",options:T},border:{control:"boolean"},statusIcon:{control:"boolean"},initials:{control:"text"},src:{control:"text"}},args:{type:"empty-state",size:"default",shape:"square",border:!1,statusIcon:!1,initials:"A",src:l}},c={name:"Documentation",render:()=>e.jsx(P,{}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},d={name:"Playground",args:{type:"profile-photo",size:"default",shape:"square",border:!1,statusIcon:!0,src:l}},g={name:"Empty State",args:{type:"empty-state",size:"default",shape:"square"}},m={name:"Profile Photo — Empty (Icon)",args:{type:"empty-state",size:"default",shape:"square"}},h={name:"Profile Photo — Woman",args:{type:"profile-photo",size:"default",shape:"square",src:l}},u={name:"Profile Photo — Man",args:{type:"profile-photo",size:"default",shape:"square",src:we}},y={name:"Initial — Light",args:{type:"initial-light",size:"default",shape:"square",initials:"A"}},x={name:"Initial — Dark",args:{type:"initial-dark",size:"default",shape:"square",initials:"A"}},f={args:{type:"profile-photo",size:"default",shape:"square",src:l}},v={args:{type:"profile-photo",size:"default",shape:"circle",src:l}},b={name:"With Border",args:{type:"profile-photo",size:"default",shape:"square",border:!0,src:l}},S={name:"With Status Badge",args:{type:"profile-photo",size:"default",shape:"square",statusIcon:!0,src:l}},z={name:"All Sizes",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"24px",padding:"12px"},children:p.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(s,{type:"profile-photo",size:a,shape:"square",src:l,statusIcon:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-600)"},children:a})]},a))})},j={name:"With Status Icon — All Types",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:T.map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Shape: ",a]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:k.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"100px",flexShrink:0},children:t}),p.map(i=>e.jsx(s,{type:t,size:i,shape:a,statusIcon:!0,src:l,initials:"A"},i))]},t))})]},a))})},A={name:"Without Status Indicator — All Types",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:T.map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Shape: ",a]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:k.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"100px",flexShrink:0},children:t}),p.map(i=>e.jsx(s,{type:t,size:i,shape:a,statusIcon:!1,src:l,initials:"A"},i))]},t))})]},a))})},I={name:"All Variants",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:T.map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Shape: ",a]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:k.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"100px",flexShrink:0},children:t}),p.map(i=>e.jsx(s,{type:t,size:i,shape:a,border:!1,statusIcon:!0,src:l,initials:"A"},i)),e.jsx("div",{style:{width:"16px"}}),p.map(i=>e.jsx(s,{type:t,size:i,shape:a,border:!0,statusIcon:!0,src:l,initials:"A"},`${i}-border`))]},t))})]},a))})};var D,O,W;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(O=c.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var _,E,q;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    border: false,
    statusIcon: true,
    src: DEMO_PHOTO_WOMAN
  }
}`,...(q=(E=d.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var B,L,M;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Empty State',
  args: {
    type: 'empty-state',
    size: 'default',
    shape: 'square'
  }
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var F,H,C;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Profile Photo — Empty (Icon)',
  args: {
    type: 'empty-state',
    size: 'default',
    shape: 'square'
  }
}`,...(C=(H=m.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var N,Z,$;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Profile Photo — Woman',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    src: DEMO_PHOTO_WOMAN
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var R,V,U;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Profile Photo — Man',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    src: DEMO_PHOTO_MAN
  }
}`,...(U=(V=u.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var Y,G,X;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Initial — Light',
  args: {
    type: 'initial-light',
    size: 'default',
    shape: 'square',
    initials: 'A'
  }
}`,...(X=(G=y.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Initial — Dark',
  args: {
    type: 'initial-dark',
    size: 'default',
    shape: 'square',
    initials: 'A'
  }
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var ee,ae,re;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    src: DEMO_PHOTO_WOMAN
  }
}`,...(re=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,ie,se;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'circle',
    src: DEMO_PHOTO_WOMAN
  }
}`,...(se=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var oe,le,ne;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'With Border',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    border: true,
    src: DEMO_PHOTO_WOMAN
  }
}`,...(ne=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var pe,ce,de;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'With Status Badge',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    statusIcon: true,
    src: DEMO_PHOTO_WOMAN
  }
}`,...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ge,me,he;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(me=z.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ue,ye,xe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(xe=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var fe,ve,be;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(be=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Se,ze,je;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(je=(ze=I.parameters)==null?void 0:ze.docs)==null?void 0:je.source}}};const Le=["Documentation","Playground","EmptyState","ProfilePhotoEmpty","ProfilePhotoWoman","ProfilePhotoMan","InitialLight","InitialDark","Square","Circle","WithBorder","WithStatusBadge","AllSizes","WithStatusIconAllTypes","WithoutStatusIndicator","AllVariants"];export{z as AllSizes,I as AllVariants,v as Circle,c as Documentation,g as EmptyState,x as InitialDark,y as InitialLight,d as Playground,m as ProfilePhotoEmpty,u as ProfilePhotoMan,h as ProfilePhotoWoman,f as Square,b as WithBorder,S as WithStatusBadge,j as WithStatusIconAllTypes,A as WithoutStatusIndicator,Le as __namedExportsOrder,Be as default};
