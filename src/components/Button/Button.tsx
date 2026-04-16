import { forwardRef, Ref } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

import { ButtonProps, BUTTON_VARIANTS, BUTTON_SIZES } from './constants';

function Button(
  {
    children,
    variant = BUTTON_VARIANTS.PRIMARY,
    size = BUTTON_SIZES.MEDIUM,
    className,
    href,
    disabled,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement | HTMLAnchorElement>,
) {
  const classes = clsx(styles.base, className, styles[variant], styles[size], {
    [styles.disabled]: disabled,
  });
  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={ref as Ref<HTMLButtonElement & HTMLAnchorElement>}
      href={href}
      className={classes}
      disabled={disabled}
      aria-disabled={disabled}
      {...(props as Record<string, unknown>)}
    >
      {children}
    </Component>
  );
}

export default forwardRef(Button);
