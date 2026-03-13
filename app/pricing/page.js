'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ============================================================
   DATA
   ============================================================ */
const tiers = [
  {
    id: 'foundation',
    label: 'Foundation',
    price: '\u00a3497',
    per: 'one-time payment',
    badge: null,
    description: 'Everything you need to write, publish, and launch your first book — at your own pace.',
    features: [
      'Full platform access (all 6 modules)',
      'Video lessons + written guides',
      'Editorial templates & worksheets',
      'Private student community',
      'Lifetime access + future updates',
    ],
    cta: 'Get Started',
    ctaHref: '/#contact',
    featured: false,
  },
  {
    id: 'mentorship',
    label: 'Mentorship',
    price: '\u00a31,197',
    per: 'one-time payment',
    badge: 'Most Popular',
    description: 'Guided support from an experienced publishing mentor. For authors who want accountability and expert feedback.',
    features: [
      'Everything in Foundation',
      '4\u00d7 1-to-1 coaching sessions (60 min each)',
      'Manuscript review (up to 3 chapters)',
      'Launch strategy session',
      'Priority email support',
    ],
    cta: 'Apply for Mentorship',
    ctaHref: '/#contact',
    featured: true,
  },
  {
    id: 'vip',
    label: 'VIP Publishing',
    price: null,
    per: 'custom pricing',
    badge: null,
    description: 'A done-with-you publishing experience. We handle the heavy lifting so you can focus on your message.',
    features: [
      'Everything in Mentorship',
      'Done-with-you manuscript editing',
      'Cover design & formatting service',
      'Full launch management',
      'Ongoing author brand support',
    ],
    cta: 'Book a Call',
    ctaHref: '/#contact',
    featured: false,
  },
];

const faqs = [
  {
    q: 'How long do I have access?',
    a: 'Lifetime access. Once you enrol, the platform is yours forever \u2014 including all future updates, new lessons, and bonus content we add over time.',
  },
  {
    q: 'Do I need any experience?',
    a: 'No experience needed. The programme is built from the ground up for first-time authors. Whether you\u2019ve never written a word or you\u2019ve been thinking about your book for years, we start at the beginning.',
  },
  {
    q: 'What kind of books does this cover?',
    a: 'Non-fiction, self-help, memoir, business books \u2014 any book a personal brand would publish. If you have expertise, a story, or a message worth sharing, this programme will help you turn it into a published book.',
  },
  {
    q: 'How are the 1-to-1 sessions delivered?',
    a: 'All coaching sessions take place via Zoom. Each session is recorded and sent to you afterwards so you can revisit the feedback and guidance at any time.',
  },
  {
    q: 'Is there a payment plan?',
    a: 'Yes. Payment plans are available for the Mentorship and VIP Publishing tiers. Get in touch with us and we\u2019ll find an option that works for you.',
  },
  {
    q: 'What if it\u2019s not right for me?',
    a: 'We offer a 14-day money-back guarantee on the Foundation tier. If you enrol and decide it\u2019s not the right fit, just let us know within 14 days for a full refund.',
  },
];

/* ============================================================
   PRICING PAGE
   ============================================================ */
export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      {/* NAVBAR */}
      <Navbar activePage="Pricing" />

      {/* ── HERO ── */}
      <section
        style={{
          background: '#E8E1DC',
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="pricing-hero-inner"
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '720px',
            margin: '0 auto',
            padding: '130px 40px 120px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'rgb(120,181,57)',
              marginBottom: '28px',
              fontFamily: 'var(--font-playful)',
            }}
          >
            Pricing
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(48px, 7vw, 88px)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-3px',
              color: '#2D2D2D',
              marginBottom: '24px',
            }}
          >
            Simple, transparent{' '}
            <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>pricing.</em>
          </h1>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#4A4A4A',
              maxWidth: '480px',
              margin: '0 auto 48px',
              fontFamily: 'var(--font-playful)',
            }}
          >
            Choose the plan that fits your goals. Every tier includes lifetime access to the full Onyx Publishing platform.
          </p>
          <a
            href="#pricing-tiers"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgb(120,181,57)',
              color: 'white',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              fontFamily: 'var(--font-playful)',
            }}
          >
            See plans
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── PRICING TIERS ── */}
      <section
        id="pricing-tiers"
        style={{ background: '#0D0E10', padding: '100px 60px 120px' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p
              style={{
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
                marginBottom: '16px',
                fontFamily: 'var(--font-playful)',
              }}
            >
              Choose your plan
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 400,
                letterSpacing: '-2px',
                color: '#ffffff',
                lineHeight: 1.05,
              }}
            >
              Invest in your{' '}
              <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>book.</em>
            </h2>
          </div>

          <div
            className="pricing-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              alignItems: 'stretch',
            }}
          >
            {tiers.map((tier) => {
              const isFeatured = tier.featured;

              return (
                <div
                  key={tier.id}
                  className={isFeatured ? 'pricing-featured' : ''}
                  style={{
                    background: isFeatured ? '#161618' : '#111113',
                    border: isFeatured
                      ? '2px solid rgb(120,181,57)'
                      : '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '16px',
                    padding: '44px 36px 48px',
                    display: 'flex',
                    flexDirection: 'column',
                    transform: isFeatured ? 'scale(1.03)' : 'scale(1)',
                    position: 'relative',
                  }}
                >
                  {tier.badge && (
                    <div
                      style={{
                        alignSelf: 'flex-start',
                        background: 'rgb(120,181,57)',
                        borderRadius: '100px',
                        padding: '6px 16px',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '1px',
                        color: 'white',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                        fontFamily: 'var(--font-playful)',
                      }}
                    >
                      {tier.badge}
                    </div>
                  )}

                  <p
                    style={{
                      fontSize: '11px',
                      fontWeight: 400,
                      letterSpacing: '2.5px',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.75)',
                      marginBottom: '16px',
                      fontFamily: 'var(--font-playful)',
                    }}
                  >
                    {tier.label}
                  </p>

                  {tier.price ? (
                    <>
                      <div style={{ marginBottom: '4px' }}>
                        <span
                          style={{
                            fontFamily: 'var(--font-playful)',
                            fontSize: '48px',
                            fontWeight: 700,
                            color: '#ffffff',
                            letterSpacing: '-2px',
                            lineHeight: 1,
                          }}
                        >
                          {tier.price}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: '13px',
                          color: 'rgba(255,255,255,0.5)',
                          marginBottom: '20px',
                          fontFamily: 'var(--font-playful)',
                        }}
                      >
                        {tier.per}
                      </p>
                    </>
                  ) : (
                    <p
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '28px',
                        fontWeight: 400,
                        fontStyle: 'italic',
                        color: '#ffffff',
                        marginBottom: '20px',
                        lineHeight: 1.3,
                      }}
                    >
                      Custom pricing
                    </p>
                  )}

                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.65,
                      color: 'rgba(255,255,255,0.75)',
                      marginBottom: '28px',
                      fontFamily: 'var(--font-playful)',
                    }}
                  >
                    {tier.description}
                  </p>

                  <div
                    style={{
                      height: '1px',
                      background: 'rgba(255,255,255,0.08)',
                      marginBottom: '28px',
                    }}
                  />

                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      marginBottom: '36px',
                      flex: 1,
                    }}
                  >
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          fontSize: '14px',
                          color: 'rgba(255,255,255,0.85)',
                          lineHeight: 1.55,
                          fontFamily: 'var(--font-playful)',
                        }}
                      >
                        <span
                          style={{
                            flexShrink: 0,
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'rgba(120,181,57,0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '1px',
                          }}
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path
                              d="M2 5l2 2 4-4"
                              stroke="rgb(120,181,57)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.ctaHref}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      background: isFeatured ? 'rgb(120,181,57)' : 'rgba(255,255,255,0.08)',
                      color: 'white',
                      padding: '12px 28px',
                      borderRadius: '8px',
                      fontSize: '15px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontFamily: 'var(--font-playful)',
                      border: isFeatured ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {tier.cta}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>

          <p
            style={{
              textAlign: 'center',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.4)',
              marginTop: '40px',
              fontFamily: 'var(--font-playful)',
            }}
          >
            All prices include VAT &middot; 14-day money-back guarantee on Foundation &middot; Payment plans available
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        style={{
          background: '#E8E1DC',
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          padding: '100px 60px 120px',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: '#4A4A4A',
              marginBottom: '16px',
              fontFamily: 'var(--font-playful)',
            }}
          >
            FAQ
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400,
              letterSpacing: '-2px',
              color: '#2D2D2D',
              lineHeight: 1.05,
              marginBottom: '64px',
            }}
          >
            Questions{' '}
            <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>answered.</em>
          </h2>

          <div>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    borderTop: '1px solid rgba(0,0,0,0.1)',
                    borderBottom:
                      i === faqs.length - 1
                        ? '1px solid rgba(0,0,0,0.1)'
                        : 'none',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq((prev) => (prev === i ? null : i))}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '24px',
                      padding: '28px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '17px',
                        fontWeight: 600,
                        color: isOpen ? 'rgb(120,181,57)' : '#2D2D2D',
                        lineHeight: 1.4,
                        transition: 'color 0.2s',
                        fontFamily: 'var(--font-playful)',
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        flexShrink: 0,
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: '1px solid rgba(0,0,0,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isOpen ? 'rgb(120,181,57)' : '#4A4A4A',
                        transition: 'all 0.2s',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M7 1v12M1 7h12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <p
                      style={{
                        fontSize: '15px',
                        lineHeight: 1.75,
                        color: '#4A4A4A',
                        paddingBottom: '28px',
                        maxWidth: '680px',
                        fontFamily: 'var(--font-playful)',
                      }}
                    >
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section style={{ background: '#0D0E10', padding: '80px 60px' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 400,
                color: '#ffffff',
                letterSpacing: '-1px',
                marginBottom: '8px',
              }}
            >
              Ready to get{' '}
              <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>published?</em>
            </h3>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.6,
                fontFamily: 'var(--font-playful)',
              }}
            >
              Start your journey today. We&rsquo;ll help you every step of the way.
            </p>
          </div>
          <Link
            href="/#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgb(120,181,57)',
              color: 'white',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              flexShrink: 0,
              fontFamily: 'var(--font-playful)',
            }}
          >
            Get in touch
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </>
  );
}
