import { Box } from "@chakra-ui/layout";
import { Heading, HStack, IconButton, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { IoTrashBinSharp } from "react-icons/io5";
import { Admin_Navbar } from "../../Components/Admin_component/Admin Navbar/Nav";
import Users from "../../Components/Admin_component/Admin/All users";
// import Users from "../../component/Admin/All users";


export default function  User_details(){
    return(
        
        <>
         <Box display={'flex'} m="2%">
          <Box> <Admin_Navbar /> </Box>
          <Box>   <Users /> </Box>
         </Box>
       
        </>
        )
}

// export const getStaticProps = async () =>{
//     const res = await fetch(`http://localhost:3000/api/users`,{
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
//       },
//     });
//     const data =  await res.json();
//     return{
//       props :{
//         users :data
//       }
//     }
// }