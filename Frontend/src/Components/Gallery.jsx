import React from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";
const Gallery = () => {
  return (
    <div>
      <Grid
        h="300px"
        w="100%"
        // margin={"auto 5% 0"}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={0.5}
        border="1px solid red"
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
    </div>
  );
};

export default Gallery;
