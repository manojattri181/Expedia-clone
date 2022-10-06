import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import HomeSearchBar from "../Components/HomeSearchBar";
import Navbar from "../Components/Navbar";
import S_Barcode_Component from "../Components/S_Barcode_Component";
import S_Flexible_H_D from "../Components/S_Flexible_H_D";
import S_ScrollBox_option from "../Components/S_ScrollBox_option";
import S_Simple_image_box2 from "../Components/S_Simple_image_box2";

export default function S_Flights() {
  return (
    <Box>
       <Navbar />
      <Box w="84%" m="auto" mt="14" mb="6">
           <HomeSearchBar />
      </Box>
      <Box mt={'50px'}></Box>
      <S_Flexible_H_D 
        image={"https://i.postimg.cc/K856Dnsg/H-Number-4.png"} />
        <Box mt={'150px'}></Box>
      <S_Simple_image_box2 />
      <S_Barcode_Component />
      <S_ScrollBox_option />
      <Footer />
    </Box>
  );
}
