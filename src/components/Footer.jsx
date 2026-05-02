import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo-text">⚡ KITECHX</div>
          <p>
            Transforming ideas into powerful digital experiences. We engineer
            the future — one project at a time. Global reach, local heart.
          </p>
          <div className="footer-socials">
            {['in', 'fb', 'ig', 'tw', 'yt'].map(s => (
              <div key={s} className="social-btn">{s.toUpperCase()}</div>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">MERN Stack Dev</a></li>
            <li><a href="#">SEO Services</a></li>
            <li><a href="#">Graphics Designing</a></li>
            <li><a href="#">AI Animated Videos</a></li>
            <li><a href="#">PHP / Laravel</a></li>
            <li><a href="#">WordPress</a></li>
            <li><a href="#">Deployment</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <div className="footer-contact-item">
            <span className="icon">📧</span>
            <span>kitechx7@gmail.com</span>
          </div>
          <div className="footer-contact-item">
            <span className="icon">📍</span>
            <span>Lahore Cantt, Pakistan<br/>Serving USA · UK · Europe · Middle East</span>
          </div>
          <div className="footer-contact-item">
            <span className="icon">📞</span>
            <span>+92 334 4495146<br/>+92 309 4477653</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} KITECHX Agency. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}
