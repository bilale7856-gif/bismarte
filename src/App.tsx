
import { useState, type FormEvent } from 'react'
import './App.css'
import { supabase } from './supabase'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    const { error } = await supabase.from('contacts').insert([
      { name, email, message }
    ])

    setLoading(false)

    if (error) {
      setStatus('Something went wrong. Please try again.')
    } else {
      setStatus('Your message has been sent successfully!')
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <div className="website">

      <header className="header">
        <a href="#home" className="logo">
          <span className="logo-mark">B</span>
          <span>BISMARTE</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Our Work</a>
          <a href="#about">About Us</a>
          <a href="#contact" className="nav-cta">Get in Touch ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>

          <div className="hero-inner">
            <div className="hero-content">
              <span className="eyebrow">
                DIGITAL EXPERIENCES · BUILT WITH PURPOSE
              </span>

              <h1>
                Your Vision.
                <br />
                Our <span>Digital Craft.</span>
              </h1>

              <p>
                We design and develop professional websites
                and e-commerce stores that help businesses
                stand out and grow online.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="primary-button">
                  Start Your Project <span>↗</span>
                </a>
                <a href="#projects" className="text-link">
                  Explore Our Work →
                </a>
              </div>

              <div className="hero-caption">
                <span className="caption-line"></span>
                <span>WEB DESIGN & DEVELOPMENT COMPANY</span>
              </div>
            </div>

            <div className="hero-contact">
              <span className="form-eyebrow">LET'S TALK</span>
              <h2>Have a project in mind?</h2>
              <p>Tell us what you need. Let's make it happen.</p>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <textarea
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={3}
                />

                <button type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Your Message ↗'}
                </button>

                {status && <div className="form-status">{status}</div>}
              </form>
            </div>
          </div>

          <a href="#services" className="scroll-indicator">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </section>

        <section className="intro-strip">
          <p>
            WE TURN IDEAS INTO <span>EXCEPTIONAL</span> DIGITAL EXPERIENCES.
          </p>
        </section>

        <section className="section" id="services">
          <div className="section-top">
            <div>
              <span className="eyebrow">WHAT WE DO</span>
              <h2>Our Services</h2>
            </div>
            <p>
              Smart digital solutions designed
              around your business goals.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <span className="service-number">01</span>
              <div className="service-icon">✳</div>
              <h3>Website Design</h3>
              <p>
                Modern and memorable designs that
                make your brand stand out.
              </p>
              <span className="card-arrow">↗</span>
            </article>

            <article className="service-card">
              <span className="service-number">02</span>
              <div className="service-icon">⌘</div>
              <h3>Web Development</h3>
              <p>
                Fast, reliable and professional websites
                built with modern technologies.
              </p>
              <span className="card-arrow">↗</span>
            </article>

            <article className="service-card">
              <span className="service-number">03</span>
              <div className="service-icon">▣</div>
              <h3>E-commerce</h3>
              <p>
                Online stores that present your products
                and make shopping easier.
              </p>
              <span className="card-arrow">↗</span>
            </article>

            <article className="service-card">
              <span className="service-number">04</span>
              <div className="service-icon">◈</div>
              <h3>Responsive Design</h3>
              <p>
                A seamless experience across computers,
                tablets and smartphones.
              </p>
              <span className="card-arrow">↗</span>
            </article>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section">
            <div className="section-top">
              <div>
                <span className="eyebrow">SELECTED CONCEPTS</span>
                <h2>Ideas Into Reality.</h2>
              </div>
              <p>
                A glimpse of the digital experiences
                we can create for your business.
              </p>
            </div>

            <div className="projects-grid">
              <article className="project-card">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
                  alt="Fashion store website concept"
                />
                <div className="project-info">
                  <div>
                    <span>ONLINE STORE</span>
                    <h3>Fashion & Lifestyle</h3>
                  </div>
                  <span className="project-arrow">↗</span>
                </div>
              </article>

              <article className="project-card">
                <img
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1000"
                  alt="Technology store website concept"
                />
                <div className="project-info">
                  <div>
                    <span>E-COMMERCE</span>
                    <h3>Technology Store</h3>
                  </div>
                  <span className="project-arrow">↗</span>
                </div>
              </article>

              <article className="project-card">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000"
                  alt="Real estate website concept"
                />
                <div className="project-info">
                  <div>
                    <span>BUSINESS WEBSITE</span>
                    <h3>Modern Real Estate</h3>
                  </div>
                  <span className="project-arrow">↗</span>
                </div>
              </article>
            </div>

            <p className="demo-note">
              These are illustrative concepts, not claimed client projects.
            </p>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-symbol">B.</div>
          <div className="about-content">
            <span className="eyebrow">WHO WE ARE</span>
            <h2>
              More Than a Website.
              <span> A Digital Identity.</span>
            </h2>
            <p>
              BISMARTE is a company specializing in website
              design and development. We combine creativity,
              technology and attention to detail to build
              digital experiences that bring business ideas
              to life.
            </p>
            <a href="#contact" className="primary-button">
              Work With Us ↗
            </a>
          </div>
        </section>

        <section className="final-cta">
          <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
          <h2>Ready to Build Something Great?</h2>
          <a href="#contact" className="primary-button">
            Let's Talk ↗
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo">
          <span className="logo-mark">B</span>
          <span>BISMARTE</span>
        </a>
        <p>Building your digital future.</p>
        <span>© {new Date().getFullYear()} BISMARTE. All rights reserved.</span>
      </footer>
    </div>
  )
}

export default App
