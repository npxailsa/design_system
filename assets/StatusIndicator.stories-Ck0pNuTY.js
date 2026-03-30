import{j as e}from"./iframe-D4WgZNJF.js";import{D as t}from"./DocsTemplate-C26vHHN9.js";import"./preload-helper-Dp1pzeXC.js";const G="_statusIndicator_8xihh_7",H="_dot_8xihh_26",J="_verifiedSvg_8xihh_64",Y="_verifiedCircle_8xihh_71",s={statusIndicator:G,dot:H,"status-away":"_status-away_8xihh_35","status-do-not-disturb":"_status-do-not-disturb_8xihh_41","status-online":"_status-online_8xihh_47","status-offline":"_status-offline_8xihh_53","status-verified":"_status-verified_8xihh_59",verifiedSvg:J,verifiedCircle:Y,"size-default":"_size-default_8xihh_76","size-large":"_size-large_8xihh_87","size-small":"_size-small_8xihh_98"},K={away:"Away","do-not-disturb":"Do not disturb",verified:"Verified",offline:"Offline",online:"Online"},r=({status:a="away",size:i="default",className:l="",ariaLabel:b})=>{const o=b??K[a],$=[s.statusIndicator,s[`status-${a}`],s[`size-${i}`],l].filter(Boolean).join(" ");return e.jsxs("div",{className:$,role:"img","aria-label":o,title:o,children:[a==="away"&&e.jsx("div",{className:s.dot}),a==="do-not-disturb"&&e.jsx("div",{className:s.dot}),a==="online"&&e.jsx("div",{className:s.dot}),a==="offline"&&e.jsx("div",{className:s.dot}),a==="verified"&&e.jsxs("svg",{className:s.verifiedSvg,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[e.jsx("circle",{cx:"8",cy:"8",r:"8",className:s.verifiedCircle}),e.jsx("path",{d:"M4.5 8.5L6.8 10.8L11.5 5.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]})};r.__docgenInfo={description:`StatusIndicator — A small presence dot badge used to communicate a user's
availability or verification state. Five statuses × three sizes.

Location: Foundation > Building Blocks > Status Indicator`,methods:[],displayName:"StatusIndicator",props:{status:{required:!1,tsType:{name:"union",raw:`| 'away'
| 'do-not-disturb'
| 'verified'
| 'offline'
| 'online'`,elements:[{name:"literal",value:"'away'"},{name:"literal",value:"'do-not-disturb'"},{name:"literal",value:"'verified'"},{name:"literal",value:"'offline'"},{name:"literal",value:"'online'"}]},description:"Presence status of the user",defaultValue:{value:"'away'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'default' | 'large' | 'small'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"},{name:"literal",value:"'small'"}]},description:"Dot size — default (14px), large (10px), small (8px)",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label override"}}};const v=[{status:"online",label:"Online",description:"User is active and available. Dark-green fill with light-green border."},{status:"away",label:"Away",description:"User is idle or stepped away. Yellow fill with pale-yellow border."},{status:"do-not-disturb",label:"Do Not Disturb",description:"User has silenced notifications. Red fill with light-red border."},{status:"offline",label:"Offline",description:"User is not connected. Gray-600 fill with gray-300 border."},{status:"verified",label:"Verified",description:"User or entity has been verified. Sky-blue circle with white checkmark — larger than dot statuses."}],h=[{size:"default",label:"Default",dotPx:"14 × 14 px",verifiedPx:"16 × 16 px",usage:"Standard avatar / profile tile (32–40 px avatars)"},{size:"large",label:"Large",dotPx:"10 × 10 px",verifiedPx:"12 × 12 px",usage:"Medium avatar overlays (24–28 px avatars)"},{size:"small",label:"Small",dotPx:"8 × 8 px",verifiedPx:"10 × 10 px",usage:"Dense lists, compact table cells, micro layouts"}],x=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Status Indicator",subtitle:"Small presence dot badge indicating a user's availability or verification state"}),e.jsxs(t.BodyText,{children:["The ",e.jsx("strong",{children:"Status Indicator"})," is a compact circular badge placed on or near an avatar to communicate availability. Five statuses cover the standard presence model — online, away, do-not-disturb, offline — plus a verified badge for authenticated identities. Three sizes let it scale proportionally with the avatar it accompanies."]}),e.jsxs(t.Section,{title:"Component Anatomy",children:[e.jsxs(t.BodyText,{children:["Dot statuses are a single circle element with a filled background and a coloured outline border. The ",e.jsx("strong",{children:"verified"})," status uses an SVG circle with an embedded white checkmark, rendered slightly larger to preserve legibility of the mark."]}),e.jsx(t.Anatomy,{preview:e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},children:v.map(({status:a})=>e.jsx(r,{status:a,size:"default"},a))}),parts:[{id:1,name:"Root container",token:`--status-indicator-size-default (14px)
--status-indicator-size-large (10px)
--status-indicator-size-small (8px)`,description:"Inline-flex wrapper that controls the outer dimensions. Aspect-ratio 1:1 is always enforced."},{id:2,name:"Dot fill",token:`--status-indicator-<status>-bg
(e.g. --status-indicator-online-bg)`,description:"Solid background colour identifying the status. Maps to a status semantic token."},{id:3,name:"Dot border",token:`--status-indicator-<status>-border
--status-indicator-border-width (2px)`,description:"Outline ring that provides contrast when the indicator overlaps an avatar or coloured surface. 2 px solid."},{id:4,name:"Verified badge",token:`--status-indicator-verified-bg (sky-blue)
--status-indicator-verified-check (white)`,description:"SVG circle + white checkmark path. Slightly larger than the equivalent dot size to keep the mark legible."}]})]}),e.jsxs(t.Section,{title:"Statuses",children:[e.jsx(t.BodyText,{children:"Each status maps to a distinct colour drawn from the global status colour palette. Use exactly the status that reflects the underlying user state — do not repurpose statuses for decorative colour."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",maxWidth:"560px"},children:v.map(({status:a,label:i,description:l})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"32px 100px 1fr",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(r,{status:a,size:"default"}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-base-black)"},children:i}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-light)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:l})]},a))})]}),e.jsxs(t.Section,{title:"Sizes",children:[e.jsx(t.BodyText,{children:"Three sizes allow the indicator to scale with the avatar it accompanies. Choose the size that maintains a proportional visual weight — the dot should be roughly 30–40 % of the avatar's diameter."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"40px 80px 100px 100px 1fr",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:["","Size","Dot (px)","Verified (px)","Typical usage"].map(a=>e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.05em"},children:a},a))}),h.map(({size:a,label:i,dotPx:l,verifiedPx:b,usage:o})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"40px 80px 100px 100px 1fr",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx(r,{status:"online",size:a}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-base-black)",textTransform:"capitalize"},children:i}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:l}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:b}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:o})]},a))]})]}),e.jsx(t.Section,{title:"All Statuses × All Sizes",children:e.jsx("div",{style:{display:"inline-flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",border:"var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-200)"},children:h.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",width:"52px",flexShrink:0,textTransform:"capitalize"},children:a}),v.map(({status:i})=>e.jsx(r,{status:i,size:a},i))]},a))})}),e.jsx(t.TokenTable,{title:"Design Tokens — Sizes",description:"Dot and verified badge dimensions per size:",tokens:[{name:"--status-indicator-size-default",description:"Default dot size — --global-spacing-sizing-14px (14px)"},{name:"--status-indicator-size-large",description:"Large dot size — --global-spacing-sizing-10px (10px)"},{name:"--status-indicator-size-small",description:"Small dot size — --global-spacing-sizing-8px (8px)"},{name:"--status-indicator-size-verified-default",description:"Default verified badge — --global-spacing-sizing-16px (16px)"},{name:"--status-indicator-size-verified-large",description:"Large verified badge — --global-spacing-sizing-12px (12px)"},{name:"--status-indicator-size-verified-small",description:"Small verified badge — --global-spacing-sizing-10px (10px)"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Structure",description:"Shared structural tokens:",tokens:[{name:"--status-indicator-border-width",description:"Border width — --global-spacing-stroke-2px (2px)"},{name:"--status-indicator-border-radius",description:"Border radius — --global-spacing-radius-full (full pill)"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Status Colours",description:"Colour tokens per status variant:",tokens:[{name:"--status-indicator-online-bg",description:"Online fill — --global-color-status-dark-green (#227F1A)"},{name:"--status-indicator-online-border",description:"Online border — --global-color-status-green (#96F78D)"},{name:"--status-indicator-away-bg",description:"Away fill — --global-color-primary-yellow (#F9C846)"},{name:"--status-indicator-away-border",description:"Away border — --global-color-primary-yellow-100 (#FEF4DA)"},{name:"--status-indicator-dnd-bg",description:"Do-not-disturb fill — --global-color-status-red (#CE2031)"},{name:"--status-indicator-dnd-border",description:"Do-not-disturb border — --global-color-status-red-light (#FBEBEB)"},{name:"--status-indicator-offline-bg",description:"Offline fill — --global-color-neutral-gray-600 (#4B5563)"},{name:"--status-indicator-offline-border",description:"Offline border — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--status-indicator-verified-bg",description:"Verified circle — --global-color-primary-sky-blue (#0BA7EA)"},{name:"--status-indicator-verified-check",description:"Verified checkmark — --global-color-base-white (#FFFFFF)"}]}),e.jsx(t.CodeBlock,{children:`import { StatusIndicator } from '@/components/BuildingBlocks/StatusIndicator';

// Basic usage
<StatusIndicator status="online" size="default" />
<StatusIndicator status="away" size="default" />
<StatusIndicator status="do-not-disturb" size="default" />
<StatusIndicator status="offline" size="default" />
<StatusIndicator status="verified" size="default" />

// Size variants
<StatusIndicator status="online" size="default" />  {/* 14px dot */}
<StatusIndicator status="online" size="large" />    {/* 10px dot */}
<StatusIndicator status="online" size="small" />    {/*  8px dot */}

// With accessible label
<StatusIndicator status="online" ariaLabel="Ailsa is online" />`}),e.jsxs(t.Principles,{children:[e.jsxs(t.PrincipleCard,{number:1,title:"Match size to avatar context",children:["Use ",e.jsx("code",{children:"default"})," (14 px) on standard 32–40 px avatars, ",e.jsx("code",{children:"large"})," (10 px) on smaller 24–28 px avatars, and ",e.jsx("code",{children:"small"})," (8 px) in dense lists or compact table cells where space is at a premium."]}),e.jsxs(t.PrincipleCard,{number:2,title:"Never repurpose status colours",children:['Each colour has a fixed semantic meaning. Do not use the yellow dot to mean something other than "away", or the red dot outside of "do not disturb". Use the',e.jsx("code",{children:"verified"})," badge only for genuine identity verification — not as a general-purpose check icon."]}),e.jsxs(t.PrincipleCard,{number:3,title:"Always provide an accessible label",children:["The dot is a visual-only element — sighted users associate colour with status, but screen-reader users need an explicit text alternative. Use the ",e.jsx("code",{children:"ariaLabel"}),"prop to provide context, e.g. ",e.jsx("code",{children:"'Jane is online'"})," rather than just",e.jsx("code",{children:"'online'"}),"."]})]}),e.jsx(t.Footer,{})]});x.__docgenInfo={description:"",methods:[],displayName:"StatusIndicatorDocs"};const Z=["away","do-not-disturb","verified","offline","online"],y=["default","large","small"],ae={title:"Foundation/Building Blocks/Status Indicator",component:r,parameters:{docs:{page:()=>e.jsx(x,{})}},argTypes:{status:{control:"select",options:Z},size:{control:"select",options:y}},args:{status:"online",size:"default"}},n={name:"Documentation",parameters:{docs:{page:()=>e.jsx(x,{})}},render:()=>e.jsx(x,{})},d={args:{status:"online",size:"default"}},c={args:{status:"away",size:"default"}},p={name:"Do Not Disturb",args:{status:"do-not-disturb",size:"default"}},u={args:{status:"verified",size:"default"}},g={args:{status:"offline",size:"default"}},m={name:"All States",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:y.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",width:"56px",flexShrink:0,textTransform:"capitalize"},children:a}),Z.map(i=>e.jsx(r,{status:i,size:a},i))]},a))})},f={render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:y.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[e.jsx(r,{status:"online",size:a}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",textTransform:"capitalize"},children:a})]},a))})};var z,S,j;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Documentation',
  parameters: {
    docs: {
      page: () => <StatusIndicatorDocs />
    }
  },
  render: () => <StatusIndicatorDocs />
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var w,k,D;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    status: 'online',
    size: 'default'
  }
}`,...(D=(k=d.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var _,I,T;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    status: 'away',
    size: 'default'
  }
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var A,F,L;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Do Not Disturb',
  args: {
    status: 'do-not-disturb',
    size: 'default'
  }
}`,...(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var B,C,E;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    status: 'verified',
    size: 'default'
  }
}`,...(E=(C=u.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var N,O,U;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: 'offline',
    size: 'default'
  }
}`,...(U=(O=g.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var V,P,W;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }}>
          {/* size label */}
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-600)',
        width: '56px',
        flexShrink: 0,
        textTransform: 'capitalize'
      }}>
            {size}
          </div>
          {/* dots */}
          {ALL_STATUSES.map(status => <StatusIndicator key={status} status={status} size={size} />)}
        </div>)}
    </div>
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var q,R,M;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  }}>
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px'
    }}>
          <StatusIndicator status="online" size={size} />
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-600)',
        textTransform: 'capitalize'
      }}>
            {size}
          </span>
        </div>)}
    </div>
}`,...(M=(R=f.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};const te=["Documentation","Online","Away","DoNotDisturb","Verified","Offline","AllStates","Sizes"];export{m as AllStates,c as Away,p as DoNotDisturb,n as Documentation,g as Offline,d as Online,f as Sizes,u as Verified,te as __namedExportsOrder,ae as default};
