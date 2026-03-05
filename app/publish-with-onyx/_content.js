'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';

const learnCards = [
  {
    icon: '',
    title: 'Build Your Book',
    desc: 'From idea to manuscript — structure your story, develop your characters, and write with purpose and clarity.',
  },
  {
    icon: '',
    title: 'Design & Format',
    desc: 'Create a professional layout. Learn typography, cover design principles, and how to produce print-ready files.',
  },
  {
    icon: '',
    title: 'Publish to Amazon KDP',
    desc: 'Step-by-step walkthrough of uploading, categorising, and pricing your book on Kindle Direct Publishing.',
  },
  {
    icon: '',
    title: 'Build Your Brand',
    desc: 'Turn your book into a brand. Social presence, author identity, website setup, and content strategy.',
  },
  {
    icon: '',
    title: 'Find Funding',
    desc: 'Discover grants, arts council funding, and community support schemes to fund your publishing journey.',
  },
  {
    icon: '',
    title: 'Launch & Grow',
    desc: 'A proven launch framework — from pre-launch buzz to book release day and beyond. Build a readership.',
  },
];

const modules = [
  {
    num: '01',
    title: 'Building Your Book',
    sub: 'Writing, editing, and preparing for publishing',
    lessons: [
      'Finding and developing your story idea',
      'Structuring a children\'s book manuscript',
      'Writing for your target age group',
      'Working with an editor or self-editing',
      'Preparing your manuscript for design',
      'Illustration briefs and working with artists',
    ],
  },
  {
    num: '02',
    title: 'Publishing on Amazon KDP',
    sub: 'From file to live listing',
    lessons: [
      'Setting up your KDP account',
      'Interior formatting for print and eBook',
      'Cover design specifications',
      'ISBN, copyright, and legal basics',
      'Choosing categories and keywords',
      'Going live and managing your listing',
    ],
  },
  {
    num: '03',
    title: 'Turning Your Book into a Brand',
    sub: 'Beyond the book — building a lasting platform',
    lessons: [
      'Defining your author brand identity',
      'Building an author website',
      'Social media strategy for authors',
      'Pitching to schools and libraries',
      'Media coverage and PR basics',
      'Building a loyal community around your work',
    ],
  },
];

const steps = [
  { num: '01', title: 'Build', desc: 'Write and develop your story from the ground up with guided modules and templates.' },
  { num: '02', title: 'Design', desc: 'Format your interior and cover to professional publishing standards.' },
  { num: '03', title: 'Publish', desc: 'Go live on Amazon KDP with a fully polished, market-ready book.' },
  { num: '04', title: 'Brand', desc: 'Build the platform, audience, and presence that turns a book into a movement.' },
];

const studentTestimonials = [
  {
    quote: '"I went from having an idea in my head to a live Amazon listing in 8 weeks. This course genuinely changed my life."',
    name: 'Keisha M.',
    role: 'Published author, first book',
    emoji: '',
  },
  {
    quote: '"Onyx made self-publishing feel achievable. Every module is practical, no fluff — just exactly what you need to do."',
    name: 'Tobi A.',
    role: 'Children\'s book author',
    emoji: '',
  },
  {
    quote: '"I had no idea about Amazon KDP before this course. Now I have two books live and a school workshop programme running."',
    name: 'Diane F.',
    role: 'Author & educator',
    emoji: '',
  },
];

export default function PublishWithOnyxContent() {
  return (
    <>
      {/* GRAIN */}
      <div className="grain-overlay" />

      {/* FLOATING LOGO */}
      <a href="/" className="floating-logo">
        <img src="/logo.svg" alt="The Fresh Friends" />
      </a>

      {/* NAVBAR */}
      <Navbar activePage="How it works" />

      {/* HERO */}
      <section
        style={{
          background: 'var(--dark-bg)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '140px 40px 100px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(23,115,176,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: '#1773b0', marginBottom: '28px' }}>
            Publish with Onyx
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(48px, 8vw, 96px)',
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: '-3px',
              color: 'var(--white)',
              marginBottom: '24px',
            }}
          >
            The Self-Publishing{' '}
            <em style={{ fontStyle: 'italic', color: '#1773b0' }}>Blueprint.</em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontStyle: 'italic',
              color: 'var(--text-light)',
              marginBottom: '20px',
              fontWeight: 400,
            }}
          >
            Turn Your Book Into a Brand
          </p>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--text-light)', maxWidth: '540px', margin: '0 auto 48px' }}>
            A complete online course teaching aspiring authors how to write, design, publish, and build a brand around their children's book — from scratch.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a
              href="#enrol"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#1773b0',
                color: 'white',
                padding: '16px 36px',
                borderRadius: '100px',
                fontSize: '16px',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Enrol Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#programme"
              style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ▶
              </span>
              Watch the intro
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section style={{ background: 'var(--hero-bg)', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            The Curriculum
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-2px',
              color: 'var(--text-primary)',
              marginBottom: '64px',
              maxWidth: '640px',
            }}
          >
            What you'll <em style={{ fontStyle: 'italic' }}>learn.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {learnCards.map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
                }}
              >
                <div style={{ width: 40, height: 3, background: '#1773b0', borderRadius: 2 }} />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>{card.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROGRAMME */}
      <section id="programme" style={{ background: 'var(--dark-bg)', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '16px' }}>
            Course Structure
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: '-2px',
              color: 'var(--white)',
              marginBottom: '64px',
            }}
          >
            The <em style={{ fontStyle: 'italic', color: '#1773b0' }}>Programme.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {modules.map((mod) => (
              <div
                key={mod.num}
                style={{
                  background: 'var(--dark-card-bg)',
                  borderRadius: '20px',
                  padding: '44px 48px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                  alignItems: 'start',
                }}
              >
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#1773b0', marginBottom: '12px' }}>
                    Module {mod.num}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(28px, 3vw, 42px)',
                      fontWeight: 700,
                      color: 'var(--white)',
                      letterSpacing: '-1px',
                      lineHeight: 1.1,
                      marginBottom: '12px',
                    }}
                  >
                    {mod.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-light)', fontStyle: 'italic' }}>{mod.sub}</p>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {mod.lessons.map((lesson) => (
                    <li key={lesson} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'var(--text-light)', lineHeight: 1.5 }}>
                      <span
                        style={{
                          flexShrink: 0,
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: 'rgba(23,115,176,0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: '1px',
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="#1773b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* YOUR JOURNEY — STEPPER */}
      <section style={{ background: 'var(--hero-bg)', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            The Process
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-2px',
              color: 'var(--text-primary)',
              marginBottom: '64px',
            }}
          >
            Your <em style={{ fontStyle: 'italic' }}>Journey.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '28px',
                left: 'calc(12.5% + 16px)',
                right: 'calc(12.5% + 16px)',
                height: '1px',
                background: 'rgba(0,0,0,0.1)',
                zIndex: 0,
              }}
            />
            {steps.map((step) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#1773b0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '15px',
                    letterSpacing: '1px',
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>{step.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '16px' }}>
              Is this for me?
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 700,
                letterSpacing: '-2px',
                color: 'var(--white)',
                marginBottom: '24px',
                lineHeight: 1.05,
              }}
            >
              This course is <em style={{ fontStyle: 'italic', color: '#1773b0' }}>for you</em> if...
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-light)' }}>
              You have a story to tell — and you're ready to stop waiting for permission and start publishing on your own terms.
            </p>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '60px' }}>
            {[
              "You're an aspiring author with an idea for a children's book",
              "You're an educator or teacher who wants to create classroom resources",
              "You're a community builder using storytelling as a tool for change",
              "You're an entrepreneur turning your brand into a book",
              "You're a parent with a story you want to share with your child — and others",
              "You've started a book before but got stuck and need a clear system",
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', fontSize: '16px', color: 'var(--text-light)', lineHeight: 1.55 }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(23,115,176,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '2px',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#1773b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MEET ONYX */}
      <section style={{ background: 'var(--hero-bg)', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(23,115,176,0.12) 0%, rgba(23,115,176,0.04) 100%)',
                border: '2px solid rgba(23,115,176,0.2)',
              }}
            />
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              Your Instructor
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 700,
                letterSpacing: '-2px',
                color: 'var(--text-primary)',
                marginBottom: '8px',
                lineHeight: 1.05,
              }}
            >
              Meet <em style={{ fontStyle: 'italic', color: '#1773b0' }}>Onyx.</em>
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Founder of The Fresh Friends, author & self-publishing educator
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Onyx created The Fresh Friends series from scratch — no publishing deal, no agent, no prior experience. Starting with a single idea about a brave little strawberry, the series has grown into a beloved brand with multiple books, school workshops, and a community of young readers across the UK.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
              Now Onyx is sharing everything — the exact system used to go from blank page to bestselling children's book, and from author to brand builder — so you can do the same.
            </p>
          </div>
        </div>
      </section>

      {/* STUDENT TESTIMONIALS */}
      <section style={{ background: 'var(--dark-bg)', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-2px',
              color: 'var(--white)',
              marginBottom: '64px',
            }}
          >
            From our <em style={{ fontStyle: 'italic', color: '#1773b0' }}>students.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {studentTestimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: 'var(--dark-card-bg)',
                  borderRadius: '20px',
                  padding: '40px 36px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '32px',
                }}
              >
                <p style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--text-light)' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#1773b0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'white',
                      flexShrink: 0,
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>{t.name}</strong>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / ENROL */}
      <section id="enrol" style={{ background: 'var(--hero-bg)', padding: '100px 40px 120px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Pricing
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-2px',
              color: 'var(--text-primary)',
              marginBottom: '48px',
            }}
          >
            Ready to <em style={{ fontStyle: 'italic' }}>publish?</em>
          </h2>
          <div
            style={{
              background: 'white',
              borderRadius: '24px',
              padding: '56px 48px',
              boxShadow: '0 8px 48px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(23,115,176,0.08)',
                borderRadius: '100px',
                padding: '8px 20px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '1px',
                color: '#1773b0',
                textTransform: 'uppercase',
              }}
            >
              Full Access — One Payment
            </div>
            <div>
              <p style={{ fontSize: '56px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-3px', lineHeight: 1 }}>TBC</p>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '8px' }}>Pricing announced at launch</p>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', textAlign: 'left' }}>
              {[
                '3 comprehensive modules (15+ lessons)',
                'Downloadable workbooks and templates',
                'Canva design templates',
                'Lifetime access',
                'Private community access',
                'Direct Q&A with Onyx',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                  <span
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(23,115,176,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#1773b0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#enrol"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#1773b0',
                color: 'white',
                padding: '18px 40px',
                borderRadius: '100px',
                fontSize: '16px',
                fontWeight: 700,
                textDecoration: 'none',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              Join the Waitlist
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Be the first to know when we launch. No commitment required.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
                <a href="https://facebook.com/thefreshfriends" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="https://tiktok.com/@thefreshfriends" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
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
                <li><Link href="/login">Author Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 The Fresh Friends. Made with <span>&#9829;</span> in London.</p>
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
