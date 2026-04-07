import{j as e}from"./iframe-BArsNLVa.js";import{B as a}from"./ButtonMenu-BgLNCn8i.js";import{D as n}from"./DocsTemplate-fRadOJD_.js";import{E as x}from"./Edit-BAK52PY6.js";import{D as h}from"./Delete-B7SR_l75.js";import{C as y,A as Z}from"./Archive-B0dqv-Os.js";import{D as f}from"./Download-CUQAOux3.js";import{C as l}from"./ChevronRight-D-DtR7fi.js";import"./preload-helper-Dp1pzeXC.js";import"./createSvgIcon-C3QTQbfi.js";const z=[{label:"This is the top"},{label:"This is the middle"},{label:"This is the middle"},{label:"This is the bottom"}],I=()=>e.jsxs(n,{children:[e.jsx(n.Header,{title:"Button Menu",subtitle:"A stacked list of contextual action rows used in dropdown menus, toolbars, and action panels"}),e.jsxs(n.BodyText,{children:["The ",e.jsx("strong",{children:"Button Menu"})," is a building block component that renders a vertical stack of action rows. Each row shares its borders with adjacent rows to create a seamless card appearance. The top item carries rounded top corners, the bottom carries rounded bottom corners, and middle items have none — matching the"," ",e.jsx("code",{children:"BuildingBlocks/Button/menu"})," Figma pattern."]}),e.jsxs(n.Section,{title:"Component Anatomy",children:[e.jsxs(n.BodyText,{children:["The menu is a flex column. Each row is a native ",e.jsx("code",{children:"<button>"})," element that accepts optional leading and trailing icons alongside a label."]}),e.jsx(n.Anatomy,{preview:e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",gap:"var(--global-spacing-sizing-32px)",padding:"var(--global-spacing-sizing-32px)",background:"var(--global-color-neutral-gray-50)",borderRadius:"var(--global-spacing-radius-8px)"},children:e.jsx(a,{size:"default",items:[{label:"Edit",leadingIcon:x},{label:"Duplicate",leadingIcon:y},{label:"Download",leadingIcon:f},{label:"Delete",leadingIcon:h}]})}),parts:[{id:1,name:"Container",token:`--btn-menu-width-default (200px)
--btn-menu-border-radius-top (--global-spacing-radius-6px)
--btn-menu-border-radius-bottom (--global-spacing-radius-6px)`,description:"Flex column that composes all rows. Width: 200px (S: 160px, L: 240px). Min-width: 140px. No gap between rows — borders share space."},{id:2,name:"Top Row",token:`--btn-menu-padding-top-default (12px 12px 8px)
--btn-menu-border-width (0.5px)
--btn-menu-border-color (--global-color-neutral-gray-300)`,description:"6px radius on top-left and top-right. 0.5px border on top, left, and right edges. More top padding than bottom to visually anchor the row."},{id:3,name:"Middle Row(s)",token:`--btn-menu-padding-mid-default (8px 12px)
--btn-menu-border-width (0.5px — left + right only)`,description:"No border-radius. Borders on left and right only — top/bottom edges are shared with adjacent rows, preventing double borders."},{id:4,name:"Bottom Row",token:`--btn-menu-padding-bottom-default (8px 12px 12px)
--btn-menu-border-width (0.5px)`,description:"6px radius on bottom-left and bottom-right. 0.5px border on bottom, left, and right edges."},{id:5,name:"Leading / Trailing Icon",token:`--btn-menu-icon-size-default (16px)
--btn-menu-icon-gap (8px)
--btn-menu-icon-opacity (0.6)`,description:"Optional MUI SvgIcon slots, rendered at 60% opacity. Trailing icon is pushed to the far right via margin-left: auto."}]})]}),e.jsxs(n.Section,{title:"Sizes",children:[e.jsx(n.BodyText,{children:"Three sizes control font size, padding, and container width. All sizes use Calibri Light at 300 weight with consistent letter-spacing of 0.05px."}),e.jsx(n.SizeDemo,{rows:[{label:"Small",sublabel:"160px wide — 14px Calibri Light",children:e.jsx(a,{size:"small",items:z})},{label:"Default",sublabel:"200px wide — 16px Calibri Light",children:e.jsx(a,{size:"default",items:z})},{label:"Large",sublabel:"240px wide — 18px Calibri Light",children:e.jsx(a,{size:"large",items:z})}]})]}),e.jsxs(n.Section,{title:"Optional Elements",children:[e.jsxs(n.Subsection,{title:"With Leading Icons",children:[e.jsxs(n.BodyText,{children:["Pass ",e.jsx("code",{children:"leadingIcon"})," on any item to render a MUI icon before the label. Icons render at 60% opacity to keep the text primary."]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-12px) 0"},children:e.jsx(a,{items:[{label:"Edit",leadingIcon:x},{label:"Duplicate",leadingIcon:y},{label:"Download",leadingIcon:f},{label:"Delete",leadingIcon:h}]})})]}),e.jsxs(n.Subsection,{title:"With Trailing Icons (Submenu indicator)",children:[e.jsxs(n.BodyText,{children:["Pass ",e.jsx("code",{children:"trailingIcon"})," to indicate items that expand into a submenu. The trailing icon is pushed to the far right of the row."]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-12px) 0"},children:e.jsx(a,{items:[{label:"View options",trailingIcon:l},{label:"Sort by",trailingIcon:l},{label:"Group by",trailingIcon:l},{label:"Filters"}]})})]}),e.jsx(n.Subsection,{title:"Hover State",children:e.jsxs(n.BodyText,{children:["On hover, menu items receive a subtle background tint change from"," ",e.jsx("code",{children:"--btn-menu-item-bg"})," (blue-50) to"," ",e.jsx("code",{children:"--btn-menu-item-bg-hover"})," (blue-100 / #E7E9F4). There is no shadow offset or text colour change — menu items use a softer hover treatment than buttons to maintain their list-like affordance."]})}),e.jsxs(n.Subsection,{title:"Selected State",children:[e.jsxs(n.BodyText,{children:["Set ",e.jsx("code",{children:"selected: true"})," on an item to highlight it with the brand-primary background (",e.jsx("code",{children:"--btn-menu-item-bg-selected"})," / #3776CE) and white text (",e.jsx("code",{children:"--btn-menu-item-color-selected"}),"). The border also matches the brand-primary colour at 0.5px width. Only one item per menu should be selected at a time."]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-12px) 0"},children:e.jsx(a,{items:[{label:"All items"},{label:"Active",selected:!0},{label:"Archived"},{label:"Draft"}]})})]}),e.jsxs(n.Subsection,{title:"Disabled Items",children:[e.jsxs(n.BodyText,{children:["Set ",e.jsx("code",{children:"disabled: true"})," on individual items to prevent interaction. Disabled items use ",e.jsx("code",{children:"--btn-menu-item-color-disabled"})," (gray-300 / #D2D5DA) text, a gray-50 background, gray-200 border, and a not-allowed cursor."]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--global-spacing-sizing-24px)",padding:"var(--global-spacing-sizing-12px) 0"},children:e.jsx(a,{items:[{label:"Edit"},{label:"Duplicate",disabled:!0},{label:"Archive",disabled:!0},{label:"Delete"}]})})]})]}),e.jsx(n.TokenTable,{title:"Design Tokens — Layout",description:"ButtonMenu layout and sizing tokens:",tokens:[{name:"--btn-menu-width-small",description:"Container width — small size (160px)"},{name:"--btn-menu-width-default",description:"Container width — default size (200px)"},{name:"--btn-menu-width-large",description:"Container width — large size (240px)"},{name:"--btn-menu-min-width",description:"Minimum container width (140px)"},{name:"--btn-menu-border-radius-top",description:"Top item corner radius — --global-spacing-radius-6px (6px)"},{name:"--btn-menu-border-radius-bottom",description:"Bottom item corner radius — --global-spacing-radius-6px (6px)"},{name:"--btn-menu-border-width",description:"Border thickness — --global-spacing-stroke-0-5px (0.5px)"},{name:"--btn-menu-border-color",description:"Border colour — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-menu-icon-gap",description:"Gap between icon and label — --global-spacing-sizing-8px (8px)"},{name:"--btn-menu-icon-opacity",description:"Icon opacity at rest — 0.6"}]}),e.jsx(n.TokenTable,{title:"Design Tokens — Item Colours (via ButtonMenuItem)",description:"Item-level colour tokens that drive the appearance of each row (delegated to ButtonMenuItem):",tokens:[{name:"--btn-menu-item-bg",description:"Default background — --global-color-primary-blue-blue-50 (#F9F9FE)"},{name:"--btn-menu-item-border-color",description:"Default border — --global-color-primary-blue-blue-300 (#95A0E5)"},{name:"--btn-menu-item-color",description:"Default text — --global-color-secondary-blue-gray (#61607C)"},{name:"--btn-menu-item-bg-hover",description:"Hover background — --global-color-primary-blue-blue-100 (#E7E9F4). No shadow, no text change."},{name:"--btn-menu-item-bg-selected",description:"Selected background — --brand-primary (#3776CE)"},{name:"--btn-menu-item-color-selected",description:"Selected text — --global-color-base-white (#FFFFFF)"},{name:"--btn-menu-item-border-color-selected",description:"Selected border — --brand-primary (#3776CE), 0.5px width"},{name:"--btn-menu-item-bg-disabled",description:"Disabled background — --global-color-neutral-gray-50 (#F9FAFB)"},{name:"--btn-menu-item-color-disabled",description:"Disabled text — --global-color-neutral-gray-300 (#D2D5DA)"},{name:"--btn-menu-item-border-color-disabled",description:"Disabled border — --global-color-neutral-gray-200 (#E5E7EB)"}]}),e.jsx(n.TokenTable,{title:"Design Tokens — Typography",description:"ButtonMenu font and size tokens:",tokens:[{name:"--btn-menu-font-family",description:"Font — --brand-font-secondary (Calibri)"},{name:"--btn-menu-font-weight",description:"Weight — --global-type-weight-light (300)"},{name:"--btn-menu-letter-spacing",description:"Letter spacing — 0.05px"},{name:"--btn-menu-font-size-small",description:"Small font size — --global-type-size-primary-label-sm (14px)"},{name:"--btn-menu-font-size-default",description:"Default font size — --global-type-size-primary-label (16px)"},{name:"--btn-menu-font-size-large",description:"Large font size — --global-type-size-primary-label-lg (18px)"}]}),e.jsx(n.CodeBlock,{children:`import { ButtonMenu } from './BuildingBlocks/ButtonMenu';
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
<ButtonMenu size="large" items={items} />`}),e.jsxs(n.Principles,{children:[e.jsx(n.PrincipleCard,{number:1,title:"Keep menus short and scannable",children:"Aim for 4–8 items per menu. Longer lists become hard to scan. Use separators (future enhancement) or submenus via a trailing ChevronRight icon for grouped actions."}),e.jsx(n.PrincipleCard,{number:2,title:"Icons support — they don't replace — labels",children:"Always include a text label. Icons alone are ambiguous in a list context. Icons should support recognition, not be the sole indicator of action."}),e.jsx(n.PrincipleCard,{number:3,title:"Match size to the triggering control",children:"Use the same size as the button that opens the menu. A large trigger opening a small menu creates a visual size mismatch."})]}),e.jsx(n.Footer,{})]});I.__docgenInfo={description:"",methods:[],displayName:"ButtonMenuDocs"};const i=[{label:"This is the top"},{label:"This is the middle"},{label:"This is the middle"},{label:"This is the bottom"}],ce={title:"Foundation/BuildingBlocks/Button",component:a,parameters:{docs:{page:()=>e.jsx(I,{})}},argTypes:{size:{control:"select",options:["small","default","large"],description:"Controls font size, padding, and container width"},fullWidth:{control:"boolean",description:"Stretch menu to 100% of parent container"}},args:{size:"default",fullWidth:!1,items:i}},r={render:()=>e.jsx(I,{}),parameters:{controls:{disable:!0},actions:{disable:!0}}},o={args:{size:"default",items:i}},s={render:()=>{const t=["small","default","large"];return e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-32px)",alignItems:"flex-start",flexWrap:"wrap",padding:"var(--global-spacing-sizing-20px)"},children:t.map(v=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-8px)"},children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)",textTransform:"capitalize"},children:v}),e.jsx(a,{size:v,items:i})]},v))})},parameters:{controls:{disable:!0}}},d={render:()=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(a,{size:"default",items:[{label:"Edit",leadingIcon:x},{label:"Duplicate",leadingIcon:y},{label:"Download",leadingIcon:f},{label:"Archive",leadingIcon:Z},{label:"Delete",leadingIcon:h}]})}),parameters:{controls:{disable:!0}}},c={render:()=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(a,{size:"default",items:[{label:"View options",trailingIcon:l},{label:"Sort by",trailingIcon:l},{label:"Group by",trailingIcon:l},{label:"Filters"}]})}),parameters:{controls:{disable:!0}}},p={render:()=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(a,{size:"default",items:[{label:"All items"},{label:"Active",selected:!0},{label:"Archived"},{label:"Draft"}]})}),parameters:{controls:{disable:!0}}},g={render:()=>e.jsx("div",{style:{padding:"var(--global-spacing-sizing-20px)"},children:e.jsx(a,{size:"default",items:[{label:"Edit"},{label:"Duplicate",disabled:!0},{label:"Archive",disabled:!0},{label:"Delete"}]})}),parameters:{controls:{disable:!0}}},m={args:{size:"small",items:i}},b={args:{size:"large",items:i}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-40px)",padding:"var(--global-spacing-sizing-24px)"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-16px)",fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-medium)",color:"var(--global-color-neutral-gray-700)"},children:"Sizes"}),e.jsx("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"flex-start",flexWrap:"wrap"},children:["small","default","large"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)",textTransform:"capitalize"},children:t}),e.jsx(a,{size:t,items:i})]},t))})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-16px)",fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-medium)",color:"var(--global-color-neutral-gray-700)"},children:"With Icons"}),e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)"},children:"Leading"}),e.jsx(a,{items:[{label:"Edit",leadingIcon:x},{label:"Duplicate",leadingIcon:y},{label:"Download",leadingIcon:f},{label:"Delete",leadingIcon:h}]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)"},children:"Trailing"}),e.jsx(a,{items:[{label:"View options",trailingIcon:l},{label:"Sort by",trailingIcon:l},{label:"Group by",trailingIcon:l},{label:"Filters"}]})]})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 var(--global-spacing-sizing-16px)",fontFamily:"var(--brand-font-primary)",fontSize:"var(--global-type-size-primary-label-sm)",fontWeight:"var(--global-type-weight-medium)",color:"var(--global-color-neutral-gray-700)"},children:"States (Selected + Disabled)"}),e.jsxs("div",{style:{display:"flex",gap:"var(--global-spacing-sizing-24px)",alignItems:"flex-start",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)"},children:"Selected"}),e.jsx(a,{items:[{label:"All items"},{label:"Active",selected:!0},{label:"Archived"},{label:"Draft"}]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--global-spacing-sizing-6px)"},children:[e.jsx("span",{style:{fontSize:"var(--global-type-size-primary-label-xs)",color:"var(--global-color-neutral-gray-500)",fontFamily:"var(--brand-font-primary)"},children:"Disabled items"}),e.jsx(a,{items:[{label:"Edit"},{label:"Duplicate",disabled:!0},{label:"Archive",disabled:!0},{label:"Delete"}]})]})]})]})]}),parameters:{controls:{disable:!0}}};var D,j,w;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ButtonMenuDocs />,
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  }
}`,...(w=(j=r.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var S,B,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'default',
    items: sampleItems
  }
}`,...(T=(B=o.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var A,F,C;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(C=(F=s.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var k,E,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var W,L,R;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(R=(L=c.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var O,V,G;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(V=p.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var P,N,U;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(N=g.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var _,H,K;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small',
    items: sampleItems
  }
}`,...(K=(H=m.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var $,q,J;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'large',
    items: sampleItems
  }
}`,...(J=(q=b.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const pe=["Documentation","Default","Sizes","WithLeadingIcons","WithTrailingIcons","SelectedItem","DisabledItems","Small","Large","AllVariants"];export{u as AllVariants,o as Default,g as DisabledItems,r as Documentation,b as Large,p as SelectedItem,s as Sizes,m as Small,d as WithLeadingIcons,c as WithTrailingIcons,pe as __namedExportsOrder,ce as default};
