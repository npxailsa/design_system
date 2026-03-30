import{j as a}from"./iframe-BgGjAWEx.js";import{B as o}from"./ButtonGroup-BEzh0er2.js";import{D as r}from"./DocsTemplate-CiaQ8bg9.js";import"./preload-helper-Dp1pzeXC.js";import"./Person-q89S11rX.js";import"./createSvgIcon-FWCCJMuS.js";const n=[{variant:"primary",label:"Primary",description:"Blue filled buttons — highest visual weight. Use for the main group action in a toolbar or header."},{variant:"secondary",label:"Secondary",description:"Sky-blue tint buttons — moderate weight. Supporting group actions that accompany a primary control."},{variant:"tertiary",label:"Tertiary",description:"Yellow tint buttons — matches the Tertiary Button palette. Suitable for supplementary or contextual action groups."},{variant:"ghost",label:"Ghost",description:"White background with gray border — lowest visual weight. Use for secondary toolbars or de-emphasised UI zones."}],j=[{size:"lg",label:"Large",btnPx:"52×52px",iconPx:"20px"},{size:"md",label:"Default (md)",btnPx:"42×42px",iconPx:"18px"},{size:"sm",label:"Small",btnPx:"30×30px",iconPx:"16px"},{size:"xs",label:"Extra-small",btnPx:"28×28px",iconPx:"14px"}],ra={display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},v=()=>a.jsxs(r,{children:[a.jsx(r.Header,{title:"Button Group",subtitle:"Horizontal clusters of icon-only square buttons in joined or separate layouts"}),a.jsxs(r.BodyText,{children:["The ",a.jsx("strong",{children:"Button Group"})," component combines multiple icon-only square buttons into a cohesive horizontal cluster. It supports two layouts — ",a.jsx("strong",{children:"joined"})," (buttons share borders, no gap) and ",a.jsx("strong",{children:"separate"})," (individually spaced with a 6 px gap) — across four colour variants and four sizes, matching the rest of the design system's button family."]}),a.jsxs(r.Section,{title:"Component Anatomy",children:[a.jsxs(r.BodyText,{children:["Each slot in the group is a square icon-only ",a.jsx("code",{children:"<button>"})," element. In",a.jsx("strong",{children:" joined"})," mode the borders are merged (left/middle/right corner radii are adjusted and duplicate borders removed). In ",a.jsx("strong",{children:"separate"})," mode the first button uses the selected variant and the second is always ghost for visual contrast."]}),a.jsx(r.Anatomy,{preview:a.jsxs("div",{style:ra,children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:"Joined"}),a.jsx(o,{variant:"primary",size:"md",layout:"joined",count:4})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:"Separate"}),a.jsx(o,{variant:"primary",size:"md",layout:"separate"})]})]}),parts:[{id:1,name:"Container",token:`--btn-group-radius (4px)
--btn-group-gap-separate (6px)`,description:"Flex row container. Joined layout has gap: 0 with merged button borders; separate layout has a 6 px gap between each button."},{id:2,name:"Button Slot",token:`--btn-group-size-md (42×42px)
--btn-group-border-width-filled (0.5px)
--btn-group-border-width (1px)`,description:"Square icon-only button. Size is fixed per the size prop. Border-radius is adjusted per position in joined mode (left / middle / right)."},{id:3,name:"Icon",token:"--btn-group-icon-size-md (18px)",description:"MUI Person icon centred within the button slot. Icon size scales with the size prop. Colour inherits from the variant text token."}]})]}),a.jsxs(r.Section,{title:"Layouts",children:[a.jsx(r.BodyText,{children:"Two layout modes control how buttons relate to each other."}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",minWidth:180},children:[a.jsx("strong",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)"},children:"Joined"}),a.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:1.5},children:"Buttons share borders and appear as a single cohesive strip. All slots use the same variant colour. Default count: 4."})]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:n.map(({variant:e})=>a.jsx(o,{variant:e,size:"md",layout:"joined",count:4},e))})]}),a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",minWidth:180},children:[a.jsx("strong",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)"},children:"Separate"}),a.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:1.5},children:"Two individually spaced buttons with a 6 px gap. The first uses the selected variant; the second is always ghost for visual contrast."})]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:n.map(({variant:e})=>a.jsx(o,{variant:e,size:"md",layout:"separate"},e))})]})]})]}),a.jsxs(r.Section,{title:"Variants",children:[a.jsx(r.BodyText,{children:"Four colour variants ordered by visual weight. Use higher-weight variants to draw attention to primary groupings and lower-weight variants for supporting controls."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:n.map(({variant:e,label:i,description:t})=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[a.jsxs("div",{style:{minWidth:120},children:[a.jsx("strong",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)",display:"block"},children:i}),a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:t})]}),a.jsx(o,{variant:e,size:"md",layout:"joined",count:4})]},e))})]}),a.jsxs(r.Section,{title:"Sizes",children:[a.jsxs(r.BodyText,{children:["Four sizes scale the button slot and icon proportionally. Choose based on the density of the surrounding UI — ",a.jsx("code",{children:"xs"})," and ",a.jsx("code",{children:"sm"})," for dense toolbars,",a.jsx("code",{children:" md"})," for standard controls, and ",a.jsx("code",{children:"lg"})," for prominent headers."]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:j.map(({size:e,label:i,btnPx:t,iconPx:z})=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[a.jsxs("div",{style:{minWidth:140},children:[a.jsx("strong",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)",display:"block"},children:i}),a.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:[t," · icon ",z]})]}),a.jsx(o,{variant:"primary",size:e,layout:"joined",count:4})]},e))})]}),a.jsxs(r.Section,{title:"States",children:[a.jsxs(r.BodyText,{children:["Button groups support a ",a.jsx("strong",{children:"disabled"})," state that applies to the entire group or to individual buttons. Disabled buttons use a neutral gray palette and ignore pointer events."]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)",minWidth:120},children:"Default (active)"}),a.jsx(o,{variant:"primary",size:"md",layout:"joined",count:4})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)",minWidth:120},children:"Disabled (group)"}),a.jsx(o,{variant:"primary",size:"md",layout:"joined",count:4,disabled:!0})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)",minWidth:120},children:"Partial disable"}),a.jsx(o,{variant:"primary",size:"md",layout:"joined",buttons:[{},{disabled:!0},{},{}]})]})]})]}),a.jsxs(r.Section,{title:"All Variants × Sizes",children:[a.jsx(r.BodyText,{children:"Complete reference grid — all four variants shown at every size in joined layout."}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)"},children:n.map(({variant:e,label:i})=>a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-neutral-gray-600)",marginBottom:"var(--global-spacing-sizing-8px)",textTransform:"uppercase",letterSpacing:"0.08em"},children:i}),a.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"center",flexWrap:"wrap"},children:j.map(({size:t,label:z})=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-6px)"},children:[a.jsx(o,{variant:e,size:t,layout:"joined",count:4}),a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:z})]},t))})]},e))})]}),a.jsx(r.TokenTable,{title:"Design Tokens — Shared",description:"Tokens shared across all ButtonGroup variants and sizes:",tokens:[{name:"--btn-group-radius",description:"Border radius — 4px (--global-spacing-radius-4px)"},{name:"--btn-group-border-width",description:"Border width for ghost & tertiary — 1px (--global-spacing-stroke-1px)"},{name:"--btn-group-border-width-filled",description:"Border width for primary & secondary — 0.5px (--global-spacing-stroke-0-5px)"},{name:"--btn-group-gap-separate",description:"Gap between buttons in separate layout — 6px (--global-spacing-sizing-6px)"},{name:"--btn-group-transition-duration",description:"Transition duration — var(--global-animation-duration-fast)"},{name:"--btn-group-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50"},{name:"--btn-group-border-disabled",description:"Disabled border — --global-color-neutral-gray-200"},{name:"--btn-group-color-disabled",description:"Disabled icon/text — --global-color-neutral-gray-400"}]}),a.jsx(r.TokenTable,{title:"Design Tokens — Variants",description:"Per-variant colour tokens:",tokens:[{name:"--btn-group-primary-bg",description:"Primary background — --brand-primary (#3776CE)"},{name:"--btn-group-primary-border",description:"Primary border — --global-color-primary-blue-blue-300"},{name:"--btn-group-primary-color",description:"Primary icon — --global-color-base-white"},{name:"--btn-group-primary-bg-hover",description:"Primary hover — --global-color-primary-blue-blue-400"},{name:"--btn-group-secondary-bg",description:"Secondary background — --global-color-primary-sky-blue-100"},{name:"--btn-group-secondary-border",description:"Secondary border — --global-color-primary-sky-blue"},{name:"--btn-group-secondary-color",description:"Secondary icon — --global-color-base-black"},{name:"--btn-group-tertiary-bg",description:"Tertiary background — --global-color-primary-yellow-200"},{name:"--btn-group-tertiary-border",description:"Tertiary border — --global-color-primary-yellow-dark"},{name:"--btn-group-tertiary-color",description:"Tertiary icon — --global-color-base-black"},{name:"--btn-group-ghost-bg",description:"Ghost background — --global-color-base-white"},{name:"--btn-group-ghost-border",description:"Ghost border — --global-color-neutral-gray-500"},{name:"--btn-group-ghost-color",description:"Ghost icon — --global-color-base-black"}]}),a.jsx(r.TokenTable,{title:"Design Tokens — Sizes",description:"Button slot and icon sizing per size:",tokens:[{name:"--btn-group-size-xs",description:"Extra-small button — 28×28px (--global-spacing-sizing-28px)"},{name:"--btn-group-icon-size-xs",description:"Extra-small icon — 14px (--global-spacing-sizing-14px)"},{name:"--btn-group-size-sm",description:"Small button — 30×30px"},{name:"--btn-group-icon-size-sm",description:"Small icon — 16px (--global-spacing-sizing-16px)"},{name:"--btn-group-size-md",description:"Default button — 42×42px (--global-spacing-sizing-42px)"},{name:"--btn-group-icon-size-md",description:"Default icon — 18px (--global-spacing-sizing-18px)"},{name:"--btn-group-size-lg",description:"Large button — 52×52px (--global-spacing-sizing-52px)"},{name:"--btn-group-icon-size-lg",description:"Large icon — 20px (--global-spacing-sizing-20px)"}]}),a.jsx(r.CodeBlock,{children:`import { ButtonGroup } from '@/components/ButtonGroup';

// Joined layout — 4 buttons of the same variant
<ButtonGroup variant="primary" size="md" layout="joined" count={4} />
<ButtonGroup variant="secondary" size="md" layout="joined" count={4} />
<ButtonGroup variant="tertiary" size="md" layout="joined" count={4} />
<ButtonGroup variant="ghost" size="md" layout="joined" count={4} />

// Separate layout — 2 buttons (primary + ghost)
<ButtonGroup variant="primary" size="md" layout="separate" />

// With per-button click handlers
<ButtonGroup
  variant="primary"
  size="md"
  layout="joined"
  buttons={[
    { ariaLabel: 'View', onClick: handleView },
    { ariaLabel: 'Edit', onClick: handleEdit },
    { ariaLabel: 'Share', onClick: handleShare },
    { ariaLabel: 'Delete', onClick: handleDelete },
  ]}
/>

// Different sizes
<ButtonGroup variant="primary" size="lg" layout="joined" count={4} />
<ButtonGroup variant="primary" size="sm" layout="joined" count={4} />
<ButtonGroup variant="primary" size="xs" layout="joined" count={4} />

// Disabled (entire group)
<ButtonGroup variant="primary" size="md" layout="joined" disabled />

// Partial disable (individual buttons)
<ButtonGroup
  variant="primary"
  size="md"
  layout="joined"
  buttons={[{}, { disabled: true }, {}, {}]}
/>`}),a.jsxs(r.Principles,{children:[a.jsxs(r.PrincipleCard,{number:1,title:"Use joined for cohesive action sets",children:["Use ",a.jsx("code",{children:"joined"})," layout when the buttons represent related, mutually-exclusive or complementary actions that belong together — e.g. view modes, pagination controls, or alignment options."]}),a.jsx(r.PrincipleCard,{number:2,title:"Limit groups to 2–6 buttons",children:"Keep button groups concise. More than six icons without labels become opaque to the user. Consider a dropdown or menu component for larger action sets."}),a.jsxs(r.PrincipleCard,{number:3,title:"Match the density of the surrounding UI",children:["Choose size based on context — ",a.jsx("code",{children:"xs"})," / ",a.jsx("code",{children:"sm"})," for dense data grids,",a.jsx("code",{children:" md"})," for standard toolbars, and ",a.jsx("code",{children:"lg"})," for prominent header areas with generous spacing."]})]}),a.jsx(r.Footer,{})]});v.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupDocs"};const f=["primary","secondary","tertiary","ghost"],h=["lg","md","sm","xs"],oa=["joined","separate"],da={title:"Atoms/Buttons/Button Group",component:o,parameters:{docs:{page:()=>a.jsx(v,{})}},argTypes:{variant:{control:"select",options:f,description:"Colour variant: primary (blue), secondary (sky-blue), tertiary (yellow), ghost (outline)"},size:{control:"select",options:h,description:"Button slot size — xs (28px), sm (30px), md (42px), lg (52px)"},layout:{control:"select",options:oa,description:"joined — connected strip, no gap; separate — 6 px gap pair (primary + ghost)"},count:{control:{type:"number",min:1,max:8},description:"Number of button slots (default: 4 joined, 2 separate)"},disabled:{control:"boolean",description:"Disable all buttons in the group"}},args:{variant:"primary",size:"md",layout:"joined",count:4,disabled:!1}},s={name:"Documentation",render:()=>a.jsx(v,{}),parameters:{docs:{page:()=>a.jsx(v,{})}}},l={name:"All Variants",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",marginBottom:"var(--global-spacing-sizing-12px)",textTransform:"uppercase",letterSpacing:"0.08em"},children:"Separate layout"}),a.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"center",flexWrap:"wrap"},children:h.map(e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-6px)"},children:[a.jsx(o,{variant:"primary",size:e,layout:"separate"}),a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:e})]},e))})]}),f.map(e=>a.jsxs("div",{children:[a.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",marginBottom:"var(--global-spacing-sizing-12px)",textTransform:"uppercase",letterSpacing:"0.08em"},children:[e," · joined"]}),a.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"center",flexWrap:"wrap"},children:h.map(i=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-6px)"},children:[a.jsx(o,{variant:e,size:i,layout:"joined",count:4}),a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:i})]},i))})]},e))]})},p={name:"Primary",args:{variant:"primary",layout:"joined",count:4}},d={name:"Secondary",args:{variant:"secondary",layout:"joined",count:4}},c={name:"Tertiary",args:{variant:"tertiary",layout:"joined",count:4}},g={name:"Ghost",args:{variant:"ghost",layout:"joined",count:4}},u={name:"Joined Layout",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:f.map(e=>a.jsx(o,{variant:e,size:"md",layout:"joined",count:4},e))})},m={name:"Separate Layout",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:f.map(e=>a.jsx(o,{variant:e,size:"md",layout:"separate"},e))})},y={name:"All Sizes",render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",alignItems:"flex-start"},children:h.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[a.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",width:80},children:e}),a.jsx(o,{variant:"primary",size:e,layout:"joined",count:4})]},e))})},b={name:"Disabled",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[a.jsx(o,{variant:"primary",size:"md",layout:"joined",count:4,disabled:!0}),a.jsx(o,{variant:"secondary",size:"md",layout:"joined",count:4,disabled:!0}),a.jsx(o,{variant:"tertiary",size:"md",layout:"joined",count:4,disabled:!0}),a.jsx(o,{variant:"ghost",size:"md",layout:"joined",count:4,disabled:!0})]})},x={name:"Partial Disable",render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[a.jsx(o,{variant:"primary",size:"md",layout:"joined",buttons:[{},{disabled:!0},{},{}]}),a.jsx(o,{variant:"ghost",size:"md",layout:"joined",buttons:[{},{},{disabled:!0},{}]})]})};var S,D,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <ButtonGroupDocs />,
  parameters: {
    docs: {
      page: () => <ButtonGroupDocs />
    }
  }
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var B,k,I;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-32px)'
  }}>
      {/* Separate (2-button pair) */}
      <div>
        <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-600)',
        marginBottom: 'var(--global-spacing-sizing-12px)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
          Separate layout
        </div>
        <div style={{
        display: 'flex',
        gap: 'var(--global-spacing-sizing-24px)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          {ALL_SIZES.map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--global-spacing-sizing-6px)'
        }}>
              <ButtonGroup variant="primary" size={size} layout="separate" />
              <span style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: 'var(--global-type-size-primary-label-xs)',
            color: 'var(--global-color-neutral-gray-500)'
          }}>{size}</span>
            </div>)}
        </div>
      </div>

      {/* Joined — each variant */}
      {ALL_VARIANTS.map(variant => <div key={variant}>
          <div style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-600)',
        marginBottom: 'var(--global-spacing-sizing-12px)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em'
      }}>
            {variant} · joined
          </div>
          <div style={{
        display: 'flex',
        gap: 'var(--global-spacing-sizing-24px)',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
            {ALL_SIZES.map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--global-spacing-sizing-6px)'
        }}>
                <ButtonGroup variant={variant} size={size} layout="joined" count={4} />
                <span style={{
            fontFamily: 'var(--brand-font-primary)',
            fontSize: 'var(--global-type-size-primary-label-xs)',
            color: 'var(--global-color-neutral-gray-500)'
          }}>{size}</span>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var T,G,L;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    variant: 'primary',
    layout: 'joined',
    count: 4
  }
}`,...(L=(G=p.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var A,P,F;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Secondary',
  args: {
    variant: 'secondary',
    layout: 'joined',
    count: 4
  }
}`,...(F=(P=d.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var W,C,E;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Tertiary',
  args: {
    variant: 'tertiary',
    layout: 'joined',
    count: 4
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var _,V,U;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Ghost',
  args: {
    variant: 'ghost',
    layout: 'joined',
    count: 4
  }
}`,...(U=(V=g.parameters)==null?void 0:V.docs)==null?void 0:U.source}}};var J,R,N;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Joined Layout',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_VARIANTS.map(v => <ButtonGroup key={v} variant={v} size="md" layout="joined" count={4} />)}
    </div>
}`,...(N=(R=u.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var q,Z,H;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Separate Layout',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_VARIANTS.map(v => <ButtonGroup key={v} variant={v} size="md" layout="separate" />)}
    </div>
}`,...(H=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var M,O,Y;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)',
    alignItems: 'flex-start'
  }}>
      {ALL_SIZES.map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--global-spacing-sizing-16px)'
    }}>
          <span style={{
        fontFamily: 'var(--brand-font-primary)',
        fontSize: 'var(--global-type-size-primary-label-xs)',
        color: 'var(--global-color-neutral-gray-600)',
        width: 80
      }}>{size}</span>
          <ButtonGroup variant="primary" size={size} layout="joined" count={4} />
        </div>)}
    </div>
}`,...(Y=(O=y.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var $,K,Q;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Disabled',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      <ButtonGroup variant="primary" size="md" layout="joined" count={4} disabled />
      <ButtonGroup variant="secondary" size="md" layout="joined" count={4} disabled />
      <ButtonGroup variant="tertiary" size="md" layout="joined" count={4} disabled />
      <ButtonGroup variant="ghost" size="md" layout="joined" count={4} disabled />
    </div>
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,aa,ea;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Partial Disable',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      <ButtonGroup variant="primary" size="md" layout="joined" buttons={[{}, {
      disabled: true
    }, {}, {}]} />
      <ButtonGroup variant="ghost" size="md" layout="joined" buttons={[{}, {}, {
      disabled: true
    }, {}]} />
    </div>
}`,...(ea=(aa=x.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};const ca=["Documentation","AllVariants","Primary","Secondary","Tertiary","Ghost","Joined","Separate","Sizes","Disabled","PartialDisable"];export{l as AllVariants,b as Disabled,s as Documentation,g as Ghost,u as Joined,x as PartialDisable,p as Primary,d as Secondary,m as Separate,y as Sizes,c as Tertiary,ca as __namedExportsOrder,da as default};
