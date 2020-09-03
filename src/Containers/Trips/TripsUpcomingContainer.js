import React from 'react';
import { useSelector } from 'react-redux';
import TripsUpcoming from '../../Components/Trips/TripsUpcoming';

const TripsUpcomingContainer = () => {
  const trips = useSelector(state => state.trips.reservations);
  const upcomingTrips = trips.filter(trip => {
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

    return !trip.isCanceled && tripState; // 예정된 예약
  });
  const tripsCount = upcomingTrips.length;

  return (
    <TripsUpcoming upcomingTrips={upcomingTrips} tripsCount={tripsCount} />
  );
};

export default TripsUpcomingContainer;
