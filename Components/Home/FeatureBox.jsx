import { Box, Grid, GridItem, Image,  SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

 const FeatureBox = () => {
  var obj=[
    {detail:"Gifts & Value Sets",img:'https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/gifts%2032@3x.png?imwidth=106'},
    {detail:"Luxury Skincare",img:'https://www.sephora.com/contentimages/categorybanners/RWD/icons/luxury_beauty.svg'},
    {detail:"Makeup Under $25",img:'https://www.sephora.com/contentimages/homepage/100422/Homepage/RWD/under25%2032@3x.jpg?imwidth=106'},
    {detail:"Moisturizers",img:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=106'},
    {detail:"Hair Styling & Treatments",img:'https://www.sephora.com/contentimages/homepage/091322/Homepage/RWD/hair%20dryer.JPG?imwidth=106'},
    {detail:"Perfume",img:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg?imwidth=106'},
    {detail:"Sephora Collection",img:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_sephoracollection_SC_us_ca_rwd_slice.jpg?imwidth=106'},
    
  ]
  return (
          <Box w={"100%"} mb={"30px"}>
                <Box w="90%" m={"auto"}  border="none" p="10px"   textAlign={"left"}
    boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"  >
<Text fontSize={{ base: "1rem", sm: "1rem", md: "1.5rem" }} fontWeight="500">Featured Categories</Text>
<Text>Shop what's popular now</Text>
<Box w="90%" mb={"20px"}>
<SimpleGrid minChildWidth='100px' spacing='40px'>
{obj.map((e)=>{
 return <Box key={e.detail} boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
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
export default FeatureBox;
