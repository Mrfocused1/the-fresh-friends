'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Home',         href: '/' },
    { label: 'How it works', href: '/publish-with-onyx' },
    { label: 'Pricing',      href: '/pricing' },
    { label: 'Contact',      href: '/#contact' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-right">
            <div className="nav-links">
              {links.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  style={activePage === label ? { color: '#1773b0', fontWeight: 600 } : undefined}
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link href="/login" className="nav-cta">Login</Link>
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

      <div className={`fs-menu${menuOpen ? ' fs-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <button className="fs-menu__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <nav className="fs-menu__nav">
          {links.map(({ label, href }) => (
            <Link key={href} href={href} className="fs-menu__link" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/login" className="fs-menu__cta" onClick={() => setMenuOpen(false)}>Login</Link>
      </div>
    </>
  );
}
