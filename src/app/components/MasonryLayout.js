// src/app/components/MasonryLayout.js
import Image from 'next/image';

const MasonryLayout = ({ images = [], numImages = 25 }) => {
  const displayImages = images.length > 0 
    ? images 
    : Array.from({ length: numImages }, (_, i) => `/assets/images/gallery/image${i + 1}.jpg`);

  return (
    <section className="columns-3 md:columns-4 lg:columns-5 gap-4 mx-auto">
      {displayImages.map((src, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            width={1200}
            height={800}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      ))}
    </section>
  );
};

export default MasonryLayout;
