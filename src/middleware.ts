import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)']);

// Public routes that don't require authentication
const publicRoutes = ['/site', '/api/uploadthing'];

export default clerkMiddleware(async (auth, req) => {

  const url = req.nextUrl;
  const searchParams = url.searchParams.toString();
  const hostname = req.headers.get('host');

  const pathWithSearchParams = `${url.pathname}${
    searchParams ? `?${searchParams}` : ''
  }`;

  // Handle custom subdomains
  const customSubDomain = hostname
    ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
    .filter(Boolean)[0];

  if (customSubDomain) {
    return NextResponse.rewrite(
      new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url)
    );
  }

  // Redirect for sign-in and sign-up routes
  if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
    return NextResponse.redirect(new URL(`/main/agency/auth/sign-in`, req.url))
  }


  // Rewrite for '/' and '/site'
  if (
    url.pathname === '/' ||
    (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL('/site', req.url));
  }

  // Rewrite for '/agency' and '/subaccount'
  if (
    url.pathname.startsWith('/agency') ||
    url.pathname.startsWith('/subaccount')
  ) {
    return NextResponse.rewrite(new URL(`/main${url.pathname}`, req.url));
  }
  // Skip auth for public routes
  if (publicRoutes.includes(url.pathname)) {
    return NextResponse.next();
  }

  // Apply authentication for protected routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
