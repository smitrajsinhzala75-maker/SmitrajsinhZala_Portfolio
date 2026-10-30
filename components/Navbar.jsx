/**
 * Navbar.jsx — Navigation Bar Component
 *
 * Features:
 * - Uses React Router's <Link> (NOT <a> tags) for internal navigation
 * - useLocation hook highlights the active page link
 * - Dark/Light mode toggle button
 * - Responsive hamburger menu for mobile screens
 * - useState manages the mobile menu open/close state
 */

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar({ isDarkMode, toggleDarkMode }) {
  /**
   * useState — Mobile Menu Toggle
   * isMenuOpen: whether hamburger menu is currently open
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // useLocation gives us the current URL path (e.g., "/", "/projects", "/contact")
  const location = useLocation()

  // Helper function: returns 'active' class if the link matches current URL
  const isActive = (path) => location.pathname === path ? 'nav-link active' : 'nav-link'

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => setIsMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo / Brand Name — also a link to homepage */}
        <Link to="/" className="nav-brand" onClick={handleLinkClick}>
          <span className="brand-icon">{'<'}</span>
          Smit Dev
          <span className="brand-icon">{'/>'}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`}>
          <li>
            {/* Using Link, NOT <a> — this prevents full page reload */}
            <Link to="/" className={isActive('/')} onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className={isActive('/projects')} onClick={handleLinkClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={isActive('/contact')} onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Right side: Dark Mode Toggle + Hamburger */}
        <div className="nav-actions">
          {/* Dark/Light Mode Toggle Button */}
          <button
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark/light mode"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {/* Sun icon for dark mode (click to go light), Moon for light mode (click to go dark) */}
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {/* Hamburger menu button — only visible on mobile */}
          <button
            className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
