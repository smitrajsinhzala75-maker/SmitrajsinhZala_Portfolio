/**
 * Contact.jsx — Contact Page Component
 *
 * Features:
 * 1. CONTROLLED FORM — useState manages every input field
 * 2. LIVE USER INPUT DISPLAY — shows what the user is typing in real time
 * 3. CHARACTER COUNTER — shows characters typed / max for the message field
 * 4. FORM VALIDATION — basic checks before submission
 * 5. SUBMISSION FEEDBACK — success/error message after form submit
 */

import { useState } from 'react'
import '../styles/Contact.css'

// Maximum characters allowed in the message field
const MAX_MESSAGE_LENGTH = 500

function Contact() {
  /**
   * useState — Form Data (Controlled Form)
   * Each field in formData is linked to its input via value + onChange.
   * This makes React the "single source of truth" for all input values.
   */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  /**
   * useState — Form Status
   * Tracks whether form was submitted, is loading, or has an error
   */
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: '',
  })

  /**
   * useState — Show/Hide Live Preview
   * Toggles the real-time input preview panel
   */
  const [showPreview, setShowPreview] = useState(false)

  /**
   * Handle Input Change
   * Called on every keystroke in any input field.
   * [e.target.name] is computed property — updates only the changed field.
   *
   * For message field: enforce max character limit
   */
  const handleChange = (e) => {
    const { name, value } = e.target

    // Prevent typing beyond MAX_MESSAGE_LENGTH for message field
    if (name === 'message' && value.length > MAX_MESSAGE_LENGTH) return

    // Update only the changed field, keep others unchanged (spread operator)
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear any previous error when user starts typing
    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: '' }))
    }
  }

  /**
   * Form Validation
   * Returns an error message string if invalid, empty string if valid
   */
  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your name.'
    if (!formData.email.trim()) return 'Please enter your email.'
    // Basic email format check using regex
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Please enter a valid email address.'
    if (!formData.message.trim()) return 'Please write a message.'
    if (formData.message.trim().length < 10) return 'Message should be at least 10 characters.'
    return '' // No error
  }

  /**
   * Handle Form Submission
   * In a real app, you'd send data to a backend or email service (e.g., EmailJS).
   * Here we simulate a network request with setTimeout.
   */
  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent default browser form submission (page reload)

    // Validate before submitting
    const error = validateForm()
    if (error) {
      setFormStatus(prev => ({ ...prev, error }))
      return
    }

    // Set loading state
    setFormStatus({ submitted: false, loading: true, error: '' })

    // Simulate API call (replace with real EmailJS / backend call)
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false, error: '' })
      // Reset form fields after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  // Character count for the message field
  const charCount = formData.message.length
  // Percentage used (for color coding)
  const charPercent = (charCount / MAX_MESSAGE_LENGTH) * 100

  return (
    <div className="contact-page">

      {/* ─── PAGE HEADER ──────────────────────────────────── */}
      <section className="contact-header">
        <div className="section-container">
          <span className="section-tag">Get In Touch</span>
          <h1 className="page-title">Contact Me</h1>
          <p className="page-subtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Fill in the form and I'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <div className="contact-layout">

        {/* ─── CONTACT INFO SIDEBAR ─────────────────────── */}
        <div className="contact-info">
          <h3>Let's Connect</h3>

          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <strong>Location</strong>
              <p>Jamnagar, Gujarat, India</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📧</span>
            <div>
              <strong>Email</strong>
              <p>smitrajsimhzala75@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">💼</span>
            <div>
              <strong>GitHub</strong>
              <p>github.com/smitrajsinh</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">⏰</span>
            <div>
              <strong>Response Time</strong>
              <p>Within 24 hours</p>
            </div>
          </div>

          {/* Toggle Live Preview */}
          <button
            className="btn-preview-toggle"
            onClick={() => setShowPreview(!showPreview)}
            id="preview-toggle-btn"
          >
            {showPreview ? '🙈 Hide Preview' : '👁️ Show Live Preview'}
          </button>

          {/* ─── LIVE INPUT PREVIEW ─────────────────────── */}
          {/* Shows what the user is typing in real time */}
          {showPreview && (
            <div className="live-preview" id="live-preview-box">
              <h4>📨 Message Preview</h4>
              <div className="preview-field">
                <span className="preview-label">From:</span>
                <span className="preview-value">
                  {formData.name || <em className="placeholder-text">Your name</em>}
                </span>
              </div>
              <div className="preview-field">
                <span className="preview-label">Email:</span>
                <span className="preview-value">
                  {formData.email || <em className="placeholder-text">your@email.com</em>}
                </span>
              </div>
              <div className="preview-field">
                <span className="preview-label">Subject:</span>
                <span className="preview-value">
                  {formData.subject || <em className="placeholder-text">Subject line</em>}
                </span>
              </div>
              <div className="preview-field preview-message">
                <span className="preview-label">Message:</span>
                <span className="preview-value">
                  {formData.message || <em className="placeholder-text">Your message...</em>}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* ─── CONTACT FORM ─────────────────────────────── */}
        <div className="contact-form-wrapper">

          {/* Show success message after submission */}
          {formStatus.submitted ? (
            <div className="success-message" id="success-msg">
              <span className="success-icon">🎉</span>
              <h3>Message Sent Successfully!</h3>
              <p>
                Thank you for reaching out, <strong>{formData.name || 'friend'}</strong>!
                I'll get back to you as soon as possible.
              </p>
              {/* Button to send another message */}
              <button
                className="btn btn-primary"
                onClick={() => setFormStatus({ submitted: false, loading: false, error: '' })}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            /* ─── THE FORM ───────────────────────────────── */
            <form className="contact-form" onSubmit={handleSubmit} noValidate id="contact-form">
              <h3>Send a Message</h3>

              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  // value links the input to React state (controlled component)
                  value={formData.name}
                  // onChange updates state on every keystroke
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={formData.name ? 'input-filled' : ''}
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={formData.email ? 'input-filled' : ''}
                />
              </div>

              {/* Subject Field */}
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={formData.subject ? 'input-filled' : ''}
                />
              </div>

              {/* Message Field with Character Counter */}
              <div className="form-group">
                <label htmlFor="message">
                  Message *
                  {/* Character counter — updates live as user types */}
                  <span
                    className={`char-counter ${
                      charPercent > 90 ? 'char-danger' :
                      charPercent > 70 ? 'char-warning' : ''
                    }`}
                  >
                    {charCount} / {MAX_MESSAGE_LENGTH}
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hi..."
                  rows={6}
                  className={formData.message ? 'input-filled' : ''}
                />
                {/* Character counter bar below textarea */}
                <div className="char-bar">
                  <div
                    className={`char-bar-fill ${
                      charPercent > 90 ? 'bar-danger' :
                      charPercent > 70 ? 'bar-warning' : 'bar-normal'
                    }`}
                    style={{ width: `${charPercent}%` }}
                  />
                </div>
                <p className="char-hint">
                  {MAX_MESSAGE_LENGTH - charCount} characters remaining
                </p>
              </div>

              {/* Error Message Display */}
              {formStatus.error && (
                <div className="error-message" role="alert" id="form-error">
                  ⚠️ {formStatus.error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={formStatus.loading}
                id="submit-btn"
              >
                {formStatus.loading ? (
                  <span>⏳ Sending...</span>
                ) : (
                  <span>🚀 Send Message</span>
                )}
              </button>

            </form>
          )}

        </div>
      </div>
    </div>
  )
}

export default Contact
