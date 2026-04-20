import{j as e}from"./iframe-C-rm1-E5.js";import{S as s}from"./StatusIndicator-CylV43v4.js";import{D as t}from"./DocsTemplate-Ivs1_-l2.js";import"./preload-helper-Dp1pzeXC.js";const h=[{status:"online",label:"Online",description:"User is active and available. Dark-green fill with light-green border."},{status:"away",label:"Away",description:"User is idle or stepped away. Yellow fill with pale-yellow border."},{status:"do-not-disturb",label:"Do Not Disturb",description:"User has silenced notifications. Red fill with light-red border."},{status:"offline",label:"Offline",description:"User is not connected. Gray-600 fill with gray-300 border."},{status:"verified",label:"Verified",description:"User or entity has been verified. Sky-blue circle with white checkmark — larger than dot statuses."}],v=[{size:"default",label:"Default",dotPx:"14 × 14 px",verifiedPx:"16 × 16 px",usage:"Standard avatar / profile tile (32–40 px avatars)"},{size:"large",label:"Large",dotPx:"10 × 10 px",verifiedPx:"12 × 12 px",usage:"Medium avatar overlays (24–28 px avatars)"},{size:"small",label:"Small",dotPx:"8 × 8 px",verifiedPx:"10 × 10 px",usage:"Dense lists, compact table cells, micro layouts"}],y=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Status Indicator",subtitle:"Small presence dot badge indicating a user's availability or verification state"}),e.jsxs(t.BodyText,{children:["The ",e.jsx("strong",{children:"Status Indicator"})," is a compact circular badge placed on or near an avatar to communicate availability. Five statuses cover the standard presence model — online, away, do-not-disturb, offline — plus a verified badge for authenticated identities. Three sizes let it scale proportionally with the avatar it accompanies."]}),e.jsxs(t.Section,{title:"MUI Foundation",children:[e.jsxs(t.BodyText,{children:["The StatusIndicator is a ",e.jsx("strong",{children:"pure React component"})," with no MUI base. It renders as a plain ",e.jsx("code",{children:"<span>"})," circle (dot statuses) or an inline"," ",e.jsx("code",{children:"<svg>"})," (verified badge), driven entirely by CSS Modules and the"," ",e.jsx("code",{children:"--status-indicator-*"})," token family. No MUI component is needed for a static badge — this keeps the building block lightweight and free from MUI style interference. It is typically composed with the ",e.jsx("strong",{children:"Avatar"})," component (which uses MUI's ",e.jsx("code",{children:"MuiAvatar"}),") to create presence-aware user tiles."]}),e.jsx(t.CodeBlock,{children:`// No MUI base import required
// StatusIndicator renders as:
// Dot:     <span className={styles['status-indicator']} data-status={status} data-size={size} />
// Verified: <svg ...> (inline checkmark SVG)`})]}),e.jsxs(t.Section,{title:"Component Anatomy",children:[e.jsxs(t.BodyText,{children:["Dot statuses are a single circle element with a filled background and a coloured outline border. The ",e.jsx("strong",{children:"verified"})," status uses an SVG circle with an embedded white checkmark, rendered slightly larger to preserve legibility of the mark."]}),e.jsx(t.Anatomy,{preview:e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},children:h.map(({status:a})=>e.jsx(s,{status:a,size:"default"},a))}),parts:[{id:1,name:"Root container",token:`--status-indicator-size-default (14px)
--status-indicator-size-large (10px)
--status-indicator-size-small (8px)`,description:"Inline-flex wrapper that controls the outer dimensions. Aspect-ratio 1:1 is always enforced."},{id:2,name:"Dot fill",token:`--status-indicator-<status>-bg
(e.g. --status-indicator-online-bg)`,description:"Solid background colour identifying the status. Maps to a status semantic token."},{id:3,name:"Dot border",token:`--status-indicator-<status>-border
--status-indicator-border-width (2px)`,description:"Outline ring that provides contrast when the indicator overlaps an avatar or coloured surface. 2 px solid."},{id:4,name:"Verified badge",token:`--status-indicator-verified-bg (sky-blue)
--status-indicator-verified-check (white)`,description:"SVG circle + white checkmark path. Slightly larger than the equivalent dot size to keep the mark legible."}]})]}),e.jsxs(t.Section,{title:"Statuses",children:[e.jsx(t.BodyText,{children:"Each status maps to a distinct colour drawn from the global status colour palette. Use exactly the status that reflects the underlying user state — do not repurpose statuses for decorative colour."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)",maxWidth:"560px"},children:h.map(({status:a,label:i,description:r})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"32px 100px 1fr",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(s,{status:a,size:"default"}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-base-black)"},children:i}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-light)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:r})]},a))})]}),e.jsxs(t.Section,{title:"Sizes",children:[e.jsx(t.BodyText,{children:"Three sizes allow the indicator to scale with the avatar it accompanies. Choose the size that maintains a proportional visual weight — the dot should be roughly 30–40 % of the avatar's diameter."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-12px)"},children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"40px 80px 100px 100px 1fr",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:["","Size","Dot (px)","Verified (px)","Typical usage"].map(a=>e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-neutral-gray-700)",textTransform:"uppercase",letterSpacing:"0.05em"},children:a},a))}),v.map(({size:a,label:i,dotPx:r,verifiedPx:re,usage:ne})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"40px 80px 100px 100px 1fr",gap:"var(--global-spacing-sizing-16px)",alignItems:"center"},children:[e.jsx(s,{status:"online",size:a}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-base-black)",textTransform:"capitalize"},children:i}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:r}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:re}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:ne})]},a))]})]}),e.jsx(t.Section,{title:"All Statuses × All Sizes",children:e.jsx("div",{style:{display:"inline-flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",border:"var(--global-spacing-stroke-1px) solid var(--global-color-neutral-gray-200)"},children:v.map(({size:a,label:i})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",width:"52px",flexShrink:0,textTransform:"capitalize"},children:i}),h.map(({status:r})=>e.jsx(s,{status:r,size:a},r))]},a))})}),e.jsx(t.TokenTable,{title:"Design Tokens — Sizes",description:"Dot and verified badge dimensions per size:",tokens:[{name:"--status-indicator-size-default",description:"Default dot size — --global-spacing-sizing-14px (14px)"},{name:"--status-indicator-size-large",description:"Large dot size — --global-spacing-sizing-10px (10px)"},{name:"--status-indicator-size-small",description:"Small dot size — --global-spacing-sizing-8px (8px)"},{name:"--status-indicator-size-verified-default",description:"Default verified badge — --global-spacing-sizing-16px (16px)"},{name:"--status-indicator-size-verified-large",description:"Large verified badge — --global-spacing-sizing-12px (12px)"},{name:"--status-indicator-size-verified-small",description:"Small verified badge — --global-spacing-sizing-10px (10px)"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Structure",description:"Shared structural tokens:",tokens:[{name:"--status-indicator-border-width",description:"Border width — --global-spacing-stroke-2px (2px)"},{name:"--status-indicator-border-radius",description:"Border radius — --global-spacing-radius-full (full pill)"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Status Colours",description:"Colour tokens per status variant:",tokens:[{name:"--status-indicator-online-bg",description:"Online fill — --global-color-status-dark-green (#227F1A)"},{name:"--status-indicator-online-border",description:"Online border — --global-color-status-green (#96F78D)"},{name:"--status-indicator-away-bg",description:"Away fill — --global-color-primary-yellow (#F9C846)"},{name:"--status-indicator-away-border",description:"Away border — --global-color-primary-yellow-100 (#FEF4DA)"},{name:"--status-indicator-dnd-bg",description:"Do-not-disturb fill — --global-color-status-red (#CE2031)"},{name:"--status-indicator-dnd-border",description:"Do-not-disturb border — --global-color-status-red-light (#FBEBEB)"},{name:"--status-indicator-offline-bg",description:"Offline fill — --global-color-neutral-gray-600 (#4B5563)"},{name:"--status-indicator-offline-border",description:"Offline border — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--status-indicator-verified-bg",description:"Verified circle — --global-color-primary-sky-blue (#0BA7EA)"},{name:"--status-indicator-verified-check",description:"Verified checkmark — --global-color-base-white (#FFFFFF)"}]}),e.jsx(t.CodeBlock,{children:`import { StatusIndicator } from '@/components/BuildingBlocks/StatusIndicator';

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
<StatusIndicator status="online" ariaLabel="Ailsa is online" />`}),e.jsxs(t.Principles,{children:[e.jsxs(t.PrincipleCard,{number:1,title:"Match size to avatar context",children:["Use ",e.jsx("code",{children:"default"})," (14 px) on standard 32–40 px avatars, ",e.jsx("code",{children:"large"})," (10 px) on smaller 24–28 px avatars, and ",e.jsx("code",{children:"small"})," (8 px) in dense lists or compact table cells where space is at a premium."]}),e.jsxs(t.PrincipleCard,{number:2,title:"Never repurpose status colours",children:['Each colour has a fixed semantic meaning. Do not use the yellow dot to mean something other than "away", or the red dot outside of "do not disturb". Use the',e.jsx("code",{children:"verified"})," badge only for genuine identity verification — not as a general-purpose check icon."]}),e.jsxs(t.PrincipleCard,{number:3,title:"Always provide an accessible label",children:["The dot is a visual-only element — sighted users associate colour with status, but screen-reader users need an explicit text alternative. Use the ",e.jsx("code",{children:"ariaLabel"}),"prop to provide context, e.g. ",e.jsx("code",{children:"'Jane is online'"})," rather than just",e.jsx("code",{children:"'online'"}),"."]})]}),e.jsx(t.Footer,{})]});y.__docgenInfo={description:"",methods:[],displayName:"StatusIndicatorDocs"};const se=["away","do-not-disturb","verified","offline","online"],ie=["default","large","small"],pe={title:"Foundation/BuildingBlocks/Status Indicator",component:s,parameters:{docs:{page:()=>e.jsx(y,{})}},argTypes:{status:{control:"select",options:se},size:{control:"select",options:ie}},args:{status:"online",size:"default"}},n={name:"Documentation",parameters:{docs:{page:()=>e.jsx(y,{})},controls:{disable:!0},chromatic:{disableSnapshot:!0}},render:()=>e.jsx(y,{})},l={name:"Playground",args:{status:"online",size:"default"}},o={name:"Default",args:{status:"online",size:"default"}},d={name:"Sizes",render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",padding:"16px",alignItems:"center"},children:[e.jsx(s,{status:"online",size:"small"}),e.jsx(s,{status:"online",size:"default"}),e.jsx(s,{status:"online",size:"large"})]}),parameters:{controls:{disable:!0}}},c={name:"Status / Online",args:{status:"online",size:"default"}},p={name:"Status / Away",args:{status:"away",size:"default"}},u={name:"Status / Do Not Disturb",args:{status:"do-not-disturb",size:"default"}},g={name:"Status / Verified",args:{status:"verified",size:"default"}},m={name:"Status / Offline",args:{status:"offline",size:"default"}},f={name:"Component Breakdown",render:()=>e.jsx("div",{style:{display:"flex",gap:"24px",padding:"24px",flexWrap:"wrap",alignItems:"flex-start"},children:["online","away","do-not-disturb","verified","offline"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",alignItems:"center"},children:[e.jsx(s,{status:a,size:"default"}),e.jsx("span",{style:{fontSize:"10px",fontFamily:"var(--brand-font-secondary)",color:"var(--global-color-neutral-gray-600)"},children:a})]},a))}),parameters:{controls:{disable:!0}}},x={name:"All Interactive States",render:()=>e.jsx("div",{style:{display:"flex",gap:"16px",padding:"24px",flexWrap:"wrap",alignItems:"center"},children:["online","away","do-not-disturb","verified","offline"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",alignItems:"center"},children:[e.jsx(s,{status:a,size:"default"}),e.jsx("span",{style:{fontSize:"9px",color:"var(--global-color-neutral-gray-400)",fontFamily:"var(--brand-font-secondary)"},children:a})]},a))}),parameters:{controls:{disable:!0}}},b={name:"Full Design Matrix (15 variants)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:ie.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px"},children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",width:"56px",flexShrink:0,textTransform:"capitalize"},children:a}),se.map(i=>e.jsx(s,{status:i,size:a},i))]},a))})};var S,z,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Documentation',
  parameters: {
    docs: {
      page: () => <StatusIndicatorDocs />
    },
    controls: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  },
  render: () => <StatusIndicatorDocs />
}`,...(j=(z=n.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var w,k,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    status: 'online',
    size: 'default'
  }
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var D,T,A;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    status: 'online',
    size: 'default'
  }
}`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var F,B,C;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '16px',
    alignItems: 'center'
  }}>
      <StatusIndicator status="online" size="small" />
      <StatusIndicator status="online" size="default" />
      <StatusIndicator status="online" size="large" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var U,L,O;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Status / Online',
  args: {
    status: 'online',
    size: 'default'
  }
}`,...(O=(L=c.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var E,M,P;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Status / Away',
  args: {
    status: 'away',
    size: 'default'
  }
}`,...(P=(M=p.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var V,N,W;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Status / Do Not Disturb',
  args: {
    status: 'do-not-disturb',
    size: 'default'
  }
}`,...(W=(N=u.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var _,R,G;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Status / Verified',
  args: {
    status: 'verified',
    size: 'default'
  }
}`,...(G=(R=g.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var H,Z,q;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Status / Offline',
  args: {
    status: 'offline',
    size: 'default'
  }
}`,...(q=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:q.source}}};var $,J,Y;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    padding: '24px',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }}>
      {(['online', 'away', 'do-not-disturb', 'verified', 'offline'] as const).map(status => <div key={status} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      alignItems: 'center'
    }}>
          <StatusIndicator status={status} size="default" />
          <span style={{
        fontSize: '10px',
        fontFamily: 'var(--brand-font-secondary)',
        color: 'var(--global-color-neutral-gray-600)'
      }}>{status}</span>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var K,Q,X;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    padding: '24px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      {(['online', 'away', 'do-not-disturb', 'verified', 'offline'] as const).map(s => <div key={s} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      alignItems: 'center'
    }}>
          <StatusIndicator status={s} size="default" />
          <span style={{
        fontSize: '9px',
        color: 'var(--global-color-neutral-gray-400)',
        fontFamily: 'var(--brand-font-secondary)'
      }}>{s}</span>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,ae,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Full Design Matrix (15 variants)',
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
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const ue=["Documentation","Playground","Default","Sizes","StatusOnline","StatusAway","StatusDoNotDisturb","StatusVerified","StatusOffline","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{x as AllInteractiveStates,f as ComponentBreakdown,o as Default,n as Documentation,b as FullDesignMatrix,l as Playground,d as Sizes,p as StatusAway,u as StatusDoNotDisturb,m as StatusOffline,c as StatusOnline,g as StatusVerified,ue as __namedExportsOrder,pe as default};
