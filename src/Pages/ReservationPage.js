import React from 'react';
import ReservationSubRouter from '../Routers/ReservationSubRouter';
import ReservationHeader from '../Components/Reservation/ReservationHeader';

const ReservationPage = () => {
  return (
    <>
      <ReservationHeader />
      <ReservationSubRouter />
    </>
  );
};

export default ReservationPage;
