
import React from "react";
import nav from "../Assets/HomePage_Images/navBarExpedia.png";
import Gallery from "../Components/Gallery";
import SecondNavbar from "../Components/SecondNavbar";
import AboutProperty from "./AboutProperty";
import AreaSection from "./AreaSection";
import InfoSection from "./InfoSection";
import PoliciesSection from "./PoliciesSection";
import RoomsSection from "./RoomsSection";
import "./SingleStay.css";
const SingleStaysPage = () => {
  return (
    <div>
      <img src={nav} alt="advertisement" />
      <div style={{width:"75%",margin:"auto 5% 0"}}>
       <Gallery />
        <SecondNavbar />
        <AreaSection />
        <AboutProperty />
        <PoliciesSection />
       

       <div style={{marginBottom:"500px"}}/>
      </div>


      
     
    </div>
  );
};

export default SingleStaysPage;
