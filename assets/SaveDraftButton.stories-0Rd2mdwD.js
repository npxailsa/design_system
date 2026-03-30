import{j as e}from"./iframe-vg06c6_i.js";import{c as W}from"./createSvgIcon-BlSCHXSX.js";import{D as a}from"./DocsTemplate-2oAQpgv_.js";import"./preload-helper-Dp1pzeXC.js";const r={"save-draft-btn":"_save-draft-btn_w0js6_22","save-draft-btn--default":"_save-draft-btn--default_w0js6_75","save-draft-btn--auto-saving":"_save-draft-btn--auto-saving_w0js6_81","save-draft-btn--saving":"_save-draft-btn--saving_w0js6_88","save-draft-btn--saved":"_save-draft-btn--saved_w0js6_97","save-draft-btn--error":"_save-draft-btn--error_w0js6_107","save-draft-btn--disabled":"_save-draft-btn--disabled_w0js6_117","save-draft-btn--focused":"_save-draft-btn--focused_w0js6_132","save-draft-btn__icon":"_save-draft-btn__icon_w0js6_156","save-draft-btn__icon-svg":"_save-draft-btn__icon-svg_w0js6_163","save-draft-btn__label":"_save-draft-btn__label_w0js6_170"},K=W(e.jsx("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M6 6h9v4H6z"})),$={default:"Save draft","auto-saving":"Auto-saving",saving:"Saving draft",saved:"Draft saved",error:"Unable to save",disabled:"Save draft",focused:"Save draft"},s=({status:t="default",label:p,onClick:b,className:q="",ariaLabel:G})=>{const f=t==="disabled",m=p??$[t],V=[r["save-draft-btn"],r[`save-draft-btn--${t}`],q].filter(Boolean).join(" ");return e.jsxs("button",{type:"button",className:V,onClick:f?void 0:b,disabled:f,"aria-label":G??m,"aria-busy":t==="saving"||t==="auto-saving"||void 0,children:[e.jsx("span",{className:r["save-draft-btn__icon"],"aria-hidden":"true",children:e.jsx(K,{className:r["save-draft-btn__icon-svg"]})}),e.jsx("span",{className:r["save-draft-btn__label"],children:m})]})};s.__docgenInfo={description:"SaveDraftButton — A pill-shaped status button for auto-save workflows.\n\nUses the sky-blue palette by default. Each `status` value drives:\n- The button label (Save draft / Auto-saving / Saving draft / Draft saved / Unable to save)\n- The background, border colour, and text colour\n\n**Statuses**\n- `default`     — sky-blue-100 bg, sky-blue border, black text\n- `auto-saving` — same as default, indicates background auto-save in progress\n- `saving`      — thicker (2px) border + offset shadow, indicates active user-triggered save\n- `saved`       — green palette, confirms the draft was saved\n- `error`       — red palette, signals save failure\n- `disabled`    — gray palette, button not interactive\n- `focused`     — sky-blue palette with 2px focus border\n\nAll values are driven by `--btn-save-draft-*` design tokens.",methods:[],displayName:"SaveDraftButton",props:{status:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'auto-saving'
| 'saving'
| 'saved'
| 'error'
| 'disabled'
| 'focused'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'auto-saving'"},{name:"literal",value:"'saving'"},{name:"literal",value:"'saved'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'focused'"}]},description:"Current save/draft status — drives label, colour, and border",defaultValue:{value:"'default'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Override the auto-derived label"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler (no-op when disabled)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label override"}}};const J=[{status:"default",label:"Default",description:'Idle state. Sky-blue-100 background, sky-blue border (1px), black text. Label: "Save draft".'},{status:"auto-saving",label:"Auto-saving",description:'Background save in progress (triggered automatically). Same palette as default. Label: "Auto-saving".'},{status:"saving",label:"Saving",description:'User-triggered save in progress. 2px border + blue-400 offset shadow to signal active action. Label: "Saving draft".'},{status:"saved",label:"Saved",description:'Save completed successfully. Green-light background, dark-green border and text. Label: "Draft saved".'},{status:"error",label:"Error",description:'Save failed. Red-light background, status-red border and text. Label: "Unable to save".'},{status:"disabled",label:"Disabled",description:'Button is not interactive (e.g. no changes to save). Gray palette, not-allowed cursor. Label: "Save draft".'},{status:"focused",label:"Focused",description:'Keyboard/programmatic focus. Sky-blue palette with 2px border for a clear focus ring. Label: "Save draft".'}],g=()=>e.jsxs(a,{children:[e.jsx(a.Header,{title:"Save Draft Button",subtitle:"A pill-shaped status button for auto-save workflows with seven distinct visual states"}),e.jsxs(a.BodyText,{children:["The ",e.jsx("strong",{children:"Save Draft Button"})," is a purpose-built status indicator button used in form and document editing workflows. Unlike a standard button, it communicates the current save state through label changes and colour transitions rather than user interaction alone. The pill shape (",e.jsx("code",{children:"border-radius: full"}),") and sky-blue palette distinguish it clearly from the primary and ghost button families."]}),e.jsxs(a.Section,{title:"Component Anatomy",children:[e.jsxs(a.BodyText,{children:["The button contains two fixed elements: a ",e.jsx("strong",{children:"Save icon"})," (MUI SaveOutlined / floppy disk) always visible on the left, and a ",e.jsx("strong",{children:"label"})," that updates per status. No trailing icon or icon-only mode is supported."]}),e.jsx(a.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},children:[e.jsx(s,{status:"default"}),e.jsx(s,{status:"saved"}),e.jsx(s,{status:"error"})]}),parts:[{id:1,name:"Container",token:`--btn-save-draft-radius (99999px)
--btn-save-draft-bg (sky-blue-100)
--btn-save-draft-border-color (sky-blue)`,description:"Full-pill shape. Background and border colour change per status. Fixed padding: 12px vertical, 16–24px horizontal."},{id:2,name:"Leading Icon",token:`--btn-save-draft-icon-size (18px)
--btn-save-draft-icon-gap (8px)`,description:"MUI SaveOutlined (floppy disk) icon, always rendered. Size: 18px. Colour inherits from the button text token."},{id:3,name:"Label",token:`--btn-save-draft-font-family (F37 Ginger Pro)
--btn-save-draft-font-weight (300)
--btn-save-draft-font-size (16px)`,description:'Label changes automatically with status: "Save draft", "Auto-saving", "Saving draft", "Draft saved", "Unable to save".'}]})]}),e.jsxs(a.Section,{title:"States",children:[e.jsxs(a.BodyText,{children:["The ",e.jsx("code",{children:"status"})," prop drives the label, background, border colour, and text colour simultaneously. Seven states are available."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",maxWidth:"560px"},children:J.map(({status:t,label:p,description:b})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"180px 1fr",alignItems:"start",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(s,{status:t}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-base-black)",marginBottom:"var(--global-spacing-sizing-2px)"},children:p}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-light)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:b})]})]},t))})]}),e.jsx(a.TokenTable,{title:"Design Tokens — Base",description:"Default (sky-blue) appearance tokens:",tokens:[{name:"--btn-save-draft-bg",description:"Default background — --global-color-primary-sky-blue-100 (#D6F0FB)"},{name:"--btn-save-draft-border-color",description:"Default border — --global-color-primary-sky-blue (#0BA7EA)"},{name:"--btn-save-draft-border-width",description:"Default border width — 1px"},{name:"--btn-save-draft-color",description:"Default text colour — --global-color-base-black (#1C1C1C)"},{name:"--btn-save-draft-radius",description:"Border radius — --global-spacing-radius-full (99999px)"},{name:"--btn-save-draft-padding-v",description:"Vertical padding — 12px (--global-spacing-sizing-12px)"},{name:"--btn-save-draft-padding-h",description:"Horizontal padding (default state) — 16px"},{name:"--btn-save-draft-padding-h-expanded",description:"Horizontal padding (all other states) — 24px"},{name:"--btn-save-draft-icon-size",description:"Save (floppy disk) icon size — 18px"},{name:"--btn-save-draft-icon-gap",description:"Gap between icon and label — 8px"},{name:"--btn-save-draft-font-family",description:"Font family — --brand-font-primary (F37 Ginger Pro)"},{name:"--btn-save-draft-font-weight",description:"Font weight — --global-type-weight-light (300)"},{name:"--btn-save-draft-font-size",description:"Font size — 16px"}]}),e.jsx(a.TokenTable,{title:"Design Tokens — Status Colours",description:"Status-specific overrides applied per state:",tokens:[{name:"--btn-save-draft-shadow-hover",description:"Hover / saving shadow — 2px 2px 0 0 blue-400 (#6171DF)"},{name:"--btn-save-draft-border-width-focus",description:"Focused border width — 2px"},{name:"--btn-save-draft-border-width-saving",description:"Saving border width — 2px"},{name:"--btn-save-draft-bg-saved",description:"Saved background — --global-color-status-green-light (#F2FFF1)"},{name:"--btn-save-draft-border-color-saved",description:"Saved border — --global-color-status-dark-green (#227F1A)"},{name:"--btn-save-draft-color-saved",description:"Saved text — --global-color-status-dark-green (#227F1A)"},{name:"--btn-save-draft-bg-error",description:"Error background — --global-color-status-red-light (#FBEBEB)"},{name:"--btn-save-draft-border-color-error",description:"Error border — --global-color-status-red (#CE2031)"},{name:"--btn-save-draft-color-error",description:"Error text — --global-color-status-red (#CE2031)"},{name:"--btn-save-draft-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-save-draft-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--btn-save-draft-color-disabled",description:"Disabled text — --global-color-neutral-gray-400 (#9CA3AF)"}]}),e.jsx(a.CodeBlock,{children:`import { SaveDraftButton } from '@/components/SaveDraftButton';

// Controlled by a status value from your save logic
<SaveDraftButton
  status="default"
  onClick={handleSaveDraft}
/>

// Reflects different save workflow states
<SaveDraftButton status="auto-saving" />
<SaveDraftButton status="saving" />
<SaveDraftButton status="saved" />
<SaveDraftButton status="error" />
<SaveDraftButton status="disabled" />

// Override the label (e.g. for i18n)
<SaveDraftButton
  status="default"
  label="Sauvegarder le brouillon"
/>`}),e.jsxs(a.Principles,{children:[e.jsxs(a.PrincipleCard,{number:1,title:"Drive status from your save logic",children:["Map your application's save lifecycle (idle → saving → saved / error) directly to the"," ",e.jsx("code",{children:"status"})," prop. Never manually set colours or labels — let the token system handle visual consistency."]}),e.jsx(a.PrincipleCard,{number:2,title:"Persist the button across all states",children:"Keep the button visible in all states, including saved and error. Hiding it removes important feedback for the user about their document's save status."}),e.jsx(a.PrincipleCard,{number:3,title:"Only one SaveDraftButton per form",children:"Use a single SaveDraftButton per document or form scope. Multiple buttons suggest multiple save targets, which is confusing. If you need section-level saves, use text links instead."})]}),e.jsx(a.Footer,{})]});g.__docgenInfo={description:"",methods:[],displayName:"SaveDraftButtonDocs"};const R=["default","auto-saving","saving","saved","error","disabled","focused"],ee={title:"Atoms/Buttons/Save Draft Button",component:s,parameters:{docs:{page:()=>e.jsx(g,{})}},argTypes:{status:{control:"select",options:R,description:"Drives the label, background, border, and text colour of the button"},label:{control:"text",description:"Overrides the auto-derived label for the current status"}},args:{status:"default"}},n={render:()=>e.jsx(g,{}),parameters:{controls:{disable:!0},actions:{disable:!0}}},o={args:{status:"default"}},i={name:"Auto-saving",args:{status:"auto-saving"}},l={args:{status:"saving"}},d={args:{status:"saved"}},c={args:{status:"error"}},u={args:{status:"disabled"}},v={name:"All States",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",alignItems:"flex-start"},children:R.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(s,{status:t}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize"},children:t})]},t))}),parameters:{controls:{disable:!0}}};var x,h,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <SaveDraftButtonDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,k,_;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: 'default'
  }
}`,...(_=(k=o.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var j,D,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Auto-saving',
  args: {
    status: 'auto-saving'
  }
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,T,z;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    status: 'saving'
  }
}`,...(z=(T=l.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var A,F,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    status: 'saved'
  }
}`,...(E=(F=d.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var L,C,I;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: 'error'
  }
}`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var U,H,M;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    status: 'disabled'
  }
}`,...(M=(H=u.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var N,O,P;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    padding: 'var(--global-spacing-sizing-24px)',
    alignItems: 'flex-start'
  }}>
      {ALL_STATUSES.map(status => <div key={status} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--global-spacing-sizing-20px)'
    }}>
          <SaveDraftButton status={status} />
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'capitalize'
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
}`,...(P=(O=v.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const ae=["Documentation","Default","AutoSaving","Saving","Saved","Error","Disabled","AllStates"];export{v as AllStates,i as AutoSaving,o as Default,u as Disabled,n as Documentation,c as Error,d as Saved,l as Saving,ae as __namedExportsOrder,ee as default};
