'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ============================================================
   DATA
   ============================================================ */
const tiers = [
  {
    id: 'single',
    label: 'Single Book',
    price: '£9.99',
    per: 'per book',
    badge: null,
    description: 'The perfect starting point. Pick your favourite Fresh Friend and begin the adventure.',
    features: [
      'One hardback children\'s book (32 pages)',
      'Ages 3–7 recommended',
      'Free UK standard delivery',
      'Comes with a collectible character card',
      'Gift-wrapping available at checkout',
    ],
    cta: 'Order a Book',
    ctaHref: '#order',
    style: 'light',
  },
  {
    id: 'collection',
    label: 'Full Collection',
    price: '£59.99',
    per: 'all 8 books',
    badge: 'Most Popular',
    description: 'Every character. Every power. Every adventure. The complete Fresh Friends series in one beautiful set.',
    features: [
      'All 8 hardback books (Strawberry to Coconut)',
      'Exclusive collector\'s slipcase box',
      'Free UK tracked delivery',
      'Signed bookplates from the author',
      'Free character poster (A2, full colour)',
      'Activity & colouring booklet included',
      'Priority dispatch within 48 hours',
    ],
    cta: 'Get the Full Collection',
    ctaHref: '#order',
    style: 'featured',
  },
  {
    id: 'school',
    label: 'School Bundle',
    price: '£249',
    per: 'classroom set',
    badge: 'Best for Schools',
    description: 'Designed for Reception and KS1 classrooms. Enough books for your whole class, plus resources to bring the stories to life.',
    features: [
      '30 mixed-title hardback books',
      'Teacher\'s curriculum guide (PDF)',
      'Classroom character display pack',
      'Free delivery to your school',
      'Invoice and purchase order accepted',
      'Optional in-school storytelling session',
      'Dedicated school account manager',
    ],
    cta: 'Request a School Quote',
    ctaHref: '#schools',
    style: 'dark',
  },
];

const faqs = [
  {
    q: 'What age are the books suitable for?',
    a: 'The Fresh Friends books are written and illustrated for children aged 3–7. Each book is 32 pages and designed to be read together with an adult, though confident early readers aged 6–7 often enjoy reading them independently.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard UK delivery takes 3–5 working days. Full Collection orders are dispatched within 48 hours via tracked courier. School Bundle orders are coordinated directly with your school office.',
  },
  {
    q: 'Can I order as a gift?',
    a: 'Yes! Gift-wrapping is available at checkout for individual and collection orders. We can also include a personalised gift message at no extra cost.',
  },
  {
    q: 'Do you offer international shipping?',
    a: 'We currently ship within the UK. International shipping is coming soon — join our mailing list to be notified when it launches.',
  },
  {
    q: 'How does the School Bundle work?',
    a: 'Once you submit a school quote request, a member of our team will contact you within 1–2 working days. We accept purchase orders and can issue invoices directly to your school finance department.',
  },
  {
    q: 'Can I add a storytelling workshop to our school order?',
    a: 'Absolutely. Our in-school storytelling sessions are available as an add-on to any school order, or can be booked independently via the Workshops section of our website.',
  },
  {
    q: 'What is your returns policy?',
    a: 'We offer a 30-day returns policy on all individual and collection orders. Books must be in their original, undamaged condition. Contact hello@thefreshfriends.com to start a return.',
  },
];

/* ============================================================
   PRICING PAGE
   ============================================================ */
export default function PricingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <style>{`
        @media (max-width: 960px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
          .pricing-featured { transform: scale(1) !important; }
          .schools-grid { grid-template-columns: 1fr !important; }
          .schools-visual { display: none !important; }
          .faq-cta-card { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 640px) {
          .pricing-hero-inner { padding: 130px 24px 80px !important; }
          .pricing-tiers { padding: 80px 20px 100px !important; }
          .pricing-schools { padding: 80px 20px !important; }
          .pricing-faq { padding: 80px 20px 100px !important; }
        }
      `}</style>

      {/* GRAIN */}
      <div className="grain-overlay" />

      {/* FLOATING LOGO */}
      <a href="/" className="floating-logo">
        <img src="/logo.svg" alt="The Fresh Friends" />
      </a>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-right">
            <div className="nav-links">
              <Link href="/#books">The Books</Link>
              <Link href="/#characters">The Friends</Link>
              <Link href="/#workshops">Workshops</Link>
              <Link href="/pricing" style={{ color: '#1773b0', fontWeight: 600 }}>Pricing</Link>
            </div>
            <a href="#order" className="nav-cta">Order Now</a>
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span className={`ham-line${menuOpen ? ' open' : ''}`} />
              <span className={`ham-line${menuOpen ? ' open' : ''}`} />
              <span className={`ham-line${menuOpen ? ' open' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* FULL-SCREEN MOBILE MENU */}
      <div className={`fs-menu${menuOpen ? ' fs-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <button className="fs-menu__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <nav className="fs-menu__nav">
          <Link href="/#books"      className="fs-menu__link" onClick={() => setMenuOpen(false)}>The Books</Link>
          <Link href="/#characters" className="fs-menu__link" onClick={() => setMenuOpen(false)}>The Friends</Link>
          <Link href="/#workshops"  className="fs-menu__link" onClick={() => setMenuOpen(false)}>Workshops</Link>
          <Link href="/pricing"     className="fs-menu__link" onClick={() => setMenuOpen(false)}>Pricing</Link>
        </nav>
        <a href="#order" className="fs-menu__cta" onClick={() => setMenuOpen(false)}>Order Now</a>
      </div>

      {/* ── HERO ── */}
      <section
        style={{
          background: 'var(--hero-bg)',
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.10) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 55% 45% at 50% 60%, rgba(23,115,176,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="pricing-hero-inner"
          style={{
            position: 'relative', zIndex: 1,
            maxWidth: '720px', margin: '0 auto',
            padding: '160px 40px 120px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#1773b0', marginBottom: '28px' }}>
            Pricing
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(52px, 8vw, 96px)', fontWeight: 700, lineHeight: 1.0, letterSpacing: '-3px', color: '#111827', marginBottom: '24px' }}>
            Stories worth{' '}
            <em style={{ fontStyle: 'italic', color: '#1773b0' }}>sharing.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 2.5vw, 26px)', fontStyle: 'italic', color: 'var(--text-secondary)', fontWeight: 400, marginBottom: '20px' }}>
            Books for every child, every classroom, every home.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 48px' }}>
            Whether you're buying a single book as a gift, completing the whole collection, or stocking a school library — we have an option for you.
          </p>
          <a
            href="#pricing-tiers"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#1773b0', color: 'white', padding: '16px 36px', borderRadius: '100px', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}
          >
            See all options
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── PRICING TIERS ── */}
      <section
        id="pricing-tiers"
        className="pricing-tiers"
        style={{ background: 'var(--dark-bg)', padding: '100px 40px 120px' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '16px' }}>
              Choose your adventure
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, letterSpacing: '-2px', color: 'var(--white)', lineHeight: 1.05 }}>
              Find the right{' '}
              <em style={{ fontStyle: 'italic', color: '#1773b0' }}>plan.</em>
            </h2>
          </div>

          <div
            id="order"
            className="pricing-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'stretch' }}
          >
            {tiers.map((tier) => {
              const isLight    = tier.style === 'light';
              const isFeatured = tier.style === 'featured';

              const cardBg      = isLight ? 'white' : isFeatured ? '#1773b0' : 'var(--dark-card-bg)';
              const cardBorder  = isLight ? '1px solid rgba(0,0,0,0.07)' : isFeatured ? 'none' : '1px solid rgba(255,255,255,0.06)';
              const bodyColor   = isLight ? 'var(--text-secondary)' : isFeatured ? 'rgba(255,255,255,0.82)' : 'var(--text-light)';
              const priceColor  = isLight ? 'var(--text-primary)' : 'white';
              const perColor    = isLight ? 'var(--text-secondary)' : isFeatured ? 'rgba(255,255,255,0.65)' : 'var(--text-light)';
              const checkBg     = isLight ? 'rgba(23,115,176,0.10)' : isFeatured ? 'rgba(255,255,255,0.20)' : 'rgba(23,115,176,0.15)';
              const checkStroke = isLight ? '#1773b0' : isFeatured ? 'white' : '#1773b0';
              const divider     = isLight ? 'rgba(0,0,0,0.08)' : isFeatured ? 'rgba(255,255,255,0.20)' : 'rgba(255,255,255,0.08)';
              const ctaBg       = isLight ? '#1773b0' : isFeatured ? 'white' : '#1773b0';
              const ctaColor    = isFeatured ? '#1773b0' : 'white';
              const badgeBg     = isFeatured ? 'rgba(255,255,255,0.18)' : 'rgba(23,115,176,0.10)';
              const badgeColor  = isFeatured ? 'white' : '#1773b0';
              const shadow      = isLight ? '0 4px 32px rgba(0,0,0,0.08)' : isFeatured ? '0 8px 64px rgba(23,115,176,0.35)' : '0 4px 32px rgba(0,0,0,0.3)';

              return (
                <div
                  key={tier.id}
                  className={isFeatured ? 'pricing-featured' : ''}
                  style={{
                    background: cardBg, border: cardBorder, borderRadius: '24px',
                    padding: '40px 36px 44px', display: 'flex', flexDirection: 'column',
                    boxShadow: shadow,
                    transform: isFeatured ? 'scale(1.03)' : 'scale(1)',
                  }}
                >
                  {tier.badge && (
                    <div style={{ alignSelf: 'flex-start', background: badgeBg, borderRadius: '100px', padding: '6px 16px', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', color: badgeColor, textTransform: 'uppercase', marginBottom: '20px' }}>
                      {tier.badge}
                    </div>
                  )}

                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: perColor, marginBottom: '16px' }}>
                    {tier.label}
                  </p>

                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-main)', fontSize: '52px', fontWeight: 800, color: priceColor, letterSpacing: '-2px', lineHeight: 1 }}>
                      {tier.price}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: perColor, marginBottom: '20px' }}>{tier.per}</p>

                  <p style={{ fontSize: '15px', lineHeight: 1.65, color: bodyColor, marginBottom: '28px' }}>
                    {tier.description}
                  </p>

                  <div style={{ height: '1px', background: divider, marginBottom: '28px' }} />

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px', flex: 1 }}>
                    {tier.features.map((feature) => (
                      <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: bodyColor, lineHeight: 1.55 }}>
                        <span style={{ flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%', background: checkBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2 2 4-4" stroke={checkStroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={tier.ctaHref}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: ctaBg, color: ctaColor, padding: '16px 28px', borderRadius: '100px', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}
                  >
                    {tier.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>

          <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '40px' }}>
            All prices include VAT · Secure checkout · 30-day returns on all orders
          </p>
        </div>
      </section>

      {/* ── SCHOOLS SECTION ── */}
      <section id="schools" className="pricing-schools" style={{ background: 'var(--hero-bg)', padding: '100px 40px' }}>
        <div className="schools-grid" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Visual */}
          <div className="schools-visual" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '380px', height: '380px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(23,115,176,0.10) 0%, rgba(23,115,176,0.03) 100%)', border: '2px solid rgba(23,115,176,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontStyle: 'italic', fontWeight: 600, color: '#1773b0', textAlign: 'center', padding: '0 40px', lineHeight: 1.4 }}>
                For classrooms that come alive.
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              For Schools & Educators
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-2px', color: 'var(--text-primary)', lineHeight: 1.05, marginBottom: '24px' }}>
              Bring{' '}
              <em style={{ fontStyle: 'italic', color: '#1773b0' }}>Freshland</em>{' '}
              to your classroom.
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '460px' }}>
              Our School Bundle is designed with Reception and KS1 teachers in mind. Every book connects directly to PSHE themes — courage, resilience, kindness, and focus — with a full teacher curriculum guide included.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
              {['PSHE Aligned', 'Invoice Accepted', 'Free Delivery', 'Curriculum Guide', 'Workshop Add-on'].map((pill) => (
                <span key={pill} style={{ padding: '8px 18px', borderRadius: '100px', border: '1px solid rgba(23,115,176,0.25)', background: 'rgba(23,115,176,0.05)', fontSize: '13px', fontWeight: 600, color: '#1773b0' }}>
                  {pill}
                </span>
              ))}
            </div>
            <a
              href="mailto:schools@thefreshfriends.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#1773b0', color: 'white', padding: '16px 36px', borderRadius: '100px', fontSize: '15px', fontWeight: 700, textDecoration: 'none' }}
            >
              Contact our Schools Team
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '16px' }}>
              We respond within 1 working day. Purchase orders and invoices welcome.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="pricing-faq" style={{ background: 'var(--dark-bg)', padding: '100px 40px 120px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '16px' }}>FAQ</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, letterSpacing: '-2px', color: 'var(--white)', lineHeight: 1.05, marginBottom: '64px' }}>
            Questions{' '}
            <em style={{ fontStyle: 'italic', color: '#1773b0' }}>answered.</em>
          </h2>

          <div>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: i === faqs.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                  <button
                    onClick={() => setOpenFaq(prev => prev === i ? null : i)}
                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', padding: '28px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ fontSize: '17px', fontWeight: 600, color: isOpen ? '#1773b0' : 'var(--white)', lineHeight: 1.4, transition: 'color 0.2s', fontFamily: 'var(--font-main)' }}>
                      {faq.q}
                    </span>
                    <span style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isOpen ? '#1773b0' : 'var(--text-secondary)', transition: 'all 0.2s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--text-light)', paddingBottom: '28px', maxWidth: '680px' }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom CTA card */}
          <div
            className="faq-cta-card"
            style={{ marginTop: '72px', background: 'var(--dark-card-bg)', borderRadius: '20px', padding: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-1px', marginBottom: '8px' }}>
                Still have questions?
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-light)', lineHeight: 1.6 }}>
                Our team is here to help. Drop us a line at{' '}
                <a href="mailto:hello@thefreshfriends.com" style={{ color: '#1773b0', textDecoration: 'none', fontWeight: 600 }}>
                  hello@thefreshfriends.com
                </a>
              </p>
            </div>
            <a
              href="mailto:hello@thefreshfriends.com"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#1773b0', color: 'white', padding: '15px 32px', borderRadius: '100px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', flexShrink: 0 }}
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer" id="contact">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/logo-dark.svg" alt="The Fresh Friends" />
              <p>A children's book series celebrating the extraordinary nature powers within every fruit, vegetable — and child.</p>
              <div className="footer-social">
                <a href="https://instagram.com/thefreshfriends" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>The Books</h4>
              <ul>
                <li><Link href="/#books">Strawberry — Courage</Link></li>
                <li><Link href="/#books">Banana — Joy</Link></li>
                <li><Link href="/#books">Broccoli — Strength</Link></li>
                <li><Link href="/#books">View all books</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>The Friends</h4>
              <ul>
                <li><Link href="/#characters">Meet the Characters</Link></li>
                <li><Link href="/#characters">Nature Powers</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Learn</h4>
              <ul>
                <li><Link href="/#workshops">School Workshops</Link></li>
                <li><Link href="/publish-with-onyx">Publish with Onyx</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/login">Author Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 The Fresh Friends. Made with ♥ in London.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>
        <p className="footer-wordmark">The Fresh Friends</p>
      </footer>
    </>
  );
}
