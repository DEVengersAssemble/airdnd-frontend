import React from 'react';
import Home from '../../Components/Search/Home';

const HomeContainer = ({ home, onClickBookmark, dateDiff, onHoverHome }) => {
  return (
    <Home
      home={home}
      onClickBookmark={onClickBookmark}
      onHoverHome={onHoverHome}
      dateDiff={dateDiff}
    />
  );
};

export default HomeContainer;
