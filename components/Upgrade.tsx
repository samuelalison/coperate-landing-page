import React from 'react'
import { Box, Container, Text, Button, Image, Flex, Grid } from '@chakra-ui/react';

export const Upgrade = () => {
  return (
    <Box
    background={'#FEF8F3'}
    >

     <Container
     maxW={'5xl'} py={12}
     >
    <Box
    mt={'1rem'}
   
    pt={{lg: '42px'}}
    paddingBottom={{lg: '120px'}}
    >
        <Grid
        gridTemplateColumns={{lg: '1fr 1fr'}}
        alignItems={{lg: 'center'}}
        justifyContent={{lg: 'center'}}
        // p={{base: '20px', md: '100px'}}
        flexDirection={{base: 'column', lg: 'row'}}
        >
        <Box
        textAlign={'center'}
        // display={'flex'}
        flexGrow={{lg: 8}}
        flexBasis={{lg: '600px'}}
        ml={{lg: '100px'}}
        padding={{md: '1rem 10rem', lg: 0}}
        >
            <Text
            color={'#DF9F71'}
            fontSize={{base: '34px',md:'48px'}}
            fontWeight={500}
            lineHeight={{base: '40px', md: '55px'}}
            textTransform={'capitalize'}
            mb={'24px'}
            >Upgrading <Text
            color={'#000'}
            as={'span'}
            > your team </Text>has never been this easy</Text>
            <Text
             fontSize={{base:'12px', lg: '15px'}}
             lineHeight={'30px'}
             textTransform={'capitalize'}
             mb={{base: '20px'}}
            >Unlock the power of networking with our innovative digital solution. Your team will love the seamless user experience and cutting-edge features, while you'll appreciate the measurable results and competitive edge it brings.</Text>
            <Button
            background={'#000'}
            padding={{lg: '14px 56px'}}
            // mb={base: '20px', lg: '0px'}
            >
                <Text
                color={'#fff'}
                >GET STARTED</Text>
            </Button>
        </Box>


        <Box
        flexGrow={{lg: 1}}
        flexBasis={{lg: '600px'}}
        >
            <Image src='images/Group 1083.png' 
            // width={'100%'}
            />
        </Box>
        </Grid>
    </Box>
    </Container> 
    </Box>
  )
}
