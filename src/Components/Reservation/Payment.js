import React from 'react';
import { postReservation } from '../../Api/homeApi';

const Payment = () => {
  const payload = {
    homeId: 43605068,
    checkin: '2020.09.22',
    checkout: '2020.09.25',
    adult: 2,
    child: 1,
    infant: 0,
  };
  const onClick = () => postReservation(payload);

  return (
    <div>
      결제페이지<button onClick={onClick}>post</button>
    </div>
  );
};

export default Payment;
