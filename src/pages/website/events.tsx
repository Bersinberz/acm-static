import React from 'react';
import { motion as m } from "framer-motion";
import usePageTitle from '../../components/usePageTitle';

const Events: React.FC = () => {
    usePageTitle('Events');
    return (
        <div className="events-page">
            <style>{`
                :root {
                    --primary-blue: #3b82f6;
                    --dark-bg: #0b1121;
                    --glitch-red: #ff3333;
                    --glitch-cyan: #00e5ff;
                }

                .events-page {
                    width: 100%;
                    height: 100vh;
                    background: var(--dark-bg);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Poppins', sans-serif;
                    position: relative;
                    overflow: hidden;
                }

                .glitch-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    position: relative;
                    perspective: 1000px;
                }

                .scanline-overlay {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2));
                    background-size: 100% 4px;
                    pointer-events: none;
                    z-index: 1;
                    mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
                }

                .glitch-404 {
                    font-size: clamp(6rem, 15vw, 10rem);
                    font-weight: 900;
                    color: #fff;
                    position: relative;
                    letter-spacing: -5px;
                    line-height: 0.8;
                    text-shadow: 4px 4px 0px rgba(0,0,0,0.5);
                }

                .glitch-404::before, .glitch-404::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: var(--dark-bg);
                    opacity: 0.8;
                }

                .glitch-404::before {
                    color: var(--glitch-red);
                    z-index: -1;
                    animation: glitch-split-1 2.5s infinite linear alternate-reverse;
                }

                .glitch-404::after {
                    color: var(--glitch-cyan);
                    z-index: -2;
                    animation: glitch-split-2 3s infinite linear alternate-reverse;
                }

                @keyframes glitch-split-1 {
                    0%   { clip-path: inset(20% 0 80% 0); transform: translate(-4px,  2px); }
                    20%  { clip-path: inset(60% 0 10% 0); transform: translate( 4px, -2px); }
                    40%  { clip-path: inset(40% 0 50% 0); transform: translate(-2px,  4px); }
                    60%  { clip-path: inset(80% 0  5% 0); transform: translate( 2px, -4px); }
                    80%  { clip-path: inset(10% 0 60% 0); transform: translate(-2px,  2px); }
                    100% { clip-path: inset(30% 0 30% 0); transform: translate( 2px, -2px); }
                }

                @keyframes glitch-split-2 {
                    0%   { clip-path: inset(10% 0 60% 0); transform: translate( 4px, -2px); }
                    20%  { clip-path: inset(30% 0 20% 0); transform: translate(-4px,  2px); }
                    40%  { clip-path: inset(70% 0 10% 0); transform: translate( 2px, -4px); }
                    60%  { clip-path: inset(20% 0 50% 0); transform: translate(-2px,  4px); }
                    80%  { clip-path: inset(50% 0 30% 0); transform: translate( 4px, -2px); }
                    100% { clip-path: inset( 5% 0 80% 0); transform: translate(-4px,  2px); }
                }

                .error-msg {
                    font-family: 'Courier New', monospace;
                    text-transform: uppercase;
                    color: var(--primary-blue);
                    letter-spacing: 4px;
                    font-weight: 700;
                    font-size: 1.2rem;
                    margin-top: 20px;
                    background: rgba(59, 130, 246, 0.1);
                    padding: 5px 15px;
                    border: 1px solid rgba(59, 130, 246, 0.3);
                }

                .terminal-subtext {
                    margin-top: 15px;
                    font-family: 'Courier New', monospace;
                    color: #94a3b8;
                    font-size: 0.95rem;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    opacity: 0.8;
                }

                .blink-cursor {
                    display: inline-block;
                    width: 8px; height: 16px;
                    background: var(--glitch-cyan);
                    animation: blink 1s step-end infinite;
                }

                @keyframes blink {
                    50% { opacity: 0; }
                }
            `}</style>

            <m.div className="glitch-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="scanline-overlay"></div>
                <m.div className="glitch-404" data-text="404">404</m.div>
                <div className="error-msg">EVENT_DATA_NOT_FOUND</div>
                <div className="terminal-subtext">
                    <span>Stay Tuned for Events</span>
                    <span className="blink-cursor"></span>
                </div>
            </m.div>
        </div>
    );
};

export default Events;
