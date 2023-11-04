// export { default } from "next-auth/middleware";

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const { pathname, origin } = req.nextUrl;
    const { token } = req.nextauth;
    // @ts-ignore: Unreachable code error
    const role = token?.user?.role!;
    if (pathname.startsWith("/dashboard") && role !== "admin") {
      return NextResponse.redirect(origin);
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);
export const config = {
  matcher: ["/profile/:path*", "/protected/:path*", "/dashboard/:path*"],
};
