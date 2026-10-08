@echo off
title Actualizar documentos - Poke La Guaira
color 0A

echo.
echo  ==========================================
echo   POKE LA GUAIRA - Actualizar documentos
echo  ==========================================
echo.
echo  Subiendo cambios a GitHub y Vercel...
echo.

cd /d "C:\Users\pc\Documents\qrs"

git add .
git commit -m "actualizar documentos"
git push

echo.
echo  ==========================================
echo   LISTO! Vercel actualiza en ~1 minuto.
echo.
echo   Tus links siguen siendo los mismos:
echo   doc1: laguairapoke.vercel.app/documentos/documento-1.pdf
echo   doc2: laguairapoke.vercel.app/documentos/documento-2.pdf
echo  ==========================================
echo.
pause
