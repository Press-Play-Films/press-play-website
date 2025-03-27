
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// Extend Window interface to declare our custom properties
declare global {
  interface Window {
    sessionId?: string;
    _titleBox?: HTMLElement;
    _titleElement?: HTMLElement;
  }
}

// Define a permanent version ID that will change with each build
const APP_VERSION = '2025.03.30.25'; // Updated version ID to force cache invalidation
console.log(`[main.tsx] App version: ${APP_VERSION}, Session ID: ${window.sessionId || 'unknown'}`);

// Helper to log app lifecycle - only in development
const logAppState = (message: string) => {
  if (import.meta.env.DEV) {
    console.log(`[APP:${APP_VERSION}] ${message}`);
  }
};

// Log initial state
logAppState('Initializing application');

// Mount function to initialize React
const mountApp = () => {
  logAppState('Mounting React application');
  
  // Find root element
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("[main.tsx] Root element not found. Cannot mount React application.");
    return;
  }
  
  try {
    logAppState('Creating React root');
    const root = createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    logAppState('React successfully mounted');
    
    if (import.meta.env.DEV) {
      // Only perform these checks in development
      setTimeout(() => {
        // Check for critical UI components
        const titleBox = document.querySelector('.title-glass-box');
        const chromeButtons = document.querySelectorAll('.chrome-button, .chrome-button-premium');
        
        logAppState(`UI components check: Title Glass Box=${!!titleBox}, Chrome Buttons=${chromeButtons.length}`);
        
        // Check backdrop-filter support
        logAppState(`Backdrop-filter support: ${CSS.supports('backdrop-filter', 'blur(10px)') ? 'SUPPORTED' : 'NOT SUPPORTED'}`);
      }, 300);
    }
  } catch (error) {
    console.error('[main.tsx] Failed to render React application:', error);
  }
};

// Fixed: Call setTimeout with zero arguments
setTimeout(mountApp); // Removed the function wrapper that was causing the error

// Add dedicated cache invalidation helper for development testing
if (import.meta.env.DEV) {
  window.addEventListener('keydown', (e) => {
    // Use Ctrl+Shift+R as a manual cache buster during development
    if (e.ctrlKey && e.shiftKey && e.key === 'R') {
      logAppState('Manual cache invalidation triggered');
      localStorage.setItem('cache-version', APP_VERSION);
      window.location.reload(true);
    }
  });
}

// Hide loading screen when window is fully loaded
window.addEventListener('load', () => {
  logAppState('Window fully loaded');
  
  if (import.meta.env.DEV) {
    // Force final reflow to ensure styles are applied
    document.body.classList.add('force-reflow');
    setTimeout(() => document.body.classList.remove('force-reflow'), 10);
  }
});
