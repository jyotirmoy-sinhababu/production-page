import { Flex, Box, Text, Button, Divider } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <>
      {' '}
      <Flex alignItems={'center'} justifyContent={'space-between'} h={'65px'}>
        <Box pl={'12px'}>
          <Text fontSize={{ base: '3xl', sm: '2xl' }}>Rick's Photography</Text>
        </Box>
        <Flex alignItems={'center'} justifyContent={'space-around'} w={'298px'}>
          <Button>About me</Button>
          <Button>Contact me</Button>
        </Flex>
      </Flex>
      <Divider my={2} bg={'gray.8000'} />
    </>
  );
};

export default Navbar;
