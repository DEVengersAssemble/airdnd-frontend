import React from 'react';
import { useSelector } from 'react-redux';
import MsgDetailSettlementBox from '../../Components/Message/MsgDetailSettlementBox';

const MsgDetailSettlementBoxContainer = () => {
  // ! redux
  const { activeIndex, filteredMsgs } = useSelector(state => state.message);
  const { reservations } = useSelector(state => state.trips);

  // ! variable
  const activeMsg = filteredMsgs.find(
    (_, index) => filteredMsgs[index] === filteredMsgs[activeIndex],
  );

  const reservation = reservations.find(
    reservation =>
      reservation.reservationId === (activeMsg && activeMsg.reservationId),
  );
  return <MsgDetailSettlementBox price={reservation && reservation.price} />;
};

export default MsgDetailSettlementBoxContainer;
