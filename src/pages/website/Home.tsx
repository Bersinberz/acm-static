import React, { useEffect, useState } from 'react';
import usePageTitle from '../../components/usePageTitle';
import { motion as m, AnimatePresence } from "framer-motion";
import { fadeIn } from '../../components/transitions';
import ne from '../../assets/HomePage/new.png';
import sat from '../../assets/HomePage/Sathyabama Institute of Science and Technology.png';
import grp from '../../assets/HomePage/grp-01.jpeg.jpg';
import sc from '../../assets/acm-loader-logo.png';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTimes,
} from 'react-icons/fa';
import { FloatingOrb } from '../../components/StatusMessage';
import CopyrightFooter from '../../components/Footer';

// Hardcoded data
const ABOUT_TEXT = "Founded on the 25th of March 2024, SIST ACM SIGAI is the first SIGAI student chapter in Tamil Nadu. We are a community, paving the way for AI enthusiasts to come together to learn and innovate. At SIST ACM SIGAI student chapter, we are focused on the advancement of our society through the power of Artificial Intelligence. Whilst working with AI in computing, we are also keen on working with people of various interests to integrate AI with fields like healthcare, education and more. As a part of the world's largest educational and scientific computing society, we want to use our resources and connections to help and support students and create a passion for artificial intelligence in them. Our mission is to ignite curiosity, foster collaboration, and drive innovation in the exciting world of Artificial Intelligence. We envision to be the heart of AI exploration, where students feel supported and equipped to face challenges and opportunities with the transformative capabilities of AI. Join us to get contented by turning your biggest passion of AI into reality using our best resources.";

const MISSION_TEXT = "At SIST ACM SIGAI Student Chapter, we're on a mission to ignite curiosity, foster collaboration, and drive innovation in the exciting world of Artificial Intelligence (AI). Our aim is simple yet profound: to empower students to explore, understand, and leverage AI's potential for creating positive change in our world.";

const VISION_TEXT = "We envision a vibrant community where students from all backgrounds come together to learn, grow, and make a difference through AI. Our vision is to be the heart of AI exploration, where every student feels inspired, supported, and equipped to tackle the challenges and opportunities of tomorrow, ultimately contributing to a future empowered by the transformative capabilities of AI.";

const IDEOLOGY_TEXT = "In our student chapter, we are not just about AI. We are about people, students who are eager to learn, explore, and make a difference. Drawing inspiration from the rich legacy of SIGAI, we have created a space that is more than a gathering of minds. It is a home for those who dare to dream and take action. Through a tapestry of events, workshops, and projects, we are weaving together an experience that's as diverse as the students we serve. From coding novices to seasoned enthusiasts, everyone has a place here. A seat at the table where ideas are born, meaningful connections are forged, and brilliance shines. But our journey doesn't stop at the boundaries of our campus. No, we are reaching out, we are extending our presence to communities near and far because we believe AI is not only about algorithms and data. It is about people and the world we live in. Through outreach programs, partnerships, and initiatives, we are harnessing the power of AI to drive positive change, one step at a time.  Yet in our quest for innovation, we never lose sight of what truly matters, we remain committed to the values of integrity, transparency, and responsibility. Guided by these principles, we strive to be responsible stewards of AI, ensuring that our exploration is not just groundbreaking but also ethical, equitable, and inclusive. If you are ready to begin a journey of discovery, growth, and impact, welcome to SIST ACM SIGAI Student Chapter, where the future of AI is imagined, shaped, and created together.";

const CONTACT_INFO = {
  location: "Sathyabama Institute of Science and Technology Semmencheri Chennai, India",
  email: "sist.sigai@gmail.com",
  phone: "+91 7799350212"
};

const SOCIAL_LINKS = {
  twitter: "https://x.com/sist_sigai",
  instagram: "https://www.instagram.com/sist_sigai/?igsh=bzBjc3Jmam85NTdn",
  linkedin: "https://www.linkedin.com/company/sist-acm-sigai-student-chapter/posts/?feedView=all"
};

const ORG_NAME = "SIST ACM SIGAI STUDENT CHAPTER";

// Validation types (kept for future use)


const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [statusVisible, setStatusVisible] = useState(false);
  const [statusMessage] = useState("");
  const [statusType] = useState<"success" | "error">("success");

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  usePageTitle('Home');

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>


      <FloatingOrb
        isVisible={statusVisible}
        message={statusMessage}
        type={statusType}
        onClose={() => setStatusVisible(false)}
      />

      <style>{`
        :root {
            --primary-blue: #3b82f6;
            --primary-glow: rgba(59, 130, 246, 0.6);
            --glass-bg: rgba(255, 255, 255, 0.03);
            --glass-border: rgba(255, 255, 255, 0.1);
        }

        /* --- GLOBAL RESETS --- */
        * { box-sizing: border-box; }
        video::-webkit-media-controls { display: none !important; }

        @keyframes gradientShift {
          0% { background-position: 0 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }

        /* --- LAYOUT CONTAINERS --- */
        .main {
            position: relative;
            height: 100dvh;
            width: 100%;
            min-height: 500px;
            overflow: hidden;
            background: #000; 
        }

        .main video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          z-index: 0;
        }

        .About {
            position: relative; z-index: 1; background: inherit;
            width: 100%; overflow-x: hidden; 
        }

        .Aboutt {
            width: 100%; max-width: 1200px; margin: 0 auto;
            padding: 60px 20px;
            display: flex; flex-direction: column; align-items: center; text-align: center;
        }

        /* --- SECTIONS & SPACING --- */
        .ideology, .vision, .mission, .main-about, .image-mission, .aboutsec, .image-container {
            margin-top: 80px;
            display: flex; align-items: center; justify-content: center;
            flex-direction: column; width: 100%;
        }

        .main-about { margin-top: 100px; width: 100%; }

        /* --- TECH BADGES (SECTION HEADERS) --- */
        .tech-badge {
            display: inline-block;
            padding: 12px 45px;
            margin-bottom: 30px;
            color: #fff;
            font-size: clamp(1.2rem, 3vw, 1.8rem);
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(59, 130, 246, 0.4);
            border-radius: 50px;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.15), inset 0 0 10px rgba(59, 130, 246, 0.05);
            
            position: relative;
            transition: all 0.3s ease;
        }

        .tech-badge:hover {
            border-color: #fff;
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.4);
            transform: scale(1.05);
        }

        .tech-badge::before, .tech-badge::after {
            content: ''; position: absolute; top: 50%; transform: translateY(-50%);
            width: 6px; height: 6px; background: var(--primary-blue); border-radius: 50%;
            box-shadow: 0 0 8px var(--primary-blue);
        }
        .tech-badge::before { left: 20px; }
        .tech-badge::after { right: 20px; }

        .tech-highlight { color: var(--primary-blue); }

        p.mission-paragraph, p.about-paragraph {
            color: #e0e0e0; font-size: clamp(16px, 2vw, 20px); font-weight: 300;
            font-family: "Roboto", sans-serif; line-height: 1.6; text-align: justify;
            max-width: 900px; padding: 0 10px;
        }

        .image-container img {
            width: 80%; max-width: 900px; height: auto; display: block; margin: 0 auto;
            border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            border: 1px solid rgba(255,255,255,0.1);
        }
        .main-about video {
            position: relative; width: 80%; max-width: 900px; height: auto;
            aspect-ratio: 16/9; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            object-fit: cover; border: 1px solid rgba(255,255,255,0.1);
        }

        /* --- FOOTER --- */
        .main-footer {
            background: linear-gradient(to right, #000428, #004e92);
            color: #ffffff; padding: 60px 0 0 0; font-family: 'Segoe UI', sans-serif;
            width: 100%; margin-top: 50px;
        }
        .footer-container {
            max-width: 1400px; margin: 0 auto; padding: 0 20px 40px 20px;
            display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; align-items: start;
        }
        .footer-col h3 {
            color: #fff; font-size: 1.3rem; margin-bottom: 25px; text-transform: uppercase;
            letter-spacing: 1px; border-bottom: 2px solid #5CA0F2; display: inline-block; padding-bottom: 5px;
        }
.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
}
.contact-item .icon {
  width: 26px;
  min-width: 26px;
  font-size: 1.25rem;
  color: #5CA0F2;
  line-height: 1;
  margin-top: 2px;
}
  
.contact-text {
  line-height: 1.6;
}
  .contact-text a {
  color: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
}
        .contact-item p a, .contact-item > a {
            color: #e0e0e0; text-decoration: none; transition: color 0.3s; font-weight: 500; word-break: break-word;
        }
        .contact-item p a:hover, .contact-item > a:hover { color: #5CA0F2; }
        .footer-center { text-align: center; display: flex; flex-direction: column; align-items: center; }
        
        /* FOOTER BRAND (Enhanced with Hero Style) */
        .footer-brand {
            font-size: 2.5rem; font-weight: 900; 
            margin-bottom: 15px; letter-spacing: 1px;
            font-family: 'Poppins', sans-serif;
            text-transform: uppercase;
        }

        .write-us-btn {
            background: transparent; color: #fff; border: 1px solid #5CA0F2;
            padding: 12px 35px; font-size: 1rem; border-radius: 30px; cursor: pointer;
            box-shadow: 0 0 15px rgba(92, 160, 242, 0.2); transition: all 0.3s ease;
            margin-bottom: 30px; font-weight: 700; white-space: nowrap;
        }
        .write-us-btn:hover {
            box-shadow: 0 0 25px rgba(92, 160, 242, 0.6); background: #5CA0F2; color: #000;
        }
        .social-icons { display: flex; gap: 15px; flex-wrap: wrap; justify-content: center; }
        .social-icon {
            width: 45px; height: 45px; background: rgba(255,255,255,0.1); border-radius: 50%;
            display: flex; align-items: center; justify-content: center; text-decoration: none;
            font-size: 1.4rem; color: #e0e0e0; transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.05);
        }

        .social-icon.twitter:hover { 
            background: #1DA1F2; 
            color: #fff; 
            transform: translateY(-3px);
            box-shadow: 0 0 20px rgba(29, 161, 242, 0.5);
            border-color: #1DA1F2;
        }

        .social-icon.instagram:hover { 
            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); 
            background-origin: border-box;
            background-clip: border-box;
            color: #fff; 
            transform: translateY(-3px);
            box-shadow: 0 0 20px rgba(214, 36, 159, 0.5);
            border-color: transparent;
        }

        .social-icon.linkedin:hover { 
            background: #0A66C2; 
            color: #fff; 
            transform: translateY(-3px);
            box-shadow: 0 0 20px rgba(10, 102, 194, 0.5);
            border-color: #0A66C2;
        }
        .social-icon:hover { transform: translateY(-3px); background: #5CA0F2; color: #fff; }
        .footer-map iframe {
            width: 100%; height: 250px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        .cpoy-cont {
            background: linear-gradient(45deg, #F5F7F6, #5CA0F2);
            background-size: 300% 300%; animation: gradientShift 12s ease-in-out infinite;
            padding: 20px; text-align: center; width: 100%;
        }
        .Copyrights { color: #000; }
        .Copyrights h2 { font-size: 1rem; margin-bottom: 10px; font-weight: 800; }
        .Copyrights p { font-size: 0.85rem; margin: 5px 0; font-weight: 600; line-height: 1.6; }

        /* --- MODAL --- */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(15px);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 120px;
          z-index: 10000;
          padding-left: 20px;
          padding-right: 20px;
        }

        .modal-content-styled {
            background: rgba(10, 15, 30, 0.7);
            padding: 40px; width: 100%; max-width: 800px; border-radius: 20px;
            position: relative;
            border: 1px solid rgba(59, 130, 246, 0.5);
            box-shadow: 0 0 50px rgba(59, 130, 246, 0.15), inset 0 0 20px rgba(59, 130, 246, 0.05);
            color: #fff; max-height: 90vh; overflow-y: auto;
            display: flex; flex-direction: column;
            overflow-y: auto;
            scrollbar-width: none;
            -ms-overflow-style: none; 
        }
        .modal-content-styled::-webkit-scrollbar {
          display: none;
        }

        .close-modal {
            position: absolute; top: 20px; right: 20px;
            background: transparent; width: 40px; height: 40px;
            border-radius: 50%; border: 1px solid rgba(255, 255, 255, 0.2);
            font-size: 1.2rem; cursor: pointer; color: #fff;
            display: flex; align-items: center; justify-content: center;
            transition: all 0.3s ease; z-index: 10;
        }
        .close-modal:hover {
            border-color: #ff4d4d; color: #ff4d4d; transform: rotate(90deg);
            box-shadow: 0 0 15px rgba(255, 77, 77, 0.4);
        }

        .modal-title {
            text-align: center; margin-bottom: 40px;
            font-size: 2rem; font-weight: 800; letter-spacing: 2px;
            color: #fff; text-transform: uppercase;
        }

        /* GRADIENT TEXT CLASS (Used for Modal & Footer) */
        .hero-highlight {
            background: linear-gradient(135deg, #fff 0%, var(--primary-blue) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 0 20px var(--primary-glow));
        }

        .formBx { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; width: 100%; }
        .inputbx.full-width { grid-column: span 2; }
        .inputbx { display: flex; flex-direction: column; width: 100%; position: relative; }
        
        .inputbx span {
            margin-bottom: 8px; font-weight: 600; font-size: 0.9rem;
            color: var(--primary-blue); text-transform: uppercase; letter-spacing: 1px;
        }

        .inputbx input, .inputbx textarea {
            width: 100%; padding: 15px;
            border: none; border-bottom: 2px solid rgba(255, 255, 255, 0.2);
            font-size: 1rem; color: #fff;
            background: rgba(255,255,255,0.03); border-radius: 4px 4px 0 0;
            transition: all 0.3s ease; font-family: 'Poppins', sans-serif;
        }

        .inputbx input:focus, .inputbx textarea:focus {
            border-bottom: 2px solid var(--primary-blue);
            background: rgba(59, 130, 246, 0.1);
            box-shadow: 0 10px 20px -10px rgba(59, 130, 246, 0.2);
            outline: none;
        }

        .submit-btn {
            background: var(--primary-blue); color: #fff;
            padding: 18px; border: none; border-radius: 8px;
            font-weight: 800; text-transform: uppercase; letter-spacing: 2px;
            cursor: pointer; width: 100%; margin-top: 15px;
            display: flex; justify-content: center; align-items: center; gap: 10px;
            transition: all 0.3s; box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }
        .submit-btn:hover {
            background: #2563eb; box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
        }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        /* --- RESPONSIVE --- */
        @media (max-width: 900px) {
            .tech-badge { font-size: 1.2rem; padding: 10px 30px; }
            .footer-container { grid-template-columns: 1fr; text-align: center; }
            .footer-col h3 { border-bottom: none; margin-top: 20px; }
            .contact-item { justify-content: center; }
            .main-about video { width: 95%; }
            .formBx { grid-template-columns: 1fr; }
            .inputbx.full-width { grid-column: span 1; }
        }

        @media (max-width: 768px) {
            .main {
              height: 70dvh;
              min-height: 420px;
            }

            .main video {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center top;
            }
              .modal-overlay {
                padding-top: 90px;
              }
          }
      `}</style>

      {/* --- HERO SECTION (NO TITLE OVERLAY) --- */}
      <div className='main'>
        <video
          src="https://res.cloudinary.com/dxpglrdwn/video/upload/v1771483512/Titlevedio_qlfctn.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          style={{ pointerEvents: "none" }}
        />
      </div>

      <div className='About'>
        <div className='Aboutt'>

          <m.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className='aboutsec'>
            <div className="tech-badge"><span className="tech-highlight">About </span>SIST ACM SIGAI</div>
            <p className='about-paragraph'>
              {ABOUT_TEXT}
            </p>
          </m.div>

          <m.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className='main-about'>
            <video
              src="https://res.cloudinary.com/dxpglrdwn/video/upload/v1771483516/SISTACMSIGAI_tt0jcc.mp4"
              autoPlay loop controls={false} muted playsInline
              disablePictureInPicture={true}
              style={{ pointerEvents: 'none' }}
            />
          </m.div>

          <m.div variants={fadeIn("up", 0.4)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className='mission'>
            <div className="tech-badge"><span className="tech-highlight">Our</span> Mission</div>
            <p className='mission-paragraph'>
              {MISSION_TEXT}
            </p>
          </m.div>

          <m.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className='image-container'>
            <img src={ne} alt='LOGO REVEAL' loading="lazy" />
          </m.div>

          <m.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className='vision'>
            <div className="tech-badge"><span className="tech-highlight">Our</span> Vision</div>
            <p className='mission-paragraph'>
              {VISION_TEXT}
            </p>
          </m.div>

          <m.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" exit="exit" viewport={{ once: false, amount: 0.3 }} className='image-container'>
            <img src={sat} alt='SIST ACM SIGAI' loading="lazy" />
          </m.div>

          <m.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className='ideology'>
            <div className="tech-badge"><span className="tech-highlight">Our</span> Ideology</div>
            <p className='mission-paragraph'>
              {IDEOLOGY_TEXT}
            </p>
          </m.div>

          <m.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className='image-container'>
            <img src={grp} alt='OUR CORE UNIT' loading="lazy" />
          </m.div>
        </div>
      </div>

      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="contact-item">
              <span className="icon"><FaMapMarkerAlt /></span>
              <div className="contact-text">
                <a
                  href="https://www.sathyabama.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_INFO.location}
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon"><FaEnvelope /></span>
              <div className="contact-text">
                <a href={`mailto:${CONTACT_INFO.email}`}>
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon"><FaPhoneAlt /></span>
              <div className="contact-text">
                <a href={`tel:${CONTACT_INFO.phone}`}>
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="footer-col footer-center">
            <div className="footer-brand">
              <span className="hero-highlight">
                {ORG_NAME}
              </span>
            </div>

            <p className="cta-text">Have questions or want to collaborate?</p>

            <button className="write-us-btn" onClick={toggleModal}>
              Write to Us <FaEnvelope style={{ marginLeft: '8px', display: 'inline' }} />
            </button>

            <div className="social-icons">
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon twitter">
                <FaTwitter />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon linkedin">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-col footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5412320274245!2d80.22350177642874!3d12.87288078743351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b8c90befe2b%3A0x170ab8b5b21bb530!2sSathyabama%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1710506289648!5m2!1sen!2sin"
              title="Sathyabama Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <CopyrightFooter />
      </footer>

      {/* --- COMING SOON MODAL --- */}
      <style>{`
        .coming-soon-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
        }
        .coming-soon-card {
          position: relative;
          background: rgba(5, 10, 30, 0.95);
          border: 1px solid rgba(0, 195, 255, 0.35);
          border-radius: 20px;
          padding: 48px 40px 40px;
          max-width: 460px;
          width: 100%;
          text-align: center;
          box-shadow: 0 0 60px rgba(0, 195, 255, 0.15), 0 20px 60px rgba(0,0,0,0.5);
          overflow: hidden;
        }
        .coming-soon-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, #00c3ff, transparent);
        }
        .coming-soon-close {
          position: absolute; top: 16px; right: 16px;
          background: rgba(255,255,255,0.07); border: none;
          color: rgba(255,255,255,0.6); width: 32px; height: 32px;
          border-radius: 50%; cursor: pointer; font-size: 14px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, color 0.2s;
        }
        .coming-soon-close:hover { background: rgba(0,195,255,0.15); color: #fff; }
        .coming-soon-icon {
          font-size: 52px; margin-bottom: 16px;
          display: block;
        }
        .coming-soon-card h2 {
          color: #fff; font-size: 26px; font-weight: 800;
          margin-bottom: 8px; letter-spacing: 0.5px;
        }
        .coming-soon-card h2 span {
          background: linear-gradient(120deg, #00c3ff, #a78bfa);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .coming-soon-card .subtitle {
          color: rgba(255,255,255,0.55); font-size: 14px;
          margin-bottom: 32px; line-height: 1.6;
        }
        .coming-soon-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,195,255,0.3), transparent);
          margin-bottom: 28px;
        }
        .coming-soon-contact-label {
          color: rgba(255,255,255,0.4); font-size: 11px;
          letter-spacing: 2px; text-transform: uppercase;
          margin-bottom: 16px;
        }
        .coming-soon-contact-items {
          display: flex; flex-direction: column; gap: 12px;
        }
        .coming-soon-contact-item {
          display: flex; align-items: center; gap: 12px;
          background: rgba(0,195,255,0.06);
          border: 1px solid rgba(0,195,255,0.15);
          border-radius: 10px; padding: 12px 16px;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .coming-soon-contact-item:hover {
          background: rgba(0,195,255,0.12);
          border-color: rgba(0,195,255,0.4);
          transform: translateY(-2px);
        }
        .coming-soon-contact-item .ci-icon {
          color: #00c3ff; font-size: 18px; flex-shrink: 0;
        }
        .coming-soon-contact-item .ci-text {
          display: flex; flex-direction: column; text-align: left;
        }
        .coming-soon-contact-item .ci-label {
          color: rgba(255,255,255,0.4); font-size: 10px;
          letter-spacing: 1.5px; text-transform: uppercase;
        }
        .coming-soon-contact-item .ci-value {
          color: #fff; font-size: 14px; font-weight: 600;
        }
      `}</style>
      <AnimatePresence>
        {isModalOpen && (
          <m.div
            className="coming-soon-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => { if (e.target === e.currentTarget) toggleModal(); }}
          >
            <m.div
              className="coming-soon-card"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
            >
              <button className="coming-soon-close" onClick={toggleModal} aria-label="Close">
                <FaTimes />
              </button>

              <m.img
                src={sc}
                alt="SIGAI Logo"
                style={{ width: '72px', height: '72px', objectFit: 'contain', marginBottom: '16px' }}
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.15, type: "spring", damping: 14, stiffness: 260 }}
              />

              <m.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.35 }}
              >
                <span>Coming Soon</span>
              </m.h2>

              <m.p
                className="subtitle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.35 }}
              >
                This feature is coming soon. In the meantime, feel free to reach out to us directly.
              </m.p>

              <m.div
                className="coming-soon-divider"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              />

              <m.p
                className="coming-soon-contact-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Contact Us
              </m.p>

              <m.div
                className="coming-soon-contact-items"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.35 }}
              >
                <a className="coming-soon-contact-item" href="tel:+917799350212">
                  <FaPhoneAlt className="ci-icon" />
                  <div className="ci-text">
                    <span className="ci-label">Phone</span>
                    <span className="ci-value">+91 7799350212</span>
                  </div>
                </a>
                <a className="coming-soon-contact-item" href="mailto:sist.sigai@gmail.com">
                  <FaEnvelope className="ci-icon" />
                  <div className="ci-text">
                    <span className="ci-label">Email</span>
                    <span className="ci-value">sist.sigai@gmail.com</span>
                  </div>
                </a>
              </m.div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;