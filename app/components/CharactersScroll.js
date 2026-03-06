'use client';

import { useLayoutEffect, useRef, useEffect, useState } from 'react';

/* On iOS Safari, mix-blend-mode has no effect on <video> elements because the browser
   hardware-decodes video in a separate compositor layer. Even on <canvas>, blend modes
   can fail inside GSAP-pinned sections due to stacking context issues.
   Solution: pixel-level black removal via getImageData/putImageData — no CSS blend modes. */
function VideoBlend({ src, className }) {
  const [ios, setIos] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const isIos =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIos(isIos);
  }, []);

  useEffect(() => {
    if (!ios) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    // willReadFrequently: true tells the browser to optimise for repeated getImageData calls
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let sized = false;
    let lastTime = -1;

    function draw() {
      if (video.readyState >= 2) {
        if (!sized && video.videoWidth) {
          canvas.width  = video.videoWidth;
          canvas.height = video.videoHeight;
          sized = true;
        }
        // Only reprocess when the video has advanced to a new frame
        if (sized && video.currentTime !== lastTime) {
          lastTime = video.currentTime;
          ctx.drawImage(video, 0, 0);

          try {
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const d = imgData.data;
            for (let i = 0; i < d.length; i += 4) {
              // Use perceived brightness to detect the black background
              const brightness = (d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114);
              if (brightness < 30) {
                d[i + 3] = 0;                                          // fully transparent
              } else if (brightness < 70) {
                d[i + 3] = Math.round(((brightness - 30) / 40) * 255); // soft edge fade
              }
            }
            ctx.putImageData(imgData, 0, 0);
          } catch (_) {
            // getImageData blocked (shouldn't happen for same-origin) — canvas still renders
          }
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [ios, src]);

  if (ios) {
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* Keep video off-screen (not display:none) so iOS continues decoding frames */}
        <video
          ref={videoRef}
          src={src}
          autoPlay loop muted playsInline
          style={{ position: 'absolute', left: '-9999px', top: 0, height: '420px', width: 'auto' }}
        />
        <canvas
          ref={canvasRef}
          className={className}
          style={{ height: '420px', width: 'auto', display: 'block' }}
        />
      </div>
    );
  }

  return <video className={className} src={src} autoPlay loop muted playsInline />;
}

const characters = [
  { emoji:'🍓', name:'Strawberry',   power:'Power of Courage',      powerColor:'#e8365d', bgColor:'rgba(232,54,93,0.12)',   video:'/strawberry-loop.webm',   body:"Strawberry is the bravest fruit in Freshland. When the others are scared, she leads the way — reminding us that courage isn't the absence of fear, it's doing it anyway." },
  { emoji:'🍌', name:'Banana',       power:'Power of Joy',           powerColor:'#f5c518', bgColor:'rgba(245,197,24,0.12)',  video:'/banana-loop.webm',       body:"Banana brings sunshine to every corner of Freshland. His laughter is contagious and his energy unstoppable — a reminder that happiness is a superpower all of its own." },
  { emoji:'🍎', name:'Apple',        power:'Power of Focus',         powerColor:'#c0392b', bgColor:'rgba(192,57,43,0.12)',   video:'/apple-loop.webm',        body:"Apple is the sharpest mind in the orchard. She teaches that staying present and focused — even when distractions abound — is how great things get done." },
  { emoji:'🍊', name:'Orange',       power:'Power of Energy',        powerColor:'#f39c12', bgColor:'rgba(243,156,18,0.12)',  video:'/orange-loop.webm',       body:"Orange never runs out of fizz! His boundless energy and enthusiasm inspire everyone around him to jump in, try new things, and keep moving forward." },
  { emoji:'🥦', name:'Broccoli',     power:'Power of Strength',      powerColor:'#27ae60', bgColor:'rgba(39,174,96,0.12)',   video:'/broccoli-loop.webm',     body:"Broccoli is the strongest friend in Freshland — not just in muscles, but in character. He shows children that true strength comes from helping others and never giving up." },
  { emoji:'🥕', name:'Carrot',       power:'Power of Vision',        powerColor:'#e67e22', bgColor:'rgba(230,126,34,0.12)',  video:'/carrot-loop.webm',       body:"Carrot can see what others miss. Her far-sighted vision teaches children to look beyond the obvious and imagine what's possible." },
  { emoji:'🥬', name:'Cauliflower',  power:'Power of Imagination',   powerColor:'#8e44ad', bgColor:'rgba(142,68,173,0.12)',  video:'/cauliflower-loop.webm',  body:"Cauliflower's creamy white head hides a world of possibility. She teaches children that the most extraordinary ideas often come from the quietest minds — and that imagination has no limits." },
  { emoji:'🥥', name:'Coconut',      power:'Power of Calm',          powerColor:'#8e7560', bgColor:'rgba(142,117,96,0.12)',  video:'/coconut-loop.webm',      body:"Coconut carries stillness wherever she goes. In a busy world, she teaches children the art of breathing, slowing down, and finding peace within themselves." },
];

export default function CharactersScroll() {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);
  const sceneBgRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    const sceneBg = sceneBgRef.current;
    if (!section || !track) return;

    let cancelled = false;
    let ctx;

    async function init() {
      try {
        const { gsap }          = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.getAll()
          .filter(t => t.trigger === section || t.pin === section)
          .forEach(t => t.kill());

        const totalPanels = characters.length;

        ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              pin: true,
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

          tl.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth),
            ease: 'none',
          }, 0);

          if (sceneBg) {
            tl.to(sceneBg, {
              x: () => -(track.scrollWidth - window.innerWidth) * 0.28,
              ease: 'none',
            }, 0);
          }
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
    <section className="services-scroll" id="characters" ref={sectionRef}>

      {/* Landscape background */}
      <svg
        ref={sceneBgRef}
        className="scene-bg"
        viewBox="0 0 4000 800"
        preserveAspectRatio="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sky */}
        <rect width="4000" height="800" fill="#c5ede0" />

        {/* Mountains — bases at y=460 */}
        <polygon points="0,460 290,95 580,460"       fill="#9ab5a3" />
        <polygon points="410,460 630,215 850,460"    fill="#b0c8bc" />
        <polygon points="720,460 870,315 1020,460"   fill="#9ab5a3" />
        <polygon points="880,460 1240,120 1600,460"  fill="#b0c8bc" />
        <polygon points="1280,460 1490,255 1700,460" fill="#9ab5a3" />
        <polygon points="1540,460 1685,348 1830,460" fill="#b0c8bc" />
        <polygon points="1720,460 2045,165 2370,460" fill="#9ab5a3" />
        <polygon points="2060,460 2255,298 2450,460" fill="#b0c8bc" />
        <polygon points="2220,460 2595,118 2970,460" fill="#9ab5a3" />
        <polygon points="2640,460 2840,260 3040,460" fill="#b0c8bc" />
        <polygon points="2880,460 3045,362 3210,460" fill="#9ab5a3" />
        <polygon points="3030,460 3370,135 3710,460" fill="#b0c8bc" />
        <polygon points="3330,460 3535,278 3740,460" fill="#9ab5a3" />
        <polygon points="3580,460 3785,382 3990,460" fill="#b0c8bc" />

        {/* Ground */}
        <rect x="0" y="460" width="4000" height="340" fill="#78c44a" />
        {/* Bright grass trim */}
        <rect x="0" y="452" width="4000" height="16" fill="#8fd95a" />

        {/* Round tree 1 */}
        <rect x="285" y="335" width="30" height="125" rx="5" fill="#7b4a2a" />
        <circle cx="300" cy="278" r="78" fill="#3d7a3d" />

        {/* Pine tree 1 */}
        <polygon points="988,460 1060,265 1132,460"  fill="#2d6e40" />
        <polygon points="1002,382 1060,222 1118,382" fill="#398f58" />
        <rect x="1045" y="385" width="30" height="75" rx="5" fill="#7b4a2a" />

        {/* Round tree 2 (smaller) */}
        <rect x="1738" y="368" width="22" height="92" rx="4" fill="#7b4a2a" />
        <circle cx="1749" cy="320" r="58" fill="#3d7a3d" />

        {/* Pine tree 2 */}
        <polygon points="2412,460 2480,268 2548,460"  fill="#2d6e40" />
        <polygon points="2426,382 2480,226 2534,382"  fill="#398f58" />
        <rect x="2465" y="390" width="30" height="70" rx="5" fill="#7b4a2a" />

        {/* Round tree 3 */}
        <rect x="3085" y="350" width="28" height="110" rx="5" fill="#7b4a2a" />
        <circle cx="3099" cy="290" r="70" fill="#3d7a3d" />

        {/* Pine tree 3 */}
        <polygon points="3690,460 3750,268 3810,460"  fill="#2d6e40" />
        <polygon points="3704,382 3750,226 3796,382"  fill="#398f58" />
        <rect x="3735" y="395" width="28" height="65" rx="5" fill="#7b4a2a" />
      </svg>

      {/* Character panels */}
      <div className="services-track" ref={trackRef}>
        {characters.map((char) => (
          <div className="panel" key={char.name}>
            <div className="panel-inner">
              <div className="panel-left">
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
                {char.video ? (
                  <VideoBlend src={char.video} className="panel-video" />
                ) : (
                  <div className="panel-visual" style={{ background: char.bgColor }}>
                    {char.emoji}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="services-nav">
        {characters.map((char, i) => (
          <div key={char.name} className={`snav-item${i === 0 ? ' active' : ''}`}>
            <span className="snav-icon">{char.emoji}</span>
            <div className="snav-bar"><div className="snav-fill" /></div>
          </div>
        ))}
      </div>
    </section>
  );
}
