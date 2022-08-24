import {Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ImageSlider from './ImageSlider';
import ProductSlider from './ProductSlider';

const ProductCard = (item) => {
  return (
    <Box  >
        <Flex  w="fit-content"  >
         <ImageSlider />
         <Box>
         <Heading>The Leela Palace New Delhi</Heading>
         <Text>New Delhi</Text>
         <Text>The Capital's Only Modern Palace Hotel</Text>
          <Text>Discover rich-diversity of cuisnes historic landmarks. International airport: 15km 10 mins drive India Gate</Text>
       </Box>
        </Flex>
    </Box>
  )
}

export default ProductCard;
