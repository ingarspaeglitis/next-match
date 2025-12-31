import { NextRequest, NextResponse } from 'next/server'
import { auth } from './auth';
import { authRoutes, publicRoutes } from './routes';
 
export async function proxy(req: NextRequest) {

    const {nextUrl} = req;
    const session = await auth();
    const isPublic = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    let isLoggedIn = true;
    if (!session)
    {
        isLoggedIn = false;
    }

    if (isPublic) {
        return NextResponse.next();
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL('/members', nextUrl));
        }
        return NextResponse.next();
    }

    if (!isPublic && !isLoggedIn) {
        return NextResponse.redirect(new URL('/login', nextUrl));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}