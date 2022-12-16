export default function Home() {
  return (
   <>
    {/* <h1> Landing page </h1> */}
    </>
import { ChakraProvider } from '@chakra-ui/react'
import { Cart } from './Products/Cart'
import { MakeupProducts } from './Products/MakeupProducts'

export default function Home() {
  return (
    <div>
      <ChakraProvider>
        {/* <MakeupProducts /> */}
        <Cart/>
      </ChakraProvider>
    </div>
  )
}