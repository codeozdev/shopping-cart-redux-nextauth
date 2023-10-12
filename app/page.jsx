'use client'

import Hero from '@/components/Hero'
import Testimoial from '@/components/Testimoial'
import Category from '@/components/Category'
import { useState } from 'react'
import Products from '@/components/products/Products'

export default function Home() {
  const [sort, setSort] = useState('')
  const [category, setCategory] = useState('')

  return (
    <main>
      <Hero />
      <Category setCategory={setCategory} setSort={setSort} />
      <Products category={category} sort={sort} />
      <Testimoial />
    </main>
  )
}
