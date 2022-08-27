import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const AboutProperty = () => {
  return (
    <Box border={"1px solid red"} display={"flex"}>
        <Box border={"1px solid green"} width="40%">
            <Text>About this area</Text>
           
        </Box>
        <Box border={"1px solid green"} width={"60%"}>
            <Box><Text>The Westin Mumbai Garden City</Text>
        <Text>The Westin Mumbai Garden City</Text>
        <Text>Located in Goregaon neighborhood, The Westin Mumbai Garden City 
        is connected to a shopping center. Traveling with kids? Don't miss Film City.Located in Goregaon neighborhood, The Westin Mumbai Garden City 
        is connected to a shopping center. Traveling with kids? Don't miss Film City.</Text></Box>
        <Box>
            <Text>Languages</Text>
            <Text>English, Hindi</Text>
        </Box>
        
        </Box>
    </Box>
  )
}

export default AboutProperty