import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import TripsUpcoming from '../../Components/Trips/TripsUpcoming';
import qs from 'qs';
import { fetchTrips } from '../../Modules/trips';

const TripsUpcomingContainer = () => {
  // ! redux
  const { data, loading, error } = useSelector(state => state.trips.trips);
  const dispatch = useDispatch();

  // ! hook
  const location = useLocation();
  const { tab } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  // ! variable
  const upcomingTrips = data && data.upcoming.reservations;
  const tripsCount = data && upcomingTrips.length;

  // ! variable
  // const upcomingTrips = reservation.filter(trip => {
  //   const { checkin, checkout } = trip;
  //   const nowDate = new Date();
  //   const checkinDate = new Date(checkin);
  //   const checkoutDate = new Date(checkout);

  //   // (checkinDate - nowDate < 0 && checkoutDate - nowDate > 0) || checkinDate - nowDate > 0
  //   // => true: 아직 여행중(예정된 예약: Upcoming);
  //   // => false: 여행 끝(지난 예약: Past);

  //   const tripState =
  //     (checkinDate - nowDate < 0 && checkoutDate - nowDate > 0) ||
  //     checkinDate - nowDate > 0;

  //   return !trip.isCanceled && tripState; // 예정된 예약
  // });

  // ! effect
  useEffect(() => {
    dispatch(fetchTrips(tab || 'upcoming'));
  }, [dispatch, tab]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  return (
    <TripsUpcoming upcomingTrips={upcomingTrips} tripsCount={tripsCount} />
  );
};

export default TripsUpcomingContainer;
