'use client';

import { useState, useEffect } from 'react';

const modules = [
  {
    number: '01',
    title: 'Creating Your Concept',
    subtitle: 'Concept & Audience',
    progress: 12,
    videoLabel: 'Identifying Your Core Concept',
    card1: { label: 'Core Concept', line1: 'Defining what your book is about', line2: 'Clarifying why your reader will care' },
    card2: { label: 'Market Fit', line1: 'Researching bestsellers in your category', line2: 'Validating your idea before you write' },
  },
  {
    number: '02',
    title: 'Book Blueprint',
    subtitle: 'Structure & Flow',
    progress: 28,
    videoLabel: 'Designing Your Chapter Structure',
    card1: { label: 'Chapter Architecture', line1: 'Breaking your idea into 3–5 sections', line2: 'One clear purpose per chapter' },
    card2: { label: 'Reader Journey', line1: 'Where your reader starts and ends', line2: 'Mapping the transformation in between' },
  },
  {
    number: '03',
    title: 'Writing Your Manuscript',
    subtitle: 'Draft & Self-Edit',
    progress: 45,
    videoLabel: 'Progress Over Perfection',
    card1: { label: 'The Writing Process', line1: 'Small sessions, consistent output', line2: 'Overcoming writer\'s block' },
    card2: { label: 'Self-Editing', line1: 'Structural, clarity and line edits', line2: 'Final manuscript polish' },
  },
  {
    number: '04',
    title: 'Formatting & Cover Design',
    subtitle: 'Design for KDP',
    progress: 61,
    videoLabel: 'Cover Design in Canva',
    card1: { label: 'Manuscript Format', line1: 'Choosing your KDP trim size', line2: 'Transferring into the KDP template' },
    card2: { label: 'Wrap-Around Cover', line1: 'Front, spine and back in one file', line2: 'Exporting a print-ready PDF' },
  },
  {
    number: '05',
    title: 'Amazon Account Set Up',
    subtitle: 'Your KDP Account',
    progress: 77,
    videoLabel: 'What is Kindle Direct Publishing?',
    card1: { label: 'Account Setup', line1: 'Author and publisher information', line2: 'Bank details and tax profile' },
    card2: { label: 'Final Checklist', line1: 'Confirming every step is complete', line2: 'Ready to upload your book' },
  },
  {
    number: '06',
    title: 'Publishing Your Book',
    subtitle: 'Upload & Launch',
    progress: 94,
    videoLabel: 'Uploading Your Book to KDP',
    card1: { label: 'Pricing & Royalties', line1: '60% paperback vs 70% Kindle', line2: 'Setting a competitive, profitable price' },
    card2: { label: 'Your First Author Copy', line1: 'Live on Amazon within 72 hours', line2: 'Ordering your proof copy' },
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
