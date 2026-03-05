import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo-dark.svg" alt="The Fresh Friends" />
            <p>
              A children's book series celebrating the extraordinary nature
              powers within every fruit, vegetable — and child.
            </p>
            <div className="footer-social">
              {/* Instagram */}
              <a
                href="https://instagram.com/thefreshfriends"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0" />
                </svg>
              </a>
              {/* Facebook — disabled */}
              <span aria-label="Facebook" style={{ opacity: 0.25, cursor: 'default', width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15, stroke: 'currentColor' }}>
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </span>
              {/* TikTok — disabled */}
              <span aria-label="TikTok" style={{ opacity: 0.25, cursor: 'default', width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15, stroke: 'currentColor' }}>
                  <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />
                </svg>
              </span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Account</h4>
            <ul>
              <li><Link href="/dashboard">Dashboard</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 The Fresh Friends. Made with{' '}
            <span>&#9829;</span> in London.
          </p>
          <div className="footer-legal">
            <span style={{ opacity: 0.4, cursor: 'default' }}>Privacy Policy</span>
            <span style={{ opacity: 0.4, cursor: 'default' }}>Terms of Use</span>
            <span style={{ opacity: 0.4, cursor: 'default' }}>Cookie Settings</span>
          </div>
        </div>
      </div>

      <p className="footer-wordmark">The Fresh Friends</p>
    </footer>
  );
}
