import { render } from '@testing-library/react';
import ProductSkeleton from './ProductSkeleton';

describe('<ProductSkeleton />', () => {

  it('muestra los placeholders de imágenes', () => {
    render(<ProductSkeleton />);
    // Debe haber 3 placeholders cuadrados de imágenes
    const imagePlaceholders = document.querySelectorAll('.h-16.w-16.bg-gray-200');
    expect(imagePlaceholders.length).toBe(3);
  });

  it('muestra el placeholder principal de la imagen grande', () => {
    render(<ProductSkeleton />);
    const mainImage = document.querySelector('.flex-1.h-\\[400px\\].bg-gray-200.rounded-lg');
    expect(mainImage).toBeInTheDocument();
  });

  it('renderiza placeholders de info (derecha)', () => {
    render(<ProductSkeleton />);
    // Buscamos varios placeholders por altura típica
    expect(document.querySelector('.h-4.bg-gray-200')).toBeInTheDocument();
    expect(document.querySelector('.h-8.bg-gray-200')).toBeInTheDocument();
    expect(document.querySelector('.h-12.bg-gray-200')).toBeInTheDocument();
    expect(document.querySelector('.h-6.bg-gray-200')).toBeInTheDocument();
    expect(document.querySelector('.h-12.bg-blue-200')).toBeInTheDocument();
  });
});
