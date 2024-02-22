import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';
import useShowToast from './useShowToast';

const useFetchProfilePic = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ImgData, setImgData] = useState();
  // const posts = useSelector((state) => state.post.posts);
  // const authUser = useSelector((state) => state.auth.user);
  const showToast = useShowToast();
  // const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        // const allImg = [];
        const querySnapshot = await getDocs(collection(firestore, 'users'));
        querySnapshot.forEach((doc) => {
          setImgData({ ...doc.data() });
        });
        // setImgData(allImg);
      } catch (error) {
        showToast('Error', error.message, 'error');
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return {
    isLoading,
    ImgData,
  };
};

export default useFetchProfilePic;