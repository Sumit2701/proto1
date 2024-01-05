import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
export const authOptions = {
 providers: [
  GoogleProvider({
    clientId: "949259127608-lvmt2vhno6gifi2i60bdfa15h6lp9vnp.apps.googleusercontent.com"        ,
    clientSecret: "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" ,
  }),
 ],
 session: {
  strategy: 'jwt',
 },
};
export default NextAuth(authOptions);
