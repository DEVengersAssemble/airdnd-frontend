import React from 'react';
import HomeCard from '../../Components/Search/HomeCard';

const HomeCardContainer = ({ home, onClickBookmark, dateDiff }) => {
  return (
    <HomeCard
      home={home}
      onClickBookmark={onClickBookmark}
      dateDiff={dateDiff}
    />
  );
};

export default HomeCardContainer;
