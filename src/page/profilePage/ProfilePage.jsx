import ProfileHeader from '../../components/profile/ProfileHeader';

import { Flex } from '@chakra-ui/react';

import PhotoGallery from '../../components/profile/PhotoGallery';

const ProfilePage = () => {
  return (
    <>
      <ProfileHeader />
      <div style={{ marginTop: '124px' }}>
        {' '}
        <Flex
          px={{ base: 2, sm: 4 }}
          maxW={'full'}
          mx={'auto'}
          borderTop={'1px solid'}
          borderColor={'whiteAlpha.300'}
          direction={'column'}
        >
          <PhotoGallery />
        </Flex>
      </div>
    </>
  );
};

export default ProfilePage;
