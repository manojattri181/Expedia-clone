import React from 'react'
import { Box, Grid, GridItem, Image, Skeleton, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
const SkeletonP = () => {
  return (
    // <Skeleton height='40px' width={"40px"}/>
    <Box boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}>
        <Box  display="flex" alignItems={"center"} 
        margin="15px 5px" paddingTop={"15px"}>
            <Text >
        <AiOutlineArrowLeft color="#3182ce" />
        </Text>
       
            <Text margin="auto 0" className='text-sm font-semibold text-blue mt-4 hover:underline' >See all Propertieis</Text>
       
        </Box>
      <Grid
        h="300px"
        w="100%"
        // margin={"auto 5% 0"}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={0.5}
       
      >
        <GridItem rowSpan={2} colSpan={2} >
        <Skeleton height="100%"  />
        </GridItem>
        <GridItem colSpan={1} >
          {" "}
          <Skeleton height="148px" />
        </GridItem>
        <GridItem colSpan={1} >
          {" "}
          <Skeleton height="148px" />
        </GridItem>
        <GridItem colSpan={1} >
          {" "}
          <Skeleton height="148px" />
        </GridItem>
        <GridItem colSpan={1} >
          {" "}
          <Skeleton height="148px" />
        </GridItem>
      </Grid>
      <Box display={"flex"}>
        <Box width={"50%"}>
            <Skeleton mt='4' height={"24px"}/>
            <Skeleton  mt='4' height={"16px"} />
            <SkeletonText mt='4' noOfLines={10} spacing='4' />
        </Box>
        <Box width={"50%"}>
        <Skeleton mt='4' height={"200px"} width="250px"/>
        <SkeletonText mt='4' noOfLines={6} spacing='4' />
        </Box>
      </Box>

    </Box>
  )
}

export default SkeletonP