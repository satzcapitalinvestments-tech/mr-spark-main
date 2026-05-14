import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/lib/i18n";

function getLocaleFromPath(pathname: string) {
  const [firstSegment] = pathname.split("/").filter(Boolean);
  return firstSegment && isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", getLocaleFromPath(request.nextUrl.pathname));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};
