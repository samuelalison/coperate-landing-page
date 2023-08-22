import { Box, Container, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'

export const Integrations = () => {
  return (
    <Box
    mr={{lg: '50px'}}
    ml={{lg: '50px'}}
    >
    <Flex
    background={"#000"}
    alignItems={'center'}
    p={{base: '20px', md: '100px'}}
    flexDirection={{base: 'column', lg: 'row'}}
    >
     
     
      <Box 
      w={{base:0, md:'1px'}}  
      height={{base: 0, lg:'249px'}}
      background={'#fff'}
      />  



      <Flex
      >
        <Box 
        paddingStart={{md: '2rem'}}
        paddingEnd={{base: '10px', md: '2rem'}}
        
        >
        <Image src='images/Group 1069.png'
       maxW={{base:'40px', md: '55px'}}
         />
       </Box>



         <Box>
            <Text
            color={'#fff'}
            fontFamily={'MADE Outer Sans'}
            fontSize={{base: '30px', md: '32px'}}
            fontWeight={300}
            lineHeight={'34px'}
            mb={{base: '0.5rem', md: '0'}}
            >Integration Made Easy</Text>
            <Text
            fontFamily={'Campton'}
            fontSize={{base:'17px'}}
            color={'#FFF'}
            fontStyle={'normal'}
            fontWeight={300}
            lineHeight={'30px'}
            mr={{md: '3rem'}}
            mb={{base: '2rem', lg:'3rem'}} 
            >Connect any software to your dashboard without hassle.. Automate repetitive tasks and eliminate manual errors.. Simplify your workday and focus on what really matters.</Text>
         </Box>
      </Flex>


      <Box>
        <Image src='images/Group 1081.png' 
        maxW={{base: '100%', md:'450px'}}
        />
      </Box>
    </Flex>
    </Box>
  )
}
