import { Heading, HStack, IconButton, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { IoTrashBinSharp } from "react-icons/io5";

const All_products =  ({products}) =>{
     return (
        <>
       <VStack  p={5}  w="full">
        
        <Stack alignSelf={"flex-start"} p={5} >
        <Text fontWeight={"semibold"}  fontSize="xl" >All Users List</Text>
        </Stack>

        <HStack
        p={5}
        w="full"
        justifyContent={"space-around"}
        alignContent={"flex-start"}
        alignItems={"flex-start"}
      >
        {/* <Stack p={5}>
          <Image maxW="500px" src={"https://i.ibb.co/tsThdpL/preview-1.gif"} />
        </Stack> */}

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
             >
               <Text>
                 {el.name}
               </Text>
               <Text>{el.price}</Text>
               {/* <Text>{el.password}</Text> */}
               <IconButton
                 fontSize="25px"
                 borderRadius={50}
                 variant="link"
                 //onClick={toggleColorMode}
                 icon={<IoTrashBinSharp />}
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