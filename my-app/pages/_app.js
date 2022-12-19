import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import { ChakraProvider, Heading } from "@chakra-ui/react";

import Link from "next/link";
import { Navbar } from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import { useEffect, useState } from "react";
import AdminPannel from "../Components/Admin_component/Admin/pannel";
// import Admin_nav from "../Components/Admin_component/Admin Navbar/Navbar";
// import AdminPannel from "../Components/Admin_component/Admin/pannel";
// import { JsonWebTokenError } from "jsonwebtoken";
const jwt = require("jsonwebtoken");

function MyApp({ Component, pageProps }) {
  const [isauth,setauth] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));;
    setauth(token)
  }, [])

  if(!isauth){
    return(
      <ChakraProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
    )
  }
  if(isauth){
    const decode = jwt.decode(isauth);
    console.log( decode?.role, "decode");
    if(decode?.role ==="admin"){
      return(
        <ChakraProvider>
     <Admin_nav />
          <AdminPannel />
      {/* <Component {...pageProps} /> */}
      {/* <Footer /> */}
    </ChakraProvider>
      )
    }
    // else if (isauth ==='null' ||  decode !== 'admin'){
    //   return (
    //     <ChakraProvider>
          
         
    //       <Navbar />
    //       <Component {...pageProps} />
    //       <Footer />
    //     </ChakraProvider>
    //   );
    // }
}
 
}
export default MyApp;

