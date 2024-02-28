import {
  Flex,
  Box,
  Text,
  Button,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';

import { GiHamburgerMenu } from 'react-icons/gi';

import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import { Slide } from '@chakra-ui/react';
import AboutLink from '../links/AboutLink';
import ContactMe from '../links/ContactMe';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
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
            onClick={onToggle}
            background={'transparent'}
            fontSize={{ md: '8xl', base: '2xl' }}
            zIndex={'12'}
          >
            <GiHamburgerMenu />
          </Button>
        </Flex>
      </Flex>
      <Divider my={2} bg={'gray.10000'} />
      <Slide
        direction='right'
        in={isOpen}
        style={{ zIndex: 10, width: '25vw' }}
      >
        <Box
          p='40px'
          color='white'
          mt='1'
          bg='gray.700'
          opacity={0.5}
          rounded='md'
          shadow='md'
          h={'100vh'}
        >
          <AboutLink />
          <ContactMe />
        </Box>
      </Slide>
    </>
  );
};

export default Navbar;
