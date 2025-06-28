import React from 'react';
import { useProduct } from '../hooks/useProduct';
import { Gallery } from '../components/product/Gallery';
import type { Product } from '../types/Product';

const Summary = ({ product }: { product: Product }) => <div className="bg-gray-200 p-4 rounded-lg shadow">Resumen del Producto: {product.title}</div>;
const PurchaseCard = ({ product }: { product: Product }) => <div className="bg-gray-200 p-4 rounded-lg shadow">Tarjeta de Compra</div>;
//const KeyFeatures = ({ features }) => <div className="bg-gray-200 p-4 rounded-lg shadow">Características Principales</div>;
//const CharacteristicsGrid = ({ specs }) => <div className="bg-gray-200 p-4 rounded-lg shadow">Características</div>;
//const SpecsAccordion = ({ specs }) => <div className="bg-gray-200 p-4 rounded-lg shadow">Especificaciones</div>;
//const Description = ({ text }) => <div className="bg-gray-200 p-4 rounded-lg shadow">Descripción</div>;
const SellerInfo = () => <div className="bg-gray-200 p-4 rounded-lg shadow">Información del Vendedor</div>;
const PaymentMethods = () => <div className="bg-gray-200 p-4 rounded-lg shadow">Medios de Pago</div>;
const QandA = () => <div className="bg-gray-200 p-4 rounded-lg shadow">Preguntas y Respuestas</div>;
const Reviews = () => <div className="bg-gray-200 p-4 rounded-lg shadow">Opiniones</div>;
const RelatedCarousel = () => <div className="bg-gray-200 p-4 rounded-lg shadow">Productos Relacionados</div>;

const ProductDetailPage: React.FC = () => {
  const { product, loading, error } = useProduct('MLC34729758');

  if (loading) return <div className="flex items-center justify-center h-screen">Cargando producto...</div>;
  if (error || !product) return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <main className="max-w-6xl mx-auto">
        <div className="text-sm text-gray-600 mb-4">Volver al listado | Celulares y Smartphones &gt; Samsung</div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
            <div className="lg:col-span-7 space-y-8">
              <Gallery images={product.images} />
              <hr />
              <hr />
              <QandA />
              <hr />
              <Reviews />
            </div>
            <div className="lg:col-span-3">
              <div className="sticky top-8 space-y-6">
                <Summary product={product} />
                <PurchaseCard product={product} />
                <SellerInfo />
                <PaymentMethods />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <RelatedCarousel />
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;