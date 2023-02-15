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
        image: "https://www.sephora.com/contentimages/promo/beautyoffers/2022/December/2022-same-day-delivery-site-desktop-mobile-app-beauty-offers-page-banner-existing-client-us-can-final.jpg?imwidth=240",
        name: "Lanecame",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/contentimages/promo/beautyoffers/2022/December/2022-12-13-20off-frag-site-desktop-mobile-app-beauty-offers-page-banner-1000x750-us.jpg?imwidth=240",
        name: "Glow Receip",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/contentimages/promo/freeship2021/2022-08-01-free-ship-site-beauty-offers-page-banner-us-can-final.jpg?imwidth=240",
        name: "Anetesia",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/contentimages/promo/beautyoffers/2022/December/2022-12-08-WATCH-YA-TONE-DLX-SAMPLE-site-beauty-offers-banner-1000x750.jpg?imwidth=240",
        name: "Cay Skin",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/contentimages/promo/beautyoffers/2022/November/2022-holiday-cyberbag-site-desktop-mobile-app-beauty-offers-banner-1000x750.jpg?imwidth=240",
        name: "Aid beauty",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/contentimages/promo/beautyoffers/2022/November/2022-fragrance-q4-site-beauty-offers-banner-1000x750-smgm-us-khols.jpg?imwidth=240",
        name: "Make beauty",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/contentimages/promo/beautyoffers/2022/November/percent-off-basket-app-content-card-promo.png?imwidth=240",
        name: "Versace",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/contentimages/promo/beautyoffers/2022/November/2022-11-XX-stock-up-on-dior-site-desktop-mobile-app-beauty-offers-page-banner-en-us.jpg?imwidth=240",
        name: "Moroconail",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/contentimages/promo/beautyoffers/2022/October/2022-10-24-slotting-promo-app-beauty-offers-banner-STRONGERHAIR-us-handoff.jpg?imwidth=240",
        name: "Benifit cosmo",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/contentimages/promo/beautyoffers/2022/December/2022-12-16-skincare-challenge-tatcha-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg?imwidth=240",
        name: "Rare beauty ",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/contentimages/promo/beautyoffers/2022/December/2022-12-16-promo-app-beauty-offers-banner-RETROGLAM-us-ca-handoff.jpg?imwidth=240",
        name: "Bare Mineral",
        descrip: "Mini hollywood flawless"
      },
      {
        image: "https://www.sephora.com/contentimages/promo/beautyoffers/2022/November/2022-11-XX-hair-challenge-amika-kerastase-site-desktop-mobile-app-beauty-offers-page-banner-en-us-v1.jpg?imwidth=240",
        name: "Nest New",
        descrip: "Mini hollywood flawless"
      },
  ]


const Offers = () => {
 
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
        <Text fontSize={{ base: "1rem", sm: "1rem", md: "1.5rem" }} fontWeight="500">Beauty Offers</Text>
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
                     <Box _hover={{cursor:"pointer", bg:"gray.300"}} border={"2px"} padding={" 5px 7px"} borderRadius={"10px"} mt={"10px"}>
                        <Text>Shop offers</Text>
                     </Box>
                  </Box>
                )
              })}
        </Slider>
        </Box>
      </Box>
    );
  }


export default Offers