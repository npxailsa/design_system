import{j as e,r as S}from"./vendor-react-DbhTI_a3.js";import{b as be}from"./vendor-mui-core-CjcFYzit.js";import{D as n}from"./DocsTemplate-IhRQ5m1Q.js";import"../vite-inject-mocker-entry.js";import"./vendor-misc-BD0vWy5z.js";import"./vendor-emotion-DfrZ-FAO.js";const fe="_wrapper_vlvp3_10",xe="_label_vlvp3_24",p={wrapper:fe,"wrapper--disabled":"_wrapper--disabled_vlvp3_18",label:xe,switch:"_switch_vlvp3_40"},se="M5.99986 13.6134L1.85986 9.47336L3.74653 7.58669L5.99986 9.84669L12.5865 3.25336L14.4732 5.14002L5.99986 13.6134Z",ne="M13.3332 4.60669L11.3932 2.66669L7.99984 6.06002L4.6065 2.66669L2.6665 4.60669L6.05984 8.00002L2.6665 11.3934L4.6065 13.3334L7.99984 9.94002L11.3932 13.3334L13.3332 11.3934L9.93984 8.00002L13.3332 4.60669Z",j=(a,l)=>encodeURIComponent(`<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="${a}" fill="${l}"/></svg>`),he=j(se,"#227f1a"),ye=j(ne,"#ce2031"),ve=j(se,"#B8BEC7"),ke=j(ne,"#B8BEC7"),g=a=>`url("data:image/svg+xml,${a}")`,Se={small:{trackW:44,trackH:24,thumb:18,inset:3},default:{trackW:52,trackH:28,thumb:22,inset:3},large:{trackW:64,trackH:34,thumb:28,inset:3}},I={primary:{on:"var(--global-color-primary-sky-blue)",off:"var(--global-color-primary-blue-dark-blue, #191E3C)"},blue:{on:"var(--global-color-primary-sky-blue)",off:"var(--global-color-primary-blue-dark-blue, #191E3C)"},dark:{on:"var(--global-color-primary-sky-blue)",off:"var(--global-color-primary-blue-dark-blue, #191E3C)"},status:{on:"var(--toggle-track-bg-status-on)",off:"var(--global-color-primary-sky-blue)"}},je={primary:"var(--toggle-track-border-primary)",blue:"var(--toggle-track-border-blue)",dark:"var(--toggle-track-border-dark)",status:"var(--toggle-track-border-status)"},r=({checked:a=!1,onChange:l,size:i="default",variant:t="primary",disabled:o=!1,"aria-label":c,label:s,labelPosition:d="right",className:oe})=>{const ie=L=>{l==null||l(L.target.checked,L)},{trackW:C,trackH:O,thumb:w,inset:z}=Se[i],de=C-w-2*z,ce=g(o?a?ve:ke:a?he:ye),pe=o?"var(--toggle-track-bg-disabled)":a?I[t].on:I[t].off,ge=o?"var(--toggle-track-border-disabled)":je[t],ue=[p.wrapper,o&&p["wrapper--disabled"],oe].filter(Boolean).join(" "),me={width:`${C}px`,height:`${O}px`,padding:0,overflow:"visible","& .MuiSwitch-track":{width:"100%",height:"100%",borderRadius:`${O/2}px`,backgroundColor:`${pe} !important`,opacity:"1 !important",boxShadow:`0 0 0 2px ${ge}`,transition:"background-color 0.2s ease, box-shadow 0.2s ease"},"& .MuiSwitch-switchBase":{padding:`${z}px`,top:0,left:0,"&:hover":{backgroundColor:"transparent"}},"& .MuiSwitch-switchBase.Mui-checked":{transform:`translateX(${de}px)`,color:"white"},"& .MuiSwitch-thumb":{width:`${w}px`,height:`${w}px`,borderRadius:"50%",backgroundColor:"var(--global-color-base-white)",backgroundImage:ce,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"68%",boxShadow:"0 0 0 0.5px var(--global-color-base-black)",transition:"background-image 0.15s ease"},"& .MuiTouchRipple-root":{display:"none"}};return e.jsxs("label",{className:ue,children:[s&&d==="left"&&e.jsx("span",{className:p.label,children:s}),e.jsx(be,{checked:a,onChange:ie,disabled:o,size:"small",inputProps:{"aria-label":c??s??"toggle"},sx:me,disableRipple:!0,className:p.switch}),s&&d==="right"&&e.jsx("span",{className:p.label,children:s})]})};r.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is on",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:"Fires when the toggle changes"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Visual size",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'blue' | 'dark' | 'status'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'status'"}]},description:"Colour variant",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable interaction",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label (for screen readers)"},label:{required:!1,tsType:{name:"string"},description:"Optional visible label rendered beside the toggle"},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Label position relative to the toggle",defaultValue:{value:"'right'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const D=()=>e.jsxs(n,{children:[e.jsx(n.Header,{title:"Toggle",subtitle:"A binary on/off switch built on MUI Switch. Supports primary (sky-blue) and dark (navy) colour variants across three sizes, with disabled states and optional visible labels."}),e.jsxs(n.BodyText,{children:["The ",e.jsx("strong",{children:"Toggle"})," uses MUI ",e.jsx("code",{children:"Switch"})," as its accessible foundation, providing native keyboard navigation, focus management, and ARIA semantics out of the box. All visual treatment — track colour, thumb colour, and sizing — is driven by design tokens."]}),e.jsx(n.Anatomy,{parts:[{number:1,label:"Track",description:"The pill-shaped background. Changes colour from gray (off) to brand colour (on)."},{number:2,label:"Thumb",description:"The circular handle that slides between off and on positions."},{number:3,label:"Label (optional)",description:"A text label rendered left or right of the toggle."}]}),e.jsxs(n.Section,{title:"Variants",children:[e.jsx(n.Subsection,{title:"Primary (Sky-Blue)",children:e.jsxs("div",{style:{display:"flex",gap:"24px",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:[e.jsx(r,{variant:"primary",checked:!1,label:"Off"}),e.jsx(r,{variant:"primary",checked:!0,label:"On"}),e.jsx(r,{variant:"primary",checked:!0,disabled:!0,label:"On — Disabled"})]})}),e.jsx(n.Subsection,{title:"Dark (Navy)",children:e.jsxs("div",{style:{display:"flex",gap:"24px",padding:"var(--global-spacing-sizing-16px) 0",flexWrap:"wrap"},children:[e.jsx(r,{variant:"dark",checked:!1,label:"Off"}),e.jsx(r,{variant:"dark",checked:!0,label:"On"}),e.jsx(r,{variant:"dark",checked:!0,disabled:!0,label:"On — Disabled"})]})})]}),e.jsx(n.Section,{title:"Sizes",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",padding:"var(--global-spacing-sizing-16px) 0"},children:["small","default","large"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"56px",textTransform:"capitalize"},children:a}),e.jsx(r,{size:a,checked:!0,label:`${a}`})]},a))})}),e.jsx(n.TokenTable,{title:"Design Tokens",description:"Toggle uses the following component-level tokens.",tokens:[{name:"--toggle-track-bg",description:"Track background when off (gray-300)"},{name:"--toggle-track-bg-checked",description:"Track background when on — primary (sky-blue)"},{name:"--toggle-track-bg-checked-dark",description:"Track background when on — dark variant (dark-blue)"},{name:"--toggle-track-bg-disabled",description:"Track background when disabled (gray-200)"},{name:"--toggle-track-radius",description:"Track pill border-radius (full)"},{name:"--toggle-thumb-bg",description:"Thumb colour when off (white)"},{name:"--toggle-thumb-bg-checked",description:"Thumb colour when on — primary (white)"},{name:"--toggle-thumb-bg-checked-dark",description:"Thumb colour when on — dark (white)"},{name:"--toggle-thumb-bg-disabled",description:"Thumb colour when disabled (gray-200)"},{name:"--toggle-scale-sm",description:"Scale factor for small size (0.75)"},{name:"--toggle-scale-lg",description:"Scale factor for large size (1.25)"},{name:"--toggle-disabled-opacity",description:"Opacity for disabled state (0.5)"},{name:"--toggle-label-gap",description:"Gap between toggle and its label (8px)"},{name:"--toggle-label-color",description:"Label text colour (base-black)"},{name:"--toggle-label-color-disabled",description:"Label text colour when disabled (gray-400)"}]}),e.jsx(n.CodeBlock,{children:`import { Toggle } from './BuildingBlocks/Toggle';

// Basic usage
<Toggle checked={on} onChange={setOn} label="Notifications" />

// Dark variant
<Toggle variant="dark" checked={on} onChange={setOn} />

// Sizes
<Toggle size="small" checked={on} onChange={setOn} />
<Toggle size="large" checked={on} onChange={setOn} />

// Disabled
<Toggle checked disabled label="Cannot change" />`}),e.jsxs(n.Principles,{children:[e.jsx(n.PrincipleCard,{number:1,title:"Clear On/Off State",children:"Track colour changes unambiguously from neutral gray to brand colour. Never rely on position alone to convey state."}),e.jsx(n.PrincipleCard,{number:2,title:"Accessible by Default",children:"MUI Switch provides keyboard focus, ARIA role switch, and checked state. Always supply an aria-label or visible label."}),e.jsx(n.PrincipleCard,{number:3,title:"Label Context",children:"Include a label to describe what is being toggled. Without a label, users must infer meaning from context alone."})]}),e.jsx(n.Footer,{componentName:"Toggle"})]});D.__docgenInfo={description:"",methods:[],displayName:"ToggleDocs"};const T=["primary","blue","dark","status"],Te=["large","default","small"],Ie={title:"Foundation/BuildingBlocks/Toggles",component:r,parameters:{docs:{page:()=>e.jsx(D,{})}},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["small","default","large"]},variant:{control:"select",options:T},label:{control:"text"},labelPosition:{control:"select",options:["left","right"]}},args:{checked:!1,disabled:!1,size:"default",variant:"primary",label:"Toggle label",labelPosition:"right"}},u={name:"Documentation",render:()=>e.jsx(D,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},m={name:"Playground",render:a=>{const l=()=>{const[i,t]=S.useState(a.checked??!1);return e.jsx("div",{style:{padding:"40px 24px"},children:e.jsx(r,{...a,checked:i,onChange:t})})};return e.jsx(l,{})}},b={name:"Default",render:()=>{const a=()=>{const[l,i]=S.useState(!1);return e.jsx("div",{style:{padding:"40px 24px"},children:e.jsx(r,{checked:l,onChange:i,label:"Toggle"})})};return e.jsx(a,{})},parameters:{controls:{disable:!0}}},f={name:"Sizes",render:()=>{const a=()=>{const[l,i]=S.useState({small:!1,default:!0,large:!1});return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"40px 24px"},children:Te.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"60px",textTransform:"capitalize"},children:t}),e.jsx(r,{size:t,checked:l[t],onChange:o=>i(c=>({...c,[t]:o})),label:`${t}`})]},t))})};return e.jsx(a,{})},parameters:{controls:{disable:!0}}},x={name:"Status — Primary",render:()=>{const a=()=>{const[l,i]=S.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"40px 24px"},children:[e.jsx(r,{variant:"primary",checked:l,onChange:i,label:l?"On":"Off"}),e.jsx(r,{variant:"primary",checked:!0,label:"On (static)"}),e.jsx(r,{variant:"primary",checked:!1,label:"Off (static)"}),e.jsx(r,{variant:"primary",checked:!0,disabled:!0,label:"On — Disabled"}),e.jsx(r,{variant:"primary",checked:!1,disabled:!0,label:"Off — Disabled"})]})};return e.jsx(a,{})},parameters:{controls:{disable:!0}}},h={name:"Status — All Variants",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"40px 24px"},children:T.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"32px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"60px",textTransform:"capitalize"},children:a}),e.jsx(r,{variant:a,checked:!0,label:"On"}),e.jsx(r,{variant:a,checked:!1,label:"Off"})]},a))}),parameters:{controls:{disable:!0}}},y={name:"Status — Disabled",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"40px 24px"},children:T.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"32px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"60px",textTransform:"capitalize"},children:a}),e.jsx(r,{variant:a,checked:!1,disabled:!0,label:"Off"}),e.jsx(r,{variant:a,checked:!0,disabled:!0,label:"On"})]},a))}),parameters:{controls:{disable:!0}}},v={name:"All Interactive States",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"32px",padding:"40px 24px"},children:T.map(a=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",textTransform:"capitalize",marginBottom:"12px"},children:a}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(r,{variant:a,checked:!1,label:"Off"}),e.jsx(r,{variant:a,checked:!0,label:"On"}),e.jsx(r,{variant:a,checked:!1,disabled:!0,label:"Off — Disabled"}),e.jsx(r,{variant:a,checked:!0,disabled:!0,label:"On — Disabled"})]})]},a))}),parameters:{controls:{disable:!0}}},k={name:"Full Design Matrix",render:()=>{const a=["Primary","Blue","Dark","Status","Disabled"],l={fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:700,color:"var(--global-color-neutral-gray-500)",textTransform:"uppercase",letterSpacing:"0.6px",textAlign:"center",padding:"0 4px 8px"},i={fontFamily:"var(--brand-font-primary)",fontSize:"10px",color:"var(--global-color-neutral-gray-400)",textAlign:"right",paddingRight:"12px",whiteSpace:"nowrap"},t={padding:"14px 16px",overflow:"visible"},o={display:"flex",justifyContent:"center",alignItems:"center",overflow:"visible"},c=[["large",!0],["large",!1],["default",!0],["default",!1],["small",!0],["small",!1]];return e.jsx("div",{style:{padding:"40px 32px",overflowX:"auto",overflowY:"visible"},children:e.jsxs("table",{style:{borderCollapse:"separate",borderSpacing:"4px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"80px"}}),a.map(s=>e.jsx("th",{style:l,children:s},s))]})}),e.jsx("tbody",{children:c.map(([s,d])=>e.jsxs("tr",{children:[e.jsxs("td",{style:i,children:[s," ",e.jsx("span",{style:{opacity:.6},children:d?"✓":"✕"})]}),e.jsx("td",{style:t,children:e.jsx("div",{style:o,children:e.jsx(r,{size:s,variant:"primary",checked:d})})}),e.jsx("td",{style:t,children:e.jsx("div",{style:o,children:e.jsx(r,{size:s,variant:"blue",checked:d})})}),e.jsx("td",{style:t,children:e.jsx("div",{style:o,children:e.jsx(r,{size:s,variant:"dark",checked:d})})}),e.jsx("td",{style:t,children:e.jsx("div",{style:o,children:e.jsx(r,{size:s,variant:"status",checked:d})})}),e.jsx("td",{style:t,children:e.jsx("div",{style:o,children:e.jsx(r,{size:s,variant:"primary",checked:d,disabled:!0})})})]},`${s}-${d?"on":"off"}`))})]})})},parameters:{controls:{disable:!0}}};var A,_,B;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <ToggleDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen'
  }
}`,...(B=(_=u.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var R,E,P;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const Demo = () => {
      const [on, setOn] = useState(args.checked ?? false);
      return <div style={{
        padding: '40px 24px'
      }}>
          <Toggle {...args} checked={on} onChange={setOn} />
        </div>;
    };
    return <Demo />;
  }
}`,...(P=(E=m.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var F,N,$;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    const Demo = () => {
      const [on, setOn] = useState(false);
      return <div style={{
        padding: '40px 24px'
      }}>
          <Toggle checked={on} onChange={setOn} label="Toggle" />
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...($=(N=b.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var M,V,W;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => {
    const SizesDemo = () => {
      const [vals, setVals] = useState<Record<ToggleSize, boolean>>({
        small: false,
        default: true,
        large: false
      });
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '40px 24px'
      }}>
          {ALL_SIZES.map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
              <span style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)',
            width: '60px',
            textTransform: 'capitalize'
          }}>
                {size}
              </span>
              <Toggle size={size} checked={vals[size]} onChange={v => setVals(p => ({
            ...p,
            [size]: v
          }))} label={\`\${size}\`} />
            </div>)}
        </div>;
    };
    return <SizesDemo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(V=f.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var H,q,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Status — Primary',
  render: () => {
    const Demo = () => {
      const [on, setOn] = useState(false);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '40px 24px'
      }}>
          <Toggle variant="primary" checked={on} onChange={setOn} label={on ? 'On' : 'Off'} />
          <Toggle variant="primary" checked={true} label="On (static)" />
          <Toggle variant="primary" checked={false} label="Off (static)" />
          <Toggle variant="primary" checked={true} disabled label="On — Disabled" />
          <Toggle variant="primary" checked={false} disabled label="Off — Disabled" />
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=(q=x.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var U,X,Z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Status — All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '40px 24px'
  }}>
      {ALL_VARIANTS.map(variant => <div key={variant} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }}>
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        width: '60px',
        textTransform: 'capitalize'
      }}>
            {variant}
          </span>
          <Toggle variant={variant} checked={true} label="On" />
          <Toggle variant={variant} checked={false} label="Off" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var G,Y,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Status — Disabled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '40px 24px'
  }}>
      {ALL_VARIANTS.map(variant => <div key={variant} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }}>
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        width: '60px',
        textTransform: 'capitalize'
      }}>
            {variant}
          </span>
          <Toggle variant={variant} checked={false} disabled label="Off" />
          <Toggle variant={variant} checked={true} disabled label="On" />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,ee,ae;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px',
    padding: '40px 24px'
  }}>
      {ALL_VARIANTS.map(variant => <div key={variant}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        textTransform: 'capitalize',
        marginBottom: '12px'
      }}>
            {variant}
          </div>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
            <Toggle variant={variant} checked={false} label="Off" />
            <Toggle variant={variant} checked={true} label="On" />
            <Toggle variant={variant} checked={false} disabled label="Off — Disabled" />
            <Toggle variant={variant} checked={true} disabled label="On — Disabled" />
          </div>
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,le;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const COL_LABELS = ['Primary', 'Blue', 'Dark', 'Status', 'Disabled'];
    const headerCell: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: '10px',
      fontWeight: 700,
      color: 'var(--global-color-neutral-gray-500)',
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      textAlign: 'center',
      padding: '0 4px 8px'
    };
    const rowLabel: React.CSSProperties = {
      fontFamily: 'var(--brand-font-primary)',
      fontSize: '10px',
      color: 'var(--global-color-neutral-gray-400)',
      textAlign: 'right',
      paddingRight: '12px',
      whiteSpace: 'nowrap'
    };
    const cell: React.CSSProperties = {
      /* Generous padding so the track's 2px outer box-shadow border
         is fully visible and never clipped by the table cell. */
      padding: '14px 16px',
      overflow: 'visible'
    };
    const cellInner: React.CSSProperties = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'visible'
    };

    // 6 data rows: [size, checked]
    const rows: Array<[ToggleSize, boolean]> = [['large', true], ['large', false], ['default', true], ['default', false], ['small', true], ['small', false]];
    return <div style={{
      padding: '40px 32px',
      overflowX: 'auto',
      overflowY: 'visible'
    }}>
        <table style={{
        borderCollapse: 'separate',
        borderSpacing: '4px'
      }}>
          <thead>
            <tr>
              {/* empty corner */}
              <th style={{
              width: '80px'
            }} />
              {COL_LABELS.map(l => <th key={l} style={headerCell}>{l}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map(([size, checked]) => <tr key={\`\${size}-\${checked ? 'on' : 'off'}\`}>
                <td style={rowLabel}>
                  {size}&nbsp;<span style={{
                opacity: 0.6
              }}>{checked ? '✓' : '✕'}</span>
                </td>
                {/* primary */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="primary" checked={checked} />
                  </div>
                </td>
                {/* blue */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="blue" checked={checked} />
                  </div>
                </td>
                {/* dark */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="dark" checked={checked} />
                  </div>
                </td>
                {/* status */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="status" checked={checked} />
                  </div>
                </td>
                {/* disabled */}
                <td style={cell}>
                  <div style={cellInner}>
                    <Toggle size={size} variant="primary" checked={checked} disabled />
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(le=(te=k.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};const Ae=["Documentation","Playground","Default","Sizes","StatusPrimary","StatusAllVariants","StatusDisabled","AllInteractiveStates","FullDesignMatrix"];export{v as AllInteractiveStates,b as Default,u as Documentation,k as FullDesignMatrix,m as Playground,f as Sizes,h as StatusAllVariants,y as StatusDisabled,x as StatusPrimary,Ae as __namedExportsOrder,Ie as default};
