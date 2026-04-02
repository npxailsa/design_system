import{j as r,R as Lr}from"./iframe-l3fngHT5.js";import"./preload-helper-Dp1pzeXC.js";const l={"btn-error":"_btn-error_1box8_16","btn-error--small":"_btn-error--small_1box8_65","btn-error--large":"_btn-error--large_1box8_73","btn-error--solid":"_btn-error--solid_1box8_81","btn-error--disabled":"_btn-error--disabled_1box8_87","btn-error--loading":"_btn-error--loading_1box8_108","btn-error--ghost":"_btn-error--ghost_1box8_115","btn-error__icon":"_btn-error__icon_1box8_162","btn-error__label":"_btn-error__label_1box8_170","btn-error__spinner":"_btn-error__spinner_1box8_177","btn-error-spin":"_btn-error-spin_1box8_1"},wr=()=>r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M11.6663 4.03075L9.96884 2.33325L6.99967 5.30242L4.03051 2.33325L2.33301 4.03075L5.30217 6.99992L2.33301 9.96909L4.03051 11.6666L6.99967 8.69742L9.96884 11.6666L11.6663 9.96909L8.69717 6.99992L11.6663 4.03075Z",fill:"currentColor"})}),_r=()=>r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M13.3337 4.60675L11.3937 2.66675L8.00033 6.06008L4.60699 2.66675L2.66699 4.60675L6.06033 8.00008L2.66699 11.3934L4.60699 13.3334L8.00033 9.94008L11.3937 13.3334L13.3337 11.3934L9.94033 8.00008L13.3337 4.60675Z",fill:"currentColor"})}),kr=()=>r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M15 5.1825L12.8175 3L9 6.8175L5.1825 3L3 5.1825L6.8175 9L3 12.8175L5.1825 15L9 11.1825L12.8175 15L15 12.8175L11.1825 9L15 5.1825Z",fill:"currentColor"})}),Tr={small:wr,default:_r,large:kr},Cr=({size:e})=>r.jsx("span",{className:l["btn-error__spinner"],"aria-hidden":"true"}),t=({label:e="Error button",variant:a="solid",size:o="default",loading:s=!1,disabled:B=!1,type:fr="button",onClick:jr,className:Er="",ariaLabel:Sr})=>{const zr=Tr[o],Br=[l["btn-error"],l[`btn-error--${a}`],o!=="default"?l[`btn-error--${o}`]:"",s?l["btn-error--loading"]:"",B?l["btn-error--disabled"]:"",Er].filter(Boolean).join(" ");return r.jsxs("button",{type:fr,className:Br,onClick:!B&&!s?jr:void 0,disabled:B||s,"aria-label":Sr,"aria-busy":s||void 0,children:[s?r.jsx(Cr,{size:o}):r.jsx("span",{className:l["btn-error__icon"],children:r.jsx(zr,{})}),r.jsx("span",{className:l["btn-error__label"],children:e})]})};t.__docgenInfo={description:"ErrorButton — status-specific button for error and destructive actions.\n\nTwo variants:\n- `solid` — red filled background with white icon + label (primary CTA for error state)\n- `ghost` — white background with red border, red icon + label (secondary CTA)\n\nAll three sizes: `small`, `default`, `large`.\nSupports: loading, disabled, and all interactive states (hover, focus, active).\n\nStorybook: Atoms / Buttons / StatusButton / ErrorButton",methods:[],displayName:"ErrorButton",props:{label:{required:!1,tsType:{name:"string"},description:"Display label",defaultValue:{value:"'Error button'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'ghost'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'ghost'"}]},description:"Visual variant.\n- `solid` — red filled background, white text/icon\n- `ghost` — white background, red border & text/icon",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant — controls height, padding, font, and icon sizes",defaultValue:{value:"'default'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"Show loading spinner in place of the leading icon",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all interactions",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"HTML button type",defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Extra CSS class on the root element",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const i={marginBottom:"48px"},d={fontFamily:"var(--brand-font-primary)",fontSize:"22px",fontWeight:300,color:"var(--global-color-base-black)",margin:"0 0 8px",paddingBottom:"8px",borderBottom:"1px solid var(--global-color-neutral-gray-200)"},S={fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:300,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 12px"},c={fontFamily:"var(--brand-font-primary)",fontSize:"14px",fontWeight:300,lineHeight:"22px",color:"var(--global-color-neutral-gray-700)",margin:"0 0 16px"},p={display:"flex",flexWrap:"wrap",alignItems:"center",gap:"12px",marginBottom:"12px"},b={fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:300,color:"var(--global-color-neutral-gray-400)",textTransform:"uppercase",letterSpacing:"0.08em",minWidth:"56px"},z={background:"var(--global-color-neutral-gray-50)",border:"1px solid var(--global-color-neutral-gray-200)",borderRadius:"var(--global-spacing-radius-4px)",padding:"16px 20px",fontFamily:"monospace",fontSize:"13px",lineHeight:"22px",color:"var(--global-color-base-black)",overflowX:"auto",margin:"0 0 24px"},_={width:"100%",borderCollapse:"collapse",fontFamily:"var(--brand-font-primary)",fontSize:"13px",marginBottom:"24px"},n={textAlign:"left",fontWeight:300,color:"var(--global-color-neutral-gray-500)",padding:"8px 12px",borderBottom:"1px solid var(--global-color-neutral-gray-200)",background:"var(--global-color-neutral-gray-50)"},E={padding:"8px 12px",borderBottom:"1px solid var(--global-color-neutral-gray-100)",verticalAlign:"top",color:"var(--global-color-base-black)",fontWeight:300},L={...E,fontFamily:"monospace",fontSize:"12px",color:"var(--global-color-status-red)"},Dr={display:"inline-block",padding:"2px 8px",borderRadius:"var(--global-spacing-radius-full)",background:"var(--global-color-status-red-light)",color:"var(--global-color-status-red)",fontFamily:"monospace",fontSize:"11px",fontWeight:400},w=()=>r.jsxs("div",{style:{padding:"48px",maxWidth:"900px",fontFamily:"var(--brand-font-primary)"},children:[r.jsxs("div",{style:{marginBottom:"40px"},children:[r.jsx("h1",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"32px",fontWeight:300,margin:"0 0 8px",letterSpacing:"-0.5px"},children:"ErrorButton"}),r.jsxs("p",{style:{...c,fontSize:"16px"},children:["A status-specific button for error and destructive actions. Comes in two visual variants —",r.jsx("strong",{children:" solid"})," (red filled, white icon/text) and ",r.jsx("strong",{children:"ghost"})," (white background, red border and text). Use the solid variant as the primary CTA in error state cards, and the ghost variant as the secondary/dismiss CTA."]}),r.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"24px"},children:["Atoms","Buttons","StatusButton","ErrorButton"].map((e,a,o)=>r.jsxs(Lr.Fragment,{children:[r.jsx("span",{style:Dr,children:e}),a<o.length-1&&r.jsx("span",{style:{color:"var(--global-color-neutral-gray-400)",alignSelf:"center"},children:"›"})]},e))})]}),r.jsxs("div",{style:i,children:[r.jsx("h2",{style:d,children:"Variants"}),r.jsxs("p",{style:c,children:["Two variants are available. The ",r.jsx("code",{children:"solid"})," variant is the primary destructive action. The ",r.jsx("code",{children:"ghost"})," variant provides a secondary, lower-emphasis error action."]}),r.jsxs("div",{style:{display:"flex",gap:"40px",flexWrap:"wrap",marginBottom:"24px"},children:[r.jsxs("div",{children:[r.jsx("p",{style:S,children:"Solid"}),r.jsx(t,{variant:"solid",label:"Error button"})]}),r.jsxs("div",{children:[r.jsx("p",{style:S,children:"Ghost"}),r.jsx(t,{variant:"ghost",label:"Error button"})]})]}),r.jsx("pre",{style:z,children:`<ErrorButton variant="solid" label="Error button" />
<ErrorButton variant="ghost" label="Error button" />`})]}),r.jsxs("div",{style:i,children:[r.jsx("h2",{style:d,children:"Sizes"}),r.jsxs("p",{style:c,children:["Three sizes are available: ",r.jsx("code",{children:"small"})," (34px), ",r.jsx("code",{children:"default"})," (44px), and ",r.jsx("code",{children:"large"})," (56px)."]}),["solid","ghost"].map(e=>r.jsxs("div",{style:{marginBottom:"20px"},children:[r.jsx("p",{style:S,children:e}),r.jsxs("div",{style:p,children:[r.jsx("span",{style:b,children:"Small"}),r.jsx(t,{variant:e,size:"small",label:"Error button"})]}),r.jsxs("div",{style:p,children:[r.jsx("span",{style:b,children:"Default"}),r.jsx(t,{variant:e,size:"default",label:"Error button"})]}),r.jsxs("div",{style:p,children:[r.jsx("span",{style:b,children:"Large"}),r.jsx(t,{variant:e,size:"large",label:"Error button"})]})]},e)),r.jsx("pre",{style:z,children:`<ErrorButton size="small" label="Error button" />
<ErrorButton size="default" label="Error button" />
<ErrorButton size="large" label="Error button" />`})]}),r.jsxs("div",{style:i,children:[r.jsx("h2",{style:d,children:"States"}),r.jsxs("p",{style:c,children:["Both variants support ",r.jsx("code",{children:"loading"})," and ",r.jsx("code",{children:"disabled"})," states. Hover, active, and focus states are handled via CSS."]}),["solid","ghost"].map(e=>r.jsxs("div",{style:{marginBottom:"20px"},children:[r.jsx("p",{style:S,children:e}),r.jsxs("div",{style:p,children:[r.jsx("span",{style:b,children:"Default"}),r.jsx(t,{variant:e,label:"Error button"})]}),r.jsxs("div",{style:p,children:[r.jsx("span",{style:b,children:"Loading"}),r.jsx(t,{variant:e,label:"Error button",loading:!0})]}),r.jsxs("div",{style:p,children:[r.jsx("span",{style:b,children:"Disabled"}),r.jsx(t,{variant:e,label:"Error button",disabled:!0})]})]},e)),r.jsx("pre",{style:z,children:`<ErrorButton loading label="Error button" />
<ErrorButton disabled label="Error button" />`})]}),r.jsxs("div",{style:i,children:[r.jsx("h2",{style:d,children:"Paired Usage"}),r.jsxs("p",{style:c,children:["In ",r.jsx("strong",{children:"CardContent"})," error notifications, the solid variant is used as the primary CTA and the ghost variant as the secondary action. This pairing communicates urgency while providing a lower-risk exit path."]}),r.jsxs("div",{style:{display:"flex",gap:"8px",padding:"24px",background:"var(--global-color-status-red-light)",borderRadius:"var(--global-spacing-radius-6px)",marginBottom:"16px",border:"1px solid var(--global-color-status-red)"},children:[r.jsx(t,{variant:"solid",label:"Error button"}),r.jsx(t,{variant:"ghost",label:"Error button"})]}),r.jsx("pre",{style:z,children:`// Primary + secondary in error card
<ErrorButton variant="solid" label="Error button" />
<ErrorButton variant="ghost" label="Error button" />`})]}),r.jsxs("div",{style:i,children:[r.jsx("h2",{style:d,children:"Design Tokens"}),r.jsxs("p",{style:c,children:["All colours and borders use the ",r.jsx("code",{children:"--btn-error-*"})," token family defined in"," ",r.jsx("code",{children:"src/styles/tokens.css"}),". Layout tokens are shared with ",r.jsx("code",{children:"--btn-*"}),"."]}),r.jsxs("table",{style:_,children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:n,children:"Token"}),r.jsx("th",{style:n,children:"Value"}),r.jsx("th",{style:n,children:"Usage"})]})}),r.jsx("tbody",{children:[["--btn-error-solid-bg","--global-color-status-red","Solid variant background"],["--btn-error-solid-color","--global-color-base-white","Solid variant text/icon colour"],["--btn-error-solid-border-color","--global-color-status-red","Solid variant border colour"],["--btn-error-solid-border-width","--global-spacing-stroke-0-5px","Solid default border width"],["--btn-error-solid-border-width-hover","--global-spacing-stroke-2px","Solid hover/active border width"],["--btn-error-solid-shadow-hover","2px 2px 0px 0px base-black","Solid hover box-shadow"],["--btn-error-solid-border-width-focus","--global-spacing-stroke-2px","Solid focused border width"],["--btn-error-ghost-bg","--global-color-base-white","Ghost variant background"],["--btn-error-ghost-color","--global-color-status-red","Ghost variant text/icon colour"],["--btn-error-ghost-border-color","--global-color-status-red","Ghost variant border colour"],["--btn-error-ghost-border-width","--global-spacing-stroke-1px","Ghost default border width"],["--btn-error-ghost-border-width-hover","--global-spacing-stroke-2px","Ghost hover/active border width"],["--btn-error-ghost-shadow-hover","2px 2px 0px 0px base-black","Ghost hover box-shadow"],["--btn-error-ghost-border-width-focus","--global-spacing-stroke-2px","Ghost focused border width"],["--btn-error-bg-disabled","--global-color-neutral-gray-100","Disabled background (both)"],["--btn-error-color-disabled","--global-color-neutral-gray-400","Disabled text/icon colour (both)"],["--btn-error-border-color-disabled","--global-color-neutral-gray-400","Disabled border colour (both)"],["--btn-error-border-width-disabled","--global-spacing-stroke-0-5px","Disabled border width (both)"]].map(([e,a,o])=>r.jsxs("tr",{children:[r.jsx("td",{style:L,children:e}),r.jsx("td",{style:L,children:a}),r.jsx("td",{style:E,children:o})]},e))})]})]}),r.jsxs("div",{style:i,children:[r.jsx("h2",{style:d,children:"Props"}),r.jsxs("table",{style:_,children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{style:n,children:"Prop"}),r.jsx("th",{style:n,children:"Type"}),r.jsx("th",{style:n,children:"Default"}),r.jsx("th",{style:n,children:"Description"})]})}),r.jsx("tbody",{children:[["label","string",'"Error button"',"Button text"],["variant",'"solid" | "ghost"','"solid"',"Visual style — filled red or ghost outline"],["size",'"small" | "default" | "large"','"default"',"Controls height, padding, font, and icon size"],["loading","boolean","false","Shows spinner, disables interaction"],["disabled","boolean","false","Grays out button, disables interaction"],["type",'"button" | "submit" | "reset"','"button"',"HTML button type attribute"],["onClick","(e) => void","—","Click handler"],["className","string",'""',"Additional CSS class(es) on the root element"],["ariaLabel","string","—","Accessible label override"]].map(([e,a,o,s])=>r.jsxs("tr",{children:[r.jsx("td",{style:L,children:e}),r.jsx("td",{style:{...E,fontFamily:"monospace",fontSize:"12px"},children:a}),r.jsx("td",{style:{...E,fontFamily:"monospace",fontSize:"12px",color:"var(--global-color-neutral-gray-500)"},children:o}),r.jsx("td",{style:E,children:s})]},e))})]})]})]});w.__docgenInfo={description:"",methods:[],displayName:"ErrorButtonDocs"};const Wr={title:"Atoms/Buttons/StatusButton/ErrorButton",component:t,parameters:{layout:"centered",docs:{page:()=>r.jsx(w,{})}},argTypes:{variant:{control:"select",options:["solid","ghost"],description:"Visual style — solid (filled red) or ghost (outline)"},size:{control:"select",options:["small","default","large"]},label:{control:"text"},loading:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},u={render:()=>r.jsx(w,{}),parameters:{layout:"fullscreen",controls:{disable:!0},actions:{disable:!0}}},g={args:{label:"Error button",variant:"solid",size:"default",loading:!1,disabled:!1}},x={args:{label:"Error button",variant:"solid",size:"default"}},h={args:{label:"Error button",variant:"ghost",size:"default"}},m={render:()=>r.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",padding:"16px"},children:[r.jsx(t,{variant:"solid",label:"Error button"}),r.jsx(t,{variant:"ghost",label:"Error button"})]}),parameters:{controls:{disable:!0}}},y={render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"24px"},children:["solid","ghost"].map(e=>r.jsxs("div",{children:[r.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 10px"},children:e}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[r.jsx(t,{variant:e,size:"small",label:"Error button"}),r.jsx(t,{variant:e,size:"default",label:"Error button"}),r.jsx(t,{variant:e,size:"large",label:"Error button"})]})]},e))}),parameters:{layout:"padded",controls:{disable:!0}}},v={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px"},children:[r.jsx(t,{variant:"solid",size:"small",label:"Error button",loading:!0}),r.jsx(t,{variant:"solid",size:"default",label:"Error button",loading:!0}),r.jsx(t,{variant:"solid",size:"large",label:"Error button",loading:!0}),r.jsx(t,{variant:"ghost",size:"small",label:"Error button",loading:!0}),r.jsx(t,{variant:"ghost",size:"default",label:"Error button",loading:!0}),r.jsx(t,{variant:"ghost",size:"large",label:"Error button",loading:!0})]}),parameters:{controls:{disable:!0}}},f={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",padding:"16px"},children:[r.jsx(t,{variant:"solid",size:"small",label:"Label",disabled:!0}),r.jsx(t,{variant:"solid",size:"default",label:"Label",disabled:!0}),r.jsx(t,{variant:"solid",size:"large",label:"Label",disabled:!0}),r.jsx(t,{variant:"ghost",size:"small",label:"Label",disabled:!0}),r.jsx(t,{variant:"ghost",size:"default",label:"Label",disabled:!0}),r.jsx(t,{variant:"ghost",size:"large",label:"Label",disabled:!0})]}),parameters:{controls:{disable:!0}}},j={render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"32px"},children:["solid","ghost"].map(e=>r.jsxs("div",{children:[r.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:300,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.08em",margin:"0 0 16px",borderBottom:"1px solid var(--global-color-neutral-gray-200)",paddingBottom:"8px"},children:e}),r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:["small","default","large"].map(a=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",flexWrap:"wrap"},children:[r.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-400)",minWidth:"52px",textTransform:"capitalize"},children:a}),r.jsx(t,{variant:e,size:a,label:"Error button"}),r.jsx(t,{variant:e,size:a,label:"Error button",loading:!0}),r.jsx(t,{variant:e,size:a,label:"Label",disabled:!0})]},a))})]},e))}),parameters:{layout:"padded",controls:{disable:!0}}};var k,T,C,D,A;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <ErrorButtonDocs />,
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(C=(T=u.parameters)==null?void 0:T.docs)==null?void 0:C.source},description:{story:"Full documentation — design specs, token table, and usage examples.",...(A=(D=u.parameters)==null?void 0:D.docs)==null?void 0:A.description}}};var F,W,I,V,G;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Error button',
    variant: 'solid',
    size: 'default',
    loading: false,
    disabled: false
  }
}`,...(I=(W=g.parameters)==null?void 0:W.docs)==null?void 0:I.source},description:{story:"Interactive playground — adjust all props via the Controls panel.",...(G=(V=g.parameters)==null?void 0:V.docs)==null?void 0:G.description}}};var M,N,q,R,H;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Error button',
    variant: 'solid',
    size: 'default'
  }
}`,...(q=(N=x.parameters)==null?void 0:N.docs)==null?void 0:q.source},description:{story:`Solid variant — filled red background, white text and icon.
Use as the primary CTA in error state components.`,...(H=(R=x.parameters)==null?void 0:R.docs)==null?void 0:H.description}}};var P,U,O,Z,$;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Error button',
    variant: 'ghost',
    size: 'default'
  }
}`,...(O=(U=h.parameters)==null?void 0:U.docs)==null?void 0:O.source},description:{story:`Ghost / alt variant — white background, red border and text.
Use as the secondary CTA alongside the solid error button.`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};var X,J,K,Q,Y;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    padding: '16px'
  }}>
      <ErrorButton variant="solid" label="Error button" />
      <ErrorButton variant="ghost" label="Error button" />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Both variants side by side — as they appear in an error CardContent ButtonGroup.",...(Y=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Y.description}}};var rr,er,tr,ar,or;y.parameters={...y.parameters,docs:{...(rr=y.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '24px'
  }}>
      {(['solid', 'ghost'] as const).map(variant => <div key={variant}>
          <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-400)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: '0 0 10px'
      }}>
            {variant}
          </p>
          <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
            <ErrorButton variant={variant} size="small" label="Error button" />
            <ErrorButton variant={variant} size="default" label="Error button" />
            <ErrorButton variant={variant} size="large" label="Error button" />
          </div>
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(tr=(er=y.parameters)==null?void 0:er.docs)==null?void 0:tr.source},description:{story:"All three sizes — small (34px), default (44px), large (56px).",...(or=(ar=y.parameters)==null?void 0:ar.docs)==null?void 0:or.description}}};var lr,sr,nr,ir,dr;v.parameters={...v.parameters,docs:{...(lr=v.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px'
  }}>
      <ErrorButton variant="solid" size="small" label="Error button" loading />
      <ErrorButton variant="solid" size="default" label="Error button" loading />
      <ErrorButton variant="solid" size="large" label="Error button" loading />
      <ErrorButton variant="ghost" size="small" label="Error button" loading />
      <ErrorButton variant="ghost" size="default" label="Error button" loading />
      <ErrorButton variant="ghost" size="large" label="Error button" loading />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(nr=(sr=v.parameters)==null?void 0:sr.docs)==null?void 0:nr.source},description:{story:"Loading state — spinner replaces the leading icon.",...(dr=(ir=v.parameters)==null?void 0:ir.docs)==null?void 0:dr.description}}};var cr,pr,br,ur,gr;f.parameters={...f.parameters,docs:{...(cr=f.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    padding: '16px'
  }}>
      <ErrorButton variant="solid" size="small" label="Label" disabled />
      <ErrorButton variant="solid" size="default" label="Label" disabled />
      <ErrorButton variant="solid" size="large" label="Label" disabled />
      <ErrorButton variant="ghost" size="small" label="Label" disabled />
      <ErrorButton variant="ghost" size="default" label="Label" disabled />
      <ErrorButton variant="ghost" size="large" label="Label" disabled />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(br=(pr=f.parameters)==null?void 0:pr.docs)==null?void 0:br.source},description:{story:"Disabled state — grey background, grey text, not interactive.",...(gr=(ur=f.parameters)==null?void 0:ur.docs)==null?void 0:gr.description}}};var xr,hr,mr,yr,vr;j.parameters={...j.parameters,docs:{...(xr=j.parameters)==null?void 0:xr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '32px'
  }}>
      {(['solid', 'ghost'] as const).map(variant => <div key={variant}>
          <p style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '13px',
        fontWeight: 300,
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        margin: '0 0 16px',
        borderBottom: '1px solid var(--global-color-neutral-gray-200)',
        paddingBottom: '8px'
      }}>
            {variant}
          </p>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
            {(['small', 'default', 'large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
                <span style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            color: 'var(--global-color-neutral-gray-400)',
            minWidth: '52px',
            textTransform: 'capitalize'
          }}>
                  {size}
                </span>
                <ErrorButton variant={variant} size={size} label="Error button" />
                <ErrorButton variant={variant} size={size} label="Error button" loading />
                <ErrorButton variant={variant} size={size} label="Label" disabled />
              </div>)}
          </div>
        </div>)}
    </div>,
  parameters: {
    layout: 'padded',
    controls: {
      disable: true
    }
  }
}`,...(mr=(hr=j.parameters)==null?void 0:hr.docs)==null?void 0:mr.source},description:{story:"Full state matrix — all combinations of variant × size × state.",...(vr=(yr=j.parameters)==null?void 0:yr.docs)==null?void 0:vr.description}}};const Ir=["Documentation","Playground","Solid","Ghost","BothVariants","Sizes","Loading","Disabled","AllStates"];export{j as AllStates,m as BothVariants,f as Disabled,u as Documentation,h as Ghost,v as Loading,g as Playground,y as Sizes,x as Solid,Ir as __namedExportsOrder,Wr as default};
