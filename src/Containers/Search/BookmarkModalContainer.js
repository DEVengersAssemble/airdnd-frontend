import React from 'react';
import {
  BookmarkListModal,
  NewBookmarkModal,
} from '../../Components/Global/BookmarkModal.js';

const BookmarkListModalContainer = ({
  listModalState,
  closeListModal,
  openNewModal,
}) => {
  return (
    <BookmarkListModal
      modalState={listModalState}
      setModalState={closeListModal}
      openNewModal={openNewModal}
    />
  );
};

const NewBookmarkModalContainer = ({ newModalState, closeNewModal }) => {
  return (
    <NewBookmarkModal
      modalState={newModalState}
      setModalState={closeNewModal}
    />
  );
};

export { BookmarkListModalContainer, NewBookmarkModalContainer };
