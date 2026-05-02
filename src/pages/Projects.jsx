import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

const PROJECTS = [
  {
    title: 'NexaCommerce Pro',
    category: 'MERN Stack',
    desc: 'A fully-featured e-commerce platform with real-time inventory, AI recommendations, and multi-vendor support built with MERN stack.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    emoji: '🛒',
    bg: 'linear-gradient(135deg, #1a0533, #0d1f3c)',
    featured: true,
    filter: 'mern',
  },
  {
    title: 'HealthSync Dashboard',
    category: 'Full-Stack Web App',
    desc: 'A modern healthcare management dashboard for clinics — patient records, appointments, billing, and telemedicine all in one.',
    tags: ['React', 'Laravel', 'MySQL', 'WebRTC'],
    emoji: '🏥',
    bg: 'linear-gradient(135deg, #002a1e, #001433)',
    filter: 'laravel',
  },
  {
    title: 'UrbanEats Delivery',
    category: 'WordPress + WooCommerce',
    desc: 'A restaurant chain website with online ordering, live tracking, loyalty points, and multi-location management.',
    tags: ['WordPress', 'WooCommerce', 'PHP', 'SEO'],
    emoji: '🍔',
    bg: 'linear-gradient(135deg, #2d1000, #1a0014)',
    filter: 'wordpress',
  },
  {
    title: 'TechTalk Podcast Brand',
    category: 'Branding & Graphics',
    desc: 'Full brand identity for a leading tech podcast — logo, color palette, thumbnail templates, social media kit, and merch designs.',
    tags: ['Logo Design', 'Branding', 'Social Media', 'Print'],
    emoji: '🎙️',
    bg: 'linear-gradient(135deg, #0a001f, #1a0a00)',
    filter: 'design',
  },
  {
    title: 'PropertyVault CRM',
    category: 'PHP / Laravel',
    desc: 'A real estate CRM system with property listings, lead management, automated follow-ups, and advanced analytics dashboard.',
    tags: ['Laravel', 'Vue.js', 'PostgreSQL', 'Twilio'],
    emoji: '🏢',
    bg: 'linear-gradient(135deg, #001a1f, #0a1500)',
    filter: 'laravel',
  },
  {
    title: 'AI Product Explainer',
    category: 'AI Animated Video',
    desc: '90-second product explainer video for a SaaS startup using AI-generated animations, voiceover, and motion graphics.',
    tags: ['AI Tools', 'After Effects', 'Animation', 'Voiceover'],
    emoji: '🎬',
    bg: 'linear-gradient(135deg, #1a0a1f, #0a1a0a)',
    filter: 'video',
  },
  {
    title: 'SkillLaunch Academy',
    category: 'MERN Stack',
    desc: 'Online learning platform with video courses, live classes, quizzes, certificates, and a student community forum.',
    tags: ['React', 'Node.js', 'Socket.io', 'AWS'],
    emoji: '📚',
    bg: 'linear-gradient(135deg, #001433, #1a0020)',
    filter: 'mern',
  },
  {
    title: 'CloudFlow SEO Campaign',
    category: 'SEO & Marketing',
    desc: 'Comprehensive 6-month SEO campaign that took a SaaS company from page 5 to top 3 rankings on 40+ target keywords.',
    tags: ['SEO', 'Content', 'Backlinks', 'Analytics'],
    emoji: '📈',
    bg: 'linear-gradient(135deg, #0a1a00, #001a10)',
    featured: true,
    filter: 'seo',
  },
  {
    title: 'LuxeStore Fashion',
    category: 'WordPress',
    desc: 'Luxury fashion e-commerce store with custom product configurator, AR try-on feature, and international shipping integration.',
    tags: ['WordPress', 'WooCommerce', 'Custom Theme', 'AR'],
    emoji: '👗',
    bg: 'linear-gradient(135deg, #1a0814, #0a0a1f)',
    filter: 'wordpress',
  },
]

const FILTERS = [
  { label: 'All Projects', value: 'all' },
  { label: 'MERN Stack', value: 'mern' },
  { label: 'Laravel', value: 'laravel' },
  { label: 'WordPress', value: 'wordpress' },
  { label: 'Design', value: 'design' },
  { label: 'SEO', value: 'seo' },
  { label: 'AI Video', value: 'video' },
]

const PROCESS = [
  { icon: '🔍', title: 'Discovery', desc: 'Deep-dive into your goals, audience, and requirements.', n: '01' },
  { icon: '✏️', title: 'Design', desc: 'Wireframes, prototypes, and UI/UX sign-off.', n: '02' },
  { icon: '⚙️', title: 'Develop', desc: 'Agile sprints with weekly demos and feedback loops.', n: '03' },
  { icon: '🧪', title: 'Test', desc: 'Rigorous QA, performance, and security testing.', n: '04' },
  { icon: '🚀', title: 'Deploy', desc: 'Seamless launch with CI/CD and cloud infrastructure.', n: '05' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = PROJECTS.filter(p => active === 'all' || p.filter === active)

  return (
    <main className="page-enter">
      {/* HERO */}
      <section className="projects-hero">
        <div className="orb orb-purple" />
        <div className="projects-hero-content">
          <div className="section-tag">✦ Our Portfolio</div>
          <h1>Work That <span>Speaks</span><br />For Itself</h1>
          <p>
            From startups to enterprises — every project is a story of innovation,
            collaboration, and excellence. Browse our finest work below.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <div className="filter-tabs">
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={`filter-tab ${active === f.value ? 'active' : ''}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* PROJECTS */}
      <section className="projects-section">
        <div className="projects-grid">
          {filtered.map(p => (
            <div key={p.title} className="project-card">
              {p.featured && <div className="featured-badge">⭐ Featured</div>}
              <div className="project-thumbnail">
                <div className="project-thumb-bg" style={{ background: p.bg }}>
                  <span style={{ fontSize: '5rem' }}>{p.emoji}</span>
                </div>
                <div className="project-overlay">
                  <button className="view-btn">View Case Study →</button>
                </div>
              </div>
              <div className="project-info">
                <div className="project-category">{p.category}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--clr-text-muted)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <p>No projects in this category yet. More coming soon!</p>
          </div>
        )}
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="section-header">
          <div className="section-tag">✦ How We Work</div>
          <h2 className="section-title">Our <span>Process</span></h2>
          <p style={{ color: 'var(--clr-text-muted)', marginTop: '1rem' }}>
            A battle-tested development process that consistently delivers results.
          </p>
        </div>
        <div className="process-steps">
          {PROCESS.map(s => (
            <div key={s.title} className="process-step">
              <span className="step-number">{s.n}</span>
              <span className="step-icon">{s.icon}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/contact" className="btn-primary">Start Your Project →</Link>
        </div>
      </section>
    </main>
  )
}
