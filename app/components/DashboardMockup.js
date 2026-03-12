'use client';

import { useState, useEffect } from 'react';

const modules = [
  {
    number: '01',
    title: 'Finding Your Idea',
    subtitle: 'Concept & Audience',
    progress: 12,
    videoLabel: 'The One-Line Premise',
    card1: { label: 'Your Core Concept', line1: 'Defining the central promise of your book', line2: 'Identifying your ideal reader' },
    card2: { label: 'Author Purpose', line1: 'Why this book, why now, why you', line2: 'Building long-term motivation' },
  },
  {
    number: '02',
    title: 'Structuring Your Book',
    subtitle: 'Outline & Chapter Plan',
    progress: 28,
    videoLabel: 'The 10-Chapter Framework',
    card1: { label: 'Chapter Architecture', line1: 'Mapping your key chapters end-to-end', line2: 'Non-fiction 3-act structure' },
    card2: { label: 'Reader Journey', line1: 'Opening with a powerful hook', line2: 'Building to a clear conclusion' },
  },
  {
    number: '03',
    title: 'Writing Your First Draft',
    subtitle: 'The Skeleton Method',
    progress: 45,
    videoLabel: 'Daily Writing Habits',
    card1: { label: 'Draft Rules', line1: 'Write fast — edit never, not yet', line2: 'Setting realistic word count goals' },
    card2: { label: 'Momentum', line1: 'Building a consistent writing routine', line2: 'Overcoming writer\'s block' },
  },
  {
    number: '04',
    title: 'Editing & Refinement',
    subtitle: 'Structural & Line Edits',
    progress: 61,
    videoLabel: 'The 3-Pass Edit System',
    card1: { label: 'Self-Editing', line1: 'Structural edits before line edits', line2: 'Cutting without losing your voice' },
    card2: { label: 'Professional Review', line1: 'Working with a developmental editor', line2: 'Manuscript submission checklist' },
  },
  {
    number: '05',
    title: 'Cover & Formatting',
    subtitle: 'Design for the Shelf',
    progress: 77,
    videoLabel: 'Cover Design Principles',
    card1: { label: 'Cover Design', line1: 'Genre conventions & visual hierarchy', line2: 'Typography and colour psychology' },
    card2: { label: 'Interior Layout', line1: 'KDP formatting standards', line2: 'Fonts, margins & print-ready files' },
  },
  {
    number: '06',
    title: 'Publishing & Launch',
    subtitle: 'Going Live on Day One',
    progress: 94,
    videoLabel: 'Your Launch Strategy',
    card1: { label: 'Going Live', line1: 'Uploading to KDP & IngramSpark', line2: 'Pricing strategy & global distribution' },
    card2: { label: 'Launch Day', line1: 'Pre-launch email & ARC strategy', line2: 'Hitting bestseller status' },
  },
];

export default function DashboardMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActiveIndex(i => (i + 1) % modules.length);
        setFading(false);
      }, 350);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  const mod = modules[activeIndex];

  return (
    <div className="css-dashboard">
      {/* Title bar */}
      <div className="css-dash-header">
        <div className="css-dots">
          <div className="css-dot css-dot--red" />
          <div className="css-dot css-dot--yellow" />
          <div className="css-dot css-dot--green" />
        </div>
        <div className="css-dash-title">Onyx Learning Portal</div>
      </div>

      <div className="css-dash-body">
        {/* Sidebar */}
        <div className="css-dash-sidebar">
          <div className="css-dash-line" style={{ width: '100%', marginBottom: '20px', background: '#e2e2e2', height: '10px' }} />
          {modules.map((m, i) => (
            <div
              key={m.number}
              className={`css-dash-sidebar-item${i === activeIndex ? ' css-dash-sidebar-item--active' : ''}`}
            >
              <span className="css-dash-sidebar-num">{m.number}</span>
              <span className="css-dash-sidebar-label">{m.title}</span>
            </div>
          ))}
          <div className="css-dash-line" style={{ width: '100%', marginTop: 'auto', background: '#e2e2e2' }} />
        </div>

        {/* Main content */}
        <div className="css-dash-main">
          <div className={`css-dash-content${fading ? ' css-dash-content--fade' : ''}`}>
            <div className="css-dash-main-header">
              <div>
                <div className="css-dash-module-title">Module {mod.number}: {mod.title}</div>
                <div className="css-dash-progress-bar">
                  <div className="css-dash-progress-fill" style={{ width: `${mod.progress}%` }} />
                </div>
              </div>
              <div className="css-dash-badge">{mod.subtitle}</div>
            </div>

            <div className="css-dash-video">
              <div className="css-dash-video-label">{mod.videoLabel}</div>
              <div className="css-dash-play">
                <div className="css-dash-play-icon" />
              </div>
            </div>

            <div className="css-dash-cards">
              <div className="css-dash-card">
                <div className="css-dash-card-label">{mod.card1.label}</div>
                <div className="css-dash-card-line">{mod.card1.line1}</div>
                <div className="css-dash-card-line css-dash-card-line--short">{mod.card1.line2}</div>
              </div>
              <div className="css-dash-card">
                <div className="css-dash-card-label">{mod.card2.label}</div>
                <div className="css-dash-card-line">{mod.card2.line1}</div>
                <div className="css-dash-card-line css-dash-card-line--short">{mod.card2.line2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module dots indicator */}
      <div className="css-dash-dots-row">
        {modules.map((_, i) => (
          <div key={i} className={`css-dash-indicator${i === activeIndex ? ' css-dash-indicator--active' : ''}`} />
        ))}
      </div>
    </div>
  );
}
