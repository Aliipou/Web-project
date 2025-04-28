import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import SearchBar from "./SearchBar";

/**
 * Header Component
 * Responsive navigation header that collapses to hamburger menu on mobile
 * Updated for Phase 3 with dark mode and search functionality
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-gray-800 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>

      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Ali Pourrahim
        </Link>

        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:block mr-6">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className={`text-lg ${
                    isActive("/")
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`text-lg ${
                    isActive("/projects")
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  aria-current={isActive("/projects") ? "page" : undefined}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`text-lg ${
                    isActive("/about")
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  aria-current={isActive("/about") ? "page" : undefined}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`text-lg ${
                    isActive("/blog")
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  aria-current={isActive("/blog") ? "page" : undefined}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`text-lg ${
                    isActive("/contact")
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  aria-current={isActive("/contact") ? "page" : undefined}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Theme Switcher */}
          <div className="mr-4">
            <ThemeSwitcher />
          </div>

          {/* Search Bar */}
          <div className="mr-4">
            <SearchBar />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <nav>
            <ul className="px-4 py-2">
              <li className="py-2">
                <Link
                  to="/"
                  className={
                    isActive("/")
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-200"
                  }
                  onClick={toggleMenu}
                  aria-current={isActive("/") ? "page" : undefined}
                >
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/projects"
                  className={
                    isActive("/projects")
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-200"
                  }
                  onClick={toggleMenu}
                  aria-current={isActive("/projects") ? "page" : undefined}
                >
                  Projects
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/about"
                  className={
                    isActive("/about")
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-200"
                  }
                  onClick={toggleMenu}
                  aria-current={isActive("/about") ? "page" : undefined}
                >
                  About
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/blog"
                  className={
                    isActive("/blog")
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-200"
                  }
                  onClick={toggleMenu}
                  aria-current={isActive("/blog") ? "page" : undefined}
                >
                  Blog
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/contact"
                  className={
                    isActive("/contact")
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-800 dark:text-gray-200"
                  }
                  onClick={toggleMenu}
                  aria-current={isActive("/contact") ? "page" : undefined}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
