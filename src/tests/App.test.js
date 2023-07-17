import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders App component', () => {
    render(<App />);
    const headingElement = screen.getByText('File Importer');
    expect(headingElement).toBeInTheDocument();
  });
});
