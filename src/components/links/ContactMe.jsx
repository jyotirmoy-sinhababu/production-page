import { Link, Tooltip, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { IoCall } from 'react-icons/io5';

const ContactMe = () => {
  return (
    <>
      {' '}
      <Tooltip
        hasArrow
        label={'Contact me'}
        placement='right'
        ml={1}
        openDelay={500}
        display={'block'}
      >
        <Link
          display={'flex'}
          to={'/'}
          as={RouterLink}
          alignItems={'center'}
          gap={4}
          _hover={{ bg: 'whiteAlpha.400' }}
        >
          <IoCall size={25} />
        </Link>
      </Tooltip>
    </>
  );
};

export default ContactMe;
