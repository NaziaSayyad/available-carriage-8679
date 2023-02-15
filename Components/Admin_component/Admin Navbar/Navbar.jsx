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
  // import { CgGirl } from "react-icons/cg";
  
  import { AiOutlineMessage, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
  
//   import AuthPop from "../Authentication/AuthPop";
  import Link from "next/link"; 
import AuthPop from "../../Authentication/AuthPop";
  //   import { FaStoreAlt } from "react-icons/fa";​
 const Admin_nav = () => {
    return (
      <>
        <Box
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
              {/* <FaStoreAlt size={"1.7rem"} /> */}
              <Link href='/admin'> <Text fontSize={'25px'}> Pannel</Text> </Link>
            </Box>
           
          </Box>
          <Box
            display={"flex"}
            w={{ base: "40%", sm: "40%", md: "20%" }}
            justifyContent="space-evenly"
          >
           
            <Box width={"20%"}>
              <AiOutlineMessage size={"1.9rem"} />
            </Box>
            <Box>
              <AiOutlineHeart size={"1.9rem"} />
            </Box>
            <Box>
              {/* <a  href="/Products/Cart">  Cart </a>  */}
              <Link href="/Products/Cart">  <AiOutlineShoppingCart size={"1.9rem"} /> </Link>
              
            </Box>
           
            <AuthPop />
          </Box>
        </Box>
      </>
    );
  };
  export default Admin_nav
  // https://www.sephora.com/basket