import { Tooltip, Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { IoMdContact } from 'react-icons/io';

const ContactMe = () => {
  return (
    <Tooltip
      hasArrow
      label={'Contact me'}
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
        <IoMdContact size={25} />
        <Box display={{ base: 'none', md: 'block' }}>Contact me</Box>
      </Link>
    </Tooltip>
  );
};

export default ContactMe;
