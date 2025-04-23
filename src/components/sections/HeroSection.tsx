import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';


const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute top-0 left-0 w-full h-full bg-black"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.5)'
        }}
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div 
            ref={textRef}
            className="relative z-10 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-spice-400 flex items-center justify-center lg:justify-start mb-4 hero-text"
            >
              <Utensils className="mr-2" size={20} />
              <span className="uppercase tracking-widest text-sm">Authentic South Indian Cuisine</span>
            </motion.div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-6 hero-text">
              Singen
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed hero-text">
              Experience the authentic flavors of South India in the heart of Germany. 
              Our recipes have been passed down through generations to bring you
              a truly authentic dining experience.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 hero-text">
              <Link
                to="menu"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="btn-primary"
              >
                Explore Our Menu
              </Link>
              
              <a href="#booking" className="btn-outline text-white border-white hover:bg-white hover:text-spice-500">
                Book a Table
              </a>
            </div>
          </div>

          {/* 3D Interactive Element */}
          <div className="relative z-10 hidden lg:block">
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <div className="scroll-indicator">
          <div className="scroll-indicator-progress" />
        </div>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
          className="text-white/80 flex flex-col items-center cursor-pointer hover:text-white transition-colors"
        >
          <span className="text-sm uppercase tracking-wider mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;