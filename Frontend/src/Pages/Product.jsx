import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Add from '../Components/Add'
import Filter from '../Components/Filter'
import ProductCard from '../Components/ProductCard'
import SearchBar from '../Components/SearchBar'
import ProductSection from './ProductSection'

const Product = () => {
  return (
       <>
   <Box w="80%" m="auto"><SearchBar /></Box>
    <Flex w="70%" m="auto"  border="4px solid purple">
       <Filter />
       <ProductSection />
     </Flex>
  </>
  )
}

export default Product
