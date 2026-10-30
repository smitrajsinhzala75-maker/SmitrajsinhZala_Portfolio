/**
 * Home.jsx — Home Page Component
 *
 * Sections:
 * 1. Hero — animated greeting, name, role, CTA buttons
 * 2. About — brief intro paragraph
 * 3. Skills — skill badges in a grid
 * 4. Show/Hide Extra Info — useState toggles a hidden section
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

// --- Skills Data Array ---
// Storing data in arrays keeps JSX clean (instead of repeating HTML)
const skills = [
  { name: 'React.js',        icon: '⚛️',  category: 'Frontend' },
  { name: 'JavaScript',     icon: '📜',  category: 'Frontend' },
  { name: 'HTML5 & CSS3',   icon: '🌐',  category: 'Frontend' },
  { name: 'Node.js',        icon: '🟢',  category: 'Backend'  },
  { name: 'MongoDB',        icon: '🍃',  category: 'Database' },
  { name: 'MySQL',          icon: '🗳️',  category: 'Database' },
  { name: 'Figma',          icon: '🖌️',  category: 'Design'   },
  { name: 'Git & GitHub',   icon: '🔧',  category: 'Tools'    },
  { name: 'REST APIs',      icon: '🔌',  category: 'Backend'  },
]

// --- Stats Data ---
const stats = [
  { value: '15+', label: 'Projects Built' },
  { value: '2+',  label: 'Years Coding' },
  { value: '5+',  label: 'Technologies' },
  { value: '100%', label: 'Passion' },
]

function Home({ isDarkMode }) {
  /**
   * useState Hook — Show/Hide Extra Info Section
   * showInfo: boolean — controls visibility of the extra info box
   */
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="home">

      {/* ─── HERO SECTION ─────────────────────────────────── */}
      <section className="hero" id="hero">
        <div className="hero-content">
          
          {/* Greeting badge */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for work
          </div>

          {/* Main heading with animated text */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Smitrajsinh Zala</span>
          </h1>

          <h2 className="hero-subtitle">
            Web Developer & UI Enthusiast
          </h2>

          <p className="hero-description">
            I build modern, responsive web applications using React.js, Node.js,
            and MongoDB. Passionate about clean code, intuitive UI, and turning
            ideas into real digital products.
          </p>

          {/* CTA Buttons — use Link for internal navigation */}
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work 🚀
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Let's Talk 💬
            </Link>
          </div>

          {/* Quick Stats Row */}
          <div className="stats-row">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Hero visual — decorative code block */}
        <div className="hero-visual">
          <div className="code-card">
            <div className="code-card-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="code-filename">developer.js</span>
            </div>
            <pre className="code-body">
{`const developer = {
  name: "Smitrajsinh Zala",
  role: "Web Developer",
  skills: [
    "React", "Node.js",
    "MongoDB", "MySQL"
  ],
  passion: "Building great
            web apps ✨",
  available: true
};`}
            </pre>
          </div>
        </div>

      </section>

      {/* ─── ABOUT SECTION ────────────────────────────────── */}
      <section className="about-section" id="about">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">About Me</span>
            <h2>Who I Am</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate Web Developer from Jamnagar, Gujarat, with a love for building
                things on the web. I specialize in React.js for frontend and Node.js + MongoDB
                for backend, creating full-stack applications that are fast, scalable, and user-friendly.
              </p>
              <p>
                Currently pursuing my B.Tech in Information Technology, I enjoy working on
                real-world projects, learning new technologies, and continuously improving
                my problem-solving and design skills.
              </p>

              {/* ─── SHOW / HIDE EXTRA INFO (useState) ────── */}
              <div className="extra-info-section">
                {/* Toggle button — uses setShowInfo to flip state */}
                <button
                  className="btn-show-hide"
                  onClick={() => setShowInfo(!showInfo)}
                  id="show-hide-btn"
                  aria-expanded={showInfo}
                >
                  {/* Button label changes based on current state */}
                  {showInfo ? '🔼 Hide More Info' : '🔽 Show More Info'}
                </button>

                {/* Conditionally render the extra info block */}
                {showInfo && (
                  <div className="extra-info-box" id="extra-info-content">
                    <h4>🎓 Education</h4>
                    <p><strong>B.Tech in Information Technology</strong> — In Progress</p>
                    <p>Jamnagar, Gujarat, India</p>
                    <h4>🏆 Achievements</h4>
                    <ul>
                      <li>✅ Built full-stack web applications with React + Node</li>
                      <li>✅ Hands-on with MongoDB & MySQL databases</li>
                      <li>✅ UI/UX design experience with Figma</li>
                    </ul>
                    <h4>🌍 Languages</h4>
                    <p>English (Fluent) · Hindi (Proficient) · Gujarati (Native)</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS SECTION ───────────────────────────────── */}
      <section className="skills-section" id="skills">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Technical Skills</span>
            <h2>What I Work With</h2>
            <p>Technologies I use to bring ideas to life</p>
          </div>

          {/* Skills Grid — renders each skill from the array */}
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
