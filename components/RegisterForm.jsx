'use client'

import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email || !password) {
      toast('Please fill all the fields')
    }

    try {
      const resUserExist = await fetch('/api/userExist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const { user } = await resUserExist.json()

      if (user) {
        return toast.error('User already exists')
      }

      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      })

      if (res.ok) {
        toast.success('Registered Successfully')
        router.push('/login')
      } else {
        toast.error('User registration failed')
      }
    } catch (error) {
      toast(error.message)
    }
  }

  return (
    <div className='container flex flex-col justify-center sm:h-[calc(100vh-230px)] mt-10 sm:mt-0'>
      <h1 className='text-3xl font-bold text-center'>Register</h1>

      <div className='flex flex-col sm:flex-row gap-10 sm:gap-0 items-center w-full justify-evenly mt-10 sm:my-20'>
        <form className='sm:w-1/3 space-y-5 px-5 sm:px-0' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Full Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-b border-b-gray-200 hover:border-b-gray-500  w-full outline-none'
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-b border-b-gray-200 hover:border-b-gray-500  w-full outline-none'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border-b border-b-gray-200 hover:border-b-gray-500  w-full outline-none'
          />
          <div className='flex flex-col sm:flex-row items-center gap-5'>
            <button
              className='bg-accent p-2 rounded-lg text-white hover:bg-accent/80 w-full sm:w-fit'
              type='submit'>
              Register
            </button>
            <Link href={'/login'} className=''>
              Already have an account? <span className='underline text-red-500'>Login</span>
            </Link>
          </div>
        </form>
        <Image
          src='/login.png'
          alt='img'
          width={300}
          height={300}
          className='object-fill sm:object-cover sm:rounded-lg bg-red-600 w-[400px] h-[252px] sm:w-[400px] sm:h-[400px]'
        />
      </div>
    </div>
  )
}
