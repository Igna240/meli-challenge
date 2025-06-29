import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('debe mostrar el logo de Mercado Libre', () => {
    render(<Header />);
    expect(
      screen.getByAltText(/mercado libre/i)
    ).toBeInTheDocument();
  });

  it('debe mostrar el campo de búsqueda', () => {
    render(<Header />);
    expect(
      screen.getByPlaceholderText(/buscar productos/i)
    ).toBeInTheDocument();
  });

  it('debe mostrar la ubicación Capital Federal', () => {
    render(<Header />);
    expect(
      screen.getByText(/capital federal/i)
    ).toBeInTheDocument();
  });
});