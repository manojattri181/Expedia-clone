import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { MdLocalParking, MdPool } from "react-icons/md";
import { Link } from "react-router-dom";
import ImageSlider from "../Components/ImageSlider";
import SearchBar from "../Components/SearchBar";

const RoomsSection = () => {
  let images = [
    {
      src: "https://images.trvl-media.com/hotels/22000000/21170000/21169500/21169474/w365h225x11y0-24f663ed.jpg?impolicy=resizecrop&rw=598&ra=fit",
    },
    {
      src: "https://images.trvl-media.com/hotels/22000000/21170000/21169500/21169474/2e07dd03.jpg?impolicy=resizecrop&rw=297&ra=fit",
    },
    {
      src: "https://images.trvl-media.com/hotels/1000000/450000/447300/447235/d3433776.jpg?impolicy=resizecrop&rw=297&ra=fit",
    },
    {
      src: "https://images.trvl-media.com/hotels/22000000/21170000/21169500/21169474/2e07dd03.jpg?impolicy=resizecrop&rw=297&ra=fit",
    },
    {
      src: "https://images.trvl-media.com/hotels/1000000/450000/447300/447235/388a675b.jpg?impolicy=resizecrop&rw=297&ra=fit",
    },
  ];
  return (
    <Box>
      <Text fontSize={"28px"} fontWeight={"bold"} color="#141d38">
        The Westin Mumbai Garden City
      </Text>
      <SearchBar />
      <Box display={"flex"} border="1px solid green" gap={"1%"}>
        <Box
          width={"32%"}
          height="33rem"
          border="1px solid brown"
          margin="auto"
        >
          <ImageSlider data={images} w="320px" h="180px" borderRadius="10px" />
          <Text fontSize={"18px"}>
            Room, 1 King Bed, Non Smoking, City View
          </Text>
          <Box border={"1px solid green"} width="50%" color="#141d38">
            <Text
              fontWeight={"500"}
              display={"flex"}
              alignItems="center"
              color="#141d38"
            >
              <MdPool color="#141d38" />
              <Text marginLeft={"1rem"} color="#141d38">
                Pool
              </Text>
            </Text>
            <Text fontWeight={"500"} display={"flex"} alignItems="center">
              <AiOutlineWifi />
              <Text marginLeft={"1rem"} color="#141d38">
                Free Wifi
              </Text>
            </Text>
            <Text fontWeight={"500"} display={"flex"} alignItems="center">
              <MdLocalParking />
              <Text marginLeft={"1rem"}></Text>
              Parking Included
            </Text>
            <Text
              fontWeight={"500"}
              display={"flex"}
              alignItems="center"
              color="#141d38"
            >
              <MdPool color="#141d38" />
              <Text marginLeft={"1rem"} color="#141d38">
                Pool
              </Text>
            </Text>
            <Text fontWeight={"500"} display={"flex"} alignItems="center">
              <AiOutlineWifi />
              <Text marginLeft={"1rem"} color="#141d38">
                Free Wifi
              </Text>
            </Text>
            <Text fontWeight={"500"} display={"flex"} alignItems="center">
              <MdLocalParking />
              <Text marginLeft={"1rem"}></Text>
              Parking Included
            </Text>
          </Box>
          <Link to={"#"}>Fully Refundable</Link>
          <Box display={"flex"}>
            <Box><Box>
              <Text>130 $</Text>
              <Text>155$ total</Text>
            </Box>
            <Link to="">
              <h3 className="text-sm font-semibold text-blue mt-4 hover:underline">
                Price Details {">"}
              </h3>
            </Link></Box>
            <Box>
            <Button colorScheme='blue'>Button</Button>
            </Box>
          </Box>
        </Box>
        <Box
          width={"32%"}
          height="30rem"
          border="1px solid brown"
          margin="auto"
        >
          <ImageSlider data={images} w="320px" h="180px" borderRadius="10px" />
        </Box>
        <Box
          width={"32%"}
          height="30rem"
          border="1px solid brown"
          margin="auto"
        >
          <ImageSlider data={images} w="320px" h="180px" borderRadius="10px" />
        </Box>
      </Box>
    </Box>
  );
};

export default RoomsSection;
