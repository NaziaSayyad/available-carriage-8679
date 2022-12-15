import Checkout from "./checkout/checkout"
import {ChakraProvider} from '@chakra-ui/react'
import {Cart} from './Products/Cart'
import axios from "axios";
import MakeupProducts from "./Products/Makeup";


export default function Home() {
  return (
      <div>
           {/* ......................................only Landing page will be imported here........................ */}
          <MakeupProducts />
          {/* <Checkout/> */}
          {/* <Cart /> */}
      </div>
  )
}