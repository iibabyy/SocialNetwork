import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '@/src/libs/prismadb';

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'pasword', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error('Invalid credentials')
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email
					}
				});

				if (!user || !user.hashedPassword) {
					throw new Error('Invalid credentials')
				}

				const isPasswordCorrect = await bcrypt.compare(
					credentials.password,
					user.hashedPassword
				);

				if (!isPasswordCorrect) {
					throw new Error('Invalid credentials')
				}

				return user;
			}
		}),
	],
	debug: process.env.NODE_ENV === 'development',
	session: { strategy: 'jwt' },
	jwt: {
		secret: process.env.NEXTAUTH_JWT_SECRET,
	},
	secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)
