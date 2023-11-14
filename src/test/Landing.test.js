import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from '../components/LandingPage/LandigPage';

describe('LandingPage Component', () => {
  it('debe renderizar el título correctamente', () => {
    
    render(
      <Router>
        <LandingPage />
      </Router>
    );

    const titleElement = screen.getByText('Bienvenido a Dog´s lover');
    expect(titleElement).toBeInTheDocument();
  });

  it('debe renderizar el botón "Entrar" correctamente', () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );

    const entrarButton = screen.getByText('Entrar');
    expect(entrarButton).toBeInTheDocument();
  });

  it('debe redirigir a "/home" cuando se hace clic en el botón "Entrar"', () => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );

    const entrarButton = screen.getByText('Entrar');
    entrarButton.click();

    expect(window.location.pathname).toBe('/home');
  });
});
