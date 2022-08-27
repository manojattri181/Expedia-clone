import { Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import nav from "../Assets/HomePage_Images/navBarExpedia.png";
import "./SingleStay.css";
const SingleStaysPage = () => {
  return (
    <div>
      <img src={nav} alt="advertisement" />
      <div style={{width:"75%",margin:"auto 5% 0"}}>
        <Grid
          h="300px"
          w="100%"
          // margin={"auto 5% 0"}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(6, 1fr)"
          gap={0.5}
          border="1px solid red"
        >
          <GridItem rowSpan={2} colSpan={2} bg="red">
            <Image
              src="https://bit.ly/dan-abramov"
              width={"100%"}
              height="100%"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem colSpan={2} bg="green">
            {" "}
            <Image
              src="https://bit.ly/dan-abramov"
              width={"100%"}
              height="148px"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem colSpan={2} bg="green">
            {" "}
            <Image
              src="https://bit.ly/dan-abramov"
              width={"100%"}
              height="148px"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem colSpan={2} bg="yellow">
            {" "}
            <Image
              src="https://bit.ly/dan-abramov"
              width={"100%"}
              height="148px"
              alt="Dan Abramov"
            />
          </GridItem>
          <GridItem colSpan={2} bg="yellow">
            {" "}
            <Image
              src="https://bit.ly/dan-abramov"
              width={"100%"}
              height="148px"
              alt="Dan Abramov"
            />
          </GridItem>
        </Grid>
        <div
        style={{
          width: "100%",
          height: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          /* padding-left: 20px; */
          position: "sticky",
          zIndex: "1000",
          top: "0",
          borderBottom:"0.1px solid grey"
          
        }}
      >
        
      </div>
      </div>
      
     
    </div>
  );
};

export default SingleStaysPage;
