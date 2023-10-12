'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ProductImage({ product, fill }) {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {fill ? (
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority={true}
          sizes='100vw 100vh'
          className={`object-contain duration-700 ease-in-out hover:opacity-75 p-5  ${
            loading ? 'scale-110 blur-2xl grayscale' : 'scale-110 blur-0 grayscale-0'
          }`}
          onLoadingComplete={() => setLoading(false)}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          priority={true}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] ${
            loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
          }}`}
          onLoadingComplete={() => setLoading(false)}
        />
      )}
    </>
  )
}
