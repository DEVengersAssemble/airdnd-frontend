import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HomeContainer from '../../Containers/Search/HomeContainer';
import HomeList from '../../Components/Search/HomeList';
import {
  BookmarkListModalContainer,
  NewBookmarkModalContainer,
} from './BookmarkModalContainer';

const HomeListContainer = () => {
<<<<<<< HEAD
  const homes = useSelector(state => state.search.homes);
  console.log('homes: ', homes);
  return (
    <>
      {homes.map(home => {
        console.log('home: ', home);
        return <Home key={home.homeId} home={home} />;
      })}
=======
  const { homes } = useSelector(state => state.search);
  const [listModalState, setListModalState] = useState(false);
  const [newModalState, setNewModalState] = useState(false);

  const openListModal = () => setListModalState(true);
  const closeListModal = () => setListModalState(false);
  const openNewModal = () => {
    setListModalState(false);
    setNewModalState(true);
  };
  const closeNewModal = () => {
    setNewModalState(false);
    setListModalState(true);
  };

  return (
    <>
      <HomeList>
        {homes.map(home => {
          return (
            <HomeContainer
              key={home.homeId}
              home={home}
              openListModal={openListModal}
            />
          );
        })}
      </HomeList>
      <BookmarkListModalContainer
        listModalState={listModalState}
        closeListModal={closeListModal}
        openNewModal={openNewModal}
      />
      <NewBookmarkModalContainer
        newModalState={newModalState}
        closeNewModal={closeNewModal}
      />
>>>>>>> 6a1609d90b758efe188037199a8a2f0f4c5fb230
    </>
  );
};

export default HomeListContainer;
