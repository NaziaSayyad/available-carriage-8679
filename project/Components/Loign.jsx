import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Heading,
  Checkbox,
  CheckboxGroup,
  Box,
  Input,
  Flex,
  FormControl,
  Stack,
} from "@chakra-ui/react";
import { GrCircleInformation } from "react-icons/gr";
export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("hello");
  }
  return (
    <>
      <Button
        bg="black"
        w="48%"
        rounded={"30px"}
        h="30px"
        color="white"
        _hover={{
          backgroundColor: "black",
        }}
        onClick={onOpen}
      >
        <Text fontWeight={"normal"}>SingIn</Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              <b>Sign In</b>
            </Text>
            <Text>
              Sign in or create an account to enjoy{" "}
              <b>FREE standard shipping</b> on all orders.
            </Text>
            <FormControl onSubmit={handleSubmit}>
              <Stack gap={"6px"}>
                <Input
                  focusBorderColor="black"
                  _focusVisible={{
                    border: "1px solid black",
                  }}
                  variant="outline"
                  placeholder="Email Addres*"
                  rounded={"5px"}
                />
                <Input
                  focusBorderColor="black"
                  variant="outline"
                  placeholder="Password*"
                  type="password"
                  rounded={"5px"}
                  _focusVisible={{
                    border: "1px solid black",
                  }}
                />
              </Stack>
              {/* <i class="far fa-eye" id="togglePassword"></i> */}
              <Flex justify={"space-between"}>
                <Flex alignItems={"center"} gap="10px">
                  {" "}
                  <Checkbox defaultChecked>Keep me signed in</Checkbox>
                  <GrCircleInformation />
                </Flex>
                <Text color={"blue"}>Forgot Password</Text>
              </Flex>
              <Button
                bg="black"
                w="46%"
                mt="10px"
                rounded={"30px"}
                h="40px"
                color="white"
                _hover={{
                  backgroundColor: "black",
                }}
                onClick={onOpen}
                type="submit"
              >
                <Text fontWeight={"bold"}>Sign In</Text>
              </Button>
            </FormControl>
            <Box>
              <Text fontWeight={"bold"}>New to Sephora ?</Text>
              <Button
                bg="white"
                w="46%"
                mt="10px"
                rounded={"30px"}
                h="40px"
                color="black"
                border={"2px solid black"}
                _hover={{
                  backgroundColor: "white",
                }}
                onClick={onOpen}
              >
                <Text fontWeight="bold">Create Account</Text>
              </Button>
            </Box>
            <Text
              fontSize={"13px"}
              textAlign={"center"}
              textDecoration="underline"
              color={"blue"}
            >
              Terms of Use & Privacy Policy
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
