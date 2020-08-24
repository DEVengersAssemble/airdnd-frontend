import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WishlistsMain from '../../Components/Wishlists/WishlistsMain';
import { createBookmarkList } from '../../Modules/wishlists';

const WishlistsMainContainer = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [title, setTitle] = useState('');
  const bmLists = useSelector(state => {
    return state.wishlists;
  });
  const dispatch = useDispatch();

  const onClickPopup = () => {
    setOpenPopup(!openPopup);
  };
  const onChangeTitleInput = e => setTitle(e.target.value);
  const onCreateBookMarkList = () => {
    if (!title) return;
    dispatch(createBookmarkList(title));
    setTitle('');
    setOpenPopup(!openPopup);
  };

  return (
    <WishlistsMain
      bmLists={bmLists}
      title={title}
      onChangeTitleInput={onChangeTitleInput}
      onCreateBookMarkList={onCreateBookMarkList}
      openPopup={openPopup}
      onClickPopup={onClickPopup}
    />
  );
};

export default WishlistsMainContainer;
