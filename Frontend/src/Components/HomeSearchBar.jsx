import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react'
import HomeSearch from './HomeSearch';
import SearchBar from './SearchBar';

const HomeSearchBar = () => {
  return (
    <div className='w-full h-fit px-7 py-3  mt-1 mb-2 m-auto flex justify-center  border border-solid border-banner rounded-md'>
        <Tabs mt="10px" m="auto" >
      <TabList>
        <Tab>Stays</Tab>
        <Tab >Flights</Tab>
        <Tab>Cars</Tab>
        <Tab>Packages</Tab>
        <Tab>Things to do</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
            <HomeSearch />
        </TabPanel>
        <TabPanel> <HomeSearch /></TabPanel>
        <TabPanel> <HomeSearch /></TabPanel>
        <TabPanel> <HomeSearch /></TabPanel>
        <TabPanel> <HomeSearch /></TabPanel>
      </TabPanels>
    </Tabs>
    </div>
  )
}

export default HomeSearchBar;
