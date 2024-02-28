import { Flex, Box, Text, Button, Divider } from '@chakra-ui/react';

import { GiHamburgerMenu } from 'react-icons/gi';

import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

const Navbar = () => {
  return (
    <>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        h={'135px'}
        mx={'2%'}
      >
        <Flex pl={'12px'}>
          <Text fontSize={{ md: '4xl', sm: '2xl' }}>Rick's Photography</Text>
        </Flex>
        <Flex alignItems={'center'} w={'48px'}>
          <Button
            background={'transparent'}
            fontSize={{ md: '8xl', base: '2xl' }}
          >
            <GiHamburgerMenu />
          </Button>
        </Flex>
      </Flex>
      <Divider my={2} bg={'gray.10000'} />
    </>
  );
};

export default Navbar;
