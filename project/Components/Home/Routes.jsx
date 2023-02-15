import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { Component } from "react";
import { IoIosArrowForward,IoIosArrowBack,IoMdArrowDropright } from 'react-icons/io';
import Slider from "react-slick";


  const Routdata =  [
      {
        name:"New",
        link:"/Products/Makeup"
      },
      {
        name:"Brands",
        link:"/Products/Makeup"
      },
      {
        name:"Makeup",
        link:"/Products/Makeup"
      },
      {
        name:"Skincare",
        link:"/product"
      },
      {
        name:"Hair",
        link:"/Products/Makeup"
      },
      {
        name:"Fragrance",
        link:"/Products/Makeup"
      },
      {
        name:"Tools",
        link:"/Products/Makeup"
      },
      {
        name:"Bath",
        link:"/Products/Makeup"
      },
      {
        name:"Mini Size",
        link:"/Products/Makeup"
      },
      {
        name:"Gifts",
        link:"/Products/Makeup"
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
                  <Link href={e.link}>
                  <Box _hover={{cursor:"pointer"}}>
                    <Text color={"white"}>{e.name}</Text>  
                  </Box>
                  </Link>  

                )
              })}
        </Slider>
        {/* </Box> */}
      </Box>
    
  //   <Box  p={"10px"} w={"100%"} bg={"black"}>
  //   {/* <Box  w={"90%"}  m={"auto"}> */}
    
  //         {Routdata.map((e)=>{
  //           return(
  //             <Box _hover={{cursor:"pointer"}}>
  //              <Link href={e.link}> <Text color={"white"}>{e.name}</Text>  </Link>  
  //             </Box>
  //           )
  //         })}
   
  //   {/* </Box> */}
  // </Box>

     );
  }


export default Routes;