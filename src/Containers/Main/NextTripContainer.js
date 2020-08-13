import React from 'react';
import NextTrip from '../../Components/Main/NextTrip';

// store에서 isLoggedIn을 가져와서 isLoggedIn이 true인 경우에만 NextTrip을 보여준다.
// isLoggedIn && <NextTrip />
const NextTripContainer = () => {
  return <NextTrip></NextTrip>;
};

export default NextTripContainer;
