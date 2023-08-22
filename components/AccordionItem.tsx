import React from 'react';
import { Collapse } from 'react-collapse';
import { Box, Divider, Text } from '@chakra-ui/react'
import {PiMinusCircleThin, PiPlusCircleThin} from "react-icons/pi"

interface MyComponentProps {
    open: boolean;
    toggle: () => void;
    title: string;
    desc: string;
  }

const AccordionItem: React.FC<MyComponentProps> = ({ open, toggle, title, desc }) => {
  return (
    <Box>
    <Box 
    pt={'24px'}
    display={'flex'}
    justifyContent={'space-between'}
    justifyItems={{base: 'start', lg: 'center'}}
    cursor={'pointer'}
    onClick={toggle}
    >
     <Text
     textAlign={'start'}
     color={'#fff'}
     pr={{base: '0', lg: '200px'}}
     >{title}</Text> 
     <Text color={'#fff'} >
        {open ? <PiMinusCircleThin /> : <PiPlusCircleThin /> }
        </Text>
    </Box>
 

    <Collapse isOpened={open}>
        <Box
        textAlign={'start'}
        >
          <Text
          color={'rgba(255, 255, 255, 0.69)'}
          fontFamily={'Campton'}
          fontSize={'15px'}
          maxW={'500px'}
          overflowWrap={'break-word'}
          fontStyle={'normal'}
          fontWeight={400}
          lineHeight={'23px'}
          textTransform={'capitalize'}
          >{desc}</Text>  

        </Box>
        </ Collapse>
          <Divider
          pt={'24px'}
          />
    </Box>
  )
}

export default AccordionItem