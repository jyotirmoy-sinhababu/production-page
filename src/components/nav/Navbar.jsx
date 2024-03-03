import { Flex, Text, Divider, Box } from '@chakra-ui/react';

import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';

import AboutLink from '../links/AboutLink';
import ContactMe from '../links/ContactMe';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        h={{ base: '80px', md: '100px' }}
        mx={'2%'}
      >
        <Flex
          pl={'12px'}
          flexDir={'column'}
          onClick={() => {
            navigate('/');
          }}
        >
          <Text
            fontSize={{ md: '2xl', sm: 'xl' }}
            fontWeight={'400'}
            mb={'-8%'}
          >
            Rick's
          </Text>
          <Box
            backgroundClip={'text'}
            bgGradient='linear(to-l, blue.400, red.800)'
            fontWeight={'800'}
          >
            <Text fontSize={{ md: '4xl', sm: '2xl' }}> Photography</Text>
          </Box>
        </Flex>
        <Flex
          w={'80px'}
          justifyContent={'space-between'}
          display={{ base: 'none', md: 'flex' }}
        >
          <AboutLink />
          <ContactMe />
        </Flex>
      </Flex>

      <Divider my={2} bg={'gray.10000'} />
      <Flex
        alignItems={'center'}
        w={'100vw'}
        pr={'4%'}
        justifyContent={'flex-end'}
        display={{ base: 'flex', md: 'none' }}
        gap={'4%'}
        h={'38px'}
      >
        <AboutLink />
        <ContactMe />
      </Flex>
      <Divider my={2} bg={'gray.10000'} />
    </>
  );
};

export default Navbar;
