import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const FOUNDERS = [
  { name: 'Muhammad Moeez Asim', role: 'CEO & Lead Developer', initials: 'MA' },
  { name: 'Muhammad Ashir', role: 'CTO & Architect', initials: 'AS' },
  { name: 'Rizwan Ameen', role: 'COO & Project Manager', initials: 'RA' },
  { name: 'Muhammad Shoaib Aslam', role: 'Head of Design', initials: 'SA' },
  { name: 'Suleman Anjum', role: 'Marketing Director', initials: 'SU' },
]

const SERVICES = [
  { icon: '⚡', label: 'MERN Stack Development', desc: 'Full-stack web apps with MongoDB, Express, React & Node.js — fast, scalable, modern.', color: 'rgba(110,80,255,0.15)' },
  { icon: '📈', label: 'SEO Optimization', desc: 'Dominate search rankings with our data-driven SEO strategies and on-page mastery.', color: 'rgba(0,240,192,0.12)' },
  { icon: '🎨', label: 'Graphics Designing', desc: 'Stunning logos, brand identities, UI/UX design, and marketing visuals that convert.', color: 'rgba(255,60,120,0.12)' },
  { icon: '🎬', label: 'AI Animated Videos', desc: 'Next-gen animated explainer videos and product demos powered by cutting-edge AI tools.', color: 'rgba(245,200,66,0.12)' },
  { icon: '🔧', label: 'PHP & Laravel', desc: 'Robust, enterprise-grade backend systems and RESTful APIs using PHP & Laravel.', color: 'rgba(110,80,255,0.12)' },
  { icon: '🌐', label: 'WordPress Websites', desc: 'Beautiful, fast, and SEO-optimized WordPress sites for any business need.', color: 'rgba(0,240,192,0.1)' },
  { icon: '☁️', label: 'Deployment Services', desc: 'Seamless cloud deployment on AWS, Vercel, DigitalOcean with CI/CD pipelines.', color: 'rgba(155,127,255,0.12)' },
  { icon: '🛡️', label: 'Maintenance & Security', desc: 'Continuous website monitoring, updates, backups, and security hardening.', color: 'rgba(255,60,120,0.1)' },
  { icon: '📣', label: 'Social Media Marketing', desc: 'Strategic content, ads management, and growth hacking across all major platforms.', color: 'rgba(245,200,66,0.1)' },
]

export default function Home() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <main className="page-enter">
      {/* HERO */}
      <section className="hero">
        <div className="hero-video-bg">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/kitechx_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-content">
          <div className="hero-tag">
            ✦ Digital Innovation Agency — Est. 2024
          </div>
          <h1 className="hero-title">
            WE BUILD<br />
            <span className="gradient-text">TOMORROW'S</span><br />
            DIGITAL WORLD
          </h1>
          <p className="hero-subtitle">
            From code to cloud — KITECHX transforms your boldest ideas into
            powerful, scalable digital products that dominate markets across
            USA, UK, Europe & the Middle East.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">View Our Work →</Link>
            <Link to="/contact" className="btn-outline">Start a Project</Link>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          {[
            { n: '50+', l: 'Projects Delivered' },
            { n: '30+', l: 'Happy Clients' },
            { n: '4', l: 'Countries Served' },
            { n: '9', l: 'Core Services' },
            { n: '5', l: 'Expert Founders' },
          ].map(s => (
            <div key={s.l} className="stat-item">
              <div className="stat-number">{s.n}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOUNDERS */}
      <section className="founders-section">
        <div className="orb orb-purple" />
        <div className="section-header">
          <div className="section-tag">✦ The Visionaries</div>
          <h2 className="section-title">Meet The <span>Founders</span></h2>
          <p>Five talented minds united by one mission — to build extraordinary digital experiences.</p>
        </div>

        <div className="founders-grid">
          {FOUNDERS.map((f, i) => (
            <div key={f.name} className="founder-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="founder-avatar">
                <div className="founder-initials">{f.initials}</div>
              </div>
              <div className="founder-name">{f.name}</div>
              <div className="founder-role">{f.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <div className="orb orb-teal" />
        <div className="section-header">
          <div className="section-tag">✦ What We Offer</div>
          <h2 className="section-title">Services That <span>Drive Growth</span></h2>
          <p>From development to marketing — we're your full-stack digital partner.</p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={s.label} className="service-card">
              <div className="service-icon" style={{ background: s.color }}>
                {s.icon}
              </div>
              <div className="service-arrow">→</div>
              <h3>{s.label}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="orb orb-purple" />
        <div className="cta-box">
          <h2>READY TO LAUNCH?</h2>
          <p>Let's build something extraordinary together. Your vision, our execution.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">Start Your Project →</Link>
            <Link to="/about" className="btn-outline">Learn About Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
