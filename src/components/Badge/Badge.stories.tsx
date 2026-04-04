import type { Meta, StoryObj } from '@storybook/react';
import { Badge, BADGE_SENTIMENTS, BADGE_TYPES, BADGE_VARIANTS } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    sentiment: {
      control: 'select',
      options: Object.values(BADGE_SENTIMENTS),
    },
    variant: {
      control: 'radio',
      options: Object.values(BADGE_VARIANTS),
    },
    type: {
      control: 'radio',
      options: Object.values(BADGE_TYPES),
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Dot: Story = {
  args: {
    type: 'dot',
    sentiment: BADGE_SENTIMENTS.INFORMATIVE,
    'aria-label': 'Informative status',
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    sentiment: BADGE_SENTIMENTS.ALERT,
    count: 5,
  },
};

export const TextTruncated: Story = {
  args: {
    type: 'text',
    sentiment: BADGE_SENTIMENTS.ALERT,
    count: 120,
    max: 99,
  },
};

export const Tag: Story = {
  args: {
    type: 'tag',
    sentiment: BADGE_SENTIMENTS.POSITIVE,
    label: 'Active',
  },
};

export const AllDots: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge type="dot" sentiment={BADGE_SENTIMENTS.INFORMATIVE} aria-label="Informative" />
      <Badge type="dot" sentiment={BADGE_SENTIMENTS.POSITIVE} aria-label="Positive" />
      <Badge type="dot" sentiment={BADGE_SENTIMENTS.WARNING} aria-label="Warning" />
      <Badge type="dot" sentiment={BADGE_SENTIMENTS.ALERT} aria-label="Alert" />
    </div>
  ),
};

export const AllTextCounts: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge type="text" sentiment={BADGE_SENTIMENTS.INFORMATIVE} count={3} />
      <Badge type="text" sentiment={BADGE_SENTIMENTS.POSITIVE} count={12} />
      <Badge type="text" sentiment={BADGE_SENTIMENTS.WARNING} count={99} />
      <Badge type="text" sentiment={BADGE_SENTIMENTS.ALERT} count={100} />
    </div>
  ),
};

export const AllTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Badge type="tag" sentiment={BADGE_SENTIMENTS.INFORMATIVE} label="Informative" />
      <Badge type="tag" sentiment={BADGE_SENTIMENTS.POSITIVE} label="Positive" />
      <Badge type="tag" sentiment={BADGE_SENTIMENTS.WARNING} label="Warning" />
      <Badge type="tag" sentiment={BADGE_SENTIMENTS.ALERT} label="Alert" />
    </div>
  ),
};
