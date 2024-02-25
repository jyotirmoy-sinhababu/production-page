import { Flex, Box, Text, Button, Divider } from '@chakra-ui/react';

import { FaBurger } from 'react-icons/fa6';

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
          <Text fontSize={{ base: '3xl', sm: 'xl' }}>Rick's Photography</Text>
        </Flex>
        <Flex alignItems={'center'} w={'48px'}>
          <Button background={'transparent'} fontSize={'41px'}>
            <FaBurger />
          </Button>
        </Flex>
      </Flex>
      <Divider my={2} bg={'gray.10000'} />
    </>
  );
};

export default Navbar;
