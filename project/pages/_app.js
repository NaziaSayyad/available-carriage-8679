import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider>
    <Component {...pageProps} />
     </ChakraProvider> 
  ) 
function MyApp({ Component, pageProps }) {
  return (
        <Component {...pageProps} />
  )
}

export default MyApp
