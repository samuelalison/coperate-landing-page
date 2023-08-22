import React from 'react'
import { Flex, Box, Image, Text } from '@chakra-ui/react';

export const Team = () => {
  return (
    <Flex
    alignItems={'center'}
    p={{base: '20px', md: '100px'}}
    flexDirection={{base: 'column', lg: 'row'}}
    >
      <Box>
      <Image src='images/Group 1082.png' 
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
            mt={{base: '4rem'}}
            >
              <Box
              pos={{md: 'relative'}}
              ml={{md: '44px'}}
              mr={{md: '21px'}}
              
            //   top={{base: '16px'}}
              // bottom={{base: '16px'}}
              
              >
            <Image src='images/Group 1077.png' 
            maxW={{base:'40px', md: '55px'}}
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
              >Effortlessly manage your team</Text>
              <Text
              fontFamily={'Campton'}
              fontSize={{base: '17px', md: '17px'}}
              fontWeight={300}
              lineHeight={{base: '30px'}}
              fontStyle={'normal'}
              as={'p'}
              paddingEnd={{md: '7rem'}}
              >Our Admin Control Panels provide a powerful, user-friendly solution for corporate admins to manage their teams and leads all from one centralized tool.</Text>
            </Box>
            </Flex>
          </Box>
    </Flex>
  )
}
