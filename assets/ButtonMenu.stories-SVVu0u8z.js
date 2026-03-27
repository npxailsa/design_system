import{j as e}from"./iframe-Bqo-0G0A.js";import{D as n}from"./DocsTemplate-Bq1q2rpf.js";import{E as f}from"./Edit-DP6NrESr.js";import{D as v}from"./Delete-LPGbxfwq.js";import{c as D}from"./createSvgIcon-DKFC4gRD.js";import{D as z}from"./Download-R13gOO1X.js";import"./preload-helper-Dp1pzeXC.js";const ge="_buttonMenu_12ari_23",be="_buttonMenu__item_12ari_44",ue="_buttonMenu__icon_12ari_152",me="_buttonMenu__label_12ari_209",l={buttonMenu:ge,"buttonMenu--small":"_buttonMenu--small_12ari_39","buttonMenu--large":"_buttonMenu--large_12ari_40","buttonMenu--full-width":"_buttonMenu--full-width_12ari_41",buttonMenu__item:be,"buttonMenu__item--top":"_buttonMenu__item--top_12ari_88","buttonMenu__item--mid":"_buttonMenu__item--mid_12ari_95","buttonMenu__item--bottom":"_buttonMenu__item--bottom_12ari_100","buttonMenu__item--disabled":"_buttonMenu__item--disabled_12ari_107","buttonMenu__item--selected":"_buttonMenu__item--selected_12ari_112","buttonMenu__icon-svg":"_buttonMenu__icon-svg_12ari_152",buttonMenu__icon:ue,"buttonMenu__icon--trailing":"_buttonMenu__icon--trailing_12ari_204",buttonMenu__label:me},a=({size:o="default",items:r,fullWidth:re=!1,className:se})=>{const de=[l.buttonMenu,l[`buttonMenu--${o}`],re?l["buttonMenu--full-width"]:"",se??""].filter(Boolean).join(" ");return e.jsx("div",{className:de,role:"menu",children:r.map((t,_)=>{const w=_===0,S=_===r.length-1,ce=!w&&!S,pe=[l.buttonMenu__item,w&&l["buttonMenu__item--top"],ce&&l["buttonMenu__item--mid"],S&&l["buttonMenu__item--bottom"],t.selected&&l["buttonMenu__item--selected"],t.disabled&&l["buttonMenu__item--disabled"]].filter(Boolean).join(" "),B=t.leadingIcon,T=t.trailingIcon;return e.jsxs("button",{role:"menuitem",className:pe,onClick:t.disabled?void 0:t.onClick,disabled:t.disabled,"aria-selected":t.selected,"aria-disabled":t.disabled,children:[B&&e.jsx("span",{className:l.buttonMenu__icon,children:e.jsx(B,{className:l["buttonMenu__icon-svg"]})}),e.jsx("span",{className:l.buttonMenu__label,children:t.label}),T&&e.jsx("span",{className:`${l.buttonMenu__icon} ${l["buttonMenu__icon--trailing"]}`,children:e.jsx(T,{className:l["buttonMenu__icon-svg"]})})]},_)})})};a.__docgenInfo={description:"",methods:[],displayName:"ButtonMenu",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'default' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Controls font size and padding",defaultValue:{value:"'default'",computed:!1}},items:{required:!0,tsType:{name:"Array",elements:[{name:"ButtonMenuItem"}],raw:"ButtonMenuItem[]"},description:"Array of menu items — minimum 2 (top + bottom)"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Stretch to 100% of parent width",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const I=D(e.jsx("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"})),i=D(e.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),j=[{label:"This is the top"},{label:"This is the middle"},{label:"This is the middle"},{label:"This is the bottom"}],M=()=>e.jsxs(n,{children:[e.jsx(n.Header,{title:"Button Menu",subtitle:"A stacked list of contextual action rows used in dropdown menus, toolbars, and action panels"}),e.jsxs(n.BodyText,{children:["The ",e.jsx("strong",{children:"Button Menu"})," is a building block component that renders a vertical stack of action rows. Each row shares its borders with adjacent rows to create a seamless card appearance. The top item carries rounded top corners, the bottom carries rounded bottom corners, and middle items have none — matching the"," ",e.jsx("code",{children:"BuildingBlocks/Button/menu"})," Figma pattern."]}),e.jsxs(n.Section,{title:"Component Anatomy",children:[e.jsxs(n.BodyText,{children:["The menu is a flex column. Each row is a native ",e.jsx("code",{children:"<button>"})," element that accepts optional leading and trailing icons alongside a label."]}),e.jsx(n.Anatomy,{preview:e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:e.jsx(a,{size:"default",items:[{label:"Edit",leadingIcon:f},{label:"Duplicate",leadingIcon:I},{label:"Download",leadingIcon:z},{label:"Delete",leadingIcon:v}]})}),parts:[{id:1,name:"Container",token:`--btn-menu-width-default (200px)
--btn-menu-border-radius-top (--global-spacing-radius-6px)
--btn-menu-border-radius-bottom (--global-spacing-radius-6px)`,description:"Flex column that composes all rows. Width: 200px (S: 160px, L: 240px). Min-width: 140px. No gap between rows — borders share space."},{id:2,name:"Top Row",token:`--btn-menu-padding-top-default (12px 12px 8px)
--btn-menu-border-width (0.5px)
--btn-menu-border-color (--global-color-neutral-gray-300)`,description:"6px radius on top-left and top-right. 0.5px border on top, left, and right edges. More top padding than bottom to visually anchor the row."},{id:3,name:"Middle Row(s)",token:`--btn-menu-padding-mid-default (8px 12px)
--btn-menu-border-width (0.5px — left + right only)`,description:"No border-radius. Borders on left and right only — top/bottom edges are shared with adjacent rows, preventing double borders."},{id:4,name:"Bottom Row",token:`--btn-menu-padding-bottom-default (8px 12px 12px)
--btn-menu-border-width (0.5px)`,description:"6px radius on bottom-left and bottom-right. 0.5px border on bottom, left, and right edges."},{id:5,name:"Leading / Trailing Icon",token:`--btn-menu-icon-size-default (16px)
--btn-menu-icon-gap (8px)
--btn-menu-icon-opacity (0.6)`,description:"Optional MUI SvgIcon slots, rendered at 60% opacity. Trailing icon is pushed to the far right via margin-left: auto."}]})]}),e.jsxs(n.Section,{title:"Sizes",children:[e.jsx(n.BodyText,{children:"Three sizes control font size, padding, and container width. All sizes use Calibri Light at 300 weight with consistent letter-spacing of 0.05px."}),e.jsx(n.SizeDemo,{rows:[{label:"Small",sublabel:"160px wide — 14px Calibri Light",children:e.jsx(a,{size:"small",items:j})},{label:"Default",sublabel:"200px wide — 16px Calibri Light",children:e.jsx(a,{size:"default",items:j})},{label:"Large",sublabel:"240px wide — 18px Calibri Light",children:e.jsx(a,{size:"large",items:j})}]})]}),e.jsxs(n.Section,{title:"Optional Elements",children:[e.jsxs(n.Subsection,{title:"With Leading Icons",children:[e.jsxs(n.BodyText,{children:["Pass ",e.jsx("code",{children:"leadingIcon"})," on any item to render a MUI icon before the label. Icons render at 60% opacity to keep the text primary."]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-12px) 0"},children:e.jsx(a,{items:[{label:"Edit",leadingIcon:f},{label:"Duplicate",leadingIcon:I},{label:"Download",leadingIcon:z},{label:"Delete",leadingIcon:v}]})})]}),e.jsxs(n.Subsection,{title:"With Trailing Icons (Submenu indicator)",children:[e.jsxs(n.BodyText,{children:["Pass ",e.jsx("code",{children:"trailingIcon"})," to indicate items that expand into a submenu. The trailing icon is pushed to the far right of the row."]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-12px) 0"},children:e.jsx(a,{items:[{label:"View options",trailingIcon:i},{label:"Sort by",trailingIcon:i},{label:"Group by",trailingIcon:i},{label:"Filters"}]})})]}),e.jsxs(n.Subsection,{title:"Selected State",children:[e.jsxs(n.BodyText,{children:["Set ",e.jsx("code",{children:"selected: true"})," on an item to highlight it with the blue-50 background and blue-gray text, indicating the active choice."]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-12px) 0"},children:e.jsx(a,{items:[{label:"All items"},{label:"Active",selected:!0},{label:"Archived"},{label:"Draft"}]})})]}),e.jsxs(n.Subsection,{title:"Disabled Items",children:[e.jsxs(n.BodyText,{children:["Set ",e.jsx("code",{children:"disabled: true"})," on individual items to prevent interaction. Disabled items use ",e.jsx("code",{children:"--global-color-neutral-gray-400"})," text and a not-allowed cursor."]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-12px) 0"},children:e.jsx(a,{items:[{label:"Edit"},{label:"Duplicate",disabled:!0},{label:"Archive",disabled:!0},{label:"Delete"}]})})]})]}),e.jsx(n.TokenTable,{title:"Design Tokens — Layout",description:"ButtonMenu layout and sizing tokens:",tokens:[{name:"--btn-menu-width-small",description:"Container width — small size (160px)"},{name:"--btn-menu-width-default",description:"Container width — default size (200px)"},{name:"--btn-menu-width-large",description:"Container width — large size (240px)"},{name:"--btn-menu-min-width",description:"Minimum container width (140px)"},{name:"--btn-menu-border-radius-top",description:"Top item corner radius — --global-spacing-radius-6px (6px)"},{name:"--btn-menu-border-radius-bottom",description:"Bottom item corner radius — --global-spacing-radius-6px (6px)"},{name:"--btn-menu-border-width",description:"Border thickness — --global-spacing-stroke-0-5px (0.5px)"},{name:"--btn-menu-border-color",description:"Border colour — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-menu-icon-gap",description:"Gap between icon and label — --global-spacing-sizing-8px (8px)"},{name:"--btn-menu-icon-opacity",description:"Icon opacity at rest — 0.6"}]}),e.jsx(n.TokenTable,{title:"Design Tokens — Colours",description:"ButtonMenu colour tokens:",tokens:[{name:"--btn-menu-bg",description:"Default background — --global-color-base-white (#FFFFFF)"},{name:"--btn-menu-bg-hover",description:"Hover background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-menu-bg-selected",description:"Selected background — --global-color-primary-blue-blue-50 (#F9F9FE)"},{name:"--btn-menu-bg-disabled",description:"Disabled background — --global-color-base-white (#FFFFFF)"},{name:"--btn-menu-color",description:"Default text colour — --global-color-base-black (#1C1C1C)"},{name:"--btn-menu-color-selected",description:"Selected text colour — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-menu-color-disabled",description:"Disabled text colour — --global-color-neutral-gray-400 (#9CA3AF)"}]}),e.jsx(n.TokenTable,{title:"Design Tokens — Typography",description:"ButtonMenu font and size tokens:",tokens:[{name:"--btn-menu-font-family",description:"Font — --brand-font-secondary (Calibri)"},{name:"--btn-menu-font-weight",description:"Weight — --global-type-weight-light (300)"},{name:"--btn-menu-letter-spacing",description:"Letter spacing — 0.05px"},{name:"--btn-menu-font-size-small",description:"Small font size — --global-type-size-primary-label-sm (14px)"},{name:"--btn-menu-font-size-default",description:"Default font size — --global-type-size-primary-label (16px)"},{name:"--btn-menu-font-size-large",description:"Large font size — --global-type-size-primary-label-lg (18px)"}]}),e.jsx(n.CodeBlock,{children:`import { ButtonMenu } from './BuildingBlocks/ButtonMenu';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// Basic menu (minimum 2 items: top + bottom)
<ButtonMenu
  size="default"
  items={[
    { label: 'Option A' },
    { label: 'Option B' },
    { label: 'Option C' },
    { label: 'Option D' },
  ]}
/>

// With icons + states
<ButtonMenu
  size="default"
  items={[
    { label: 'Edit', leadingIcon: EditIcon },
    { label: 'Duplicate (submenu)', trailingIcon: ChevronRightIcon },
    { label: 'Archive', selected: true },
    { label: 'Delete', leadingIcon: DeleteIcon, disabled: true },
  ]}
/>

// Small / Large
<ButtonMenu size="small" items={items} />
<ButtonMenu size="large" items={items} />`}),e.jsxs(n.Principles,{children:[e.jsx(n.PrincipleCard,{number:1,title:"Keep menus short and scannable",children:"Aim for 4–8 items per menu. Longer lists become hard to scan. Use separators (future enhancement) or submenus via a trailing ChevronRight icon for grouped actions."}),e.jsx(n.PrincipleCard,{number:2,title:"Icons support — they don't replace — labels",children:"Always include a text label. Icons alone are ambiguous in a list context. Icons should support recognition, not be the sole indicator of action."}),e.jsx(n.PrincipleCard,{number:3,title:"Match size to the triggering control",children:"Use the same size as the button that opens the menu. A large trigger opening a small menu creates a visual size mismatch."})]}),e.jsx(n.Footer,{})]});M.__docgenInfo={description:"",methods:[],displayName:"ButtonMenuDocs"};const xe=D(e.jsx("path",{d:"m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M12 17.5 6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z"})),s=[{label:"This is the top"},{label:"This is the middle"},{label:"This is the middle"},{label:"This is the bottom"}],je={title:"Foundation/BuildingBlocks/Button",component:a,parameters:{docs:{page:()=>e.jsx(M,{})}},argTypes:{size:{control:"select",options:["small","default","large"],description:"Controls font size, padding, and container width"},fullWidth:{control:"boolean",description:"Stretch menu to 100% of parent container"}},args:{size:"default",fullWidth:!1,items:s}},d={render:()=>e.jsx(M,{}),parameters:{controls:{disable:!0},actions:{disable:!0}}},c={args:{size:"default",items:s}},p={render:()=>{const o=["small","default","large"];return e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-32px)",alignItems:"flex-start",flexWrap:"wrap",padding:"var(--global-spacing-sizing-20px)"},children:o.map(r=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)",textTransform:"capitalize"},children:r}),e.jsx(a,{size:r,items:s})]},r))})},parameters:{controls:{disable:!0}}},g={render:()=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(a,{size:"default",items:[{label:"Edit",leadingIcon:f},{label:"Duplicate",leadingIcon:I},{label:"Download",leadingIcon:z},{label:"Archive",leadingIcon:xe},{label:"Delete",leadingIcon:v}]})}),parameters:{controls:{disable:!0}}},b={render:()=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(a,{size:"default",items:[{label:"View options",trailingIcon:i},{label:"Sort by",trailingIcon:i},{label:"Group by",trailingIcon:i},{label:"Filters"}]})}),parameters:{controls:{disable:!0}}},u={render:()=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(a,{size:"default",items:[{label:"All items"},{label:"Active",selected:!0},{label:"Archived"},{label:"Draft"}]})}),parameters:{controls:{disable:!0}}},m={render:()=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(a,{size:"default",items:[{label:"Edit"},{label:"Duplicate",disabled:!0},{label:"Archive",disabled:!0},{label:"Delete"}]})}),parameters:{controls:{disable:!0}}},x={args:{size:"small",items:s}},h={args:{size:"large",items:s}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-40px)",padding:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-16px)",fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-medium)",color:"var(--global-color-neutral-gray-700)"},children:"Sizes"}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"flex-start",flexWrap:"wrap"},children:["small","default","large"].map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)",textTransform:"capitalize"},children:o}),e.jsx(a,{size:o,items:s})]},o))})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-16px)",fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-medium)",color:"var(--global-color-neutral-gray-700)"},children:"With Icons"}),e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)"},children:"Leading"}),e.jsx(a,{items:[{label:"Edit",leadingIcon:f},{label:"Duplicate",leadingIcon:I},{label:"Download",leadingIcon:z},{label:"Delete",leadingIcon:v}]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)"},children:"Trailing"}),e.jsx(a,{items:[{label:"View options",trailingIcon:i},{label:"Sort by",trailingIcon:i},{label:"Group by",trailingIcon:i},{label:"Filters"}]})]})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-16px)",fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-medium)",color:"var(--global-color-neutral-gray-700)"},children:"States (Selected + Disabled)"}),e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)"},children:"Selected"}),e.jsx(a,{items:[{label:"All items"},{label:"Active",selected:!0},{label:"Archived"},{label:"Draft"}]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)"},children:"Disabled items"}),e.jsx(a,{items:[{label:"Edit"},{label:"Duplicate",disabled:!0},{label:"Archive",disabled:!0},{label:"Delete"}]})]})]})]})]}),parameters:{controls:{disable:!0}}};var C,F,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <ButtonMenuDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(A=(F=d.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var k,W,E;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'default',
    items: sampleItems
  }
}`,...(E=(W=c.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var L,R,V;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const sizes: ButtonMenuSize[] = ['small', 'default', 'large'];
    return <div style={{
      display: 'flex',
      gap: 'var(--global-spacing-sizing-32px)',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      padding: 'var(--global-spacing-sizing-20px)'
    }}>
        {sizes.map(size => <div key={size} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--global-spacing-sizing-8px)'
      }}>
            <span style={{
          fontSize: 'var(--global-type-size-primary-label-xs)',
          color: 'var(--global-color-neutral-gray-500)',
          fontFamily: 'var(--brand-font-primary)',
          textTransform: 'capitalize'
        }}>
              {size}
            </span>
            <ButtonMenu size={size} items={sampleItems} />
          </div>)}
      </div>;
  },
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var N,H,O;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      <ButtonMenu size="default" items={[{
      label: 'Edit',
      leadingIcon: EditIcon
    }, {
      label: 'Duplicate',
      leadingIcon: ContentCopyIcon
    }, {
      label: 'Download',
      leadingIcon: DownloadIcon
    }, {
      label: 'Archive',
      leadingIcon: ArchiveIcon
    }, {
      label: 'Delete',
      leadingIcon: DeleteIcon
    }]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(O=(H=g.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var G,P,q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      <ButtonMenu size="default" items={[{
      label: 'View options',
      trailingIcon: ChevronRightIcon
    }, {
      label: 'Sort by',
      trailingIcon: ChevronRightIcon
    }, {
      label: 'Group by',
      trailingIcon: ChevronRightIcon
    }, {
      label: 'Filters'
    }]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(q=(P=b.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var U,$,K;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      <ButtonMenu size="default" items={[{
      label: 'All items'
    }, {
      label: 'Active',
      selected: true
    }, {
      label: 'Archived'
    }, {
      label: 'Draft'
    }]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(K=($=u.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var J,Q,X;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 'var(--global-spacing-sizing-20px)'
  }}>
      <ButtonMenu size="default" items={[{
      label: 'Edit'
    }, {
      label: 'Duplicate',
      disabled: true
    }, {
      label: 'Archive',
      disabled: true
    }, {
      label: 'Delete'
    }]} />
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(X=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    items: sampleItems
  }
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,le;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    size: 'large',
    items: sampleItems
  }
}`,...(le=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var te,ie,oe;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--global-spacing-sizing-40px)',
    padding: 'var(--global-spacing-sizing-24px)'
  }}>
      {/* All 3 sizes */}
      <div>
        <p style={{
        margin: '0 0 var(--global-spacing-sizing-16px)',
        fontFamily: 'var(--brand-font-primary)',
        fontSize: 'var(--global-type-size-primary-label-sm)',
        fontWeight: 'var(--global-type-weight-medium)',
        color: 'var(--global-color-neutral-gray-700)'
      }}>
          Sizes
        </p>
        <div style={{
        display: 'flex',
        gap: 'var(--global-spacing-sizing-24px)',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
          {(['small', 'default', 'large'] as ButtonMenuSize[]).map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--global-spacing-sizing-6px)'
        }}>
              <span style={{
            fontSize: 'var(--global-type-size-primary-label-xs)',
            color: 'var(--global-color-neutral-gray-500)',
            fontFamily: 'var(--brand-font-primary)',
            textTransform: 'capitalize'
          }}>{size}</span>
              <ButtonMenu size={size} items={sampleItems} />
            </div>)}
        </div>
      </div>

      {/* With icons */}
      <div>
        <p style={{
        margin: '0 0 var(--global-spacing-sizing-16px)',
        fontFamily: 'var(--brand-font-primary)',
        fontSize: 'var(--global-type-size-primary-label-sm)',
        fontWeight: 'var(--global-type-weight-medium)',
        color: 'var(--global-color-neutral-gray-700)'
      }}>
          With Icons
        </p>
        <div style={{
        display: 'flex',
        gap: 'var(--global-spacing-sizing-24px)',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--global-spacing-sizing-6px)'
        }}>
            <span style={{
            fontSize: 'var(--global-type-size-primary-label-xs)',
            color: 'var(--global-color-neutral-gray-500)',
            fontFamily: 'var(--brand-font-primary)'
          }}>Leading</span>
            <ButtonMenu items={[{
            label: 'Edit',
            leadingIcon: EditIcon
          }, {
            label: 'Duplicate',
            leadingIcon: ContentCopyIcon
          }, {
            label: 'Download',
            leadingIcon: DownloadIcon
          }, {
            label: 'Delete',
            leadingIcon: DeleteIcon
          }]} />
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--global-spacing-sizing-6px)'
        }}>
            <span style={{
            fontSize: 'var(--global-type-size-primary-label-xs)',
            color: 'var(--global-color-neutral-gray-500)',
            fontFamily: 'var(--brand-font-primary)'
          }}>Trailing</span>
            <ButtonMenu items={[{
            label: 'View options',
            trailingIcon: ChevronRightIcon
          }, {
            label: 'Sort by',
            trailingIcon: ChevronRightIcon
          }, {
            label: 'Group by',
            trailingIcon: ChevronRightIcon
          }, {
            label: 'Filters'
          }]} />
          </div>
        </div>
      </div>

      {/* States */}
      <div>
        <p style={{
        margin: '0 0 var(--global-spacing-sizing-16px)',
        fontFamily: 'var(--brand-font-primary)',
        fontSize: 'var(--global-type-size-primary-label-sm)',
        fontWeight: 'var(--global-type-weight-medium)',
        color: 'var(--global-color-neutral-gray-700)'
      }}>
          States (Selected + Disabled)
        </p>
        <div style={{
        display: 'flex',
        gap: 'var(--global-spacing-sizing-24px)',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--global-spacing-sizing-6px)'
        }}>
            <span style={{
            fontSize: 'var(--global-type-size-primary-label-xs)',
            color: 'var(--global-color-neutral-gray-500)',
            fontFamily: 'var(--brand-font-primary)'
          }}>Selected</span>
            <ButtonMenu items={[{
            label: 'All items'
          }, {
            label: 'Active',
            selected: true
          }, {
            label: 'Archived'
          }, {
            label: 'Draft'
          }]} />
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--global-spacing-sizing-6px)'
        }}>
            <span style={{
            fontSize: 'var(--global-type-size-primary-label-xs)',
            color: 'var(--global-color-neutral-gray-500)',
            fontFamily: 'var(--brand-font-primary)'
          }}>Disabled items</span>
            <ButtonMenu items={[{
            label: 'Edit'
          }, {
            label: 'Duplicate',
            disabled: true
          }, {
            label: 'Archive',
            disabled: true
          }, {
            label: 'Delete'
          }]} />
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(oe=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};const De=["Documentation","Default","Sizes","WithLeadingIcons","WithTrailingIcons","SelectedItem","DisabledItems","Small","Large","AllVariants"];export{y as AllVariants,c as Default,m as DisabledItems,d as Documentation,h as Large,u as SelectedItem,p as Sizes,x as Small,g as WithLeadingIcons,b as WithTrailingIcons,De as __namedExportsOrder,je as default};
