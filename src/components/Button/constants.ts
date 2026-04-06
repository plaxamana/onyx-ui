import { ComponentProps } from 'react';

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INLINE: 'inline',
  GHOST: 'ghost',
} as const;

export type ButtonVariants = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export const BUTTON_SIZES = {
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type ButtonSizes = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

export interface ButtonProps extends ComponentProps<'button'> {
  /** Controls the style of the button.  Defaults to primary */
  variant?: ButtonVariants;
  /** Controls the size of the button.  Defaults to medium */
  size?: ButtonSizes;
}
