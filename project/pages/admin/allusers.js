import { Box } from "@chakra-ui/layout";
import Users from "../../component/Admin/All users";
import Sidebar from "../../component/Admin_Sidebar/sidebar";

export default function (){
    return(
        <Box>
            {/* <h1> Users Details </h1> */}
            <Sidebar />
        <Users />
        </Box>
    )
}