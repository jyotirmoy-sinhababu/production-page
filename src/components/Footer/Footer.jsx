import { Divider, Flex, Link } from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Divider />
      <Flex justifyContent={'center'} mt={'4%'}>
        <Link
          as={RouterLink}
          to={
            'https://www.linkedin.com/in/jyotirmoy-sinhababu-64b9a7212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
          }
          fontSize={'22px'}
          color={'white'}
          _hover={{ color: 'red' }}
        >
          Created by Jyotirmoy.
        </Link>
      </Flex>
    </>
  );
};

export default Footer;
