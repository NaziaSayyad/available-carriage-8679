import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
     </ChakraProvider> 
  ) 
}


