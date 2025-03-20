
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

// Production-optimized React rendering with proper error handling
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
} else {
  console.error("Root element not found. Cannot mount React application.");
}
