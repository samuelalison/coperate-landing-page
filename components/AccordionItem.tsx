import React, { useState } from 'react';
import { Box, Divider, Text } from '@chakra-ui/react';
import { PiMinusCircleThin, PiPlusCircleThin } from 'react-icons/pi';

interface AccordionItemProps {
  title: string;
  desc: string;
  open: boolean; 
  toggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, desc }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Box
        pt="24px"
        display="flex"
        justifyContent={{ base: 'start', lg: 'space-between' }}
        cursor="pointer"
        onClick={toggle}
      >
        <Text
          textAlign="start"
          color="#fff"
          pr={{ base: '0', lg: '200px' }}
        >
          {title}
        </Text>
        <Text color="#fff">
          {open ? <PiMinusCircleThin /> : <PiPlusCircleThin />}
        </Text>
      </Box>

      {open && (
        <Box textAlign="start">
          <Text
            color="rgba(255, 255, 255, 0.69)"
            fontFamily="Campton"
            fontSize="15px"
            maxW="500px"
            overflowWrap="break-word"
            fontStyle="normal"
            fontWeight={400}
            lineHeight="23px"
            textTransform="capitalize"
          >
            {desc}
          </Text>
        </Box>
      )}
      <Divider pt="24px" />
    </Box>
  );
};

export default AccordionItem;