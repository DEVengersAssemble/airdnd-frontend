import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Home from '../../Components/Search/Home';

const HomeContainer = ({ home, onClickBookmark }) => {
  const { dateDiff } = useSelector(state => state.searchForm);

  return (
    <Home home={home} openListModal={onClickBookmark} dateDiff={dateDiff} />
  );
};

export default HomeContainer;
