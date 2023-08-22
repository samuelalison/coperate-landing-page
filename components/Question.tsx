import React from 'react';
import { useState } from 'react' 
import { Box, Text, Input, Button, Image, InputGroup, InputLeftElement, Flex} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import AccordionItem from './AccordionItem';


interface FaqItem {
    title: string;
    desc: string;
  }

export const Question = () => {
    const [open, setOpen] = useState(false); 

    const toggle = (index) => {
        if (open === index) {
          return setOpen(false);
        }
    
        setOpen(index);
      };

    const data: FaqItem[] = [
        {
            title: "What is hardsands card?",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
            title: "How do hardsands cards and Epoxy work?",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
            title: "Where should I place my hardsand Epoxy?",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
            title: "Can I get a hardsands card with my own logo/branding?",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
            title: "What surfaces may hardsand Epoxy stick to?",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
            title: "Is there a monthly fee for using hardsands card or hardsands Epoxy?",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
            title: "Is it necessary for the receiver to use a hardsand product or an app to receive my info?",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
    ]   
  return (
    <Box
    background={'#000'}
    pb={'60px'}
    mt={'5rem'}
>


<Flex 
justifyContent="center" 
alignItems="center"
textAlign={'center'}
flexDirection={'column'}
px={'1rem'}

>
        <Box 
        mt={{base:'40px', lg:'80px'}}
        >
           <Text
           mb={'8px'}
            color={'#FFF'}
            fontFamily={'MADE Outer Sans'}
            fontSize={'16px'}
            fontStyle={'normal'}
            fontWeight={300}
            lineHeight={'34px'}
            textTransform={'capitalize'}
            >FAQS</Text>
            <Text
            mb={'12px'}
            color={'#DF9F71'}
            fontFamily={'MADE Outer Sans'}
            fontSize={'35px'}
            fontStyle={'normal'}
            fontWeight={300}
            lineHeight={'34px'}
            textTransform={'capitalize'}
            >Frequently asked questions</Text>
            <Text
            mb={'12px'}
            color={'rgba(255, 255, 255, 0.72)'}
            fontFamily={'Campton'}
            fontSize={'20px'}
            fontStyle={'normal'}
            fontWeight={400}
            lineHeight={'34px'}
            textTransform={'capitalize'}
            >have questions? We’re here to help</Text>
        </Box>


       <Box 
       mb={{base: '40px', lg:'80px'}}
       >
       <InputGroup width="300px">
        <Input
          type="text"
          placeholder="Search"
          borderRadius="1px"
          borderColor={'#FFFFFF'}
          color={'#FFFFFF'}
          pl="3rem" // Space for the search icon
        />
        <InputLeftElement width="4rem">
          <SearchIcon color="gray.500" />
        </InputLeftElement>
      </InputGroup>
       </Box>



       <Box 
       >
        {data.map((data, index)  => {
          return (<AccordionItem 
          key={index} 
          // open={index === open} 
          title={data.title}
          desc={data.desc}
          toggle={() => toggle(index)}
          />
          );
        })}
       </Box>


       <Box
       background={'rgba(255, 255, 255, 0.07)'}
       mt={{base: '40px', lg: '100px'}}
       >
        <Flex
        justifyContent={'center'}
        p={{lg: '1.5rem'}}
        gap={{lg: '1rem'}}
        alignItems={'center'}
        flexDirection={{base: 'column', lg:'row' }}
        >
            <Box
            textAlign={{base: 'center', lg:'start'}}
            >
                <Text
                color={'#DF9F71'}
                textTransform={'capitalize'}
                >Still have questions?</Text>
                <Text
                color={'#FFF'}
                fontFamily={'Campton'}
                fontSize={'16px'}
                fontWeight={400}
                lineHeight={'34px'}
                >Can’t find the answers you’re looking for? Contact us via our Hardsands Technology Customer Support</Text>
            </Box>

            <Box
           
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
                     >Get in touch</Text>
                </Button>
            </Box>
        </Flex>

       </Box>
      </Flex>

    </Box>
  )
}
