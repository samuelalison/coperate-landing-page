import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    Button,
  } from '@chakra-ui/react';
import { relative } from 'path';


export default function Hero() {
  return (
    <Box
    px={{lg: '1rem'}}
    >
    <Box
    background="#FEF8F3" 
    position={'relative'}
    mr={{lg: '28rem'}}
    
    >
      
       <Flex
       position={'relative'}
       flexDirection={{base: 'column', md: 'row'}}
       alignItems={{md: 'center', lg: 'center'}}
       justifyContent={{lg: 'space-between'}}
      //  alignItems={{lg: 'center'}}
       >

        <Box 
        background="#FEF8F3" 
        //
       
        >
         <Image src='/images/happy-confident-professional-team2.png' 
          // pr={{lg:'16rem'}}
          // pos={{lg: 'relative'}}
          // bottom={{lg: '60px'}}
          w={{lg: '4000px'}}
          /> 
        </Box>




        <Box>
         <Box  
         px={{base: '1rem'}}
         position={{base: 'absolute', md: 'relative', lg: 'relative'}}
        justifyContent={{md: 'center'}}
        bottom={{base: '1rem'}}
        // left={{lg: '25rem'}}
         >
         <Text
        fontSize={{ base: '2xl', sm: '5xl', md: '4xl' }}
       
        // position={'relative'}
        fontWeight={'bold'}
        
        >
        <Text as={'b'} color={'#DF9F71'}
        >
        Empower Your Team To <br /> Connect With </Text>
        <Text as={'b'}
        >
        Our <br /> Cutting-Edge Solution
        </Text>
        </Text>
    <Box 
    // position={'relative'}
    >
    <Text
    as={'p'}
    fontSize={{base: '16px', sm: '24px', md:'20px'}}
    fontStyle={'normal'}
    fontWeight={300}
    lineHeight={{base: '16px', sm: '30px', md:'34px'}}
    textTransform={'capitalize'}
    // w={{ base: '100%', sm: '100%' }}
    >
    Transform your team's communication game with our innovative platform. Amplify their outreach, foster stronger relationships, and realize newfound success.
    </Text>
        <Button
    bg={'rgba(223, 159, 113, 0.42)'}
    // p={{base: '0px', md: '20px'}}
    mt={{base: '1rem', md: '2rem'}}
    >
      <Text fontSize={{base: '16px', md: '25px'}}> START NOW</Text>
   
    </Button>
         </Box>
        </Box>
        </Box>
        </ Flex> 
      </Box>
      </Box>
  )

}

 