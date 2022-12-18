import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const Addbox = () => {
  return (

    <Box w={"100%"} mb={"30px"}>
    <Box padding={"15px"} w={"90%"} m={"auto"}>

   
    <SimpleGrid  minChildWidth={"350px"} minHeight="150px" spacing="40px">
        <Box height={"250px"} bg={"#acdcf2"}>
        <Box h={"40%"} p={"0px 10px"}>
            <Text textAlign={"left"} fontWeight="700" fontSize={'1.5rem'}>
            Our Commitment to Diversity, Equity & Inclusion</Text>
            <Text textAlign={"left"} fontWeight="700" fontSize={'1.2rem'}>LEARN MORE▸</Text>
            </Box>
            <Box h={"60%"}>
            <Image h={"100%"} w={"100%"} src="https://www.sephora.com/contentimages/2022-12-1-sc-sku-site-desktop-mweb-home-page-rwd-marketing-banner-launch-1-800x256-en-us-can.jpg?imwidth=400" alt="" />
            </Box>

        </Box>
        <Box height={"250px"}  bg={"#449553"}>
            <Box h={"40%"}  p={"0px 10px"}>
            <Text textAlign={"left"} fontWeight="700" fontSize={'1.5rem'}
            color="white" p={"10px 10px 0px 10px"}>
            Get Your Gifts in Time
</Text>
 <Text  color="white"textAlign={"left"}  fontSize={'1.10rem'}>
Fast and easy options for stress-free holiday shopping. 
</Text>
            <Text  color="white" textAlign={"left"} fontWeight="700" fontSize={'1.2rem'}>LEARN MORE▸</Text>
            </Box>
            <Box h={"60%"}>
            <Image h={"100%"} w={"100%"}  src="https://www.sephora.com/contentimages/2022-12-05-holiday-der-b-launch-site-mobile-desktop-home-page-rwd-marketing-banner-ldts-mockup-us-2869-release-800x256.jpg?imwidth=400" alt="" />
            </Box>

        </Box>
        <Box height={"250px"}  bg="#0192cb">
        <Box h={"45%"}  p={"0px 10px"}>
        <Text textAlign={"left"} fontWeight="700" fontSize={'1.5rem'}  p={"10px 10px 0px 10px"}>
            Our Commitment to Diversity, Equity & Inclusion</Text>
            <Text textAlign={"left"} fontWeight="700" fontSize={'1.2rem'}>LEARN MORE▸</Text>
         </Box>
        <Box h={"55%"}>
        <Image h={"100%"} w={"100%"} src="https://www.sephora.com/contentimages/2022-holiday-launch-bun-d-site-mobile-desktop-marketing-banner-rwd-live-chat-us-can-800x256.jpg?imwidth=400" alt="" />
          </Box>


        </Box>


      
    </SimpleGrid>
    </Box>
    </Box>
  )
}
export  default Addbox;