
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// Define a permanent version ID that will change with each build
const APP_VERSION = '2025.03.28.3'; // Updated version
console.log(`[main.tsx] App version: ${APP_VERSION}, Session ID: ${window.sessionId || 'unknown'}`);

// Mount the application
console.log('[main.tsx] Mounting React application');

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
