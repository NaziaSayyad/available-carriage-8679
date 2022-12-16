import { Box, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import { IoIosArrowForward,IoIosArrowBack,IoMdArrowDropright } from 'react-icons/io';
import Slider from "react-slick";


  const Routdata =  [
      {
        name:"New",
        link:"/product"
      },
      {
        name:"Brands",
        link:"/product"
      },
      {
        name:"Makeup",
        link:"/product"
      },
      {
        name:"Skincare",
        link:"/product"
      },
      {
        name:"Hair",
        link:"/product"
      },
      {
        name:"Fragrance",
        link:"/product"
      },
      {
        name:"Tools",
        link:"/product"
      },
      {
        name:"Bath",
        link:"/product"
      },
      {
        name:"Mini Size",
        link:"/product"
      },
      {
        name:"Gifts",
        link:"/product"
      },
  ]


const Routes = () => {
 
    var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 10,
      slidesToScroll: 0,
      initialSlide: 0,
    //   nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
      ]
    };
    return (
      <Box  p={"10px"} w={"100%"} bg={"black"}>
        {/* <Box  w={"90%"}  m={"auto"}> */}
        <Slider  {...settings}>
              {Routdata.map((e)=>{
                return(
                  <Box _hover={{cursor:"pointer"}} key={e.name}>
                     <Text color={"white"}>{e.name}</Text>
                  </Box>
                )
              })}
        </Slider>
        {/* </Box> */}
      </Box>
    );
  }


export default Routes;