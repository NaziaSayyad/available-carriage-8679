import { Box } from "@chakra-ui/react";
import { Admin_Navbar } from "../../Components/Admin_component/Admin Navbar/Nav";
import Admin_nav from "../../Components/Admin_component/Admin Navbar/Navbar";
import AdminPannel from "../../Components/Admin_component/Admin/pannel";


export default function  Dashboard(){
    return(
        <>
       <Box display={'flex'} m="2%">
          <Box> <Admin_Navbar /> </Box>
          <Box>  <AdminPannel /></Box>
         </Box>
        </>
        )
}

