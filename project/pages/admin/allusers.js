import { Box } from "@chakra-ui/layout";
import { Heading, HStack, IconButton, Image, Stack, Text, VStack } from "@chakra-ui/react"
import { IoTrashBinSharp } from "react-icons/io5";
import Users from "../../component/Admin/All users";


export default function  User_details({users}){
    return(
        
        <>
        <Users 
            users = {users}
            />
        
        </>
        )
}

export const getStaticProps = async () =>{
    const res = await fetch(`http://localhost:3000/api/users`);
    const data =  await res.json();
    return{
      props :{
        users :data
      }
    }
}