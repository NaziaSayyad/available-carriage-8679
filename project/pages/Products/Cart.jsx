import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Cart = () => {

  const [cartData, setCartData] = useState([]);
  
  function getCartData() {
    fetch("http://localhost:3000/api/cart", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setCartData(res));
  }
  useEffect(() => {
    getCartData();
  }, []);

async function deleteData(id) {
    console.log(id);
    return await fetch(`http://localhost:3000/api/cart?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        getCartData();
      });
     
  }
  
  //increment-decrement

const handleSelect = (e,el,qty)=>{
  let selected = e.target.value;
  qty = Number(selected);
  console.log(qty);
  handleQty(el,qty)
 
}

  const handleQty = async (el,qty)=>{
    console.log("qty",qty);

    return await fetch(`http://localhost:3000/api/cart?id=${el._id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
        body: JSON.stringify({
          qty:qty
        })
        
    })
    .then((res) => res.json())
    .then((res) => {
      getCartData();
    });
  }


  let total = cartData.reduce(function(acc,el){
    return acc+Number(el.price*el.qty)
  },0);

  // console.log(Number(total));
  console.log("cartData",cartData)

  return (
    <Box width={{ base: "99%", sm: "99%", md: "95%", lg: "70%" }} m={"auto"}>
      <Box margin={"32px 0px 24px"}>
        <Heading fontSize={"24px"}>My Basket</Heading>
      </Box>
      <Flex gap={"20px"} flexDir={{base: "column",sm:"column",md:"row",lg:"row"}}>
        <Box width={{base:"98%",sm:"98%",md:"68%",lg:"68%"}}>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            border={"1px solid rgb(204, 204, 204);"}
            borderRadius={"5px"}
            padding={"16px 24px"}
          >
            <Box>
              <Heading fontSize={"14px"} m={"0 0 4px"}>
                The Sephora Credit Card Program
              </Heading>
              <Flex gap={"5px"} alignItems={"center"}>
                <Image
                  src="https://www.sephora.com/contentimages/creditcard/cardicon/CreditCard.svg"
                  width={"38px"}
                  height={"32px"}
                  alt={"credit-img"}
                />
                <Text fontSize={"14px"}>
                  Save 25% on this order when you open and use either Sephora{" "}
                  <br /> Credit Card today*
                </Text>
              </Flex>
              <Text fontSize={"12px"} color={"#666666"}>
                *Subject to credit approval. Exclusions apply.
              </Text>
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
            <Heading fontSize={"16px"} m={"0 0 12px"}>
              Get It Shipped({cartData.length})
            </Heading>
            <Box p={"16px"} bg={"#FFFFFF"}>
              <Flex gap={"10px"}>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzT2mdkq9SSj3_B1doWTsZI4UrFK1b5pbHA&usqp=CAU"
                  width={"30px"}
                  height={"30px"}
                  alt={"car-img"}
                />
                <Text>
                  Beauty Insiders enjoy FREE standard shipping on all orders.
                  <br />{" "}
                  <a
                    href="#"
                    style={{ color: "blue", textDecoration: "underline" }}
                  >
                    Free Returns
                  </a>{" "}
                  on all purchases.*
                </Text>
              </Flex>
              <Flex justifyContent={"space-between"} m={"20px 0px 20px 0px"}>
                <Box
                  border={"2px solid lightgray"}
                  width={"49%"}
                  textAlign={"center"}
                  display={"flex"}
                  flexDir={"column"}
                  justifyContent={"center"}
                >
                  <Box p={"10px 12px"} textAlign={"center"}>
                    <Text fontSize={"14px"}>
                      Get <b>2</b> free sample(s) with every order
                    </Text>
                    <Select
                      fontWeight={"bold"}
                      placeholder={"SELECT YOUR SAMPLES(S)"}
                      width={{base:"auto",lg:"200px"}}
                      m={"auto"}
                      fontSize={"12px"}
                      border={"none"}
                      focusBorderColor={"white"}
                    >
                      <option></option>
                    </Select>
                  </Box>
                </Box>
                <Box
                  border={"2px solid lightgray"}
                  width={"49%"}
                  textAlign={"center"}
                  display={"flex"}
                  flexDir={"column"}
                  justifyContent={"center"}
                >
                  <Box p={"10px 12px"} textAlign={"center"}>
                    <Text fontSize={"14px"}>
                      You now have <b>0</b> Beauty Insider points
                    </Text>
                    <Select
                      fontWeight={"bold"}
                      placeholder={"REDEEM YOUR REWARDS"}
                      width={{base:"auto",lg:"200px"}}
                      m={"auto"}
                      fontSize={"12px"}
                      border={"none"}
                      focusBorderColor={"white"}
                    >
                      <option></option>
                    </Select>
                  </Box>
                </Box>
              </Flex>
              <hr />
{/*.................................... //mapping cart products... ..............................................*/}
              {
                cartData?.map((el) => (
                  <Flex m={"20px 0px 20px 0px"} gap={"20px"} cursor={"pointer"} key={el._id}>
                    <Box width={"20%"} height={"20%"}>
                      <Image
                        src={el.small_img}
                      />
                    </Box>
                    <Box width={"85%"}>
                      <Box>
                        <Flex justifyContent={"space-between"} mb={"10px"}>
                          <Box width={"80%"}>
                            <Heading
                              fontSize={"14px"}
                              _hover={{ textDecoration: "underline" }}
                            >
                              {el.title}
                            </Heading>
                            <Text
                              fontSize={"14px"}
                              fontWeight={"500"}
                              _hover={{ textDecoration: "underline" }}
                            >
                              {el.name}
                            </Text>
                            <Text fontSize={"12px"}>
                              SIZE 0.4 oz/ 12 mL • ITEM 2508075
                            </Text>
                            <Text fontSize={"12px"}>Color: 9</Text>
                          </Box>
                          <Box width={"20%"}>
                            <Text>{el.price==undefined? "$ 339" : `$ ${el.price * el.qty}`}</Text>
                          </Box>
                        </Flex>
                        <Flex justifyContent={"space-between"} gap={{base:"20px",sm:"20px",md:"10px",lg:"10px"}} flexDir={{base:"column",sm:"column",md:"row",lg:"row"}}>
                          <Select
                            placeholder={"1"}
                            width={{base:"40%",sm:"40%",md:"20%",lg:"20%"}}
                            value={el.qty}
                            border={"1px solid black"}
                            focusBorderColor={"transparent"}
                            onChange={(e)=>handleSelect(e,el,el.qty)}
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
                          </Select>
                          <Flex
                            alignItems={"center"}
                            justifyContent={"space-between"}
                          >
                            <Box
                              color={"#136BEA"}
                              fontSize={"12px"}
                              pr={"10px"}
                              textDecoration={"underline"}
                            >
                              <a href="#">Move to Loves</a>
                            </Box>
                            <Box
                              border={"1px solid lightgray"}
                              bg={"lightgray"}
                              height={"20px"}
                            ></Box>
                            <Box
                              color={"#136BEA"}
                              fontSize={"12px"}
                              pl={"10px"}
                              textDecoration={"underline"}
                              onClick={()=>deleteData(el._id)}
                            >
                              <a href="#">Remove</a>
                            </Box>
                          </Flex>
                          <Button
                            borderRadius={"20px"}
                            color={"rgb(0, 0, 0)"}
                            transition={
                              "color 0.2s ease 0s, border-color 0.2s ease 0s"
                            }
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
                ))
              }
            </Box>
          </Box>
        </Box>
        <Box width={{base:"98%",sm:"98%",md:"32%",lg:"32%"}}>
          <Box
            padding={"16px"}
            border={"1px solid rgb(204, 204, 204)"}
            borderRadius={"5px"}
          >
            <Flex
              justifyContent={"space-between"}
              fontSize={"14px"}
              lineHeight={"2"}
            >
              <Text>Merchandise Subtotal</Text>
              <Text fontWeight={"bold"}>$ {total}</Text>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              fontSize={"14px"}
              lineHeight={"2"}
            >
              <Text>Shipping & Handling</Text>
              <Text fontWeight={"bold"}>TBD</Text>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              mb={"10px"}
              fontSize={"14px"}
              lineHeight={"2"}
            >
              <Text>Estimated Tax & Other Fees</Text>
              <Text fontWeight={"bold"}>TBD</Text>
            </Flex>
            <hr />
            <Flex justifyContent={"space-between"} fontSize={"16px"}>
              <Text fontWeight={"bold"}>Estimated Total</Text>
              <Text fontWeight={"bold"}>$ {total}</Text>
            </Flex>
            <Text fontSize={"12px"}>
              or 4 payments of $9.50 with Klarna.
              <br /> or afterpay{" "}
            </Text>
            <Text fontSize={"12px"} mt={"8px"}>
              Shipping & taxes calculated during checkout
            </Text>
            <Link href='/checkout'>  
            <Button
              padding={"3.5px 15.75px"}
              background={"#CF112C"}
              fontSize={"14px"}
              borderRadius={"20px"}
              textAlign={"center"}
              color={"white"}
              fontWeight={"bold"}
              width={"100%"}
              mt={"15px"}
              _hover={{ background: "#CF112C" }}
            >
            Checkout Shipped Items 
            </Button>
            </Link>
            <Button
              display={"flex"}
              gap={"10px"}
              width={"100%"}
              fontSize={"14px"}
              padding={"3.5px 15.75px"}
              background={"transparent"}
              borderRadius={"20px"}
              border={"2px solid black"}
              textAlign={"center"}
              color={"black"}
              fontWeight={"bold"}
              mt={"10px"}
              _hover={{ background: "transparent" }}
            >
              <Text>Pay with</Text>
              <Image
                src={"https://www.sephora.com/img/ufe/logo-paypal.svg"}
                width={"40%"}
              />
            </Button>
          </Box>
          <Box
            mt={"10px"}
            padding={"16px"}
            border={"1px solid rgb(204, 204, 204)"}
            borderRadius={"5px"}
          >
            <Flex
              g={"5px"}
              alignItems={"center"}
              fontSize={"12px"}
              mb={"5px"}
              ml={{ base: "0px", sm: "0px", md: "0px", lg: "150px" }}
            >
              <Text>View featured offers</Text>
              <MdKeyboardArrowRight />
            </Flex>
            <Input
              placeholder={"Promo or Reward Code"}
              focusBorderColor={"black"}
            />
          </Box>
          <Box
            mt={"10px"}
            padding={"16px"}
            border={"1px solid rgb(204, 204, 204)"}
            borderRadius={"5px"}
          >
            <Heading fontSize={"16px"} m={"0 0 12px"}>
              Need assistance ?
            </Heading>
            <Text fontSize={"14px"}>
              1-877-SEPHORA (1-877-737-4672)
              <br />
              TTY: 1-888-866-9845
            </Text>
            <Text fontSize={"14px"} m={"8px 0px"}>
              Free return shipping or return in store
            </Text>
            <Text fontSize={"14px"} mb={"5px"}>
              We accept
            </Text>
            <Flex gap={"5px"}>
              <Image
                src={"https://www.sephora.com/img/ufe/payments/sephora.svg"}
                alt={"1-img"}
                width={"15%"}
                height={"5%"}
              />
              <Image
                src={"https://www.sephora.com/img/ufe/payments/payPal.svg"}
                alt={"2-img"}
                width={"15%"}
                height={"5%"}
              />
              <Image
                src={"https://www.sephora.com/img/ufe/payments/visa.svg"}
                alt={"3-img"}
                width={"15%"}
                height={"5%"}
              />
              <Image
                src={"https://www.sephora.com/img/ufe/payments/masterCard.svg"}
                alt={"4-img"}
                width={"15%"}
                height={"5%"}
              />
              <Image
                src={"https://www.sephora.com/img/ufe/payments/discover.svg"}
                alt={"5-img"}
                width={"15%"}
                height={"5%"}
              />
              <Image
                src={
                  "https://www.sephora.com/img/ufe/payments/americanExpress.svg"
                }
                alt={"6-img"}
                width={"15%"}
                height={"5%"}
              />
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
export default Cart;
