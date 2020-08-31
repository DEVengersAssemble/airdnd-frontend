import React, { useState } from 'react';
import {
  BookmarkListModal,
  NewBookmarkModal,
} from '../../Components/Global/BookmarkModal.js';
import { useSelector, useDispatch } from 'react-redux';
import {
  addBookmarkNewList,
  addBookmarkOldList,
  openNewModal,
  closeListModal,
  closeNewModal,
} from '../../Modules/wishlists';

const BookmarkListModalContainer = () => {
  const { bookmarkLists, listModal } = useSelector(state => state.wishlists);
  const dispatch = useDispatch();
  const closeBmListModal = () => dispatch(closeListModal());
  const openBmNewModal = () => dispatch(openNewModal());
  const onClickBookmark = (homeId, bookmarkListId) =>
    dispatch(addBookmarkOldList(homeId, bookmarkListId));

  return (
    <BookmarkListModal
      modalState={listModal}
      closeBmListModal={closeBmListModal}
      openBmNewModal={openBmNewModal}
      bookmarkLists={bookmarkLists}
      onClickBookmark={onClickBookmark}
    />
  );
};

const NewBookmarkModalContainer = () => {
  const { location } = useSelector(state => state.searchForm);
  const { newModal } = useSelector(state => state.wishlists);
  const [value, setValue] = useState(location);
  const onChange = ({ target }) => setValue(target.value);
  const dispatch = useDispatch();
  const closeBmNewModal = () => dispatch(closeNewModal());
  const onClickNewList = (title, homeId) => {
    dispatch(addBookmarkNewList(title, homeId));
  };

  return (
    <NewBookmarkModal
      value={value}
      modalState={newModal}
      onChange={onChange}
      onClickNewList={onClickNewList}
      closeBmNewModal={closeBmNewModal}
    />
  );
};

export { BookmarkListModalContainer, NewBookmarkModalContainer };
