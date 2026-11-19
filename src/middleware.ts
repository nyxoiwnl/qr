import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Ambos PDFs activos — sin redirección
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
