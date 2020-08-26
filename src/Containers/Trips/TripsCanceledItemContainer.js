import React from 'react';
import TripsCanceledItem from '../../Components/Trips/TripsCanceledItem';

const TripsCanceledItemContainer = ({ trip }) => {
  const { checkin, checkout } = trip;
  const ciDate = new Date(checkin.split('/'));
  const coDate = new Date(checkout.split('/'));

  const options = {
    month: 'long',
    day: 'numeric',
  };

  const ci = ciDate.toLocaleDateString('ko-KR', options);
  const co = coDate.toLocaleDateString('ko-KR', options);

  return <TripsCanceledItem trip={trip} ci={ci} co={co} />;
};

export default TripsCanceledItemContainer;
