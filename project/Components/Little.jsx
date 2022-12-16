import { Box, Grid, GridItem, Image,  SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

 const Little = () => {
  var obj=[
    {detail:"Holiday Gift",img:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/new.svg'},
    {detail:"Gifting Quiz",img:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/gift_finder.svg'},
    {detail:"Foundation Quiz",img:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/foundation_guide.svg'},
    {detail:"Skincare",img:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_age.svg'},
    {detail:"Shiney hair",img:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_healthy%20scalp%20guide_us_ca_rwd_slice.png?imwidth=53'},
    {detail:"Fragrance",img:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/niche_fragrances.svg'},
    {detail:"Clinincal Skincare",img:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_quiz.svg'},  
  ]
  return (
          <Box w={"100%"} mb={"30px"}>
                <Box w="90%" m={"auto"}  border="none" p="10px"   textAlign={"left"}
    boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"  >
<Text fontSize={{ base: "1rem", sm: "1rem", md: "1.5rem" }} fontWeight="500">Need A Little Guidence</Text>
<Text>Checkout here</Text>
<Box w="90%" mb={"20px"}>
<SimpleGrid minChildWidth='100px' spacing='40px'>
{obj.map((e)=>{
 return <Box boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
 w={"140px"}h={{ base: "180px", sm: "180px", md: "180px" }}
 overflow="hidden" padding="20px" borderRadius={"10px"} 
minH={{ base: "160px", sm: "180px", md: "180px" }} position="relative">
    <Text>{e.detail}</Text>
  <Box width={{ base: "60%", sm: "50%", md: "50%" }} padding="5px" position="absolute" right={"0"} bottom="0" >
  <Image src={e.img}
 alt="" />
  </Box>
</Box>
})}

</SimpleGrid>
</Box>
</Box>
          </Box>
  )
}
export default Little;