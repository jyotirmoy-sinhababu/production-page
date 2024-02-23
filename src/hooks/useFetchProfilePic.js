import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';
import useShowToast from './useShowToast';

const useFetchProfilePic = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ImgData, setImgData] = useState();
  const showToast = useShowToast();
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(firestore, 'users'));
        querySnapshot.forEach((doc) => {
          setImgData({ ...doc.data() });
        });
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
