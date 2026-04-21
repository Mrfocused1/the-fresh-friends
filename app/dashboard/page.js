'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LESSON_CONTENT } from './courseContent';

/* ── COURSE DATA ─────────────────────────────────────────────── */
const COURSE = [
  {
    id: 'module1',
    phase: 'Module 1',
    title: 'Creating Your Concept',
    emoji: '',
    lessons: [
      { id: 'm1-1', title: 'Identifying Your Core Concept', duration: '9:00', done: false },
      { id: 'm1-2', title: 'Defining Your Target Audience', duration: '8:30', done: false },
      { id: 'm1-3', title: 'Conducting Market Research', duration: '10:15', done: false },
      { id: 'm1-4', title: 'Validating Your Book Idea', duration: '9:45', done: false },
    ],
  },
  {
    id: 'module2',
    phase: 'Module 2',
    title: 'Book Blueprint',
    emoji: '',
    lessons: [
      { id: 'm2-1', title: 'Designing Your Chapter Structure', duration: '10:30', done: false },
      { id: 'm2-2', title: 'Mapping the Reader Journey', duration: '9:15', done: false },
      { id: 'm2-3', title: 'Content Mapping & Flow', duration: '11:00', done: false },
      { id: 'm2-4', title: 'Creating Your Book Blueprint', duration: '12:45', done: false },
    ],
  },
  {
    id: 'module3',
    phase: 'Module 3',
    title: 'Writing Your Manuscript',
    emoji: '',
    lessons: [
      { id: 'm3-1', title: 'Story vs Educational Structure', duration: '11:20', done: false },
      { id: 'm3-2', title: 'The Writing Process', duration: '13:00', done: false },
      { id: 'm3-3', title: 'Self-Editing Your Book', duration: '14:30', done: false },
      { id: 'm3-4', title: 'Final Manuscript Polish', duration: '8:45', done: false },
    ],
  },
  {
    id: 'module4',
    phase: 'Module 4',
    title: 'Formatting & Cover Design',
    emoji: '',
    lessons: [
      { id: 'm4-1', title: 'Choosing Your Book Size (KDP Trim Size)', duration: '7:30', done: false },
      { id: 'm4-2', title: 'Downloading Your KDP Template', duration: '6:15', done: false },
      { id: 'm4-3', title: 'Formatting & Transferring Your Manuscript', duration: '12:40', done: false },
      { id: 'm4-4', title: 'Cover Design in Canva (Front, Spine & Back)', duration: '16:00', done: false },
    ],
  },
  {
    id: 'module5',
    phase: 'Module 5',
    title: 'Amazon Account Set Up',
    emoji: '',
    lessons: [
      { id: 'm5-1', title: 'What is KDP (Kindle Direct Publishing)?', duration: '6:00', done: false },
      { id: 'm5-2', title: 'Creating Your KDP Account', duration: '10:20', done: false },
      { id: 'm5-3', title: 'Account Setup Video Walkthrough', duration: '8:30', done: false },
      { id: 'm5-4', title: 'Account Setup Checklist', duration: '5:15', done: false },
    ],
  },
  {
    id: 'module6',
    phase: 'Module 6',
    title: 'Publishing Your Book!',
    emoji: '',
    lessons: [
      { id: 'm6-1', title: 'How to Upload Your Book', duration: '5:45', done: false },
      { id: 'm6-2', title: 'Complete Uploading Process', duration: '14:20', done: false },
      { id: 'm6-3', title: 'Pricing & Understanding Royalties', duration: '11:10', done: false },
      { id: 'm6-4', title: 'Ordering Your First Author Copy', duration: '6:30', done: false },
    ],
  },
];

const LESSON_DESCRIPTIONS = {
  // Module 1 — Creating Your Concept
  'm1-1': 'Before you write a single page, you need clarity. Learn how to generate ideas without judgment, identify the strongest one, define the purpose behind your book, and turn your idea into a clear one-sentence concept statement you can build everything around.',
  'm1-2': '"For everyone" is the fastest way to connect with no one. Move from vague audience ideas to a detailed reader profile — age, lifestyle, challenges, desires — so your book feels like it was written specifically for the people you want to reach.',
  'm1-3': 'Study bestsellers in your category on Amazon — titles, covers, blurbs, reviews, rankings. Spot the trends readers respond to, find the gaps your book can fill, and position your idea somewhere between familiar and distinctly different.',
  'm1-4': 'Before you invest weeks writing, test whether people actually want your book. Share your concept simply, ask the right questions, collect honest feedback from 5–10 people, and refine your idea into something you know your audience will read.',

  // Module 2 — Book Blueprint
  'm2-1': 'Strong books aren\'t random — they\'re intentionally structured. Break your idea into 3–5 key sections, then turn each section into chapters with one clear purpose, whether you\'re writing a children\'s book, novel, or non-fiction guide.',
  'm2-2': 'A great book is a journey, not a collection of chapters. Define where your reader starts emotionally, where they end up, and the transformation in between. Learn how to guide them one intentional step at a time.',
  'm2-3': 'Take your chapter structure one level deeper. For each chapter, plan the 2–5 key points, scenes, or lessons you\'ll cover — so when you sit down to write, you never start from a blank page.',
  'm2-4': 'Bring everything together into one master document: your concept, audience, reader journey, chapter structure, and content map. This blueprint is the guide you\'ll return to every time you\'re unsure what to do next.',

  // Module 3 — Writing Your Manuscript
  'm3-1': 'Some books teach through characters and emotion, others through clear steps and information. Learn the strengths of each structure, when to combine them, and how to choose the approach that best delivers your message.',
  'm3-2': 'The biggest reason most people don\'t finish their book? Trying to write it perfectly the first time. Build a consistent writing system — small sessions, progress over perfection, and practical ways to overcome writer\'s block.',
  'm3-3': 'Your first draft isn\'t your final draft. Follow a step-by-step self-editing process — structure first, then clarity, then sentence-level polish — to transform "something written" into something ready to share with the world.',
  'm3-4': 'The last pass before your manuscript moves into book format. Work through a final consistency check, a read-aloud review, and a clean-up of tone, spacing, and chapter flow so your file is truly publish-ready.',

  // Module 4 — Formatting & Cover Design
  'm4-1': 'Your trim size affects every formatting decision that follows. Learn the standard KDP sizes — 6×9" for fiction and non-fiction, 8.5×8.5" for children\'s picture books, 8.5×11" for workbooks — and choose the right one before you format a single page.',
  'm4-2': 'Skip the guesswork by starting with Amazon\'s official templates. This lesson walks you through downloading the correct trim-size template from KDP, extracting the ZIP, and opening the file so it\'s ready for your manuscript.',
  'm4-3': 'Move your manuscript into the KDP template section by section. Apply consistent fonts, chapter headings, and page breaks, and learn how to place images cleanly so everything fits within the printable area.',
  'm4-4': 'Your cover is the first thing every reader sees. Create a full wrap-around cover — back, spine, and front in a single Canva file — using the exact dimensions KDP requires, then export it as a print-ready PDF.',

  // Module 5 — Amazon Account Set Up
  'm5-1': 'Amazon Kindle Direct Publishing lets you publish globally for free using print-on-demand — no inventory, no publisher required. Understand how royalties work, what formats you can publish, and why KDP gives you full control.',
  'm5-2': 'Walk through signing up for KDP, entering your author/publisher information, adding bank details for royalty payments, and completing your tax profile — the full setup so you\'re ready to receive payments.',
  'm5-3': 'A visual, step-by-step video tutorial from Amazon KDP. Watch the official setup walkthrough alongside this lesson if you prefer visual guidance or get stuck on any step of the account process.',
  'm5-4': 'Run through the full KDP account checklist — profile details, payment information, tax forms, and book preparation — to confirm nothing\'s missing before you start uploading.',

  // Module 6 — Publishing Your Book!
  'm6-1': 'Before you start, make sure both your manuscript and cover are finalized. This lesson introduces the full upload process and sets you up with a hand-picked video tutorial covering every KDP step for paperback and Kindle.',
  'm6-2': 'Work through KDP\'s book setup: enter your book details, upload your manuscript and cover, preview your book, and handle print options. Learn which details can\'t be changed post-publish so you get them right the first time.',
  'm6-3': 'Understand the paperback royalty formula (60% of list price minus printing cost) and eBook options (70% vs 35%). Research competitor pricing, meet minimum price floors, and set a price that\'s both competitive and profitable.',
  'm6-4': 'It can take up to 72 hours for Amazon to publish your book. Once it\'s live, learn how to order your first physical author copy — your proof copy — and celebrate officially becoming a self-published author.',
};

const PHASE_COLORS = {
  module1: '#e8365d',
  module2: '#f5c518',
  module3: '#27ae60',
  module4: '#f39c12',
  module5: '#8e44ad',
  module6: 'rgb(120,181,57)',
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

function ProgressRing({ pct, size = 36, color = 'rgb(120,181,57)' }) {
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
  const [expanded, setExpanded] = useState({ module1: true });

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
      {/* Collapse control */}
      <div style={{ padding: collapsed ? '20px 14px' : '20px 20px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', borderBottom: '1px solid rgba(0,0,0,0.07)', flexShrink: 0 }}>
        <button onClick={() => setCollapsed(c => !c)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(0,0,0,0.3)', padding: 4, display: 'flex', alignItems: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {collapsed ? <path d="M9 18l6-6-6-6"/> : <path d="M15 18l-6-6 6-6"/>}
          </svg>
        </button>
      </div>

      {/* Overall progress */}
      {!collapsed && (
        <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(0,0,0,0.07)', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)' }}>Your Progress</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'rgb(120,181,57)' }}>{overallPct}%</span>
          </div>
          <div style={{ height: 4, background: 'rgba(0,0,0,0.08)', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: overallPct + '%', background: 'rgb(120,181,57)', borderRadius: 4, transition: 'width 0.5s ease' }} />
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
                  <span title={mod.title} style={{ fontSize: 11, fontWeight: 400, color: color, letterSpacing: '0.5px' }}>{mod.phase.replace('Module ', 'M')}</span>
                ) : (
                  <>
                    <ProgressRing pct={pct} size={32} color={color} />
                    <div style={{ flex: 1, textAlign: 'left', minWidth: 0 }}>
                      <p style={{ fontSize: 10, fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase', color: color, marginBottom: 2 }}>{mod.phase}</p>
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
                          width: '100%', background: isActive ? 'rgba(120,181,57,0.08)' : 'none',
                          border: 'none', cursor: 'pointer',
                          padding: '9px 20px 9px 48px',
                          display: 'flex', alignItems: 'center', gap: 10,
                          borderLeft: isActive ? `3px solid rgb(120,181,57)` : '3px solid transparent',
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
                          background: isDone ? 'rgb(120,181,57)' : isActive ? 'rgba(120,181,57,0.15)' : 'rgba(0,0,0,0.06)',
                          border: isActive && !isDone ? '2px solid rgb(120,181,57)' : 'none',
                        }}>
                          {isDone ? (
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          ) : (
                            <span style={{ fontSize: 9, color: isActive ? 'rgb(120,181,57)' : 'rgba(0,0,0,0.35)', fontWeight: 400 }}>{idx + 1}</span>
                          )}
                        </span>
                        <span style={{ fontSize: 13, color: isDone ? 'rgba(0,0,0,0.35)' : isActive ? 'rgb(120,181,57)' : 'rgba(0,0,0,0.65)', lineHeight: 1.4, flex: 1 }}>{lesson.title}</span>
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

function LessonContent({ blocks, color, isMobile }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div style={{ background: 'white', borderRadius: 16, padding: isMobile ? '24px 20px' : '32px 40px', marginBottom: 24, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
      <h3 style={{ fontSize: 13, fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 20 }}>Learning Material</h3>
      {blocks.map((b, i) => {
        if (b.type === 'h') {
          return <h4 key={i} style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 500, color: '#111827', marginTop: i === 0 ? 0 : 28, marginBottom: 10, lineHeight: 1.3 }}>{b.text}</h4>;
        }
        if (b.type === 'p') {
          return <p key={i} style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(0,0,0,0.72)', marginBottom: 14, whiteSpace: 'pre-line' }}>{b.text}</p>;
        }
        if (b.type === 'ul') {
          return (
            <ul key={i} style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
              {b.items.map((item, j) => (
                <li key={j} style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(0,0,0,0.72)', paddingLeft: 22, position: 'relative', marginBottom: 8 }}>
                  <span style={{ position: 'absolute', left: 4, top: 10, width: 6, height: 6, borderRadius: '50%', background: color }} />
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (b.type === 'ol') {
          return (
            <ol key={i} style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0', counterReset: 'step' }}>
              {b.items.map((item, j) => (
                <li key={j} style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(0,0,0,0.72)', paddingLeft: 32, position: 'relative', marginBottom: 10 }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, fontSize: 12, fontWeight: 600, color: color, width: 22, height: 22, borderRadius: '50%', background: `${color}1a`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{j + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          );
        }
        if (b.type === 'quote') {
          return (
            <blockquote key={i} style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(0,0,0,0.7)', fontStyle: 'italic', borderLeft: `3px solid ${color}`, padding: '8px 0 8px 18px', margin: '16px 0 18px', whiteSpace: 'pre-line' }}>
              {b.text}
            </blockquote>
          );
        }
        if (b.type === 'exercise') {
          return (
            <div key={i} style={{ background: 'rgba(120,181,57,0.06)', border: '1px solid rgba(120,181,57,0.18)', borderRadius: 12, padding: '18px 22px', margin: '20px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(120,181,57)" strokeWidth="2" strokeLinecap="round"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgb(120,181,57)' }}>Workbook Exercise</span>
              </div>
              <h5 style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 500, color: '#111827', marginBottom: 10 }}>{b.title}</h5>
              {b.body.map((sub, j) => {
                if (sub.type === 'p') return <p key={j} style={{ fontSize: 14.5, lineHeight: 1.7, color: 'rgba(0,0,0,0.72)', marginBottom: 10 }}>{sub.text}</p>;
                if (sub.type === 'ul') return (
                  <ul key={j} style={{ listStyle: 'none', padding: 0, margin: '0 0 10px 0' }}>
                    {sub.items.map((item, k) => (
                      <li key={k} style={{ fontSize: 14.5, lineHeight: 1.65, color: 'rgba(0,0,0,0.72)', paddingLeft: 20, position: 'relative', marginBottom: 6 }}>
                        <span style={{ position: 'absolute', left: 4, top: 10, width: 5, height: 5, borderRadius: '50%', background: 'rgb(120,181,57)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
                if (sub.type === 'quote') return <blockquote key={j} style={{ fontSize: 14.5, lineHeight: 1.65, color: 'rgba(0,0,0,0.7)', fontStyle: 'italic', borderLeft: '3px solid rgba(120,181,57,0.4)', padding: '4px 0 4px 14px', margin: '8px 0', whiteSpace: 'pre-line' }}>{sub.text}</blockquote>;
                return null;
              })}
            </div>
          );
        }
        if (b.type === 'takeaway') {
          return (
            <div key={i} style={{ background: `${color}0d`, borderLeft: `4px solid ${color}`, borderRadius: '0 10px 10px 0', padding: '18px 22px', margin: '24px 0 4px' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: color, marginBottom: 8 }}>Key Takeaway</div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(0,0,0,0.8)', fontStyle: 'italic' }}>{b.text}</p>
            </div>
          );
        }
        return null;
      })}
    </div>
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
        <span style={{ color: color, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '1px', fontSize: 11 }}>{mod.phase}</span>
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
          background: 'rgb(120,181,57)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', position: 'relative', zIndex: 2,
          boxShadow: '0 8px 40px rgba(120,181,57,0.4)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 12px 50px rgba(120,181,57,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(120,181,57,0.5)'; }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
        </div>
        {lesson.duration !== 'Resource' && (
          <div style={{ position: 'absolute', bottom: 16, right: 16, background: 'rgba(0,0,0,0.7)', borderRadius: 6, padding: '4px 10px', fontSize: 12, color: 'white', fontWeight: 600, backdropFilter: 'blur(4px)' }}>
            {lesson.duration}
          </div>
        )}
        {isDone && (
          <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgb(120,181,57)', borderRadius: 100, padding: '5px 14px', fontSize: 12, color: 'white', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
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
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, color: '#111827', lineHeight: 1.15, marginBottom: 8 }}>{lesson.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 12, fontWeight: 400, textTransform: 'uppercase', letterSpacing: '1.5px', color: color }}>{mod.phase}</span>
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
            background: 'rgb(120,181,57)', color: 'white',
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
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(120,181,57,0.1)', border: '1px solid rgba(120,181,57,0.2)', color: 'rgb(120,181,57)', borderRadius: 100, padding: '12px 24px', fontSize: 14, fontWeight: 600 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
            Completed
          </div>
        )}
      </div>

      {/* Description */}
      <div style={{ background: 'white', borderRadius: 16, padding: '28px 32px', marginBottom: 24, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
        <h3 style={{ fontSize: 13, fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 12 }}>About This Lesson</h3>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(0,0,0,0.65)' }}>{desc}</p>
      </div>

      {/* Full learning material */}
      <LessonContent blocks={LESSON_CONTENT[lesson.id]} color={color} isMobile={isMobile} />

      {/* Resources */}
      {mod.id === 'bonus' && (
        <div style={{ background: 'white', borderRadius: 16, padding: '28px 32px', marginBottom: 24, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontSize: 13, fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 20 }}>Download Resource</h3>
          <button style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(120,181,57,0.08)', border: '1px solid rgba(120,181,57,0.2)',
            color: 'rgb(120,181,57)', borderRadius: 12, padding: '14px 24px',
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
          background: hasNext ? 'rgb(120,181,57)' : 'rgba(0,0,0,0.04)',
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
        <p style={{ fontSize: 11, fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.35)', marginBottom: 8 }}>Publish with Onyx</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, color: '#111827', lineHeight: 1.1, marginBottom: 8 }}>Welcome back, Author</h1>
        <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.5)' }}>{totalDone} of {totalLessons} lessons complete — keep going!</p>
      </div>

      {/* Overall progress bar */}
      <div style={{ background: 'white', borderRadius: 16, padding: '24px 28px', marginBottom: 24, border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.6)' }}>Overall Course Progress</span>
          <span style={{ fontSize: 14, fontWeight: 400, color: 'rgb(120,181,57)' }}>{overallPct}%</span>
        </div>
        <div style={{ height: 8, background: 'rgba(0,0,0,0.06)', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: overallPct + '%', background: 'linear-gradient(90deg, rgb(120,181,57), rgb(80,160,30))', borderRadius: 8, transition: 'width 0.5s ease' }} />
        </div>
      </div>

      {/* Continue card */}
      {next && nextMod && (
        <div style={{
          background: 'linear-gradient(135deg, rgb(0,113,77) 0%, rgb(0,80,54) 100%)',
          borderRadius: 16, padding: isMobile ? '24px 20px' : '28px 32px', marginBottom: 32,
          display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: isMobile ? 16 : 24,
        }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: 8 }}>Continue where you left off</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 400, color: 'white', marginBottom: 4 }}>{next.title}</h2>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{nextMod.phase} — {nextMod.title} · {next.duration}</p>
          </div>
          <button onClick={() => onSelect(next, nextMod)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'white', color: 'rgb(0,113,77)',
            border: 'none', borderRadius: 100, padding: '14px 28px',
            fontSize: 15, fontWeight: 400, cursor: 'pointer', fontFamily: 'var(--font-main)',
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
      <h2 style={{ fontSize: 18, fontWeight: 400, color: '#111827', marginBottom: 20 }}>All Modules</h2>
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
                  <span style={{ fontSize: 11, fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase', color }}>{mod.phase}</span>
                  {isComplete && (
                    <span style={{ fontSize: 11, background: 'rgba(120,181,57,0.1)', color: 'rgb(120,181,57)', borderRadius: 100, padding: '2px 10px', fontWeight: 600 }}>Complete</span>
                  )}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 400, color: '#111827', marginBottom: 2 }}>{mod.title}</h3>
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
  const [completedIds, setCompletedIds] = useState(() => new Set());
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
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgb(120,181,57)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 400, color: 'white', flexShrink: 0 }}>A</div>
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
