import useFetchProfilePic from '../../hooks/useFetchProfilePic';

const HomePage = () => {
  const { isLoading, ImgData } = useFetchProfilePic();

  console.log(ImgData?.userName);

  return <>drtfyguhiophbjnkml</>;
};

export default HomePage;
