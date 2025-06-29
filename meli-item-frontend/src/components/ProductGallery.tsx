import HeartIcon from './icons/HeartIcon';

interface ProductGalleryProps {
  images: string[];
  selectedImageIndex: number;
  setSelectedImageIndex: (idx: number) => void;
}

const ProductGallery = ({
  images,
  selectedImageIndex,
  setSelectedImageIndex,
}: ProductGalleryProps) => (
  <div className="w-full lg:w-2/3">
    <div className="flex flex-col-reverse sm:flex-row gap-4">
      <div className="flex sm:flex-col gap-2 justify-center sm:justify-start">
        {images.slice(0, 6).map((img, idx) => (
          <div
            key={idx}
            className={`w-12 h-12 sm:w-16 sm:h-16 border-2 rounded-md cursor-pointer flex items-center justify-center overflow-hidden ${selectedImageIndex === idx ? 'border-blue-500' : 'border-gray-300'}`}
            onMouseEnter={() => setSelectedImageIndex(idx)}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="flex-1 flex justify-center items-center relative">
        <img
          src={images[selectedImageIndex]}
          alt="Producto"
          className="max-w-full max-h-[450px] object-contain rounded-lg"
        />
        <div className="absolute top-2 right-2 p-2 rounded-full bg-white/70 backdrop-blur-sm cursor-pointer">
          <HeartIcon />
        </div>
      </div>
    </div>
    {/* Sección "Lo que tienes que saber" */}
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
);

export default ProductGallery;
