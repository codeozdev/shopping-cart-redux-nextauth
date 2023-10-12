'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getCategories } from '@/redux/features/categorySlice'
import Sorting from '@/components/Sorting'

export default function Category({ setCategory, setSort }) {
  const { categories } = useSelector((state) => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <div className='container sm:my-12 flex justify-between w-full'>
      <div className='flex items-center gap-5'>
        {categories.map((category, index) => (
          <div
            key={index}
            className='cursor-pointer navbar_link relative font-semibold uppercase text-lg'
            onClick={() => setCategory(category)}>
            {category}
          </div>
        ))}
      </div>
      <Sorting setSort={setSort} />
    </div>
  )
}
