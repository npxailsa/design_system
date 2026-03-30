import{j as e}from"./iframe-Brvnvbno.js";import{P as xe}from"./Person-BfpFNN9i.js";import{S as be}from"./StatusIndicator-DwyW4LWO.js";import{D as t}from"./DocsTemplate-Btuo5XpV.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-C8MJhmX5.js";const ve="_avatar_b8tee_7",ze="_imageWrap_b8tee_110",Se="_photo_b8tee_121",je="_personIcon_b8tee_129",_e="_initials_b8tee_142",Ae="_badge_b8tee_163",l={avatar:ve,"size-x-small":"_size-x-small_b8tee_34","size-small":"_size-small_b8tee_39","size-default":"_size-default_b8tee_44","size-large":"_size-large_b8tee_49","shape-circle":"_shape-circle_b8tee_59","shape-square":"_shape-square_b8tee_64","type-empty-state":"_type-empty-state_b8tee_72","type-profile-photo":"_type-profile-photo_b8tee_76","type-initial-light":"_type-initial-light_b8tee_80","type-initial-dark":"_type-initial-dark_b8tee_84","border-false":"_border-false_b8tee_93","border-true":"_border-true_b8tee_100",imageWrap:ze,photo:Se,personIcon:je,initials:_e,badge:Ae},Ie={"x-small":"small",small:"large",default:"default",large:"default"},s=({type:a="empty-state",size:r="default",shape:i="square",border:S=!1,statusIcon:ue=!1,initials:ge="A",src:I,alt:w="User avatar",className:me=""})=>{const he=[l.avatar,l[`size-${r}`],l[`type-${a}`],l[`shape-${i}`],S?l["border-true"]:l["border-false"],me].filter(Boolean).join(" "),fe=a==="profile-photo"||a==="empty-state",ye=a==="initial-light"||a==="initial-dark";return e.jsxs("div",{className:he,"aria-label":w,role:"img",children:[fe&&e.jsx("div",{className:l.imageWrap,children:a==="profile-photo"&&I?e.jsx("img",{className:l.photo,src:I,alt:w}):e.jsx(xe,{className:l.personIcon,"aria-hidden":"true"})}),ye&&e.jsx("span",{className:l.initials,"aria-hidden":"true",children:ge}),ue&&e.jsx(be,{status:"do-not-disturb",size:Ie[r],className:l.badge,ariaLabel:"Do not disturb"})]})};s.__docgenInfo={description:`Avatar — Displays a user identity in one of four modes:
empty-state (person icon), profile-photo (image), initial-light, initial-dark.
Supports four sizes, two shapes, an optional white border, and a presence badge.

Location: Atoms/Avatar`,methods:[],displayName:"Avatar",props:{type:{required:!1,tsType:{name:"union",raw:"'empty-state' | 'profile-photo' | 'initial-light' | 'initial-dark'",elements:[{name:"literal",value:"'empty-state'"},{name:"literal",value:"'profile-photo'"},{name:"literal",value:"'initial-light'"},{name:"literal",value:"'initial-dark'"}]},description:"Avatar display mode",defaultValue:{value:"'empty-state'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'x-small' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Overall size",defaultValue:{value:"'default'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}]},description:"Square (rounded) or circle",defaultValue:{value:"'square'",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"Show white border + drop-shadow",defaultValue:{value:"false",computed:!1}},statusIcon:{required:!1,tsType:{name:"boolean"},description:"Show the status / notification indicator dot",defaultValue:{value:"false",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:`Initials shown for initial-light / initial-dark types.
Typically 1–2 characters. Defaults to "A".`,defaultValue:{value:"'A'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:'Image src — used when type="profile-photo"'},alt:{required:!1,tsType:{name:"string"},description:"Alt text for profile photo",defaultValue:{value:"'User avatar'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class",defaultValue:{value:"''",computed:!1}}}};const n="https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2F66ca08e7a8064c219b23a01fe8b9a4fd?format=webp&width=200&height=200",j=["x-small","small","default","large"],_=[{type:"empty-state",label:"Empty State",description:"Shows a generic person icon when no photo or initials are available. Gray-200 background with a gray-400 person icon."},{type:"profile-photo",label:"Profile Photo",description:"Displays the user's photo, cropped to fill the container with object-fit: cover."},{type:"initial-light",label:"Initial — Light",description:"Shows initials on a light gray-200 background with black text. Use when a photo is unavailable but initials are known."},{type:"initial-dark",label:"Initial — Dark",description:"Shows initials on a black background with white text. Higher visual weight — use for primary / current user."}],we=[{size:"x-small",label:"X-Small",px:"26 × 26 px",usage:"Dense lists, comment threads, micro-layouts"},{size:"small",label:"Small",px:"38 × 38 px",usage:"Sidebar items, compact tables, dropdowns"},{size:"default",label:"Default",px:"46 × 46 px",usage:"Standard profile tiles, cards, nav headers"},{size:"large",label:"Large",px:"62 × 62 px",usage:"Profile pages, modals, prominent user displays"}],ke={display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},A=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Avatar",subtitle:"User identity badge with four display types, four sizes, two shapes, optional border, and a status indicator"}),e.jsxs(t.BodyText,{children:["The ",e.jsx("strong",{children:"Avatar"})," identifies a user or entity at a glance. It supports an empty-state person icon, a profile photo, or monogram initials in light and dark variants. A white border + shadow treatment elevates it on coloured or complex backgrounds, and an optional status indicator communicates presence."]}),e.jsx(t.Section,{title:"Component Anatomy",children:e.jsx(t.Anatomy,{preview:e.jsxs("div",{style:ke,children:[e.jsx(s,{type:"profile-photo",size:"large",shape:"square",src:n,statusIcon:!0}),e.jsx(s,{type:"profile-photo",size:"large",shape:"circle",src:n,statusIcon:!0})]}),parts:[{id:1,name:"Container",token:`--avatar-size-default (46px)
--avatar-radius-sq-default (8px)`,description:"Fixed square container. Size and border-radius are controlled by size + shape tokens. Overflow is hidden to clip the photo."},{id:2,name:"Photo / Icon / Initials",token:`--avatar-icon-size-default (24px)
--avatar-initial-size-default (heading-5)`,description:"The visual content of the avatar — a person icon SVG (empty-state), a cropped image (profile-photo), or a typographic initial (initial-light / initial-dark)."},{id:3,name:"Border",token:`--avatar-border-width (1px)
--avatar-border-color (gray-200)`,description:"A 1 px border is visible in the default state. When border=true, a 4 px white ring with a gray drop-shadow is applied for use on coloured surfaces."},{id:4,name:"Status badge",token:"--avatar-badge-size-default (14px)",description:"A StatusIndicator dot positioned at the top-right corner. Scales with the avatar size. Only rendered when statusIcon=true."}]})}),e.jsxs(t.Section,{title:"Types",children:[e.jsx(t.BodyText,{children:"Four content types cover the common user-identity scenarios in order of information fidelity."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",maxWidth:"600px"},children:_.map(({type:a,label:r,description:i})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"56px 120px 1fr",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(s,{type:a,size:"default",shape:"square",src:n,initials:"A"}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-base-black)"},children:r}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-light)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:i})]},a))})]}),e.jsxs(t.Section,{title:"Shapes",children:[e.jsx(t.BodyText,{children:"Square uses a rounded-corner rectangle (radius scales with size). Circle uses a full pill radius to produce a perfect circle."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-32px)"},children:["square","circle"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(s,{type:"profile-photo",size:"large",shape:a,src:n}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",textTransform:"capitalize"},children:a})]},a))})]}),e.jsxs(t.Section,{title:"Sizes",children:[e.jsx(t.BodyText,{children:"Four sizes scale the container, photo, icon, and initials proportionally. Choose based on the density of the surrounding layout."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"70px 80px 110px 1fr",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:["","Size","Dimensions","Typical usage"].map(a=>e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.05em"},children:a},a))}),we.map(({size:a,label:r,px:i,usage:S})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"70px 80px 110px 1fr",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center"},children:e.jsx(s,{type:"profile-photo",size:a,shape:"square",src:n})}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-base-black)"},children:r}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:i}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:S})]},a))]})]}),e.jsxs(t.Section,{title:"Border Variants",children:[e.jsx(t.BodyText,{children:"The default 1 px gray-200 border provides subtle separation. The active border (border=true) applies a 4 px white ring and a gray drop-shadow — use when avatars overlap or appear on coloured/image backgrounds."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-8px)"},children:["square","circle"].map(a=>[!1,!0].map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(s,{type:"profile-photo",size:"default",shape:a,border:r,src:n}),e.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:[a," / border=",r?"true":"false"]})]},`${a}-${r}`)))})]}),e.jsxs(t.Section,{title:"Status Badge",children:[e.jsx(t.BodyText,{children:"When statusIcon=true, a do-not-disturb badge (red dot) is positioned at the top-right corner. The dot size scales automatically with the avatar size using the StatusIndicator component tokens."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-16px)"},children:j.map(a=>e.jsx(s,{type:"profile-photo",size:a,shape:"square",statusIcon:!0,src:n},a))})]}),e.jsx(t.Section,{title:"All Types × Sizes (Square)",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:_.map(({type:a,label:r})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px repeat(4, auto)",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:1.4},children:r}),j.map(i=>e.jsx(s,{type:a,size:i,shape:"square",statusIcon:!0,src:n,initials:"A"},i))]},a))})}),e.jsx(t.Section,{title:"All Types × Sizes (Circle)",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:_.map(({type:a,label:r})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"110px repeat(4, auto)",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:1.4},children:r}),j.map(i=>e.jsx(s,{type:a,size:i,shape:"circle",statusIcon:!0,src:n,initials:"A"},i))]},a))})}),e.jsx(t.TokenTable,{title:"Design Tokens — Sizes",description:"Container dimensions per size:",tokens:[{name:"--avatar-size-xs",description:"X-small container — 26px"},{name:"--avatar-size-sm",description:"Small container — 38px"},{name:"--avatar-size-default",description:"Default container — 46px"},{name:"--avatar-size-lg",description:"Large container — 62px"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Shape & Border Radius",description:"Border radius tokens per size and shape:",tokens:[{name:"--avatar-radius-circle",description:"Circle shape — --global-spacing-radius-full (99999px)"},{name:"--avatar-radius-sq-xs",description:"Square x-small radius — --global-spacing-radius-4px (4px)"},{name:"--avatar-radius-sq-sm",description:"Square small radius — 6px"},{name:"--avatar-radius-sq-default",description:"Square default radius — --global-spacing-radius-8px (8px)"},{name:"--avatar-radius-sq-lg",description:"Square large radius — --global-spacing-radius-12px (12px)"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Colours",description:"Background and text colour tokens:",tokens:[{name:"--avatar-bg-empty-state",description:"Empty-state & photo bg — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--avatar-bg-initial-light",description:"Initial-light bg — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--avatar-bg-initial-dark",description:"Initial-dark bg — --global-color-base-black (#1C1C1C)"},{name:"--avatar-color-initial-light",description:"Initial-light text — --global-color-base-black"},{name:"--avatar-color-initial-dark",description:"Initial-dark text — --global-color-base-white"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Border",description:"Border tokens for default and active (border=true) states:",tokens:[{name:"--avatar-border-width",description:"Default border — --global-spacing-stroke-1px (1px)"},{name:"--avatar-border-color",description:"Default border colour — --global-color-neutral-gray-200"},{name:"--avatar-border-width-active",description:"Active border width — 4px"},{name:"--avatar-border-color-active",description:"Active border colour — --global-color-base-white"},{name:"--avatar-border-shadow-active",description:"Active box-shadow — 2px 2px 0px 0px gray-200"}]}),e.jsx(t.CodeBlock,{children:`import { Avatar } from '@/components/Avatar';

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
<Avatar type="profile-photo" size="default" statusIcon src="/photo.jpg" />`}),e.jsxs(t.Principles,{children:[e.jsx(t.PrincipleCard,{number:1,title:"Prefer photo → initials → empty state",children:"Always use the highest-fidelity representation available. Show a profile photo when you have one, fall back to initials when the name is known, and use the empty-state only as a last resort."}),e.jsxs(t.PrincipleCard,{number:2,title:"Use dark initials for the current user",children:["Reserve ",e.jsx("code",{children:"initial-dark"})," for the authenticated / primary user in contexts where distinguishing them from other participants matters (e.g. chat, comments, meeting participants). All other users use ",e.jsx("code",{children:"initial-light"}),"."]}),e.jsxs(t.PrincipleCard,{number:3,title:"Match size to information density",children:["Use ",e.jsx("code",{children:"x-small"})," and ",e.jsx("code",{children:"small"})," in high-density lists where avatars are supportive context. Use ",e.jsx("code",{children:"default"})," for standard cards and navigation. Reserve ",e.jsx("code",{children:"large"})," for profile pages and prominent user displays where the identity is the primary focus."]}),e.jsx(t.PrincipleCard,{number:4,title:"Apply border=true on complex backgrounds",children:"The white ring + shadow is designed for use on coloured, gradient, or image backgrounds where the avatar edge would otherwise be lost. Do not apply it on plain white or light-gray surfaces — the default 1 px border provides sufficient separation."})]}),e.jsx(t.Footer,{})]});A.__docgenInfo={description:"",methods:[],displayName:"AvatarDocs"};const o="https://cdn.builder.io/api/v1/image/assets%2Fc7a3c3953c0a4f43bcdc32733cba23f5%2F66ca08e7a8064c219b23a01fe8b9a4fd?format=webp&width=200&height=200",z=["x-small","small","default","large"],de=["empty-state","profile-photo","initial-light","initial-dark"],ce=["square","circle"],Be={title:"Atoms/Avatar",component:s,parameters:{docs:{page:()=>e.jsx(A,{})}},argTypes:{type:{control:"select",options:de},size:{control:"select",options:z},shape:{control:"select",options:ce},border:{control:"boolean"},statusIcon:{control:"boolean"},initials:{control:"text"},src:{control:"text"}},args:{type:"empty-state",size:"default",shape:"square",border:!1,statusIcon:!1,initials:"A",src:o}},p={name:"Documentation",render:()=>e.jsx(A,{})},d={name:"Playground",args:{type:"profile-photo",size:"default",shape:"square",border:!1,statusIcon:!0,src:o}},c={name:"Empty State",args:{type:"empty-state",size:"default",shape:"square"}},u={name:"Profile Photo",args:{type:"profile-photo",size:"default",shape:"square",src:o}},g={name:"Initial — Light",args:{type:"initial-light",size:"default",shape:"square",initials:"A"}},m={name:"Initial — Dark",args:{type:"initial-dark",size:"default",shape:"square",initials:"A"}},h={args:{type:"profile-photo",size:"default",shape:"square",src:o}},f={args:{type:"profile-photo",size:"default",shape:"circle",src:o}},y={name:"With Border",args:{type:"profile-photo",size:"default",shape:"square",border:!0,src:o}},x={name:"With Status Badge",args:{type:"profile-photo",size:"default",shape:"square",statusIcon:!0,src:o}},b={name:"All Sizes",render:()=>e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"24px",padding:"12px"},children:z.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(s,{type:"profile-photo",size:a,shape:"square",src:o,statusIcon:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",color:"var(--global-color-neutral-gray-600)"},children:a})]},a))})},v={name:"All Variants",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:ce.map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"12px",textTransform:"capitalize"},children:["Shape: ",a]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:de.map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"100px",flexShrink:0},children:r}),z.map(i=>e.jsx(s,{type:r,size:i,shape:a,border:!1,statusIcon:!0,src:o,initials:"A"},i)),e.jsx("div",{style:{width:"16px"}}),z.map(i=>e.jsx(s,{type:r,size:i,shape:a,border:!0,statusIcon:!0,src:o,initials:"A"},`${i}-border`))]},r))})]},a))})};var k,T,q;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <AvatarDocs />
}`,...(q=(T=p.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var D,P,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    border: false,
    statusIcon: true,
    src: DEMO_PHOTO
  }
}`,...(E=(P=d.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var O,B,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Empty State',
  args: {
    type: 'empty-state',
    size: 'default',
    shape: 'square'
  }
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var C,F,W;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Profile Photo',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    src: DEMO_PHOTO
  }
}`,...(W=(F=u.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var H,V,M;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Initial — Light',
  args: {
    type: 'initial-light',
    size: 'default',
    shape: 'square',
    initials: 'A'
  }
}`,...(M=(V=g.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var N,$,U;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Initial — Dark',
  args: {
    type: 'initial-dark',
    size: 'default',
    shape: 'square',
    initials: 'A'
  }
}`,...(U=($=m.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var Z,R,G;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    src: DEMO_PHOTO
  }
}`,...(G=(R=h.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var Y,X,J;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'circle',
    src: DEMO_PHOTO
  }
}`,...(J=(X=f.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var K,Q,ee;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'With Border',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    border: true,
    src: DEMO_PHOTO
  }
}`,...(ee=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ae,te,re;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'With Status Badge',
  args: {
    type: 'profile-photo',
    size: 'default',
    shape: 'square',
    statusIcon: true,
    src: DEMO_PHOTO
  }
}`,...(re=(te=x.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,se,le;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
          <Avatar type="profile-photo" size={size} shape="square" src={DEMO_PHOTO} statusIcon />
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        color: 'var(--global-color-neutral-gray-600)'
      }}>
            {size}
          </span>
        </div>)}
    </div>
}`,...(le=(se=b.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var oe,ne,pe;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
                {ALL_SIZES.map(size => <Avatar key={size} type={type} size={size} shape={shape} border={false} statusIcon src={DEMO_PHOTO} initials="A" />)}
                <div style={{
            width: '16px'
          }} />
                {/* Border true */}
                {ALL_SIZES.map(size => <Avatar key={\`\${size}-border\`} type={type} size={size} shape={shape} border statusIcon src={DEMO_PHOTO} initials="A" />)}
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(pe=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:pe.source}}};const Le=["Documentation","Playground","EmptyState","ProfilePhoto","InitialLight","InitialDark","Square","Circle","WithBorder","WithStatusBadge","AllSizes","AllVariants"];export{b as AllSizes,v as AllVariants,f as Circle,p as Documentation,c as EmptyState,m as InitialDark,g as InitialLight,d as Playground,u as ProfilePhoto,h as Square,y as WithBorder,x as WithStatusBadge,Le as __namedExportsOrder,Be as default};
