import React from 'react';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import type { ButtonGroupVariant, ButtonGroupLayout, ButtonGroupItemConfig } from '../ButtonGroup/ButtonGroup';
import styles from './CardContent.module.css';

/* ── Types ────────────────────────────────────────────────────────────────── */

export type CardContentVariant = 'notification' | 'image';
export type CardContentStatus = 'error' | 'warning' | 'success' | 'info';
export type CardContentSize = 'small' | 'default' | 'large';

export interface CardContentProps {
  /**
   * Layout variant.
   * - `notification` — status icon, heading, body text, ButtonGroup + count badge
   * - `image`        — image area, heading, body text, ButtonGroup, rating
   */
  variant?: CardContentVariant;
  /**
   * Status type used by the `notification` variant to set icon, heading colour,
   * background tint, and border accent.
   */
  status?: CardContentStatus;
  /** Controls card width, padding, icon sizes, and typography scale */
  size?: CardContentSize;
  /** Card heading / title */
  heading?: string;
  /** Card body / description text */
  body?: string;
  /**
   * Badge count shown next to the ButtonGroup in `notification` cards.
   * Pass `undefined` / omit to hide the badge.
   */
  count?: number;
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
   * ButtonGroup visual variant.
   * @default 'primary'
   */
  buttonGroupVariant?: ButtonGroupVariant;
  /**
   * ButtonGroup layout.
   * @default 'separate'
   */
  buttonGroupLayout?: ButtonGroupLayout;
  /**
   * Number of buttons to render in the ButtonGroup.
   * @default 2
   */
  buttonGroupCount?: number;
  /**
   * Per-button configuration for the ButtonGroup.
   * When provided, its length overrides `buttonGroupCount`.
   */
  buttonGroupButtons?: ButtonGroupItemConfig[];
  /** Disable all buttons in the ButtonGroup */
  buttonGroupDisabled?: boolean;
  /** Extra CSS class on the root element */
  className?: string;
}

/* ── Status config ────────────────────────────────────────────────────────── */

const STATUS_CSS_CLASS: Record<CardContentStatus, string> = {
  error:   'status-error',
  warning: 'status-warning',
  success: 'status-success',
  info:    'status-info',
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

const STATUS_ICON: Record<CardContentStatus, React.FC<{ size: number }>> = {
  error:   ErrorIcon,
  warning: WarningIcon,
  success: SuccessIcon,
  info:    InfoIcon,
};

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
}) => {
  return (
    <span className={styles['card-content__stars']} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i + 1 <= rating;
        const half = !filled && i + 0.5 <= rating;
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
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
};

/* ── Size mapping: CardContent size → ButtonGroup size ────────────────────── */

const BUTTON_GROUP_SIZE_MAP: Record<CardContentSize, 'xs' | 'sm' | 'md' | 'lg'> = {
  small:   'xs',
  default: 'sm',
  large:   'md',
};

/* ── Component ────────────────────────────────────────────────────────────── */

/**
 * CardContent — Atomic content card component with two layout variants:
 * `notification` (status icon + ButtonGroup) and `image` (media + rating).
 *
 * Actions are rendered using the **ButtonGroup** component from
 * `Atoms/Buttons/ButtonGroup`.
 *
 * Storybook location: Atoms/CardContent
 */
export const CardContent: React.FC<CardContentProps> = ({
  variant = 'notification',
  status = 'info',
  size = 'default',
  heading = 'This is a heading',
  body = 'This is a body description providing useful context for the card content.',
  count,
  imageSrc,
  imageAlt = '',
  rating = 4,
  ratingCount,
  buttonGroupVariant = 'primary',
  buttonGroupLayout = 'separate',
  buttonGroupCount = 2,
  buttonGroupButtons,
  buttonGroupDisabled = false,
  className = '',
}) => {
  const rootClasses = [
    styles['card-content'],
    styles[`size-${size}`],
    variant === 'notification' ? styles[`card-content--notification`] : styles['card-content--image'],
    variant === 'notification' ? styles[STATUS_CSS_CLASS[status]] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const StatusIcon = STATUS_ICON[status];
  const iconSizeMap: Record<CardContentSize, number> = {
    small: 32,
    default: 44,
    large: 56,
  };
  const iconSize = iconSizeMap[size];
  const bgSize = BUTTON_GROUP_SIZE_MAP[size];

  /* ── Notification layout ── */
  if (variant === 'notification') {
    return (
      <div className={rootClasses}>
        <div className={styles['card-content__status-icon-wrap']}>
          <StatusIcon size={iconSize} />
        </div>
        <div className={styles['card-content__body-wrap']}>
          <h3 className={styles['card-content__heading']}>{heading}</h3>
          <p className={styles['card-content__body']}>{body}</p>
        </div>
        <div className={styles['card-content__actions']}>
          <ButtonGroup
            variant={buttonGroupVariant}
            size={bgSize}
            layout={buttonGroupLayout}
            count={buttonGroupCount}
            buttons={buttonGroupButtons}
            disabled={buttonGroupDisabled}
          />
          {count !== undefined && (
            <span className={styles['card-content__count']}>{count}</span>
          )}
        </div>
      </div>
    );
  }

  /* ── Image layout ── */
  return (
    <div className={rootClasses}>
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
      <div className={styles['card-content__inner']}>
        <div className={styles['card-content__body-wrap']}>
          <h3 className={styles['card-content__heading']}>{heading}</h3>
          <p className={styles['card-content__body']}>{body}</p>
        </div>
        <div className={styles['card-content__actions']}>
          <ButtonGroup
            variant={buttonGroupVariant}
            size={bgSize}
            layout={buttonGroupLayout}
            count={buttonGroupCount}
            buttons={buttonGroupButtons}
            disabled={buttonGroupDisabled}
          />
        </div>
        {(rating !== undefined || ratingCount !== undefined) && (
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
