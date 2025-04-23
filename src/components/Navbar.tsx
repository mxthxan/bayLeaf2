import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Utensils } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled py-2' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            className="flex items-center cursor-pointer"
          >
            <div className="bg-white p-2 rounded-full mr-2">
              <Utensils size={24} className="text-spice-500" />
            </div>
            <span className={`font-display text-xl md:text-2xl font-bold ${scrolled ? 'text-spice-800' : 'text-white'}`}>
              Singen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className={`font-medium cursor-pointer hover:text-spice-500 transition-colors ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="#booking" 
              className="btn-primary text-sm"
            >
              Book a Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <X size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className="font-medium text-gray-800 hover:text-spice-500 transition-colors py-2"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <a 
                href="#booking" 
                className="btn-primary text-center"
                onClick={closeMenu}
              >
                Book a Table
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;