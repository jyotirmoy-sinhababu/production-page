import { Box, Flex, Image } from '@chakra-ui/react';

const Profile = ({ ImgData, isLoading }) => {
  console.log(ImgData.fullName);
  return (
    <Flex>
      <Box>
        <Image src='' alt='' />
      </Box>
      <Box></Box>
    </Flex>
  );
};

export default Profile;
