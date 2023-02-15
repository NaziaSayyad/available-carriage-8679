import { Button, Heading, HStack, IconButton, Image, Stack, Text, useToast, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
const getdata =  async () =>{
  let res = await  fetch(`http://localhost:3000/api/users`,{
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
  });
  let data = await res.json();
  return data;
  // console.log(data,"tll")
}
const Users = () =>{
  const [data,setdata] = useState([]);
  const toast = useToast();
  // setdata(users)
  
  const handledelete = async (id) =>{
    console.log("del:id", id);
    return await fetch(`http://localhost:3000/api/users?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // setdata(res)
        fetchdata();
        console.log(res);
        toast({
          title: "User Deleted Sucessfully",
          
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      });
      
  }


  const fetchdata = () =>{
    getdata().then((res) =>{
      // console.log(res,"res");
      setdata(res)
    })
    // getdata();
  }
  useEffect(() =>{
 fetchdata();
  }, [])
  console.log(data,"data");
    return (
       <>
        
       <VStack  p={5}  w="full">
        
       <Stack alignSelf={"flex-start"} p={5} 
       >
        <Text mb={'55'} fontWeight={"semibold"}  fontSize="xl" >All Users List</Text>
        </Stack>
        <HStack
        p={5}
        w="full"
        justifyContent={"space-around"}
        alignContent={"flex-start"}
        alignItems={"flex-start"}
      >
        

        <VStack p={5} position="relative" top="-100px" >
          <HStack
            p={5}
           
            w="full"
            bg="black"
            color="whiteAlpha.900"
            borderRadius={5}
            justifyContent={"space-between"}
          >
            <Text>Username</Text>
            <Text>Email</Text>
            <Text>Password</Text>
            <Text>Remove</Text>
          </HStack>
          <VStack spacing={5}>
         
          { data && data.map((el) =>(
               <HStack
               p={5}
              
               w="full"
               bg="#eee"
               borderRadius={5}
               justifyContent={"space-between"}
             >
               <Text>
                 {el.name}
               </Text>
               <Text>{el.email}</Text>
               <Text>{el.password}</Text>
               <Button onClick={() => handledelete(el._id)}>
                 <IconButton
                 fontSize="25px"
                 borderRadius={50}
                 variant="link"
                 icon={<IoTrashBinSharp />}
               /></Button>
             </HStack>
       ))
   }
         </VStack> 
        </VStack>

        </HStack>
        </VStack>
    </>
    )
}
export default Users
// http://localhost:3000/api/users
