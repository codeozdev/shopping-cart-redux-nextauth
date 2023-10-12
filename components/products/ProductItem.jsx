import Link from 'next/link'
import ProductImage from '@/components/products/ProductImage'

export default function ProductItem({ product }) {
  return (
    <Link
      href={`/category/${product.id}`}
      className='h-96 flex flex-col border p-5  hover:scale-105 transition-transform ease-out duration-200'>
      <div className='relative max-h-72 flex-1'>
        <p className='text-3xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-1 z-50 shadow-lg'>
          ${product.price}
        </p>
        <ProductImage product={product} fill />
      </div>
      <p className='text-center text-sm mt-5 font-bold'>{product.title}</p>
    </Link>
  )
}
