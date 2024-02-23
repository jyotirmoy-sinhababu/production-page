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
        <Flex pt={'95px'} flexDir={{ base: 'column', md: 'row' }} gap={'7%'}>
          <AvatarGroup
            size={{ base: 'xl', md: 'xl' }}
            justifySelf={'center'}
            alignSelf={'flex-start'}
            mx={'auto'}
          >
            <Avatar
              w={{ base: '200px', sm: '400px' }}
              h={{ base: '200px', sm: '400px' }}
              src={ImgData?.profilePicURL}
            />
          </AvatarGroup>
          <Box
            display={'flex'}
            flexDir={'column'}
            justifyContent={'center'}
            mx={'auto'}
          >
            <Text fontSize='3xl'>Hi I am {ImgData?.fullName}</Text>
            <Text fontSize='6xl'>{ImgData?.bio}</Text>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default ProfileHeader;
