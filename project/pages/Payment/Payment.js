import { Box,Button,Checkbox,Collapse,FormLabel,Input,Select,Stack,Text, useDisclosure,Image, Flex, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Radio, RadioGroup } from '@chakra-ui/react'

import styles from "./Payment.module.css"
import Place from "./Place"
   
  


function Payment() {
    const { isOpen, onToggle } = useDisclosure();
    const [value, setValue] = React.useState('0')
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);
    const [show3, setShow3] = React.useState(false);
    const [show4, setShow4] = React.useState(false);

    const handleToggle1 = () => setShow1(!show1) ;
    const handleToggle2 = () => setShow2(!show2);
    const handleToggle3 = () => setShow3(!show3);
    const handleToggle4 = () => setShow4(!show4);
  return (
    <div>
      <Box className={styles.header}>
            <Text fontSize={'2.5rem'} fontWeight={500}>R E V I S H</Text>
      </Box>

      <Box className={styles.Total_Amount}>
     <Text fontWeight={"bold"}
     letterSpacing={"4px"}
     >
        TOTAL PAYBALE AMOUNT
     </Text>
     <Text fontWeight={"bold"}
     letterSpacing={"4px"}
     >
        Rs. 1,123
     </Text>
     
    </Box> 

    <Box w="80%"
    // border={"1px solid "}
    margin="auto">
    <Text fontSize={"1.3rem"}
     fontWeight={"bold"}
     letterSpacing={"4px"}
     marginTop={"20px"}
     >
        PAYMENT METHOD
     </Text>
     <hr className={styles.hrline}/> 
     </Box> 


 <Flex className={styles.inputbox}
   w={["80%","80%","80%","80%"]}
   direction={["column","column","column","row"]} 
 >     
     <Box 
    //  border={"2px solid red"}
     >
   <RadioGroup onChange={setValue} value={value}>
      <Stack direction="column">
     <Radio  onClick={handleToggle1}>
       <Text fontWeight={"bolder"}  letterSpacing={"2px"}> Credit / Debit Card </Text> 
      </Radio>
      <Collapse mt={4} in={show1}>
      <FormLabel>
        Enter your card number (Visa, Mastercard, Amex)
      </FormLabel>
      <Input type="text"/>
      <FormLabel >
        Enter Name on Card
      </FormLabel>
      <Input type="text"/>
      <FormLabel marginTop={"10px"}>
       CVV <Input  width={"70px"} type="text"/>
      </FormLabel>
      
      
      <Box display={"flex"} gap={"5px"}>
      <Text marginTop={"10px"}> Exp._Date </Text> 
      <Select marginTop={"5px"}  placeholder='MM'>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="1">3</option>
         <option value="2">4</option>
         <option value="1">5</option>
         <option value="2">6</option>
         <option value="1">7</option>
         <option value="2">8</option>
         <option value="1">9</option>
         <option value="2">10</option>
         <option value="1">11</option>
         <option value="2">12</option>
      </Select>
      <Select marginTop={"5px"}
      placeholder={"Year"}
      >
         <option value="1">2023</option>
         <option value="2">2024</option>
         <option value="1">2025</option>
         <option value="2">2026</option>
         <option value="1">2027</option>
         <option value="2">2028</option>
         <option value="1">2029</option>
         <option value="2">2030</option>
         <option value="1">2031</option>
         <option value="2">2032</option>
         <option value="1">2033</option>
         <option value="2">2034</option>
      </Select>
      </Box>
      <Checkbox> Save card as per RBI guidline</Checkbox>
      </Collapse> 



      {/* ---------------------------  NET Banking--------------  */}

      <Box className={styles.NetBanking}>

          <Radio  onClick={handleToggle3}>
              <Text  fontWeight={"bold"}  letterSpacing={"2px"}>  Net-Banking </Text> 
          </Radio>

          <Collapse  
          mt={4}
          in={show3}
          >
            <Flex
            //  display={"flex"} 
             gap={"10px"} 
             marginTop={"10px"}
            //  border={"1px solid"}
             w={["100%","100%","80%"]}
             flexWrap={"wrap-reverse"}
             >


            <Box height={"100px"} width={"100px"} borderRadius="10px"  border={"1px solid"}>
              <Image margin={"auto"} marginTop="10px" src="https://static.nnnow.com/client/assets/images/netbanking/axis.png" />
              <Text textAlign={"center"}>AXIS</Text>
            </Box>


            <Box height={"100px"} width={"100px"} borderRadius="10px"  border={"1px solid"}>
            <Image margin={"auto"} marginTop="10px" src="https://static.nnnow.com/client/assets/images/netbanking/hdfc.png" />
              <Text textAlign={"center"}>AXIS</Text>
            </Box>


            <Box height={"100px"} width={"100px"} borderRadius="10px"  border={"1px solid"}>
              <Image margin={"auto"} marginTop="10px" src="https://static.nnnow.com/client/assets/images/netbanking/sbi.png" />
              <Text textAlign={"center"}>AXIS</Text>
            </Box>


            <Box height={"100px"} width={"100px"} borderRadius="10px"  border={"1px solid"}>
            <Image margin={"auto"} marginTop="10px" src="https://static.nnnow.com/client/assets/images/netbanking/kotak.png" />
              <Text textAlign={"center"}>AXIS</Text>
            </Box>


            <Box height={"100px"} width={"100px"} borderRadius="10px"  border={"1px solid"}>
            <Image margin={"auto"} marginTop="10px" src="https://static.nnnow.com/client/assets/images/netbanking/icici.png" />
              <Text textAlign={"center"}>AXIS</Text>
            </Box>


            </Flex>
          </Collapse>        
     </Box>


{/* ------------------------------------ Other Wallets -------------------------- */}
     
     <Box className={styles.NetBanking}>

<Radio  onClick={handleToggle2}>
    <Text fontWeight={"bold"} letterSpacing="2px"> Other Wallets </Text>  
</Radio>

<Collapse  
mt={4}
in={show2}
>
  <Flex
  //  display={"flex"} 
   gap={"10px"} 
   marginTop={"10px"}
  //  border={"1px solid"}
   w={["60%","100%","100%"]}
   flexWrap={"wrap-reverse"}
   >


  <Box height={"100px"} width={"100px"} borderRadius="10px"  border={"1px solid"}>
    <Image margin={"auto"} marginTop="10px" src="https://static.nnnow.com/client/assets/images/razorpay/Amazonpay.png" />
    <Text textAlign={"center"}>AXIS</Text>
  </Box>


  <Box height={"100px"} width={"100px"} borderRadius="10px"  border={"1px solid"}>
  <Image margin={"auto"} marginTop="10px" src="https://static.nnnow.com/client/assets/images/razorpay/phonepe.png" />
    <Text textAlign={"center"}>AXIS</Text>
  </Box>


  <Box height={"100px"} width={"100px"} borderRadius="10px"  border={"1px solid"}>
    <Image margin={"auto"} marginTop="10px" src="https://static.nnnow.com/client/assets/images/razorpay/olamoney.png" />
    <Text textAlign={"center"}>AXIS</Text>
  </Box>


  <Box height={"100px"} width={"100px"} borderRadius="10px"  border={"1px solid"}>
  <Image margin={"auto"} marginTop="10px" src="https://static.nnnow.com/client/assets/images/razorpay/payzapp.png" />
    <Text textAlign={"center"}>AXIS</Text>
  </Box>


  <Box height={"100px"} width={"100px"} borderRadius="10px"  border={"1px solid"}>
  <Image margin={"auto"} marginTop="10px" src="https://static.nnnow.com/client/assets/images/razorpay/Mobikwik.png" />
    <Text textAlign={"center"}>AXIS</Text>
  </Box>


  </Flex>
</Collapse>        
</Box>

<Radio  onClick={handleToggle4}>
              <Text  fontWeight={"bold"} letterSpacing={"2px"}>Pay on Delivery (UPI, Wallet, Card and Cash) <Text color={"red"}> (additional charge Rs. 40)</Text> </Text> 
          </Radio>
      
      </Stack>
      </RadioGroup> 
     
</Box>

<Box>


</Box>

<Box className={styles.placebox}>
  <Place></Place>
</Box>

</Flex>




 


    </div>
  )
}

export default Payment