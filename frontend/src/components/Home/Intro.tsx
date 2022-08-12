import React from 'react'
import {Box, Flex, Spacer, Image, Button} from '@chakra-ui/react';
import illustration from './image.jpg'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/100.css'

function Intro() {
  return (
    <Flex padding="0" width="90%" margin="0 auto" height="500px" alignItems="center">
        <Box backgroundColor="white" width="50%" height="250px" fontFamily="Roboto" fontWeight="400">
          <Box fontSize={{base:"40px", md:"50px", xl:"60px"}} id="header">
            MotionContacts
          </Box>
          <Box id="desc" width={{md:"100%", xl:"70%"}} fontWeight="100" marginTop="10px">
              Looking for a better contacts apps, MotionContacts is here.
              MotionContacts is the best contacts app to suit your needs packed
              with features you never knew existed and very fast.
          </Box>
          <Button colorScheme="blue" borderRadius="5px" variant="solid" marginTop="25px">Register</Button>

        </Box>
        <Spacer/>
        <Image src={illustration} backgroundColor="orange" width="45%" height="40vw"/>
    </Flex>
  )
}

export default Intro 