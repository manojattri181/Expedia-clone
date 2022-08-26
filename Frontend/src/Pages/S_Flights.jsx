import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import S_Barcode_Component from "../Components/S_Barcode_Component";
import S_Flexible_H_D from "../Components/S_Flexible_H_D";
import S_ScrollBox_option from "../Components/S_ScrollBox_option";
import S_Simple_image_box2 from "../Components/S_Simple_image_box2";

export default function S_Flights() {
  return (
    <Box>
      <Navbar />
      <Box h={"230px"} border={"1px solid black"}></Box>
      <Box mt={'50px'}></Box>
      <S_Flexible_H_D 
        image={"https://i.postimg.cc/K856Dnsg/H-Number-4.png"} />
        <Box mt={'150px'}></Box>
      <S_Simple_image_box2 />
      <S_Barcode_Component />
      <S_ScrollBox_option />
    </Box>
  );
}
