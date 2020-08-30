import React from 'react';
import HomeCard from '../../Components/Search/HomeCard';
import { useSelector } from 'react-redux';

const HomeCardContainer = ({
  home,
  onClickBookmark,
  dateDiff,
  onHoverHome,
  onBlurHome,
}) => {
  const { hoveredHome } = useSelector(state => state.search);
  const isHovered = hoveredHome === home.homeId;
  return (
    <HomeCard
      home={home}
      isHovered={isHovered}
      onClickBookmark={onClickBookmark}
      dateDiff={dateDiff}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
    />
  );
};

export default HomeCardContainer;
