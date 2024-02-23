import { Box, Flex, Grid, Skeleton, Text, VStack } from '@chakra-ui/react';

import PhotoBody from './PhotoBody';

import useFetchAllPhotos from '../../hooks/useFetchAllPhotos';

const PhotoGallery = () => {
  const { isLoading, allData } = useFetchAllPhotos();

  const noPostsFound = !isLoading && allData.length === 0;
  if (noPostsFound) return <NoPostsFound />;

  return (
    <Grid
      templateColumns={{
        sm: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} alignItems={'flex-start'} gap={4}>
            <Skeleton w={'full'}>
              <Box h='300px'>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && allData.length > 0 ? (
        <>
          {allData?.map((data, index) => (
            <div key={index}>
              <PhotoBody data={data} />
            </div>
          ))}
        </>
      ) : null}
    </Grid>
  );
};

export default PhotoGallery;

const NoPostsFound = () => {
  return (
    <Flex flexDir='column' textAlign={'center'} mx={'auto'} mt={10}>
      <Text fontSize={'2xl'}>No Posts Found🤔</Text>
    </Flex>
  );
};
