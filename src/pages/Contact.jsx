import React, { useState } from 'react'
import './Contact.css'

// ─────────────────────────────────────────────────────────
// ⚠️  Sirf yeh ek line update karo jab deploy karo:
//     Development mein:  http://localhost:5000
//     Production mein:   https://api.kitechx.com  (ya jo bhi URL ho)
// ─────────────────────────────────────────────────────────
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const PHONES = [
  '03344495146',
  '03094477653',
  '03140060201',
  '03449787405',
  '03494491996',
]

const SERVICES_LIST = [
  'MERN Stack Development',
  'SEO Optimization',
  'Graphics Designing',
  'AI Animated Videos',
  'PHP / Laravel Development',
  'WordPress Website',
  'Deployment Services',
  'Maintenance & Security',
  'Social Media Marketing',
  'Other',
]

const EMPTY_FORM = {
  name: '', email: '', phone: '', service: '', budget: '', message: '',
}

export default function Contact() {
  const [form, setForm]           = useState(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [errors, setErrors]       = useState({})
  const [serverError, setServerError] = useState('') // backend error message

  // ── Client-side validation ──────────────────
  const validate = () => {
    const e = {}
    if (!form.name.trim())                          e.name    = 'Name is required'
    if (!form.email.trim() ||
        !/\S+@\S+\.\S+/.test(form.email))          e.email   = 'Valid email required'
    if (!form.message.trim())                       e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
    if (serverError)  setServerError('')
  }

  // ── Form Submit → Backend API call ──────────
  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerError('')

    // Pehle client validation
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        // Backend ne error return kiya
        setServerError(data.message || 'Something went wrong. Please try again.')
        return
      }

      // ✅ Success!
      setSubmitted(true)

    } catch (err) {
      // Network error ya server down
      console.error('[Contact Submit Error]', err)
      setServerError(
        'Unable to reach the server. Please check your internet connection or try again later.'
      )
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setSubmitted(false)
    setForm(EMPTY_FORM)
    setErrors({})
    setServerError('')
  }

  return (
    <main className="page-enter">
      {/* HERO */}
      <section className="contact-hero">
        <div className="orb orb-teal" />
        <div className="contact-hero-content">
          <div className="section-tag">✦ Let's Connect</div>
          <h1>Get In <span>Touch</span></h1>
          <p>
            Have a project in mind? A question? Or just want to say hello?
            We'd love to hear from you. Our team responds within 24 hours.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="contact-main">
        <div className="contact-grid">

          {/* ── INFO COLUMN ───────────────────── */}
          <div className="contact-info">
            <div className="contact-info-header">
              <h2>Contact Details</h2>
              <p>Reach us through any of the channels below. We're a fast-responding team!</p>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon">📧</div>
                <h4>Email Us</h4>
              </div>
              <div className="contact-detail">
                <a href="mailto:kitechx7@gmail.com">kitechx7@gmail.com</a>
                <br />
                <span style={{ fontSize: '0.8rem', color: 'var(--clr-text-dim)' }}>
                  We reply within 24 hours
                </span>
                <div>
                  <div className="availability-badge">
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'var(--clr-accent)', display: 'inline-block',
                    }} />
                    Available for new projects
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon">📞</div>
                <h4>Call / WhatsApp</h4>
              </div>
              <div className="contact-detail">
                {PHONES.map(p => (
                  <div key={p}>
                    <a href={`tel:+92${p.slice(1)}`}>+92 {p.slice(1, 3)} {p.slice(3)}</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon">📍</div>
                <h4>Our Location</h4>
              </div>
              <div className="contact-detail">
                <strong style={{ color: 'var(--clr-text)' }}>Lahore Cantt, Punjab, Pakistan</strong>
                <br />
                <span style={{ marginTop: '0.25rem', display: 'inline-block' }}>
                  Serving clients globally across<br />
                  USA · UK · Europe · Middle East
                </span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon">🕐</div>
                <h4>Working Hours</h4>
              </div>
              <div className="contact-detail">
                <strong style={{ color: 'var(--clr-text)' }}>Mon – Sat:</strong> 9:00 AM – 8:00 PM PKT<br />
                <strong style={{ color: 'var(--clr-text)' }}>Sunday:</strong> Emergency support only<br />
                <span style={{ fontSize: '0.8rem', color: 'var(--clr-accent)', marginTop: '0.25rem', display: 'inline-block' }}>
                  We coordinate across time zones for international clients
                </span>
              </div>
            </div>
          </div>

          {/* ── FORM COLUMN ───────────────────── */}
          <div className="contact-form-wrap">
            {submitted ? (
              /* ── Success State ── */
              <div className="form-success">
                <span className="success-icon">🎉</span>
                <h3>Message Received!</h3>
                <p>
                  Thank you for reaching out. Our team will review your query and
                  get back to you at{' '}
                  <strong style={{ color: 'var(--clr-primary-light)' }}>{form.email}</strong>{' '}
                  within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="btn-outline"
                  style={{ marginTop: '1.5rem', display: 'inline-flex' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <>
                <div className="form-title">Send Us a Message</div>
                <div className="form-subtitle">
                  Fill out the form and we'll craft a custom proposal for you.
                </div>

                {/* Server-side error banner */}
                {serverError && (
                  <div style={{
                    background: 'rgba(255,80,80,0.1)',
                    border: '1px solid rgba(255,80,80,0.4)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    marginBottom: '1rem',
                    color: 'var(--clr-accent2)',
                    fontSize: '0.875rem',
                  }}>
                    ⚠️ {serverError}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        style={errors.name ? { borderColor: 'var(--clr-accent2)' } : {}}
                      />
                      {errors.name && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--clr-accent2)' }}>
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        style={errors.email ? { borderColor: 'var(--clr-accent2)' } : {}}
                      />
                      {errors.email && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--clr-accent2)' }}>
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div className="form-group">
                      <label>Service Required</label>
                      <select name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service…</option>
                        {SERVICES_LIST.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Estimated Budget</label>
                    <select name="budget" value={form.budget} onChange={handleChange}>
                      <option value="">Select budget range…</option>
                      <option>Under $500</option>
                      <option>$500 – $1,000</option>
                      <option>$1,000 – $5,000</option>
                      <option>$5,000 – $10,000</option>
                      <option>$10,000+</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Your Query / Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, timeline, goals, and any specific requirements…"
                      style={errors.message ? { borderColor: 'var(--clr-accent2)' } : {}}
                    />
                    {errors.message && (
                      <span style={{ fontSize: '0.75rem', color: 'var(--clr-accent2)' }}>
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="form-submit" disabled={loading}>
                    {loading ? '⏳ Sending...' : '🚀 Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* WORLDWIDE */}
      <section className="worldwide-section">
        <div className="section-tag" style={{ justifyContent: 'center' }}>✦ Global Services</div>
        <h2 className="section-title" style={{ textAlign: 'center', marginTop: '0.5rem' }}>
          We Work <span>Everywhere</span>
        </h2>
        <div className="worldwide-logos">
          {[
            '🇵🇰 Pakistan', '🇺🇸 United States', '🇬🇧 United Kingdom',
            '🇩🇪 Germany', '🇫🇷 France', '🇮🇹 Italy',
            '🇦🇪 UAE', '🇸🇦 Saudi Arabia', '🇶🇦 Qatar',
            '🇳🇱 Netherlands', '🇪🇸 Spain', '🇨🇦 Canada',
          ].map(c => (
            <div key={c} className="ww-item">{c}</div>
          ))}
        </div>
      </section>
    </main>
  )
}