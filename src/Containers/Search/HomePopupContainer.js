import React, { useState } from 'react';
import HomePopup from '../../Components/Search/HomePopup';
import { changeHeart } from '../../Modules/search';
import { removeBookmark, openListModal } from '../../Modules/wishlists';

const HomePopupContainer = ({ home, dateDiff, theme, store }) => {
  const { id } = store.getState().user;
  const dispatch = store.dispatch;
  const [isHovered, setIsHovered] = useState(false);
  const onHoverHome = () => setIsHovered(true);
  const onBlurHome = () => setIsHovered(false);

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
