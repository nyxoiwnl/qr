import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // documento-1 → La Guaira Poke
  if (pathname === '/documentos/documento-1.pdf') {
    return NextResponse.redirect(new URL('/mantenimiento', request.url));
  }

  // documento-2 → Ekop Sushi
  if (pathname === '/documentos/documento-2.pdf') {
    return NextResponse.redirect(new URL('/mantenimiento-ekop', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/documentos/documento-1.pdf', '/documentos/documento-2.pdf'],
};
