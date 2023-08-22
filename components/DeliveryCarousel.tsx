import React, { useState }  from 'react';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

const items = [
    {
      id: 1,
      imageUrl: '/images/Rectangle 4157.png',
    },
    {
      id: 2,
      imageUrl: '/images/Rectangle 4164.png',
    },
    {
      id: 3,
      imageUrl: '/images/Rectangle 4167.png',
    },
    {
      id: 4,
      imageUrl: '/images/Rectangle 4166.png',
    }
  ];
  



export const DeliveryCarousel = () => {
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
         mb={'6rem'}
         >
 <Text textAlign={'center'}
        color={'#DF9F71'}
        fontFamily={'MADE Outer Sans'}
        fontSize={{md: '55px', base: '30px'}}
        fontWeight={{base: 300, md: 400}}
        lineHeight={{base: '30px', md: '60px'}}
        mt={{base: '4rem'}}
        textTransform={'capitalize'}
        >Trust us to <Text color={'#120801'} as={'span'}> deliver</Text> </Text>
        <Text textAlign={'center'}
        mb={'100px'}
        textTransform={'capitalize'}
        >See our work in action. Browse through our collection of beautifully designed digital business cards for our satisfied clients.</Text>

    <Box
    display="flex"
    textAlign="center"
    alignItems={'center'}
    >
    <Button 
    onClick={handlePrev} 
    leftIcon={<Image src='images/arrow-circle-left.png'
    w={'20px'}
    
    />} 
    variant="ghost" 
    />
      <Flex
      alignItems="center" 
      justifyContent="center" 
      mb={4}
      gap={{lg: '1rem'}}
      >{items.map(item =>
        <Box 
        key={item.id}
          background={'#FBECDE'}
          borderRadius={'5px'}
           p={'0px 11px'}
           >
        <Image 
        src={item.imageUrl} 
        alt={`Carousel Item ${currentIndex}`} 
        borderRadius="full" 
        // boxSize="100px" 
        mx={4} 
        />
        </Box>
)}
      </Flex>
        <Button 
        onClick={handleNext} 
        rightIcon={<Image src='images/arrow-circle-right.png' 
        w={'20px'}
        />} 
        variant="ghost" 
        />
    </Box>
    </Box>
  )
}
