import React, { useState, useEffect } from 'react';

/**
 * UpdateNotification Component
 * Displays a notification when a new version of the app is available
 */
const UpdateNotification = () => {
  const [showUpdate, setShowUpdate] = useState(false);
  
  useEffect(() => {
    // Add the update callback to the window object
    window.onServiceWorkerUpdate = () => {
      setShowUpdate(true);
    };
    
    return () => {
      window.onServiceWorkerUpdate = null;
    };
  }, []);
  
  const refreshApp = () => {
    window.location.reload();
  };
  
  if (!showUpdate) {
    return null;
  }
  
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-blue-600 text-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <p>A new version is available!</p>
        <button
          onClick={refreshApp}
          className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default UpdateNotification;