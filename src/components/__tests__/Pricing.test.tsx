import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pricing } from '../Pricing';

describe('Pricing Component', () => {
  it('renders the section header', () => {
    render(<Pricing />);
    expect(screen.getByText('Credit Plans')).toBeInTheDocument();
    expect(screen.getByText('Choose the plan that works best for you and your team.')).toBeInTheDocument();
  });

  it('renders the Pay as you go plan correctly', () => {
    render(<Pricing />);
    expect(screen.getByText('Pay as you go')).toBeInTheDocument();
    expect(screen.getByText('$25')).toBeInTheDocument();
    expect(screen.getByText('/per image')).toBeInTheDocument();
  });

  it('renders the Monthly plan correctly', () => {
    render(<Pricing />);
    expect(screen.getByText('Monthly')).toBeInTheDocument();
    expect(screen.getByText('$199')).toBeInTheDocument();
    expect(screen.getByText('/per month')).toBeInTheDocument();
    expect(screen.getAllByText(/BEST/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/VALUE/i)).toBeInTheDocument();
  });

  it('renders the features at the bottom', () => {
    render(<Pricing />);
    expect(screen.getByText(/Made from/i)).toBeInTheDocument();
    expect(screen.getByText(/No editing skills/i)).toBeInTheDocument();
    expect(screen.getByText(/Create in 5/i)).toBeInTheDocument();
    expect(screen.getByText(/Just \$1\.50 per/i)).toBeInTheDocument();
  });
});
