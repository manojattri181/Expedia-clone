import { Box,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import S_Barcode_Component from '../Components/S_Barcode_Component'
import S_Flexible_H_D from '../Components/S_Flexible_H_D'
import S_Scroll_bar_for_car from '../Components/S_Scrool_bar_for_car'
import S_Simple_image_box from '../Components/S_Simple_image_box'
import S_Simple_image_box2 from '../Components/S_Simple_image_box2'

export default function S_Car() {
  return (
    <Box>
        <Box h={"230px"} border={"1px solid black"}></Box>
        <Box mt={'50px'}></Box>
      <S_Flexible_H_D 
        image={"https://i.postimg.cc/MZjdRHqS/H-number-3.png"} />
      <S_Simple_image_box />
      <Text mt={"15px"} mb={"15px"} fontWeight={500} ml={"8%"} fontSize={"4xl"}>
        Explore, discover and save
      </Text>
      <S_Simple_image_box2 />
      <S_Barcode_Component />
      <S_Scroll_bar_for_car />
    </Box>
  )
}
