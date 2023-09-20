import React from 'react'
import {Container, Box, Text, Flex, Image } from '@chakra-ui/react';

export const Process = () => {
  return (
   <Container maxW={'5xl'} py={12}>
   <Box 
   // p={{lg: '40px'}}
    >
    <Text textAlign={'center'}
        color={'#DF9F71'}
        fontFamily={'MADE Outer Sans'}
        fontSize={{md: '55px', base: '30px'}}
        fontWeight={{base: 300, md: 400}}
        lineHeight={{base: '30px', md: '60px'}}
        mt={{base: '4rem'}}
        textTransform={'capitalize'}
        >From start to finish: Our easy process</Text>
        <Text textAlign={'center'}
        mb={'100px'}
        textTransform={'capitalize'}
        > designed to make it easy for you to get started</Text>



        <Flex
        gap='2rem'
        flexDirection={{base: 'column', lg: 'row'}}
        >

         <Flex
         flex='1'
         >

         <Box>
            <Image src='images/HC 4.png'
            w={'300px'}            />
         </Box>
         <Box 
         bgImage='images/01.png'
         bgRepeat="no-repeat"
         >
            <Text
            color={'#000'}
            fontFamily={'MADE Outer Sans'}
            fontSize={'20px'}
            fontWeight={'300'}
            lineHeight={'60px'}
            textTransform={'capitalize'}
            >Activate your card</Text>
            <Text
            color={'#000'}
            fontFamily={'Campton'}
            fontSize={'10px'}
            fontWeight={'400'}
            lineHeight={'25px'}
            textTransform={'capitalize'}
            >To activate the card on an Android device, turn on NFC in settings and place it near the back camera. For an iPhone, place the card on the front camera and click on the instant notification to fill in activation code and email.</Text>
         </Box> 
         </Flex>

        
        
        
        
        
         <Flex
         flex='1'
         >

         <Box>
            <Image src='images/HC 1.png' />
         </Box>
         <Box 
         bgImage='images/02.png'
         bgRepeat="no-repeat"
         >
            <Text
            color={'#000'}
            fontFamily={'MADE Outer Sans'}
            fontSize={'20px'}
            fontWeight={'300'}
            lineHeight={'60px'}
            textTransform={'capitalize'}
            >Create Your Profile</Text>
            <Text
            color={'#000'}
            fontFamily={'Campton'}
            fontSize={'10px'}
            fontWeight={'400'}
            lineHeight={'25px'}
            textTransform={'capitalize'}
            >Once you are logged in, Click on your card. You will see three options available. Click on “Card actions” select your default action, save it,  and voila!</Text>
         </Box> 
         </Flex>









         <Flex
         flex='1'
         >

         <Box>
            <Image src='images/HC 3.png' 
            // w={'100%'}
            />
            
         </Box>
         <Box 
         bgImage='images/03.png'
         bgRepeat="no-repeat"
         >
            <Text
            color={'#000'}
            fontFamily={'MADE Outer Sans'}
            fontSize={'20px'}
            fontWeight={'300'}
            lineHeight={'60px'}
            textTransform={'capitalize'}
            >Share your Card</Text>
            <Text
            color={'#000'}
            fontFamily={'Campton'}
            fontSize={'10px'}
            fontWeight={'400'}
            lineHeight={'25px'}
            textTransform={'capitalize'}
            >With a single swipe on any smartphone, you can begin sharing your identity and what you do.</Text>
         </Box> 
         </Flex>




         <Box></Box>
         <Box></Box>
        </Flex>
   </Box>
   </Container>
  )
}
