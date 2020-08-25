import React from 'react';
import TripsPastCardItem from '../../Components/Trips/TripsPastCardItem';

const TripsPastCardItemContainer = ({ trip }) => {
  const now = new Date();
  const ci = new Date(trip.checkin);

  return <TripsPastCardItem trip={trip} />;
};

export default TripsPastCardItemContainer;
