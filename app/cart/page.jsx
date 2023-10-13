'use client'

import { useSelector, useDispatch } from 'react-redux'
import { remove, increment, decrement } from '@/redux/features/cartSlice'
import Image from 'next/image'

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  const handleIncrement = (id) => {
    dispatch(increment(id))
  }

  const handleDecrement = (id) => {
    dispatch(decrement(id))
  }

  return (
    <div className='container my-10 flex flex-col gap-5 sm:gap-10 px-5 sm:px-0 sm:h-[calc(100vh-310px)]'>
      {cartItems.map((item) => (
        <div key={item.id} className='flex items-center justify-between'>
          <div className='flex items-center gap-5'>
            <Image src={item.image} alt={item.description} width={50} height={50} />
            <p className='font-bold truncate w-[622px] hidden sm:flex'>{item.title}</p>
          </div>

          <div className='flex items-center justify-between gap-10 sm:gap-40 cursor-pointer'>
            <div>
              <button className='border bg-gray-300 p-2' onClick={() => handleIncrement(item.id)}>
                +
              </button>
              <button className='border bg-gray-300 p-2 w-[35px]'>{item.quantity}</button>
              <button className='border bg-gray-300 p-2' onClick={() => handleDecrement(item.id)}>
                -
              </button>
            </div>
            <div className='flex flex-col items-center'>
              <p className='font-bold text-xs sm:text-sm'>${item.price}</p>
              <button
                className='bg-red-600 p-1 rounded-md text-white'
                onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className='border-t mt-5 py-3 flex items-center font-bold uppercase'>
        Total price : $
        {cartItems
          .reduce(
            (totalAmount, currentItem) => totalAmount + currentItem.price * currentItem.quantity,
            0,
          )
          .toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </div>
    </div>
  )
}
