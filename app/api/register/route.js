import connectionMongoDB from '@/lib/mongodb'
import bcrypt from 'bcryptjs'
import Register from '@/models/register'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { name, email, password } = await req.json()
    const handlePassword = await bcrypt.hash(password, 10)
    await connectionMongoDB()
    await Register.create({ name, email, password: handlePassword })

    return NextResponse.json({ message: 'Register success' }, { status: 200 })
  } catch (error) {
    NextResponse.json({ message: 'Register failed' }, { status: 500 })
  }
}
