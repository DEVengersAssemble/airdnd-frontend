import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WishlistsMain from '../../Components/Wishlists/WishlistsMain';
import { changeTitleInput, createBookmarkList } from '../../Modules/wishlists';

const WishlistsMainContainer = () => {
  // react-redux
  const bmLists = useSelector(state => {
    console.log(state);
    return state.wishlists.bookmarkLists;
  });
  console.log(bmLists);
  const dispatch = useDispatch();
  const onChangeTitleInput = () => dispatch(changeTitleInput());
  const onCreateBookMarkList = () => dispatch(createBookmarkList());

  // react
  const [openPopup, setOpenPopup] = useState(false);
  const onClickPopup = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <WishlistsMain
      bmLists={bmLists}
      onChangeTitleInput={onChangeTitleInput}
      onCreateBookMarkList={onCreateBookMarkList}
      openPopup={openPopup}
      onClickPopup={onClickPopup}
    />
  );
};

export default WishlistsMainContainer;
