'use client'

import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      return toast.error('Please fill in all fields')
    }

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (res.error) {
        return toast.error("Account doesn't exist")
      } else {
        router.refresh()
        router.push('/')
      }
    } catch (error) {
      toast.error(error.response.data)
    }
  }

  return (
    <div className='container flex flex-col justify-center sm:h-[calc(100vh-230px)] mt-10 sm:mt-0'>
      <h1 className='text-3xl font-bold text-center'>Login</h1>

      <div className='flex flex-col sm:flex-row gap-10 sm:gap-0 items-center w-full justify-evenly mt-10 sm:my-20'>
        <form className='sm:w-1/3 space-y-5 px-5 sm:px-0' onSubmit={handleSubmit}>
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
              Login
            </button>
            <Link href={'/register'} className=''>
              Already have an account? <span className='underline text-red-500'> Register</span>
            </Link>
          </div>
        </form>
        <Image
          src='/treasure.png'
          alt='img'
          width={300}
          height={300}
          className='object-fill sm:object-cover sm:rounded-lg bg-red-600 w-[400px] h-[297px] sm:w-[400px] sm:h-[400px]'
        />
      </div>
    </div>
  )
}
