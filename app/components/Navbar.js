'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { gsap } from 'gsap';

export default function Navbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const hamburgerRef = useRef(null);
  const circleRef = useRef(null);
  const menuContentRef = useRef(null);
  const navXRef = useRef(null);

  const links = [
    { label: 'Home',         href: '/' },
    { label: 'How it works', href: '/publish-with-onyx' },
    { label: 'Pricing',      href: '/pricing' },
    { label: 'Contact',      href: '/#contact', anchor: true },
  ];

  useEffect(() => {
    gsap.set(menuContentRef.current, { opacity: 0 });
    gsap.set(circleRef.current, { scale: 0 });
    gsap.set(navXRef.current, { opacity: 0, scale: 0 });
  }, []);

  function openMenu() {
    setMenuOpen(true);

    // Hamburger drops to the ground and fades
    gsap.to(hamburgerRef.current, {
      y: window.innerHeight - 80,
      rotation: 540,
      opacity: 0,
      duration: 0.55,
      ease: 'power3.in',
    });

    // Green circle expands from hamburger position to fill screen
    gsap.to(circleRef.current, {
      scale: 55,
      duration: 0.65,
      delay: 0.2,
      ease: 'power2.inOut',
    });

    // Menu content fades in after circle fills screen
    gsap.to(menuContentRef.current, {
      opacity: 1,
      duration: 0.35,
      delay: 0.65,
    });

    // X pops in inside the navbar pill
    gsap.to(navXRef.current, {
      opacity: 1,
      scale: 1,
      pointerEvents: 'all',
      duration: 0.35,
      delay: 0.7,
      ease: 'back.out(2)',
    });
  }

  function closeMenu() {
    // X disappears from navbar pill
    gsap.to(navXRef.current, {
      opacity: 0,
      scale: 0,
      pointerEvents: 'none',
      duration: 0.2,
    });

    // Menu content fades out first
    gsap.to(menuContentRef.current, {
      opacity: 0,
      duration: 0.2,
    });

    // Circle shrinks back
    gsap.to(circleRef.current, {
      scale: 0,
      duration: 0.55,
      delay: 0.15,
      ease: 'power2.inOut',
      onComplete: () => setMenuOpen(false),
    });

    // Hamburger bounces back up into position
    gsap.to(hamburgerRef.current, {
      y: 0,
      rotation: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.4,
      ease: 'back.out(2)',
    });
  }

  function handleContact(e) {
    e.preventDefault();
    closeMenu();
    if (pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-right">
            <div className="nav-links">
              {links.map(({ label, href, anchor }) => (
                anchor ? (
                  <a
                    key={label}
                    href={href}
                    onClick={handleContact}
                    style={activePage === label ? { color: 'rgb(120,181,57)', fontWeight: 600 } : undefined}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    style={activePage === label ? { color: 'rgb(120,181,57)', fontWeight: 600 } : undefined}
                  >
                    {label}
                  </Link>
                )
              ))}
            </div>
            <Link href="/login" className="nav-cta">Login</Link>
            <button
              ref={hamburgerRef}
              className="nav-hamburger"
              onClick={openMenu}
              aria-label="Open menu"
            >
              <span className="ham-line" />
              <span className="ham-line" />
              <span className="ham-line" />
            </button>
            {/* X button — lives inside the navbar pill, appears when menu opens */}
            <button
              ref={navXRef}
              className="nav-menu-x"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Expanding dark-green circle */}
      <div ref={circleRef} className="menu-circle" />

      {/* Full-screen menu content */}
      <div
        ref={menuContentRef}
        className={`fs-menu${menuOpen ? ' fs-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="fs-menu__nav">
          {links.map(({ label, href, anchor }) => (
            anchor ? (
              <a key={label} href={href} className="fs-menu__link" onClick={handleContact}>
                {label}
              </a>
            ) : (
              <Link key={href} href={href} className="fs-menu__link" onClick={closeMenu}>
                {label}
              </Link>
            )
          ))}
        </nav>
        <Link href="/login" className="fs-menu__cta" onClick={closeMenu}>Login</Link>
      </div>
    </>
  );
}
