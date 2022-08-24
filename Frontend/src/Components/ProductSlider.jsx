import { Box, Flex, Icon, Image} from "@chakra-ui/react";
import Slider from "react-slick";
import {GrCaretNext} from "react-icons/gr"
import {BiChevronLeft, BiChevronRight} from "react-icons/bi"
import "./Slider.css"

export default function ProductSlider() {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{marginTop:"-30px"}}
      >
         <Box w="fit" bg="gray.400" borderRadius="50%">
        <BiChevronRight size="24px" color="white"/>
        </Box>
      </div>
    );
  }
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{marginTop:"-30px"}}
      >
        <Box w="fit" bg="gray.400"  borderRadius="50%">
        <BiChevronLeft size="24px" color="white"/>
        </Box>
      </div>
    );
  }
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

  };

  let data =[ 
    {
      src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/9b582675.jpg?impolicy=resizecrop&rw=1200&ra=fit"
    },
    {
      src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/bada04cf.jpg?impolicy=resizecrop&rw=455&ra=fit"
    },
    {
      src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/9b582675.jpg?impolicy=resizecrop&rw=297&ra=fit"
    },
    {
      src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/5cc49445.jpg?impolicy=resizecrop&rw=297&ra=fit"
    },
    {
      src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/958ad657.jpg?impolicy=resizecrop&rw=598&ra=fit"
    }
    ]
      return (
        <Box w="220px" m="auto">
          <Slider  {...settings}>
            {
                data.map(items=>(
                    <Box>
                        <Image  borderRadius="lg" w="220px" h="260px" src={items.src} />
                    </Box>
                ))
            }
          </Slider>
        </Box>
)
};

