import { Box,Link, Text } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import {
  MdPool,
  MdHotTub,
  MdLocalParking,
  MdOutlineRestaurantMenu,
  MdLocationPin,
} from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { BsSnow } from "react-icons/bs";
import Map from "../Components/Map";
const InfoSection = () => {
  return (
    <Box display="flex">
      <Box
        style={{
          border: "1px solid red",
          width: "65%",
          height: "30rem",
          padding: "1rem",
          color: "#141d38",
        }}
      >
        <Text fontSize={"28px"} fontWeight={"bold"} color="#141d38">
          The Westin Mumbai Garden City
        </Text>
        <StarRatings
          rating={2.403}
          starDimension="15px"
          starSpacing="3px"
          starRatedColor="gray"
        />
        <Text as={"h1"} fontWeight={"bold"} margin={"0.5rem 0"} color="#141d38">
          4.6/5 Wonderful
        </Text>
        <Text as={"small"}>
          Guests rated this property 4.7/5 for cleanliness.
        </Text>

        <Link>See all 310 reviews {">"} </Link>
        <Text as={"h1"} fontWeight={"bold"} margin={"0.5rem 0"} color="#141d38">
          Popular amenities
        </Text>
        <Box display={"flex"} color="#141d38">
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
          </Box>
          <Box border={"1px solid green"} width="50%">
            <Text fontWeight={"500"} display={"flex"} alignItems="center">
              <BsSnow />
              <Text marginLeft={"1rem"}></Text>
              Air Conditioning
            </Text>
            <Text fontWeight={"500"} display={"flex"} alignItems="center">
              <MdHotTub />
              <Text marginLeft={"1rem"}></Text>
              Spa
            </Text>
            <Text fontWeight={"500"} display={"flex"} alignItems="center">
              <MdOutlineRestaurantMenu />
              <Text marginLeft={"1rem"}></Text>
              Restraunt
            </Text>
          </Box>
        </Box>
        <Link >See all {">"}</Link>
      </Box>
      <Box width="35%" border={"1px solid red"} >
        <Box  border="1px solid green" margin={"7%"} borderRadius="10px" >
        <Map width="inherit" height="250px" />
        </Box>
        <Box margin={"7%"} fontSize="small">International Business Park, Oberoi Garden City, Goregaon East, Mumbai, Maharashtra, 400063</Box>
        <Box>
        <Text as={"h1"} fontWeight={"bold"} margin={"0.5rem 0"} color="#141d38">
          Explore Area
        </Text>
        <Box border={"1px solid green"} width="100%">
            <Text fontSize={"small"} display={"flex"} alignItems="center">
              <MdLocationPin />
              <Text marginLeft={"1rem"}>Oberoi Mall</Text>
              
            </Text>
            <Text fontSize={"small"} display={"flex"} alignItems="center">
            <MdLocationPin />
              <Text fontSize={"small"} marginLeft={"1rem"}>St. Josephs Convent</Text>
             
            </Text>
            <Text fontSize={"small"} display={"flex"} alignItems="center">
            <MdLocationPin />
              <Text marginLeft={"1rem"}>Bombay Convention & Exhibition Centre</Text>
              
            </Text>
          </Box>
        </Box>
        
      </Box>
    </Box>
  );
};

export default InfoSection;
