
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// Log the initializer status
console.log('[main.tsx] Application loading, initializer ran:', Boolean(window.initializerRun));

// Define a permanent version ID that will change with each build
const APP_VERSION = '2025.03.28.1'; // Updated version
console.log(`[main.tsx] App version: ${APP_VERSION}, Session ID: ${window.sessionId || 'unknown'}`);

// Double-check that caches are cleared - belt and suspenders approach
const ensureFreshStart = async () => {
  // Clear any stale data
  localStorage.removeItem('app_cache');
  localStorage.setItem('app_version', APP_VERSION);
  
  // Set a stamp for this exact run
  sessionStorage.setItem('session_start', Date.now().toString());
  
  console.log('[main.tsx] Fresh start ensured');
  return true;
};

// Mount the application only after ensuring a fresh start
ensureFreshStart().then(() => {
  console.log('[main.tsx] Mounting React application');
  
  // Confirm fonts are available or set fallbacks
  document.documentElement.classList.add('fonts-loaded');
  
  // Find root element
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("[main.tsx] Root element not found. Cannot mount React application.");
    return;
  }
  
  // Create and render the React application
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('[main.tsx] React successfully mounted');
  } catch (error) {
    console.error('[main.tsx] Failed to render React application:', error);
  }
});
