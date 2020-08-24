import React from 'react';
import TripsCanceledItem from '../../Components/Trips/TripsCanceledItem';

const TripsCanceledItemContainer = ({ trip }) => {
  const { reservationId, image, title, location, checkin, checkout } = trip;

  console.log(checkin.split('/'), checkout);

  const ciDate = new Date(checkin.split('/'));
  const coDate = new Date(checkout.split('/'));
  const options = {
    month: 'long',
    day: 'numeric',
  };
  const ci = ciDate.toLocaleDateString('ko-KR', options);
  const co = coDate.toLocaleDateString('ko-KR', options);
  const img = image[0];

  return (
    <TripsCanceledItem
      reservationId={reservationId}
      image={img}
      title={title}
      location={location}
      ci={ci}
      co={co}
    />
  );
};

export default TripsCanceledItemContainer;
