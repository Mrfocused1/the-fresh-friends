'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function LoginPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  if (!mounted) return null;

  function handleSubmit(e) {
    e.preventDefault();
    router.push('/dashboard');
  }

  return (
    <>
      {/* FLOATING LOGO */}
      <a href="/" className="floating-logo">
        <img src="/logo-dark.svg" alt="The Fresh Friends" />
      </a>

      {/* NAVBAR */}
      <Navbar activePage="Login" />

      {/* PAGE */}
      <div
        style={{
          minHeight: '100vh',
          background: '#f5f5f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
        }}
      >
        {/* Background radial glow */}
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background:
              'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(120,181,57,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* LOGIN CARD */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            background: 'white',
            borderRadius: '20px',
            padding: '48px',
            width: '100%',
            maxWidth: '420px',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.08)',
          }}
        >
          {/* Logo mark inside card */}
          <div style={{ marginBottom: '32px', textAlign: 'center' }}>
            <div style={{ margin: '0 auto 16px', width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/logo-dark.svg" alt="" style={{ height: 40, width: 'auto' }} />
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '32px',
                fontWeight: 700,
                color: '#111',
                letterSpacing: '-1px',
                marginBottom: '8px',
              }}
            >
              Welcome back
            </h1>
            <p
              style={{
                fontSize: '15px',
                color: '#666',
                lineHeight: 1.5,
              }}
            >
              Sign in to access your course
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Email */}
            <div className="form-field">
              <label htmlFor="login-email">Email Address</label>
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            {/* Password */}
            <div className="form-field">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'rgb(120,181,57)',
                color: 'white',
                fontFamily: 'var(--font-main)',
                fontSize: '16px',
                fontWeight: 700,
                padding: '16px 32px',
                borderRadius: '100px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                marginTop: '8px',
                transition: 'opacity 0.15s ease, transform 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.85';
                e.currentTarget.style.transform = 'scale(0.98)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Sign in
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>

          {/* Forgot password */}
          <p
            style={{
              textAlign: 'center',
              marginTop: '16px',
              fontSize: '13px',
              color: '#999',
            }}
          >
            <a
              href="#"
              style={{
                color: '#999',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#111')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
            >
              Forgot password?
            </a>
          </p>

          {/* Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              margin: '28px 0',
            }}
          >
            <div
              style={{
                flex: 1,
                height: '1px',
                background: 'rgba(0,0,0,0.08)',
              }}
            />
            <span
              style={{
                fontSize: '12px',
                color: '#999',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              or
            </span>
            <div
              style={{
                flex: 1,
                height: '1px',
                background: 'rgba(0,0,0,0.08)',
              }}
            />
          </div>

          {/* Enrol link */}
          <p
            style={{
              textAlign: 'center',
              fontSize: '14px',
              color: '#666',
              lineHeight: 1.5,
            }}
          >
            Don&apos;t have an account?{' '}
            <Link
              href="/publish-with-onyx"
              style={{
                color: 'rgb(120,181,57)',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Enrol now &rarr;
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
