import React from 'react';
import { useSelector } from 'react-redux';
import TripsUpcomingCardItem from '../../Components/Trips/TripsUpcomingCardItem';

const TripsUpcomingCardItemContainer = ({ trip }) => {
  const myInfo = useSelector(state => state.trips);
  const { checkin, checkout } = trip;
  const ciDate = new Date(checkin);
  const coDate = new Date(checkout);
  const options = { month: 'long', day: 'numeric' };
  const ci = ciDate.toLocaleDateString('ko-KR', options);
  const co = coDate.toLocaleDateString('ko-KR', options);

  return <TripsUpcomingCardItem trip={trip} myInfo={myInfo} ci={ci} co={co} />;
};

export default TripsUpcomingCardItemContainer;
