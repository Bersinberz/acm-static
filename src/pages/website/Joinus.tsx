import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from "framer-motion";
import { getAllRecruitments } from '../../services/website/joinservice';
import { FaCalendarAlt, FaChevronRight, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface Role {
    id: string;
    title: string;
    department: string;
    description: string;
    startDate: string;
    endDate: string;
    questions?: any[];
}

// split text into individual letter spans for stagger animation
const SplitText = ({ text, className }: { text: string; className?: string }) => (
    <>
        {text.split('').map((char, i) => (
            <m.span
                key={i}
                className={className}
                style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                initial={{ opacity: 0, y: 60, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                    delay: 0.4 + i * 0.04,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {char}
            </m.span>
        ))}
    </>
);

const ComingSoon: React.FC = () => {
    // orb positions
    const orbs = [
        { w: 500, h: 500, top: '-15%', left: '-10%', color: 'rgba(59,130,246,0.12)', dur: 8 },
        { w: 400, h: 400, top: '50%',  left: '70%',  color: 'rgba(99,102,241,0.1)',  dur: 10 },
        { w: 300, h: 300, top: '20%',  left: '55%',  color: 'rgba(59,130,246,0.07)', dur: 12 },
        { w: 250, h: 250, top: '65%',  left: '5%',   color: 'rgba(139,92,246,0.08)', dur: 9  },
    ];

    return (
        <div className="cs-root">
            <style>{`
                .cs-root {
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Poppins', sans-serif;
                    position: relative;
                    overflow: hidden;
                    padding: 100px 24px 60px;
                }

                /* noise texture overlay */
                .cs-root::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
                    pointer-events: none;
                    z-index: 0;
                }

                .cs-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    max-width: 800px;
                }

                /* pill badge */
                .cs-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 7px 20px;
                    border-radius: 50px;
                    border: 1px solid rgba(59,130,246,0.35);
                    background: rgba(59,130,246,0.08);
                    color: #93c5fd;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    margin-bottom: 44px;
                    backdrop-filter: blur(8px);
                }

                .cs-badge-dot {
                    width: 7px; height: 7px;
                    border-radius: 50%;
                    background: #3b82f6;
                    box-shadow: 0 0 8px #3b82f6;
                    animation: pulse-dot 2s ease-in-out infinite;
                }

                @keyframes pulse-dot {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50%       { transform: scale(1.5); opacity: 0.6; }
                }

                /* main heading */
                .cs-heading {
                    font-size: clamp(2.8rem, 7vw, 5.5rem);
                    font-weight: 900;
                    line-height: 1.05;
                    letter-spacing: -2px;
                    color: #fff;
                    margin-bottom: 0;
                    perspective: 800px;
                }

                .cs-heading-line2 {
                    background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #60a5fa 100%);
                    background-size: 200% auto;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: shimmer 4s linear infinite;
                }

                @keyframes shimmer {
                    to { background-position: 200% center; }
                }

                /* divider */
                .cs-line {
                    width: 1px;
                    height: 60px;
                    background: linear-gradient(to bottom, rgba(59,130,246,0.6), transparent);
                    margin: 36px auto;
                }

                /* subtitle */
                .cs-sub {
                    font-size: clamp(1rem, 2vw, 1.2rem);
                    color: rgba(255,255,255,0.4);
                    font-weight: 400;
                    letter-spacing: 4px;
                    text-transform: uppercase;
                    margin-bottom: 56px;
                }

                /* social row */
                .cs-socials {
                    display: flex;
                    gap: 14px;
                }

                .cs-social-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    padding: 12px 24px;
                    border-radius: 50px;
                    border: 1px solid rgba(255,255,255,0.1);
                    background: rgba(255,255,255,0.04);
                    color: rgba(255,255,255,0.6);
                    font-size: 13px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.25s;
                    backdrop-filter: blur(8px);
                }

                .cs-social-btn:hover {
                    border-color: #3b82f6;
                    color: #fff;
                    background: rgba(59,130,246,0.12);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(59,130,246,0.2);
                }

                /* --- OPENINGS --- */
                .jo-openings {
                    width: 100%;
                    min-height: 100vh;
                    padding: 120px 5% 80px;
                    font-family: 'Poppins', sans-serif;
                }

                .jo-cards {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 24px;
                    max-width: 1100px;
                    margin: 0 auto;
                }

                .jo-card {
                    background: rgba(255,255,255,0.03);
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 16px;
                    padding: 28px;
                    position: relative;
                    overflow: hidden;
                    transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
                    backdrop-filter: blur(10px);
                }

                .jo-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, #3b82f6, #818cf8);
                    opacity: 0;
                    transition: opacity 0.3s;
                }

                .jo-card:hover { border-color: rgba(59,130,246,0.3); transform: translateY(-4px); box-shadow: 0 20px 50px rgba(59,130,246,0.1); }
                .jo-card:hover::before { opacity: 1; }

                .jo-dept { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #60a5fa; margin-bottom: 12px; }
                .jo-card h3 { color: #fff; font-size: 1.2rem; font-weight: 700; margin-bottom: 8px; }
                .jo-card p { color: rgba(255,255,255,0.45); font-size: 13px; line-height: 1.6; margin-bottom: 18px; }
                .jo-dates { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 18px; }
                .jo-date { display: flex; align-items: center; gap: 5px; color: rgba(255,255,255,0.3); font-size: 12px; }
                .jo-date svg { color: #60a5fa; }

                .jo-apply {
                    display: inline-flex; align-items: center; gap: 6px;
                    padding: 9px 18px; border-radius: 8px;
                    background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.25);
                    color: #60a5fa; font-size: 12px; font-weight: 700;
                    text-transform: uppercase; letter-spacing: 0.5px;
                    cursor: pointer; transition: all 0.2s; text-decoration: none;
                }
                .jo-apply:hover { background: #3b82f6; color: #fff; box-shadow: 0 0 16px rgba(59,130,246,0.35); }

                @media (max-width: 600px) {
                    .cs-socials { flex-direction: column; align-items: center; }
                    .jo-cards { grid-template-columns: 1fr; }
                }
            `}</style>

            {/* animated orbs */}
            {orbs.map((orb, i) => (
                <m.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: orb.w,
                        height: orb.h,
                        top: orb.top,
                        left: orb.left,
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
                        filter: 'blur(40px)',
                        zIndex: 1,
                    }}
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -25, 20, 0],
                        scale: [1, 1.1, 0.95, 1],
                    }}
                    transition={{
                        duration: orb.dur,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 1.5,
                    }}
                />
            ))}

            <div className="cs-content">
                {/* badge */}
                <m.div
                    className="cs-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="cs-badge-dot" />
                    Hiring Season
                </m.div>

                {/* heading line 1 */}
                <div className="cs-heading" style={{ marginBottom: '8px' }}>
                    <SplitText text="Recruitment" />
                </div>

                {/* heading line 2 — gradient */}
                <div className="cs-heading">
                    <SplitText text="Open Soon" className="cs-heading-line2" />
                </div>

                {/* vertical line */}
                <m.div
                    className="cs-line"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    style={{ originY: 0 }}
                />

                {/* subtitle */}
                <m.p
                    className="cs-sub"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                >
                    Stay Updated
                </m.p>

                {/* social buttons */}
                <m.div
                    className="cs-socials"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                >
                    <a className="cs-social-btn" href="https://www.instagram.com/sist_sigai/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={15} /> Instagram
                    </a>
                    <a className="cs-social-btn" href="https://www.linkedin.com/company/sist-acm-sigai-student-chapter/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={15} /> LinkedIn
                    </a>
                </m.div>
            </div>
        </div>
    );
};

const OpeningsView: React.FC<{ openings: Role[] }> = ({ openings }) => (
    <div className="jo-openings">
        <m.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', color: '#fff', fontWeight: 800, fontSize: 'clamp(2rem,5vw,3rem)', marginBottom: '50px', fontFamily: "'Poppins', sans-serif" }}
        >
            Open Positions
        </m.h1>
        <div className="jo-cards">
            {openings.map((role, i) => (
                <m.div key={role.id} className="jo-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                    <div className="jo-dept">{role.department}</div>
                    <h3>{role.title}</h3>
                    <p>{role.description}</p>
                    <div className="jo-dates">
                        <div className="jo-date"><FaCalendarAlt size={10} /> Opens: {new Date(role.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</div>
                        <div className="jo-date"><FaCalendarAlt size={10} /> Closes: {new Date(role.endDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</div>
                    </div>
                    <span className="jo-apply">Apply Now <FaChevronRight size={10} /></span>
                </m.div>
            ))}
        </div>
    </div>
);

const JoinUs: React.FC = () => {
    const [openings, setOpenings] = useState<Role[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const res = await getAllRecruitments();
                const list = Array.isArray(res?.recruitments) ? res.recruitments : [];
                setOpenings(list.map((r: any) => ({
                    id: r._id, title: r.title, department: r.role,
                    description: r.description, startDate: r.startDate,
                    endDate: r.endDate, questions: r.questions || []
                })));
            } catch { setOpenings([]); }
            finally { setLoading(false); }
        };
        load();
    }, []);

    if (loading) return null;

    return (
        <AnimatePresence mode="wait">
            {openings.length > 0
                ? <OpeningsView key="openings" openings={openings} />
                : <ComingSoon key="soon" />}
        </AnimatePresence>
    );
};

export default JoinUs;