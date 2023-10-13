import CredentialsProvider from 'next-auth/providers/credentials'
import connectionMongoDB from '@/lib/mongodb'
import Register from '@/models/register'
import bcrypt from 'bcryptjs'

export const options = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials

        try {
          await connectionMongoDB()
          const user = await Register.findOne({ email })

          if (!user) {
            return null
          }

          const passwordMatch = await bcrypt.compare(password, user.password)

          if (!passwordMatch) {
            return null
          }
          return user
        } catch (error) {
          console.log(error)
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  pages: {
    signIn: '/login',
  },
}
