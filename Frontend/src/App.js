import { Box, Text } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer';
import MainRoutes from './Components/MainRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <MainRoutes />
      {/* <Footer />
      <Box m='25px auto 100px auto' w={{ sm: '90%', md: '90%', lg: '80% ' }}>
        <Text textAlign='center' fontSize='13px'>Expedia, Inc. is not responsible for content on external Web sites.</Text>
        <Text textAlign='center' fontSize='13px'>© 2022 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc. CST# 2029030-50.</Text>
      </Box> */}
    </div>
  );
}

export default App;
