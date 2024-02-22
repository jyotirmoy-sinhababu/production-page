import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../firebase/Firebase';
import useShowToast from './useShowToast';

const useFetchAllPhotos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allData, setAllData] = useState();
  const showToast = useShowToast();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        // const allImg = [];
        const querySnapshot = await getDocs(collection(firestore, 'posts'));
        querySnapshot.forEach((doc) => {
          setAllData({ ...doc.data() });
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
  return { isLoading, allData };
};

export default useFetchAllPhotos;
