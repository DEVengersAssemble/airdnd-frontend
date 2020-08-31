import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomePopup from '../../Components/Search/HomePopup';
import { hoverHome, blurHome } from '../../Modules/search';
import { removeBookmark, openListModal } from '../../Modules/wishlists';

const HomePopupContainer = ({ home, dateDiff, theme, store }) => {
  const { hoveredHome } = store.getState().search;
  const { id } = store.getState().user;
  const dispatch = store.dispatch;

  // 주석 풀면 google map could not find react-redux context value 에러 발생
  // const useDispatch = useDispatch();

  const onHoverHome = () =>
    hoveredHome !== home.homeId && dispatch(hoverHome(home.homeId));
  const onBlurHome = () => dispatch(blurHome());
  const onClickHeart = () => {
    console.log('나 눌럿는데ㅠㅠㅠㅠ');
    if (!id) return console.log('로그인 해라~~~~~~~~~~~~~ 로그인 팝업 띄우기');
    if (home.isBookmarked) return dispatch(removeBookmark(home.homeId));
    dispatch(openListModal(home.homeId, home.imageArray[0]));
  };

  return (
    <HomePopup
      home={home}
      dateDiff={dateDiff}
      hover={hoveredHome === home.homeId}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
      onClickHeart={onClickHeart}
      theme={theme}
    />
  );
};

export default HomePopupContainer;
