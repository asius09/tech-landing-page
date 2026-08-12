import React from 'react';
import { render, screen } from '@testing-library/react';
import { HowItWorks } from '../HowItWorks';

describe('HowItWorks Component', () => {
  it('renders the section header', () => {
    render(<HowItWorks />);
    expect(screen.getByText('How it works')).toBeInTheDocument();
    expect(screen.getByText('Just insert your photos into our professional crafted video templates.')).toBeInTheDocument();
  });

  it('renders the toggle switch', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Create Your Own')).toBeInTheDocument();
    expect(screen.getByText('Use Our Templates')).toBeInTheDocument();
    expect(screen.getByText('Powerful')).toBeInTheDocument();
  });

  it('renders all four steps', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Choose Recipe')).toBeInTheDocument();
    expect(screen.getByText('Upload Photos')).toBeInTheDocument();
    expect(screen.getByText('AI Builds Video')).toBeInTheDocument();
    expect(screen.getByText('Download & Share')).toBeInTheDocument();
  });

  it('renders step descriptions correctly', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/Pick from a library of professionally crafted videos templates/i)).toBeInTheDocument();
    expect(screen.getByText(/The recipe tells you which photos to upload with animations already selected/i)).toBeInTheDocument();
    expect(screen.getByText(/Watch AI transform your photos into a cinematic real estate video/i)).toBeInTheDocument();
    expect(screen.getByText(/Download your finished video and share it anywhere in minutes/i)).toBeInTheDocument();
  });
});
