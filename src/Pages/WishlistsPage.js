import React from 'react';
import WishlistsHeaderContainer from '../Containers/Trips/TripsHeaderContainer';
import WishlistsMainContainer from '../Containers/Wishlists/WishlistsMainContainer';
import Footer from '../Components/Main/Footer';

const WishlistsPage = () => {
  return (
    <>
      <WishlistsHeaderContainer />
      <WishlistsMainContainer />
      <Footer />
    </>
  );
};

export default WishlistsPage;
