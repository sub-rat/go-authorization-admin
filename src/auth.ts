import { PublicService, dto_Login } from '@/services/generated/requests';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      
      async authorize(credentials, req) {
        console.log("I AM AT LOGIN", credentials)
        const data = await PublicService.postApiV1PublicsUserLogin({
          username: credentials?.username,
          password:credentials?.password
        } as dto_Login)
        // // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
  
        if (data.message == 'ok') {
          // Any object returned will be saved in `user` property of the JWT
          return data.data
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token }) {
      return token
    },
    async session({ session, token }: { session: any; token: any }) {
      session.address = token.sub
      session.user.name = token.sub
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
});
