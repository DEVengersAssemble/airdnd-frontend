import React, { useState } from 'react';
import { useSeletor } from 'react-redux';
import WishlistsMain from '../../Components/Wishlists/WishlistsMain';

const WishlistsMainContainer = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const onClickPopup = () => {
    setOpenPopup(!openPopup);
  };

  return <WishlistsMain openPopup={openPopup} onClickPopup={onClickPopup} />;
};

export default WishlistsMainContainer;
