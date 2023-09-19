import { useRef, useState } from "react";
import React from 'react';
import {
  Box,
  Flex,
  Button,
  Heading,
  Text,
  Image,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'



export const Customers = () => {
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


    
    const boxRef = useRef(null);




      const boxScrollLeft = (offset: number) => {
        //@ts-ignore
        boxRef.current.scrollLeft -= offset;
        if (boxIndex > 1) {
          const value = boxIndex - 1;
          setBoxIndex(value);
        }
      };


      const boxScrollRight = (offset: number) => {
        //@ts-ignore
        boxRef.current.scrollLeft += offset;
        if (6 - boxIndex > 2) {
          const value = boxIndex + 1;
          setBoxIndex(value);
        }
      };



    return (
        <Container //
        as={Stack}
        maxW="full"
        mt="72px"
        mb="100px"
      >
  <Heading
            color="#DF9F71"
            fontFamily="MADE Outer Sans Light"
            fontSize={["30px", "", "48px"]}
            fontWeight={["1000", "", "500"]}
            textAlign="center"
            mt={["0px", "", "41px"]}
          >
            What Our Customers Are Saying
          </Heading>
          <Flex width="full" justifyContent="center">
            <Box mr={["0px", "", "77px"]} mt="256px">
              <Button
                _hover={{ bg: "none" }}
                onClick={() => boxScrollLeft(346)}
                bg="white"
              >
                <Image
                  width={["35px", "", "39px"]}
                  height={["35px", "", "40px"]}
                  src={'/images/arrow-circle-left.png'}
                />
              </Button>
            </Box>

 
            <Flex
              width={["90%", "", "70%"]}
              maxWidth="1040px"
              justifyContent="space-between"
              overflow="scroll"
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
              ref={boxRef}
              scrollBehavior="smooth"
            >
              {[
                {
                    imageUrl: '/images/Ellipse 76.png',
                },
                {
                    imageUrl: '/images/Ellipse 75.png',
                },
                {
                    imageUrl: '/images/Ellipse 78.png',
                },
                {
                    imageUrl: '/images/Ellipse 76.png',
                },
                {
                    imageUrl: '/images/Ellipse 75.png',
                },
                {
                    imageUrl: '/images/Ellipse 78.png',
                },
              ].map((element, index) => {
                return (
                  <Box
                    key={index}
                    minWidth={index === boxIndex ? boxWidth : "249px"}
                    height={index === boxIndex ? boxHeight : "245px"}
                    mt={index === boxIndex ? boxMt : "164px"}
                    mr="77px"
                    bg="#FBECDE"
                  >
                    <Image
                      mt={index === boxIndex ? imgMt : "-39px"}
                      mx="auto"
                      w={index === boxIndex ? imgWidth : "66px"}
                      h={index === boxIndex ? imgHeight : "66px"}
                      src={element.imageUrl}
                    />
                    <Box
                      width="90%"
                      mx="auto"
                      mt={index === boxIndex ? textMt : "6px"}
                    >
                      <Text
                        color="#000"
                        fontFamily="Campton Light"
                        fontSize={index === boxIndex ? textFontSize : "10px"}
                        fontWeight="400"
                        lineHeight="22px"
                        textAlign="center"
                      >
                        We had to print new cards every time one of our
                        employees got a promotion, and it was simply wasteful.
                        With Hardsands, we just update the info on the portal.
                        Much easier and less expensive than ordering a new
                        batch. Plus, our customers enjoy the first tap. There is
                        a significant wow factor.
                      </Text>
                    </Box>
                    <Text
                      color="#DF9F71"
                      fontFamily="Campton Light"
                      fontSize={index === boxIndex ? textFontSize : "11px"}
                      fontWeight="400"
                      textAlign="center"
                      mt={index === boxIndex ? dTextMt : "12px"}
                    >
                      DAVID BASSEY
                    </Text>
                    <Box>
                      <Flex justifyContent="center" mt="8px">
                        {/* <Image src={StarFill.src} /> */}
                        {/* <Image src={StarFill.src} /> */}
                        {/* <Image src={StarFill.src} /> */}
                        {/* <Image src={StarFill.src} /> */}
                        {/* <Image src={StarFill.src} /> */}
                      </Flex>
                    </Box>
                  </Box>
                );
              })}
            </Flex>
            <Box mt="256px" ml={["0px", "", "77px"]}>
              <Button
                _hover={{ bg: "none" }}
                onClick={() => boxScrollRight(346)}
                bg="white"
              >
                <Image
                  width={["35px", "", "39px"]}
                  height={["35px", "", "40px"]}
                  src={'/images/arrow-circle-right.png'}
                />
              </Button>
            </Box>





            </Flex>
      </Container>   
)}       
