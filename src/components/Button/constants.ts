import { ComponentPropsWithoutRef } from 'react';

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

type BaseProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  disabled?: boolean;
};

type AsButton = ComponentPropsWithoutRef<'button'> & BaseProps & { href?: never };
type AsAnchor = ComponentPropsWithoutRef<'a'> & BaseProps & { href: string };

export type ButtonProps = AsButton | AsAnchor;
