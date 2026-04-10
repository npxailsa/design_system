import{j as e,R as se}from"./iframe-Cqdqh0qK.js";import{A as oe}from"./Avatar-DftSNbHB.js";import{D as t}from"./DocsTemplate-Cz6tFo94.js";import"./preload-helper-Dp1pzeXC.js";import"./Person-B49DDXXS.js";import"./createSvgIcon-C6KubCYD.js";import"./StatusIndicator-BbZMjzWk.js";const pe="_root_hb8b4_7",ce="_avatar_hb8b4_21",de="_textCol_hb8b4_26",me="_name_hb8b4_35",ue="_subtext_hb8b4_45",xe="_email_hb8b4_55",l={root:pe,avatar:ce,textCol:de,name:me,subtext:ue,email:xe,"size-large":"_size-large_hb8b4_68","size-default":"_size-default_hb8b4_73","size-small":"_size-small_hb8b4_78","size-x-small":"_size-x-small_hb8b4_83"},r=({variant:a="name-only",size:p="default",shape:A="circle",avatarType:S="profile-photo",statusIcon:j=!1,border:W=!1,name:c="Willow Quinn",subtext:d="Additional subtext (e.g role)",email:m="willowquin@email.com",initials:te="WQ",src:re,alt:le,className:ie=""})=>{const ne=[l.root,l[`size-${p}`],l[`variant-${a}`],ie].filter(Boolean).join(" ");return e.jsxs("div",{className:ne,children:[e.jsx(oe,{type:S,size:p,shape:A,border:W,statusIcon:j,initials:te,src:re,alt:le??c,className:l.avatar}),e.jsxs("div",{className:l.textCol,children:[e.jsx("span",{className:l.name,children:c}),a==="w-subtext"&&d&&e.jsx("span",{className:l.subtext,children:d}),a==="default"&&m&&e.jsx("span",{className:l.email,children:m})]})]})};r.__docgenInfo={description:`AvatarWithText (horizontal) — combines an Avatar with a text column.

Three variants:
- \`w-subtext\`  → avatar + name + supporting subtext (e.g. role)
- \`name-only\`  → avatar + name only
- \`default\`    → avatar + name + email (rendered in brand-primary blue)

Four sizes mirror the Avatar sizes and scale all typography accordingly.

Location: Atoms/AvatarWithText`,methods:[],displayName:"AvatarWithText",props:{variant:{required:!1,tsType:{name:"union",raw:"'w-subtext' | 'name-only' | 'default'",elements:[{name:"literal",value:"'w-subtext'"},{name:"literal",value:"'name-only'"},{name:"literal",value:"'default'"}]},description:"Content variant:\n- `w-subtext` — name + subtext line (e.g. role)\n- `name-only` — name only\n- `default`   — name + email address",defaultValue:{value:"'name-only'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'x-small' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Controls Avatar size and scales all text proportionally",defaultValue:{value:"'default'",computed:!1}},shape:{required:!1,tsType:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}]},description:"Avatar shape: square (rounded corners) or circle",defaultValue:{value:"'circle'",computed:!1}},avatarType:{required:!1,tsType:{name:"union",raw:"'empty-state' | 'profile-photo' | 'initial-light' | 'initial-dark'",elements:[{name:"literal",value:"'empty-state'"},{name:"literal",value:"'profile-photo'"},{name:"literal",value:"'initial-light'"},{name:"literal",value:"'initial-dark'"}]},description:"Avatar display type",defaultValue:{value:"'profile-photo'",computed:!1}},statusIcon:{required:!1,tsType:{name:"boolean"},description:"Show the status-indicator badge on the avatar",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"Show the white border + shadow treatment on the avatar",defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Primary name label",defaultValue:{value:"'Willow Quinn'",computed:!1}},subtext:{required:!1,tsType:{name:"string"},description:'Supporting text — shown when variant="w-subtext"',defaultValue:{value:"'Additional subtext (e.g role)'",computed:!1}},email:{required:!1,tsType:{name:"string"},description:'Email — shown when variant="default"',defaultValue:{value:"'willowquin@email.com'",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:'Initials — used when avatarType="initial-light" or "initial-dark"',defaultValue:{value:"'WQ'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:'Image src — used when avatarType="profile-photo"'},alt:{required:!1,tsType:{name:"string"},description:"Alt text for the avatar photo"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}}}};const i="https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",s="https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",u=["large","default","small","x-small"],he={display:"flex",alignItems:"flex-start",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},_=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"AvatarWithText (Horizontal)",subtitle:"Combines an Avatar with a text column — showing a name with optional subtext or email."}),e.jsxs(t.BodyText,{children:[e.jsx("strong",{children:"AvatarWithText"})," is a horizontal compound component that pairs an Avatar with a label column. Three content variants cover the most common identity display patterns: name only, name + role/subtext, and name + email. All four avatar sizes are supported and scale the typography proportionally."]}),e.jsx(t.Section,{title:"Component Anatomy",children:e.jsx(t.Anatomy,{preview:e.jsxs("div",{style:he,children:[e.jsx(r,{variant:"w-subtext",size:"large",shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:s}),e.jsx(r,{variant:"default",size:"large",shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",email:"willowquin@email.com",src:i})]}),parts:[{id:1,name:"Avatar",token:"--avatar-size-default (46px)",description:"The Avatar component positioned on the left. Inherits all Avatar props: type, shape, border, statusIcon."},{id:2,name:"Name",token:"--avatar-with-text-name-size-default (16px)",description:"Primary label — always visible. Font size scales with the size prop."},{id:3,name:"Subtext",token:"--avatar-with-text-subtext-size (13px)",description:'Supporting role / description line. Only rendered when variant="w-subtext". Uses footnote scale in gray-600.'},{id:4,name:"Email",token:"--avatar-with-text-email-color (--global-color-primary-blue)",description:'Email address rendered in brand primary blue. Only shown when variant="default".'}]})}),e.jsxs(t.Section,{title:"Variants",children:[e.jsx(t.BodyText,{children:"Three content variants cover the most common user-identity display patterns."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)"},children:[{variant:"name-only",label:"name-only",desc:"Name only — use in dense lists and dropdowns where extra context is not needed.",shape:"circle",src:i,name:"Willow Quinn"},{variant:"w-subtext",label:"w-subtext",desc:"Name + supporting text (role, team, location). Use where additional context helps identify the person.",shape:"square",src:s,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",statusIcon:!0},{variant:"default",label:"default",desc:"Name + email address in brand-primary blue. Use in contact cards, member lists, and settings panels.",shape:"circle",src:i,name:"Willow Quinn",email:"willowquin@email.com"}].map(({variant:a,label:p,desc:A,shape:S,src:j,name:W,subtext:c,email:d,statusIcon:m})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto 120px 1fr",alignItems:"center",gap:"var(--global-spacing-sizing-24px)"},children:[e.jsx(r,{variant:a,size:"default",shape:S,avatarType:"profile-photo",statusIcon:m,name:W,subtext:c,email:d,src:j}),e.jsx("code",{style:{fontFamily:"monospace",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-700)"},children:p}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:A})]},a))})]}),e.jsxs(t.Section,{title:"Profile Photo States",children:[e.jsx(t.BodyText,{children:"The avatarType prop controls the visual representation. All three core photo states are shown below — empty (icon fallback), woman, and man."}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-32px)",flexWrap:"wrap"},children:[e.jsx(r,{variant:"name-only",size:"default",shape:"circle",avatarType:"empty-state",name:"No Photo"}),e.jsx(r,{variant:"name-only",size:"default",shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:i}),e.jsx(r,{variant:"name-only",size:"default",shape:"square",avatarType:"profile-photo",name:"Damon Underwood",src:s,statusIcon:!0})]})]}),e.jsxs(t.Section,{title:"Sizes",children:[e.jsx(t.BodyText,{children:"All four sizes. The avatar scales and the name typography scales proportionally."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",marginBottom:"var(--global-spacing-sizing-32px)"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-semibold)",color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"With Status + Subtext (square)"}),u.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("div",{style:{width:"60px",fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",flexShrink:0},children:a}),e.jsx(r,{variant:"w-subtext",size:a,shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:s})]},a))]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",marginBottom:"var(--global-spacing-sizing-32px)"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-semibold)",color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Name Only (circle)"}),u.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("div",{style:{width:"60px",fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",flexShrink:0},children:a}),e.jsx(r,{variant:"name-only",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:i})]},a))]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-semibold)",color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Name + Email (circle)"}),u.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("div",{style:{width:"60px",fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",flexShrink:0},children:a}),e.jsx(r,{variant:"default",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",email:"willowquin@email.com",src:i})]},a))]})]}),e.jsxs(t.Section,{title:"All Variants × All Sizes",children:[e.jsx(t.BodyText,{children:"Complete matrix showing all three variants at all four sizes. Left: with-subtext (square + status). Centre: name-only (circle). Right: name + email (circle)."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, auto)",gap:"var(--global-spacing-sizing-32px) var(--global-spacing-sizing-48px)",alignItems:"start",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:u.map(a=>e.jsxs(se.Fragment,{children:[e.jsx(r,{variant:"w-subtext",size:a,shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:s}),e.jsx(r,{variant:"name-only",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:i}),e.jsx(r,{variant:"default",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",email:"willowquin@email.com",src:i})]},a))})]}),e.jsx(t.TokenTable,{title:"Design Tokens — Layout",description:"Spacing tokens controlling the horizontal gap and the internal text column gap:",tokens:[{name:"--avatar-with-text-gap",description:"Gap between avatar and text column — --global-spacing-sizing-8px (8px)"},{name:"--avatar-with-text-text-gap",description:"Gap between name and secondary line — --global-spacing-sizing-2px (2px)"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Name Typography",description:"Font family, weight, and per-size dimensions for the primary name label:",tokens:[{name:"--avatar-with-text-name-font",description:"Font family — --brand-font-primary (F37 Ginger Pro)"},{name:"--avatar-with-text-name-color",description:"Text colour — --global-color-base-black (#1C1C1C)"},{name:"--avatar-with-text-name-weight",description:"Font weight — --global-type-weight-default (400)"},{name:"--avatar-with-text-name-size-lg",description:"Name size at large avatar — 18px"},{name:"--avatar-with-text-name-size-default",description:"Name size at default avatar — 16px"},{name:"--avatar-with-text-name-size-sm",description:"Name size at small avatar — 14px"},{name:"--avatar-with-text-name-size-xs",description:"Name size at x-small avatar — 12px"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Subtext & Email",description:"Footnote-scale tokens for the secondary text lines:",tokens:[{name:"--avatar-with-text-subtext-color",description:"Subtext colour — --global-color-neutral-gray-600 (#4B5563)"},{name:"--avatar-with-text-subtext-size",description:"Subtext font size — --global-type-size-primary-footnote (13px)"},{name:"--avatar-with-text-subtext-weight",description:"Subtext weight — --global-type-weight-light (300)"},{name:"--avatar-with-text-email-color",description:"Email colour — --global-color-primary-blue (#2F42BD)"},{name:"--avatar-with-text-email-size",description:"Email font size — --global-type-size-primary-footnote (13px)"},{name:"--avatar-with-text-email-weight",description:"Email weight — --global-type-weight-light (300)"}]}),e.jsx(t.CodeBlock,{children:`import { AvatarWithText } from '@/components/Avatar';

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
/>`}),e.jsxs(t.Principles,{children:[e.jsxs(t.PrincipleCard,{number:1,title:"Choose the variant that matches your information density",children:["Use ",e.jsx("code",{children:"name-only"})," for compact lists and dropdowns. Use ",e.jsx("code",{children:"w-subtext"})," ","when a supporting role or team name adds meaningful context. Reserve"," ",e.jsx("code",{children:"default"})," (name + email) for settings pages, contact cards, and member lists where the email address is actionable or verifiable."]}),e.jsxs(t.PrincipleCard,{number:2,title:"Match avatar size to layout density",children:["Use ",e.jsx("code",{children:"x-small"})," and ",e.jsx("code",{children:"small"})," in high-density tables and sidebars. Use ",e.jsx("code",{children:"default"})," for standard cards. Reserve ",e.jsx("code",{children:"large"})," ","for primary user tiles, profile headers, and modal contexts."]}),e.jsxs(t.PrincipleCard,{number:3,title:"Reserve statusIcon for presence-aware contexts",children:["The status indicator communicates real-time availability. Only attach"," ",e.jsx("code",{children:"statusIcon=true"})," where presence is actively managed and kept up-to-date — chat, video, or collaboration surfaces. Avoid it in static lists where the status cannot change."]}),e.jsx(t.PrincipleCard,{number:4,title:"Prefer circle for photos, square for initials or branded icons",children:"Circle avatars are the convention for profile photos across most contexts. Square (rounded-corner) avatars read well for initials or when the avatar sits in a structured grid or card layout."})]}),e.jsx(t.Footer,{})]});_.__docgenInfo={description:"",methods:[],displayName:"AvatarWithTextDocs"};const n="https://images.pexels.com/photos/35721587/pexels-photo-35721587.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",T="https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",o=["large","default","small","x-small"],ge=["name-only","w-subtext","default"],ye=["circle","square"],ve=["empty-state","profile-photo","initial-light","initial-dark"],je={title:"Atoms/AvatarWithText",component:r,parameters:{docs:{page:()=>e.jsx(_,{})}},argTypes:{variant:{control:"select",options:ge},size:{control:"select",options:o},shape:{control:"select",options:ye},avatarType:{control:"select",options:ve},statusIcon:{control:"boolean"},border:{control:"boolean"},name:{control:"text"},subtext:{control:"text"},email:{control:"text"},initials:{control:"text"},src:{control:"text"}},args:{variant:"name-only",size:"default",shape:"circle",avatarType:"profile-photo",statusIcon:!1,border:!1,name:"Willow Quinn",subtext:"Additional subtext (e.g role)",email:"willowquin@email.com",initials:"WQ",src:n}},x={name:"Documentation",render:()=>e.jsx(_,{}),parameters:{controls:{disable:!0},chromatic:{disableSnapshot:!0}}},h={name:"Playground",args:{variant:"w-subtext",size:"default",shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:T}},g={name:"Name Only",args:{variant:"name-only",size:"default",shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:n}},y={name:"With Subtext",args:{variant:"w-subtext",size:"default",shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:T}},v={name:"With Email",args:{variant:"default",size:"default",shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",email:"willowquin@email.com",src:n}},f={name:"All Sizes — With Subtext",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"16px"},children:o.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"60px",flexShrink:0},children:a}),e.jsx(r,{variant:"w-subtext",size:a,shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:T})]},a))})},b={name:"All Sizes — Name Only",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"16px"},children:o.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"60px",flexShrink:0},children:a}),e.jsx(r,{variant:"name-only",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:n})]},a))})},w={name:"All Sizes — With Email",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"16px"},children:o.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"60px",flexShrink:0},children:a}),e.jsx(r,{variant:"default",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",email:"willowquin@email.com",src:n})]},a))})},z={name:"All Variants × All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"16px"},children:o.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"48px",flexWrap:"wrap"},children:[e.jsx(r,{variant:"w-subtext",size:a,shape:"square",avatarType:"profile-photo",statusIcon:!0,name:"Damon Underwood",subtext:"Additional subtext (e.g role)",src:T}),e.jsx(r,{variant:"name-only",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",src:n}),e.jsx(r,{variant:"default",size:a,shape:"circle",avatarType:"profile-photo",name:"Willow Quinn",email:"willowquin@email.com",src:n})]},a))})};var O,D,q;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(D=x.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var I,N,E;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(N=h.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var k,P,M;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Name Only',
  args: {
    variant: 'name-only',
    size: 'default',
    shape: 'circle',
    avatarType: 'profile-photo',
    name: 'Willow Quinn',
    src: DEMO_PHOTO_WOMAN
  }
}`,...(M=(P=g.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var Q,C,F;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'With Subtext',
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
}`,...(F=(C=y.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var L,U,V;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'With Email',
  args: {
    variant: 'default',
    size: 'default',
    shape: 'circle',
    avatarType: 'profile-photo',
    name: 'Willow Quinn',
    email: 'willowquin@email.com',
    src: DEMO_PHOTO_WOMAN
  }
}`,...(V=(U=v.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var H,B,R;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(R=(B=f.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var Z,$,G;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(G=($=b.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var Y,J,K;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,ee,ae;z.parameters={...z.parameters,docs:{...(X=z.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'All Variants × All Sizes',
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
}`,...(ae=(ee=z.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const We=["Documentation","Playground","NameOnly","WithSubtext","WithEmail","AllSizesWithSubtext","AllSizesNameOnly","AllSizesWithEmail","AllVariantsAllSizes"];export{b as AllSizesNameOnly,w as AllSizesWithEmail,f as AllSizesWithSubtext,z as AllVariantsAllSizes,x as Documentation,g as NameOnly,h as Playground,v as WithEmail,y as WithSubtext,We as __namedExportsOrder,je as default};
