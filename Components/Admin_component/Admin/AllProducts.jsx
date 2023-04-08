import { Heading, HStack, IconButton, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { BsPenFill } from "react-icons/bs";
import { IoTrashBinSharp } from "react-icons/io5";

const All_products =  ({products}) =>{
  const handledelete = async  (id) =>{
      console.log(id);
  }
  const update_price = async  (id) =>{
      console.log(id);
  }
  console.log(products,"Pr");
     return (
        <>
       <VStack  p={5}  w="full">
        
        <Stack alignSelf={"flex-start"} p={5} >
        <Text  mb={'55'} fontWeight={"semibold"}  fontSize="xl" >All Products List</Text>
        </Stack>

        <HStack
        p={5}
        w="full"
        justifyContent={"space-around"}
        alignContent={"flex-start"}
        alignItems={"flex-start"}
      >
       

        <VStack p={5} position="relative" top="-100px" >
          <HStack
            p={5}
           
            w="full"
            bg="black"
            color="whiteAlpha.900"
            borderRadius={5}
            justifyContent={"space-between"}
          >
            <Text>Product Name </Text>
            <Text>Price </Text>
            {/* <Text>Password</Text> */}
            <Text>Remove</Text>
          </HStack>
          <VStack spacing={5}>
         
          { products.map((el) =>(
               <HStack
               p={5}
              
               w="full"
               bg="#eee"
               borderRadius={5}
               justifyContent={"space-between"}
               key= {el._id}
             >
               <Text>
                 {el.name}
               </Text>
               <Text>{el.price}</Text>
               <IconButton
                 fontSize="25px"
                 borderRadius={50}
                 variant="link"
                 onClick={() => handledelete(el._id)}
                 icon={<IoTrashBinSharp />}
               />
               <IconButton 
               fontSize={'25px'}
               borderRadius={50}
               variant ='link'
               onClick={() => update_price(el._id)}
               icon={<BsPenFill />}
               />
             </HStack>
       ))
   }
         </VStack> 
        </VStack>

        </HStack>
        </VStack>
        </>
     )
}
export default All_products