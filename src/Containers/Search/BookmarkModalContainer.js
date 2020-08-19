import React, { useState } from 'react';
import {
  BookmarkListModal,
  NewBookmarkModal,
} from '../../Components/Global/BookmarkModal.js';
import { useSelector, useDispatch } from 'react-redux';

const BookmarkListModalContainer = ({
  listModalState,
  closeListModal,
  openNewModal,
}) => {
  const { bookmarkLists } = useSelector(state => state.main);
  return (
    <BookmarkListModal
      modalState={listModalState}
      setModalState={closeListModal}
      openNewModal={openNewModal}
      bookmarkLists={bookmarkLists}
    />
  );
};

const NewBookmarkModalContainer = ({ newModalState, closeNewModal }) => {
  const { place } = useSelector(state => state.searchHistory);
  const [value, setValue] = useState(place);
  const onChange = ({ target }) => setValue(target.value);

  return (
    <NewBookmarkModal
      value={value}
      onChange={onChange}
      modalState={newModalState}
      setModalState={closeNewModal}
    />
  );
};

export { BookmarkListModalContainer, NewBookmarkModalContainer };
