import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "En Mantenimiento • Ekop Sushi",
  description: "Estamos mejorando nuestra experiencia para ti 🍱",
};

export default function MantenimientoEkop() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Poppins:wght@300;400;600;700&display=swap');

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

        /* Fondo con textura y orbes dorados */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
          animation: pulse-orb 8s ease-in-out infinite;
        }
        .orb-1 {
          width: 480px; height: 480px;
          background: radial-gradient(circle, #c9a84c33, #8b691411);
          top: -180px; left: -150px;
          animation-delay: 0s;
        }
        .orb-2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, #c9a84c22, #5a400a11);
          bottom: -120px; right: -100px;
          animation-delay: -4s;
        }

        @keyframes pulse-orb {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        /* Líneas decorativas japonesas */
        .lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(201, 168, 76, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 168, 76, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        /* Tarjeta */
        .card {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 420px;
          width: 100%;
          background: rgba(201, 168, 76, 0.03);
          border: 1px solid rgba(201, 168, 76, 0.15);
          border-radius: 4px;
          padding: 56px 40px;
          backdrop-filter: blur(20px);
          box-shadow:
            0 0 0 1px rgba(201, 168, 76, 0.05),
            0 40px 80px rgba(0, 0, 0, 0.6);
        }

        /* Líneas decorativas en las esquinas */
        .card::before,
        .card::after {
          content: '';
          position: absolute;
          width: 24px; height: 24px;
          border-color: rgba(201, 168, 76, 0.5);
          border-style: solid;
        }
        .card::before {
          top: 12px; left: 12px;
          border-width: 1px 0 0 1px;
        }
        .card::after {
          bottom: 12px; right: 12px;
          border-width: 0 1px 1px 0;
        }

        /* Icono */
        .icon {
          font-size: 4rem;
          display: block;
          margin-bottom: 28px;
          animation: float 5s ease-in-out infinite;
          filter: drop-shadow(0 8px 24px rgba(201, 168, 76, 0.4));
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        /* Badge */
        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(201, 168, 76, 0.08);
          border: 1px solid rgba(201, 168, 76, 0.2);
          color: #c9a84c;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          padding: 7px 20px;
          border-radius: 2px;
          margin-bottom: 32px;
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

        /* Textos */
        .brand {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: #c9a84c;
          letter-spacing: 6px;
          text-transform: uppercase;
          margin-bottom: 4px;
          line-height: 1;
        }

        .brand-sub {
          font-size: 0.65rem;
          font-weight: 400;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: rgba(201, 168, 76, 0.5);
          margin-bottom: 28px;
        }

        .title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          color: #fff;
          line-height: 1.4;
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .title em {
          font-style: italic;
          color: #c9a84c;
        }

        .desc {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.35);
          font-weight: 300;
          line-height: 1.8;
          margin-bottom: 36px;
        }

        /* Separador */
        .sep {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .sep-line { flex: 1; height: 1px; background: rgba(201, 168, 76, 0.2); }
        .sep-char {
          font-size: 1rem;
          color: rgba(201, 168, 76, 0.4);
          font-family: 'Cormorant Garamond', serif;
        }

        /* Botones */
        .btns {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

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
          box-shadow: 0 6px 24px rgba(201, 168, 76, 0.3);
        }

        .btn-ig:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 36px rgba(201, 168, 76, 0.45);
        }

        .ig-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        /* Footer */
        .footer {
          margin-top: 36px;
          font-size: 0.68rem;
          color: rgba(255,255,255,0.12);
          letter-spacing: 2px;
          text-transform: uppercase;
        }
      `}</style>

      <div className="page">
        <div className="lines" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />

        <div className="card">
          <span className="icon">🍱</span>

          <div className="pill">
            <span className="pill-dot" />
            En Mantenimiento
          </div>

          <p className="brand">EKOP</p>
          <p className="brand-sub">Vegan Sushi</p>

          <h1 className="title">
            Estamos<br />
            <em>perfeccionando</em><br />
            tu experiencia
          </h1>

          <p className="desc">
            Nuestro menú digital está siendo<br />
            actualizado. Volvemos pronto con<br />
            sabores auténticos japoneses.
          </p>

          <div className="sep">
            <span className="sep-line" />
            <span className="sep-char">✦</span>
            <span className="sep-line" />
          </div>

          <div className="btns">
            <a
              href="https://www.instagram.com/ekopsushi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ig"
            >
              {/* Logo oficial de Instagram */}
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
