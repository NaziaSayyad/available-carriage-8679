import { Box, Container, Flex, Heading } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import Sidebar from "../Admin_Sidebar/sidebar";

const AdminPannel = () =>{
    return(
        // Navbar will come here 
       <>
        <Box>
            <h1> Dashboard </h1>
            {/* <Sidebar /> */}
           {/* <Flex>
                <Box style={
                        {
                            border:"5px solid red", 
                            width:'500px',
                            marginLeft: '5%',
                            height :'350px',
                            marginTop : '5%'
                        }
                        }
                >
                    <Sidebar />
                </Box>
                <Box style={
                        {
                            border:"5px solid red", 
                            width:'100%',
                            marginLeft: '5%',
                            height :'350px',
                            marginTop : '5%',
                            marginRight :'5%'

                        }
                        }
                >
                    Particular Details 
                </Box>
        </Flex> */}
        </Box>
        </>
       
    )
}
export default AdminPannel