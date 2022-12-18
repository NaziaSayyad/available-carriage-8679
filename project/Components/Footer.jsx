import { ReactNode } from "react";
import { BiMailSend } from "react-icons/bi";
import {
  Box,
  Container,
  IconButton,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import SmallWithSocial from "./SmallWithSocial";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

function Footer() {
  return (
    <>
      <Box w={"100%"} bg={"gray.300"} p={"10px 0px"}>
        <Text textAlign={"center"} fontWeight={"bold"}>
          Website Feedback?Let Us Know.
        </Text>
      </Box>
      <Box bg={"black"} color={"white"} p={"30px 0px"}>
        <Container
          borderBottom={"1px"}
          borderColor={"white"}
          as={Stack}
          maxW={"7xl"}
          py={10}
        >
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
            spacing={8}
          >
            <Stack align={"flex-start"}>
              <ListHeader>We Belong To Something Beautyful</ListHeader>
              <Stack direction={"row"}>
                <Input
                  placeholder={"email.."}
                  bg={"gray.300"}
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300",
                  }}
                />
                <IconButton
                  bg={useColorModeValue("green.400", "green.800")}
                  color={useColorModeValue("white", "gray.800")}
                  _hover={{
                    bg: "green.600",
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>About Revish</ListHeader>
              <Link href={"#"}>Overview</Link>
              <Link href={"#"}>Features</Link>
              <Link href={"#"}>Tutorials</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Releases</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>My Revish</ListHeader>
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Press</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Contact</Link>
              <Link href={"#"}>Partners</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Support</ListHeader>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Legal</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Status</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={"#"}>Facebook</Link>
              <Link href={"#"}>Twitter</Link>
              <Link href={"#"}>Dribbble</Link>
              <Link href={"#"}>Instagram</Link>
              <Link href={"#"}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <SmallWithSocial />
      </Box>
    </>
  );
}

export default Footer;
