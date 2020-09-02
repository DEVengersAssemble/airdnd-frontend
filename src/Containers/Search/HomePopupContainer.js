import React, { useState } from 'react';
import HomePopup from '../../Components/Search/HomePopup';
import { hoverHome, blurHome, changeHeart } from '../../Modules/search';
import { removeBookmark, openListModal } from '../../Modules/wishlists';

const HomePopupContainer = ({ home, dateDiff, theme, store }) => {
  // const { hoveredHome } = store.getState().search;
  const { id } = store.getState().user;
  const dispatch = store.dispatch;
  const [isHovered, setIsHovered] = useState(false);
  const onHoverHome = () => setIsHovered(true);
  const onBlurHome = () => setIsHovered(false);

  // const onHoverHome = () =>
  // hoveredHome !== home.homeId && dispatch(hoverHome(home.homeId));
  // const onBlurHome = () => dispatch(blurHome());
  const onClickHeart = () => {
    if (!id) return console.log('로그인 해라~~~~~~~~~~~~~ 로그인 팝업 띄우기');
    if (home.isBookmarked) {
      console.log('북마크 없앤다니까 왜 모달 열어', home.isBookmarked);
      dispatch(removeBookmark(home.homeId));
      dispatch(changeHeart(home.homeId));
      return;
    }
    console.log('북마크', home.isBookmarked);
    dispatch(openListModal(home.homeId, home.imageArray[0]));
  };

  return (
    <HomePopup
      home={home}
      store={store}
      dateDiff={dateDiff}
      isHovered={isHovered}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
      onClickHeart={onClickHeart}
      theme={theme}
    />
  );
};

export default React.memo(HomePopupContainer);
