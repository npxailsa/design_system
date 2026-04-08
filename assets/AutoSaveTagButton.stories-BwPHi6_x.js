import{j as a}from"./iframe-gNs2dAHB.js";import{S as oa}from"./SaveOutlined-CiVC8hQ-.js";import{D as e}from"./DocsTemplate-Q-DC__kG.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-DlR4kCEO.js";const s={"autosave-tag":"_autosave-tag_1p8wz_12","autosave-tag__btn":"_autosave-tag__btn_1p8wz_29","autosave-tag__btn--default":"_autosave-tag__btn--default_1p8wz_71","autosave-tag__btn--auto-saving":"_autosave-tag__btn--auto-saving_1p8wz_78","autosave-tag__btn--saving":"_autosave-tag__btn--saving_1p8wz_85","autosave-tag__btn--saved":"_autosave-tag__btn--saved_1p8wz_94","autosave-tag__btn--error":"_autosave-tag__btn--error_1p8wz_104","autosave-tag__btn--disabled":"_autosave-tag__btn--disabled_1p8wz_114","autosave-tag__btn--focused":"_autosave-tag__btn--focused_1p8wz_129","autosave-tag__icon":"_autosave-tag__icon_1p8wz_150","autosave-tag__icon-svg":"_autosave-tag__icon-svg_1p8wz_157","autosave-tag__label":"_autosave-tag__label_1p8wz_163","autosave-tag__tag":"_autosave-tag__tag_1p8wz_173","autosave-tag__tag--disabled":"_autosave-tag__tag--disabled_1p8wz_188","autosave-tag__tag-text":"_autosave-tag__tag-text_1p8wz_193"},ra={default:"Save draft","auto-saving":"Auto-saving",saving:"Saving draft",saved:"Draft saved",error:"Unable to save",disabled:"Save draft",focused:"Save draft"},o=({status:t="default",label:m,timestamp:r="00:00 AM on 00 JAN 2001",showTag:X=!0,onClick:Y,className:Z="",ariaLabel:aa})=>{const f=t==="disabled",x=m??ra[t],ea=[s["autosave-tag"],Z].filter(Boolean).join(" "),ta=[s["autosave-tag__btn"],s[`autosave-tag__btn--${t}`]].filter(Boolean).join(" "),sa=[s["autosave-tag__tag"],f?s["autosave-tag__tag--disabled"]:""].filter(Boolean).join(" ");return a.jsxs("div",{className:ea,children:[a.jsxs("button",{type:"button",className:ta,onClick:f?void 0:Y,disabled:f,"aria-label":aa??x,"aria-busy":t==="saving"||t==="auto-saving"||void 0,children:[a.jsx("span",{className:s["autosave-tag__icon"],"aria-hidden":"true",children:a.jsx(oa,{className:s["autosave-tag__icon-svg"]})}),a.jsx("span",{className:s["autosave-tag__label"],children:x})]}),X&&a.jsx("div",{className:sa,"aria-label":`Last saved: ${r}`,children:a.jsx("span",{className:s["autosave-tag__tag-text"],children:r})})]})};o.__docgenInfo={description:'AutoSaveTagButton — A vertical combination of a pill-shaped auto-save status\nbutton and a small timestamp tag underneath.\n\nThe button portion uses the SaveDraft palette (sky-blue, green, red, gray).\nThe tag portion displays the last-saved timestamp in a rounded gray-outline pill.\n\n**Statuses**\n- `default`     — sky-blue-100 bg, sky-blue border, "Save draft"\n- `auto-saving` — same palette, "Auto-saving"\n- `saving`      — thicker border + offset shadow, "Saving draft"\n- `saved`       — green palette, "Draft saved"\n- `error`       — red palette, "Unable to save"\n- `disabled`    — gray palette, button not interactive\n- `focused`     — sky-blue palette with 2px focus border\n\nAll values are driven by `--btn-save-draft-*` and `--btn-autosave-tag-*` design tokens.',methods:[],displayName:"AutoSaveTagButton",props:{status:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'auto-saving'
| 'saving'
| 'saved'
| 'error'
| 'disabled'
| 'focused'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'auto-saving'"},{name:"literal",value:"'saving'"},{name:"literal",value:"'saved'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'focused'"}]},description:"Current save/draft status — drives label, colour, and border",defaultValue:{value:"'default'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Override the auto-derived label"},timestamp:{required:!1,tsType:{name:"string"},description:'Timestamp text shown inside the tag, e.g. "12:30 PM on 15 JAN 2025"',defaultValue:{value:"'00:00 AM on 00 JAN 2001'",computed:!1}},showTag:{required:!1,tsType:{name:"boolean"},description:"Whether to display the timestamp tag below the button",defaultValue:{value:"true",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler (no-op when disabled)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label override"}}};const na=[{status:"default",label:"Default",description:'Idle state. Sky-blue-100 background, sky-blue border (1px), black text. Label: "Save draft". Tag shows last-saved timestamp.'},{status:"auto-saving",label:"Auto-saving",description:'Background save in progress (triggered automatically). Same palette as default. Label: "Auto-saving".'},{status:"saving",label:"Saving",description:'User-triggered save in progress. 2px border + blue-400 offset shadow to signal active action. Label: "Saving draft".'},{status:"saved",label:"Saved",description:'Save completed successfully. Green-light background, dark-green border and text. Label: "Draft saved".'},{status:"error",label:"Error",description:'Save failed. Red-light background, status-red border and text. Label: "Unable to save".'},{status:"disabled",label:"Disabled",description:"Button is not interactive (e.g. no changes to save). Gray-50 background (--global-color-neutral-gray-50), gray-200 border, gray-400 text. Tag is also dimmed."},{status:"focused",label:"Focused",description:'Keyboard/programmatic focus. Sky-blue palette with 2px border for a clear focus ring. Label: "Save draft".'}],h=()=>a.jsxs(e,{children:[a.jsx(e.Header,{title:"Auto-Save Tag Button",subtitle:"A pill-shaped auto-save status button paired with a timestamp tag for workflow context"}),a.jsxs(e.BodyText,{children:["The ",a.jsx("strong",{children:"Auto-Save Tag Button"})," extends the Save Draft Button concept by pairing the pill-shaped status button with a small rounded timestamp tag below it. The tag shows the last-saved date and time, giving users immediate context about the recency of their saved work. Seven distinct visual states communicate the full auto-save lifecycle."]}),a.jsxs(e.Section,{title:"Component Anatomy",children:[a.jsxs(e.BodyText,{children:["The component renders as a vertical stack of two elements: the auto-save pill button on top and the timestamp tag beneath. The button contains a ",a.jsx("strong",{children:"Save icon"})," ","(MUI SaveOutlined) and a ",a.jsx("strong",{children:"status label"}),". The tag displays a formatted date/time string."]}),a.jsx(e.Anatomy,{preview:a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},children:[a.jsx(o,{status:"default",timestamp:"12:30 PM on 15 JAN 2025"}),a.jsx(o,{status:"saved",timestamp:"12:31 PM on 15 JAN 2025"}),a.jsx(o,{status:"error",timestamp:"12:30 PM on 15 JAN 2025"})]}),parts:[{id:1,name:"Wrapper",token:"--btn-autosave-tag-gap (16px)",description:"Vertical flex container with 16px gap between the pill button and the timestamp tag."},{id:2,name:"Pill Button",token:`--btn-save-draft-radius (full)
--btn-save-draft-bg (sky-blue-100)
--btn-save-draft-border-color (sky-blue)`,description:"Full-pill shape. Background and border colour change per status. Contains save icon + label."},{id:3,name:"Save Icon",token:`--btn-save-draft-icon-size (18px)
--btn-save-draft-icon-gap (8px)`,description:"MUI SaveOutlined (floppy disk) icon, always rendered. Size: 18px. Colour inherits from the button text token."},{id:4,name:"Status Label",token:`--btn-save-draft-font-family (F37 Ginger Pro)
--btn-save-draft-font-weight (300)
--btn-save-draft-font-size (16px)`,description:'Label changes per status: "Save draft", "Auto-saving", "Saving draft", "Draft saved", "Unable to save".'},{id:5,name:"Timestamp Tag",token:`--btn-autosave-tag-tag-bg (gray-100)
--btn-autosave-tag-tag-border-color (gray-300)
--btn-autosave-tag-tag-radius (full)`,description:"Small rounded pill displaying the last-saved date/time. Uses xs-label typography (12px, weight 300). Stretches to fill the button width."}]})]}),a.jsxs(e.Section,{title:"States",children:[a.jsxs(e.BodyText,{children:["The ",a.jsx("code",{children:"status"})," prop drives the label, background, border colour, and text colour simultaneously. Seven states are available. The timestamp tag remains visible in all states but dims when disabled."]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",maxWidth:"560px"},children:na.map(({status:t,label:m,description:r})=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"220px 1fr",alignItems:"start",gap:"var(--global-spacing-sizing-20px)"},children:[a.jsx(o,{status:t,timestamp:"12:30 PM on 15 JAN 2025"}),a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-base-black)",marginBottom:"var(--global-spacing-sizing-2px)"},children:m}),a.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-light)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:r})]})]},t))})]}),a.jsx(e.TokenTable,{title:"Design Tokens — Wrapper & Tag",description:"Tokens specific to the AutoSaveTagButton composite:",tokens:[{name:"--btn-autosave-tag-gap",description:"Vertical gap between pill button and timestamp tag — --global-spacing-sizing-16px (16px)"},{name:"--btn-autosave-tag-tag-bg",description:"Tag background — --global-color-neutral-gray-100 (#F3F4F6)"},{name:"--btn-autosave-tag-tag-border-color",description:"Tag border — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-autosave-tag-tag-border-width",description:"Tag border width — --global-spacing-stroke-1px (1px)"},{name:"--btn-autosave-tag-tag-radius",description:"Tag border radius — --global-spacing-radius-full (99999px)"},{name:"--btn-autosave-tag-tag-padding-v",description:"Tag vertical padding — --global-spacing-sizing-4px (4px)"},{name:"--btn-autosave-tag-tag-padding-h",description:"Tag horizontal padding — --global-spacing-sizing-12px (12px)"},{name:"--btn-autosave-tag-tag-font-family",description:"Tag font family — --brand-font-primary (F37 Ginger Pro)"},{name:"--btn-autosave-tag-tag-font-size",description:"Tag font size — --global-type-size-primary-label-xs (12px)"},{name:"--btn-autosave-tag-tag-font-weight",description:"Tag font weight — --global-type-weight-light (300)"},{name:"--btn-autosave-tag-tag-color",description:"Tag text colour — --global-color-neutral-gray-800 (#1F2937)"}]}),a.jsx(e.TokenTable,{title:"Design Tokens — Button Portion",description:"The pill button inherits all SaveDraftButton tokens (--btn-save-draft-*):",tokens:[{name:"--btn-save-draft-bg",description:"Default background — --global-color-primary-sky-blue-100 (#D6F0FB)"},{name:"--btn-save-draft-border-color",description:"Default border — --global-color-primary-sky-blue (#0BA7EA)"},{name:"--btn-save-draft-radius",description:"Pill border radius — --global-spacing-radius-full (99999px)"},{name:"--btn-save-draft-bg-saved",description:"Saved background — --global-color-status-green-light (#F2FFF1)"},{name:"--btn-save-draft-bg-error",description:"Error background — --global-color-status-red-light (#FBEBEB)"},{name:"--btn-save-draft-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-save-draft-shadow-hover",description:"Hover shadow — 2px 2px 0 0 blue-400 (#6171DF)"}]}),a.jsx(e.CodeBlock,{children:`import { AutoSaveTagButton } from '@/components/AutoSaveTagButton';

// Full auto-save button with timestamp tag
<AutoSaveTagButton
  status="default"
  timestamp="12:30 PM on 15 JAN 2025"
  onClick={handleSaveDraft}
/>

// Without the timestamp tag
<AutoSaveTagButton
  status="saving"
  showTag={false}
/>

// Different states
<AutoSaveTagButton status="auto-saving" timestamp="12:30 PM on 15 JAN 2025" />
<AutoSaveTagButton status="saved" timestamp="12:31 PM on 15 JAN 2025" />
<AutoSaveTagButton status="error" timestamp="12:30 PM on 15 JAN 2025" />
<AutoSaveTagButton status="disabled" timestamp="12:30 PM on 15 JAN 2025" />`}),a.jsxs(e.Principles,{children:[a.jsxs(e.PrincipleCard,{number:1,title:"Keep the timestamp accurate",children:["Update the ",a.jsx("code",{children:"timestamp"})," prop whenever the save completes. The tag should always reflect the most recent successful save, not the current time."]}),a.jsx(e.PrincipleCard,{number:2,title:"Persist the button across all states",children:"Keep the component visible in all states including saved and error. Hiding it removes important feedback about save status."}),a.jsx(e.PrincipleCard,{number:3,title:"One per form or document scope",children:"Use a single AutoSaveTagButton per document or form. Multiple instances suggest multiple save targets, which is confusing."})]}),a.jsx(e.Footer,{})]});h.__docgenInfo={description:"",methods:[],displayName:"AutoSaveTagButtonDocs"};const Q=["default","auto-saving","saving","saved","error","disabled","focused"],ca={title:"Atoms/Buttons/Auto-Save Tag Button",component:o,parameters:{docs:{page:()=>a.jsx(h,{})}},argTypes:{status:{control:"select",options:Q,description:"Drives the label, background, border, and text colour of the pill button"},label:{control:"text",description:"Overrides the auto-derived label for the current status"},timestamp:{control:"text",description:"Timestamp text displayed in the tag below the button"},showTag:{control:"boolean",description:"Toggle the timestamp tag visibility"}},args:{status:"default",timestamp:"12:30 PM on 15 JAN 2025",showTag:!0}},n={render:()=>a.jsx(h,{}),parameters:{controls:{disable:!0},actions:{disable:!0}}},i={args:{status:"default"}},l={name:"Auto-saving",args:{status:"auto-saving"}},d={args:{status:"saving"}},u={args:{status:"saved"}},g={args:{status:"error"}},c={args:{status:"disabled"}},p={args:{status:"focused"}},v={name:"Without Tag",args:{status:"default",showTag:!1}},b={name:"All States",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)",alignItems:"flex-start"},children:Q.map(t=>a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"var(--global-spacing-sizing-32px)"},children:[a.jsx(o,{status:t,timestamp:"12:30 PM on 15 JAN 2025"}),a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",paddingTop:"var(--global-spacing-sizing-12px)"},children:t})]},t))}),parameters:{controls:{disable:!0}}};var _,y,S;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <AutoSaveTagButtonDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var T,A,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    status: 'default'
  }
}`,...(w=(A=i.parameters)==null?void 0:A.docs)==null?void 0:w.source}}};var k,j,z;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Auto-saving',
  args: {
    status: 'auto-saving'
  }
}`,...(z=(j=l.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var B,D,F;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    status: 'saving'
  }
}`,...(F=(D=d.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var N,M,P;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: 'saved'
  }
}`,...(P=(M=u.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var L,E,C;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...(C=(E=g.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var J,U,I;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    status: 'disabled'
  }
}`,...(I=(U=c.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var W,q,H;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    status: 'focused'
  }
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var O,R,V;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Without Tag',
  args: {
    status: 'default',
    showTag: false
  }
}`,...(V=(R=v.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var G,K,$;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)',
    padding: 'var(--global-spacing-sizing-24px)',
    alignItems: 'flex-start'
  }}>
      {ALL_STATUSES.map(status => <div key={status} style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--global-spacing-sizing-32px)'
    }}>
          <AutoSaveTagButton status={status} timestamp="12:30 PM on 15 JAN 2025" />
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'capitalize',
        paddingTop: 'var(--global-spacing-sizing-12px)'
      }}>
            {status}
          </span>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(K=b.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};const pa=["Documentation","Default","AutoSaving","Saving","Saved","Error","Disabled","Focused","WithoutTag","AllStates"];export{b as AllStates,l as AutoSaving,i as Default,c as Disabled,n as Documentation,g as Error,p as Focused,u as Saved,d as Saving,v as WithoutTag,pa as __namedExportsOrder,ca as default};
