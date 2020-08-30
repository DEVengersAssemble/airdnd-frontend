import React from 'react';
import TripsHeaderContainer from '../Containers/Trips/TripsHeaderContainer';
import TripsMain from '../Components/Trips/TripsMain';
import Footer from '../Components/Main/Footer';

const TripsPage = () => {
  return (
    <>
      <TripsHeaderContainer />
      <TripsMain />
      <Footer />
    </>
  );
};

export default TripsPage;
