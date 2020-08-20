import React from 'react';
import HomeCard from '../../Components/Search/HomeCard';

const HomeCardContainer = ({ home, onClickBookmark, dateDiff }) => {
  const homeRef = React.useRef();
  return (
    <HomeCard
      home={home}
      homeRef={homeRef}
      onClickBookmark={onClickBookmark}
      dateDiff={dateDiff}
    />
  );
};

export default HomeCardContainer;
