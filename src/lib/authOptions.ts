import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

export default authOptions;
