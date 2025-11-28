import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
   authorized({ auth, request: { nextUrl } }) {
  const isLoggedIn = !!auth?.user;
  const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

  if (isOnDashboard) {
    return isLoggedIn; // true nếu login, false nếu chưa login
  } else if (isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl)); // redirect tương đối → dùng domain hiện tại
  }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;