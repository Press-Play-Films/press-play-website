
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// Clear any cached resources
if (window.performance && window.performance.navigation.type === 0) {
  if ('caches' in window) {
    caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        caches.delete(cacheName);
      });
      console.log('Caches cleared on refresh');
    });
  }
}

// Force reload if older than 24 hours
const lastLoadTime = localStorage.getItem('last_load_time');
const currentTime = new Date().getTime();
if (lastLoadTime && (currentTime - parseInt(lastLoadTime)) > 86400000) {
  localStorage.setItem('last_load_time', currentTime.toString());
  window.location.reload(true);
} else {
  localStorage.setItem('last_load_time', currentTime.toString());
}

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
