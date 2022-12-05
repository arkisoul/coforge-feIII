import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

describe('app component', () => {
  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // screen.debug();
    const navLinks = screen.getAllByRole('link');
    expect(navLinks.length).toEqual(2);
    navLinks.forEach((navLink) => {
      expect(navLink).toBeInTheDocument();
    })
  });
})

// describe, test, it
// beforeAll, beforeEach, afterAll, afterEach
// expect
// matcher functions
