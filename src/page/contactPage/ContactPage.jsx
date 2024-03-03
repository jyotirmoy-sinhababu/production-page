import { Button, Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { FaFacebookSquare } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { MdMail } from 'react-icons/md';

const ContactPage = () => {
  return (
    <>
      <Flex flexDir={'column'} alignItems={'center'} pt={'7%'} gap={'8px'}>
        <Heading fontSize={'7xl'}>Let's work together.</Heading>
        <Heading fontSize={'6xl'} opacity={'0.8'}>
          Get in touch.
        </Heading>
        <Flex>
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
          <Button onClick={{}}>
            <MdMail />
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ContactPage;
