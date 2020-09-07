import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import TripsPast from '../../Components/Trips/TripsPast';
import qs from 'qs';
import { fetchTrips } from '../../Modules/trips';

const TripsPastContainer = () => {
  // // ! redux
  // const dispatch = useDispatch();
  // const { data, error, loading } = useSelector(state => state.trips.trips);

  // ! hook
  const location = useLocation();
  const { tab } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(tab);

  const reservation = useSelector(state => state.trips.reservations);
  const pastTrips = reservation.filter(trip => {
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

  // // ! effect
  // useEffect(() => {
  //   dispatch(fetchTrips(tab || 'upcoming'));
  // }, [dispatch, tab]);

  // if (loading) return <div>로딩중...</div>;
  // if (error) return <div>Error...</div>;
  // if (!data) return null;

  return <TripsPast pastTrips={pastTrips} tripsCount={tripsCount} />;
};

export default TripsPastContainer;
