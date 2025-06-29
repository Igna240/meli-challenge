import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import ProductInfo from './ProductInfo';
import type { Product } from '../types/Product';

// Mock de los iconos
vi.mock('./icons/TruckIcon', () => ({ default: () => <svg data-testid="truck-icon" /> }));
vi.mock('./icons/ShieldCheckIcon', () => ({ default: () => <svg data-testid="shield-icon" /> }));

const mockProduct: Product = {
  id: 'MLC34729758',
  title: 'Teléfono Celular Samsung Galaxy A55 5g 128 Gb Azul Oscuro',
  price: 299990,
  installments: {
    quantity: 12,
    amount: 24999,
    hasInterest: false,
  },
  shipping: {
    free: true,
    deliveryTime: 'mañana',
  },
  stock: 15,
  condition: 'Nuevo',
  soldQuantity: 1258,
  seller: 'Samsung Oficial',
  images: [],
  isBestSeller: true,
  hasFreeReturn: true,
};

const mockFormatPrice = (value: number) =>
  `$${value.toLocaleString('es-CL')}`; // Simple para el test

describe('<ProductInfo />', () => {
  it('renderiza información básica', () => {
    render(
      <ProductInfo
        product={mockProduct}
        quantity={1}
        setQuantity={() => {}}
        formatPrice={mockFormatPrice}
      />
    );
    expect(screen.getByText(/nuevo/i)).toBeInTheDocument();
    expect(screen.getByText(/teléfono celular/i)).toBeInTheDocument();
    expect(screen.getByText(/más vendido/i)).toBeInTheDocument();
    expect(screen.getByText('$299.990')).toBeInTheDocument();
    expect(screen.getByText(/en 12x \$24.999 sin interés/i)).toBeInTheDocument();
    expect(screen.getByText(/llega gratis/i)).toBeInTheDocument();
    expect(screen.getByText(/devolución gratis/i)).toBeInTheDocument();
    expect(screen.getByText(/stock disponible/i)).toBeInTheDocument();
    expect(screen.getByText(/15 disponibles/i)).toBeInTheDocument();
    expect(screen.getByText(/comprar ahora/i)).toBeInTheDocument();
    expect(screen.getByText(/agregar al carrito/i)).toBeInTheDocument();
    expect(screen.getByText(/compra protegida/i)).toBeInTheDocument();
    expect(screen.getByText(/samsung oficial/i)).toBeInTheDocument();
  });

  it('llama a setQuantity cuando se hace click en + o -', () => {
    const setQuantity = vi.fn();
    render(
      <ProductInfo
        product={mockProduct}
        quantity={2}
        setQuantity={setQuantity}
        formatPrice={mockFormatPrice}
      />
    );

    const minusBtn = screen.getByRole('button', { name: '-' });
    const plusBtn = screen.getByRole('button', { name: '+' });

    fireEvent.click(minusBtn);
    expect(setQuantity).toHaveBeenCalledWith(1);

    fireEvent.click(plusBtn);
    expect(setQuantity).toHaveBeenCalledWith(3);
  });

  it('deshabilita el botón - cuando quantity es 1', () => {
    render(
      <ProductInfo
        product={mockProduct}
        quantity={1}
        setQuantity={() => {}}
        formatPrice={mockFormatPrice}
      />
    );
    const minusBtn = screen.getByRole('button', { name: '-' });
    expect(minusBtn).toBeDisabled();
  });

  it('deshabilita el botón + cuando quantity es igual al stock', () => {
    render(
      <ProductInfo
        product={mockProduct}
        quantity={15}
        setQuantity={() => {}}
        formatPrice={mockFormatPrice}
      />
    );
    const plusBtn = screen.getByRole('button', { name: '+' });
    expect(plusBtn).toBeDisabled();
  });

  it('muestra el icono de camión y el de escudo', () => {
    render(
      <ProductInfo
        product={mockProduct}
        quantity={1}
        setQuantity={() => {}}
        formatPrice={mockFormatPrice}
      />
    );
    expect(screen.getByTestId('truck-icon')).toBeInTheDocument();
    expect(screen.getByTestId('shield-icon')).toBeInTheDocument();
  });

  it('muestra "con interés" cuando corresponde', () => {
    const prod = { ...mockProduct, installments: { ...mockProduct.installments, hasInterest: true } };
    render(
      <ProductInfo
        product={prod}
        quantity={1}
        setQuantity={() => {}}
        formatPrice={mockFormatPrice}
      />
    );
    expect(screen.getByText(/con interés/i)).toBeInTheDocument();
  });
});
