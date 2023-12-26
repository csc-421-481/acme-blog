import { NextResponse } from "next/server";
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
export default function middleware(request) {
  const cookieJar = request.cookies;
  const allowProfileAccess = cookieJar.get("token");
  const { pathname } = request.nextUrl;
  //   const whiteListedRoutes = ['/', '/reset-password', '/create-account']
  //   const whiteListedDynamicRoutes = ['/set-new-password/', '/set-portal-password/']

  if (pathname.startsWith("/profile") && !allowProfileAccess) {
    // if  both conditions above are note satisfied and the allowPortalAccess cookie is not set then redirect to login page
    return NextResponse.redirect(`${request.nextUrl.origin}/login`);
  }

  return NextResponse.next();
}
