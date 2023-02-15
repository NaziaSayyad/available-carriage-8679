import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";

import Link from "next/link";
import { Navbar } from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";
import { useEffect, useState } from "react";
import Admin_nav from "../Components/Admin_component/Admin Navbar/Navbar";
import AdminPannel from "../Components/Admin_component/Admin/pannel";
import { Admin_Navbar } from "../Components/Admin_component/Admin Navbar/Nav";
// import { JsonWebTokenError } from "jsonwebtoken";
const jwt = require("jsonwebtoken");

function MyApp({ Component, pageProps }) {
  const [isauth,setauth] = useState([]);
  const [toogle, settoogle] = useState(false);
  useEffect(() => {
    // const token = JSON.parse(localStorage.getItem("token"));
    const token = JSON.parse(localStorage.getItem("token"));
    // setauth(token)
    if(token){
      const decoded = jwt.decode(token);
      if(decoded?.role === "admin"){
        settoogle(true)
      }
    }
  }, []);
 
  // console.log("token", isauth);

  // if(!isauth){
    return(
      <ChakraProvider>
         {  toogle ?  <Admin_nav />: <Navbar /> }
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
    )
  // }
//   if(isauth){
//     const decode = jwt.decode(isauth);
//     console.log( decode?.role, "decode");

//     if(decode?.role ==="admin"){
//       return(
//         <ChakraProvider>
//           <Admin_nav />
//          <Box display={'flex'} m="2%">
//           <Box> <Admin_Navbar /> </Box>
//           <Box>  <Component {...pageProps} /> </Box>
//          </Box>
//     </ChakraProvider>
//       )
//     }
//     else {
//       return (
//         <ChakraProvider>
          
         
//           <Navbar />
//           <Component {...pageProps} />
//           <Footer />
//         </ChakraProvider>
//       );
//     }
// }
 
}
export default MyApp;

