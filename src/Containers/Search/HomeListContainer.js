import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HomeContainer from '../../Containers/Search/HomeContainer';
import HomeList from '../../Components/Search/HomeList';
import {
  BookmarkListModalContainer,
  NewBookmarkModalContainer,
} from './BookmarkModalContainer';

const HomeListContainer = () => {
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
    </>
  );
};

export default HomeListContainer;
