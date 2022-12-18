import Head from "next/head";
import { Box, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoMdArrowDropright,
} from "react-icons/io";
import Slider from "react-slick";
import ChosenSlide from "../Components/chosenSlide";
import Threebox from "../Components/Threebox";
import FeatureBox from "../Components/FeatureBox";
import Beauty from "../Components/Beauty";
import Little from "../Components/Little";
import Addbox from "../Components/Addbox";
import Routes from "../Components/Routes";
import Offers from "../Components/Offers";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  // console.log("nextArrow", props)
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Head>
        <title>REVISH.COM</title>
      </Head>
      <Box
        h={"50px"}
        w={"50px"}
        bg="#000000"
        opacity={"0.7"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        ml={"-70px"}
        borderRadius={"50%"}
      >
        <IoIosArrowForward style={{ color: "white", fontSize: "20px" }} />
      </Box>
    </div>
  );
}
const data = [
  {
    img: "https://www.sephora.com/contentimages/2022-fragrance-q4-site-desktop-mobile-home-page-hero-banner-holiday-multi-brands-1000x750-can.jpg?imwidth=545",
    name: "The Best Fragrance Gifts",
    desc: "Make their holiday with just right present",
    bg: "#ffda86",
    color: "black",
  },
  {
    img: "https://www.sephora.com/contentimages/2022-12-06-slotting-gifts-by-price-site-rwd-hp-hero-banner-4-product-english-us-handoff_01.jpg?imwidth=545",
    name: "$65 & Under Gifts",
    desc: "New beauty from hottest brands",
    bg: "#b252c0",
    color: "white",
  },
  {
    img: "https://www.sephora.com/contentimages/2022-12-02-slotting-just-arrived-v4-standard-site-rwd-home-page-hero-banner-US_01-handoff.jpg?imwidth=545",
    name: "The Latest Line Up",
    desc: "Make their holiday with just right present",
    bg: "#70a6b0",
    color: "black",
  },
  {
    img: "https://www.sephora.com/contentimages/2022-11-29-slotting-gifts-by-price-site-rwd-hp-hero-banner-skincare-musthaves-us-handoff_01.jpg?imwidth=545",
    name: "Skin Care Must Have Under $50",
    desc: "New beauty from hottest brands",
    bg: "#63076a",
    color: "white",
  },
];
export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Routes />
        <Box w={"100%"} mb={"30px"}>
          <Box w={"90%"} m={"auto"}>
            <Text color={"white"}> its working</Text>
            <Slider {...settings}>
              {data.map((e) => {
                return (
                  <Box bgColor={e.bg} key={e.name}>
                    <Box>
                      <Image w={"100%"} src={e.img} />
                    </Box>
                    <Box color={e.color} padding={"10px 20px 20px"}>
                      <Text fontSize={"20px"} fontWeight={"bold"}>
                        {e.name}
                      </Text>
                      <Text textDecoration={"underline"}>{e.desc}</Text>
                      <Box mt={"15px"} display={"flex"} alignItems={"center"}>
                        <Text
                          fontWeight={"bold"}
                          fontSize={"17px"}
                          textAlign={"center"}
                        >
                          Show More
                        </Text>
                        <IoMdArrowDropright fontSize={"20px"} />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Box>
        <ChosenSlide />
        <Threebox />
        <Beauty />
        <FeatureBox />
        <Little />
        <Offers />
        <Addbox />
      </>
    );
  }
}
