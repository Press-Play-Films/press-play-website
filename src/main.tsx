
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { toast } from 'sonner'

// Define a permanent version ID that will change with each build
const APP_VERSION = '2025.03.29.1'; // Version updated to ensure complete refresh
console.log(`[main.tsx] App version: ${APP_VERSION}, Session ID: ${window.sessionId || 'unknown'}`);

// Force complete refresh if version in localStorage doesn't match
const storedVersion = localStorage.getItem('app_version');
if (storedVersion !== APP_VERSION) {
  localStorage.setItem('app_version', APP_VERSION);
  console.log(`[main.tsx] Version changed from ${storedVersion} to ${APP_VERSION}, forcing refresh`);
  
  // Only force refresh if this isn't the initial load
  if (storedVersion) {
    window.location.reload();
  }
}

// Global error handler
window.addEventListener('error', (event) => {
  console.error('[Global Error Handler]', event.error);
  toast.error('An unexpected error occurred', {
    description: 'Please try refreshing the page',
  });
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('[Unhandled Promise Rejection]', event.reason);
  toast.error('An unexpected error occurred', {
    description: 'Please try refreshing the page',
  });
});

// Mount the application
console.log('[main.tsx] Mounting React application');

// Inject style to enforce gradient visibility
const enforceGradients = () => {
  const style = document.createElement('style');
  style.innerHTML = `
    .section-title-gradient, .force-gradient {
      background: linear-gradient(90deg, #FFFFFF, #E8E8E9 50%, #C4C4C8) !important;
      -webkit-background-clip: text !important;
      background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
  `;
  document.head.appendChild(style);
};

// Call immediately and after a delay to ensure styles are applied
enforceGradients();
setTimeout(enforceGradients, 500);

// Find root element
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("[main.tsx] Root element not found. Cannot mount React application.");
} else {
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
}
