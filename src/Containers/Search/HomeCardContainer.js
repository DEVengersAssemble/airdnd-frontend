import React from 'react';
import HomeCard from '../../Components/Search/HomeCard';
import { useSelector, useDispatch } from 'react-redux';
import { hoverHome, blurHome, changeHeart } from '../../Modules/search';
import { removeBookmark, openListModal } from '../../Modules/wishlists';

const HomeCardContainer = ({ home, type }) => {
  const { id } = useSelector(state => state.user);
  const { dateDiff } = useSelector(state => state.searchForm);
  const { hoveredHome, mapState } = useSelector(state => state.search);
  const isHovered = hoveredHome === home.homeId;
  const dispatch = useDispatch();

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
    <HomeCard
      home={home}
      type={type}
      isHovered={isHovered}
      dateDiff={dateDiff}
      mapState={mapState}
      onClickHeart={onClickHeart}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
    />
  );
};

export default HomeCardContainer;
