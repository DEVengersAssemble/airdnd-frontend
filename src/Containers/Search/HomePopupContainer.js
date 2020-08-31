import React from 'react';
import HomePopup from '../../Components/Search/HomePopup';
import { hoverHome, blurHome, changeHeart } from '../../Modules/search';
import { removeBookmark, openListModal } from '../../Modules/wishlists';

const HomePopupContainer = ({ home, dateDiff, theme, store }) => {
  const { hoveredHome } = store.getState().search;
  const { id } = store.getState().user;
  const dispatch = store.dispatch;

  const onHoverHome = () =>
    hoveredHome !== home.homeId && dispatch(hoverHome(home.homeId));
  const onBlurHome = () => dispatch(blurHome());
  const onClickHeart = () => {
    if (!id) return console.log('로그인 해라~~~~~~~~~~~~~ 로그인 팝업 띄우기');
    if (home.isBookmarked) {
      dispatch(removeBookmark(home.homeId));
      dispatch(changeHeart(home.homeId));
      return;
    }
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
