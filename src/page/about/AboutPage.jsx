import {
  Avatar,
  VStack,
  AvatarGroup,
  Skeleton,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';

import useFetchProfilePic from '../../hooks/useFetchProfilePic';

const AboutPage = () => {
  const { ImgData } = useFetchProfilePic();
  const { isLoading, allData } = useFetchProfilePic();
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
        <Flex justifyContent={'center'}>
          <Flex flexDir={'column'} gap={'41px'} w={'620px'}>
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
            <Box display={'flex'}>
              <Text fontSize={'2xl'}>
                Welcome to a visual odyssey where style, elegance, and
                creativity converge to form a symphony of captivating imagery. I
                am Rick, a fashion photographer, and within the frames of this
                portfolio, I invite you to experience a world where every image
                is a celebration of aesthetics, personality, and the
                ever-evolving language of style.
              </Text>
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default AboutPage;
