import React from 'react';
import RecentHomeList from '../../Components/Search/RecentHomeList';
import { useSelector, useDispatch } from 'react-redux';
import { hoverHome, blurHome } from '../../Modules/search';

const RecentHomeListContainer = () => {
  const { recentHomes, mapState, hoveredHome } = useSelector(
    state => state.search,
  );
  const dispatch = useDispatch();
  const onHoverHome = homeId =>
    hoveredHome !== homeId && dispatch(hoverHome(homeId));
  const onBlurHome = () => dispatch(blurHome());

  return (
    <RecentHomeList
      recentHomes={recentHomes}
      mapState={mapState}
      hoveredHome={hoveredHome}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
    />
  );
};

export default RecentHomeListContainer;
