import React from 'react';

/**
 * LoadingSpinner Component
 * Displays a loading spinner for async operations
 */
const LoadingSpinner = ({ size = 'medium', fullPage = false }) => {
  // Size classes based on the prop
  const sizeClasses = {
    small: 'h-6 w-6 border-2',
    medium: 'h-12 w-12 border-3',
    large: 'h-16 w-16 border-4'
  };

  // Get the appropriate size class
  const spinnerSize = sizeClasses[size] || sizeClasses.medium;

  // Full page spinner or inline spinner
  if (fullPage) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <div className={`animate-spin rounded-full ${spinnerSize} border-t-transparent border-solid border-blue-600`} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  // Inline spinner
  return (
    <div className="flex justify-center items-center py-12">
      <div className={`animate-spin rounded-full ${spinnerSize} border-t-transparent border-solid border-blue-600`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;