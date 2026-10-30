/**
 * Footer.jsx — Footer Component
 *
 * A simple, stylish footer that appears on every page.
 * Shows social links and copyright info.
 */

import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer({ isDarkMode }) {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Footer Brand */}
        <div className="footer-brand">
          <span className="brand-icon">{'<'}</span>
          Smit Dev
          <span className="brand-icon">{'/>'}</span>
          <p className="footer-tagline">Crafting clean web experiences with passion.</p>
        </div>

        {/* Quick Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social / Contact Info */}
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="mailto:smitrajsimhzala75@gmail.com" aria-label="Email">
              Email
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Row */}
      <div className="footer-bottom">
        <p>© {currentYear} Smit Dev. Built with React.js ⚛️ + React Router DOM 🔗</p>
      </div>
    </footer>
  )
}

export default Footer
