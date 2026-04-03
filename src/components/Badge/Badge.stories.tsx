import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Dot: Story = {
  args: {
    type: 'dot',
    sentiment: 'informative',
    'aria-label': 'Informative status',
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    sentiment: 'alert',
    count: 5,
  },
};

export const TextTruncated: Story = {
  args: {
    type: 'text',
    sentiment: 'alert',
    count: 120,
    max: 99,
  },
};

export const Tag: Story = {
  args: {
    type: 'tag',
    sentiment: 'positive',
    label: 'Active',
  },
};

export const AllDots: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge type="dot" sentiment="informative" aria-label="Informative" />
      <Badge type="dot" sentiment="positive" aria-label="Positive" />
      <Badge type="dot" sentiment="warning" aria-label="Warning" />
      <Badge type="dot" sentiment="alert" aria-label="Alert" />
    </div>
  ),
};

export const AllTextCounts: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge type="text" sentiment="informative" count={3} />
      <Badge type="text" sentiment="positive" count={12} />
      <Badge type="text" sentiment="warning" count={99} />
      <Badge type="text" sentiment="alert" count={100} />
    </div>
  ),
};

export const AllTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Badge type="tag" sentiment="informative" label="Informative" />
      <Badge type="tag" sentiment="positive" label="Positive" />
      <Badge type="tag" sentiment="warning" label="Warning" />
      <Badge type="tag" sentiment="alert" label="Alert" />
    </div>
  ),
};
