import { Container, Text, Box, Flex, Image, Input } from '@chakra-ui/react'
import React from 'react'

const Potentials = () => {
  return (
<Box 
mt={'2rem'}
>
<Flex 
flexDirection={{base: 'column', md: 'row'}}
justifyContent={{md: 'center'}}  
alignItems={{md: 'center', lg: 'center'}}
>
 <Box 
 >
  <Container>
   <Text as={'h5'}
   color={'#DF9F71'}
   textAlign={'center'}
   lineHeight={{base: '30px', md: '55px'}}
   fontWeight={{base: 300, md: 500}}
   fontSize={{base: '28px', md: '48px' }}
   mb={'9px'}
   >Want to Maximize <Text color={'#120801'}> Your Team's Potential? </Text></Text>
   <Text textAlign={'center'}
   mb={'54px'}
   >Fill out the form below and we’ll be in touch:</Text>
   <Flex gap={'27px'}>
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
 position={{md: 'relative'}} 
 bottom={{ md: '2rem', lg: '6rem'}}
 >
    <Image src='images/Group 1254.png' 
    // maxW={{md: '601px'}}
    />
 </Box>


</Flex>
</ Box>
  )
}

export default Potentials