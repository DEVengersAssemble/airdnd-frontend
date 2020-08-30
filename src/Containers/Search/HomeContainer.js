import React from 'react';
import Home from '../../Components/Search/Home';

const HomeContainer = ({
  home,
  onClickBookmark,
  dateDiff,
  onHoverHome,
  onBlurHome,
}) => {
  return (
    <Home
      home={home}
      onClickBookmark={onClickBookmark}
      onHoverHome={onHoverHome}
      onBlurHome={onBlurHome}
      dateDiff={dateDiff}
    />
  );
};

export default HomeContainer;
