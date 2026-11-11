import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // documento-1 → La Guaira Poke (PDF activo, sin mantenimiento)

  // documento-2 → Ekop Sushi (en mantenimiento)
  if (pathname === '/documentos/documento-2.pdf') {
    return NextResponse.redirect(new URL('/mantenimiento-ekop', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/documentos/documento-2.pdf'],
};
