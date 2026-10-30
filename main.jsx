/**
 * main.jsx — Application Entry Point
 * 
 * This is the starting point of the React application.
 * BrowserRouter is set up HERE and ONLY HERE (never in App.jsx or any other file).
 * This enables React Router to work throughout the entire app.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // ← React Router DOM v6
import App from './App.jsx'
import './styles/index.css' // ← Global styles

// Mount the React app inside the <div id="root"> in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter wraps everything so all child components can use routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
