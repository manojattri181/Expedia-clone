import { background, Box, Button, Flex, Image } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

let data =[ 
    {
      src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/9b582675.jpg?impolicy=resizecrop&rw=1200&ra=fit"
    },
    {
      src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/bada04cf.jpg?impolicy=resizecrop&rw=455&ra=fit"
    },
    {
      src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/9b582675.jpg?impolicy=resizecrop&rw=297&ra=fit"
    },
    {
      src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/5cc49445.jpg?impolicy=resizecrop&rw=297&ra=fit"
    },
    {
      src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/958ad657.jpg?impolicy=resizecrop&rw=598&ra=fit"
    }
    ];
const ImageSlider = () => {
    const [image,setImage] = useState(0);
  return (
    <Flex pos="relative">
        <Button w="50px" pos="absolute" top="120px" left="0"   bg="black" opacity={"0.6"} _hover={{ bg: "black.600", opacity:"0.4",color: " white" }} objectFit="contain"  borderRadius="full" disabled={image===0} onClick={()=>setImage(prev=>prev-1)}>
        <BiChevronLeft size="40px" color="white"/>
        </Button>
       <Image w="320px" h="240px" src={data[image].src} objectFit="cover"  borderRadius={"lg"}/>
       <Button w="50px" pos="absolute"  top="120px" left="40"  bg="black" opacity={"0.6"}   _hover={{ bg: "black.600",opacity:"0.5",color: " white" }} objectFit="contain" borderRadius="full" disabled={image===data.length-1}  onClick={()=>setImage(prev=>prev+1)}>
        <BiChevronRight size="40px" color="white"/>
        </Button>
    </Flex>
  )
}

export default ImageSlider;
