import { Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import All_products from "../../component/Admin/AllProducts";

export default function Product_details ({users}){
    return(
    <>
    <All_products 
    products={users}
    />   
    </>
    )
}

export const getStaticProps = async () =>{
    const res = await fetch(`http://localhost:3000/api/shop/makeup`);
    const data =  await res.json();
    return{
      props :{
        users :data
      }
    }

}
