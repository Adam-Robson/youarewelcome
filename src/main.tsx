import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './reset.css'
import './index.css'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
  <StrictMode>
    <Router>
    <App />
    </Router>
  </StrictMode>,
  );
}
