import NextAuth from 'next-auth';
// import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/db/prisma";

export const config = {
  providers: [],
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)
    // adapter: PrismaAdapter(prisma),