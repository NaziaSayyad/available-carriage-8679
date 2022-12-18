import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import { ChakraProvider, Heading } from "@chakra-ui/react";

import Link from "next/link";
import { Navbar } from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}
export default MyApp;

