import React from 'react';
import Wishlist from '../../Components/Wishlists/Wishlist';

const WishlistContainer = ({ bmList, bmListItem }) => {
  const { bookmarkListTitle, homeCount, idx } = bmList;
  const { bookmarkIdx, homeIdx, url, userIdx } = bmListItem;

  return (
    <Wishlist
      bookmarkListTitle={bookmarkListTitle}
      homeCount={homeCount}
      idx={idx}
      bmList={bmList}
    />
  );
};

export default WishlistContainer;
