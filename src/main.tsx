
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// Define a permanent version ID that will change with each build
const APP_VERSION = '2025.03.28.6'; // Updated version
console.log(`[main.tsx] App version: ${APP_VERSION}, Session ID: ${window.sessionId || 'unknown'}`);

// Helper to log app lifecycle
const logAppState = (message) => {
  console.log(`[APP:${APP_VERSION}] ${message}`);
};

// Log initial state
logAppState('Initializing application');

// Force CSS recalculation by adding a delay before mounting
setTimeout(() => {
  // Mount the application
  logAppState('Mounting React application');

  // Find root element
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("[main.tsx] Root element not found. Cannot mount React application.");
  } else {
    // Create and render the React application
    try {
      logAppState('Creating React root');
      const root = createRoot(rootElement);
      
      logAppState('Rendering React application');
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      logAppState('React successfully mounted');
      
      // Additional logging to help with debugging
      setTimeout(() => {
        // Check if the glass boxes are rendered
        const titleBox = document.querySelector('.title-glass-box');
        const subtitleBox = document.querySelector('.subtitle-glass-box');
        
        logAppState(`Glass boxes rendered: Title=${!!titleBox}, Subtitle=${!!subtitleBox}`);
        
        if (titleBox) {
          const computedStyle = window.getComputedStyle(titleBox);
          logAppState(`Title box styles: bg=${computedStyle.backgroundColor}, border=${computedStyle.borderColor}, backdrop=${computedStyle.backdropFilter}`);
        }
      }, 100);
    } catch (error) {
      console.error('[main.tsx] Failed to render React application:', error);
    }
  }
}, 100); // Increased delay to ensure all styles are loaded

// Hide loading screen when window is fully loaded
window.addEventListener('load', () => {
  logAppState('Window fully loaded');
  
  // Additional check for styling issues
  setTimeout(() => {
    const titleElement = document.querySelector('.section-title-gradient');
    const titleBox = document.querySelector('.title-glass-box');
    
    if (titleElement && titleBox) {
      const titleStyles = window.getComputedStyle(titleElement);
      const boxStyles = window.getComputedStyle(titleBox);
      
      logAppState('Final render check: Title element and glass box are present');
      logAppState(`Title text: color=${titleStyles.color}, bgClip=${titleStyles.backgroundClip}, fillColor=${titleStyles.webkitTextFillColor}`);
      logAppState(`Glass box: bg=${boxStyles.backgroundColor}, backdropFilter=${boxStyles.backdropFilter}`);
    } else {
      console.error('[main.tsx] Title elements not found in final check');
    }
  }, 500);
});
