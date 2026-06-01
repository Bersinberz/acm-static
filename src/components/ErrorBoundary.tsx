import { Component, type ReactNode, type ErrorInfo } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  handleRetry = () => {
    this.setState({ hasError: false, errorMessage: "" });
  };

  render() {
    if (this.state.hasError) {
      return (
        <>
          <style>{`
            .error-boundary-wrap {
              min-height: 100vh;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-family: 'Poppins', sans-serif;
              padding: 40px 20px;
              text-align: center;
              position: relative;
              overflow: hidden;
            }

            /* Animated nebula background matching App.css */
            .error-boundary-wrap::before {
              content: '';
              position: fixed;
              top: -50%;
              left: -50%;
              width: 200%;
              height: 200%;
              z-index: -1;
              background: radial-gradient(
                circle,
                #1e1b4b 0%,
                #0f172a 30%,
                #020617 60%,
                #000000 100%
              );
              animation: errNebula 20s ease-in-out infinite alternate;
              will-change: transform;
            }

            @keyframes errNebula {
              0%   { transform: translate(0, 0); }
              50%  { transform: translate(-10%, -10%); }
              100% { transform: translate(5%, 5%); }
            }

            /* Glitch effect on the error code */
            .error-code {
              font-size: clamp(5rem, 18vw, 10rem);
              font-weight: 900;
              line-height: 1;
              color: #fff;
              letter-spacing: -4px;
              position: relative;
              animation: glitchPulse 3s ease-in-out infinite;
            }

            .error-code::before,
            .error-code::after {
              content: attr(data-text);
              position: absolute;
              top: 0; left: 0;
              width: 100%;
              height: 100%;
            }

            .error-code::before {
              color: #3b82f6;
              animation: glitchLeft 2.5s infinite;
              clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            }

            .error-code::after {
              color: #a855f7;
              animation: glitchRight 2.5s infinite;
              clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
            }

            @keyframes glitchLeft {
              0%, 90%, 100% { transform: translate(0); opacity: 0; }
              92%            { transform: translate(-4px, 2px); opacity: 0.8; }
              94%            { transform: translate(4px, -2px); opacity: 0.8; }
              96%            { transform: translate(-2px, 1px); opacity: 0.8; }
            }

            @keyframes glitchRight {
              0%, 88%, 100% { transform: translate(0); opacity: 0; }
              90%            { transform: translate(4px, -2px); opacity: 0.8; }
              92%            { transform: translate(-4px, 2px); opacity: 0.8; }
              94%            { transform: translate(2px, -1px); opacity: 0.8; }
            }

            @keyframes glitchPulse {
              0%, 100% { text-shadow: 0 0 20px rgba(59,130,246,0.3); }
              50%       { text-shadow: 0 0 40px rgba(59,130,246,0.6), 0 0 80px rgba(59,130,246,0.2); }
            }

            .error-title {
              font-size: clamp(1.2rem, 3vw, 1.8rem);
              font-weight: 700;
              color: #fff;
              margin: 20px 0 12px;
              letter-spacing: 2px;
              text-transform: uppercase;
            }

            .error-subtitle {
              color: #64748b;
              font-size: 0.95rem;
              max-width: 420px;
              line-height: 1.7;
              margin-bottom: 40px;
            }

            .error-actions {
              display: flex;
              gap: 16px;
              flex-wrap: wrap;
              justify-content: center;
            }

            .err-btn {
              padding: 12px 32px;
              border-radius: 50px;
              font-weight: 600;
              font-size: 0.9rem;
              cursor: pointer;
              transition: all 0.3s ease;
              text-decoration: none;
              border: none;
              font-family: 'Poppins', sans-serif;
            }

            .err-btn-primary {
              background: #3b82f6;
              color: #fff;
              box-shadow: 0 0 20px rgba(59,130,246,0.3);
            }

            .err-btn-primary:hover {
              background: #2563eb;
              box-shadow: 0 0 35px rgba(59,130,246,0.5);
              transform: translateY(-2px);
            }

            .err-btn-secondary {
              background: rgba(255,255,255,0.05);
              color: #cbd5e1;
              border: 1px solid rgba(255,255,255,0.1);
            }

            .err-btn-secondary:hover {
              background: rgba(255,255,255,0.1);
              color: #fff;
              transform: translateY(-2px);
            }

            /* Floating orbs for visual depth */
            .err-orb {
              position: fixed;
              border-radius: 50%;
              filter: blur(80px);
              opacity: 0.12;
              pointer-events: none;
              animation: orbFloat 8s ease-in-out infinite alternate;
            }

            .err-orb-1 {
              width: 400px; height: 400px;
              background: #3b82f6;
              top: -100px; left: -100px;
              animation-delay: 0s;
            }

            .err-orb-2 {
              width: 300px; height: 300px;
              background: #a855f7;
              bottom: -80px; right: -80px;
              animation-delay: -4s;
            }

            @keyframes orbFloat {
              0%   { transform: translate(0, 0) scale(1); }
              100% { transform: translate(30px, 20px) scale(1.1); }
            }
          `}</style>

          <div className="error-boundary-wrap">
            <div className="err-orb err-orb-1" />
            <div className="err-orb err-orb-2" />

            <div className="error-code" data-text="ERR">ERR</div>
            <h1 className="error-title">Something went wrong</h1>
            <p className="error-subtitle">
              An unexpected error occurred while rendering this page.
              Try refreshing or go back to the home page.
            </p>

            <div className="error-actions">
              <button className="err-btn err-btn-primary" onClick={this.handleRetry}>
                Try Again
              </button>
              <a href="/" className="err-btn err-btn-secondary">
                Go Home
              </a>
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
