import { BsSearch } from 'react-icons/bs'
import { getProducts } from '@/redux/features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

export default function SearchBar() {
  const [searchText, setSearchText] = useState('')
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const inputRef = useRef(null)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const searchProducts = (products) => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()),
    )
  }

  const filteredProducts = searchProducts(products)

  const handleClearSearch = () => {
    setSearchText('')
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div
      className='w-full sm:w-[300px] md:w-[70%] relative px-5 sm:px-0'
      onClick={handleClearSearch}>
      <input
        type='text'
        className='border-gray-200 border p-2 px-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-200'
        placeholder='Enter any product name...'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <BsSearch className='absolute right-0 top-0 mt-3 mr-8 sm:mr-3 text-gray-400' size={20} />
      {searchText.length > 0 && (
        <div className='absolute top-12 left-5 sm:left-0 w-[350px] sm:w-full bg-white border border-gray-300 shadow-lg z-50'>
          <ul className='w-[320px] sm:w-full pl-2'>
            {filteredProducts.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/category/${product.id}`}
                  className='text-xs sm:text-base block sm:inline-block truncate'>
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
