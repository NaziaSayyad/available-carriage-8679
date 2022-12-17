import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Box,
  Img,
  Flex,
  Text,
} from "@chakra-ui/react";
import style from "./auth.module.css";
import Login from "./Loign";
import { AiOutlineHeart } from "react-icons/ai";

export default function AuthPop() {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Button>SignUp</Button>
      </PopoverTrigger>
      <PopoverContent w="380px" mt="5px">
        <PopoverBody>
          <Box>
            <Flex alignItems="center">
              <Img
                src="https://www.sephora.com/img/ufe/icons/me-active.svg"
                alt="img"
                h="40px"
              />
              <Box ml="20px">
                <Text fontWeight={"700"}>Good evening, Beautiful 🌙</Text>
                <Text w="230px" fontSize={"13px"} lineHeight="16px">
                  Sign in for FREE standard shipping on all orders
                </Text>
              </Box>
            </Flex>
            <Flex justify={"space-between"} mt="8px">
              <Login />

              <Button
                w="48%"
                rounded={"30px"}
                h="30px"
                bg="white"
                color={"black"}
                border="2px solid black"
              >
                <Text fontWeight={"semi-bold"}>Create Account</Text>
              </Button>
            </Flex>
            <Box h="500px" overflow="auto" mt="20px" className={style.main_div}>
              <Box
                boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
                mt="10px"
                px="6px"
                rounded={"6px"}
                py="6px"
              >
                <Text>Beauty Perferences</Text>
                <Text fontSize={"14px"}>
                  Complete to see your personalized recommendations
                </Text>
                <Text
                  fontSize={"14px"}
                  bg="teal.100"
                  w="fit-content"
                  px="5px"
                  rounded={"6px"}
                >
                  NEW! personalize you shopping experiance
                </Text>
              </Box>
              <Box
                boxShadow="rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
                mt="10px"
                pl="6px"
                py="6px"
                rounded={"5px"}
              >
                <Text fontWeight={"500"}>
                  <i>Beauty</i>INSIDER
                </Text>
                <Text fontSize={"14px"} color="teal">
                  See your loyaltty program saving, benifit,rewards
                </Text>
              </Box>
              <div className={style.list_main}>
                <p className={style.child1}>Buy IT Again</p>
                <p className={style.child2}>
                  Recorder from in-store and online purchases
                </p>
              </div>
              <hr />
              <div className={style.list_main}>
                <p className={style.child1}>Orders</p>
                <p className={style.child2}>
                  View & track and online purchases
                </p>
              </div>{" "}
              <hr />
              <div className={style.list_main}>
                <p className={style.child1}>Auto-Replenish</p>
                <p className={style.child2}>
                  View and manage your subscription
                </p>
              </div>{" "}
              <hr />
              <div className={style.list_main}>
                <p className={style.child1}>
                  {" "}
                  <AiOutlineHeart />
                  Loves
                </p>
                <p className={style.child2}>View save products</p>
              </div>{" "}
              <hr />
              <div className={style.list_main}>
                <p className={style.child1}>Acoount Settings</p>
                <p className={style.child2}>
                  Payment, contact info, addressses, more
                </p>
              </div>{" "}
              <hr />
              <div className={style.list_main}>
                <p className={style.child1}>Rewards Bazaar</p>
                <p className={style.child2}>Redeem items, samples, more</p>
              </div>{" "}
              <hr />
              <div className={style.list_main}>
                <p className={style.child1}>Sephora Credit Card Program</p>
                <p className={style.child2}>Apply now</p>
              </div>{" "}
              <hr />
              <div className={style.list_main}>
                <p className={style.child1}>Same-Day Unlimited</p>
                <p className={style.child2}>
                  Get Unlimited Free Same-Day Delivery
                </p>
              </div>{" "}
              <hr />
              <div className={style.list_main}>
                <p className={style.child1}>Flash</p>
                <p className={style.child2}>
                  Unlimited 1-2 Day Shipping Subscription
                </p>
              </div>{" "}
              <hr />
              <div className={style.list_main}>
                <p className={style.child1}>Reservations</p>
                <p className={style.child2}>
                  Mange Your services, classes, events
                </p>
              </div>{" "}
              <hr />
              <div className={style.list_main}>
                <p className={style.child1}>Beauty Advisor Recommendations</p>
                <p className={style.child2}>
                  Recommendations from your store vists
                </p>
              </div>{" "}
              <hr />
              <div className={style.list_main}>
                <p className={style.child1}></p>
                <p className={style.child2}></p>
              </div>
            </Box>
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
