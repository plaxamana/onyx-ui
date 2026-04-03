import type { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Badge.module.scss';

export type BadgeSentiment = 'informative' | 'positive' | 'warning' | 'alert';

export interface DotBadgeProps {
  type?: 'dot';
  sentiment: BadgeSentiment;
  'aria-label': string;
  className?: string;
}

export interface TextBadgeProps {
  type: 'text';
  sentiment: BadgeSentiment;
  count: number;
  max?: number;
  className?: string;
}

export interface TagBadgeProps {
  type: 'tag';
  sentiment: BadgeSentiment;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export type BadgeProps = DotBadgeProps | TextBadgeProps | TagBadgeProps;

export function Badge(props: BadgeProps) {
  const { sentiment, className } = props;
  const base = clsx(styles.badge, styles[sentiment], className);

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
