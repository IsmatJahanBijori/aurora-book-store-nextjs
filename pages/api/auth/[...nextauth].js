import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectMongo from '../../../database/connection'
import Users from '../../../model/User'
import { compare } from "bcryptjs"

export default NextAuth({
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    //  email sign in
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        connectMongo().catch(error => { error: "COnnection Failed!" })
        //check user existance


        const result = await Users.findOne({ email: credentials.email })

        //user na thakle
        if (!result) {
          throw new Error("No User Found")
        }

        const checkPassword = await compare(credentials.password, result.password)

        //wrong password
        if(!checkPassword || result.email !== credentials.email){
          throw new Error("User name or password does not match")
        }

        return result
      }

    }),
  ]
})