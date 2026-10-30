/**
 * App.jsx — Root Application Component
 *
 * This file:
 * 1. Manages the global dark/light mode state using useState
 * 2. Defines ALL routes using React Router DOM v6's <Routes> and <Route>
 * 3. Passes the dark mode state down to child components
 */

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Import all page components
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Import the shared Navbar component
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  /**
   * useState Hook — Dark Mode Toggle
   * isDarkMode: boolean — true means dark theme is active
   * setIsDarkMode: function — used to toggle the theme
   */
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Toggle function: flips dark mode on/off
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode)
  }

  return (
    // Apply 'dark-mode' class to the wrapper div when isDarkMode is true
    // CSS variables in index.css switch colors based on this class
    <div className={isDarkMode ? 'app dark-mode' : 'app'}>
      
      {/* Navbar is always visible — receives toggle function and current state */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main content area — Routes switch based on the URL */}
      <main className="main-content">
        <Routes>
          {/* Route for "/" — Home page */}
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />

          {/* Route for "/projects" — Projects page */}
          <Route path="/projects" element={<Projects />} />

          {/* Route for "/contact" — Contact page */}
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all route — shows 404 for any unknown URL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer is always visible */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default App
