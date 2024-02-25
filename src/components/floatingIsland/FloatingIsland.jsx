import { Button, Flex } from '@chakra-ui/react';

import { FaFacebookSquare } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';

const FloatingIsland = () => {
  return (
    <Flex w={'180px'} justifyContent={'flex-start'} mt={'15px'} gap={'19%'}>
      <Button fontSize={'42px'} background={'transparent'}>
        <FaFacebookSquare />
      </Button>
      <Button fontSize={'42px'} background={'transparent'}>
        <SiInstagram />
      </Button>
    </Flex>
  );
};

export default FloatingIsland;
