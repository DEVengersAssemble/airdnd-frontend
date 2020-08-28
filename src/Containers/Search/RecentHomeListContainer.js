import React from 'react';
import RecentHomeList from '../../Components/Search/RecentHomeList';
import { useSelector } from 'react-redux';

const RecentHomeListContainer = () => {
  const { recentHomes, mapState } = useSelector(state => state.search);

  return <RecentHomeList recentHomes={recentHomes} mapState={mapState} />;
};

export default RecentHomeListContainer;
