import { Button, Flex, Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { FaFacebookSquare, FaMobileAlt } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';
import { MdMail } from 'react-icons/md';

const ContactPage = () => {
  const copyFunction = async (data) => {
    try {
      await navigator.clipboard.writeText(data);
      alert('copied');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Flex
        flexDir={'column'}
        alignItems={'center'}
        justifyContent={{ base: 'space-between', md: 'center' }}
        mt={{ base: '12%', md: '7%' }}
        gap={{ base: '27px', md: '8px' }}
      >
        <Heading fontSize={{ base: '4xl', md: '7xl' }}>
          Let's work together.
        </Heading>
        <Heading fontSize={{ base: '4xl', md: '7xl' }} opacity={'0.6'}>
          Get in touch.
        </Heading>
        <Flex
          gap={'35px'}
          mt={'13px'}
          alignItems={'center'}
          justifyContent={'space-around'}
          w={'380px'}
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
          <Button
            onClick={() => {
              copyFunction('rickdas2982000@gmail.com');
            }}
            background={'transparent'}
            fontSize={'56px'}
            _hover={{ color: 'gray.500' }}
          >
            <MdMail />
          </Button>
          <Button
            onClick={() => {
              copyFunction(7063282894);
            }}
            background={'transparent'}
            fontSize={'44px'}
            _hover={{ color: 'gray.500' }}
          >
            <FaMobileAlt />
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ContactPage;
