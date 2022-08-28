import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { RiInformationLine } from "react-icons/ri";
import { MdLocalParking, MdPool } from "react-icons/md";
import { Link } from "react-router-dom";
import ImageSlider from "../ImageSlider";
import SearchBar from "../SearchBar";

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
    <Box marginTop={"2rem"} marginBottom="2rem">
      <Text
        fontSize={"28px"}
        margin="0 0rem 1rem 0"
        fontWeight={"bold"}
        color="#141d38"
      >
        Choose Your Rooms
      </Text>
      <Box margin="0 0rem 1rem 0">
        <SearchBar />
      </Box>
      <Box display={"flex"}  gap={"1%"}>
        <Box
          width={"32%"}
          height="40rem"
          border="1px solid rgba(0, 0, 0, 0.35)"
          borderRadius={"10px"}
          margin="auto"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <ImageSlider data={images} w="320px" h="180px" borderRadius="10px" />
          <Box margin={"1rem"}>
            <Text fontWeight={"500"} fontSize={"16px"}>
              Room, 1 King Bed, Non Smoking, City View
            </Text>
            <Box
              
              fontSize="small"
              width="50%"
              color="#141d38"
            >
              <Text
                padding={"0.5rem 0"}
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
              <Text
                padding={"0.5rem 0"}
                fontWeight={"500"}
                display={"flex"}
                alignItems="center"
              >
                <AiOutlineWifi />
                <Text marginLeft={"1rem"} color="#141d38">
                  Free Wifi
                </Text>
              </Text>
              <Text
                padding={"0.5rem 0"}
                fontWeight={"500"}
                display={"flex"}
                alignItems="center"
              >
                <MdLocalParking />
                <Text marginLeft={"1rem"}></Text>
                Parking Included
              </Text>
              <Text
                padding={"0.5rem 0"}
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
              <Text
                padding={"0.5rem 0"}
                fontWeight={"500"}
                display={"flex"}
                alignItems="center"
              >
                <AiOutlineWifi />
                <Text marginLeft={"1rem"} color="#141d38">
                  Free Wifi
                </Text>
              </Text>
              <Text
                padding={"0.5rem 0"}
                fontWeight={"500"}
                display={"flex"}
                alignItems="center"
              >
                <MdLocalParking />
                <Text marginLeft={"1rem"}></Text>
                Parking Included
              </Text>
            </Box>
            <Text
              display={"flex"}
             
              width={"140px"}
              alignItems={"center"}
              justifyContent="space-between"
              color="green"
              marginTop={"1rem"}
            >
              <Link to="">
                <h3 className="text-sm text-green mt-0 hover:underline">
                  Fully Refundable
                </h3>
              </Link>
              {<RiInformationLine />}
            </Text>
            <Box marginTop={"1rem"}>
              <Box>
                <Text fontWeight={"bold"} fontSize="22px" margin={"0"} padding="0">130 $</Text>
                <Text as="small">155$ total</Text>
              </Box>
              <Box display={"flex"} justifyContent="space-between" alignItems={"center"}>
                <Box>
                  <Link to="">
                    <h3 className="text-sm font-semibold text-blue mt-4 hover:underline">
                      Price Details {">"}
                    </h3>
                  </Link>
                </Box>
                <Box>
                  <Button colorScheme="blue">Reserve</Button>
                </Box>
              </Box>
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
