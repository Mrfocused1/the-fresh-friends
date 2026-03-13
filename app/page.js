'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Footer from './components/Footer';
import DashboardMockup from './components/DashboardMockup';

const CharactersScroll = dynamic(() => import('./components/CharactersScroll'), { ssr: false });
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false });

/* ============================================================
   DATA
   ============================================================ */
const characters = [
  {
    emoji: '',
    name: 'Strawberry',
    power: 'Power of Courage',
    powerColor: '#e8365d',
    bgColor: 'rgba(232,54,93,0.12)',
    body:
      'Strawberry is the bravest fruit in Freshland. When the others are scared, she leads the way — reminding us that courage isn\'t the absence of fear, it\'s doing it anyway.',
  },
  {
    emoji: '',
    name: 'Banana',
    power: 'Power of Joy',
    powerColor: '#f5c518',
    bgColor: 'rgba(245,197,24,0.12)',
    body:
      'Banana brings sunshine to every corner of Freshland. His laughter is contagious and his energy unstoppable — a reminder that happiness is a superpower all of its own.',
  },
  {
    emoji: '',
    name: 'Apple',
    power: 'Power of Focus',
    powerColor: '#c0392b',
    bgColor: 'rgba(192,57,43,0.12)',
    body:
      'Apple is the sharpest mind in the orchard. She teaches that staying present and focused — even when distractions abound — is how great things get done.',
  },
  {
    emoji: '',
    name: 'Orange',
    power: 'Power of Energy',
    powerColor: '#f39c12',
    bgColor: 'rgba(243,156,18,0.12)',
    body:
      'Orange never runs out of fizz! His boundless energy and enthusiasm inspire everyone around him to jump in, try new things, and keep moving forward.',
  },
  {
    emoji: '',
    name: 'Broccoli',
    power: 'Power of Strength',
    powerColor: '#27ae60',
    bgColor: 'rgba(39,174,96,0.12)',
    body:
      'Broccoli is the strongest friend in Freshland — not just in muscles, but in character. He shows children that true strength comes from helping others and never giving up.',
  },
  {
    emoji: '',
    name: 'Carrot',
    power: 'Power of Vision',
    powerColor: '#e67e22',
    bgColor: 'rgba(230,126,34,0.12)',
    body:
      'Carrot can see what others miss. Her far-sighted vision — both literally and figuratively — teaches children to look beyond the obvious and imagine what\'s possible.',
  },
  {
    emoji: '',
    name: 'Lemon',
    power: 'Power of Resilience',
    powerColor: '#f1c40f',
    bgColor: 'rgba(241,196,15,0.12)',
    body:
      'When life gives Lemon lemons, he makes lemonade — and shares it with everyone. His resilience in the face of life\'s sour moments teaches children to bounce back stronger.',
  },
  {
    emoji: '',
    name: 'Coconut',
    power: 'Power of Calm',
    powerColor: '#8e7560',
    bgColor: 'rgba(142,117,96,0.12)',
    body:
      'Coconut carries stillness wherever she goes. In a busy world, she teaches children the art of breathing, slowing down, and finding peace within themselves.',
  },
];

const testimonials = [
  {
    quote:
      '"I had the idea for my book for five years. Onyx gave me the structure, the confidence, and the clarity I needed to finally get it published. The platform is genuinely world-class."',
    name: 'Amara K.',
    role: 'Published Author & Entrepreneur',
    emoji: '',
  },
  {
    quote:
      '"I went from a blank document to a published book in under four months. Onyx\'s step-by-step framework removed every obstacle I had. Worth every penny."',
    name: 'David O.',
    role: 'Business Coach & Author',
    emoji: '',
  },
  {
    quote:
      '"As a first-time author, I was completely overwhelmed. Onyx broke the entire process down so clearly. I now have a book I\'m genuinely proud of and it\'s selling consistently."',
    name: 'Yvonne T.',
    role: 'Life Coach & First-Time Author',
    emoji: '',
  },
  {
    quote:
      '"The editorial templates alone saved me months of confusion. Onyx doesn\'t just teach you how to write — it teaches you how to think like a published author."',
    name: 'Priya S.',
    role: 'Non-Fiction Author',
    emoji: '',
  },
  {
    quote:
      '"I\'d started and abandoned my manuscript three times before finding Onyx. Within weeks I had a complete outline and a writing routine that actually stuck. Incredible."',
    name: 'Marcus J.',
    role: 'Author & Speaker',
    emoji: '',
  },
  {
    quote:
      '"Onyx is not just a course — it\'s a full publishing mentorship. The launch strategy alone helped me hit bestseller status in my category on launch day."',
    name: 'Adebayo R.',
    role: 'Bestselling Author',
    emoji: '⭐',
  },
];


/* ============================================================
   HOME PAGE
   ============================================================ */
export default function Home() {
  const coverRef = useRef(null);
  const bookSceneRef = useRef(null);
  const [selectedChips, setSelectedChips] = useState([]);

  const serviceChips = [
    'Full Platform Access',
    '1-to-1 Mentorship',
    'Editorial Review',
    'Launch Strategy',
    'Book Formatting',
    'Publishing Roadmap',
  ];

  function toggleChip(chip) {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  }

  /* ----------------------------------------------------------
     HASH ANCHOR — scroll to #contact on mount if present
     ---------------------------------------------------------- */
  useEffect(() => {
    if (window.location.hash === '#contact') {
      const el = document.getElementById('contact');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300);
      }
    }
  }, []);

  /* ----------------------------------------------------------
     SCROLL EFFECTS
     ---------------------------------------------------------- */
  useEffect(() => {
    /* Book open animation */
    if (coverRef.current) {
      gsap.fromTo(
        coverRef.current,
        { rotateY: 0 },
        { rotateY: -140, duration: 1.8, delay: 0.6, ease: 'power2.inOut' }
      );
    }

    /* Compensate for cover swinging left when book opens */
    if (bookSceneRef.current) {
      const isMobile = window.innerWidth <= 900;
      gsap.fromTo(
        bookSceneRef.current,
        { x: 0 },
        {
          /* Mobile: cover swings left off-screen — shift book right to recentre */
          /* Desktop: scene is centred in column — shift right to account for cover */
          x: isMobile ? 95 : 140,
          duration: 1.8,
          delay: 0.6,
          ease: 'power2.inOut',
        }
      );
    }

    window.addEventListener('scroll', () => {}, { passive: true });

    const animEls = document.querySelectorAll('.anim-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    animEls.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ----------------------------------------------------------
     RENDER
     ---------------------------------------------------------- */
  return (
    <>
      {/* GRAIN */}
      <div className="grain-overlay" />

      {/* NAVBAR */}
      <Navbar activePage="Home" />

      {/* HERO */}
      <section className="sb-hero" id="nh-hero">
        <div className="sb-hero-inner">

          {/* LEFT: text */}
          <div className="sb-hero-text">
            <h1 className="sb-hero-h1">
              Publish the book you have always known you were meant to <em>write.</em>
            </h1>
            <p className="sb-hero-sub">
              Onyx is a premium publishing education platform that takes you
              from blank page to published author — with expert mentorship,
              proven structure, and a clear roadmap at every step.
            </p>
            <div className="sb-hero-actions">
              <a href="#books" className="sb-cta-btn">Start Your Journey</a>
              <div className="sb-social-proof sb-social-proof--desktop">
                <div className="sb-avatars">
                  <div className="sb-avatar" style={{ background: '#2D2D2D' }} />
                  <div className="sb-avatar" style={{ background: '#D4AF37' }} />
                  <div className="sb-avatar" style={{ background: '#C1A79B' }} />
                </div>
                <div>
                  <div className="sb-stars">★★★★★</div>
                  <p className="sb-trust">Trusted by over <strong>300</strong> published authors</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: 3D Book */}
          <div className="sb-book-scene" ref={bookSceneRef}>
            <div className="sb-book">
              {/* Pages (revealed once cover opens) */}
              <div className="sb-book-pages">
                <div className="sb-page-content">
                  <p className="sb-page-tagline">Meet the</p>
                  <p className="sb-page-title">Fresh Friends</p>
                  <div className="sb-page-chars"></div>
                </div>
              </div>

              {/* Front cover — GSAP opens this */}
              <div className="sb-book-cover" ref={coverRef}>
                <div className="sb-cover-front">
                  <img src="/book-cover.jpeg" alt="The Fresh Friends" />
                </div>
                <div className="sb-cover-inside" />
              </div>

              {/* Spine */}
              <div className="sb-book-spine" />
            </div>
            <div className="sb-book-shadow" />
          </div>

          <div className="sb-social-proof sb-social-proof--mobile">
            <div className="sb-avatars">
              <div className="sb-avatar" style={{ background: '#2D2D2D' }} />
              <div className="sb-avatar" style={{ background: '#D4AF37' }} />
              <div className="sb-avatar" style={{ background: '#C1A79B' }} />
            </div>
            <div>
              <div className="sb-stars">★★★★★</div>
              <p className="sb-trust">Trusted by over <strong>300</strong> published authors</p>
            </div>
          </div>

        </div>
      </section>



      {/* BOOKS / OUR WORK */}
      <section className="our-work-section" id="books">
        <div className="section-container">
          <div className="our-work-heading-div">
            <div className="our-work-heading-left anim-in">
              <p className="label-medium">What We Offer</p>
              <h1>
                Everything you need to{' '}
                <span className="scribble-wrap">
                  <span className="italic-secondary">become published.</span>
                  <svg viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 9 C40 3, 80 11, 120 5 C160 -1, 180 9, 198 6"
                      stroke="#2D2D2D"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>
            <div className="our-work-heading-right anim-in delay-2">
            </div>
          </div>

          <div className="flip-cards">
            {/* Card 1 — Self Publish */}
            <div className="flip-card flip-card--photo anim-in delay-1">
              <div className="flip-card-inner">
                <div className="card-body">
                  <span className="card-num">The Platform</span>
                  <div className="card-body-top">
                    <h3>
                      How to{' '}
                      <span className="si">Self Publish</span>
                    </h3>
                    <p className="body-large">
                      A structured, phase-by-phase programme that takes you
                      from first idea to published book — with no guesswork.
                    </p>
                  </div>
                  <div className="tag-marquee">
                    <div className="tag-marquee-track">
                      <span className="tag">Publishing</span>
                      <span className="tag">Authors</span>
                      <span className="tag">Mentorship</span>
                      <span className="tag">Step-by-step</span>
                      <span className="tag">Online</span>
                      <span className="tag">Publishing</span>
                      <span className="tag">Authors</span>
                      <span className="tag">Mentorship</span>
                      <span className="tag">Step-by-step</span>
                      <span className="tag">Online</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 — Nursery Visits */}
            <div className="flip-card flip-card--photo anim-in delay-2" style={{ backgroundImage: 'url(/card2-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
              <div className="flip-card-inner">
                <div className="card-body">
                  <span className="card-num">1-to-1 Mentorship</span>
                  <div className="card-body-top">
                    <h3>
                      Expert{' '}
                      <span className="si">Guidance</span>
                    </h3>
                    <p className="body-large">
                      Work directly with a publishing mentor to refine your
                      manuscript, sharpen your message, and accelerate your path to print.
                    </p>
                  </div>
                  <div className="tag-marquee">
                    <div className="tag-marquee-track">
                      <span className="tag">Mentorship</span>
                      <span className="tag">Editorial</span>
                      <span className="tag">1-to-1</span>
                      <span className="tag">Feedback</span>
                      <span className="tag">UK-wide</span>
                      <span className="tag">Mentorship</span>
                      <span className="tag">Editorial</span>
                      <span className="tag">1-to-1</span>
                      <span className="tag">Feedback</span>
                      <span className="tag">UK-wide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 — Sainsbury's Funding */}
            <div className="flip-card flip-card--photo anim-in delay-3" style={{ backgroundImage: 'url(/card3-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
              <div className="flip-card-inner">
                <div className="card-body">
                  <span className="card-num">Milestone</span>
                  <div className="card-body-top">
                    <h3>
                      Sainsbury's &{' '}
                      <span className="si">Onyx</span>
                    </h3>
                    <p className="body-large">
                      Proudly backed by Sainsbury's to expand access to
                      publishing education across communities in the UK.
                    </p>
                  </div>
                  <div className="tag-marquee">
                    <div className="tag-marquee-track">
                      <span className="tag">Funding</span>
                      <span className="tag">Partnership</span>
                      <span className="tag">Community</span>
                      <span className="tag">UK-wide</span>
                      <span className="tag">2024–2025</span>
                      <span className="tag">Funding</span>
                      <span className="tag">Partnership</span>
                      <span className="tag">Community</span>
                      <span className="tag">UK-wide</span>
                      <span className="tag">2024–2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM SECTION */}
      <section className="platform-section">
        <div className="platform-container">

          <div className="platform-heading">
            <p className="platform-label">The Platform</p>
            <h2 className="platform-title">
              A Clear Path From Idea<br />
              <em>to Published Book</em>
            </h2>
            <p className="platform-sub">
              Step inside an immersive digital learning environment designed specifically for aspiring authors. No guesswork, just a structured system.
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="platform-dashboard-wrap">
            <DashboardMockup />
          </div>

          {/* Features */}
          <div className="platform-features">
            <div className="platform-feature">
              <p className="platform-feature-title">Guided Video Lessons</p>
              <p className="platform-feature-body">Cinematic, step-by-step instruction covering every phase of writing and publishing.</p>
            </div>
            <div className="platform-feature">
              <p className="platform-feature-title">Editorial Templates</p>
              <p className="platform-feature-body">Downloadable workbooks, outlines, and checklists used by professional authors.</p>
            </div>
            <div className="platform-feature">
              <p className="platform-feature-title">Launch Strategy</p>
              <p className="platform-feature-body">A proven roadmap to get your book into readers' hands and hit best-seller status.</p>
            </div>
          </div>

        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="testimonials-heading anim-in">
          <p className="testimonials-label">Author stories</p>
          <h2>What our <em>authors say.</em></h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="t-card" key={i}>
              <div className="t-card-stars">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="t-card-quote">{t.quote}</p>
              <div className="t-card-info">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ENQUIRY / WORKSHOPS */}
      <section className="enquiry-section" id="contact">
        <div className="enquiry-inner">
          <div className="enquiry-left">
            <h2>
              Ready to write your <em>book?</em>
            </h2>
            <p>
              Whether you're starting from scratch or have a half-finished
              manuscript, we'll help you get it published. Tell us where you
              are and we'll map out the right path forward.
            </p>
            <div className="enquiry-contact">
              <a href="mailto:hello@onyxpublishing.com">
                <span className="enquiry-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                </span>
                hello@onyxpublishing.com
              </a>
              <a href="https://instagram.com/onyxpublishing" target="_blank" rel="noopener noreferrer">
                <span className="enquiry-contact-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0" />
                  </svg>
                </span>
                @onyxpublishing
              </a>
            </div>
          </div>

          <form className="enquiry-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Sarah Johnson"
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="hello@school.com"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-book">Book Title / Working Title</label>
              <input
                id="contact-book"
                type="text"
                placeholder="e.g. The Confident Leader"
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-stage">Where are you in your journey?</label>
              <select id="contact-stage" defaultValue="">
                <option value="" disabled>
                  Select your current stage
                </option>
                <option>Just an idea — haven't started yet</option>
                <option>I have notes / research but no draft</option>
                <option>I have a partial draft</option>
                <option>I have a full draft that needs editing</option>
                <option>I'm ready to publish</option>
              </select>
            </div>

            <div className="form-field">
              <label>I'm interested in...</label>
              <div className="form-services">
                {serviceChips.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    className={`service-chip${selectedChips.includes(chip) ? ' selected' : ''}`}
                    onClick={() => toggleChip(chip)}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                placeholder="Tell us about your book idea, your goals, and any questions you have about the publishing process..."
              />
            </div>

            <div className="form-submit">
              <p>We typically respond within 1 working day.</p>
              <button type="submit" className="btn-submit">
                Get in touch
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </>
  );
}
