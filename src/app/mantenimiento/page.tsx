import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "En Mantenimiento • La Guaira Poke",
  description: "Estamos mejorando nuestra experiencia para ti 🍣",
};

export default function Mantenimiento() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #07131a;
          font-family: 'Poppins', sans-serif;
        }

        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 40px 24px;
        }

        /* ---- Orbes de fondo ---- */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          animation: pulse-orb 7s ease-in-out infinite;
          pointer-events: none;
        }
        .orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #00c6ff55, #0072ff22);
          top: -200px; right: -150px;
          animation-delay: 0s;
        }
        .orb-2 {
          width: 420px; height: 420px;
          background: radial-gradient(circle, #11998e44, #38ef7d22);
          bottom: -150px; left: -100px;
          animation-delay: -3.5s;
        }

        @keyframes pulse-orb {
          0%, 100% { transform: scale(1) translate(0, 0); }
          50% { transform: scale(1.08) translate(15px, -15px); }
        }

        /* ---- Tarjeta ---- */
        .card {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 420px;
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          padding: 52px 36px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5);
        }

        /* ---- Icono ---- */
        .icon {
          font-size: 4.5rem;
          line-height: 1;
          display: block;
          margin-bottom: 28px;
          animation: float 4s ease-in-out infinite;
          filter: drop-shadow(0 8px 24px rgba(56, 239, 125, 0.3));
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-14px); }
        }

        /* ---- Pastilla status ---- */
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(56, 239, 125, 0.1);
          border: 1px solid rgba(56, 239, 125, 0.25);
          color: #38ef7d;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          padding: 7px 18px;
          border-radius: 50px;
          margin-bottom: 28px;
        }

        .pill-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #38ef7d;
          animation: blink 1.8s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        /* ---- Título ---- */
        .brand {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 10px;
        }

        .title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }

        .title .accent {
          background: linear-gradient(135deg, #00c6ff, #38ef7d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ---- Descripción ---- */
        .desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.45);
          font-weight: 300;
          line-height: 1.75;
          margin-bottom: 36px;
        }

        /* ---- Separador ---- */
        .sep {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .sep-line { flex: 1; height: 1px; background: rgba(255,255,255,0.08); }
        .sep-emoji { font-size: 1rem; opacity: 0.4; }

        /* ---- Botón Instagram ---- */
        .ig {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          background: linear-gradient(135deg, #00c6ff, #38ef7d);
          color: #07131a;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 13px 28px;
          border-radius: 50px;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 6px 24px rgba(56, 239, 125, 0.3);
        }

        .ig:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(56, 239, 125, 0.45);
        }

        /* ---- Footer ---- */
        .footer {
          margin-top: 36px;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.18);
          letter-spacing: 0.5px;
        }
      `}</style>

      <div className="page">
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="card">
          <span className="icon">🍣</span>

          <div className="pill">
            <span className="pill-dot" />
            En mantenimiento
          </div>

          <p className="brand">La Guaira Poke</p>

          <h1 className="title">
            Estamos<br />
            <span className="accent">mejorando</span><br />
            para ti
          </h1>

          <p className="desc">
            Nuestro menú digital está siendo<br />
            actualizado. ¡Volvemos pronto con<br />
            algo increíble! 🌊
          </p>

          <div className="sep">
            <span className="sep-line" />
            <span className="sep-emoji">🥑</span>
            <span className="sep-line" />
          </div>

          <a
            href="https://www.instagram.com/laguairapoke"
            target="_blank"
            rel="noopener noreferrer"
            className="ig"
          >
            📸 Síguenos en Instagram
          </a>

          <p className="footer">@laguairapoke</p>
        </div>
      </div>
    </>
  );
}
