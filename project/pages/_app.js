import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import Footer from "../Components/Footer";
export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
    <Component {...pageProps} />
    <Footer/>
     </ChakraProvider>
  )
}



