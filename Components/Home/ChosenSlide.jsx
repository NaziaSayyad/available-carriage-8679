// import React from 'react'

import { Box, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import { IoIosArrowForward,IoIosArrowBack,IoMdArrowDropright } from 'react-icons/io';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    // console.log("nextArrow", props)
    return (
      <div
        className={className}
        style={{ ...style, display: "block", }}
        onClick={onClick}>
          <Box h={"50px"} w={"50px"} bg="#000000" 
           opacity={"0.7"}
          display={"flex"} alignItems={"center"}
           justifyContent={"center"} ml={"-70px"}
           borderRadius={"50%"}>
           <IoIosArrowForward style={{color:"white", fontSize:"20px"}}/>
          </Box>
      </div>
    );
  }
  
  
  const Chosendata =  [
      {
        image: "https://www.sephora.com/productimages/sku/s2419786-main-zoom.jpg?imwidth=166",
        name: "Charlotty Thillpory",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=166",
        name: "Rare beauty ",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2629475-main-zoom.jpg?imwidth=166",
        name: "Anetesia biverly",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2606085-main-zoom.jpg?imwidth=166",
        name: "Charlotty Thillpory",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2244804-main-zoom.jpg?imwidth=166",
        name: "Rare beauty",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2270783-main-zoom.jpg?imwidth=166",
        name: "Hunda beauty",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2407278-main-zoom.jpg?imwidth=166",
        name: "Charlotty Thillpory",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2555811-main-zoom.jpg?imwidth=166",
        name: "Hunda beauty",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2589927-main-zoom.jpg?imwidth=166",
        name: "Anetesia biverly",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2447738-main-zoom.jpg?imwidth=166",
        name: "Rare beauty ",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2385169-main-zoom.jpg?imwidth=166",
        name: "Anetesia biverly",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s1925916-main-zoom.jpg?imwidth=166",
        name: "Charlotty Thillpory",
        descrip: "Mini hollywood flawless"
      },
  ]


const ChosenSlide = () => {
 
    var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 2,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Box w={"100%"} mb={"30px"}>
        <Box  w={"90%"}  m={"auto"}>
      <Text fontSize={{ base: "1rem", sm: "1rem", md: "1.5rem" }} fontWeight="500">Choosen for you</Text>
        <Text  color={"white"}> its working</Text>
        <Slider  {...settings}>
              {Chosendata.map((e)=>{
                return(
                  <Box p={"15px 15px 25px 15px"} boxShadow='lg' key={e.name}>
                     <Box>
                      <Image src={e.image}/>
                     </Box>
                     <Box p={"3px"} boxSizing={"border-box"}>
                      <Text fontWeight={"bolder"}>{e.name}</Text>
                     </Box>
                     <Box>
                      <Text fontSize={"xs"}>{e.descrip}</Text>
                     </Box>
                  </Box>
                )
              })}
        </Slider>
        </Box>
      </Box>
    );
  }


export default ChosenSlide