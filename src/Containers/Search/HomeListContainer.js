import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HomeList from '../../Components/Search/HomeList';
import {
  BookmarkListModalContainer,
  NewBookmarkModalContainer,
} from './BookmarkModalContainer';
import HomeContainer from './HomeContainer';
import HomeCardContainer from './HomeCardContainer';

const HomeListContainer = ({ mapState }) => {
  const { homes } = useSelector(state => state.search);
  const { dateDiff } = useSelector(state => state.searchForm);
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
      <HomeList mapState={mapState}>
        {homes.map(home => {
          const onClickBookmark = bookmark => {
            if (bookmark) console.log(bookmark);
            if (!bookmark) openListModal();
          };

          return mapState ? (
            <HomeContainer
              key={home.homeId}
              home={home}
              dateDiff={dateDiff}
              onClickBookmark={onClickBookmark}
            />
          ) : (
            <HomeCardContainer
              key={home.homeId}
              home={home}
              dateDiff={dateDiff}
              onClickBookmark={onClickBookmark}
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
