import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

export const credentialsProvider = CredentialsProvider({
  id: "credentials",
  name: "Email and Password",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) {
      return null;
    }

    try {
      // Find user by email
      const user = await prisma.user.findUnique({
        where: { email: credentials.email.toLowerCase() }
      });

      if (!user || !user.password) {
        return null;
      }

      // Verify password
      const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
      
      if (!isPasswordValid) {
        return null;
      }

      return {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
      };
    } catch (error) {
      console.error("Authorization error:", error);
      return null;
    }
  }
});
