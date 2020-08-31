import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Subject from '../../Components/Detail/Subject';
import HomeInfos from '../../Components/Detail/HomeInfos';
import FullsizeWrapper from '../../Components/Detail/FullsizeWrapper';
import { getHome } from '../../Modules/home';

const Detail = () => {
  const { isLoading, home, error } = useSelector(state => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHome());
  }, [dispatch]);

  // if (isLoading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생! 새로고침을 해주세요</div>;

  return (
    <>
      <Subject isLoading={isLoading || !home} home={home} />
      <HomeInfos isLoading={isLoading || !home} home={home} />
      <FullsizeWrapper isLoading={isLoading || !home} home={home} />
    </>
  );
};

export default Detail;
