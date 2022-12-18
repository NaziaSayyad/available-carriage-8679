import { Box,Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styles from "./OrderSuccess.module.css"
import Image from 'next/image'
import congrats from "./image/congrats.png"
import right from "./image/right.png"

function OrderSuccessful() {
const [data,setData]=useState([])

  useEffect(() => {
    let x = JSON.parse(localStorage.getItem("address"))
    setData(x)
    },[])
  console.log(data)
  
  return (
    <div>
      {/* <Box className={styles.header}>
            <Text fontSize={'2.5rem'} fontWeight={500}>R E V I S H</Text>
           
        </Box> */}
        
        <Box className={styles.headOrderPlaced}>
        <Text fontWeight={"bold"} fontSize={'1.5rem'} className={styles.orderDetails} >Thanks for your order {data.FirstName+" "+data.LastName} <br/>Your order will be delivered to {data.StreetAddress}</Text>
          {/* <Text fontSize={'1.5rem'} fontWeight={'bold'}> THANKS FOR YOUR ORDER ID {"#"+Math.floor(Math.random()*10000)+"AxyzDERfgt"}</Text>   */}
           <Image 
           src = {congrats}
           alt = "congrats"
           className={styles.congratsimage}
           />
{/* 
           {  setTimeout (() =>{ 
              window.location.href = "http://localhost:3000/"
           },2000)
    } */}

        </Box>
       
    </div>
  )
}

export default OrderSuccessful