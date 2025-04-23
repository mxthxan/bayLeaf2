import React, { useEffect, useState } from 'react';
import { LoadingProvider } from './context/LoadingContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import MenuSection from './components/sections/MenuSection';
import GallerySection from './components/sections/GallerySection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';

function App() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Simulate loading resources
    const timer = setTimeout(() => {
      setInitialized(true);
    }, 500); // Just a small delay to ensure everything is ready

    return () => clearTimeout(timer);
  }, []);

  if (!initialized) {
    return <div>Initializing application...</div>;
  }

  return (
    <LoadingProvider>
      <div className="app">
        {/* Loading Screen with Curtain Animation */}
        <LoadingScreen />
        
        {/* Main Content */}
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <GallerySection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </LoadingProvider>
  );
}

export default App;