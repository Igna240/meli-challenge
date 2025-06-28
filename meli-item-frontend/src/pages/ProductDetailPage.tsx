import { useState, useEffect } from 'react';
import type { Product } from '../types/Product.ts';

// --- Iconos SVG para no tener dependencias externas ---
// Puedes reemplazarlos por una librería como lucide-react si lo prefieres
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 hover:fill-blue-100 transition-all duration-300">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
  </svg>
);

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-500">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
    </svg>
);

const TruckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-600">
        <path d="M5 18H3c0-1.1.9-2 2-2v4c-1.1 0-2-.9-2-2Z" /><path d="M19 18h2c0-1.1-.9-2-2-2v4c1.1 0 2-.9 2-2Z" /><path d="M10 18h4" /><path d="M17 18v-4.3c0-.4-.1-.8-.4-1.1l-2.3-2.3c-.3-.3-.7-.4-1.1-.4H5" /><path d="M5 11v7" /><path d="M2 11h3" /><path d="M19 11h3" /><path d="M12 3v8" />
    </svg>
);

// --- Datos Mockeados ---
// Este es el objeto que eventualmente recibirías de tu API.
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
    'https://placehold.co/500x500/9C27B0/FFFFFF?text=Principal',
    'https://placehold.co/500x500/3F51B5/FFFFFF?text=Dorso',
    'https://placehold.co/500x500/009688/FFFFFF?text=Lateral+1',
    'https://placehold.co/500x500/FF5722/FFFFFF?text=Lateral+2',
    'https://placehold.co/500x500/795548/FFFFFF?text=Cámara',
    'https://placehold.co/500x500/607D8B/FFFFFF?text=Pantalla',
  ],
  isBestSeller: true,
  hasFreeReturn: true,
};


// --- Componente Principal ---
export default function ProductDetailPage() {
  // Estado para manejar el producto. Inicialmente nulo hasta que "cargan" los datos.
  const [product, setProduct] = useState(null);
  // Estado para la imagen seleccionada en la galería
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  // Estado para el selector de cantidad
  const [quantity, setQuantity] = useState(1);

  // Simulación de llamada a la API con useEffect
  useEffect(() => {
    // Aquí es donde harías tu llamada fetch a la API
    // Por ahora, solo establecemos los datos mockeados después de un breve retraso.
    const timer = setTimeout(() => {
      setProduct(mockProduct);
    }, 500); // Simula una pequeña demora de red

    return () => clearTimeout(timer);
  }, []); // El array vacío asegura que esto se ejecute solo una vez

  // Función para formatear el precio a moneda Chilena (CLP)
  const formatPrice = (value) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(value);
  };

  // Renderiza un esqueleto (skeleton) mientras cargan los datos
  if (!product) {
    return (
      <div className="p-4 max-w-6xl mx-auto animate-pulse">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Columna Izquierda: Galería de Imágenes (Skeleton) */}
            <div className="w-full md:w-2/3 flex gap-4">
              <div className="w-16 flex flex-col gap-2">
                <div className="h-16 w-16 bg-gray-200 rounded-md"></div>
                <div className="h-16 w-16 bg-gray-200 rounded-md"></div>
                <div className="h-16 w-16 bg-gray-200 rounded-md"></div>
              </div>
              <div className="flex-1 h-[400px] bg-gray-200 rounded-lg"></div>
            </div>
            {/* Columna Derecha: Info (Skeleton) */}
            <div className="w-full md:w-1/3 space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-8 bg-gray-200 rounded w-full"></div>
              <div className="h-12 bg-gray-200 rounded w-1/2"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-12 bg-blue-200 rounded w-full"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Renderizado del componente con los datos del producto
  return (
    <div className="bg-gray-100 min-h-screen p-2 sm:p-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs (migas de pan) */}
        <div className="text-sm text-gray-600 mb-4">
          <a href="#" className="text-blue-500 hover:underline">Volver al listado</a> | <a href="#" className="text-blue-500 hover:underline">Celulares y Telefonía</a> &gt; <a href="#" className="text-blue-500 hover:underline">Celulares y Smartphones</a>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* --- Columna Izquierda: Galería de Imágenes y Descripción --- */}
            <div className="w-full lg:w-2/3">
              <div className="flex flex-col-reverse sm:flex-row gap-4">
                {/* Thumbnails (imágenes pequeñas) */}
                <div className="flex sm:flex-col gap-2 justify-center sm:justify-start">
                  {product.images.slice(0, 6).map((img, index) => (
                    <div
                      key={index}
                      className={`w-12 h-12 sm:w-16 sm:h-16 border-2 rounded-md cursor-pointer flex items-center justify-center overflow-hidden ${selectedImageIndex === index ? 'border-blue-500' : 'border-gray-300'}`}
                      onMouseEnter={() => setSelectedImageIndex(index)}
                    >
                      <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                {/* Imagen Principal */}
                <div className="flex-1 flex justify-center items-center relative">
                  <img
                    src={product.images[selectedImageIndex]}
                    alt="Producto"
                    className="max-w-full max-h-[450px] object-contain rounded-lg"
                  />
                   <div className="absolute top-2 right-2 p-2 rounded-full bg-white/70 backdrop-blur-sm cursor-pointer">
                     <HeartIcon />
                   </div>
                </div>
              </div>
               {/* Sección de "Lo que tienes que saber" (simplificada) */}
               <div className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Lo que tienes que saber de este producto</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Desbloqueado para que elijas la compañía telefónica que prefieras.</li>
                        <li>Pantalla Super AMOLED de 6.6".</li>
                        <li>Tiene 3 cámaras traseras de 50Mpx/12Mpx/5Mpx.</li>
                        <li>Cámara delantera de 32Mpx.</li>
                        <li>Batería de 5000mAh con carga rápida.</li>
                        <li>Memoria interna de 128GB.</li>
                    </ul>
                </div>
            </div>

            {/* --- Columna Derecha: Información de Compra --- */}
            <div className="w-full lg:w-1/3">
              <div className="border border-gray-300 rounded-lg p-6 h-full flex flex-col">
                <div className="flex-grow">
                  <p className="text-sm text-gray-500">{product.condition} | +{product.soldQuantity.toLocaleString('es-CL')} vendidos</p>
                  <h1 className="text-2xl font-semibold mt-1">{product.title}</h1>

                  {product.isBestSeller && (
                     <div className="mt-2">
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">MÁS VENDIDO</span>
                    </div>
                  )}

                  <p className="text-4xl font-light mt-4">{formatPrice(product.price)}</p>
                  <p className="text-base mt-1">en {product.installments.quantity}x {formatPrice(product.installments.amount)} {product.installments.hasInterest ? 'con interés' : 'sin interés'}</p>
                  <a href="#" className="text-sm text-blue-500 hover:underline mt-1 block">Ver los medios de pago</a>

                  <div className="flex items-start gap-3 mt-6">
                    <TruckIcon />
                    <div>
                      <p className="text-green-600 font-semibold">Llega gratis {product.shipping.deliveryTime}</p>
                      <p className="text-sm text-gray-500">Recíbelo en tu dirección o en un punto de retiro.</p>
                      {product.hasFreeReturn && <p className="text-sm text-blue-500 mt-1">Devolución gratis</p>}
                    </div>
                  </div>

                  <p className="font-semibold text-lg mt-6">Stock disponible</p>

                  {/* Selector de Cantidad */}
                  <div className="mt-2 flex items-center gap-4">
                    <span className="font-semibold">Cantidad:</span>
                    <div className="flex items-center border border-gray-300 rounded">
                       <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-1 text-lg text-blue-500 hover:bg-gray-100 disabled:text-gray-300" disabled={quantity <= 1}>-</button>
                       <span className="px-4 py-1 font-bold">{quantity}</span>
                       <button onClick={() => setQuantity(q => Math.min(product.stock, q + 1))} className="px-3 py-1 text-lg text-blue-500 hover:bg-gray-100 disabled:text-gray-300" disabled={quantity >= product.stock}>+</button>
                    </div>
                    <span className="text-sm text-gray-500">({product.stock} disponibles)</span>
                  </div>

                </div>

                {/* Botones de Acción */}
                <div className="mt-8 space-y-3">
                  <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition-colors">
                    Comprar ahora
                  </button>
                  <button className="w-full bg-blue-500/10 text-blue-500 font-semibold py-3 rounded-md hover:bg-blue-500/20 transition-colors">
                    Agregar al carrito
                  </button>
                </div>

                {/* Info del vendedor y Compra Protegida */}
                <div className="mt-6 text-sm">
                    <p>Vendido por <a href="#" className="text-blue-500 hover:underline">{product.seller}</a></p>
                    <div className="flex items-center gap-2 mt-4">
                        <ShieldCheckIcon />
                        <p className="text-gray-600"><span className="text-blue-500">Compra Protegida</span>, recibe el producto que esperabas o te devolvemos tu dinero.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
