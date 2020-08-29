import React from 'react';
import HomeCard from '../../Components/Search/HomeCard';

const HomeCardContainer = ({
  home,
  onClickBookmark,
  dateDiff,
  onHoverHome,
  onBlurHome,
}) => {
  console.log(onHoverHome);
  return (
    <HomeCard
      home={home}
      onClickBookmark={onClickBookmark}
      dateDiff={dateDiff}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
    />
  );
};

export default HomeCardContainer;
