import React from 'react';
import Home from '../../Components/Search/Home';
import { useSelector, useDispatch } from 'react-redux';
import { hoverHome, blurHome, changeHeart } from '../../Modules/search';
import { removeBookmark, openListModal } from '../../Modules/wishlists';
import { openModal } from '../../Modules/modal';

const HomeContainer = ({ home }) => {
  const { id } = useSelector(state => state.user);
  const { dateDiff } = useSelector(state => state.search.searchForm);
  const { hoveredHome } = useSelector(state => state.search);
  const isHovered = hoveredHome === home.homeId;
  const dispatch = useDispatch();

  const onHoverHome = () =>
    hoveredHome !== home.homeId && dispatch(hoverHome(home.homeId));
  const onBlurHome = () => dispatch(blurHome());
  const onClickHeart = () => {
    if (!id) return dispatch(openModal());
    if (home.isBookmarked) {
      dispatch(removeBookmark(home.homeId));
      console.log(home.homeId, '하트색좀 바꿔조라ㅠㅠ');
      dispatch(changeHeart(home.homeId));
      return;
    }
    dispatch(openListModal(home.homeId, home.imageArray[0]));
    console.log(home.homeId, home.isBookmarked, '하트색좀 바꿔조라ㅠㅠ');
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

export default React.memo(HomeContainer);
