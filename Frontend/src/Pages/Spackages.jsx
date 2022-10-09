import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import HomeSearchBar from "../Components/HomeSearchBar";
import Navbar from "../Components/Navbar";
import S_Barcode_Component from "../Components/SbarcodeComponent";
import S_Flexible_H_D from "../Components/SflexibleHd";
import S_Simple_image_box2 from "../Components/SsimpleImageBox2";

export default function S_Packages() {
  return (
    <Box>
      <Navbar />
      <Box w="84%" m="auto" mt="14" mb="6">
        <HomeSearchBar />
      </Box>
      <Box h={"80px"}></Box>
      <S_Flexible_H_D image={"https://i.postimg.cc/vmBRRw3M/H-Number-1.png"} />
      <Text mt={"15px"} mb={"90px"} fontWeight={500} ml={"8%"} fontSize={"4xl"}>
        Top Holiday Destinations
      </Text>
      <Text mb={"10px"} fontWeight={500} ml={"8%"} fontSize={"4xl"}>
        Explore, discover and save
      </Text>
      <S_Simple_image_box2 />
      <S_Barcode_Component />
      <Footer />
    </Box>
  );
}
