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
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { GrCircleInformation } from "react-icons/gr";
import SignUp from "./SignUp";
const initValue = {
  email: "",
  password: "",
};
export default function Login({ handleName }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const router = useRouter();
  const [formState, setFormState] = useState(initValue);
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (!validateEmail(formState.email)) {
      toast({
        title: "error",
        description: "Invalid Email Address",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    return fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.msg);
        if (res.msg === "success") {
          toast({
            title: "success",
            description: "Successfully Login",
            status: "success",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
          setFormState(initValue);
          handleName(res.name);
          console.log(res);
          
          // console.log("token:", res.token, "role:", res.role );
          localStorage.setItem("token", JSON.stringify(res.token));
          if(res.role === "admin"){
            // window.location.href = "/admin"
            router.push("/admin");
           localStorage.setItem("token", JSON.stringify(res.token));
          }
          return;
        }
        if (res.msg === "incorrect password") {
          toast({
            title: "failed",
            description: "Incorrect Password",
            status: "error",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
          setFormState(initValue);
          localStorage.setItem("token", JSON.stringify(res.token));
          return;
        }
        if (res.msg === "error");
        {
          console.log("why");
          toast({
            title: "failed",
            description: "Email not resgisterd",
            status: "error",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
          setFormState(initValue);
          localStorage.setItem("token", JSON.stringify(res.token));
          return;
        }
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
              <form onSubmit={handleSubmit}>
                <Stack gap={"6px"}>
                  <Input
                    focusBorderColor="black"
                    variant="outline"
                    onChange={handleChange}
                    value={email}
                    name="email"
                    placeholder="Email"
                    rounded={"5px"}
                    _focusVisible={{
                      border: "1px solid black",
                    }}
                    _placeholder={{
                      fontWeight: "400",
                      color: "teal",
                    }}
                    required="true"
                  />
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      rounded={"5px"}
                      _focusVisible={{
                        border: "1px solid black",
                      }}
                      _placeholder={{
                        fontWeight: "400",
                        color: "teal",
                      }}
                      placeholder="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
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
                  type="submit"
                >
                  <Text fontWeight={"bold"}>Sign In</Text>
                </Button>
                <hr />
              </form>
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
