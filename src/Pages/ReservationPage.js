import React from 'react';
import ReservationSubRouter from '../Routers/ReservationSubRouter';
import ReservationHeader from '../Components/Reservation/ReservationHeader';
import ReservationFooter from '../Components/Reservation/ReservationFooter';

const ReservationPage = () => {
  return (
    <>
      <ReservationHeader />
      <ReservationSubRouter />
      <ReservationFooter />
    </>
  );
};

export default ReservationPage;
