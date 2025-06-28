import { useState } from 'react';


export const Gallery: React.FC<{ images: { id: string; url: string }[] }> = ({ images }) => {
  if (!images || images.length === 0) return null;
  const [selectedImageUrl, setSelectedImageUrl] = useState(images[0].url);
  const handleThumbnailHover = (imageUrl: string) => setSelectedImageUrl(imageUrl);

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-2">
        {images.map((image) => (
          <div
            key={image.id}
            className={`w-12 h-12 border rounded-md cursor-pointer overflow-hidden ${selectedImageUrl === image.url ? 'border-blue-500 border-2' : 'border-gray-300'}`}
            onMouseEnter={() => handleThumbnailHover(image.url)}
          >
            <img src={image.url} alt={`Miniatura ${image.id}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img src={selectedImageUrl} alt="Imagen principal" className="max-w-full max-h-[450px] object-contain" />
      </div>
    </div>
  );
};
