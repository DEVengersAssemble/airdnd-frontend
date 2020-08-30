import React from 'react';
import Home from '../../Components/Search/Home';
import { useSelector } from 'react-redux';

const HomeContainer = ({
  home,
  onClickBookmark,
  dateDiff,
  onHoverHome,
  onBlurHome,
}) => {
  const { hoveredHome } = useSelector(state => state.search);
  const isHovered = hoveredHome === home.homeId;

  return (
    <Home
      home={home}
      isHovered={isHovered}
      onClickBookmark={onClickBookmark}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
      dateDiff={dateDiff}
    />
  );
};

export default HomeContainer;
