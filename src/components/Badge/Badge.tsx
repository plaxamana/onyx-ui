import type { ComponentProps, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Badge.module.scss';

export const BADGE_SENTIMENTS = {
  INFORMATIVE: 'informative',
  POSITIVE: 'positive',
  WARNING: 'warning',
  ALERT: 'alert',
} as const;
export type BadgeSentiment = (typeof BADGE_SENTIMENTS)[keyof typeof BADGE_SENTIMENTS];

export const BADGE_TYPES = {
  DOT: 'dot',
  TEXT: 'text',
  TAG: 'tag',
} as const;
export type BadgeType = (typeof BADGE_TYPES)[keyof typeof BADGE_TYPES];

export const BADGE_VARIANTS = {
  PILL: 'pill',
  SQUARE: 'square',
} as const;
export type BadgeVariant = (typeof BADGE_VARIANTS)[keyof typeof BADGE_VARIANTS];

export interface DotBadgeProps {
  type?: 'dot';
  /** Communicates the meaning of the badge. */
  sentiment: BadgeSentiment;
  /** Controls the shape of the badge. Defaults to pill. */
  variant?: BadgeVariant;
  'aria-label': string;
}

export interface TextBadgeProps {
  type: 'text';
  /** Communicates the meaning of the badge. */
  sentiment: BadgeSentiment;
  /** Controls the shape of the badge. Defaults to pill. */
  variant?: BadgeVariant;
  count: number;
  max?: number;
}

export interface TagBadgeProps {
  type: 'tag';
  /** Communicates the meaning of the badge. */
  sentiment: BadgeSentiment;
  /** Controls the shape of the badge. Defaults to pill. */
  variant?: BadgeVariant;
  label: string;
  icon?: ReactNode;
}

export type BadgeProps = ComponentProps<'span'> & (DotBadgeProps | TextBadgeProps | TagBadgeProps);

export function Badge(props: BadgeProps) {
  const { sentiment, variant = BADGE_VARIANTS.PILL, className } = props;
  const base = clsx(styles.badge, styles[sentiment], styles[variant], className);

  if (!props.type || props.type === 'dot') {
    return <span className={clsx(base, styles.dot)} role="img" aria-label={props['aria-label']} />;
  }

  if (props.type === 'text') {
    const { count, max = 99 } = props;
    const label = count > max ? `${max}+` : String(count);
    return (
      <span className={clsx(base, styles.text)} aria-label={`${count} notifications`}>
        {label}
      </span>
    );
  }

  if (props.type === 'tag') {
    const { label, icon } = props;
    return (
      <span className={clsx(base, styles.tag)}>
        {icon && (
          <span className={styles.icon} aria-hidden="true">
            {icon}
          </span>
        )}
        {label}
      </span>
    );
  }
}
