import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server"

export const middleware = async (req) => {

    const token = await getToken({ req });
    if (token) {
        return NextResponse.next();
    }
    else {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

}

export const config = {
    matcher: ['/my-bookings', '/update-booking/:path*', '/checkout/:path'],
}