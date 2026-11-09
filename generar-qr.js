const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const documentos = [
  {
    nombre: 'qr-menu',
    url: 'https://laguairapoke.vercel.app/menu',
    label: 'Menú',
  },
  {
    nombre: 'qr-carta',
    url: 'https://laguairapoke.vercel.app/carta',
    label: 'Carta',
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
    console.log(`✅ QR ${doc.label} → ${doc.url}`);
  }
  console.log('\n🎉 QRs nuevos generados en qr-output/');
  console.log('   📁 qr-menu.png  → página Menú');
  console.log('   📁 qr-carta.png → página Carta');
})();
