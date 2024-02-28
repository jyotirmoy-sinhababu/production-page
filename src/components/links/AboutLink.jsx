import { Tooltip, Box, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { FcAbout } from 'react-icons/fc';

const AboutLink = () => {
  return (
    <>
      <Tooltip
        hasArrow
        label={'About me'}
        placement='right'
        ml={1}
        openDelay={500}
        display={{ base: 'block', md: 'none' }}
      >
        <Link
          display={'flex'}
          to={'/'}
          as={RouterLink}
          alignItems={'center'}
          gap={4}
          _hover={{ bg: 'whiteAlpha.400' }}
        >
          <FcAbout size={25} />
          <Box display={{ base: 'none', md: 'block' }}>
            <Text color={'whiteAlpha.900'}>About me</Text>
          </Box>
        </Link>
      </Tooltip>
    </>
  );
};

export default AboutLink;
