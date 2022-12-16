import { Box, Radio,Text, Collapse,  RadioGroup, Stack, useDisclosure } from '@chakra-ui/react';
import React from 'react'

function example() {
 const [value, setValue] = React.useState("1")
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const handleToggle1 = () => setShow1(!show1) ;
  const handleToggle2 = () => setShow2(!show2);
  return (
    <div>
     <RadioGroup onChange={setValue} value={value}>
      <Stack direction="column">
     <Radio onClick={handleToggle1}>
        Toggle
      </Radio>
      <Collapse mt={4} in={show1}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </Collapse> <br/>
      

      <Radio variantColor="blue" onClick={handleToggle2}>
        Toggle
      </Radio>

      <Collapse mt={4} in={show2}>
       dson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </Collapse>
      </Stack>
      </RadioGroup>   
    </div>
  )
}

export default example