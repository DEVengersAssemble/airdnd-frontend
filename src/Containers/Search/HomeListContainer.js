import React from 'react';
import { useSelector } from 'react-redux';
import HomeList from '../../Components/Search/HomeList';
import {
  BookmarkListModalContainer,
  NewBookmarkModalContainer,
} from '../Global/BookmarkModalContainer';
import HomeContainer from './HomeContainer';
import HomeCardContainer from './HomeCardContainer';

const HomeListContainer = () => {
  const { homes, mapState } = useSelector(state => state.search);

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
      <BookmarkListModalContainer />
      <NewBookmarkModalContainer />
    </>
  );
};

export default HomeListContainer;
