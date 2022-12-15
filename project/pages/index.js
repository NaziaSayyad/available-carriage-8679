import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Checkout from "./checkout/checkout"
import { ChakraProvider } from '@chakra-ui/react'
import { Cart } from './Products/Cart'
import { MakeupProducts } from './Products/MakeupProducts'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* ......................................only Landing page will be imported here........................ */}
         {/* <Checkout></Checkout> */}
         <div>
      {/* <ChakraProvider> */}
        {/* <MakeupProducts /> */}
        {/* <Cart/> */}
      {/* </ChakraProvider> */}
    </div>
    </div>
  )
}