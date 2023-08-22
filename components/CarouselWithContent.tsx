import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';


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
mb={'5rem'}
>
<Text 
        textAlign={'center'}
        color={'#DF9F71'}
        fontFamily={' MADE Outer Sans'}
        fontSize={'48px'}
        fontWeight={'500'}
        lineHeight={'normal'}
        mb={'3rem'}>
        What Our Customers Are Saying
        </Text>




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
           transition="transform 0.3s"
          transform={`translateX(-${item * 100}%)`}
           >
        <Image 
        src={item.imageUrl} 
        alt={`Carousel Item ${currentIndex}`} 
        borderRadius="full" 
        boxSize="100px" 
        mx={4} 
        />
        <Text
        textAlign={'center'}
        color={'#000'}
        fontFamily={'Campton'}
        fontSize={'10px'}
        fontWeight={'400'}
        lineHeight={'22px'}
        >
          {item.content}
          </Text>
        <Text>{item.name}</Text>
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
  );
};

export default CarouselWithContent;


{/* <Box  background={'#FBECDE'}
borderRadius={'5px'}
p={'0px 11px'}>
 <Image src={currentItem.imageUrl} alt={`Carousel Item ${currentIndex}`} borderRadius="full" boxSize="100px" mx={4} />
 <Text
 textAlign={'center'}
 color={'#000'}
 fontFamily={'Campton'}
 fontSize={'10px'}
 fontWeight={'400'}
 lineHeight={'22px'}
 >{currentItem.content}</Text>
 <Text>{currentItem.name}</Text>
 </Box> */}



{/* <Box  */}
//        background={'#FBECDE'}
//        borderRadius={'5px'}
//        p={'0px 11px'}
//        >
//        <Text 
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
    //    </Box>






//     'use client'

// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Stack,
//   Container,
//   Avatar,
//   useColorModeValue,
// } from '@chakra-ui/react'

// interface Props {
//   children: React.ReactNode
// }

// const Testimonial = (props: Props) => {
//   const { children } = props

//   return <Box>{children}</Box>
// }

// const TestimonialContent = (props: Props) => {
//   const { children } = props

//   return (
//     <Stack
//       bg={useColorModeValue('white', 'gray.800')}
//       boxShadow={'lg'}
//       p={8}
//       rounded={'xl'}
//       align={'center'}
//       pos={'relative'}
//       _after={{
//         content: `""`,
//         w: 0,
//         h: 0,
//         borderLeft: 'solid transparent',
//         borderLeftWidth: 16,
//         borderRight: 'solid transparent',
//         borderRightWidth: 16,
//         borderTop: 'solid',
//         borderTopWidth: 16,
//         borderTopColor: useColorModeValue('white', 'gray.800'),
//         pos: 'absolute',
//         bottom: '-16px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//       }}>
//       {children}
//     </Stack>
//   )
// }

// const TestimonialHeading = (props: Props) => {
//   const { children } = props

//   return (
//     <Heading as={'h3'} fontSize={'xl'}>
//       {children}
//     </Heading>
//   )
// }

// const TestimonialText = (props: Props) => {
//   const { children } = props

//   return (
//     <Text
//       textAlign={'center'}
//       color={useColorModeValue('gray.600', 'gray.400')}
//       fontSize={'sm'}>
//       {children}
//     </Text>
//   )
// }

// const TestimonialAvatar = ({
//   src,
//   name,
//   title,
// }: {
//   src: string
//   name: string
//   title: string
// }) => {
//   return (
//     <Flex align={'center'} mt={8} direction={'column'}>
//       <Avatar src={src} mb={2} />
//       <Stack spacing={-1} align={'center'}>
//         <Text fontWeight={600}>{name}</Text>
//         <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
//           {title}
//         </Text>
//       </Stack>
//     </Flex>
//   )
// }

// export default function WithSpeechBubbles() {
//   return (
//     <Box bg={useColorModeValue('gray.100', 'gray.700')}>
//       <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
//         <Stack spacing={0} align={'center'}>
//           <Heading>Our Clients Speak</Heading>
//           <Text>We have been working with clients around the world</Text>
//         </Stack>
//         <Stack
//           direction={{ base: 'column', md: 'row' }}
//           spacing={{ base: 10, md: 4, lg: 10 }}>
//           <Testimonial>
//             <TestimonialContent>
//               <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
//               <TestimonialText>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
//                 imperdiet nibh lectus feugiat nunc sem.
//               </TestimonialText>
//             </TestimonialContent>
//             <TestimonialAvatar
//               src={
//                 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
//               }
//               name={'Jane Cooper'}
//               title={'CEO at ABC Corporation'}
//             />
//           </Testimonial>
//           <Testimonial>
//             <TestimonialContent>
//               <TestimonialHeading>Intuitive Design</TestimonialHeading>
//               <TestimonialText>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
//                 imperdiet nibh lectus feugiat nunc sem.
//               </TestimonialText>
//             </TestimonialContent>
//             <TestimonialAvatar
//               src={
//                 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
//               }
//               name={'Jane Cooper'}
//               title={'CEO at ABC Corporation'}
//             />
//           </Testimonial>
//           <Testimonial>
//             <TestimonialContent>
//               <TestimonialHeading>Mindblowing Service</TestimonialHeading>
//               <TestimonialText>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
//                 imperdiet nibh lectus feugiat nunc sem.
//               </TestimonialText>
//             </TestimonialContent>
//             <TestimonialAvatar
//               src={
//                 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
//               }
//               name={'Jane Cooper'}
//               title={'CEO at ABC Corporation'}
//             />
//           </Testimonial>
//         </Stack>
//       </Container>
//     </Box>
//   )
// }