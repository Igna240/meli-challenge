const ProductSkeleton = () => (
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

export default ProductSkeleton;
