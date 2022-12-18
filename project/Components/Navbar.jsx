import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch, BsPeople, BsBasketFill } from "react-icons/bs";
import { CgGirl } from "react-icons/cg";
import { AiOutlineMessage, AiOutlineHeart } from "react-icons/ai";
import Login from "./Authentication/Loign";
import Auth from "./Authentication/AuthPop";
import AuthPop from "./Authentication/AuthPop";
//   import { FaStoreAlt } from "react-icons/fa";​
export const Navbar = () => {
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
            R E V I S H
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
            <Text>Store & Service</Text>
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
            <Text>Community</Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          w={{ base: "40%", sm: "40%", md: "20%" }}
          justifyContent="space-evenly"
        >
          <Box></Box>
          <Box width={"20%"}>
            <AiOutlineMessage size={"1.9rem"} />
          </Box>
          <Box>
            <AiOutlineHeart size={"1.9rem"} />
          </Box>
          {/* sign in box */}
          {/* <Box display={"flex"} gap="10px" alignItems="center">
            <CgGirl size={"2rem"} />
          </Box> */}
          <AuthPop />
        </Box>
      </Box>
    </>
  );
};
