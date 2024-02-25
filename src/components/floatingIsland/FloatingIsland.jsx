import { Button, Flex } from '@chakra-ui/react';

import { FaFacebookSquare } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';

const FloatingIsland = () => {
  return (
    <Flex
      w={'180px'}
      justifyContent={'flex-start'}
      mt={'15px'}
      gap={'19%'}
      h={'62px'}
      alignItems={'center'}
      borderRadius={'12px'}
      backgroundColor={'gray.100'}
    >
      <Button
        fontSize={'42px'}
        background={'transparent'}
        _hover={{ color: 'blue' }}
      >
        <FaFacebookSquare />
      </Button>
      <Button
        fontSize={'42px'}
        background={'transparent'}
        _hover={{ color: 'red' }}
      >
        <SiInstagram />
      </Button>
    </Flex>
  );
};

export default FloatingIsland;
