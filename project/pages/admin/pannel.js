import { Box, Flex } from "@chakra-ui/layout";
import Admin_nav from "../../component/Admin Navbar/Navbar";
import AdminPannel from "../../component/Admin/pannel";
import Sidebar from "../../component/Admin_Sidebar/sidebar";


export default function (req, res){
       return(
        <>
        
        <Admin_nav />

        <Box>
              <Flex>
                     <Box>
                            <Sidebar />
                     </Box>
                     <Box>
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
                    <AdminPannel />
                </Box>
                            
                     </Box>
              </Flex>
        </Box>
        </>
       )
    
}