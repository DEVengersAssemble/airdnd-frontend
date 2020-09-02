import React from 'react';
import HomeCard from '../../Components/Search/HomeCard';
import { useSelector, useDispatch } from 'react-redux';
import { hoverHome, blurHome } from '../../Modules/search';
import { toggleBookmark } from '../../lib/bookmarkUtils';

const HomeCardContainer = ({ home, type }) => {
  const { id } = useSelector(state => state.user);
  const { dateDiff } = useSelector(state => state.search.searchForm);
  const { hoveredHome, mapState } = useSelector(state => state.search);
  const isHovered = hoveredHome === home.homeId;
  const dispatch = useDispatch();

  const onHoverHome = () =>
    hoveredHome !== home.homeId && dispatch(hoverHome(home.homeId));
  const onBlurHome = () => dispatch(blurHome());

  return (
    <HomeCard
      home={home}
      type={type}
      isHovered={isHovered}
      dateDiff={dateDiff}
      mapState={mapState}
      onClickHeart={() => toggleBookmark(id, home, dispatch)}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
    />
  );
};

export default React.memo(HomeCardContainer);
