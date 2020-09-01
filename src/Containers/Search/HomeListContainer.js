import React from 'react';
import { useSelector } from 'react-redux';
import HomeList from '../../Components/Search/HomeList';
import HomeContainer from './HomeContainer';
import HomeCardContainer from './HomeCardContainer';

const HomeListContainer = () => {
  const { data, mapState } = useSelector(state => state.search);
  const { homes } = data;

  console.log('data 받아왓다매ㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐ', data);
  console.log(homes);
  return (
    <>
      <HomeList mapState={mapState}>
        {homes.map(home =>
          mapState ? (
            <HomeContainer key={home.homeId} home={home} />
          ) : (
            <HomeCardContainer key={home.homeId} home={home} />
          ),
        )}
      </HomeList>
    </>
  );
};

export default React.memo(HomeListContainer);
