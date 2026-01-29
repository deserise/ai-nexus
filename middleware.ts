import { auth } from "@/auth.config";
import { NextResponse } from "next/server";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const isOnAdmin = req.nextUrl.pathname.startsWith("/admin");

    if (isOnAdmin) {
        if (!isLoggedIn) return NextResponse.redirect(new URL("/login", req.nextUrl));
        // Simple admin check based on session
        if (!(req.auth?.user as any)?.isAdmin) {
            return NextResponse.redirect(new URL("/", req.nextUrl));
        }
    }
});

export const config = {
    matcher: ["/admin/:path*"],
};
