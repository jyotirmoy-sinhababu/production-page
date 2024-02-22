import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileBody from '../../components/profile/ProfileBody';

import useFetchAllPhotos from '../../hooks/useFetchAllPhotos';

const ProfilePage = () => {
  const { isLoading, allData } = useFetchAllPhotos();
  console.log(allData);
  return (
    <>
      <ProfileHeader />
      {allData?.map((data) => {
        return <ProfileBody data={data} />;
      })}
    </>
  );
};

export default ProfilePage;