'use client'

import Link from 'next/link'
import { BiUser } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { useSession } from 'next-auth/react'
import SearchBar from '@/components/SearchBar'

export default function Cart() {
  const item = useSelector((state) => state.cart)
  const { data: session } = useSession()

  return (
    <div className='border-b border-gray-200 py-6'>
      <div className='container flex flex-col gap-5 sm:flex sm:flex-row sm:gap-0 justify-between items-center'>
        <Link href={'/'} className='font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish'>
          Logo
        </Link>

        <SearchBar />

        <div className='flex items-center gap-4 text-gray-500 text-[30px]'>
          <div className='text-base space-x-4 flex items-center'>
            {!session ? (
              <>
                <Link href={'/register'}>Register</Link>
                <Link href={'/login'}>Login</Link>
              </>
            ) : (
              <Link href={'/profile'}>
                <BiUser size={30} />
              </Link>
            )}
          </div>

          <Link href={'/cart'} className='relative'>
            <HiOutlineShoppingBag />
            <div className='absolute top-0 right-0 w-[18px] h-[18px] text-[12px] rounded-full bg-red-600 text-white text-center translate-x-1 -translate-y-1'>
              {item.length}
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
