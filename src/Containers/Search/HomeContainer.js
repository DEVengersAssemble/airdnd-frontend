import React from 'react';
import Home from '../../Components/Search/Home';
import { useSelector, useDispatch } from 'react-redux';
import { hoverHome, blurHome } from '../../Modules/search';
import { removeBookmark, openListModal } from '../../Modules/wishlists';

const HomeContainer = ({ home }) => {
  const { id } = useSelector(state => state.user);
  const { dateDiff } = useSelector(state => state.searchForm);
  const { hoveredHome } = useSelector(state => state.search);
  const isHovered = hoveredHome === home.homeId;
  const dispatch = useDispatch();

  const onHoverHome = () =>
    hoveredHome !== home.homeId && dispatch(hoverHome(home.homeId));
  const onBlurHome = () => dispatch(blurHome());
  const onClickHeart = () => {
    if (!id) return console.log('로그인 해라~~~~~~~~~~~~~ 로그인 팝업 띄우기');
    if (home.isBookmarked) return dispatch(removeBookmark(home.homeId));
    dispatch(openListModal(home.homeId, home.imageArray[0]));
  };

  return (
    <Home
      home={home}
      dateDiff={dateDiff}
      isHovered={isHovered}
      onClickHeart={onClickHeart}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
    />
  );
};

export default HomeContainer;
