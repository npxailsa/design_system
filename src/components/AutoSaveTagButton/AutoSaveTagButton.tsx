import React from 'react';
import styles from './AutoSaveTagButton.module.css';
import ButtonBase from '@mui/material/ButtonBase';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

export type AutoSaveTagStatus =
  | 'default'
  | 'auto-saving'
  | 'saving'
  | 'saved'
  | 'error'
  | 'disabled'
  | 'focused';

const STATUS_LABELS: Record<AutoSaveTagStatus, string> = {
  'default':     'Save draft',
  'auto-saving': 'Auto-saving',
  'saving':      'Saving draft',
  'saved':       'Draft saved',
  'error':       'Unable to save',
  'disabled':    'Save draft',
  'focused':     'Save draft',
};

export interface AutoSaveTagButtonProps {
  /** Current save/draft status — drives label, colour, and border */
  status?: AutoSaveTagStatus;
  /** Override the auto-derived label */
  label?: string;
  /** Timestamp text shown inside the tag, e.g. "12:30 PM on 15 JAN 2025" */
  timestamp?: string;
  /** Whether to display the timestamp tag below the button */
  showTag?: boolean;
  /** Click handler (no-op when disabled) */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional CSS class */
  className?: string;
  /** aria-label override */
  ariaLabel?: string;
}

/**
 * AutoSaveTagButton — A vertical combination of a pill-shaped auto-save status
 * button and a small timestamp tag underneath.
 *
 * The button portion uses the SaveDraft palette (sky-blue, green, red, gray).
 * The tag portion displays the last-saved timestamp in a rounded gray-outline pill.
 *
 * **Statuses**
 * - `default`     — sky-blue-100 bg, sky-blue border, "Save draft"
 * - `auto-saving` — same palette, "Auto-saving"
 * - `saving`      — thicker border + offset shadow, "Saving draft"
 * - `saved`       — green palette, "Draft saved"
 * - `error`       — red palette, "Unable to save"
 * - `disabled`    — gray palette, button not interactive
 * - `focused`     — sky-blue palette with 2px focus border
 *
 * All values are driven by `--btn-save-draft-*` and `--btn-autosave-tag-*` design tokens.
 */
export const AutoSaveTagButton: React.FC<AutoSaveTagButtonProps> = ({
  status = 'default',
  label,
  timestamp = '00:00 AM on 00 JAN 2001',
  showTag = true,
  onClick,
  className = '',
  ariaLabel,
}) => {
  const isDisabled = status === 'disabled';
  const resolvedLabel = label ?? STATUS_LABELS[status];

  const wrapperClasses = [
    styles['autosave-tag'],
    className,
  ].filter(Boolean).join(' ');

  const btnClasses = [
    styles['autosave-tag__btn'],
    styles[`autosave-tag__btn--${status}`],
  ].filter(Boolean).join(' ');

  const tagClasses = [
    styles['autosave-tag__tag'],
    isDisabled ? styles['autosave-tag__tag--disabled'] : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClasses}>
      <ButtonBase
        component="button"
        type="button"
        className={btnClasses}
        onClick={!isDisabled ? onClick : undefined}
        disabled={isDisabled}
        aria-label={ariaLabel ?? resolvedLabel}
        aria-busy={status === 'saving' || status === 'auto-saving' || undefined}
      >
        <span className={styles['autosave-tag__icon']} aria-hidden="true">
          <SaveOutlinedIcon className={styles['autosave-tag__icon-svg']} />
        </span>
        <span className={styles['autosave-tag__label']}>{resolvedLabel}</span>
      </ButtonBase>

      {showTag && (
        <div className={tagClasses} aria-label={`Last saved: ${timestamp}`}>
          <span className={styles['autosave-tag__tag-text']}>{timestamp}</span>
        </div>
      )}
    </div>
  );
};

export default AutoSaveTagButton;
