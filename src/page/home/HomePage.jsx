import Profile from '../../components/profile/profile';
import useFetchProfilePic from '../../hooks/useFetchProfilePic';

const HomePage = () => {
  const { isLoading, ImgData } = useFetchProfilePic();
  // console.log(ImgData);
  return (
    <>
      <Profile isLoading={isLoading} ImgData={ImgData} />
    </>
  );
};

export default HomePage;
