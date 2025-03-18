
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Use createRoot for React 18's concurrent features
const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}
