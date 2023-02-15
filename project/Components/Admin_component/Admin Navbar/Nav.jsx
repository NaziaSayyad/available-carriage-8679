import {
    Box,
    Heading,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { BsSearch, BsPeople, BsBasketFill } from "react-icons/bs";
import Link from "next/link"; 
import AuthPop from "../../Authentication/AuthPop";
  export const Admin_Navbar = () => {
    return (
      <>
      <Box 
      display={'grid'} 
      gridTemplateColumns="repeat(1,1fr)" 
      border={'1px solid'} 
      width="350px"
      // m={'2%'}
      bg={'#5c6bc0'}
      color='white'
      textAlign={'center'}
      height='450px'
       >
        {/* <Box>
            
            <Text
              fontSize={{ base: "0.9rem", sm: "1.6rem", md: "1.6rem" }}
              fontWeight="400"
            >
             <Link href='/'>  R E V I S H </Link>
            </Text>
          </Box> */}
      <Heading mt='5%'>  <Link href='/admin'> Dashboard </Link> </Heading>  
        <Heading mt='5%'> <Link href='/admin/allusers'> Users  </Link></Heading>
        <Heading mt='5%'> <Link href='/admin/product'> Products</Link>  </Heading>
      </Box>
        {/* <Box
          display={"flex"}
          padding="15px 10px 15px 10px"
          justifyContent="space-between"
          border="1px solid "
          borderColor={"gray.300"}
          width={"100%"}
          alignItems="center"
        >
          <Box>
            
            <Text
              fontSize={{ base: "0.9rem", sm: "1.6rem", md: "1.6rem" }}
              fontWeight="400"
            >
             <Link href='/'>  R E V I S H </Link>
            </Text>
          </Box>
          <Box w="30%">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<BsSearch color="gray.300" />}
              />
              <Input type="tel" placeholder="Search" borderRadius={"30px"} />
            </InputGroup>
          </Box>
          <Box
            display={{ base: "none", sm: "none", md: "flex" }}
            w={{ base: "0", sm: "0", md: "30%" }}
            justifyContent="space-evenly"
          >
            <Box
              display={"flex"}
              gap="10px"
              alignItems="center"
              borderRight={"2px solid"}
              pr="8px"
              borderColor={"gray.300"}
            >
              <Text> </Text>
            </Box>
            <Box
              display={"flex"}
              gap="10px"
              alignItems="center"
              borderRight={"2px solid"}
              pr="8px"
              borderColor={"gray.300"}
            >
              <BsPeople size={"1.7rem"} />
              <Heading> <Link href='/admin/allusers'>  All Users  </Link></Heading>
            </Box>
          </Box>
          <Box
            display={"flex"}
            w={{ base: "40%", sm: "40%", md: "20%" }}
            justifyContent="space-evenly"
          >
           <Heading mt='5%'> <Link href='/admin/product'> Products</Link>  </Heading>

           
            </Box> 
            <AuthPop />
        </Box> */}
      </>
    );
  };
  // https://www.sephora.com/basket