import { useEffect, useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../../components/usePageTitle";

/* ─── Particle system ─── */
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; alpha: number;
  decay: number; color: string;
}

const COLORS = ["#3b82f6", "#6366f1", "#8b5cf6", "#a78bfa", "#c4b5fd", "#ffffff"];

function spawnParticle(W: number, H: number): Particle {
  const angle = Math.random() * Math.PI * 2;
  const speed = Math.random() * 0.6 + 0.1;
  return {
    x: W / 2 + (Math.random() - 0.5) * W * 0.8,
    y: H / 2 + (Math.random() - 0.5) * H * 0.8,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    size: Math.random() * 1.8 + 0.3,
    alpha: Math.random() * 0.7 + 0.2,
    decay: Math.random() * 0.0015 + 0.0005,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}

/* ─── Shooting star ─── */
interface Streak {
  x: number; y: number;
  len: number; angle: number;
  speed: number; alpha: number; life: number;
}

function spawnStreak(W: number, H: number): Streak {
  const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5;
  return {
    x: Math.random() * W, y: Math.random() * H * 0.4,
    len: Math.random() * 120 + 60,
    angle, speed: Math.random() * 8 + 5,
    alpha: 0.8, life: 1,
  };
}

const NotFound = () => {
  usePageTitle("404 — Not Found");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const [count, setCount] = useState(12);
  const [visible, setVisible] = useState(false);

  /* fade in */
  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  /* countdown */
  useEffect(() => {
    if (count <= 0) { navigate("/"); return; }
    const t = setTimeout(() => setCount(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [count, navigate]);

  const goHome = useCallback(() => navigate("/"), [navigate]);

  /* ─── Canvas ─── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth, H = window.innerHeight;
    let raf: number;

    const resize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
    };
    resize();
    window.addEventListener("resize", resize);

    /* seed particles */
    const particles: Particle[] = Array.from({ length: 220 }, () => spawnParticle(W, H));
    const streaks: Streak[] = [];
    let streakTimer = 0;

    const draw = () => {
      /* deep space bg */
      ctx.fillStyle = "#00000f";
      ctx.fillRect(0, 0, W, H);

      /* subtle nebula smear — two large soft blobs */
      const n1 = ctx.createRadialGradient(W * 0.3, H * 0.4, 0, W * 0.3, H * 0.4, W * 0.45);
      n1.addColorStop(0, "rgba(59,44,130,0.18)");
      n1.addColorStop(1, "transparent");
      ctx.fillStyle = n1; ctx.fillRect(0, 0, W, H);

      const n2 = ctx.createRadialGradient(W * 0.72, H * 0.6, 0, W * 0.72, H * 0.6, W * 0.38);
      n2.addColorStop(0, "rgba(29,78,216,0.14)");
      n2.addColorStop(1, "transparent");
      ctx.fillStyle = n2; ctx.fillRect(0, 0, W, H);

      /* particles */
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.alpha -= p.decay;
        if (p.alpha <= 0) { particles[i] = spawnParticle(W, H); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
      }

      /* shooting stars */
      streakTimer++;
      if (streakTimer > 90 + Math.random() * 120) {
        streaks.push(spawnStreak(W, H));
        streakTimer = 0;
      }
      for (let i = streaks.length - 1; i >= 0; i--) {
        const s = streaks[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.life -= 0.018; s.alpha = s.life * 0.8;
        if (s.life <= 0) { streaks.splice(i, 1); continue; }
        const tx = s.x - Math.cos(s.angle) * s.len;
        const ty = s.y - Math.sin(s.angle) * s.len;
        const sg = ctx.createLinearGradient(tx, ty, s.x, s.y);
        sg.addColorStop(0, "transparent");
        sg.addColorStop(1, `rgba(255,255,255,${s.alpha})`);
        ctx.beginPath();
        ctx.moveTo(tx, ty); ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = sg; ctx.lineWidth = 1.5; ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else draw();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <>
      <style>{`
        body:has(.nf-page) { overflow: hidden; }

        .nf-page {
          position: fixed; inset: 0; z-index: 10;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Poppins', sans-serif;
        }

        canvas.nf-bg { position: absolute; inset: 0; display: block; }

        /* vignette */
        .nf-vig {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.82) 100%);
        }

        /* centre content */
        .nf-body {
          position: relative; z-index: 2;
          display: flex; flex-direction: column; align-items: center;
          gap: 0; text-align: center; padding: 20px;
          opacity: 0; transform: translateY(22px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .nf-body.show { opacity: 1; transform: translateY(0); }

        /* thin top line */
        .nf-line {
          width: 48px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(139,92,246,0.8), transparent);
          margin-bottom: 32px;
        }

        /* giant number */
        .nf-num {
          font-size: clamp(7rem, 22vw, 14rem);
          font-weight: 900; line-height: 1;
          letter-spacing: -6px;
          background: linear-gradient(160deg, #fff 0%, #6366f1 55%, #312e81 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          user-select: none;
          animation: numFloat 6s ease-in-out infinite;
        }
        @keyframes numFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }

        /* label */
        .nf-label {
          font-size: 0.7rem; letter-spacing: 6px; text-transform: uppercase;
          color: rgba(255,255,255,0.3); margin-top: 10px; margin-bottom: 18px;
          font-weight: 500;
        }

        /* divider */
        .nf-rule {
          width: 1px; height: 44px;
          background: linear-gradient(to bottom, rgba(99,102,241,0.6), transparent);
          margin-bottom: 18px;
        }

        /* message */
        .nf-msg {
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 300; color: rgba(255,255,255,0.65);
          line-height: 1.6; max-width: 380px; margin-bottom: 40px;
          letter-spacing: 0.2px;
        }
        .nf-msg strong { color: #fff; font-weight: 600; }

        /* buttons */
        .nf-btns { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }

        .nf-btn {
          padding: 11px 28px; border-radius: 6px;
          font-size: 0.8rem; font-weight: 600; letter-spacing: 1.5px;
          text-transform: uppercase; cursor: pointer;
          transition: all 0.25s ease; border: none;
          font-family: 'Poppins', sans-serif;
        }
        .nf-btn-primary {
          background: rgba(99,102,241,0.15);
          border: 1px solid rgba(99,102,241,0.5);
          color: #a5b4fc;
        }
        .nf-btn-primary:hover {
          background: rgba(99,102,241,0.3);
          border-color: #6366f1;
          color: #fff;
          box-shadow: 0 0 24px rgba(99,102,241,0.35);
          transform: translateY(-2px);
        }
        .nf-btn-ghost {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.3);
        }
        .nf-btn-ghost:hover {
          border-color: rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.7);
          transform: translateY(-2px);
        }

        /* countdown strip */
        .nf-foot {
          position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%);
          font-size: 0.68rem; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.15); white-space: nowrap;
          font-family: 'Courier New', monospace;
          opacity: 0; transition: opacity 1.2s ease 1s;
        }
        .nf-foot.show { opacity: 1; }

        .nf-foot-bar {
          display: inline-block;
          width: calc(${12} * 6px);
          height: 1px;
          background: rgba(99,102,241,0.4);
          vertical-align: middle;
          margin: 0 10px;
          position: relative;
          overflow: hidden;
        }
        .nf-foot-bar::after {
          content: '';
          position: absolute; top: 0; left: 0; height: 100%;
          background: #6366f1;
          animation: barDrain 12s linear forwards;
        }
        @keyframes barDrain { from { width: 100%; } to { width: 0%; } }

        @media (max-width: 480px) {
          .nf-num { letter-spacing: -3px; }
          .nf-btns { flex-direction: column; align-items: center; }
          .nf-btn { width: 200px; text-align: center; }
        }
      `}</style>

      <div className="nf-page">
        <canvas ref={canvasRef} className="nf-bg" aria-hidden="true" />
        <div className="nf-vig" aria-hidden="true" />

        <div className={`nf-body ${visible ? "show" : ""}`}>
          <div className="nf-line" />
          <div className="nf-num">404</div>
          <p className="nf-label">Page not found</p>
          <div className="nf-rule" />
          <p className="nf-msg">
            The page you're looking for<br />
            <strong>doesn't exist.</strong>
          </p>
          <div className="nf-btns">
            <button className="nf-btn nf-btn-primary" onClick={goHome}>Go Home</button>
            <button className="nf-btn nf-btn-ghost" onClick={() => window.history.back()}>Go Back</button>
          </div>
        </div>

        <div className={`nf-foot ${visible ? "show" : ""}`}>
          Redirecting in {count}s
          <span className="nf-foot-bar" />
        </div>
      </div>
    </>
  );
};

export default NotFound;
