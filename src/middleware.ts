import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";

const protectedRoutes = ["/profile"];
const authRoutes = ["/signin", "/signup"];

export default async function middleware(request: NextRequest) {
  const session = await auth();
  const isLoggedIn = !!session;

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}
