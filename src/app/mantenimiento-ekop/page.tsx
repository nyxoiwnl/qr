import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "En Mantenimiento • Ekop Sushi",
  description: "Estamos mejorando nuestra experiencia para ti 🍱",
};

export default function MantenimientoEkop() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Poppins:wght@300;400;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #0a0804;
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

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
          animation: pulse-orb 8s ease-in-out infinite;
        }
        .orb-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, #c9a84c33, transparent);
          top: -180px; left: -150px;
        }
        .orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #c9a84c22, transparent);
          bottom: -120px; right: -100px;
          animation-delay: -4s;
        }

        @keyframes pulse-orb {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .lines {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        /* Tarjeta */
        .card {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 440px;
          width: 100%;
          background: rgba(201,168,76,0.03);
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 4px;
          padding: 52px 36px;
          backdrop-filter: blur(20px);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6);
        }

        .card::before, .card::after {
          content: '';
          position: absolute;
          width: 24px; height: 24px;
          border-color: rgba(201,168,76,0.4);
          border-style: solid;
        }
        .card::before { top: 12px; left: 12px; border-width: 1px 0 0 1px; }
        .card::after  { bottom: 12px; right: 12px; border-width: 0 1px 1px 0; }

        /* Logo EKOP */
        .logo {
          margin-bottom: 32px;
        }

        .logo-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3.6rem;
          font-weight: 700;
          color: #c9a84c;
          letter-spacing: 10px;
          text-transform: uppercase;
          line-height: 1;
          animation: float 5s ease-in-out infinite;
          display: block;
          text-shadow: 0 0 40px rgba(201,168,76,0.3);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .logo-eye {
          font-size: 1.8rem;
          display: block;
          margin: 4px 0;
          filter: drop-shadow(0 4px 12px rgba(201,168,76,0.5));
        }

        .logo-sub {
          font-size: 0.6rem;
          letter-spacing: 6px;
          color: rgba(201,168,76,0.45);
          text-transform: uppercase;
          font-weight: 400;
        }

        /* Badge */
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.2);
          color: #c9a84c;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 7px 20px;
          border-radius: 2px;
          margin-bottom: 28px;
        }

        .pill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #c9a84c;
          animation: blink 2s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        /* Título */
        .title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          color: #fff;
          line-height: 1.4;
          margin-bottom: 16px;
        }
        .title em { font-style: italic; color: #c9a84c; }

        .desc {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.35);
          font-weight: 300;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        /* Separador */
        .sep {
          display: flex; align-items: center; gap: 16px; margin-bottom: 28px;
        }
        .sep-line { flex: 1; height: 1px; background: rgba(201,168,76,0.18); }
        .sep-char { font-size: 1rem; color: rgba(201,168,76,0.35); font-family: 'Cormorant Garamond', serif; }

        /* Info */
        .info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 32px;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 10px;
          color: rgba(255,255,255,0.45);
          font-size: 0.85rem;
          font-weight: 300;
          line-height: 1.5;
        }

        .info-icon { font-size: 1rem; flex-shrink: 0; margin-top: 1px; }

        /* Botones */
        .btns { display: flex; flex-direction: column; gap: 12px; align-items: center; }

        .btn-ig {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          background: linear-gradient(135deg, #c9a84c, #f0d080);
          color: #0a0804;
          font-weight: 700;
          font-size: 0.88rem;
          letter-spacing: 1px;
          padding: 13px 32px;
          border-radius: 2px;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 6px 24px rgba(201,168,76,0.3);
        }
        .btn-ig:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(201,168,76,0.45);
        }

        .ig-icon { width: 20px; height: 20px; flex-shrink: 0; }

        /* Footer */
        .footer {
          margin-top: 32px;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.1);
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      `}</style>

      <div className="page">
        <div className="lines" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="card">

          {/* Logo Ekop */}
          <div className="logo">
            <span className="logo-name">EKOP</span>
            <span className="logo-eye">👁</span>
            <span className="logo-sub">Vegan Sushi</span>
          </div>

          <div className="pill">
            <span className="pill-dot" />
            En Mantenimiento
          </div>

          <h1 className="title">
            Estamos<br />
            <em>perfeccionando</em><br />
            tu experiencia
          </h1>

          <p className="desc">
            Nuestro menú digital está siendo<br />
            actualizado. ¡Volvemos pronto!
          </p>

          <div className="sep">
            <span className="sep-line" />
            <span className="sep-char">✦</span>
            <span className="sep-line" />
          </div>

          {/* Info de contacto */}
          <div className="info">
            <div className="info-item">
              <span className="info-icon">📞</span>
              <span>+58 0414-5555677</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <span>La Boyera, Caracas, Venezuela<br />Dentro de las instalaciones de Seven Club</span>
            </div>
          </div>

          <div className="btns">
            <a
              href="https://www.instagram.com/ekopsushi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ig"
            >
              <svg className="ig-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @ekopsushi
            </a>
          </div>

          <p className="footer">Ekop Sushi • Experience Authentic Japanese Flavors</p>
        </div>
      </div>
    </>
  );
}
