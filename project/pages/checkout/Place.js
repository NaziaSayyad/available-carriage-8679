import { Box, Divider, Input, Text } from '@chakra-ui/react'
import React from 'react'
import  Link from 'next/link'
// import OrderSuccessful from '../OrderSuccessful/OrderSuccessful'
// import { BsFillCreditCard2FrontFill} from "react-icons/bs";
import styles from "./Checkout.module.css"
const Place = () => {
  return (
    <Box className= {styles.placemain}
    w={["90vw","80vw","70vw","30vw"]}
    direction={["column","column","row","row"]}
    marginLeft={["-0.5rem","1rem","4rem","8rem"]}
    // bgColor={["red","green","blue","Pink"]}
    >
        <Box className={styles.td1}>
            <Text>Merchandise Subtotal</Text>
            <Text fontWeight={600}>$60.35</Text>
        </Box>
        <Box className={styles.td1}>
            <Link href='#'><Text className={styles.td1}>Shipping & Handling 🛈</Text></Link>
           <Text fontWeight={600}>$-.--</Text>
        </Box>
        <Box className={styles.td1}>
            <Link href='#'><Text className={styles.td11}>Estimated Taxes 🛈</Text></Link>
            <Text fontWeight={600}>$-.--</Text>
        </Box>
        <hr style={{border:"1px solid black"}} />
        <Box className={styles.td2}>
            <Text>Estimated Total</Text>
            <Text>$15.00</Text>
        </Box>
        <Box className={styles.td3}>
            <Text>or payments of $6.75 with <strong>Klarna.</strong></Text>
            <Text mb='0.5rem'>or <strong>afterpay 🛈</strong></Text>
            <Divider />
        </Box>
        <Divider />
        <Box>
            <Text fontSize={'1rem'} fontWeight={700} textAlign='center' mt='0.5rem'>The Sephora Credit Card Program</Text>
            <Box className={styles.ccp}>
                {/* <BsFillCreditCard2FrontFill size='3rem' /> */}
                <Text>Save $6.75 on this order when you open and use either Sephora Credit Card today*</Text>
            </Box>
            <Text fontSize={'0.8rem'} color={'gray.500'}>*Subject to credit approval. Exclusions apply.</Text>
            <button className={styles.cbtn}>SEE DETAILS</button>
            <Divider />
         <Link href="../OrderSuccessful/OrderSuccessful"><button className={styles.placebtn}>Place Order</button> </Link>
        </Box>
    </Box>
  )
}

export default Place;