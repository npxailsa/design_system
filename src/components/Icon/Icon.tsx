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
  // Map named sizes to CSS variables
  const sizeMap: Record<string, string> = {
    '2x-small': 'var(--icon-size-2x-small)',
    'x-small': 'var(--icon-size-x-small)',
    'small': 'var(--icon-size-small)',
    'default': 'var(--icon-size-default)',
    'large': 'var(--icon-size-large)',
    'x-large': 'var(--icon-size-x-large)',
    '2x-large': 'var(--icon-size-2x-large)',
  };

  const isNamedSize = typeof size === 'string' && size !== 'inherit';

  // Apply size via sx prop. We use fontSize: 'inherit' on the component
  // to ensure it picks up the size we set in sx.
  const iconSx = {
    ...sx,
    fontSize: typeof size === 'number'
      ? `${size}px`
      : (isNamedSize ? sizeMap[size] : sx?.fontSize)
  };

  return (
    <IconComponent
      className={`${styles.icon} ${className || ''}`}
      fontSize={isNamedSize || typeof size === 'number' ? undefined : (size === 'inherit' ? 'inherit' : undefined)}
      sx={iconSx}
      {...props}
    />
  );
};

export default Icon;
