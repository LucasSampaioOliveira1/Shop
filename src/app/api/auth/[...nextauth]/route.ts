import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth( {

    pages: {
        signIn: '/Login',
    },

    providers: [
          CredentialsProvider({
            
            name: 'Credentials',
 
            credentials: {
              email: { label: "Email", type: "email"},
              password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if(!credentials) {
                    return null;
                }

                if(credentials.email === 'lucas.sampaio1901@outlook.com' && credentials.password === '123') {
                    return {
                        id: '1',
                        name: 'Lucas',
                        email: 'lucas.sampaio1901@outlook.com',
                    }
                }

                return null;
            },
          }),
      
    ],
});

export {handler as GET, handler as POST}