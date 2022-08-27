import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const PoliciesSection = () => {
  return (
    <Box border={"1px solid red"} display={"flex"}>
      <Box border={"1px solid green"} width="40%">
        <Text>Policies</Text>
      </Box>
      <Box border={"1px solid green"} width={"60%"}>
        <Box display={"flex"} justifyContent="space-between">
            <Box>
          <Text>Checkin</Text>
          <Text>aaaaaaa</Text>
          <Text>aaaaaaaaaaa</Text>
          </Box>
          <Box>
            <Text>Check Out</Text>
            <Text>aaaaaaaaaaaa</Text>
            <Text>aaaaaaaaaaaaaaaaa</Text>
          </Box>
        </Box>
        <Box>
          <Text>Property payment types</Text>
          <Text>
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
