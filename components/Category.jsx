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
    <div className='container sm:my-12 flex flex-wrap justify-center sm:justify-between w-full z-50'>
      <div className='flex items-center gap-5 flex-wrap justify-center'>
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
