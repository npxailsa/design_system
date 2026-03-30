import React from 'react';
import styles from './Card.module.css';

export type CardSize = 'small' | 'default' | 'large';
export type CardBg =
  | 'default'
  | 'sky-blue'
  | 'error'
  | 'success'
  | 'warning'
  | 'info-blue'
  | 'note-purple'
  | 'light-gray'
  | 'black'
  | 'blue'
  | 'dark-gray';
export type CardMode = 'light' | 'dark';

export interface CardProps {
  /** Size controls the container dimensions and inner padding */
  size?: CardSize;
  /**
   * Background colour theme.
   * Combined with `mode` to determine the exact background and border colour.
   */
  bg?: CardBg;
  /**
   * Light or dark variant of the colour theme.
   * Affects backgrounds for `default`, `error`, `success`, and `sky-blue / blue`.
   */
  mode?: CardMode;
  /**
   * Whether the card carries a drop-shadow.
   * When false the border-width is increased to 1px and the shadow is removed.
   */
  dropShadow?: boolean;
  /** Optional child content rendered inside the card */
  children?: React.ReactNode;
  /** Extra CSS class on the root element */
  className?: string;
}

/**
 * Card — Foundational surface building block with multiple colour themes,
 * three sizes, light/dark mode, and optional drop-shadow.
 *
 * Location: Foundation/BuildingBlocks/Card
 */
export const Card: React.FC<CardProps> = ({
  size = 'small',
  bg = 'default',
  mode = 'light',
  dropShadow = true,
  children,
  className = '',
}) => {
  const rootClass = [
    styles.card,
    styles[`size-${size}`],
    styles[`bg-${bg}`],
    styles[`mode-${mode}`],
    dropShadow ? styles['shadow-true'] : styles['shadow-false'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={rootClass}>{children}</div>;
};

export default Card;
