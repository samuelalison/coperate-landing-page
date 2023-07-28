import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    Button,
    Icon,
    IconButton,
    createIcon,
    SimpleGrid,
    Grid, 
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
import { relative } from 'path';


export default function Hero() {
  return (
    <Box>
      
       <Flex
       position={'relative'}
       flexDirection={{base: 'column', md: 'row'}}
       alignItems={{md: 'center', lg: 'center'}}>

        <Box 
        background="#FEF8F3" 
        >
         <Image src='/images/happy-pros.png' 
          /> 
        </Box>




        <Box >
         <Box  px={{base: '1rem'}}
         position={{base: 'absolute', md: 'relative'}}
        justifyContent={{md: 'center'}}
        bottom={{base: '1rem', md: 0 }}
         >
         <Text
        fontSize={{ base: '2xl', sm: '5xl', md: '4xl' }}
       
        position={'relative'}
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
    <Box position={'relative'} >
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
  )

}

  
  // export default function Hero() {
  //   return (
  //    <Box  background="#FEF8F3" maxW={{ md: '700px'}} 
  //    overflow={'none'}
  //    >
  //     <Box p={{ base: '20px', md: '40px' }}>
  //     <Image pos={'relative'}
  //    width="100%" src='/images/happy-pros.png' />
  //    <Box bottom={{base: '140px', md: '0px'}} position={'relative'} left={{md: '540px'}}>
  //     <Text
  //       fontSize={{ base: '2xl', sm: '4xl', md: '45px' }}
  //       lineHeight={{base: '50px', md: '80px'}}
  //       position={'absolute'}
  //       bottom={{base: '220px', md: '400px'}}
  //       fontWeight={'bold'}
        
  //       >
  //       <Text as={'b'} color={'#DF9F71'}
  //       >
  //       Empower Your Team To Connect With </Text>
  //       <Text as={'b'}
  //       >
  //       Our <br /> Cutting-Edge Solution
  //       </Text>
  //       </Text>
  //   <Box position={'relative'} bottom={{base:'10px', md: '260px'}}>
  //   <Text
  //   as={'p'}
  //   fontSize={'20px'}
  //   fontStyle={'normal'}
  //   fontWeight={300}
  //   lineHeight={'34px'}
  //   textTransform={'capitalize'}
  //   w={{ base: '100%', sm: '100%' }}
  //   >
  //   Transform your team's communication game with our innovative platform. Amplify their outreach, foster stronger relationships, and realize newfound success.
  //   </Text>
  //       <Button
  //   bg={'rgba(223, 159, 113, 0.42)'}
  //   p={{base: '20px', md: '20px'}}
  //   mt={{md: '10px'}}
  //   >
  //     <Text fontSize={{ md: '25px'}}> START NOW</Text>
   
  //   </Button>
  //   </Box>
  //   </Box>
  //   </Box>
  //    </Box>
     
  //   )
  // }
  
  const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d:
      'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
  });
  
  export const Blob = (props: IconProps) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  }




  // <Stack 
  // as={Box}
  // >
  //   <Flex direction={['column', 'column', 'row']}>
  //     <Box background="#FEF8F3">
  //       <Box 
  //       w={'500px'}
  //       ml={'125px'}
  //       mr={'200px'} >
  //   <Image pos={'relative'}
  //   bottom="52px" width="100%" src='/images/happy-pros.png' />
  //   </Box>
    



      
  //     <Box>
  //     <Box
  //     pos={'relative'}
  //     right={160}
  //     top={180}
  //     >
  //       <Text
  //       fontWeight={600}
  //       fontSize={{ base: '2xl', sm: '4xl', md: '35px' }}
  //       lineHeight={'50px'}
        
  //       >
  //       <Text as={'b'} color={'#DF9F71'}
  //       >
  //       Empower Your Team To Connect With </Text>
  //       <Text as={'b'}
  //       >
  //       Our <br /> Cutting-Edge Solution
  //       </Text>
  //       </Text>
  //   <Text
  //   as={'p'}
  //   fontSize={'20px'}
  //   fontStyle={'normal'}
  //   fontWeight={300}
  //   lineHeight={'34px'}
  //   textTransform={'capitalize'}
  //   w={{ base: '100%', sm: '100%' }}
  //   >
  //   Transform your team's communication game with our innovative platform. Amplify their outreach, foster stronger relationships, and realize newfound success.
  //   </Text>
  //   <Button
  //   bg={'rgba(223, 159, 113, 0.42)'}
  //   mt={'20px'}
  //   >
  //   START NOW
  //   </Button>
  //     </Box>
  //     </Box>
  //     </Box>
  //   </Flex>
  // </Stack>