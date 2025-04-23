import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { MenuItem } from '../../types';

// Sample menu data
const menuData: MenuItem[] = [
  {
    id: "1",
    name: "Masala Dosa",
    description: "Crispy rice crepe filled with spiced potato filling, served with sambar and chutney.",
    price: 11.95,
    spiceLevel: 2,
    imageUrl: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "mains",
    isVegetarian: true
  },
  {
    id: "2",
    name: "Idli Sambar",
    description: "Steamed rice cakes served with lentil soup and coconut chutney.",
    price: 9.95,
    spiceLevel: 1,
    imageUrl: "https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "starters",
    isVegetarian: true
  },
  {
    id: "3",
    name: "Chicken Chettinad",
    description: "Fiery chicken curry with freshly ground spices in authentic Chettinad style.",
    price: 18.95,
    spiceLevel: 3,
    imageUrl: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "mains",
    isVegetarian: false,
    isSpecial: true
  },
  {
    id: "4",
    name: "Appam with Stew",
    description: "Lacy rice hoppers served with vegetable or chicken stew cooked in coconut milk.",
    price: 13.95,
    spiceLevel: 1,
    imageUrl: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "mains",
    isVegetarian: true
  },
  {
    id: "5",
    name: "Mango Lassi",
    description: "Refreshing yogurt drink blended with ripe mango pulp and a hint of cardamom.",
    price: 4.95,
    spiceLevel: 1,
    imageUrl: "https://images.pexels.com/photos/13789071/pexels-photo-13789071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "drinks",
    isVegetarian: true
  },
  {
    id: "6",
    name: "Medu Vada",
    description: "Savory lentil doughnuts, crispy outside and soft inside, served with chutney.",
    price: 7.95,
    spiceLevel: 2,
    imageUrl: "https://images.pexels.com/photos/8908748/pexels-photo-8908748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "starters",
    isVegetarian: true
  },
  {
    id: "7",
    name: "Mysore Pak",
    description: "Traditional South Indian sweet made with gram flour, ghee, and sugar.",
    price: 6.95,
    spiceLevel: 1,
    imageUrl: "https://images.pexels.com/photos/14001866/pexels-photo-14001866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "desserts",
    isVegetarian: true
  },
  {
    id: "8",
    name: "Kerala Fish Curry",
    description: "Spicy fish curry with kokum, tamarind, and coconut, in authentic Kerala style.",
    price: 19.95,
    spiceLevel: 3,
    imageUrl: "https://images.pexels.com/photos/5410422/pexels-photo-5410422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "mains",
    isVegetarian: false
  }
];

const MenuSection: React.FC = () => {
  const categories = ["all", "starters", "mains", "desserts", "drinks"];
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredMenu = activeCategory === "all" 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-title text-center">Our Menu</h2>
          <p className="section-subtitle text-center">
            Discover the rich and diverse flavors of South India through our carefully crafted menu, 
            featuring authentic recipes and the freshest ingredients.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2} className="mt-8">
          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                  activeCategory === category 
                    ? 'bg-spice-500 text-white' 
                    : 'bg-cream-200 text-gray-700 hover:bg-spice-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMenu.map((item, index) => (
            <AnimatedSection key={item.id} delay={0.1 * (index % 4)}>
              <div className="menu-card h-full">
                <div className="relative h-56 overflow-hidden rounded-t-lg">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.isVegetarian && (
                    <span className="absolute top-3 left-3 bg-leaf-500 text-white text-xs px-2 py-1 rounded-full">
                      Vegetarian
                    </span>
                  )}
                  {item.isSpecial && (
                    <span className="absolute top-3 right-3 bg-chili-600 text-white text-xs px-2 py-1 rounded-full">
                      Chef's Special
                    </span>
                  )}
                </div>
                <div className="p-5 bg-white rounded-b-lg">
                  <div className="flex justify-between items-start">
                    <h3 className="font-display text-xl text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <span className="font-medium text-spice-600">
                      €{item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Spice Level:</span>
                    <div className="flex">
                      {[...Array(3)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`w-3 h-3 rounded-full mx-px ${
                            i < item.spiceLevel ? 'bg-chili-600' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={0.4} className="text-center mt-12">
          <a href="#booking" className="btn-primary mr-4">
            Book a Table
          </a>
          <a href="#" className="btn-outline">
            View Full Menu
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MenuSection;