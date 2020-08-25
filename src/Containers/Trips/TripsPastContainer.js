import React from 'react';
import { useSelector } from 'react-redux';
import TripsPast from '../../Components/Trips/TripsPast';

const TripsPastContainer = () => {
  const trips = useSelector(state => state.trips.reservations);
  const pastTrips = trips.filter(trip => {
    const { checkin, checkout } = trip;
    const nowDate = new Date();
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    // (checkinDate - nowDate < 0 && checkoutDate - nowDate > 0) || checkinDate - nowDate > 0
    // => true: 아직 여행중(예정된 예약: Upcoming);
    // => false: 여행 끝(지난 예약: Past);

    const tripState =
      (checkinDate - nowDate < 0 && checkoutDate - nowDate > 0) ||
      checkinDate - nowDate > 0;

    return !trip.isCanceled && !tripState; // 지난 예약
  });
  const tripsCount = pastTrips.length;
  return <TripsPast pastTrips={pastTrips} tripsCount={tripsCount} />;
};

export default TripsPastContainer;
