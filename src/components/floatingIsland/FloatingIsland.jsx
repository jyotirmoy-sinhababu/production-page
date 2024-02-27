import { Link, Flex } from '@chakra-ui/react';

import { FaFacebookSquare } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';

import { Link as RouterLink } from 'react-router-dom';

const FloatingIsland = () => {
  return (
    <Flex
      w={'180px'}
      justifyContent={'space-around'}
      mt={'15px'}
      h={'62px'}
      alignItems={'center'}
      borderRadius={'12px'}
      backgroundColor={'gray.400'}
    >
      <Link
        fontSize={'42px'}
        background={'transparent'}
        _hover={{ color: 'blue' }}
        as={RouterLink}
        to={'https://www.facebook.com/rick.das.92167?mibextid=PtKPJ9'}
      >
        <FaFacebookSquare />
      </Link>
      <Link
        fontSize={'42px'}
        background={'transparent'}
        _hover={{ color: 'red' }}
        as={RouterLink}
        to={
          'https://www.instagram.com/rickdasphotography?igsh=Znd6MGNvYTRkdjhn&utm_source=qr'
        }
      >
        <SiInstagram />
      </Link>
    </Flex>
  );
};

export default FloatingIsland;
