import{j as a}from"./iframe-Dar69v5t.js";import{S as ba}from"./SaveOutlined-_6mUzTCB.js";import{B as fa}from"./ButtonBase-DtcsKBT-.js";import{D as t}from"./DocsTemplate-B3INTUY7.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-DbjYR0NQ.js";import"./DefaultPropsProvider-DYvj0fg1.js";import"./memoTheme-n5UlHhtg.js";import"./index-DmEN9vMH.js";import"./useEventCallback-IMUsyEcN.js";import"./useForkRef-C8iv6bB9.js";const s={"autosave-tag":"_autosave-tag_1p8wz_12","autosave-tag__btn":"_autosave-tag__btn_1p8wz_29","autosave-tag__btn--default":"_autosave-tag__btn--default_1p8wz_71","autosave-tag__btn--auto-saving":"_autosave-tag__btn--auto-saving_1p8wz_78","autosave-tag__btn--saving":"_autosave-tag__btn--saving_1p8wz_85","autosave-tag__btn--saved":"_autosave-tag__btn--saved_1p8wz_94","autosave-tag__btn--error":"_autosave-tag__btn--error_1p8wz_104","autosave-tag__btn--disabled":"_autosave-tag__btn--disabled_1p8wz_114","autosave-tag__btn--focused":"_autosave-tag__btn--focused_1p8wz_129","autosave-tag__icon":"_autosave-tag__icon_1p8wz_150","autosave-tag__icon-svg":"_autosave-tag__icon-svg_1p8wz_157","autosave-tag__label":"_autosave-tag__label_1p8wz_163","autosave-tag__tag":"_autosave-tag__tag_1p8wz_173","autosave-tag__tag--disabled":"_autosave-tag__tag--disabled_1p8wz_188","autosave-tag__tag-text":"_autosave-tag__tag-text_1p8wz_193"},ha={default:"Save draft","auto-saving":"Auto-saving",saving:"Saving draft",saved:"Draft saved",error:"Unable to save",disabled:"Save draft",focused:"Save draft"},n=({status:e="default",label:S,timestamp:o="00:00 AM on 00 JAN 2001",showTag:da=!0,onClick:ua,className:ga="",ariaLabel:ca})=>{const y=e==="disabled",T=S??ha[e],pa=[s["autosave-tag"],ga].filter(Boolean).join(" "),ma=[s["autosave-tag__btn"],s[`autosave-tag__btn--${e}`]].filter(Boolean).join(" "),va=[s["autosave-tag__tag"],y?s["autosave-tag__tag--disabled"]:""].filter(Boolean).join(" ");return a.jsxs("div",{className:pa,children:[a.jsxs(fa,{component:"button",type:"button",className:ma,onClick:y?void 0:ua,disabled:y,"aria-label":ca??T,"aria-busy":e==="saving"||e==="auto-saving"||void 0,children:[a.jsx("span",{className:s["autosave-tag__icon"],"aria-hidden":"true",children:a.jsx(ba,{className:s["autosave-tag__icon-svg"]})}),a.jsx("span",{className:s["autosave-tag__label"],children:T})]}),da&&a.jsx("div",{className:va,"aria-label":`Last saved: ${o}`,children:a.jsx("span",{className:s["autosave-tag__tag-text"],children:o})})]})};n.__docgenInfo={description:'AutoSaveTagButton — A vertical combination of a pill-shaped auto-save status\nbutton and a small timestamp tag underneath.\n\nThe button portion uses the SaveDraft palette (sky-blue, green, red, gray).\nThe tag portion displays the last-saved timestamp in a rounded gray-outline pill.\n\n**Statuses**\n- `default`     — sky-blue-100 bg, sky-blue border, "Save draft"\n- `auto-saving` — same palette, "Auto-saving"\n- `saving`      — thicker border + offset shadow, "Saving draft"\n- `saved`       — green palette, "Draft saved"\n- `error`       — red palette, "Unable to save"\n- `disabled`    — gray palette, button not interactive\n- `focused`     — sky-blue palette with 2px focus border\n\nAll values are driven by `--btn-save-draft-*` and `--btn-autosave-tag-*` design tokens.',methods:[],displayName:"AutoSaveTagButton",props:{status:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'auto-saving'
| 'saving'
| 'saved'
| 'error'
| 'disabled'
| 'focused'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'auto-saving'"},{name:"literal",value:"'saving'"},{name:"literal",value:"'saved'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'focused'"}]},description:"Current save/draft status — drives label, colour, and border",defaultValue:{value:"'default'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Override the auto-derived label"},timestamp:{required:!1,tsType:{name:"string"},description:'Timestamp text shown inside the tag, e.g. "12:30 PM on 15 JAN 2025"',defaultValue:{value:"'00:00 AM on 00 JAN 2001'",computed:!1}},showTag:{required:!1,tsType:{name:"boolean"},description:"Whether to display the timestamp tag below the button",defaultValue:{value:"true",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler (no-op when disabled)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label override"}}};const xa=[{status:"default",label:"Default",description:'Idle state. Sky-blue-100 background, sky-blue border (1px), black text. Label: "Save draft". Tag shows last-saved timestamp.'},{status:"auto-saving",label:"Auto-saving",description:'Background save in progress (triggered automatically). Same palette as default. Label: "Auto-saving".'},{status:"saving",label:"Saving",description:'User-triggered save in progress. 2px border + blue-400 offset shadow to signal active action. Label: "Saving draft".'},{status:"saved",label:"Saved",description:'Save completed successfully. Green-light background, dark-green border and text. Label: "Draft saved".'},{status:"error",label:"Error",description:'Save failed. Red-light background, status-red border and text. Label: "Unable to save".'},{status:"disabled",label:"Disabled",description:"Button is not interactive (e.g. no changes to save). Gray-50 background (--global-color-neutral-gray-50), gray-200 border, gray-400 text. Tag is also dimmed."},{status:"focused",label:"Focused",description:'Keyboard/programmatic focus. Sky-blue palette with 2px border for a clear focus ring. Label: "Save draft".'}],_=()=>a.jsxs(t,{children:[a.jsx(t.Header,{title:"Auto-Save Tag Button",subtitle:"A pill-shaped auto-save status button paired with a timestamp tag for workflow context"}),a.jsxs(t.BodyText,{children:["The ",a.jsx("strong",{children:"Auto-Save Tag Button"})," extends the Save Draft Button concept by pairing the pill-shaped status button with a small rounded timestamp tag below it. The tag shows the last-saved date and time, giving users immediate context about the recency of their saved work. Seven distinct visual states communicate the full auto-save lifecycle."]}),a.jsxs(t.Section,{title:"MUI Foundation",children:[a.jsxs(t.BodyText,{children:["Built on MUI's ",a.jsx("strong",{children:"ButtonBase"})," for the interactive pill button element."," ",a.jsx("code",{children:"ButtonBase"})," provides keyboard activation, disabled propagation, and accessible semantics without any visual style. MUI's ",a.jsx("strong",{children:"SaveOutlinedIcon"})," from"," ",a.jsx("code",{children:"@mui/icons-material/SaveOutlined"})," is used as the floppy-disk save icon across all states. The timestamp tag below is a static element with no MUI dependency. All colour, border-radius, and state styling is applied via CSS Modules and the"," ",a.jsx("code",{children:"--auto-save-*"})," token family."]}),a.jsx(t.CodeBlock,{children:`// MUI base imports
import ButtonBase from '@mui/material/ButtonBase';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

// Root element:
<ButtonBase component="button" className={styles['auto-save-btn']} disabled={disabled} onClick={onClick}>
  <SaveOutlinedIcon />
  <span>{label}</span>
</ButtonBase>`})]}),a.jsxs(t.Section,{title:"Component Anatomy",children:[a.jsxs(t.BodyText,{children:["The component renders as a vertical stack of two elements: the auto-save pill button on top and the timestamp tag beneath. The button contains a ",a.jsx("strong",{children:"Save icon"})," ","(MUI SaveOutlined) and a ",a.jsx("strong",{children:"status label"}),". The tag displays a formatted date/time string."]}),a.jsx(t.Anatomy,{preview:a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},children:[a.jsx(n,{status:"default",timestamp:"12:30 PM on 15 JAN 2025"}),a.jsx(n,{status:"saved",timestamp:"12:31 PM on 15 JAN 2025"}),a.jsx(n,{status:"error",timestamp:"12:30 PM on 15 JAN 2025"})]}),parts:[{id:1,name:"Wrapper",token:"--btn-autosave-tag-gap (16px)",description:"Vertical flex container with 16px gap between the pill button and the timestamp tag."},{id:2,name:"Pill Button",token:`--btn-save-draft-radius (full)
--btn-save-draft-bg (sky-blue-100)
--btn-save-draft-border-color (sky-blue)`,description:"Full-pill shape. Background and border colour change per status. Contains save icon + label."},{id:3,name:"Save Icon",token:`--btn-save-draft-icon-size (18px)
--btn-save-draft-icon-gap (8px)`,description:"MUI SaveOutlined (floppy disk) icon, always rendered. Size: 18px. Colour inherits from the button text token."},{id:4,name:"Status Label",token:`--btn-save-draft-font-family (F37 Ginger Pro)
--btn-save-draft-font-weight (300)
--btn-save-draft-font-size (16px)`,description:'Label changes per status: "Save draft", "Auto-saving", "Saving draft", "Draft saved", "Unable to save".'},{id:5,name:"Timestamp Tag",token:`--btn-autosave-tag-tag-bg (gray-100)
--btn-autosave-tag-tag-border-color (gray-300)
--btn-autosave-tag-tag-radius (full)`,description:"Small rounded pill displaying the last-saved date/time. Uses xs-label typography (12px, weight 300). Stretches to fill the button width."}]})]}),a.jsxs(t.Section,{title:"States",children:[a.jsxs(t.BodyText,{children:["The ",a.jsx("code",{children:"status"})," prop drives the label, background, border colour, and text colour simultaneously. Seven states are available. The timestamp tag remains visible in all states but dims when disabled."]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)",maxWidth:"560px"},children:xa.map(({status:e,label:S,description:o})=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"220px 1fr",alignItems:"start",gap:"var(--global-spacing-sizing-20px)"},children:[a.jsx(n,{status:e,timestamp:"12:30 PM on 15 JAN 2025"}),a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-base-black)",marginBottom:"var(--global-spacing-sizing-2px)"},children:S}),a.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-light)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:o})]})]},e))})]}),a.jsx(t.TokenTable,{title:"Design Tokens — Wrapper & Tag",description:"Tokens specific to the AutoSaveTagButton composite:",tokens:[{name:"--btn-autosave-tag-gap",description:"Vertical gap between pill button and timestamp tag — --global-spacing-sizing-16px (16px)"},{name:"--btn-autosave-tag-tag-bg",description:"Tag background — --global-color-neutral-gray-100 (#F3F4F6)"},{name:"--btn-autosave-tag-tag-border-color",description:"Tag border — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-autosave-tag-tag-border-width",description:"Tag border width — --global-spacing-stroke-1px (1px)"},{name:"--btn-autosave-tag-tag-radius",description:"Tag border radius — --global-spacing-radius-full (99999px)"},{name:"--btn-autosave-tag-tag-padding-v",description:"Tag vertical padding — --global-spacing-sizing-4px (4px)"},{name:"--btn-autosave-tag-tag-padding-h",description:"Tag horizontal padding — --global-spacing-sizing-12px (12px)"},{name:"--btn-autosave-tag-tag-font-family",description:"Tag font family — --brand-font-primary (F37 Ginger Pro)"},{name:"--btn-autosave-tag-tag-font-size",description:"Tag font size — --global-type-size-primary-label-xs (12px)"},{name:"--btn-autosave-tag-tag-font-weight",description:"Tag font weight — --global-type-weight-light (300)"},{name:"--btn-autosave-tag-tag-color",description:"Tag text colour — --global-color-neutral-gray-800 (#1F2937)"}]}),a.jsx(t.TokenTable,{title:"Design Tokens — Button Portion",description:"The pill button inherits all SaveDraftButton tokens (--btn-save-draft-*):",tokens:[{name:"--btn-save-draft-bg",description:"Default background — --global-color-primary-sky-blue-100 (#D6F0FB)"},{name:"--btn-save-draft-border-color",description:"Default border — --global-color-primary-sky-blue (#0BA7EA)"},{name:"--btn-save-draft-radius",description:"Pill border radius — --global-spacing-radius-full (99999px)"},{name:"--btn-save-draft-bg-saved",description:"Saved background — --global-color-status-green-light (#F2FFF1)"},{name:"--btn-save-draft-bg-error",description:"Error background — --global-color-status-red-light (#FBEBEB)"},{name:"--btn-save-draft-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-save-draft-shadow-hover",description:"Hover shadow — 2px 2px 0 0 blue-400 (#6171DF)"}]}),a.jsx(t.CodeBlock,{children:`import { AutoSaveTagButton } from '@/components/AutoSaveTagButton';

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
<AutoSaveTagButton status="disabled" timestamp="12:30 PM on 15 JAN 2025" />`}),a.jsxs(t.Principles,{children:[a.jsxs(t.PrincipleCard,{number:1,title:"Keep the timestamp accurate",children:["Update the ",a.jsx("code",{children:"timestamp"})," prop whenever the save completes. The tag should always reflect the most recent successful save, not the current time."]}),a.jsx(t.PrincipleCard,{number:2,title:"Persist the button across all states",children:"Keep the component visible in all states including saved and error. Hiding it removes important feedback about save status."}),a.jsx(t.PrincipleCard,{number:3,title:"One per form or document scope",children:"Use a single AutoSaveTagButton per document or form. Multiple instances suggest multiple save targets, which is confusing."})]}),a.jsx(t.Footer,{})]});_.__docgenInfo={description:"",methods:[],displayName:"AutoSaveTagButtonDocs"};const x=["default","auto-saving","saving","saved","error","disabled","focused"],Fa={title:"Atoms/Buttons/Auto-Save Tag Button",component:n,parameters:{docs:{page:()=>a.jsx(_,{})}},argTypes:{status:{control:"select",options:x,description:"Drives the label, background, border, and text colour of the pill button"},label:{control:"text",description:"Overrides the auto-derived label for the current status"},timestamp:{control:"text",description:"Timestamp text displayed in the tag below the button"},showTag:{control:"boolean",description:"Toggle the timestamp tag visibility"}},args:{status:"default",timestamp:"12:30 PM on 15 JAN 2025",showTag:!0}},r={name:"Documentation",render:()=>a.jsx(_,{}),parameters:{controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},i={name:"Playground",args:{status:"default",showTag:!0}},l={name:"Default",args:{status:"default"}},d={name:"Status / Auto-saving",args:{status:"auto-saving"}},u={name:"Status / Saving",args:{status:"saving"}},g={name:"Status / Saved",args:{status:"saved"}},c={name:"Status / Error",args:{status:"error"}},p={name:"Status / Disabled",args:{status:"disabled"}},m={name:"Status / Focused",args:{status:"focused"}},v={name:"Status / Without Tag",args:{status:"default",showTag:!1}},b={name:"Component Breakdown",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px"},children:x.map(e=>a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[a.jsx(n,{status:e,showTag:!0}),a.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px"},children:e})]},e))}),parameters:{controls:{disable:!0}}},f={name:"All Interactive States",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px"},children:x.map(e=>a.jsx(n,{status:e,showTag:!0},e))}),parameters:{controls:{disable:!0}}},h={name:"Full Design Matrix (7 variants)",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-24px)",alignItems:"flex-start"},children:x.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"var(--global-spacing-sizing-32px)"},children:[a.jsx(n,{status:e,timestamp:"12:30 PM on 15 JAN 2025"}),a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",paddingTop:"var(--global-spacing-sizing-12px)"},children:e})]},e))}),parameters:{controls:{disable:!0}}};var w,A,k;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <AutoSaveTagButtonDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...(k=(A=r.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var B,j,D;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    status: 'default',
    showTag: true
  }
}`,...(D=(j=i.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var z,F,M;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    status: 'default'
  }
}`,...(M=(F=l.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var I,P,C;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Status / Auto-saving',
  args: {
    status: 'auto-saving'
  }
}`,...(C=(P=d.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var L,N,E;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Status / Saving',
  args: {
    status: 'saving'
  }
}`,...(E=(N=u.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var U,J,O;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Status / Saved',
  args: {
    status: 'saved'
  }
}`,...(O=(J=g.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var W,R,q;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Status / Error',
  args: {
    status: 'error'
  }
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var H,V,G;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Status / Disabled',
  args: {
    status: 'disabled'
  }
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var K,$,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Status / Focused',
  args: {
    status: 'focused'
  }
}`,...(Q=($=m.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var X,Y,Z;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Status / Without Tag',
  args: {
    status: 'default',
    showTag: false
  }
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var aa,ea,ta;b.parameters={...b.parameters,docs:{...(aa=b.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  name: 'Component Breakdown',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px'
  }}>
      {ALL_STATUSES.map(status => <div key={status} style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
          <AutoSaveTagButton status={status} showTag />
          <code style={{
        fontSize: '10px',
        background: 'var(--global-color-neutral-gray-100)',
        padding: '2px 6px',
        borderRadius: '4px'
      }}>{status}</code>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ta=(ea=b.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var sa,na,oa;f.parameters={...f.parameters,docs:{...(sa=f.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px'
  }}>
      {ALL_STATUSES.map(status => <AutoSaveTagButton key={status} status={status} showTag />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oa=(na=f.parameters)==null?void 0:na.docs)==null?void 0:oa.source}}};var ra,ia,la;h.parameters={...h.parameters,docs:{...(ra=h.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  name: 'Full Design Matrix (7 variants)',
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
}`,...(la=(ia=h.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};const Ma=["Documentation","Playground","Default","StatusAutoSaving","StatusSaving","StatusSaved","StatusError","StatusDisabled","StatusFocused","StatusWithoutTag","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{f as AllInteractiveStates,b as ComponentBreakdown,l as Default,r as Documentation,h as FullDesignMatrix,i as Playground,d as StatusAutoSaving,p as StatusDisabled,c as StatusError,m as StatusFocused,g as StatusSaved,u as StatusSaving,v as StatusWithoutTag,Ma as __namedExportsOrder,Fa as default};
