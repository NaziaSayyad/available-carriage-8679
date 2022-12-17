import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  ListItem,
  Select,
  SimpleGrid,
  StylesProvider,
  Text,
  Tooltip,
  UnorderedList,
  useToast,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { get } from "mongoose";

const filter = {
  min: 0,
  max: 400,
  value: false,
};
export default function MakeupProducts() {
  const [data, setData] = useState([]);
  const [sortByPrice, setByPrice] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [range, setRange] = useState(filter);

  const toast = useToast();

  const getData = async (min, max) => {
    console.log(min, max);

    const { data } = await axios.get(
      `http://localhost:3000/api/shop/makeup?min=${min}&max=${max}`
    );
    console.log(data);

    setData(data);
  };

  useEffect(() => {
    const { min, max } = range;
    console.log(min, max);
    getData(min, max);
  }, [range]);

  function handleCart(curElem) {
    fetch("http://localhost:3000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(curElem),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  // sort start

  function handleChange(e) {
    let selected = e.target.value;
    console.log(selected);
    let newData;
    if (selected === "HTL") {
      newData = data.sort(function (a, b) {
        return Number(b.price) - Number(a.price);
      });
      console.log(newData);
    } else if (selected === "LTH") {
      newData = data.sort(function (a, b) {
        return Number(a.price) - Number(b.price);
      });
      console.log(newData);
    }
    setData([...newData]);
  }

  //filter start

  async function handleCheckbox(a, b, value) {
    console.log("are you there", value);
    if (!value) {
      getData(0, Infinity);
      return;
    }
    setRange({
      ...range,
      min: a,
      max: b,
      value: value,
    });
  }

  return (
    <Box
      width={{ base: "90%", sm: "95%", md: "85%", lg: "85%" }}
      margin={"auto"}
      p={"8px 0px"}
    >
      <Box width={"100%"} p={"8px 0px"} margin={"5px 0px"}>
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Makeup</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Flex gap={"48px"}>
        <Box width={{ base: "0%", sm: "0%", md: "20%", lg: "20%" }}>
          <Box
            m={"0px 0px 24px"}
            lineHeight={"1.25"}
            fontSize={"24px"}
            wordwrap={"break-word"}
            whiteSpace={"pre-wrap"}
          >
            <Heading>Makeup</Heading>
          </Box>
          <Box>
            <UnorderedList listStyleType={"none"} ml={"0px"}>
              <ListItem lineHeight={"2"}>
                <a href="#">Face</a>
              </ListItem>
              <ListItem lineHeight={"2"}>
                <a href="#">Eye</a>
              </ListItem>
              <ListItem lineHeight={"2"}>
                <a href="#">Lip</a>
              </ListItem>
              <ListItem lineHeight={"2"}>
                <a href="#">Cheek</a>
              </ListItem>
              <ListItem lineHeight={"2"}>
                <a href="#">Value & Gift Sets</a>
              </ListItem>
              <ListItem lineHeight={"2"}>
                <a href="#">Makeup Paletts</a>
              </ListItem>
              <ListItem lineHeight={"2"}>
                <a href="#">Brushes & Applicators</a>
              </ListItem>
              <ListItem lineHeight={"2"}>
                <a href="#">Accessories</a>
              </ListItem>
              <ListItem lineHeight={"2"}>
                <a href="#">Nail</a>
              </ListItem>
              <ListItem lineHeight={"2"}>
                <a href="#">Vegan</a>
              </ListItem>
              <ListItem lineHeight={"2"}>
                <a href="#">Mini Size</a>
              </ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Box m={"32px 0px 0px"} color={"#666666"} fontSize={"12px"}>
              <Text>Filters</Text>
            </Box>
            <Box mt={"10px"}>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" p={"0px"}>
                        Brand
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} lineHeight={"2"}>
                    <Checkbox colorScheme={"gray"}>NARS</Checkbox>
                    <br />
                    <Checkbox colorScheme={"gray"}>SEPHORA COLLECTION</Checkbox>
                    <br />
                    <Checkbox colorScheme={"gray"}>
                      Rare Beauty by Selena
                    </Checkbox>
                    <br />
                    <Checkbox colorScheme={"gray"}>Dior</Checkbox>
                    <br />
                    <Checkbox colorScheme={"gray"}>Charlotte Tilbury</Checkbox>
                    <br />
                    <Checkbox colorScheme={"gray"}>LANEIGE</Checkbox>
                    <br />
                    <Checkbox colorScheme={"gray"}>Sephora Favorites</Checkbox>
                    <br />
                    <Checkbox colorScheme={"gray"}>Supergoop!</Checkbox>
                    <br />
                    <Checkbox colorScheme={"gray"}>Kosas</Checkbox>
                    <br />
                    <Checkbox colorScheme={"gray"}>ILIA</Checkbox>
                    <br />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Price Range
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} lineHeight={"2"}>
                    <Checkbox
                      colorScheme={"gray"}
                      value="Under $25"
                      onChange={(e) => handleCheckbox(0, 25, e.target.checked)}
                    >
                      Under $25
                    </Checkbox>
                    <br />
                    <Checkbox
                      colorScheme={"gray"}
                      onChange={(e) => handleCheckbox(25, 50, e.target.checked)}
                    >
                      $25 to $50
                    </Checkbox>
                    <br />
                    <Checkbox
                      colorScheme={"gray"}
                      value="$50 to $100"
                      onChange={(e) =>
                        handleCheckbox(50, 100, e.target.checked)
                      }
                    >
                      $50 to $100
                    </Checkbox>
                    <br />
                    <Checkbox
                      colorScheme={"gray"}
                      value="$100 and above"
                      onChange={(e) =>
                        handleCheckbox(100, Infinity, e.target.checked)
                      }
                    >
                      $100 and above
                    </Checkbox>
                    <br />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Rating
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} lineHeight={"2"}>
                    <Checkbox colorScheme={"gray"}>4 & up</Checkbox>
                    <br />
                    <Checkbox colorScheme={"gray"}>3 & up</Checkbox>
                    <br />
                    <Checkbox colorScheme={"gray"}>2 & up</Checkbox>
                    <br />
                    <Checkbox colorScheme={"gray"}>1 & up</Checkbox>
                    <br />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Box mt={"20px"}>
                <Image
                  src="https://pubsaf.global.ssl.fastly.net/prmt/6011f998ff0b2c94ef21eb869fe3d925"
                  width={"160"}
                  height={"600"}
                  alt="ad-img"
                />
              </Box>
              <Text fontSize={"12px"} color={"#666666"} margin={"8px 0px 0px"}>
                Sponsered
              </Text>
            </Box>
          </Box>
        </Box>
        <Box width={{ base: "95%", sm: "95%", md: "80%", lg: "80%" }}>
          <Box m={"0px 0px 32px"}>
            <Image
              src="https://pubsaf.global.ssl.fastly.net/prmt/9969ba47eae8518b72f6fe1e8fa4257a"
              alt={"ad2-img"}
            />
            <Box>
              <Text fontSize={"12px"} color={"#666666"} margin={"8px 0px 0px"}>
                Sponsered
              </Text>
            </Box>
          </Box>
          <Box>
            <UnorderedList
              ml={"0px"}
              listStyleType={"none"}
              display={"grid"}
              gridTemplateColumns={"repeat(auto-fill,minmax(170px,1fr))"}
              gap={"8px"}
              mb={"24px"}
            >
              <ListItem>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    gap: "10px",
                    alignItems: "center",
                    lineHeight: "1.25",
                    padding: "0.25em 12px",
                    minHeight: "44px",
                    borderRadius: "5px",
                    boxShadow: "0 0 6px 0 rgb(0 0 0 / 20%)",
                  }}
                >
                  <span style={{ width: "132px" }}>New</span>
                  <img
                    src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/new.svg"
                    alt="star-img"
                  />
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    gap: "10px",
                    alignItems: "center",
                    lineHeight: "1.25",
                    padding: "0.25em 12px",
                    minHeight: "44px",
                    borderRadius: "5px",
                    boxShadow: "0 0 6px 0 rgb(0 0 0 / 20%)",
                  }}
                >
                  <span style={{ width: "132px" }}>Bestsellers</span>
                  <img
                    src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/bestsellers.svg"
                    alt="bestseller-img"
                  />
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    gap: "10px",
                    alignItems: "center",
                    lineHeight: "1.25",
                    padding: "0.25em 12px",
                    minHeight: "44px",
                    borderRadius: "5px",
                    boxShadow: "0 0 6px 0 rgb(0 0 0 / 20%)",
                  }}
                >
                  <span style={{ width: "132px" }}>Clean</span>
                  <img
                    src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_beauty32.svg"
                    alt="clean-img"
                  />
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    gap: "10px",
                    alignItems: "center",
                    lineHeight: "1.25",
                    padding: "0.25em 12px",
                    minHeight: "44px",
                    borderRadius: "5px",
                    boxShadow: "0 0 6px 0 rgb(0 0 0 / 20%)",
                  }}
                >
                  <span style={{ width: "132px" }}>Vegan</span>
                  <img
                    src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/Icon_Vegan.svg"
                    alt="vegan-img"
                  />
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    gap: "10px",
                    alignItems: "center",
                    lineHeight: "1.25",
                    padding: "0.25em 12px",
                    minHeight: "44px",
                    borderRadius: "5px",
                    boxShadow: "0 0 6px 0 rgb(0 0 0 / 20%)",
                  }}
                >
                  <span style={{ width: "132px" }}>Mini Size</span>
                  <img
                    src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/minis.svg"
                    alt="mini-img"
                  />
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    gap: "10px",
                    alignItems: "center",
                    lineHeight: "1.25",
                    padding: "0.25em 12px",
                    minHeight: "44px",
                    borderRadius: "5px",
                    boxShadow: "0 0 6px 0 rgb(0 0 0 / 20%)",
                  }}
                >
                  <span style={{ width: "132px" }}>Lip Quiz</span>
                  <img
                    src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/lip_quiz.svg"
                    alt="lip-img"
                    width={"32px"}
                    height={"32px"}
                  />
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    gap: "10px",
                    alignItems: "center",
                    lineHeight: "1.25",
                    padding: "0.25em 12px",
                    minHeight: "44px",
                    borderRadius: "5px",
                    boxShadow: "0 0 6px 0 rgb(0 0 0 / 20%)",
                  }}
                >
                  <span style={{ width: "132px" }}>Foundation Quiz</span>
                  <img
                    src="https://www.sephora.com/contentimages/categorybanners/RWD/icons/foundation_quiz.svg"
                    alt="foundation-img"
                    width={"32px"}
                    height={"32px"}
                  />
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    gap: "10px",
                    alignItems: "center",
                    lineHeight: "1.25",
                    padding: "0.25em 12px",
                    minHeight: "44px",
                    borderRadius: "5px",
                    boxShadow: "0 0 6px 0 rgb(0 0 0 / 20%)",
                  }}
                >
                  <span style={{ width: "132px" }}>Cruelty-Free</span>
                  <img
                    src="https://www.sephora.com/contentimages/meganav/icons/CrueltyFreeupdated.svg"
                    alt="cruel-img"
                    width={"32px"}
                    height={"32px"}
                  />
                </a>
              </ListItem>
            </UnorderedList>
            <Flex justifyContent={"space-between"} mb={"10px"}>
              <Box>
                <Text> 2752 Results</Text>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>Sort by :</Text>
                <Select
                  placeholder="Relevance"
                  width={"200px"}
                  maxWidth={"90%"}
                  fontWeight={"bold"}
                  border={"none"}
                  focusBorderColor={"white"}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="HTL">Price High to Low</option>
                  <option value="LTH">Price Low to High</option>
                </Select>
              </Box>
            </Flex>
            <Box>
              <SimpleGrid columns={[1, 2, 3, 4]} gap={3}>
                {data?.map((curElem) => (
                  <Flex flexDirection={"column"} key={curElem._id}>
                    <Image
                      src={curElem.small_img}
                      alt={`id-${curElem._id}-img`}
                    />
                    <Text
                      fontSize={"14px"}
                      margin={"16px 0px 1.5px"}
                      textOverflow={"ellipsis"}
                      overflow={"hidden"}
                      maxW={"100%"}
                      whiteSpace={"pre-wrap"}
                      overflowWrap={"break-word"}
                    >
                      <b>{curElem.title}</b>
                    </Text>
                    <Text _hover={{ textDecoration: "underline" }}>
                      {curElem.name}
                    </Text>
                    <Flex gap={"5px"} alignItems={"center"}>
                      <Image
                        src="https://www.sephora.com/img/ufe/icons/star.svg"
                        width={"15px"}
                        height={"15px"}
                      />
                      <Text>{curElem.rating}</Text>
                    </Flex>

                    <Flex gap={"100px"}>
                      <Text>${curElem.price}</Text>
                      <Tooltip
                        label="Add to cart"
                        bg="black"
                        placement={"top"}
                        color={"white"}
                        fontSize={"1.2em"}
                      >
                        <Button
                          bg={"transparent"}
                          _hover={{ bg: "transparent" }}
                          onClick={() => handleCart(curElem)}
                        >
                          <Icon
                            as={FiShoppingCart}
                            h={8}
                            w={8}
                            alignSelf={"center"}
                            color="red"
                          />
                        </Button>
                      </Tooltip>
                    </Flex>
                  </Flex>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

// export const getStaticProps = async () => {
//     const res = await fetch("http://localhost:3000/api/shop/makeup");
//     const data = await res.json();
//     console.log(data,"get");
//     return {
//         props: {
//             data: data
//         },
//     };
// }
