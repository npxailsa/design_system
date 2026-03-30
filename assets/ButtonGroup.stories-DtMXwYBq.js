import{j as e}from"./iframe-C5wYm6V4.js";import{P as xe}from"./Person-BjCti7c2.js";import{D as r}from"./DocsTemplate-BnM2UxzU.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-DKLRlYih.js";const n={"btn-group":"_btn-group_3zru7_12","btn-group--joined":"_btn-group--joined_3zru7_29","btn-group--separate":"_btn-group--separate_3zru7_33","btn-group__btn":"_btn-group__btn_3zru7_41","btn-group--xs":"_btn-group--xs_3zru7_66","btn-group--sm":"_btn-group--sm_3zru7_74","btn-group--md":"_btn-group--md_3zru7_82","btn-group--lg":"_btn-group--lg_3zru7_90","btn-group__icon":"_btn-group__icon_3zru7_98","btn-group__btn--primary":"_btn-group__btn--primary_3zru7_127","btn-group__btn--secondary":"_btn-group__btn--secondary_3zru7_139","btn-group__btn--tertiary":"_btn-group__btn--tertiary_3zru7_151","btn-group__btn--ghost":"_btn-group__btn--ghost_3zru7_163","btn-group__btn--left":"_btn-group__btn--left_3zru7_179","btn-group__btn--middle":"_btn-group__btn--middle_3zru7_184","btn-group__btn--right":"_btn-group__btn--right_3zru7_190","btn-group__btn--solo":"_btn-group__btn--solo_3zru7_196","btn-group--disabled":"_btn-group--disabled_3zru7_204","btn-group__btn--disabled":"_btn-group__btn--disabled_3zru7_205"},o=({variant:a="primary",size:t="md",layout:i="joined",count:p,buttons:d,disabled:D=!1,className:pe=""})=>{const de=i==="joined"?4:2,ce=(d==null?void 0:d.length)??p??de,k=d??Array.from({length:ce},()=>({})),ue=[n["btn-group"],n[`btn-group--${a}`],n[`btn-group--${t}`],n[`btn-group--${i}`],D?n["btn-group--disabled"]:"",pe].filter(Boolean).join(" "),ge=(l,s)=>i!=="joined"?"":s===1?n["btn-group__btn--solo"]:l===0?n["btn-group__btn--left"]:l===s-1?n["btn-group__btn--right"]:n["btn-group__btn--middle"],me=l=>i==="separate"&&l===1?"ghost":a;return e.jsx("div",{className:ue,role:"group","aria-label":"Button group",children:k.map((l,s)=>{const B=D||(l.disabled??!1),be=me(s),ye=[n["btn-group__btn"],n[`btn-group__btn--${be}`],ge(s,k.length),B?n["btn-group__btn--disabled"]:""].filter(Boolean).join(" ");return e.jsx("button",{type:"button",className:ye,onClick:B?void 0:l.onClick,disabled:B,"aria-label":l.ariaLabel??`Action ${s+1}`,children:e.jsx(xe,{className:n["btn-group__icon"],"aria-hidden":"true"})},s)})})};o.__docgenInfo={description:"ButtonGroup — horizontal row of icon-only square buttons.\n\n**Layouts**\n- `joined`   — Buttons are connected (no gap, shared borders). Default count: 4.\n- `separate` — Buttons are spaced individually (6px gap). Default count: 2.\n  In `separate` mode the first button uses the selected `variant`; the second is always `ghost`.\n\n**Variants**\n- `primary`   — Blue filled (`--brand-primary`)\n- `secondary` — Sky-blue tint (`--global-color-primary-sky-blue-100`)\n- `tertiary`  — Yellow tint (`--global-color-primary-yellow-200`)\n- `ghost`     — White background, gray outline\n\n**Sizes**\n- `xs` — 28×28px, 14px icon\n- `sm` — 30×30px, 16px icon\n- `md` — 42×42px, 18px icon (default)\n- `lg` — 52×52px, 20px icon",methods:[],displayName:"ButtonGroup",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'joined' | 'separate'",elements:[{name:"literal",value:"'joined'"},{name:"literal",value:"'separate'"}]},description:"",defaultValue:{value:"'joined'",computed:!1}},count:{required:!1,tsType:{name:"number"},description:"Total number of buttons to render (overrides default per layout)"},buttons:{required:!1,tsType:{name:"Array",elements:[{name:"ButtonGroupItemConfig"}],raw:"ButtonGroupItemConfig[]"},description:"Per-button configuration array. Length overrides `count` when provided."},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable all buttons in the group",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const c=[{variant:"primary",label:"Primary",description:"Blue filled buttons — highest visual weight. Use for the main group action in a toolbar or header."},{variant:"secondary",label:"Secondary",description:"Sky-blue tint buttons — moderate weight. Supporting group actions that accompany a primary control."},{variant:"tertiary",label:"Tertiary",description:"Yellow tint buttons — matches the Tertiary Button palette. Suitable for supplementary or contextual action groups."},{variant:"ghost",label:"Ghost",description:"White background with gray border — lowest visual weight. Use for secondary toolbars or de-emphasised UI zones."}],T=[{size:"lg",label:"Large",btnPx:"52×52px",iconPx:"20px"},{size:"md",label:"Default (md)",btnPx:"42×42px",iconPx:"18px"},{size:"sm",label:"Small",btnPx:"30×30px",iconPx:"16px"},{size:"xs",label:"Extra-small",btnPx:"28×28px",iconPx:"14px"}],ve={display:"flex",alignItems:"center",justifyContent:"center",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)",flexWrap:"wrap"},_=()=>e.jsxs(r,{children:[e.jsx(r.Header,{title:"Button Group",subtitle:"Horizontal clusters of icon-only square buttons in joined or separate layouts"}),e.jsxs(r.BodyText,{children:["The ",e.jsx("strong",{children:"Button Group"})," component combines multiple icon-only square buttons into a cohesive horizontal cluster. It supports two layouts — ",e.jsx("strong",{children:"joined"})," (buttons share borders, no gap) and ",e.jsx("strong",{children:"separate"})," (individually spaced with a 6 px gap) — across four colour variants and four sizes, matching the rest of the design system's button family."]}),e.jsxs(r.Section,{title:"Component Anatomy",children:[e.jsxs(r.BodyText,{children:["Each slot in the group is a square icon-only ",e.jsx("code",{children:"<button>"})," element. In",e.jsx("strong",{children:" joined"})," mode the borders are merged (left/middle/right corner radii are adjusted and duplicate borders removed). In ",e.jsx("strong",{children:"separate"})," mode the first button uses the selected variant and the second is always ghost for visual contrast."]}),e.jsx(r.Anatomy,{preview:e.jsxs("div",{style:ve,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:"Joined"}),e.jsx(o,{variant:"primary",size:"md",layout:"joined",count:4})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:"Separate"}),e.jsx(o,{variant:"primary",size:"md",layout:"separate"})]})]}),parts:[{id:1,name:"Container",token:`--btn-group-radius (4px)
--btn-group-gap-separate (6px)`,description:"Flex row container. Joined layout has gap: 0 with merged button borders; separate layout has a 6 px gap between each button."},{id:2,name:"Button Slot",token:`--btn-group-size-md (42×42px)
--btn-group-border-width-filled (0.5px)
--btn-group-border-width (1px)`,description:"Square icon-only button. Size is fixed per the size prop. Border-radius is adjusted per position in joined mode (left / middle / right)."},{id:3,name:"Icon",token:"--btn-group-icon-size-md (18px)",description:"MUI Person icon centred within the button slot. Icon size scales with the size prop. Colour inherits from the variant text token."}]})]}),e.jsxs(r.Section,{title:"Layouts",children:[e.jsx(r.BodyText,{children:"Two layout modes control how buttons relate to each other."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",minWidth:180},children:[e.jsx("strong",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)"},children:"Joined"}),e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:1.5},children:"Buttons share borders and appear as a single cohesive strip. All slots use the same variant colour. Default count: 4."})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:c.map(({variant:a})=>e.jsx(o,{variant:a,size:"md",layout:"joined",count:4},a))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)",minWidth:180},children:[e.jsx("strong",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)"},children:"Separate"}),e.jsx("p",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",lineHeight:1.5},children:"Two individually spaced buttons with a 6 px gap. The first uses the selected variant; the second is always ghost for visual contrast."})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:c.map(({variant:a})=>e.jsx(o,{variant:a,size:"md",layout:"separate"},a))})]})]})]}),e.jsxs(r.Section,{title:"Variants",children:[e.jsx(r.BodyText,{children:"Four colour variants ordered by visual weight. Use higher-weight variants to draw attention to primary groupings and lower-weight variants for supporting controls."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:c.map(({variant:a,label:t,description:i})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[e.jsxs("div",{style:{minWidth:120},children:[e.jsx("strong",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)",display:"block"},children:t}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:i})]}),e.jsx(o,{variant:a,size:"md",layout:"joined",count:4})]},a))})]}),e.jsxs(r.Section,{title:"Sizes",children:[e.jsxs(r.BodyText,{children:["Four sizes scale the button slot and icon proportionally. Choose based on the density of the surrounding UI — ",e.jsx("code",{children:"xs"})," and ",e.jsx("code",{children:"sm"})," for dense toolbars,",e.jsx("code",{children:" md"})," for standard controls, and ",e.jsx("code",{children:"lg"})," for prominent headers."]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:T.map(({size:a,label:t,btnPx:i,iconPx:p})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[e.jsxs("div",{style:{minWidth:140},children:[e.jsx("strong",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)",display:"block"},children:t}),e.jsxs("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)"},children:[i," · icon ",p]})]}),e.jsx(o,{variant:"primary",size:a,layout:"joined",count:4})]},a))})]}),e.jsxs(r.Section,{title:"States",children:[e.jsxs(r.BodyText,{children:["Button groups support a ",e.jsx("strong",{children:"disabled"})," state that applies to the entire group or to individual buttons. Disabled buttons use a neutral gray palette and ignore pointer events."]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)",minWidth:120},children:"Default (active)"}),e.jsx(o,{variant:"primary",size:"md",layout:"joined",count:4})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)",minWidth:120},children:"Disabled (group)"}),e.jsx(o,{variant:"primary",size:"md",layout:"joined",count:4,disabled:!0})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-24px)",flexWrap:"wrap"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",color:"var(--global-color-base-black)",minWidth:120},children:"Partial disable"}),e.jsx(o,{variant:"primary",size:"md",layout:"joined",buttons:[{},{disabled:!0},{},{}]})]})]})]}),e.jsxs(r.Section,{title:"All Variants × Sizes",children:[e.jsx(r.BodyText,{children:"Complete reference grid — all four variants shown at every size in joined layout."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-24px)"},children:c.map(({variant:a,label:t})=>e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",fontWeight:"var(--global-type-weight-default)",color:"var(--global-color-neutral-gray-600)",marginBottom:"var(--global-spacing-sizing-8px)",textTransform:"uppercase",letterSpacing:"0.08em"},children:t}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"center",flexWrap:"wrap"},children:T.map(({size:i,label:p})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx(o,{variant:a,size:i,layout:"joined",count:4}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:p})]},i))})]},a))})]}),e.jsx(r.TokenTable,{title:"Design Tokens — Shared",description:"Tokens shared across all ButtonGroup variants and sizes:",tokens:[{name:"--btn-group-radius",description:"Border radius — 4px (--global-spacing-radius-4px)"},{name:"--btn-group-border-width",description:"Border width for ghost & tertiary — 1px (--global-spacing-stroke-1px)"},{name:"--btn-group-border-width-filled",description:"Border width for primary & secondary — 0.5px (--global-spacing-stroke-0-5px)"},{name:"--btn-group-gap-separate",description:"Gap between buttons in separate layout — 6px (--global-spacing-sizing-6px)"},{name:"--btn-group-transition-duration",description:"Transition duration — var(--global-animation-duration-fast)"},{name:"--btn-group-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50"},{name:"--btn-group-border-disabled",description:"Disabled border — --global-color-neutral-gray-200"},{name:"--btn-group-color-disabled",description:"Disabled icon/text — --global-color-neutral-gray-400"}]}),e.jsx(r.TokenTable,{title:"Design Tokens — Variants",description:"Per-variant colour tokens:",tokens:[{name:"--btn-group-primary-bg",description:"Primary background — --brand-primary (#3776CE)"},{name:"--btn-group-primary-border",description:"Primary border — --global-color-primary-blue-blue-300"},{name:"--btn-group-primary-color",description:"Primary icon — --global-color-base-white"},{name:"--btn-group-primary-bg-hover",description:"Primary hover — --global-color-primary-blue-blue-400"},{name:"--btn-group-secondary-bg",description:"Secondary background — --global-color-primary-sky-blue-100"},{name:"--btn-group-secondary-border",description:"Secondary border — --global-color-primary-sky-blue"},{name:"--btn-group-secondary-color",description:"Secondary icon — --global-color-base-black"},{name:"--btn-group-tertiary-bg",description:"Tertiary background — --global-color-primary-yellow-200"},{name:"--btn-group-tertiary-border",description:"Tertiary border — --global-color-primary-yellow-dark"},{name:"--btn-group-tertiary-color",description:"Tertiary icon — --global-color-base-black"},{name:"--btn-group-ghost-bg",description:"Ghost background — --global-color-base-white"},{name:"--btn-group-ghost-border",description:"Ghost border — --global-color-neutral-gray-500"},{name:"--btn-group-ghost-color",description:"Ghost icon — --global-color-base-black"}]}),e.jsx(r.TokenTable,{title:"Design Tokens — Sizes",description:"Button slot and icon sizing per size:",tokens:[{name:"--btn-group-size-xs",description:"Extra-small button — 28×28px (--global-spacing-sizing-28px)"},{name:"--btn-group-icon-size-xs",description:"Extra-small icon — 14px (--global-spacing-sizing-14px)"},{name:"--btn-group-size-sm",description:"Small button — 30×30px"},{name:"--btn-group-icon-size-sm",description:"Small icon — 16px (--global-spacing-sizing-16px)"},{name:"--btn-group-size-md",description:"Default button — 42×42px (--global-spacing-sizing-42px)"},{name:"--btn-group-icon-size-md",description:"Default icon — 18px (--global-spacing-sizing-18px)"},{name:"--btn-group-size-lg",description:"Large button — 52×52px (--global-spacing-sizing-52px)"},{name:"--btn-group-icon-size-lg",description:"Large icon — 20px (--global-spacing-sizing-20px)"}]}),e.jsx(r.CodeBlock,{children:`import { ButtonGroup } from '@/components/ButtonGroup';

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
/>`}),e.jsxs(r.Principles,{children:[e.jsxs(r.PrincipleCard,{number:1,title:"Use joined for cohesive action sets",children:["Use ",e.jsx("code",{children:"joined"})," layout when the buttons represent related, mutually-exclusive or complementary actions that belong together — e.g. view modes, pagination controls, or alignment options."]}),e.jsx(r.PrincipleCard,{number:2,title:"Limit groups to 2–6 buttons",children:"Keep button groups concise. More than six icons without labels become opaque to the user. Consider a dropdown or menu component for larger action sets."}),e.jsxs(r.PrincipleCard,{number:3,title:"Match the density of the surrounding UI",children:["Choose size based on context — ",e.jsx("code",{children:"xs"})," / ",e.jsx("code",{children:"sm"})," for dense data grids,",e.jsx("code",{children:" md"})," for standard toolbars, and ",e.jsx("code",{children:"lg"})," for prominent header areas with generous spacing."]})]}),e.jsx(r.Footer,{})]});_.__docgenInfo={description:"",methods:[],displayName:"ButtonGroupDocs"};const w=["primary","secondary","tertiary","ghost"],S=["lg","md","sm","xs"],fe=["joined","separate"],we={title:"Atoms/Buttons/Button Group",component:o,parameters:{docs:{page:()=>e.jsx(_,{})}},argTypes:{variant:{control:"select",options:w,description:"Colour variant: primary (blue), secondary (sky-blue), tertiary (yellow), ghost (outline)"},size:{control:"select",options:S,description:"Button slot size — xs (28px), sm (30px), md (42px), lg (52px)"},layout:{control:"select",options:fe,description:"joined — connected strip, no gap; separate — 6 px gap pair (primary + ghost)"},count:{control:{type:"number",min:1,max:8},description:"Number of button slots (default: 4 joined, 2 separate)"},disabled:{control:"boolean",description:"Disable all buttons in the group"}},args:{variant:"primary",size:"md",layout:"joined",count:4,disabled:!1}},u={name:"Documentation",render:()=>e.jsx(_,{}),parameters:{docs:{page:()=>e.jsx(_,{})}}},g={name:"All Variants",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-32px)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",marginBottom:"var(--global-spacing-sizing-12px)",textTransform:"uppercase",letterSpacing:"0.08em"},children:"Separate layout"}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"center",flexWrap:"wrap"},children:S.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx(o,{variant:"primary",size:a,layout:"separate"}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:a})]},a))})]}),w.map(a=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",marginBottom:"var(--global-spacing-sizing-12px)",textTransform:"uppercase",letterSpacing:"0.08em"},children:[a," · joined"]}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"center",flexWrap:"wrap"},children:S.map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx(o,{variant:a,size:t,layout:"joined",count:4}),e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)"},children:t})]},t))})]},a))]})},m={name:"Primary",args:{variant:"primary",layout:"joined",count:4}},b={name:"Secondary",args:{variant:"secondary",layout:"joined",count:4}},y={name:"Tertiary",args:{variant:"tertiary",layout:"joined",count:4}},x={name:"Ghost",args:{variant:"ghost",layout:"joined",count:4}},v={name:"Joined Layout",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:w.map(a=>e.jsx(o,{variant:a,size:"md",layout:"joined",count:4},a))})},f={name:"Separate Layout",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:w.map(a=>e.jsx(o,{variant:a,size:"md",layout:"separate"},a))})},h={name:"All Sizes",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)",alignItems:"flex-start"},children:S.map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx("span",{style:{fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-600)",width:80},children:a}),e.jsx(o,{variant:"primary",size:a,layout:"joined",count:4})]},a))})},z={name:"Disabled",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(o,{variant:"primary",size:"md",layout:"joined",count:4,disabled:!0}),e.jsx(o,{variant:"secondary",size:"md",layout:"joined",count:4,disabled:!0}),e.jsx(o,{variant:"tertiary",size:"md",layout:"joined",count:4,disabled:!0}),e.jsx(o,{variant:"ghost",size:"md",layout:"joined",count:4,disabled:!0})]})},j={name:"Partial Disable",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-16px)"},children:[e.jsx(o,{variant:"primary",size:"md",layout:"joined",buttons:[{},{disabled:!0},{},{}]}),e.jsx(o,{variant:"ghost",size:"md",layout:"joined",buttons:[{},{},{disabled:!0},{}]})]})};var I,G,L;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Documentation',
  render: () => <ButtonGroupDocs />,
  parameters: {
    docs: {
      page: () => <ButtonGroupDocs />
    }
  }
}`,...(L=(G=u.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var A,P,F;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(F=(P=g.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var C,W,V;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    variant: 'primary',
    layout: 'joined',
    count: 4
  }
}`,...(V=(W=m.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var E,q,N;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Secondary',
  args: {
    variant: 'secondary',
    layout: 'joined',
    count: 4
  }
}`,...(N=(q=b.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var U,J,R;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Tertiary',
  args: {
    variant: 'tertiary',
    layout: 'joined',
    count: 4
  }
}`,...(R=(J=y.parameters)==null?void 0:J.docs)==null?void 0:R.source}}};var $,Z,H;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Ghost',
  args: {
    variant: 'ghost',
    layout: 'joined',
    count: 4
  }
}`,...(H=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:H.source}}};var M,Y,O;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'Joined Layout',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_VARIANTS.map(v => <ButtonGroup key={v} variant={v} size="md" layout="joined" count={4} />)}
    </div>
}`,...(O=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};var K,Q,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Separate Layout',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-16px)'
  }}>
      {ALL_VARIANTS.map(v => <ButtonGroup key={v} variant={v} size="md" layout="separate" />)}
    </div>
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,ae,re;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,ne,te;z.parameters={...z.parameters,docs:{...(oe=z.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(te=(ne=z.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ie,le,se;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(le=j.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};const Be=["Documentation","AllVariants","Primary","Secondary","Tertiary","Ghost","Joined","Separate","Sizes","Disabled","PartialDisable"];export{g as AllVariants,z as Disabled,u as Documentation,x as Ghost,v as Joined,j as PartialDisable,m as Primary,b as Secondary,f as Separate,h as Sizes,y as Tertiary,Be as __namedExportsOrder,we as default};
