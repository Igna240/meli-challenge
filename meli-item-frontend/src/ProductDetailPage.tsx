import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Product } from './types/Product';
import Header from './components/Header'; // <-- IMPORTANTE: importalo así
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductSkeleton from './components/ProductSkeleton';
import PaymentMethods from './components/PaymentMethods';
import ErrorMessage from './components/ErrorMessage';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    fetch(`http://localhost:8080/api/products/${id}`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(async res => {
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'No se encontró el producto');
      }
      return res.json();
    })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'No se pudo cargar el producto');
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <>
      <Header />
      <ProductSkeleton />
    </>
  );
  if (error) return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto p-4">
        <ErrorMessage
          message={error}
          onBack={() => navigate('/')}
        />
      </div>
    </>
  );
  if (!product) return null;

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
