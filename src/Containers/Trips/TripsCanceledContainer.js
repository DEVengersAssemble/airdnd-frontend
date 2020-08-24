import React from 'react';
import { useSelector } from 'react-redux';
import TripsCanceled from '../../Components/Trips/TripsCanceled';
// import { showReservation } from '../../Modules/trips';

const TripsCanceledContainer = () => {
  const trips = useSelector(state => state.trips.user.reservations);
  console.log(trips);

  const canceledTrips = trips.filter(trip => trip.isCanceled);
  console.log(canceledTrips);

  return <TripsCanceled canceledTrips={canceledTrips} />;
};

export default TripsCanceledContainer;
