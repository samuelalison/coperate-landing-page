import React, {useRef, useState }  from 'react';
import { Box, Container, Stack, Button, Flex, Image, Text, HStack, chakra } from '@chakra-ui/react';

  
  

export const DeliveryCarousel = () => {
  const [boxIndex, setBoxIndex] = useState(1);

  const boxWidth = "309px";
  const boxHeight = "303px";
  const boxMt = "135px";
  const imgWidth = "100px";
  const imgHeight = "100px";
  const imgMt = "-59px";
  const textMt = "12px";
  const dTextMt = "31px";
  const textFontSize = "13px";


  
  const cardRef = useRef(null);

  const cardScroll = (offset: number) => {
    //@ts-ignore
    cardRef.current.scrollLeft += offset;
  };


    

  return (
    <Container
    as={Stack}
    maxW="full"
    mt={["50px", "", "119px"]}
  >
    <Text
      fontFamily="MADE Outer Sans Light"
      fontSize={["34px", "", "48px"]}
      fontWeight={["1000", "", "500"]}
      textAlign="center"
      mt={["0px", "", "69px"]}
    >
      <Text as="span" color="#DF9F71">
        {"Trust Us To "}
      </Text>
      <Text as="span" color="#000">
        Deliver
      </Text>
    </Text>
    <Box width={["100%", "", "63%"]} mx="auto">
      <Text
        fontFamily="Campton Light"
        fontSize={["14px", "", "15px"]}
        fontWeight="300"
        textAlign="center"
        lineHeight="30px"
        textTransform="capitalize"
      >
        See our work in action. Browse through our collection of
        beautifully designed digital business cards for our satisfied
        clients.
      </Text>
    </Box>

    <Flex mt={["50px", "", "110px"]} width="full" justifyContent="center">
      <Box mt="98px">
        <Button
          _hover={{ bg: "none" }}
          onClick={() => cardScroll(-386)}
          bg="white"
        >
          <Image width="39px" height="40px" src={'images/arrow-circle-left.png'} />
        </Button>
      </Box>
      <Flex
        width="81%"
        pl="2%"
        justifyContent="space-between"
        overflow="scroll"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        ref={cardRef}
        scrollBehavior="smooth"
      >
        {[
          {
            img: '/images/Rectangle 4157.png',
          },
          {
            img: '/images/Rectangle 4164.png',
          },
          {
            img:'/images/Rectangle 4167.png',
          },
          {
            img: '/images/Rectangle 4164.png',
          },
          {
            img: '/images/Rectangle 4157.png',
          },
          {
            img: '/images/Rectangle 4164.png',
          },
        ].map((item, index) => {
          return (
            <Image
              key={index}
              width="356px"
              height="235px"
              mr="2%"
              src={item.img}
            />
          );
        })}
      </Flex>
      <Box mt="98px">
        <Button
          _hover={{ bg: "none" }}
          onClick={() => cardScroll(386)}
          bg="white"
        >
          <Image width="39px" height="40px" src={'images/arrow-circle-right.png'} />
        </Button>
      </Box>
    </Flex>

    <Box
      w={["96%", "", "258px"]}
      h="63px"
      mt="77px"
      mb={["30px", "", "56px"]}
      mx="auto"
    >
       <Button
                background={'#DF9F71'}
                variant={'none'}
                >
                     <Text
                     color={'#FFF'}
                     fontSize={'14px'}
                     fontFamily={'MADE Outer Sans'}
                     fontWeight={300}
                     lineHeight={'normal'}
                     p={{lg: '6rem 6rem'}}
                     >STAR NOW</Text>
                </Button>
    </Box>
  </Container>
  )
}






