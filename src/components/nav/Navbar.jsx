import { Flex, Text, Divider } from '@chakra-ui/react';

import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import AboutLink from '../links/AboutLink';
import ContactMe from '../links/ContactMe';

const Navbar = () => {
  return (
    <>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        h={{ base: '100px', md: '90px' }}
        mx={'2%'}
      >
        <Flex pl={'12px'}>
          <Text fontSize={{ md: '4xl', sm: '2xl' }}>Rick's Photography</Text>
        </Flex>
        <Flex alignItems={'center'} w={'208px'} justifyContent={'space-around'}>
          <AboutLink />
          <ContactMe />
        </Flex>
      </Flex>
      <Divider my={2} bg={'gray.10000'} />
    </>
  );
};

export default Navbar;
