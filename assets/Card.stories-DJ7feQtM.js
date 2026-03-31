import{j as e}from"./iframe-hBXqnm1g.js";import{D as r}from"./DocsTemplate-ChcWCJuK.js";import"./preload-helper-Dp1pzeXC.js";const te="_card_slbeb_6",s={card:te,"size-small":"_size-small_slbeb_40","size-default":"_size-default_slbeb_47","size-large":"_size-large_slbeb_54","shadow-true":"_shadow-true_slbeb_64","shadow-false":"_shadow-false_slbeb_69","bg-default":"_bg-default_slbeb_80","mode-light":"_mode-light_slbeb_80","mode-dark":"_mode-dark_slbeb_84","bg-sky-blue":"_bg-sky-blue_slbeb_90","bg-blue":"_bg-blue_slbeb_100","bg-error":"_bg-error_slbeb_106","bg-success":"_bg-success_slbeb_116","bg-warning":"_bg-warning_slbeb_127","bg-info-blue":"_bg-info-blue_slbeb_133","bg-note-purple":"_bg-note-purple_slbeb_139","bg-light-gray":"_bg-light-gray_slbeb_145","bg-black":"_bg-black_slbeb_151","bg-dark-gray":"_bg-dark-gray_slbeb_157"},l=({size:a="small",bg:o="default",mode:re="light",dropShadow:le=!0,children:oe,className:se=""})=>{const de=[s.card,s[`size-${a}`],s[`bg-${o}`],s[`mode-${re}`],le?s["shadow-true"]:s["shadow-false"],se].filter(Boolean).join(" ");return e.jsx("div",{className:de,children:oe})};l.__docgenInfo={description:`Card — Foundational surface building block with multiple colour themes,
three sizes, light/dark mode, and optional drop-shadow.

Location: Foundation/BuildingBlocks/Card`,methods:[],displayName:"Card",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size controls the container dimensions and inner padding",defaultValue:{value:"'small'",computed:!1}},bg:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'sky-blue'
| 'error'
| 'success'
| 'warning'
| 'info-blue'
| 'note-purple'
| 'light-gray'
| 'black'
| 'blue'
| 'dark-gray'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'sky-blue'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info-blue'"},{name:"literal",value:"'note-purple'"},{name:"literal",value:"'light-gray'"},{name:"literal",value:"'black'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'dark-gray'"}]},description:"Background colour theme.\nCombined with `mode` to determine the exact background and border colour.",defaultValue:{value:"'default'",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"Light or dark variant of the colour theme.\nAffects backgrounds for `default`, `error`, `success`, and `sky-blue / blue`.",defaultValue:{value:"'light'",computed:!1}},dropShadow:{required:!1,tsType:{name:"boolean"},description:`Whether the card carries a drop-shadow.
When false the border-width is increased to 1px and the shadow is removed.`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional child content rendered inside the card"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}}}};const x=["default","sky-blue","error","success","warning","info-blue","note-purple","light-gray","black","blue","dark-gray"],v=["small","default","large"],y={default:"Default (White)","sky-blue":"Sky Blue",error:"Error",success:"Success",warning:"Warning","info-blue":"Info Blue","note-purple":"Note Purple","light-gray":"Light Gray",black:"Black",blue:"Blue","dark-gray":"Dark Gray"},ie={display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},w=()=>e.jsxs(r,{children:[e.jsx(r.Header,{title:"Card",subtitle:"Foundational surface building block with 11 background themes, 3 sizes, light/dark mode, and optional drop-shadow."}),e.jsxs(r.BodyText,{children:["The ",e.jsx("strong",{children:"Card"})," is the base surface primitive used to create contained, visually distinct regions of the UI. It supports multiple background colour themes mapped directly to status and brand tokens, three sizes for layout flexibility, and a drop-shadow / flat-border toggle."]}),e.jsx(r.Section,{title:"Component Anatomy",children:e.jsx(r.Anatomy,{preview:e.jsxs("div",{style:ie,children:[e.jsx(l,{size:"large",bg:"default",dropShadow:!0}),e.jsx(l,{size:"large",bg:"sky-blue",dropShadow:!0}),e.jsx(l,{size:"large",bg:"error",mode:"light",dropShadow:!0})]}),parts:[{id:1,name:"Container",token:`--card-border-radius (6px)
--card-bg (white)`,description:"The outer card surface. Background, border colour, and radius are controlled by the bg + mode token pair."},{id:2,name:"Border",token:`--card-border-width (0.5px)
--card-border-color (gray-300)`,description:"A subtle border that reinforces the card edge. Thickens to 1px and changes colour when dropShadow=false."},{id:3,name:"Drop Shadow",token:"--card-shadow",description:"A soft diffuse shadow (0 5px 10px rgba(39,39,39,0.1)) applied when dropShadow=true. Removed entirely when false."},{id:4,name:"Content Slot",token:"--card-padding-sm / -default / -lg",description:"The inner area where child content is placed. Padding scales with the size prop."}]})}),e.jsxs(r.Section,{title:"Sizes",children:[e.jsx(r.BodyText,{children:"Three sizes scale both the container and the internal padding."}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:"var(--global-spacing-sizing-24px)"},children:v.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx(l,{size:a,bg:"default",dropShadow:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",textTransform:"capitalize"},children:a})]},a))})]}),e.jsxs(r.Section,{title:"Background Colours — Light Mode (with Shadow)",children:[e.jsx(r.BodyText,{children:"All 11 background themes in light mode with drop-shadow enabled."}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-8px)"},children:x.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-4px)"},children:[e.jsx(l,{size:"default",bg:a,mode:"light",dropShadow:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xxs)",color:"var(--global-color-neutral-gray-600)",textAlign:"center",maxWidth:"80px",lineHeight:"1.3"},children:y[a]})]},a))})]}),e.jsxs(r.Section,{title:"Background Colours — Light Mode (Flat / No Shadow)",children:[e.jsx(r.BodyText,{children:"Same themes with dropShadow disabled. Border-width increases to 1px."}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)",padding:"var(--global-spacing-sizing-16px)",background:"var(--global-color-neutral-gray-100)",borderRadius:"var(--global-spacing-radius-8px)"},children:x.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-4px)"},children:[e.jsx(l,{size:"default",bg:a,mode:"light",dropShadow:!1}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xxs)",color:"var(--global-color-neutral-gray-600)",textAlign:"center",maxWidth:"80px",lineHeight:"1.3"},children:y[a]})]},a))})]}),e.jsxs(r.Section,{title:"Dark Mode Variants",children:[e.jsx(r.BodyText,{children:'Themes that respond to mode="dark". The default, sky-blue, error, and success backgrounds flip to their darker counterparts.'}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",background:"var(--global-color-neutral-gray-800)",borderRadius:"var(--global-spacing-radius-8px)"},children:["default","sky-blue","error","success"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-4px)"},children:[e.jsx(l,{size:"default",bg:a,mode:"dark",dropShadow:!0}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xxs)",color:"var(--global-color-neutral-gray-400)",textAlign:"center"},children:y[a]})]},a))})]}),e.jsx(r.Section,{title:"All Sizes × All Colours (Light, with Shadow)",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)"},children:v.map(a=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-semibold)",color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize",marginBottom:"var(--global-spacing-sizing-12px)"},children:a}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-12px)"},children:x.map(o=>e.jsx(l,{size:a,bg:o,mode:"light",dropShadow:!0},o))})]},a))})}),e.jsx(r.TokenTable,{title:"Design Tokens — Sizes",description:"Container dimensions and internal padding per size:",tokens:[{name:"--card-size-sm",description:"Small container — 100 × 100px"},{name:"--card-size-default",description:"Default container — 140 × 140px"},{name:"--card-size-lg",description:"Large container — 180 × 180px"},{name:"--card-padding-sm",description:"Small padding — --global-spacing-sizing-16px (16px)"},{name:"--card-padding-default",description:"Default padding — --global-spacing-sizing-24px (24px)"},{name:"--card-padding-lg",description:"Large padding — --global-spacing-sizing-32px (32px)"}]}),e.jsx(r.TokenTable,{title:"Design Tokens — Structure",description:"Border, radius, and shadow:",tokens:[{name:"--card-border-radius",description:"Corner radius — --global-spacing-radius-6px (6px)"},{name:"--card-border-width",description:"Border width with shadow — 0.5px"},{name:"--card-border-width-flat",description:"Border width without shadow — --global-spacing-stroke-1px (1px)"},{name:"--card-border-color",description:"Default border colour — --global-color-neutral-gray-300"},{name:"--card-shadow",description:"Drop shadow — 0px 5px 10px 0px rgba(39,39,39,0.1)"}]}),e.jsx(r.TokenTable,{title:"Design Tokens — Background Colours",description:"Per-theme background tokens (light mode values shown):",tokens:[{name:"--card-bg-default",description:"White — --global-color-base-white"},{name:"--card-bg-sky-blue",description:"Sky Blue tint — --global-color-primary-sky-blue-50 (#F4FCFF)"},{name:"--card-bg-blue",description:"Primary Blue — --global-color-primary-blue (#2F42BD)"},{name:"--card-bg-error-light",description:"Error light — --global-color-status-red-light (#FBEBEB)"},{name:"--card-bg-error-dark",description:"Error dark — --global-color-status-red (#CE2031)"},{name:"--card-bg-success-light",description:"Success light — --global-color-status-green-light (#F2FFF1)"},{name:"--card-bg-success-dark",description:"Success dark — --global-color-status-dark-green (#227F1A)"},{name:"--card-bg-warning",description:"Warning — --global-color-status-orange-light (#FEF4DA)"},{name:"--card-bg-info-blue",description:"Info Blue — --global-color-status-info-blue-light (#F5FCFF)"},{name:"--card-bg-note-purple",description:"Note Purple — --global-color-status-purple-light (#FBF7FF)"},{name:"--card-bg-light-gray",description:"Light Gray — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--card-bg-black",description:"Black — --global-color-base-black (#1C1C1C)"},{name:"--card-bg-dark-gray",description:"Dark Gray — --global-color-neutral-gray-600 (#4B5563)"}]}),e.jsx(r.CodeBlock,{children:`import { Card } from '@/components/BuildingBlocks/Card';

// Default white card with shadow
<Card size="default" bg="default" dropShadow />

// Error card (light mode, with shadow)
<Card size="default" bg="error" mode="light" dropShadow />

// Success card (dark mode, flat / no shadow)
<Card size="large" bg="success" mode="dark" dropShadow={false} />

// Warning card with content
<Card size="large" bg="warning">
  <p>Card content goes here</p>
</Card>`}),e.jsxs(r.Principles,{children:[e.jsxs(r.PrincipleCard,{number:1,title:"Use semantic background themes",children:["Match the card bg to its content purpose. Use ",e.jsx("code",{children:"error"}),", ",e.jsx("code",{children:"warning"}),", and ",e.jsx("code",{children:"success"})," only when the card communicates a status. Use ",e.jsx("code",{children:"default"}),"(white) for neutral content and ",e.jsx("code",{children:"sky-blue"})," / ",e.jsx("code",{children:"info-blue"})," for informational or primary contexts."]}),e.jsxs(r.PrincipleCard,{number:2,title:"Shadow vs flat for surface hierarchy",children:["Use ",e.jsx("code",{children:"dropShadow=true"})," to elevate a card above the page surface — ideal for standalone tiles, modals, or panels. Use ",e.jsx("code",{children:"dropShadow=false"})," (flat) for cards nested inside another surface where additional elevation would create visual noise."]}),e.jsxs(r.PrincipleCard,{number:3,title:"Reserve dark mode for intentional contrast",children:["The ",e.jsx("code",{children:'mode="dark"'})," variants are designed for use on dark backgrounds or as strong visual anchors. Do not mix light and dark cards in the same group — keep mode consistent within a surface."]}),e.jsxs(r.PrincipleCard,{number:4,title:"Size to the content density",children:["The Card sets a fixed footprint — size it by the density of the layout around it, not by the amount of content inside. Use ",e.jsx("code",{children:"small"})," for decorative swatches and status indicators, ",e.jsx("code",{children:"default"})," for standard tiles, and ",e.jsx("code",{children:"large"}),"for prominent feature areas."]})]}),e.jsx(r.Footer,{})]});w.__docgenInfo={description:"",methods:[],displayName:"CardDocs"};const f=["default","sky-blue","error","success","warning","info-blue","note-purple","light-gray","black","blue","dark-gray"],ae=["small","default","large"],ne=["light","dark"],ue={title:"Foundation/BuildingBlocks/Card",component:l,parameters:{docs:{page:()=>e.jsx(w,{})}},argTypes:{size:{control:"select",options:ae},bg:{control:"select",options:f},mode:{control:"select",options:ne},dropShadow:{control:"boolean"}},args:{size:"default",bg:"default",mode:"light",dropShadow:!0}},d={name:"Documentation",render:()=>e.jsx(w,{})},t={name:"Playground"},i={name:"Size — Small",args:{size:"small",bg:"default",dropShadow:!0}},n={name:"Size — Default",args:{size:"default",bg:"default",dropShadow:!0}},c={name:"Size — Large",args:{size:"large",bg:"default",dropShadow:!0}},p={name:"With Shadow",args:{size:"default",bg:"default",dropShadow:!0}},g={name:"Flat (No Shadow)",args:{size:"default",bg:"default",dropShadow:!1}},u={name:"All Colours — Light + Shadow",render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",padding:"24px",background:"var(--global-color-neutral-gray-100)",borderRadius:"8px"},children:f.map(a=>e.jsx(l,{size:"default",bg:a,mode:"light",dropShadow:!0},a))})},m={name:"All Colours — Light + Flat",render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",padding:"24px",background:"var(--global-color-neutral-gray-100)",borderRadius:"8px"},children:f.map(a=>e.jsx(l,{size:"default",bg:a,mode:"light",dropShadow:!1},a))})},b={name:"Dark Mode Variants",render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px",padding:"24px",background:"var(--global-color-neutral-gray-800)",borderRadius:"8px"},children:["default","sky-blue","error","success"].map(a=>e.jsx(l,{size:"default",bg:a,mode:"dark",dropShadow:!0},a))})},h={name:"All Sizes × All Colours",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"16px"},children:ae.map(a=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"12px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize",marginBottom:"12px"},children:a}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px",alignItems:"flex-end"},children:f.map(o=>e.jsx(l,{size:a,bg:o,mode:"light",dropShadow:!0},o))})]},a))})};var k,S,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <CardDocs />
}`,...(z=(S=d.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var j,_,C;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Playground'
}`,...(C=(_=t.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var B,F,D;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Size — Small',
  args: {
    size: 'small',
    bg: 'default',
    dropShadow: true
  }
}`,...(D=(F=i.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var L,A,T;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Size — Default',
  args: {
    size: 'default',
    bg: 'default',
    dropShadow: true
  }
}`,...(T=(A=n.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var W,I,R;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Size — Large',
  args: {
    size: 'large',
    bg: 'default',
    dropShadow: true
  }
}`,...(R=(I=c.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var E,P,N;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'With Shadow',
  args: {
    size: 'default',
    bg: 'default',
    dropShadow: true
  }
}`,...(N=(P=p.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var G,V,M;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Flat (No Shadow)',
  args: {
    size: 'default',
    bg: 'default',
    dropShadow: false
  }
}`,...(M=(V=g.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var U,q,$;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'All Colours — Light + Shadow',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '24px',
    background: 'var(--global-color-neutral-gray-100)',
    borderRadius: '8px'
  }}>
      {ALL_BG.map(bg => <Card key={bg} size="default" bg={bg} mode="light" dropShadow />)}
    </div>
}`,...($=(q=u.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var H,O,Z;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'All Colours — Light + Flat',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '24px',
    background: 'var(--global-color-neutral-gray-100)',
    borderRadius: '8px'
  }}>
      {ALL_BG.map(bg => <Card key={bg} size="default" bg={bg} mode="light" dropShadow={false} />)}
    </div>
}`,...(Z=(O=m.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Dark Mode Variants',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '24px',
    background: 'var(--global-color-neutral-gray-800)',
    borderRadius: '8px'
  }}>
      {(['default', 'sky-blue', 'error', 'success'] as CardBg[]).map(bg => <Card key={bg} size="default" bg={bg} mode="dark" dropShadow />)}
    </div>
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,ee;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'All Sizes × All Colours',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '16px'
  }}>
      {ALL_SIZES.map(size => <div key={size}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '12px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-700)',
        textTransform: 'capitalize',
        marginBottom: '12px'
      }}>
            {size}
          </div>
          <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        alignItems: 'flex-end'
      }}>
            {ALL_BG.map(bg => <Card key={bg} size={size} bg={bg} mode="light" dropShadow />)}
          </div>
        </div>)}
    </div>
}`,...(ee=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};const me=["Documentation","Playground","Small","Default","Large","WithShadow","FlatNoBorder","AllColoursLightShadow","AllColoursLightFlat","DarkModeVariants","AllSizesAllColours"];export{m as AllColoursLightFlat,u as AllColoursLightShadow,h as AllSizesAllColours,b as DarkModeVariants,n as Default,d as Documentation,g as FlatNoBorder,c as Large,t as Playground,i as Small,p as WithShadow,me as __namedExportsOrder,ue as default};
