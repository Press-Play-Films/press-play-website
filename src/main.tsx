
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Production-optimized React rendering
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}
