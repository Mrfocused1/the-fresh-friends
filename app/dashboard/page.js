'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

/* ── COURSE DATA ─────────────────────────────────────────────── */
const COURSE = [
  {
    id: 'welcome',
    phase: 'Welcome',
    title: 'Meet Onyx + What\'s Possible',
    emoji: '',
    lessons: [
      { id: 'w1', title: 'Welcome — Meet Onyx', duration: '4:12', done: true },
      { id: 'w2', title: 'My Self-Publishing Journey', duration: '8:34', done: true },
      { id: 'w3', title: 'Why Self-Publishing Gives You Ownership', duration: '6:20', done: true },
      { id: 'w4', title: 'What You\'ll Achieve in This Course', duration: '5:10', done: false },
      { id: 'w5', title: 'Tools & Mindset — What You Need to Start', duration: '7:45', done: false },
    ],
  },
  {
    id: 'phase1',
    phase: 'Phase 1',
    title: 'Build Your Book',
    emoji: '',
    lessons: [
      { id: 'p1-1', title: 'Finding Your Idea & Purpose', duration: '12:30', done: false },
      { id: 'p1-2', title: 'Choosing Your Genre & Audience', duration: '9:15', done: false },
      { id: 'p1-3', title: 'Turning Your Idea into a Strong Concept', duration: '11:00', done: false },
      { id: 'p1-4', title: 'Creating a Book with Purpose', duration: '10:20', done: false },
      { id: 'p1-5', title: 'Planning a Series vs Standalone Book', duration: '8:45', done: false },
      { id: 'p1-6', title: 'Structuring Your Manuscript', duration: '13:10', done: false },
      { id: 'p1-7', title: 'Story vs Educational Structure', duration: '9:55', done: false },
      { id: 'p1-8', title: 'Writing Consistently & Avoiding Beginner Mistakes', duration: '11:30', done: false },
      { id: 'p1-9', title: 'Self-Editing Checklist', duration: '14:00', done: false },
      { id: 'p1-10', title: 'Working with Beta Readers', duration: '7:20', done: false },
      { id: 'p1-11', title: 'Final Manuscript Polish', duration: '8:00', done: false },
    ],
  },
  {
    id: 'phase2',
    phase: 'Phase 2',
    title: 'Design Your Book in Canva',
    emoji: '',
    lessons: [
      { id: 'p2-1', title: 'Setting Correct Book Sizes (KDP Trim Sizes)', duration: '10:15', done: false },
      { id: 'p2-2', title: 'Margins, Bleed & Layout Explained Simply', duration: '12:40', done: false },
      { id: 'p2-3', title: 'Page Numbers, Headers & Interior Flow', duration: '9:30', done: false },
      { id: 'p2-4', title: 'Formatting a Children\'s Book in Canva', duration: '15:20', done: false },
      { id: 'p2-5', title: 'Formatting Educational Books & Workbooks', duration: '13:00', done: false },
      { id: 'p2-6', title: 'Exporting Correctly for Amazon', duration: '8:10', done: false },
      { id: 'p2-7', title: 'Creating a Professional Front Cover', duration: '16:45', done: false },
      { id: 'p2-8', title: 'Spine Setup & Back Cover Layout', duration: '11:20', done: false },
      { id: 'p2-9', title: 'Barcode Placement & Print-Ready Files', duration: '9:00', done: false },
      { id: 'p2-10', title: 'PDF Settings & Resolution Checks', duration: '7:50', done: false },
    ],
  },
  {
    id: 'phase3',
    phase: 'Phase 3',
    title: 'Publish on Amazon KDP',
    emoji: '',
    lessons: [
      { id: 'p3-1', title: 'Creating Your KDP Account', duration: '8:30', done: false },
      { id: 'p3-2', title: 'Tax Information & Setup', duration: '6:15', done: false },
      { id: 'p3-3', title: 'Understanding ISBNs & Copyright Basics', duration: '10:00', done: false },
      { id: 'p3-4', title: 'Uploading Your Book Step-by-Step', duration: '18:20', done: false },
      { id: 'p3-5', title: 'Keywords & Categories — This is Critical', duration: '14:10', done: false },
      { id: 'p3-6', title: 'Pricing Strategy & Royalty Options', duration: '11:30', done: false },
      { id: 'p3-7', title: '60% vs 70% Royalties Explained', duration: '9:45', done: false },
      { id: 'p3-8', title: 'How to Price for Profit', duration: '8:20', done: false },
      { id: 'p3-9', title: 'Ordering Author Copies', duration: '5:40', done: false },
    ],
  },
  {
    id: 'phase4',
    phase: 'Phase 4',
    title: 'Position for Impact',
    emoji: '',
    lessons: [
      { id: 'p4-1', title: 'Turning Your Book into a Brand', duration: '13:00', done: false },
      { id: 'p4-2', title: 'Creating Book Bundles & Workshops', duration: '10:30', done: false },
      { id: 'p4-3', title: 'Using Your Book as Authority', duration: '9:15', done: false },
      { id: 'p4-4', title: 'Building Community Around Your Message', duration: '11:45', done: false },
      { id: 'p4-5', title: 'Your Simple Launch Plan', duration: '12:20', done: false },
      { id: 'p4-6', title: 'Using Instagram + Email to Launch', duration: '14:00', done: false },
      { id: 'p4-7', title: 'Collecting Reviews & Your First 30 Days', duration: '10:10', done: false },
    ],
  },
  {
    id: 'phase5',
    phase: 'Phase 5',
    title: 'Fund Your Vision',
    emoji: '',
    lessons: [
      { id: 'p5-1', title: 'Creating a Mission-Led Book', duration: '10:00', done: false },
      { id: 'p5-2', title: 'Defining Your Community Benefit', duration: '8:30', done: false },
      { id: 'p5-3', title: 'Sole Trader vs CIC vs Charity (UK)', duration: '12:15', done: false },
      { id: 'p5-4', title: 'Registering Your Organisation', duration: '9:45', done: false },
      { id: 'p5-5', title: 'Protecting Your Intellectual Property', duration: '8:00', done: false },
      { id: 'p5-6', title: 'Grants for Educational Books', duration: '11:20', done: false },
      { id: 'p5-7', title: 'Corporate Sponsorship & Local Council Funding', duration: '13:00', done: false },
      { id: 'p5-8', title: 'Schools & Community Partnerships', duration: '9:10', done: false },
      { id: 'p5-9', title: 'Creating a Simple Pitch Deck', duration: '15:30', done: false },
      { id: 'p5-10', title: 'Writing a Winning Funding Application', duration: '14:45', done: false },
    ],
  },
  {
    id: 'bonus',
    phase: 'Bonus',
    title: 'Templates & Resources',
    emoji: '',
    lessons: [
      { id: 'b1', title: 'Workbook Templates — Download & Use', duration: 'Resource', done: false },
      { id: 'b2', title: 'Canva Interior Templates Pack', duration: 'Resource', done: false },
      { id: 'b3', title: 'Funding Application Template', duration: 'Resource', done: false },
      { id: 'b4', title: 'Self-Edit Checklist PDF', duration: 'Resource', done: false },
      { id: 'b5', title: 'KDP Upload Checklist', duration: 'Resource', done: false },
      { id: 'b6', title: 'Book Launch Checklist', duration: 'Resource', done: false },
    ],
  },
];

const LESSON_DESCRIPTIONS = {
  w1: 'Welcome to Publish with Onyx. In this lesson you\'ll meet your instructor and get an overview of everything this course covers — from writing your first word to holding your published book in your hands.',
  w2: 'Hear the real story behind The Fresh Friends series. From the first spark of an idea to Sainsbury\'s partnership, this is the journey that proves self-publishing can change your life.',
  w3: 'Understand why self-publishing is the most powerful route for independent creators. You own your ISBN, your royalties, your story — forever.',
  w4: 'A clear walkthrough of exactly what you\'ll have by the end of this course: a published book, a brand strategy, and the confidence to scale it.',
  w5: 'The tools are simpler than you think. Canva, Amazon KDP, and the right mindset. This lesson sets you up before you start writing a single word.',
};

const PHASE_COLORS = {
  welcome: '#1773b0',
  phase1:  '#e8365d',
  phase2:  '#f5c518',
  phase3:  '#27ae60',
  phase4:  '#f39c12',
  phase5:  '#8e44ad',
  bonus:   '#1773b0',
};

/* ── HELPERS ─────────────────────────────────────────────────── */
function getAllLessons() {
  return COURSE.flatMap(m => m.lessons);
}

function getNextLesson(completedIds) {
  const all = getAllLessons();
  return all.find(l => !completedIds.has(l.id)) || null;
}

/* ── COMPONENTS ──────────────────────────────────────────────── */

function ProgressRing({ pct, size = 36, color = '#1773b0' }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="3" />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="3"
        strokeDasharray={circ} strokeDashoffset={circ * (1 - pct/100)}
        strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
    </svg>
  );
}

function Sidebar({ modules, completedIds, activeLesson, onSelect, collapsed, setCollapsed }) {
  const [expanded, setExpanded] = useState({ welcome: true });

  const totalLessons = getAllLessons().length;
  const totalDone = completedIds.size;
  const overallPct = Math.round((totalDone / totalLessons) * 100);

  return (
    <aside style={{
      width: collapsed ? 60 : 280,
      minWidth: collapsed ? 60 : 280,
      background: '#FFFFFF',
      height: '100vh',
      position: 'sticky',
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid rgba(0,0,0,0.07)',
      transition: 'width 0.25s ease, min-width 0.25s ease',
      overflow: 'hidden',
      zIndex: 50,
    }}>
      {/* Logo + collapse */}
      <div style={{ padding: collapsed ? '20px 14px' : '20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.07)', flexShrink: 0 }}>
        {!collapsed && (
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/logo.svg" alt="The Fresh Friends" style={{ height: 24, width: 'auto' }} />
          </Link>
        )}
        <button onClick={() => setCollapsed(c => !c)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(0,0,0,0.3)', padding: 4, display: 'flex', alignItems: 'center', marginLeft: collapsed ? 'auto' : 0 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {collapsed ? <path d="M9 18l6-6-6-6"/> : <path d="M15 18l-6-6 6-6"/>}
          </svg>
        </button>
      </div>

      {/* Overall progress */}
      {!collapsed && (
        <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(0,0,0,0.07)', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)' }}>Your Progress</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#1773b0' }}>{overallPct}%</span>
          </div>
          <div style={{ height: 4, background: 'rgba(0,0,0,0.08)', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: overallPct + '%', background: '#1773b0', borderRadius: 4, transition: 'width 0.5s ease' }} />
          </div>
          <p style={{ fontSize: 11, color: 'rgba(0,0,0,0.35)', marginTop: 6 }}>{totalDone} of {totalLessons} lessons complete</p>
        </div>
      )}

      {/* Module list */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
        {modules.map(mod => {
          const done = mod.lessons.filter(l => completedIds.has(l.id)).length;
          const pct  = Math.round((done / mod.lessons.length) * 100);
          const color = PHASE_COLORS[mod.id];
          const isExpanded = expanded[mod.id];
          const hasActive  = mod.lessons.some(l => l.id === activeLesson?.id);

          return (
            <div key={mod.id}>
              {/* Module header */}
              <button
                onClick={() => !collapsed && setExpanded(e => ({ ...e, [mod.id]: !e[mod.id] }))}
                style={{
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  padding: collapsed ? '12px 0' : '10px 20px',
                  display: 'flex', alignItems: 'center', gap: 10,
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  borderLeft: hasActive ? `3px solid ${color}` : '3px solid transparent',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.03)'}
                onMouseLeave={e => e.currentTarget.style.background = 'none'}
              >
                {collapsed ? (
                  <span title={mod.title} style={{ fontSize: 11, fontWeight: 700, color: color, letterSpacing: '0.5px' }}>{mod.phase.replace('Phase ', 'P').replace('Welcome', 'W').replace('Bonus', 'B')}</span>
                ) : (
                  <>
                    <ProgressRing pct={pct} size={32} color={color} />
                    <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
                      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: color, marginBottom: 2 }}>{mod.phase}</p>
                      <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.8)', lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mod.title}</p>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeLinecap="round" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', flexShrink: 0 }}>
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </>
                )}
              </button>

              {/* Lessons list */}
              {!collapsed && isExpanded && (
                <div style={{ paddingBottom: 4 }}>
                  {mod.lessons.map((lesson, idx) => {
                    const isDone   = completedIds.has(lesson.id);
                    const isActive = activeLesson?.id === lesson.id;
                    return (
                      <button
                        key={lesson.id}
                        onClick={() => onSelect(lesson, mod)}
                        style={{
                          width: '100%', background: isActive ? 'rgba(23,115,176,0.08)' : 'none',
                          border: 'none', cursor: 'pointer',
                          padding: '9px 20px 9px 48px',
                          display: 'flex', alignItems: 'center', gap: 10,
                          borderLeft: isActive ? `3px solid #1773b0` : '3px solid transparent',
                          transition: 'background 0.15s',
                          textAlign: 'left',
                        }}
                        onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; }}
                        onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'none'; }}
                      >
                        {/* Check / number */}
                        <span style={{
                          width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: isDone ? '#1773b0' : isActive ? 'rgba(23,115,176,0.15)' : 'rgba(0,0,0,0.06)',
                          border: isActive && !isDone ? '2px solid #1773b0' : 'none',
                        }}>
                          {isDone ? (
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          ) : (
                            <span style={{ fontSize: 9, color: isActive ? '#1773b0' : 'rgba(0,0,0,0.35)', fontWeight: 700 }}>{idx + 1}</span>
                          )}
                        </span>
                        <span style={{ fontSize: 13, color: isDone ? 'rgba(0,0,0,0.35)' : isActive ? '#1773b0' : 'rgba(0,0,0,0.65)', lineHeight: 1.4, flex: 1 }}>{lesson.title}</span>
                        {lesson.duration !== 'Resource' && (
                          <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.3)', flexShrink: 0 }}>{lesson.duration}</span>
                        )}
                        {lesson.duration === 'Resource' && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2" strokeLinecap="round"><path d="M12 2v10m0 0l-3-3m3 3l3-3M3 15v4a2 2 0 002 2h14a2 2 0 002-2v-4"/></svg>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Back to site */}
      {!collapsed && (
        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(0,0,0,0.07)', flexShrink: 0 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(0,0,0,0.4)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(0,0,0,0.8)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(0,0,0,0.4)'}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M5 12l7-7M5 12l7 7"/></svg>
            Back to site
          </Link>
        </div>
      )}
    </aside>
  );
}

function VideoPlayer({ lesson, mod, completedIds, onComplete, onNext, onPrev, hasNext, hasPrev, isMobile }) {
  const isDone = completedIds.has(lesson.id);
  const color  = PHASE_COLORS[mod.id];
  const desc   = LESSON_DESCRIPTIONS[lesson.id] || `In this lesson you'll explore ${lesson.title.toLowerCase()}. Follow along with the video and use the downloadable resources below to apply what you learn.`;

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: isMobile ? '24px 16px 60px' : '40px 40px 80px' }}>

      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24, fontSize: 12, color: 'rgba(0,0,0,0.4)' }}>
        <span style={{ color: color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: 11 }}>{mod.phase}</span>
        <span>›</span>
        <span>{mod.title}</span>
        <span>›</span>
        <span style={{ color: 'rgba(0,0,0,0.65)' }}>{lesson.title}</span>
      </div>

      {/* Video player — keep dark for contrast */}
      <div style={{
        width: '100%', aspectRatio: '16/9',
        background: '#111',
        borderRadius: 16, overflow: 'hidden',
        position: 'relative',
        marginBottom: 32,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${color}18 0%, transparent 70%)` }} />
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: '#1773b0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', position: 'relative', zIndex: 2,
          boxShadow: '0 8px 40px rgba(23,115,176,0.5)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 12px 50px rgba(23,115,176,0.7)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(23,115,176,0.5)'; }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
        </div>
        {lesson.duration !== 'Resource' && (
          <div style={{ position: 'absolute', bottom: 16, right: 16, background: 'rgba(0,0,0,0.7)', borderRadius: 6, padding: '4px 10px', fontSize: 12, color: 'white', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
            {lesson.duration}
          </div>
        )}
        {isDone && (
          <div style={{ position: 'absolute', top: 16, right: 16, background: '#1773b0', borderRadius: 100, padding: '5px 14px', fontSize: 12, color: 'white', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Completed
          </div>
        )}
        <div style={{ position: 'absolute', bottom: 16, left: 16, right: lesson.duration !== 'Resource' ? 80 : 16 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{mod.phase} — {mod.title}</p>
        </div>
      </div>

      {/* Title + actions */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#111827', lineHeight: 1.15, marginBottom: 8 }}>{lesson.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: color }}>{mod.phase}</span>
            {lesson.duration !== 'Resource' && (
              <>
                <span style={{ color: 'rgba(0,0,0,0.2)' }}>·</span>
                <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.45)' }}>{lesson.duration}</span>
              </>
            )}
          </div>
        </div>

        {!isDone ? (
          <button onClick={() => onComplete(lesson.id)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#1773b0', color: 'white',
            border: 'none', borderRadius: 100, padding: '12px 24px',
            fontSize: 14, fontWeight: 600, cursor: 'pointer',
            transition: 'opacity 0.2s, transform 0.15s',
            fontFamily: 'var(--font-main)', flexShrink: 0,
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(0.98)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
            Mark as complete
          </button>
        ) : (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(23,115,176,0.1)', border: '1px solid rgba(23,115,176,0.2)', color: '#1773b0', borderRadius: 100, padding: '12px 24px', fontSize: 14, fontWeight: 600 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
            Completed
          </div>
        )}
      </div>

      {/* Description */}
      <div style={{ background: 'white', borderRadius: 16, padding: '28px 32px', marginBottom: 24, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
        <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 12 }}>About This Lesson</h3>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(0,0,0,0.65)' }}>{desc}</p>
      </div>

      {/* Resources */}
      {mod.id === 'bonus' && (
        <div style={{ background: 'white', borderRadius: 16, padding: '28px 32px', marginBottom: 24, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 20 }}>Download Resource</h3>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(23,115,176,0.08)', border: '1px solid rgba(23,115,176,0.2)',
            color: '#1773b0', borderRadius: 12, padding: '14px 24px',
            fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--font-main)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2v10m0 0l-3-3m3 3l3-3M3 15v4a2 2 0 002 2h14a2 2 0 002-2v-4"/></svg>
            Download {lesson.title}
          </button>
        </div>
      )}

      {/* Prev / Next */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, paddingTop: 8 }}>
        <button onClick={onPrev} disabled={!hasPrev} style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: hasPrev ? 'white' : 'transparent',
          border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12,
          padding: '12px 20px', fontSize: 14, fontWeight: 500,
          color: hasPrev ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.25)',
          cursor: hasPrev ? 'pointer' : 'default', fontFamily: 'var(--font-main)',
          boxShadow: hasPrev ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
          transition: 'opacity 0.15s',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M5 12l7-7M5 12l7 7"/></svg>
          Previous
        </button>

        <button onClick={onNext} disabled={!hasNext} style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: hasNext ? '#1773b0' : 'rgba(0,0,0,0.04)',
          border: 'none', borderRadius: 12,
          padding: '12px 24px', fontSize: 14, fontWeight: 600,
          color: hasNext ? 'white' : 'rgba(0,0,0,0.25)',
          cursor: hasNext ? 'pointer' : 'default', fontFamily: 'var(--font-main)',
          transition: 'opacity 0.15s',
        }}
          onMouseEnter={e => { if (hasNext) e.currentTarget.style.opacity = '0.85'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; }}
        >
          Next Lesson
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
}

function Overview({ completedIds, onSelect, isMobile }) {
  const totalLessons = getAllLessons().length;
  const totalDone    = completedIds.size;
  const overallPct   = Math.round((totalDone / totalLessons) * 100);
  const next         = getNextLesson(completedIds);
  const nextMod      = next ? COURSE.find(m => m.lessons.some(l => l.id === next.id)) : null;

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: isMobile ? '24px 16px 60px' : '40px 40px 80px' }}>

      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 8 }}>Publish with Onyx</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#111827', lineHeight: 1.1, marginBottom: 8 }}>Welcome back, Author</h1>
        <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.5)' }}>{totalDone} of {totalLessons} lessons complete — keep going!</p>
      </div>

      {/* Overall progress bar */}
      <div style={{ background: 'white', borderRadius: 16, padding: '24px 28px', marginBottom: 24, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.6)' }}>Overall Course Progress</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#1773b0' }}>{overallPct}%</span>
        </div>
        <div style={{ height: 8, background: 'rgba(0,0,0,0.06)', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: overallPct + '%', background: 'linear-gradient(90deg, #1773b0, #3a9fd4)', borderRadius: 8, transition: 'width 0.5s ease' }} />
        </div>
      </div>

      {/* Continue card */}
      {next && nextMod && (
        <div style={{
          background: 'linear-gradient(135deg, #1773b0 0%, #125d8e 100%)',
          borderRadius: 16, padding: isMobile ? '24px 20px' : '28px 32px', marginBottom: 32,
          display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: isMobile ? 16 : 24,
        }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: 8 }}>Continue where you left off</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, color: 'white', marginBottom: 4 }}>{next.title}</h2>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{nextMod.phase} — {nextMod.title} · {next.duration}</p>
          </div>
          <button onClick={() => onSelect(next, nextMod)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'white', color: '#1773b0',
            border: 'none', borderRadius: 100, padding: '14px 28px',
            fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-main)',
            transition: 'opacity 0.2s', flexShrink: 0,
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Continue
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      )}

      {/* Module cards */}
      <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 20 }}>All Modules</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {COURSE.map(mod => {
          const done  = mod.lessons.filter(l => completedIds.has(l.id)).length;
          const pct   = Math.round((done / mod.lessons.length) * 100);
          const color = PHASE_COLORS[mod.id];
          const isComplete = done === mod.lessons.length;

          return (
            <div key={mod.id} style={{
              background: 'white',
              border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: 14, padding: '20px 24px',
              display: 'flex', alignItems: 'center', gap: 20,
              cursor: 'pointer', transition: 'border-color 0.2s, box-shadow 0.2s',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            }}
              onClick={() => { const first = mod.lessons[0]; onSelect(first, mod); }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'; }}
            >
              <ProgressRing pct={pct} size={48} color={color} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color }}>{mod.phase}</span>
                  {isComplete && (
                    <span style={{ fontSize: 11, background: 'rgba(23,115,176,0.1)', color: '#1773b0', borderRadius: 100, padding: '2px 10px', fontWeight: 600 }}>Complete</span>
                  )}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 2 }}>{mod.title}</h3>
                <p style={{ fontSize: 12, color: 'rgba(0,0,0,0.4)' }}>{done}/{mod.lessons.length} lessons · {mod.lessons[0].duration !== 'Resource' ? 'Video lessons' : 'Downloadable resources'}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <p style={{ fontSize: 20, fontWeight: 800, color: pct === 100 ? color : 'rgba(0,0,0,0.5)' }}>{pct}%</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.25)" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── PAGE ─────────────────────────────────────────────────────── */
export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  const [completedIds, setCompletedIds] = useState(() => new Set(['w1', 'w2', 'w3']));
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeMod, setActiveMod] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const allLessons = getAllLessons();

  function handleSelect(lesson, mod) {
    setActiveLesson(lesson);
    setActiveMod(mod);
    if (isMobile) setDrawerOpen(false);
  }

  function handleComplete(lessonId) {
    setCompletedIds(prev => {
      const next = new Set(prev);
      next.add(lessonId);
      return next;
    });
  }

  function handleNext() {
    if (!activeLesson) return;
    const idx = allLessons.findIndex(l => l.id === activeLesson.id);
    if (idx < allLessons.length - 1) {
      const next = allLessons[idx + 1];
      const mod  = COURSE.find(m => m.lessons.some(l => l.id === next.id));
      handleSelect(next, mod);
    }
  }

  function handlePrev() {
    if (!activeLesson) return;
    const idx = allLessons.findIndex(l => l.id === activeLesson.id);
    if (idx > 0) {
      const prev = allLessons[idx - 1];
      const mod  = COURSE.find(m => m.lessons.some(l => l.id === prev.id));
      handleSelect(prev, mod);
    }
  }

  const currentIdx = activeLesson ? allLessons.findIndex(l => l.id === activeLesson.id) : -1;

  if (!mounted) return null;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F0F2F5', fontFamily: 'var(--font-main)' }}>

      {/* Mobile drawer backdrop */}
      {isMobile && drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 49, backdropFilter: 'blur(2px)' }}
        />
      )}

      {/* Sidebar — fixed overlay on mobile, sticky on desktop */}
      <div style={{
        position: isMobile ? 'fixed' : 'sticky',
        top: 0,
        left: 0,
        height: '100vh',
        zIndex: 50,
        transform: isMobile ? (drawerOpen ? 'translateX(0)' : 'translateX(-100%)') : 'none',
        transition: 'transform 0.3s ease',
        flexShrink: 0,
      }}>
        <Sidebar
          modules={COURSE}
          completedIds={completedIds}
          activeLesson={activeLesson}
          onSelect={handleSelect}
          collapsed={isMobile ? false : collapsed}
          setCollapsed={isMobile ? () => setDrawerOpen(false) : setCollapsed}
        />
      </div>

      {/* Desktop spacer so main doesn't go under sidebar */}
      {!isMobile && (
        <div style={{ width: collapsed ? 60 : 280, minWidth: collapsed ? 60 : 280, flexShrink: 0, transition: 'width 0.25s ease, min-width 0.25s ease' }} />
      )}

      <main style={{ flex: 1, overflowY: 'auto', minHeight: '100vh', minWidth: 0 }}>
        {/* Top bar */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 40,
          background: 'rgba(240,242,245,0.95)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.07)',
          padding: isMobile ? '0 16px' : '0 40px', height: 60,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Hamburger on mobile */}
            {isMobile && (
              <button onClick={() => setDrawerOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', color: 'rgba(0,0,0,0.5)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18"/>
                </svg>
              </button>
            )}
            <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.5)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: isMobile ? 160 : 'none' }}>
              {activeLesson ? `${activeMod?.phase} › ${activeLesson.title}` : 'Course Overview'}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {activeLesson && (
              <button onClick={() => { setActiveLesson(null); setActiveMod(null); }} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 13, color: 'rgba(0,0,0,0.45)', fontFamily: 'var(--font-main)',
                display: 'flex', alignItems: 'center', gap: 6,
                transition: 'color 0.2s', whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(0,0,0,0.8)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(0,0,0,0.45)'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M5 12l7-7M5 12l7 7"/></svg>
                {!isMobile && 'Overview'}
              </button>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#1773b0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: 'white', flexShrink: 0 }}>A</div>
              {!isMobile && <span style={{ fontSize: 13, color: 'rgba(0,0,0,0.55)' }}>Author</span>}
            </div>
          </div>
        </div>

        {/* Content */}
        {activeLesson && activeMod ? (
          <VideoPlayer
            lesson={activeLesson}
            mod={activeMod}
            completedIds={completedIds}
            onComplete={handleComplete}
            onNext={handleNext}
            onPrev={handlePrev}
            hasNext={currentIdx < allLessons.length - 1}
            hasPrev={currentIdx > 0}
            isMobile={isMobile}
          />
        ) : (
          <Overview completedIds={completedIds} onSelect={handleSelect} isMobile={isMobile} />
        )}
      </main>
    </div>
  );
}
