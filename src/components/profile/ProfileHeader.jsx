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
          pt={{ base: '41px', md: '96px' }}
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: '4%', md: '7%' }}
        >
          <AvatarGroup
            size={{ base: 'xl', md: 'xl' }}
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
          <Box
            display={'flex'}
            flexDir={'column'}
            justifyContent={'center'}
            mx={'auto'}
            gap={{ base: '3%', md: '2%' }}
            w={'45%'}
          >
            <Text fontSize={{ base: 'xl', md: '3xl' }}>
              Hi I am {ImgData?.fullName}
            </Text>
            <Text fontSize={{ base: '2xl', md: '6xl' }}>{ImgData?.bio}</Text>
            <FloatingIsland />
          </Box>
        </Flex>
      )}
    </>
  );
};

export default ProfileHeader;
