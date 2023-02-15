import { Box, Button, Center, Divider, Input, Text, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import  Link from 'next/link';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

import styles from "./Payment.module.css"
import { useRouter } from 'next/router';
const Place = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter();
    const toast = useToast()

    let OTP = '';
    const handleOTP = () => {
      OTP = Math.floor(1000 + Math.random() * 9000)
      console.log (OTP);
      localStorage.setItem("OTP", JSON.stringify(OTP))
  
      toast({
          title : `Your one time OTP is ${OTP}`,
          status:"success",
          duration:2000,
          isClosable:true,
          position:"top"
         })
  }


  //   const [otp,setotp]=useState([])

  // useEffect(() => {
  //   let x = JSON.parse(localStorage.getItem("OTP"))
  //   setotp(x)
  //   },[])
  // console.log("otp",otp)
  // console.log("OTP",OTP)


    const handlepay = () => {

      // if (otp==OTP)
      // {
       toast({
            title : `Payment Done`,
            status:"success",
            duration:3000,
            isClosable:true,
            position:"top"
           })
      

           setTimeout (() =>{ 
              // window.location.href = "/OrderSuccessful"
            router.push("/OrderSuccessful")
            },4000)
    }
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

    let subtotal = cartData.reduce(function(acc,el){
        return acc+Number(el.price*el.qty)
      },0);

    let gst = 18; let dg = 40; 
    let Total = subtotal +gst +dg  

    
   


  return (
    <Box className= {styles.placemain} 
    w={["70vw","70vw","70vw","30vw"]}
    >
                <Text className={styles.td01}>OVERVIEW</Text>  <br/>
        <Box className={styles.td1}>

            <Text fontWeight={"bold"}>Subtotal</Text>
            <Text fontWeight={"bold"}>{`$ ${subtotal}`}</Text>
        </Box>
        <Box className={styles.td1}>
            <Link href='#'><Text className={styles.td1} fontWeight={"bold"} color={"#ff3399"}>Discount</Text></Link>
           <Text fontWeight={600} color={"#ff3399"} >$- 0 </Text>
        </Box>
        <Box className={styles.td1}>
            <Link href='#'><Text className={styles.td11} fontWeight={"bold"} >GST</Text></Link>
            <Text fontWeight={600}>{` $ ${gst}`}</Text>
        </Box>
        <Box className={styles.td1}>
            <Link href='#'><Text className={styles.td11} fontWeight={"bold"} >Delivery Charges</Text></Link>
            <Text fontWeight={600}>{`$${dg}`}</Text>
        </Box>
        <hr style={{border:"1px solid black"}} />
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
         <button className={styles.placebtn} onClick={onOpen}>Pay</button> 
         <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Registered Mobile Number</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder='Enter Mobile Number'/> <br/> <br/>
            <Input placeholder='Enter OTP'/>
            <Center>
            <Button onClick={handleOTP}  marginTop={"5px"} marginRight={"5px"}>Get OTP</Button>
            <Button onClick={handlepay} marginTop={"5px"} >Pay</Button>
            
            </Center>
            
          </ModalBody>
        </ModalContent>
      </Modal>
        </Box>
    </Box>
  )
}

export default Place;