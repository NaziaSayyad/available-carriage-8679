import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
    <Component {...pageProps} />
    <Footer/>
     </ChakraProvider>
  )
}

export default MyApp
