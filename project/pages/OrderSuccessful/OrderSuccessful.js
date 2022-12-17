import { Box,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from "./OrderSuccess.module.css"
import Image from 'next/image'
import congrats from "./image/congrats.png"
import right from "./image/right.png"

function OrderSuccessful({children}) {
 
   const [address,setAddress] = useState(
    JSON.parse(localStorage.getItem("address"))
   )

   

//    useEffect(() => {

//     const {address} = JSON.parse(localStorage.getItem("address"));
//     setAddress(address);

// }, [])
// useEffect(() => {
//   if(localStorage){
//     const getLocalState = JSON.parse(localStorage.getItem("address"))
//     // console.log("address :-", getLocalState)
//   }
// },[])
   console.log("adddress:",address)
  return (
    <div>
      <Box className={styles.header}>
            <Text fontSize={'2.5rem'} fontWeight={500}>R E V I S H</Text>
           
        </Box>
        <Box className={styles.headOrderPlaced}>
        <Text fontWeight={"bold"} fontSize={'1.5rem'} className={styles.orderDetails} >Thanks for your order {address.FirstName +" "}{address.LastName} <br/> will be delivered to {address.StreetAddress} </Text>
          {/* <Text fontSize={'1.5rem'} fontWeight={'bold'}> THANKS FOR YOUR ORDER ID {"#"+Math.floor(Math.random()*10000)+"AxyzDERfgt"}</Text>  */} 
           <Image 
           src = {congrats}
           alt = "congrats"
           className={styles.congratsimage}
           />

        </Box>
       
    </div>
  )
}

export default OrderSuccessful