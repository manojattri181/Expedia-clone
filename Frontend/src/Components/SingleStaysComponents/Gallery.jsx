import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector } from "react-redux";
const Gallery = ({singleProduct}) => {
// console.log("images",images[0].src)

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
            src={singleProduct?.images[0].src ||"https://images.trvl-media.com/hotels/22000000/21170000/21169500/21169474/w365h225x11y0-24f663ed.jpg?impolicy=resizecrop&rw=598&ra=fit"}
            width={"100%"}
            height="100%"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem colSpan={1} bg="green">
          {" "}
          <Image
            src={singleProduct?.images[1].src ||"https://images.trvl-media.com/hotels/22000000/21170000/21169500/21169474/2e07dd03.jpg?impolicy=resizecrop&rw=297&ra=fit"}
            width={"100%"}
            height="148px"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem colSpan={1} bg="green">
          {" "}
          <Image
            src= {singleProduct?.images[2].src ||"https://images.trvl-media.com/hotels/1000000/450000/447300/447235/d3433776.jpg?impolicy=resizecrop&rw=297&ra=fit"}
            width={"100%"}
            height="148px"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem colSpan={1} bg="yellow">
          {" "}
          <Image
            src={singleProduct?.images[3].src ||"https://images.trvl-media.com/hotels/22000000/21170000/21169500/21169474/2e07dd03.jpg?impolicy=resizecrop&rw=297&ra=fit"}
            width={"100%"}
            height="148px"
            alt="Dan Abramov"
          />
        </GridItem>
        <GridItem colSpan={1} bg="yellow">
          {" "}
          <Image
            src= {singleProduct?.images[4].src ||"https://images.trvl-media.com/hotels/1000000/450000/447300/447235/d3433776.jpg?impolicy=resizecrop&rw=297&ra=fit"}
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
