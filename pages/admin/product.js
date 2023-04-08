import { Box } from "@chakra-ui/react";
import { Admin_Navbar } from "../../Components/Admin_component/Admin Navbar/Nav";
import All_products from "../../Components/Admin_component/Admin/AllProducts";
import axios from "axios";
// import All_products from "../../component/Admin/AllProducts";

export default function Product_details ({users}){
  console.log(users, "users");
    return (
    <>
    <Box display={'flex'} m="2%">
          <Box> <Admin_Navbar /> </Box>
          <Box>    
            <All_products
           products={users} />
       </Box>
       </Box>
   
    </>
    )
}

export const getServerSideProps = async () =>{
    const res = await axios(`http://localhost:3000/api/shop/makeup`);
    // const data =  await res.json();
    console.log(res.data,"data");
    return{
      props :{
        users : res.data
      }
    }

}
