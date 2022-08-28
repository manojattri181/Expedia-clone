import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import nav from "../Assets/HomePage_Images/navBarExpedia.png";
import Gallery from "../Components/SingleStaysComponents/Gallery";
import SecondNavbar from "../Components/SingleStaysComponents/SecondNavbar";
import AboutProperty from "../Components/SingleStaysComponents/AboutProperty";
import AreaSection from "../Components/SingleStaysComponents/AreaSection";
import InfoSection from "../Components/SingleStaysComponents/InfoSection";
import PoliciesSection from "../Components/SingleStaysComponents/PoliciesSection";
import RoomsSection from "../Components/SingleStaysComponents/RoomsSection";
import "./SingleStay.css";
import advt from "../Assets/Advt/advt.jpg";
import advt1 from "../Assets/Advt/advt1.jpg";
import Advt1 from "../Components/Advt1";
import Advt from "../Components/Advt";
import { GetData, GetSingleProduct } from "../Redux/App-reducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const SingleStaysPage = () => {
  const { _id } = useParams();
  // const [currentProduct, setCurrentProduct] = useState({});
  const {data,isLoading,isError,singleProduct} = useSelector((store)=>{ 
    return {
     data:store.AppReducer.data,
     isLoading:store.AppReducer.isLoading,
     isError:store.AppReducer.isError,
     singleProduct:store.AppReducer.singleProduct
    }
  });
  const dispatch = useDispatch();
  useEffect(() => {
   
      dispatch(GetSingleProduct(_id));
    
      
  },[ _id,data]);
  


  return (
   
    
    <div>
      <img src={nav} alt="advertisement" />
      <div style={{display:"flex"}}>
      <div style={{ width: "75%", margin: "0 2% 0 5%" }}>
        <Box>
          
          
            <SecondNavbar singleProduct={singleProduct}/>
         
        </Box>
        

       
      
      </div>
      <Box >
          <Advt src={advt} />
          <Advt1 src={advt1} />
        </Box>
        </div>
    </div> 
    
  );
};

export default SingleStaysPage;

// <div className="bg-background min-h-screen w-10/12 flex m-auto pt-4 justify-evenly">

// </div>;
