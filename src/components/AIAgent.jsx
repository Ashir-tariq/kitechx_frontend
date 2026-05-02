import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './AIAgent.css'

const PAGE_INFO = {
  '/': {
    name: 'Home',
    desc: 'Our landing page with hero video, founders section, and all services we offer.',
  },
  '/about': {
    name: 'About Us',
    desc: 'Learn about KITECHX — our vision, goals, mission, and what drives us.',
  },
  '/projects': {
    name: 'Projects',
    desc: 'Browse our portfolio of completed projects across web, mobile, and more.',
  },
  '/contact': {
    name: 'Contact Us',
    desc: 'Reach out to us via email, phone, or our query form. We respond fast!',
  },
}

const INITIAL_MSG = {
  role: 'bot',
  text: "👋 Hi! I'm **KIRA**, the KITECHX AI Guide. I can help you navigate the site, learn about our services, or connect you with our team. Ask me anything!",
}

const BOT_RESPONSES = {
  home: { text: "🏠 The **Home page** is where everything starts! It has our hero section with video, our co-founders, and all 9 services we offer. Click below to go there!", route: '/' },
  about: { text: "ℹ️ The **About Us page** tells our story — our vision, goals, and mission. Meet the team behind KITECHX!", route: '/about' },
  project: { text: "💼 Our **Projects page** showcases the beautiful websites and apps we've built. You'll love the portfolio!", route: '/projects' },
  contact: { text: "📬 The **Contact page** has our email, phone numbers, location, and a query form. We serve USA, UK, Europe & Middle East!", route: '/contact' },
  service: { text: "🚀 We offer: MERN Stack Dev, SEO, Graphics Designing, AI Animated Videos, PHP/Laravel, WordPress, Deployment, Maintenance & Social Media Marketing. Go to Home to see them all!", route: '/' },
  mern: { text: "⚙️ Our **MERN Stack** team builds powerful, scalable full-stack web apps using MongoDB, Express, React, and Node.js.", route: '/' },
  seo: { text: "📈 Our **SEO experts** boost your search rankings organically — from on-page optimization to link building.", route: '/' },
  graphic: { text: "🎨 Our **Graphics Designing** team creates stunning brand identities, UI designs, and marketing materials.", route: '/' },
  video: { text: "🎬 We produce **AI-powered animated videos** for product demos, ads, and explainer content.", route: '/' },
  wordpress: { text: "🌐 We build beautiful, fast **WordPress websites** — blogs, e-commerce, portfolios, and more.", route: '/' },
  laravel: { text: "🔧 Our **PHP/Laravel** team builds robust backend systems and APIs.", route: '/' },
  deploy: { text: "☁️ We handle full **deployment** on AWS, DigitalOcean, Vercel, and more — with CI/CD pipelines.", route: '/' },
  email: { text: "📧 You can reach us at **kitechx7@gmail.com** — we respond within 24 hours!", route: '/contact' },
  phone: { text: "📞 Our numbers: 03344495146, 03094477653, 03140060201, 03449787405, 03494491996. Based in **Lahore Cantt**!", route: '/contact' },
  location: { text: "📍 We're headquartered in **Lahore Cantt, Pakistan** but serve clients in USA, UK, Europe & Middle East!", route: '/contact' },
  founder: { text: "👥 KITECHX was built by 5 brilliant founders: Muhammad Moeez Asim, Muhammad Ashir, Rizwan Ameen, Muhammad Shoaib Aslam & Suleman Anjum!", route: '/' },
  hello: { text: "😊 Hello! I'm KIRA, your KITECHX guide. Ask me about pages, services, or founders — or use the quick buttons below!", route: null },
  help: { text: "🤖 I can help you: navigate pages, find our services, get contact info, or learn about our founders. What would you like?", route: null },
}

function findResponse(input) {
  const q = input.toLowerCase()
  if (q.includes('home') || q.includes('landing')) return BOT_RESPONSES.home
  if (q.includes('about')) return BOT_RESPONSES.about
  if (q.includes('project') || q.includes('portfolio') || q.includes('work')) return BOT_RESPONSES.project
  if (q.includes('contact') || q.includes('reach') || q.includes('touch')) return BOT_RESPONSES.contact
  if (q.includes('mern') || q.includes('react') || q.includes('node')) return BOT_RESPONSES.mern
  if (q.includes('seo') || q.includes('search engine')) return BOT_RESPONSES.seo
  if (q.includes('graphic') || q.includes('design')) return BOT_RESPONSES.graphic
  if (q.includes('video') || q.includes('animation') || q.includes('animated')) return BOT_RESPONSES.video
  if (q.includes('wordpress') || q.includes('wp')) return BOT_RESPONSES.wordpress
  if (q.includes('laravel') || q.includes('php')) return BOT_RESPONSES.laravel
  if (q.includes('deploy') || q.includes('hosting') || q.includes('server')) return BOT_RESPONSES.deploy
  if (q.includes('email') || q.includes('gmail') || q.includes('mail')) return BOT_RESPONSES.email
  if (q.includes('phone') || q.includes('number') || q.includes('call') || q.includes('whatsapp')) return BOT_RESPONSES.phone
  if (q.includes('location') || q.includes('lahore') || q.includes('address') || q.includes('pakistan')) return BOT_RESPONSES.location
  if (q.includes('founder') || q.includes('team') || q.includes('who')) return BOT_RESPONSES.founder
  if (q.includes('service') || q.includes('offer') || q.includes('what do')) return BOT_RESPONSES.service
  if (q.includes('hi') || q.includes('hello') || q.includes('hey')) return BOT_RESPONSES.hello
  if (q.includes('help')) return BOT_RESPONSES.help
  return { text: "🤔 I'm not sure about that. Try asking about our **pages**, **services**, **founders**, or **contact info**. Or use the quick buttons below!", route: null }
}

const QUICK = [
  { label: '🏠 Home', query: 'Go to home page' },
  { label: '👥 Founders', query: 'Who are the founders?' },
  { label: '🚀 Services', query: 'What services do you offer?' },
  { label: '💼 Projects', query: 'Show me projects' },
  { label: '📬 Contact', query: 'How to contact you?' },
]

export default function AIAgent() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([INITIAL_MSG])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = (text) => {
    const userMsg = text || input.trim()
    if (!userMsg) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setTyping(true)

    setTimeout(() => {
      const response = findResponse(userMsg)
      setTyping(false)
      setMessages(prev => [...prev, { role: 'bot', text: response.text, route: response.route }])
    }, 800)
  }

  const handleNavigate = (route) => {
    navigate(route)
    setMessages(prev => [...prev, {
      role: 'bot',
      text: `✅ Taking you to the **${PAGE_INFO[route]?.name}** page! ${PAGE_INFO[route]?.desc}`
    }])
  }

  const formatText = (text) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  }

  const currentPage = PAGE_INFO[location.pathname]

  return (
    <>
      <button
        className={`ai-agent-btn ${open ? 'open' : ''}`}
        onClick={() => setOpen(v => !v)}
        title="KITECHX AI Guide"
      >
        {open ? '✕' : '🤖'}
      </button>

      {open && (
        <div className="ai-panel">
          <div className="ai-panel-header">
            <div className="ai-avatar">🤖</div>
            <div className="ai-panel-header-info">
              <h4>KIRA — AI Guide</h4>
              <p><span className="online-dot" /> Online · {currentPage ? `On ${currentPage.name}` : 'Navigating'}</p>
            </div>
          </div>

          <div className="ai-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`ai-msg ${msg.role}`}>
                {msg.role === 'bot' && <div className="ai-avatar" style={{width:28,height:28,fontSize:'0.8rem',flexShrink:0}}>🤖</div>}
                <div className="ai-msg-bubble">
                  <span dangerouslySetInnerHTML={{ __html: formatText(msg.text) }} />
                  {msg.route && msg.route !== location.pathname && (
                    <div style={{marginTop:'0.5rem'}}>
                      <button
                        onClick={() => handleNavigate(msg.route)}
                        style={{
                          background:'rgba(110,80,255,0.2)',
                          border:'1px solid rgba(110,80,255,0.4)',
                          borderRadius:'100px',
                          color:'var(--clr-primary-light)',
                          fontSize:'0.75rem',
                          padding:'0.3rem 0.8rem',
                          cursor:'pointer',
                          fontFamily:'var(--font-heading)',
                          fontWeight:600,
                        }}
                      >
                        Go to {PAGE_INFO[msg.route]?.name} →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="ai-msg bot">
                <div className="ai-avatar" style={{width:28,height:28,fontSize:'0.8rem',flexShrink:0}}>🤖</div>
                <div className="ai-msg-bubble" style={{display:'flex',gap:4,alignItems:'center'}}>
                  {[0,1,2].map(i => (
                    <span key={i} style={{
                      width:6,height:6,borderRadius:'50%',
                      background:'var(--clr-primary-light)',
                      animation:`blink 1.2s ${i*0.2}s infinite`
                    }}/>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="ai-quick-actions">
            {QUICK.map(q => (
              <button key={q.label} className="quick-btn" onClick={() => sendMessage(q.query)}>
                {q.label}
              </button>
            ))}
          </div>

          <div className="ai-input-area">
            <input
              className="ai-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything…"
            />
            <button className="ai-send-btn" onClick={() => sendMessage()}>➤</button>
          </div>
        </div>
      )}
    </>
  )
}
