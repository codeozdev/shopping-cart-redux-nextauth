import connectionMongoDB from '@/lib/mongodb'
import Register from '@/models/register'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    await connectionMongoDB()
    const { email } = await req.json()
    const user = await Register.findOne({ email }).select('_id')
    return NextResponse.json({ user })
  } catch (error) {
    console.log(error)
  }
}
