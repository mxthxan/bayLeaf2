import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { X } from 'lucide-react';

// Define GalleryItem type internally to ensure it's available
interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

// Sample gallery data with placeholder images
const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "Traditional Dosa",
    imageUrl: "/api/placeholder/800/500",
    category: "food"
  },
  {
    id: "2",
    title: "Elegant Restaurant Interior",
    imageUrl: "/api/placeholder/800/500",
    category: "restaurant"
  },
  {
    id: "3",
    title: "Chef's Special Curry",
    imageUrl: "/api/placeholder/800/500",
    category: "food"
  },
  {
    id: "4",
    title: "Cultural Dance Night",
    imageUrl: "/api/placeholder/800/500",
    category: "events"
  },
  {
    id: "5",
    title: "Traditional Thali",
    imageUrl: "/api/placeholder/800/500",
    category: "food"
  },
  {
    id: "6",
    title: "Private Dining Area",
    imageUrl: "/api/placeholder/800/500",
    category: "restaurant"
  }
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Function to handle image click
  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a glimpse into our world of South Indian cuisine, elegant ambiance, and cultural events
            that provide an authentic experience.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item) => (
            <div 
              key={item.id}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-all hover:shadow-lg"
              onClick={() => handleImageClick(item)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-3 bg-white">
                <h3 className="font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
                onClick={handleCloseModal}
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <span className="text-sm text-gray-500 capitalize">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;