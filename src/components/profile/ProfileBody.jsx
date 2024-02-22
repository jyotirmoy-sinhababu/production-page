import { Flex, Image } from '@chakra-ui/react';

const ProfileBody = ({ data }) => {
  console.log(data);
  return (
    <Flex>
      <Image src={data?.imageURL} />
    </Flex>
  );
};

export default ProfileBody;
