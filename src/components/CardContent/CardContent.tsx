import React from 'react';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import type { ButtonGroupVariant, ButtonGroupLayout, ButtonGroupItemConfig, ButtonGroupSpecial } from '../ButtonGroup/ButtonGroup';
import styles from './CardContent.module.css';

/* ── Types ────────────────────────────────────────────────────────────────── */

export type CardContentVariant = 'notification' | 'image';
export type CardContentStatus =
  | 'error'
  | 'warning'
  | 'success'
  | 'info'
  | 'default'
  | 'light-gray'
  | 'navy'
  | 'purple'
  | 'white';
export type CardContentSize = 'small' | 'default' | 'large';

export interface CardContentProps {
  /**
   * Layout variant.
   * - `notification` — alert banner: leading icon, title + description, dismiss
   * - `image`        — image area, heading, body text, ButtonGroup, rating
   */
  variant?: CardContentVariant;
  /**
   * Status / colour type used by the `notification` variant to set icon
   * colour, heading colour, and dismiss button colour.
   *
   * Options: `error` | `warning` | `success` | `info` | `default` |
   * `light-gray` | `navy` | `purple` | `white`
   */
  status?: CardContentStatus;
  /** Controls icon sizes and typography scale */
  size?: CardContentSize;
  /** Card heading / title */
  heading?: string;
  /** Card body / description text */
  body?: string;
  /**
   * Image URL for the `image` variant.
   * Falls back to a grey placeholder when omitted.
   */
  imageSrc?: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Star rating (0–5, supports half-stars) */
  rating?: number;
  /** Numeric rating count shown next to the stars */
  ratingCount?: number;
  /**
   * ButtonGroup button type (image variant only).
   * @default 'label'
   */
  buttonGroupType?: 'icon' | 'label';
  /** @default 'primary' */
  buttonGroupVariant?: ButtonGroupVariant;
  /** @default 'default' */
  buttonGroupSpecial?: ButtonGroupSpecial;
  /** @default 'separate' */
  buttonGroupLayout?: ButtonGroupLayout;
  /** @default 2 */
  buttonGroupCount?: number;
  /** Per-button configuration */
  buttonGroupButtons?: ButtonGroupItemConfig[];
  /** Disable all buttons */
  buttonGroupDisabled?: boolean;
  /**
   * Whether to render a visible border around the alert / card.
   * @default true
   */
  border?: boolean;
  /**
   * Show / hide the leading status icon (notification variant).
   * Maps to Figma `leading-icon` property.
   * @default true
   */
  showIcon?: boolean;
  /**
   * Show / hide the body / description text.
   * Maps to Figma `subtext` property.
   * @default true
   */
  showBody?: boolean;
  /**
   * Show / hide the ButtonGroup actions area (image variant only).
   * @default true
   */
  showActions?: boolean;
  /**
   * Show a trailing dismiss / close button (notification variant).
   * Maps to Figma `trailing-icon` property.
   * @default true
   */
  showDismiss?: boolean;
  /** Callback fired when dismiss button is clicked */
  onDismiss?: () => void;
  /**
   * Show / hide the star rating row (image variant only).
   * @default true
   */
  showRating?: boolean;
  /**
   * Show / hide the image area (image variant only).
   * @default true
   */
  showImage?: boolean;
  /** Extra CSS class on the root element */
  className?: string;
}

/* ── Status config ────────────────────────────────────────────────────────── */

const STATUS_CSS_CLASS: Record<CardContentStatus, string> = {
  error:        'status-error',
  warning:      'status-warning',
  success:      'status-success',
  info:         'status-info',
  default:      'status-default',
  'light-gray': 'status-light-gray',
  navy:         'status-navy',
  purple:       'status-purple',
  white:        'status-white',
};

/* ── Status icon SVGs ─────────────────────────────────────────────────────── */

const ErrorIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M23.3332 8.06163L19.9382 4.66663L13.9998 10.605L8.0615 4.66663L4.6665 8.06163L10.6048 14L4.6665 19.9383L8.0615 23.3333L13.9998 17.395L19.9382 23.3333L23.3332 19.9383L17.3948 14L23.3332 8.06163Z"
      fill="currentColor"
    />
  </svg>
);

const WarningIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M15.1667 16.3334H12.8334V10.5H15.1667M15.1667 21H12.8334V18.6667H15.1667M1.16675 24.5H26.8334L14.0001 2.33337L1.16675 24.5Z"
      fill="currentColor"
    />
  </svg>
);

const SuccessIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M10.4999 23.8234L3.25488 16.5784L6.55655 13.2767L10.4999 17.2317L22.0266 5.69336L25.3282 8.99503L10.4999 23.8234Z"
      fill="currentColor"
    />
  </svg>
);

const InfoIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M15.1666 10.5H12.8333V8.16671H15.1666M15.1666 19.8334H12.8333V12.8334H15.1666M13.9999 2.33337C12.4678 2.33337 10.9507 2.63514 9.53528 3.22145C8.11981 3.80775 6.83369 4.66711 5.75034 5.75046C3.56242 7.93839 2.33325 10.9058 2.33325 14C2.33325 17.0942 3.56242 20.0617 5.75034 22.2496C6.83369 23.333 8.11981 24.1923 9.53528 24.7786C10.9507 25.3649 12.4678 25.6667 13.9999 25.6667C17.0941 25.6667 20.0616 24.4375 22.2495 22.2496C24.4374 20.0617 25.6666 17.0942 25.6666 14C25.6666 12.468 25.3648 10.9509 24.7785 9.5354C24.1922 8.11994 23.3328 6.83381 22.2495 5.75046C21.1661 4.66711 19.88 3.80775 18.4646 3.22145C17.0491 2.63514 15.532 2.33337 13.9999 2.33337Z"
      fill="currentColor"
    />
  </svg>
);

/** Bullseye / default icon used by `default`, `light-gray`, `white` statuses */
const BullseyeIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M13.9999 2.33337C12.4678 2.33337 10.9507 2.63514 9.53528 3.22145C8.11981 3.80775 6.83369 4.66711 5.75034 5.75046C3.56242 7.93839 2.33325 10.9058 2.33325 14C2.33325 17.0942 3.56242 20.0617 5.75034 22.2496C6.83369 23.333 8.11981 24.1923 9.53528 24.7786C10.9507 25.3649 12.4678 25.6667 13.9999 25.6667C17.0941 25.6667 20.0616 24.4375 22.2495 22.2496C24.4374 20.0617 25.6666 17.0942 25.6666 14C25.6666 12.468 25.3648 10.9509 24.7785 9.5354C24.1922 8.11994 23.3328 6.83381 22.2495 5.75046C21.1661 4.66711 19.88 3.80775 18.4646 3.22145C17.0491 2.63514 15.532 2.33337 13.9999 2.33337ZM13.9999 4.66671C16.4753 4.66671 18.8492 5.65004 20.5996 7.40038C22.3499 9.15072 23.3333 11.5247 23.3333 14C23.3333 16.4754 22.3499 18.8494 20.5996 20.5997C18.8492 22.35 16.4753 23.3334 13.9999 23.3334C11.5246 23.3334 9.1506 22.35 7.40026 20.5997C5.64992 18.8494 4.66659 16.4754 4.66659 14C4.66659 11.5247 5.64992 9.15072 7.40026 7.40038C9.1506 5.65004 11.5246 4.66671 13.9999 4.66671ZM13.9999 7.00004C12.1434 7.00004 10.3629 7.73754 9.05017 9.05029C7.73742 10.363 6.99992 12.1435 6.99992 14C6.99992 15.8566 7.73742 17.637 9.05017 18.9498C10.3629 20.2625 12.1434 21 13.9999 21C15.8564 21 17.6369 20.2625 18.9497 18.9498C20.2624 17.637 20.9999 15.8566 20.9999 14C20.9999 12.1435 20.2624 10.363 18.9497 9.05029C17.6369 7.73754 15.8564 7.00004 13.9999 7.00004ZM13.9999 9.33337C15.2376 9.33337 16.4246 9.82504 17.2998 10.7002C18.1749 11.5754 18.6666 12.7624 18.6666 14C18.6666 15.2377 18.1749 16.4247 17.2998 17.2999C16.4246 18.175 15.2376 18.6667 13.9999 18.6667C12.7622 18.6667 11.5753 18.175 10.7001 17.2999C9.82492 16.4247 9.33325 15.2377 9.33325 14C9.33325 12.7624 9.82492 11.5754 10.7001 10.7002C11.5753 9.82504 12.7622 9.33337 13.9999 9.33337ZM13.9999 11.6667C13.3811 11.6667 12.7876 11.9125 12.35 12.3501C11.9124 12.7877 11.6666 13.3812 11.6666 14C11.6666 14.6189 11.9124 15.2124 12.35 15.65C12.7876 16.0875 13.3811 16.3334 13.9999 16.3334C14.6188 16.3334 15.2123 16.0875 15.6498 15.65C16.0874 15.2124 16.3333 14.6189 16.3333 14C16.3333 13.3812 16.0874 12.7877 15.6498 12.3501C15.2123 11.9125 14.6188 11.6667 13.9999 11.6667Z"
      fill="currentColor"
    />
  </svg>
);

/** Document icon used by `purple` status */
const DocumentIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path
      d="M15.1665 10.5H21.5832L15.1665 4.08337V10.5ZM6.99984 2.33337H16.3332L23.3332 9.33337V23.3334C23.3332 23.9522 23.0873 24.5457 22.6498 24.9833C22.2122 25.4209 21.6187 25.6667 20.9998 25.6667H6.99984C5.70484 25.6667 4.6665 24.6167 4.6665 23.3334V4.66671C4.6665 3.37171 5.70484 2.33337 6.99984 2.33337ZM17.4998 21V18.6667H6.99984V21H17.4998ZM20.9998 16.3334V14H6.99984V16.3334H20.9998Z"
      fill="currentColor"
    />
  </svg>
);

const STATUS_ICON: Record<CardContentStatus, React.FC<{ size: number }>> = {
  error:        ErrorIcon,
  warning:      WarningIcon,
  success:      SuccessIcon,
  info:         InfoIcon,
  default:      BullseyeIcon,
  'light-gray': BullseyeIcon,
  navy:         InfoIcon,
  purple:       DocumentIcon,
  white:        BullseyeIcon,
};

/* ── Dismiss / close icon ─────────────────────────────────────────────────── */

const DismissIcon: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z"
      fill="currentColor"
    />
  </svg>
);

/* ── Image placeholder ────────────────────────────────────────────────────── */

const ImagePlaceholder: React.FC = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    aria-hidden="true"
    className={styles['card-content__image-placeholder-icon']}
  >
    <path
      d="M31.5 4.5H4.5C2.846 4.5 1.5 5.846 1.5 7.5V28.5C1.5 30.154 2.846 31.5 4.5 31.5H31.5C33.154 31.5 34.5 30.154 34.5 28.5V7.5C34.5 5.846 33.154 4.5 31.5 4.5ZM4.5 7.5H31.5V19.756L26.561 14.818C26.28 14.537 25.898 14.38 25.5 14.38C25.102 14.38 24.72 14.537 24.439 14.818L15.75 23.507L12.561 20.318C12.28 20.037 11.898 19.88 11.5 19.88C11.102 19.88 10.72 20.037 10.439 20.318L4.5 26.257V7.5ZM4.5 28.5V30.243L11.5 23.244L14.689 26.432C14.97 26.713 15.352 26.87 15.75 26.87C16.148 26.87 16.53 26.713 16.811 26.432L25.5 17.744L31.5 23.744V28.5H4.5Z"
      fill="currentColor"
    />
    <circle cx="11.25" cy="13.5" r="2.25" fill="currentColor" />
  </svg>
);

/* ── Star Rating ──────────────────────────────────────────────────────────── */

const StarRating: React.FC<{ rating: number; size?: number }> = ({
  rating,
  size = 12,
}) => (
  <span className={styles['card-content__stars']} aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, i) => {
      const filled = i + 1 <= rating;
      const half = !filled && i + 0.5 <= rating;
      return (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {half ? (
            <>
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="currentColor" className={styles['star-filled']} />
                  <stop offset="50%" stopColor="currentColor" className={styles['star-empty']} />
                </linearGradient>
              </defs>
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill={`url(#half-${i})`}
              />
            </>
          ) : (
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              className={filled ? styles['star-filled'] : styles['star-empty']}
              fill="currentColor"
            />
          )}
        </svg>
      );
    })}
  </span>
);

/* ── Size mapping: CardContent size → ButtonGroup size (image variant) ──── */

const BUTTON_GROUP_SIZE_MAP: Record<CardContentSize, 'xs' | 'sm' | 'md' | 'lg'> = {
  small:   'xs',
  default: 'sm',
  large:   'md',
};

/* ── Icon size maps ───────────────────────────────────────────────────────── */

const LEADING_ICON_SIZE: Record<CardContentSize, number> = {
  small:   16,
  default: 22,
  large:   28,
};

const DISMISS_ICON_SIZE: Record<CardContentSize, number> = {
  small:   14,
  default: 16,
  large:   18,
};

/* ── Component ────────────────────────────────────────────────────────────── */

/**
 * CardContent — Alert banner + image card component.
 *
 * **Notification variant** renders an inline alert banner matching the Figma
 * `alert` component: a horizontal row with leading status icon (0.5 opacity),
 * title + description text, and an optional trailing dismiss icon.
 *
 * **Image variant** renders a media card with image, heading, body,
 * ButtonGroup, and star rating.
 *
 * Supports **9 colour / status types**:
 * `error`, `warning`, `success`, `info`, `default`, `light-gray`, `navy`,
 * `purple`, `white`.
 *
 * Boolean toggle props (matching Figma component properties):
 * - `showIcon`    → leading-icon   (notification)
 * - `showBody`    → subtext        (both)
 * - `showDismiss` → trailing-icon  (notification)
 * - `showActions` → ButtonGroup    (image only)
 * - `showRating`  → star rating    (image only)
 * - `showImage`   → image area     (image only)
 *
 * Storybook location: Atoms/CardContent
 */
export const CardContent: React.FC<CardContentProps> = ({
  variant = 'notification',
  status = 'default',
  size = 'default',
  heading = 'This is an alert banner for the Echo app',
  body = 'This is a description for an alert banner in the Echo app',
  imageSrc,
  imageAlt = '',
  rating = 4,
  ratingCount,
  buttonGroupType = 'label',
  buttonGroupVariant = 'primary',
  buttonGroupSpecial = 'default',
  buttonGroupLayout = 'separate',
  buttonGroupCount = 2,
  buttonGroupButtons,
  buttonGroupDisabled = false,
  border = true,
  showIcon = true,
  showBody = true,
  showActions = true,
  showDismiss = true,
  onDismiss,
  showRating = true,
  showImage = true,
  className = '',
}) => {
  const StatusIcon = STATUS_ICON[status];
  const iconSize = LEADING_ICON_SIZE[size];
  const dismissSize = DISMISS_ICON_SIZE[size];

  /* ── Notification variant — Alert banner ── */
  if (variant === 'notification') {
    const rootClasses = [
      styles['card-content'],
      styles[`size-${size}`],
      styles['card-content--notification'],
      styles[STATUS_CSS_CLASS[status]],
      border ? styles['card-content--border'] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={rootClasses}>
        <div className={styles['card-content__content-frame']}>
          {showIcon && (
            <div className={styles['card-content__status-icon-wrap']}>
              <StatusIcon size={iconSize} />
            </div>
          )}
          <div className={styles['card-content__body-wrap']}>
            <h3 className={styles['card-content__heading']}>{heading}</h3>
            {showBody && (
              <p className={styles['card-content__body']}>{body}</p>
            )}
          </div>
        </div>
        {showDismiss && (
          <button
            type="button"
            className={styles['card-content__dismiss']}
            aria-label="Dismiss"
            onClick={onDismiss}
          >
            <DismissIcon size={dismissSize} />
          </button>
        )}
      </div>
    );
  }

  /* ── Image variant — Media card ── */
  const rootClasses = [
    styles['card-content'],
    styles[`size-${size}`],
    styles['card-content--image'],
    border ? '' : styles['card-content--no-border'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const bgSize = BUTTON_GROUP_SIZE_MAP[size];

  return (
    <div className={rootClasses}>
      {showImage && (
        <div className={styles['card-content__image-wrap']}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              className={styles['card-content__image']}
            />
          ) : (
            <div className={styles['card-content__image-placeholder']}>
              <ImagePlaceholder />
            </div>
          )}
        </div>
      )}
      <div className={styles['card-content__inner']}>
        <div className={styles['card-content__body-wrap']}>
          <h3 className={styles['card-content__heading']}>{heading}</h3>
          {showBody && (
            <p className={styles['card-content__body']}>{body}</p>
          )}
        </div>
        {showActions && (
          <div className={styles['card-content__actions']}>
            <ButtonGroup
              buttonType={buttonGroupType}
              variant={buttonGroupVariant}
              special={buttonGroupSpecial}
              size={bgSize}
              layout={buttonGroupLayout}
              count={buttonGroupCount}
              buttons={buttonGroupButtons ?? [{ label: 'Label' }, { label: 'Label' }]}
              disabled={buttonGroupDisabled}
            />
          </div>
        )}
        {showRating && (rating !== undefined || ratingCount !== undefined) && (
          <div className={styles['card-content__rating']}>
            <StarRating rating={rating ?? 0} />
            {ratingCount !== undefined && (
              <span className={styles['card-content__rating-count']}>
                {ratingCount}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardContent;
