import Product from '@/components/Product'

export default function Products({ products }) {
  return (
    <div className='mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
