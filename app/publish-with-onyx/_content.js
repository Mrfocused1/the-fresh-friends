'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/* ============================================================
   DATA
   ============================================================ */
const stages = [
  { num: '01', title: 'Write', desc: 'Develop your idea, build your outline, write your first draft.' },
  { num: '02', title: 'Edit', desc: 'Structural and line editing, working with feedback, manuscript prep.' },
  { num: '03', title: 'Publish', desc: 'Cover design, interior formatting, uploading to KDP & distribution.' },
  { num: '04', title: 'Grow', desc: 'Launch strategy, Amazon ranking, building your author brand.' },
];

const modules = [
  {
    num: '01',
    title: 'Finding Your Idea',
    lessons: ['Identifying your core concept', 'Defining your target audience', 'Conducting market research', 'Validating your book idea'],
  },
  {
    num: '02',
    title: 'Building Your Outline',
    lessons: ['Designing chapter structure', 'Mapping the reader journey', 'Content mapping & flow', 'Creating your book blueprint'],
  },
  {
    num: '03',
    title: 'Writing Your First Draft',
    lessons: ['The skeleton method', 'Building daily writing habits', 'Maintaining momentum', 'Overcoming writer\u2019s block'],
  },
  {
    num: '04',
    title: 'Editing & Refinement',
    lessons: ['Self-editing techniques', 'Structural review process', 'Professional polish standards', 'Working with beta readers'],
  },
  {
    num: '05',
    title: 'Cover & Formatting',
    lessons: ['Cover design principles', 'KDP specifications & specs', 'Print-ready file preparation', 'Interior layout best practices'],
  },
  {
    num: '06',
    title: 'Publishing & Launch',
    lessons: ['Going live on Amazon', 'Pricing strategy', 'Launch day execution', 'Post-launch growth tactics'],
  },
];

const bulletPoints = [
  'You have a book idea but don\u2019t know where to start',
  'You\u2019ve been meaning to write your book for years',
  'You want to publish professionally without waiting for a deal',
  'You\u2019re a coach, consultant, or expert wanting to establish authority',
  'You\u2019ve started and abandoned a manuscript before',
  'You\u2019re ready to invest seriously in becoming a published author',
];

const features = [
  { label: '6 structured modules with video lessons', icon: 'M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5V5.5A2.5 2.5 0 016.5 3H20v14' },
  { label: 'Editorial templates & writing worksheets', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { label: '1-to-1 mentorship sessions (Mentorship tier)', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Manuscript review & feedback', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
  { label: 'Private author community', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  { label: 'Lifetime access + all future updates', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
];

const testimonials = [
  {
    quote: 'I went from blank page to live on Amazon in under 3 months. The structure Onyx gives you is genuinely world-class.',
    name: 'Rachel M.',
    role: 'Published Author',
  },
  {
    quote: 'Every module answered a question I didn\u2019t even know I had yet. I published my first book at 52.',
    name: 'Colin T.',
    role: 'First-Time Author',
  },
  {
    quote: 'The launch strategy alone made my book a category bestseller on day one.',
    name: 'Amara K.',
    role: 'Business Author',
  },
];

/* ============================================================
   PAGE
   ============================================================ */
export default function PublishWithOnyxContent() {
  return (
    <>
      <Navbar activePage="How it works" />

      {/* ── HERO ── */}
      <section
        style={{
          background: '#0D0E10',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '130px',
          paddingBottom: '100px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 55% 45% at 50% 55%, rgba(120,181,57,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px', width: '100%', padding: '0 40px' }}>
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
            How it works
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(40px, 7vw, 88px)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-3px',
              color: '#ffffff',
              marginBottom: '24px',
            }}
          >
            The Blueprint for{' '}
            <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>publishing your book.</em>
          </h1>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '560px',
              margin: '0 auto 48px',
              fontFamily: 'var(--font-playful)',
            }}
          >
            A structured, step-by-step programme for aspiring authors. From first idea to published book &mdash; without an agent, a deal, or years of waiting.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
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
                fontFamily: 'var(--font-playful)',
              }}
            >
              Start Your Journey
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/pricing"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: 'var(--font-playful)',
              }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE 4 STAGES ── */}
      <section
        className="pow-section-pad"
        style={{
          background: '#E8E1DC',
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            The Process
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400,
              letterSpacing: '-2px',
              color: '#2D2D2D',
              marginBottom: '64px',
              lineHeight: 1.05,
            }}
          >
            Four stages to a{' '}
            <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>published book.</em>
          </h2>

          <div className="pow-journey-grid">
            {stages.map((step) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgb(120,181,57)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '15px',
                    letterSpacing: '1px',
                    fontFamily: 'var(--font-playful)',
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '24px',
                    fontWeight: 400,
                    color: '#2D2D2D',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: '#4A4A4A',
                    fontFamily: 'var(--font-playful)',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE CURRICULUM ── */}
      <section className="pow-section-pad" style={{ background: '#0D0E10' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
            The Curriculum
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400,
              letterSpacing: '-2px',
              color: '#ffffff',
              marginBottom: '64px',
              lineHeight: 1.05,
            }}
          >
            Six modules to{' '}
            <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>master.</em>
          </h2>

          <div className="pow-modules-grid">
            {modules.map((mod) => (
              <div
                key={mod.num}
                style={{
                  background: '#161618',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '16px',
                  padding: '40px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <p
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    color: 'rgb(120,181,57)',
                    fontFamily: 'var(--font-playful)',
                  }}
                >
                  Module {mod.num}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '24px',
                    fontWeight: 400,
                    color: '#ffffff',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {mod.title}
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {mod.lessons.map((lesson) => (
                    <li
                      key={lesson}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        fontSize: '14px',
                        color: 'rgba(255,255,255,0.75)',
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
                          background: 'rgba(120,181,57,0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="rgb(120,181,57)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section
        className="pow-section-pad"
        style={{
          background: '#E8E1DC',
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            alignItems: 'center',
          }}
          className="pow-two-col"
        >
          <div>
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
              Is this for me?
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 400,
                letterSpacing: '-2px',
                color: '#2D2D2D',
                marginBottom: '24px',
                lineHeight: 1.05,
              }}
            >
              This is for{' '}
              <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>you</em> if...
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#4A4A4A',
                fontFamily: 'var(--font-playful)',
              }}
            >
              You have a message worth sharing &mdash; and you&rsquo;re ready to stop waiting for permission and start publishing on your own terms.
            </p>
          </div>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {bulletPoints.map((item) => (
              <li
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  fontSize: '16px',
                  color: '#2D2D2D',
                  lineHeight: 1.55,
                  fontFamily: 'var(--font-playful)',
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(120,181,57,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="rgb(120,181,57)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section className="pow-section-pad" style={{ background: '#0D0E10' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
              What&rsquo;s included
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
              Everything you{' '}
              <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>need.</em>
            </h2>
          </div>

          <div className="pow-features-grid">
            {features.map((feature) => (
              <div
                key={feature.label}
                style={{
                  background: '#161618',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '16px',
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(120,181,57,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(120,181,57)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={feature.icon} />
                  </svg>
                </div>
                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: 1.5,
                    fontFamily: 'var(--font-playful)',
                  }}
                >
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="pow-section-pad"
        style={{
          background: '#E8E1DC',
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
              Testimonials
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 400,
                letterSpacing: '-2px',
                color: '#2D2D2D',
                lineHeight: 1.05,
              }}
            >
              From our{' '}
              <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>authors.</em>
            </h2>
          </div>

          <div className="pow-testimonials-grid">
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: '#0D0E10',
                  borderRadius: '16px',
                  padding: '40px 36px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '32px',
                }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="rgb(120,181,57)" stroke="none">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.65,
                    color: 'rgba(255,255,255,0.85)',
                    fontFamily: 'var(--font-playful)',
                    flex: 1,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'rgb(120,181,57)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: 'white',
                      flexShrink: 0,
                      fontFamily: 'var(--font-playful)',
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong
                      style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#ffffff',
                        fontFamily: 'var(--font-playful)',
                      }}
                    >
                      {t.name}
                    </strong>
                    <span
                      style={{
                        fontSize: '13px',
                        color: 'rgba(255,255,255,0.5)',
                        fontFamily: 'var(--font-playful)',
                      }}
                    >
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="pow-section-pad" style={{ background: '#0D0E10' }}>
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '24px',
              fontFamily: 'var(--font-playful)',
            }}
          >
            Get started
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 400,
              letterSpacing: '-2px',
              color: '#ffffff',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
          >
            Ready to write your{' '}
            <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>book?</em>
          </h2>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '520px',
              margin: '0 auto 48px',
              fontFamily: 'var(--font-playful)',
            }}
          >
            Join hundreds of aspiring authors who have turned their ideas into published books with Onyx Publishing.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/pricing"
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
              View Pricing
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: 'var(--font-playful)',
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </>
  );
}
