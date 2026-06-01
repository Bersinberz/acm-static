import { useEffect, useRef, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../../components/usePageTitle";

/* ── Blob config ── */
const BLOBS = [
  { x: 0.2, y: 0.3, r: 260, color: "#1d4ed8", dx: 0.18, dy: 0.13 },
  { x: 0.7, y: 0.6, r: 220, color: "#7c3aed", dx: -0.14, dy: 0.17 },
  { x: 0.5, y: 0.8, r: 190, color: "#0e7490", dx: 0.12, dy: -0.15 },
  { x: 0.85, y: 0.2, r: 170, color: "#4f46e5", dx: -0.16, dy: 0.12 },
  { x: 0.1, y: 0.75, r: 150, color: "#6d28d9", dx: 0.19, dy: -0.11 },
];

/* ── Bouncing text config ── */
const TEXT = "LOST IN THE VOID";
const FONT_SIZE = 28;
const FONT = `bold ${FONT_SIZE}px "Courier New", monospace`;

interface BlobState {
  x: number; y: number; r: number;
  color: string; dx: number; dy: number;
}

interface TextState {
  x: number; y: number; dx: number; dy: number;
  hue: number; dHue: number;
}

const NotFound = () => {
  usePageTitle("404 — Lost in the Void");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15);

  /* ── Countdown → redirect ── */
  useEffect(() => {
    if (countdown <= 0) { navigate("/"); return; }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown, navigate]);

  const goHome = useCallback(() => navigate("/"), [navigate]);

  /* ── Canvas animation ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener("resize", resize);

    /* Init blobs */
    const blobs: BlobState[] = BLOBS.map(b => ({
      x: b.x * W, y: b.y * H,
      r: b.r, color: b.color,
      dx: b.dx, dy: b.dy,
    }));

    /* Measure text width once */
    ctx.font = FONT;
    const TW = ctx.measureText(TEXT).width;
    const TH = FONT_SIZE;

    /* Init bouncing text — start roughly centered */
    const txt: TextState = {
      x: W / 2 - TW / 2,
      y: H / 2,
      dx: 1.1,
      dy: 0.85,
      hue: 200,
      dHue: 0.4,
    };

    const draw = () => {
      /* ── Background ── */
      ctx.fillStyle = "#000008";
      ctx.fillRect(0, 0, W, H);

      /* ── Blobs ── */
      for (const b of blobs) {
        /* Bounce off walls */
        if (b.x - b.r < 0 || b.x + b.r > W) b.dx *= -1;
        if (b.y - b.r < 0 || b.y + b.r > H) b.dy *= -1;
        b.x += b.dx;
        b.y += b.dy;

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, b.color + "55");
        grad.addColorStop(0.5, b.color + "22");
        grad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      /* ── Bouncing text ── */
      /* Bounce off walls */
      if (txt.x < 0 || txt.x + TW > W) {
        txt.dx *= -1;
        txt.x = txt.x < 0 ? 0 : W - TW;
      }
      if (txt.y - TH < 0 || txt.y > H) {
        txt.dy *= -1;
        txt.y = txt.y - TH < 0 ? TH : H;
      }
      txt.x += txt.dx;
      txt.y += txt.dy;

      /* Cycle hue */
      txt.hue = (txt.hue + txt.dHue) % 360;

      ctx.font = FONT;
      ctx.fillStyle = `hsl(${txt.hue}, 80%, 70%)`;
      ctx.fillText(TEXT, txt.x, txt.y);

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <style>{`
        body:has(.nf-wrap) { overflow: hidden; }

        .nf-wrap {
          position: fixed;
          inset: 0;
          z-index: 10;
        }

        .nf-canvas {
          position: absolute;
          inset: 0;
          display: block;
        }

        /* Subtle vignette */
        .nf-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.75) 100%);
        }

        /* Bottom HUD */
        .nf-hud {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 20px;
          font-family: 'Courier New', monospace;
          font-size: 0.78rem;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.25);
          white-space: nowrap;
        }

        .nf-hud-sep {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.12);
        }

        .nf-hud-btn {
          background: none;
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(255,255,255,0.45);
          font-family: 'Courier New', monospace;
          font-size: 0.78rem;
          letter-spacing: 2px;
          padding: 6px 18px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
        }

        .nf-hud-btn:hover {
          border-color: rgba(255,255,255,0.5);
          color: rgba(255,255,255,0.9);
          background: rgba(255,255,255,0.05);
        }
      `}</style>

      <div className="nf-wrap">
        <canvas ref={canvasRef} className="nf-canvas" />
        <div className="nf-vignette" />

        <div className="nf-hud">
          <span>404</span>
          <div className="nf-hud-sep" />
          <span>PAGE NOT FOUND</span>
          <div className="nf-hud-sep" />
          <span>HOME IN {countdown}S</span>
          <div className="nf-hud-sep" />
          <button className="nf-hud-btn" onClick={goHome}>GO HOME</button>
          <button className="nf-hud-btn" onClick={() => window.history.back()}>GO BACK</button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
