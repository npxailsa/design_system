import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import styles from './Icon.module.css';

export interface IconProps extends Omit<SvgIconProps, 'fontSize'> {
  /**
   * The Material UI icon component to render.
   */
  icon: React.ElementType;
  /**
   * The size of the icon.
   * Can be one of 'small', 'medium', 'large' or a number (px).
   * @default 'medium'
   */
  size?: 'inherit' | 'small' | 'medium' | 'large' | number;
}

/**
 * A wrapper component for Material UI icons to ensure consistent styling
 * within the design system.
 */
export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 'medium',
  className,
  sx,
  ...props
}) => {
  const fontSize = typeof size === 'number' ? undefined : size;
  const customStyle = typeof size === 'number' ? { fontSize: `${size}px`, ...sx } : sx;

  return (
    <IconComponent
      className={`${styles.icon} ${className || ''}`}
      fontSize={fontSize}
      sx={customStyle}
      {...props}
    />
  );
};

export default Icon;
