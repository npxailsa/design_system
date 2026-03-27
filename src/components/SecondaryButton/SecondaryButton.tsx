import React from 'react';
import { Button } from '../Button/Button';
import type { ButtonSize, ButtonType } from '../Button/Button';

export interface SecondaryButtonProps {
  /** Text label displayed inside the button */
  label?: string;
  /** Size variant */
  size?: ButtonSize;
  /** HTML button type */
  type?: ButtonType;
  /** Optional MUI icon component rendered before the label */
  leadingIcon?: React.ElementType;
  /** Show the leading icon */
  showLeadingIcon?: boolean;
  /** Optional MUI icon component rendered after the label */
  trailingIcon?: React.ElementType;
  /** Show the trailing icon */
  showTrailingIcon?: boolean;
  /** Render as an icon-only button (no label) */
  iconOnly?: boolean;
  /** Show a loading spinner in place of the leading icon */
  loading?: boolean;
  /** Disable all interactions */
  disabled?: boolean;
  /** Full-width button */
  fullWidth?: boolean;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional CSS class */
  className?: string;
  /** aria-label for icon-only buttons */
  ariaLabel?: string;
}

/**
 * Secondary Button — The outline-style button used for secondary actions.
 *
 * Wraps the base Button component with `variant="outline"` locked in.
 * Use alongside the Primary Button to establish clear visual hierarchy.
 *
 * All design tokens are shared with the base Button component via the
 * `--btn-outline-*` token family.
 */
export const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  return <Button {...props} variant="outline" />;
};

export default SecondaryButton;
