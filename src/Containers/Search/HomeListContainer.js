import React from 'react';
import { useSelector } from 'react-redux';
import Home from '../../Components/Search/Home';

const HomeListContainer = () => {
  const homes = useSelector(state => state.search.homes);
  console.log('homes: ', homes);
  return (
    <>
      {homes.map(home => {
        console.log('home: ', home);
        return <Home key={home.homeId} home={home} />;
      })}
    </>
  );
};

export default HomeListContainer;
