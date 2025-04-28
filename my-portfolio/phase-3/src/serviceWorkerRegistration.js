// This file handles the registration of the service worker

// Check if the service worker API is available
const isServiceWorkerSupported = 'serviceWorker' in navigator;

export const register = () => {
  if (process.env.NODE_ENV === 'production' && isServiceWorkerSupported) {
    // The URL constructor is available in all browsers that support service workers
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    
    // If we're being served from a different origin than our public URL,
    // we should not register the service worker
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      registerValidSW(swUrl);
    });
  }
};

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      // Once registered, add an event listener for when the service worker is updated
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the updated content has been fetched
              console.log('New content is available and will be used when all tabs for this page are closed.');
              
              // Execute callback for new updates
              if (window.onServiceWorkerUpdate) {
                window.onServiceWorkerUpdate();
              }
            } else {
              // At this point, everything has been precached.
              console.log('Content is cached for offline use.');
              
              // Execute callback for first time caching
              if (window.onServiceWorkerSuccess) {
                window.onServiceWorkerSuccess();
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration:', error);
    });
}

export const unregister = () => {
  if (isServiceWorkerSupported) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
};