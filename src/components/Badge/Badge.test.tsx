import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge — dot', () => {
  it('renders with an accessible label', () => {
    render(<Badge type="dot" variant="informative" aria-label="New notification" />);
    expect(screen.getByRole('img', { name: 'New notification' })).toBeInTheDocument();
  });
});

describe('Badge — text', () => {
  it('renders the count', () => {
    render(<Badge type="text" variant="alert" count={5} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('truncates counts above the default max of 99', () => {
    render(<Badge type="text" variant="alert" count={100} />);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it('truncates counts above a custom max', () => {
    render(<Badge type="text" variant="warning" count={50} max={9} />);
    expect(screen.getByText('9+')).toBeInTheDocument();
  });

  it('does not truncate when count equals max', () => {
    render(<Badge type="text" variant="positive" count={99} max={99} />);
    expect(screen.getByText('99')).toBeInTheDocument();
  });

  it('has an accessible notification label', () => {
    render(<Badge type="text" variant="alert" count={3} />);
    expect(screen.getByLabelText('3 notifications')).toBeInTheDocument();
  });
});

describe('Badge — tag', () => {
  it('renders the label', () => {
    render(<Badge type="tag" variant="positive" label="Active" />);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders an icon when provided', () => {
    render(
      <Badge type="tag" variant="warning" label="Warning" icon={<svg data-testid="test-icon" />} />,
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('hides the icon from assistive technology', () => {
    render(
      <Badge
        type="tag"
        variant="informative"
        label="Info"
        icon={<svg data-testid="test-icon" />}
      />,
    );
    expect(screen.getByTestId('test-icon').parentElement).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders without an icon', () => {
    render(<Badge type="tag" variant="alert" label="Error" />);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
