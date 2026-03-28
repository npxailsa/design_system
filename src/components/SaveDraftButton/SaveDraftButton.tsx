import React from 'react';
import styles from './SaveDraftButton.module.css';
import PersonIcon from '@mui/icons-material/Person';

export type SaveDraftStatus =
  | 'default'
  | 'auto-saving'
  | 'saving'
  | 'saved'
  | 'error'
  | 'disabled'
  | 'focused';

const STATUS_LABELS: Record<SaveDraftStatus, string> = {
  'default':    'Save draft',
  'auto-saving': 'Auto-saving',
  'saving':     'Saving draft',
  'saved':      'Draft saved',
  'error':      'Unable to save',
  'disabled':   'Save draft',
  'focused':    'Save draft',
};

export interface SaveDraftButtonProps {
  /** Current save/draft status — drives label, colour, and border */
  status?: SaveDraftStatus;
  /** Override the auto-derived label */
  label?: string;
  /** Click handler (no-op when disabled) */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional CSS class */
  className?: string;
  /** aria-label override */
  ariaLabel?: string;
}

/**
 * SaveDraftButton — A pill-shaped status button for auto-save workflows.
 *
 * Uses the sky-blue palette by default. Each `status` value drives:
 * - The button label (Save draft / Auto-saving / Saving draft / Draft saved / Unable to save)
 * - The background, border colour, and text colour
 *
 * **Statuses**
 * - `default`     — sky-blue-100 bg, sky-blue border, black text
 * - `auto-saving` — same as default, indicates background auto-save in progress
 * - `saving`      — thicker (2px) border + offset shadow, indicates active user-triggered save
 * - `saved`       — green palette, confirms the draft was saved
 * - `error`       — red palette, signals save failure
 * - `disabled`    — gray palette, button not interactive
 * - `focused`     — sky-blue palette with 2px focus border
 *
 * All values are driven by `--btn-save-draft-*` design tokens.
 */
export const SaveDraftButton: React.FC<SaveDraftButtonProps> = ({
  status = 'default',
  label,
  onClick,
  className = '',
  ariaLabel,
}) => {
  const isDisabled = status === 'disabled';
  const resolvedLabel = label ?? STATUS_LABELS[status];

  const classNames = [
    styles['save-draft-btn'],
    styles[`save-draft-btn--${status}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classNames}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
      aria-label={ariaLabel ?? resolvedLabel}
      aria-busy={status === 'saving' || status === 'auto-saving' || undefined}
    >
      <span className={styles['save-draft-btn__icon']} aria-hidden="true">
        <PersonIcon className={styles['save-draft-btn__icon-svg']} />
      </span>
      <span className={styles['save-draft-btn__label']}>{resolvedLabel}</span>
    </button>
  );
};

export default SaveDraftButton;
