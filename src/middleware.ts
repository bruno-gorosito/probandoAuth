import axios from 'axios';
import { getToken } from 'next-auth/jwt';
import { cookies } from 'next/dist/client/components/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

    const token = request.cookies.get('next-auth.session-token');

    
    if (request.nextUrl.pathname.startsWith('/chat')) {
      if (!token){
        return NextResponse.redirect(new URL('/auth/login', request.url))
      }
    }

    if (request.nextUrl.pathname.startsWith('/auth/login') || request.nextUrl.pathname.startsWith('/auth/register')) {
      if (token){
        return NextResponse.redirect(new URL('/chat', request.url))
      }
    }

    if (request.nextUrl.pathname.startsWith('/api')) {
      if (request.method === 'GET') {
        if (!request.nextUrl.pathname.startsWith('/api/auth/')){
          if (token) {
            let user = await getToken({
              req: request,
              secret: process.env.NEXTAUTH_SECRET
            })
            if (user?.admin) {
              return 
            }
          }
          return NextResponse.redirect(new URL('/chat', request.url))
        }
      }
    }





    
    
}
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/about-us'],
// }