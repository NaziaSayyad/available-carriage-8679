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
import { useState } from "react";
import { GrCircleInformation } from "react-icons/gr";
import SignUp from "./SignUp";
const initValue = {
  email: "",
  password: "",
};
export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formState, setFormState] = useState(initValue);
  function handleSubmit() {
    return fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.token));
      });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  }
  const { email, password } = formState;
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
            <Stack gap="10px">
              <Text pt="10px">
                <b>Sign In</b>
              </Text>
              <Text>
                Sign in or create an account to enjoy{" "}
                <b>FREE standard shipping</b> on all orders.
              </Text>
              <FormControl>
                <Stack gap={"6px"}>
                  <Input
                    focusBorderColor="black"
                    _focusVisible={{
                      border: "1px solid black",
                    }}
                    variant="outline"
                    onChange={handleChange}
                    value={email}
                    name="email"
                    placeholder="Email Addres*"
                    _placeholder={{
                      fontWeight: "400",
                      color: "teal",
                    }}
                    rounded={"5px"}
                  />
                  <Input
                    focusBorderColor="black"
                    variant="outline"
                    onChange={handleChange}
                    value={password}
                    name="password"
                    placeholder="Password*"
                    type="password"
                    rounded={"5px"}
                    _focusVisible={{
                      border: "1px solid black",
                    }}
                    _placeholder={{
                      fontWeight: "400",
                      color: "teal",
                    }}
                  />
                </Stack>
                {/* <i class="far fa-eye" id="togglePassword"></i> */}
                <Flex mt="6px" justify={"space-between"} fontSize="15px">
                  <Flex alignItems={"center"} gap="10px">
                    {" "}
                    <Checkbox defaultChecked>
                      <Text fontSize={"15px"}>Keep me signed in</Text>
                    </Checkbox>
                    <GrCircleInformation />
                  </Flex>
                  <Text color={"blue"}>Forgot Password</Text>
                </Flex>
                <Button
                  bg="black"
                  w="46%"
                  mt="25px"
                  mb="20px"
                  rounded={"30px"}
                  h="40px"
                  color="white"
                  _hover={{
                    backgroundColor: "black",
                  }}
                  onClick={() => handleSubmit()}
                >
                  <Text fontWeight={"bold"}>Sign In</Text>
                </Button>
                <hr />
              </FormControl>
              <Box>
                <Text fontWeight={"bold"}>New to Sephora ?</Text>

                <SignUp />
              </Box>
              <Text
                fontSize={"13px"}
                textAlign={"center"}
                textDecoration="underline"
                color={"blue"}
                pt="10px"
                pb="12px"
              >
                Terms of Use & Privacy Policy
              </Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
