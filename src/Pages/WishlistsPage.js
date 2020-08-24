import React from 'react';
import WishlistsHeader from '../Components/Wishlists/WishlistsHeader';
import WishlistsMainContainer from '../Containers/Wishlists/WishlistsMainContainer';
import Footer from '../Components/Main/Footer';

const WishlistsPage = () => {
  return (
    <>
      <WishlistsHeader />
      <WishlistsMainContainer />
      <Footer />
    </>
  );
};

export default WishlistsPage;
