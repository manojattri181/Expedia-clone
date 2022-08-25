import React from "react";
import { Box,Image } from "@chakra-ui/react";

export default function S_Simple_image_box2() {
  return (
    <Box>
      <Box
        w={"85%"}
        margin={"auto"}
        h={"320px"}
        borderRadius={'10px'}
        border={"1px solid black"}
        mb={"50px"}
        cursor={'pointer'}
        boxShadow='base'
      >
        <Image borderRadius={'10px'} w={'100%'} h={'100%'} src="https://wallpaperaccess.com/full/6712304.jpg" />
      </Box>
    </Box>
  );
}
