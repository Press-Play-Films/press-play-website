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
const APP_VERSION = '2025.03.29.3';
console.log(`[main.tsx] App version: ${APP_VERSION}, Session ID: ${window.sessionId || 'unknown'}`);

// Helper to log app lifecycle
const logAppState = (message) => {
  console.log(`[APP:${APP_VERSION}] ${message}`);
};

// Log initial state
logAppState('Initializing application');

// A longer delay to ensure all styles are properly loaded before mounting
const mountDelay = 600; // Increased from 400ms to 600ms
logAppState(`Using mount delay of ${mountDelay}ms to ensure styles are loaded`);

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
      
      // Force browser to recalculate styles
      document.body.offsetHeight;
      
      // Additional logging to help with debugging
      setTimeout(() => {
        // Check if the glass boxes are rendered
        const titleBox = document.querySelector('.title-glass-box');
        const subtitleBox = document.querySelector('.subtitle-glass-box');
        
        logAppState(`Glass boxes rendered: Title=${!!titleBox}, Subtitle=${!!subtitleBox}`);
        
        if (titleBox) {
          const computedStyle = window.getComputedStyle(titleBox);
          logAppState(`Title box styles: bg=${computedStyle.backgroundColor}, backdrop=${computedStyle.backdropFilter}, border=${computedStyle.border}, boxShadow=${computedStyle.boxShadow}`);
        } else {
          console.error('[main.tsx] Title glass box not found in document after mount!');
        }
        
        // Force reflow
        document.body.classList.add('force-reflow');
        setTimeout(() => document.body.classList.remove('force-reflow'), 10);
        
        // Check all critical CSS classes
        ['section-title-gradient', 'section-subtitle-gradient', 'title-glass-box', 'subtitle-glass-box', 'chrome-button', 'chrome-tab'].forEach(className => {
          const elements = document.querySelectorAll(`.${className}`);
          logAppState(`Found ${elements.length} elements with class ${className}`);
        });
        
        // Verify backdrop-filter support
        logAppState(`Backdrop-filter support test: ${CSS.supports('backdrop-filter', 'blur(10px)') ? 'SUPPORTED' : 'NOT SUPPORTED'}`);
      }, 300);
    } catch (error) {
      console.error('[main.tsx] Failed to render React application:', error);
    }
  }
}, mountDelay);

// Hide loading screen when window is fully loaded
window.addEventListener('load', () => {
  logAppState('Window fully loaded');
  
  // Additional check for styling issues
  setTimeout(() => {
    // Force browser to maintain styles by keeping a reference
    const elements = {
      chromeButtons: document.querySelectorAll('.chrome-button, .chrome-button-premium, .chrome-tab'),
      titleElements: document.querySelectorAll('h1, h2')
    };
    
    logAppState(`Final check: Found ${elements.chromeButtons.length} chrome buttons and ${elements.titleElements.length} title elements`);
    
    // Force reflow one more time
    document.body.classList.add('force-reflow');
    setTimeout(() => document.body.classList.remove('force-reflow'), 10);
  }, 800); // Increased timeout for final style check
});
