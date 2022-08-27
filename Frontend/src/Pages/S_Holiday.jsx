import { Box,Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import S_Barcode_Component from "../Components/S_Barcode_Component";
import S_Flexible_H_D from "../Components/S_Flexible_H_D";
import S_Simple_image_box from "../Components/S_Simple_image_box";
import S_Simple_image_box2 from "../Components/S_Simple_image_box2";

export default function S_Holiday() {
  return (
    <Box>
      <Navbar />
      <Box h={"230px"} border={"1px solid black"}></Box>
      <Box h={"80px"}></Box>
      <S_Flexible_H_D image={"https://i.postimg.cc/htLwPS1b/H-number-2.png"} />
      <S_Simple_image_box />
      <Text mt={"15px"} mb={"15px"} fontWeight={500} ml={"8%"} fontSize={"4xl"}>
        Explore, discover and save
      </Text>
      <S_Simple_image_box2 />
      <S_Barcode_Component/>
      <Footer />
    </Box>
  );
}
