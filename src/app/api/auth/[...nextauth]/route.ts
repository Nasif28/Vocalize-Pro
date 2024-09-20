import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Add your provider (email/password) or third-party providers (Google, GitHub)
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Capture email and password
        const user = { id: "1", name: "User", email: credentials?.email };

        // Return user object to create a session
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth", // Redirect to your custom login page
  },
});

export { handler as GET, handler as POST };
