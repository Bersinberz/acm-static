import { motion as m } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import { fadeIn } from '../../components/transitions';
import usePageTitle from '../../components/usePageTitle';

// Event Images
import inaugural from '../../assets/Archives/Events/inaugural.jpg';
import azure from '../../assets/Archives/Events/azure.jpg';
import genai from '../../assets/Archives/Events/genAi.jpg';
import digitalArt from '../../assets/Archives/Events/digitalArt.png';
import spaceDay from '../../assets/Archives/Events/spaceDay.jpg';
import freshers from "../../assets/Archives/Events/Freshers.jpg";
import Insightx from "../../assets/Archives/Events/Insightx.jpg"
import hellojava from "../../assets/Archives/Events/hellojava.jpg"
import ThinkTankers from "../../assets/Archives/Events/ThinkTankers.jpeg"
import ideatolaunch from "../../assets/Archives/Events/ideatolaunch.jpg"
import linkedin from "../../assets/Archives/Events/linkedin.jpg"
import harmonix from "../../assets/Archives/Events/Harmonix.jpg"
import Gitready from "../../assets/Archives/Events/Gitready.jpeg"
import Quicktrain from "../../assets/Archives/Events/Quicktrain.jpeg"
import CareerCompass from "../../assets/Archives/Events/CareerCompass.jpeg"
import Technopoly from "../../assets/Archives/Events/Technopoly.jpeg"
import MindAuction from "../../assets/Archives/Events/MindAuction.jpeg"
import AgileEngineering from "../../assets/Archives/Events/AglieEngineering.jpeg"
import Cognibot from "../../assets/Archives/Events/Cognibot.jpeg"
import ResumeBuilding from "../../assets/Archives/Events/ResumeBuilding.jpeg"
import TechUNO from "../../assets/Archives/Events/TechUNO.jpeg"
import SpaceZ from "../../assets/Archives/Events/SpaceZ.jpeg"
import StartupXcel from "../../assets/Archives/Events/StartupXcel.jpeg"
import CyberSprint from "../../assets/Archives/Events/CyberSprint.jpeg"
import Techmemeathon from "../../assets/Archives/Events/Techmemeathon.jpeg"

// Marquee Images
import azure1 from "../../assets/Archives/Slider/azure1.jpg"
import chairman from "../../assets/Archives/Slider/chairman.jpg"
import vicechairman from "../../assets/Archives/Slider/vicechairman.jpg"
import eventimg1 from "../../assets/Archives/Slider/Eventimg1.jpg"
import eventimg2 from "../../assets/Archives/Slider/Eventimg2.jpg"
import sigaiteam from "../../assets/Archives/Slider/team(2024-2025).jpg"
import azure2 from "../../assets/Archives/Slider/azure2.jpg"

// Image Array for the Top Marquee
const sliderImages = [
  inaugural, azure1, chairman, vicechairman,
  eventimg1, eventimg2, sigaiteam, azure2
];

// Data Array for Timeline
const eventsData = [
  {
    id: 1,
    title: "Inaugural Ceremony",
    date: "8 APR 2024",
    desc: "Excited to announce the SIST ACM SIGAI Student Chapter launched on April 8, 2024. A new beginning for AI innovation on campus.",
    img: inaugural,
    link: "/archives/inaugural"
  },
  {
    id: 2,
    title: "Azure Cascade",
    date: "8 JUL 2024",
    desc: "The SIST ACM SIGAI Student Chapter's first major technical event on cloud computing, exploring the depths of Microsoft Azure.",
    img: azure,
    link: "/archives/azure"
  },
  {
    id: 3,
    title: "Deep Dive: Gen-AI",
    date: "1 AUG 2024",
    desc: "Our first collaborative event exploring the frontiers of Generative AI models and their applications in the real world.",
    img: genai,
    link: "/archives/genai"
  },
  {
    id: 4,
    title: "Digital Art Competition",
    date: "1 AUG 2024",
    desc: "Blending creativity and algorithms. A showcase of AI-generated art that challenges the boundaries of human imagination.",
    img: digitalArt,
    link: "/archives/digiart"
  },
  {
    id: 5,
    title: "Space Day",
    date: "22 AUG 2024",
    desc: "Coordinated Space Day event celebrating astronomical achievements and the intersection of AI with aerospace.",
    img: spaceDay,
    link: "/archives/spaceday"
  },
  {
    id: 6,
    title: "Synergy to Freshers",
    date: "4 SEP 2024",
    desc: "Welcoming the new batch with insights into AI, community building, and the future of technology at SIST.",
    img: freshers,
    link: "/archives/synergy"
  },
  {
    id: 7,
    title: "InsightX'24",
    date: "19 SEP 2024",
    desc: "A dynamic tech event combining competitive challenges and an expert talk on Big Data, fostering innovation and learning.",
    img: Insightx,
    link: "/archives/insightx"
  },
  {
    id: 8,
    title: "Hello Java'25",
    date: "22 SEP 2025",
    desc: "A two-day Java workshop blending core concepts, hands-on activities, and a placement-focused coding challenge for second-year students.",
    img: hellojava,
    link: "/archives/hellojava"
  },
  {
    id: 9,
    title: "Think Tankers",
    date: "28 OCT 2025",
    desc: "A seminar-based quiz on Environmental Science topics, encouraging critical thinking on sustainability and real-world challenges.",
    img: ThinkTankers,
    link: "/archives/thinktankers"
  },
  {
    id: 10,
    title: "Idea to Launch",
    date: "28 OCT 2025",
    desc: "A startup awareness session where students learned to transform ideas into ventures, guided by an industry co-founder.",
    img: ideatolaunch,
    link: "/archives/ideatolaunch"
  },
  {
    id: 11,
    title: "Get Linked with LinkedIn",
    date: "29 OCT 2025",
    desc: "A beginner-friendly session guiding first-year students in building a professional LinkedIn presence for early career growth.",
    img: linkedin,
    link: "/archives/linkedin"
  },
  {
    id: 12,
    title: "Harmonix",
    date: "30 OCT 2025",
    desc: "An event introducing AI-generated music using Suno, with a live demo, hands-on track creation, and top entry recognition.",
    img: harmonix,
    link: "/archives/harmonix"
  },
  {
    id: 13,
    title: "Git Ready",
    date: "12 DEC 2025",
    desc: "A hands-on GitHub workshop covering version control, repository management, and collaborative workflows through practical demonstrations.",
    img: Gitready,
    link: "/archives/Gitready"
  },
  {
    id: 14,
    title: "The QuickTrain Quest",
    date: "15 DEC 2025",
    desc: "A hands-on ML session where students built real-time models using Teachable Machine — gesture detectors, emotion recognizers, and sound classifiers.",
    img: Quicktrain,
    link: "/archives/Quicktrain"
  },
  {
    id: 15,
    title: "Career Compass",
    date: "16 DEC 2025",
    desc: "A peer-led career guidance session where final-year students shared placement experiences and preparation strategies with juniors.",
    img: CareerCompass,
    link: "/archives/CareerCompass"
  },
  {
    id: 16,
    title: "Technopoly",
    date: "17 DEC 2025",
    desc: "A Monopoly-inspired event where teams solved coding challenges and debugging puzzles across a game board to win.",
    img: Technopoly,
    link: "/archives/Technopoly"
  },
  {
    id: 17,
    title: "Mind Auction",
    date: "18 DEC 2025",
    desc: "A debate-based event where students presented and defended viewpoints on assigned topics, sharpening communication and critical thinking.",
    img: MindAuction,
    link: "/archives/MindAuction"
  },
  {
    id: 18,
    title: "Agile Engineering",
    date: "27 JAN 2026",
    desc: "An expert talk by Mr. Sunil Kumar Suvvari on inclusive design, accessibility, and empathy-driven engineering for diverse users.",
    img: AgileEngineering,
    link: "/archives/AgileEngineering"
  },
  {
    id: 19,
    title: "Cognibot",
    date: "29 JAN 2026",
    desc: "An industry session by Mr. Ajay Kumar, CTO of Cognibot, on Machine Learning applications, AI deployment, and industrial automation.",
    img: Cognibot,
    link: "/archives/Cognibot"
  },
  {
    id: 20,
    title: "Resume Building",
    date: "29 JAN 2026",
    desc: "A practical workshop on professional resume creation using Overleaf, covering ATS optimization and recruiter expectations.",
    img: ResumeBuilding,
    link: "/archives/ResumeBuilding"
  },
  {
    id: 21,
    title: "TechUNO",
    date: "30 JAN 2026",
    desc: "UNO meets coding — teams solved DSA problems and rapid-fire technical questions based on card selections in a game-based format.",
    img: TechUNO,
    link: "/archives/Techuno"
  },
  {
    id: 22,
    title: "SpaceZ",
    date: "2 FEB 2026",
    desc: "A space-themed competition with quiz, model-building, and image identification rounds testing astronomy and scientific knowledge.",
    img: SpaceZ,
    link: "/archives/SpaceZ"
  },
  {
    id: 23,
    title: "Startup Xcel",
    date: "3 FEB 2026",
    desc: "An entrepreneurship competition where students ideated startup concepts, built brand identities, and pitched their ideas to an audience.",
    img: StartupXcel,
    link: "/archives/StartupXcel"
  },
  {
    id: 24,
    title: "Cyber Sprint",
    date: "4 FEB 2026",
    desc: "A cybersecurity competition where students tackled phishing scenarios, ethical hacking puzzles, and cyber ethics challenges.",
    img: CyberSprint,
    link: "/archives/CyberSprint"
  },
  {
    id: 25,
    title: "Tech-meme-a-thon",
    date: "4 FEB 2026",
    desc: "A creative competition where teams crafted technical memes, captions, and showcased their work in a gallery walk format.",
    img: Techmemeathon,
    link: "/archives/Techmemeathon"
  },
];

const Archives = () => {
  usePageTitle('Archives');
  return (
    <div className="archives-page">
      <style>{`
        .archives-page {
          width: 100%;
          padding: 120px 0 60px;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          overflow-x: hidden;
        }

        /* --- HEADER STYLES --- */
        .page-header {
            text-align: center; margin-bottom: 60px; padding: 0 20px;
        }

        .text-gradient {
            background: linear-gradient(135deg, #fff 0%, var(--primary-blue) 100%);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        /* --- MARQUEE / SLIDER SECTION --- */
        .marquee-container {
            width: 100%;
            height: 400px; /* INCREASED HEIGHT */
            margin-bottom: 120px;
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
            /* Added mask for fading edges */
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .marquee-track {
            display: flex;
            gap: 30px; /* Increased gap slightly */
            width: max-content;
            animation: scroll 40s linear infinite; /* Slowed down slightly for size */
        }
        
        .marquee-container:hover .marquee-track {
            animation-play-state: paused;
        }

        .marquee-item {
            height: 400px; /* INCREASED HEIGHT */
            width: 600px;  /* INCREASED WIDTH */
            border-radius: 16px;
            overflow: hidden;
            flex-shrink: 0;
            position: relative;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            transition: transform 0.3s ease;
        }
        
        /* Interactive pop on hover */
        .marquee-item:hover {
            transform: scale(0.98);
        }

        .marquee-item img {
            width: 100%; height: 100%; object-fit: cover;
            filter: grayscale(60%) brightness(0.8);
            transition: all 0.5s ease;
            transform: scale(1);
        }

        /* Zoom and color on hover */
        .marquee-item:hover img {
            filter: grayscale(0%) brightness(1);
            transform: scale(1.1); /* Zoom effect */
        }

        /* CALCULATION: 
           (Item Width + Gap) * Number of Unique Items
           (600px + 30px) * 8 = 5040px
        */
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-630px * 8)); }
        }

        /* --- TIMELINE CONTAINER --- */
        .timeline-container {
            padding: 0 20px;
        }

        /* --- TIMELINE ITEM --- */
        .timeline-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6%;
          margin-bottom: 150px;
          position: relative;
        }

        .timeline-item.reverse {
          flex-direction: row-reverse;
        }

        /* IMAGE SIDE */
        .image-wrapper {
          width: 45%;
          position: relative;
        }

        .image-frame {
          width: 100%;
          height: 400px;
          overflow: hidden;
          position: relative;
          border-radius: 20px;
        }

        .image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
          filter: grayscale(20%);
        }

        .image-frame:hover img {
          transform: scale(1.1);
          filter: grayscale(0%);
        }

        /* TEXT SIDE */
        .content-wrapper {
          width: 45%;
          position: relative;
          z-index: 2;
        }

        .big-date {
          font-size: 6rem;
          font-weight: 900;
          position: absolute;
          top: -65px;
          left: -10px;
          opacity: 0.05;
          line-height: 1;
          white-space: nowrap;
          pointer-events: none;
          font-family: sans-serif;
        }

        .item-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.2;
          color: #fff;
        }

        .item-desc {
          color: #cbd5e1;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 25px;
          font-weight: 300;
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--primary-blue, #3b82f6);
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: gap 0.3s ease;
        }

        .read-more:hover {
          gap: 15px;
          color: #fff;
        }

        /* --- RESPONSIVE / MOBILE STYLES --- */
        @media (max-width: 900px) {
          /* Adjust marquee for mobile */
          .marquee-item { width: 350px; height: 280px; }
          .marquee-container { height: 280px; }
          
          /* Recalculate scroll for mobile width (350+30)*8 */
           @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-380px * 8)); }
           }
          
          .timeline-item, .timeline-item.reverse {
            flex-direction: column;
            gap: 30px;
            margin-bottom: 80px;
            align-items: flex-start;
          }
          .image-wrapper, .content-wrapper { width: 100%; }
          .image-frame { height: 280px; }
          .big-date { font-size: 4rem; top: -40px; left: 0; }
          .item-title { font-size: 1.8rem; }
        }
      `}</style>

      {/* --- HEADER --- */}
      <div className="page-header">
        <m.h1
          className="text-gradient"
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          animate="show"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '900', letterSpacing: '-2px' }}
        >
          ARCHIVES
        </m.h1>
        <m.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          style={{ color: '#94a3b8', marginTop: '10px', fontSize: '1.1rem' }}
        >
          A visual timeline of our legacy and milestones.
        </m.p>
      </div>

      {/* --- MARQUEE SECTION --- */}
      <m.div
        className="marquee-container"
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
      >
        <div className="marquee-track">
          {/* Duplicate the array so the loop is seamless */}
          {[...sliderImages, ...sliderImages].map((img, index) => (
            <div className="marquee-item" key={index}>
              <img src={img} alt="Archive Highlight" />
            </div>
          ))}
        </div>
      </m.div>

      {/* --- TIMELINE LOOP --- */}
      <div className="timeline-container">
        {eventsData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`timeline-item ${!isEven ? 'reverse' : ''}`}
            >
              {/* IMAGE BLOCK */}
              <m.div
                className="image-wrapper"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="image-frame">
                  <img src={item.img} alt={item.title} />
                </div>
              </m.div>

              {/* TEXT BLOCK */}
              <m.div
                className="content-wrapper"
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="big-date">{item.date}</div>
                <h2 className="item-title">{item.title}</h2>
                <p className="item-desc">{item.desc}</p>

                <Link to={item.link} className="read-more">
                  Explore Event <FaLongArrowAltRight />
                </Link>
              </m.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Archives;