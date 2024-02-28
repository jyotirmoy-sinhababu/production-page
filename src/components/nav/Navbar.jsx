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

import { RxCross1 } from 'react-icons/rx';

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
            color={!isOpen ? 'black' : 'white'}
            _hover={{ color: 'red.600', backgroundColor: 'white' }}
          >
            {!isOpen ? <GiHamburgerMenu /> : <RxCross1 />}
          </Button>
        </Flex>
      </Flex>
      <Divider my={2} bg={'gray.10000'} />
      <Slide
        direction='right'
        in={isOpen}
        style={{ zIndex: 10, width: '25vw' }}
      >
        <Flex
          p='40px'
          color='white'
          mt='1'
          bg='gray.700'
          rounded='md'
          shadow='md'
          pt={'30%'}
          h={'50vh'}
          flexDir={'column'}
          gap={'15%'}
        >
          <AboutLink />
          <ContactMe />
        </Flex>
      </Slide>
    </>
  );
};

export default Navbar;
