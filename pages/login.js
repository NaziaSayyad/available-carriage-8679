import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import Typed from 'react-typed';
 
export default function Login_page(){
    return(
        <>
            <br /> <br />
              <Center>
              <Heading color={'black'} >
              <Typed
                strings={[
                    'You Need To Login First',
                    '  Please Login '
                    ]}
                    typeSpeed={50}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
                 </Heading>
              </Center>
                

        <Flex h={'350px'} pt='50px' justifyContent={'center'} w={'200px'} m='auto'>
                <Login />
        </Flex>
        </>
    )
}