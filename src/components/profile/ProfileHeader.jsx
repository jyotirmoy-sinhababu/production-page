import {
  Box,
  Flex,
  Text,
  Skeleton,
  VStack,
  AvatarGroup,
  Avatar,
  Heading,
} from '@chakra-ui/react';

import useFetchProfilePic from '../../hooks/useFetchProfilePic';

import FloatingIsland from '../floatingIsland/FloatingIsland';

const ProfileHeader = () => {
  const { isLoading, ImgData } = useFetchProfilePic();

  return (
    <>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} alignItems={'flex-start'} gap={4}>
            <Skeleton w={'full'}>
              <Box h='300px'>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading ? (
        <Flex
          pt={{ base: '7px', md: '36px' }}
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: '6%', md: '28%' }}
          ml={{ base: '0px', sm: '55px' }}
          justifyContent={{ base: 'center', md: 'space-between' }}
        >
          <AvatarGroup
            justifySelf={'center'}
            alignSelf={'flex-start'}
            mx={'auto'}
          >
            <Avatar
              w={{ base: '210px', md: '400px' }}
              h={{ base: '210px', md: '400px' }}
              src={ImgData?.profilePicURL}
            />
          </AvatarGroup>
          <Flex
            flexDir={{ base: 'column-reverse', md: 'column' }}
            gap={{ base: '11%', md: '2%' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <Flex
              flexDir={'column'}
              pt={'2%'}
              justifyContent={{ base: 'center', md: 'flex-start' }}
              alignItems={{ base: 'center', md: 'flex-start' }}
            >
              <Heading fontSize={{ base: '2xl', md: '3xl' }}>
                Hi I am {ImgData?.fullName}
              </Heading>
              <Text
                textAlign={{ base: 'center', md: 'inherit' }}
                fontSize={{ base: '3xl', md: '5xl' }}
                w={{ base: 'auto', md: '70%' }}
              >
                {ImgData?.bio}
              </Text>
            </Flex>
            <Box pt={'4%'}>
              <FloatingIsland />
            </Box>
          </Flex>
        </Flex>
      ) : (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Text>Something Went Wrong.</Text>
        </Box>
      )}
    </>
  );
};

export default ProfileHeader;
