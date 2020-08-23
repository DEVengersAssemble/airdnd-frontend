import React, { useState } from 'react';
import {
  BookmarkListModal,
  NewBookmarkModal,
} from '../../Components/Global/BookmarkModal.js';
import { useSelector, useDispatch } from 'react-redux';
import { addBookmarkList, addBookmark } from '../../Modules/user';

const BookmarkListModalContainer = ({
  listModalState,
  closeListModal,
  openNewModal,
  homeId,
}) => {
  const { bookmarkLists } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const onClickBookmark = (homeId, bookmarkListId) =>
    dispatch(addBookmark(homeId, bookmarkListId));

  return (
    <BookmarkListModal
      homeId={homeId}
      modalState={listModalState}
      setModalState={closeListModal}
      openNewModal={openNewModal}
      bookmarkLists={bookmarkLists}
      onClickBookmark={onClickBookmark}
    />
  );
};

const NewBookmarkModalContainer = ({
  newModalState,
  closeNewModal,
  closeListModal,
  homeId,
}) => {
  const { location } = useSelector(state => state.searchForm);
  const { bookmarkLists } = useSelector(state => state.user);
  const nextId = bookmarkLists[bookmarkLists.length - 1].bookmarkListId + 1;
  const dispatch = useDispatch();
  const onClickNewList = (title, homeId) => {
    dispatch(addBookmarkList(title, nextId));
    dispatch(addBookmark(homeId, nextId));
  };

  const [value, setValue] = useState(location);
  const onChange = ({ target }) => setValue(target.value);

  return (
    <NewBookmarkModal
      homeId={homeId}
      value={value}
      onChange={onChange}
      onClickNewList={onClickNewList}
      modalState={newModalState}
      setModalState={closeNewModal}
      closeListModal={closeListModal}
    />
  );
};

export { BookmarkListModalContainer, NewBookmarkModalContainer };
