import { Box, Flex, Heading } from "@chakra-ui/layout";
import Link from "next/link";

export default function (){
    return(
        <>
        <Box>
           <Flex>
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
                    
                </Box>
                
        </Flex>
        </Box>
        {/* <div className="users"> 
           
           <Heading><Link >All Users Details </Link> </Heading>
          </div> 

          <div className="products">
           <Heading><Link href='product'> All products Details </Link>  </Heading>
          </div> */}
        </>
    )
}