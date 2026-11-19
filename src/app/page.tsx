export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Poppins:wght@300;400;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0804; font-family: 'Poppins', sans-serif; }
        .page {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 40px 24px; text-align: center; position: relative; overflow: hidden;
        }
        .orb {
          position: absolute; border-radius: 50%; filter: blur(110px); pointer-events: none;
          animation: pulse-orb 8s ease-in-out infinite;
        }
        .orb-1 { width: 400px; height: 400px; background: radial-gradient(circle, #c9a84c33, transparent); top: -150px; left: -100px; }
        .orb-2 { width: 350px; height: 350px; background: radial-gradient(circle, #c9a84c22, transparent); bottom: -100px; right: -80px; animation-delay: -4s; }
        @keyframes pulse-orb { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        .card { position: relative; z-index: 10; }
        .logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 4rem; font-weight: 700; color: #c9a84c;
          letter-spacing: 10px; text-transform: uppercase;
          line-height: 1; margin-bottom: 4px;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .logo-sub { font-size: 0.65rem; letter-spacing: 6px; color: rgba(201,168,76,0.5); text-transform: uppercase; margin-bottom: 32px; }
        p { color: rgba(255,255,255,0.2); font-size: 0.75rem; letter-spacing: 2px; text-transform: uppercase; }
      `}</style>
      <div className="page">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="card">
          <div className="logo-text">EKOP</div>
          <p className="logo-sub">Vegan Sushi</p>
          <p>@ekopsushi</p>
        </div>
      </div>
    </>
  );
}
