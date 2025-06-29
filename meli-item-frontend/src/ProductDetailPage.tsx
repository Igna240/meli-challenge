import { useState, useEffect } from 'react';
import type { Product } from './types/Product';
import Header from './components/Header'; // <-- IMPORTANTE: importalo así
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductSkeleton from './components/ProductSkeleton';
import PaymentMethods from './components/PaymentMethods';

const mockProduct = {
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
  images: [
    'https://http2.mlstatic.com/D_NQ_NP_2X_800035-MLA81367078349_122024-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_2X_832248-MLA81366749957_122024-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_2X_621964-MLA81364948571_122024-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_2X_777643-MLA75395342152_042024-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_2X_725539-MLA80825742603_112024-F.webp',
    'https://http2.mlstatic.com/D_NQ_NP_2X_780712-MLA81099188364_122024-F.webp',
  ],
  isBestSeller: true,
  hasFreeReturn: true,
};

export default function ProductDetailPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setProduct(mockProduct), 500);
    return () => clearTimeout(timer);
  }, []);

  const formatPrice = (value: number) => new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(value);

  if (!product) return (
    <>
      <Header />
      <ProductSkeleton />
    </>
  );

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen p-2 sm:p-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-600 mb-4">
            <a href="#" className="text-blue-500 hover:underline">Volver al listado</a> |{' '}
            <a href="#" className="text-blue-500 hover:underline">Celulares y Telefonía</a> &gt;{' '}
            <a href="#" className="text-blue-500 hover:underline">Celulares y Smartphones</a>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row gap-8">
              <ProductGallery
                images={product.images}
                selectedImageIndex={selectedImageIndex}
                setSelectedImageIndex={setSelectedImageIndex}
              />
              <ProductInfo
                product={product}
                quantity={quantity}
                setQuantity={setQuantity}
                formatPrice={formatPrice}
              />
            </div>
          </div>
          <PaymentMethods />
        </div>
      </div>
    </>
  );
}
