import { render, screen, fireEvent } from '@testing-library/react';
import ProductGallery from './ProductGallery';

// Mock de HeartIcon (si hace falta, si te da error, podés eliminar el mock)
vi.mock('./icons/HeartIcon', () => ({
  default: () => <svg data-testid="heart-icon" />,
}));

const mockImages = [
  'https://fake.com/img1.jpg',
  'https://fake.com/img2.jpg',
  'https://fake.com/img3.jpg',
  'https://fake.com/img4.jpg',
  'https://fake.com/img5.jpg',
  'https://fake.com/img6.jpg',
  'https://fake.com/img7.jpg', // No debería aparecer (slice(0,6))
];

describe('ProductGallery', () => {
  it('muestra la imagen principal según selectedImageIndex', () => {
    render(
      <ProductGallery
        images={mockImages}
        selectedImageIndex={2}
        setSelectedImageIndex={() => {}}
      />
    );
    // Debe mostrar la tercera imagen como principal
    const mainImg = screen.getByAltText('Producto') as HTMLImageElement;
    expect(mainImg).toBeInTheDocument();
    expect(mainImg.src).toContain(mockImages[2]);
  });

  it('renderiza solo los primeros 6 thumbnails', () => {
    render(
      <ProductGallery
        images={mockImages}
        selectedImageIndex={0}
        setSelectedImageIndex={() => {}}
      />
    );
    const thumbnails = screen.getAllByAltText(/Thumbnail/i);
    expect(thumbnails.length).toBe(6);
  });

  it('marca el thumbnail seleccionado con la clase border-blue-500', () => {
    const { container } = render(
      <ProductGallery
        images={mockImages}
        selectedImageIndex={1}
        setSelectedImageIndex={() => {}}
      />
    );
    // thumbnails son divs con class border-blue-500 para el seleccionado
    const selectedThumbnail = container.querySelector('.border-blue-500');
    expect(selectedThumbnail).toBeInTheDocument();
    // Y debería tener el thumbnail con el índice 1
    const img = selectedThumbnail?.querySelector('img');
    expect(img?.alt).toBe('Thumbnail 2');
  });

  it('llama a setSelectedImageIndex al hacer hover en un thumbnail', () => {
    const setSelectedImageIndex = vi.fn();
    render(
      <ProductGallery
        images={mockImages}
        selectedImageIndex={0}
        setSelectedImageIndex={setSelectedImageIndex}
      />
    );
    const thumbnails = screen.getAllByAltText(/Thumbnail/i);
    fireEvent.mouseEnter(thumbnails[4]);
    expect(setSelectedImageIndex).toHaveBeenCalledWith(4);
  });

  it('muestra el icono HeartIcon', () => {
    render(
      <ProductGallery
        images={mockImages}
        selectedImageIndex={0}
        setSelectedImageIndex={() => {}}
      />
    );
    expect(screen.getByTestId('heart-icon')).toBeInTheDocument();
  });

  it('muestra la sección "Lo que tienes que saber"', () => {
    render(
      <ProductGallery
        images={mockImages}
        selectedImageIndex={0}
        setSelectedImageIndex={() => {}}
      />
    );
    expect(
      screen.getByText(/lo que tienes que saber de este producto/i)
    ).toBeInTheDocument();
    // Chequea un item de la lista
    expect(
      screen.getByText(/pantalla super amoled/i)
    ).toBeInTheDocument();
  });
});
