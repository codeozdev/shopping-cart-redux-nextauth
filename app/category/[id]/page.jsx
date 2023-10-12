import ProductImage from '@/components/products/ProductImage'
import ProductButton from '@/components/products/ProductButton'

export default async function CategoryPage({ params: { id } }) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()

    return (
      <div className='container flex flex-col sm:flex-row items-center sm:justify-center gap-10 sm:h-[calc(100vh-290px)] mt-10 sm:mt-0 px-5'>
        <ProductImage product={product} />

        <div className='space-y-5 text-center'>
          <div>
            <h1 className='font-bold text-sm sm:text-2xl sm:truncate sm:w-[1000px]'>
              {product.title}
            </h1>
            <p className='text-xs text-red-400'>count: {product.rating.count}</p>
          </div>

          <div>
            <p className='text-xs sm:text-sm sm:w-[1000px] text-neutral-500'>
              {product.description}
            </p>
            <ProductButton product={product} />
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.log(error)
  }
}
