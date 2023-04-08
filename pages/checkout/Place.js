import { Box, Divider, Input, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
// import OrderSuccessful from '../OrderSuccessful/OrderSuccessful'
// import { BsFillCreditCard2FrontFill} from "react-icons/bs";
import styles from "./Checkout.module.css"
const Place = () => {
    const [cartData, setCartData] = useState([]);
  
    function getCartData() {
      fetch("/api/cart", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setCartData(res));
    }
    useEffect(() => {
      getCartData();
    }, []);

    let subtotal = cartData.reduce(function(acc,el){
        return acc+Number(el.price*el.qty)
      },0);

    let gst = 18;
    let Total = subtotal +gst  
    return (
        <Box className={styles.placemain}
            w={["90vw", "80vw", "70vw", "30vw"]}
            direction={["column", "column", "row", "row"]}
            marginLeft={["-0.5rem", "1rem", "4rem", "8rem"]}
        // bgColor={["red","green","blue","Pink"]}
        >
            <Text className={styles.td01}>OVERVIEW</Text>  <br />
            <Box className={styles.td1}>

                <Text fontWeight={"bold"}>Subtotal</Text>
                <Text fontWeight={"bold"}>{`$ ${subtotal}`}</Text>
            </Box>
            <Box className={styles.td1}>
                <Link href='#'><Text className={styles.td1} fontWeight={"bold"} color={"#ff3399"}>Discount</Text></Link>
                <Text fontWeight={600} color={"#ff3399"} >$-0</Text>
            </Box>
            <Box className={styles.td1}>
                <Link href='#'><Text className={styles.td11} fontWeight={"bold"} >GST</Text></Link>
                <Text fontWeight={600}>{` $ ${gst}`}</Text>
            </Box>
            <Box className={styles.td1}>
                <Link href='#'><Text className={styles.td11} fontWeight={"bold"} >Delivery Charges</Text></Link>
                <Text fontWeight={600}>$-.--</Text>
            </Box>
            <hr style={{ border: "1px solid black" }} />
            <Box className={styles.td2}>
                <Text>Estimated Total</Text>
                <Text>{`$${Total}`}</Text>
            </Box>
            <Box className={styles.td3}>
                {/* <Text>or payments of $6.75 with <strong>Klarna.</strong></Text>
            <Text mb='0.5rem'>or <strong>afterpay 🛈</strong></Text> */}
                <Divider />
            </Box>
            <Divider />
            <Box>

                <Divider />
                <Link href="./Payment"><button className={styles.placebtn}>CONTINUE</button> </Link>
            </Box>
        </Box>
    )
}

export default Place;