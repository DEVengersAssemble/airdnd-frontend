import React from 'react';
import SubRouter from '../Routers/SubRouter';
import ReservationHeader from '../Components/Reservation/ReservationHeader';

const ReservationPage = () => {
  return (
    <>
      <ReservationHeader />
      <SubRouter />
    </>
  );
};

export default ReservationPage;
