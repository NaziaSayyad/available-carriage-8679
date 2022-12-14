import { Box, Button, Flex, Heading, Image, Select, Text } from "@chakra-ui/react"

export const Cart = () => {
    return (
        <Box width={{ base: "90%", sm: "90%", md: "65%", lg: "65%" }} m={"auto"}>
            <Box margin={"32px 0px 24px"}>
                <Heading fontSize={"24px"}>My Basket</Heading>
            </Box>
            <Flex gap={"20px"}>
                <Box width={"68%"}>
                    <Flex
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        border={"1px solid rgb(204, 204, 204);"}
                        borderRadius={"5px"}
                        padding={"16px 24px"}
                    >
                        <Box>
                            <Heading fontSize={"14px"} m={"0 0 4px"}>The Sephora Credit Card Program</Heading>
                            <Flex gap={"5px"} alignItems={"center"}>
                                <Image src="https://www.sephora.com/contentimages/creditcard/cardicon/CreditCard.svg" width={"38px"} height={"32px"} alt={"credit-img"} />
                                <Text fontSize={"14px"}>Save 25% on this order when you open and use either Sephora <br /> Credit Card today*</Text>
                            </Flex>
                            <Text fontSize={"12px"} color={"#666666"}>*Subject to credit approval. Exclusions apply.</Text>
                        </Box>
                        <Box>
                            <Button
                                borderRadius={"20px"}
                                color={"rgb(0, 0, 0)"}
                                transition={"color 0.2s ease 0s, border-color 0.2s ease 0s"}
                                _hover={{ backgroundColor: "none" }}
                                background={"white"}
                                border={"2px solid black"}
                                fontSize={"12px"}
                                padding={"3px 10.5px"}
                                lineHeight={"1"}
                                fontWeight={"bold"}
                                minW={"5.5em"}
                                minH={"32px"}
                            >
                                SEE DETAILS
                            </Button>
                        </Box>
                    </Flex>
                    <Box margin={"12px 0 24px"} p={"12px"} bg={"#F6F6F8"}>
                        <Heading fontSize={"16px"} m={"0 0 12px"}>Get It Shipped(1)</Heading>
                        <Box p={"16px"} bg={'#FFFFFF'}>
                            <Flex gap={"10px"}>
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzT2mdkq9SSj3_B1doWTsZI4UrFK1b5pbHA&usqp=CAU" width={"30px"} height={"30px"} alt={"car-img"} />
                                <Text>Beauty Insiders enjoy FREE standard shipping on all orders.<br /> <a href="#" style={{ color: "blue", textDecoration: "underline" }}>Free Returns</a> on all purchases.*</Text>
                            </Flex>
                            <Flex justifyContent={"space-between"} m={"20px 0px 20px 0px"}>
                                <Box border={"2px solid lightgray"} width={"49%"} textAlign={"center"} display={"flex"} flexDir={"column"} justifyContent={"center"} >
                                    <Box p={"10px 12px"} textAlign={"center"}>
                                        <Text fontSize={"14px"}>Get <b>2</b> free sample(s) with every order</Text>
                                        <Select fontWeight={"bold"} placeholder={"SELECT YOUR SAMPLES(S)"} width={"200px"} m={"auto"} fontSize={"12px"} border={"none"} focusBorderColor={"white"}>
                                            <option></option>
                                        </Select>
                                    </Box>

                                </Box>
                                <Box border={"2px solid lightgray"} width={"49%"} textAlign={"center"} display={"flex"} flexDir={"column"} justifyContent={"center"} >
                                    <Box p={"10px 12px"} >
                                        <Text fontSize={"14px"}>You now have <b>0</b> Beauty Insider points</Text>
                                        <Select fontWeight={"bold"} placeholder={"REDEEM YOUR REWARDS"} width={"200px"} m={"auto"} fontSize={"12px"} border={"none"} focusBorderColor={"white"}>
                                            <option></option>
                                        </Select>
                                    </Box>
                                </Box>
                            </Flex>
                            <hr />
                            <Flex m={"20px 0px 20px 0px"} gap={"20px"} cursor={"pointer"}>
                                <Box width={"20%"} height={"20%"} >
                                    <Image src={"https://www.sephora.com/productimages/sku/s2429579-main-zoom.jpg?imwidth=164"} />
                                </Box>
                                <Box width={"85%"}>
                                    <Box>
                                        <Flex gap={"20px"} justifyContent={"space-between"}>
                                            <Box>
                                                <Heading fontSize={"14px"} _hover={{textDecoration:"underline"}}>Armani Beauty</Heading>
                                                <Text fontSize={"14px"} fontWeight={"500"} _hover={{textDecoration:"underline"}}>Luminous Silk Face and Under-Eye Concealer</Text>
                                                <Text fontSize={"12px"}>SIZE 0.4 oz/ 12 mL • ITEM 2508075</Text>
                                                <Text fontSize={"12px"}>Color: 9</Text>
                                            </Box>
                                            <Box>
                                                <Text>$30.00</Text>
                                            </Box>
                                        </Flex>
                                        <Flex justifyContent={"space-between"}>
                                            <Select placeholder={"1"} width={"60px"} border={"1px solid black"} focusBorderColor={"transparent"} >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </Select>
                                            <Flex alignItems={"center"} justifyContent={"space-between"}>
                                                <Box color={"#136BEA"} fontSize={"12px"} pr={"10px"} textDecoration={"underline"}>
                                                    <a href="#">Move to Loves</a>
                                                </Box>
                                                <Box border={"1px solid lightgray"} bg={"lightgray"} height={"20px"}></Box>
                                                <Box color={"#136BEA"} fontSize={"12px"} pl={"10px"} textDecoration={"underline"}>
                                                    <a href="#">Remove</a>
                                                </Box>
                                            </Flex>
                                            <Button
                                                borderRadius={"20px"}
                                                color={"rgb(0, 0, 0)"}
                                                transition={"color 0.2s ease 0s, border-color 0.2s ease 0s"}
                                                _hover={{ backgroundColor: "none" }}
                                                background={"white"}
                                                border={"1px solid black"}
                                                fontSize={"12px"}
                                                padding={"0px 10.5px"}
                                                lineHeight={"1"}
                                                minW={"5.5em"}
                                                minH={"32px"}
                                            >
                                                Change Method
                                            </Button>
                                        </Flex>
                                    </Box>
                                    <Box></Box>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
                <Box width={"32%"}>
                    <Box padding={"16px"} border={"1px solid rgb(204, 204, 204)"} borderRadius={"5px"}>
                         product
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}