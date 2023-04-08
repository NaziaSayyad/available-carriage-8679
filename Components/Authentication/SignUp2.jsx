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
  Img,
  Select,
  useToast,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { GrCircleInformation } from "react-icons/gr";

const initValue = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  phone: "",
  month: "",
  day: "",
  zip: "",
};
export default function SignUp2() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [formState, setFormState] = useState(initValue);
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  function strongPassword(str) {
    if (
      str.match(/[a-z]/g) &&
      str.match(/[A-Z]/g) &&
      str.match(/[0-9]/g) &&
      str.match(/[^a-zA-Z\d]/g) &&
      str.length >= 8
    ) {
      return true;
    } else {
      return false;
    }
  }
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
    if (!strongPassword(formState.password)) {
      toast({
        title: "error",
        description:
          "password must contain Uppercase , Lowercase , SpecialCharacter,Number",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    return fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "success") {
          toast({
            title: "success",
            description: "Successfully Registered",
            status: "success",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
          setFormState(initValue);
          return;
        }
        if (res.msg === "already") {
          toast({
            title: "failed",
            description: "Already Exist",
            status: "error",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
          setFormState(initValue);
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
  const { firstname, lastname, email, password, phone, month, day, zip } =
    formState;
  return (
    <>
      <Button
        w="48%"
        rounded={"30px"}
        h="30px"
        bg="white"
        color={"black"}
        border="2px solid black"
        onClick={onOpen}
      >
        <Text fontWeight={"semi-bold"}>Create Acoount</Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"xl"} mt="50px">
          <Text
            textAlign={"center"}
            fontSize="18px"
            fontWeight={"bold"}
            py="15px"
          >
            Create an Account
          </Text>
          <hr />
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Img
                h="30px"
                w="201px"
                src="https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg"
                alt="img"
              />
              <Text>
                Join the Beauty Insider loyatty program. Earn points, get{" "}
                <b>FREE statndard shipping,</b> redeem rewards, and more.
              </Text>
              <form onSubmit={handleSubmit}>
                <Stack gap="10px" mt="14px">
                  <Stack direction={"row"}>
                    <Input
                      focusBorderColor="black"
                      variant="outline"
                      onChange={handleChange}
                      name="firstname"
                      value={firstname}
                      placeholder="First Name"
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
                    <Input
                      focusBorderColor="black"
                      variant="outline"
                      onChange={handleChange}
                      name="lastname"
                      value={lastname}
                      placeholder="Last Name"
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
                  </Stack>
                  <Input
                    focusBorderColor="black"
                    variant="outline"
                    onChange={handleChange}
                    name="email"
                    value={email}
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
                  <Input
                    focusBorderColor="black"
                    onChange={handleChange}
                    name="phone"
                    value={phone}
                    variant="outline"
                    placeholder="Phone Number (optional)"
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
                <Text py="10px" fontWeight={"500"} color="black">
                  Enter your birthdate to receive a free gift every year.
                </Text>
                <Stack>
                  <Stack direction={"row"}>
                    <Select
                      onChange={handleChange}
                      name="month"
                      value={month}
                      variant="outline"
                      placeholder="Month"
                    >
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="Ocotober">Ocotober</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </Select>
                    <Select
                      onChange={handleChange}
                      name="day"
                      value={day}
                      variant="outline"
                      placeholder="Day"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </Select>
                  </Stack>
                  <Box py="10px">
                    <hr />
                  </Box>
                  <Input
                    focusBorderColor="black"
                    variant="outline"
                    onChange={handleChange}
                    name="zip"
                    value={zip}
                    placeholder="ZIP Code (to hear about store events near you)"
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
                  <Flex alignItems={"center"} gap="10px">
                    {" "}
                    <Checkbox defaultChecked>
                      <Text fontSize={"15px"}>Keep me signed in</Text>
                    </Checkbox>
                    <GrCircleInformation />
                  </Flex>
                </Stack>
                <Box py="20px">
                  <hr />
                </Box>

                <Button
                  bg="black"
                  w="50%"
                  py="22px"
                  rounded={"30px"}
                  h="30px"
                  color="white"
                  _hover={{
                    backgroundColor: "black",
                  }}
                  type="submit"
                  onClick={() => onClose()}
                >
                  <Text fontWeight={"normal"}>Join Now</Text>
                </Button>
              </form>
              <Box py="20px">
                <hr></hr>
              </Box>
              <Text fontSize={"13px"}>
                By clicking “Join Now” you acknowledge that you are a U.S. or
                Canada resident and (1) have read Sephora’s
                <Text color="blue" display={"inline"}>
                  {" "}
                  Privacy Policy and Notice of Financial Incentive,
                </Text>{" "}
                (2), agree to{" "}
                <Text color="blue" display={"inline"}>
                  Terms of Use, Beauty Insider Terms
                </Text>
                , and to automatically receive Beauty Insider offers and
                notifications via email.
              </Text>
              <Text fontSize={"13px"} pb="20px">
                Sephora uses Google ReCaptcha and by registering, users are
                subject to Google’s{" "}
                <Text color="blue" display={"inline"}>
                  privacy policy & terms.
                </Text>
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
