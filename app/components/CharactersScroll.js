'use client';

import { useEffect, useRef } from 'react';

const characters = [
  { emoji:'', name:'Strawberry', power:'Power of Courage',    powerColor:'#e8365d', bgColor:'rgba(232,54,93,0.12)',   body:"Strawberry is the bravest fruit in Freshland. When the others are scared, she leads the way — reminding us that courage isn't the absence of fear, it's doing it anyway." },
  { emoji:'', name:'Banana',    power:'Power of Joy',         powerColor:'#f5c518', bgColor:'rgba(245,197,24,0.12)',  body:"Banana brings sunshine to every corner of Freshland. His laughter is contagious and his energy unstoppable — a reminder that happiness is a superpower all of its own." },
  { emoji:'', name:'Apple',     power:'Power of Focus',       powerColor:'#c0392b', bgColor:'rgba(192,57,43,0.12)',   body:"Apple is the sharpest mind in the orchard. She teaches that staying present and focused — even when distractions abound — is how great things get done." },
  { emoji:'', name:'Orange',    power:'Power of Energy',      powerColor:'#f39c12', bgColor:'rgba(243,156,18,0.12)',  body:"Orange never runs out of fizz! His boundless energy and enthusiasm inspire everyone around him to jump in, try new things, and keep moving forward." },
  { emoji:'', name:'Broccoli',  power:'Power of Strength',    powerColor:'#27ae60', bgColor:'rgba(39,174,96,0.12)',   body:"Broccoli is the strongest friend in Freshland — not just in muscles, but in character. He shows children that true strength comes from helping others and never giving up." },
  { emoji:'', name:'Carrot',    power:'Power of Vision',      powerColor:'#e67e22', bgColor:'rgba(230,126,34,0.12)',  body:"Carrot can see what others miss. Her far-sighted vision teaches children to look beyond the obvious and imagine what's possible." },
  { emoji:'', name:'Lemon',     power:'Power of Resilience',  powerColor:'#f1c40f', bgColor:'rgba(241,196,15,0.12)',  body:"When life gives Lemon lemons, he makes lemonade — and shares it with everyone. His resilience teaches children to bounce back stronger every time." },
  { emoji:'', name:'Coconut',   power:'Power of Calm',        powerColor:'#8e7560', bgColor:'rgba(142,117,96,0.12)',  body:"Coconut carries stillness wherever she goes. In a busy world, she teaches children the art of breathing, slowing down, and finding peace within themselves." },
];

export default function CharactersScroll() {
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!wrapper || !section || !track) return;

    let cancelled = false;
    let ctx;

    async function init() {
      try {
        const { gsap }          = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.getAll()
          .filter(t => t.trigger === wrapper)
          .forEach(t => t.kill());

        const panels      = track.querySelectorAll('.panel');
        const totalPanels = panels.length;

        ctx = gsap.context(() => {
          gsap.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
              trigger: wrapper,
              scrub: 1,
              invalidateOnRefresh: true,
              start: 'top top',
              end: () => `+=${track.scrollWidth - window.innerWidth}`,
              onUpdate(self) {
                const pp  = self.progress * totalPanels;
                const cur = Math.min(Math.floor(pp), totalPanels - 1);
                const pct = (pp - cur) * 100;
                section.querySelectorAll('.snav-item').forEach((item, i) => item.classList.toggle('active', i === cur));
                section.querySelectorAll('.snav-fill').forEach((fill, i) => {
                  fill.style.width = i < cur ? '100%' : i === cur ? pct + '%' : '0%';
                });
              },
            },
          });
        }, section);
      } catch (e) {
        console.warn('GSAP load failed:', e);
      }
    }

    init();
    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div id="characters" ref={wrapperRef} style={{ height: `${characters.length * 100}vw` }}>
    <section className="services-scroll" ref={sectionRef} style={{ position: 'sticky', top: 0 }}>
      <div className="services-track" ref={trackRef}>
        {characters.map((char, i) => (
          <div className="panel" key={char.name}>
            <div className="panel-inner">
              <div className="panel-left">
                <span className="panel-label">Character {String(i + 1).padStart(2, '0')} / 08</span>
                <h2 className="panel-title">{char.name}</h2>
                <p className="panel-power" style={{ color: char.powerColor }}>{char.power}</p>
                <p className="panel-body">{char.body}</p>
                <a href="#books" className="panel-cta">
                  Read the book
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className="panel-right">
                <div className="panel-visual" style={{ background: char.bgColor }}>
                  {char.emoji}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="services-nav">
        {characters.map((char, i) => (
          <div key={char.name} className={`snav-item${i === 0 ? ' active' : ''}`}>
            <span className="snav-icon">{char.emoji}</span>
            <div className="snav-bar"><div className="snav-fill" /></div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
