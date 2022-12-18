import { Box, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import { IoIosArrowForward,IoIosArrowBack,IoMdArrowDropright } from 'react-icons/io';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
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
  
  
  const Beautydata =  [
      {
        image: "https://www.sephora.com/productimages/sku/s2580611-main-zoom.jpg?imwidth=166",
        name: "Lanecame",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2638534-main-zoom.jpg?pb=clean-planet-positive-badge-2021&imwidth=166",
        name: "Glow Receip",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2581569-main-zoom.jpg?imwidth=166",
        name: "Anetesia",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2609964-main-zoom.jpg?imwidth=166",
        name: "Cay Skin",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2631505-main-zoom.jpg?imwidth=166",
        name: "Aid beauty",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2607026-main-zoom.jpg?imwidth=166",
        name: "Make beauty",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s1727924-main-zoom.jpg?imwidth=166",
        name: "Versace",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2635886-main-zoom.jpg?imwidth=166",
        name: "Moroconail",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2578995-main-zoom.jpg?imwidth=166",
        name: "Benifit cosmo",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2447738-main-zoom.jpg?imwidth=166",
        name: "Rare beauty ",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2385169-main-zoom.jpg?imwidth=166",
        name: "Bare Mineral",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/productimages/sku/s2591501-main-zoom.jpg?pb=2020-03-sephora-clean-2019&imwidth=166",
        name: "Nest New",
        descrip: "Mini hollywood flawless"
      },
  ]


const Beauty = () => {
 
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
        <Text fontSize={{ base: "1rem", sm: "1rem", md: "1.5rem" }} fontWeight="500">Beauty Inside Rewards</Text>
       <Text>Signin in to redeem you points</Text>
        <Text  color={"white"}> its working</Text>
        <Slider  {...settings}>
              {Beautydata.map((e)=>{
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
                     <Box>
                      <Text fontSize={"xs"} fontWeight={"bolder"}>100 Points</Text>
                     </Box>
                     <Box border={"2px"} padding={" 5px 10px"} borderRadius={"10px"} mt={"10px"}>
                        <Text>Sign In To Access</Text>
                     </Box>
                  </Box>
                )
              })}
        </Slider>
        </Box>
      </Box>
    );
  }


export default Beauty