import React from 'react'
import { Container, Text, Box, Flex, Image, Input } from '@chakra-ui/react';

export const PotentialsForm = () => {
  return (
<Container maxW={'5xl'} py={12}
mt={'2rem'}
>
<Flex 
flexDirection={{base: 'column', md:'row'}}
justifyContent={{md: 'center'}}  
alignItems={{md: 'center', lg:'center'}}
>
 <Box 
 flexGrow={{lg: '1'}}
 >
  <Container>
   <Text as={'h5'}
   color={'#DF9F71'}
   textAlign={'center'}
   lineHeight={{base: '30px', md: '55px'}}
   fontWeight={{base: 300, md: 500}}
   fontSize={{base: '28px', md: '40px' }}
   mb={'9px'}
   >Interested in Maximizing<Text color={'#120801'} as={'span'}> Your Team's</Text> Potential?</Text>
   <Text textAlign={'center'}
   mb={'54px'}
   >Fill out the form below and we’ll be in touch:</Text>
   <Flex 
   gap={{base:'0', lg:'27px'}}
   flexDirection={{base: 'column', lg: 'row'}}
   >
    <Box >
    <Text mb={'8px'}>Name</Text>
   <Input placeholder='Your Name' mb={'37px'}></Input>
    <Text mb={'8px'}>Company</Text>
   <Input placeholder='Your Name' mb={'37px'}></Input>
    <Text mb={'8px'}>Job Title</Text>
   <Input mb={'37px'}></Input>
   </Box>
    <Box>
    <Text mb={'8px'}>Email</Text>
   <Input mb={'37px'} placeholder='test@gmail.org'></Input>
    <Text mb={'8px'}>Company Size</Text>
   <Input mb={'37px'}></Input>
    <Text mb={'8px'}>Phone Number</Text>
   <Input mb={'37px'}></Input>
   </Box>
   </Flex>
 </Container>
 </Box>

 <Box 
  flexGrow={{lg: '1'}}
 position={{base:'relative', md: 'relative'}} 
// bottom={{base:'50px', lg:'0'}}
 bottom={{ base: '4rem', lg: '5rem'}}
 >
    <Image src='images/Group 1089.png' 
    // maxW={{md: '601px'}}
    width={'520px'}
    />
 </Box>


</Flex>
</ Container>
  )
}
