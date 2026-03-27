import{j as c}from"./iframe-Bqo-0G0A.js";const u="_icon_ie810_1",p={icon:u},f=({icon:i,size:e="default",className:t,sx:a,...o})=>{const r={"2x-small":"var(--icon-size-2x-small)","x-small":"var(--icon-size-x-small)",small:"var(--icon-size-small)",default:"var(--icon-size-default)",large:"var(--icon-size-large)","x-large":"var(--icon-size-x-large)","2x-large":"var(--icon-size-2x-large)"},n=typeof e=="string"&&e!=="inherit",l={...typeof a=="object"?a:{},fontSize:typeof e=="number"?`var(--global-spacing-sizing-${e}px)`:n?r[e]:void 0},s=typeof a=="function"?m=>({...a(m),fontSize:l.fontSize}):l;return c.jsx(i,{className:`${p.icon} ${t||""}`,fontSize:n||typeof e=="number"?void 0:e==="inherit"?"inherit":void 0,sx:s,...o})};f.__docgenInfo={description:`A wrapper component for Material UI icons to ensure consistent styling
within the design system.`,methods:[],displayName:"Icon",props:{icon:{required:!0,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"The Material UI icon component to render."},size:{required:!1,tsType:{name:"union",raw:`| '2x-small' 
| 'x-small' 
| 'small' 
| 'default' 
| 'large' 
| 'x-large' 
| '2x-large' 
| 'inherit' 
| number`,elements:[{name:"literal",value:"'2x-small'"},{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"},{name:"literal",value:"'x-large'"},{name:"literal",value:"'2x-large'"},{name:"literal",value:"'inherit'"},{name:"number"}]},description:`The size of the icon.
Can be one of the predefined named sizes or a number (px).
@default 'default'`,defaultValue:{value:"'default'",computed:!1}}},composes:["Omit"]};export{f as I};
