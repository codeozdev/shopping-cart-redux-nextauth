'use client'

import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '@/redux/features/cartSlice'
import { toast } from 'react-toastify'

export default function ProductButton({ product }) {
  const cartItems = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const handleAdd = () => {
    const isItemInCart = cartItems.some((item) => item.id === product.id)
    if (!isItemInCart) {
      dispatch(addItem(product))
    } else {
      toast('This product is already in your cart')
    }
  }

  return (
    <button className='bg-accent px-3 text-lg rounded-md mt-5 text-white' onClick={handleAdd}>
      Add
    </button>
  )
}
