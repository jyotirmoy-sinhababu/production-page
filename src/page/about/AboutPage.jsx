import { Avatar, VStack, AvatarGroup, Skeleton, Box } from '@chakra-ui/react';

import useFetchProfilePic from '../../hooks/useFetchProfilePic';

const AboutPage = () => {
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
      )}
    </>
  );
};

export default AboutPage;
