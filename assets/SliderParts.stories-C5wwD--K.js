import{j as e,R as me,r as p}from"./vendor-react-DbhTI_a3.js";import{a as pe}from"./vendor-mui-core-CjcFYzit.js";import{D as t}from"./DocsTemplate-IhRQ5m1Q.js";import"../vite-inject-mocker-entry.js";import"./vendor-misc-BD0vWy5z.js";import"./vendor-emotion-DfrZ-FAO.js";const ue="_wrapper_1x4i0_18",c={wrapper:ue,"wrapper--small":"_wrapper--small_1x4i0_23","wrapper--large":"_wrapper--large_1x4i0_27","wrapper--disabled":"_wrapper--disabled_1x4i0_31"},ce={small:"small",default:"small",large:"medium"},i=({value:a=0,onChange:r,min:l=0,max:n=100,step:m=1,showMarks:j=!0,showLabels:ee=!1,size:s="default",variant:d="primary",disabled:o=!1,className:ae,"aria-label":re})=>{const ne=Array.isArray(a),le=(ve,u)=>{Array.isArray(u)?r==null||r([u[0],u[1]]):r==null||r(u)},ie=[c.wrapper,c[`wrapper--${s}`],c[`wrapper--${d}`],o&&c["wrapper--disabled"],ae].filter(Boolean).join(" "),D=o?"var(--slider-track-color-disabled)":d==="dark"?"var(--slider-track-color-dark)":"var(--slider-track-color)",z=o?"var(--slider-thumb-color-disabled)":d==="dark"?"var(--slider-thumb-color-dark)":"var(--slider-thumb-color)",te=o?"var(--slider-rail-color-disabled)":"var(--slider-rail-color)",se=o?"var(--slider-mark-color-disabled)":d==="dark"?"var(--slider-mark-color-dark)":"var(--slider-mark-color)",oe={color:D,height:s==="large"?"var(--slider-track-height-lg)":s==="small"?"var(--slider-track-height-sm)":"var(--slider-track-height)",padding:"var(--slider-padding) 0","& .MuiSlider-thumb":{width:s==="large"?"var(--slider-thumb-size-lg)":s==="small"?"var(--slider-thumb-size-sm)":"var(--slider-thumb-size)",height:s==="large"?"var(--slider-thumb-size-lg)":s==="small"?"var(--slider-thumb-size-sm)":"var(--slider-thumb-size)",backgroundColor:z,border:`var(--slider-thumb-border-width) solid ${z}`,boxShadow:"none","&:hover, &.Mui-focusVisible":{boxShadow:`0 0 0 var(--slider-thumb-focus-ring-size) ${d==="dark"?"var(--slider-thumb-focus-ring-dark)":"var(--slider-thumb-focus-ring)"}`},"&.Mui-active":{boxShadow:`0 0 0 var(--slider-thumb-focus-ring-size) ${d==="dark"?"var(--slider-thumb-focus-ring-dark)":"var(--slider-thumb-focus-ring)"}`}},"& .MuiSlider-track":{backgroundColor:D,border:"none",borderRadius:"var(--slider-track-radius)"},"& .MuiSlider-rail":{backgroundColor:te,opacity:1,borderRadius:"var(--slider-track-radius)"},"& .MuiSlider-mark":{backgroundColor:se,width:s==="large"?"var(--slider-mark-size-lg)":s==="small"?"var(--slider-mark-size-sm)":"var(--slider-mark-size)",height:s==="large"?"var(--slider-mark-size-lg)":s==="small"?"var(--slider-mark-size-sm)":"var(--slider-mark-size)",borderRadius:"50%",transform:"translate(-50%, -50%)",opacity:1},"& .MuiSlider-markLabel":{fontFamily:"var(--brand-font-primary)",fontSize:"var(--slider-mark-label-font-size)",color:o?"var(--slider-mark-label-color-disabled)":"var(--slider-mark-label-color)",top:"-var(--slider-mark-label-offset)"},"& .MuiSlider-valueLabel":{fontFamily:"var(--brand-font-primary)",fontSize:"var(--slider-mark-label-font-size)",backgroundColor:z,borderRadius:"var(--global-spacing-radius-4px)"},"& .MuiTouchRipple-root":{display:"none"}},de=j?[{value:l,label:String(l)},{value:n,label:String(n)}]:!1;return e.jsx("div",{className:ie,children:e.jsx(pe,{value:(Array.isArray(a),a),onChange:le,min:l,max:n,step:m,marks:de,size:ce[s],disabled:o,valueLabelDisplay:ee?"auto":"off","aria-label":re,sx:oe,disableSwap:ne})})};i.__docgenInfo={description:"",methods:[],displayName:"SliderParts",props:{value:{required:!1,tsType:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},description:"Current value (single thumb) or [min, max] for range",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | [number, number]) => void",signature:{arguments:[{type:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},name:"value"}],return:{name:"void"}}},description:"Callback fired on change"},min:{required:!1,tsType:{name:"number"},description:"Minimum value of the range",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"Maximum value of the range",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"Step interval",defaultValue:{value:"1",computed:!1}},showMarks:{required:!1,tsType:{name:"boolean"},description:"Show marks at min and max",defaultValue:{value:"true",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"Show value labels above thumbs",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size variant",defaultValue:{value:"'default'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'dark'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'dark'"}]},description:"Colour variant",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable interaction",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"Accessible label"}}};const w=()=>e.jsxs(t,{children:[e.jsx(t.Header,{title:"SliderParts",subtitle:"A single or range slider exposing the individual design-system parts: track, rail, thumb, and endpoint marks. Built on MUI Slider with design-token colours and three sizes."}),e.jsxs(t.BodyText,{children:[e.jsx("strong",{children:"SliderParts"})," wraps MUI ",e.jsx("code",{children:"Slider"})," and applies the Echo design system's colour tokens and sizing scale. The component can operate as a single-thumb slider or a range slider when the ",e.jsx("code",{children:"value"})," prop is an array. Endpoint marks (min/max dots with labels) are shown by default via ",e.jsx("code",{children:"showMarks"}),"."]}),e.jsx(t.Anatomy,{parts:[{number:1,label:"Rail",description:"The full-width background track. Always rendered in a neutral gray."},{number:2,label:"Track",description:"The filled portion of the rail from min (or start thumb) to the current value. Renders in the variant colour."},{number:3,label:"Thumb",description:"The circular drag handle. Rendered in the variant colour."},{number:4,label:"Mark",description:"Dot indicators at min and max endpoints. Labelled with the numeric value."}]}),e.jsxs(t.Section,{title:"Variants",children:[e.jsx(t.Subsection,{title:"Primary (Sky-Blue)",children:e.jsx("div",{style:{padding:"32px 0",maxWidth:"360px"},children:e.jsx(i,{variant:"primary",value:60,min:0,max:100})})}),e.jsx(t.Subsection,{title:"Dark (Navy)",children:e.jsx("div",{style:{padding:"32px 0",maxWidth:"360px"},children:e.jsx(i,{variant:"dark",value:60,min:0,max:100})})})]}),e.jsx(t.Section,{title:"Sizes",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"40px",padding:"32px 0",maxWidth:"360px"},children:["small","default","large"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",width:"56px",textTransform:"capitalize"},children:a}),e.jsx("div",{style:{flex:1},children:e.jsx(i,{size:a,value:50,min:0,max:100})})]},a))})}),e.jsx(t.TokenTable,{title:"Design Tokens",description:"SliderParts uses the following component-level tokens.",tokens:[{name:"--slider-track-color",description:"Track and thumb fill — primary (sky-blue)"},{name:"--slider-track-color-dark",description:"Track and thumb fill — dark (dark-blue)"},{name:"--slider-track-color-disabled",description:"Track fill when disabled (gray-300)"},{name:"--slider-rail-color",description:"Rail background (gray-200)"},{name:"--slider-rail-color-disabled",description:"Rail background when disabled (gray-100)"},{name:"--slider-thumb-color",description:"Thumb fill — primary (sky-blue)"},{name:"--slider-thumb-color-dark",description:"Thumb fill — dark (dark-blue)"},{name:"--slider-thumb-color-disabled",description:"Thumb fill when disabled (gray-300)"},{name:"--slider-thumb-size",description:"Thumb diameter — default size (12px)"},{name:"--slider-thumb-size-sm",description:"Thumb diameter — small size (8px)"},{name:"--slider-thumb-size-lg",description:"Thumb diameter — large size (16px)"},{name:"--slider-track-height",description:"Track height — default size (4px)"},{name:"--slider-track-height-sm",description:"Track height — small size (2px)"},{name:"--slider-track-height-lg",description:"Track height — large size (6px)"},{name:"--slider-mark-size",description:"Endpoint mark dot size — default (8px)"},{name:"--slider-mark-label-font-size",description:"Font size for endpoint labels"},{name:"--slider-disabled-opacity",description:"Opacity when disabled (0.5)"}]}),e.jsx(t.CodeBlock,{children:`import { SliderParts } from './BuildingBlocks/SliderParts';

// Single thumb
<SliderParts value={val} onChange={(v) => setVal(v as number)} min={0} max={100} />

// Dark variant
<SliderParts variant="dark" value={val} onChange={setVal} />

// Range slider
<SliderParts value={[20, 80]} onChange={(v) => setRange(v as [number, number])} />

// Sizes
<SliderParts size="small" value={val} onChange={setVal} />
<SliderParts size="large" value={val} onChange={setVal} />

// Disabled
<SliderParts value={50} disabled />`}),e.jsxs(t.Principles,{children:[e.jsx(t.PrincipleCard,{number:1,title:"Visible Range Cues",children:"Always show endpoint marks (showMarks=true by default) so users understand the full range at a glance without needing to interact."}),e.jsx(t.PrincipleCard,{number:2,title:"Accessible Interaction",children:"MUI Slider provides keyboard support (arrow keys, Home/End) and ARIA attributes. Always supply an aria-label when no visible label is present."}),e.jsx(t.PrincipleCard,{number:3,title:"Consistent Colour",children:"Use primary for standard contexts and dark for high-contrast surfaces or brand-aligned scenarios."})]}),e.jsx(t.Footer,{componentName:"SliderParts"})]});w.__docgenInfo={description:"",methods:[],displayName:"SliderPartsDocs"};const Se={title:"Foundation/BuildingBlocks/SliderParts",component:i,parameters:{docs:{page:()=>e.jsx(w,{})}},argTypes:{value:{control:"number"},min:{control:"number"},max:{control:"number"},size:{control:"select",options:["small","default","large"]},variant:{control:"select",options:["primary","dark"]},disabled:{control:"boolean"},showMarks:{control:"boolean"},showLabels:{control:"boolean"}},args:{value:40,min:0,max:100,size:"default",variant:"primary",disabled:!1,showMarks:!0,showLabels:!1}},v={name:"Documentation",render:()=>e.jsx(w,{}),parameters:{controls:{disable:!0},actions:{disable:!0},layout:"fullscreen"}},x={name:"Playground",render:a=>{const r=()=>{const[l,n]=p.useState(a.value??40);return e.jsx("div",{style:{padding:"40px 24px"},children:e.jsx(i,{...a,value:l,onChange:m=>n(m)})})};return e.jsx(r,{})}},b={name:"Default",render:()=>{const a=()=>{const[r,l]=p.useState(40);return e.jsx("div",{style:{padding:"40px 24px",maxWidth:"320px"},children:e.jsx(i,{value:r,onChange:n=>l(n),min:0,max:100})})};return e.jsx(a,{})},parameters:{controls:{disable:!0}}},g={name:"Sizes",render:()=>{const a=()=>{const[r,l]=p.useState({small:30,default:50,large:70});return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px",padding:"40px 24px"},children:["small","default","large"].map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",width:"56px",textTransform:"capitalize"},children:n}),e.jsx("div",{style:{flex:1,maxWidth:"280px"},children:e.jsx(i,{size:n,value:r[n],onChange:m=>l(j=>({...j,[n]:m})),min:0,max:100})})]},n))})};return e.jsx(a,{})},parameters:{controls:{disable:!0}}},f={name:"Status — Primary",render:()=>{const a=()=>{const[r,l]=p.useState(60);return e.jsxs("div",{style:{padding:"40px 24px",maxWidth:"360px",display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsx(i,{variant:"primary",value:r,onChange:n=>l(n),min:0,max:100}),e.jsx(i,{variant:"primary",value:30,min:0,max:100,disabled:!0})]})};return e.jsx(a,{})},parameters:{controls:{disable:!0}}},y={name:"Status — Dark",render:()=>{const a=()=>{const[r,l]=p.useState(60);return e.jsxs("div",{style:{padding:"40px 24px",maxWidth:"360px",display:"flex",flexDirection:"column",gap:"40px"},children:[e.jsx(i,{variant:"dark",value:r,onChange:n=>l(n),min:0,max:100}),e.jsx(i,{variant:"dark",value:30,min:0,max:100,disabled:!0})]})};return e.jsx(a,{})},parameters:{controls:{disable:!0}}},h={name:"Status — Disabled",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"40px",padding:"40px 24px",maxWidth:"360px"},children:["primary","dark"].map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-500)",marginBottom:"16px",textTransform:"capitalize"},children:[a," — Disabled"]}),e.jsx(i,{variant:a,value:40,min:0,max:100,disabled:!0})]},a))}),parameters:{controls:{disable:!0}}},S={name:"All Interactive States",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px 48px",padding:"40px 24px"},children:["primary","dark"].map(a=>[!1,!0].map(r=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",fontWeight:600,color:"var(--global-color-neutral-gray-500)",marginBottom:"16px",textTransform:"capitalize"},children:[a,r?" — Disabled":""]}),e.jsx(i,{variant:a,value:55,min:0,max:100,disabled:r})]},`${a}-${r}`)))}),parameters:{controls:{disable:!0}}},k={name:"Full Design Matrix",render:()=>{const a=["small","default","large"],r=["primary","dark"];return e.jsx("div",{style:{padding:"24px",overflowX:"auto"},children:r.map(l=>e.jsxs("div",{style:{marginBottom:"40px"},children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"13px",fontWeight:600,color:"var(--global-color-neutral-gray-700)",marginBottom:"16px",textTransform:"capitalize"},children:["Variant: ",l]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"64px 1fr 1fr",gap:"8px 32px",alignItems:"center"},children:[e.jsx("div",{}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:600,color:"var(--global-color-neutral-gray-500)"},children:"Active"}),e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"10px",fontWeight:600,color:"var(--global-color-neutral-gray-500)"},children:"Disabled"}),a.map(n=>e.jsxs(me.Fragment,{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"11px",color:"var(--global-color-neutral-gray-700)",textTransform:"capitalize"},children:n}),e.jsx("div",{style:{paddingTop:"16px",paddingBottom:"16px"},children:e.jsx(i,{variant:l,size:n,value:60,min:0,max:100})}),e.jsx("div",{style:{paddingTop:"16px",paddingBottom:"16px"},children:e.jsx(i,{variant:l,size:n,value:60,min:0,max:100,disabled:!0})})]},n))]})]},l))})},parameters:{controls:{disable:!0}}};var T,P,V;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <SliderPartsDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    },
    layout: 'fullscreen'
  }
}`,...(V=(P=v.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var C,F,M;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Playground',
  render: args => {
    const Demo = () => {
      const [val, setVal] = useState(args.value as number ?? 40);
      return <div style={{
        padding: '40px 24px'
      }}>
          <SliderParts {...args} value={val} onChange={v => setVal(v as number)} />
        </div>;
    };
    return <Demo />;
  }
}`,...(M=(F=x.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var W,A,B;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    const Demo = () => {
      const [val, setVal] = useState(40);
      return <div style={{
        padding: '40px 24px',
        maxWidth: '320px'
      }}>
          <SliderParts value={val} onChange={v => setVal(v as number)} min={0} max={100} />
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(B=(A=b.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var R,_,I;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Sizes',
  render: () => {
    const SizeDemo = () => {
      const [vals, setVals] = useState<Record<SliderPartsSize, number>>({
        small: 30,
        default: 50,
        large: 70
      });
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        padding: '40px 24px'
      }}>
          {(['small', 'default', 'large'] as SliderPartsSize[]).map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
              <span style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)',
            width: '56px',
            textTransform: 'capitalize'
          }}>{size}</span>
              <div style={{
            flex: 1,
            maxWidth: '280px'
          }}>
                <SliderParts size={size} value={vals[size]} onChange={v => setVals(p => ({
              ...p,
              [size]: v as number
            }))} min={0} max={100} />
              </div>
            </div>)}
        </div>;
    };
    return <SizeDemo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(I=(_=g.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var q,$,E;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Status — Primary',
  render: () => {
    const Demo = () => {
      const [val, setVal] = useState(60);
      return <div style={{
        padding: '40px 24px',
        maxWidth: '360px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
          <SliderParts variant="primary" value={val} onChange={v => setVal(v as number)} min={0} max={100} />
          <SliderParts variant="primary" value={30} min={0} max={100} disabled />
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(E=($=f.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var L,N,U;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Status — Dark',
  render: () => {
    const Demo = () => {
      const [val, setVal] = useState(60);
      return <div style={{
        padding: '40px 24px',
        maxWidth: '360px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px'
      }}>
          <SliderParts variant="dark" value={val} onChange={v => setVal(v as number)} min={0} max={100} />
          <SliderParts variant="dark" value={30} min={0} max={100} disabled />
        </div>;
    };
    return <Demo />;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(U=(N=y.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var H,O,X;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Status — Disabled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '40px 24px',
    maxWidth: '360px'
  }}>
      {(['primary', 'dark'] as SliderPartsVariant[]).map(variant => <div key={variant}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '16px',
        textTransform: 'capitalize'
      }}>
            {variant} — Disabled
          </div>
          <SliderParts variant={variant} value={40} min={0} max={100} disabled />
        </div>)}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(O=h.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};var Z,G,J;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'All Interactive States',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px 48px',
    padding: '40px 24px'
  }}>
      {(['primary', 'dark'] as SliderPartsVariant[]).map(variant => [false, true].map(disabled => <div key={\`\${variant}-\${disabled}\`}>
            <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: '11px',
        fontWeight: 600,
        color: 'var(--global-color-neutral-gray-500)',
        marginBottom: '16px',
        textTransform: 'capitalize'
      }}>
              {variant}{disabled ? ' — Disabled' : ''}
            </div>
            <SliderParts variant={variant} value={55} min={0} max={100} disabled={disabled} />
          </div>))}
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Y;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Full Design Matrix',
  render: () => {
    const sizes: SliderPartsSize[] = ['small', 'default', 'large'];
    const variants: SliderPartsVariant[] = ['primary', 'dark'];
    return <div style={{
      padding: '24px',
      overflowX: 'auto'
    }}>
        {variants.map(variant => <div key={variant} style={{
        marginBottom: '40px'
      }}>
            <div style={{
          fontFamily: 'var(--brand-font-primary)',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--global-color-neutral-gray-700)',
          marginBottom: '16px',
          textTransform: 'capitalize'
        }}>
              Variant: {variant}
            </div>
            <div style={{
          display: 'grid',
          gridTemplateColumns: '64px 1fr 1fr',
          gap: '8px 32px',
          alignItems: 'center'
        }}>
              <div />
              <div style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)'
          }}>Active</div>
              <div style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: '10px',
            fontWeight: 600,
            color: 'var(--global-color-neutral-gray-500)'
          }}>Disabled</div>
              {sizes.map(size => <React.Fragment key={size}>
                  <div style={{
              fontFamily: 'var(--brand-font-primary)',
              fontSize: '11px',
              color: 'var(--global-color-neutral-gray-700)',
              textTransform: 'capitalize'
            }}>{size}</div>
                  <div style={{
              paddingTop: '16px',
              paddingBottom: '16px'
            }}>
                    <SliderParts variant={variant} size={size} value={60} min={0} max={100} />
                  </div>
                  <div style={{
              paddingTop: '16px',
              paddingBottom: '16px'
            }}>
                    <SliderParts variant={variant} size={size} value={60} min={0} max={100} disabled />
                  </div>
                </React.Fragment>)}
            </div>
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(Y=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const ke=["Documentation","Playground","Default","Sizes","StatusPrimary","StatusDark","StatusDisabled","AllInteractiveStates","FullDesignMatrix"];export{S as AllInteractiveStates,b as Default,v as Documentation,k as FullDesignMatrix,x as Playground,g as Sizes,y as StatusDark,h as StatusDisabled,f as StatusPrimary,ke as __namedExportsOrder,Se as default};
