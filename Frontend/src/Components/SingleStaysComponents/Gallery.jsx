import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Gallery = () => {
  
  return (
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
        <GridItem rowSpan={2} colSpan={2} bg="red">
          <Image
            src="https://images.trvl-media.com/hotels/4000000/3770000/3763800/3763792/fb56c162.jpg?impolicy=resizecrop&rw=598&ra=fit"
            width={"100%"}
            height="100%"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem colSpan={1} bg="green">
          {" "}
          <Image
            src="https://images.trvl-media.com/hotels/4000000/3770000/3763800/3763792/a896afa9.jpg?impolicy=resizecrop&rw=297&ra=fi"
            width={"100%"}
            height="148px"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem colSpan={1} bg="green">
          {" "}
          <Image
            src= "https://images.trvl-media.com/hotels/4000000/3770000/3763800/3763792/17824e0b.jpg?impolicy=resizecrop&rw=297&ra=fit"
            width={"100%"}
            height="148px"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem colSpan={1} bg="yellow">
          {" "}
          <Image
            src="https://images.trvl-media.com/hotels/4000000/3770000/3763800/3763792/66699a2e.jpg?impolicy=resizecrop&rw=297&ra=fit"
            width={"100%"}
            height="148px"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem colSpan={1} bg="yellow">
          {" "}
          <Image
            src= "https://images.trvl-media.com/hotels/4000000/3770000/3763800/3763792/40a28dff.jpg?impolicy=resizecrop&rw=297&ra=fit"
            width={"100%"}
            height="148px"
            alt="Dan Abramov"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Gallery;
