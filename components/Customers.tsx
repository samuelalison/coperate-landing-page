// import React from 'react';
// import {
//   Box,
//   Flex,
//   Button,
//   Heading,
//   Text,
//   Image,
//   Stack,
//   Container,
//   Avatar,
//   useColorModeValue,
// } from '@chakra-ui/react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


// export const Customers = () => {

//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };





//     return (
//     <Box
    
//     >
//         <Text 
//         textAlign={'center'}
//         color={'#DF9F71'}
//         fontFamily={' MADE Outer Sans'}
//         fontSize={'48px'}
//         fontWeight={'500'}
//         lineHeight={'normal'}
//         mb={'3rem'}>
//         What Our Customers Are Saying
//         </Text>



//         {/* <Flex
// gap={'4rem'}
// > */}


//             {/* button */}
//         {/* <Box
//          display={'flex'}
//          justifyContent={'center'}
//          alignItems={'center'}
//         >
//        <Button
//        display={'flex'}
//        justifyContent={'center'}
//        alignItems={'center'}
//        >
//         <Image src='images/arrow-circle-left.png'
//         // W={'200px'}
//         // h={'200px'}
//         />
//        </Button>
//        </Box> */}

//        <Slider {...settings}>

// {/* 1st Card */}
//        <Box 
//        background={'#FBECDE'}
//        borderRadius={'5px'}
//     //    p={'0px 11px'}
//     mr={{lg: '20px'}}
//        >
//        <Text 
//        p={'53px 33px 33px'}
//        textAlign={'center'}
//        color={'#000'}
//        fontFamily={'Campton'}
//        fontSize={'10px'}
//        fontWeight={'400'}
//        lineHeight={'22px'}
//        >We had to print new cards every time one of our employees got a promotion, and it was simply wasteful.  With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.</Text>
//        <Text
//        textAlign={'center'}
//        color={'#DF9F71'}
//        mt={'12px'}
//        >DAVID BASSEY</Text>
//        <Image />
//        </Box>




// {/* 2nd Card */}
//        <Box 
//        background={'#FBECDE'}
//        borderRadius={'5px'}
       
//        mr={{lg: '20px'}}
      
//        >
//        <Text
//         p={'53px 33px 33px'}
//        textAlign={'center'}
//        color={'#000'}
//        fontFamily={'Campton'}
//        fontSize={'10px'}
//        fontWeight={'400'}
//        lineHeight={'22px'}
       
//        >We had to print new cards every time one of our employees got a promotion, and it was simply wasteful.  With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.</Text>
//        <Text
//        textAlign={'center'}
//        color={'#DF9F71'}
//        mt={'12px'}
       
//        >DAVID BASSEY</Text>
//        <Image />
//        </Box>




// {/* 3rd Card */}
//        <Box 
//     //    p={'33px 11px'}
//        background={'#FBECDE'}
//        borderRadius={'5px'}
//        mr={{lg: '20px'}}
//        >
//        <Text
//        p={'53px 33px 33px'}
//        textAlign={'center'}
//        color={'#000'}
//        fontFamily={'Campton'}
//        fontSize={'10px'}
//        fontWeight={'400'}
//        lineHeight={'22px'}
       

//        >We had to print new cards every time one of our employees got a promotion, and it was simply wasteful.  With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.</Text>
//        <Text
//        textAlign={'center'}
//        color={'#DF9F71'}
//        mt={'12px'}
//        >DAVID BASSEY</Text>
//        <Image />
//        </Box>




//        {/*4th Card */}
//        <Box 
//     //    p={'33px 11px'}
//        background={'#FBECDE'}
//        borderRadius={'5px'}
//        mr={{lg: '20px'}}
//        >
//        <Text
//        p={'53px 33px 33px'}
//        textAlign={'center'}
//        color={'#000'}
//        fontFamily={'Campton'}
//        fontSize={'10px'}
//        fontWeight={'400'}
//        lineHeight={'22px'}
       

//        >We had to print new cards every time one of our employees got a promotion, and it was simply wasteful.  With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.</Text>
//        <Text
//        textAlign={'center'}
//        color={'#DF9F71'}
//        mt={'12px'}
//        >DAVID BASSEY</Text>
//        <Image />
//        </Box>
       






//        {/* 5th Card */}
//        <Box 
//     //    p={'33px 11px'}
//        background={'#FBECDE'}
//        borderRadius={'5px'}
//        mr={{lg: '20px'}}
//        >
//        <Text
//        p={'53px 33px 33px'}
//        textAlign={'center'}
//        color={'#000'}
//        fontFamily={'Campton'}
//        fontSize={'10px'}
//        fontWeight={'400'}
//        lineHeight={'22px'}
       

//        >We had to print new cards every time one of our employees got a promotion, and it was simply wasteful.  With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.</Text>
//        <Text
//        textAlign={'center'}
//        color={'#DF9F71'}
//        mt={'12px'}
//        >DAVID BASSEY</Text>
//        <Image />
//        </Box>


 
// </Slider>








// {/* Botton */}
//        {/* <Box
//         display={'flex'}
//         justifyContent={'center'}
//         alignItems={'center'}
//        >
//       <Button
    
//       >
//       <Image src='images/arrow-circle-right.png' 
//       />
//       </Button>
//      </Box> */}

// {/* </Flex> */}


     


//     </ Box>   
// )}       
