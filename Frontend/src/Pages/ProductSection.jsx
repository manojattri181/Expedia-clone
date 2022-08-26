import React from 'react'
import ProductCard from '../Components/ProductCard'

const ProductSection = () => {
  return (
    <div className='w-full flex flex-col gap-y-7'>
       <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard />
    </div>
  )
}

export default ProductSection
