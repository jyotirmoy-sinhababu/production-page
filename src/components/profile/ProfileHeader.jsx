import { Box, Flex, Image, Text, Skeleton, VStack } from '@chakra-ui/react';

import useFetchProfilePic from '../../hooks/useFetchProfilePic';

const ProfileHeader = () => {
  const { isLoading, ImgData } = useFetchProfilePic();
  console.log(ImgData);

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
          justifyContent={'space-around'}
          pt={'21px'}
          flexDir={{ base: 'column', md: 'row' }}
        >
          <Box>
            <Image w={'511px'} h={'450px'} src={ImgData?.profilePicURL} />
          </Box>
          <Box display={'flex'} flexDir={'column'} justifyContent={'center'}>
            <Text fontSize='3xl'>Hi I am {ImgData?.fullName}</Text>
            <Text fontSize='6xl'>{ImgData?.bio}</Text>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default ProfileHeader;
