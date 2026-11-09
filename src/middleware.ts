import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirige las URLs de los PDFs a la página de mantenimiento
  return NextResponse.redirect(new URL('/mantenimiento', request.url));
}

export const config = {
  matcher: ['/documentos/documento-1.pdf', '/documentos/documento-2.pdf'],
};
