import ShieldCheckIcon from './icons/ShieldCheckIcon';
import TruckIcon from './icons/TruckIcon';
import type { Product } from '../types/Product';

interface ProductInfoProps {
  product: Product;
  quantity: number;
  setQuantity: (qty: number) => void;
  formatPrice: (value: number) => string;
}

const ProductInfo = ({
  product,
  quantity,
  setQuantity,
  formatPrice,
}: ProductInfoProps) => (
  <div className="w-full lg:w-1/3">
    <div className="border border-gray-300 rounded-lg p-6 h-full flex flex-col">
      <div className="flex-grow">
        <p className="text-sm text-gray-500">
          {product.condition} | +{product.soldQuantity.toLocaleString('es-CL')} vendidos
        </p>
        <h1 className="text-2xl font-semibold mt-1">{product.title}</h1>

        {product.isBestSeller && (
          <div className="mt-2">
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              MÁS VENDIDO
            </span>
          </div>
        )}

        {/* PRECIOS: Original tachado y descuento si corresponde */}
        <div className="flex items-center gap-3 mt-4">
          {product.discountPrice && product.discountPrice > 0
            ? (
              <>
                <span className="text-2xl text-gray-400 line-through">
                  {formatPrice(product.price)}
                </span>
                <span className="text-4xl font-light text-red-600">
                  {formatPrice(product.discountPrice)}
                </span>
              </>
            )
            : (
              <span className="text-4xl font-light">
                {formatPrice(product.price)}
              </span>
            )
          }
        </div>

        <p className="text-base mt-1">
          en {product.installments.quantity}x {formatPrice(product.installments.amount)}{' '}
          {product.installments.hasInterest ? 'con interés' : 'sin interés'}
        </p>
        <a href="#" className="text-sm text-blue-500 hover:underline mt-1 block">
          Ver los medios de pago
        </a>

        <div className="flex items-start gap-3 mt-6">
          <TruckIcon />
          <div>
            <p className="text-green-600 font-semibold">
              Llega gratis {product.shipping.deliveryTime}
            </p>
            <p className="text-sm text-gray-500">
              Recíbelo en tu dirección o en un punto de retiro.
            </p>
            {product.hasFreeReturn && (
              <p className="text-sm text-blue-500 mt-1">Devolución gratis</p>
            )}
          </div>
        </div>

        <p className="font-semibold text-lg mt-6">Stock disponible</p>

        {/* Selector de Cantidad */}
        <div className="mt-2 flex items-center gap-4">
          <span className="font-semibold">Cantidad:</span>
          <div className="flex items-center border border-gray-300 rounded">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 text-lg text-blue-500 hover:bg-gray-100 disabled:text-gray-300"
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="px-4 py-1 font-bold">{quantity}</span>
            <button
              onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              className="px-3 py-1 text-lg text-blue-500 hover:bg-gray-100 disabled:text-gray-300"
              disabled={quantity >= product.stock}
            >
              +
            </button>
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
        <p>
          Vendido por{' '}
          <a href="#" className="text-blue-500 hover:underline">
            {product.seller}
          </a>
        </p>
        <div className="flex items-center gap-2 mt-4">
          <ShieldCheckIcon />
          <p className="text-gray-600">
            <span className="text-blue-500">Compra Protegida</span>, recibe el producto que
            esperabas o te devolvemos tu dinero.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ProductInfo;
