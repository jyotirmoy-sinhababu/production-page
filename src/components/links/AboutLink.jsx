import { Link, Tooltip, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { IoMdContact } from 'react-icons/io';

const AboutLink = () => {
  return (
    <>
      <Tooltip
        hasArrow
        label={'About me'}
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
          <IoMdContact size={25} />
        </Link>
      </Tooltip>
    </>
  );
};

export default AboutLink;
