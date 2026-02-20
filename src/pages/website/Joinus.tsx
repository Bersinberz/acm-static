import React, { useState, useEffect } from 'react';
import { motion as m } from "framer-motion";
import { getAllRecruitments } from '../../services/website/joinservice';

// --- TYPES ---
interface Role {
    id: string;
    title: string;
    department: string;
    description: string;
    startDate: string;
    endDate: string;
    questions?: any[];
}

const JoinUs: React.FC = () => {
    const [, setOpenings] = useState<Role[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecruitments = async () => {
            try {
                const res = await getAllRecruitments();
                const recruitments = Array.isArray(res?.recruitments) ? res.recruitments : [];

                const mappedRoles = recruitments.map((r: any) => ({
                    id: r._id,
                    title: r.title,
                    department: r.role,
                    description: r.description,
                    startDate: r.startDate,
                    endDate: r.endDate,
                    questions: r.questions || []
                }));

                setOpenings(mappedRoles);
            } catch (err: any) {
                console.error("Recruitment fetch failed", err);
                setOpenings([]);
            } finally {
                setLoading(false);
            }
        };

        fetchRecruitments();
    }, []);

    // Show loading while fetching
    if (loading) {
        return (
            <div className="join-page">
                <style>{`
                    :root {
                        --neon-blue: #2D9CDB;
                        --neon-purple: #0033A0;
                    }
                    
                    .join-page {
                        width: 100%; 
                        height: 100vh;
                        display: flex; 
                        flex-direction: column; 
                        align-items: center;
                        justify-content: center;
                        font-family: 'Poppins', sans-serif; 
                        position: relative;
                        background: rgba(10, 15, 30, 0.95);
                    }
                    
                    .neural-container { 
                        position: relative; 
                        width: 320px; 
                        height: 320px; 
                        display: flex; 
                        justify-content: center; 
                        align-items: center; 
                        margin-bottom: 40px; 
                    }
                    
                    .neural-core { 
                        width: 80px; 
                        height: 80px; 
                        background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%); 
                        border: 1px solid rgba(59, 130, 246, 0.5); 
                        border-radius: 50%; 
                        box-shadow: 0 0 50px rgba(59, 130, 246, 0.15); 
                        backdrop-filter: blur(5px); 
                    }
                    
                    .gyro-ring { 
                        position: absolute; 
                        border-radius: 50%; 
                        border: 1px solid transparent; 
                    }
                    
                    .g1 { 
                        width: 160px; 
                        height: 160px; 
                        border-top: 1px solid var(--neon-blue); 
                        border-bottom: 1px solid rgba(59, 130, 246, 0.3); 
                        box-shadow: 0 0 15px rgba(0, 243, 255, 0.2); 
                    }
                    
                    .g2 { 
                        width: 240px; 
                        height: 240px; 
                        border-left: 1px solid var(--neon-purple); 
                        border-right: 1px solid rgba(188, 19, 254, 0.2); 
                        opacity: 0.6; 
                    }
                    
                    .g3 { 
                        width: 320px; 
                        height: 320px; 
                        border: 1px dashed rgba(255, 255, 255, 0.1); 
                        opacity: 0.4; 
                    }
                    
                    .stay-tuned-text { 
                        color: #fff; 
                        font-size: 1.8rem; 
                        font-weight: 700; 
                        text-align: center; 
                        line-height: 1.4; 
                        text-transform: uppercase; 
                        z-index: 10; 
                        text-shadow: 0 0 30px rgba(0,0,0,0.5); 
                    }
                    
                    .stay-tuned-text span { 
                        display: block; 
                        background: linear-gradient(90deg, #94a3b8, #fff, #94a3b8); 
                        -webkit-background-clip: text; 
                        -webkit-text-fill-color: transparent; 
                        animation: shine 5s linear infinite; 
                        font-size: 1.3rem; 
                        margin-top: 8px; 
                        letter-spacing: 3px; 
                        font-weight: 400; 
                    }
                    
                    @keyframes shine { 
                        to { 
                            background-position: 200% center; 
                        } 
                    }
                `}</style>
                
                <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', flex: 1, justifyContent: 'center', marginTop: '-100px' }}
                >
                    <div className="neural-container">
                        <m.div className="neural-core" animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                        <m.div className="gyro-ring g1" animate={{ rotateX: 360, rotateY: 180, rotateZ: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
                        <m.div className="gyro-ring g2" animate={{ rotateX: -360, rotateZ: -180 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
                        <m.div className="gyro-ring g3" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
                    </div>
                    <h2 className="stay-tuned-text">
                        Stay tuned for <br />
                        <span>upcoming Recruitments</span>
                    </h2>
                </m.div>
            </div>
        );
    }

    // If data exists but you want to show the loading screen anyway, you can remove this part
    // and just always show the loading screen
    return (
        <div className="join-page">
            <style>{`
                :root {
                    --neon-blue: #2D9CDB;
                    --neon-purple: #0033A0;
                }
                
                .join-page {
                    width: 100%; 
                    height: 100vh;
                    display: flex; 
                    flex-direction: column; 
                    align-items: center;
                    justify-content: center;
                    font-family: 'Poppins', sans-serif; 
                    position: relative;
                    background: rgba(10, 15, 30, 0.95);
                }
                
                .neural-container { 
                    position: relative; 
                    width: 320px; 
                    height: 320px; 
                    display: flex; 
                    justify-content: center; 
                    align-items: center; 
                    margin-bottom: 40px; 
                }
                
                .neural-core { 
                    width: 80px; 
                    height: 80px; 
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%); 
                    border: 1px solid rgba(59, 130, 246, 0.5); 
                    border-radius: 50%; 
                    box-shadow: 0 0 50px rgba(59, 130, 246, 0.15); 
                    backdrop-filter: blur(5px); 
                }
                
                .gyro-ring { 
                    position: absolute; 
                    border-radius: 50%; 
                    border: 1px solid transparent; 
                }
                
                .g1 { 
                    width: 160px; 
                    height: 160px; 
                    border-top: 1px solid var(--neon-blue); 
                    border-bottom: 1px solid rgba(59, 130, 246, 0.3); 
                    box-shadow: 0 0 15px rgba(0, 243, 255, 0.2); 
                }
                
                .g2 { 
                    width: 240px; 
                    height: 240px; 
                    border-left: 1px solid var(--neon-purple); 
                    border-right: 1px solid rgba(188, 19, 254, 0.2); 
                    opacity: 0.6; 
                }
                
                .g3 { 
                    width: 320px; 
                    height: 320px; 
                    border: 1px dashed rgba(255, 255, 255, 0.1); 
                    opacity: 0.4; 
                }
                
                .stay-tuned-text { 
                    color: #fff; 
                    font-size: 1.8rem; 
                    font-weight: 700; 
                    text-align: center; 
                    line-height: 1.4; 
                    text-transform: uppercase; 
                    z-index: 10; 
                    text-shadow: 0 0 30px rgba(0,0,0,0.5); 
                }
                
                .stay-tuned-text span { 
                    display: block; 
                    background: linear-gradient(90deg, #94a3b8, #fff, #94a3b8); 
                    -webkit-background-clip: text; 
                    -webkit-text-fill-color: transparent; 
                    animation: shine 5s linear infinite; 
                    font-size: 1.3rem; 
                    margin-top: 8px; 
                    letter-spacing: 3px; 
                    font-weight: 400; 
                }
                
                @keyframes shine { 
                    to { 
                        background-position: 200% center; 
                    } 
                }
            `}</style>
            
            <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', flex: 1, justifyContent: 'center', marginTop: '-100px' }}
            >
                <div className="neural-container">
                    <m.div className="neural-core" animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                    <m.div className="gyro-ring g1" animate={{ rotateX: 360, rotateY: 180, rotateZ: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
                    <m.div className="gyro-ring g2" animate={{ rotateX: -360, rotateZ: -180 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
                    <m.div className="gyro-ring g3" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
                </div>
                <h2 className="stay-tuned-text">
                    Stay tuned for <br />
                    <span>upcoming Recruitments</span>
                </h2>
            </m.div>
        </div>
    );
};

export default JoinUs;