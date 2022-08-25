import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import MiddleBanner from '../Components/MiddleBanner'
import MiddleCards from '../Components/MiddleCards'
import Navbar from '../Components/Navbar'
import ScrollBarBox from '../Components/ScrollBarBox'
import TopBanner from '../Components/TopBanner'

const HomePage = () => {
    return (
        <Box>
            <Navbar />
            <TopBanner />
            <MiddleCards/>
            <MiddleBanner/>
            <ScrollBarBox/>
        </Box>
    )
}

export default HomePage