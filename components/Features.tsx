import { Box, Image, Text, Flex, Grid } from '@chakra-ui/react'
import React from 'react'

export const Features = () => {
  return (
    <Box 
    p={{md: '0 20px'}}
    >
  <Box
  backgroundImage="url('images/Rectangle 4070.png')"
 p={{base: '60px 20px', md: '60px 81px 0'}}
 
  >
    <Box 
    mb={{md: '45px'}}
    >
   <Text
   textAlign={'center'}
   color={'#000'}
   fontSize={{base: '34px', lg: '55px'}}
   fontWeight={{base: '400'}}
   lineHeight={'34px'}
   textTransform={'capitalize'}
   mb={{base: '24px'}}
   > features that give us an edge</Text>
   <Text 
   textAlign={'center'}
   pb={{base: '45px'}}
   >Lorem Ipsum is simply dummy text of the printing</Text>
   </Box>






   <Flex
gap={{md: '45px'}}
flexDirection={{base: 'column', lg: 'row'}}
   >


{/* NO 1 */}
   <Box 
mt={'auto'}
flex={{base: '0', md: '1'}}
>
    <Box 
    background={"#FFF"}
    mb={{lg: '45px'}}   
    >
        <Box
         display={'flex'}
        justifyContent={'center'}
        >
        <Image src='images/Paper.png' 
        maxW={{base: '200px'}}
        marginTop={{base: '60px'}} 
        />
        </Box>

        
        <Box
        p={{base: '60px 20px 32px 20px'}}
        >
        <Text
        color={'#000'}
        fontSize={{base: '25px'}}
        fontWeight={{base: '600'}}
        lineHeight={{base: '34px'}}
        >Enhanced professionalism</Text>
        <Text
        color={'#000'}
        fontSize={{base: '16px', md: '18px'}}
        fontWeight={{md: '400'}}
        lineHeight={{md: '34px'}}
        >Impress potential clients and partners with our sleek and modern gear. This proves  your company's commitment to innovation and technology.</Text>
        </ Box>
    </Box>

    <Box

    >
    <Image src='images/Rectangle 4102.png' 
    display={{ base: "none", lg: "block" }}
    />
    </Box>

   </Box>




{/* NO 2 */}
   <Box
  mt={'auto'}
   flex={{base: '0', md: '1'}}
   >
    <Box
    mb={{lg: '45px'}} 
    background={"#FFF"}
    mt={{base: '45px', md: '0'}}
    >
<Box
    display={'flex'}
    justifyContent={{md: 'space-between'}}
> 
   <Image src='images/Group 1087.png' 
   maxW={{base: '200px'}}
   ml={'auto'}
   />
   </ Box>
        <Box
        p={{base: '60px 20px 32px 20px'}}
        >
        <Text
        color={'#000'}
        fontSize={{base: '25px'}}
        fontWeight={{base: '600'}}
        lineHeight={{base: '34px'}}
        >Data and Safety</Text>
        <Text
        color={'#000'}
        fontSize={{base: '16px', md: '18px'}}
        fontWeight={{md: '400'}}
        lineHeight={{md: '34px'}}
        >Our technology allows for secure and private transmission of information, minimizing the risk of data breaches.
        </Text>
    </Box>
    </Box>



    <Box
    background={'#DF9F71'}
    mt={{base: '45px', lg: '0'}}
    >
<Box
    display={'flex'}
    justifyContent={{md: 'space-between'}}
> 
   <Image src='images/Module 3.png' 
   maxW={{base: '200px'}}
   ml={'auto'}
   />
</Box> 
        <Box
         p={{base: '60px 20px 32px 20px'}}
        >
        <Text
        color={'#000'}
        fontSize={{base: '25px'}}
        fontWeight={{base: '600'}}
        lineHeight={{base: '34px'}}
        >Admin dashboard</Text>
        <Text
         color={'#000'}
         fontSize={{base: '16px', md: '18px'}}
         fontWeight={{md: '400'}}
         lineHeight={{md: '34px'}}
        >easily add or remove profile pictures, assign action templates, and view performance metrics, </Text>
    </Box>
    </Box>



   </Box>





{/* NO 3 */}
   <Box
   flex={{base: '0', md: '1'}}
   position={'relative'}
   bottom={{md: '45px'}}
   mt={{base: '45px', lg: '0'}}
   >
   <Box
   mb={{md: '45px'}} 
   background={'#FEF8F3'}
   >
    <Box
    display={'flex'}
    justifyContent={{md: 'space-between'}}
> 
   <Image src='images/analyzing data.png' 
    maxW={{base: '200px'}}
    ml={'auto'}
   />
   </Box>
        <Box
         p={{base: '60px 20px 32px 20px', lg: '60px 20px 0px 20px'}}
        >
        <Text 
        color={'#000'}
        fontSize={{base: '25px'}}
        fontWeight={{base: '600'}}
        lineHeight={{base: '34px'}}
        >Better tracking</Text>
        <Text
        fontSize={{base: '16px', md: '18px'}}
        fontWeight={{md: '400'}}
        lineHeight={{md: '34px'}}
        >you can easily track how many times your team members’ cards have been scanned, allowing you to better gauge the effectiveness of your networking efforts and make data-driven decisions.</Text>
    </Box>
    </Box>



    <Box
    background={'#202020'}
    mt={{base: '45px', lg: '0'}}
    >
    <Box
    display={'flex'}
    justifyContent={{md: 'space-between'}}
>     
   <Image src='images/Profile Page.png' 
   maxW={{base: '200px'}}
   ml={'auto'}
   />
   </Box>
        <Box 
         p={{base: '60px 20px 32px 20px', lg: '60px 20px 0px 20px'}}
        >
        <Text
        color={'#FFF'}
        fontSize={{base: '25px'}}
        fontWeight={{base: '600'}}
        lineHeight={{base: '34px'}}
        >Team Management</Text>
        <Text
        color={'#FFF'}
        fontSize={{base: '16px', md: '18px'}}
        fontWeight={{md: '400'}}
        lineHeight={{md: '34px'}}
        >Monitor individual or team performance metrics with downloadable reports, including top performers,  leads generated, and check-in/out times.</Text>
    </Box>
    </Box>
   </Box>





   </ Flex>
  </Box>
  </Box>
  )
}
