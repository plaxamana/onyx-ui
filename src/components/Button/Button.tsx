import clsx from 'clsx';
import styles from './Button.module.scss';

import { ButtonProps, BUTTON_VARIANTS, BUTTON_SIZES } from './constants';

export default function Button({
  children,
  variant = BUTTON_VARIANTS.PRIMARY,
  size = BUTTON_SIZES.MEDIUM,
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(styles.base, className, styles[variant], styles[size]);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
