import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const Tailored = () => {
  return (
    <Container maxW='container.xl' centerContent
    mb={'83px'}
    >
        <Text textAlign={'center'}
        color={'#DF9F71'}
        fontFamily={'MADE Outer Sans'}
        fontSize={'55px'}
        fontWeight={300}
        lineHeight={'60px'}
        // mt={{base: '4rem'}}
        >Tailored For You</Text>
        <Text textAlign={'center'}
        mb={'100px'}
        >We Offer A Range To Meet You Needs</Text>

        <Flex 
        alignItems={{md:'center'}}
        justifyContent={'center'}
        flexDirection={{base: 'column', lg: 'row'}}
        >
          <Box
          ml={{lg: '200px'}}
          mb={{base: '3rem'}}
          >
          <Image src='images/Group 1079.png' 
          // w={{base: }}
          maxW={{base: '100%', md:'450px'}}
          
          />
          </Box>
  
 
          <Box 
          w={{base:0, md:'1px'}}  
          height={{base: 0, lg:'249px'}}
          background={'rgba(0, 0, 0, 0.50)'}
       
          />

         

          <Box 
          // mb={{base: '1rem', md: '0'}}
          >
            <Flex gap={{base: '5px'}}
            flexDirection={{base: 'column', md: 'row'}}
            // alignContent={{base: 'center'}}
            >
              <Box
              pos={{md: 'relative'}}
              ml={{md: '44px'}}
              mr={{md: '21px'}}
              top={{base: '16px'}}
              // bottom={{base: '16px'}}
              
              >
            <Image src='images/Group 1068.png' 
            //  w={{base: '100%'}}
            />
            </Box>


            <Box
            
            >
              <Text
              paddingEnd={{md: '6rem'}}
              color={"#000"}
              fontFamily={'MADE Outer Sans'}
              fontSize={{base: '32px', md: '32px'}}
              lineHeight={{base: '30px', md: '34px'}}
              mb={{base: '10px', md: '5px'}}
              >Access Leads From A Single Dashboard</Text>
              <Text
              fontFamily={'Campton'}
              fontSize={{base: '17px', md: '17px'}}
              fontWeight={300}
              lineHeight={{md: '30px'}}
              fontStyle={'normal'}
              as={'p'}
              paddingEnd={{md: '7rem'}}
              >Track leads from any source with customizable forms. Manage leads from a single dashboard.Effortlessly communicate with leads to close deals faster.</Text>
            </Box>
            </Flex>
          </Box>




          
        </Flex>
    </Container>
  )
}
