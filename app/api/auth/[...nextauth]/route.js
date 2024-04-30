import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const res = await fetch(`${process.env.API_URI}auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
        });

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
      session.user = {
        id: decoded.id,
        username: decoded.username,
        role: decoded.role,
        name: decoded.name,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
