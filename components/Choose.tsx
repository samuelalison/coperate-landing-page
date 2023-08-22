import { Container, Text, Image } from '@chakra-ui/react'
import React from 'react'

export const Choose = () => {
  return (
    <Container maxW='3xl'>
        <Text 
        as={'h4'} 
        fontSize={{base: '3xl', md: '48px'}}
        fontWeight={500}
        lineHeight={'34px'}
        color={'#DF9F71'}
        mt={{base: '4rem', lg: '110px' }}
        mb={{base: '4rem', lg: '110px' , }}
        textAlign={'center'}
        >
         Why Choose Hardsands?
        </Text>

        <Image src='images/Rectangle 4054.png' />
<Text
color={'#000'}
lineHeight={'34px'}
fontWeight={300}
fontStyle={'normal'}
mt={{ base: '2rem', sm: '2rem', md: '49px'}}
fontSize={{base: '16px', md: '20px'}}
>
Our digital business cards offer a modern solution to traditional paper cards, with a sleek and minimalist design that's perfect for the digital age. See why our clients love our innovative solution and how it can help you stand out in a crowded marketplace. Watch the video now to see how our solution can take your professional image to the next level.
</Text>
</Container>
  )
}
