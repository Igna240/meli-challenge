import { useState, useEffect } from 'react';
import type { Product } from '../types/Product';

// Datos de Ejemplo
const mockProduct: Product = {
  id: 'MLC34729758',
  title: 'Teléfono Celular Samsung Galaxy A55 5g 128 Gb Azul Oscuro',
  condition: 'Nuevo',
  soldQuantity: 1700,
  sellerName: 'Samsung',
  rating: { average: 4.8, count: 152 },
  price: { current: 349990, currency: 'CLP' },
  installments: { quantity: 12, amount: 29166, currency: 'CLP', interestFree: true },
  shipping: { free: true, method: 'FULL', eta: 'Llega gratis mañana', storePickup: true },
  stock: { available: 5, isLastUnit: true },
  images: [
    { id: '1', url: 'https://http2.mlstatic.com/D_NQ_NP_865853-MLC75292410214_032024-O.webp' },
    { id: '2', url: 'https://http2.mlstatic.com/D_NQ_NP_927365-MLC75292410215_032024-O.webp' },
    { id: '3', url: 'https://http2.mlstatic.com/D_NQ_NP_994939-MLC75292410216_032024-O.webp' },
    { id: '4', url: 'https://http2.mlstatic.com/D_NQ_NP_661923-MLC75292410217_032024-O.webp' },
    { id: '5', url: 'https://http2.mlstatic.com/D_NQ_NP_930215-MLC75292410218_032024-O.webp' },
  ],
  keyFeatures: [
    { icon: 'bi-camera', text: 'Cámara trasera principal de 50 Mpx.' },
    { icon: 'bi-cpu', text: 'Procesador Exynos 1480 Octa-Core de 2.75GHz.' },
    { icon: 'bi-battery-charging', text: 'Batería de 5000mAh con carga rápida.' },
    { icon: 'bi-display', text: 'Pantalla Super AMOLED de 6.6".' },
  ],
  variants: {
    type: 'Color',
    options: [
      { name: 'Azul oscuro', value: '#334155' },
      { name: 'Celeste', value: '#7dd3fc' },
      { name: 'Lila', value: '#c4b5fd' },
    ],
  },
  description: `Con el Samsung Galaxy A55 5G, llevas la fotografía, el video y la conectividad a otro nivel...`,
  specs: [
    { group: 'Pantalla', items: [{ key: 'Tipo de resolución', value: 'Full HD+' }] },
    { group: 'Batería', items: [{ key: 'Capacidad de la batería', value: '5000 mAh' }] },
  ],
};

export const useProduct = (productId: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProduct(mockProduct);
      } catch (err) {
        setError('No se pudo cargar el producto.');
      } finally {
        setLoading(false);
      }
    };
    if (productId) fetchProduct();
  }, [productId]);

  return { product, loading, error };
};