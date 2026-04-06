import type { Meta, StoryObj } from '@storybook/react';
import Button, { BUTTON_SIZES, BUTTON_VARIANTS } from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(BUTTON_VARIANTS),
    },
  },
  args: {
    children: 'My Button',
    variant: BUTTON_VARIANTS.PRIMARY,
    size: BUTTON_SIZES.MEDIUM,
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: BUTTON_VARIANTS.SECONDARY,
  },
};

export const Ghost: Story = {
  args: {
    variant: BUTTON_VARIANTS.GHOST,
  },
};

export const Small: Story = {
  args: {
    size: BUTTON_SIZES.SMALL,
  },
};
