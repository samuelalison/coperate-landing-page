import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const Socials = () => {
  return (
<Box
mt={'100px'}
m={{lg: '0 18px'}}
>


<Flex
flexDirection={{base: 'column', lg: 'row'}}
background={'#FEF8F3'}
justifyContent={{lg: 'center'}}
alignItems={{lg: 'center'}}
p={{lg: '47px 78px'}}
>

<Box
p={{base: '18px', lg: 0}}
>
<Image src='images/worldwide.png' />
<Text
p={'18px 0'}
color={'rgba(0, 0, 0, 0.60)'}
fontFamily={'Campton'}
fontSize={'12px'}
fontWeight={400}
lineHeight={'22px'}
textTransform={'capitalize'}
>we have shipped our cards to 20+ Countries around the world</Text>
<Image src='images/10+.png' />
</Box>

<Box 
w={{base:'96%', lg: 0}}
h={{base:'1px', lg: 0}}
background={'#D9D9D9'}
/>

<Box 
w={{base:0, md:'1px'}}  
height={{base: 0, lg:'160px'}}
background={'#D9D9D9'}
m={{lg: '0 80px 0 60px'}}
/>

<Box
p={{base: '18px', lg: 0}}
>
<Image src='images/profilecircle.png' />
<Text
p={{base: '18px 0'}}
color={'rgba(0, 0, 0, 0.60)'}
fontFamily={'Campton'}
fontSize={'12px'}
fontWeight={400}
lineHeight={'22px'}
textTransform={'capitalize'}
>Clients have receieved  their cards and have started sharing it</Text>
<Image src='images/3K+.png' />
</Box>

<Box 
w={{base:'96%', lg: 0}}
h={{base:'1px', lg: 0}}
background={'#D9D9D9'}
/>


<Box 
w={{base:0, md:'1px'}}  
height={{base: 0, lg:'160px'}}
background={'#D9D9D9'}
m={{lg: '0 80px 0 60px'}}
/>


<Box
p={{base: '18px', lg: 0}}
>
<Image src='images/personalcard.png' />
<Text
p={{base: '18px 0'}}
color={'rgba(0, 0, 0, 0.60)'}
fontFamily={'Campton'}
fontSize={'12px'}
fontWeight={400}
lineHeight={'22px'}
textTransform={'capitalize'}
>The number of times they have saved a new default action</Text>
<Image src='images/30K+.png' />
</Box>


<Box 
w={{base:'96%', lg: 0}}
h={{base:'1px', lg: 0}}
background={'#D9D9D9'}
/>



<Box 
w={{base:0, md:'1px'}}  
height={{base: 0, lg:'160px'}}
background={'#D9D9D9'}
m={{lg: '0 80px 0 60px'}}
/>

<Box
p={{base: '18px', lg: 0}}
>
<Image src='images/profile2user.png' />
<Text
p={{base: '18px 0'}}
color={'rgba(0, 0, 0, 0.60)'}
fontFamily={'Campton'}
fontSize={'12px'}
fontWeight={400}
lineHeight={'22px'}
textTransform={'capitalize'}
>The number of times our clients have shared their cards with connections</Text>
<Image src='images/5K+.png' />
</Box>

  </Flex>
</Box>
  )
}

export default Socials