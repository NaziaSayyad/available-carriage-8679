import { background, Box,
    Input,
    SimpleGrid,
    Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { Alert, AlertIcon,useToast} from "@chakra-ui/react"
import styles from "./Checkout.module.css"
import Place from './Place'
function Checkout({Components,children}) {
    let [address, setAddress] = useState({
        FirstName : "",
        LastName: "",
        Phone: "",
        StreetAddress :"",
        PostCode: "",
      });

      const toast = useToast()

   const infoSaved = () => {
       toast({
        title : "Shipping addres saved Click on Continue",
        status:"success",
        duration:9000,
        isClosable:true,
        position:"top"
       })
   }

      const handleOnChange = (e) => {
        const { name, value } = e.target;
        setAddress({ ...address, [name]: value });
      };
    
    //  console.log("address", address)

      const handleSave = (e) => {
        e.preventDefault();
        setChange(true);
       localStorage.setItem("address", JSON.stringify(address));
      };
     
      console.log("address:-",address);
      
      
      const [change, setChange] = useState(false);
  
  return (
    
    <div>
        <Box >
        <Box className={styles.header}>
            <Text fontSize={'2.5rem'} fontWeight={500}>R E V I S H</Text>
        </Box>
        <SimpleGrid columns={[1,null,1,2]} spacing={5}>
            <Box className={styles.inputbox}
             w={["80vw","80vw","70vw","45vw"]}
             direction={["column","row","row","row"]}
             marginLeft={["1rem","1rem","4rem","2rem"]}
            >
                <Text className={styles.chead}>Checkout</Text>
                <hr style={{border:"1px solid black"}} />
                <Text fontSize={'1.4rem'} fontWeight={800}>Shipping Address</Text>
                <Box className={styles.ibox}>
                <form onSubmit={handleSave}>
                    <Box className={styles.namebox}>
                         <Input className={styles.inputtag} name="FirstName" type='text' placeholder='First Name*'  onChange={handleOnChange} />
                        <Input className={styles.inputtag} name="LastName" type='text' placeholder='Last Name*'  onChange={handleOnChange}  />
                    </Box>
                    <Input className={styles.inputtag} name="Phone" type='text' placeholder='Phone*' w='17rem'  onChange={handleOnChange} mb='1rem' /> <br/>
                    <Input className={styles.inputtag} name="StreetAddress"type='text' placeholder='Street Address*'  onChange={handleOnChange} w='20rem' mb='1rem' /> <br/>
                    <Input className={styles.inputtag} name="PostCode" type='text' placeholder='ZIP/Postal Code*'  onChange={handleOnChange} w='10rem' mb='1rem' /> <br/>
                    <Box 
                    display={"flex"}
                    gap={"1rem"}
                    >
                  
                </Box>
                    <button 
                    onClick={infoSaved}
                    className= {styles.savebtn}
                    type="submit"
                    >Save & Continue</button> 
                    </form>
                
                </Box>
                
                <Text fontSize={'0.9rem'} fontWeight={600} mt='1rem'>Ship to FedEx Pickup Location 🛈</Text>
                <Link href='#'><Text className={styles.loc}>Select a location near you</Text></Link>
               
                <Box className='options'>
                    <hr style={{border:"1px solid red"}} />
                    <Text mt='1rem' fontSize={'1.6rem'} fontWeight={700}>Delivery & Gift Options</Text>
                    <Text mt='0.5rem' color={'red'}>Please update your information</Text>
                </Box>
                <Box className={styles.options}>
                    <hr style={{border:"1px solid red"}} />
                    <Text mt='1rem' fontSize={'1.6rem'} fontWeight={700}>Payment Method</Text>
                    <Text mt='0.5rem' color={'red'}>Please update your information</Text>
                </Box>
                <Box className={styles.options}>
                    <hr style={{border:"1px solid red"}} />
                    <Text mt='1rem' fontSize={'1.6rem'} fontWeight={700}>Review & Place Order</Text>
                    <Text mt='0.5rem'>Please review your order information before placing your order.</Text>
                </Box>
                
            </Box>
            <Box className={styles.placeorder}>
                <Place />
            </Box>
        </SimpleGrid>
        <Box className={styles.cfooter}>
            <Box className={styles.fbox}>
                <Text >© 2022 Sephora USA, Inc. All rights reserved.</Text>
                <Link href='#'><Text className={styles.flink}>Terms of Use</Text></Link>
                <Link href='#'><Text className={styles.flink}>Privacy Policy</Text></Link>
            </Box>
            <Box className={styles.fbox}>
                <Link href='#'><Text className={styles.flink}>1-877-737-4672</Text></Link>
                <Link href='#'><Text className={styles.flink}>TTY: 1-888-866-9845</Text></Link>
                <Link href='mailto:customerservice@sephora.com'><Text className='f-link'>customerservices@sephora.com</Text></Link>
            </Box>
        </Box>
    </Box>
        
    </div>
  )
}

export default Checkout