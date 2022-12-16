import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
