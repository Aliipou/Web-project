import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

/**
 * SearchBar Component
 * A global search input that can be used from any page
 */
const SearchBar = ({ expanded = false, onCloseSearch = null }) => {
  const { searchQuery, performSearch, clearSearch } = useSearch();
  const [isExpanded, setIsExpanded] = useState(expanded);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  
  // Focus input when expanded
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);
  
  // Update expanded state if prop changes
  useEffect(() => {
    setIsExpanded(expanded);
  }, [expanded]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  const handleChange = (e) => {
    performSearch(e.target.value);
  };
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded && onCloseSearch) {
      onCloseSearch();
    }
  };
  
  const handleKeyDown = (e) => {
    // Close search on Escape key
    if (e.key === 'Escape') {
      clearSearch();
      setIsExpanded(false);
      if (onCloseSearch) {
        onCloseSearch();
      }
    }
  };
  
  return (
    <div className="relative">
      <form 
        onSubmit={handleSubmit}
        className={`flex items-center transition-all duration-300 ${
          isExpanded 
            ? 'w-full md:w-64 bg-white dark:bg-gray-800 rounded-full shadow-md' 
            : 'w-10'
        }`}
      >
        {isExpanded ? (
          <>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-gray-800 dark:text-white pl-4 pr-10 py-2 focus:outline-none"
              value={searchQuery}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              className="absolute right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={toggleExpanded}
              aria-label="Close search"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </>
        ) : (
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full"
            onClick={toggleExpanded}
            aria-label="Open search"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchBar;