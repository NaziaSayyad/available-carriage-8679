export default function Home() {
  return (
   <>
    <h1> Product Page </h1>
    <h2> This is the landing page  </h2>
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