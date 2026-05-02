import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const VALUES = [
  { icon: '🚀', title: 'Innovation First', desc: 'We embrace cutting-edge tech and AI to deliver solutions that are ahead of the curve.' },
  { icon: '💎', title: 'Quality Obsessed', desc: 'Every pixel, every line of code — crafted with precision and professional excellence.' },
  { icon: '🤝', title: 'Client-Centric', desc: 'Your success is our mission. We build lasting partnerships, not just products.' },
  { icon: '⚡', title: 'Speed & Agility', desc: 'Rapid delivery without compromising on quality. We move fast and build smart.' },
  { icon: '🌍', title: 'Global Mindset', desc: 'Serving clients from Pakistan to USA, UK, Europe, and the Middle East.' },
  { icon: '🔒', title: 'Integrity Always', desc: 'Transparent communication, honest timelines, and trustworthy deliverables.' },
]

const TICKER_ITEMS = [
  'DIGITAL INNOVATION', '✦', 'GLOBAL REACH', '✦', 'EXPERT TEAM', '✦',
  'CLIENT SUCCESS', '✦', 'MERN STACK', '✦', 'AI SOLUTIONS', '✦',
  'DIGITAL INNOVATION', '✦', 'GLOBAL REACH', '✦', 'EXPERT TEAM', '✦',
  'CLIENT SUCCESS', '✦', 'MERN STACK', '✦', 'AI SOLUTIONS', '✦',
]

export default function About() {
  return (
    <main className="page-enter">
      {/* HERO */}
      <section className="about-hero">
        <div className="orb orb-purple" />
        <div className="about-hero-content">
          <div className="section-tag">✦ Our Story</div>
          <h1>Building the <span>Future</span>, One Project at a Time</h1>
          <p>
            KITECHX is a full-service digital agency born in Lahore Cantt, with a
            global vision. Founded by five passionate technologists, we combine deep
            technical expertise with creative design thinking to deliver digital
            products that truly matter.
          </p>
        </div>
      </section>

      {/* TICKER */}
      <div className="mission-strip">
        <div className="mission-ticker">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className={item === '✦' ? 'ticker-dot' : ''}>{item}</span>
          ))}
        </div>
      </div>

      {/* VISION & MISSION */}
      <section className="vm-section">
        <div className="orb orb-teal" style={{ right: '-100px', top: '50%', transform: 'translateY(-50%)', width: '500px', height: '500px' }} />
        <div className="section-header">
          <div className="section-tag">✦ What We Stand For</div>
          <h2 className="section-title">Vision, Mission <span>& Goals</span></h2>
        </div>

        <div className="vm-grid">
          <div className="vm-card" style={{ '--vm-color': 'rgba(110,80,255,0.12)' }}>
            <span className="vm-card-icon">🔭</span>
            <h3>Our Vision</h3>
            <p>
              To become the most trusted and innovative digital agency in South Asia
              and beyond — a global force that empowers businesses of all sizes to
              thrive in the digital era through world-class technology solutions.
            </p>
            <ul>
              <li>Lead the MERN ecosystem in Pakistan</li>
              <li>Deliver AI-powered solutions at scale</li>
              <li>Create 100+ digital success stories by 2026</li>
              <li>Be the go-to agency for startups and enterprises</li>
            </ul>
          </div>

          <div className="vm-card" style={{ '--vm-color': 'rgba(0,240,192,0.08)' }}>
            <span className="vm-card-icon">🎯</span>
            <h3>Our Mission</h3>
            <p>
              To bridge the gap between great ideas and exceptional digital products.
              We are committed to delivering pixel-perfect, performance-driven, and
              scalable solutions that generate real ROI for our clients globally.
            </p>
            <ul>
              <li>Deliver projects on time, every time</li>
              <li>Maintain 100% client satisfaction rate</li>
              <li>Continuously upskill in emerging technologies</li>
              <li>Provide enterprise quality at accessible prices</li>
            </ul>
          </div>

          <div className="vm-card" style={{ '--vm-color': 'rgba(255,60,120,0.08)' }}>
            <span className="vm-card-icon">🏆</span>
            <h3>Our Goals</h3>
            <p>
              Strategic, measurable targets that guide every decision at KITECHX —
              from the code we write to the partnerships we build.
            </p>
            <ul>
              <li>Expand to 10+ international markets</li>
              <li>Launch our own SaaS product by 2025</li>
              <li>Build a team of 25+ specialists</li>
              <li>Establish KITECHX Academy for dev training</li>
              <li>Achieve ISO-certified quality standards</li>
            </ul>
          </div>

          <div className="vm-card" style={{ '--vm-color': 'rgba(245,200,66,0.08)' }}>
            <span className="vm-card-icon">⚗️</span>
            <h3>Our Approach</h3>
            <p>
              We follow an agile, client-first methodology that ensures transparency,
              speed, and quality at every stage of the development lifecycle.
            </p>
            <ul>
              <li>Discovery & strategy sprint</li>
              <li>Design-first wireframing & prototyping</li>
              <li>Agile development with weekly updates</li>
              <li>Rigorous QA, testing, and deployment</li>
              <li>Post-launch support & growth hacking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="section-header">
          <div className="section-tag">✦ What Drives Us</div>
          <h2 className="section-title">Core <span>Values</span></h2>
          <p style={{ color: 'var(--clr-text-muted)', marginTop: '1rem' }}>
            The principles that shape every project, every relationship, every line of code.
          </p>
        </div>
        <div className="values-grid">
          {VALUES.map(v => (
            <div key={v.title} className="value-card">
              <span className="value-icon">{v.icon}</span>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="reach-section">
        <div className="orb orb-purple" style={{ left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px' }} />
        <div className="section-tag" style={{ justifyContent: 'center' }}>✦ Global Impact</div>
        <h2 className="section-title" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          We Serve Clients <span>Worldwide</span>
        </h2>
        <p style={{ color: 'var(--clr-text-muted)', textAlign: 'center', marginTop: '1rem', maxWidth: '500px', margin: '1rem auto 0' }}>
          Headquartered in Lahore Cantt, Pakistan — delivering excellence across borders.
        </p>
        <div className="reach-countries">
          {['🇵🇰 Pakistan', '🇺🇸 United States', '🇬🇧 United Kingdom', '🇩🇪 Germany', '🇫🇷 France', '🇦🇪 UAE', '🇸🇦 Saudi Arabia', '🇶🇦 Qatar', '🇮🇹 Italy', '🇳🇱 Netherlands'].map(c => (
            <div key={c} className="country-tag">{c}</div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/contact" className="btn-primary">Work With Us →</Link>
        </div>
      </section>
    </main>
  )
}
