const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const documentos = [
  {
    nombre: 'qr-documento-1',
    url: 'https://laguairapoke.vercel.app/documentos/documento-1.pdf',
  },
  {
    nombre: 'qr-documento-2',
    url: 'https://laguairapoke.vercel.app/documentos/documento-2.pdf',
  },
];

const outDir = path.join(__dirname, 'qr-output');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const opciones = {
  errorCorrectionLevel: 'H',
  type: 'png',
  width: 800,
  margin: 2,
  color: { dark: '#000000', light: '#FFFFFF' },
};

(async () => {
  for (const doc of documentos) {
    const rutaPNG = path.join(outDir, `${doc.nombre}.png`);
    const rutaSVG = path.join(outDir, `${doc.nombre}.svg`);
    await QRCode.toFile(rutaPNG, doc.url, opciones);
    await QRCode.toFile(rutaSVG, doc.url, { ...opciones, type: 'svg' });
    console.log(`✅ ${doc.nombre} → ${doc.url}`);
  }
  console.log('\n🎉 QR generados en qr-output/');
})();
