'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

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
      '"My daughter absolutely loves Strawberry — she even said she wants Strawberry\'s courage when she grows up. This book opened a beautiful conversation about bravery."',
    name: 'Amara K.',
    role: 'Parent of a 5-year-old',
    emoji: '',
  },
  {
    quote:
      '"We read the Banana book every night before bed. My son is already asking why HE doesn\'t have a Nature Power. I told him joy IS his power — and he beamed!"',
    name: 'David O.',
    role: 'Dad of two',
    emoji: '',
  },
  {
    quote:
      '"As a Reception teacher, I\'ve used the Fresh Friends books in circle time. Children are genuinely engaged, and the conversation around feelings has been incredible."',
    name: 'Miss Yvonne T.',
    role: 'Primary School Teacher',
    emoji: '',
  },
  {
    quote:
      '"The illustrations are gorgeous. My twins fight over who gets to hold the book first — which is honestly the best problem to have at bedtime!"',
    name: 'Priya S.',
    role: 'Parent of twins, age 4',
    emoji: '',
  },
  {
    quote:
      '"Broccoli & the Power of Strength made my son actually WANT to eat his vegetables because he wants to be as strong as Broccoli. I cannot thank this series enough."',
    name: 'Marcus J.',
    role: 'Parent',
    emoji: '',
  },
  {
    quote:
      '"We ran a school workshop with The Fresh Friends team and the children were spellbound. The storytelling, the characters, the message — all absolutely world-class."',
    name: 'Mr. Adebayo R.',
    role: 'Head of Year, Sunshine Academy',
    emoji: '⭐',
  },
];


/* ============================================================
   HOME PAGE
   ============================================================ */
export default function Home() {
  const wrapperRef = useRef(null);
  const logoImgRef = useRef(null);
  const mascotRef = useRef(null);
  const [selectedChips, setSelectedChips] = useState([]);
  const growWords = [
    { word: 'grow',     color: '#27ae60' }, // Broccoli green
    { word: 'bloom',    color: '#e8365d' }, // Strawberry red
    { word: 'thrive',   color: '#f5c518' }, // Banana yellow
    { word: 'flourish', color: '#f39c12' }, // Orange
    { word: 'expand',   color: '#1773b0' }, // Blue
    { word: 'soar',     color: '#f1c40f' }, // Lemon
  ];
  const [growIndex, setGrowIndex] = useState(0);
  const [growVisible, setGrowVisible] = useState(true);

  const serviceChips = [
    'School Workshop',
    'Nursery Visit',
    'Book Donation',
    'Full Collection',
    'Bulk Order',
    'Storytelling Session',
  ];

  function toggleChip(chip) {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
    );
  }

  /* ----------------------------------------------------------
     SCROLL EFFECTS
     ---------------------------------------------------------- */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const logoImg = logoImgRef.current;
    const heroContent = document.getElementById('heroContent');
    const expandCircle = document.getElementById('expandCircle');
    const booksSection = document.getElementById('books');
    const mascotWrap = document.querySelector('.mascot-wrap');

    /* Position expand circle over mascot */
    function initCircle() {
      if (!mascotWrap || !expandCircle || !wrapper) return;
      const rect = mascotWrap.getBoundingClientRect();
      const wrapRect = wrapper.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const size = Math.max(rect.width, rect.height);
      expandCircle.style.width = size + 'px';
      expandCircle.style.height = size + 'px';
      expandCircle.style.left = cx - size / 2 + 'px';
      expandCircle.style.top = cy - size / 2 + 'px';
      expandCircle.style.transform = 'scale(1)';
    }

    initCircle();
    window.addEventListener('resize', initCircle);

    /* Hero scroll animation */
    function onScroll() {
      if (!wrapper) return;
      const scrollY = window.scrollY;
      const wrapperHeight = wrapper.offsetHeight;
      const vh = window.innerHeight;
      const maxScroll = wrapperHeight - vh;
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      // Logo swap
      if (logoImg) {
        const booksRect = booksSection ? booksSection.getBoundingClientRect() : null;
        const onGreen = booksRect && booksRect.top <= 60 && booksRect.bottom > 60;
        if (onGreen) {
          logoImg.src = '/logo-green-bg.svg';
        } else {
          const threshold = maxScroll * 0.75;
          logoImg.src = scrollY >= threshold ? '/logo-dark.svg' : '/logo.svg';
        }
      }

      // Circle scale: grows to fill screen
      if (expandCircle && mascotWrap) {
        const rect = mascotWrap.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const diagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
        const maxScale = (diagonal * 2.2) / size;
        const eased = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        const scale = 1 + eased * (maxScale - 1);
        expandCircle.style.transform = `scale(${scale})`;
      }

      // Hero text fades out as circle nears completion
      if (heroContent) {
        const textFade = Math.max(0, 1 - Math.max(0, (progress - 0.75) / 0.15));
        heroContent.style.opacity = textFade;
        heroContent.style.visibility = textFade <= 0 ? 'hidden' : 'visible';
        heroContent.style.pointerEvents = textFade <= 0 ? 'none' : '';
      }

      // Books section fades in as circle finishes (starts at 85% of animation)
      if (booksSection) {
        const booksFade = Math.max(0, Math.min(1, (progress - 0.85) / 0.15));
        booksSection.style.opacity = booksFade;
      }

      // Hide circle only when hero-wrapper fully exits — books section (z-index:200)
      // scrolls over the circle naturally, both are blue so transition is seamless
      const wrapperBottom = wrapper.getBoundingClientRect().bottom;
      if (expandCircle) {
        expandCircle.style.visibility = wrapperBottom <= 0 ? 'hidden' : 'visible';
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('touchmove', onScroll, { passive: true });

    /* Intersection observer for .anim-in */
    const animEls = document.querySelectorAll('.anim-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    animEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchmove', onScroll);
      window.removeEventListener('resize', initCircle);
      observer.disconnect();
    };
  }, []);

  /* Cycling word effect */
  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      setGrowVisible(false);
      timeout = setTimeout(() => {
        setGrowIndex(i => (i + 1) % growWords.length);
        setGrowVisible(true);
      }, 600);
    }, 2600);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  /* ----------------------------------------------------------
     RENDER
     ---------------------------------------------------------- */
  return (
    <>
      {/* GRAIN */}
      <div className="grain-overlay" />

      {/* FLOATING LOGO */}
      <a href="/" className="floating-logo">
        <img ref={logoImgRef} src="/logo.svg" alt="The Fresh Friends" />
      </a>

      {/* NAVBAR */}
      <Navbar activePage="Home" />

      {/* HERO */}
      <div className="hero-wrapper" ref={wrapperRef} id="heroWrapper">
        <div className="hero-sticky" id="heroSticky">
          <div className="hero-bg" />
          <div id="expandCircle" className="expand-circle" />
          <div className="hero-content" id="heroContent">

            <div className="hero-center">
              <div className="hero-headline">
                {/* Line 1: Where + mascot */}
                <div className="hero-line">
                  <span className="h-word">Where</span>
                  <div className="mascot-wrap" ref={mascotRef}>
                    {/* Strawberry SVG placeholder */}
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="55" r="36" fill="#e8365d" />
                      <ellipse cx="35" cy="28" rx="9" ry="14" fill="#27ae60" transform="rotate(-20 35 28)" />
                      <ellipse cx="50" cy="22" rx="7" ry="13" fill="#27ae60" />
                      <ellipse cx="65" cy="28" rx="9" ry="14" fill="#27ae60" transform="rotate(20 65 28)" />
                      <circle cx="38" cy="55" r="3" fill="rgba(255,255,255,0.35)" />
                      <circle cx="52" cy="62" r="3" fill="rgba(255,255,255,0.35)" />
                      <circle cx="62" cy="50" r="3" fill="rgba(255,255,255,0.35)" />
                      <circle cx="44" cy="68" r="2.5" fill="rgba(255,255,255,0.35)" />
                    </svg>
                  </div>
                </div>
                {/* Line 2: stories grow */}
                <div className="hero-line indent">
                  <span className="h-word italic-word">stories</span>
                  <span className="grow-stack">
                    {growWords.map((w, i) => {
                      const isActive = i === growIndex;
                      return (
                        <span
                          key={w.word}
                          className={`h-word grow-cycle${isActive ? (growVisible ? ' grow-in' : ' grow-out') : ''}`}
                          style={{
                            color: w.color,
                            visibility: isActive ? 'visible' : 'hidden',
                          }}
                          aria-hidden={!isActive}
                        >
                          {w.word}
                        </span>
                      );
                    })}
                  </span>
                </div>
                {/* Line 3: into adventures. */}
                <div className="hero-line">
                  <span className="h-word">into</span>
                  <span className="h-word italic-word">adventures.</span>
                </div>
              </div>

              <p className="hero-sub">
                Meet the Fresh Friends — eight fruit and vegetable characters
                with extraordinary Nature Powers. A children's book series
                celebrating courage, joy, strength, and everything in between.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOOKS / OUR WORK */}
      <section className="our-work-section" id="books">
        <div className="section-container">
          <div className="our-work-heading-div">
            <div className="our-work-heading-left anim-in">
              <p className="label-medium">Making Waves</p>
              <h1>
                Growing healthy{' '}
                <span className="scribble-wrap">
                  <span className="italic-secondary">minds & bodies.</span>
                  <svg viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2 9 C40 3, 80 11, 120 5 C160 -1, 180 9, 198 6"
                      stroke="white"
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
            <div className="flip-card anim-in delay-1">
              <div className="flip-card-inner">
                <div className="card-body">
                  <span className="card-num">Publish with Onyx</span>
                  <div className="card-body-top">
                    <h3>
                      How to{' '}
                      <span className="si">Self Publish</span>
                    </h3>
                    <p className="body-large">
                      Learn how to bring your children's book idea to life —
                      from first draft to published copy.
                    </p>
                  </div>
                  <div className="tag-marquee">
                    <div className="tag-marquee-track">
                      <span className="tag">Publishing</span>
                      <span className="tag">Authors</span>
                      <span className="tag">Creators</span>
                      <span className="tag">Step-by-step</span>
                      <span className="tag">Free guide</span>
                      <span className="tag">Publishing</span>
                      <span className="tag">Authors</span>
                      <span className="tag">Creators</span>
                      <span className="tag">Step-by-step</span>
                      <span className="tag">Free guide</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-preview"
                style={{
                  background: 'linear-gradient(135deg, #1a5c2a 0%, #0d3318 100%)',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <p
                  style={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '22px',
                    textAlign: 'center',
                    padding: '0 32px',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                  }}
                >
                  Self Publish with Onyx
                </p>
              </div>
            </div>

            {/* Card 2 — Nursery Visits */}
            <div className="flip-card anim-in delay-2">
              <div className="flip-card-inner">
                <div className="card-body">
                  <span className="card-num">Nursery Visits</span>
                  <div className="card-body-top">
                    <h3>
                      Nutrition Workshops
                    </h3>
                    <p className="body-large">
                      Fun, interactive workshops that inspire healthy eating —
                      powered by Sainsbury's "Good food for all" foundation.
                    </p>
                  </div>
                  <div className="tag-marquee">
                    <div className="tag-marquee-track">
                      <span className="tag">Workshops</span>
                      <span className="tag">Nutrition</span>
                      <span className="tag">Ages 2–5</span>
                      <span className="tag">Nurseries</span>
                      <span className="tag">UK-wide</span>
                      <span className="tag">Workshops</span>
                      <span className="tag">Nutrition</span>
                      <span className="tag">Ages 2–5</span>
                      <span className="tag">Nurseries</span>
                      <span className="tag">UK-wide</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card-preview"
                style={{
                  background: 'linear-gradient(135deg, #27ae60 0%, #1a7a43 100%)',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <p
                  style={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '22px',
                    textAlign: 'center',
                    padding: '0 32px',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                  }}
                >
                  Nutrition Workshops
                </p>
              </div>
            </div>

            {/* Card 3 — Sainsbury's Funding */}
            <div className="flip-card anim-in delay-3">
              <div className="flip-card-inner">
                <div className="card-body">
                  <span className="card-num">Milestone</span>
                  <div className="card-body-top">
                    <h3>
                      Sainsbury's &{' '}
                      <span className="si">the Fresh Friends</span>
                    </h3>
                    <p className="body-large">
                      Proudly backed by Sainsbury's to bring The Fresh Friends
                      to families and communities across the UK.
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
              <div
                className="card-preview"
                style={{
                  background:
                    'linear-gradient(135deg, #27ae60 0%, #1a7a43 100%)',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <p
                  style={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '22px',
                    textAlign: 'center',
                    padding: '0 32px',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                  }}
                >
                  Backed by Sainsbury's
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHARACTERS SCROLL */}
      <CharactersScroll />

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="testimonials-heading anim-in">
          <h2>
            What parents{' '}
            <em>are saying!</em>
          </h2>
        </div>
        <div className="testimonials-track">
          <div className="testimonials-marquee">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div className="t-card" key={i}>
                <p className="t-card-quote">{t.quote}</p>
                <div className="t-card-author">
                  <div className="t-card-avatar">{t.emoji}</div>
                  <div className="t-card-info">
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY / WORKSHOPS */}
      <section className="enquiry-section" id="contact">
        <div className="enquiry-inner">
          <div className="enquiry-left">
            <h2>
              Bring <em>Freshland</em> to your school.
            </h2>
            <p>
              We offer immersive storytelling workshops, nursery visits, and
              school book programmes. Let us know what you need and we'll make
              it happen.
            </p>
            <div className="enquiry-contact">
              <a href="mailto:hello@thefreshfriends.com">
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
                hello@thefreshfriends.com
              </a>
              <a href="https://instagram.com/thefreshfriends" target="_blank" rel="noopener noreferrer">
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
                @thefreshfriends
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
              <label htmlFor="contact-school">School / Organisation</label>
              <input
                id="contact-school"
                type="text"
                placeholder="e.g. Sunshine Primary Academy"
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-age">Age Group</label>
              <select id="contact-age" defaultValue="">
                <option value="" disabled>
                  Select age group
                </option>
                <option>Nursery (2–3 years)</option>
                <option>Reception (4–5 years)</option>
                <option>KS1 (5–7 years)</option>
                <option>KS2 (7–11 years)</option>
                <option>Mixed ages</option>
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
                placeholder="Tell us a bit about your school, how many children, any specific dates or requirements..."
              />
            </div>

            <div className="form-submit">
              <p>We typically respond within 1–2 working days.</p>
              <button type="submit" className="btn-submit">
                Send enquiry
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
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/logo-dark.svg" alt="The Fresh Friends" />
              <p>
                A children's book series celebrating the extraordinary nature
                powers within every fruit, vegetable — and child.
              </p>
              <div className="footer-social">
                {/* Instagram */}
                <a
                  href="https://instagram.com/thefreshfriends"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
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
                </a>
                {/* Facebook */}
                <a
                  href="https://facebook.com/thefreshfriends"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a
                  href="https://tiktok.com/@thefreshfriends"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>The Books</h4>
              <ul>
                <li><a href="#books">Strawberry — Courage</a></li>
                <li><a href="#books">Banana — Joy</a></li>
                <li><a href="#books">Broccoli — Strength</a></li>
                <li><a href="#books">View all books</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>The Friends</h4>
              <ul>
                <li><a href="#characters">Meet the Characters</a></li>
                <li><a href="#characters">Nature Powers</a></li>
                <li><a href="#characters">Freshland</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Learn</h4>
              <ul>
                <li><a href="#contact">School Workshops</a></li>
                <li><a href="#contact">Nursery Visits</a></li>
                <li><Link href="/publish-with-onyx">Publish with Onyx</Link></li>
                <li><Link href="/login">Author Login</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © 2026 The Fresh Friends. Made with{' '}
              <span>&#9829;</span> in London.
            </p>
            <div className="footer-legal">
              <span style={{ opacity: 0.4, cursor: 'default' }}>Privacy Policy</span>
              <span style={{ opacity: 0.4, cursor: 'default' }}>Terms of Use</span>
              <span style={{ opacity: 0.4, cursor: 'default' }}>Cookie Settings</span>
            </div>
          </div>
        </div>

        <p className="footer-wordmark">The Fresh Friends</p>
      </footer>

    </>
  );
}
