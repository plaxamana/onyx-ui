import clsx from 'clsx';
import styles from './Badge.module.scss';
import { BadgeProps, BADGE_VARIANTS } from './constants';

export default function Badge(props: BadgeProps) {
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
