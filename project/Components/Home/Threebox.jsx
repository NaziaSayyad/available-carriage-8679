import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const Threebox = () => {
  return (

    <Box w={"100%"} mb={"30px"}>
    <Box padding={"15px"} w={"90%"} m={"auto"}>

   
    <SimpleGrid  minChildWidth={"350px"} minHeight="150px" spacing="40px">
        <Box height={"250px"}>
            <Text textAlign={"left"} fontWeight="700" fontSize={'1.5rem'}>
            Our Commitment to Diversity, Equity & Inclusion</Text>
            <Text textAlign={"left"} fontWeight="700" fontSize={'1.2rem'}>LEARN MORE▸</Text>
<Image  src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-diversity-inclusion-desktop-mobile-us-ca-slice.jpeg?imwidth=800" alt="" />

        </Box>
        <Box height={"250px"}  bg={"#16603c"}>
            <Text textAlign={"left"} fontWeight="700" fontSize={'1.5rem'}
            color="white" p={"10px 10px 0px 10px"}>
            Get Your Gifts in Time
</Text>
 <Text  color="white"textAlign={"left"} fontWeight="600" fontSize={'1.10rem'}>
Fast and easy options for stress-free holiday shopping. 
</Text>
            <Text  color="white" textAlign={"left"} fontWeight="700" fontSize={'1.2rem'}>LEARN MORE▸</Text>
<Image  src="https://www.sephora.com/contentimages/2022-holiday-launch-site-desktop-mobile-home-page-rwd-marketing-banner-bottom-banner-ease-and-convenience-800x256-us-can.jpg?imwidth=800" alt="" />

        </Box>
        <Box height={"250px"}  bg="#c6a886">
            <Text textAlign={"left"} fontWeight="700" fontSize={'1.5rem'}  p={"10px 10px 0px 10px"}>
            Our Commitment to Diversity, Equity & Inclusion</Text>
            <Text textAlign={"left"} fontWeight="700" fontSize={'1.2rem'}>LEARN MORE▸</Text>
<Image  src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-clean-planet-positive-desktop-mobile-us-ca-slice.jpeg?imwidth=800" alt="" />

        </Box>


      
    </SimpleGrid>
    </Box>
    </Box>
  )
}
export  default Threebox;
