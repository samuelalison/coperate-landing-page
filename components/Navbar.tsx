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
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
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
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 8 }}
          px={{ base: 9 }}
          borderBottom={1}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          mb={{lg:'1.8rem'}}
          
          >
          <Flex  justify={{ base: 'center', md: 'start' }}
          justifyContent={{lg: 'space-between'}}
          >
            <Box>
              <Image src='/images/Frame 1.png'/>
            </Box>
            <Spacer />

          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: 2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>

        
  
            <Flex display={{ base: 'none', md: 'flex' }} 
            ml={48}
            >
              <DesktopNav />
            </Flex>
          </Flex>

        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  


  const DesktopNav = () => {
    const linkColor = useColorModeValue('black.800', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    // const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} 
      // spacing={'200px'}
      >
       


        <HStack 
        spacing={10}
        >
         <Link>Products</Link> 
         <Link>How To Use</Link> 
         <Link>Blog</Link> 
         <Link>Pricing</Link> 
        </HStack>

<Spacer />

        <HStack
        spacing={10}
        ml={{lg: 48, md: 10}}
>
        <Link>USD</Link> 
         <Link>Amount</Link> 
        </HStack>
      </Stack>
    );
  };
  
 
  
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
      <Stack spacing={4} onClick={children && onToggle}>
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


  // const DesktopNav = () => {
  //   const linkColor = useColorModeValue('black.800', 'gray.200');
  //   const linkHoverColor = useColorModeValue('gray.800', 'white');
  //   const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
  //   return (
  //     <Stack direction={'row'} spacing={14}>
  //       {NAV_ITEMS.map((navItem) => (
  //         <Box key={navItem.label}>
  //           <Popover trigger={'hover'} placement={'bottom-start'}>
  //             <PopoverTrigger>
  //               <Link
                 
  //                 p={2}
  //                 href={navItem.href ?? '#'}
  //                 fontFamily={'Campton'}
  //                 fontSize={'md'}
  //                 fontWeight={500}
  //                 color={linkColor}
  //                 _hover={{
  //                   textDecoration: 'none',
  //                   color: linkHoverColor,
  //                 }}>
  //                 {navItem.label}
  //               </Link>
  //             </PopoverTrigger>
  
  //             {navItem.children && (
  //               <PopoverContent
  //                 border={0}
  //                 boxShadow={'xl'}
  //                 bg={popoverContentBgColor}
  //                 p={4}
  //                 rounded={'xl'}
  //                 minW={'sm'}>
  //                 <Stack>
  //                   {navItem.children.map((child) => (
  //                     <DesktopSubNav key={child.label} {...child} />
  //                   ))}
  //                 </Stack>
  //               </PopoverContent>
  //             )}
  //           </Popover>
  //         </Box>
  //       ))}
  //     </Stack>
  //   );
  // };






  // const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  //   return (
  //     <Link
  //       href={href}
  //       role={'group'}
  //       display={'block'}
  //       p={2}
  //       rounded={'md'}
  //       _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
  //       <Stack direction={'row'} align={'center'}>
  //         <Box>
  //           <Text
  //             transition={'all .3s ease'}
  //             _groupHover={{ color: 'pink.400' }}
  //             fontWeight={500}>
  //             {label}
  //           </Text>
  //           <Text fontSize={'sm'}>{subLabel}</Text>
  //         </Box>
  //         <Flex
  //           transition={'all .3s ease'}
  //           transform={'translateX(-10px)'}
  //           opacity={0}
  //           _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
  //           justify={'flex-end'}
  //           align={'center'}
  //           flex={1}>
  //           <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
  //         </Flex>
  //       </Stack>
  //     </Link>
  //   );
  // };



 
 
  
  
  
  