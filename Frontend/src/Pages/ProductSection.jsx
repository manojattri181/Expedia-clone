import { Flex } from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../Components/ProductCard'

const ProductSection = () => {
  return (
    <Flex m="auto" direction={"column"} rowGap="10px">
       <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard />
       <ProductCard />
    </Flex>
  )
}

export default ProductSection
