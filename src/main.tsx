
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// Immediately force clear cache
const forceClearCache = async () => {
  if ('caches' in window) {
    try {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
      console.log('All browser caches forcibly cleared');
    } catch (error) {
      console.error('Failed to clear caches:', error);
    }
  }
  
  // Also clear localStorage completely
  try {
    localStorage.clear();
    console.log('localStorage completely cleared');
  } catch (e) {
    console.error('Failed to clear localStorage:', e);
  }
  
  // Clear sessionStorage as well
  try {
    sessionStorage.clear();
    console.log('sessionStorage completely cleared');
  } catch (e) {
    console.error('Failed to clear sessionStorage:', e);
  }
};

// Apply a significantly incremented cache-busting version 
// Force reload on each new version
const appVersion = '2025.03.27.1'; // Major version bump
localStorage.setItem('app_version', appVersion);
console.log(`Current app version: ${appVersion}`);

// Forcibly clear all caches before rendering
forceClearCache().then(() => {
  // Simple font handling approach to avoid complexity
  document.documentElement.classList.add('fonts-loaded');
  
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
});
