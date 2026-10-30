/**
 * Projects.jsx — Projects Page Component
 *
 * Displays a grid of project cards, each showing:
 * - Project title and description
 * - Technologies used (as tags)
 * - Links to live demo and GitHub repo
 *
 * Project data is stored in an array for easy maintenance.
 */

import { useState } from 'react'
import '../styles/Projects.css'

// --- Projects Data Array ---
// Add or edit projects here; the UI updates automatically
const projectsData = [
  {
    id: 1,
    title: 'ShopCart — E-Commerce App',
    description:
      'A full-featured e-commerce platform with product listing, cart management, user authentication, and secure Stripe payment integration. Built with React and Node.js.',
    image: '🛒',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
    liveLink: 'https://shopcart-demo.vercel.app',
    githubLink: 'https://github.com/alexdev/shopcart',
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 2,
    title: 'WeatherNow — Weather Dashboard',
    description:
      'Real-time weather app that fetches data from the OpenWeatherMap API. Shows current conditions, 5-day forecast, interactive maps, and location-based search.',
    image: '🌤️',
    technologies: ['React.js', 'OpenWeatherMap API', 'CSS3', 'Chart.js'],
    liveLink: 'https://weathernow-demo.vercel.app',
    githubLink: 'https://github.com/alexdev/weathernow',
    category: 'Frontend',
    featured: true,
  },
  {
    id: 3,
    title: 'TaskFlow — Project Manager',
    description:
      'Kanban-style project management tool with drag-and-drop boards, real-time collaboration using Socket.io, task assignments, and deadline tracking.',
    image: '📋',
    technologies: ['React.js', 'Socket.io', 'Node.js', 'PostgreSQL', 'DnD Kit'],
    liveLink: 'https://taskflow-demo.vercel.app',
    githubLink: 'https://github.com/alexdev/taskflow',
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 4,
    title: 'DevBlog — Blogging Platform',
    description:
      'A developer-focused blog platform with markdown support, syntax highlighting, SEO optimization, tag filtering, and a custom CMS for content management.',
    image: '✍️',
    technologies: ['Next.js', 'MDX', 'Tailwind', 'Vercel', 'Contentful'],
    liveLink: 'https://devblog-demo.vercel.app',
    githubLink: 'https://github.com/alexdev/devblog',
    category: 'Frontend',
    featured: false,
  },
  {
    id: 5,
    title: 'ChatAI — AI Chat Assistant',
    description:
      'An AI-powered chat interface integrated with the OpenAI GPT API. Features conversation history, custom prompts, code formatting, and a streaming response display.',
    image: '🤖',
    technologies: ['React.js', 'OpenAI API', 'Python', 'FastAPI', 'WebSockets'],
    liveLink: 'https://chatai-demo.vercel.app',
    githubLink: 'https://github.com/alexdev/chatai',
    category: 'AI / ML',
    featured: false,
  },
  {
    id: 6,
    title: 'FinanceTrack — Budget App',
    description:
      'Personal finance tracker with income/expense logging, category budgets, visual charts, monthly reports, and CSV export functionality.',
    image: '💰',
    technologies: ['React.js', 'Firebase', 'Recharts', 'PWA'],
    liveLink: 'https://financetrack-demo.vercel.app',
    githubLink: 'https://github.com/alexdev/financetrack',
    category: 'Frontend',
    featured: false,
  },
]

// Unique filter categories derived from data
const categories = ['All', 'Full Stack', 'Frontend', 'AI / ML']

function Projects() {
  /**
   * useState — Category Filter
   * activeFilter: which category tab is currently selected
   */
  const [activeFilter, setActiveFilter] = useState('All')

  // Filter projects based on the active category
  // If 'All' is selected, show every project
  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter(project => project.category === activeFilter)

  return (
    <div className="projects-page">

      {/* ─── PAGE HEADER ──────────────────────────────────── */}
      <section className="projects-header">
        <div className="section-container">
          <span className="section-tag">My Work</span>
          <h1 className="page-title">Featured Projects</h1>
          <p className="page-subtitle">
            A collection of projects I've built — from full-stack apps to AI tools.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>
      </section>

      {/* ─── FILTER TABS ──────────────────────────────────── */}
      <section className="filter-section">
        <div className="section-container">
          <div className="filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'filter-active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS GRID ────────────────────────────────── */}
      <section className="projects-grid-section">
        <div className="section-container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article className={`project-card ${project.featured ? 'featured' : ''}`} key={project.id}>
                
                {/* Project image/emoji */}
                <div className="project-image">
                  <span className="project-emoji">{project.image}</span>
                  {/* Featured badge */}
                  {project.featured && (
                    <span className="featured-badge">⭐ Featured</span>
                  )}
                  {/* Category badge */}
                  <span className="category-badge">{project.category}</span>
                </div>

                <div className="project-info">
                  {/* Project title */}
                  <h2 className="project-title">{project.title}</h2>

                  {/* Project description */}
                  <p className="project-description">{project.description}</p>

                  {/* Technologies used — each tech is a small tag */}
                  <div className="tech-tags">
                    {project.technologies.map((tech, i) => (
                      <span className="tech-tag" key={i}>{tech}</span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="project-links">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project btn-live"
                    >
                      🚀 Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project btn-github"
                    >
                      💻 GitHub
                    </a>
                  </div>
                </div>

              </article>
            ))}
          </div>

          {/* Show message if no projects match filter */}
          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}

export default Projects
