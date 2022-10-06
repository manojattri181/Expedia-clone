import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react'
import HomeSearch from './HomeSearch';
import SearchBar from './SearchBar';

const HomeSearchBar = () => {
  return (
    <div className='border border-solid border-banner rounded-md'>
        <Tabs mt="10px">
      {/* <TabList  className="w-9/12 overflow-hidden  lg:w-10/12  ">
        <Tab>Stays</Tab>
        <Tab >Flights</Tab>
        <Tab>Cars</Tab>
        <Tab>Packages</Tab>
        <Tab>Things to do</Tab>
      </TabList> */}
      <TabPanels >
        <TabPanel> <HomeSearch /></TabPanel>
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
