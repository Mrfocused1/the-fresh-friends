'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const learnCards = [
  { icon: '', title: 'Build Your Book', desc: 'From idea to manuscript — structure your story, develop your characters, and write with purpose and clarity.' },
  { icon: '', title: 'Design & Format', desc: 'Create a professional layout. Learn typography, cover design principles, and how to produce print-ready files.' },
  { icon: '', title: 'Publish to Amazon KDP', desc: 'Step-by-step walkthrough of uploading, categorising, and pricing your book on Kindle Direct Publishing.' },
  { icon: '', title: 'Build Your Brand', desc: 'Turn your book into a brand. Social presence, author identity, website setup, and content strategy.' },
  { icon: '', title: 'Find Funding', desc: 'Discover grants, arts council funding, and community support schemes to fund your publishing journey.' },
  { icon: '', title: 'Launch & Grow', desc: 'A proven launch framework — from pre-launch buzz to book release day and beyond. Build a readership.' },
];

const modules = [
  {
    num: '01', title: 'Building Your Book', sub: 'Writing, editing, and preparing for publishing',
    lessons: ["Finding and developing your story idea", "Structuring a children's book manuscript", "Writing for your target age group", "Working with an editor or self-editing", "Preparing your manuscript for design", "Illustration briefs and working with artists"],
  },
  {
    num: '02', title: 'Publishing on Amazon KDP', sub: 'From file to live listing',
    lessons: ["Setting up your KDP account", "Interior formatting for print and eBook", "Cover design specifications", "ISBN, copyright, and legal basics", "Choosing categories and keywords", "Going live and managing your listing"],
  },
  {
    num: '03', title: 'Turning Your Book into a Brand', sub: 'Beyond the book — building a lasting platform',
    lessons: ["Defining your author brand identity", "Building an author website", "Social media strategy for authors", "Pitching to schools and libraries", "Media coverage and PR basics", "Building a loyal community around your work"],
  },
];

const steps = [
  { num: '01', title: 'Build',    desc: 'Write and develop your story from the ground up with guided modules and templates.' },
  { num: '02', title: 'Design',   desc: 'Format your interior and cover to professional publishing standards.' },
  { num: '03', title: 'Publish',  desc: 'Go live on Amazon KDP with a fully polished, market-ready book.' },
  { num: '04', title: 'Brand',    desc: 'Build the platform, audience, and presence that turns a book into a movement.' },
];

const tiers = [
  {
    id: 'single', label: 'Single Book', price: '£250', per: 'per book', badge: null,
    description: 'The perfect starting point. Pick your favourite Fresh Friend and begin the adventure.',
    features: ["One hardback children's book (32 pages)", 'Ages 3–7 recommended', 'Free UK standard delivery', 'Comes with a collectible character card', 'Gift-wrapping available at checkout'],
    cta: 'Order a Book', ctaHref: '#order', style: 'light',
  },
  {
    id: 'collection', label: 'Full Collection', price: '£400', per: 'all 8 books', badge: 'Most Popular',
    description: 'Every character. Every power. Every adventure. The complete Fresh Friends series in one beautiful set.',
    features: ['All 8 hardback books (Strawberry to Coconut)', "Exclusive collector's slipcase box", 'Free UK tracked delivery', 'Signed bookplates from the author', 'Free character poster (A2, full colour)', 'Activity & colouring booklet included', 'Priority dispatch within 48 hours'],
    cta: 'Get the Full Collection', ctaHref: '#order', style: 'featured',
  },
  {
    id: 'school', label: 'School Bundle', price: null, per: 'classroom set', badge: 'Best for Schools',
    description: 'Designed for Reception and KS1 classrooms. Enough books for your whole class, plus resources to bring the stories to life.',
    features: ['30 mixed-title hardback books', "Teacher's curriculum guide (PDF)", 'Classroom character display pack', 'Free delivery to your school', 'Invoice and purchase order accepted', 'Optional in-school storytelling session', 'Dedicated school account manager'],
    cta: 'Request a School Quote', ctaHref: '#schools', style: 'dark',
  },
];

const studentTestimonials = [
  { quote: '"I went from having an idea in my head to a live Amazon listing in 8 weeks. This course genuinely changed my life."', name: 'Keisha M.', role: 'Published author, first book', emoji: '' },
  { quote: '"Onyx made self-publishing feel achievable. Every module is practical, no fluff — just exactly what you need to do."', name: 'Tobi A.', role: "Children's book author", emoji: '' },
  { quote: '"I had no idea about Amazon KDP before this course. Now I have two books live and a school workshop programme running."', name: 'Diane F.', role: 'Author & educator', emoji: '' },
];

export default function PublishWithOnyxContent() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <div className="grain-overlay" />
      <a href="/" className="floating-logo"><img src="/logo.svg" alt="The Fresh Friends" /></a>
      <Navbar activePage="How it works" />

      {/* HERO */}
      <section
        className="pow-hero"
        style={{ background: 'rgb(0,113,77)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(23,115,176,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '780px', width: '100%' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgb(120,181,57)', marginBottom: '28px' }}>Publish with Onyx</p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 8vw, 96px)', fontWeight: 700, lineHeight: 1.0, letterSpacing: '-3px', color: 'var(--white)', marginBottom: '24px' }}>
            The Self-Publishing{' '}<em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>Blueprint.</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 3vw, 32px)', fontStyle: 'italic', color: 'white', marginBottom: '20px', fontWeight: 400 }}>Turn Your Book Into a Brand</p>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'white', maxWidth: '540px', margin: '0 auto 48px' }}>
            A complete online course teaching aspiring authors how to write, design, publish, and build a brand around their children's book — from scratch.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#enrol" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgb(120,181,57)', color: 'white', padding: '16px 36px', borderRadius: '100px', fontSize: '16px', fontWeight: 700, textDecoration: 'none' }}>
              Enrol Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#programme" style={{ fontSize: '15px', fontWeight: 500, color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>▶</span>
              Watch the intro
            </a>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="pow-section" style={{ background: 'var(--hero-bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px' }}>The Curriculum</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px', color: 'var(--text-primary)', marginBottom: '64px', maxWidth: '640px' }}>
            What you'll <em style={{ fontStyle: 'italic' }}>learn.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {learnCards.map((card) => (
              <div key={card.title} style={{ background: 'white', borderRadius: '20px', padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
                <div style={{ width: 40, height: 3, background: 'rgb(120,181,57)', borderRadius: 2 }} />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>{card.title}</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--text-secondary)' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROGRAMME */}
      <section id="programme" className="pow-section" style={{ background: 'rgb(0,113,77)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'white', marginBottom: '16px' }}>Course Structure</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-2px', color: 'var(--white)', marginBottom: '64px' }}>
            The <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>Programme.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {modules.map((mod) => (
              <div key={mod.num} className="pow-module-card" style={{ background: 'rgb(0,80,54)', borderRadius: '20px' }}>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgb(120,181,57)', marginBottom: '12px' }}>Module {mod.num}</p>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 700, color: 'var(--white)', letterSpacing: '-1px', lineHeight: 1.1, marginBottom: '12px' }}>{mod.title}</h3>
                  <p style={{ fontSize: '15px', color: 'white', fontStyle: 'italic' }}>{mod.sub}</p>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {mod.lessons.map((lesson) => (
                    <li key={lesson} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: 'white', lineHeight: 1.5 }}>
                      <span style={{ flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(23,115,176,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="rgb(120,181,57)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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

      {/* YOUR JOURNEY */}
      <section className="pow-section" style={{ background: 'var(--hero-bg)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px' }}>The Process</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, letterSpacing: '-2px', color: 'var(--text-primary)', marginBottom: '64px' }}>
            Your <em style={{ fontStyle: 'italic' }}>Journey.</em>
          </h2>
          <div className="pow-journey-grid" style={{ position: 'relative' }}>
            <div className="pow-journey-line" />
            {steps.map((step) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgb(120,181,57)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '15px', letterSpacing: '1px' }}>
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
      <section className="pow-section" style={{ background: 'rgb(0,113,77)' }}>
        <div className="pow-two-col" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'white', marginBottom: '16px' }}>Is this for me?</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, letterSpacing: '-2px', color: 'var(--white)', marginBottom: '24px', lineHeight: 1.05 }}>
              This course is <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>for you</em> if...
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'white' }}>You have a story to tell — and you're ready to stop waiting for permission and start publishing on your own terms.</p>
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              "You're an aspiring author with an idea for a children's book",
              "You're an educator or teacher who wants to create classroom resources",
              "You're a community builder using storytelling as a tool for change",
              "You're an entrepreneur turning your brand into a book",
              "You're a parent with a story you want to share with your child — and others",
              "You've started a book before but got stuck and need a clear system",
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', fontSize: '16px', color: 'white', lineHeight: 1.55 }}>
                <span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(23,115,176,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="rgb(120,181,57)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MEET ONYX */}
      <section className="pow-section" style={{ background: 'var(--hero-bg)' }}>
        <div className="pow-two-col pow-meet-onyx" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="pow-avatar-col" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '320px', height: '320px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(23,115,176,0.12) 0%, rgba(23,115,176,0.04) 100%)', border: '2px solid rgba(23,115,176,0.2)' }} />
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '16px' }}>Your Instructor</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, letterSpacing: '-2px', color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.05 }}>
              Meet <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>Onyx.</em>
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '24px' }}>Founder of The Fresh Friends, author & self-publishing educator</p>
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
      <section className="pow-section" style={{ background: 'rgb(0,113,77)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, letterSpacing: '-2px', color: 'var(--white)', marginBottom: '64px' }}>
            From our <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>students.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {studentTestimonials.map((t) => (
              <div key={t.name} style={{ background: 'rgb(0,80,54)', borderRadius: '20px', padding: '40px 36px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '32px' }}>
                <p style={{ fontSize: '17px', lineHeight: 1.65, color: 'white' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgb(120,181,57)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, color: 'white', flexShrink: 0 }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>{t.name}</strong>
                    <span style={{ fontSize: '13px', color: 'white' }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section
        id="enrol"
        className="pricing-tiers"
        style={{ background: 'rgb(0,113,77)', padding: '100px 40px 120px' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p style={{ fontSize: '11px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: 'white', marginBottom: '16px' }}>Pricing</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 400, letterSpacing: '-2px', color: 'var(--white)', lineHeight: 1.05 }}>
              Find the right <em style={{ fontStyle: 'italic', color: 'rgb(120,181,57)' }}>plan.</em>
            </h2>
          </div>

          <div id="order" className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'stretch' }}>
            {tiers.map((tier) => {
              const isFeatured = tier.style === 'featured';
              return (
                <div
                  key={tier.id}
                  className={isFeatured ? 'pricing-featured' : ''}
                  style={{ background: isFeatured ? 'rgb(0,65,43)' : 'rgb(0,80,54)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0', padding: '40px 36px 44px', display: 'flex', flexDirection: 'column', boxShadow: isFeatured ? '0 8px 64px rgba(0,0,0,0.4)' : '0 4px 32px rgba(0,0,0,0.3)', transform: isFeatured ? 'scale(1.03)' : 'scale(1)' }}
                >
                  {tier.badge && (
                    <div style={{ alignSelf: 'flex-start', background: 'rgba(255,255,255,0.15)', borderRadius: '100px', padding: '6px 16px', fontSize: '11px', fontWeight: 400, letterSpacing: '1px', color: 'white', textTransform: 'uppercase', marginBottom: '20px' }}>
                      {tier.badge}
                    </div>
                  )}
                  <p style={{ fontSize: '11px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: 'white', marginBottom: '16px' }}>{tier.label}</p>
                  {tier.price ? (
                    <>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ fontFamily: 'var(--font-main)', fontSize: '52px', fontWeight: 800, color: 'white', letterSpacing: '-2px', lineHeight: 1 }}>{tier.price}</span>
                      </div>
                      <p style={{ fontSize: '13px', color: 'white', marginBottom: '20px' }}>{tier.per}</p>
                    </>
                  ) : (
                    <p style={{ fontSize: '18px', fontWeight: 400, color: 'white', marginBottom: '20px' }}>Contact us for a quote</p>
                  )}
                  <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'white', marginBottom: '28px' }}>{tier.description}</p>
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.20)', marginBottom: '28px' }} />
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px', flex: 1 }}>
                    {tier.features.map((feature) => (
                      <li key={feature} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'white', lineHeight: 1.55 }}>
                        <span style={{ flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href={tier.ctaHref} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: 'rgba(255,255,255,0.15)', color: 'white', padding: '16px 28px', borderRadius: '100px', fontSize: '15px', fontWeight: 400, textDecoration: 'none' }}>
                    {tier.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                </div>
              );
            })}
          </div>

          <p style={{ textAlign: 'center', fontSize: '13px', color: 'white', marginTop: '40px' }}>
            All prices include VAT · Secure checkout · 30-day returns on all orders
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
