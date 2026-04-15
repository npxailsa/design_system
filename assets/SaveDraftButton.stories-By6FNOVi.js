import{j as e}from"./iframe-BjGxk5uT.js";import{S as re}from"./SaveOutlined-CHwa74YR.js";import{B as ne}from"./ButtonBase-Baop9CFb.js";import{D as t}from"./DocsTemplate-DnguXgsn.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-0FKgLZ8W.js";import"./DefaultPropsProvider-CmnEDg3o.js";import"./memoTheme-BBnD4lZp.js";import"./index-1aEzYoP0.js";import"./useEventCallback-l6dFpTUF.js";import"./useForkRef-DBwmXVt5.js";const r={"save-draft-btn":"_save-draft-btn_w0js6_22","save-draft-btn--default":"_save-draft-btn--default_w0js6_75","save-draft-btn--auto-saving":"_save-draft-btn--auto-saving_w0js6_81","save-draft-btn--saving":"_save-draft-btn--saving_w0js6_88","save-draft-btn--saved":"_save-draft-btn--saved_w0js6_97","save-draft-btn--error":"_save-draft-btn--error_w0js6_107","save-draft-btn--disabled":"_save-draft-btn--disabled_w0js6_117","save-draft-btn--focused":"_save-draft-btn--focused_w0js6_132","save-draft-btn__icon":"_save-draft-btn__icon_w0js6_156","save-draft-btn__icon-svg":"_save-draft-btn__icon-svg_w0js6_163","save-draft-btn__label":"_save-draft-btn__label_w0js6_170"},oe={default:"Save draft","auto-saving":"Auto-saving",saving:"Saving draft",saved:"Draft saved",error:"Unable to save",disabled:"Save draft",focused:"Save draft"},s=({status:a="default",label:f,onClick:x,className:ae="",ariaLabel:te})=>{const S=a==="disabled",h=f??oe[a],se=[r["save-draft-btn"],r[`save-draft-btn--${a}`],ae].filter(Boolean).join(" ");return e.jsxs(ne,{component:"button",type:"button",className:se,onClick:S?void 0:x,disabled:S,"aria-label":te??h,"aria-busy":a==="saving"||a==="auto-saving"||void 0,children:[e.jsx("span",{className:r["save-draft-btn__icon"],"aria-hidden":"true",children:e.jsx(re,{className:r["save-draft-btn__icon-svg"]})}),e.jsx("span",{className:r["save-draft-btn__label"],children:h})]})};s.__docgenInfo={description:"SaveDraftButton — A pill-shaped status button for auto-save workflows.\n\nUses the sky-blue palette by default. Each `status` value drives:\n- The button label (Save draft / Auto-saving / Saving draft / Draft saved / Unable to save)\n- The background, border colour, and text colour\n\n**Statuses**\n- `default`     — sky-blue-100 bg, sky-blue border, black text\n- `auto-saving` — same as default, indicates background auto-save in progress\n- `saving`      — thicker (2px) border + offset shadow, indicates active user-triggered save\n- `saved`       — green palette, confirms the draft was saved\n- `error`       — red palette, signals save failure\n- `disabled`    — gray palette, button not interactive\n- `focused`     — sky-blue palette with 2px focus border\n\nAll values are driven by `--btn-save-draft-*` design tokens.",methods:[],displayName:"SaveDraftButton",props:{status:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'auto-saving'
| 'saving'
| 'saved'
| 'error'
| 'disabled'
| 'focused'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'auto-saving'"},{name:"literal",value:"'saving'"},{name:"literal",value:"'saved'"},{name:"literal",value:"'error'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'focused'"}]},description:"Current save/draft status — drives label, colour, and border",defaultValue:{value:"'default'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Override the auto-derived label"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler (no-op when disabled)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class",defaultValue:{value:"''",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"aria-label override"}}};const ie=[{status:"default",label:"Default",description:'Idle state. Sky-blue-100 background, sky-blue border (1px), black text. Label: "Save draft".'},{status:"auto-saving",label:"Auto-saving",description:'Background save in progress (triggered automatically). Same palette as default. Label: "Auto-saving".'},{status:"saving",label:"Saving",description:'User-triggered save in progress. 2px border + blue-400 offset shadow to signal active action. Label: "Saving draft".'},{status:"saved",label:"Saved",description:'Save completed successfully. Green-light background, dark-green border and text. Label: "Draft saved".'},{status:"error",label:"Error",description:'Save failed. Red-light background, status-red border and text. Label: "Unable to save".'},{status:"disabled",label:"Disabled",description:'Button is not interactive (e.g. no changes to save). Gray palette, not-allowed cursor. Label: "Save draft".'},{status:"focused",label:"Focused",description:'Keyboard/programmatic focus. Sky-blue palette with 2px border for a clear focus ring. Label: "Save draft".'}],y=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"Save Draft Button",subtitle:"A pill-shaped status button for auto-save workflows with seven distinct visual states"}),e.jsxs(t.BodyText,{children:["The ",e.jsx("strong",{children:"Save Draft Button"})," is a purpose-built status indicator button used in form and document editing workflows. Unlike a standard button, it communicates the current save state through label changes and colour transitions rather than user interaction alone. The pill shape (",e.jsx("code",{children:"border-radius: full"}),") and sky-blue palette distinguish it clearly from the primary and ghost button families."]}),e.jsxs(t.Section,{title:"MUI Foundation",children:[e.jsxs(t.BodyText,{children:["Built on MUI's ",e.jsx("strong",{children:"ButtonBase"})," — the same accessible primitive used across all interactive elements in the design system. ",e.jsx("code",{children:"ButtonBase"})," provides keyboard activation, disabled propagation, and ",e.jsx("code",{children:"<button>"})," semantics. MUI's"," ",e.jsx("strong",{children:"SaveOutlinedIcon"})," from ",e.jsx("code",{children:"@mui/icons-material/SaveOutlined"})," is used as the floppy-disk save icon. All seven visual states (default, auto-saving, saving, saved, error, disabled, hidden) are implemented purely via CSS Modules and the"," ",e.jsx("code",{children:"--save-draft-*"})," token family."]}),e.jsx(t.CodeBlock,{children:`// MUI base imports
import ButtonBase from '@mui/material/ButtonBase';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

// Root element:
<ButtonBase component="button" className={styles['save-draft-btn']} disabled={disabled} onClick={onClick}>
  <SaveOutlinedIcon className={styles['save-draft-btn__icon']} />
  <span className={styles['save-draft-btn__label']}>{label}</span>
</ButtonBase>`})]}),e.jsxs(t.Section,{title:"Component Anatomy",children:[e.jsxs(t.BodyText,{children:["The button contains two fixed elements: a ",e.jsx("strong",{children:"Save icon"})," (MUI SaveOutlined / floppy disk) always visible on the left, and a ",e.jsx("strong",{children:"label"})," that updates per status. No trailing icon or icon-only mode is supported."]}),e.jsx(t.Anatomy,{preview:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},children:[e.jsx(s,{status:"default"}),e.jsx(s,{status:"saved"}),e.jsx(s,{status:"error"})]}),parts:[{id:1,name:"Container",token:`--btn-save-draft-radius (99999px)
--btn-save-draft-bg (sky-blue-100)
--btn-save-draft-border-color (sky-blue)`,description:"Full-pill shape. Background and border colour change per status. Fixed padding: 12px vertical, 16–24px horizontal."},{id:2,name:"Leading Icon",token:`--btn-save-draft-icon-size (18px)
--btn-save-draft-icon-gap (8px)`,description:"MUI SaveOutlined (floppy disk) icon, always rendered. Size: 18px. Colour inherits from the button text token."},{id:3,name:"Label",token:`--btn-save-draft-font-family (F37 Ginger Pro)
--btn-save-draft-font-weight (300)
--btn-save-draft-font-size (16px)`,description:'Label changes automatically with status: "Save draft", "Auto-saving", "Saving draft", "Draft saved", "Unable to save".'}]})]}),e.jsxs(t.Section,{title:"States",children:[e.jsxs(t.BodyText,{children:["The ",e.jsx("code",{children:"status"})," prop drives the label, background, border colour, and text colour simultaneously. Seven states are available."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",maxWidth:"560px"},children:ie.map(({status:a,label:f,description:x})=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"180px 1fr",alignItems:"start",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(s,{status:a}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-base-black)",marginBottom:"var(--global-spacing-sizing-2px)"},children:f}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-light)",color:"var(--global-color-neutral-gray-600)",lineHeight:"var(--global-type-line-height-label)"},children:x})]})]},a))})]}),e.jsx(t.TokenTable,{title:"Design Tokens — Base",description:"Default (sky-blue) appearance tokens:",tokens:[{name:"--btn-save-draft-bg",description:"Default background — --global-color-primary-sky-blue-100 (#D6F0FB)"},{name:"--btn-save-draft-border-color",description:"Default border — --global-color-primary-sky-blue (#0BA7EA)"},{name:"--btn-save-draft-border-width",description:"Default border width — 1px"},{name:"--btn-save-draft-color",description:"Default text colour — --global-color-base-black (#1C1C1C)"},{name:"--btn-save-draft-radius",description:"Border radius — --global-spacing-radius-full (99999px)"},{name:"--btn-save-draft-padding-v",description:"Vertical padding — 12px (--global-spacing-sizing-12px)"},{name:"--btn-save-draft-padding-h",description:"Horizontal padding (default state) — 16px"},{name:"--btn-save-draft-padding-h-expanded",description:"Horizontal padding (all other states) — 24px"},{name:"--btn-save-draft-icon-size",description:"Save (floppy disk) icon size — 18px"},{name:"--btn-save-draft-icon-gap",description:"Gap between icon and label — 8px"},{name:"--btn-save-draft-font-family",description:"Font family — --brand-font-primary (F37 Ginger Pro)"},{name:"--btn-save-draft-font-weight",description:"Font weight — --global-type-weight-light (300)"},{name:"--btn-save-draft-font-size",description:"Font size — 16px"}]}),e.jsx(t.TokenTable,{title:"Design Tokens — Status Colours",description:"Status-specific overrides applied per state:",tokens:[{name:"--btn-save-draft-shadow-hover",description:"Hover / saving shadow — 2px 2px 0 0 blue-400 (#6171DF)"},{name:"--btn-save-draft-border-width-focus",description:"Focused border width — 2px"},{name:"--btn-save-draft-border-width-saving",description:"Saving border width — 2px"},{name:"--btn-save-draft-bg-saved",description:"Saved background — --global-color-status-green-light (#F2FFF1)"},{name:"--btn-save-draft-border-color-saved",description:"Saved border — --global-color-status-dark-green (#227F1A)"},{name:"--btn-save-draft-color-saved",description:"Saved text — --global-color-status-dark-green (#227F1A)"},{name:"--btn-save-draft-bg-error",description:"Error background — --global-color-status-red-light (#FBEBEB)"},{name:"--btn-save-draft-border-color-error",description:"Error border — --global-color-status-red (#CE2031)"},{name:"--btn-save-draft-color-error",description:"Error text — --global-color-status-red (#CE2031)"},{name:"--btn-save-draft-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-save-draft-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"},{name:"--btn-save-draft-color-disabled",description:"Disabled text — --global-color-neutral-gray-400 (#9CA3AF)"}]}),e.jsx(t.CodeBlock,{children:`import { SaveDraftButton } from '@/components/SaveDraftButton';

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
/>`}),e.jsxs(t.Principles,{children:[e.jsxs(t.PrincipleCard,{number:1,title:"Drive status from your save logic",children:["Map your application's save lifecycle (idle → saving → saved / error) directly to the"," ",e.jsx("code",{children:"status"})," prop. Never manually set colours or labels — let the token system handle visual consistency."]}),e.jsx(t.PrincipleCard,{number:2,title:"Persist the button across all states",children:"Keep the button visible in all states, including saved and error. Hiding it removes important feedback for the user about their document's save status."}),e.jsx(t.PrincipleCard,{number:3,title:"Only one SaveDraftButton per form",children:"Use a single SaveDraftButton per document or form scope. Multiple buttons suggest multiple save targets, which is confusing. If you need section-level saves, use text links instead."})]}),e.jsx(t.Footer,{})]});y.__docgenInfo={description:"",methods:[],displayName:"SaveDraftButtonDocs"};const m=["default","auto-saving","saving","saved","error","disabled","focused"],ye={title:"Atoms/Buttons/Save Draft Button",component:s,parameters:{docs:{page:()=>e.jsx(y,{})}},argTypes:{status:{control:"select",options:m,description:"Drives the label, background, border, and text colour of the button"},label:{control:"text",description:"Overrides the auto-derived label for the current status"}},args:{status:"default"}},n={name:"Documentation",render:()=>e.jsx(y,{}),parameters:{controls:{disable:!0},actions:{disable:!0},chromatic:{disableSnapshot:!0}}},o={name:"Playground",args:{status:"default"}},i={name:"Default",args:{status:"default"}},l={name:"Status / Auto-saving",args:{status:"auto-saving"}},d={name:"Status / Saving",args:{status:"saving"}},c={name:"Status / Saved",args:{status:"saved"}},u={name:"Status / Error",args:{status:"error"}},p={name:"Status / Disabled",args:{status:"disabled"}},v={name:"Component Breakdown",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px"},children:m.map(a=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(s,{status:a}),e.jsx("code",{style:{fontSize:"10px",background:"var(--global-color-neutral-gray-100)",padding:"2px 6px",borderRadius:"4px"},children:a})]},a))}),parameters:{controls:{disable:!0}}},b={name:"All Interactive States",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"24px"},children:m.map(a=>e.jsx(s,{status:a},a))}),parameters:{controls:{disable:!0}}},g={name:"Full Design Matrix (7 variants)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-24px)",alignItems:"flex-start"},children:m.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-20px)"},children:[e.jsx(s,{status:a}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize"},children:a})]},a))}),parameters:{controls:{disable:!0}}};var k,D,j;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <SaveDraftButtonDocs />,
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
}`,...(j=(D=n.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var B,_,w;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Playground',
  args: {
    status: 'default'
  }
}`,...(w=(_=o.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var T,A,z;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    status: 'default'
  }
}`,...(z=(A=i.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var F,C,E;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Status / Auto-saving',
  args: {
    status: 'auto-saving'
  }
}`,...(E=(C=l.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var I,L,U;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Status / Saving',
  args: {
    status: 'saving'
  }
}`,...(U=(L=d.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var M,N,O;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Status / Saved',
  args: {
    status: 'saved'
  }
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,R,H;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Status / Error',
  args: {
    status: 'error'
  }
}`,...(H=(R=u.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var q,G,W;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Status / Disabled',
  args: {
    status: 'disabled'
  }
}`,...(W=(G=p.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var V,K,$;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
          <SaveDraftButton status={status} />
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
}`,...($=(K=v.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px'
  }}>
      {ALL_STATUSES.map(status => <SaveDraftButton key={status} status={status} />)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Full Design Matrix (7 variants)',
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
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Se=["Documentation","Playground","Default","StatusAutoSaving","StatusSaving","StatusSaved","StatusError","StatusDisabled","ComponentBreakdown","AllInteractiveStates","FullDesignMatrix"];export{b as AllInteractiveStates,v as ComponentBreakdown,i as Default,n as Documentation,g as FullDesignMatrix,o as Playground,l as StatusAutoSaving,p as StatusDisabled,u as StatusError,c as StatusSaved,d as StatusSaving,Se as __namedExportsOrder,ye as default};
