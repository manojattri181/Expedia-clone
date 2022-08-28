import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const PoliciesSection = () => {
  return (
    <Box border={"1px solid red"}  margin="2rem 0" 
      
    display={"flex"}
    boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
      <Box border={"1px solid green"}  width="40%" padding={"1rem"}>
        <Text fontSize={"22px"} fontWeight="500">Policies</Text>
      </Box>
      <Box border={"1px solid green"}  width={"60%"} padding={"1rem"}>
        <Box display={"flex"} justifyContent="space-between">
            <Box>
          <Text fontSize={"20px"} marginBottom="0.5rem">Checkin</Text>
          <Text fontSize={"14px"} marginBottom="0.5rem">aaaaaaa</Text>
          <Text fontSize={"14px"} marginBottom="0.5rem">aaaaaaaaaaa</Text>
          </Box>
          <Box>
            <Text fontSize={"20px"} marginBottom="0.5rem">Check Out</Text>
            <Text fontSize={"14px"} marginBottom="0.5rem">aaaaaaaaaaaa</Text>
            <Text fontSize={"14px"} marginBottom="0.5rem">aaaaaaaaaaaaaaaaa</Text>
          </Box>
        </Box>
        <Box>
          <Text fontSize={"20px"} marginBottom="0.5rem">Property payment types</Text>
          <Text display={"flex"}>
            <Image />
            <Image />
            <Image />
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PoliciesSection;
