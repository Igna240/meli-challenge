import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaymentMethods from './PaymentMethods';

describe('PaymentMethods', () => {

  it('muestra "Hasta 12 cuotas sin interés"', () => {
    render(<PaymentMethods />);
    expect(screen.getByText(/hasta 12 cuotas sin interés/i)).toBeInTheDocument();
  });

  it('muestra sección de tarjetas de crédito', () => {
    render(<PaymentMethods />);
    expect(screen.getByText(/tarjetas de crédito/i)).toBeInTheDocument();
    expect(screen.getByText(/cuotas sin interés con bancos seleccionados/i)).toBeInTheDocument();
  });

  it('muestra sección de tarjetas de débito', () => {
    render(<PaymentMethods />);
    expect(screen.getByText(/tarjetas de débito/i)).toBeInTheDocument();
    expect(screen.getByText(/acreditación inmediata/i)).toBeInTheDocument();
  });

  it('muestra el link para conocer otros medios de pago', () => {
    render(<PaymentMethods />);
    expect(
      screen.getByRole('link', { name: /conoce otros medios de pago/i })
    ).toBeInTheDocument();
  });
});
