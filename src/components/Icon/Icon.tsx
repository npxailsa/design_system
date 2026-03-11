import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import styles from './Icon.module.css';

export type IconSize = 
  | '2x-small' 
  | 'x-small' 
  | 'small' 
  | 'default' 
  | 'large' 
  | 'x-large' 
  | '2x-large' 
  | 'inherit' 
  | number;

export interface IconProps extends Omit<SvgIconProps, 'fontSize'> {
  /**
   * The Material UI icon component to render.
   */
  icon: React.ElementType;
  /**
   * The size of the icon.
   * Can be one of the predefined named sizes or a number (px).
   * @default 'default'
   */
  size?: IconSize;
}

/**
 * A wrapper component for Material UI icons to ensure consistent styling
 * within the design system.
 */
export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 'default',
  className,
  sx,
  ...props
}) => {
  // Determine if we are using a named size from our module.css
  const isNamedSize = typeof size === 'string' && size !== 'inherit';

  // Map size prop to the corresponding CSS module class
  const sizeClassName = isNamedSize ? styles[`icon_${size.replace(/-/g, '_')}`] : '';

  // Handle 'inherit' and numeric values via the fontSize prop or sx
  const fontSize = (isNamedSize || size === 'inherit') ? 'inherit' : undefined;
  const customStyle = typeof size === 'number' ? { fontSize: `${size}px`, ...sx } : sx;

  return (
    <IconComponent
      className={`${styles.icon} ${sizeClassName} ${className || ''}`}
      fontSize={fontSize}
      sx={customStyle}
      {...props}
    />
  );
};

export default Icon;
