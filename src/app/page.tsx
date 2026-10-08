export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 600, margin: "60px auto", padding: "0 24px" }}>
      <h1>📄 Documentos</h1>
      <p>Selecciona el documento que deseas ver:</p>
      <ul style={{ lineHeight: 2.2, fontSize: "1.1rem" }}>
        <li>
          <a href="/documentos/documento-1.pdf" target="_blank" rel="noopener noreferrer">
            📑 Documento 1
          </a>
        </li>
        <li>
          <a href="/documentos/documento-2.pdf" target="_blank" rel="noopener noreferrer">
            📑 Documento 2
          </a>
        </li>
      </ul>
    </main>
  );
}
