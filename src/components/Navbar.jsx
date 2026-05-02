import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <div className="logo-icon">KX</div>
            <span className="logo-text">KITECHX</span>
          </Link>

          <ul className="nav-links">
            <li><NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} end>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>About Us</NavLink></li>
            <li><NavLink to="/projects" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Contact Us</NavLink></li>
            <li><Link to="/contact" className="nav-cta">Get Started</Link></li>
          </ul>

          <div
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu} end>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>About Us</NavLink>
        <NavLink to="/projects" className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/contact" className={({isActive}) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Contact Us</NavLink>
        <Link to="/contact" className="mobile-nav-link mobile-cta" onClick={closeMenu}>Get Started →</Link>
      </div>
    </header>
  )
}
