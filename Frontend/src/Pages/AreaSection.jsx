import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Map from '../Components/Map'

const AreaSection = () => {
  return (
    <Box border={"1px solid red"} display={"flex"}>
        <Box border={"1px solid green"} width="40%">
            <Text>About this area</Text>
            <Text>Mumbai</Text>
            <Text>Located in Goregaon neighborhood, The Westin Mumbai Garden City 
                is connected to a shopping center. Traveling with kids? Don't miss Film City.</Text>
        </Box>
        <Box border={"1px solid green"} width={"60%"}>
        <Map width="600px" height="250px" />
        </Box>
    </Box>
  )
}

export default AreaSection