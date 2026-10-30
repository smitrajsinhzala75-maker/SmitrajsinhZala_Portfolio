/**
 * NotFound.jsx — 404 Page Component
 *
 * This component renders when the user visits an unknown URL.
 * React Router's catch-all route <Route path="*" /> triggers this.
 *
 * Features:
 * - Animated 404 display
 * - Helpful navigation back to known pages
 * - Countdown timer before auto-redirect (useState + useEffect)
 */

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/NotFound.css'

function NotFound() {
  /**
   * useState — Countdown Timer
   * Counts down from 10; auto-redirects to home when it reaches 0
   */
  const [countdown, setCountdown] = useState(10)

  // useNavigate — lets us programmatically redirect to another route
  const navigate = useNavigate()

  /**
   * useEffect — Start Countdown
   * Runs when component mounts. Decrements countdown every second.
   * Clears the interval when it reaches 0 and redirects to home.
   * Cleanup function prevents memory leaks.
   */
  useEffect(() => {
    // Don't start if already at 0
    if (countdown <= 0) {
      navigate('/') // Redirect to home
      return
    }

    // setInterval: decrements countdown every 1000ms (1 second)
    const timer = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000)

    // Cleanup: clear interval when component unmounts or countdown changes
    return () => clearInterval(timer)
  }, [countdown, navigate])

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        
        {/* Animated 404 Number */}
        <div className="error-code">
          <span className="four">4</span>
          <span className="zero">0</span>
          <span className="four">4</span>
        </div>

        {/* Glitch effect title */}
        <h1 className="not-found-title" data-text="Page Not Found">
          Page Not Found
        </h1>

        <p className="not-found-description">
          Oops! The page you're looking for doesn't exist or has been moved.
          It might have been deleted, renamed, or perhaps never existed!
        </p>

        {/* Countdown message */}
        <div className="countdown-box">
          <p>
            Redirecting to home in <strong className="countdown-number">{countdown}</strong> seconds...
          </p>
          <div className="countdown-bar">
            <div
              className="countdown-fill"
              style={{ width: `${(countdown / 10) * 100}%` }}
            />
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="not-found-actions">
          {/* React Router Link — no page refresh */}
          <Link to="/" className="btn btn-primary">
            🏠 Go Home
          </Link>
          <Link to="/projects" className="btn btn-secondary">
            🚀 View Projects
          </Link>
          <Link to="/contact" className="btn btn-outline">
            💬 Contact Me
          </Link>
        </div>

        {/* Decorative element */}
        <div className="not-found-illustration">
          <div className="floating-emoji">🔍</div>
        </div>

      </div>
    </div>
  )
}

export default NotFound
