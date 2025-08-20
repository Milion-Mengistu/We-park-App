import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";

export const demoAuthProvider = CredentialsProvider({
  id: "demo-credentials",
  name: "Demo Login",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) {
      return null;
    }

    // Demo credentials for testing
    const demoUsers = {
      "admin@wepark.com": { password: "admin123", role: "ADMIN" },
      "attendant@wepark.com": { password: "attendant123", role: "ATTENDANT" },
      "user@wepark.com": { password: "user123", role: "USER" }
    };

    const demoUser = demoUsers[credentials.email as keyof typeof demoUsers];
    
    if (demoUser && credentials.password === demoUser.password) {
      // Find or create user in database
      let user = await prisma.user.findUnique({
        where: { email: credentials.email }
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            email: credentials.email,
            name: credentials.email.split('@')[0],
            image: null,
          }
        });

        // Assign role
        await prisma.userRole.create({
          data: {
            userId: user.id,
            role: demoUser.role,
            isActive: true,
          }
        });
      }

      return {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
      };
    }

    return null;
  }
});
