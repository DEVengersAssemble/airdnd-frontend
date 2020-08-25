import React from 'react';
import { useSelector } from 'react-redux';
import TripsPast from '../../Components/Trips/TripsPast';

const TripsPastContainer = () => {
  const trips = useSelector(state => state.trips.user.reservations);
  const pastTrips = trips.filter(trip => !trip.isCanceled);
  console.log('pastTrips', pastTrips);

  return <TripsPast pastTrips={pastTrips} />;
};

export default TripsPastContainer;
