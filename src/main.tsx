
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// Font loading detection
document.fonts.ready.then(() => {
  console.log('Fonts are loaded and ready to use!');
  document.documentElement.classList.add('fonts-loaded');
});

// Clear all caches on page load
const clearAllCaches = async () => {
  if ('caches' in window) {
    try {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      console.log('All caches cleared successfully');
    } catch (error) {
      console.error('Failed to clear caches:', error);
    }
  }
};

// Apply a cache-busting version to localStorage
const appVersion = '2025.03.26.1'; // Increment this when deploying new versions
const storedVersion = localStorage.getItem('app_version');

// Force a clean reload if version has changed
if (storedVersion !== appVersion) {
  localStorage.setItem('app_version', appVersion);
  console.log(`Version changed from ${storedVersion} to ${appVersion}, forcing reload`);
  
  // Clear all caches before reloading
  clearAllCaches().then(() => {
    // Use location.replace for a clean reload without history entry
    window.location.replace(window.location.href.split('#')[0]);
  });
} else {
  // Still clear caches but don't force reload
  clearAllCaches();
  
  // Production-optimized React rendering with proper error handling
  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Root element not found. Cannot mount React application.");
  }
}
