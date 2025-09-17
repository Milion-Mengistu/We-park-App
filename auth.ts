import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/src/lib/prisma';
import { getUserRoles, UserRole } from '@/src/lib/auth-utils';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      roles?: UserRole[];
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    roles?: UserRole[];
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Email & Password',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        const email = String(credentials.email).toLowerCase();
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.passwordHash) return null;
        const { verifyPassword } = await import('@/src/lib/passwords');
        const valid = verifyPassword(
          String(credentials.password),
          user.passwordHash
        );
        if (!valid) return null;
        return {
          id: user.id,
          name: user.name ?? null,
          email: user.email ?? null,
          image: user.image ?? null,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'demo-client-id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'demo-client-secret',
    }),
  ],

  session: { strategy: 'jwt' },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.roles = token.roles;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      // On first sign in, assign default USER role if no roles exist
      if (account && user?.id) {
        try {
          const existingRoles = await getUserRoles(user.id);
          if (existingRoles.length === 0) {
            // Assign default USER role to new users
            await prisma.userRole.create({
              data: {
                userId: user.id,
                role: 'USER',
                isActive: true,
              },
            });
            token.roles = ['USER'];
          } else {
            token.roles = existingRoles;
          }
        } catch (error) {
          console.error('Error handling user roles in JWT callback:', error);
          token.roles = ['USER'];
        }
      }

      // Refresh roles on each token refresh
      if (token.sub) {
        try {
          const roles = await getUserRoles(token.sub);
          token.roles = roles;
        } catch (error) {
          console.error('Error refreshing user roles:', error);
        }
      }

      return token;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
};
