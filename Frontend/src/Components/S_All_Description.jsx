import React from 'react'
import { Box,Text } from '@chakra-ui/react'

export default function S_All_Description({head,body}) {
  return (
    <Box>
        <Text fontWeight={'500'} fontSize={'xl'} mb={'8px'}>{head}</Text>
        <Text textAlign={'justify'} >{body}</Text>
    </Box>
  )
}
