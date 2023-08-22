'use client'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import React, { useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { EffectCoverflow } from 'swiper';

interface CarouselItem {
    id: number;
    imageUrl: string;
    content: string;
    name: string;
  }
  
  interface CarouselProps {
    items: CarouselItem[];
  }


  const CarouselWithContent: React.FC<CarouselProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const currentItem = items[currentIndex];
    return (
     <Box 
     
     >
        <Box>
        <Text 
        textAlign={'center'}
        color={'#DF9F71'}
        fontFamily={' MADE Outer Sans'}
        fontSize={'48px'}
        fontWeight={'500'}
        lineHeight={'normal'}
        mb={'3rem'}        >What Our Customers Are Saying</Text>
     </Box>



   <Box 
   p={{lg: '0 16rem'}}
   >
      <Swiper 
       effect={'coverflow'}
    //    grabCursor={true}
       scrollbar={{ draggable: true }}
       centeredSlides={true}
      

    //    loop={true}
       slidesPerView={3}
       spaceBetween={10}
       coverflowEffect={{
           rotate: 0,
           stretch: 0,
           depth: 100,
           modifier: 2.5,
        }}
    //   pagination={{ el: '.swiper-pagination', clickable: true }}
    //   modules={[EffectCoverflow]}
      >

<Flex>
        <Button onClick={handlePrev} leftIcon={<Image src='images/arrow-circle-left.png' />} variant="ghost" />
        <SwiperSlide>
       <Box 
       background={'#FBECDE'}
       borderRadius={'5px'}
       p={'0px 11px'}
       maxW={'500px'}
        height="300px"
        transition="all 200ms linear"
        transform="scale(0.8)"
        _hover={{
            transform: 'scale(1)',
        }}
       >
      <Box>
        <Image src='images/Ellipse 75.png' 
        borderRadius="full" boxSize="100px" mx={4}
        /> 
      </Box>
       <Text 
       textAlign={'center'}
       color={'#000'}
       fontFamily={'Campton'}
       fontSize={'10px'}
       fontWeight={'400'}
       lineHeight={'22px'}
       >We had to print new cards every time one of our employees got a promotion, and it was simply wasteful.  With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.</Text>
       <Text
       textAlign={'center'}
       color={'#DF9F71'}
       mt={'12px'}
       >DAVID BASSEY</Text>
       <Image />
       </Box> 
        </SwiperSlide>

        <SwiperSlide
            // width={"37rem"}
            // height={"42rem"}
            // position={'relative'}
        >
       <Box 
       background={'#FBECDE'}
       borderRadius={'5px'}
       p={'0px 11px'}
       maxW={'500px'}
       height="300px"
        transition="all 200ms linear"
        transform="scale(0.8)"
        _hover={{
            transform: 'scale(1)',
        }}
       >
    <Box>
        <Image src='images/Ellipse 76.png' 
        borderRadius="full" boxSize="100px" mx={4}
        /> 
      </Box>
       <Text 
       textAlign={'center'}
       color={'#000'}
       fontFamily={'Campton'}
       fontSize={'10px'}
       fontWeight={'400'}
       lineHeight={'22px'}
       >We had to print new cards every time one of our employees got a promotion, and it was simply wasteful.  With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.</Text>
       <Text
       textAlign={'center'}
       color={'#DF9F71'}
       mt={'12px'}
       >DAVID BASSEY</Text>
       <Image />
       </Box> 
        </SwiperSlide>



        
        <SwiperSlide>
       <Box 
       background={'#FBECDE'}
       borderRadius={'5px'}
       p={'0px 11px'}
       maxW={'500px'}
       height="300px"
        transition="all 200ms linear"
        transform="scale(0.8)"
        _hover={{
            transform: 'scale(1)',
        }}
       >
    <Box>
        <Image src='images/Ellipse 78.png' 
        borderRadius="full" boxSize="100px" mx={4}
        /> 
      </Box>
       <Text 
       textAlign={'center'}
       color={'#000'}
       fontFamily={'Campton'}
       fontSize={'10px'}
       fontWeight={'400'}
       lineHeight={'22px'}
       >We had to print new cards every time one of our employees got a promotion, and it was simply wasteful.  With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.</Text>
       <Text
       textAlign={'center'}
       color={'#DF9F71'}
       mt={'12px'}
       >DAVID BASSEY</Text>
       <Image />
       </Box> 
        </SwiperSlide>


        
        <SwiperSlide
     
        >
       <Box 
       background={'#FBECDE'}
       borderRadius={'5px'}
       p={'0px 11px'}
       maxW={'500px'}
       height="300px"
        transition="all 200ms linear"
        transform="scale(0.8)"
        _hover={{
            transform: 'scale(1)',
        }}
       >
    <Box>
        <Image src='images/Ellipse 75.png' 
        borderRadius="full" boxSize="100px" mx={4}
        /> 
      </Box> 
       <Text 
       textAlign={'center'}
       color={'#000'}
       fontFamily={'Campton'}
       fontSize={'10px'}
       fontWeight={'400'}
       lineHeight={'22px'}
       >We had to print new cards every time one of our employees got a promotion, and it was simply wasteful.  With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.</Text>
       <Text
       textAlign={'center'}
       color={'#DF9F71'}
       mt={'12px'}
       >DAVID BASSEY</Text>
       <Image />
       </Box> 
        </SwiperSlide>


        
        <SwiperSlide
     
        >
       <Box 
       background={'#FBECDE'}
       borderRadius={'5px'}
       p={'0px 11px'}
       maxW={'500px'}
       height="300px"
        transition="all 200ms linear"
        transform="scale(0.8)"
        _hover={{
            transform: 'scale(1)',
        }}
       >
    <Box>
        <Image src='images/Ellipse 76.png' 
        borderRadius="full" boxSize="100px" mx={4}
        /> 
      </Box> 
       <Text 
       textAlign={'center'}
       color={'#000'}
       fontFamily={'Campton'}
       fontSize={'10px'}
       fontWeight={'400'}
       lineHeight={'22px'}
       >We had to print new cards every time one of our employees got a promotion, and it was simply wasteful.  With Hardsands, we just update the info on the portal. Much easier and less expensive than ordering a new batch. Plus, our customers enjoy the first tap. There is a significant wow factor.</Text>
       <Text
       textAlign={'center'}
       color={'#DF9F71'}
       mt={'12px'}
       >DAVID BASSEY</Text>
       <Image />
       </Box> 
        </SwiperSlide>





      </Flex>
      </Swiper>
     </Box>
     </Box>
    );
};


export default CarouselWithContent;