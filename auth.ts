import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/src/lib/prisma";
import { getUserRoles, UserRole } from "@/src/lib/auth-utils";
import { demoAuthProvider } from "@/src/lib/demo-auth-provider";

declare module "next-auth" {
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

declare module "next-auth/jwt" {
  interface JWT {
    roles?: UserRole[];
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    demoAuthProvider,
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "demo-client-id",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "demo-client-secret",
    }),
  ],

  session: { strategy: "jwt" },
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
