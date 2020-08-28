import React from 'react';
import HomePopup from '../../Components/Search/HomePopup';
import { useSelector } from 'react-redux';

const HomePopupContainer = ({ homeId, dateDiff }) => {
  const { homes } = useSelector(state => state.search);
  const [home] = homes.filter(home => home.homeId === homeId);

  return <HomePopup home={home} dateDiff={dateDiff} />;
};

export default HomePopupContainer;
