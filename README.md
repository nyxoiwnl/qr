# QR Estáticos → PDFs en Vercel

Proyecto Next.js que sirve dos documentos PDF estáticos a través de Vercel,
accesibles mediante códigos QR permanentes y gratuitos.

## Estructura de archivos

```
qrs/
├── public/
│   └── documentos/
│       ├── documento-1.pdf   ← Coloca aquí tu primer PDF
│       └── documento-2.pdf   ← Coloca aquí tu segundo PDF
├── src/
│   └── app/
│       ├── layout.tsx
│       └── page.tsx
├── vercel.json               ← Cabeceras HTTP para PDFs
├── next.config.js
├── package.json
└── tsconfig.json
```

## Cómo usar

1. Copia tus PDFs en `public/documentos/` con los nombres exactos indicados.
2. Ejecuta `npm install` y luego `npm run dev` para probar localmente.
3. Haz deploy en Vercel: `npx vercel --prod`
4. Genera los QR apuntando a las URLs de producción (ver abajo).

## URLs de producción

```
https://TU-PROYECTO.vercel.app/documentos/documento-1.pdf
https://TU-PROYECTO.vercel.app/documentos/documento-2.pdf
```
