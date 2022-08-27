import { Box, Stack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import InfoSection from "../Pages/InfoSection";
import RoomsSection from "../Pages/RoomsSection";
import "../Pages/SingleStay.css";
const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
const SecondNavbar = () => {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const overviewRef = useRef(null);
  const roomsRef = useRef(null);
  const locationRef = useRef(null);
  const amenitiesRef = useRef(null);
  const policiesRef = useRef(null);
  const reviewsRef = useRef(null);

  const sectionRefs = [
    { section: "Over View", ref: overviewRef },
    { section: "Rooms", ref: roomsRef },
    { section: "Location", ref: locationRef },
    { section: "Amenities", ref: amenitiesRef },
    { section: "Policies", ref: policiesRef },
    { section: "Reviews", ref: reviewsRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <Box
      style={{
          width: "100%",
        //   height: "60px",
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        //   backgroundColor: "#ffffff",
        // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        /* padding-left: 20px; */
        //   position: "sticky",
        //   zIndex: "10",
          left: "0",
        borderBottom: "0.1px solid grey",
      }}
    >
      

      <Box className="sticky">
        <Box className="header" ref={headerRef}>
          <button
            type="button"
            className={`header_link ${
              visibleSection === "Over View" ? "selected" : ""
            }`}
            onClick={() => {
              scrollTo(overviewRef.current);
            }}
          >
            Over View
          </button>
          <button
            type="button"
            className={`header_link ${
              visibleSection === "Rooms" ? "selected" : ""
            }`}
            onClick={() => {
              scrollTo(roomsRef.current);
            }}
          >
            Rooms
          </button>
          <button
            type="button"
            className={`header_link ${
              visibleSection === "Location" ? "selected" : ""
            }`}
            onClick={() => {
              scrollTo(locationRef.current);
            }}
          >
            Location
          </button>
          <button
            type="button"
            className={`header_link ${
              visibleSection === "Amenities" ? "selected" : ""
            }`}
            onClick={() => {
              scrollTo(amenitiesRef.current);
            }}
          >
            Amenitis
          </button>
          <button
            type="button"
            className={`header_link ${
              visibleSection === "Policies" ? "selected" : ""
            }`}
            onClick={() => {
              scrollTo(policiesRef.current);
            }}
          >
            Policies
          </button>
          <button
            type="button"
            className={`header_link ${
              visibleSection === "Reviews" ? "selected" : ""
            }`}
            onClick={() => {
              scrollTo(reviewsRef.current);
            }}
          >
            Reviews
          </button>
        </Box>
      </Box>
      <Box ref={overviewRef}>
        <InfoSection/>
      </Box>
      <Box ref={roomsRef}>
        <RoomsSection />
      </Box>
      <Box ref={locationRef}></Box>
      <Box ref={overviewRef}></Box>
      <Box ref={roomsRef}></Box>
      <Box ref={locationRef}></Box>
    </Box>
  );
};

export default SecondNavbar;
