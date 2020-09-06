import React from 'react';
import { useSelector } from 'react-redux';
import HomeList from '../../Components/Search/HomeList';
import HomeContainer from './HomeContainer';
import HomeCardContainer from './HomeCardContainer';

const HomeListContainer = () => {
  const { mapState } = useSelector(state => state.search);
  const { homes, dataTotal } = useSelector(state => state.search.data);

  return (
    <>
      <HomeList mapState={mapState} dataTotal={dataTotal}>
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
