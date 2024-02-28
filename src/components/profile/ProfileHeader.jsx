import {
  Box,
  Flex,
  Text,
  Skeleton,
  VStack,
  AvatarGroup,
  Avatar,
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
      {!isLoading && (
        <Flex
          pt={{ base: '7px', md: '36px' }}
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: '6%', md: '7%' }}
          justifyContent={'center'}
          alignItems={'center'}
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
            mx={'auto'}
            gap={{ base: '13%', md: '2%' }}
            w={{ base: '100vw', md: '45%' }}
            pl={{ base: '23%', md: '0' }}
          >
            <Flex flexDir={'column'} pt={'2%'}>
              <Text fontSize={{ base: '2xl', md: '3xl' }}>
                Hi I am {ImgData?.fullName}
              </Text>
              <Text fontSize={{ base: '3xl', md: '6xl' }}>{ImgData?.bio}</Text>
            </Flex>
            <Box pt={'4%'}>
              <FloatingIsland />
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default ProfileHeader;
