import {
    Box,
    Flex,
    Text,
    Spacer,
    IconButton,
    Button,
    Stack,
    HStack,
    Collapse,
    Icon,
    Image,
    Link,
    Container,
    useColorModeValue,
    useDisclosure,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';


  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
     <Container maxW={'5xl'} 
     py={12}
     >
      <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          // py={{ base: 8 }}
          // px={{ base: 9 }}
          justifyContent={'space-between'}
          borderBottom={1}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          mb={{lg:'1.8rem'}}
          >

         
            <Box>
              <Image src='/images/Frame 1.png'/>
            </Box>
           

          

        
  
            <Box
            display={{ base: 'none', md: 'flex' }} 
            // ml={48}
            >
             <HStack 
        spacing={4}
        >
         <Link>Products</Link> 
         <Link>How To Use</Link> 
         <Link>Blog</Link> 
         <Link>Pricing</Link> 
        </HStack>
              </Box>


     <Box>
     <HStack
     display={{ base: 'none', md: 'flex' }} 
>
        <Link>USD</Link> 
         <Link>Amount</Link> 
        </HStack>
     </Box>





              <Box
            display={{md: 'none' }}
            >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Box>
        </Flex>
  
       

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>   
    );
  }
 
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };


  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack 
      // spacing={8} 
      onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Products',
    },
    {
      label: 'How To Use',
    },
    {
      label: 'Blog',
    },
    {
      label: 'Pricing'
    },
    {
      label: 'USD'
    },
    {
      label: 'Amount'
    },
  ];