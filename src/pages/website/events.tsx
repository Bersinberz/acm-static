import React from 'react';
import { motion as m } from "framer-motion";
import usePageTitle from '../../components/usePageTitle';

const Events: React.FC = () => {
  usePageTitle('Events');

  return (
    <>
      <style>{`
        body:has(.ev-wrap) { overflow: hidden; }

        .ev-wrap {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        /* deep bg */
        .ev-wrap::before {
          content: '';
          position: absolute; inset: 0; z-index: 0;
          background: radial-gradient(ellipse at 50% 50%, #0a0a1a 0%, #000 100%);
        }

        /* orbs */
        .ev-orb {
          position: absolute; border-radius: 50%;
          filter: blur(100px); pointer-events: none; z-index: 0;
        }
        .ev-orb-1 { width: 500px; height: 500px; background: #1d4ed8; top: -160px; left: -160px; opacity: 0.1; animation: o1 16s ease-in-out infinite alternate; }
        .ev-orb-2 { width: 400px; height: 400px; background: #4f46e5; bottom: -130px; right: -130px; opacity: 0.1; animation: o2 20s ease-in-out infinite alternate; }
        .ev-orb-3 { width: 260px; height: 260px; background: #0ea5e9; top: 50%; left: 55%; opacity: 0.07; animation: o3 14s ease-in-out infinite alternate; }
        @keyframes o1 { to { transform: translate(50px, 40px) scale(1.1); } }
        @keyframes o2 { to { transform: translate(-40px, -30px) scale(1.08); } }
        @keyframes o3 { to { transform: translate(-30px, 20px) scale(1.15); } }

        /* scanlines */
        .ev-scan {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px
          );
        }

        /* vignette */
        .ev-vig {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
          background: radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.8) 100%);
        }

        /* content */
        .ev-content {
          position: relative; z-index: 2;
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          padding: 20px;
          gap: 0;
        }

        /* top label */
        .ev-label {
          font-size: 0.68rem; letter-spacing: 5px; text-transform: uppercase;
          color: rgba(255,255,255,0.2); margin-bottom: 28px;
          font-family: 'Courier New', monospace;
        }

        /* main heading */
        .ev-heading {
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: 900; line-height: 1.1;
          letter-spacing: -1px; margin: 0 0 6px;
          background: linear-gradient(135deg, #fff 0%, #93c5fd 60%, #6366f1 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        /* thin rule */
        .ev-rule {
          width: 40px; height: 1px; margin: 22px auto;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.7), transparent);
        }

        /* sub text */
        .ev-sub {
          font-size: 0.9rem; color: #475569;
          letter-spacing: 0.3px; line-height: 1.7;
          max-width: 340px; margin-bottom: 36px;
          font-weight: 300;
        }

        /* pulsing pill */
        .ev-pill {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 10px 22px; border-radius: 50px;
          background: rgba(59,130,246,0.07);
          border: 1px solid rgba(59,130,246,0.2);
          font-size: 0.78rem; color: #93c5fd;
          letter-spacing: 1px; font-weight: 500;
        }
        .ev-pill-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #3b82f6; box-shadow: 0 0 8px #3b82f6;
          animation: pd 2s ease-in-out infinite;
        }
        @keyframes pd { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:0.3;transform:scale(0.6);} }
      `}</style>

      <div className="ev-wrap">
        <div className="ev-orb ev-orb-1" />
        <div className="ev-orb ev-orb-2" />
        <div className="ev-orb ev-orb-3" />
        <div className="ev-scan" />
        <div className="ev-vig" />

        <div className="ev-content">

          <m.p className="ev-label"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            SIST ACM SIGAI — Events
          </m.p>

          <m.h1 className="ev-heading"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 80 }}
          >
            No Events Found
          </m.h1>

          <m.div className="ev-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          />

          <m.p className="ev-sub"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            We're working on something exciting.<br />
            New events will be announced soon.
          </m.p>

          <m.div className="ev-pill"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <span className="ev-pill-dot" />
            Stay tuned for upcoming events
          </m.div>

        </div>
      </div>
    </>
  );
};

export default Events;
