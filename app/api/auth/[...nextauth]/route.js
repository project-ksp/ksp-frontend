import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          }
        );

        if (res.ok) {
          return await res.json();
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.token = user.token;
      return token;
    },
    async session({ session, token }) {
      const decoded = jwtDecode(token.token);
      session.token = token.token;

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}auth/me`, {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        return null;
      }

      session.branch = data.data.branch;

      session.user = {
        id: decoded.id,
        username: decoded.username,
        role: decoded.role,
        name: decoded.name,
        branchId: decoded.branchId,
      };
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
