import { Box, Flex, Image } from '@chakra-ui/react';

import useFetchProfilePic from '../../hooks/useFetchProfilePic';

const Profile = () => {
  const { isLoading, ImgData } = useFetchProfilePic();
  isLoading ? console.log(ImgData) : null;
  return (
    <Flex>
      <Box>
        <Image src='' />
      </Box>
      <Box></Box>
    </Flex>
  );
};

export default Profile;
