export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #07131a; font-family: 'Poppins', sans-serif; }
        .page {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          padding: 40px 24px; text-align: center;
        }
        .emoji { font-size: 3.5rem; margin-bottom: 20px; display: block;
          animation: float 3.5s ease-in-out infinite; }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        h1 { font-size: 2rem; font-weight: 800; color: #fff; margin-bottom: 8px; }
        p { color: rgba(255,255,255,0.4); font-size: 0.9rem; font-weight: 300; }
      `}</style>
      <div className="page">
        <div>
          <span className="emoji">🍣</span>
          <h1>La Guaira Poke</h1>
          <p>@laguairapoke</p>
        </div>
      </div>
    </>
  );
}
