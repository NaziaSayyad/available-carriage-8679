import { Box, Flex, Heading } from "@chakra-ui/layout"
import Link from "next/link"

const Admin_nav = () =>{
    return(
       <Box bg='black' color={'white'} h='150px'>
        <Flex gap='25px' marginLeft={'15%'} >
        <Heading mt='5%'>  <Link href='/admin'> Dashboard </Link> </Heading>  
        <Heading mt='5%'> <Link href='/admin/allusers'> Users  </Link></Heading>
        <Heading mt='5%'> <Link href='/admin/product'> Products</Link>  </Heading>

        </Flex>
       </Box>
    )
}
export default Admin_nav