import React from 'react';
import Home from '../../Components/Search/Home';

const HomeContainer = ({ home, onClickBookmark, dateDiff }) => {
  return (
    <Home home={home} onClickBookmark={onClickBookmark} dateDiff={dateDiff} />
  );
};

export default HomeContainer;
