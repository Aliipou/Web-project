import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Header Component
 * Responsive navigation header that collapses to hamburger menu on mobile
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if current path matches the link
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Add background when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Ali Pourrahim
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className={`text-lg ${isActive('/') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-800 hover:text-blue-600'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={`text-lg ${isActive('/projects') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-800 hover:text-blue-600'}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`text-lg ${isActive('/about') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-800 hover:text-blue-600'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`text-lg ${isActive('/contact') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-800 hover:text-blue-600'}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="px-4 py-2">
            <li className="py-2">
              <Link 
                to="/" 
                className={isActive('/') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-800'} 
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link 
                to="/projects" 
                className={isActive('/projects') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-800'} 
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li className="py-2">
              <Link 
                to="/about" 
                className={isActive('/about') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-800'} 
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link 
                to="/contact" 
                className={isActive('/contact') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-800'} 
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;