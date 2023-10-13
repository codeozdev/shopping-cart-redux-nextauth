'use client'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCategoryProducts, getProducts } from '@/redux/features/productSlice'
import ProductItem from '@/components/products/ProductItem'
import Loading from '@/components/Loading'

export default function Products({ category, sort }) {
  const { products, productsStatus } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category))
    } else {
      dispatch(getProducts())
    }
  }, [dispatch, category])

  function sortProducts(products, sort) {
    if (sort === 'inc') {
      return products.slice().sort((a, b) => a.price - b.price)
    } else if (sort === 'dec') {
      return products.slice().sort((a, b) => b.price - a.price)
    } else {
      return products
    }
  }

  return (
    <div>
      {productsStatus === 'LOADING' ? (
        <Loading />
      ) : (
        <>
          <div className='container grid sm:grid-cols-3 gap-5'>
            {sortProducts(products, sort).map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
