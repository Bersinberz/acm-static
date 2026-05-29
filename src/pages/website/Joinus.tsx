import React, { useEffect, useRef } from 'react';
import { motion as m } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import usePageTitle from '../../components/usePageTitle';

/* ── Particle canvas ─────────────────────────────────────────────────── */
const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* palette matching the site's nebula: white, blue, purple */
    const COLORS = [
      'rgba(255,255,255,',
      'rgba(147,197,253,',   // #93c5fd
      'rgba(167,139,250,',   // #a78bfa
      'rgba(59,130,246,',    // #3b82f6
    ];

    interface Particle {
      x: number; y: number;
      r: number;
      alpha: number;
      speed: number;
      drift: number;
      color: string;
      twinkleSpeed: number;
      twinkleOffset: number;
    }

    const COUNT = 120;
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.6 + 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.35 + 0.08,
      drift: (Math.random() - 0.5) * 0.25,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    let tick = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick++;

      for (const p of particles) {
        /* twinkle */
        const alpha = p.alpha * (0.5 + 0.5 * Math.sin(tick * p.twinkleSpeed + p.twinkleOffset));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alpha.toFixed(3)})`;
        ctx.fill();

        /* drift upward */
        p.y -= p.speed;
        p.x += p.drift;

        /* wrap around */
        if (p.y < -4) {
          p.y = canvas.height + 4;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -4)              p.x = canvas.width  + 4;
        if (p.x > canvas.width + 4) p.x = -4;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
      }}
    />
  );
};

/* ── Page ────────────────────────────────────────────────────────────── */
const JoinUs: React.FC = () => {
  usePageTitle('Join Us');
  return (
  <div style={{
    width: '100%', minHeight: '100vh',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    fontFamily: "'Poppins', sans-serif",
    textAlign: 'center', padding: '24px',
    position: 'relative', overflow: 'hidden',
  }}>
    <style>{`
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0; }
      }
      @keyframes orb {
        0%, 100% { transform: scale(1);   opacity: 0.5; }
        50%       { transform: scale(1.1); opacity: 0.8; }
      }
      @keyframes shimmer {
        0%   { background-position: -400% center; }
        100% { background-position:  400% center; }
      }
      @keyframes lineGrow {
        from { transform: scaleX(0); }
        to   { transform: scaleX(1); }
      }
      @keyframes floatDot {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-8px); }
      }

      .jo-title {
        font-size: clamp(2.6rem, 7vw, 5.5rem);
        font-weight: 900;
        letter-spacing: -2px;
        line-height: 1.1;
        margin: 0 0 8px;
        background: linear-gradient(
          120deg,
          #ffffff 0%,
          #93c5fd 30%,
          #3b82f6 55%,
          #a78bfa 80%,
          #ffffff 100%
        );
        background-size: 300% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 6s linear infinite;
      }

      .jo-sub {
        font-size: clamp(0.85rem, 2vw, 1rem);
        font-weight: 400;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #94a3b8;
        margin: 0;
      }

      .jo-line {
        width: 80px; height: 1px;
        background: linear-gradient(90deg, transparent, #3b82f6, transparent);
        transform-origin: center;
        animation: lineGrow 1s ease forwards;
      }

      .jo-dot {
        width: 8px; height: 8px; border-radius: 50%;
        background: #3b82f6;
        box-shadow: 0 0 12px #3b82f6, 0 0 24px rgba(59,130,246,0.4);
        animation: floatDot 2.5s ease-in-out infinite;
      }
    `}</style>

    {/* ── particle field ── */}
    <ParticleCanvas />

    {/* ── ambient orbs (behind particles) ── */}
    <div style={{ position: 'fixed', top: '15%', left: '8%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)', animation: 'orb 8s ease-in-out infinite', pointerEvents: 'none', zIndex: 0 }} />
    <div style={{ position: 'fixed', bottom: '12%', right: '8%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)', animation: 'orb 10s ease-in-out infinite 2s', pointerEvents: 'none', zIndex: 0 }} />

    {/* ── content ── */}
    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>

      <m.h1
        className="jo-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        Recruitments<br />Opening Soon
      </m.h1>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
      >
        <div className="jo-line" />
        <div className="jo-dot" />
        <div className="jo-line" />
      </m.div>

      <m.p
        className="jo-sub"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        Stay Tuned for Updates
      </m.p>

      <m.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
      >
        <a
          href="https://www.instagram.com/sist_sigai/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '10px 24px', borderRadius: 50,
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.04)',
            color: 'rgba(255,255,255,0.55)',
            fontSize: 13, fontWeight: 600, textDecoration: 'none',
            letterSpacing: 0.5, backdropFilter: 'blur(8px)',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.borderColor = '#e1306c';
            el.style.color = '#fff';
            el.style.background = 'rgba(225,48,108,0.12)';
            el.style.transform = 'translateY(-3px)';
            el.style.boxShadow = '0 8px 24px rgba(225,48,108,0.2)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.borderColor = 'rgba(255,255,255,0.1)';
            el.style.color = 'rgba(255,255,255,0.55)';
            el.style.background = 'rgba(255,255,255,0.04)';
            el.style.transform = 'translateY(0)';
            el.style.boxShadow = 'none';
          }}
        >
          <FaInstagram size={15} /> Instagram
        </a>

        <a
          href="https://www.linkedin.com/company/sist-acm-sigai-student-chapter/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '10px 24px', borderRadius: 50,
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.04)',
            color: 'rgba(255,255,255,0.55)',
            fontSize: 13, fontWeight: 600, textDecoration: 'none',
            letterSpacing: 0.5, backdropFilter: 'blur(8px)',
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.borderColor = '#0a66c2';
            el.style.color = '#fff';
            el.style.background = 'rgba(10,102,194,0.12)';
            el.style.transform = 'translateY(-3px)';
            el.style.boxShadow = '0 8px 24px rgba(10,102,194,0.2)';
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.borderColor = 'rgba(255,255,255,0.1)';
            el.style.color = 'rgba(255,255,255,0.55)';
            el.style.background = 'rgba(255,255,255,0.04)';
            el.style.transform = 'translateY(0)';
            el.style.boxShadow = 'none';
          }}
        >
          <FaLinkedin size={15} /> LinkedIn
        </a>
      </m.div>

    </div>
  </div>
  );
};

export default JoinUs;
